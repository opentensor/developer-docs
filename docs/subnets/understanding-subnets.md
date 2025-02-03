---
title: "Understanding Subnets"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Understanding Subnets

In Bittensor, a subnet is an incentive-based competition marketplace that produces a specific kind of digital commodity related to artificial intelligence. It consists of a community of miners that produce the commodity, and a community of validators that measures the miners' work to ensure its quality. Often, parties that serve as validators do so in order to run applications that make use of the services provided by the miners.

Emissions of TAO (τ) from Bittensor&mdash;are distributed among miners and validators based on their performance within subnets, and based on the relative performance of subnets within Bittensor.

## Anatomy of a subnet

The illustration below shows the main components of a subnet:
1. A subnet's [incentive mechanism] defines the work that miners must perform, and the work that validators must perform to evaluate the miners' work. The incentive mechanism is unique to the subnet, and maintained off-chain by the subnet owner in the form of a code-repository that defines the interface for miners and validators to participate. For example, see [Subnet 1](https://github.com/macrocosm-os/prompting).
2. **Miners** perform some useful work as defined in the subnet's incentive mechanism. For example, in Subnet 1, miners serve chat prompt completion.
3. **Validators** independently evaluate the task performed by the subnet miners, according to standards defined by the subnet's incentive mechanism.
4. Validators each score the performance of of each miner over the most recent time period. The matrix of these scores, by each validator for each miner, serves as input to **Yuma Consensus**. 
5. The Yuma Consensus algorithm operates on-chain, and determines emissions to miners, validators, and subnet owners across the platform, based on performance.

<center>
<ThemedImage
alt="Simplified Bittensor Network"
sources={{
    light: useBaseUrl('/img/docs/subnet-high-level.svg'),
    dark: useBaseUrl('/img/docs/dark-subnet-high-level.svg'),
  }}
style={{width: 600}}
/>
</center>


## Competition, de-registration, and immunity period

:::danger low-performing subnets risk deregistration
:::


Subnets must compete for weight within the Bittensor network. New subnets are created frequently, subnet performance is continuously monitored, and low-performance subnets are deregistered to make room for more successful ones.

A subnet's performance is determined by Yuma Consensus over the weights given to it by [root network validators](../root-network). This group evaluates subnets based on many criteria and sets the weight competitively/relative to the other subnets, playing the same role for subnetworks that validators within each subnetwork play for miners.

Any subnet has an 'immunity period' of `7 * 7200` blocks, which is equivalent to  seven days. This initial network immunity period starts when the subnet is created and its `netuid` is issued to the subnet owner. A newly created subnet starts with zero emission.

During this immunity period, the subnet is not at risk of being deregistered. At the end of this immunity period, if the subnet's emissions are the lowest among all the subnets, then this subnet will be deregistered when a new subnet registration request arrives. If there are several subnets with the lowest emission, then the oldest subnet among the lowest will be deregistered first, followed by the second oldest, and so on.

See the line of code that defines [SubtensorInitialNetworkImmunity](https://github.com/opentensor/subtensor/blob/52882caa011c5244ad75f1d9d4e182a1a17958a2/runtime/src/lib.rs#L660).

When a subnet is deregistered, all its UIDs are also deregistered along with it. As a result, the subnet's subnet miners and subnet validators are also deregistered. The new subnet at this `netuid` starts afresh, and any subnet miners and subnet validators for this new subnet must register again.
