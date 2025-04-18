---
title: "Introduction to Bittensor"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Introduction to Bittensor

This page will orient the reader with the major concepts and components of Bittensor, and provide the roadmap to developing in the ecosystem.

## Components of the Bittensor platform

The Bittensor platform consists of the following components:

1. A pool of ***subnets***. Each subnet is an incentive-based competition marketplace that produces a specific kind of digital commodity related to artificial intelligence. It consists of a community of ***miners*** who produce the commodity, and a community of ***validators*** who measure the miners' work to ensure its quality, according to subnet-specific standards.
	
	Each subnet is its own community, with its own goal, operating according to its own standards. For example, the [text prompting subnet](https://github.com/opentensor/prompting), developed by the Open Tensor foundation, incentivizes subnet miners that produce the best prompt completions in response to the prompts sent by the subnet validators in that subnet.
	
	To explore existing subnets, check out [the listings on TAO.app](https://tao.app), or engage with [Bittensor subnet communities on Discord](https://discord.com/channels/799672011265015819/830068283314929684).

2. The ***Bittensor blockchain*** serves as a system of record, and its token TAO (τ) serves as incentive for participation in subnet activities. Miners and validators harvest TAO based on both their performance within subnets, and on the performance of those subnets within Bittensor. Hence, emission of TAO incentivizes miners and validators to do their best, creating the perfect conditions for continuous improvement. The Bittensor blockchain records balances and transactions for miners, validators and subnet creators, and allows arbitrary parties to stake currency into subnets in order to support their work.

3. The ***Bittensor SDK***, which supports interactions between miners and validators within subnets, and allows all parties to interact with the blockchain as necessary.
	
	Bittensor provides all the open source tools, codebase and the documentation, with step-by-step tutorials and guides, to enable you to participate in the Bittensor ecosystem.
	
<ThemedImage
alt="Simplified Bittensor Network"
sources={{
    light: useBaseUrl('/img/docs/bittensor-block-diagram.svg'),
    dark: useBaseUrl('/img/docs/dark-bittensor-block-diagram.svg'),
  }}
/>


## Bittensor personas

The following roles define the ways to participate in Bittensor, and which are covered in the documentation on this website:

- **Miners**&mdash;Work to produce digital commodities. See [mining in Bittensor](../miners/index.md).
- **Validators**&mdash;Evaluate the quality of miners' work. [See validating in Bittensor](../validators/index.md)
- **Subnet creators**&mdash;Manage the incentive mechanisms that specify the work miners and validate must perform and evaluate, respectively. See [Create a Subnet](../subnets/create-a-subnet)
- **Stakers**&mdash;TAO holders can support specific validators by staking TAO to them. See [Staking and Delegation](../staking-and-delegation/delegation).


The documentation also describes the role of **Blockchain operator**. This applies during offline testing only, when the user runs a local instance of Subtensor as its own independent chain, not connected to either the Bittensor main or test network.

See [Running a Subnet Locally](https://github.com/opentensor/bittensor-subnet-template/blob/main/docs/running_on_staging.md)

:::tip Browse the subnets
Browse the subnets and explore links to their code repositories on [TAO.app's subnets listings](https://tao.app).
:::

## Subnet development

Whether creating a new subnet or joining a pre-existing subnet, you should always start by first testing the subnet incentive mechanism **locally**, then on the Bittensor **testchain** and finally go live by connecting to the Bittensor **mainchain**. See the below conceptual deployment diagram showing the three stages. 

Testing the incentive mechanism means running one or more validators and miners to ensure that emissions are being harvested as understood and intended.

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
 