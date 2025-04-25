---
title: "Provision Wallets for Local Deploy"
---

This page continues the previous tutorial for local Bittensor development.

Now that your local Subtensor chain is deployed, you can provision wallets to serve the roles of subnet creator, miner and validator, to populate your local Bittensor ecosystem.

Every local blockchain is pre-provisioned with an "Alice" account, which is loaded with one million $\tau$.

## Access the Alice account

To access the handy pre-provisioned development "Alice" account on your local chain, use:
```shell
btcli wallet create --uri alice
```

Confirm Alice's massive $\tau$ bag.

```shell
 btcli w balance --wallet.name alice  --subtensor.chain_endpoint ws://127.0.0.1:9945
```

```console
                                                                       Wallet Coldkey Balance
                                                                          Network: custom

    Wallet Name     Coldkey Address                                      Free Balance   Staked Value   Staked (w/slippage)    Total Balance   Total (w/slippage)
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    alice           5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY   τ 999,999.8999       τ 0.0000              τ 0.0000   τ 999,999.8999       τ 999,999.8999



    Total Balance                                                      τ 999,999.8999       τ 0.0000              τ 0.0000   τ 999,999.8999       τ 999,999.8999
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## Provision wallets

You will need wallets for the different personas, i.e., subnet owner, subnet validator and subnet miner, in the subnet. 

- The owner wallet creates and controls the subnet. 
- The validator and miner will be registered to the subnet created by the owner. This ensures that the validator and miner can run the respective validator and miner scripts.

### Create a coldkey-only wallet for the subnet creator role (they do not need a hotkey):

```bash
btcli wallet new_coldkey \
--wallet.name sn-creator
```

### Set up the miner's wallet with a coldkey and hotkey:

```bash
btcli wallet new_coldkey \
--wallet.name miner
```

```bash
btcli wallet new_hotkey \
--wallet.name miner \
--wallet.hotkey default

```

### Set up the validator's wallet with a coldkey and hotkey:

```bash
btcli wallet new_coldkey \
--wallet.name validator
```
```bash
btcli wallet new_hotkey \
--wallet.name validator \
--wallet.hotkey default
```
