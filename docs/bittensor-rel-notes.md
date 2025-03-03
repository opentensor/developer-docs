---
title: "Bittensor Release Notes"
---

# Bittensor Release Notes

The following are the release notes for the Bittensor software.

## Bittensor-CLI 9.1.0: February 28

This version adds the new dashboard feature to the Bittensor CLI.

Run `btcli view dashboard` to 

Released 

## Bittensor SDK 9.0, including `btcli` version 9.0.0: Released February 13, 2025

Major release to support chain upgrade to [Dynamic TAO](dynamic-tao/dtao-guide.md). Also introduces concurrency enhancements.

See [Bittensor 9.0 Migration Guide](./migration_guide.md).

## Released 12 December 2024

### Bittensor SDK 8.5.0

- Release PR: [https://github.com/opentensor/bittensor/pull/2538](https://github.com/opentensor/bittensor/pull/2538).
- Two new functions are added: 
  - [`get_total_stake_for_coldkey`](pathname:///python-api/html/autoapi/bittensor/core/subtensor/index.html#bittensor.core.subtensor.Subtensor.get_total_stake_for_coldkey).
  - [`get_total_stake_for_hotkey`](pathname:///python-api/html/autoapi/bittensor/core/subtensor/index.html#bittensor.core.subtensor.Subtensor.get_total_stake_for_hotkey).

- Added the required logic to support Commit Reveal V3.

- Fixed the bug that was in [`get_current_block`](pathname:///python-api/html/autoapi/bittensor/core/async_subtensor/index.html#bittensor.core.async_subtensor.AsyncSubtensor.get_current_block).

### BTCLI 8.4.2

- Minor bug fixes.

---

## Released 27 November 2024

### Wallet 2.1.3

- Reduced the installed dependencies by ~450MB by removing the requirement for  Ansible. As a result, the install dependencies for BTCLI and Bittensor SDK are also reduced. 

- Release PR: [https://github.com/opentensor/btwallet/pull/74](https://github.com/opentensor/btwallet/pull/79).

### BTCLI 8.4.0

- Upgraded WebSockets version to `14.1` or higher. 
- Resolved an issue where `btcli` did not allow setting a few subnet hyperparameters. Now all existing subnet hyperparameters can be set using `btcli`.
- Release PR: [https://github.com/opentensor/btcli/pull/254](https://github.com/opentensor/btcli/pull/254).

### Bittensor SDK 8.4.0

- Added the following extrinsic methods:
  - Subtensor.add_stake
  - Subtensor.add_stake_multiple
  - Subtensor.unstake
  - Subtensor.unstake_multiple

- Added the following Subtensor methods:
  - Subtensor.get_stake_for_coldkey_and_hotkey
  - Subtensor.does_hotkey_exist
  - Subtensor.get_hotkey_owner
  - Subtensor.tx_rate_limit
  - Subtensor.get_delegates
  - Subtensor.is_hotkey_delegate

- Added the extrinsics to the following files:
  - bittensor/core/extrinsics/staking.py
  - bittensor/core/extrinsics/unstaking.py

- Several enhancements are made to `AsyncSubtensor`. See the documentation for [Asyncio](./subnets/asyncio.md) for details.
- Added an ability to send neuron certificate and receive other neuron's certificates. This enhancement will enable setting up mutual TLS between neurons. PR: [https://github.com/opentensor/bittensor/pull/2267](https://github.com/opentensor/bittensor/pull/2267).
- Enhanced the way Subtensor connects to the websocket server. PR: [https://github.com/opentensor/bittensor/pull/2455](https://github.com/opentensor/bittensor/pull/2455).

- Added a new `BittensorConsole` class. The methods in this class allow displaying output messages to the terminal console without changing the logging level of the main logging (`btlogging`). See the detailed documentation on [Logging](./subnets/bt-logging-levels). 

- Enhanced the reconnection logic. PR: [https://github.com/opentensor/bittensor/pull/2442](https://github.com/opentensor/bittensor/pull/2442).
- Added support for Python 3.12.

#### Fixed issues

- Fixed an issue where logging was not working when setting weights. Also see  the detailed documentation on [Logging](./subnets/bt-logging-levels). 

---

## Released 14 November 2024
`Hotfix release`

### Bittensor SDK 8.3.1

See the details of this hotfix release below:

- **Release PR**: [https://github.com/opentensor/bittensor/pull/2423](https://github.com/opentensor/bittensor/pull/2423)
- **Hotfix description**: A reusable `hex_to_bytes` function is added to the following subtensor methods. This function is for converting hex results to bytes for passing to `bt-decode`. 
  - get_all_subnets_info
  - get_prometheus_info
  - get_delegate_by_hotkey
  - get_commitment

---

## Released 13 November 2024

The following are the new versions in this release with their release PRs: 

- **BTCLI 8.3.1 Release PR**: [https://github.com/opentensor/btcli/pull/239](https://github.com/opentensor/btcli/pull/239).
- **Bittensor SDK 8.3.0 Release PR**: [https://github.com/opentensor/bittensor/pull/2417](https://github.com/opentensor/bittensor/pull/2417).
- **Wallet SDK 2.1.0 Release PR**: [https://github.com/opentensor/btwallet/pull/61](https://github.com/opentensor/btwallet/pull/61).

###  Upgrade steps

- **Bittensor SDK**: See [Install Bittensor SDK](./getting-started/installation.md).
- **BTCLI**: See [Install BTCLI](./getting-started/install-btcli.md).
- **Wallet SDK**: See [Install Wallet SDK](./getting-started/install-wallet-sdk.md).

### New features and enhancements

- **Bittensor SDK**: An **experimental class**, `AsyncSubtensor`, is included in this release. **This class is not yet ready for your production use**. See an example code showing how to use this class, [asyncio](./subnets/asyncio.md).
- **Wallet SDK**: Added the ability in the Wallet SDK to use local environment variables to store encrypted hotkey and coldkey passwords. See the PR [https://github.com/opentensor/btwallet/pull/46](https://github.com/opentensor/btwallet/pull/46).
- **BTCLI**: A `--verbose` flag is added to all `btcli` commands. Now if you encounter an error with `btcli`, you can rerun the command with `--verbose` to get a traceback for debugging.


### Fixed issues

- **Wallet SDK**: Fixed an issue where the `~` character in the wallet path was not being recognized properly. This is now resolved so that you can use `"~/.bittensor/wallets/"` in the wallet path. See the PR [https://github.com/opentensor/btwallet/pull/59](https://github.com/opentensor/btwallet/pull/59).

- **BTCLI**: Fixed an issue where, if a nonexistent wallet path is passed to  `btcli wallet list`, the command did not gracefully handle it. This is now resolved so that the error is properly handled.

- **BTCLI**: When using `btcli` with WebSockets version 14, an error occurred with the message: `TypeError: BaseEventLoop.create_connection() got an unexpected keyword argument 'read_limit'`. This issue is resolved. The error occured because `read_limit` kwarg does not exist in WebSockets 14+. This issue is fixed so that you can use `btcli` with WebSockets version 14.


---

`Released 06 November 2024`

## BTCLI 8.3.0

### New features and enhancements

- A new flag `--all` is added to `btcli wallet transfer` command. This transfers all the available balance in the provided wallet to the destination coldkey. 
- You can now use either hotkey names or ss58 addresses in both `--include-hotkeys` and `--exclude-hotkeys` options for `btcli stake add` and `btcli stake remove` commands.
- Enhanced the user experience by not prompting the user for wallet path every time.
- For better user experience, the `btcli stake remove` command now does not ask for confirmation when `--no-prompt` is used.
- Enhanced the error message when the user provides incorrect password.
- For better user experience while using the `btcli wallet` with `regen_coldkey`, `regen_coldkeypub` and `regen_hotkey` subcommands, a success message and the regenerated wallet details are displayed when the command runs succesfully.

### Fixed issues

- There was an error when using `btcli subnet pow-register` with `--cuda` option, where the `--num_processes` was being accessed before being set (only in CUDA use). This is now resolved. Now the `--num_processes` is set before accessing it.
- Fixed the Taostats link.
- Graceful handling of keyboard interrupt.
- Several other bug fixes.

## Bittensor SDK 8.2.1

### New features and enhancements

For the below added methods, see [Bittensor SDK](./bt-api-ref.md) reference.

- Expanded the type registry to include all the available options.
- Added `Subtensor.register`, `Subtensor.difficulty` methods. 
- Added the following to Subtensor:
  - `burned_register`
  - `get_subnet_burn_cost`
  - `recycle` and related extrinsics.
- Added the following:
  - Subtensor.get_delegate_by_hotkey
  - Subtensor.root_set_weights
  - Subtensor.root_register
  - Subtensor.get_all_subnets_info
  - Subtensor.get_delegate_take
- Default port is changed from `9946` to `9944`.
- Removed the unusued `prometheus` extrinsic.
- Replaced `rich.console` with `btlogging.logging`.

## Bittensor SDK 8.3.0rc3 

:::caution 
This is a release candidate only. Do not use it in your production environment.
:::

### New features and enhancements

- Commit Reveal V2, including a new subprocess and related utilities that support the Commit Reveal V2 feature. 
- A new `bittensor.core.async_subtensor.AsyncSubtensor` class is added.
- The following `async` methods are added, along with the corresponding extrinsics to the `AsyncSubtensor` subtensor object:
- Added `bittensor.utils.delegates_details.DelegatesDetails.`
- Updated `bittensor/core/chain_data`.
- Added `bittensor/core/extrinsics/async_registration`.
- Added `bittensor/core/extrinsics/async_root`.
- Added `bittensor/core/extrinsics/async_transfer`.
- Added `get_current_block`, `get_transfer_fee`, `get_uid_for_hotkey_on_subnet`.
- `set_weights`.
- `commit_weights`.
- Added the related async extrinsics.
- Updated settings and utils.
- Better handling of SSL EOF error, which is a connection issue. This is handled for both sync and async versions.
- Removed the usage of `prompt` in SDK.

---

`Released 10 October 2024`

## Release 8.2.0

The following are the new versions in this release: 

- Bittensor SDK 8.2.0
- BTCLI 8.2.0
- Wallet SDK 2.0.2

### Release PRs

- **BTCLI Release PR**: [https://github.com/opentensor/btcli/pull/178](https://github.com/opentensor/btcli/pull/178).
- **Bittensor SDK Release PR**: [https://github.com/opentensor/bittensor/pull/2349](https://github.com/opentensor/bittensor/pull/2349).
- **Wallet SDK Release PR**: [https://github.com/opentensor/btwallet/pull/50](https://github.com/opentensor/btwallet/pull/50).

###  Upgrade steps

- **Bittensor SDK**: See [Install Bittensor SDK](./getting-started/installation.md).
- **BTCLI**: See [Install BTCLI](./getting-started/install-btcli.md).
- **Wallet SDK**: See [Install Wallet SDK](./getting-started/install-wallet-sdk.md).

### New features and enhancements

- Added a new `btcli` command for RAO ⇄ TAO conversion: 
  ```bash
  btcli utils convert --rao <rao units> --tao <tao units>
  ```
  See [https://github.com/opentensor/btcli/pull/174](https://github.com/opentensor/btcli/pull/174) (documentation will be updated shortly).

- Enhanced the `btcli` option handling so that a command with multiple options like: 
  ```bash
  btcli w faucet --subtensor.chain_endpoint ws://127.0.0.1:9945 --subtensor.network local
  ``` 
  will be correctly interpreted as indicating `ws://127.0.0.1:9945`.  
- Added support in the `btcli` tool for numbered mnemonics. You can now provide the mnemonic with the numbered style like: `1-wordOne 2-wordTwo 3-wordThree ...`

- Enhanced `btcli` by removing the requirement for passing the port number in the chain endpoint URL. For example, before this version the chain URL must include the port number, like: `ws://127.0.0.1:9945`. With this version the chain URL can exclude the port number, like: `wss://my.bittensor.chain.point`. 
- Added support to pass an ss58 address in `btcli wallet balance`. Hence, `btcli wallet balance --ss58 <coldkey ss58 address>` will work.
- Enhanced `btcli` so that now it no longer requires `git` to be installed. 
- Enhanced `btcli` by adding a more graceful shutdown for subtensor connection when errors are encountered.
- Enhanced the `btcli` error handling by adding support for handling custom errors from subtensor.

### Fixed issues

- Fixed the TAO conversion to the correct place in the `btcli stake remove` operation.
- Fixed the `network` instantiation in `btcli root list-delegates` command.
- Fixed the command `btcli root list-delegates` so that when the command is run on non-archive nodes (such as local chain) it will produce a valid output. See [https://github.com/opentensor/btcli/pull/175](https://github.com/opentensor/btcli/pull/175) (documentation will be updated soon).

---

`Released 03 October 2024`

## Release 8.1.0

- Updated the Bittensor Wallet SDK to Version 2.0.0. This is the same Python interface you are familiar with, but now powered by a newly-written Rust engine. 

  :::danger Compatibility note
  To use this Wallet SDK version 2.0.0 with either Bittensor SDK or BTCLI, you must upgrade both the Bittensor SDK and the BTCLI to 8.1.0.
  :::

  - **Wallet SDK Repo:** [https://github.com/opentensor/btwallet](https://github.com/opentensor/btwallet).
  - The [**Install Wallet SDK**](./getting-started/install-wallet-sdk.md) document.
  - The [**Wallet SDK reference**](pathname:///btwallet-api/html/index.html) document.

- Updated the Bittensor SDK to Version 8.1.0, to be compatible with the new Wallet SDK 2.0.0. In addition: 

  - Added new logging levels.
  - Enhanced error handling.
  - **Bittensor SDK Repo:** [https://github.com/opentensor/bittensor](https://github.com/opentensor/bittensor).
  - **For a full developer reference**, see the [Bittensor SDK section](./bt-api-ref.md).

- Updated the BTCLI Version to 8.1.0, to be compatible with the new Wallet SDK 2.0.0. In addition, minor bug fixes and improvements are made.
  - **BTCLI Repo:** [https://github.com/opentensor/btcli](https://github.com/opentensor/btcli).
  - **For a full developer reference**, see the [Bittensor CLI section](./btcli.md).

---

## Release 8.0.0

`Released 25 September 2024`

This is a major release of the Bittensor software.

### Summary

With this 8.0.0 version, the Bittensor software is split into the following three separate repos: 
- The Bittensor SDK: https://github.com/opentensor/bittensor/tree/master (the existing Bittensor repo).
- The new BTCLI repo: https://github.com/opentensor/btcli.
- The new BT Wallet repo: https://github.com/opentensor/btwallet.

- **Bittensor SDK version 8.0.0**: This is the Bittensor software as you know it, and provides the same functionality, except it is lighter because the BTCLI and Wallet functionalities are separated out from it. All our tests have confirmed that this Bittensor SDK 8.0.0 is compatible with the current Bittensor version 7.4.0. 

  :::tip new installation docs for SDK
  See the updated developer documentation for the new [Bittensor SDK](./getting-started/installation.md).
  :::

- **New BTCLI version 8.0.0**: This new `btcli` is entirely rewritten to enhance its performance and user-interface. All commands and options are compatible with the existing "legacy" `btcli`. Online help, with `--help` option, is significantly enhanced. 

  :::tip new docs for BTCLI
  See the updated [BTCLI installation doc](./getting-started/install-btcli.md) and the new [BTCLI guide](./btcli.md).
  :::

- **BT Wallet SDK 1.0.0**: For security reasons, the `bittensor.wallet` package is separated into its own repo and will be released soon as BT Wallet SDK 1.0.0. More updates on this in the days and weeks ahead. 

### New features and enhancements

- The new async "btcli" is built from ground up by rewriting the `py-substrate-interface` as `async-substrate` to enhance the performance and achieve significant speedups. With the previously-used version of `py-substrate-interface` we could not execute requests asynchonously. With this rewrite as `async-substrate`, the new `btcli` is able to make RPC calls to the chain concurrently. Furthermore, we built the `async-substrate` with `asyncio` at its core, so every call is optimised to work within an `asyncio` environment.
- A new `bt-decode` package is developed. This is a Rust SCALE decoder that is exposed to Python, allowing for 10-40X faster SCALE decodes over the previous Python implementation. This new `bt-decode` functionality is built in to the new `async-substrate`, interface, so to the user the new "btcli" is simply faster because it is optimised for the network-bound I/O and the CPU-bound decoding.
- Users will now receive their UID immediately after they register a neuron on any subnet.
- Enhanced the error message handling so that now all existing error message types will be handled by the subtensor (including custom error message types).
- The new "btcli" now presents information-rich tables on the terminal display showing all the critical information in an easy-to-understand manner.
- The help text for the `btcli --help` command is completely rewritten, adding more information.
- Several more fixes and enhancements.

---

## Release 7.4.0

`Released 04 September 2024`

### Breaking change

- Updates to support the mainnet changes. Everyone is required to update the Bittensor to 7.4.0 or later versions. If you prefer to stay with your current version and not install 7.4.0, then you must install the patch for your preferred version, as described in the [Discord announcement (see Patch installation steps section)](https://discord.com/channels/799672011265015819/830075335084474390/1266138337203458088).

## New feature

- **Child hotkeys**: Support is added in `btcli` for child hotkeys feature. See [Child Hotkeys](./subnets/child-hotkeys.md). 
  - Also see the blog post: https://blog.bittensor.com/child-hotkeys-77d0b855ce59

---

## Release 7.3.0

`Released 12 July 2024`

### New features and enhancements

- **Consensus-based weights** ("liquid alpha"): With this version, the [Consensus-based weights](./subnets/consensus-based-weights.md) feature is now available in the `master` branch. Until now, this feature has only been available in the `rc_7.3.0` branch of the `bittensor` repo. 
- **Check coldkey swap**: A new `btcli` command option, `check_coldkey_swap` is released. This command option will enable you to check the remaining time before your scheduled coldkey swap executes on-chain, and if your scheduled coldkey swap is in arbitration. See [Schedule Coldkey Swap](./subnets/schedule-coldkey-swap.md).

---

## 12 June 2024: Release 7.2.0

### Deprecated

Starting with 7.2.0, usage of the `nest_asyncio` package is deprecated. If you use `nest_asyncio` then make sure to explicitly add it to your project dependencies. In the next major release, the `nest_asyncio` will be removed from the `bittensor` package.  

### New features and enhancements

The terminal output print of the subnet hyperparameters is enhanced from its current raw U16 and U64 format to human-readable versions. For example, `max_weight_limit` was displayed previously as `65535` but now enhanced to display `1.0`. 

### Fixed issues

- Nonce implementation is enhanced against replay attack vulnerability. Previously each nonce was converted to monotonic numbers. In the fixed version a nonce is converted to timestamp and while verifying it a check is made for the version number. 
- Terminal display of subnet hyperparameters is enhanced to human-readable format.

### General 
	
Several enhancements such as dependency cleanups and better end-to-end tests are made to the code. 

---

## 11 June 2024: Release 7.1.0

### Breaking change

If you are directly using the function `set_weights()` in your Python module to set the root weights, then you have to now use the new function `set_root_weights()` to set the root weights. This new function now requires that you sign it with your coldkey. The previous `set_weights()` function was signed by the hotkey. **This breaking change applies only for setting the root weights. If you are setting weights within a subnet, then there is no change.** 

See [line of code for the new `set_root_weights()`](https://github.com/opentensor/subtensor/blob/development/pallets/subtensor/src/root.rs#L585). 

### New features and enhancements

#### Commit Reveal

- The **commit reveal** feature that addresses the weight copying issue is now available in this 7.1.0 version on the mainchain. 
- The following new `btcli` command options are added to use the commit reveal feature:
  - `btcli wt commit`
  - `btcli wt reveal`
- The following new subnet hyperparameters are added to support the commit reveal feature:
  - `commit_reveal_weights_interval` (integer): Specify the desired number of blocks of delay before revealing the weights. 
  - `commit_reveal_weights_enabled` (boolean): Set this hyperparameter to `True` to enable the commit reveal feature.
- For a detailed description of the feature and how to use it, see the [Commit Reveal](./subnets/commit-reveal.md) document. 

#### Enhancements

- Emissions are now recycled for those subnets that have registration turned off. 
- The `btcli root weights` command now uses a new function `set_root_weights()` behind the scenes and uses the coldkey to sign the transaction. There is no change in how you use this command. 

### Fixed issue

Previously, due to a bug in Yuma Consensus implementation, the weights were not normalized before calculating subnet emissions. This bug is fixed in this update, so that the weights are now normalized before calculating subnet emissions.

---

## 28 May 2024: Release 7.0.0

### Deprecated

- Starting with this 7.0.0 release, the `torch` library is no longer used by default. Instead, the [`numpy`](https://numpy.org/) library is used. However, you can still use `torch` by setting the environment variable `USE_TORCH=1` and making sure that you have installed the `torch` library. See [Install Bittensor](./getting-started/installation.md) doc.
- Pydantic library used in Bittensor is updated to V2 (to [Pydantic version 2.7.1](https://github.com/pydantic/pydantic/releases/tag/v2.7.1)).
- Python 3.8 is no longer supported starting with this Bittensor 7.0.0 release. 

### New features and enhancements

- Enhanced the `btcli wallet regen_coldkey --mnemonic` command which now supports passing the seed phrase as either a list of word strings, or a list of the entire seed phrase as a string, or the seed phrase as a string of space-separated words.

### Fixed issues

- Fixed the issue that gave the below error by enforcing the versioning for the `eth-utils` package: 
	```bash
    UserWarning: Network 345 with name 'Yooldo Verse Mainnet' does not have a valid ChainId. eth-typing should be updated with the latest networks
    ```
- On Apple M1 systems, the following version dependencies are added to remove inconsistencies: 
```bash
starlette , shtab and typing-extension based on the FastAPI version fastapi==0.110.1
```
