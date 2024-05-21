---
title: "Bittensor 7.0.0"
---

# Bittensor 7.0.0 Release Notes

The following are the release notes for Bittensor release 7.0.0:

## New features and enhancements

- A new `btcli` subcommand is added to set the delegate take % between 0 and 18%. See the doc for [`btcli root set_take`](../btcli.md#set-delegate-take). 
- Enhanced the `btcli wallet regen_coldkey --mnemonic` command which now supports passing the seed phrase as either a list of word strings, or a list of the entire seed phrase as a string, or the seed phrase as a string of space-separated words. [Add link to doc] 
- A new `btcli` subcommand is added for fetching a light version of the delegate object. See the doc for `btcli root list_delegates_lite`. [Add link to doc] 

## Fixed issues

- Fixed the issue that gave the below error by enforcing the versioning for the `eth-utils` package: 
	```bash
    UserWarning: Network 345 with name 'Yooldo Verse Mainnet' does not have a valid ChainId. eth-typing should be updated with the latest networks
    ```
- On Apple M1 systems, the following version dependencies are added to remove inconsistencies: 
```bash
starlette , shtab and typing-extension based on the FastAPI version fastapi==0.110.1
```

## Breaking changes

The `set_weights` method is no longer supported. Instead, use the new method `set_root_weights`. [Add the link to the docs]

## Deprecated

- Starting with this 7.0.0 release, the `torch` library is no longer used by default. Instead, the [`numpy`](https://numpy.org/) library is used. However, you can still use `torch` by setting the environment variable `USE_TORCH=1` and making sure that you have installed the `torch` library. See [Install Bittensor] doc. 

## General 
	
- Pydantic library used in Bittensor is updated to V2 (to [Pydantic version 2.7.1](https://github.com/pydantic/pydantic/releases/tag/v2.7.1)).
- Python 3.8 is no longer supported starting with this Bittensor 7.0.0 release. 
