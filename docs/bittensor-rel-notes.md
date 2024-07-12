---
title: "Bittensor Release Notes"
---

# Bittensor Release Notes

The following are the release notes for the Bittensor software.

## Release 7.3.0

`Released 12 July 2024`

### New features and enhancements

- **Consensus-based weights** ("liquid alpha"): With this version, the [Consensus-based weights](./subnets/consensus-based-weights.md) feature is now available in the `master` branch. Until now this feature was available only in the `rc_7.3.0` branch of the `bittensor` repo. 

<!--
- **Schedule coldkey swap**: The [Schedule coldkey swap](./subnets/schedule-key-swap.md) feature is now available in the `master` branch. This feature is available only in Bittensor 7.3.0 and later versions. 
-->

## 12 June 2024: Release 7.2.0

### Deprecated

Starting with 7.2.0, usage of the `nest_asyncio` package is deprecated. If you use `nest_asyncio` then make sure to explicitly add it to your project dependencies. In the next major release, the `nest_asyncio` will be removed from the `bittensor` package.  

### New features and enhancements

The terminal output print of the subnet hyperparameters is enhanced from its current raw U16 and U64 format to human-readable versions. For example, `max_weight_limit` was displayed previously as `65535` but now enhanced to display `1.0`. 

### Fixed issues

- Nonce implementation is enhanced against replay attack vulnerability. Previously nonces were converted to monotonic numbers. In the fixed version a nonce is converted to timestamp and while verifying it a check is made for the version number. 
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

Previousy, due to a bug in Yuma Consensus implementation, the weights were not normalized before calculating subnet emissions. This bug is fixed in this update, so that the weights are now normalized before calculating subnet emissions.

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
