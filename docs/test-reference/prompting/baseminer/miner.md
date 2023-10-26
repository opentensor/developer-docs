---
sidebar_label: miner
title: prompting.baseminer.miner
---

## Miner Objects

```python
class Miner(ABC)
```

The Miner class is an abstract base class that defines the structure for Bittensor miners.
Subclasses should implement the `prompt` method to define their own response logic.
The `blacklist` and `priority` methods can also be overridden to provide custom logic.

#### \_\_init\_\_

```python
def __init__(config=None, axon=None, wallet=None, subtensor=None)
```

Initializes the Miner with the given configurations and Bittensor objects.

**Arguments**:

- `config` - Configuration object that holds settings for the miner.
- `axon` - Bittensor Axon object which handles incoming requests.
- `wallet` - Bittensor Wallet object which holds cryptographic keys.
- `subtensor` - Bittensor Subtensor object which manages the blockchain connection.

#### config

```python
@abstractmethod
def config() -> "bt.Config"
```

Abstract method for configuring the Miner.

Subclasses should implement this method to return a configuration object that dictates
various settings and parameters for the miner&#x27;s operation. The returned configuration
object will typically contain parameters like network settings, logging preferences,
and other operational parameters.

**Returns**:

- `bt.Config` - A configuration object specific to the miner subclass.

#### add\_args

```python
@classmethod
@abstractmethod
def add_args(cls, parser: argparse.ArgumentParser)
```

Abstract class method to add miner-specific arguments to a command line parser.

This method should be implemented by subclasses to introduce any command-line
arguments that the miner might require for operation.

**Arguments**:

- `parser` _argparse.ArgumentParser_ - The command line argument parser to which
  the miner-specific arguments should be added.

#### prompt

```python
@abstractmethod
def prompt(synapse: Prompting) -> Prompting
```

Abstract method to handle and respond to incoming requests to the miner.

Subclasses should implement this method to define their custom logic for processing and
responding to requests. This method is designed to be overridden, and its behavior will
be dependent on the specific implementation provided in the subclass.

**Arguments**:

- `synapse` _Prompting_ - The incoming request object encapsulating the details
  of the request. This must contain `messages` and `roles` as fields.
  

**Returns**:

- `Prompting` - The response object that should be sent back in reply to the
  incoming request. This is essentially the filled synapse request object.
  

**Example**:

  class CustomMiner(Miner):
  def prompt(self, synapse: Prompting) -&gt; Prompting:
  # Custom logic to process and respond to the request.
  synapse.completion = &quot;The meaning of life is 42.&quot;
  return synapse

#### blacklist

```python
def blacklist(synapse: Prompting) -> Tuple[bool, str]
```

Default blacklist logic

Define how miners should blacklist requests. This Function
Runs before the synapse data has been deserialized (i.e. before synapse.data is available).
The synapse is instead contructed via the headers of the request. It is important to blacklist
requests before they are deserialized to avoid wasting resources on requests that will be ignored.

Below: Check that the hotkey is a registered entity in the metagraph.

**Arguments**:

  synapse (:obj:`bittensor.synapse.Synapse`, `required`):
  synapse object containing the request headers.

**Returns**:

  blacklisted (:obj:`bool`):

#### priority

```python
def priority(synapse: Prompting) -> float
```

Define how miners should prioritize requests.

Miners may recieve messages from multiple entities at once. This function
determines which request should be processed first. Higher values indicate
that the request should be processed first. Lower values indicate that the
request should be processed later.

Below: simple logic, prioritize requests from entities with more stake.

**Arguments**:

  synapse (:obj:`bittensor.synapse.Synapse`, `required`):
  synapse object containing the request headers.

**Returns**:

  priority (:obj:`float`):

#### run

```python
def run()
```

Runs the miner logic. This method starts the miner&#x27;s operations, including
listening for incoming requests and periodically updating the miner&#x27;s knowledge
of the network graph.

#### run\_in\_background\_thread

```python
def run_in_background_thread()
```

Starts the miner&#x27;s operations in a separate background thread.
This is useful for non-blocking operations.

#### stop\_run\_thread

```python
def stop_run_thread()
```

Stops the miner&#x27;s operations that are running in the background thread.

#### \_\_enter\_\_

```python
def __enter__()
```

Starts the miner&#x27;s operations in a background thread upon entering the context.
This method facilitates the use of the miner in a &#x27;with&#x27; statement.

#### \_\_exit\_\_

```python
def __exit__(exc_type, exc_value, traceback)
```

Stops the miner&#x27;s background operations upon exiting the context.
This method facilitates the use of the miner in a &#x27;with&#x27; statement.

**Arguments**:

- `exc_type` - The type of the exception that caused the context to be exited.
  None if the context was exited without an exception.
- `exc_value` - The instance of the exception that caused the context to be exited.
  None if the context was exited without an exception.
- `traceback` - A traceback object encoding the stack trace.
  None if the context was exited without an exception.

