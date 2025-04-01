---
title: "Managing stake with Bittensor Python SDK"
---

# Managing Stake with Bittensor Python SDK

This pages demonstrates usage of `btcli`, the Bittensor CLI, for managing stake.

TAO holders can **stake** any amount of the liquidity they hold to a validator. Also known as **delegation**, staking supports validators, because their total stake in the subnet, including stake delegated to them by others, determines their consensus power and their share of emissions. After the validator/delegate extracts their **take** the remaining emissions are credited back to the stakers/delegators in proportion to their stake with that validator.

See also:

- [Staking/delegation overview](./delegation)
- [Understanding pricing and anticipating slippage](../dynamic-tao/staking-unstaking-dtao)


:::tip
Minimum transaction amount for stak/unstake/move/transfer: 500,000 RAO or 0.0005 TAO.
:::

## Check your TAO balance

To stake, you'll first need some TAO. Inquire in Discord to obtain TAO on Bittensor test network.

:::danger
The funds in a crypto wallet are only as secure as your private key and/or seed phrase, and the devices that have access to these.

Test network tokens have no real value. Before managing liquidity on Bittensor mainnet, carefully consider all aspects of secrets management and endpoint security!
:::

```python
import bittensor as bt
sub = bt.Subtensor(network="test")
wallet = bt.wallet(
    name="PracticeKey!",
    hotkey="stakinkey1",
)
wallet.unlock_coldkey()
balance = sub.get_balance(wallet.coldkey.ss58_address)
print(balance)
```

## View exchange rates

The following script displays exchange rates for a subnet alpha token, with and without slippage.

```python
import bittensor as bt

sub = bt.Subtensor(network="test")
subnet = sub.subnet(netuid=1)

print("alpha_to_tao_with_slippage", subnet.alpha_to_tao_with_slippage(100))
print("alpha_to_tao_with_slippage percentage", subnet.alpha_to_tao_with_slippage(100, percentage=True))

print("tao_to_alpha_with_slippage", subnet.tao_to_alpha_with_slippage(100))
print("tao_to_alpha_with_slippage percentage", subnet.tao_to_alpha_with_slippage(100, percentage=True))

print("tao_to_alpha", subnet.tao_to_alpha(100))
print("alpha_to_tao", subnet.alpha_to_tao(100))
```

## Register on a subnet

You can register your hotkey on a subnet using the `burned_register` method. This is necessary for staking, mining or validating.

```python
import bittensor as bt
logging = bt.logging
logging.set_info()
sub = bt.Subtensor(network="test")
wallet = bt.wallet(
    name="ExampleWalletName",
    hotkey="ExampleHotkey",
)
wallet.unlock_coldkey()
reg = sub.burned_register(wallet=wallet, netuid=3)
```

## View your registered subnets

```python
import bittensor as bt
sub = bt.Subtensor(network="test")
wallet = bt.wallet(
    name="ExampleWalletName",
    hotkey="ExampleHotkey",
)
wallet.unlock_coldkey()
netuids = sub.get_netuids_for_hotkey(wallet.hotkey.ss58_address)
print(netuids)
```

## Stake

The following script incrementally stakes 1 TAO in each of the top three validators of the top three subnets:

