---
title: "Dynamic TAO"
---

import { HiOutlineCommandLine } from "react-icons/hi2";
import { HiAcademicCap } from "react-icons/hi2";

# Dynamic TAO

Dynamic TAO (D-TAO) is a rearchitecture of the integrated tokenomic and governance model that underlies Bittensor. It represents a significant evolutionary step toward making Bittensor a thoroughly decentralized system in several ways:

1. It eliminates the role of the centralized root network:

    - Prior to D-TAO, relative weight among subnets within the Bittensor network is determined by Yuma Consensus over the evaluations of the Root Network validators. This weight is critically important as it determines the rewards to different subnets and their participant miners and validators through the process of [emission](../glossary.md#emission). This gives a fundamentally centralizing role to the holders of Root Network validator keys.

    - In D-TAO, the relative weight of subnets is determined by the strength of their subnet-specific dynamic currency, referred to as the subnet's alpha ($$\alpha$$) token. This token value represents the value of the commodities being produced by that subnet to the entire Bittensor network, and the people who buy TAO to stake into particular subnets.

1. In D-TAO tokenomics, holders of TAO ($$\tau$$) can participate in a subnet of their choice by *staking*&mdash;exchanging TAO for the subnet specific dynamic token, or alpha ($$\alpha$$). By staking into specific subnets, TAO holders can express their evaluations of different subnets, and stand to gain through the increase of the relative value of their subnet's alpha token relative to TAO.

1. D-TAO incorporates the consensus/voting function of subnet validators into the mechanism of their alpha token stake holdings.

1. D-TAO enables TAO holders and validators to manage their stake, influence, and governance across multiple subnets in the Bittensor network. By making use of the global component of a subnet validator's stake weight,  Dynamic TAO solves the problem of managing influence of a validator, hence of a TAO holder, across different subnet economies while maintaining mathematical consistency and economic incentives.

:::danger The dynamic TAO guide is preliminary
The [Emissions section](./dtao-guide.md#emissions) of the dynamic TAO guide is still not settled yet. Proceed with caution.
:::

<Cards>
    <Card 
    icon={HiAcademicCap}
    title='Guide to Dynamic TAO →'
    link='/dynamic-tao/dtao-guide'
    body='(PRELIMINARY ONLY, SUBJECT TO CHANGE) A comprehensive introduction to dynamic TAO.' />
    <Card 
    icon={HiOutlineCommandLine}
    title='BTCLI with Dynamic TAO →'
    link='/dynamic-tao/dtao-btcli'
    body='The command-line interface (CLI) for dynamic TAO and more.' />
</Cards>