---
title: "Understanding Subnets"
---

# Understanding Subnets

In Bittensor, a subnet is an incentive-based competition market that produces a specific kind of digital commodity related to artificial intelligence. It consists of a community of miners that produce the commodity, and a community of validators that measures the miners' work to ensure its quality.

Rewards&mdash;emmissions of TAO (τ) from Bittensor&mdash;are distributed among miners and validators based on their performance within subnets, and based on the relative performance of subnets within Bittensor.

## Competition, de-registration, and immunity period

:::danger low-performing subnets risk deregistration
:::

Subnets must compete for weight within the Bittensor network. New subnets are created frequently, subnet performance is continuously monitored, and low-performance subnets are deregistered to make room for more successful ones. A subnet's performance is based on emissions earned, as well as other factors. See [Emissions](../emissions.md).

Any subnet has an 'immunity period' of `7 * 7200` blocks, which is equivalent to  seven days. This initial network immunity period starts when the subnet is created and its `netuid` is issued to the subnet owner. A newly created subnet starts with zero emission.

During this immunity period, the subnet is not at risk of being deregistered. At the end of this immunity period, if the subnet's emissions are the lowest among all the subnets, then this subnet will be deregistered when a new subnet registration request arrives. If there are several subnets with the lowest emission, then the oldest subnet among the lowest will be deregistered first, followed by the second oldest, and so on.

See the line of code that defines [SubtensorInitialNetworkImmunity](https://github.com/opentensor/subtensor/blob/52882caa011c5244ad75f1d9d4e182a1a17958a2/runtime/src/lib.rs#L660).

When a subnet is deregistered, all its UIDs are also deregistered along with it. As a result, the subnet's subnet miners and subnet validators are also deregistered. The new subnet at this `netuid` starts afresh, and any subnet miners and subnet validators for this new subnet must register using the standard registration step described in [Register](../subnets/register-validate-mine.md#register).