```python
import bittensor as bt
import time
from bittensor import tao

# Initialize the wallet
wallet = bt.wallet(name='jpe442', hotkey='taostar')

# Initialize the subtensor connection
subtensor = bt.subtensor(network='test')  # Use 'main' for the main network

print("Fetching subnet information...")
all_subnets = subtensor.get_all_subnets_info()
print(f"Retrieved {len(all_subnets)} subnets")


# Initialize the subtensor connection
subtensor = bt.subtensor(network='finney')  # Use 'main' for the main network

# Fetch all subnets with detailed info
print("Fetching detailed subnet information...")
all_subnets = subtensor.get_all_subnets_info()

# List to store mining subnet details
mining_subnets = []

# Process each subnet
for subnet in all_subnets:
    if subnet.netuid == 0:
        continue  # Skip subnet 0 as it's non-mining

    print(f"\nFetching hyperparameters for subnet {subnet.netuid}...")

    # Retrieve hyperparameters for the subnet
    hyperparams = subtensor.get_subnet_hyperparameters(subnet.netuid)

    if hyperparams:
        print(f"✅ Retrieved hyperparameters for subnet {subnet.netuid}. Available parameters:")
        
        # Display all available hyperparameters dynamically
        for param, value in vars(hyperparams).items():
            print(f"  {param}: {value}")

        # Example: If 'incentive' is not available, we need to use an alternative metric
        potential_metric = getattr(hyperparams, 'difficulty', None)  # Adjust based on available params

        if potential_metric is not None:
            mining_subnets.append({'netuid': subnet.netuid, 'metric': potential_metric})
            print(f"✅ Using '{potential_metric}' as the relevant metric for subnet {subnet.netuid}.")
        else:
            print(f"❌ No valid metric found for subnet {subnet.netuid}. Skipping.")
    else:
        print(f"❌ Failed to retrieve hyperparameters for subnet {subnet.netuid}.")

# Step 2: Sort subnets by 'incentive' in descending order and pick top 3
top_subnets = sorted(mining_subnets, key=lambda x: x['metric'], reverse=True)[:3]
print(f"Top {len(top_subnets)} subnets selected.")



# Step 3: Retrieve metagraph and find the top 3 validators by stake and print

# Define staking amount in TAO (ensure it's above the minimum requirement)
amount_to_stake = 1  # Adjust this if needed

# Convert the amount to the Balance type
amount_to_stake = bt.Balance.from_tao(amount_to_stake)

# ✅ Declare dictionary before using it
top_validators_per_subnet = {}  # Stores top validators for each subnet

for subnet in top_subnets:
    netuid = subnet['netuid']
    print(f"\n🔍 Fetching metagraph for subnet {netuid}...")
    
    start_time = time.time()
    metagraph = subtensor.metagraph(netuid)
    print(f"✅ Retrieved metagraph for subnet {netuid} in {time.time() - start_time:.2f} seconds.")

    # Extract validators and their stake amounts
    uid_stake_pairs = [(uid, metagraph.S[uid]) for uid in range(len(metagraph.S))]
    
    # Sort validators by stake in descending order
    top_validators = sorted(uid_stake_pairs, key=lambda x: x[1], reverse=True)[:3]

    # ✅ Store the metagraph and top validators for Step 4
    top_validators_per_subnet[netuid] = {
        "metagraph": metagraph,
        "validators": top_validators
    }

    # ✅ Print the top 3 validators for this subnet
    print(f"\n🏆 Top 3 Validators for Subnet {netuid}:")
    for rank, (uid, stake) in enumerate(top_validators, start=1):
        print(f"  {rank}. Validator UID {uid} - Stake: {stake}")

# ✅ Step 4: Stake to each top 3 validators in each top 3 subnets
for netuid, data in top_validators_per_subnet.items():
    metagraph = data["metagraph"]
    top_validators = data["validators"]

    for uid, stake in top_validators:
        hotkey_ss58 = metagraph.hotkeys[uid]

        print(f"💰 Staking {amount_to_stake} TAO to {hotkey_ss58} on subnet {netuid}...")
        start_time = time.time()
        try:
            # ✅ Use the correct staking amount
            subtensor.add_stake(wallet=wallet, netuid=netuid, hotkey_ss58=hotkey_ss58, amount=amount_to_stake)
            print(f"✅ Successfully staked {amount_to_stake} TAO to {hotkey_ss58} on subnet {netuid} in {time.time() - start_time:.2f} seconds.")
        except Exception as e:
            print(f"❌ Failed to stake to {hotkey_ss58} on subnet {netuid}: {e}")
```
```console
Enter your password: 
Decrypting...
slippage for subnet 119 (‎0.052748841Ⲃ‎, ‎0.000000013Ⲃ‎)
netuid 119 price ‎0.189577575Ⲃ‎ stake ‎0.157267876Ⲃ‎
slippage for subnet 277 (‎0.024904301इ‎, ‎0.000000000इ‎)
netuid 277 price ‎0.401537040इ‎ stake ‎0.074669512इ‎
slippage for subnet 18 (‎11.324874218σ‎, ‎0.000410611σ‎)
netuid 18 price ‎0.000882980σ‎ stake ‎34.043919173σ‎
slippage for subnet 5 (‎13.957537560ε‎, ‎0.000384885ε‎)
netuid 5 price ‎0.000716439ε‎ stake ‎41.987408695ε‎
slippage for subnet 119 (‎0.052748882Ⲃ‎, ‎0.000000014

...

```

## Unstake

The below script will reverse the effects of the above, by incrementally unstaking alpha tokens from the list of subnets to yield TAO.

```python

import bittensor as bt
sub = bt.Subtensor(network="test")
wallet = bt.wallet(name="ExampleWalletName")
wallet.unlock_coldkey()

to_sell = [119, 277, 18, 5] # list of netuids to unstake from
increment = 0.01 # amount of alpha to unstake
total_sell = 0 # total amount of alpha unstaked
stake = {} # dictionary to store the stake for each netuid

while total_sell < 3:
    for netuid in to_sell:
        subnet = sub.subnet(netuid)
        print(f"slippage for subnet {netuid}", subnet.alpha_slippage(increment))

        sub.remove_stake( 
            wallet = wallet, 
            netuid = netuid, 
            hotkey = subnet.owner_hotkey, 
            amount = increment, 
        )
        current_stake = sub.get_stake(
            coldkey_ss58 = wallet.coldkeypub.ss58_address,
            hotkey_ss58 = subnet.owner_hotkey,
            netuid = netuid,
        )
        stake[netuid] = current_stake
        total_sell += increment
        print (f'netuid {netuid} price {subnet.price} stake {current_stake}')
    sub.wait_for_block()
```
```console
Enter your password:
Decrypting...

slippage for subnet 119
5.480567515602973
netuid 119 price τ0.027590441 stake Ⲃ2.899319570
slippage for subnet 277
22.534224516416796
netuid 277 price τ0.014730536 stake इ5.429337492
slippage for subnet 18
48.29992457746112
netuid 18 price τ0.001068362 stake σ65.558512653
slippage for subnet 5
36.680744412524845
netuid 5 price τ0.001785179 stake ε33.619312896

...

```


## Move stake

...

```python
import asyncio
from concurrent.futures import ThreadPoolExecutor
import bittensor as bt
from bittensor.core.subtensor import Subtensor
from bittensor.core.async_subtensor import AsyncSubtensor

async def main():
    async with AsyncSubtensor("test") as subtensor:
        wallet = bt.wallet(
            name="PracticeKey!",
            hotkey="stakinkey1",
        )
        wallet.unlock_coldkey()
        success = await subtensor.move_stake(wallet = wallet,
            origin_hotkey = "5DyHnV9Wz6cnefGfczeBkQCzHZ5fJcVgy7x1eKVh8otMEd31",
            origin_netuid = 5,
            destination_hotkey = "5HidY9Danh9NhNPHL2pfrf97Zboew3v7yz4abuibZszcKEMv",
            destination_netuid = 18,
            amount = bt.Balance.from_tao(1.0),
            wait_for_inclusion = True,
            wait_for_finalization = False,
        )
        if success:
            print("Stake was successfully moved!")
        else:
            print("Failed to move stake.")
# Because move_stake is asynchronous, we run it in an event loop:
asyncio.run(main())

```
