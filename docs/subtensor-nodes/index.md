---
title: "Subtensor Node Basics"
---
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Subtensor Node Basics

You can run a public subtensor node and synchronize with the Bittensor network. This public subtensor node can be either a **lite node** or an **archive node**. You can connect and sync this public subtensor node with either the Bittensor mainchain or the testchain. This document describes how to run a public subtensor node either by compiling the subtensor source code into a binary and executing this binary, or by using a Docker container.

## A public subtensor vs a local blockchain

Note that running a public subtensor node is not the same as running a local blockchain. See the below diagram. When you run a local blockchain (section **A** of the below diagram), it is for the purposes of developing and testing your subnet incentive mechanism. This local blockchain is not public and hence it is isolated from any Bittensor network. For instructions on running a local blockchain see [Running on Staging](https://github.com/opentensor/bittensor-subnet-template/blob/main/docs/running_on_staging.md).

:::tip Running a local blockchain is the same as running on staging
:::

<center>
<ThemedImage
alt="Local blockchain vs public subtensor"
sources={{
    light: useBaseUrl('/img/docs/local-subtensor.svg'),
    dark: useBaseUrl('/img/docs/dark-local-subtensor.svg'),
  }}
style={{width: 550}}
/>
</center>

## Lite node vs archive node

A public subtensor node refers to an internet-connected computer that is synchronized with the Bittensor blockchain database. A **lite node** or an **archive node** is a type of public subtensor node. 

:::tip a subtensor node is not a neuron
A subtensor node is different from a Bittensor neuron. A Bittensor neuron is either a subnet validator node or a subnet miner node&mdash;it exists in a subnet, and it does not contain blockchain database. 
:::

Normally, a node in Bittensor blockchain must always be synchronized to the latest blockchain ledger state. Such a blockchain node accomplishes this by holding a copy of the entire Bittensor blockchain database, from the genesis block all the way to the current block. However, holding an entire copy of blockchain ledger state, which is continously increasing in size, can be expensive. Hence, two types of nodes, a lite node and an archive node, are defined for subtensor, as below:

### Lite node

A **lite node** is configured to perform warp synchronization, which primarily syncs with the blocks that have been finalized, and not the entire blockchain. 

:::tip flags for lite node
Use `--sync=warp` when starting a subtensor node. See [Using Source Code](./using-source.md#run-the-subtensor-node).
:::

The lite node warps (jumps) directly to the latest finalized block, downloading the complete blockchain state at that point. The purpose of a lite node is to get up and running quickly and serve, with minimal storage requirements, as a local entry point into the Bittensor mainchain or testchain. 

  **Verification of chain history**: To ensure blockchain validity, a lite node downloads and verifies finality proofs all the way back to the genesis block (the first block). These proofs confirm the legitimacy of the chain's history without processing every single block.

  **Background fill**: The lite node, while actively participating in the network, still downloads and processes historical blocks in the background to build the complete blockchain database. This download happens when the node is less busy.
 
  :::tip lite node for a subnet miner
  A subnet miner should use a local lite node to communicate with the Bittensor blockchain. 
  :::

### Archive node

On the other hand, an **archive node** downloads and validates  all the Bittensor blockchain blocks from genesis up to the most recent block.

:::tip flags for archive node
Use `--sync=full` and `--pruning archive` when starting a subtensor node. See [Using Source Code](./using-source.md#run-the-subtensor-node).
:::

The full synchronization performed by an archive node can be significantly slower than warp sync (done by a lite node) as it involves processing every block. Also, archive nodes require substantially more storage space due to the complete historical data.

  :::tip archive node for a blockchain explorer
  Applications such as Bittensor blockchain explorer, for example, [Taostats](https://taostats.io/) that require access to historical blockchain data use an archive node. 
  :::



## Query archived data 

We recommend that you use archive public subtensor node to retrieve blockchain data older than the previous 300 blocks. See the below example:

For example, to sync with a specific block number `12345` that is older than the 300 blocks:

```python
import bittensor as bt
meta = bt.subtensor('archive').metagraph(netuid=18, block=12345)
print(meta)
```

:::tip See also
Also see the [`metagraph` API reference](https://docs.bittensor.com/python-api/html/autoapi/bittensor/metagraph/index.html#bittensor.metagraph.metagraph.sync).
:::


