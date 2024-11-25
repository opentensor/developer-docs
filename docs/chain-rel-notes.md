---
title: "Chain Release Notes"
---

# Chain Release Notes

The following are the release notes for the subtensor on-chain software.

## Mainnet

`Released 25 November 2024`

### Permissioned EVM feature

- **IMPORTANT**: EVM features on the mainnet will be available only after the Bittensor 8.4.0 is released. In the mean time use this mainnet node to deploy your smart contracts on mainnet: `wss://evm.chain.opentensor.ai `to access EVM on the mainnet.
- **Permissioned deployment**: The EVM layer is now on mainnet. Until further notice, only white-listed parties can deploy a smart contract on mainnet and testnet. When you are ready to deploy, make a request in the evm-bittensor channel of Bittensor Discord: ⁠https://discord.com/channels/799672011265015819/1303125508791341057
- **Permissionless interaction**: Calling a smart contract is permissionless, either on mainnet or on testnet. Anyone can call a smart contract that was already deployed on mainnet or testnet, and interact with it in a permissionless way.
- **Documentation**: https://docs.bittensor.com/evm-tutorials/

### Added Rust Lint ForbidKeysRemoveCall
- A new Rust lint `ForbidKeysRemoveCall` is added to the mainnet. This will ban `Keys::<T>::remove() `call to prevent accidentally breaking the neuron sequence.
- If you need to replace neurons, use `SubtensorModule::replace_neuron()`.

### Resolved the Child Hotkey Emission Distribution Issues
Resolved the following child hotkey emission distribution issues:
- Miner emission was erroneously distributed to the nominators. This is now fixed on both mainnet and testnet. 
- Child hotkey take distribution was erroneously distributed to the nominators. This is now fixed on both mainnet and testnet.

### Simplified Localnet for Development
Running a localnet for development is simplified, by providing the `--dev` flag. With this flag, localnet will run with a single authority, hence no need for running scripts and multiple nodes to produce blocks. Now you just run `cargo run -- --dev`.

### Transfer Limit Between EVM and Substrate removed
- Previously, the EVM integration imposed a maximum transfer limit of 18.4 TAO to avoid precision loss when converting between EVM (18 decimals) and Substrate (9 decimals). This is now fixed on both mainnet and testnet. This resolution removes the transfer limit by truncating excess decimals from the least significant end during the conversion. As a result, large transfers are now allowed.
- Infinitesimally small amounts of WEI (less than the precision of TAO) are discarded during this process, and a log entry is generated whenever such precision loss occurs.

### Other Changes

- Chainspec files are updated.
- Mainnet spec version is updated to 210 and the testnet spec version is unchanged.
- Various CI enhancements that do not impact the runtime.

---

`Released 05 November 2024`
## Mainnet

### Cost reduced for schedule coldkey swap

- The cost to schedule coldkey swap is reduced to 0.1 TAO from 1.0 TAO. 
- See the PR: [https://github.com/opentensor/subtensor/pull/897](https://github.com/opentensor/subtensor/pull/897). 
- See the [Schedule Coldkey Swap](./subnets/schedule-coldkey-swap.md) documentation.
- Mainnet spec version is now `205`.

### New commit reveal feature

- A revised commit reveal feature. 
- See the PR: [https://github.com/opentensor/subtensor/pull/895](https://github.com/opentensor/subtensor/pull/895). 
- See the updated [Commit Reveal](./subnets/commit-reveal.md) documentation.

## Testnet

### Permissioned EVM feature

This feature is released on testnet only. 

- **Permissioned deployment**: Until further notice, only white-listed parties can deploy a smart contract on subtensor. When you are ready to deploy, make a request in the **evm-bittensor** channel of Bittensor Discord: https://discord.com/channels/799672011265015819/1303125508791341057
- **Permissionless interaction**: However, anyone can call a smart contract that was already deployed on subtensor, and interact with it in a permissionless way. 
- [EVM Documentation](./evm-tutorials/index.md).
- Testnet spec version is now `206`. 

## Other

Other quality of life enhancements that do not affect the runtime of the mainnet.

---

`Released 04 September 2024`

## Mainnet

### New features

- **Child hotkey take**: With this feature, you can now set a take rate for child hotkey delegation that is different from the take rate for delegation by nominator. In addition, there is no maximum limit on a hotkey's total stake (i.e., no maximum limit on a hotkey's sum of delegated stake + child hotkey stake).
 
- **Schedule coldkey swap**: Schedule a coldkey swap, and it always executes the actual swap five (5) days from the time of scheduling. 

    :::danger No btcli support yet
    The Bittensor software does not yet support this schedule coldkey swap feature.
    :::

### Enhancements

- **Change in the emission schedule**: To reduce the chain bloat, we are changing the emission schedule. The new emission schedule will be once every 24 hours (7200 blocks). The keys will continue to accumulate the emissions at every tempo as usual. With this new emission schedule, staking returns are auto-compounded every 24-hours (7200 blocks).

    **Elaboration**: Every time the [`emit_inflation_through_hotkey_account`](https://github.com/opentensor/subtensor/blob/1332d077ea73bc7bf40f551c7f1adea3370df2bd/pallets/subtensor/src/block_step.rs#L217) function is executed on-chain, it increases the size of the chain state. The chain currently runs this function every epoch, thereby significantly contributing to the chain bloat. To mitigate the above chain bloat issue, the OTF will make a change so that the above emit_inflation_through_hotkey_account function runs once every 20 epochs (every 7200 blocks), instead of every 360 blocks. As a result, this will reduce the chain bloat by a factor of 20.

- **Single tempo delay**: We are introducing a single tempo delay between when you increase your stake and begin accumulating the corresponding staking returns. In specific, if you increased your stake during any block in the current tempo, you will start accumulating your staking returns only in the next tempo. For example, if you stake at tempo=0, then you will not receive any staking returns for this tempo=0. Your stake will only start to accumulate returns starting at tempo=1. 

- **New proxy types**: Added the transfer proxy type in two flavors for finer-grained control. This allows for separate proxies for small and large sum transactions.

- **Sensible runtime logging**: Reduced the amount of logging and clarified the reduced output.

### Fixed issues

- **Better neuron pruning**: A neuron with the worst pruning score is pruned first, but if multiple neurons have the same worst pruning score, then the oldest registered neuron is pruned first. 

---

`Released 12 July 2024`
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

A new feature, called **consensus-based weights** is available in the testnet 1.2.1-pre-release. Currently, while calculating the dividends to a subnet validator, a quantity called exponential moving average bond value of a subnet validator, weighted over the current epoch and several previous epochs, is used. See the below equation for how this moving average is computed.

$$
B_{ij}^{(t)} = \alpha\cdot\Delta B_{ij}^{(t)} + (1-\alpha)\cdot B_{ij}^{(t-1)}
$$

Until now, the value of $\alpha$ is set to `0.9`. With this new feature, the $\alpha$ value is made into a variable. An optimum value for the variable $\alpha$ is determined based on the current consensus in a given subnet. Hence, this feature is called **consensus-based weights**. A subnet owner can now experiment for the optimum value of $\alpha$. See the below documentation links for how to use this feature:

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

Previously, due to a bug in Yuma Consensus implementation, the weights were not normalized before calculating subnet emissions. This bug is fixed in this update, so that the weights are now normalized before calculating subnet emissions.

**Pull request**: https://github.com/opentensor/subtensor/pull/335
