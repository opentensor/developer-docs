---
title: "Environment Variables"
---

## Bittensor SDK: General
- `BT_SUBTENSOR_CHAIN_ENDPOINT` — the Subtensor chain endpoint address used when launching a local network (LocalNet). This variable will be renamed or deprecated in Bittensor SDK version 10.
- `NEST_ASYNCIO` — if the variable is set to `"1"`, the `nest_asyncio` patch is applied to support nested asyncio event loops.
- `READ_ONLY` — when set to `"1"`, allows the Bittensor package to be used in read-only systems (disables write-required operations eg. with using btlogging and bittensor-wallet).
- `USE_TORCH` — when set (e.g., `USE_TORCH=1`), forces the use of `PyTorch` instead of NumPy for certain operations.

## Bittensor SDK Config

### Bittensor SDK: Subtensor
- `BT_CHAIN_ENDPOINT` — the Subtensor node (RPC endpoint) URL to connect to Bittensor (overrides the default chain address).
- `BT_NETWORK` — the default Subtensor network name. Allows selecting the network (e.g., `finney` or testnet) during Subtensor initialization without specifying an explicit endpoint.

### Bittensor SDK: Axon
- `BT_AXON_PORT` — the port on which the local Axon server will listen for incoming connections.
- `BT_AXON_IP` — the local IP address (interface) used to start Axon.
- `BT_AXON_EXTERNAL_PORT` — the external port of Axon advertised to other network peers.
- `BT_AXON_EXTERNAL_IP` — the external IP address that Axon will share with other network participants.
<!-- What about this one? -->
- `BT_AXON_MAX_WORKERS` — the maximum number of worker threads for the Axon server.


### Bittensor SDK: Logging
- `BT_LOGGING_DEBUG` — when provided "true" or "1", sets the logging level to DEBUG, enabling debug message output.
- `BT_LOGGING_TRACE` — when provided "true" or "1", enables the most verbose TRACE logging level.
- `BT_LOGGING_INFO` — when provided "true" or "1", sets the logging level to INFO.
- `BT_LOGGING_RECORD_LOG` — when provided "true" or "1", enables log file recording.
- `BT_LOGGING_LOGGING_DIR` — specifies the directory path for storing log files when logging to a file is enabled.

### Bittensor SDK: PriorityThreadPoolExecutor
- `BT_PRIORITY_MAX_WORKERS` — the maximum number of worker threads for the `PriorityThreadPoolExecutor`.
- `BT_PRIORITY_MAXSIZE` — the maximum task queue size for the `PriorityThreadPoolExecutor`.

### Bittensor SDK: Testing
- `FAST_BLOCKS` — `"0"`/`"1"` — whether to use a fast-block chain (0.25 seconds per block) for e2e testing.
- `USE_DOCKER` — `"0"`/`"1"` — whether to use the Docker-based LocalNet image for launching e2e tests.
- `LOCALNET_SH_PATH` — entire path to the `scripts/localnet.sh` file in the cloned `Subtensor` repository used to launch the local chain (including for e2e tests if the Docker image is not used).