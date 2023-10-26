---
sidebar_label: run
title: prompting.baseminer.run
---

#### run

```python
def run(self)
```

Initiates and manages the main loop for the miner on the Bittensor network.

This function performs the following primary tasks:
1. Optionally registers the miner&#x27;s wallet with the network.
2. Attaches the miner&#x27;s forward, blacklist, and priority functions to its axon.
3. Starts the miner&#x27;s axon, making it active on the network.
4. Regularly updates the metagraph with the latest network state.
5. Optionally sets weights on the network, defining how much trust to assign to other nodes.
6. Handles graceful shutdown on keyboard interrupts and logs unforeseen errors.

The miner continues its operations until `should_exit` is set to True or an external interruption occurs.
During each epoch of its operation, the miner waits for new blocks on the Bittensor network, updates its
knowledge of the network (metagraph), and sets its weights. This process ensures the miner remains active
and up-to-date with the network&#x27;s latest state.

**Notes**:

  - The function leverages the global configurations set during the initialization of the miner.
  - The miner&#x27;s axon serves as its interface to the Bittensor network, handling incoming and outgoing requests.
  

**Raises**:

- `KeyboardInterrupt` - If the miner is stopped by a manual interruption.
- `Exception` - For unforeseen errors during the miner&#x27;s operation, which are logged for diagnosis.

