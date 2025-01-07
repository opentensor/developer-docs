---
title: "Dynamic TAO"
---

import { HiOutlineCommandLine } from "react-icons/hi2";
import { HiAcademicCap } from "react-icons/hi2";

# Dynamic TAO


Dynamic tau is a planned evolution of the bit tensor network, as part of its overall trajectory towards greater decentralization in the current iteration, which we can refer to as ‘static tau’. Subnets are evaluated by a committee of validators in the root network, the root validators. And this represents a way in which the project is fundamentally centralized and So during emissions, every tempo with the tensor network emits, a stock of tau, and this is divided between the sub networks and then allocated to the miners, validators and sub Network owners in this subnets, okay, based on the consensus of the root net validators over their subjective judgments of the value of the subnets and dynamic tail after The transition. There's no root network valid auditors. Instead, I the emissions are divided between the subnets based on the based on relative strength of their staking pools. So how much Tau has been staked into the pool, which now belongs to eat each subnet. So each subnet has a pool of tau as well as a pool of alpha, what we refer to as, in the general sense, alpha, but each subnet will have its own coke. So and so the weight of a sub network in dynamic tau is the proportion of the total tau staked into the bit tensor network that has been staked into the subnet. So the subnets weight is its the value of its staked tau divided by the total value of tau staked into the network. So I mean to say just tau in the network, the total amount of tau in the network not staked into the network. Well, no, it is. It's steak tau. It is the percentage of steak tau, because tau can tau can be staked either into a subnet. Well, yeah, a subnet, and so there's the root, no, instead of the yeah, there's subnet zero, which you can stake into. Yeah, so as a way of staking generically into tau, you can stake into subnet zero, right and right, yeah, there's this biasing variable between being staked into sudden net zero and other ones, because over the long term, you want to disincentivize people from being staked into the network. You want to incentivize them to put their money on specific projects, rather than just into the network. And you know, by by staking into subnet zero, you are, in effect, staking into just the network itself. Because, yeah, you're not staked. Yeah. You don't get an alpha in in exchange for your stake. You're just on the board with subnet zero. Okay? Right? And throughout, there's this concept of like proportional stake, as opposed to number of tokens being what matters, which is sort of weird, but Jake described it as more efficient, which I'm sure it is. I Right. But I guess it's like when you're when you right. So every block I in every block, there's a mission into the subnet, and every tempo, there's a mission from the subnet into the miners and validators. So it's this two stage emission process. So every block, what is it? One tau or one alpha goes into the subnet pool. And then, is there a mission? And then, when does a mission out happen? And is that from the pool, or is that from the fucking root network? Outstanding question there. Okay, and then also this affects governance, the governance models change. We need to find out about that, because that's completely unknown. I


Dynamic TAO (D-TAO) is a planned evolution of the integrated tokenomic and governance model that underlies the Bittensor network. It represents a significant step in Bittensor's trajectory toward more thorough decentralization, in the following ways:

1. It eliminates the role of the centralized root network:

    - Prior to D-TAO, relative weight among subnets within the Bittensor network is determined by Yuma Consensus over the evaluations of the Root Network validators. This weight is critically important as it determines the rewards to different subnets and their participant miners and validators through the process of [emission](../glossary.md#emission). This gives a fundamentally centralizing role to the holders of Root Network validator keys.

    - In D-TAO, the relative weight of subnets is determined by their share of the network's staked TAO.

        TAO-holders can stake TAO into subnets in exchange for the subnet-specific dynamic currency, referred to as the subnet's alpha ($$\alpha$$) token. In this way, stakers 'vote with their TAO' for the value of the subnet, determining the emission payout to the validators and miners working in it.

        A staker stand to gain by staking into a high-value subnet (i.e., buying that subnet's alpha token) because the price of the alpha token is determined by the amount of TAO staked into the subnet those tokens are bound to gain in value as others who judge the value to be high continue to stake in


 This token value represents the value of the commodities being produced by that subnet to the entire Bittensor network, and the people who buy TAO to stake into particular subnets.

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