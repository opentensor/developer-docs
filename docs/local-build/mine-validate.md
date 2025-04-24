---
title: "Mine and Validate (Locally)"
---

# Mine and Validate (Locally)

This page continues the tutorial series on local Bittensor development. In this installment, we will deploy minimal, local servers for a miner and validators, serving requests, setting weights, and earning emissions.


## Prerequisites

- [Deploy a Subtensor chain locally](./deploy)
- [Provision wallets for the sn-creator, miner, and validator users for this tutorial.](./provision-wallets)
- [Create a Subnet on your local chain](./create-subnet)

## Register the Validator

Register the subnet validator with the following command:

```bash
btcli subnet register \
--wallet.name validator \
--wallet.hotkey default \
--subtensor.chain_endpoint ws://127.0.0.1:9945
```
:::info troubleshoot
If you have not added TAO to your validator wallet, you'll see an error like the following:

```console
Insufficient balance τ 0.0000 to register neuron. Current recycle is τ 1.0000 TAO
```
:::



