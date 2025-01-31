---
title: "Docs Home"
slug: "/"
hidden: false
sidebar_position: 0
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


# Bittensor Developer Documentation

Bittensor is an open source platform where participants produce best-in-class digital commodities, including compute power, storage space, artificial intelligence (AI) inference and training, protein folding, financial markets prediction, and many more.

Bittensor is composed of distinct **subnets**. Each subnet is an independent community of miners (who produce the commodity), and validators (who evaluate the miners' work).

The Bittensor network constantly emits liquidity, in the form of its token, TAO ($\tau$), to participants in proportion to the value of their contributions. Participants include:

- **Miners**&mdash;Work to produce digital commodities. See [Validating and Mining](./subnets/checklist-for-validating-mining).
- **Validators**&mdash;Evaluate the quality of miners' work. See [Validating and Mining](./subnets/checklist-for-validating-mining)
- **Subnet Creators**&mdash;Manage the incentive mechanisms that specify the work miners and validate must perform and evaluate, respectively. See [Create a Subnet](./subnets/create-a-subnet)
- **Stakers**&mdash;TAO holders can support specific validators by staking TAO to them. See [Staking and Delegation](./staking-and-delegation).

:::tip Browse the subnets
Browse the subnets and explore links to their code repositories on [Taostats' subnets listings](https://taostats.io/subnets).
:::

<ResponsiveCards>
    <ResponsiveCard 
    icon={GiStarFormation}
    title='Bittensor frequently asked questions (FAQ)'
    link='learn/introduction'
    body='Everything you are afraid to ask about Bittensor.' />
    <ResponsiveCard 
    icon={HiAcademicCap}
    title='Learn Bittensor concepts'
    link='learn/introduction'
    body='Start by learning the Bittensor concept, building blocks and incentive mechanism.' />
    <ResponsiveCard
    icon={MdInstallDesktop}
    title='Guide to Bittensor tools'
    link='tools'
    body='Opentensor Foundation maintains open source tools for the Bittensor ecosystem, including the Python SDK and `btcli`.' />  
    <ResponsiveCard
    icon={GoNumber}
    title='Subnet Listings'
    link='https://taostats.io/subnets'
    body='Subnets on taostats.io' />  
    <CardSmall
    icon={FaRegNewspaper}
    title='See what is new'
    link='whats-new-in-docs'
    body='Updates to Docs' />
    <CardSmall
    icon={VscFileMedia}
    title='Bittensor media assets'
    link='media-assets'
    body='Media assets' />
</ResponsiveCards>

## Validate or mine

You can participate in an existing subnet as either a subnet validator or a subnet miner. Follow the below links.

<ResponsiveCards>
    <ResponsiveCard 
    icon={MdOutlineChecklistRtl}
    title='1. Checklist for validating and mining'
    link='subnets/checklist-for-validating-mining'
    body='When you are preparing to be a subnet validator or a subnet miner, use this checklist to get ready.' />
    <ResponsiveCard
    icon={GiArchiveRegister}
    title='2. Register, validate and mine'
    link='subnets/register-validate-mine'
    body='Follow these steps to register and become a miner, or stake your TAO and become a validator.' />
    <ResponsiveCard
    icon={BiMath}
    title='3. Emissions'
    link='emissions'
    body='Learn how the emissions harvest for validators and miners is calculated.' />
    <ResponsiveCard
    icon={RiTeamLine}
    title='4. Staking and Delegation'
    link='staking-and-delegation'
    body='Get to know how staking and delegating your TAO works in the Bittensor network.' />
    <ResponsiveCard
    icon={RiGovernmentLine}
    title='Governance'
    link='governance'
    body='Learn how the Bittensor governance works as it transitions into full community-ownership over time.' />
    <ResponsiveCard
    icon={FaGalacticSenate}
    title='Senate'
    link='senate'
    body='Understand what Senate is, requirements to participate in a Senate and how voting works.' />
    
</ResponsiveCards>

---

## Running a subnet

Ready to run your own subnet? Follow the below links.

<ResponsiveCards>
    <ResponsiveCard 
    icon={HiAcademicCap}
    title='Basic subnet tutorials'
    link='tutorials/basic-subnet-tutorials'
    body='Learn how to run a simple subnet locally or on testchain or mainchain.' />
    <ResponsiveCard
    icon={GiStarFormation}
    title='Create a subnet'
    link='subnets/create-a-subnet'
    body='Step-by-step instructions for creating a local subnet or a subnet on testchain or mainchain.' />
    <ResponsiveCard
    icon={HiOutlineAcademicCap}
    title='OCR subnet tutorial'
    link='tutorials/ocr-subnet-tutorial'
    body='Shows how to convert your Python notebook containing validated code for an incentive mechanism into a working subnet.' />
    <ResponsiveCard
    icon={VscSymbolParameter}
    title='Subnet hyperparameters'
    link='subnets/subnet-hyperparameters'
    body='Get to know subnet hyperparameters and how to use them effectively. As a subnet creator, your success depends on this knowledge.' />
</ResponsiveCards>

---

## Bittensor CLI, SDK, Wallet SDK

Use the Bittensor CLI and SDK and Wallet SDK to develop and participate in the Bittensor network.

:::caution looking for legacy bittensor 7.4.0 docs?
See [Legacy Bittensor 7.4.0 Documentation](pathname:///legacy-python-api/html/index.html).
:::

<Cards>
    <CardSmall
    icon={GoCommandPalette}
    title=''
    link='btcli'
    body='Bittensor CLI' />
    <CardSmall
    icon={FaPython}
    title=''
    link='bt-api-ref'
    body='Bittensor SDK' />
    <CardSmall
    icon={FaPython}
    title=''
    link='pathname:///btwallet-api/html/index.html'
    body='Wallet SDK' />
</Cards>
