---
title: "EVM Localnet with Metamask Wallet"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# EVM Localnet with Metamask Wallet

This tutorial is for how to set up your Metamask wallet to use with EVM localnet on Bittensor. You must run either this step or [EVM Testnet with Metamask Wallet](./evm-testnet-with-metamask-wallet.md) tutorial before you can run other tutorials in this section. 

:::tip blog post: EVM on Bittensor
If you are new to EVM, try this [blog post](https://blog.bittensor.com/evm-on-bittensor-draft-6f323e69aff7) for a simplified explanation.
:::

Key values:
- **EVM Subtensor Mainnet Chain ID:**: `964` (UTF-8 encoded TAO symbol) 
- **EVM Subtensor Testnet Chain ID:**: `945` (UTF-8 encoded alpha character)
- **Opentensor EVM-Bittensor GitHub repo with code examples:** https://github.com/opentensor/evm-bittensor/tree/main

## Step 1. Run EVM-enabled localnet

```bash
git clone https://github.com/opentensor/subtensor
./scripts/localnet.sh
```

## Step 2. Set Chain ID

The bare local network doesn't have the Chain ID setup and it needs to be configured with an admin extrinsic. Use [sudo section of Polkadot AppsUI](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/sudo) to call this extrinsic to set the ChainID to 945 (to simulate Testnet) or 964 (to simulate Mainnet):

```
adminUtils >> sudoSetEvmChainId
```

## Step 3. Create a Metamask wallet 

1. If you don't already have it, [install Metamask wallet](https://metamask.io/download/) browser extension.
2. Create a new account.

## Step 4. Add EVM localnet to Metamask

Follow the below steps:

1. Open Metamask Wallet extension on your browser. Click on the drop-down **Select a network** menu at the top left. 
2. Click on **+ Add a Custom Network** button. 
3. Enter the following details:
    - **Network name:** "Subtensor Local"
    - **Default RPC URL:** http://localhost:9944/
    - **Chain ID:** `964` or `945`, depending on your setting in Step 2
    - **Currency symbol:** TAO 
6. Click **Save**.
7. Click on **Select a network** again and switch to the Subtensor Local network.

With the above steps, you have successfully configured your Metamask wallet with the EVM localnet. 

## Step 5. Configure private key and RPC endpoint

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
7.  Paste this private key into `ethPrivateKey` string in your `config.js` file as shown below (mangled for security):

    ```javascript
    const ethPrivateKey = "02c1c4112233snipsnipsnipgh933aca491e090e0b7xxyy1b124b86d9382b01a8";
    ```

8.  Finally, edit the `module.exports` section of the `config.js` file to use the localnet URLs, as shown below:
    ```javascript
    module.exports = {
    ethPrivateKey,
    subSeed,
    rpcUrl: rpcUrlLocal,
    wsUrl: wsUrlLocal,
    }
    ```

Save the `config.js` file. Now your setup is ready to run the tutorials with EVM localnet. 

## Step 6 (Optional). Disable white list for contract deployment

If you are planning to deploy contracts locally, you need to disable the premission control. This can be done with the following extrinsic in [sudo section of Polkadot AppsUI](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/sudo):

```
evm >> disableWhitelist
```

Select **Yes** and then click Submit Sudo.
