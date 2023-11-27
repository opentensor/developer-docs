---
title: "Introduction"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Introduction

If you are new to the Bittensor ecosystem read this section first before proceeding to participate in the Bittensor network.

<ThemedImage
alt="Simplified Bittensor Network"
sources={{
    light: useBaseUrl('/img/docs/bittensor-block-diagram.svg'),
    dark: useBaseUrl('/img/docs/dark-bittensor-block-diagram.svg'),
  }}
/>

The Bittensor ecosystem consists of the following three components (refer to the above diagram):

1. **An incentive-based competition mechanism**: You can either create your custom incentive mechanism for your own competition or join a competition that already exists in the Bittensor ecosystem. Each such incentive-based competition market is called a **subnet**. Subnets constitute the core of the Bittensor ecosystem. 

:::tip Text prompting subnet
For example, the [text prompting subnet](https://github.com/opentensor/text-prompting), developed by the Open Tensor foundation, incentivizes subnet miners that produce the best prompt completions in response to the prompts sent by the subnet validators in that subnet.
:::

2. A **blockchain** that runs the above subnets and supports their proper functioning so that the incentive-based competition market is decentralized, is permissionless and is collusion-resistant, i.e., is resistant to market manipulation.
3. The **Bittensor API** that connects all the essential elements within the above two components, and also connects the subnets and the blockchain. 

:::tip Open source tools and documentation
Bittensor provides all the open source tools, codebase and the documentation, with step-by-step tutorials and guides, to enable you to participate in the Bittensor ecosystem.
:::

## Participating in Bittensor ecosystem

You participate in the Bittensor ecosystem by participating in a subnet. 

## How a subnet works

Subnets exist to operationalize the incentive-based competition mechanisms. See the below diagram. 

<center>
<ThemedImage
alt="Simplified Bittensor Network"
sources={{
    light: useBaseUrl('/img/docs/subnet-high-level.svg'),
    dark: useBaseUrl('/img/docs/dark-subnet-high-level.svg'),
  }}
/>
</center>

Here is an explanation of the primary components of a subnet. Note that this explanation is **highly simplified**, and is intended only to convey the essential conceptual core of the subnet. 

The item numbers below correspond to the numbers in the above diagram. 

1. A subnet is defined by the incentive mechanism it supports. The incentive mechanism is unique to the subnet. 
2. Entities in the subnet, called **subnet miners**, each perform useful task, i.e., solve some problem, as defined in the incentive mechanism of the subnet. 
3. Separate entities in the same subnet, called **subnet validators**, each independently evaluate the task performed by the subnet miners. 
4. The subnet validators then each express their opinion on the quality of the miners. These opinions of the subnet validators are then provided as a collective input to the **Yuma Consensus** mechanism on the blockchain by using the Bittensor API. 
5. The output of the Yuma Consensus mechanism from the blockchain will then determine how the rewards for the subnet miners and subnet validators are to be distributed. **The rewards are in the form of TAO tokens.**  

When you participate in the Bittensor ecosystem, most of your activity occurs within the subnet you participate in. This is true whether you created your own incentive mechanism, i.e., your own subnet, or joined an existing subnet either as a subnet validator or as a subnet miner. Nevertheless, you can interact with other subnet entities. 

You can use Python with the Bittensor API to write your incentive mechanism. 

## Bittensor personas
You can participate in the Bittensor ecosystem as the following personas:

- **Subnet owner**: When you only want to create a subnet but transfer the tasks of operating the subnet to others.
- **Subnet validator**: When you are responsible for running the subnet validator.
- **Subnet miner**: When you are responsible for running the subnet miner.
- **Blockchain operator**: When you run the blockchain. This mostly applies during the offline testing of your subnet and your incentive mechanism, when you need a local emulation of the Bittensor blockchain because you are disconnected from the Bittensor network.

## Participating in a subnet

When creating a subnet you should always start by first developing and testing the subnet incentive mechanism **locally**, then connecting to the Bittensor **testchain** and finally go live by connecting to the Bittensor **mainchain**. See the below conceptual deployment diagram showing the three stages. 

Testing the incentive mechanism means running one or more validators and miners to ensure that rewards are distributed in the intended way. 

:::tip Before you participate in a subnet
We recommend all subnet participants to become familiar with the incentive mechanism before joining a subnet or creating a new subnet.
:::

<ThemedImage
alt="Simplified Bittensor Network"
sources={{
    light: useBaseUrl('/img/docs/subnet-deploy-stages.svg'),
    dark: useBaseUrl('/img/docs/dark-subnet-deploy-stages.svg'),
  }}
/>

<!-- to be fixed 

When you are ready to participate in a subnet, follow these steps in the below order:
Step 1: Run a local subnet

Set up your local environment and deploy a local blockchain and a local subnet. By default all the below are run on the same computer you use locally (see the below diagram):

Your local subnet with a single subnet validator and a single subnet miner.
Your local blockchain with a single blockchain validator. 

Bittensor provides all the tools, codebase, a quickstart subnet template, the minimum compute, memory and storage requirements you will need, and step-by-step instructions for you to accomplish this easily. 

You will use your local Bittensor faucet to mint faucet TAO tokens in this step. Using this offline local subnet and local blockchain configuration you can:

Familiarize yourself, by examining the code in the subnet template, with how incentive mechanisms are coded and configured. 
Change the subnet template code to write your own incentive mechanism and test it locally.
Determine the minimum compute, bandwidth, memory and storage requirements for your subnet with your own incentive mechanism. 
Step 2: Run a Bittensor testnet
Will continue. Start introducing the root subnet here. 
-->
