---
title: "Create a Subnet"
---

# Create a Subnet

Before you create your first subnet, we strongly recommend that you follow the below order:
1. First create a subnet on your local, and develop and test your incentive mechanism on the local subnet. 
2. After you are satisfied with it, next create a subnet on the Bittensor testchain, and test and debug your incentive mechanism on this testchain subnet. 
3. Finally, only after you completed the above steps, create a subnet on the Bittensor mainchain. 

## Prerequisites

To create a subnet, whether locally or on testchain or mainchain, make sure that:
- You [installed Bittensor](../getting-started/installation.md). 
- You have already [created a wallet or know how to create one](../getting-started/wallets.md#creating-a-local-wallet). 

:::tip Registering vs creating vs purchasing a slot 
Registering a subnet will create the subnet. This step is also referred as **purchasing a slot**. 
:::

## Creating a local subnet 

### Step 1. Mint tokens from faucet
You will need tokens to register a subnet on your local. Run the following command to mint faucet tokens (fake TAO).
```bash
# Mint tokens for the subnet owner
btcli wallet faucet --wallet.name <owner-wallet-name> --subtensor.chain_endpoint ws://127.0.0.1:9946 
>> Balance: τ0.000000000 ➡ τ100.000000000
```

### Step 2. Create a local subnet
Run the below command to create a new subnet on your local chain. The cost will be exactly τ100.000000000 for the first subnet you create.
```bash
btcli subnet create --wallet.name owner --subtensor.chain_endpoint ws://127.0.0.1:9946 
>> Your balance is: τ200.000000000
>> Do you want to register a subnet for τ100.000000000? [y/n]: 
>> Enter password to unlock key: [YOUR_PASSWORD]
>> ✅ Registered subnetwork with netuid: 1
```

The local chain will now have a default `netuid` of 1. A second registration will create `netuid` 2 and so on until you reach the subnet limit of 8. If you create the 9th subnet, then the subnet with the least staked TAO will be replaced with the newly create subnet, thereby maintaining total subnet count to 8.

## Creating a subnet on testchain

Creating a subnet on the testchain is competitive. Though you will only use the faucet TAO tokens for testchain, the cost to create a subnet is determined by the rate at which new subnets are being registered onto the testchain. 

By default you must have at least 100 testnet TAO in your owner wallet to create a subnet. However the exact amount will fluctuate based on demand. Follow the below  steps. 

### Step 1. Get the current price 

```bash
btcli subnet lock_cost --subtensor.network test
>> Subnet lock cost: τ100.000000000
```

### Step 2. Mint tokens from faucet
   
If you do not have enough faucet tokens to create a testchain subnet, you can create additional testnet faucet tokens using the below command.

```bash
btcli wallet faucet --wallet.name owner --subtensor.network test
>> Balance: τ0.000000000 ➡ τ100.000000000
>> Balance: τ100.000000000 ➡ τ200.000000000
...
```

### Step 3. Purchasing a slot

Register (i.e., create) your new subnet on the testchain using the test TAO you minted from the previous step.  This will create a new subnet on the testchain and give you the owner permissions to it. 

:::tip Your TAO is recycled
Slots cost TAO, and you will not get this TAO back. Instead, this TAO is recycled back into your incentive mechanism, to be later mined.
:::

```bash
# Run the register subnetwork command on the testchain.
btcli subnet create --subtensor.network test 
# Enter the owner wallet name which gives permissions to the coldkey to later define running hyper parameters.
>> Enter wallet name (default): owner # Enter your owner wallet name
>> Enter password to unlock key: # Enter your wallet password.
>> Register subnet? [y/n]: <y/n> # Select yes (y)
>> Registering subnet...
✅ Registered subnetwork with netuid: 1 # Your subnet netuid will show here, save this for later.
```

## Creating a subnet on mainchain

:::tip Alert: Minimum required TAO 
Creating a subnet on mainnet is competitive and the cost is determined by the rate at which new networks are being registered onto the chain. By default you must have at least 100 TAO in your owner wallet to create a subnetwork. However the exact amount will fluctuate based on demand.
:::

### Step 1. Get the current price 

The code below shows how to get the current price of creating a subnetwork.

```bash
btcli subnet lock_cost
>> Subnet lock cost: τ100.000000000
```

### Step 2. Create a subnet 

Use the below command to register a new subnet on the mainchain. 

```bash
# Run the below command to create a subnet on the mainchain (default is mainchain)
btcli subnet create
>> Enter wallet name (default): owner # Enter your owner wallet name
>> Enter password to unlock key: # Enter your wallet password.
>> Register subnet? [y/n]: <y/n> # Select yes (y)
>> Registering subnet...
✅ Registered subnetwork with netuid: 1 # Your subnet netuid will show here, save this for later.
```
