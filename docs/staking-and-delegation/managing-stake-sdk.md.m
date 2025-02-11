---
title: "Managing stake with Bittensor Python SDK"
---

# Managing Stake with the Asynchronous Python SDK


## Prerequisites & Imports


Wallet is used to store keys and sign transactions.
Balance helps parse and format TAO values.
get_async_subtensor is a helper method that quickly creates and initializes an AsyncSubtensor client.

```python
import asyncio

from bittensor_wallet import Wallet
from bittensor.utils.balance import Balance
from bittensor.core.subtensor import get_async_subtensor
```


## Create a wallet

```
wallet = Wallet(
    name='PracticeKey',
    path='~/.bittensor/wallets',  # or your chosen path
    hotkey='optional-hotkey-name' # or None to use default
)

# If you need to generate a new seed:
# wallet.create_new_coldkey()   
# wallet.create_new_hotkey()

print(f"Coldkey SS58: {wallet.coldkeypub.ss58_address}")
```


## Connecting to the test Network & Getting Your Balance

```python
async def check_balance_example():
    # Connect to the 'test' network. 
    # You can omit `network='test'` if your default config is already set to 'test'.
    subtensor = await get_async_subtensor(network='test')

    # Query current balance
    current_balance = await subtensor.get_balance(wallet.coldkeypub.ss58_address)
    print(f"Your balance: {current_balance} TAO")

asyncio.run(check_balance_example())

```

## Listing Subnets and their currency reserves

To see subnets and high-level data (like reserves and prices), you can query all_subnets or get_all_subnets_info.

```python
async def list_subnets_example():
    subtensor = await get_async_subtensor(network='test')

    subnets = await subtensor.get_all_subnets_info()
    for subnet in subnets:
        # Each `subnet` is a SubnetInfo object
        print(f"Netuid: {subnet.netuid}, Name: {subnet.name}, "
              f"TAO reserves: {subnet.rao_reserve}, Alpha supply: {subnet.alpha_supply}")

asyncio.run(list_subnets_example())

``` 