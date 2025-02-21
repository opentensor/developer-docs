---
title: "Yuma Consensus"
---

# Yuma Consensus

## Introduction

Yuma Consensus is a critical algorithmic process within Bittensor, which runs on-chain within Subtensor. Its responsibility is to compute validator and miner emissions from validators' rankings of miners. It inputs the varied perspectives of each of the validators within a subnet&mdash;each of which consists of a rating of each miner whose work they've validated&mdash;and resolves this matrix of rankings (a ranking for each miner for each validator) into two emissions vectors, which determine the allocation of the subnet's emissions to miners and validators.

See [Subtensor Docs: Yuma Consensus](https://github.com/opentensor/subtensor/blob/main/docs/consensus.md)

The output weight vector for miners is designed to represent the combined intelligence of the validators, which means weighting the inputs of the validators more depending on how trustworthy they appear to be in order to ignore the portion of the validation signal that is less trustworthy. The output weight vector for validators is meant to incentivize validators to be trustworthy, i.e. to work hard to give fast, honest evaluations of miners.

By design, miners should be incentivized to work hard for the highest combined evaluation by the community of validators. Validators should be incentivized to evaluate miners in a way that predicts the convergence of other validators' evaluations.

Each of a subnet's validators submit a vector of weights indicating the utility of each miner they've evaluated. These weights are then aggregated into two emissions vectors: one each for **miners** and **validators**.

## Clipping


Clipping is designed to punish innacurate miner evaluation, especially in patterns that could constitute collusion to manipulate the accuracy of consensus to favor certain miners.

In short, the judgment of proportion kappa ($\kappa$) of the most trusted validators (as measured by stake) serves as a benchmark. Kappa is a configurable hyperparameter with default: $\kappa = 0.5$. Evaluations (bonds) that exceed this benchmark are *clipped*, meaning neither the miner nor the validator receives emissions for them.

To compute the benchmark $\overline{W_j}$ for miner $j$, we gather all validator weights $W_{ij}$, sort them by the validator’s **stake** $S_i$, and then find the maximum weight level $w$ supported by at least $\kappa$ fraction of total stake. 

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

This clipping protects against erroneous or collusive over-evaluation of miners by validators.

## Miner emissions

Miner emissions are based on an aggregate ranking which is the summed rankings of validators, weighted by validators' stake, where $\overline{W_{ij}}$ is the post-clip weight.

$$
R_j = \sum_{i} S_i \,\cdot\, \overline{W_{ij}}
$$

Each miner $j$’s share $M_j$ of the subnet's miner-emissions (41% of overall emissions) is:

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
   \sum_{k} S_k \,\cdot\, \widetilde{W_{kj}}
}.
$$
This then updates an **exponential moving average (EMA) bond**:

$$
B_{ij}^{(t)} = \alpha \,\Delta B_{ij} + (1-\alpha)\,B_{ij}^{(t-1)}.
$$

Validators who stay near consensus build stronger EMA bonds and thus extract more emissions, while any attempt to overstate a particular miner’s performance is penalized. The EMA smooths out abrupt swings in validator behavior and incentivizes consistent alignment with the consensus. The $\alpha$ varialbe here is unrelated to the concept of subnet specific currencies, referred to as alpha $\alpha$ tokens. Here $\alpha$ refers to a factor used in this EMA smoothing function&mdash;see [consensus-based weights, a.k.a. liquid alpha](./subnets/consensus-based-weights.md).

## Validator emissions

A validator’s total **emissions** $V_i$ is the sum of all of its bonds to miners, weighted by the miner's total emissions.

$$
V_i = \sum_{j} \Bigl(\,B_{ij} \,\times\, M_j\Bigr).
$$


## Examples

Print the weight matrix of subnet `1`.

```python
import bittensor as bt
subnet = bt.metagraph( netuid = 1, lite = False)
print ('weights', subnet.W )
```

Prints the values of `S`, subnet validator stake, and `W`, subnet validator weights for subnet `1`:

```python
import bittensor as bt
subnet = bt.metagraph( netuid = 1, lite = False)
print ('subnet 1 validator stake', subnet.S )
print ('subnet 1 validator weights', subnet.W )
```