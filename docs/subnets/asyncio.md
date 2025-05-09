---
title: "Working with Concurrency"
---

This page provides some tips for working with concurrent async functions in Bittensor.

Calls to the blockchain can be slow, and routines that make many calls in series become very slow. For example, suppose we want to check a list of UIDS for subnets and see if they exist. In series, we could execute the following, but it will take longer in proportion to the list of netuids, since it makes a separate call for each.

```python
from bittensor.core.subtensor import Subtensor

subtensor = Subtensor("test")
for netuid in range(1, 8):
    print("subnet " + str(netuid) + " exists: " + str(subtensor.subnet_exists(netuid=netuid)))
```

To avoid this, we could create a separate thread with a new `Subtensor` object on each thread, as below. This is faster, but can cause problems by hogging as many web sockets as UIDS in the list of subnets to check.


```python
import asyncio
from concurrent.futures import ThreadPoolExecutor
from bittensor.core.subtensor import Subtensor

def subnet_exists(netuid: int):
    subtensor = Subtensor("test")
    result = subtensor.subnet_exists(netuid=netuid)
    subtensor.close()
    print("subnet " + str(netuid) + " exists: " + str(result) )

with ThreadPoolExecutor() as executor:
    subnets = executor.map(subnet_exists, range(1, 8))

```

