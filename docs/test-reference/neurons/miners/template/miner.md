---
sidebar_label: miner
title: neurons.miners.template.miner
---

Bittensor Miner Template

This is a basic template for creating a Bittensor miner. This miner listens to incoming requests 
from the Bittensor network and responds with a static message: &quot;I am a chatbot&quot;.

Developers can extend this template by introducing more sophisticated response generation 
mechanisms, custom configurations, and additional functionalities.

## TemplateMiner Objects

```python
class TemplateMiner(Miner)
```

#### config

```python
def config() -> "bt.Config"
```

Returns the configuration object specific to this miner.

Implement and extend this method to provide custom configurations for the miner.
Currently, it sets up a basic configuration parser.

**Returns**:

- `bt.Config` - A configuration object with the miner&#x27;s operational parameters.

#### add\_args

```python
def add_args(cls, parser: argparse.ArgumentParser)
```

Adds custom arguments to the command line parser.

Developers can introduce additional command-line arguments specific to the miner&#x27;s
functionality in this method. These arguments can then be used to configure the miner&#x27;s operation.

**Arguments**:

  parser (argparse.ArgumentParser):
  The command line argument parser to which custom arguments should be added.

#### prompt

```python
def prompt(synapse: Prompting) -> Prompting
```

Handles incoming requests and provides a static response.

This method processes the incoming request encapsulated in the `synapse` object and
returns a static response: &quot;I am a chatbot&quot;. Developers can extend this method to
provide dynamic or more sophisticated responses. See bittensor&#x27;s implentation of Synapse
for more information.

**Arguments**:

- `synapse` _Prompting_ - The incoming request object.
  

**Returns**:

- `Prompting` - The response object with the static message.

