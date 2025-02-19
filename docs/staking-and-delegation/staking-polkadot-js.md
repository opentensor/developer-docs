---
title: "Staking with Polkadot JS"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Staking with Polkadot JS

This document describes how you can stake to Opentensor Foundation using [Polkadot JS](https://polkadot.js.org/apps/?rpc=wss://entrypoint-finney.opentensor.ai:443#/accounts).

:::tip
Also see [Delegation](./delegation.md).
:::

In addition to running your own subnet miner or subnet validator, you can delegate your TAO to the Opentensor Foundation validation pool. Delegating TAO simply means you are staking to the Opentensor Foundation's validator, instead of running your own subnet validator. To take back your staked TAO from the pool at any time, you can simply undelegate your TAO.

:::danger
Consider your endpoint security before following the procedure documented below!

The following procedure involves adding a coldkey wallet seed phrase into a digital device (a computer capable of running the Polkdadot Extension for Chrome).

Anyone who obtains your seed phrase in any way owns your TAO.

Any time you enter a seed phrase onto a digital device, the wallet is *permanently* rendered no more secure than the device&mdash;anyone who obtains it in the future can attempt to scan it for any seed phrases that have ever been input into it.

Consider [Using a Ledger Hardware Wallet](./using-ledger-hw-wallet) to manage your Bittensor coldkey and sign transactions.
:::


Follow the below steps:


1. Add your Bittensor wallet to the [Polkadot Extension](https://polkadot.js.org/extension/) wallet in your browser (you will need your mnemonic to do this). After you have done so, navigate to [Polkadot JS](https://polkadot.js.org/apps/?rpc=wss://entrypoint-finney.opentensor.ai:443#/accounts) and your account will be displayed there.


2. Navigate to [**Developer** >  **Extrinsics**](https://polkadot.js.org/apps/?rpc=wss://entrypoint-finney.opentensor.ai:443#/extrinsics).

    ![Extrinsics](/img/docs/step2.png)


3. In the drop-down, select **subtensorModule**.

    ![SubtensorModule](/img/docs/step3.png)


4. In the drop-down menu for the **subtensorModule**, select **addStake**. 

    ![AddStake](/img/docs/step4.png)


5. Paste the hotkey of the delegate in the box labeled **hotkey**.

    ![delegate hotkey](/img/docs/step5.png)


6. In the box labeled **amountStaked**, input, in units of Rao, the amount of TAO that you wish to stake to this delegate. 

    Note that 1 TAO = 10<sup>9</sup> Rao. Therefore, if you wish to stake 1 TAO, then input 1000000000 (`1` followed by nine zeros). If you wish to stake 10 TAO, then input 10000000000 (`1` followed by ten zeros), and so on. 

    ![amount staked](/img/docs/step6.png)


7. After you have verified the keys and amounts, click **Submit Transaction** to sign and submit this transaction to be included on the chain.

    ![sign and submit](/img/docs/step7.png)