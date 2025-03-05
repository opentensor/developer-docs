---
title: "Validator's Guide to `BTCLI`"
---

# Validator's Guide to `BTCLI`

It is highly recommended to use a unique hotkey per subnet and rotate these when new subnets register. The reason being if a validator's single hotkey does get compromised, damage can be done by the attacker setting incorrect weights for miners or introducing a deadlock condition, effectively preventing normal operation.



Validators evaluate miner performance, and post their evaluations to the blockchain.

This page discusses btcli stuff specifically for Validators. For general coverage of BTCLI and permissions stuff, see: [Bittensor CLI: Permissions Guide](../btcli-permissions)

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


**Commands most relevant to validators:**
- **Weights**:
  - `btcli weights reveal`, `btcli weights commit`  
  - `btcli wt reveal`, `btcli wt commit`  
  - `btcli weight reveal`, `btcli weight commit`  
  These require a hotkey with an active validator permit on the subnet. Typically run in a live environment (the validator node).
  
- **Stake Management** (if you stake TAO to your validator hotkey or accept delegations):
  - `btcli stake add`, `btcli stake remove`, `btcli stake move`, etc.
  Requires the coldkey in a **secure environment** if you are adding or removing stake from your own coldkey to your validator hotkey.
- **Subnet Registration**:
  - If you are validating on a particular subnet, you often must register with `btcli subnets register` or `btcli subnets pow-register`, same as miners. This also typically involves your coldkey to pay any required fees, while awarding your hotkey the validator status/UID in that subnet.

In short, validators use their **hotkey** for daily validation and weights. The coldkey is still needed for any staking or managing TAO, so you keep it offline or in a more secure environment whenever possible.
