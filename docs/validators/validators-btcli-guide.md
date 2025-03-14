---
title: "Validator's Guide to `BTCLI`"
---

# Validator's Guide to `BTCLI`

Validators evaluate miner performance, and post their evaluations to the blockchain. This page discusses considerations specific to validators when using `btcli`.

For general coverage of `btcli` permissions and requirements, see: [Bittensor CLI: Permissions Guide](../btcli-permissions)

See also: [Coldkey and Hotkey Workstation Security](../getting-started/coldkey-hotkey-security).

:::tip 
It is highly recommended to use a unique hotkey per subnet.
:::

## Requirements for validator functions

### Unpermissioned workstation (public keys only):
- Check balances
- Monitor emissions and other metagraph info
- Check subnet alpha prices across Bittensor

### Coldkey workstation:
- Create/import coldkey
- Manage TAO and alpha stake
- Create and register a hotkey on a secure coldkey workstation  then transfer the hotkey file or mnemonic to the validator workstation: `btcli wallet new-hotkey` , `btcli wallet regen-hotkey`
- Transfer/rotate TAO and alpha stake in case of key compromise
- Rotate hotkeys in case of compromise
- Register a hotkey on a subnet with `btcli subnets register`, `btcli subnets pow-register`
- Set validator take with `btcli sudo set-take`

### Validator node (hotkey workstation)

These require a hotkey with an active validator permit on the subnet. Run in a live environment (the validator node), which is a hotkey workstation.

- `btcli weights reveal`, `btcli weights commit`  
- `btcli wt reveal`, `btcli wt commit`  
- `btcli weight reveal`, `btcli weight commit`  

### Weight-setting requirements

To have a **validator permit** in a given subnet, allowing you to submit miner evaluations using the [`set_weights`](pathname:///python-api/html/autoapi/bittensor/core/extrinsics/set_weights/index.html) function, you must meet the following requirements:

	- Your hotkey must be registered, granting you a UID on the subnet
	- You must have a stake-weight on the subnet of least 1000, including stake delegated to your hotkey from other wallets' coldkeys. A validator's stake weight in a subnet equals their alpha stake plus their TAO stake times the `tao_weight` parameter (current value: 0.18):

		$$

		\text{Validator stake weight} = \alpha +  0.18 \times \tau 

		$$
	- You must be one of the top 64 validators in the subnet, ranked by stake.


## Key rotation

If you suspect your coldkey may have been leaked, you can request to swap it out of your wallet, using an extrinsic blockchain transaction. This operation has a 5 day waiting period, during which your coldkey will be locked. The cost of this coldkey swap transaction is 0.1 TAO.

See [Rotate/Swap your Coldkey](../subnets/schedule-coldkey-swap)

