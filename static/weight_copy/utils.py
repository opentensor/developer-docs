import torch
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
import random
import time
import pickle
import math


def init_weight(n_validators, n_miners, std=0.06):
    W = torch.zeros(n_validators, n_miners + n_validators)
    W_base = torch.rand(n_miners + n_validators)

    for uid, w in enumerate(W_base.tolist()):
        if w < 0.4:
            W[:, uid] = torch.normal(0.2, std, size=(1, n_validators))
        elif w < 0.7:
            W[:, uid] = torch.normal(0.7, std, size=(1, n_validators))
        else:
            W[:, uid] = torch.normal(0.85, std, size=(1, n_validators))

    W[:, -n_validators:] = 0
    W = W.clip(min=0, max=1)
    W = (W.T / W.sum(dim=1)).T
    return W


def randomize_weight(W, scale):
    W = W.clone()
    n_validators = W.shape[0]
    for uid in range(W.shape[1]):
        sign = random.random() > 0.5
        w = W[:, uid].clone() * scale
        diff = torch.normal(0, w).flatten()
        W[:, uid] += sign * diff.abs()

    W[:, -n_validators:] = 0
    W = W.clip(min=0, max=100)
    W = (W.T / W.sum(dim=1)).T
    return W


def create_simulated_weight(n_validators, n_miners, sim_length, scale=20):
    Ws = []
    W = init_weight(n_validators, n_miners)
    Ws.append(W)
    for i in range(sim_length):
        W = randomize_weight(W, scale)
        Ws.append(W)
    return Ws


def get_weight_similarity(
    weights, netuid=None, blocks_apart=None, plot=False, axs=None
):
    similarities = []
    for idx, weight in enumerate(weights):
        if idx == 0:
            continue
        sim = torch.cosine_similarity(weights[idx], weights[idx - 1])
        similarities.append(sim)

    similarities = torch.concat(similarities)

    if plot and axs == None:
        plt.figure(figsize=(15, 8), dpi=80)
        plt.hist(similarities, bins=100)
        plt.ylabel("count")
        plt.xlabel("cosine similarity")
        plt.title(f"similarity in weights".title())

    elif plot and axs != None:
        axs.hist(similarities, bins=20)
        axs.title.set_text(
            f"SN {netuid} | {blocks_apart:.0f} blocks apart | {similarities.mean():.5f} similarity".title()
        )
    return similarities


def get_blocks_apart_from_metagraph(metas):
    blocks = [meta.block for idx, meta in metas.items()]
    blocks_apart = [a - b for a, b in zip(blocks[1:], blocks[:-1])]
    blocks_apart = sum(blocks_apart) / len(blocks_apart)
    return blocks_apart


def get_weight_from_metagraph(metas, validators):
    return [meta.W[validators] for idx, meta in metas.items()]


def get_metagraph_weight_similarities(metas, validators, plot=False, axs=None):
    return get_weight_similarity(
        weights=get_weight_from_metagraph(metas, validators),
        netuid=list(metas.items())[0][1].netuid,
        blocks_apart=get_blocks_apart_from_metagraph(metas),
        plot=plot,
        axs=axs,
    )


def get_experiment_weight_similarities(metas, validators, early_blocks, late_blocks):
    similarity = []
    for early_block, late_block in list(zip(early_blocks, late_blocks))[:5]:
        similarity += [
            get_metagraph_weight_similarities(
                {early_block: metas[early_block], late_block: metas[late_block]},
                validators=validators,
                plot=False,
            )
        ]
    similarity = torch.stack(similarity)
    return similarity


