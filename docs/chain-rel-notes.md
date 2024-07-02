---
title: "Chain Release Notes"
---

# Chain Release Notes

The following are the release notes for the subtensor on-chain software.

## Mainnet 1.2.3 

- All the items described in the below [Testnet 1.2.1-pre-release](#testnet-121-pre-release) are now available in the mainnet.

## Mainnet 1.1.3 hotfix 

### Fixed issue 

A bug is fixed where, when a subnet's registration is turned off, the chain was not running the epoch for that subnet. The hotfix fixed this bug by running the epoch for the subnet and setting the emissions to zero, for that subnet. 

- [Subtensor hotfix release tag](https://github.com/opentensor/subtensor/releases/tag/v1.1.3)

- [Hotfix PR](https://github.com/opentensor/subtensor/pull/602)

## Testnet 1.2.1-pre-release 

### New features

#### Consensus-based weights

A new feature, called **consensus-based weights** is available in the testnet 1.2.1-pre-release. Currently while calculating the dividends to a subnet validator, a quantity called exponential moving average bond value of a subnet validator, weighted over the current epoch and several previous epochs, is used. See the below equation for how this moving average is computed.

$$
B_{ij}^{(t)} = \alpha\cdot\Delta B_{ij}^{(t)} + (1-\alpha)\cdot B_{ij}^{(t-1)}
$$

Until now, the value of $\alpha$ is set to `0.9`. With this new feature, the $\alpha$ value is made into a variable. An optimium value for the variable $\alpha$ is determined based on the current consensus in a given subnet. Hence this feature is called **consensus-based weights**. A subnet owner can now experiment for the optimum value of $\alpha$. See the below documentation links for how to use this feature:

:::note Documentation links for consensus-based-weights feature
**Detailed documentation and how to test the consensus-based weights feature (including a Python notebook for subnet owners)**: See [Consensus-based Weights](./subnets/consensus-based-weights.md).

**Tech blog post with analysis**: https://blog.bittensor.com/consensus-based-weights-1c5bbb4e029b

**Mathematical context**: [Validator bonding document section in the subtensor repo](https://github.com/opentensor/subtensor/blob/main/docs/consensus.md#validator-bonding).

**See the PR**: https://github.com/opentensor/subtensor/pull/552
:::

#### Safe Mode

A new feature, called **Safe Mode**, is added to the subtensor. This feature is added in the form of a Rust pallet, called Safe Mode pallet, to the subtensor runtime. This pallet allows a highly privileged user such as `root` to put the entire chain into "safe mode" for a set period of time, whereby only a select few extrinsics can be executed, while all other extrinsics will be rejected. While in safe mode, the privileged user can also choose to extend the duration of the safe mode period.

**See the PR**: https://github.com/opentensor/subtensor/pull/553

#### Added `freeze_struct` attribute macro 

This feature is added to prevent accidental changes to storage structs. An attribute called `freeze_struct` is added to the storage structs and other change-sensitive Rust items. This attribute will take a single argument which is a hash code of the non-trivial (ignoring doc comments) AST nodes that make up the item the attribute is attached to.

**If the hash code is not provided**: A compiler error will be displayed providing the programmer with the proper hash code which they can then paste in.

**If the hash code does not match**: A compiler error will be displayed informing the programmer that they have made a non-trivial or structural change to a storage struct and that they will likely need to write a migration to enact this change. The correct hash code will also be displayed.

**See the PR**: https://github.com/opentensor/subtensor/pull/533

### Fixed issues

#### Current root members could not become a senate member

The following bug is fixed: Current root members could not become a Senate member upon attaining the requirements after registering on the root network, initially. This is fixed in the below PR.

**See the PR**: https://github.com/opentensor/subtensor/pull/537

#### Subtensor error: Allocator ran out of space

The following bug is fixed: When running a subtensor archive node, the node stops syncing blocks with the below error:
```bash
Failed to allocate memory: "Allocator ran out of space"
```

**See the PR**: https://github.com/opentensor/subtensor/pull/561

---

## 11 June 2024: Release notes for mainnet 1.1.1

- All the items described in the below [Release Notes for testnet 1.1.0](#28-may-2024-release-notes-for-testnet-110) are now available in the mainchain.

---

## 28 May 2024: Release notes for testnet 1.1.0

The following are the release notes for the testchain 1.1.0 updates. **These updates will be available on the testchain only. They are not yet available on the mainchain.**

### Breaking change

If you are using the function `set_weights()` directly, then note that this function is no longer in use. In its place, use the new function `set_root_weights()` to set the root weights. This new function now requires that you sign it with your coldkey. The now-removed `set_weights()` function was signed by the hotkey. See [line of code for the new `set_root_weights()`](https://github.com/opentensor/subtensor/blob/development/pallets/subtensor/src/root.rs#L585). 

### Dependencies version change

Polkadot SDK version is updated to 1.10 with this testchain update.

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

**Pull request**: https://github.com/opentensor/subtensor/pull/335
