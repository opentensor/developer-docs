---
title: "Wallets, Coldkeys and Hotkeys in Bittensor"
---
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Wallets, Coldkeys and Hotkeys in Bittensor

In Bittensor (like other cryptocurrency applications), a *wallet* is a tool for proving your identity, signing transactions, accessing your TAO, and managing your stake in subnets.
This page introduces the core concepts involved.

For detailed procedures for handling wallets and keys, see: [Working with keys](../working-with-keys.md)

For detailed security considerations, see: [Coldkey and Hotkey Workstation Security](./coldkey-hotkey-security.md)

## What are wallets and keys?

There are many different *wallet applications*, but the core of your wallet is one or more cryptographic key-pairs, referred to as **coldkey** and **hotkey**.
Each is actually a cryptographic [key-pair](https://en.wikipedia.org/wiki/Public-key_cryptography), a private and a public key.
The public key is mathematically derived from the private key.
The private key is a closely held secret: it allows the owner to sign transactions and decrypt secrets, essentially serving as a cryptographic authentication or identity.
This is a general feature of decentralized, trustless systems like distributed ledgers/blockchains: your private key *is* your identity, in that theft or loss of your key results in *unrecoverable* loss of access.

In Bittensor, the coldkey and hotkey are used for different operations. In short, the hotkey is for mining and validation, and the coldkey for everything else; if you neither mine nor validate, you have no need for a hotkey, but you will identify validators and miners by their hotkey public keys.

The coldkey private key is needed to authorize highly sensitive operations involved in transferring TAO balances and managing stake, operations related to subnet management and governance, and management of hotkeys. The hotkey private key is needed to authorize miners to serve requests in subnets, and by validators to send requests to miners and to submit weights to the blockchain.

The coldkey public key identifies a wallet to the internet, serving as an address. To transfer ownership of TAO or alpha stake from one wallet to another, the sender needs only the public key of the recipient, and their own private key.

## Wallets and wallet applications

We must be careful to distinguish two senses of the term 'wallet' that can otherwise be confusing:

- The **cryptographic wallet** is one or more cryptographic key pairs that comprise an identity, and allow a person to sign transactions or be referred to in transactions signed by others. In this sense, the wallet is more or less synonymous with the unique **coldkey** that controls access to your assets and serves as your public identity.

- The **wallet application** is software that runs on your device and allows you to interact with the blockchain by entering your keys. There are several officially supported Bittensor wallet applications:

  - The Bittensor wallet app for mobile: [bittensor.com/wallet](https://bittensor.com/wallet)
  - [The Polkadot browser extension](https://polkadot.js.org/extension/) which can be used with Polkadot Vault...
  
  - [The Bitensor wallet browser extension](https://chromewebstore.google.com/detail/bittensor-wallet/bdgmdoedahdcjmpmifafdhnffjinddgc), which is also compatible with use of a Ledger hardware wallet. See [Using Ledger Hardware Wallet](../staking-and-delegation/using-ledger-hw-wallet.md)

    Using the Bittensor wallet browser extension, you can [use tao.app to manage stake](https://tao.app).

  - The Bittensor Python SDK, which includes the secure [Bittensor Wallet module](https://docs.bittensor.com/btwallet-api/html/autoapi/btwallet/wallet/index.html).
  - The Bittensor CLI, `btcli`, which uses the Bittensor Wallet module under the hood. 

Every Bittensor user has one or more cryptographic wallets, i.e. one or more coldkey. Any cryptographic wallet can be loaded into any number of wallet applications. If every wallet application that has been initialized with your cryptographic wallet (i.e. signed into with your coldkey private key) is closed, logged out, etc., and the device incinerated, your cryptographic wallet exists on the blockchain, and can be recovered with your *seed phrase*.

Different wallet applications have different levels of functionality:

- The mobile app and Chrome extension allow for staking and transfer of TAO balalnces, but do not include any hotkey management or advanced functionality.

  - Note that the Chome extension is compatible with a hardware wallet, which can be a strong security option. This implies using a laptop as your [coldkey workstation](../getting-started/coldkey-hotkey-security).

  - The mobile app depends on using a secure phone as a [coldkey workstation](../getting-started/coldkey-hotkey-security).

- `btcli` and the SDK allow for hotkey management and other advanced functionality. These require a laptop as a [coldkey workstation](../getting-started/coldkey-hotkey-security).

:::tip
Note that you can also check balances on an unsecure device without entering your coldkey private key. For example, using [https://bittensor.com/scan](https://bittensor.com/scan). These website can be considered permissionless wallet applications.

See [Coldkey and Hotkey Workstation Security: Permissionless workstation](../getting-started/coldkey-hotkey-security#permissionless-workstation)
:::

## The seed phrase a.k.a. mnemonic

The ***seed phrase*** (a.k.a. 'menemonic' or 'recovery phrase') is a series of (at least 12) words that is generated together with your wallet's cryptographic key pair, and which can be used to recover the coldkey private key. This seed phrase is therefore a human-usable way to save access to the cryptographic wallet offline, and to import the cryptographic wallet into a wallet application.

Arguably the most important operational goal when handling Bittensor wallets is to avoid losing or leaking your seed phrase. Make sure you [Handle your Seed Phrase/Mnemonic Securely](../keys/handle-seed-phrase).

## Wallet applications

There are many different applications that can interact with your public and/or private keys in some way.

### Permissionless wallet apps

You can visit [bittensor.com/scan](https://bittensor.com/scan) and enter a coldkey public key to view public information about any wallet.
The browser in this case is able to act as a kind of permissionless wallet application to display public information about wallets.

### Staking apps

Several applications exist that can interact securely with your coldkey. This basically means that you can load your coldkey into the application without having to have the key stored in an unencrypted form on your disk.
In theory this means that without your encryption password, it is impossible to steal your key—even if someone accesses your device.

However, still consider that using your coldkey on a device offers other ways for attackers to steal your key, even without decrypting it.
See [Coldkey workstation security](./coldkey-hotkey-security#coldkey-workstation).

Secure wallet apps supported by Opentensor Foundation include:
- The Bittensor wallet app for mobile: [bittensor.com/wallet](https://bittensor.com/wallet)
- [The Chrome extension](https://chromewebstore.google.com/detail/bittensor-wallet/bdgmdoedahdcjmpmifafdhnffjinddgc), which is also compatible with use of a Ledger hardware wallet. See [Using Ledger Hardware Wallet](../staking-and-delegation/using-ledger-hw-wallet.md)

### `btcli` and the Bittensor Python SDK

The Bittensor Command Line Interface (BTCLI) and Bittensor Python SDK offer more extended functionality and are required for advanced functionality, including:

- Scripting
- Managing hotkeys for mining and validating
- Creating and configuring subnets
- Participating in governance

## Coldkey details

In `btcli`, the coldkey is equivalent to the wallet name. For example, the `--wallet.name` option in a `btcli` command always accepts only `<coldkey>` as its value and the `--wallet.hotkey` option only accepts `<hotkey>` as its value. 
This is because the coldkey holds the permissions and ownership over multiple hotkeys on-chain; hence, the wallet name is assigned to the coldkey.

**Relationship to hotkey**: A coldkey can exist without a hotkey or have multiple hotkeys. For example, to create a subnet, delegate stake, or simply hold balance you only need a coldkey. However, if you want to validate or mine in a subnet, you need a hotkey paired with this coldkey.

**Purpose**: A coldkey is required for all operations that affect balances, such as transfer of TAO, staking and unstaking.
It is also required for creating and registering hotkeys, and for subnet management and governance functions.

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

An existential deposit is the minumum required TAO in a wallet (i.e., in a coldkey).
If a wallet balance goes below the existential deposit, then this wallet account is deactivated and the remaining TAO in it is destroyed.
**This is set to 500 RAO for any Bittensor wallet**.

See also [What is the Existential Deposit?](https://support.polkadot.network/support/solutions/articles/65000168651-what-is-the-existential-deposit-).

## Hotkey details

Hotkeys are used to register on a subnet as a miner or validator.

[Hotkey workstation security](../getting-started/coldkey-hotkey-security#hotkey-workstation)

**Relationship to coldkey**: You can create multiple hotkeys paired to your single coldkey. 
However, when you are validating or mining in a subnet, you are identified by a hotkey in that subnet, so that your coldkey is not exposed. 
Hence, you cannot use the same hotkey for two UIDs in a given subnet. 
You can, however, use the same hotkey for multiple UIDs but with each UID in a separate subnet.

**Purpose**: Hotkeys are used for regular operational tasks in the Bittensor network, such as those described below (**Also see in the diagram in [Operational uses of keys](#operational-uses-of-keys)**):
  - Signing transactions
  - Registering and running subnet miners and subnet validators
  - Nominating your own hotkey (given you are a subnet validator) so that the TAO holders can send their TAO to the hotkey
  - Delegating your TAO to the hotkey of the validator-delegate (given you are a TAO holder with a coldkey where your TAO is stored) (See item 10 in the diagram in [Operational uses of keys](#operational-uses-of-keys).)

## Key usage FAQ

### Can a coldkey be paired with multiple hotkeys?

Yes.
A miner or validator may use a single coldkey to manage a number of hotkeys for mining or validation in different subnets.

### Can I use the same hotkey for multiple UIDs in the same subnet?

No.
In a given subnet, each hotkey can only be used for one UID. 
However, you can reuse the same hotkey for UIDs in different subnets.

### Can I transfer TAO to a hotkey?

Technically yes, but you shouldn't. 
This is contrary to the intended design, and if you try, you may irreversably lose your funds&mdash;transfer of TAO should always be *to a coldkey*; the coldkey public key serves as the public address of the wallet.

### Is a coldkey associated with a subnet?

Yes!
When a subnet is created, netuid is bound to the coldkey that pays the subnet registration fee.
This coldkey is required to change subnet configuration settings (hyperparameters), and 18% portion of the subnets emissions as allocated to this coldkey.

### Where are subnet validator and subnet miner emissions deposited?

Validator and miner emissions are received in the alpha token of the subnet in which they are validating/mining.
This is in the form of stake to their hotkey owned by their coldkey, which can then be unstaked back into a TAO balance for that coldkey.

### How do I delegate my TAO to a validator’s hotkey?

As a TAO holder, you can stake or delegate to a validator on a subnet by exchanging your TAO for a stake balance in the subnet's alpha $\alpha$ token, which is always tied to a hotkey in the subnet, i.e. that of a validator.

See [Staking/Delegation Overview](../staking-and-delegation/delegation) for more on staking.

