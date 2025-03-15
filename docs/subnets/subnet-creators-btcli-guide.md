---
title: "Subnet Creator's Guide to `BTCLI`"
---

# Subnet Creator's Guide to `BTCLI`

Subnet creators define and manage new subnets, specifying parameters like burn cost, hyperparameters, or other chain-level configurations. This role inherently requires a **coldkey** with sufficient balance/permissions to create or update subnets. 

This page discusses btcli stuff specifically for Subnet Creators. For general coverage of BTCLI and permissions stuff, see: [Bittensor CLI: Permissions Guide](../btcli-permissions)

See also: [Coldkey and Hotkey Workstation Security](../getting-started/coldkey-hotkey-security).

## Subnet Creator Requirements

To create a new subnet, you need a coldkey with sufficient TAO to pay the burn cost for creating a subnet 

To modify a subnet, you need the coldkey associated with ownership of the subnet

## `btcli` commands for subnet creators
### monitor subnet
Permissionless, use `btcli subnet show` or `btcli view dashboard`.

### create subnet
Requires coldkey with sufficient TAO.
`btcli subnet create`

### configure subnet

Configure your subnet's hyperparameters with `btcli sudo set`. Requires the coldkey the created the subnet.

## Key rotation

If you suspect your coldkey may have been leaked, you can request to swap it out of your wallet, using an extrinsic blockchain transaction. This operation has a 5 day waiting period, during which your coldkey will be locked. The cost of this coldkey swap transaction is 0.1 TAO.

See [Rotate/Swap your Coldkey](../subnets/schedule-coldkey-swap)

