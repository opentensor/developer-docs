---
title: "Transfer TAO from Metamask to SS58 Address"
---
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Transfer TAO from Metamask to SS58 Address

In this tutorial you will learn how to transfer TAO from your Metamask wallet to your Bittensor SS58 address for a coldkey (wallet) or a hotkey. There are two different options:

- [**Option 1:** Transfer using a precompiled contract](#option-1-transfer-using-a-precompiled-contract).
- [**Option 2:** Transfer using the `withdraw` extrinsic in the `evm` pallet in subtensor blockchain](#option-2-transfer-using-the-withdraw-extrinsic-in-the-subtensor-evm-pallet).

## Prerequisites

- **Node.js** (v16 or later recommended)
- **npm** or **yarn**
- [Clone the Bittensor EVM examples repo](./install.md)
- [Get set up for using EVM wallet on testnet](./evm-testnet-with-metamask-wallet)
- [Install](./install) the EVM-Bittensor repo, containing scripts and examples.


## Option 1: Transfer using a Precompiled Contract

**Best for:** Most users. You do NOT need the private key or seed for your SS58 address.

This option uses a precompiled contract to transfer TAO from your Metamask wallet to any SS58 address (coldkey or hotkey).

### Configure the destination address

Open [`withdraw.js`](https://github.com/opentensor/evm-bittensor/blob/main/examples/withdraw.js) in the EVM-Bittensor repo. Find the following line:

```js
// Destination address can be replaced with any ss58 address here:
const destinationAddress = account.address;
```

Replace it with your own SS58 address:

```js
const destinationAddress = "5HgU7B3xfSfisR1A7wDMt7FHX5Uizj6xtWWHwhwJMZSrdN7y";
```


### Run the transfer script

```bash
node transfer.js
```

:::tip 1 TAO = 1e18
In Bittensor EVM, 1 TAO is written as `1e18` (just like on Ethereum). For example, to send 0.5 TAO:
```js
const value = BigInt(0.5 * 1e18).toString();
```
:::

### Run the withdraw script

```bash
node withdraw.js
```

You should see output similar to:

```bash showLineNumbers
node withdraw.js
2024-10-07 15:34:58        REGISTRY: Unknown signed extensions SubtensorSignedExtension, CommitmentsSignedExtension found, treating them as no-effect
...
Sending balance to ss58 address: 5HgU7B3xfSfisR1A7wDMt7FHX5Uizj6xtWWHwhwJMZSrdN7y
pubk = f873b72b75b9029397edceaa04cf08cc97909c8b6304f2ccc3593641bf92e97c
Transaction response: ContractTransactionResponse { ... }
Transaction confirmed.
```

:::info
The `ss58` address is your destination (coldkey or hotkey). The `from` address is your Metamask wallet.
:::

### Check your SS58 balance

Use the Bittensor CLI to check your new balance:

```bash
btcli wallet balance --ss58 5HgU7B3xfSfisR1A7wDMt7FHX5Uizj6xtWWHwhwJMZSrdN7y
```

## Option 2: Transfer using the `withdraw` Extrinsic in the Subtensor EVM Pallet

**Best for:** Advanced users. You WILL need the private key for your SS58 address.

This option uses the `withdraw` extrinsic in the EVM pallet, allowing you to transfer from an EVM address to an SS58 address using Polkadot.js Apps.

### Copy your SS58 address

For example: `5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty`. You will need the private key for this address set up in the Polkadot.js extension.

### Edit the destination in the script

Open [`withdraw-address.js`](https://github.com/opentensor/evm-bittensor/blob/main/examples/withdraw-address.js) and set your SS58 address:

```js
const ss58Address = "<your SS58 address>";
```

### Run the withdraw-address script

```bash
node withdraw-address.js
```

### Copy the "Ethereum mirror" output address

The script will output an "Ethereum mirror" address. Copy this address.

### Transfer TAO to the mirror address using Metamask

- Open Metamask and send the desired amount of TAO to the mirror address.
- If you restarted the network, clear Metamask's activity tab data: **Settings > Advanced > Clear activity tab data**.

### Ensure your destination address is funded

Make sure the destination address has enough TAO to pay for transaction fees.

### Open the Extrinsics page in Polkadot.js Apps

[Polkadot.js Apps Extrinsics](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ftest.chain.opentensor.ai%3A443#/extrinsics)

### Submit the withdraw extrinsic

- Select the `evm` pallet and `withdraw` extrinsic.
- Paste the "Ethereum mirror" address into the address field.
- Enter the amount you are transferring.
- Note: Metamask balances are by 10^9 lower than Polkadot Apps UI balances (Metamask does not respect 10^9 decimals for native currency).

### Submit the transaction

### Check your SS58 balance

```bash
btcli wallet balance --ss58 <your SS58 address>
```
