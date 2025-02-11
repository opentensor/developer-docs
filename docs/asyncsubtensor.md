---
title: "Concurrency with AyncIO and AsyncSubtensor"
---

Bittensor 9.0 introduces upgraded asynchronous functionality, and complete async coverage for all functions, leveeraging the power of Python's [`asyncio`](https://docs.python.org/3/library/asyncio.html) library.

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

Using `asyncio`, the code below accomplishes concurrent requests with a single websocket connection:

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

