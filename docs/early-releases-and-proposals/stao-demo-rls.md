---
title: "STAO"
---

# STAO

This document describes the early release version of a new Bittensor feature called subnet-specific TAO, or STAO. 

## Description

With STAO you can stake your TAO into a subnet of your choice. Prior to STAO it was only possible to stake to specific validator(s)&mdash;selecting your preferred subnet to stake into **was not possible**. 

:::danger strictly early release only
The current STAO feature is strictly early release only. Do not use this in  any of your production environments. This documentation is intended to be used only for testing the STAO feature by the Bittensor community. **Before you proceed**, read this Medium paper: [DTAO: Commodity Analysis](https://medium.com/@unconst/dtao-security-analysis-611bab34baef).
:::

## STAO benefits

The STAO feature allows TAO holders to get more bandwidth into any individual Bittensor subnets by staking specifically into these subnets. The STAO feature introduces the following enhancements into the Bittensor ecosystem:

- **More democratized decision-making**: For TAO holders, the STAO feature provides more democratized decision-making ability to decide on which commmodity systems (i.e., subnets) can receive more emission.
- **Flexible access control**: The STAO feature provides the TAO holders an ability to increase or decrease the access control they have for individual digital commodities. By staking into a subnet, their control over the subnet's digital commodity is increased.
- **Validator selection**: With STAO feature, a TAO holder has the ability to directly select specific validator(s) to delegate to, for any subnet. This could be done, for example, to give these specific delegates additional access to resources in the subnet, so they can monetize these resources.

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