---
title: "STAO"
---

# STAO

This document describes the early release version of a new Bittensor feature called subnet-specific TAO or STAO. 

:::danger strictly early release only
The current STAO feature is strictly early release only. Do not use this in  any of your production environments. This documentation is intended to be used only for testing the STAO feature by the Bittensor community. **Before you proceed**, read this Medium paper: [DTAO: Commodity Analysis](https://medium.com/@unconst/dtao-security-analysis-611bab34baef).
:::

With STAO you can stake your TAO into a subnet of your choice. Prior to STAO this was not possible. 

+++++**ELABORATE**+++++


## Subnet-specific staking with STAO

Follow the below steps to stake your TAO into a subnet of your choice. 

## Step 1: Install Bittensor

Make sure you have installed Bittensor. See [Install Bittensor](../getting-started/installation.md).

You can use your existing Bittensor wallet for STAO.

## Step 2: Connect to the stao subtensor chain

The STAO feature is available in a separate testchain called `stao`. See the below examples:
- In the supported `btcli` command options, use: `--subtensor.network stao`. 
- In Python API, use:
  ```python
  import bittensor as bt
  sub = bt.subtensor(network = 'stao')
  ```

## Supported STAO operations

- `btcli stake add`?
- `btcli stake remove`?
- More?

Explain and elaborate. 