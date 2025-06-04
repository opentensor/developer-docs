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
Default: `0`

## Subtensor

### `BT_CHAIN_ENDPOINT`

The Subtensor node (RPC endpoint) URL to connect to Bittensor (overrides the default chain address).

Defaults to Bittensor main network: `(wss://entrypoint-finney.opentensor.ai:443`

See [Bittensor Networks](../bittensor-networks)

### `BT_NETWORK`

The default Subtensor network name. Allows selecting the network (e.g., `finney` or testnet) during Subtensor initialization without specifying an explicit endpoint.

## Axon

### `BT_AXON_PORT`

The port on which the local Axon server will listen for incoming connections.
Default: `8091`

### `BT_AXON_IP`

The local IP address (interface) used to start Axon.
Default: "[::]"

### `BT_AXON_EXTERNAL_PORT`

The external port of Axon advertised to other network peers.
Default: None

### `BT_AXON_EXTERNAL_IP`

The external IP address that Axon will share with other network participants.
Default: None

### `BT_AXON_MAX_WORKERS`

The maximum number of worker threads for the Axon server.
Default: `10`

## Logging

### `BT_LOGGING_DEBUG`

When set to `true` or `1`, enables DEBUG level message output.<br/>
Default: disabled

### `BT_LOGGING_TRACE`

When set to `true` or `1`, enables the most verbose TRACE logging level.<br/>
Default: disabled

### `BT_LOGGING_INFO`

When set to `true` or `1`, enables INFO level message output.<br/>
Default: disabled

### `BT_LOGGING_RECORD_LOG`

When set to `true` or `1`, enables log file recording.<br/>
Default: disabled

### `BT_LOGGING_LOGGING_DIR`

Specifies the directory path for storing log files.
Defaults to value of `bittensor.core.settings.MINERS_DIR`.

## PriorityThreadPoolExecutor

### `BT_PRIORITY_MAX_WORKERS`

Maximum number of worker threads for the `PriorityThreadPoolExecutor`.
Default: `5`

### `BT_PRIORITY_MAXSIZE`

Maximum task queue size for the `PriorityThreadPoolExecutor`.
Default: `10`

## Testing

### `FAST_BLOCKS`

If set to `0`, disables the fast-block chain feature (0.25 seconds per block) for e2e testing.<br/>
Default: Use `fast_blocks`

### `USE_DOCKER`

If set to `1`, uses the Docker-based LocalNet image for launching e2e tests.<br/>

### `LOCALNET_SH_PATH`

Full path to the `scripts/localnet.sh` file in the cloned `Subtensor` repository used to launch the local chain (including for e2e tests if the Docker image is not used).<br/>
Default: `./scripts/localnet.sh`

