---
title: "Emissions"
---

# Emissions

In this document we describe how emissions are calculated for a subnet. 

## Summary 

The emission process works like this:

- Every block, i.e., every 12 seconds in a user-created subnet, a single TAO ($\tau$) is minted, i.e., newly created.
- A percentage portion of this single TAO ($\tau$) is allocated to each of the 32 subnets in accordance with the subnet's performance. The root network determines the percentage portion for each subnet. Hence, all such partial percentage allocations will sum to 100%, i.e., one TAO ($\tau$). 
    :::tip Taostats
    See the [percentage numbers in each "**SN**" column on the root network page on Taostats](https://taostats.io/subnets/netuid-0/). These percentages for SN1 through SN32 all add up to `100`. 
    :::
- At the end of every tempo, i.e., every 360 blocks in a user-created subnet, the TAO ($\tau$) accumulated for each subnet is emitted into the subnet. This emitted TAO for the subnet is then distributed within the subnet as:
  - **Dividends** to the subnet validators, and 
  - **Incentives** to the subnet miners.

## Root network

The root network is a special kind of subnet. The root network has the `netuid` of 0.

**Root network validators**: The largest 64 subnet validators, in terms of their stake, from amongst all the subnet validators in all the active subnets in the Bittensor network, are, by default, the validators in the root network. 

**Root network miners**: There are no network miners in the root network. Instead, the 32 subnets take their place. The 64 root network validators set the weights for the 32 subnets. 
    
:::tip Root network weights determine emissions 
It is these root network weights for the subnets that determine the emissions for the subnets. 
:::

### Root network vs subnets

Hierarchically speaking, the root network is at one level above the other 32 subnets.

Structurally speaking, a root network is not that different from any other subnet. The root network has a fixed number of validators, i.e., the 64 largest subnet validators. Instead of miners, the root network has the 32 subnets.

Behaviorally speaking, root network validators behave much the same way as any other subnet validator. A root network validator expresses their opinion on the quality of the subnets, similar to how a non-root subnet validator expresses their opinion on the quality of subnet miners in its subnet.  

In the rest of this document we consider the subnet weights (set by the root validators) as **inputs** and proceed to present emission calculations as **outputs**. 

## Subnet weights, trust, rank, consensus, emission 

### Read root network metagraph

Consider a snapshot of root network at a given block. You can read the root network metagraph with the below `metagraph` call:

```python
import torch
metagraph = bt.metagraph(netuid=0, lite=False)
metagraph.weights.shape
```

Running the above code will give you the shape of the weight matrix of the root network.  

```python
torch.Size([64, 33])
```

As expected, the shape of the weights reflects the 64 root network validators that set the weights for the 32 subnets. The root network itself is counted, hence `33` in the above output, instead of 32.

You can then read the weights matrix $W$ from the metagraph as below. See the [`metagraph` API documentation](https://docs.bittensor.com/python-api/html/autoapi/bittensor/metagraph/index.html#bittensor.metagraph.metagraph.W).

```python
# Create a weight matrix with FP32 resolution
W = metagraph.W.float()
```

Next, read the stake vector $S$. See [`metagraph` property `S` documentation](https://docs.bittensor.com/python-api/html/autoapi/bittensor/metagraph/index.html#bittensor.metagraph.metagraph.S).

```python
# Create "normalized" stake vector
Sn = (metagraph.S/metagraph.S.sum()).clone().float()
```

Next, we describe how to compute the below quantities that are defined on a subnet.  

- **Trust** ($T$)
- **Consensus** ($C$)
- **Rank** ($R$)
- **Emission** ($E$)

### Trust

Trust is defined as a sum of only those stakes that set non-zero weights. 

$$
T = W_n^T \cdot S
$$

where $W_n$ is defined as:

$$
W_n(i, j) = \begin{cases} 
1 & \text{if } W(i, j) > \text{threshold} \\
0 & \text{otherwise} 
\end{cases}
$$

#### Python

```python
T = trust(W, Sn)
```
where, `trust()` is defined as below:

```python
def trust(W, S, threshold=0):
    """Trust vector for subnets with variable threshold"""
    Wn = (W > threshold).float()
    return Wn.T @ S
```

### Rank

Rank $R$ is the sum of weighted stake $S$.

$$
R = \frac{W^T \cdot S}{\sum (W^T \cdot S)}
$$

#### Python

```python
R = rank(W, Sn)
```
where `rank()` is defined as below:

```python
def rank(W, S):
    """Rank vector for subnets"""
    R = W.T @ S
    return R / R.sum()
```

### Consensus

Consensus $C$ is $\kappa$-centered sigmoid of trust. 

$$
C = \text{sigmoid}(\rho \cdot (T - \kappa))
$$
where:
$$
\text{sigmoid}(x) = \frac{1}{1 + e^{-x}}
$$

#### Python

```python
C = consensus(T)
```
where `consensus()` is defined as:

```python
def consensus(T, kappa=0.5, rho=10):
    """Yuma Consensus 1"""
    return torch.sigmoid( rho * (T - kappa) )
```

### Emission

Emission $E$ is rank $R$ scaled by consensus $C$.

$$
E = \frac{C \cdot R}{\sum (C \cdot R)}
$$

#### Python

```python
E = emission(C, R)
```
where `emission()` method is defined as below:

```python
def emission(C, R):
    """Emission vector for subnets"""
    E = C*R
    return E / E.sum()
```