---
title: "Create a Subnet"
---

# Create a Subnet

:::tip Note to miners and validators
You **do not** have to create a subnet to mine or validate on the Bittensor network. See the [Checklist for Validating and Mining](./checklist-for-validating-mining.md) for information on mining and validating on Bittensor.
:::

## Recommended flow for deploying your subnet 

Before you deploy your first subnet on the mainchain, we strongly recommend that you follow the below order:
1. **Local first**: Create a subnet on your local, and develop and test your incentive mechanism on the local subnet.
2. **Testchain next**: After you are satisfied with it, create a subnet on the Bittensor testchain, and test and debug your incentive mechanism on this testchain subnet.
3. **Mainchain last**: After completing the above steps, create a subnet on the Bittensor mainchain.

:::tip Subnet Creation Limits
Subnet creations are limited to **one subnet creation per 7200 blocks** (approximately one per day).
:::

## Prerequisites

To create a subnet, whether locally, on testchain, or on mainchain, make sure that:

- You [installed Bittensor](../getting-started/installation.md). 
- You have already [created a wallet or know how to create one](../getting-started/wallets.md#creating-a-local-wallet). 

:::tip Registering vs creating vs purchasing a slot 
In Bittensor, when we say "registering your keys in a subnet", it means purchasing a UID slot in the subnet, and you will then either validate or mine on this UID. This step is also referred to as **purchasing a slot**. On the other hand, "creating a subnet" will create a subnet and give you its `netuid`.
:::

## Creating a local subnet

You must also run a local Bittensor blockchain to create and run a local subnet. Running a local blockchain is sometimes synonymously referred to as **running on staging**. Running a local blockchain spins up two authority nodes locally, not connected to any other Bittensor blockchain nodes either on testchain or mainchain.

:::tip Do not run a public subtensor node for a local subnet 
Running a local blockchain is **different** from running a public subtensor node. While a local blockchain node is not connected to any other Bittensor nodes, a public subtensor node will connect to the Bittensor network, testchain, or mainchain as per how you run the subtensor node and sync with the network, giving you your own access point to the Bittensor network. **To create a local subnet, do not run a public subtensor; instead, only run a local blockchain.**
:::

### Step 1. Install and run a local blockchain node

Follow the [Bittensor Subnet Template document](https://github.com/opentensor/bittensor-subnet-template/blob/main/docs/running_on_staging.md) and run the below specified steps:
- From and including [Step 1 Installing substrate dependencies](https://github.com/opentensor/bittensor-subnet-template/blob/main/docs/running_on_staging.md#1-install-substrate-dependencies).
- To and including [Step 5 Initialize](https://github.com/opentensor/bittensor-subnet-template/blob/main/docs/running_on_staging.md#5-initialize).

The above steps will install and run a local blockchain node. Furthermore, when built with the `--features pow-faucet` flag, as instructed in the above **Step 5. Initialize**, the local blockchain node will provide the faucet feature, which you can use to mint test tokens.

### Step 2. Create wallet

If you have not already done so, create Bittensor wallet(s) using the steps described in the [Create Wallet](../getting-started/wallets.md) guide. 

### Step 3. Mint tokens from the faucet

You will need tokens to register the subnet (which you will create below) on your local blockchain.  Run the following command to mint faucet tokens (fake TAO).
```bash
btcli wallet faucet --wallet.name <owner-wallet-name> --subtensor.chain_endpoint ws://127.0.0.1:9946 
```
Output:
```bash
>> Balance: τ0.000000000 ➡ τ100.000000000
```

### Step 4. Create the subnet

Run the below command to create a new subnet on your local chain. The cost will be exactly τ100.000000000 for the first subnet you create.

```bash
btcli subnet create --wallet.name owner --subtensor.chain_endpoint ws://127.0.0.1:9946 
```
Output:
```bash
>> Your balance is: τ200.000000000
>> Do you want to register a subnet for τ100.000000000? [y/n]: 
>> Enter password to unlock key: [YOUR_PASSWORD]
>> ✅ Registered subnetwork with netuid: 1
```

The local chain will now have registered a default `netuid` of 1. A second registration will create `netuid` 2, and so on, until you reach the subnet limit of 8. If you create the 9th subnet, the subnet with the least staked TAO will be replaced with the newly created subnet, thereby maintaining the total subnet count to 8.

## Creating a subnet on testchain

You do not need to run a local blockchain node to create a testchain subnet. Instead, your subnet will connect to the Bittensor testchain.

Creating a subnet on the testchain is competitive. Though you will only use the faucet TAO tokens for the testchain, the cost to create a subnet is determined by the rate at which new subnets are registered onto the testchain.

By default, you must have at least 100 test TAO in your owner wallet to create a subnet. However, the exact amount will fluctuate based on demand. Follow the below steps.

### Step 1. Create wallet

If you have not already done so, create Bittensor wallet(s) using the steps described in the [Create Wallet](../getting-started/wallets.md) guide. 

### Step 2. Get the current price 

```bash
btcli subnet lock_cost --subtensor.network test
```
Output:
```bash
>> Subnet lock cost: τ100.000000000
```

### Step 3. Get faucet tokens

The faucet is disabled on the testchain. Hence, if you don't have sufficient faucet tokens, ask the [Bittensor Discord community](https://discord.com/channels/799672011265015819/830068283314929684) for faucet tokens.

### Step 4. Create the subnet 

Create your new subnet on the testchain using the test TAO you received from the previous step. This will create a new subnet on the testchain and give you its owner permissions.

:::tip Your test TAO is returned when the subnet is deregistered
Subnet creation (subnet registration) on the testchain costs test TAO. You will get this test TAO back when the subnet is deregistered.
:::

Run the create subnet command on the testchain.

```bash
btcli subnet create --subtensor.network test 
```
Output:
```bash
# Enter the owner wallet name, which gives the coldkey permissions to define running hyperparameters later.
>> Enter wallet name (default): owner   # Enter your owner wallet name
>> Enter password to unlock key:        # Enter your wallet password.
>> Register subnet? [y/n]: <y/n>        # Select yes (y)
>> Registering subnet...
✅ Registered subnetwork with netuid: 1 # Your subnet netuid will show here, save this for later.
```

## Creating a subnet on mainchain

You do not need to run a local blockchain node to create a subnet on the mainchain. Instead, your subnet will connect to the Bittensor mainchain. Follow the below steps.

:::caution Alert: Minimum required TAO 
Creating a subnet on the mainnet is competitive, and the cost is determined by the rate at which new networks are registered onto the chain. By default, you must have at least 100 TAO in your owner wallet to create a subnet on the mainchain. However, the exact amount will fluctuate based on demand.
:::

### Step 1. Create wallet

If you have not already done so, create Bittensor wallet(s) using the steps described in the [Create Wallet](../getting-started/wallets.md) guide.

### Step 2. Get the current price 

The code below shows how to get the current price of creating a subnet on the mainchain (when the `--subtensor.network` option is not used, then the `btcli` will default to the `mainchain`).

```bash
btcli subnet lock_cost
```
Output:
```bash
>> Subnet lock cost: τ100.000000000
```

### Step 3. Create the subnet 

:::tip Your TAO is returned when the subnet is deregistered
Subnet creation (subnet registration) on the mainchain costs real TAO. You will get this TAO back when the subnet is deregistered.
:::

Use the below command to create a new subnet on the mainchain. 

```bash
btcli subnet create
```
Output:
```bash
>> Enter wallet name (default): owner   # Enter your owner wallet name
>> Enter password to unlock key:        # Enter your wallet password.
>> Register subnet? [y/n]: <y/n>        # Select yes (y)
>> Registering subnet...
✅ Registered subnetwork with netuid: 1 # Your subnet netuid will show here, save this for later.
```

---

## Immunity period for a subnet

The notion of [immunity_period](./subnet-hyperparameters.md#immunity_period) also applies to a subnet. It works like this:

- Subnets are competitive, even though new and additional subnets are routinely created in the Bittensor network. As a result, subnet performance is continuously monitored, poor-performing subnets are deregistered, and the registration cost is returned to the deregistered subnet owner.

- A subnet's performance is measured using the emissions earned by the subnet: The lower the emission earned by the subnet, the poorer the subnet's performance. See [Emissions](../emissions.md).

- Furthermore, any subnet has an immunity period of `7 * 7200` blocks, which is seven days. See the line of code that defines [SubtensorInitialNetworkImmunity](https://github.com/opentensor/subtensor/blob/52882caa011c5244ad75f1d9d4e182a1a17958a2/runtime/src/lib.rs#L660). This initial network immunity period starts when the subnet is created and its `netuid` is issued to the subnet owner. During this immunity period, the subnet is not at risk of deregistered.

- However, at the end of this immunity period, if the subnet's emissions are the lowest among all the subnets, then this subnet will be deregistered when a new subnet registration request arrives. If there are several subnets with the lowest emission, then the oldest subnet among the lowest will be deregistered first, followed by the second oldest, and so on.

:::tip A newly created subnet starts with zero emission
:::

## Subnet deregistration

:::danger poor-performing subnets risk deregistration
Ensure your subnet's performance is high, or it risks being deregistered. Also, see the above section on [Immunity period for a subnet](#immunity-period-for-a-subnet).
:::

When a subnet is deregistered, all its UIDs are also deregistered along with it. As a result, the subnet's subnet miners and subnet validators are also deregistered. The new subnet at this `netuid` starts afresh, and any subnet miners and subnet validators for this new subnet must register using the standard registration step described in [Register](../subnets/register-validate-mine.md#register).

---

## Dissolving a subnet (manual deregistration)

:::danger When a subnet is dissolved, all currently registered miners and validators will be deregistered, and the subnet metagraph will be cleared.  Before you dissolve a subnet out from underneath your miners & validators, make sure you communicate your intent and timeline to your community!
:::

If you are the owner of the subnet coldkey and want to manually deregister (dissolve) your subnet, you need to call the `dissolve_network` extrinsic directly from polkadot.js, as the functionality is not exposed in the cli.

### Step 1: Connect to the Subtensor Network

Open your web browser and navigate to the Polkadot.js Apps website (https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fentrypoint-finney.opentensor.ai%3A443#/extrinsics).

### Step 2: Navigate to the Extrinsics Page

In the top navigation menu, click on the "Developer" tab.
In the sub-menu, click on "Extrinsics" to open the Extrinsics page.

### Step 3: Select the subtensor Pallet

On the Extrinsics page, you will see a section labeled "submit the following extrinsic".
In the first dropdown menu labeled "selected call", choose the subtensor pallet.

### Step 4: Choose the `dissolve_network` Function 

After selecting the subtensor pallet, the second dropdown menu will show the available functions within that pallet.
Scroll down and select the  dissolve_network function.

### Step 5: Provide the Required Arguments

Once you've selected the `dissolve_network` function, you will see input fields for the required arguments.

- For the `origin` argument, select the appropriate account from the "using the selected account" dropdown. This account should have the necessary permissions to dissolve the network.
- For the `netuid` argument, enter the unique identifier of the network you want to dissolve. This should be a 16-bit unsigned integer. (i.e. your subnet number)

### Step 6: Submit the Transaction

Double-check that you've entered the correct  netuid  value.
Scroll down to the bottom of the page and click on the "Submit Transaction" button.
Polkadot.js will prompt you to sign the transaction using the selected account.
After signing the transaction, it will be broadcast to the Subtensor network.

### Step 7: Monitor the Transaction Status

After submitting the transaction, you can monitor its status in the "Explorer" tab of Polkadot.js Apps.
In the "Explorer" tab, click on the "Node Info" sub-menu to see the recent blocks and transactions.
Look for your transaction in the list and click on it to view its details and status.
If the transaction is successful, the network with the specified netuid will be dissolved, and the associated data will be removed from the Subtensor storage.
