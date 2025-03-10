---
title: "Wallets, Coldkeys and Hotkeys in Bittensor"
---
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Wallets, Coldkeys and Hotkeys in Bittensor

This page introduces the core concepts of Bittensor wallets. Procedures for handling wallets and keys are described in: [Working with keys](../working-with-keys.md)

In Bittensor (like other cryptocurrency applications), a *wallet* is a tool for proving your identity, signing transactions, accessing your TAO, and managing your stake in subnets.

## What are wallets and keys?

There are many different *wallet applications*, but the core of your wallet is one or more cryptographic key-pairs, referred to as **coldkey** and **hotkey**. Each is actually a cryptographic [key-pair](https://en.wikipedia.org/wiki/Public-key_cryptography), a private and a public key. The public key is mathematically derived from the private key, and is a closely held secret: it allows the owner to sign transactions and decrypt secrets, essentially serving as a cryptographic authentication or identity. This is a general feature of decentralized, trustless systems like distributed ledgers/blockchains: your private key *is* your identity, in that theft or loss of your key results in *unrecoverable* loss of access.

In Bittensor, the coldkey and hotkey are used for different operations. In short, the hotkey is for mining and validation, and the coldkey for everything else; if you neither mine nor validate, you have no need for a hotkey, but you will identify validators and miners by their hotkey public keys.

The coldkey private key is needed to authorize highly sensitive operations involved in transferring TAO balances and managing stake, operations related to subnet management and governance, and management of hotkeys. The hotkey private key is needed to authorize miners to serve requests in subnets, and by validators to send requests to miners and to submit weights to the blockchain.

The coldkey public key identifies a wallet to the internet, serving as an address. To transfer ownership of TAO or alpha stake from one wallet to another, the sender needs only the public key of the recipient, and their own private key.

## Wallet applications

There are many different applications that can interact with your public and/or private keys in some way.

### Permissionless wallet apps

You can visit [bittensor.com/scan](https://bittensor.com/scan) and enter a coldkey public key view public information about any wallet. The browser hence is able to act as a kind of permissionless wallet application to display public information about wallets.

### Staker apps

Several applications exist that can interact securely with your coldkey, meaning essentially that you can load your coldkey into the application without having to have the key stored in unencrypted form on your disk. In theory this means that without your encryption password, it is impossible to steal your key even if someone accesses your device.

However, it must be considered that using your coldkey on a device offers other ways for attackers to steal your key, even without decrypting it. See [Coldkey workstation security](./coldkey-hotkey-security#coldkey-workstation-security)

This includes:
- The Bittensor wallet app for mobile: [bittensor.com/wallet](https://bittensor.com/wallet)
- [The Chrome extension](https://chromewebstore.google.com/detail/bittensor-wallet/bdgmdoedahdcjmpmifafdhnffjinddgc), which is also compatible with use of a Ledger hardware wallet. See [Using Ledger Hardware Wallet](../staking-and-delegation/using-ledger-hw-wallet.md)

### `btcli` and the Bittensor Python SDK

## Coldkey details

In `btcli`, the coldkey is equivalent to the wallet name. For example, the `--wallet.name` option in a `btcli` command always accepts only `<coldkey>` as its value and the `--wallet.hotkey` option only accepts `<hotkey>` as its value. This is because the coldkey holds the permissions and ownership over multiple hotkeys on-chain; hence, the wallet name is assigned to the coldkey.

**Relationship to hotkey**: A coldkey can exist without a hotkey or have multiple hotkeys. For example, to create a subnet, delegate stake, or simply hold balance you only need a coldkey, but if you want to validate or mine in a subnet, you need a hotkey paired with this coldkey.

**Purpose**: A coldkey is primarily for secure TAO storage and high-risk transactions, as described below (**Also see in the diagram in [Operational uses of keys](#operational-uses-of-keys))**:

- Your wallet's funds (TAO) on the chain are controlled by a coldkey.
- Transferring your TAO to other wallets/addresses.
- Delegating and undelegating your TAO tokens.
- Creating a subnet and obtaining a `netuid` for the newly-created subnet. The `netuid` is associated with the coldkey because subnet owner operations should be secure and conducted infrequently. 
- Emissions to the subnet owner are deposited directly to the subnet owner's coldkey.

**Encryption**: A coldkey is always encrypted when in your device storage. Only ever decrypted in-memory and only when needed.

A coldkey is like a highly secure key you use to access a safe where your valuables are stored. The coldkey is used less frequently than the hotkey, and is stored very securely to minimize the risk of unauthorized access.

:::tip Learn more about coldkey security

For general coverage of `btcli` security and usage considerations across persona, see: [Bittensor CLI: Permissions Guide](../btcli-permissions)

See also:

- [Wallets, Coldkeys and Hotkeys in Bittensor](../getting-started/wallets) for an introduction to the authentication technology used in Bittensor.
- [Coldkey and Hotkey Workstation Security](../getting-started/coldkey-hotkey-security) for contrete security details about managing keys material.


:::


<!-- <center>
<ThemedImage
alt="Coldkey and hotkey pairings"
sources={{
    light: useBaseUrl('/img/docs/coldkey-hotkey-pairing.svg'),
    dark: useBaseUrl('/img/docs/coldkey-hotkey-pairing.svg'),
  }}
style={{width: 750}}
/>
</center>

<br /> -->

### Existential deposit

An existential deposit is the minumum required TAO in a wallet (i.e., in a coldkey). If a wallet balance goes below the existential deposit, then this wallet account is deactivated and the remaining TAO in it is destroyed. **This is set to 500 RAO for any Bittensor wallet**. Also see [What is the Existential Deposit?](https://support.polkadot.network/support/solutions/articles/65000168651-what-is-the-existential-deposit-).

## Hotkey details

Hotkeys are used to register on a subnet as a miner or validator.

[Hotkey workstation security](../getting-started/coldkey-hotkey-security#hotkey-workstation-security)


**Relationship to coldkey**: You can create multiple hotkeys paired to your single coldkey. However, when you are validating or mining in a subnet, you are identified by a hotkey in that subnet, so that your coldkey is not exposed. Hence, you cannot use the same hotkey for two UIDs in a given subnet. You can, however, use the same hotkey for multiple UIDs but with each UID in a separate subnet.

**Purpose**: Used for regular operational tasks in the Bittensor network, such as described below (**Also see in the diagram in [Operational uses of keys](#operational-uses-of-keys)**):
  - Signing transactions.
  - Registering and running subnet miners and subnet validators.
  - If you are a subnet validator, then you can nominate your own hotkey so that the TAO holders can send their TAO to the hotkey.
  - If you are a TAO holder, for example, with a coldkey where your TAO is stored, you can delegate your TAO to the hotkey of the validator-delegate. See item 10 in the diagram in [Operational uses of keys](#operational-uses-of-keys).

## Operational uses of keys

The below diagram shows a few operations you can do with a hotkey and coldkey. Not all possible operations are shown below. You can use the `btcli` to perform any of these operations. See [Bitttensor Wallet CLI](../btcli.md#wallets) for command syntax.

<center>
<ThemedImage
alt="Coldkey and hotkey pairings"
sources={{
    light: useBaseUrl('/img/docs/1-operational-uses-of-keys.svg'),
    dark: useBaseUrl('/img/docs/dark-1-operational-uses-of-keys.svg'),
  }}
style={{width: 850}}
/>
</center>

<br />

The below numbered items describe the numbered sections in the above diagram:

1. A coldkey can be paired with multiple hotkeys. A coldkey is a more secure key.
2. In a given subnet, you can only use a hotkey for one UID. You cannot use the same hotkey for another UID in the same subnet. However, you can use a given hotkey for two different UIDs that are in two separate subnets. 
3. Transfer of TAO is always between one coldkey and another coldkey. That is, between one wallet and another wallet. 
4. When you create a subnet, the subnet registration costs are taken out of the subnet owner's cold key. The `netuid` of the subnet is associated with the coldkey only. This is because all subnet owner operations are highly secure and thus require the coldkey (which is always encrypted). The hotkey has no role here.
5. When you register as a subnet miner or a subnet validator, the registration costs will come out of your coldkey, but the UID is attached to your hotkey. Note that this registration type differs from creating a subnet, which only requires your coldkey. See `(4)` above.
6. Subnet owner emissions are deposited directly into the subnet owner's coldkey. The hotkey has no role here.
7. Emissions to the subnet validator and subnet miner are deposited directly into the hotkey to which the UID is attached. See `(5)` above.
8. As a validator, when you stake your TAO, your TAO will be transferred from your coldkey to your hotkey, which is attached to the UID. Similarly, unstaking will move the TAO from the hotkey attached to the UID into its coldkey.
9. As a validator, you can nominate your hotkey attached to the UID. This will publish the hotkey. TAO holders will send their TAO to this hotkey. This is also referred to as TAO holders delegating their TAO, or staking their TAO, to you, the validator. Also see `(10)` below.
10. As a TAO holder, you delegate your TAO to a validator's hotkey. The TAO you delegated will go from your coldkey into the validator's hotkey. This validator's hotkey is permanently attached to the validator's UID. Also see `(9)` above.


