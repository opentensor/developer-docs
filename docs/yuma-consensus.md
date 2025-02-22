---
title: "Yuma Consensus"
---

# Yuma Consensus

## Introduction

Yuma Consensus (YC) is a critical algorithmic process within Bittensor, which runs on-chain within Subtensor. Its responsibility is to compute validator and miner emissions from validators' rankings of miners.

Each of a subnet's validators periodically submit a vector of weights ranking the value of the work of each miner they've evaluated. The YC algorithm resolves this matrix of rankings into two **emissions vectors** that allocate emissions over participants based on their performance: one each for **miners** and **validators**.

The algorithm is designed to more heavily weight the inputs of more trusted validators, in order to ignore the portion of the validation signal that is less reliable. By disregarding unreliable weight-settings, YC incentivizes validators to be worthy of trust by working hard to give fast, honest evaluations of miners that predict the eventual convergence of other validators' evaluations. YC incentivizes miners to work hard for the highest combined evaluation by the community of validators.

See:
- [Emissions](./emissions)
- [Subtensor Docs: Yuma Consensus](https://github.com/opentensor/subtensor/blob/main/docs/consensus.md)

## Clipping

Clipping is designed to punish innacurate miner evaluation, especially in patterns that could constitute collusion to manipulate the accuracy of consensus to favor certain miners.

To achieve this, the judgment of the most trusted validators (as measured by stake) serves as a benchmark. Evaluations (bonds) that exceed this benchmark are *clipped*, meaning neither the miner nor the validator receives emissions for them.

This clipping protects against erroneous or collusive over-evaluation of miners by validators.

To compute the benchmark $\overline{W_j}$ for miner $j$, we gather all validator weights $W_{ij}$, sort them by the validator’s **stake** $S_i$, and then find the maximum weight level $w$ supported by at least a fraction $\kappa$ of total stake. Kappa is a configurable hyperparameter with default: $\kappa = 0.5$. 

$$
\overline{W_j} = \arg \max_{w} 
\Bigl(\,
   \sum_{i} S_i \,\cdot\, \bigl\{\,W_{ij}\,\ge w \bigr\} \ge \kappa
\Bigr).
$$

Any validator’s original weight $W_{ij}$ above $\overline{W_j}$ is clipped to:

$$
\overline{W_{ij}} = \min( W_{ij}, \overline{W_j} )
$$



## Miner emissions

Miner emissions are based on an aggregate ranking which is the summed rankings of validators, weighted by validators' stake, where $\overline{W_{ij}}$ is the post-clip weight.

$$
R_j = \sum_{i} S_i \,\cdot\, \overline{W_{ij}}
$$

Each miner $j$’s share $M_j$ of the subnet's miner-emissions (41% of each subnet's overall emissions) is:

$$
M_j = \frac{\,R_j\,}{\sum_{k} R_k}
$$


## Penalizing out-of-consensus bonds

If a validator's evaluation of a miner is too high, it is penalized. If a submitted weight $W_{ij}$ by validator $i$ for miner $j$ exceeds the $j$'s consensus evaluation, $\overline{W_j}$, its bond value is penalized by factor $\beta$.

Bond-weight $\widetilde{W_{ij}}$ is:

$$
\widetilde{W_{ij}} 
= (1-\beta)\,W_{ij} +\beta\,\overline{W_{ij}}
$$

## Bonding mechanics

The **instant bond** $\Delta B_{ij}$ of validator $i$ to miner $j$ is $i$’s stake $\,S_i$ times $i$'s bond-weight for $j$ normalized by $j$'s total bond-weight from all validators:
$$
\Delta B_{ij} = \frac{\,S_i \,\cdot\, \widetilde{W_{ij}}\,}{
   \sum_{k} S_k \,\cdot\, \widetilde{W_{kj}}}
$$
This then updates an **exponential moving average (EMA) bond**:

$$
B_{ij}^{(t)} = \alpha \,\Delta B_{ij} + (1-\alpha)\,B_{ij}^{(t-1)}
$$

Validators who stay near consensus build stronger EMA bonds and thus extract more emissions, while any attempt to overstate a particular miner’s performance is penalized. The EMA smooths out abrupt swings in validator behavior and incentivizes consistent alignment with the consensus.

:::tip note
The $\alpha$ variable here is unrelated to the concept of subnet specific currencies, referred to as alpha $\alpha$ tokens. Here $\alpha$ refers to a factor used in this EMA smoothing function&mdash;see [consensus-based weights, a.k.a. liquid alpha](./subnets/consensus-based-weights.md).
:::

## Validator emissions

Each validator $i$’s share $V_i$ of validator emissions (41% of each subnet's total emissions) is the sum of all of its bonds to miners, weighted by the miner's total emissions:

$$
V_i = \sum_{j} \Bigl(\,B_{ij} \,\times\, M_j\Bigr)
$$