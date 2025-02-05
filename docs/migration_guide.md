---
title: "Bittensor 9.0 Migration Guide"
---
# Bittensor 9.0 Migration Guide

This page notes breaking changes for the Bittensor Python SDK `v9.0`. This version supports Dynamic TAO, a major evolution of the Bittensor network's tokenomic architecture.

See [Dynamic TAO: What to expect](../dynamic-tao).

**Contents:**
- [`Subtensor`: removed functions](#subtensor-removed-functions)
- [`Subtensor`: type changes](#subtensor-type-changes)
- [`AsyncSubtensor` parity with `Subtensor`](#asyncsubtensor)
- [`py-substrate-interface` replaced with `async-substrate-interface`](#py-substrate-interface-replaced-with-async-substrate-interface)

## Subtensor: removed functions

### `get_account_next_index`

This was only used for getting nonce, which can be achieved with `subtensor.substrate.get_account_next_index(hotkey.ss58_address)`.

### `get_prometheus_info`

We no longer use prometheus info.

### `get_total_stake_for_coldkey`

Not compatible with Dynamic TAO.

Replaced with [`get_stake`](./dynamic-tao/sdk-cheat-sheet#get_stake), which returns a staked balance for a coldkey, hotkey pair on a specific subnet.

### `get_total_stake_for_coldkeys`

Not compatible with Dynamic TAO.

Replaced with [`get_stake`](./dynamic-tao/sdk-cheat-sheet#get_stake), which returns a staked balance for a coldkey, hotkey pair on a specific subnet.

### `get_total_stake_for_hotkey`

Not compatible with Dynamic TAO.

Replaced with [`get_stake`](./dynamic-tao/sdk-cheat-sheet#get_stake), which returns a staked balance for a coldkey, hotkey pair on a specific subnet.

### `get_total_stake_for_hotkeys`

Not compatible with Dynamic TAO.

Replaced with [`get_stake`](./dynamic-tao/sdk-cheat-sheet#get_stake), which returns a staked balance for a coldkey, hotkey pair on a specific subnet.

## Subtensor: type changes

### `__init__`
No longer takes `connection_timeout` or `websocket` args. This is due to `py-substrate-interface` being re-written as `async-substrate-interface`.

### `amount`

All Subtensor methods that accept an `amount` arg now accept it only as a `Balance` object, rather than the previous `Union[Balance, int, float]`.

New helper functions, `tao` and `rao` in `bittensor.utils.balance`, return a `balance` object from the given Tao or Rao amount.

These methods include the following, and their associated extrinsics:
 - `transfer`
 - `unstake`
 - `add_stake`
 - `move_stake`
 - `swap_stake`
 - `transfer_stake`
 - get_transfer_fee


For example, where `transfer` previously accepted float for the amount, it now takes a `Balance` object, which can be created on the fly:

**Previously:**
```python
from bittensor.core.subtensor import Subtensor

subtensor = Subtensor()
subtensor.transfer(wallet, destination, 1.0)
```

**Now written as:**

```python
from bittensor.core.subtensor import Subtensor
from bittensor.utils.balance import tao, rao

subtensor = Subtensor()
subtensor.transfer(wallet, destination, tao(1.0))
# or
subtensor.transfer(wallet, destination, rao(1000000000))
```

### consolidation of arg label: `block`
There were some cases where the block arg was called `block_number` or `block_id`. This is standardised, and now all block args are called `block`.

### `get_block_hash`

No longer requires `block` arg, will fetch the latest block if not specified.

### `get_stake_for_coldkey_and_hotkey`

Arg order has changed. It now takes `(coldkey, hotkey)` to align with the method name.

In addition, to accomodate changes to staking in dynamic TAO, the function now also accepts an optional list of `netuids` to check for stake, and returns a `dict[int, StakeInfo]`, where `int` is the netuid. If `netuids` is left as `None`, all netuids are fetched.

### `get_subnet_reveal_period_epochs`

Type hint is updated to reflect it always returns an `int`, rather than an `Optional[int]`.

### `query_runtime_api` 

Now accepts params as `Any`, returns `Any`. This is due to an update in `bt-decode` and `async-substrate-interface` that allows for arbitrary decoding of runtime calls.

### `get_subnet_burn_cost`

this method now returns an `Optional[Balance]` object rather than `Optional[int]` (previously it gave rao `int`)

## `AsyncSubtensor`

`AsyncSubtensor` and `Subtensor` now have all and only the same methods.

Check out the wiki entry on [Concurrency in Bittensor](https://github.com/opentensor/bittensor/wiki/Concurrency-in-Bittensor) to learn more.

## `py-substrate-interface` replaced with `async-substrate-interface`

`py-substrate-interface` has been completely removed as a requirement, and has been rewritten as `async-substrate-interface`.

While the main goal of this project was initially just providing an AsyncIO-compatible version of `py-substrate-interface` for our use in `btcli` and `AsyncSubtensor`, we noticed a lot of room for improvement, so we wrote not only the async part, but also a synchronous part.  We aimed to be as API-compatible as possible, but there are a few differences (mainly in runtime calls).

`async-substrate-interface` is its own standalone package, as is a requirement for `bittensor` and `btcli`, replacing `py-substrate-interface`.

While we do practically all the decoding now through `bt-decode`, we still use `py-scale-codec` for a few `SCALE` encodings. This package will also eventually be replaced by an updated version of `bt-decode`.

Check out the wiki entry on [Concurrency in Bittensor](https://github.com/opentensor/bittensor/wiki/Concurrency-in-Bittensor) to learn more.
