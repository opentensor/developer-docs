---
title: "Bittensor EVM Smart Contracts"
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

# Bittensor EVM Smart Contracts

Full Ethereum virtual machine (EVM) compatibility is now available on subtensor (the blockchain in Bittensor). This allows users to deploy most EVM smart contracts on subtensor without changing the code, interact with deployed smart contracts on the subtensor blockchain, and access standard Ethereum JSON-RPC methods.

Bittensor EVM smart contracts are executed solely on the **Bittensor blockchain, *not* on the Ethereum blockchain.**

## Networks

You can deploy smart contracts on Bittensor main net (aka 'finney'), test network, or on your own locally deployed Bittensor chain.
<details>
  <summary>Network details</summary>


|           | MAINNET                             | TESTNET                              | LOCALNET                 |
|:---------------------|:------------------------------------|:-------------------------------------|:-------------------------|
| **RPC URL**          | https://lite.chain.opentensor.ai    | https://test.chain.opentensor.ai     | http://localhost:9944    |
| **Chain ID**         | 964                                 | 945                                  | _see below_              |
| **Test TAO**         | None                                | Available on request                 | Use [Alice account](../local-build/provision-wallets#access-the-alice-account)        |
|Set-up Guide|[EVM Testnet with Metamask Wallet](./evm-testnet-with-metamask-wallet)|[EVM Localnet with Metamask Wallet](./evm-localnet-with-metamask-wallet.md) for setting up a Local net.|
</details>






## Available Precompiles

The following precompiles are available on the Bittensor EVM:
<details>
  <summary>Standard Ethereum Precompiles</summary>

- `ECRecover` (0x1) - Recover the address associated with the public key from elliptic curve signature
- `Sha256` (0x2) - SHA-256 hash function
- `Ripemd160` (0x3) - RIPEMD-160 hash function
- `Identity` (0x4) - Identity function (returns input data)
- `Modexp` (0x5) - Modular exponentiation
- `Sha3FIPS256` (0x400) - SHA3-256 hash function (FIPS variant)
- `ECRecoverPublicKey` (0x401) - Recover the public key from an elliptic curve signature
</details>
<details>
  <summary>Bittensor-Specific Precompiles</summary>

- `Ed25519Verify` - Verify Ed25519 signatures
- `BalanceTransfer` - Transfer TAO between accounts
- `StakingPrecompile`
- `StakingPrecompileV2` (0x805) - Main staking operations including:
  - `addStake` - Add stake to a hotkey
  - `removeStake` - Remove stake from a hotkey
  - `moveStake` - Move stake between hotkeys
  - `transferStake` - Transfer stake between coldkeys
  - `getTotalColdkeyStake` - Get total stake for a coldkey
  - `getTotalHotkeyStake` - Get total stake for a hotkey
  - `getStake` - Get stake between specific hotkey and coldkey
  - `addProxy` - Add a proxy delegate
  - `removeProxy` - Remove a proxy delegate
- `SubnetPrecompile` - Manage subnet operations
- `MetagraphPrecompile` - Interact with the metagraph
- `NeuronPrecompile` - Manage neuron operations
- UidLookupPrecompile
</details>

## Ethereum vs Bittensor EVM Smart Contracts


On the Ethereum network, nodes such as full nodes, validator nodes and archive nodes run the Ethereum Virtual Environment (EVM) run-time environment. Smart contracts operate under this EVM. See the below high-level diagram.

When we say “smart contracts on Bittensor” we refer to the new EVM compability feature in the Bittensor subtensor blockchain. When this EVM feature is turned ON, it allows the subtensor blockchain to execute Ethereum-compatible smart contracts. **Note that all operations performed by this new subtensor EVM feature are executed solely on the subtensor blockchain, not on the Ethereum blockchain.** 


<left>
<ThemedImage
alt="Local blockchain vs public subtensor"
sources={{
    light: useBaseUrl('/img/docs/2-EVM-block-diagram.svg'),
    dark: useBaseUrl('/img/docs/dark-2-EVM-block-diagram.svg'),
  }}
style={{width: 400}}
/>
</left>
<right>
<ThemedImage
alt="Local blockchain vs public subtensor"
sources={{
    light: useBaseUrl('/img/docs/EVM-subtensor-block-diagram.svg'),
    dark: useBaseUrl('/img/docs/dark-EVM-subtensor-block-diagram.svg'),
  }}
style={{width: 400}}
/>
</right>


<ResponsiveCards>    
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
