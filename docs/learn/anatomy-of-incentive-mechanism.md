---
title: "Anatomy of Incentive Mechanism"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Anatomy of Incentive Mechanism

This section describes a conceptual “anatomy” of a subnet incentive mechanism. Read this for how to think about a subnet incentive mechanism before you begin coding it. 

## Overview

When one entity creates an opportunity for another entity to perform some work, i.e., a task, and incentivizes this second entity for performing such task, an incentive mechanism comes to exist. In an open-source environment, like the Bittensor network, task-performing entities compete to maximize their incentives. In the Bittensor network:

- The task-performing entities are called **subnet miners**.
- Entities that create the tasks, score the output of the subnet miners and reward them, are called **subnet validators**. 

A **subnet incentive mechanism**, when running optimally on a subnet, will continuously produce high quality task completions because the subnet miners and subnet validators are incentivized to do so. 

:::tip See also
See [Introduction](../concepts/introduction.md) that describes how subnets form the heartbeat of the Bittensor network.
:::

## Paradigm

A subnet owner is responsible for:
- Defining the specific digital task to be performed by the subnet miners.
- For implementing an optimal subnet incentive mechanism. 

:::tip Treat Yuma Consensus as a black box
Though a subnet incentive mechanism works in conjunction with the Yuma Consensus in the Bittensor network, you must design your subnet incentive mechanism **by treating Yuma Consensus as a black box**. 
:::

After a subnet validator registers into your subnet, they will run the validator module to begin the validation operation. Similarly a subnet miner will register and then run the miner module. For example, see the following documents in the text prompting subnet for a quick view of these steps:

- [Running a validator](https://github.com/opentensor/text-prompting/blob/main/docs/running_a_validator.md).
- [Running a miner](https://github.com/opentensor/text-prompting/blob/main/docs/running_a_miner.md).

:::tip Participating in a subnet    
When you run a subnet validator or a subnet miner, it means you are participating in the subnet incentive mechanism. 
:::

## Components of incentive mechanism

A subnet incentive mechanism must contain the definition and implementation of the following behaviors. See the numbered items in the below diagram:

<ThemedImage
alt="Incentive Mechanism Big Picture"
sources={{
    light: useBaseUrl('/img/docs/components-of-subnet-mechanism.png'),
    dark: useBaseUrl('/img/docs/components-of-subnet-mechanism.png'),
  }}
/>

- **Subnet protocol**: See **1** and **3** in the above diagram. The protocol must define how a subnet validator will query the subnet miners, and how a subnet miner should respond to the query. A subnet protocol, which is unique to the subnet, defines the way in which the subnet miners and subnet validators exchange messages between each other. It establishes a common language between the validators and the miners within the subnet.

    For example, a subnet validator might send a query containing the task description to the subnet miners. The subnet miners will perform the task and then respond to the subnet validators with the results of the task the miners performed. Note, however, that query-response is only one of the ways of subnet miner-and-subnet validator interaction.

- **Subnet task**: See **2** in the above diagram. The specific task a subnet miner should perform, based on which the validator scores the miner. 

- **Subnet reward model**: See **4** and **5** in the above diagram. And finally, the reward model should define how such responses from the subnet miners are evaluated by a subnet validator and how a subnet miner must be rewarded for its response. 

:::tip A reward model is unique to the specific subnet incentive mechanism. 
:::

## Distribution of rewards

Distribution of rewards among the subnet miners and subnet validators works like this. Consider an example subnet:
- Three subnet miners occupy the UID slots 37, 42 and 27 in the subnet.
- Four subnet validators occupy the UID slots 10, 32, 93 and 74 in the subnet, as shown in the below simplified conceptual diagram. Assume that the **subnet protocol** box in the diagram includes all the components of the incentive mechanism that were identified above.

<ThemedImage
alt="Incentive Mechanism Big Picture"
sources={{
    light: useBaseUrl('/img/docs/distribution-of-rewards-big-picture.png'),
    dark: useBaseUrl('/img/docs/distribution-of-rewards-big-picture.png'),
  }}
/>

The item numbers below correspond to the circled numbers in the above diagram.

1. Each subnet validator maintains a vector of weights. Each element of the vector represents the weight assigned to a subnet miner. This weight represents how well the subnet miner is performing **according to this subnet validator**. 

  Each subnet validator ranks all the subnet miners by means of this weight vector. Each subnet validator within the subnet, acting independently, transmits its miner ranking weight vector to the blockchain. These ranking weight vectors can arrive at the blockchain at different times. Typically each subnet validator transmits an updated ranking weight vector to the blockchain every 100-200 blocks. 
2. The blockchain (subtensor) waits until the latest ranking weight vectors from all the subnet validators of the given subnet arrive at the blockchain. A ranking weight matrix formed from these ranking weight vectors is then provided as input to the Yuma Consensus module on-chain.
3. The Yuma Consensus (YC) on-chain then uses this weight matrix, along with the amount of stake associated with the UIDs on this subnet, to calculate rewards. The YC calculates how the reward TAO tokens should be distributed amongst the subnet validators and subnet miners in the subnet, i.e., amongst each UID in the subnet.  
  :::tip All reward TAO tokens are newly minted. 
  :::
4. Finally, the YC calculates a consensus distribution of TAO (the ‘emission’) and distributes the newly minted reward TAO immediately into the accounts associated with the UIDs. 

### Tempo

Note that subnet validators can transmit their rank weight vectors to the blockchain any time. However, for any user-created subnet, the YC for the subnet begins at every 360 blocks (=4320 seconds or 72 minutes, at 12 seconds per block) using the latest weight matrix available at the YC for the subnet. If a ranking weight vector from the subnet validator arrives after the start of a 360-block period, then this weight vector will be used in the subsequent YC start, i.e., after the current 360 blocks have elapsed. 

At the end of any 360-block period, called **tempo**, the YC concludes and the emissions (distribution of reward TAO) are complete.  This tempo value of 360 blocks is the same for all the user-created subnets. However, the YC-starts for each user-created subnet can commence at different times. 

<!-- >
[Raj: Explain the difference between tempo and epoch. For folks coming from Ethereum, our term tempo can be a bit confusing.]
Using Bittensor API for incentive mechanism
Here I want to present a discussion of how to map the components of the incentive mechanism (identified above) into the axon, dendrite, metagraph, subtensor, and synapse. I want to describe what each API module does and instruct the developer which one to use when. For example I want to say something like “Use dendrite to query axon and fetch a metagraph object.” Here I want to get as specific and as detailed as possible. -->
