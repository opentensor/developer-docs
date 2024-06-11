---
title: "Chain Release Notes"
---

# Chain Release Notes

## 11 June 2024: Release notes for mainnet 1.1.1

- All the items described in the below [Release Notes for testnet 1.1.0](#28-may-2024-release-notes-for-testnet-110) are now available in the mainchain.

## 11 June 2024: Release notes for testnet 1.1.1

- A new feature, called **consensus-based weights** is released in the testchain 1.1.1 only. Currently while calculating the dividends to a subnet validator, a quantity called instantaneous bond value is used. A subnet validator maintains an instantaneous bond value on each subnet miner. Instead of directly using the instantaneous bond value, a moving average, weighted over the current epoch and several previous epochs, is used. See the below equation for how this moving average is computed.

$$
B_{ij}^{(t)} = \alpha\cdot\Delta B_{ij}^{(t)} + (1-\alpha)\cdot B_{ij}^{(t-1)}
$$

:::tip what changed
Currently the $\alpha$ is set to `0.9`. With the consensus-based weights feature, this $\alpha$ value is made a variable. In the current version of this feature this change occurs behind-the-scenes, i.e., no specific user action is enabled. 

**Blog post**: https://blog.bittensor.com/consensus-based-weights-1c5bbb4e029b

**Also see**: [Validator bonding document section in the subtensor repo](https://github.com/opentensor/subtensor/blob/main/docs/consensus.md#validator-bonding).
:::

## 28 May 2024: Release notes for testnet 1.1.0

The following are the release notes for the testchain 1.1.0 updates. **These updates will be available on the testchain only. They are not yet available on the mainchain.**

### New feature

#### Commit reveal

**Pull request**: https://github.com/opentensor/subtensor/pull/396

A new feature, called, **commit reveal**, is made available on the testchain only, starting with testchain 1.1.0. This feature will address the weight copying issue. 

For a detailed description of the feature and how to test it, see the [Commit Reveal](./subnets/commit-reveal.md) document. 

### Enhancement

- Emissions are now recycled for those subnets that have registration turned off. 
- The `btcli root weights` command now uses a new function `set_root_weights()` behind the scenes and uses the coldkey to sign the transaction. 

**Pull request**: https://github.com/opentensor/subtensor/pull/474

### Fixed issue

Previousy, due to a bug in Yuma Consensus implementation, the weights were not normalized before calculating subnet emissions. This bug is fixed in this update, so that the weights are now normalized before calculating subnet emissions.

### Breaking change

If you are using the function `set_weights()` directly, then note that this function is no longer in use. In its place, use the new function `set_root_weights()` to set the root weights. This new function now requires that you sign it with your coldkey. The now-removed `set_weights()` function was signed by the hotkey. See [line of code for the new `set_root_weights()`](https://github.com/opentensor/subtensor/blob/development/pallets/subtensor/src/root.rs#L585). 

**Pull request**: https://github.com/opentensor/subtensor/pull/335

### General

Polkadot SDK version is updated to 1.10 with this testchain update.
