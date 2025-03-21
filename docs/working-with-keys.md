---
title: "Creating/Importing a Bittensor Wallet"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Creating/Importing a Bittensor Wallet

In Bittensor (like other cryptocurrency applications), a *wallet* is a tool for proving your identity, signing transactions, accessing your TAO, and managing your stake in subnets. 

This page describes several different ways to instantiate your wallet keypairs into a wallet application, in order to interact with the Bittensor blockchain.

Recommended background reading:
- For an introduction to the core concepts, see [wallets and keys in Bittensor](getting-started/wallets.md).

- For discussion of security considerations about working with Bittensor wallets, see [Coldkey and Hotkey Workstation Security](./getting-started/coldkey-hotkey-security).

## Wallets and wallet applications

To start, we must distinguish between a Bittensor wallet in two senses :

- The **cryptographic wallet** is one or more cryptographic key pairs that comprise an identity, and allow a person to sign transactions or be referred to in transactions signed by others. In this sense, the wallet is more or less synonymous with the unique **coldkey** that controls access to your assets and serves as your public identity.

- The **wallet application** is software that runs on your device and allows you to interact with the blockchain by entering your keys. There are several officially supported Bittensor wallet applications:

  - The Bittensor wallet app for mobile: [bittensor.com/wallet](https://bittensor.com/wallet)
  - [The Chrome extension](https://chromewebstore.google.com/detail/bittensor-wallet/bdgmdoedahdcjmpmifafdhnffjinddgc), which is also compatible with use of a Ledger hardware wallet. See [Using Ledger Hardware Wallet](./staking-and-delegation/using-ledger-hw-wallet.md)
  - The Bittensor Python SDK, which includes the secure [Bittensor Wallet module](https://docs.bittensor.com/btwallet-api/html/autoapi/btwallet/wallet/index.html).
  - The Bittensor CLI, `btcli`, which uses the Bittensor Wallet module under the hood. 

Every Bittensor user has one or more cryptographic wallets, i.e. one or more coldkey. Any cryptographic wallet can be loaded into any number of wallet applications. If every wallet application that has been initialized with your cryptographic wallet (i.e. signed into with your coldkey private key) is closed, logged out, etc., and the device incinerated, your cryptographic wallet exists on the blockchain, and can be recovered with your *seed phrase*.

The ***seed phrase*** (a.k.a. 'menemonic' or 'recovery phrase') is a series of (at least 12) words that is generated together with your wallet's cryptographic key pair, and which can be used to recover the coldkey private key. This seed phrase is therefore a human-usable way to save access to the cryptographic wallet offline, and to import the cryptographic wallet into a wallet application. 

Make sure you understand the role of the seed phase in the fundamental scheme of [Wallets, Coldkeys and Hotkeys in Bittensor](./getting-started/wallets).

Different wallet applications have different levels of functionality:

- The mobile app and Chrome extension allow for staking and transfer of TAO balalnces, but do not include any hotkey management or advanced functionality.

  - Note that the Chome extension is compatible with a hardware wallet, which can be a strong security option. This implies using a laptop as your [coldkey workstation](../getting-started/coldkey-hotkey-security).

  - The mobile app depends on using a secure phone as a [coldkey workstation](../getting-started/coldkey-hotkey-security).

- `btcli` and the SDK allow for hotkey management and other advanced functionality. These require a laptop as a [coldkey workstation](../getting-started/coldkey-hotkey-security).

:::tip
Note that you can also check balances on an unsecure device without entering your coldkey private key. For example, using [https://bittensor.com/scan](https://bittensor.com/scan). These website can be considered permissionless wallet applications.

See [Coldkey and Hotkey Workstation Security: Permissionless workstation](../getting-started/coldkey-hotkey-security#permissionless-workstation)
:::


## Creating a Wallet with the Chrome Extension

[The Chrome extension...](https://chromewebstore.google.com/detail/bittensor-wallet/bdgmdoedahdcjmpmifafdhnffjinddgc)

:::tip Suitable for non-technical users
Use this option if your activities are limited to sending and receiving TAO and you are not creating a subnet or participating as a subnet validator or a subnet miner. 
:::


1. The Wallet will first create a wallet account address in the form of a 48-hexadecimal character string that usually starts with `5`. 
2. Critically, the Wallet will show you a 12-word list arranged in a specific order. You are required to keep this list of words, without changing the word order, in a safe location. This list of ordered words is called by various names such as **mnemonic** or **seed phrase**.
3. The Wallet will then prompt you for specific mnemonic words as a way of authentication.
4. Next, you will assign a name and a password to your wallet account.
5. Finally, to receive TAO from another party, you will give them your wallet account address from Step 1 (the 48-hexadecimal character string) as the destination address. Similarly, to send (transfer) TAO to another party, you will first ask them for their wallet address and send TAO to their wallet address. This way, you can create multiple wallet accounts, each with a different name and even a different password for each wallet account.

### Mnemonic

:::danger Always keep your mnemonic safe 
Anyone who knows the mnemonic for your wallet account can access your TAO tokens. Hence, you must always keep this mnemonic in a safe and secure place known only to you. More importantly, if you lose your wallet address, you can use its mnemonic (stored away in safekeeping) to restore the wallet.
:::

:::note Use Import option in Chrome Wallet Extension
To restore your lost coldkey, use the **Import** option in Chrome Extension for Bittensor Wallet and provide your 12-word mnemonic.
:::

:::tip Suitable for subnet participation
Use this option if you are creating a subnet or participating as a subnet validator or a subnet miner. You must [install Bittensor](./getting-started/installation.md) for this option.
:::

After you have [installed Bittensor](./getting-started/installation.md), you can create a local wallet on your machine in the following two ways:

- [Using `btcli`](#creating-a-local-wallet-with-cli)
- [Using Python](#creating-a-local-wallet-using-python)

## Creating a local wallet with CLI

### Coldkey and hotkey

A Bittensor wallet consists of a **coldkey** and a **hotkey**. Only coldkey is created when you use the [Chrome Extension for Bittensor Wallet](https://chromewebstore.google.com/detail/bittensor-wallet/bdgmdoedahdcjmpmifafdhnffjinddgc?pli=1). This is sufficient for normal storage and sending and receiving of TAO. However, to participate in a subnet, you will need a local coldkey and a local hotkey.

:::tip Explanation of keys 
See [Wallets and keys in Bittensor](./getting-started/wallets.md) for an explanation of coldkey and hotkey.
:::

### Creating a coldkey using `btcli` 

If you plan to perform any of the following tasks, you only need to create a coldkey:

- Create a subnet.
- Transfer TAO.
- Delegate to a validator-delegate's hotkey.

**However, if you want to validate or mine in a subnet, you will need to create hotkey also**. See the below section [Creating a hotkey using `btcli`](#creating-a-hotkey-using-btcli).

Run the following command on your terminal by giving a name to your wallet, replacing the `<my_coldkey>`. 

```bash
btcli wallet new_coldkey --wallet.name <my_coldkey>
```

For example, 
```bash
btcli wallet new_coldkey --wallet.name test-coldkey
```
You will see the following terminal output. The mnemonic is hidden for security reasons.

```text
IMPORTANT: Store this mnemonic in a secure (preferably offline place), as anyone who has possession of this mnemonic can use it to regenerate the key and access your tokens.
The mnemonic to the new coldkey is:
**** *** **** **** ***** **** *** **** **** **** ***** *****
You can use the mnemonic to recreate the key in case it gets lost. The command to use to regenerate the key using this mnemonic is:
btcli w regen_coldkey --mnemonic **** *** **** **** ***** **** *** **** **** **** ***** *****
```

:::tip Regenerating the coldkey
Make a note of the above command option `regen_coldkey` showing how to regenerate your coldkey in case you lose it.
:::

### Creating a hotkey using `btcli` 

If you plan to validate or mine in a subnet, you must create both a coldkey and a hotkey.

First, create a coldkey as described above in the [Creating a coldkey using `btcli`](#creating-a-coldkey-using-btcli). Then, provide this coldkey as a parameter to generate a hotkey. This will pair the hotkey with the coldkey. See below.

Use the below command to generate the hotkey. Replace `<my_coldkey>` with the coldkey generated above, and `<my_hotkey>` with a name for your hotkey.

```bash
btcli wallet new_hotkey --wallet.name <my_coldkey> --wallet.hotkey <my_hotkey>
```

For example, 
```bash
btcli wallet new_hotkey --wallet.name test-coldkey --wallet.hotkey test-hotkey
```

You will see the terminal log like below. The mnemonic is hidden for security reasons.
```text
IMPORTANT: Store this mnemonic in a secure (preferably offline place), as anyone who has possession of this mnemonic can use it to regenerate the key and access your tokens.
The mnemonic to the new hotkey is:
**** *** **** **** ***** **** *** **** **** **** ***** *****
You can use the mnemonic to recreate the key in case it gets lost. The command to use to regenerate the key using this mnemonic is:
btcli w regen_hotkey --mnemonic **** *** **** **** ***** **** *** **** **** **** ***** *****
```
:::tip Regenerating the hotkey
Make a note of the above command option `regen_hotkey` showing how to regenerate your hotkey in case you lose it.
:::

### Encrypting the hotkey

By default, the hotkey is not encrypted on the device, whereas the coldkey is encrypted. To encrypt your hotkey, run this command:
```bash
btcli wallet new_hotkey --use-password
```

## Creating a local wallet using Python

Copy and paste the following three lines into your Python interpreter. Replace the string values for `name` (`my_coldkey`) and `hotkey` (`my_hotkey`) with your own.

```python showLineNumbers
import bittensor as bt
wallet = bt.wallet(name = 'my_coldkey', hotkey = 'my_hotkey' )
wallet.create_if_non_existent()
```

You will see a terminal output like this for an example wallet with `name` as `test-coldkey` and `hotkey` as `test-hotkey`. The mnemonic is hidden for security reasons.
```text 
>>> import bittensor as bt
>>> wallet = bt.wallet(name = 'test-coldkey', hotkey = 'test-hotkey')
>>> wallet.create_if_non_existent()

IMPORTANT: Store this mnemonic in a secure (preferable offline place), as anyone who has possession of this mnemonic can use it to regenerate the key and access your tokens.

The mnemonic to the new coldkey is:

**** **** **** **** **** **** **** **** **** **** **** ****

You can use the mnemonic to recreate the key in case it gets lost. The command to use to regenerate the key using this mnemonic is:
btcli w regen_coldkey --mnemonic **** **** **** **** **** **** **** **** **** **** **** ****

Specify password for key encryption:
Retype your password:

IMPORTANT: Store this mnemonic in a secure (preferable offline place), as anyone who has possession of this mnemonic can use it to regenerate the key and access your tokens.

The mnemonic to the new hotkey is:

**** **** **** **** **** **** **** **** **** **** **** ****

You can use the mnemonic to recreate the key in case it gets lost. The command to use to regenerate the key using this mnemonic is:
btcli w regen_hotkey --mnemonic **** **** **** **** **** **** **** **** **** **** **** ****

wallet(test-coldkey, test-hotkey, ~/.bittensor/wallets/)
```

## Location and addresses of the local wallets

Local wallets are stored on your machine under `~/.bittensor/wallets`. Use the below command to list them:

```bash
tree ~/.bittensor/
``` 

You will see an output like this:

```bash
tree ~/.bittensor/
/Users/docwriter/.bittensor/    # The Bittensor root directory.
└── wallets                     # The folder contains all Bittensor wallets.
    └── test-coldkey            # The name of the wallet.
        ├── coldkey             # The password-encrypted coldkey.
        ├── coldkeypub.txt      # The unencrypted version of the coldkey.
        └── hotkeys             # The folder contains all this coldkey's hotkeys.
            └── test-hotkey     # The unencrypted hotkey information.
```

and listing out the contents of the `coldkeypub.txt` file:

```bash
cd ~/.bittensor/wallets/test-coldkey
cat coldkeypub.txt | jq
{
  "accountId": "0x36e49805b105af2b5572cfc86426247df111df2f584767ca739d9fa085246c51",
  "publicKey": "0x36e49805b105af2b5572cfc86426247df111df2f584767ca739d9fa085246c51",
  "privateKey": null,
  "secretPhrase": null,
  "secretSeed": null,
  "ss58Address": "5DJgMDvzC27QTBfmgGQaNWBQd8CKP9z5A12yjbG6TZ5bxNE1"
}
```

The contents of the `coldkeypub.txt` are to be interpreted as below:

- The fields `accountId` and `publicKey` contain the same value. 
- The `secretPhrase` and `secretSeed` are not included in the file due to the high-security nature of the coldkey. When you create your wallet, either using the Chrome extension or `btcli`, the mnemonic (`secretPhrase`) is shown only once, while `secretSeed` is not shown.
- The `ss58Address` is the SS58-version of the `accountId` or `publicKey`. **This is your coldkey's public address, and can be used to transfer TAO from another wallet.**

:::tip Conversion between publicKey and ss58Address
Use this site [SS58.org](https://ss58.org/) to verify the conversions between `publicKey` and `ss58Address` fields.
:::

Similarly, listing out the contents of the `hotkeys/test-hotkey` file:

```bash
cat hotkeys/test-hotkey | jq
{
  "accountId": "0xc66695556006c79e278f487b01d44cf4bc611f195615a321bf3208f5e351621e",
  "publicKey": "0xc66695556006c79e278f487b01d44cf4bc611f195615a321bf3208f5e351621e",
  "privateKey": "0x38d3ae3b6e4b5df8415d15f44f * * * 0f975749f835fc221b * * * cbaac9f5ba6b1c90978e3858 * * * f0e0470be681c0b28fe2d64",
  "secretPhrase": "pyramid xxx wide slush xxx hub xxx crew spin xxx easily xxx",
  "secretSeed": "0x6c359cc52ff1256c9e5 * * * 5536c * * * 892e9ffe4e4066ad2a6e35561d6964e",
  "ss58Address": "5GYqp3eKu6W7KxhCNrHrVaPjsJHHLuAs5jbYWfeNzVudH8DE"
}
```

The contents of the `hotkeys/test-hotkey` file are to be interpreted as below:

- The fields `accountId` and `publicKey` contain the same value, just as seen in `coldkeypub.txt`. 
- The `secretPhrase` and `secretSeed` are shown because the hotkey is, by default, not encrypted.
- The `ss58Address` is the SS58-version of the `accountId` or `publicKey`. **This is your hotkey's public address and can be used to stake/delegate to your hotkey from other wallets.**

:::danger
Hotkeys are for staking. Do not *transfer* TAO to a hotkey!
:::

## Listing all the local wallets

You can list all the local wallets stored in Bittensor's root directly with:
```bash
btcli wallet list
```
You will see a terminal output like this:
```text
Wallets
└─
    test-coldkey (5DJgMDvzC27QTBfmgGQaNWBQd8CKP9z5A12yjbG6TZ5bxNE1)
       └── test-hotkey (5GYqp3eKu6W7KxhCNrHrVaPjsJHHLuAs5jbYWfeNzVudH8DE)
```

The output will show only the `ss58Address` field values from the `coldkeypub.txt` and `test-hotkey` files of the wallets.

:::tip Use the ss58Address keys as destinations for TAO
Use the above shown `ss58Address` field values as your public wallet addresses, i.e., as destinations for TAO transfers from another wallet to your wallet. For example, when using a command: `btcli wallet transfer`.
:::

## Store your mnemonics safely

:::danger If someone has your mnemonic, they own your TAO 
If you lose the password to your wallet, or if you have lost access to the machine where the wallet is stored, you can regenerate the coldkey using the mnemonic you saved during the wallet creation steps above. You can **not** retrieve the wallet with the password alone. Remember that if someone has your mnemonic, they own your TAO.
:::

As a reminder, if you need to regenerate your wallets, you can use the `btcli` with your mnemonic, as shown below:

```bash
btcli wallet regen_coldkey --mnemonic **** *** **** **** ***** **** *** **** **** **** ***** *****
```



## Updating legacy wallet

It is important that you update any legacy Bittensor wallets to the new NaCL format for security. You may accomplish this with the `btcli` using the `wallet update` subcommands.

See the below example command and the terminal output:
```bash
btcli wallet update
```
You will see an output like this:
```bash
>> Do you want to update all legacy wallets? [y/n]: y
>> =====  wallet(test-coldkey, default, ~/.bittensor/wallets/)  =====
>> ✅ Keyfile is updated. 
>> 🔑 Keyfile (NaCl encrypted, /Users/docwriter/.bittensor/wallets/test-coldkey/coldkey)>
```
