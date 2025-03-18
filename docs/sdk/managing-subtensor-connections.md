---
title: "Managing Subtensor Connections"
---

# Managing Subtensor Connections

Every time the Bittensor Python SDK's `Subtensor` or `AsyncSubtensor` class is instantiated, it creates a new websocket connection to Subtensor, Bittensor's Blockchain. Your code should ensure that these websocket connections are handled efficiently and closed when no longer in use by your code. 


If not explicitly closed, connections *should* be terminated by Python's garbage collector, but threading can make this unreliable. (see [this comment](https://github.com/python-websockets/websockets/pull/1601#issuecomment-2705871026).

Therefore, the best solution is to always use one of the following techniques to close your instance's connection:

1. Use the `close()` method to manually terminate the instance and connection.
1. **(Preferred)** Use the `with` keyword to instantiate the Subtensor object within a Python [context manager](https://docs.python.org/3/reference/datamodel.html#context-managers). This ensures the websocket connection within the Subtensor instance is terminated gracefully when the context ends.

:::tip
You don't need to both a `with`-statement context manager and `.close()`, just one or the other.
:::

## What not to do


```python
import bittensor as bt
sub = bt.subtensor("finney")
# calls to subtensor

# no close
# potential resource leak:
# the connection is open until/unless garbage collected
```

 
## With `close()`

### Sync
```python
import bittensor as bt
sub = bt.subtensor("finney")
# subtensor calls
sub.close()
# instance and connection are terminated.
```

### Async
```python
import bittensor as bt
sub = bt.AsyncSubtensor()
await sub.initialize()
# calls to subtensor
await sub.close()
# instance and connection are terminated.
```



## With `with`

### Sync
```python
import bittensor as bt
with bt.subtensor("finney") as sub:
    # all calls to subtensor instance inside this block


# instance and connection are terminated at the end of the context scope
```
### Async

```python
import bittensor as bt
async with bt.AsyncSubtensor() as sub:
    # calls to subtensor

# instance and connection are terminated at the end of the context scope
```
or
```python
import bittensor as bt
sub = bt.AsyncSubtensor()
async with sub:
    # calls to subtensor

# instance and connection are terminated at the end of the context scope
```   

