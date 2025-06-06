---
title: "Understanding Neurons"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Understanding Neurons

The design of Bittensor subnets is inspired by the structure of a simple neural network, with each **neuron** being either a miner or validator.

:::tip Neuron requirements 
See [minimum compute requirements](https://github.com/opentensor/bittensor-subnet-template/blob/main/min_compute.yml) for compute, memory, bandwidth and storage requirements for neurons.
::: 


## Neuron Architecture Overview

Neurons in a subnet operate within a server-client architecture:

- Axon (Server): Miners deploy Axon servers to receive and process data from validators.
- Dendrite (Client): Validators use Dendrite clients to transmit data to miners.
- Synapse (Data Object): Encapsulates and structures data exchanged between neurons.

Additionally, the [Metagraph serves as a global directory for managing subnet nodes, while the Subtensor connects neurons to the blockchain.


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

Similarly, in your subnet miner code you must use the `axon` API to spawn an API server to receive incoming Synapse objects from the subnet validators. 

### Dendrite

Axon is a **server** instance. Hence, a subnet validator will instantiate a `dendrite` **client** on itself to transmit information to axons that are on the subnet miners. For example, when a subnet validator runs the below code fragment:

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

For example, in the [Text Prompting Subnet](https://github.com/macrocosm-os/prompting/blob/414abbb72835c46ccc5c652e1b1420c0c2be5c03/prompting/protocol.py#L27), the subnet validator creates a Synapse object, called PromptingSynapse, with three fields. The fields `roles` and `messages` are set by the subnet validator during the initialization of this Prompting data object, and they cannot be changed after that. A third field, `completion`, is mutable. When a subnet miner receives this Prompting object from the subnet validator, the subnet miner updates this `completion` field. The subnet validator then reads this updated `completion` field. 

## The Neuron Metagraph

A metagraph is a data structure that contains comprehensive information about current state of the subnet. When you inspect the metagraph of a subnet, you will find detailed information on all the nodes (neurons) in the subnet. A subnet validator should first sync with a subnet's metagraph to know all the subnet miners that are in the subnet. The metagraph can be inspected without participating in a subnet.