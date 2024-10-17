---
title: "Staking Precompile"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Staking Precompile

Staking precompile allows Ethereum code to interact with the staking feature of subtensor. For example, by using the staking precompile, the subtensor methods [`add_stake`](https://github.com/opentensor/subtensor/blob/main/pallets/subtensor/src/staking/add_stake.rs) or [`remove_stake`](https://github.com/opentensor/subtensor/blob/main/pallets/subtensor/src/staking/remove_stake.rs)  can be called in order to delegate stake to a hotkey or undelegate stake from a hotkey. 

In this tutorial you will learn how to interact with staking precompile in two ways:

1. Call the staking precompile from another smart contract.
2. Use the staking precompile's ABI and your Metamask wallet to call the staking precompile on EVM localnet. You will use [Remix IDE](https://remix.ethereum.org/) for this.

## Prerequisites

1. You should also be comfortable using [Remix IDE](https://remix.ethereum.org/).
2. Read [EVM on Subtensor](./evm-on-subtensor.md) for a basic understanding of what an ABI is and how to use it. 

## Setup EVM localnet, subnet and delegate

1. [Launch EVM localnet](./evm-localnet-with-metamask-wallet.md). Also, follow the instructions of running local chain all the way so that you have a Metamask address with some TAO balance.

2. On this EVM localnet create one subnet and a delegate hotkey. The commands below may change with a different version of btcli:

    ```bash
    btcli subnet create --subtensor.network localhost:9946
    btcli subnet register --subtensor.network localhost:9946
    btcli root nominate --subtensor.network localhost:9946 
    ```

3. Save the delegate hotkey address. You will use this in the staking pool use case below.

## Call the staking precompile from another smart contract (staking pool use case)

In this interaction you will compile [`stake.sol`](https://github.com/opentensor/evm-bittensor/blob/main/solidity/stake.sol), a smart contract Solidity code and execute it on the subtensor EVM. This `stake.sol` will, in turn, call the staking precompile that is already deployed in the subtensor EVM.

Before you proceed, familiarize yourself with the Solidity code of the [`stake.sol`](https://github.com/opentensor/evm-bittensor/blob/main/solidity/stake.sol) smart contract. 

1. Copy the text of [`stake.sol`](https://github.com/opentensor/evm-bittensor/blob/main/solidity/stake.sol) contract to Remix IDE.

2. You will now convert your delegate hotkey ss58 from the above [Setup EVM localnet, subnet and delegate](#setup-evm-localnet-subnet-and-delegate) step into its corresponding public key. Use the [ss58.org](https://ss58.org/) site to obtain the public key for your delegate hotkey ss58.

3. In the `stake.sol` text in Remix IDE, replace the `HOTKEY` constant on line 9, where it says `bytes32 constant HOTKEY = 0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d;`, with your delegate hotkey's public key.

4. Compile it in Remix IDE.

5. Connect Remix IDE to Injected Provider - Metamask and your Metamask address that has TAO balance. You will stake this TAO balance to the delegate hotkey's public key.

6. Execute the Stake contract method `stake_from_this_contract_to_alice` and pass 1e^9 Wei to it (1 TAO).

7. Check the stake balance of your delegate hotkey and confirm that it has increased by 1 TAO.

## Use the staking precompile's ABI from your user account (staking as an individual use case)

In this tutorial, you will interact directly with the staking precompile by using its ABI, and use your Metamask wallet as the source of TAO to stake.

1. Copy this below ABI of staking precompile contract into Remix IDE as a new file:

    ```json
    [
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "hotkey",
                    "type": "bytes32"
                }
            ],
            "name": "addStake",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "hotkey",
                    "type": "bytes32"
                },
                {
                    "internalType": "uint64",
                    "name": "amount",
                    "type": "uint64"
                }
            ],
            "name": "removeStake",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        }
    ]
    ```

2. Copy staking precompile address `0x0000000000000000000000000000000000000801` to the **At Address** field in Remix IDE, and click **At Address** button.

3. Remix IDE will find the precompile at the precompile address on the subtensor EVM and show it in the list of deployed contracts. Expand the contract, then expand the `addStake` method, and paste the public key of your delegate hotkey into the `hotkey` field. Then click **transact** and wait for the transaction to be completed.

4. Follow these steps to see that the stake record is updated in [Polkadot JS app](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9946#/chainstate): 

   1.  Select **subtensorModule** + **stake** in the drop-down list.
   2.  Paste the delegate hotkey account ID in the first parameter.
   3.  Toggle **include option** OFF for the second parameter.
   4.  Click the **+** button and find the new stake record.

