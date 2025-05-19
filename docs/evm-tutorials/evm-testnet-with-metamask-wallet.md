---
title: "Metamask with Testnet"
---
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Metamask with Testnet

This page covers how to set up your Metamask wallet to use with the testnet on Bittensor. You must run this step before you can run other tutorials in this section. 

:::tip blog post: EVM on Bittensor
If you are new to EVM, try this [blog post](https://blog.bittensor.com/evm-on-bittensor-draft-6f323e69aff7) for a simplified explanation.
:::

Key values:
- The **Bittensor Testnet URL:** `https://test.chain.opentensor.ai`
- **EVM Subtensor Chain ID:** `945` (UTF-8 encoded alpha character)
- **Opentensor EVM-Bittensor GitHub repo:** `https://github.com/opentensor/evm-bittensor/tree/main`
 

## Step 1. Create a Metamask wallet 

1. If you don't already have it, [install Metamask wallet](https://metamask.io/download/) browser extension.
2. Create a new account.

### Step 2. Add testnet to Metamask

Add the testnet to Metamask from within the Metamask wallet. Follow the below steps:

1. Open Metamask Wallet extension on your browser. Click on the &#8942; (three vertical dots, i.e., vertical ellipsis) at the top right. 
2. Select **Settings** from the drop-down menu. 
3. Select **Networks** > **Add network**.
4. Click on **Add a network manually** at the bottom of the networks list.
5. Enter the following details:
    - **Network name:** "Subtensor"
    - **EVM RPC URL:** `https://test.chain.opentensor.ai`
    - **Chain ID:** `945`
    - **Currency symbol:** TAO 
6. Click **Save**.
7. Then click on **Switch network**.

With the above steps, you have successfully configured your Metamask wallet with the testnet. 

## Step 3 Obtain TAO

Next, request testnet TAO in the Bittensor community [Discord](https://discord.com/channels/799672011265015819/830068283314929684). 

## Step 4. Copy Metamask wallet private key into config

:::danger Stop. Did you install the dependencies?
Before you proceed, make sure you finished the [Install](./install.md) step.
:::

In this step you will copy the private key from your Metamask wallet account and paste it into the configuration file in the repo. This step will ensure that you are not prompted with password each and every step as you run these tutorials. 


1. Navigate to the `examples` directory of the EVM-Bittensor repo:

    ```bash
    cd examples
    ```

2. Create `config.js` file by copying the `config-example.js` file:

    ```bash
    cp config-example.js config.js
    ```

3. On Metamask wallet extension, your wallet account will have a H160 account address, starting with the `0x` prefix (for example: `0x7E5F4552091A69125d5DfCb7b8C2659029395Bdf`), and also your wallet account name. 
4. Click on your wallet account name, which will open the drop-down menu. 
5. Click on the &#8942; (three vertical dots, i.e., vertical ellipsis) next to the wallet account and select **Account details**. It will open a view with a QR code, your wallet account H160 address and a **Show private key** button.
6. Click on the **Show private key** button, enter the password. You will then see the private key for your wallet account. Copy this private key.
7. Paste this private key into `ethPrivateKey` string in your `config.js` file as shown below (mangled for security):

```javascript
const ethPrivateKey = "02c1c4112233snipsnipsnipgh933aca491e090e0b7xxyy1b124b86d9382b01a8";
```
Save the `config.js` file. Now your setup is ready to run the tutorials with EVM testnet. 
