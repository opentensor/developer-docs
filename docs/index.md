---
title: "Welcome"
slug: "/"
hidden: false
sidebar_position: 0
hide_table_of_contents: false
---

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


# Bittensor Developer Documentation


:::tip See what's new
See [what's new in docs](./whats-new-in-docs.md).
:::


**Welcome!** Bittensor is a protocol for decentralized subnets. Subnets exist to produce decentralized intelligence. Each subnet is an incentive-based competitive market in action, to produce the best decentralized intelligence. 

Subnets run on blockchain and constitute the core of the Bittensor ecosystem. **The rewards for subnet participants are in the form of TAO tokens.** 

You can either create your own subnet, with your custom incentive mechanism, to launch your own competition, or join a subnet that already exists in the Bittensor ecosystem. For example, the [text prompting subnet](https://github.com/opentensor/text-prompting) incentivizes subnet miners who produce the best prompt completions in response to the prompts sent by the subnet validators in that subnet. 

Bittensor provides all the open source tools, the codebase and the documentation, with step-by-step tutorials and guides, to enable you to participate in the Bittensor ecosystem. 

---

## Start here

If you are new to Bittensor, start by learning the concepts. Then install the Bittensor software and create a wallet. Follow the below links. 

<Cards>
    <Card 
    icon={HiAcademicCap}
    title='Learn the concepts'
    link='learn/introduction'
    body='Start by learning the Bittensor concept, building blocks and incentive mechanism.' />
    <Card
    icon={MdInstallDesktop}
    title='Install'
    link='getting-started/installation'
    body='To validate or mine, or run your own subnet, install Bittensor and create wallet to get started.' />
    
</Cards>

Next, follow the below paths:

---

## Validate or mine

You can participate in an existing subnet as either a subnet validator or a subnet miner. Follow the below links.

<Cards>
    <Card 
    icon={MdOutlineChecklistRtl}
    title='1. Checklist for participating'
    link='subnets/checklist-for-subnet'
    body='When you are preparing to be a subnet validator or a subnet miner, use this checklist to get ready.' />
    <Card
    icon={GiArchiveRegister}
    title='2. Register, stake and participate'
    link='subnets/register-and-participate'
    body='Follow these steps to register and become a miner, or stake your TAO and become a validator.' />
    <Card
    icon={BiMath}
    title='3. Emissions'
    link='emissions'
    body='Learn how dividends for the validators and incentives for the miners are calculated.' />
    <Card
    icon={RiTeamLine}
    title='4. Delegation'
    link='delegation'
    body='Get to know how delegation works and how to delegate your TAO.' />
    <Card
    icon={RiGovernmentLine}
    title='Governance'
    link='governance'
    body='Learn how the Bittensor governance works as it transitions into full community-ownership over time.' />
    <Card
    icon={FaGalacticSenate}
    title='Senate'
    link='senate'
    body='Understand what Senate is, requirements to participate in a Senate and how voting works.' />
    
</Cards>

---

## Running a subnet

Ready to run your own subnet? Follow the below links.

<Cards>
    <Card 
    icon={HiAcademicCap}
    title='Basic subnet tutorials'
    link='tutorials/basic-subnet-tutorials'
    body='Learn how to run a simple subnet locally or on testchain or mainchain.' />
    <Card
    icon={GiStarFormation}
    title='Create a subnet'
    link='subnets/create-a-subnet'
    body='Step-by-step instructions for creating a local subnet or a subnet on testchain or mainchain.' />
    <Card
    icon={HiOutlineAcademicCap}
    title='OCR subnet tutorial'
    link='tutorials/ocr-subnet-tutorial'
    body='Shows how to convert your Python notebook containing validated code for an incentive mechanism into a working subnet.' />
    <Card
    icon={VscSymbolParameter}
    title='Subnet hyperparameters'
    link='subnets/subnet-hyperparameters'
    body='Get to know subnet hyperparameters and how to use them effectively. As a subnet owner, your success depends on this knowledge.' />
</Cards>

---

## Bittensor CLI and API

Use the Bittensor CLI and Python API to develop and participate in the Bittensor network.

<Cards>
    <Card 
    icon={GoCommandPalette}
    title='Bittensor CLI'
    link='btcli'
    body='With Bittensor CLI, you can stake or unstake funds, check network state and much more.' />
    <Card
    icon={FaPython}
    title='Python API'
    link='bt-api-ref'
    body='A comprehensive Python API reference documentation for the open-sourced Bittensor API.' />
</Cards>

<!-- <Cards>
    <CardSmall 
    title='Axon'
    link='http://localhost:3000/python-api/html/autoapi/bittensor/axon/index.html'
    body='text prompting' />
    <CardSmall
    title='Subnet 2'
    link='getting-started/installation'
    body='machine translation' />
    <CardSmall
    title='Subnet 3'
    link='getting-started/installation'
    body='data scraping' />
    <CardSmall
    title='Subnet 4'
    link='getting-started/installation'
    body='multimodality' />
        <CardSmall
    title='Subnet 5'
    link='getting-started/installation'
    body='multimodality' />
</Cards> -->

