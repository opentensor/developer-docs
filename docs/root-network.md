---
title: "Root Network"
---

# Root Network

:::tip

The Root Network no longer is in operation, so this doc is a kind of historical artifact. The Root Network was decommisioned with the [Dynamic TAO](./dynamic-tao/dtao-guide.md) upgrade in February 2025
:::


The root network was a special kind of subnet. The root network has the `netuid` of 0.

**Root network validators**: The largest 64 subnet validators, in terms of their stake, from amongst all the subnet validators in all the active subnets in the Bittensor network, were, by default, the validators in the root network. 

**Root network miners**: There were no network miners in the root network. Instead, the subnets take their place. The 64 root network validators set the weights for all these subnets. 
    
:::tip Root network weights determined emissions 
Prior to Dynamic TAO, these root network weights for the subnets determined emissions for the subnets. 
:::