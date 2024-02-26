---
title: "Running a Public Subtensor"
---
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Running a Public Subtensor

You can run a public subtensor node and synchronize with the Bittensor network. You can run this subtensor node as either a lite node or as an archive node, and connect and sync with either the Bittensor mainchain or the testchain. This document describes how to run a public subtensor node either by compiling the subtensor source code into a binary and executing this binary, or by using a Docker container.

## A public subtensor vs a local blockchain

Note that running a public subtensor node locally, as described above, is not the same as [running a local blockchain, also referred as running on staging](https://github.com/opentensor/bittensor-subnet-template/blob/main/docs/running_on_staging.md). When you run a local blockchain, it is for the purposes of developing and testing your subnet incentive mechanism. This local blockchain is not public and hence it is isolated from any Bittensor network. See the below diagram.

<center>
<ThemedImage
alt="Components of Incentive Mechanism"
sources={{
    light: useBaseUrl('/img/docs/local-subtensor.svg'),
    dark: useBaseUrl('/img/docs/dark-local-subtensor.svg'),
  }}
style={{width: 650}}
/>
</center>

## Query archived data 

After you install the public subtensor as described in the below sections, you can query for blockchain data older than previous 300 blocks via the archive node like this:

For example, to sync with a specific block number `12345` that is older than the 300 blocks:

```python
import bittensor as bt
meta = bt.subtensor('archive').metagraph(netuid=18, block=12345)
print(meta)
```

:::tip See also
Also see the [`metagraph` API reference](https://docs.bittensor.com/python-api/html/autoapi/bittensor/metagraph/index.html#bittensor.metagraph.metagraph.sync).
:::

## Method 1: By compiling the source code

### Install basic packages

Install the basic requirements by running the below command on a terminal.

```bash
sudo apt install build-essential git make clang libssl-dev llvm libudev-dev protobuf-compiler -y
```

### Install Rust

Next, install Rust and update the environment by running the following commands:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs > rustup-init.sh
```

Next,

```bash
chmod +x rustup-init.sh
```

Then,

```bash
./rustup-init.sh # You can select default options in the prompts you will be given
```

and finally,

```bash
source "$HOME/.cargo/env"
```

### Update rustup

Run the below command:

```bash
rustup default stable && \
 rustup update && \
 rustup update nightly && \
 rustup target add wasm32-unknown-unknown --toolchain nightly
```

### Compile 

Next, compile the subtensor source code. Follow the below steps:

Clone the subtensor repo:

```bash
git clone https://github.com/opentensor/subtensor.git
```

`cd` into the subtensor directory:

```bash
cd subtensor
```

Compile with `cargo`:

```bash
cargo build --release --features runtime-benchmarks
```

You can now run the public subtensor node either as a lite node or as an archive node. See below:

### Lite node on mainchain 

To run a lite node connected to the mainchain, execute the below command:

```bash
sudo ./scripts/run/subtensor.sh -e binary --network mainnet --node-type lite
``` 

### Archive node on mainchain

To run an archive node connected to the mainchain, execute the below command:

```bash
sudo ./scripts/run/subtensor.sh -e docker --network mainnet --node-type archive
``` 

### Lite node on testchain 

To run a lite node connected to the testchain, execute the below command:

```bash
sudo ./scripts/run/subtensor.sh -e binary --network testnet --node-type lite
``` 

### Archive node on testchain

To run an archive node connected to the testchain, execute the below command:

```bash
sudo ./scripts/run/subtensor.sh -e docker --network testnet --node-type archive
``` 

## Method 2: Using Docker

### Install git

`sudo apt install git`

### Install Docker

Follow Docker's [official installation guides](https://docs.docker.com/engine/install/).

### Clone the subtensor repo

Clone the subtensor repo:

```bash
git clone https://github.com/opentensor/subtensor.git
```

Then `cd` into the subtensor directory:

```bash
cd subtensor
```

:::tip Run Docker first
Before you proceed, make sure that Docker is running.
:::

### Lite node on mainchain

To run a lite node connected to the Bittensor mainchain, run the below command.

```bash
sudo ./scripts/run/subtensor.sh -e docker --network mainnet --node-type lite
```

### Archive node on mainchain

To run an archive node connected to the Bittensor mainchain, run the below command.

```bash
sudo ./scripts/run/subtensor.sh -e docker --network mainnet --node-type archive
```

### Lite node on testchain

To run a lite node connected to the Bittensor testchain, run the below command.

```bash
sudo ./scripts/run/subtensor.sh -e docker --network testnet --node-type lite
```

### Archive node on testchain

To run an archive node connected to the Bittensor testchain, run the below command.

```bash
sudo ./scripts/run/subtensor.sh -e docker --network testnet --node-type archive
```

## On cloud

:::danger Not tested on cloud 
We have not tested these installation scripts on any cloud service. In addition, if you are using Runpod cloud service, then note that this service is already [containerized](https://docs.runpod.io/pods/overview). Hence, the only option available to you is to [compile from source](#method-1-by-compiling-the-source-code) but these scripts have not been tested on Runpod. 
:::

