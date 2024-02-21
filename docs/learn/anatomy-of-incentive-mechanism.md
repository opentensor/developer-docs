---
title: "Anatomy of Incentive Mechanism"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Anatomy of Incentive Mechanism

This section describes a conceptual “anatomy” of a subnet incentive mechanism. Read this for how to think about a subnet incentive mechanism before you begin coding it.

:::tip before you proceed
Before you proceed, read the following sections:
- [Introduction](./introduction.md) that describes how subnets form the heartbeat of the Bittensor network.
- [Bittensor Building Blocks](./bittensor-building-blocks.md) that presents the basic building blocks you use to develop your incentive mechanism.
:::

## Overview

In a Bittensor subnet:

- The task-performing entities are called **subnet miners**.
- Entities that create the tasks, score the output of the subnet miners and reward them, are called **subnet validators**. 

Incentive mechanisms are a fundamental part of Bittensor. They drive the behaviour of the subnet miners and govern the consensus amongst the subnet validators.
Each subnet has its own incentive mechanism. Subnet developers should design incentive mechanisms carefully so that these mechanisms comprehensively and explicitly promote all the desired behaviors and penalize undesired behaviors. 

:::tip Machine learning analogy
In machine learning analogy, incentive mechanisms are effectively loss functions that steer the behaviour of subnet miners towards desirable outcomes. Miner earnings are dependent on their loss value, hence the miners are incentivized to act in ways that minimize such loss value. Furthermore, competition between subnet miners will drive the miners to seek optimal strategies within the given subnet incentive landscape.
:::

A subnet incentive mechanism, when running optimally on a subnet, will continuously produce high quality results because the subnet miners and subnet validators are incentivized to do so. Furthermore, a good incentive mechanism will enourage **continuous improvement** of the subnet as a whole by leveraging the competition between miners to attain ever higher scores.

## Subnet owner responsibilities

A subnet owner is responsible for:
- Defining the specific digital task to be performed by the subnet miners.
- Implementing an incentive mechanism that aligns miners with the desired task outcomes.


### Design with Yuma Consensus as a black box

Though a subnet incentive mechanism works in conjunction with the Yuma Consensus in the Bittensor network, you must design your subnet incentive mechanism **by treating Yuma Consensus as a black box**. 

### Make it easy for participation

To attract high-performing subnet miners and subnet validators, make sure that you publish sufficient documentation on your subnet. 

:::tip Participating in your subnet
When a developer is getting ready to participate in a subnet, they will follow a checklist like the one in [Checklist for Subnet](../subnets/checklist-for-validating-mining.md). Make sure that your subnet documentation helps the developer fulfill the checklist items comprehensively.
:::

After a subnet validator registers into your subnet, they will run the validator module to begin the validation operation. Similarly a subnet miner will register and then run the miner module. For example, see the following documents in the text prompting subnet for a quick view of these steps:

- [Running a validator](https://github.com/opentensor/prompting/blob/main/docs/running_a_validator.md).
- [Running a miner](https://github.com/opentensor/prompting/blob/main/docs/running_a_miner.md).

## Components of incentive mechanism

A subnet incentive mechanism must contain the definition and implementation of the following behaviors. See the numbered items in the below diagram:

<ThemedImage
alt="Components of Incentive Mechanism"
sources={{
    light: useBaseUrl('/img/docs/components-of-incentive-mechanism.svg'),
    dark: useBaseUrl('/img/docs/dark-components-of-incentive-mechanism.svg'),
  }}
/>

### Subnet protocol
See **1** and **3** in the above diagram. A subnet protocol, which is unique to the subnet, must define how a subnet validator will query the subnet miners, and how a subnet miner should respond to the query. 

:::tip Axon, dendrite and Synapse building blocks
Use the Bittensor building blocks Axon, dendrite and Synapse to develop your subnet protocol. See [Neuron to neuron communication](./bittensor-building-blocks.md#neuron-to-neuron-communication).
:::

For example, a subnet validator might send a query containing the task description to the subnet miners. The subnet miners will perform the task and then respond to the subnet validators with the results of the task the miners performed. Note, however, that query-response is only one of the ways of subnet miner-and-subnet validator interaction. An alternative example is when the subnet validators and subnet miners use additional shared resources such as databases, and these resources can be used to evaluate miner performance.

### Subnet task
See **2** in the above diagram. The task is one of the key components of any incentive mechanism as it defines what miners will perform as work. The task should be chosen so that miners are maximally effective at the intended use case for the subnet. In other words, **the task should mimic an intended user interaction with a subnet**. Examples of tasks are responding to natural language prompts and storing encrypted files.

:::tip Aligning miners with the subnet goals
The task defines the scope of work that miners will undertake, and what utility the subnet can provide to users. In some cases this should be very specific (such as storage) and in other cases it can be varied (many types of natural language query). 
:::

### Subnet reward model
See **4** and **5** in the above diagram. Just as the task describes **what** miners should do, the reward model dictates **how** it should be done. Similarly, just as tasks should mimic user interactions, reward models should mimic user preferences or desired outcomes.

As with any machine learning model, a subnet has an objective function that it is continuously optimizing. The reward model defines the quality of all miner behvaiour in the subnet (both intended and unintended). 

Operationally, it is the mathematical object that converts miner responses into numerical scores. A reward model can in fact contain as many different reward mechanisms as are necesary to align miners with the intended task. 

Miners will continuously compete to achieve the highest reward possible. If the reward is capped at an upper limit, miners may not be motivated to improve further. Hence care should be taken to enable continuous improvement of the miner, rather than stagnation.

:::tip The zen of incentive mechanisms
Subnets should be endlessly improving.
:::

### Discourage exploits
The incentive mechanism is ultimately the judge of subnet miner performance. When the incentive mechanism is well calibrated, it can result in a virtuous cycle in which the subnet miners continuously improve at the desired task due to competition. 

On the contrary, a poorly designed incentive mechanism can result in exploits and shortcuts, which can detrimentally impact the overall quality of the subnet and discourage fair miners.


## Distribution of rewards

### Example

Distribution of rewards among the subnet miners and subnet validators works like this. Consider an example subnet:
- Three subnet miners occupy the UID slots 37, 42 and 27 in the subnet.
- Four subnet validators occupy the UID slots 10, 32, 93 and 74 in the subnet, as shown in the below simplified conceptual diagram. Assume that the **subnet protocol** box in the diagram includes all the components of the incentive mechanism that were identified above.

<ThemedImage
alt="Incentive Mechanism Big Picture"
sources={{
    light: useBaseUrl('/img/docs/distribution-of-rewards-big-picture.svg'),
    dark: useBaseUrl('/img/docs/dark-distribution-of-rewards-big-picture.svg'),
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

Note that subnet validators can transmit their rank weight vectors to the blockchain any time. However, for any user-created subnet, the YC for the subnet begins at every 360 blocks (=4320 seconds or 72 minutes, at 12 seconds per block) using the latest weight matrix available at the YC for the subnet. 

If a ranking weight vector from the subnet validator arrives after the start of a 360-block period, then this weight vector will be used in the subsequent YC start, i.e., after the current 360 blocks have elapsed. 

At the end of any 360-block period, called **tempo**, the YC concludes and the emissions (distribution of reward TAO) are complete.  This tempo value of 360 blocks is the same for all the user-created subnets. However, the YC-starts for each user-created subnet can commence at different times. 
