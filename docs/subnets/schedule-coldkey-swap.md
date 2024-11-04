---
title: "Schedule Coldkey Swap"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Schedule Coldkey Swap

This guide describes how to use the schedule coldkey swap feature. This feature schedules your funds transfer from one coldkey (wallet) to a new coldkey. 

:::danger No btcli support yet
The `btcli` command does not yet support this schedule coldkey swap feature. You must use the [Polkadot JS extension](https://polkadot.js.org/extension/).
:::

## Description

The schedule coldkey swap feature works as follows:

- The schedule coldkey swap feature enables you to schedule the swapping of old coldkey to a new coldkey. If you feel your existing coldkey is potentially compromised, then use this feature to schedule a swap to a new coldkey.
- When you use this feature, it will not immediately swap your coldkeys and swap your TAO funds from the old coldkey to the new coldkey. It will only schedule the swap event. 
- All scheduled coldkey swaps will be executed on-chain. **Your scheduled coldkey swap will execute on the mainnet exactly 5 days after you successfully scheduled the coldkey swap using the method described in this document.**
- The old coldkey you used in this method will be locked when you schedule the swap. After the 5-day period is elapsed your original coldkey will be unlocked entirely.
- **Cost**: The cost of this coldkey swap transaction is 0.1 TAO. This must be available in your old coldkey.
- Any subnet ownership from your old coldkey will move to the new coldkey.
- The delegated stake will be transferred from your old coldkey to the new coldkey.
- For those who were staking to a validator from their old coldkey, their staking TAO will transfer to the new coldkey. 

:::danger Do not schedule coldkey swap more than once using the same coldkey
:::

## Before you proceed

Make sure you satisfy the below requirements before you proceed:

1. You must be the owner of both old and new coldkeys to schedule the coldkey swap.
2. You must use the [Polkadot JS extension](https://polkadot.js.org/extension/). The `btcli` command does not yet support scheduling coldkey swap.
3. You must import your old and new coldkeys into the Polkadot JS extension.
4. You must connect the old coldkey account to the [polkadot.js.org/apps](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fentrypoint-finney.opentensor.ai%3A443#/explorer) website. 

  :::danger If you do not do this step, then you will not see **Developer** > **Extrinsics** option on the [polkadot.js.org/apps](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fentrypoint-finney.opentensor.ai%3A443#/extrinsics) website. 
  :::

Proceed only after you satisfy the above requirements.

## Steps

Follow the steps shown below the screenshot:

<center>
<ThemedImage
alt="Coldkey and hotkey pairings"
sources={{
    light: useBaseUrl('/img/docs/schedule-coldkey-swap-polkadotapp.png'),
    dark: useBaseUrl('/img/docs/schedule-coldkey-swap-polkadotapp.png'),
}}
style={{width: 900}}
/>
</center>

<br />

### Step 1: Connect to the subtensor network on Polkadot.js

Open your web browser and navigate to the Polkadot.js Apps website (https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fentrypoint-finney.opentensor.ai%3A443#/).

### Step 2: Navigate to the Extrinsics page

From the top navigation menu, proceed to **Developer** > **Extrinsics** to open the Extrinsics page. If you do not see this option, then make sure you successfully imported your old coldkey into the Polkadot JS extension, and connected this old coldkey account to the Polkadot.js Apps website. 

### Step 3: Select your old coldkey account

Locate the drop-down section labeled **using the selected account** and select your connected account. This account should be your old coldkey account.

### Step 4: Select the `subtensorModule`

Locate the drop-down section labeled **submit the following extrinsic** and select `subtensorModule`.

### Step 5: Choose the `scheduleSwapColdkey` function 

After selecting the `subtensorModule`, a second drop-down menu will appear on the right side of it. From this drop-down select the `scheduleSwapColdkey`  option. 

### Step 6: Provide the new coldkey 

Provide your new coldkey in the `newColdkey: AccountId32` field.

### Step 7: Submit the transaction

Check again that you have provided the correct old and new coldkeys. 

Scroll down to the bottom of the page and click on the **Submit Transaction** button. Polkadot.js will prompt you to sign the transaction using the selected account. After you sign the transaction, the signed transaction will be broadcast to the Subtensor.

## Verify

Your scheduled coldkey swap will execute on the mainnet 5 days after you successfully scheduled the coldkey swap using the above method. Check your new coldkey after 5 days to verify.
