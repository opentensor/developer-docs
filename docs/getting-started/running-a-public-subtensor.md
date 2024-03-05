---
title: "Running a Public Subtensor"
---
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Running a Public Subtensor

You can run a public subtensor node and synchronize with the Bittensor network. You can run this subtensor node as either a **lite node** or as an **archive node**, and connect and sync with either the Bittensor mainchain or the testchain. This document describes how to run a public subtensor node either by compiling the subtensor source code into a binary and executing this binary, or by using a Docker container.

## Lite node vs archive node

A public subtensor node refers to a computer that contains the Bittensor blockchain database. A **lite node** or an **archive node** is a type of public subtensor node. 

:::tip a subtensor node is not a neuron
A subtensor node is different from a Bittensor neuron, i.e., a subnet validator node or a subnet miner node. A subnet validator or a subnet miner node exists in a subnet, and it does not hold blockchain database.  
:::

Normally, a node in Bittensor blockchain must always be synchronized to the latest blockchain state. Such a blockchain node accomplishes this by holding a copy of the entire Bittensor blockchain database, from the genesis block all the way to the current block. However, holding an entire copy of blockchain ledger state, which is continously increasing in size, can be expensive. Hence, two types of nodes, a lite node and an archive node, are defined, as below:

- A **lite node** is configured to synchronize only with the current block of the Bittensor blockchain, and not the entire blockchain. The purpose of a lite node is to serve, with minimal hardware and storage requirements, as a local entry point into the Bittensor mainchain or testchain. A lite node's storage is always refreshed with only the current block from the Bittensor blockchain. 
  :::tip a lite node for a subnet miner
  A subnet miner should use a local lite node to communicate with the Bittensor blockchain. 
  :::

- On the other hand, an **archive node** is configured to synchronize with Bittensor blockchain data older than 300 blocks, though you can use it to access data from any block. An archive node stores all the Bittensor blockchain blocks from genesis up to the 300th most recent block. If you want to query for Bittensor blockchain data that is older than 300 blocks, you should use an archive node. 
  :::tip a lite node for a subnet miner
  Applications such as Bittensor blockchain explorer, for example, [Taostats](https://taostats.io/) that require access to historical blockchain data use an archive node. 
  :::


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

## System requirements

To run a public subtensor, make sure that your computer satisfies the following system requirements: 

- Currently only x86_64 Linux architecture is supported. 
- Subtensor requires approximately ~286 MiB to run.
- Only Linux OS and macOS are supported.

### Linux x86_64

Requirements:

- Linux kernel 2.6.32+.
- glibc 2.11+.

### macOS x86_64

Requirements:

- macOS 10.7+

## Network requirements and port settings

After you install the subtensor as per the below instructions, make sure that you open network ports on your subtensor node. This will allow other peer subtensor nodes to connect to your subtensor node. 

- Your subtensor node must have access to the public internet.
- Your subtensor node runs in an IPv4 network.

### Port settings

Make sure that your subtensor node listens on the following ports:

- `9944` - Websocket. This port is used by Bittensor. This port only accepts connections from ``localhost``. Make sure this port is firewalled **off** from the public internet domain.
- `9933` - RPC. This port should be opened but it is not used.
- `30333` - p2p socket. This port should accept connections from other subtensor nodes on the internet. Make sure your firewall **allows** incoming traffic to this port.
- We assume that your default outgoing traffic policy is `ACCEPT`. If not, make sure that outbound traffic on port 30333 is allowed.

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

