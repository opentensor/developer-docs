---
title: "EVM Tutorials"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

import { HiAcademicCap } from "react-icons/hi2";
import { MdInstallDesktop } from "react-icons/md";
import { FaNetworkWired } from "react-icons/fa";
import { GiMining } from "react-icons/gi";
import { GrValidate } from "react-icons/gr";
import { GiHiveMind } from "react-icons/gi";
import { GiOvermind } from "react-icons/gi";
import { GiBrainTentacle } from "react-icons/gi";
import { PiBrainFill } from "react-icons/pi";
import { GiBrainStem } from "react-icons/gi";
import { CiWallet } from "react-icons/ci";
import { SiTrpc } from "react-icons/si";
import { GoKey } from "react-icons/go";
import { GiCardExchange } from "react-icons/gi";
import { BiSolidNetworkChart } from "react-icons/bi";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { GrStakeholder } from "react-icons/gr";

# EVM Tutorials

Ethereum compatibility layer is now available on subtensor (the blockchain in Bittensor). Using this EVM feature you can:
- Bring any Ethereum smart contract, deploy it on the subtensor without any need to change it, and interact with the smart contract on the subtensor blockchain.
- Access all the standard Ethereum JSON-RPC methods from this EVM compatibility layer on subtensor.

## Before you proceed

Before you proceed to use EVM on subtensor, make a note of the following:

1. **EVM smart contract executes on subtensor**: The EVM feature allows the subtensor blockchain to execute Ethereum-compatible smart contracts. Note that all operations performed by this new subtensor EVM feature are executed solely on the subtensor blockchain, not on the Ethereum blockchain.
2. **1 TAO = 1e18 on subtensor EVM**: While working with the subtensor EVM, 1 TAO should be written as 1 followed by 18 zeroes, i.e., 1e18. See this code example: [https://github.com/opentensor/evm-bittensor/blob/main/examples/withdraw.js#L58](https://github.com/opentensor/evm-bittensor/blob/main/examples/withdraw.js#L58).

Run the below tutorials to learn how to use the EVM feature on the Bittensor blockchain. 

<ResponsiveCards>
    <ResponsiveCard
    icon={FaNetworkWired}
    title='Subtensor Networks'
    link='/evm-tutorials/subtensor-networks'
    body='RPC endpoints and Chain IDs for Mainnet and Testnets.' />
    <ResponsiveCard
    icon={FaNetworkWired}
    title='Configure Hardhat for subtensor EVM'
    link='/evm-tutorials/hardhat-config-for-subtensor-evm'
    body='Using Hardhat? Configure it to work with subtensor EVM.' />
    <ResponsiveCard
    icon={FaNetworkWired}
    title='Configure Remix IDE for subtensor EVM'
    link='/evm-tutorials/remix-config-for-subtensor-evm'
    body='Remix IDE configuration to use with subtensor EVM.' />
    <ResponsiveCard 
    icon={GiHiveMind}
    title='EVM on Subtensor: Basics'
    link='/evm-tutorials/evm-on-subtensor'
    body='A beginner-friendly introduction to EVM on Bittensor.' />
    <ResponsiveCard 
    icon={GiHiveMind}
    title='Install Dependencies'
    link='/evm-tutorials/install'
    body='Get started by installing dependencies first.' />
    <ResponsiveCard
    icon={BiSolidNetworkChart}
    title='EVM Testnet with Metamask'
    link='/evm-tutorials/evm-testnet-with-metamask-wallet'
    body='Learn how to set up your Metamask wallet with EVM testnet.' />
    <ResponsiveCard
    icon={SiTrpc}
    title='EVM Localnet with Metamask'
    link='/evm-tutorials/evm-localnet-with-metamask-wallet'
    body='Set up your Metamask wallet for a localnet with EVM feature.' />
    <ResponsiveCard
    icon={GiHiveMind}
    title='EVM Mainnet with Metamask'
    link='/evm-tutorials/evm-mainnet-with-metamask-wallet'
    body='Learn how to set up your Metamask wallet with EVM mainnet.' />
    <ResponsiveCard
    icon={GiCardExchange}
    title='TAO transfer from Metamask to SS58'
    link='/evm-tutorials/transfer-from-metamask-to-ss58'
    body='Learn how to transfer TAO from Metamask to SS58.' />
    <ResponsiveCard
    icon={FaMoneyBillTransfer}
    title='Transfer TAO between two H160 addresses'
    link='/evm-tutorials/transfer-between-two-h160-accounts'
    body='Learn how to transfer TAO between two Ethereum H160 addresses.' />
    <ResponsiveCard
    icon={GrStakeholder}
    title='Stake with a smart contract'
    link='/evm-tutorials/staking-precompile'
    body='Stake to a hotkey using precompiled smart contract.' />
    <ResponsiveCard
    icon={GoKey}
    title='Verify ed25519 with a precompile'
    link='/evm-tutorials/ed25519-verify-precompile'
    body='Verify an ed25519 signature on subtensor EVM.' />
    <ResponsiveCard
    icon={GiHiveMind}
    title='Troubleshooting'
    link='/evm-tutorials/troubleshooting'
    body='How to troubleshoot the most common issues.' />
</ResponsiveCards>
