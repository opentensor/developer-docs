---
title: "Secure your Coldkey with a Multisig"
---

# Secure a Coldkey with a Multisig

A multisig wallet is a way of distributing responsibility for a coldkey across a set of wallets (referred to as signatories). Any of the signatories can propose an action, but which must be agreed by some threshold of others. Conventionally, a multisig is described as "$M$ out of $\N$", where $M$ is the threshold number of signatories required to sign a transaction and $\N$ is the total number of signatories.

A multisig account requires multiple signatories to approve a transaction before it is executed. This prevents a single point of failure, adding a strong layer of protection against malicious access to coldkey operations. 

After a brief discussion of use cases, this page will guide the user through an example practice workflow of creating a multisig and using it to execute a transaction to create a subnet. For ease of practice, this entire workflow will be executed on a single workstation. However, in a realistic scenario, one or more operators would need to perform the steps on independent secure coldkey workstations in order to reap the full security benefits.

## Use cases

### Individuals seeking maximum security

A user can distribute control across multiple devices or accounts.

For example, you could have a multisig with three keys:
- laptop with a software wallet
- phone with software wallet
- hw wallet in cold storage

so if you do one on your phone you have to bust out your laptop, and the hw wallet is backup

### Teams

Multiple members can collectively manage funds, ensuring that no single person can execute transactions without consensus.

Each member can secure their own key however they want (including with a multisig)

## Prerequisites

- `btcli`
- testnet TAO
- polkadot-JS

## Step 1: Provision keys

A multisig depends on a set of pre-existing coldkeys, which will serve as the signatories for the multisig. In a realistic scenario, these coldkeys would belong to separate people--team-mates collectively managing a subnet or validator, for example, or family members managing a shared investment.

For our practice scenario, we'll use three keys on a single workstation.

1. Use `btcli` to create three coldkeys/wallets.

	See [Creating/Importing a Bittensor Wallet](../getting-started/working-with-keys).
	
1. Load the three keys into Polkadot-JS

in polkadot-js, load all three keys in. this would only be the case in practice, in reality you'd never do this, you'd use 3 separate coldkey workstations

using the extension, add your wallet as an account, either by using your seed phrase or by using a hw wallet

## Step 2: Create the multisig

In the accounts page https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ftest.finney.opentensor.ai%3A443#/accounts

click **+ Multisig**

In the **add multisig** modal:

Select from the available signatories, which must be in your address book (if they are not, add them from the Accounts/Address book tab).

Set the **threshold** carefully...


Give a name and done...

Note: do the other signatories have to provision/load the multisig into their browser or does it just magically appear for signatories?


## Step 3: Execute a multisig transaction: create a subnet

As one of the signatories, go to https://polkadot.js.org/apps/#/extrinsics

- Under **using the selected account**, select the multisig.
- Under **submit the following extrinsic**, select `subtensorModule` and `registerNetworkWithIdentity`.


You need the call data thingy!!! and that url thing where you can decode it to see the actual transaction...
