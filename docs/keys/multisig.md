---
title: "Secure your Coldkey with a Multisig"
---

# Secure a Coldkey with a Multisig

A multisig (multiple signatories) wallet is a way of distributing responsibility for a coldkey across a set of wallets, referred to as signatories. Any signatory can propose a transaction, but the action must be agreed by some threshold of others before it will execute. Conventionally, a multisig is described as "$M$ out of $\N$", where $M$ is the threshold number of signatories required to sign a transaction and $\N$ is the total number of signatories.

A multisig account requires multiple signatories to approve a transaction before it is executed. This prevents a single point of failure, adding a strong layer of protection against malicious coldkey access. In Bittensor, this level of protection may be appropriate for very valuable wallets, such as those with creator permissions over a subnet, or those that control validator hotkeys with significant stake.

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

## Choosing a signature threshold

How many wallets, how many are needed for action? Considerations...


## Prerequisites

- [Install the latest version of BTCLI](../getting-started/install-btcli)
- Acquire some Testnet TAO.
- Polkadot-JS: This tutorial will employ the Polkadot-JS browser app, which allows users to submit transactions to Polkadot-based chains, including Bittensor. To use your coldkey private keys with the Polkadot-JS app, you must install the wallet browser extension, which is available for Firefox or Chrome.

## Provision and configure your workstation

A multisig depends on a set of pre-existing coldkeys, which will serve as the signatories for the multisig. In a realistic scenario, these coldkeys would belong to separate people--team-mates collectively managing a subnet or validator, for example, or family members managing a shared investment.

For this simple example, we will use a two of three multisig, meaning total number $\N$ of signatories on the multisig is 3, and 2 signatures are required to authorize a transaction.


### Keep security in mind
Coldkeys private keys and seed phrases for wallets with real (mainnet) TAO are **critical secrets**.
:::

In a realistic scenario, using wallets with real (mainnet) TAO, it would be crucial to follow proper workstation security. This implies that each coldkey would be provisioned to its own secure coldkey workstation, as maintaining separate workstations for each coldkey is important for minimizing the risk that multiple of the keys are lost or leaked; storing or handling the keys together undermines the purpose of having multiple keys.

See [Coldkey and Hotkey Workstation Security](../getting-started/coldkey-hotkey-security).

In the current *practice* scenario, using testnet TAO, we will forego full workstation security for ease, and handle all three keys on a single workstation, which can be an ordinary laptop rather than a secure workstation.

### Configure the target network in the Polkadot-JS web app.

