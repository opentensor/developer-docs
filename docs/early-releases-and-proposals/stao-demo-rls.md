---
title: "STAO"
---

# STAO

This document describes the demonstration version of a new Bittensor feature called subnet-specific TAO, or STAO. 

## Description

With STAO you can stake your TAO into a subnet of your choice. Prior to STAO it was only possible to stake to specific validator(s)&mdash;selecting your preferred subnet to stake into **was not possible**. 

:::danger strictly for demonstration only
The STAO feature is currently strictly for demonstration only. Do not use this in any of your production environments. This documentation is intended to be used only for testing the demo STAO feature by the Bittensor community. **Before you proceed**, read this Medium paper: [DTAO: Commodity Analysis](https://medium.com/@unconst/dtao-security-analysis-611bab34baef).
:::

## STAO benefits

The STAO feature allows TAO holders to get more bandwidth into any individual Bittensor subnets by staking specifically into these subnets. The STAO feature introduces the following enhancements into the Bittensor ecosystem:

- **More democratized decision-making**: For TAO holders, the STAO feature provides more democratized decision-making ability to decide on which commmodity systems (i.e., subnets) can receive more emission.
- **Flexible access control**: The STAO feature provides the TAO holders an ability to increase or decrease the access control they have for individual digital commodities. By staking into a subnet, their control over the subnet's digital commodity is increased.
- **Validator selection**: With STAO feature, a TAO holder has the ability to directly select specific validator(s) to delegate to, for any subnet. This could be done, for example, to give these specific delegates additional access to resources in the subnet, so they can monetize these resources.

## Subnet-specific staking with STAO

This section is a step-by-step guide for how to test this demo version of STAO feature. 

### Setup 

For this demo test, we will use the below setup:

- A dev chain: `wss://dev.chain.opentensor.ai:443`.
- Subnet 1 with `netuid` of `1`.

### Summary of steps

1. Fund a wallet with test tokens from the dev chain faucet.
2. Register the wallet with Subnet 1 with `netuid` of `1` in the dev chain.
3. Run the subnet-specific staking commands using `btcli` in the dev chain.

:::danger strictly for demonstration only
The STAO feature is currently strictly for demonstration only. Do not use this in any of your production environments. This documentation is intended to be used only for testing the demo STAO feature by the Bittensor community. **Before you proceed**, read this Medium paper: [DTAO: Commodity Analysis](https://medium.com/@unconst/dtao-security-analysis-611bab34baef).
:::

Follow the below steps:

## Initial setup

### Step 1: Install Bittensor

1. Clone the Bittensor repo:

    ```bash
    git clone https://github.com/opentensor/bittensor.git
    ```
3. Switch to `stao` branch:

    ```bash
    git checkout stao
    ```

4. Install with `python3`

    ```bash
    python3 -m pip install -e bittensor/
    ```

### Step 2: Using Wallet

You can use your existing Bittensor wallet for testing this demo STAO feature.

### Step 3: Obtain test tokens

Run the below command to fund your wallet with test tokens from the faucet. 

```bash title="NOTE: Replace YOUR-WALLET with your wallet name"
btcli wallet faucet --wallet.name YOUR-WALLET --subtensor.chain_endpoint wss://dev.chain.opentensor.ai:443
```

### Step 4: Register your keys

Register your wallet with `netuid 1`. Subnet 1 is used here for illustration. You can use any subnet by using its `netuid` in the below command:

```bash title="NOTE: Use the wallet you funded above"
btcli subnet register --netuid 1 --wallet.name YOUR-WALLET --wallet.hotkey 5Exxxxx --subtensor.network wss://dev.chain.opentensor.ai:443
```

## STAO commands 

### Stake to a subnet

```bash
btcli substake add --hotkey <Hotkey-you-registered-above> --subtensor.network wss://dev.chain.opentensor.ai:443 --netuid 1 --wallet.name YOUR-WALLET
```

<!--
## Step 5: Connect to the stao subtensor chain

The STAO feature is available in a separate testchain called `stao`. See the below examples:
- In the supported `btcli` command options, use: `--subtensor.network stao`. 
- In Python API, use:
  ```python
  import bittensor as bt
  sub = bt.subtensor(network = 'stao')
  ```
-->
