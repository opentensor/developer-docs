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
2. **Permissioned deployment**: Until further notice, only white-listed parties can deploy a smart contract on subtensor. When you are ready to deploy, make a request in the [**evm-bittensor** channel of Bittensor Discord](https://discord.com/channels/799672011265015819/1296572984965726218).
3. **Permissionless interaction**: However, anyone call a smart contract that was already deployed on subtensor, and interact with it in a permissionless way. 
4. **1 TAO = 1e18 on subtensor EVM**: While working with the subtensor EVM, 1 TAO should be written as 1 followed by 18 zeroes, i.e., 1e18. See this code example: [https://github.com/opentensor/evm-bittensor/blob/main/examples/withdraw.js#L58](https://github.com/opentensor/evm-bittensor/blob/main/examples/withdraw.js#L58).

:::caution EVM on Mainnet

EVM features on the mainnet will be available only after the Bittensor 8.4.0 is released. In the mean time use this mainnet node: `wss://evm.chain.opentensor.ai` to access EVM on the mainnet. 
::: 

Run the below tutorials to learn how to use the EVM feature on the Bittensor blockchain. 

<Cards>
    <Card 
    icon={GiHiveMind}
    title='EVM on Subtensor: Basics'
    link='/evm-tutorials/evm-on-subtensor'
    body='A beginner-friendly introduction to EVM on Bittensor.' />
    <Card 
    icon={GiHiveMind}
    title='Install Dependencies'
    link='/evm-tutorials/install'
    body='Get started by installing dependencies first.' />
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