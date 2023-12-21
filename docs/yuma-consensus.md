---
title: "Yuma Consensus"
---

# Yuma Consensus

The Bittensor API is designed to enable subnet owners to write their own incentive mechanisms. These incentive mechanisms allow the subnet validators to express their own subjective preferences about what the network should learn. Such an approach:

1. Facilitates the economic market in which producers (subnet miners) are constantly driven to make their knowledge output more useful in terms of speed, intelligence and diversity.
2. And also decentralizes Bittensor's governance across multiple diverse stakeholders, ensuring that no single group has full control over what is learned.

## Weights

A subnet validator in a subnet expresses their perspective about how performant subnet miners in the subnet are, through a set of weights $w_i$. 

Such weights $w_i$ are aggregated across all the subnet validators in the subnet,  to produce a weight matrix $W$. Subnet validators learn their row in $W$ by running the validator module and continuously verifying the responses produced by the subnet miners in terms of speed, intelligence and diversity.

### Example

For example, the below code prints the $W$ matrix of a subnet with the `netuid` of `1`. You can print such $W$ matrix for any other subnet by passing its `netuid`.

```python
import bittensor as bt
subnet = bt.metagraph( netuid = 1, lite = False)
print ('weights', subnet.W )
```

## Ranks, trust, consensus, incentive 

The Yuma Consensus algorithm translates the weight matrix $W$ into incentives for the subnet miners and dividends for the subnet validators.

However, radical divergence from consensus view points is dangerous, especially if bad actor validators manipulate incentives in ways that benefits themselves, for example, lying about the value produced by miners. 

To avoid this scenario Bittensor uses a mechanism called Yuma Consensus. The Yuma Consensus rewards subnet validators with **dividends** for producing miner-value evaluations that are in agreement with the subjective evaluations produced by other subnet validators, weighted by **stake**.

The below example code prints the values of `S`, subnet validator stake, and `W`, subnet validator weights for a subnet with the `netuid` of `1`:

```python
import bittensor as bt
subnet = bt.metagraph( netuid = 1, lite = False)
print ('subnet 1 validator stake', subnet.S )
print ('subnet 1 validator weights', subnet.W )
```