---
title: "Wallets, Coldkeys and Hotkeys in Bittensor"
---
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Wallets, Coldkeys and Hotkeys in Bittensor

In Bittensor (like other cryptocurrency applications), a *wallet* is a tool for proving your identity, signing transactions, accessing your TAO, and managing your stake in subnets. This page introduces the core concepts involved.

For detailed procedures for handling wallets and keys, see: [Working with keys](../working-with-keys.md)

For detailed security considerations, see: [Coldkey and Hotkey Workstation Security](./coldkey-hotkey-security.md)

## What are wallets and keys?

There are many different *wallet applications*, but the core of your wallet is one or more cryptographic key-pairs, referred to as **coldkey** and **hotkey**. Each is actually a cryptographic [key-pair](https://en.wikipedia.org/wiki/Public-key_cryptography), a private and a public key. The public key is mathematically derived from the private key, and is a closely held secret: it allows the owner to sign transactions and decrypt secrets, essentially serving as a cryptographic authentication or identity. This is a general feature of decentralized, trustless systems like distributed ledgers/blockchains: your private key *is* your identity, in that theft or loss of your key results in *unrecoverable* loss of access.

In Bittensor, the coldkey and hotkey are used for different operations. In short, the hotkey is for mining and validation, and the coldkey for everything else; if you neither mine nor validate, you have no need for a hotkey, but you will identify validators and miners by their hotkey public keys.

The coldkey private key is needed to authorize highly sensitive operations involved in transferring TAO balances and managing stake, operations related to subnet management and governance, and management of hotkeys. The hotkey private key is needed to authorize miners to serve requests in subnets, and by validators to send requests to miners and to submit weights to the blockchain.

The coldkey public key identifies a wallet to the internet, serving as an address. To transfer ownership of TAO or alpha stake from one wallet to another, the sender needs only the public key of the recipient, and their own private key.

## Wallet applications

There are many different applications that can interact with your public and/or private keys in some way.

### Permissionless wallet apps

You can visit [bittensor.com/scan](https://bittensor.com/scan) and enter a coldkey public key view public information about any wallet. The browser hence is able to act as a kind of permissionless wallet application to display public information about wallets.

### Staking apps

Several applications exist that can interact securely with your coldkey, meaning essentially that you can load your coldkey into the application without having to have the key stored in unencrypted form on your disk. In theory this means that without your encryption password, it is impossible to steal your key even if someone accesses your device.

However, it must be considered that using your coldkey on a device offers other ways for attackers to steal your key, even without decrypting it. See [Coldkey workstation security](./coldkey-hotkey-security#coldkey-workstation-security)

This includes:
- The Bittensor wallet app for mobile: [bittensor.com/wallet](https://bittensor.com/wallet)
- [The Chrome extension](https://chromewebstore.google.com/detail/bittensor-wallet/bdgmdoedahdcjmpmifafdhnffjinddgc), which is also compatible with use of a Ledger hardware wallet. See [Using Ledger Hardware Wallet](../staking-and-delegation/using-ledger-hw-wallet.md)

### `btcli` and the Bittensor Python SDK

The Bittensor Command Line Interface (BTCLI) and Bittensor Python SDK offer more extended functionality, and are required for advanced functionality including:

- Scripting
- Managing hotkeys for mining and validating
- Creating and configuring subnets
- Participating in governance

## Coldkey details

In `btcli`, the coldkey is equivalent to the wallet name. For example, the `--wallet.name` option in a `btcli` command always accepts only `<coldkey>` as its value and the `--wallet.hotkey` option only accepts `<hotkey>` as its value. This is because the coldkey holds the permissions and ownership over multiple hotkeys on-chain; hence, the wallet name is assigned to the coldkey.

**Relationship to hotkey**: A coldkey can exist without a hotkey or have multiple hotkeys. For example, to create a subnet, delegate stake, or simply hold balance you only need a coldkey, but if you want to validate or mine in a subnet, you need a hotkey paired with this coldkey.

**Purpose**: A coldkey is required for all operations that affect balances, such as transfer of TAO, staking and unstaking. It is also required for creating and registering hotkeys, and for subnet management and governance functions.

**Encryption**: A coldkey is only stored on your disk in encrypted form, and requires an encryption password.

See [Coldkey and Hotkey Workstation Security](../getting-started/coldkey-hotkey-security) for concrete security details about working with coldkeys.


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

## Key usage FAQ

### Can a coldkey be paired with multiple hotkeys?

Yes. A miner or validator may use a single coldkey go manage a number of hotkeys for mining or validation in different subnets.

### Can I use the same hotkey for multiple UIDs in the same subnet?

No. In a given subnet, each hotkey can only be used for one UID. However, you can reuse the same hotkey for UIDs in different subnets.

### Can I transfer TAO to a hotkey?

Technically yes but no you should not do it! This is contrary to design, and if you try, you may irreversably lose your funds&mdash;transfer of TAO is always *to* a coldkey; the coldkey public key serves as the public address of the wallet.

### Is a coldkey associated with a subnet?

Yes! When a subnet is created, netuid is bound to the coldkey that pays the subnet registration fee. This coldkey is required to change subnet configuration settings (hyperparameters), and 18% portion of the subnets emissions as allocated to this coldkey.


### Where are subnet validator and subnet miner emissions deposited?

Validator and miner emissions are received in the alpha token of the subnet in which they are validating/mining, in the form of stake to their hotkey owned by their coldkey, which can then be unstaked back into a TAO balance for that coldkey.

### How do I delegate my TAO to a validator’s hotkey?

As a TAO holder, you can stake or delegate to a validator on a subnet by exchanging your TAO for a stake balance in the subnet's alpha $\alpha$ token, which is always tied to a hotkey in the subnet, i.e. that of the validator.

See [Staking/Delegation Overview](../staking-and-delegation/delegation)




by sending it from your own coldkey to the validator’s hotkey (the hotkey 
that’s tied to their UID). This is also referred to as staking your TAO to a validator.