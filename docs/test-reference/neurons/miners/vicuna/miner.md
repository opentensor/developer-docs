---
sidebar_label: miner
title: neurons.miners.vicuna.miner
---

## VicunaMiner Objects

```python
class VicunaMiner(Miner)
```

A Bittensor Miner subclass specific to the Vicuna model.

This class is designed for the Vicuna language model and handles input/output processing
specific to the model&#x27;s requirements. It extends the Miner class of Bittensor, which
is a general blueprint for all kinds of miners or nodes.

**Arguments**:

- `config` _:obj:`argparse.ArgumentParser`, optional_ - An argparse.ArgumentParser instance. If not provided,
  the default config will be used. Defaults to None.
  

**Attributes**:

- `tokenizer` _AutoTokenizer_ - Tokenizer corresponding to the loaded model.
- `model` _AutoModelForCausalLM_ - The causal language model for text generation.

#### config

```python
def config() -> "bt.config"
```

Configures the Vicuna Miner with relevant arguments.

**Returns**:

- `bt.Config` - A configuration object with parsed arguments.

#### add\_args

```python
@classmethod
def add_args(cls, parser: argparse.ArgumentParser)
```

Adds specific arguments to the argparse parser for Vicuna Miner configuration.

**Arguments**:

- `parser` _argparse.ArgumentParser_ - The argparse parser to which arguments are added.

#### \_\_init\_\_

```python
def __init__(*args, **kwargs)
```

Initializes the VicunaMiner, loading the tokenizer and model based on the given configuration.

**Arguments**:

- `*args` - Variable length argument list.
- `**kwargs` - Arbitrary keyword arguments.

#### prompt

```python
def prompt(synapse: Prompting) -> Prompting
```

Given a Synapse object with message history, prompts the Vicuna model for a completion.

**Arguments**:

- `synapse` _Prompting_ - A Synapse object encapsulating roles and messages.
  

**Returns**:

- `Prompting` - A Synapse object with the generated completion added.

