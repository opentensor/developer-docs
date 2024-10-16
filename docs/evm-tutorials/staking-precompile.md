---
title: "Staking Precompile"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Staking Precompile

Staking precompile allows EVM user code to interact with staking feature of Subtensor. For example, `add_stake` or `remove_stake` methods can be called in order to delegate or undelegate stake to/from a hotkey. Below steps describe how to interact with staking precompile via a smart contract or a Metamask wallet with a local testnet and Remix IDE.

## Prerequisites

1. You should be familiar with Bittensor and usage of `btcli` tool in order to understand staking process of Bittensor. If you are new to Bittensor ecosystem, please read [Bittensor Docs](https://docs.bittensor.com/) first and setup btcli locally. 

2. You should also be comfortable using [Remix IDE](https://remix.ethereum.org/).

## Setup EVM localnet, subnet and delegate

1. [Launch local testnet](./evm-testnet-with-metamask-wallet.md). Also, follow the instructions of running local chain all the way so that you have a Metamask address with some TAO balance.

2. Setup a local testnet so that it contains one subnet and a delegate hotkey. The commands below may change with a different version of btcli:

```bash
btcli subnet create --subtensor.network localhost:9946
btcli subnet register --subtensor.network localhost:9946
btcli root nominate --subtensor.network localhost:9946 
```

Save the hotkey address that becomes the delegate. 

:::tip Keys used in this example
In this example, we are going to use Alice key for simplicity: `5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY` and the public key that matches to this address: 0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d. You can convert ss58 address into a public key using [ss58.org](https://ss58.org/).
:::

## Interaction via a smart contract (staking pool use case)

The steps 3-5 below will compile the staking smart contract Solidity code and executes it on the EVM. On the other hand, if you would like to ineract with the precompiled staking smart contract by using its ABI, and using just the Metamask wallet as a user, then skip to step 6.

3. Copy the text of `stake.sol` contract to Remix IDE and compile it. Replace `HOTKEY` constant with your hotkey public key.

4. Connect Remix IDE to Injected Provider - Metamask and your Metamask address that has TAO balance.

5. Execute Stake contract method `stake_from_this_contract_to_alice` and pass 1^9 Wei to it (1 TAO).

## Interaction via a user account (staking as an individual use case)

6. Copy this ABI of staking precompile contract into Remix IDE as a new file:

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

7. Copy staking precompile address `0x0000000000000000000000000000000000000801` to the "At Address" field in Remix IDE, and click "At Address" button.

8. Remix IDE will find the precompile and show it in the list of deployed contracts. Expand the contract, then expand the addStake method, and paste the public key of your delegate hotkey into the `hotkey` field. Then click "transact" and wait for the transaction to mine.

## Proof of result

9. Observe that stake map is updated in [Polkadot JS app](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9946#/chainstate). Follow these steps:

    1. Select subtensorModule + stake in the drop-down lists
    2. Paste the delegate hotkey account ID in the first parameter
    3. Toggle "include option" off for the second parameter
    4. Click "+" button and find the new stake records

