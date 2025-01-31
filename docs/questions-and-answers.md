---
title: "Frequently asked questions (FAQ)"
hide_table_of_contents: false 
---
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

import { HiAcademicCap } from "react-icons/hi2";
import { MdInstallDesktop } from "react-icons/md";
import { FaNetworkWired } from "react-icons/fa";
import { GiMining } from "react-icons/gi";
import { GrValidate } from "react-icons/gr";
import { MdOutlineChecklistRtl } from "react-icons/md";
import { GiArchiveRegister } from "react-icons/gi";
import { BiMath } from "react-icons/bi";
import { RiTeamLine } from "react-icons/ri";
import { RiGovernmentLine } from "react-icons/ri";
import { FaGalacticSenate } from "react-icons/fa";
import { GiStarFormation } from "react-icons/gi";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { VscSymbolParameter } from "react-icons/vsc";
import { GoCommandPalette } from "react-icons/go";
import { FaPython } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa";
import { SiFuturelearn } from "react-icons/si";
import { GoNumber } from "react-icons/go";
import { VscFileMedia } from "react-icons/vsc";

# Frequently asked questions (FAQ)

## General

### Is Bittensor a blockchain or an AI platform?

It is both!

Bittensor is a platform for the production of digital commodities, including AI inference, training, and infrastructure, as well as others unrelated to artificial intelligence.

Bittensor is backed by its own substrate blockchain, Subtensor. The distributed ledger of the Bittensor main network serves as the system of record, and TAO, Bittensor's cryptocurrency token, serves to incentivize activity across the platform.

### So what is a subnet?

A subnet is a community that produces a digital commodity in a competitive market, with Bittensor keeping track of and incentivizing the activities required for this production.

Anyone with the funds and technical know-how can create a subnet, or participate in an existing subnet.

### How does competition work in a subnet?

The work to be performed by miners is set by the subnet creator in the form of the subnet's incentive mechanism. The miners compete to best perform the task, submitting their work to the validators. 

The validators then rank the quality of the work done by the miners within the subnet. The aggregated scores of the validators determine the quantity of TAO emitted to each miner.

At the same time, validators are also incentivized to do their best work, because their emissionsk depend on how well their miner scorings agree with the general consensus of other validators.

### What exactly is the task of a subnet miner?

The task of miners is different in each subnet. For example, subnet 1 produces LLM inference, and the miner task is to respond to a text prompt with a completion. Subnet 2 serves machine translation, and subnet 21 serves storage.

Browse the subnets on [taostats.io](https://taostats.io/subnets)

### So where does the blockchain come in?

The subtensor blockchain records all the key activity of all the subnets in its ledger. It also continuously runs an algorithm called Yuma Consensus (YC), which determines the TAO to be emitted throughout the network and harvested by miners, validators, stakers, and subnet creators.

Rankings of the subnet miners set by the subnet validators are input to YC, which  computes the harvest for each party, and emits TAO to their wallets.

### Do subnets talk to each other?

A new abstract base class, called `SubnetsAPI` is released in Bittensor `6.8.0` and your application can use this to enable cross subnet communication. Normally, however, if you are not using the `SubnetsAPI`, then the subtensor blockchain does not mix data from one subnet with another subnet data and a subnet does not communicate with another subnet. 

:::tip See also
See [Bittensor Subnets API](https://github.com/opentensor/bittensor/blob/master/README.md#bittensor-subnets-api).
:::

## Mining and validation

### Is mining and validation in Bittensor the same as in Bitcoin?

No, there are some key differences! Bitcoin miners work to validate blocks according to Proof of Work consensus so they can be added to the blockchain.

In Bittensor, "mining", within subnets, has nothing to do with adding blocks to the chain. Instead, it has to do with production of digital commodities. Similarly, "validation", within subnets, has nothing to do with validating blocks&mdash;it concerns validating the work performed by miners.

### So is there a separate blockchain validation on Bittensor?

Yes indeed. In Bittensor, the work of validating the blockchain is performed by the Opentensor Foundation on a Proof-of-Authority model.

### What is the incentive for me to be a miner or a validator, or even create a subnet? 

Your incentive is that you harvest TAO. Every 12 seconds 1 TAO is minted, each subnet harvests a fraction of this newly-created TAO, based on Yuma Consensus over its scoring by Root Network validators. Each day, 7200 TAO (86,400 per day, one TAO per 12 seconds) are emitted into the network.

The allocation of the TAO harvest within each subnet is as follows:

- 18% to the subnet creator.
- 41% to validators
- 41% to the miners

See [Emissions](./emissions.md).

### I don't want to create a subnet, can I just be a miner or a validator?

Yes! Most participants will not create their own subnets, there are lots to choose from.

Requirements for mining or validating are subnet-specific, so begin by browsing the subnets at [`taostats.io/subnets`](https://taostats.io/subnets), or on [Discord](https://discord.com/channels/799672011265015819/830068283314929684).

See also: 

- [Checklist for Validating and Mining](./subnets/checklist-for-validating-mining.md)
- [Register, Validate and Mine](./subnets/register-validate-mine.md).

### Is there a central place where I can see compute requirements for mining and validating for all subnets?

Unfortunately no. Subnets are not run or managed by Opentensor Foundation, and the landscape of subnets is constantly evolving. 

Browse the subnets at [`taostats.io/subnets`](https://taostats.io/subnets), or on [Discord](https://discord.com/channels/799672011265015819/830068283314929684).

### Can I be a subnet miner or a subnet validator forever?

You can keep trying forever, but your success depends on your performance. Mining and validating in a subnet is competitive. If a miner or validator is one of the three lowest in the subnet, it may be de-registered at the end of the tempo, and have to register again.

See [miner deregistration](./subnets/register-validate-mine.md#miner-deregistration). 
