---
title: "Create a Subnet"
---

# Create a Subnet

:::tip Note to miners and validators
You **do not** have to create a subnet to mine or validate on the Bittensor network. See the [Checklist for Validating and Mining](./checklist-for-validating-mining.md) for information on mining and validating on Bittensor.
:::

## Recommended flow for deploying your subnet 

Before you deploy your first subnet on the mainchain, we strongly recommend that you follow the below order:
1. **Local first**: First create a subnet on your local, and develop and test your incentive mechanism on the local subnet. 
2. **Testchain next**: After you are satisfied with it, next create a subnet on the Bittensor testchain, and test and debug your incentive mechanism on this testchain subnet. 
3. **Mainchain last**: Finally, only after you completed the above steps, create a subnet on the Bittensor mainchain. 

:::tip Subnet Creation Limits
Subnet creations are limited to **one subnet creation per 7200 blocks** (approximately one per day).
:::

## Prerequisites

To create a subnet, whether locally or on testchain or on mainchain, make sure that:

- You [installed Bittensor](../getting-started/installation.md). 
- You have already [created a wallet or know how to create one](../getting-started/wallets.md#creating-a-local-wallet). 

:::tip Registering vs creating vs purchasing a slot 
In Bittensor we say "registering your keys in a subnet" to mean purchasing a UID slot in the subnet and you will then either validate or mine on this UID. This step is also referred as **purchasing a slot**. On the other hand, "creating a subnet" will create a subnet and give you its `netuid`.
:::

## Creating a local subnet

To create and run a local subnet, you must also run a local Bittensor blockchain. Running a local blockchain is sometimes synonymously referred as **running on staging**. Running a local blockchain spins up two authority nodes locally, not connected to any other Bittensor blockchain nodes either on testchain or mainchain. 

:::tip Do not run a public subtensor node for a local subnet 
Running a local blockchain is **different** from running a public subtensor node. While a local blockchain node is not connected to any other Bittensor nodes, a public subtensor node will connect to the Bittensor network, testchain or mainchain as per how you run the subtensor node, and sync with the network, giving you your own access point to the Bittensor network. **For creating a local subnet, do not run a public subtensor, but instead only run a local blockchain.**
:::

### Step 1. Install and run a local blockchain node

Follow the [Bittensor Subnet Template document](https://github.com/opentensor/bittensor-subnet-template/blob/main/docs/running_on_staging.md) and run the below specified steps:
- From and including [Step 1 Installing substrate dependencies](https://github.com/opentensor/bittensor-subnet-template/blob/main/docs/running_on_staging.md#1-install-substrate-dependencies).
- To and including [Step 5 Initialize](https://github.com/opentensor/bittensor-subnet-template/blob/main/docs/running_on_staging.md#5-initialize).

The above steps will install and run a local blockchain node. Furthermore, when built with the `--features pow-faucet` flag, as instructed in the above **Step 5. Initialize**, the local blockchain node will provide the faucet feature using which you can mint test tokens.

### Step 2. Create wallet

If you have not already done so, create Bittensor wallet(s) using the steps described in the [Create Wallet](../getting-started/wallets.md) guide. 

### Step 3. Mint tokens from faucet

You will need tokens to register the subnet (which you will create below) on your local blockchain.  Run the following command to mint faucet tokens (fake TAO).
```bash
# Mint tokens for the subnet owner
btcli wallet faucet --wallet.name <owner-wallet-name> --subtensor.chain_endpoint ws://127.0.0.1:9946 
>> Balance: τ0.000000000 ➡ τ100.000000000
```

### Step 4. Create the subnet

Run the below command to create a new subnet on your local chain. The cost will be exactly τ100.000000000 for the first subnet you create.

```bash
btcli subnet create --wallet.name owner --subtensor.chain_endpoint ws://127.0.0.1:9946 
>> Your balance is: τ200.000000000
>> Do you want to register a subnet for τ100.000000000? [y/n]: 
>> Enter password to unlock key: [YOUR_PASSWORD]
>> ✅ Registered subnetwork with netuid: 1
```

The local chain will now have registered a default `netuid` of 1. A second registration will create `netuid` 2 and so on until you reach the subnet limit of 8. If you create the 9th subnet, then the subnet with the least staked TAO will be replaced with the newly create subnet, thereby maintaining total subnet count to 8.

## Creating a subnet on testchain

You do not need to run a local blockchain node for creating a subnet on the testchain. Instead, your subnet will connect to the Bittensor testchain.

Creating a subnet on the testchain is competitive. Though you will only use the faucet TAO tokens for testchain, the cost to create a subnet is determined by the rate at which new subnets are being registered onto the testchain. 

By default you must have at least 100 test TAO in your owner wallet to create a subnet. However, the exact amount will fluctuate based on demand. Follow the below  steps. 

### Step 1. Create wallet

If you have not already done so, create Bittensor wallet(s) using the steps described in the [Create Wallet](../getting-started/wallets.md) guide. 

### Step 2. Get the current price 

```bash
btcli subnet lock_cost --subtensor.network test
>> Subnet lock cost: τ100.000000000
```

### Step 3. Get faucet tokens

Faucet is disabled on the testchain. Hence, if you don't have sufficient faucet tokens, ask the [Bittensor Discord community](https://discord.com/channels/799672011265015819/830068283314929684) for faucet tokens.

### Step 4. Create the subnet 

Create your new subnet on the testchain using the test TAO you received from the previous step. This will create a new subnet on the testchain and give you the owner permissions to it. 

:::tip Your test TAO is returned when subnet is deregistered
Subnet creation (also called subnet registration) on the testchain costs test TAO. You will get this test TAO back when the subnet is deregistered.
:::

```bash
# Run the create subnet command on the testchain.
btcli subnet create --subtensor.network test 
# Enter the owner wallet name which gives permissions to the coldkey to later define running hyper parameters.
>> Enter wallet name (default): owner # Enter your owner wallet name
>> Enter password to unlock key: # Enter your wallet password.
>> Register subnet? [y/n]: <y/n> # Select yes (y)
>> Registering subnet...
✅ Registered subnetwork with netuid: 1 # Your subnet netuid will show here, save this for later.
```

## Creating a subnet on mainchain

You do not need to run a local blockchain node for creating a subnet on the mainchain. Instead, your subnet will connect to the Bittensor mainchain. Follow the below steps.

:::caution Alert: Minimum required TAO 
Creating a subnet on mainnet is competitive and the cost is determined by the rate at which new networks are being registered onto the chain. By default you must have at least 100 TAO in your owner wallet to create a subnet on the mainchain. However, the exact amount will fluctuate based on demand.
:::

### Step 1. Create wallet

If you have not already done so, create Bittensor wallet(s) using the steps described in the [Create Wallet](../getting-started/wallets.md) guide.

### Step 2. Get the current price 

The below code shows how to get the current price of creating a subnet on the mainchain (when the `--subtensor.network` option is not used then the `btcli` will default to the `mainchain`).

```bash
btcli subnet lock_cost
>> Subnet lock cost: τ100.000000000
```

### Step 3. Create the subnet 

:::tip Your TAO is returned when subnet is deregistered
Subnet creation (also called subnet registration) on the mainchain costs real TAO. You will get this TAO back when the subnet is deregistered.
:::

Use the below command to create a new subnet on the mainchain. 

```bash
# Run the below command to create a subnet on the mainchain (default is mainchain)
btcli subnet create
>> Enter wallet name (default): owner # Enter your owner wallet name
>> Enter password to unlock key: # Enter your wallet password.
>> Register subnet? [y/n]: <y/n> # Select yes (y)
>> Registering subnet...
✅ Registered subnetwork with netuid: 1 # Your subnet netuid will show here, save this for later.
```

---

## Immunity period for a subnet

The notion of [immunity_period](./subnet-hyperparameters.md#immunity_period) applies to a subnet also. It works like this:

- Subnets are competitive, even though new and additional subnets are created routinely in the Bittensor network. As a result, subnet performance is continously monitored, poor-performing subnets are deregistered and the registration cost will be returned to the deregistered subnet owner. 

- A subnet's performance is measured using the emissions earned by the subnet: The lower the emission earned by the subnet, the poorer is the subnet's performance. See [Emissions](../emissions.md).

- Furthermore, any subnet has an immunity period of `7 * 7200` blocks, which is 7 days. See the line of code that defines [SubtensorInitialNetworkImmunity](https://github.com/opentensor/subtensor/blob/52882caa011c5244ad75f1d9d4e182a1a17958a2/runtime/src/lib.rs#L660). This initial network immunity period starts when the subnet is created and its `netuid` is issued to the subnet owner. During this immunity period the subnet is not under any risk of being deregistered. 

- However, at the end of this immunity period, if the subnet's emissions are the lowest among all the subnets, then this subnet will be deregistered when a new subnet registration request arrives. If there are several subnets with the lowest emission then the oldest subnet among the lowest will be deregistered first, and then the second oldest, and so on. 

:::tip A newly created subnet starts with zero emission
:::

## Subnet deregistration

:::danger poor-performing subnets risk deregistration
Make sure that your subnet's performance is high, or else the subnet will risk being deregistered. Also see the above section on [Immunity period for a subnet](#immunity-period-for-a-subnet).
:::

When a subnet is deregistered, all its UIDs are also deregistered along with it. As a result, the subnet's subnet miners and subnet validators are also deregistered. The new subnet at this `netuid` starts afresh and any subnet miners and subnet validators for this new subnet must register using the normal registration step, described in [Register](../subnets/register-validate-mine.md#register). 