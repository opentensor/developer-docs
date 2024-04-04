---
title: "Working with Keys"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Working with Keys

The Bittensor wallet holds the core ownership of the assets on the Bittensor network. It is the identity technology underlying all the operations in the Bittensor network. This section describes the concepts of Bittensor wallet keys. For a step-by-step guide on how to create a Bittensor wallet and manage your keys, see [Create Wallet](../getting-started/wallets.md).

## Coldkey and hotkey

A Bittensor wallet consists of a **coldkey** and a **hotkey**. The coldkey and hotkey are used for different operations in the Bittensor ecosystem. These two keys are logically connected via the Bittensor API.

### Coldkey

The coldkey is synonymous with the wallet name. For example, `--wallet.name` option in a `btcli` command always accepts only `<coldkey>` as its value and `--wallet.hotkey` option only accepts `<hotkey>` as its value. This is because one coldkey can have multiple hotkeys, hence the wallet name is assigned from the coldkey.

**Relationship to hotkey**: A coldkey can have multiple hotkeys.

**Purpose**: A coldkey is primarily for secure TAO storage and high-risk transactions such as:

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

**Relationship to coldkey**: A hotkey is always paired with **only one** coldkey at a given time. 

**Purpose**: Used for regular operational tasks in the Bittensor network, such as:
  - Signing transactions.
  - Registering and running subnet miners and subnet validators.

**Security**: Less secure than a coldkey. A hotkey is by default unencrypted, but you can encrypt it. 

Think of a hotkey as an everyday key you carry for tasks that require regular access. Because a hotkey is used more frequently and needs to be readily accessible, there's a higher risk of exposure to potential threats. However, the permissions and the scope of operations that can be performed with the hotkey are limited to operational activities, minimizing the risk of significant loss of TAO.

This dual-key system helps balance convenience and security, allowing you to participate actively in the Bittensor network without constantly exposing your primary, TAO-holding key.

:::tip Coldkey and hotkey each are pairings of separate private and public keys
Each key is a pairing of two seperate [EdDSA cryptographic keypairs](https://en.wikipedia.org/wiki/EdDSA#Ed25519). Hence, a coldkey is a pairing of a private key and a public key. Similarly, a hotkey is a pairing of another set of private key and public keys. In this sense, a coldkey or a hotkey is each analogous to an account on a blockchain, where the account is defined by a pair of a public and a private key.
:::

## Operational uses of keys


<center>
<ThemedImage
alt="Coldkey and hotkey pairings"
sources={{
    light: useBaseUrl('/img/docs/1-operational-uses-of-keys.svg'),
    dark: useBaseUrl('/img/docs/1-operational-uses-of-keys.svg'),
  }}
style={{width: 850}}
/>
</center>

<br />