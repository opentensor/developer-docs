---
sidebar_label: set_weights
title: prompting.baseminer.set_weights
---

#### set\_weights

```python
def set_weights(subtensor: "bt.subtensor",
                netuid: int,
                uid: int,
                wallet: "bt.wallet",
                wandb_on=False) -> None
```

Sets the miner&#x27;s weights on the Bittensor network.

This function assigns a weight of 1 to the current miner (identified by its UID) and
a weight of 0 to all other peers in the network. The weights determine the trust level
the miner assigns to other nodes on the network.

The function performs the following steps:
1. Queries the Bittensor network for the total number of peers.
2. Sets a weight vector with a value of 1 for the current miner and 0 for all other peers.
3. Updates these weights on the Bittensor network using the `set_weights` method of the subtensor.
4. Optionally logs the weight-setting operation to Weights &amp; Biases (wandb) for monitoring.

**Arguments**:

- `subtensor` _bt.subtensor_ - The Bittensor object managing the blockchain connection.
- `netuid` _int_ - The unique identifier for the chain subnet.
- `uid` _int_ - The unique identifier for the miner on the network.
- `wallet` _bt.wallet_ - The miner&#x27;s wallet holding cryptographic information.
- `wandb_on` _bool, optional_ - Flag to determine if logging to Weights &amp; Biases is enabled. Defaults to False.
  

**Raises**:

- `Exception` - If there&#x27;s an error while setting weights, the exception is logged for diagnosis.

