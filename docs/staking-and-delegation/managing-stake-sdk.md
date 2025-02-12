---
title: "Managing stake with Bittensor Python SDK"
---

# Managing stake with Bittensor Python SDK

## Check your TAO balance

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

## Managing stake


### Staking

The following script incrementally stakes 3 TAO into several subnets over many blocks:

```python

import bittensor as bt
sub = bt.Subtensor(network="test")
wallet = bt.wallet(name="ExampleWalletName")
wallet.unlock_coldkey()

to_buy = [119, 277, 18, 5] # list of netuids to stake into
increment = 0.01 # amount of TAO to stake
total_spend = 0 # total amount of TAO spent
stake = {} # dictionary to store the stake for each netuid

while total_spend < 3:
    for netuid in to_buy:
        subnet = sub.subnet(netuid)
        print(f"slippage for subnet {netuid}", subnet.slippage(increment))
        sub.add_stake( 
            wallet = wallet, 
            netuid = netuid, 
            hotkey = subnet.owner_hotkey, 
            tao_amount = increment, 
        )

        current_stake = sub.get_stake(
            coldkey_ss58 = wallet.coldkeypub.ss58_address,
            hotkey_ss58 = subnet.owner_hotkey,
            netuid = netuid,
        )
        stake[netuid] = current_stake
        total_spend += increment
        print (f'netuid {netuid} price {subnet.price} stake {current_stake}')
    sub.wait_for_block()
```
```console
Enter your password:
Decrypting...

slippage for subnet 119
5.484198655671355
netuid 119 price τ0.027592398 stake Ⲃ1.449590749
slippage for subnet 277
22.54931028877199
netuid 277 price τ0.014734147 stake इ2.714201361
slippage for subnet 18
48.319842544421064
netuid 18 price τ0.001067641 stake σ28.105321031
slippage for subnet 5
36.69607695087895
netuid 5 price τ0.001784484 stake ε11.208213619

...

```

### Unstaking

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


### Moving stake

...

```python
import asyncio
import bittensor as bt

async def main():
    # Connect to the test network
    sub = bt.AsyncSubtensor(network="test")

    # Unlock your coldkey for signing
    wallet = bt.wallet(
        name="ExampleWalletName",
        hotkey="ExistingHotkey",
    )
    wallet.unlock_coldkey()

    # Move 1 TAO worth of stake from one hotkey/subnet to another
    success = await sub.move_stake(
        wallet = wallet,
        origin_hotkey = "ExistingHotkey",
        origin_netuid = 1,   # Current subnet
        destination_hotkey = "NewHotkey",
        destination_netuid = 3,   # Destination subnet
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
