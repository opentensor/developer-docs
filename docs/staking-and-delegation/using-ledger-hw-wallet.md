---
title: "Using Ledger Hardware Wallet"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Using Ledger Hardware Wallet

This guide describes how to set up your Ledger hardware wallet for managing your TAO on the Bittensor network. 

## Requirements

Set up your Ledger hardware wallet as per Ledger instructions. 

- [Ledger device (Nano S/S+/X, Flex, Stax)](https://www.ledger.com/).
- [Ledger Live app](https://www.ledger.com/ledger-live).

This guide assumes that you have a Ledger device and the Ledger Live app installed already. 

## Common Steps

1. Connect Ledger device to your computer with Ledger Live installed.
2. Open **Ledger Live** app > **My Ledger** > **Unlock Ledger** > **Approve Ledger Live**.
3. Install the **Polkadot (DOT)** app from Ledger Live.
4. To manage your TAO from your Ledger hardware wallet, you must install a wallet app that supports TAO and also supports the Ledger hardware wallet. [Talisman](https://www.talisman.xyz/), [Nova Wallet](https://novawallet.io/), and [Subwallet](https://www.subwallet.app/) apps satisfy this condition. Install any of these wallet apps, and make sure you have configured these wallet apps to also use the Bittensor network. This is required for either transferring TAO using your Ledger, or finding the correct address to receive TAO on your Ledger device.

:::danger Stop. Did you run the above steps? 
Proceed only after you successfully ran the above steps. The rest of this guide is described using Talisman wallet app.
:::

## Step 1. Connect Talisman app to Ledger device 
  
  1. Connect Ledger hardware wallet device to your computer.
  2. Open Talisman wallet app and select **Add Account**.
  3. Select **Connect** and choose **Connect Ledger**.

<center id="Talisman-1.3">
<ThemedImage
alt="1-Prompting Walkthrough"
sources={{
    light: useBaseUrl('/img/docs/ledger-hw-wallet//Talisman/Talisman-1.3.png'),
    dark: useBaseUrl('/img/docs/ledger-hw-wallet//Talisman/Talisman-1.3.png'),
  }}
style={{width: 900}}
/>
</center>
<br />

  4. Select **Polkadot**. Then in the **Choose Network** drop-down select  **Polkadot** as the network, and in the **Choose Ledger App** section select **Polkadot App**.

<center id="Talisman-1.4">
<ThemedImage
alt="1-Prompting Walkthrough"
sources={{
    light: useBaseUrl('/img/docs/ledger-hw-wallet//Talisman/Talisman-1.4.png'),
    dark: useBaseUrl('/img/docs/ledger-hw-wallet//Talisman/Talisman-1.4.png'),
  }}
style={{width: 900}}
/>
</center>
<br />

:::tip Failed to connect?
If you see "Failed to connect to your Ledger" message, then unlock your Ledger device and open the Polkadot app, then click "Retry".
:::

<center id="Talisman-1.4a">
<ThemedImage
alt="1-Prompting Walkthrough"
sources={{
    light: useBaseUrl('/img/docs/ledger-hw-wallet//Talisman/Talisman-1.4a.png'),
    dark: useBaseUrl('/img/docs/ledger-hw-wallet//Talisman/Talisman-1.4a.png'),
  }}
style={{width: 900}}
/>
</center>
<br />

  5. When the above steps are complete, then you have successfully connected your Ledger hardware wallet device to the Polkadot app. Next, choose the Ledger hardware wallet addresses you would like to connect to the Talisman wallet.
   
<center id="Talisman-1.4a">
<ThemedImage
alt="1-Prompting Walkthrough"
sources={{
    light: useBaseUrl('/img/docs/ledger-hw-wallet//Talisman/Talisman-1.5.png'),
    dark: useBaseUrl('/img/docs/ledger-hw-wallet//Talisman/Talisman-1.5.png'),
  }}
style={{width: 900}}
/>
</center>
<br />

:::tip Failed to connect?
If you had transferred TAO to the Ledger device already, then select **Custom** and modify the **Account index** to **0**. This will then show you the Ledger hardware wallet address to which you had transferred your TAO previously. You may try other values if needed.
:::

<center id="Talisman-1.4a">
<ThemedImage
alt="1-Prompting Walkthrough"
sources={{
    light: useBaseUrl('/img/docs/ledger-hw-wallet//Talisman/Talisman-1.5a.png'),
    dark: useBaseUrl('/img/docs/ledger-hw-wallet//Talisman/Talisman-1.5a.png'),
  }}
style={{width: 900}}
/>
</center>
<br />

Your Ledger hardware wallet device is now ready to be used with the Talisman Wallet app.

---

## Step 2. Obtain your Ledger's TAO address

Next, you should copy your Ledger device's TAO address. This is so that you can use this TAO address as either a source or a destination for TAO exchanges with other wallets. 

1. From your Talisman Wallet app, drop-down on **All Accounts** and select the Ledger account.

<center id="Talisman-1.4a">
<ThemedImage
alt="1-Prompting Walkthrough"
sources={{
    light: useBaseUrl('/img/docs/ledger-hw-wallet//Talisman/Talisman-3.1.png'),
    dark: useBaseUrl('/img/docs/ledger-hw-wallet//Talisman/Talisman-3.1.png'),
  }}
style={{width: 900}}
/>
</center>
<br />

2. Select **Copy**.

<center id="Talisman-1.4a">
<ThemedImage
alt="1-Prompting Walkthrough"
sources={{
    light: useBaseUrl('/img/docs/ledger-hw-wallet//Talisman/Talisman-3.2.png'),
    dark: useBaseUrl('/img/docs/ledger-hw-wallet//Talisman/Talisman-3.2.png'),
  }}
style={{width: 900}}
/>
</center>
<br />

3. Click the **Copy to clipboard** button under **Substrate (Generic)**.

<center id="Talisman-1.4a">
<ThemedImage
alt="1-Prompting Walkthrough"
sources={{
    light: useBaseUrl('/img/docs/ledger-hw-wallet//Talisman/Talisman-3.3.png'),
    dark: useBaseUrl('/img/docs/ledger-hw-wallet//Talisman/Talisman-3.3.png'),
  }}
style={{width: 900}}
/>
</center>
<br />

You have successfully copied the TAO address on the Ledger hardware wallet to the clipboard. Next steps describe steps to transfer TAO from this TAO address, i.e., from your Ledger hardware wallet, to a destination address.

---

## Step 3. Transfer TAO from Ledger hardware wallet 

To transfer TAO from your connected Ledger hardware wallet, execute the following steps:

1. Select the Ledger account from the **All Accounts** dropdown.

<center id="Talisman-1.4a">
<ThemedImage
alt="1-Prompting Walkthrough"
sources={{
    light: useBaseUrl('/img/docs/ledger-hw-wallet/Talisman/Talisman-3.1.png'),
    dark: useBaseUrl('/img/docs/ledger-hw-wallet/Talisman/Talisman-3.1.png'),
  }}
style={{width: 550}}
/>
</center>
<br />


2. Select **Send**.

<center id="Talisman-1.4a">
<ThemedImage
alt="1-Prompting Walkthrough"
sources={{
    light: useBaseUrl('/img/docs/ledger-hw-wallet/Talisman/Talisman-4.1.png'),
    dark: useBaseUrl('/img/docs/ledger-hw-wallet/Talisman/Talisman-4.1.png'),
  }}
style={{width: 550}}
/>
</center>
<br />


3. Select **Bittensor** from the list of networks.

<center id="Talisman-1.4a">
<ThemedImage
alt="1-Prompting Walkthrough"
sources={{
    light: useBaseUrl('/img/docs/ledger-hw-wallet/Talisman/Talisman-4.3.png'),
    dark: useBaseUrl('/img/docs/ledger-hw-wallet/Talisman/Talisman-4.3.png'),
  }}
style={{width: 550}}
/>
</center>
<br />

4. Input the destination address.

<center id="Talisman-1.4a">
<ThemedImage
alt="1-Prompting Walkthrough"
sources={{
    light: useBaseUrl('/img/docs/ledger-hw-wallet/Talisman/Talisman-4.4.png'),
    dark: useBaseUrl('/img/docs/ledger-hw-wallet/Talisman/Talisman-4.4.png'),
  }}
style={{width: 550}}
/>
</center>
<br />

5. Input the transaction amount and **Review** the transaction.

<center id="Talisman-1.4a">
<ThemedImage
alt="1-Prompting Walkthrough"
sources={{
    light: useBaseUrl('/img/docs/ledger-hw-wallet/Talisman/Talisman-4.5.png'),
    dark: useBaseUrl('/img/docs/ledger-hw-wallet/Talisman/Talisman-4.5.png'),
  }}
style={{width: 550}}
/>
</center>
<br />

6. Review the transaction and press **Approve on Ledger**.

<center id="Talisman-1.4a">
<ThemedImage
alt="1-Prompting Walkthrough"
sources={{
    light: useBaseUrl('/img/docs/ledger-hw-wallet/Talisman/Talisman-4.6.png'),
    dark: useBaseUrl('/img/docs/ledger-hw-wallet/Talisman/Talisman-4.6.png'),
  }}
style={{width: 550}}
/>
</center>
<br />

7. On your Ledger device screen, verify the transaction details are as expected. Then select **Approve** on the device (or **Reject** if you want to cancel).

<center id="Talisman-1.4a">
<ThemedImage
alt="1-Prompting Walkthrough"
sources={{
    light: useBaseUrl('/img/docs/ledger-hw-wallet/Ledger/Ledger-4.7a.jpg'),
    dark: useBaseUrl('/img/docs/ledger-hw-wallet/Ledger/Ledger-4.7a.jpg'),
  }}
style={{width: 550}}
/>
</center>
<br />

<center id="Talisman-1.4a">
<ThemedImage
alt="1-Prompting Walkthrough"
sources={{
    light: useBaseUrl('/img/docs/ledger-hw-wallet/Ledger/Ledger-4.7b.jpg'),
    dark: useBaseUrl('/img/docs/ledger-hw-wallet/Ledger/Ledger-4.7b.jpg'),
  }}
style={{width: 550}}
/>
</center>
<br />

<center id="Talisman-1.4a">
<ThemedImage
alt="1-Prompting Walkthrough"
sources={{
    light: useBaseUrl('/img/docs/ledger-hw-wallet/Ledger/Ledger-4.7c.jpg'),
    dark: useBaseUrl('/img/docs/ledger-hw-wallet/Ledger/Ledger-4.7c.jpg'),
  }}
style={{width: 550}}
/>
</center>
<br />

<center id="Talisman-1.4a">
<ThemedImage
alt="1-Prompting Walkthrough"
sources={{
    light: useBaseUrl('/img/docs/ledger-hw-wallet/Ledger/Ledger-4.7d.jpg'),
    dark: useBaseUrl('/img/docs/ledger-hw-wallet/Ledger/Ledger-4.7d.jpg'),
  }}
style={{width: 550}}
/>
</center>
<br />

<center id="Talisman-1.4a">
<ThemedImage
alt="1-Prompting Walkthrough"
sources={{
    light: useBaseUrl('/img/docs/ledger-hw-wallet/Ledger/Ledger-4.7e.jpg'),
    dark: useBaseUrl('/img/docs/ledger-hw-wallet/Ledger/Ledger-4.7e.jpg'),
  }}
style={{width: 550}}
/>
</center>
<br />

8. Finished! Your TAO has been sent.

<center id="Talisman-1.4a">
<ThemedImage
alt="1-Prompting Walkthrough"
sources={{
    light: useBaseUrl('/img/docs/ledger-hw-wallet/Talisman/Talisman-4.8.png'),
    dark: useBaseUrl('/img/docs/ledger-hw-wallet/Talisman/Talisman-4.8.png'),
  }}
style={{width: 550}}
/>
</center>
<br />
