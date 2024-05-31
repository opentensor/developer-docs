---
title: "Chain Release Notes"
---

# Chain Release Notes

## 04 June 2024: Release Notes for mainchain 1.1.0

All the items described in the below [Release Notes for testchain 1.1.0](#release-notes-for-testchain-110) are now available in the mainchain.


## 28 May 2024: Release Notes for testchain 1.1.0

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
