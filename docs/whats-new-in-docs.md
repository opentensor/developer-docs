---
title: "What's New in Docs"
hidden: false
sidebar_position: 0
hide_table_of_contents: false
---

# What's New in Docs

Key updates to this documentation.

## 22 March 2024

- Added a section on [Checking the registration status](./subnets/register-validate-mine.md#checking-the-registration-status) of a given UID.

## 11 March 2024

The following changes are documented:

- A new document [Root Network](./root-network.md) is added.
- A newly created subnet now starts from zero emission. Previously, the newly registered subnets inherited the emission from the previous owners.
- The subnet registrations adjustment interval is changed from `0` to `0.97`. See [adjustment_alpha](./subnets/subnet-hyperparameters.md#adjustment_alpha).
- Setting weights will now require a minimum of 1000 TAO. See the note in [Root network vs subnets](./root-network.md#root-network-vs-subnets).

## 07 March 2024

- Added [Lite node vs archive node](getting-started/running-a-public-subtensor#lite-node-vs-archive-node) section.

## 28 February 2024

- The [Glossary](glossary.md) section is revised and updated.

## 27 February 2024

- Added [System requirements](./getting-started/running-a-public-subtensor.md#system-requirements) and [Network requirements and port settings](getting-started/running-a-public-subtensor.md#network-requirements-and-port-settings) to the public subtensor installation document.

## 23 February 2024

- A new [Questions and Answers](./questions-and-answers.md) doc is added, intended for first-time explorers of Bittensor.

## 22 February 2024

- Updated [`btcli wallet` command options](./btcli.md#check-balance-in-all-wallets).
- Added a note on [mining and validating on Windows](./subnets/register-validate-mine.md#register).
- Added a note on running a [public subtensor on cloud](./getting-started/running-a-public-subtensor.md#on-cloud).

## 08 February 2024

- Added a new [Subnet Pages](./subnet-pages/index.md) section.
- Opened the docs GitHub repo to public.
- Added a section on [Immunity period for a subnet](./subnets/create-a-subnet.md#immunity-period-for-a-subnet).
- Consolidated staking and delegation docs into [Staking and Delegation](staking-and-delegation/index.md) section.

## 05 February 2024

- Enhanced the docs homepage to clarify that you do not need to create a subnet to participate in the Bittensor network. See [Start here](./index.md#start-here). 

- Added a new homepage for the [Bittensor API](bt-api-ref).

- Enhanced the rendering of the [Python docstrings for Bittensor API](https://docs.bittensor.com/python-api/html/index.html).

- Added a new section on [Miner deregistration](subnets/register-validate-mine.md#miner-deregistration).

- 

## 29 January 2024

- Edited the [Subnet Hyperparameters](./subnets/subnet-hyperparameters.md) doc to describe only the allowed hyperparameters.

## 18 January 2024

- Add a new document [Running a Public Subtensor](./getting-started/running-a-public-subtensor.md).

## 10 January 2024

- Added the `btcli wallet history` [command description](/btcli.md#show-history).  

## 02 January 2024

- Added a new doc [Staking with Polkadot JS](staking-and-delegation/staking-polkadot-js.md).

## 21 December 2023

- A new [OCR Subnet Tutorial](./tutorials/ocr-subnet-tutorial.md) is published. This document presents a step-by-step guide to convert a Python Notebook code into Bittensor subnet code.
- A new [Emissions](./emissions.md) document is published. This document presents how to calculate emissions, trust, rank and consensus for a subnet. 
- A new section [Moving a subnet miner to a different machine](subnets/register-validate-mine.md#moving-a-subnet-miner-to-a-different-machine) is added.
- A new section for [Subnets](./btcli.md#subnets) is added in the CLI document.
- Dark-mode display problems with [Bittensor API Reference (see navbar above)](https://docs.bittensor.com/python-api/html/index.html) are fixed.
- Styling for this documentation site is enhanced to reflect Opentensor Foundation visual theme. 


## 06 December 2023

- A new [Subnet Hyperparameters](./subnets/subnet-hyperparameters.md) document published.

## 29 November 2023

- Release of new and revised documentation hosted on `docs.bittensor.com`, which will now be the default site for Bittensor developer documentation. 
- A new [Learn Bittensor Concepts](./learn/introduction.md) section comprising of:
  - [Introduction](./learn/introduction.md).
  - [Bittensor Building Blocks](./learn/bittensor-building-blocks.md).
  - [Anatomy of Incentive Mechanism](./learn/anatomy-of-incentive-mechanism.md).
- A new [Code Walkthrough of Text Prompting Subnet](subnets/walkthrough-prompting.md) section.
- A comprehensive Bittensor API Reference section (see the top navbar).
- General revisions, removing obsolete content and cleanup.
