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

If the variable is set to `"1"`, the `nest_asyncio` patch is applied to support nested asyncio event loops.
Default: 0

### `READ_ONLY`

If set to `"1"`, Bittensor is run in in read-only mode, and write-required operations are disabled (e.g., `btlogging` and `bittensor-wallet`).

Allows Bittensor to be run in read-only systems.
Default: 0

### `USE_TORCH`

When set to 1, forces the use of `PyTorch` instead of NumPy for certain operations.
Default: 0

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
<!-- Default ??? -->

### `BT_AXON_IP`

The local IP address (interface) used to start Axon.
<!-- Default ??? -->

### `BT_AXON_EXTERNAL_PORT`

The external port of Axon advertised to other network peers.
<!-- Default ??? -->

### `BT_AXON_EXTERNAL_IP`

The external IP address that Axon will share with other network participants.
<!-- What about this one? -->
<!-- Default ??? -->

### `BT_AXON_MAX_WORKERS`

The maximum number of worker threads for the Axon server.
<!-- Default ??? -->

## Logging
<!-- How do the logging flags interact? if I set all of them to true is that the same as TRACE (since that's the 'most verbose', or are there non-overlapping messages?) -->

<!-- What is Default log level? -->
### `BT_LOGGING_DEBUG`

When set to "true" or "1", enables DEBUG level message output.
Default: 0

### `BT_LOGGING_TRACE`

When set to "true" or "1", enables the most verbose TRACE logging level.
Default: 0

### `BT_LOGGING_INFO`

When set to "true" or "1", enables INFO level message output.
Default: 0

### `BT_LOGGING_RECORD_LOG`

When set to "true" or "1", enables log file recording.
Default: 0

### `BT_LOGGING_LOGGING_DIR`

Specifies the directory path for storing log files.
<!-- Default ??? -->

## PriorityThreadPoolExecutor

### `BT_PRIORITY_MAX_WORKERS`

Maximum number of worker threads for the `PriorityThreadPoolExecutor`.
<!-- Default ??? -->

### `BT_PRIORITY_MAXSIZE`

Maximum task queue size for the `PriorityThreadPoolExecutor`.

<!-- What happens when tasks get enqueued and the queue is already this size? The last in get dropped? -->

## Testing

### `FAST_BLOCKS`

If set to `"1"`, use a fast-block chain (0.25 seconds per block) for e2e testing.
Default: 0

### `USE_DOCKER`

If set to `"1"`, use the Docker-based LocalNet image for launching e2e tests.
Default: 0

### `LOCALNET_SH_PATH`

Full path to the `scripts/localnet.sh` file in the cloned `Subtensor` repository used to launch the local chain (including for e2e tests if the Docker image is not used).

Default: `./scripts/localnet.sh`

