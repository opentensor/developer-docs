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

Make sure you installed `git` on your machine. See [GitHub docs](https://docs.github.com/en/get-started).

## Step 2: Install Docker

Follow Docker's [official installation guides](https://docs.docker.com/engine/install/) and install Docker.

:::tip Run Docker first
Before you proceed, make sure that Docker is running.
:::

## Step 3: Clone the subtensor repo

Clone the subtensor repo:

```bash
git clone https://github.com/opentensor/subtensor.git
```

## Step 4: Go into subtensor directory

Then `cd` into the subtensor directory:

```bash
cd subtensor
```

## Step 5: Prepare to run

Execute the below three commands in this order:

Make sure you are on the `main` branch. If not, switch to it:

```bash
git checkout main
```

Pull the latest `main` branch contents:

```bash
git pull
```

Stop the currently running Docker containers:

```bash
docker compose down --volumes
```

## Run a lite node on mainchain

To run a lite node connected to the Bittensor mainchain, run the below command.

```bash
sudo ./scripts/run/subtensor.sh -e docker --network mainnet --node-type lite
```

## Run an archive node on mainchain

To run an archive node connected to the Bittensor mainchain, run the below command.

```bash
sudo ./scripts/run/subtensor.sh -e docker --network mainnet --node-type archive
```

## Run a lite node on testchain

To run a lite node connected to the Bittensor testchain, run the below command.

```bash
sudo ./scripts/run/subtensor.sh -e docker --network testnet --node-type lite
```

## Run an archive node on testchain

To run an archive node connected to the Bittensor testchain, run the below command.

```bash
sudo ./scripts/run/subtensor.sh -e docker --network testnet --node-type archive
```
