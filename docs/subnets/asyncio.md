---
title: "AsyncIO"
---

# Async IO

Below is an example of how you can use the `AsyncSubtensor` module to retrieve  balances from multiple coldkey SS58 addresses in various ways:


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
