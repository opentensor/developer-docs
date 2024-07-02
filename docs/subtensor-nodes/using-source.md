---
title: "Using Source Code"
---
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Using Source Code

To install and run a subtensor node by compiling the source code, follow the below steps.

:::danger Not tested on cloud 
We have not tested subtensor node installation scripts on any cloud service. In addition, if you are using Runpod cloud service, then note that this service is already [containerized](https://docs.runpod.io/pods/overview). Hence, the only option available to you for Runpod is to install a subtensor node by compiling from source, as described below. **Note that we have not tested any subtensor installation steps on Runpod.** 
:::

## Install basic packages

Install the basic requirements by running the below commands on a Linux terminal.

```bash title="Linux"
sudo apt-get update 
sudo apt install -y build-essential clang curl git make libssl-dev llvm libudev-dev protobuf-compiler
```

Install the basic requirements by running the below command on macOS.

```bash title="macOS"
brew install protobuf
```

## Install Rust

Next, install Rust and update the environment by running the following commands:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source ~/.cargo/env
```

Next, install Rust toolchain:

```bash
rustup default stable
rustup update
rustup target add wasm32-unknown-unknown
rustup toolchain install nightly
rustup target add --toolchain nightly wasm32-unknown-unknown
```

## Compile subtensor code 

Next, to compile the subtensor source code, follow the below steps:

1. Clone the Subtensor repository:

```bash
git clone https://github.com/opentensor/subtensor.git
```
2. Change to the Subtensor directory:

```bash
cd subtensor
```
3. Ensure you are on the `main` branch. If not, switch to it:

```bash
git checkout main
```

4. Remove any previous chain state:

```bash
rm -rf /tmp/blockchain 
```

5. Install Subtensor by compiling with Cargo:

```bash
cargo build --profile production --features=runtime-benchmarks
```

## Run the subtensor node

You can now run the public subtensor node either as a lite node or as an archive node. See below:

### Lite node on mainchain 

To run a lite node connected to the mainchain, execute the below command (note the `--sync=warp` flag which runs the subtensor node in lite mode):

```bash title="With --sync=warp setting, for lite node"
./target/production/node-subtensor --chain raw_spec.json --base-path /tmp/blockchain --sync=warp --port 30333 --max-runtime-instances 32 --rpc-max-response-size 2048 --rpc-cors all --rpc-port 9944 --bootnodes /ip4/13.58.175.193/tcp/30333/p2p/12D3KooWDe7g2JbNETiKypcKT1KsCEZJbTzEHCn8hpd4PHZ6pdz5 --no-mdns --in-peers 8000 --out-peers 8000 --prometheus-external --rpc-external
``` 

### Archive node on mainchain

To run an archive node connected to the mainchain, execute the below command (note the `--sync=full` which syncs the node to the full chain and `--pruning archive` flags, which disables the node's automatic pruning of older historical data):

```bash title="With --sync=full and --pruning archive setting, for archive node"
./target/production/node-subtensor --chain raw_spec.json --base-path /tmp/blockchain --sync=full --pruning archive --port 30333 --max-runtime-instances 32 --rpc-max-response-size 2048 --rpc-cors all --rpc-port 9944 --bootnodes /ip4/13.58.175.193/tcp/30333/p2p/12D3KooWDe7g2JbNETiKypcKT1KsCEZJbTzEHCn8hpd4PHZ6pdz5 --no-mdns --in-peers 8000 --out-peers 8000 --prometheus-external --rpc-external
``` 

### Lite node on testchain 

To run a lite node connected to the testchain, execute the below command:

```bash title="With bootnodes set to testnet and --sync=warp setting, for lite node."
./target/production/node-subtensor --chain raw_testspec.json --base-path /tmp/blockchain --sync=warp --port 30333 --max-runtime-instances 32 --rpc-max-response-size 2048 --rpc-cors all --rpc-port 9944 --bootnodes /dns/bootnode.test.finney.opentensor.ai/tcp/30333/p2p/12D3KooWPM4mLcKJGtyVtkggqdG84zWrd7Rij6PGQDoijh1X86Vr --no-mdns --in-peers 8000 --out-peers 8000 --prometheus-external --rpc-external
``` 

### Archive node on testchain

To run an archive node connected to the testchain, execute the below command:

```bash title="With bootnodes set to testnet and --sync=full and --pruning archive setting, for archive node"
./target/production/node-subtensor --chain raw_testspec.json --base-path /tmp/blockchain --sync=full --pruning archive --port 30333 --max-runtime-instances 32 --rpc-max-response-size 2048 --rpc-cors all --rpc-port 9944 --bootnodes /dns/bootnode.test.finney.opentensor.ai/tcp/30333/p2p/12D3KooWPM4mLcKJGtyVtkggqdG84zWrd7Rij6PGQDoijh1X86Vr --no-mdns --in-peers 8000 --out-peers 8000 --prometheus-external --rpc-external
``` 
