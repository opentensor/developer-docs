---
title: "Configuring Remix IDE"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Configuring Remix IDE

You can use [Remix IDE](https://remix.ethereum.org/#lang=en&optimize=false&runs=200&evmVersion=cancun&version=soljson-v0.8.24+commit.e11b9ed9.js) for the EVM feature on subtensor. The link above automatically configures Remix to use EVM Version **Cancun** that matches **Solidity 0.8.24**.

Below is the full list of Remix IDE configurations:

## Step 1. Configure Metamask

Use the BitTensor guides to configure Metamask with [localnet](./evm-localnet-with-metamask-wallet.md), [Testnet](./evm-testnet-with-metamask-wallet.md), or [Mainnet](./evm-mainnet-with-metamask-wallet.md).

## Step 2. Connect Metamask to Remix. 

In the left side panel under "Environment" select "Injected Provider - Metamask".

## Step 3. Configure Solidity Compiler

In Solidity Compiler tab select 

- **Compiler**: `0.8.24`
- **EVM Version**: `cancun` 
