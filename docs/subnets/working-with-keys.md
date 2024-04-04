---
title: "Working with Keys"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Working with Keys

The Bittensor wallet holds the core ownership of the assets on the Bittensor network. It is the identity technology underlying all the operations in the Bittensor network. This section describes how to work with the Bittensor wallet keys. For a step-by-step guide on how to create a Bittensor wallet, see [Create Wallet](../getting-started/wallets.md).

## Coldkey and hotkey

A Bittensor wallet consists of a **coldkey** and a **hotkey**. The coldkey and hotkey are used for different operations in the Bittensor ecosystem. These two keys are logically connected via the Bittensor API.

:::tip Coldkey and hotkey each are pairings of separate private and public keys
Each key is a pairing of two seperate [EdDSA cryptographic keypairs](https://en.wikipedia.org/wiki/EdDSA#Ed25519). Hence, a coldkey is a pairing of a private key and a public key. Similarly, a hotkey is a pairing of another set of private key and public keys. In this sense, a coldkey or a hotkey is each analogous to an account on a blockchain, where the account is defined by a pair of a public and a private key.
:::

### Coldkey

The coldkey is synonymous with the wallet name. For example, `--wallet.name` option in a `btcli` command always accepts only `<coldkey>` as its value and `--wallet.hotkey` option only accepts `<hotkey>` as its value. This is because one coldkey can have multiple hotkeys, hence the wallet name is assigned from the coldkey.

**Relationship to hotkey**: A coldkey can exist without a hotkey, or it can have multiple hotkeys. For example, to create a subnet you only need a coldkey but if you want to validate or mine in a subnet, you need a hotkey paired with this coldkey. 

**Purpose**: A coldkey is primarily for secure TAO storage and high-risk transactions, as described below (**Also see in the diagram in [Operational uses of keys](#operational-uses-of-keys))**:

- Funds (TAO tokens) in your Bittensor wallet are held in its coldkey.
- Delegating and undelegating your TAO tokens.
- Creating a subnet and obtaining a `netuid` for the newly-created subnet. The `netuid` is associated with the coldkey only, because all subnet owner operations require high security and thus use the coldkey, which is always encrypted. 
- Emissions to the subnet owner are deposted directly to the subnet owner's coldkey.

**Security**: Highest level of security. A coldkey is always encrypted on your device.

A coldkey is like a highly secure key you use for accessing a safe where your valuables are stored. The coldkey is used less frequently than the hotkey, and is stored very securely to minimize the risk of unauthorized access.

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

### Hotkey 

**Relationship to coldkey**: You can create multiple hotkeys paired to your single coldkey. However, when you are validating or mining in a subnet, you are identified by a hotkey in that subnet, so that your coldkey is not exposed. Hence you cannot use the same hotkey for two UIDs in a given subnet. You can, however, use the same hotkey for multiple UIDs but with each UID in a separate subnet. Also see [Register, Validate and Mine](../subnets/register-validate-mine.md#register).

**Purpose**: Used for regular operational tasks in the Bittensor network, such as described below (**Also see in the diagram in [Operational uses of keys](#operational-uses-of-keys)**):
  - Signing transactions.
  - Registering and running subnet miners and subnet validators.
  - If you are subnet validator, then you can nominate your own hotkey so that the TAO holders can send their TAO to the hotkey.
  - If you are a TAO holder, for example, with a coldkey where your TAO is stored, you can delegate your TAO to the hotkey of validator-delegate. See item 10 in the diagram in [Operational uses of keys](#operational-uses-of-keys).

**Security**: Less secure than a coldkey. A hotkey is by default unencrypted, but you can encrypt it. 

:::tip Why hotkey
Think of a hotkey as an everyday key you carry for tasks that require regular access. Because a hotkey is used more frequently and should be readily accessible, the hotkey carries a higher risk of exposure to potential threats. However, the permissions and the scope of operations that can be performed with the hotkey are limited to operational activities, minimizing the risk of significant loss of TAO.

This dual-key system helps balance convenience and security, allowing you to participate actively in the Bittensor network without constantly exposing your primary, TAO-holding coldkey.
:::

## Operational uses of keys

The below diagram shows operations you can do with a hotkey and coldkey. You can use the `btcli` to perform any of these operations. See [Bitttensor Wallet CLI](../btcli.md#wallets) for command syntax.

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
4. When you create a subnet, the subnet registration costs are taken out of the subnet owner's cold key. The `netuid` of the subnet is associated with the coldkey only. This is because all subnet owner operations are of high security and thus require the coldkey (which is always encrypted). The hotkey has no role here.
5. When you register as a subnet miner or a subnet validator, the registration costs will come out of your coldkey, but the UID is attached to your hotkey. Note that this type of registration is different from creating a subnet, which only requires your coldkey. See `(4)` above. 
6. Subnet owner emissions are deposited directly into the subnet owner's coldkey. The hotkey has no role here.
7. Emissions to subnet validator and subnet miner are deposited directly into the hotkey to which the UID is attached. See `(5)` above.
8. As a validator, when you stake your TAO, your TAO will be transferred from your coldkey to your hotkey that is attached to the UID. Similarly, unstaking will move the TAO from the hotkey attached to the UID into its coldkey. 
9. As a validator, you can nominate your hotkey that is attached to the UID. This will publish the hotkey. TAO holders will send their TAO to this hotkey. This is also referred as TAO holders delegating their TAO, or staking their TAO, to you the validator. Also see `(10)` below.
10. As a TAO holder, you delegate your TAO to a validator's hotkey. The TAO you delegated will go from your coldkey into the validator's hotkey. This validator's hotkey is always attached to the UID of the validator. Also see `(9)` above. 
