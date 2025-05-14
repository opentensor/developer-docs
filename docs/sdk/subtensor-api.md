---
title: Subtensor API
---

# Subtensor API


## Overview

The SubtensorApi is a unified interface for the Bittensor blockchain. It wraps both the synchronous and asynchronous Subtensor implementations, providing modular access to chain subsystems like wallets, delegates, neurons, and more.


### Modules

All methods are grouped into logical modules for better organization and readability. Some methods may belong to more than one group if they span multiple functional areas. This does not compromise the internal logic — rather, it enhances discoverability and cohesion. Method equivalence between `SubtensorApi` and the original `Subtensor` is automatically verified by test coverage on every pull request (PR).


<details>
  <summary>Subsystem modules</summary>

| Property | Description |
|----------|-------------|
| chain | Blockchain interaction methods |
| commitments | Commitment and reveal logic |
| delegates | Delegate management tools |
| extrinsics | Transaction construction and signing |
| metagraphs | Metagraph data and operations |
| neurons | Neuron-level APIs |
| queries | General query endpoints |
| staking | Staking operations |
| subnets | Subnet access and management |
| wallets | Wallet creation, import/export |
</details>

### Configuration

The behavior of the `SubtensorApi` object is configured with the following parameters.
<details>
  <summary>Parameters</summary>

| Parameter         | Type              | Description                                                                                              | Default Value                 |
|-------------------|-------------------|----------------------------------------------------------------------------------------------------------|-------------------------------|
| `network`         | `str` or `None`   | The network to connect to. If not specified, defaults to `"finney"`.                                        | `None` (interpreted as "finney")|
| `config`          | `Config` or `None`| Pre-built Bittensor configuration object.                                                                  | `None`                         |
| `async_subtensor` | `bool`            | Whether to use the asynchronous version of the API.                                                        | `False`                        |
| `legacy_methods`  | `bool`            | If `True`, all methods from the legacy `Subtensor` class are added to this class.                           | `False`                        |
| `fallback_chains` | `list[str]` or `None`| List of fallback chains to use if the primary network is unavailable.                                      | `None`                         |
| `retry_forever`   | `bool`            | If `True`, continuously retries on connection errors until successful.                                      | `False`                        |
| `log_verbose`     | `bool`            | Enables detailed logging output when set to `True`.                                                        | `False`                        |
| `mock`            | `bool`            | Enables mock mode for testing without connecting to the blockchain.                                         | `False`                        |
</details>


Reference docs: [SubtensorApi](pathname:///python-api/html/autoapi/bittensor/core/subtensor_api/index.html)

## Basic Usage

:::tip
Upgrade to the [latest Bittensor release](https://pypi.org/project/bittensor/).
```shell
pip install bittensor
```
:::

### Synchronous (Default)

```python
import bittensor as bt

sub = bt.SubtensorApi()

print(sub.block)  # Get current block number
print(sub.delegates.get_delegate_identities())
sub.chain.tx_rate_limit()
```

### Asynchronous

```python
import bittensor as bt
import asyncio

async def main():
    sub = bt.SubtensorApi(async_subtensor=True)
    async with sub:
        print(await sub.block)
        print(await sub.delegates.get_delegate_identities())
        await sub.chain.tx_rate_limit()

asyncio.run(main())
```
### Legacy Method Support

You can enable all legacy methods from the original `Subtensor` class directly on this interface:

```python
import bittensor as bt

sub = bt.SubtensorApi(legacy_methods=True)
print(sub.bonds(0))  # Classic method usage
```

## Advanced Usage
### Retry and Fallback RPC Nodes

Enable redundancy and resilience with fallback chains and retry logic:

```python
import bittensor as bt

sub = bt.SubtensorApi(
    "local",
    fallback_chains=[
        "wss://fallback1.taonetwork.com:9944",
        "wss://lite.sub.latent.to:443",
    ],
    retry_forever=True,
)
print(sub.block)
```

### Mock Mode for Testing

Use `mock=True` to simulate the interface without connecting to the blockchain:

```python
import bittensor as bt

sub = bt.SubtensorApi(mock=True)
print(sub)  # Output: "<Network: None, Chain: Mock, Sync version>"
```

### Custom Configuration

You can pass a pre-built `Config` object:

```python
import argparse
import bittensor as bt

parser = argparse.ArgumentParser('Miner')
bt.SubtensorApi.add_args(parser)
config = bt.config(parser)
sub = bt.SubtensorApi(config=config)

print(sub)
```

## Context Manager Usage

### Synchronous Context Manager

```python
import bittensor as bt

with bt.SubtensorApi() as sub:
    print(sub.block)
```

### Asynchronous Context Manager

```python
import bittensor as bt
import asyncio

async def main():
    async with bt.SubtensorApi(async_subtensor=True) as sub:
        print(await sub.block)

asyncio.run(main())
``` 