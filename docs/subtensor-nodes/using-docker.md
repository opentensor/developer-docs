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

## Step 5: Switch to `v1.1.3` branch

:::tip temporary fix
The use of `v1.1.3` branch is a temporary fix for this step while we resolve some installation issues using the `main` branch. 
:::

Execute the below commands in this order:

Switch to the `v1.1.3` branch:

```bash
git checkout v1.1.3
```

Pull the latest `v1.1.3` branch contents:

```bash
git pull
```

## Step 6: Edit the `docker-compose.yml` file 

Change line 11 of the [subtensor/docker-compose.yml](https://github.com/opentensor/subtensor/blob/v1.1.3/docker-compose.yml#L11) as below:

- **from**: `image: ghcr.io/opentensor/subtensor:latest`
- **to**: `image: ghcr.io/opentensor/subtensor:v1.1.3`

## Step 7: Stop and clean Docker environment

Stop any currently running Docker containers and clean up the Docker environment:

```bash
docker compose down --volumes && docker system prune -a --volumes -f

```

## Linux post-installation steps for Docker Engine

Please follow Docker's [official documentation](https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user ) to perform standard Linux post-installation steps for Docker Engine

:::tip 
Adding a user to the `docker` group is only necessary on Linux, where `sudo` privileges are required to run Docker commands. It is unnecessary on macOS.
:::


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
