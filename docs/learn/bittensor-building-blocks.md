---
title: "Bittensor Building Blocks"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Bittensor Building Blocks

The Bittensor API provides basic building blocks you can use to develop your incentive mechanism. This section presents:
- An overview of a subnet.
- Introduction to the Bittensor building blocks. 

## Subnet

A subnet closely follows how a classical feedforward neural network is connected. Consider the below diagram showing a comparision of a classical neural network with a subnet.

<ThemedImage
alt="Incentive Mechanism Big Picture"
sources={{
    light: useBaseUrl('/img/docs/building-blocks-first.svg'),
    dark: useBaseUrl('/img/docs/dark-building-blocks-first.svg'),
  }}
/>

-  A node in a neural network is represented in a Bittensor subnet as either a subnet validator or a subnet miner. A node is also referred as a **neuron** in a subnet terminology. A neuron is the basic computing node in a Bittensor subnet. 
:::tip Node requirements 
For example, see [Minimum compute requirements](https://github.com/opentensor/bittensor-subnet-template/blob/main/min_compute.yml) for compute, memory, bandwidth and storage requirements for a subnet node, i.e., for a subnet neuron.
::: 
- The classical neural network graph (shown on the left) is bipartite, i.e., a node in the input layer is connected only to a node in the next layer (hidden layer). A subnet graph (shown on the right) is also bipartite. Hence:
  - A subnet validator in a subnet is only connected to a subnet miner. 
  - No two subnet validators are connected. Similarly, no two subnet miners are connected. 
- In the classical neural network, the inputs from the external world are connected only to the input layer, and the hidden nodes are isolated from the external world (hence, "hidden"). Similarly, in a Bittensor subnet:
  - Inputs from the external world can connect only to the subnet validators. 
  - Only subnet validators are allowed to connect to subnet miners, hence isolating subnet miners from the external world. 
- **Many-to-many bidirectional**: Notice that in the classical neural network shown on the right, the connection from input layer to the hidden layer is only feedforward. However, in a Bittensor subnet, a subnet miner can directly communicate to the subnet validator. This bi-drectional communication between a subnet validator and a subnet miner forms the core of a protocol in an incentive mechanism. This closely resembles the architecture of a [Restricted Botlzmann Machine (RBM)](https://en.wikipedia.org/wiki/Restricted_Boltzmann_machine).

## Neuron-to-neuron communication 

Neurons exchange information by:
- Encapsulating the information in a Synapse object.
- Instantiating server (Axon) and client (dendrite) network elements and exchanging Synapse objects using this server-client (Axon-dendrite) protocol. See the below diagram. 

<center>
<ThemedImage
alt="Incentive Mechanism Big Picture"
sources={{
    light: useBaseUrl('/img/docs/second-building-blocks.svg'),
    dark: useBaseUrl('/img/docs/dark-second-building-blocks.svg'),
  }}
/>
</center>

### Axon

The `axon` module in Bittensor API uses FastAPI library to create and run API servers. For example, when a subnet miner calls,
```python
axon = bt.axon(wallet=self.wallet, config=self.config)
```
then an API server with the name `axon` is spawned on the subnet miner node. This `axon` API server receives incoming Synapse objects from subnet validators, i.e., the `axon` starts to serve on behalf of the subnet miner.

Similarly in your subnet miner code you must use the `axon` API to spawn an API server to receive incoming Synapse objects from the subnet validators. 

### Dendrite

Axon is a **server** instance. Hence a subnet validator will instantiate a `dendrite` **client** on itself to transmit information to axons that are on the subnet miners. For example, when a subnet validator runs the below code fragment:

```python
    responses: List[bt.Synapse] = await self.dendrite(
        axons=axons,
        synapse=synapse,
        timeout=timeout,
    )
```

then the subnet validator:
- Has instantiated a `dendrite` client on itself.
- Transmitted `synapse` objects to a set of `axons` (that are attached to subnet miners).
- Waits until `timeout` expires.

### Synapse

Synapse is a data object. Subnet validators and subnet miners use Synapse data objects as the main vehicle to exchange information. The Synapse class inherits from the `BaseModel` of the Pydantic data validation library. 

For example, in the [Text Prompting Subnet](https://github.com/opentensor/prompting/blob/6c493cbce0c621e28ded203d947ce47a9ae062ea/prompting/protocol.py#L27), the subnet validator creates a Synapse object, called Prompting, with three fields. The fields `roles` and `messages` are set by the subnet validator during the initialization of this Prompting data object and they cannot be changed after that. A third field, `completion`, is mutable. When a subnet miner receives this Prompting object from the subnet validator, the subnet miner updates this `completion` field. The subnet validator then reads this updated `completion` field. 

## Metagraph

A metagraph is a data structure that contains comprehensive information about current state of the subnet. When you inspect the metagraph of a subnet, you will find detailed information on all the nodes (neurons) in the subnet. A subnet validator should first sync with a subnet's metagraph to know all the subnet miners that are in the subnet. The metagraph can be inspected without participating in a subnet.

:::tip Example 
For example, see [Initialize the metagraph](../subnets/code-walkthrough-text-prompting#initialize-the-metagraph).
:::  

## Subtensor

A subtensor is a Bittensor object that handles the interactions with the blockchain, whether the chain is local or testchain or mainchain. 
