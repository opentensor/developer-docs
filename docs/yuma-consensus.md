---
title: "Yuma Consensus"
---

# Yuma Consensus

## Introduction

Yuma Consensus is a critical algorithmic process within Bittensor. Its responsibility is to compute validator and miner emissions from validators' rankings of miners. It inputs the varied perspectives of each of the validators within a subnet&mdash;each of which consists of a rating of each miner whose work they've validated%mdash;and resolves this matrix of rankings (a ranking for each miner for each validator) into two emissions vectors, which determine the allocation of the subnet's emissions to miners and validators.

The output weight vector for miners is designed to represent the combined intelligence of the validators, which means weighting the inputs of the validators more depending on how trustworthy they appear to be in order to ignore the portion of the validation signal that is less trustworthy. The output weight vector for validators is meant to reward validators for being trustworthy, i.e. for giving reliable evaluations of miners. By design, miners should be rewarded by their combined evaluation by the community of validators, at the same time validators are being rewarded for evaluating miners in a way that predicts the convergence of other validators' evaluations.

Each of a subnet's validators submit a vector of weights indicating the utility of each miner they've evaluated. These weights are then aggregated into two emissions vectors: one each for **miners** and **validators**.

## Calculating Emissions

### Clipping

For each miner $j$, gather all validator weights $W_{ij}$. Sort them according to each validator’s **stake** $S_i$. We then find the maximum weight level supported by at least $\kappa$ fraction of total stake (usually $\kappa = 0.5$):

$$
\overline{W_j} \;=\; \arg \max_{w} 
\Bigl(\,
   \sum_{i} S_i \,\cdot\, \bigl\{\,W_{ij}\,\ge w \bigr\} \;\ge\; \kappa
\Bigr).
$$

Any validator’s original weight $W_{ij}$ above $\overline{W_j}$ is clipped to $\overline{W_j}$. This clipping protects against collusive “self-boosting” by a few validators.


### Aggregating miner rankings

Miner emissions are based on an aggregate ranking which is the summed rankings of validators, weighted by validators' stake.

$$
R_j \;=\; \sum_{i} S_i \,\cdot\, \overline{W_{ij}},
$$

where $\overline{W_{ij}}$ is the post-clip weight. We normalize across all miners to get each miner, $j$’s share $M_j$ of the subnet's miner-emissions (41% of overall emissions).

$$
M_j \;=\; \frac{\,R_j\,}{\sum_{k} R_k}.
$$


#### Penalty for out-of-consensus validator stake
A validator whose raw weight $W_{ij}$ greatly exceeds the consensus $\overline{W_j}$ does not just see it clipped for miner incentives; it can also affect that validator’s **bond**. A penalty factor $\beta$ determines how much a validator’s inflated weighting is “slashed” when calculating bonds:
$$
\widetilde{W_{ij}} 
\;=\; (1-\beta)\,W_{ij} \;+\;\beta\,\overline{W_{ij}}.
$$

#### Bonding  mechanics
The **instant bond** $\Delta B_{ij}$ is a fraction of the validator’s stake $\,S_i$ allocated to miner $j$, normalized by the total for that miner:
$$
\Delta B_{ij} = \frac{\,S_i \,\cdot\, \widetilde{W_{ij}}\,}{
   \sum_{k} S_k \,\cdot\, \widetilde{W_{kj}}
}.
$$
This then updates an **exponential moving average (EMA) bond**:

$$
B_{ij}^{(t)} = \alpha \,\Delta B_{ij} \;+\; (1-\alpha)\,B_{ij}^{(t-1)}.
$$

The EMA smooths out abrupt swings in validator behavior and rewards consistent alignment with the consensus. The $\alpha$ varialbe here is unrelated to the concept of subnet specific currencies, referred to as alpha $\alpha$ tokens. Here $\alpha$ refers to a factor used in this EMA smoothing function&mdash;see [consensus-based weights, a.k.a. liquid alpha](./subnets/consensus-based-weights.md).

#### Validator emissions
A validator’s total **emissions** $V_i$ is:
$$
V_i \;=\; \sum_{j} \Bigl(\,B_{ij} \,\times\, M_j\Bigr).
$$


**In essence**, validators who stay near consensus build stronger EMA bonds and thus claim higher rewards, while any attempt to overstate a miner’s performance (or understate honest miners) leads to penalty in both the aggregator process (via clipping) and in bonding (via $\beta$ slashing).




The Bittensor API is designed to enable subnet owners to write their own incentive mechanisms. These incentive mechanisms allow the subnet validators to express their own subjective preferences about what the network should learn. Such an approach:

7. Facilitates the economic market in which producers (subnet miners) are constantly driven to make their knowledge output more useful in terms of speed, intelligence and diversity.
8. And also decentralizes Bittensor's governance across multiple diverse stakeholders, ensuring that no single group has full control over what is learned.


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