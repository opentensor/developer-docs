---
title: "Schedule Key Swap"
---

# Schedule Key Swap

This guide describes how to use the schedule coldkey swap feature. Use this feature only if you believe your wallet is impacted by the hacker attack on July 2nd, as described in [Bittensor Community Update — July 3, 2024](https://blog.bittensor.com/bittnesor-community-update-july-3-2024-45661b1d542d). This feature helps you to schedule your funds transfer from an at-risk wallet to a new secure wallet. 

If you decide to use this feature, then run the commands described in this guide **before** the Bittensor mainnet opens.

:::tip Window to use this schedule coldkey swap feature

You can use this schedule cold key swap feature **only in the window** starting Monday July 8, 5 PM US Eastern and ending when the mainnet opens fully on Thursday July 11, 5 PM US Eastern.
:::

## Description

The schedule coldkey swap feature works like this:

- The schedule coldkey swap feature enables you to only schedule the actual swapping of your TAO funds from your old potentially compromised coldkey to a new coldkey. 
- When you use this feature, it will not actually swap your TAO funds. It will only schedule the swap event. 
- All scheduled coldkey swaps will be executed on-chain when the mainnet opens for normal operations on Thursday July 11, 5 PM US Eastern.

## Do not use this feature if

You may not need to use this feature. Do not use this feature if any of the following are true for you:

- If you never used `btcli`, regardless of the Bittensor version, then do not use this feature. Your funds are safe. 
- If you never used Bittensor version 6.12.2, then do not use this feature. Your funds are safe. 
- If you only used any wallet browser extension or only a wallet application such as below, then your funds are safe:
  - The Bittensor Wallet (for Chrome or iOS)
  - SafeWallet, Talisman, Polkadot Vault, Tensor Wallet, Nova Wallet, polkadot.js
  - Websites that utilize polkadot.js such as Taostats.io for staking unstaking
- If you hold your TAO only on exchanges, then your funds are safe. 
- If you installed Bittensor 6.12.2 not via PyPi package but directly from GitHub source, then do not use this feature. **Only the PyPi package of Bittensor 6.12.2 is malicious.**

### Use this feature only if 

Use this feature ONLY: 

- If you downloaded the Bittensor PyPi package for the Bittensor version 6.12.2 and then performed any of the below operations.

  **Impacted btcli 6.12.2 operations**

  ```bash
  btcli stake add
  btcli stake remove
  btcli wallet transfer
  btcli root delegate
  btcli root undelegate
  btcli root set_take
  btcli subnet register
  ```

:::important reminder
If you installed Bittensor 6.12.2 not via PyPi package but directly from GitHub source, then do not use this feature. Only the PyPi package of Bittensor 6.12.2 is malicious.
:::

## Installing the schedule coldkey swap feature

:::tip Currently this feature is available on testnet only
:::

The schedule coldkey swap feature is available only at the below specified subtensor and bittensor repo branches and the testnet URL:

- **Testnet URL**: `wss://test.finney.opentensor.ai:443/`.

- **Bittensor repo and branch**: 
    1. First make sure you do `git pull master` to pull the latest changes from the Bittensor repo `https://github.com/opentensor/bittensor`. 
    2. Next, switch to branch `feat/arbitrage-coldkeys`. 
    3. Then install Bittensor by running the below command:
    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/opentensor/bittensor/feat/arbitrage-coldkeys/scripts/install.sh)"
    ```
---

## Detailed steps using `btcli`

### Syntax

```bash
btcli wallet schedule_coldkey_swap [--new_coldkey <new_coldkey_ss58_address>]
```
This command is used to **schedule** a swap your coldkey to a new coldkey. You must specify the new coldkey address. You must first separately create a new coldkey before using it in this command. 

- To create a new coldkey, see [Creating a coldkey using `btcli`](./getting-started/wallets.md#creating-a-coldkey-using-btcli).
- To see the SS58 address of your coldkey, see [Listing all the local wallets](https://docs.bittensor.com/getting-started/wallets#listing-all-the-local-wallets).

The command checks for the validity of the new coldkey and prompts for confirmation before proceeding with the scheduling process.

### Important 

- This command does not immediately swap the coldkeys. It will schedule the coldkey swap event after a delay of 72-hours from the time this command is run. 
- The actual coldkey swap event occurs on-chain when the chain is back to normal operations.
- This is a free transaction. **However, you need a balance of at least one TAO in your old coldkey, or one TAO staked, to initiate a coldkey swap to your new coldkey.**

:::danger Do not run this command more than once using a same coldkey
:::

### Example

```bash
btcli wallet schedule_coldkey_swap --subtensor.network=test
```

Sample output:

```bash
btcli wallet schedule_coldkey_swap --subtensor.network=test
Enter wallet name (default): 
Enter new coldkey SS58 address: 5HM...Srw
⚠If you call this on the same key multiple times, the key will enter arbitration.
Enter password to unlock key: 
Good news. There has been no previous key swap initiated for your coldkey swap.
Do you want to schedule a coldkey swap to: 5HM..Srw? [y/n]: y
Successfully scheduled coldkey swap.
```

### For help

For help description, run:
```bash
btcli wallet schedule_coldkey_swap --help
```

## Arbitration

When multiple coldkey swaps, involving either the same old coldkey or the same new coldkey, are scheduled, then the swap will not be performed when the mainnet opens. Instead, the swap enters an arbitration stage where the Senate votes to determine which coldkey swap should occur. 