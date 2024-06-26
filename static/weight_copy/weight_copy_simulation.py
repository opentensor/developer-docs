import bittensor as bt
import seaborn as sns
import scipy
from utils import *
import torch
import time
import copy
from multiprocessing.pool import ThreadPool
from concurrent.futures import ThreadPoolExecutor, ProcessPoolExecutor
from experiment_setup import ExperimentSetup
import time
import os
import pickle
import argparse


import torch.multiprocessing as mp


class WeightCopySimulation:
    def __init__(self, setup = None):
        if setup != None:
            self.setup = setup
        else:
            self.get_parse()
            self.setup = ExperimentSetup(
                processes=1,
                result_path=f'./liquid_alpha_results_al{setup.alpha_low:.2f}',
                netuids = range(self.args.start_netuid, self.args.end_netuid)
            )
        self.metas = self.get_metagraphs()

    def get_parse(self):
        parser = argparse.ArgumentParser(description='Process some integers.')
        parser.add_argument('--start_netuid', type=int, default = 1)
        parser.add_argument('--end_netuid', type=int, default = 33)
        self.args = parser.parse_args()
        print(self.args)

    def get_metagraphs(self):
        def load_metagraph(file_name, netuid, block):
            meta = torch.load(file_name)
            return meta

        metas = {}

        # === Collect metagraphs that has to be loaded ===
        args = []
        for netuid in self.setup.netuids:
            metas[netuid] = {}
            for data_point in range(self.setup.data_points):
                block = self.setup.start_block + self.setup.tempo * data_point
                file_name = f"{self.setup.metagraph_storage_path}/netuid{netuid}_block{block}.pt"
                args.append((file_name, netuid, block))

                for conceal_period in self.setup.conceal_periods:
                    block = self.setup.start_block + self.setup.tempo * (
                        data_point + conceal_period
                    )
                    file_name = f"{self.setup.metagraph_storage_path}/netuid{netuid}_block{block}.pt"
                    args.append((file_name, netuid, block))

        # === Load metagraphs with multiprocessing ===
        with ThreadPool() as pool:
            results = pool.starmap(load_metagraph, args)

        # === Sort out the metagraphs into a dict ===
        for meta, (file_name, netuid, block) in zip(results, args):
            if netuid not in metas:
                metas[netuid] = {}
            metas[netuid][block] = meta

        return metas

    def get_base_simulate(self, netuid):
        file_name = f"{self.setup.result_path}/yuma_result_netuid{netuid}_base.pkl"
        with open(file_name, "rb") as handle:
            yuma_results = pickle.load(handle)

        return yuma_results

    def base_simulate(self, netuid, metas):
        file_name = f"{self.setup.result_path}/yuma_result_netuid{netuid}_base.pkl"

        if os.path.isfile(file_name):
            return 

        # === Simulate the early blocks ===
        yuma_results = {}
        meta_0 = list(metas.values())[0]
        validators = meta_0.validator_trust > 0

        # === Setup for the scope of simulation ===
        early_blocks = [
            self.setup.start_block + self.setup.tempo * data_point
            for data_point in range(self.setup.data_points)
        ]

        start_time = time.time()
        for i, block in enumerate(early_blocks):
            meta = metas[block]
            S_bad = torch.cat((meta.S[validators], meta.S[validators].median().view(1)))

            if i == 0:
                B_old = None
            else:
                B_old = yuma_results[block - self.setup.tempo]["validator_ema_bond"]

            W_bad = torch.cat(
                (
                    meta.W[validators],
                    (torch.ones(meta.W.shape[1]) / meta.W.shape[1]).view(1, -1),
                )
            )

            yuma_result = Yuma2(
                W_bad, 
                S_bad, 
                B_old=B_old, 
                liquid_alpha= self.setup.liquid_alpha,
                alpha_low = self.setup.alpha_low,
                alpha_high = self.setup.alpha_high
            )
            yuma_results[block] = yuma_result

            start_time = time.time()

        # === Save the stat ===
        with open(
            file_name,
            "wb",
        ) as f:
            pickle.dump(yuma_results, f)

        return yuma_results

    def simulate(self, netuid, conceal_period, metas):
        yuma_file_name = f"{self.setup.result_path}/yuma_result_netuid{netuid}_conceal{conceal_period}.pkl"
        similarity_file_name = f"{self.setup.result_path}/similarity_netuid{netuid}_conceal{conceal_period}.pt"
        
        if os.path.isfile(yuma_file_name): # and os.path.isfile(similarity_file_name):
            return 
        
        yuma_results = {}
        meta_0 = list(metas.values())[0]
        validators = meta_0.validator_trust > 0

        # === Setup for the scope of simulation ===
        early_blocks = [
            self.setup.start_block + self.setup.tempo * data_point
            for data_point in range(self.setup.data_points)
        ]

        late_blocks = [
            self.setup.start_block + self.setup.tempo * (data_point + conceal_period)
            for data_point in range(self.setup.data_points)
        ]

        yuma_results = self.get_base_simulate(netuid)

        # === Simulate for the late blocks ===
        start_time = time.time()
        for i, (early_block, late_block) in enumerate(zip(early_blocks, late_blocks)):
            meta = metas[late_block]
            S_bad = torch.cat((meta.S[validators], meta.S[validators].median().view(1)))

            if i == 0:
                B_old = None
            else:
                B_old = yuma_results[late_block - self.setup.tempo][
                    "validator_ema_bond"
                ].detach().clone()

            W_bad = torch.cat(
                (
                    meta.W[validators],
                    yuma_results[early_block]["server_consensus_weight"].view(1, -1),
                )
            )
            yuma_result = Yuma2(
                W_bad, 
                S_bad, 
                B_old=B_old, 
                liquid_alpha=self.setup.liquid_alpha,
                alpha_low = self.setup.alpha_low,
                alpha_high = self.setup.alpha_high
            )
            yuma_results[late_block] = yuma_result

            start_time = time.time()

        # === Save the stat ===
        with open(
            yuma_file_name,
            "wb",
        ) as f:
            pickle.dump(yuma_results, f)

        # === Get similarity ===
        similarity = get_experiment_weight_similarities(
            metas, validators, early_blocks, late_blocks
        )
        torch.save(
            similarity,
            similarity_file_name,
        )

        return

    def wrap_simulate(self, netuid, metas):
        for conceal_period in self.setup.conceal_periods:
            try:
                self.simulate(netuid, conceal_period, metas)
            except Exception as e:
                print(e)
    
    def run_simulation(self):
        # === Collect all simulations per netuid per conceal period ===
        args = []
        
        for netuid in self.setup.netuids:
            try:
                self.base_simulate(netuid, self.metas[netuid])
            except Exception as e:
                print(e)
        
        with ThreadPoolExecutor(max_workers=self.setup.processes) as e:
            for netuid in self.setup.netuids:
                e.submit(self.wrap_simulate, netuid, self.metas[netuid])


if __name__ == "__main__":
    sim = WeightCopySimulation()
    sim.run_simulation()