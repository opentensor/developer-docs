---
title: "Working with Keys"
---

# Working with Keys

## Using Chrome Extension for Bittensor Wallet
To create an account in Bittensor Wallet, for example, using the Chrome Extension for Bittensor Wallet, you will follow the below steps:

1. The Wallet will first create a wallet account address in the form of a 48-hexadecimal character string that usually starts with `5`. 
2. Critically, the Wallet will show you a 12-word list arranged in a specific order. You are required to keep this list of words, without changing the word order, in a safe location. This list of ordered words is called a **mnemonic**. 
3. The Wallet will then prompt you for specific mnemonic words as a way of authentication.
4. Next, you will assign a name and a password to your wallet account.
5. Finally, to receive TAO from another party, you will give them your wallet account address from Step 1 (the 48-hexadecimal character string) as the destination address. Similarly, to send (transfer) TAO to another party, you will first ask them for their wallet address and send TAO to their wallet address. You can create multiple wallet accounts, each with a different name, and even a different password for each wallet account, this way. 

## Mnemonic

Anyone who knows the mnemonic for your wallet account can access your tokens. Hence you must always keep this mnemonic in a safe and secure place, known only to you. More important, if you lose your coldkey wallet address, you can use its mnemonic (that you stored away in safekeeping) to restore the coldkey wallet. 

:::tip Use Import option in Chrome Wallet Extension
To restore your lost coldkey, use the **Import** option in Chrome Extension for Bittensor Wallet and provide your 12-word mnemonic.
:::

## Working with coldkey

A Bittensor wallet account created with the Chrome Extension is called a **coldkey**. A coldkey is an account on Bittensor blockchain and it  has **a private key and a public key** associated with it. Also:

- Your TAO tokens, and any TAO you receive to your wallet address, will be stored in the coldkey. 
- The wallet account address is the [SS58 encoded](https://docs.substrate.io/reference/address-formats/#:~:text=case%20L%20(l)-,Address%20type,address%20bytes%20that%20follow%20it.&text=Simple%20account%2Faddress%2Fnetwork%20identifier,directly%20as%20such%20an%20identifier) version of the public key part of the coldkey. 
- If your activities are limited to sending or receiving TAO then you a coldkey is all you need. However, if you are interested in either creating a subnet or participate as a subnet miner or a subnet validator, then you must create a **hotkey** corresponding to your coldkey. 

## Working with hotkey
