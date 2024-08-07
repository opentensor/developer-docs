---
title: "Dissolve a Subnet"
---

# Dissolve a Subnet

If you are a subnet owner you can dissolve your subnet by manually deregistering your subnet. Follow the below steps to deregister your subnet. 

:::danger Proceed with caution, All subnet metagraph will be cleared
When a subnet is dissolved, all currently registered subnet miners and subnet validators will be deregistered, and the subnet metagraph will be cleared.  
:::


## Before you proceed

Make sure you satisfy the below requirements before you proceed:

1. You must be the owner of the subnet coldkey to manually deregister your subnet.
2. You must use the [Polkadot JS extension](https://polkadot.js.org/extension/). The `btcli` tool does not support subnet deregistration.
3. You must import your subnet coldkey into the Polkadot JS extension and connect this coldkey account to the [polkadot.js.org/apps](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fentrypoint-finney.opentensor.ai%3A443#/explorer) website. 
4. Before you dissolve your subnet, make sure you communicate your intent and timeline of the subnet dissolution to the subnet miners and subnet validators in your subnet, and to your community.

Proceed only after you satisfy the above three requirements.

## Deregister subnet manually

To manually deregister (dissolve) your subnet, you must call the `dissolveNetwork` extrinsic directly from the [polkadot.js.org/apps](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fentrypoint-finney.opentensor.ai%3A443#/extrinsics) website. 

:::danger Connect your subnet coldkey first
You must successfully import your subnet coldkey into the Polkadot JS extension, and connect the subnet coldkey account to the website, as noted in step 3 in the above [Before you proceed](#before-you-proceed) section, to use this extrinsic. If you do not do this step, then you will not see **Developer** > **Extrinsics** option on the [polkadot.js.org/apps](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fentrypoint-finney.opentensor.ai%3A443#/extrinsics) website. 
:::

Follow the below steps:

### Step 1: Connect to the subtensor network on Polkadot.js

Open your web browser and navigate to the Polkadot.js Apps website (https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fentrypoint-finney.opentensor.ai%3A443#/).

### Step 2: Navigate to the Extrinsics page

From the top navigation menu, proceed to **Developer** > **Extrinsics** to open the Extrinsics page. If you do not see this option, then make sure you successfully imported your subnet coldkey into the Polkadot JS extension. 

### Step 3: Select your connected account

Locate the drop-down section labeled **using the selected account** and select your connected account. This account should have the necessary permissions to dissolve the subnet.

### Step 4: Select the `subtensorModule`

Locate the drop-down section labeled **submit the following extrinsic** and select `subtensorModule`.

### Step 5: Choose the `dissolveNetwork` function 

After selecting the `subtensorModule`, a second drop-down menu will appear on the right side of it. From this drop-down select the `dissolveNetwork(netuid)`  option. 

### Step 6: Provide the required values

Provide the required values as shown below:

- If you have not already provided this in the above Step 3, then for the `origin` argument, select the appropriate account from the **using the selected account** drop-down. This account should have the necessary permissions to dissolve the network.
- For the `netuid` argument, enter the `netuid` of the subnet you want to dissolve. 

### Step 7: Submit the transaction

Check again that you have entered the correct `netuid` value.

Scroll down to the bottom of the page and click on the **Submit Transaction** button.

Polkadot.js will prompt you to sign the transaction using the selected account.
After you sign the transaction, the signed transaction will be broadcast to the Subtensor.

### Step 8: Monitor the transaction status

After submitting the transaction, you can monitor its status in the **Network** > **Explorer** section. 

In the **Explorer** page, click on the **Node Info** in the top navigation bar. You will see a status of the recent blocks and transactions. Look for your transaction in the list and click on it to view its details and status.

If the transaction is successful, the network with the specified `netuid` will be dissolved, and the associated data will be removed from the Subtensor storage.

