---
title: "Using Docker"
---
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Using Docker

To run a subtensor node with Docker, follow the below steps.

:::danger Not tested on cloud 
We have not tested subtensor node installation scripts on any cloud service. In addition, if you are using Runpod cloud service, then note that this service is already [containerized](https://docs.runpod.io/pods/overview). Hence, the only option available to you for Runpod is to install a subtensor node by [compiling from source](using-source.md). **Note that we have not tested any subtensor installation steps on Runpod.** 
:::

If you are already running a subtensor node using Docker, then go directly to [Step 5 Prepare to Run ](#step-5-prepare-to-run). The below steps 1 through 4 are for first time users only.

## Step 1: Install git

Ensure that `git` is installed on your machine. Refer to the [GitHub documentation](https://docs.github.com/en/get-started) for installation instructions..

## Step 2: Install Docker

Follow Docker's [official installation guides](https://docs.docker.com/engine/install/) and install Docker.

:::tip Run Docker first
Before proceeding, make sure that Docker is running.
:::

## Step 3: Clone the subtensor repo

Clone the subtensor repository:

```bash
git clone https://github.com/opentensor/subtensor.git
```

## Step 4: Go into subtensor directory

Navigate into the Subtensor directory:

```bash
cd subtensor
```

## Step 5: Prepare to run

Execute the below three commands in this order:

Ensure you are on the `main` branch. If not, switch to it:

```bash
git checkout main
```

Pull the latest `main` branch contents:

```bash
git pull
```

Stop any currently running Docker containers:

```bash
docker compose down --volumes
```

## Run a Lite Node on Mainchain

To run a lite node connected to the Bittensor mainchain, execute the below command.

```bash
./scripts/run/subtensor.sh -e docker --network mainnet --node-type lite
```

## Run an Archive Node on Mainchain

To run an archive node connected to the Bittensor mainchain, execute the below command.

```bash
./scripts/run/subtensor.sh -e docker --network mainnet --node-type archive
```

## Run a Lite Node on Testchain

To run a lite node connected to the Bittensor testchain, execute the below command.

```bash
./scripts/run/subtensor.sh -e docker --network testnet --node-type lite
```

## Run an Archive Node on Testchain

To run an archive node connected to the Bittensor testchain, execute the below command.

```bash
./scripts/run/subtensor.sh -e docker --network testnet --node-type archive
```
