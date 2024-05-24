---
title: "Root Network"
---

# Root Network

The root network is a special kind of subnet. The root network has the `netuid` of 0.

**Root network validators**: The largest 64 subnet validators, in terms of their stake, from amongst all the subnet validators in all the active subnets in the Bittensor network, are, by default, the validators in the root network. 

**Root network miners**: There are no network miners in the root network. Instead, the subnets take their place. The 64 root network validators set the weights for all these subnets. 
    
:::tip Root network weights determine emissions 
It is these root network weights for the subnets that determine the emissions for the subnets. 
:::

### Root network vs subnets

Hierarchically speaking, the root network is at one level above the other subnets.

Structurally speaking, a root network is not that different from any other subnet. The root network has a fixed number of validators, i.e., the 64 largest subnet validators. Instead of miners, the root network has the subnets.

Behaviorally speaking, root network validators behave much the same way as any other subnet validator. A root network validator expresses their opinion on the quality of the subnets, similar to how a non-root subnet validator expresses their opinion on the quality of subnet miners in its subnet. 

:::important Minimum 1000 TAO required to set weights 
A validate function will blacklist set-weights transactions from keys with less than 1000 TAO. This is designed to reduce chain bloat and make it easier for validators and root network participants to set weights on the chain. 
:::

See the [Emissions](./emissions.md) document where we consider the subnet weights (set by the root validators) as **inputs** and proceed to present emission calculations as **outputs**. 