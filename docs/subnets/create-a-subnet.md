---
title: "Create a Subnet"
---

# Create a Subnet

This page describes the procedures for creating a new Bittensor subnet.

Creating a subnet is a major undertaking. You should read up on [Understanding Subnets](understanding-subnets) and research existing subnets before planning to create one.

See also:

- Real-time subnet info on [tao.app](https://www.tao.app/explorer)
- LearnBittensor's [Subnet listings](https://learnbittensor.org/subnets)

:::info A New Subnet is not Automatically Active
To allow subnet owners to fully set up their subnets and to prevent extraction of emissions to subnet participants before the subnet is contributing to the network, new subnets are inactive and cannot be started for 7 * 7200 blocks (roughly one week) after they are registered.  During this time, you can register and activate validators and invite miners into the subnet.  **Be advised that the subnet and its participants will receive NO EMISSIONS during the time that the subnet is inactive.** 
:::

:::tip Validating in Your Own Subnet
Ensure that you meet the [minimum requirements for validation](../validators#requirements-for-validation), or you will not be able to set weights in your own subnet.

One option for subnet owners is to ask one of the root network (subnet 0) validators to parent your validator hotkey as a childkey of theirs.  This will lend their stake to your validator, and can help you ensure that your validator maintains a sufficient stake to effectively participate in consensus as well as resist deregistration. See the [Child Hotkeys](./child-hotkeys) documentation for more detail.
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
btcli wallet faucet --wallet.name <owner-wallet-name> --network ws://127.0.0.1:9946 
```
Output:
```bash
>> Balance: τ0.000000000 ➡ τ100.000000000
```

### Step 4. Create the subnet

Run the below command to create a new subnet on your local chain. The cost will be exactly τ100.000000000 for the first subnet you create.

```bash
btcli subnet create --wallet.name owner --network ws://127.0.0.1:9946 
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
btcli subnet burn-cost --subtensor.network test
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
btcli subnet burn-cost
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


### Step 4. Check to see if you can start the subnet

Use the below command to check whether the subnet can be started. 

```bash
btcli subnet check-start --netuid x
```

Where "x" is the subnet ID.

The output will provide you with the block registered and the block at which the subnet can be started, with "blocks remaining" and an estimated time.  When this time has passed, the `check-start` command will return `Emission schedule can be started.` 

### Step 5. Start the subnet

Use the below command to start the subnet once `check-start` returns `Emission schedule can be started.` 

```bash
btcli subnet start --netuid x
```
