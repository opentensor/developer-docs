---
sidebar_label: miner
title: neurons.miners.streaming_template.miner
---

Bittensor Miner Template

This is a basic template for creating a Bittensor miner. This miner listens to incoming requests 
from the Bittensor network and responds with a static message: &quot;I am a chatbot&quot;.

Developers can extend this template by introducing more sophisticated response generation 
mechanisms, custom configurations, and additional functionalities.

## StreamingTemplateMiner Objects

```python
class StreamingTemplateMiner(Miner)
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
def prompt(synapse: StreamPrompting) -> StreamPrompting
```

Generates a streaming response for the provided synapse.

This function serves as the main entry point for handling streaming prompts. It takes
the incoming synapse which contains messages to be processed and returns a streaming
response. The function uses the GPT-2 tokenizer and a simulated model to tokenize and decode
the incoming message, and then sends the response back to the client token by token.

**Arguments**:

- `synapse` _StreamPrompting_ - The incoming StreamPrompting instance containing the messages to be processed.
  

**Returns**:

- `StreamPrompting` - The streaming response object which can be used by other functions to
  stream back the response to the client.
  
  Usage:
  This function can be extended and customized based on specific requirements of the
  miner. Developers can swap out the tokenizer, model, or adjust how streaming responses
  are generated to suit their specific applications.

