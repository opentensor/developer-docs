---
title: "Dynamic Tao Transition Guide"
---

Dynamic TAO is coming to Bittensor! See [Conceptual guide to Dynamic TAO](./dtao-guide.md).

You can experiment with the Dynamic TAO testnet (`rao`) today to learn about the new tokenomic model and prepare for the transition. This is a testnet originally cloned from mainnet, for purposes of testing the migration. Testnet currency has no value. Contact OTF on Discord for TAO fauceting on `rao` testnet.

On this page:
- [What to expect with Dynamic TAO](#what-to-expect-with-dynamic-tao)
- [Use the Dynamic TAO BTCLI ](#use-the-dynamic-tao-btcli)
- [Use the Dynamic TAO Bittensor SDK](#use-the-dynamic-tao-bittensor-sdk)
- [Target the Dynamic Tao testnet `rao`](#target-the-dynamic-tao-testnet-rao)

## What to expect with Dynamic TAO

Dynamic TAO testnet is designed to prepare you for a seamless transition to Dynamic TAO. Subnets are cloned from mainnet (`finney`), and the ledger of hotkey balances remains. Miners and validators will remain registered; their registration stake will be transferred to a balance in the new "root subnet" or "subnet zero". See [Conceptual guide to Dynamic TAO: Subnet zero](./dtao-guide.md#subnet-zero).

:::tip
Testnet tokens have any value and dont worry about the prices on testnet!

Please help us evolve this technology and please inform us of any bugs on Discord!
:::
### Stability
Most operations will remain unchanged, including the main workflows for validators and miners.

### Subnet tokens/liquidity pools

The most visible difference is the addition of one new currency per subnet in the bittensor network.

Run `btcli subnet list` to view information about the subnets and their currency reserves:

For example: 
```txt
                                                                Subnets
                                                               Network: rao


        ┃               ┃ Price       ┃ Market Cap  ┃              ┃                         ┃               ┃              ┃
 Netuid ┃ Name          ┃ (τ_in/α_in) ┃ (α * Price) ┃ Emission (τ) ┃ P (τ_in, α_in)          ┃ Stake (α_out) ┃ Supply (α)   ┃ Tempo (k/n)
━━━━━━━━╇━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━╇━━━━━━━━━━━━━╇━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━╇━━━━━━━━━━━━━
   0    │ τ root        │ 1.00 τ/Τ    │ τ 5.93m     │ τ 0.0000     │ -, -                    │ Τ 5.93m       │ 5.93m Τ /21M │ -/-
   3    │ γ templar     │ 0.02 τ/γ    │ τ 57.32     │ τ 0.0197     │ τ 31.44, 1.43k γ        │ 1.18k γ       │ 2.61k γ /21M │ 67/99
   9    │ ι pretrain    │ 0.02 τ/ι    │ τ 55.38     │ τ 0.0194     │ τ 30.91, 1.46k ι        │ 1.16k ι       │ 2.61k ι /21M │ 73/99
   1    │ α apex        │ 0.02 τ/α    │ τ 54.45     │ τ 0.0192     │ τ 30.65, 1.47k α        │ 1.14k α       │ 2.61k α /21M │ 65/99
   2    │ β omron       │ 0.02 τ/β    │ τ 54.45     │ τ 0.0192     │ τ 30.65, 1.47k β        │ 1.14k β       │ 2.61k β /21M │ 66/99
   4    │ δ targon      │ 0.02 τ/δ    │ τ 54.45     │ τ 0.0192     │ τ 30.65, 1.47k δ        │ 1.14k δ       │ 2.61k δ /21M │ 68/99
   ...
```

### Gradual phase in 


The rollout of Dynamic TAO is calculated to have a gradual impact. When Dynamic TAO is first released to mainnet, the weight of all validators (in terms of stake) will remain unchanged, because a biasing variable known as *global split*, which controls the relative weight of TAO and alpha currencies, will heavily favor TAO&mdash;which currently has 100% weight since alpha currencies don't exist.


## Use the Dynamic TAO BTCLI 

To use the Dynamic-TAO-enabled version of BTCLI, either:

- Download the specified release candidate from: https://pypi.org/project/bittensor/

- Build from source:

	1. Download the btcli code repository.
	1. Check out branch `rao`
	1. Run `pip install .` 

## Use the Dynamic Tao Bittensor SDK

...

## Target the Dynamic Tao testnet `rao`

Access the Dynamic TAO-enabled Bittensor test network at: `wss://rao.chain.opentensor.ai:443/`
