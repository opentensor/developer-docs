---
title: "Introduction to Bittensor"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Introduction to Bittensor

Welcome to Bittensor! This page will orient the reader with the major concepts and components, and provide the roadmap to developing in the Bittensor ecosystem.

## Components of the Bittensor platform

The Bittensor platform consists of the following components:

1. A pool of ***subnets***. Each subnet is an incentive-based competition marketplace that produces a specific kind of digital commodity related to artificial intelligence. It consists of a community of miners that produce the commodity, and a community of validators that measures the miners' work to ensure its quality, according to subnet-specific standards.
	
	Each subnet is its own community, with its own goal, operating according to its own standards. For example, the [text prompting subnet](https://github.com/opentensor/prompting), developed by the Open Tensor foundation, incentivizes subnet miners that produce the best prompt completions in response to the prompts sent by the subnet validators in that subnet.
	
	To explore existing subnets, check out [the listings on Taostats](https://taostats.io/subnets), or engage with [Bittensor subnet communities on Discord](https://discord.com/channels/799672011265015819/830068283314929684).

2. The ***Bittensor blockchain***, which a) serves as a system of record, and b) provides its token TAO (τ) as the currency of reward and exchange for the activities of the subnet marketplaces. Rewards in TAO (τ) are distributed among miners and validators based on their performance within subnets, and on the relative performance of subnets within Bittensor, hence rewarding the best and most valuable work most highly. The Bittensor blockchain records balances and transactions for miners, validators and subnet-owners, and allows arbitrary parties to stake currency into subnets in order to support their work.

3. The ***Bittensor API***, which supports interactions between miners and validators within subnets, and allows all parties to interact with the blockchain as necessary.
	
	Bittensor provides all the open source tools, codebase and the documentation, with step-by-step tutorials and guides, to enable you to participate in the Bittensor ecosystem.
	
<ThemedImage
alt="Simplified Bittensor Network"
sources={{
    light: useBaseUrl('/img/docs/bittensor-block-diagram.svg'),
    dark: useBaseUrl('/img/docs/dark-bittensor-block-diagram.svg'),
  }}
/>

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
