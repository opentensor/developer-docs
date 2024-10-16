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

Ethereum compatibility layer is now available on Bittensor. Using this EVM feature you can:
- Deploy and interact with any Ethereum smart contract, without any need to change it, on the subtensor blockchain.
- Access all the standard Ethereum JSON-RPC methods from this EVM compatibility layer on Bittensor.

:::tip executes on subtensor blockchain
The EVM feature allows the subtensor blockchain to execute Ethereum-compatible smart contracts. Note that all operations performed by this new subtensor EVM feature are executed solely on the subtensor blockchain, not on the Ethereum blockchain.
:::

This section presents tutorials for you to learn how to use the EVM feature on the Bittensor blockchain. Follow the below links:

<Cards>
    <Card 
    icon={GiHiveMind}
    title='Blog'
    link='https://blog.bittensor.com/evm-on-bittensor-draft-6f323e69aff7'
    body='A beginner-friendly introduction to EVM on Bittensor.' />
    <Card
    icon={BiSolidNetworkChart}
    title='EVM Testnet with Metamask'
    link='/evm-tutorials/evm-testnet-with-metamask-wallet'
    body='Learn how to set up your Metamask wallet with EVM testnet.' />
    <Card
    icon={SiTrpc}
    title='EVM Localnet with Metamask'
    link='/evm-tutorials/evm-localnet-with-metamask-wallet'
    body='Set up your Metamask wallet for a localnet with EVM feature.' />
    <Card
    icon={GiCardExchange}
    title='TAO transfer from Metamask to SS58'
    link='/evm-tutorials/transfer-from-metamask-to-ss58'
    body='Learn how to transfer TAO from Metamask to SS58.' />
    <Card
    icon={FaMoneyBillTransfer}
    title='Transfer TAO between two H160 addresses'
    link='/evm-tutorials/transfer-between-two-h160-accounts'
    body='Learn how to transfer TAO between two Ethereum H160 addresses.' />
    <Card
    icon={FaNetworkWired}
    title='Configure Hardhat for subtensor EVM'
    link='/evm-tutorials/hardhat-config-for-subtensor-evm'
    body='Using Hardhat? Configure it to work with subtensor EVM.' />
    <Card
    icon={GrStakeholder}
    title='Stake with a smart contract'
    link='/evm-tutorials/staking-precompile'
    body='Stake to a hotkey using precompiled smart contract.' />
    <Card
    icon={GoKey}
    title='Verify ed25519 with a precompile'
    link='/evm-tutorials/ed25519-verify-precompile'
    body='Verify an ed25519 signature on subtensor EVM.' />
</Cards>