1. Visit the [Polkadot-JS explorer web app](https://polkadot.js.org/apps).
1. Click the blockchain selector tab in the upper lefthand corner of the web page, next to **Accounts**. This is set to **Polkadot** main chain by default.
1. Scroll down and open **Development** at the bottom of the Chains menu, and paste the address for the Bittensor test chain into **custom endpoint**: `wss://test.finney.opentensor.ai:443`.

	You should see the page update and display live information about Bittensor testnet.

### Create and import 3 coldkey pairs ("accounts") in the Polkadot-JS browser extension

Each of our 3 signatories needs a wallet. Either create them or re-use available test wallets.

1. Use `btcli` to create three coldkeys/wallets, or use practice wallets you already have access to.

	See [Creating/Importing a Bittensor Wallet](../working-with-keys).

1. Load each key into the Polkadot-JS wallet browser extension:
	1. Click to open the browser extension.
	1. Click **+**, then select **Import account from pre-existing seed**.
	1. Provide your seed phrase to regenerate your wallet's coldkey private key.

1. Configure your keys to use the custom network (Bittensor's test net). For each key/**account**:
	1. Click the menu (three dots) to configure the account.
	1. Open the network dropdown selector, and choose **Allow use on any chain**.

1. Confirm success by visiting the [accounts page](https://polkadot.js.org/apps/#/accounts). You should see all three wallets/accounts listed as **accounts available via browser extensions**.

## Create the multisig

In this step, we'll create the multisig wallet, specifying the signatory wallets.

1. Navigate to the [accounts page](https://polkadot.js.org/apps/#/accounts). 

1. Click **+ Multisig**. In the **add multisig** modal:
	1. Select from the available signatories, which must be in your address book (if they are not, add them from the Accounts/Address book tab).
	1. Set the **threshold**.
	1. Set a name.
	1. Click **create**.

1. Use `btcli w regen_coldkeypub --wallet.name multisig` to add the wallet's public key to BTCLI.
1. View its balance information with `btcli view dashboard --wallet.name multisig`.

## Transfer TAO to the multisig wallet.

1. Find the multisig wallet's coldkey public key on the [accounts page](https://polkadot.js.org/apps/#/accounts), listed under **multisig**. Click on the wallet/account to open it's show modal, then click **Copy** by the account name and address/public key to copy it out. 
1. Use BTCLI to transfer testnet TAO to the mutlisig wallet.
	1. Run `btcli wallet transfer`.
	1. Provide the multisig wallet's coldkey public key.
	1. Specify the amount. It's recommended to do a small transfer first to confirm the address, even with testnet TAO.
1. To confirm the transfer, view the multisig wallet in the accounts page or the BTCLI dashboard. It should show the TAO from the transfer almost immediately.

## Transfer TAO from the multisig 

Let's try executing a sensitive operation with the multisig wallet: transferring TAO. Choose any destination wallet that you control. It can be one of the signatories. Note this wallet's balance, so you can confirm the transaction's ultimate success by seeing the increase in that balance.

To transfer TAO out of the multisig wallet requires a multisig transaction, meaning it must be signed by threshold $M$ of the $\N$ total signatories. First, one wallet must propose the transaction. This proposal will exist on the blockchain where it can be signed by other signatories, which will execute the proposed transaction.

Note that the signatory that proposes a multisig action must pay a small fee (less than .001 TAO), which will be displayed in the multisig transaction modal. But the wallet that will propose the multisig transaction must have a balance above this amount.

### Propose the transfer

1. In the Polkadot-JS web app, click the **Developer** tab and select Extrinsics, or navigate to the extrinsics page at [polkadot.js.org/apps/#/extrinsics](https://polkadot.js.org/apps/#/extrinsics).
1. Under **using the selected account**, select the multisig wallet. Note that the multisig wallet's TAO balance is displayed.
1. Under **submit the following extrinsic**:
	1. Select the `balances` module (from the lefthand dropdown menu).
	1. Select `transferKeepAlive`.
1. Under **Id: AccountId**, paste in the coldkey public key for the destination wallet.
1. Under **value**, put the amount of TAO to transfer. This amount must be available in the multisig wallet.
A wallet with a test TAO balance sufficient to pay the fee 
1. Copy out the **encoded call data**, which other signatories will need to sign the transaction.
1. Copy out the **encoded call hash**, which other signatories will need to confirm the details of the transaction.
1. Copy out the **link** under **encoding details**, which will allow other signatories to view the details of the transaction and confirm it against the encoded call hash.
1. Click **Submit Transaction**.
1. In the **authorize transaction** modal, select the signatory.

	Note that this should be selected as a **multisig signatory**, not as a **proxy account**. You may need to toggle the **Use a proxy for this call** switch to **Don't use a proxy for this call**.

1. Select **Multisig approval with hash (non-final approval)**, not **Multisig message with call (for final approval)**.
1. Click **Sign and Submit**.

### Approve the transaction

1. Return to the [accounts page](https://polkadot.js.org/apps/#/accounts).
1. Find the multisig wallet, noting that it should now display a clickable element for **view pending approvals**. You can also click on the wallets three dot menu and select **Multisig approvals**.
1. The approval modal will display the **encoded call hash**, allowing signatories to confirm the identity of the proposed transaction, but it does not display details about the call. To view details of the call, visit the link provided under **encoding details** when creating the transaction proposal.
1. Select the approving signatory, which cannot be the signatory who proposed the transaction.
1. Enter the **encoded call data**, which was provided when the transaction was created, and is displayed at the top of the page at the **encoding details** link provided when the transaction proposal was created.
1. Set the toggle to **Multisig message with call (for final approval)**.
1. Click **Approve**, which will open the signing modal.
1. Confirm the information and click **Sign and Submit**.

### Confirm success

Check the multisig wallet's balance, which should have decreased by the transfer amount, and the destination wallet, which should have increased.
<!-- 
## Initialize the multisig transaction: create a subnet

Next, use one of the signatory wallets to initiate the multisig transaction. Since we are triggering this transaction externally, it's referred to as an 'extrinsic' transaction. In this example, we'll create a subnet.

1. Ensure that the wallet has sufficient (test) TAO to pay the fee. If you have testTAO in another wallet, use `btcli wallet transfer`. You can see the current burn cost for creating a subnet by running `btcli subnet burn-cost`.

1. As that signatory go to the [Polkadot-JS app extrinsics page](https://polkadot.js.org/apps/#/extrinsics).
1. Under **using the selected account**, select the multisig.
1. Under **submit the following extrinsic**, select `subtensorModule` and `registerNetwork`.
1. Copy out the **encoded call data** and **encoded call hash**. Other signatories must have the encoded call data in order to sign the transaction.
1. Click **Submit Transaction**, which will open up the transaction signing modal.
1. Under **multisig signatory**, select the wallet you wish to use, which must have 

## Complete the mustisig transaction

You need the call data thingy!!! and that url thing where you can decode it to see the actual transaction...
 -->