Using Python’s [asyncio](https://docs.python.org/3/library/asyncio.html) (Asynchronous Input/Output) module, the code below accomplishes concurrent requests with a single websocket connection:

```python
from bittensor.core.async_subtensor import AsyncSubtensor
import asyncio

async def main():
    async with AsyncSubtensor("test") as subtensor:
        block_hash = await subtensor.get_block_hash()
        subnets = await asyncio.gather(*[subtensor.subnet_exists(netuid, block_hash=block_hash) for netuid in range(1, 8)])
        for i, subnet in enumerate(subnets):
            print("subnet " + str(1+i) + " exists: " + str(subnet))             

asyncio.run(main())

```
## Coroutine vs function

The usage of `async def` creates an asyncio *coroutine* rather than a function.

Coroutines differ from functions in that coroutines are run in event loops using `await`.

:::caution Coroutines must always be awaited
Coroutines always need to be awaited, and generally speaking, “asyncio objects” are instantiated with `async with`. See [Python documentation on asyncio](https://docs.python.org/3/library/asyncio.html) for a comprehensive section with examples.
:::

## AsyncSubstrateInterface

[AsyncSubstrateInterface](pathname:///python-api/html/autoapi/bittensor/utils/async_substrate_interface/index.html) is an `asyncio` rewrite of Polkadot's original [`py-substrate-interface`](https://github.com/polkascan/py-substrate-interface) library, with a few added functionalities such as using the `bt_decode` for most SCALE decoding. 

While `AsyncSubstrateInterface` is about 90% API compatible with `py-substrate-interface`, it is its own library. Similar to how we initialize  `aiohttp.ClientSession` as shown in line 21 of the above example, the `AsyncSubstrateInterface` is initialized in the same way, as shown below:

```python
async with AsyncSubstrateInterface(chain_endpoint) as substrate:
    block_hash = await substrate.get_chain_head()
```

:::tip 
Generally speaking, you should use `AsyncSubstrateInterface` as a part of `AsyncSubtensor`, as the methods there are more specifically designed around using it within the Bittensor ecosystem.
:::

## AsyncSubtensor

`AsyncSubtensor` is the `asyncio` version of the Subtensor class. Under the hood, it utilises `AsyncSubstrateInterface`. 

### AsyncSubtensor vs Subtensor

Major differences between `AsyncSubtensor` and `Subtensor` are:

- `AsyncSubtensor` uses `block_hash` args rather than `block` args.
- `AsyncSubtensor` uses the `reuse_block` arg.
- The usage of `block_hash` is pretty obvious, i.e., you can specify the block hash (`str`) rather than the block number (`int`).
- The usage of `reuse_block` is a bit different. It allows you to reuse the same block hash that you have used for a previous call.
- Finally, the remaining major change is the use of args in the below `AsyncSubtensor` methods:
  - `get_balance`
  - `get_total_stake_for_coldkey`
  - `get_total_stake_for_hotkey`

    These methods now accept multiple SS58 addresses as addresses, and return a dictionary mapping the addresses to their balances.

### Initializing AsyncSubtensor

Like `AsyncSubstrateInterface`, the `AsyncSubtensor` is initialized the same way (with an async context manager):

```python
from bittensor.core.async_subtensor import AsyncSubtensor

async def main():
    async with AsyncSubtensor("test") as subtensor:
        neurons = await subtensor.neurons_lite(1)
```

And because `AsyncSubtensor` uses `AsyncSubstrateInterface` under the hood, we can use this to our advantage in `asyncio` gathering:

```python
from bittensor.core.async_subtensor import AsyncSubtensor

async def async_main():
    async with AsyncSubtensor("test") as subtensor:
        start = time.time()
        block_hash = await subtensor.get_block_hash()
        total_subnets = await subtensor.get_total_subnets(block_hash=block_hash)
        neurons = await asyncio.gather(*[subtensor.neurons(x, block_hash) for x in range(0, total_subnets+1)])
        print(time.time() - start)

asyncio.run(main())
```

The above code example pulls all the neurons from the testnet. Compare this to the below sync version of the same code:

```python
from bittensor.core.subtensor import Subtensor

def sync_main():
    subtensor = Subtensor("test")
    start = time.time()
    block = subtensor.block
    total_subnets = subtensor.get_total_subnets(block)
    neurons = [subtensor.neurons(x, block) for x in range(0, total_subnets+1)]
    print(time.time() - start)
```

### Performance

On a high-latency South African Internet connection:
- The `async` version runs in 13.02 seconds.
- The sync version runs in 1566.86 seconds.
Hence the `async` version runs a full 120X faster. Your results will vary depending on your connection latency.

:::caution Some overhead with async
Note that there is a bit of overhead with the `async` instantiation over the sync version. Therefore, if you are writing a script to maybe retrieve one item, it will likely be faster and less complex using the sync version. However, if you are building anything more complex than this, the `async` version will likely be faster, as shown in the above example.
:::

### Example

Below is an example of how you can use the `AsyncSubtensor` module to retrieve  balances from multiple coldkey SS58 addresses in various ways:

:::tip Python reference
Also see the Bittensor SDK reference for [AsyncSubtensor](pathname:///python-api/html/autoapi/bittensor/core/async_subtensor/index.html).
:::

```python
import asyncio

from bittensor.core.subtensor import Subtensor  # sync
from bittensor.core.async_subtensor import AsyncSubtensor  # async

from bittensor.utils.balance import Balance

COLDKEY_PUB = "5EhCvSxpFRgXRCaN5LH2wRCD5su1vKsnVfYfjzkqfmPoCy2G"
COLDKEY_PUBS = [
    COLDKEY_PUB,
    "5CZrQzo3W6LGEopMw2zVMugPcwFBmQDYne3TJc9XzZbTX2WR",
    "5Dcmx3kNTKqExHoineVpBJ6HnD9JHApRs8y2GFBgPLCaYn8d",
    "5DZaBZKKGZBGaevi42bYUK44tEuS3SYJ7GU3rQKYr7kjfa8v"
]


async def main():  # define a coroutine with `async def`
    sync_sub = Subtensor("finney")  # same as always
    async with AsyncSubtensor("finney") as async_subtensor:  # very important to initialise this with `async with`
        sync_balance: Balance = sync_sub.get_balance(COLDKEY_PUB)
        # returns τ0.000000000

        async_balance: dict[str, Balance] = await async_subtensor.get_balance(COLDKEY_PUB)
        # returns {'5EhCvSxpFRgXRCaN5LH2wRCD5su1vKsnVfYfjzkqfmPoCy2G': τ0.000000000}
        # get_balance now takes multiple addresses, and returns them as a dict
        # of {ss58: Balance}
        # for example:
        async_balances: dict[str, Balance] = await async_subtensor.get_balance(*COLDKEY_PUBS)
        # returns: {
        #   '5EhCvSxpFRgXRCaN5LH2wRCD5su1vKsnVfYfjzkqfmPoCy2G': τ0.000000000,
        #   '5CZrQzo3W6LGEopMw2zVMugPcwFBmQDYne3TJc9XzZbTX2WR': τ0.000000000,
        #   '5Dcmx3kNTKqExHoineVpBJ6HnD9JHApRs8y2GFBgPLCaYn8d': τ0.000000000,
        #   '5DZaBZKKGZBGaevi42bYUK44tEuS3SYJ7GU3rQKYr7kjfa8v': τ0.000000000
        #   }
        # This works the same with .get_total_stake_for_coldkey, .get_total_stake_for_hotkey
        # to do multiples with sync subtensor, we would do:
        sync_balances: dict[str, Balance] = {}
        for coldkey in COLDKEY_PUBS:
            sync_balances[coldkey] = sync_sub.get_balance(coldkey)

        # let's say we want to make multiple calls at the same time. We can do this with asyncio.gather
        async_delegated, async_balance = await asyncio.gather(
            async_subtensor.get_delegated(COLDKEY_PUB),
            async_subtensor.get_balance(COLDKEY_PUB)
        )
        # This will make concurrent calls to retrieve the delegates and balance of this coldkey
        # We can even chain these together quite dramatically, such as this example in btcli wallets:
        """
        balances, all_neurons, all_delegates = await asyncio.gather(
            subtensor.get_balance(
                *[w.coldkeypub.ss58_address for w in wallets_with_ckp_file],
                block_hash=block_hash,
            ),
            asyncio.gather(
                *[
                    subtensor.neurons_lite(netuid=netuid, block_hash=block_hash)
                    for netuid in all_netuids
                ]
            ),
            asyncio.gather(
                *[
                    subtensor.get_delegated(w.coldkeypub.ss58_address)
                    for w in wallets_with_ckp_file
                ]
            ),
        )
        """
        # There are also certain changes for the decoding of SCALE objects from the chain.
        # As a rule of thumb, anything using `.value` from sync Subtensor just returns the value itself
        # See the example of `Subtensor._get_hyperparameter` vs `AsyncSubtensor.get_hyperparameter`:
        # Subtensor
        """
        result = self.query_subtensor(param_name, block, [netuid])
        if result is None or not hasattr(result, "value"):
            return None

        return result.value
        """
        # AsyncSubtensor
        """
        result = await self.substrate.query(
            module="SubtensorModule",
            storage_function=param_name,
            params=[netuid],
            block_hash=block_hash,
            reuse_block_hash=reuse_block,
        )

        if result is None:
            return None

        return result
        """


if __name__ == "__main__":
    asyncio.run(main())  # coroutines need to have something to run them, usually `asyncio.run`
```
