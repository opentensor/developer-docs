---
title: "What's New in Docs"
hidden: false
sidebar_position: 0
hide_table_of_contents: false
---

# What's New in Docs

Key updates to this documentation.

## 25 September 2024

- The release notes for [Bittensor 8.0.0](./bittensor-rel-notes.md#release-800) are published.
- A new [Bittensor SDK](./bt-api-ref.md) reference document is published.
- A new [BTCLI](./btcli.md) command line reference document is published.

## 17 September 2024

- A new document [Schedule Codlkey Swap](./subnets/schedule-coldkey-swap.md), showing how to use Polkadot JS webapp for coldkey swap, is published.

## 04 September 2024

- A new document [Subtensor Storage Query Examples](./subtensor-nodes/subtensor-storage-query-examples.md) is added.
- A new document [Subtensor Error Messages](./subtensor-nodes/subtensor-error-messages.md) is added.

## 28 August 2024

- A new document [Using Ledger Hardware Wallet](./staking-and-delegation/using-ledger-hw-wallet.md) is published.
- A new document [Child Hotkeys](./subnets/child-hotkeys.md) is published.

## 15 August 2024

- A new document [Subtensor Rate Limits](./subtensor-nodes/subtensor-rate-limits.md) is added.

## 30 July 2024

- A new document [Dissolve a Subnet](./subnets/dissolve-a-subnet.md) is added.

## 29 July 2024

- A new document [Bittensor Networks](./bittensor-networks.md) is published.

## 23 July 2024

- The example in the [Delegates](./staking-and-delegation/delegation.md#example) section is clarified.

## 12 July 2024

- Release notes for [Mainnet 1.2.3](./chain-rel-notes#mainnet-123) are published.
- Release notes for [Bittensor 7.3.0](./bittensor-rel-notes#release-730) are published.

## 05 July 2024

- A new doc for [Schedule Key Swap](./subnets/schedule-coldkey-swap) is published.

## 02 July 2024

- Subtensor node installation instructions are updated in the following docs:
  - [Using Source](./subtensor-nodes/using-source).
  - [Using Docker](./subtensor-nodes/using-docker).

- The [Install Bittensor](./getting-started/installation) doc is updated.


## 26 June 2024

- Release notes for [Testnet 1.2.1-pre-release](./chain-rel-notes.md#testnet-121-pre-release) are published.

## 25 June 2024

- Advanced release notes for [Testnet 1.2.1-pre-release](./chain-rel-notes.md#testnet-121-pre-release) are published.

## 21 June 2024

- A new document, [Errors and Troubleshooting](./errors-and-troubleshooting.md) is published.

## 17 June 2024

- The [Commit Reveal](./subnets/commit-reveal.md) document is updated with Python code example.

## 12 June 2024

- Release notes for [Bittensor 7.2.0](./bittensor-rel-notes.md) are published.

## 04 June 2024

- Release notes for [Bittensor 7.1.0](./bittensor-rel-notes.md) are published.
- Release notes for [mainnet updates](./chain-rel-notes.md) are published.

## 30 May 2024

- Created a new doc for the [Commit Reveal](./subnets/commit-reveal.md) feature. This feature is available on testchain only. See [testchain updates](./chain-rel-notes.md) for more.

## 28 May 2024

- Release notes for [Bittensor 7.0.0](./bittensor-rel-notes.md) are published.
- Release notes for [testnet updates](./chain-rel-notes.md) are published.

## 22 May 2024

- A new `btcli` subcommand is added to set the delegate take % between `9%` and `18%`. See the doc for [`btcli root set_take`](btcli.md#set-delegate-take).

## 16 May 2024

- In the [Create a Subnet](./subnets/create-a-subnet.md) doc, added the missing step to install and run a local blockchain node for the local subnet option. Made additional clarifications elsewhere on this topic.

## 07 May 2024

- Removed Subnet Pages section due to lack of proper updates from the subnet owners.

## 22 April 2024

- Fixed the subtensor node installation instructions for testchain. See the updated command line settings for [Lite node on testchain](./subtensor-nodes/using-source#lite-node-on-testchain) and [Archive node on testchain](./subtensor-nodes/using-source#archive-node-on-testchain).

## 16 April 2024

- Added a script `bt-next-adjustment-block.js` to query for how many blocks to go before the recycle register cost is recalculated. See [Utilities](./utilities.md) for details.

## 09 April 2024

- Added a new section for [Subtensor Nodes](./subtensor-nodes/index.md).

## 05 April 2024

- Added a brief note on subnet deregistration in [Subnet deregistration](./subnets/create-a-subnet.md#subnet-deregistration).

## 04 April 2024

- A new doc [Working with Keys](./subnets/working-with-keys.md) that explains how to work with hotkey and coldkey is added. 
- The [Create Wallet](./getting-started/wallets.md) document is enhanced by distinguishing the cases when only coldkey is sufficient from the cases when a hotkey is also required. 

## 02 April 2024

- Added [a diagram](./index.md) and description in the front page distinguishing the Bittensor platform from subnets and end-user applications. 

## 22 March 2024

- Added a section on [Checking the registration status of a given UID](./subnets/register-validate-mine.md#checking-the-registration-status).
- Updated the Subnet 1 Prompting documentation and renamed the document to [Walkthrough of Subnet 1](./subnets/walkthrough-prompting).

## 11 March 2024

The following changes are documented:

- A new document [Root Network](./root-network.md) is added.
- A newly created subnet now starts from zero emission. Previously, the newly registered subnets inherited the emission from the previous owners.
- The subnet registrations adjustment interval is changed from `0` to `0.97`. See [adjustment_alpha](./subnets/subnet-hyperparameters.md#adjustment_alpha).
- Setting weights will now require a minimum of 1000 TAO. See the note in [Root network vs subnets](./root-network.md#root-network-vs-subnets).

## 07 March 2024

- Added [Lite node vs archive node](subtensor-nodes/index.md#lite-node-vs-archive-node) section.

## 28 February 2024

- The [Glossary](glossary.md) section is revised and updated.

## 27 February 2024

- Added [System requirements](subtensor-nodes/subtensor-node-requirements.md) and [Network requirements and port settings](subtensor-nodes/subtensor-node-requirements.md#network-requirements-and-port-settings) to the public subtensor installation document.

## 23 February 2024

- A new [Questions and Answers](./questions-and-answers.md) doc is added, intended for first-time explorers of Bittensor.

## 22 February 2024

- Updated [`btcli wallet` command options](./btcli.md#check-balance-in-all-wallets).
- Added a note on [mining and validating on Windows](./subnets/register-validate-mine.md#register).
- Added a note on running a [public subtensor on cloud](subtensor-nodes/using-source.md).

## 08 February 2024

- ~~Added a new `Subnet Pages)`~~ (removed) section.
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

- Add a new document [Subtensor Nodes](subtensor-nodes/index.md).

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
- A new [Learn Bittensor Concepts](./learn/introduction.md) section consisting of:
  - [Introduction](./learn/introduction.md).
  - [Bittensor Building Blocks](./learn/bittensor-building-blocks.md).
  - [Anatomy of Incentive Mechanism](./learn/anatomy-of-incentive-mechanism.md).
- A new [Code Walkthrough of Text Prompting Subnet](subnets/walkthrough-prompting.md) section.
- A comprehensive Bittensor API Reference section (see the top navbar).
- General revisions, removing obsolete content and cleanup.
