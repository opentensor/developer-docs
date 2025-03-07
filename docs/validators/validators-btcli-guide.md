---
title: "Validator's Guide to `BTCLI`"
---

# Validator's Guide to `BTCLI`


Validators evaluate miner performance, and post their evaluations to the blockchain.

This page discusses btcli stuff specifically for Validators. For general coverage of BTCLI and permissions stuff, see: [Bittensor CLI: Permissions Guide](../btcli-permissions)

See also:
- [Coldkey and Hotkey Workstation Security](../getting-started/coldkey-hotkey-security).

## Requirements

- **Coldkey** is needed for any stake management or large fund transfers.

- **Hotkey**: 

	Used to set weights

- **Weight-setting requirements**:

To have a **validator permit** in a given subnet, allowing you to submit miner evaluations using the [`set_weights`](pathname:///python-api/html/autoapi/bittensor/core/extrinsics/set_weights/index.html) function, you must meet the following requirements:

	- Your hotkey must be registered, granting you a UID on the subnet
	- You must have a stake-weight on the subnet of least 1000, including stake delegated to your hotkey from other wallets' coldkeys. A validator's stake weight in a subnet equals their alpha stake plus their TAO stake times the `tao_weight` parameter (current value: 0.18):

		$$

		\text{Validator stake weight} = \alpha +  0.18 \times \tau 

		$$
	- You must be one of the top 64 validators in the subnet, ranked by stake.

:::tip 
It is highly recommended to use a unique hotkey per subnet and rotate these when new subnets register. The reason being if a validator's single hotkey does get compromised, damage can be done by the attacker setting incorrect weights for miners or introducing a deadlock condition, effectively preventing normal operation.
:::

## `btcli` commands for validators
### Hotkey Management

Coldkey workstation.

`btcli wallet new-hotkey` , `btcli wallet regen-hotkey`,  : Create and register a hotkey on a secure coldkey workstation  then transfer the hotkey file or mnemonic to the validator workstation. 

`btcli subnets register`, `btcli subnets pow-register`: register a UID

### Weights
These require a hotkey with an active validator permit on the subnet. Run in a live environment (the validator node), which is a hotkey workstation.

- `btcli weights reveal`, `btcli weights commit`  
- `btcli wt reveal`, `btcli wt commit`  
- `btcli weight reveal`, `btcli weight commit`  

