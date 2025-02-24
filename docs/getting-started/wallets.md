---
title: "Wallets, Coldkeys and Hotkeys in Bittensor"
---
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';


How do you recommend miners to store their cold keys?
Ideally on an air gapped device or at least a device with minimal access / security risk involved. The coldkey must not be placed on a server used for mining as subnet code should not be considered safe code. Though most subnets take appropriate steps to ensure the security of their codebases, any time you have a port open and requests coming in there is risk.
How often do miners have to use them and for what ops?
The only operation miners need these for is to register onto the subnet. This should be done securely and not on servers that will be used for mining ops.
And then so hotkeys as well, how in practical terms are people managing and propagating them
Hotkeys are not encrypted by default (unlike coldkeys) and therefore have less security implications. Hotkeys do need to be present for a variety of operations which miner and validator software interact with such as axon serving, on-chain data commitments, and other functions. These essentially need to be present in the unsafe environment that is running subnet code on a machine but come with less risks if they do get compromised.
What about rotation?
Key rotation can add risk if the original coldkey is stored in a secure manner and is likely not too recommended unless there is a suspcicion or possibility that the original key has been or could have been compromised. An important note here is that specifically for validators, it is highly recommended to use a unique hotkey per subnet and rotate these when new subnets register. The reason being if a validator's single hotkey does get compromised, damage can be done by the attacker setting incorrect weights for miners or introducing a deadlock condition, effectively preventing normal operation.


# Wallets, Coldkeys and Hotkeys in Bittensor

In Bittensor (like other cryptocurrency applications), a *wallet* is a tool for managing the cryptographic key-pairs required to prove your identity, sign transactions, and access your TAO.

This page introduces the core concepts of Bittensor wallets. Procedures for handling wallets and keys are described in: [Working with keys](../working-with-keys.md)

## Coldkey and hotkey

A Bittensor wallet consists of a **coldkey** and a **hotkey**. Coldkeys and hotkeys are used for different operations in the Bittensor ecosystem. These key types are associated with eachother on the blockchain and can be conveniently managed with `btcli`, the Bittensor SDK, or other Bittensor wallet software.

:::tip
*Most* users won't need a hotkey&mdash;this is not required to hold TAO and delegate it to Validators hotkey.

Miners and validators must have both. Miners are likely to have multiple hotkeys per coldkey.
:::

Each key is a pairing of two separate [EdDSA cryptographic keypairs](https://en.wikipedia.org/wiki/EdDSA#Ed25519). Hence, a coldkey is a pairing of a private key and a public key. Similarly, a hotkey is a pairing of another set of private key and public key. In this sense, a coldkey or a hotkey is each analogous to an account on a blockchain, where the account is defined by a pair of a public and a private key.

### Coldkey

In `btcli`, the coldkey is synonymous with the wallet name. For example, the `--wallet.name` option in a `btcli` command always accepts only `<coldkey>` as its value and the `--wallet.hotkey` option only accepts `<hotkey>` as its value. This is because the coldkey holds the permissions and ownership over multiple hotkeys on-chain; hence, the wallet name is assigned to the coldkey.

**Relationship to hotkey**: A coldkey can exist without a hotkey or have multiple hotkeys. For example, to create a subnet, delegate stake, or simply hold balance you only need a coldkey, but if you want to validate or mine in a subnet, you need a hotkey paired with this coldkey.

**Purpose**: A coldkey is primarily for secure TAO storage and high-risk transactions, as described below (**Also see in the diagram in [Operational uses of keys](#operational-uses-of-keys))**:

- Your wallet's funds (TAO) on the chain are controlled by a coldkey.
- Transferring your TAO to other wallets/addresses.
- Delegating and undelegating your TAO tokens.
- Creating a subnet and obtaining a `netuid` for the newly-created subnet. The `netuid` is associated with the coldkey because subnet owner operations should be secure and conducted infrequently. 
- Emissions to the subnet owner are deposited directly to the subnet owner's coldkey.

**Security**: A coldkey is always encrypted when in your device storage. Only ever decrypted in-memory and only when needed.

A coldkey is like a highly secure key you use to access a safe where your valuables are stored. The coldkey is used less frequently than the hotkey, and is stored very securely to minimize the risk of unauthorized access.

:::tip To keep your coldkey more secure, you may consider a hardware signer.
A hardware signer is a secure method of storing your coldkey. It provides a separation between online devices and your private key. Some options include the [Polkadot Vault](https://wiki.polkadot.network/docs/polkadot-vault) application, a [Ledger wallet](https://www.ledger.com/), among others.   

Additionally, you might consider using a [MultiSig (multiple signature) wallet](https://wiki.polkadot.network/docs/learn-account-multisig), or a [Proxy account setup](https://wiki.polkadot.network/docs/learn-proxies).
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
#### Existential deposit

An existential deposit is the minumum required TAO in a wallet (i.e., in a coldkey). If a wallet balance goes below the existential deposit, then this wallet account is deactivated and the remaining TAO in it is destroyed. **This is set to 500 RAO for any Bittensor wallet**. Also see [What is the Existential Deposit?](https://support.polkadot.network/support/solutions/articles/65000168651-what-is-the-existential-deposit-).

### Hotkey 

**Relationship to coldkey**: You can create multiple hotkeys paired to your single coldkey. However, when you are validating or mining in a subnet, you are identified by a hotkey in that subnet, so that your coldkey is not exposed. Hence, you cannot use the same hotkey for two UIDs in a given subnet. You can, however, use the same hotkey for multiple UIDs but with each UID in a separate subnet.

**Purpose**: Used for regular operational tasks in the Bittensor network, such as described below (**Also see in the diagram in [Operational uses of keys](#operational-uses-of-keys)**):
  - Signing transactions.
  - Registering and running subnet miners and subnet validators.
  - If you are a subnet validator, then you can nominate your own hotkey so that the TAO holders can send their TAO to the hotkey.
  - If you are a TAO holder, for example, with a coldkey where your TAO is stored, you can delegate your TAO to the hotkey of the validator-delegate. See item 10 in the diagram in [Operational uses of keys](#operational-uses-of-keys).

**Security**: A hotkey is less secure than a coldkey. A hotkey is, by default, unencrypted, but you can encrypt it.

:::tip Why hotkey
Think of a hotkey as an everyday key you carry for tasks that require regular access. Because a hotkey is used more frequently and should be readily accessible, the hotkey carries a higher risk of exposure to potential threats. However, the permissions and scope of operations that can be performed with the hotkey are limited to operational activities, minimizing the risk of significant loss of TAO.

This dual-key system helps balance convenience and security, allowing you to participate actively in the Bittensor network without constantly exposing your primary TAO-holding coldkey.
:::

## Operational uses of keys


WIP


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


