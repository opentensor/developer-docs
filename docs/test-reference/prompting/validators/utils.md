---
sidebar_label: utils
title: prompting.validators.utils
---

#### init\_wandb

```python
def init_wandb(self, reinit=False)
```

Starts a new wandb run.

#### reinit\_wandb

```python
def reinit_wandb(self)
```

Reinitializes wandb, rolling over the run.

#### checkpoint

```python
def checkpoint(self)
```

Checkpoints the training process.

#### resync\_metagraph

```python
def resync_metagraph(self: "validators.neuron.neuron")
```

Resyncs the metagraph and updates the hotkeys and moving averages based on the new metagraph.

#### resync\_linear\_layer

```python
def resync_linear_layer(linear_layer: torch.nn.Module,
                        previous_metagraph: "bt.metagraph.Metagraph",
                        metagraph: "bt.metagraph.Metagraph")
```

Resync the linear layer with the latest state of the network

**Arguments**:

- `linear_layer` _:obj: torch.nn.Module_ - Linear layer to be resynced
  previous_metagraph (:obj: bt.metagraph.Metagraph):
  Previous state of metagraph before updated resync
  metagraph (:obj: bt.metagraph.Metagraph):
  Latest state of the metagraph with updated uids and hotkeys

#### check\_uid\_availability

```python
def check_uid_availability(metagraph: "bt.metagraph.Metagraph", uid: int,
                           vpermit_tao_limit: int) -> bool
```

Check if uid is available. The UID should be available if it is serving and has less than vpermit_tao_limit stake

**Arguments**:

- `metagraph` _:obj: bt.metagraph.Metagraph_ - Metagraph object
- `uid` _int_ - uid to be checked
- `vpermit_tao_limit` _int_ - Validator permit tao limit

**Returns**:

- `bool` - True if uid is available, False otherwise

#### save\_state

```python
def save_state(self)
```

Save hotkeys, gating model, neuron model and moving average scores to filesystem.

#### load\_state

```python
def load_state(self)
```

Load hotkeys and moving average scores from filesystem.

