---
title: "Environment Variables"
---

This page documents the environment variables that provide configuration options to the Bittensor SDK.

## General

### `BT_SUBTENSOR_CHAIN_ENDPOINT`

The Subtensor chain endpoint address used when launching a local network (LocalNet).
:::info
This variable will be renamed or deprecated in Bittensor SDK version 10.
:::

### `NEST_ASYNCIO`

If the variable is set to `1`, the `nest_asyncio` patch is applied to support nested asyncio event loops.<br/>

### `READ_ONLY`

If set to `1`, Bittensor is run in in read-only mode, and write-required operations are disabled (e.g., `btlogging` and `bittensor-wallet`).

Allows Bittensor to be run in read-only systems.<br/>

### `USE_TORCH`

When set to `1`, forces the use of `PyTorch` instead of NumPy for certain operations.<br/>
The SDK uses `False ` if the variable is not set.

## Subtensor

### `BT_CHAIN_ENDPOINT`

The Subtensor node (RPC endpoint) URL to connect to Bittensor (overrides the default chain address).

The SDK uses `bittensor.core.settings.DEFAULT_ENDPOINT ` if the variable is not set.

See [Bittensor Networks](../bittensor-networks)

### `BT_NETWORK`

The default Subtensor network name. Allows selecting the network (e.g., `finney` or `testnet`) during Subtensor initialization without specifying an explicit endpoint.<br>
The SDK uses `bittensor.core.settings.DEFAULT_NETWORK ` if the variable is not set.

## Axon

### `BT_AXON_PORT`

The port on which the local Axon server will listen for incoming connections.
The SDK uses `8091 ` if the variable is not set.

### `BT_AXON_IP`

The local IP address (interface) used to start Axon.
The SDK uses `"[::]"` if the variable is not set.

### `BT_AXON_EXTERNAL_PORT`

The external port of Axon advertised to other network peers.
The SDK uses `None` if the variable is not set.

### `BT_AXON_EXTERNAL_IP`

The external IP address that Axon will share with other network participants.
The SDK uses `None` if the variable is not set.

### `BT_AXON_MAX_WORKERS`

The maximum number of worker threads for the Axon server.
The SDK uses `10` if the variable is not set.

## Logging

### `BT_LOGGING_DEBUG`

When set to `true` or `1`, enables DEBUG level message output.<br/>

### `BT_LOGGING_TRACE`

When set to `true` or `1`, enables the most verbose TRACE logging level.<br/>

### `BT_LOGGING_INFO`

When set to `true` or `1`, enables INFO level message output.<br/>

### `BT_LOGGING_RECORD_LOG`

When set to `true` or `1`, enables log file recording.<br/>
The SDK uses `False` if the variable is not set.

### `BT_LOGGING_LOGGING_DIR`

Specifies the directory path for storing log files.
The SDK uses `bittensor.core.settings.MINERS_DIR` if the variable is not set.

## PriorityThreadPoolExecutor

### `BT_PRIORITY_MAX_WORKERS`

Maximum number of worker threads for the `PriorityThreadPoolExecutor`.
The SDK uses `5` if the variable is not set.

### `BT_PRIORITY_MAXSIZE`

Maximum task queue size for the `PriorityThreadPoolExecutor`.
The SDK uses `10` if the variable is not set.

## Wallet

### `BT_WALLET_NAME`

Wallet name to use unless specified.
The SDK uses `default` if the variable is not set,

### `BT_WALLET_HOTKEY`
Hotkey name to use unless specified.
The SDK uses `default` if the variable is not set,

### `BT_WALLET_PATH`
The SDK uses `bittensor.core.settings.WALLETS_DIR` if the variable is not set.

## Testing

### `FAST_BLOCKS`

The SDK runs e2e tests in fast-block mode if the variable is not set.<br/>

### `USE_DOCKER`

If set to `1` or `true`, uses the Docker-based LocalNet image for launching e2e tests.<br/>
The SDK uses `False` if the variable is not set.

### `LOCALNET_SH_PATH`

Full path to the `scripts/localnet.sh` file in the cloned `Subtensor` repository used to launch the local chain (including for e2e tests if the Docker image is not used).<br/>
SDK skips running e2e tests if the variable is not set (used only together with the `USE_DOCKER` variable).