def metagraphs_commit_reveal_sim(metas, conceal_period, setup):
    start_block = setup.start_block
    data_points = setup.data_points
    tempo = setup.tempo

    start_time = time.time()
    stats = {}
    meta_0 = list(metas.values())[0]
    similarity = []

    validators = meta_0.validator_trust > 0
    early_blocks = [
        start_block + tempo * data_point for data_point in range(data_points)
    ]
    late_blocks = [
        start_block + tempo * (data_point + conceal_period)
        for data_point in range(data_points)
    ]

    for early_block, late_block in list(zip(early_blocks, late_blocks))[:5]:
        similarity += [
            get_metagraph_weight_similarities(
                {early_block: metas[early_block], late_block: metas[late_block]},
                validators=validators,
                plot=False,
            )
        ]

    similarity = torch.stack(similarity)

    print(
        f"{time.time() - start_time:.2f} | netuid: {meta_0.netuid} | conceal_period: {conceal_period} | finished similarity calculation"
    )
    start_time = time.time()
    for i, block in enumerate(early_blocks):
        meta = metas[block]
        S_bad = torch.cat((meta.S[validators], meta.S[validators].median().view(1)))

        if i == 0:
            B_old = None
        else:
            B_old = stats[block - tempo]["validator_ema_bond"]

        W_bad = torch.cat(
            (
                meta.W[validators],
                (torch.ones(meta.W.shape[1]) / meta.W.shape[1]).view(1, -1),
            )
        )

        stat = Yuma2(W_bad, S_bad, B_old=B_old)
        stats[block] = stat

    for i, (early_block, late_block) in enumerate(zip(early_blocks, late_blocks)):
        meta = metas[late_block]
        S_bad = torch.cat((meta.S[validators], meta.S[validators].median().view(1)))

        if i == 0:
            B_old = None
        else:
            B_old = stats[late_block - tempo]["validator_ema_bond"]

        W_bad = torch.cat(
            (
                meta.W[validators],
                stats[early_block]["server_consensus_weight"].view(1, -1),
            )
        )

        stat = Yuma2(W_bad, S_bad, B_old=B_old)
        stats[late_block] = stat

    print(
        f"{time.time() - start_time:.2f} | netuid: {meta_0.netuid} | conceal_period: {conceal_period} | finished yuma calculation"
    )
    start_time = time.time()
    divident = [
        (s["validator_reward_normalized"] / s["stake"]).tolist()
        for idx, s in stats.items()
    ]

    divident_df = pd.DataFrame(
        divident, columns=[f"v{i}" for i in range(sum(validators))] + ["v_bad"]
    )
    cols = [f"v{i}" for i in range(sum(validators))] + ["v_bad"]

    div_mean = divident_df.mean()
    div_honest = div_mean[:-1]
    div_lost = div_mean[-1] / div_honest.median()
    similarity = similarity.mean().item()

    with open(
        f"{setup.result_path}/stats_netuid{meta_0.netuid}_conceal{conceal_period}.pkl",
        "wb",
    ) as f:
        pickle.dump(stats, f)

    print(
        f"netuid: {meta_0.netuid}, conceal period (number of tempos): {conceal_period}, conceal period(hours): {conceal_period * tempo / 300:.2f}, similarity: {similarity:.3f}, lost in dividend: {div_lost:.3f}"
    )
    return similarity, div_lost


def Yuma2(W, S, B_old=None, kappa=0.5, bond_penalty=1, bond_alpha=0.1, liquid_alpha = False, alpha_high = 0.9, alpha_low = 0.7, precision = 100000, override_consensus_high = None, override_consensus_low = None):
    # === Weight === 
    W = (W.T / (W.sum(dim=1) +  1e-6)).T
    
    # === Stake ===
    S = S / S.sum()

    # === Prerank ===
    P = (S.view(-1, 1) * W).sum(dim=0)

    # === Consensus ===
    C = torch.zeros(W.shape[1])

    for i, miner_weight in enumerate(W.T):
        c_high = 1
        c_low = 0
        
        while (c_high - c_low) > 1/precision:
            c_mid = (c_high + c_low) / 2

            _c_sum = (miner_weight > c_mid) * S
            if sum(_c_sum) > kappa:
                c_low = c_mid
            else:
                c_high = c_mid

        C[i] = c_high

    C = (C / C.sum() * 65535).int() / 65535

    # === Consensus cliped weight ===
    W_clipped = torch.min(W, C)

    # === Rank ===
    R = (S.view(-1, 1) * W_clipped).sum(dim=0)

    # === Incentive ===
    I = (R / R.sum()).nan_to_num(0)

    # === Trusts ===
    T = (R / P).nan_to_num(0)
    T_v = (W_clipped).sum(dim=1) / W.sum(dim=1)

    # === Bonds ===
    W_b = (1 - bond_penalty) * W + bond_penalty * W_clipped
    B = S.view(-1, 1) * W_b / (S.view(-1, 1) * W_b).sum(dim=0)
    B = B.nan_to_num(0)

    a = b = None
    if liquid_alpha:
        if override_consensus_high == None:
            consensus_high = C.quantile(0.75)
        else:
            consensus_high = override_consensus_high 
        
        if override_consensus_low == None:
            consensus_low = C.quantile(0.25)
        else:
            consensus_low = override_consensus_low 

        if consensus_high == consensus_low:
            consensus_high = C.quantile(0.99)
        a = (math.log(1/alpha_high - 1) - math.log(1/ alpha_low - 1) ) / (consensus_low - consensus_high) 
        b = math.log(1/ alpha_low - 1) + a * consensus_low 
        alpha = 1 / (1 + math.e **(-a *C + b)) # alpha to the old weight
        bond_alpha = 1 - torch.clip(alpha, alpha_low, alpha_high)

    if B_old != None:
        B_ema = bond_alpha * B + (1 - bond_alpha) * B_old
    else:
        B_ema = B

    # === Dividend ===
    D = (B_ema * I).sum(dim=1)
    D_normalized = D / D.sum()

    return {
        "weight": W,
        "stake": S,
        "server_prerank": P,
        "server_consensus_weight": C,
        "consensus_clipped_weight": W_clipped,
        "server_rank": R,
        "server_incentive": I,
        "server_trust": T,
        "validator_trust": T_v,
        "weight_for_bond": W_b,
        "validator_bond": B,
        "validator_ema_bond": B_ema,
        "validator_reward": D,
        "validator_reward_normalized": D_normalized,
        "bond_alpha": bond_alpha,
        "alpha_a": a,
        "alpha_b": b
    }