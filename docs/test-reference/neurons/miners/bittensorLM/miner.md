---
sidebar_label: miner
title: neurons.miners.bittensorLM.miner
---

Bittensor CerebrasBTLMMiner Template

This template provides an implementation of a Bittensor miner that uses the Cerebras BTLM model 
for processing incoming requests from the Bittensor network. The model generates responses 
based on the context provided in the incoming requests.

Developers can utilize this template as a starting point to create custom miners using 
different models or to tweak the settings of the current model for optimal performance.

Ensure the required dependencies, such as Bittensor, DeepSpeed, and Transformers, are installed 
before running this script, found at neurons/miners/bittensorLM/requirements.txt.

## StopOnTokens Objects

```python
class StopOnTokens(StoppingCriteria)
```

Custom stopping criteria for the BTLM model.

This class defines a stopping criterion based on specific tokens. The model stops generating
once it encounters one of the specified stop tokens.

## CerebrasBTLMMiner Objects

```python
class CerebrasBTLMMiner(Miner)
```

Bittensor miner implementation using the Cerebras BTLM model.

This miner processes incoming requests from the Bittensor network and uses the Cerebras
BTLM model to generate appropriate responses based on the provided context.

#### config

```python
def config() -> "bt.Config"
```

Returns the configuration object specific to this miner. Creates an argument parser
and then adds the args to it that can be defined in `add_args()`

Developers can extend this method to provide custom configurations for the miner.

#### add\_args

```python
@classmethod
def add_args(cls, parser: argparse.ArgumentParser)
```

Adds BTLM-specific arguments to the command line parser.

This method introduces command-line arguments that pertain specifically to the
BTLM model&#x27;s generation settings, such as device, max length, and sampling method.

#### \_\_init\_\_

```python
def __init__(*args, **kwargs)
```

Initializes the miner and loads the BTLM model.

This method loads the BTLM model and tokenizer from the HuggingFace model hub and
sets up the model pipeline for generation. It also sets up the stopping criteria
for the model&#x27;s generation.

#### prompt

```python
def prompt(synapse: Prompting) -> Prompting
```

Processes incoming requests using the BTLM model.

This is a required method to implement and must take a `Prompting` synapse as input

This method constructs a conversation history from the incoming request and uses
the BTLM model to generate a response based on the provided context.

