---
title: "EVM Localnet with Metamask Wallet"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# EVM Localnet with Metamask Wallet

This tutorial is for how to set up your Metamask wallet to use with EVM localnet on Bittensor. You must run either this step or [EVM Testnet with Metamask Wallet](./evm-testnet-with-metamask-wallet.md) tutorial before you can run other tutorials in this section. 

:::tip blog post: EVM on Bittensor
If you are new to EVM, read this [simplified blog post explaining this feature](https://blog.bittensor.com/evm-on-bittensor-draft-6f323e69aff7).
:::

For all the EVM tutorials we will use the following:

- This **EVM Localnet** or **Bittensor EVM Testnet URL:** https://evm-testnet.dev.opentensor.ai
- **EVM Subtensor Chain ID:** 945 (This is UTF-8 encoding for alpha character)
- **EVM Testnet Faucet URL:** https://evm-testnet.dev.opentensor.ai/faucet 
- **Subtensor EVM block explorer URL:** https://evm-testscan.dev.opentensor.ai/
- **Opentensor EVM-demo GitHub repo:** https://github.com/opentensor/evm-demo/tree/main
 

## Step 1. Run EVM-enabled localnet

```bash
git clone https://github.com/opentensor/subtensor
git checkout feat/evm-devnet-ready
./scripts/localnet.sh False
```

## Step 2. Create a Metamask wallet 

1. If you don't already have it, [install Metamask wallet](https://metamask.io/download/) browser extension.
2. Create a new account.

## Step 2. Add EVM localnet to Metamask

Follow the below steps:

1. Open Metamask Wallet extension on your browser. Click on the &#8942; (three vertical dots, i.e., vertical ellipsis) at the top right. 
2. Select **Settings** from the drop-down menu. 
3. Select **Networks** > **Add network**.
4. Click on **Add a network manually** at the bottom of the networks list.
5. Enter the following details:
    - **Network name:** "Subtensor"
    - **New RPC URL:** http://localhost:9946/
    - **Chain ID:** 945 (This is UTF-8 encoding for Alpha character)
    - **Currency symbol:** TAO 
    - **Block explorer URL:** https://evm-testscan.dev.opentensor.ai/
6. Click **Save**.
7. Then click on **Switch network**.
8. You may need to go back to the EVM Testnet Faucet page and click the **Connect** button below the Metamask logo in the **Hexadecimal Address (0x...)** field.

With the above steps, you have successfully configured your Metamask wallet with the EVM localnet. 

## Step 3. Configure private key and RPC endpoint

In this step you will clone the EVM-demo repo, and copy the private key from your Metamask wallet account and paste it into the configuration file in the repo. This step will ensure that you are not prompted with password each and every step as you run these tutorials. 

1. Clone the Opentensor EVM-demo GitHub repo:
   ```bash
   git clone https://github.com/opentensor/evm-demo/tree/main
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

8. Finally, edit the `module.exports` section of the `config.js` file to use the localnet URLs, as shown below:
    ```javascript
    module.exports = {
    ethPrivateKey,
    subSeed,
    rpcUrl: rpcUrlLocal,
    wsUrl: wsUrlLocal,
    }
    ```

Save the `config.js` file. Now your setup is ready to run the tutorials. 
