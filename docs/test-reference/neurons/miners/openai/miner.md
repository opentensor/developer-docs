---
sidebar_label: miner
title: neurons.miners.openai.miner
---

## OpenAIMiner Objects

```python
class OpenAIMiner(Miner)
```

#### add\_args

```python
@classmethod
def add_args(cls, parser: argparse.ArgumentParser)
```

Adds OpenAI-specific arguments to the command line parser.

This class method introduces command-line arguments that pertain specifically to the
OpenAI GPT model&#x27;s completion settings, such as temperature, max tokens, and model name.
Developers extending or utilizing this method can easily customize the miner&#x27;s operation
by providing these arguments when starting the miner.

**Arguments**:

  parser (argparse.ArgumentParser):
  The command line argument parser to which the OpenAI-specific arguments should be added.
  

**Notes**:

  Consider adding or adjusting arguments here if introducing new features or parameters
  related to OpenAI&#x27;s model completion.

#### config

```python
def config() -> "bittensor.Config"
```

Provides the configuration for the OpenAIMiner.

This method returns a configuration object specific to the OpenAIMiner, containing settings
and parameters related to the OpenAI model and its interaction parameters. The configuration
ensures the miner&#x27;s optimal operation with the OpenAI model and can be customized by adjusting
the command-line arguments introduced in the `add_args` method.

**Returns**:

  bittensor.Config:
  A configuration object specific to the OpenAIMiner, detailing the OpenAI model settings
  and operational parameters.
  

**Notes**:

  If introducing new settings or parameters for OpenAI or the miner&#x27;s operation, ensure they
  are properly initialized and returned in this configuration method.

#### prompt

```python
def prompt(synapse: Prompting) -> Prompting
```

Overrides the Miner&#x27;s abstract `prompt` method to process incoming requests using OpenAI.

This method makes use of the OpenAI GPT model to generate completions for the incoming requests.
When implementing or extending this method, developers should ensure that the `synapse` object
contains both `roles` and `messages` fields. The `roles` field describes the type of each message
(e.g., system, user), while the `messages` field contains the actual content of each message.

**Arguments**:

  synapse (Prompting):
  The incoming request object. Must contain:
  - `roles`: List of roles for each message, e.g., [&quot;system&quot;, &quot;user&quot;].
  Describes the origin or type of each message.
  - `messages`: List of actual message content corresponding to each role.
  The combination of roles and messages forms a conversation context for the model.
  

**Returns**:

  Prompting:
  The response object containing the model&#x27;s generated completion. This is essentially
  the filled synapse request object with an added `completion` field which contains the
  model&#x27;s response.
  

**Notes**:

  Developers extending this method should ensure proper handling of both `roles` and `messages`
  from the `synapse` object to maintain the conversation context. Additionally, consider adjusting
  OpenAI-specific parameters (e.g., temperature, max_tokens) in the config to tailor the response
  generation process.

