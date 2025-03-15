---
title: "Validator's Guide to `BTCLI`"
---

# Validator's Guide to `BTCLI`

Validators evaluate miner performance, and post their evaluations to the blockchain. This page discusses considerations specific to validators when using `btcli`.

For general coverage of `btcli` permissions and requirements, see: [Bittensor CLI: Permissions Guide](../btcli-permissions)

See also: [Coldkey and Hotkey Workstation Security](../getting-started/coldkey-hotkey-security).

:::tip tips
It is highly recommended to use a unique hotkey per subnet.

Note that hotkeys are not encrypted by default, but can be password [optionally encrypted](../working-with-keys#encrypting-the-hotkey).
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

To set weights, a validator must meet several requirements. See [Requirements for validation](./#requirements-for-validation).

## Key rotation

If you suspect your coldkey may have been leaked, you can request to swap it out of your wallet, using an extrinsic blockchain transaction. This operation has a 5 day waiting period, during which your coldkey will be locked. The cost of this coldkey swap transaction is 0.1 TAO.

See [Rotate/Swap your Coldkey](../subnets/schedule-coldkey-swap)

