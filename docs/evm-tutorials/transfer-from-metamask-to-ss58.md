---
title: "Transfer from Metamask to SS58 address"
---
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Transfer from Metamask to SS58 address

In this tutorial you will learn how to transfer TAO from your Metamask wallet to your Bittensor SS58 address for a coldkey (wallet) or a hotkey. You will learn how to do this via two different methods:

- **Method 1:** Transfer using a precompiled contract.
- **Method 2:** Transfer using the `withdraw` extrinsic in the `evm` pallet in subtensor blockchain.

## Prerequisite

:::danger stop, did you set up your Metamask wallet for EVM?
You must run either [EVM Localnet with Metamask Wallet](./evm-localnet-with-metamask-wallet.md) or [EVM Testnet with Metamask Wallet](./evm-testnet-with-metamask-wallet.md) tutorial before you can run this tutorial. 
:::

## Method 1: Transfer using a precompiled contract

The private key or the seed for your SS58 is **not required** for this method.

This step will transfer 0.5 TAO to your `ss58` destination address specified in the `withdraw.js` (ADD LINK) file. Look for the following lines:

```javascript
// Destination address can be replaced with any ss58 address here:
const destinationAddress = account.address;
```

and provide your `ss58` destination address as shown below:

```javascript
const destinationAddress = "5HgU7B3xfSfisR1A7wDMt7FHX5Uizj6xtWWHwhwJMZSrdN7y";
```

Next, run:

```bash
node transfer.js
```

Then, run:

```bash
node withdraw.js
```

You will see the output similar to below, indicating a successful transfer of TAO from your Metamask account to your `ss58` destination address: 

```bash showLineNumbers
node withdraw.js
2024-10-07 15:34:58        REGISTRY: Unknown signed extensions SubtensorSignedExtension, CommitmentsSignedExtension found, treating them as no-effect
2024-10-07 15:34:58        API/INIT: RPC methods not decorated: chainHead_v1_body, chainHead_v1_call, chainHead_v1_continue, chainHead_v1_follow, chainHead_v1_header, chainHead_v1_stopOperation, chainHead_v1_storage, chainHead_v1_unfollow, chainHead_v1_unpin, chainSpec_v1_chainName, chainSpec_v1_genesisHash, chainSpec_v1_properties, debug_getBadBlocks, debug_getRawBlock, debug_getRawHeader, debug_getRawReceipts, debug_getRawTransaction, delegateInfo_getDelegate, delegateInfo_getDelegated, delegateInfo_getDelegates, eth_getBlockReceipts, neuronInfo_getNeuron, neuronInfo_getNeuronLite, neuronInfo_getNeurons, neuronInfo_getNeuronsLite, subnetInfo_getLockCost, subnetInfo_getSubnetHyperparams, subnetInfo_getSubnetInfo, subnetInfo_getSubnetInfo_v2, subnetInfo_getSubnetsInf_v2, subnetInfo_getSubnetsInfo, transactionWatch_v1_submitAndWatch, transactionWatch_v1_unwatch, transaction_v1_broadcast, transaction_v1_stop
2024-10-07 15:34:58        API/INIT: node-subtensor/302: Not decorating unknown runtime apis: 0x42e62be4a39e5b60/1, 0x806df4ccaa9ed485/1, 0x8375104b299b74c5/1, 0x5d1fbfbe852f2807/1, 0xc6886e2f8e598b0a/1
Sending balance to ss58 address: 5HgU7B3xfSfisR1A7wDMt7FHX5Uizj6xtWWHwhwJMZSrdN7y
pubk = f873b72b75b9029397edceaa04cf08cc97909c8b6304f2ccc3593641bf92e97c
Transaction response: ContractTransactionResponse {
  provider: JsonRpcProvider {},
  blockNumber: null,
  blockHash: null,
  index: undefined,
  hash: '0x4f3bde9e678d7307f2c07dd3212d6920db8e2af8ade052a823b3ad1f28ddc221',
  type: 2,
  to: '0x0000000000000000000000000000000000000800',
  from: '0x709615c655B24919F48B365D292521EFcC74467B',
  nonce: 0,
  gasLimit: 21576n,
  gasPrice: undefined,
  maxPriorityFeePerGas: 0n,
  maxFeePerGas: 20000000000n,
  maxFeePerBlobGas: null,
  data: '0xcd6f4eb1f873b72b75b9029397edceaa04cf08cc97909c8b6304f2ccc3593641bf92e97c',
  value: 500000000000000000n,
  chainId: 945n,
  signature: Signature { r: "0xc8cf1d54513eb26ee13ca8e001201e918d50593ce6efd4ceee6645ec1879f183", s: "0x6594fe686ecac6131b536b9ff5277f40da1d12ab6c2a269693029c58cef8417d", yParity: 0, networkV: null },
  accessList: [],
  blobVersionedHashes: null
}
Transaction confirmed.
```

In the above example, a coldkey `ss58` address `5HgU7B3xfSfisR1A7wDMt7FHX5Uizj6xtWWHwhwJMZSrdN7y` (line 5 in the above log) is used as a destination address. The Metamask wallet address used is: `0x709615c655B24919F48B365D292521EFcC74467B` (line 15 in the above log).

Finally, use the below `btcli` command to check the balance of your `ss58` address (the below `--ss58` option is supported in BTCLI 8.2.0 or later versions):

```bash
btcli wallet balance --ss58 5HgU7B3xfSfisR1A7wDMt7FHX5Uizj6xtWWHwhwJMZSrdN7y
```

## Method 2: Transfer using `withdraw` extrinsic in subtensor `evm` pallet

You will need the private key for your SS58 for this method.

1. Copy your `ss58` address (for example: `5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty`). You need the private key for this address setup in Polkadot JS extension.
2. Paste it into `ss58Address` in main function in `withdraw-address.js` (ADD LINK) script.
3. Run:

    ```bash
    node withdraw-address.js
    ```

4. Copy the "Ethereum mirror:" output address.
5. Transfer the amount to this address that you wish to transfer using Metamask. Make sure to clear activity tab data if you restarted the network previously: **Settings** > **Advanced** > **Clear activity tab data**.
6. Make sure your destination address is funded to run a transaction.
7. Open the **Extrisics** section in Polkadot JS app: [https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9946#/extrinsics](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9946#/extrinsics).
8. Select `evm` pallet and `withdraw` extrinsic.
9. Paste the "Ethereum mirror" output address into address field.
10. Put the amount you are transferring into amount field. Note that Metamask balances are by 10^9 lower than Polkadot Apps UI balances because Metamask will not respect 10^9 decimals for native currency before we have a corresponding PR to https://github.com/ethereum-lists merged.
11. Submit the transaction.
12. Finally, use the below `btcli` command to check the balance of your `ss58` address (the below `--ss58` option is supported in BTCLI 8.2.0 or later versions):

    ```bash
    btcli wallet balance --ss58 <ss58 address>
    ```
