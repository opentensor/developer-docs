---
sidebar_label: gating
title: prompting.validators.gating
---

## BaseGatingModel Objects

```python
class BaseGatingModel(torch.nn.Module, ABC)
```

This class is an abstract base class for the gating model. It defines the interface for the gating model.

#### add\_args

```python
@classmethod
def add_args(cls, parser: argparse.ArgumentParser)
```

Adds command line arguments to the parser that are used to configure the gating model.
The arguments added are:
- `--gating.model_name`: Name of the pre-trained transformer-based language model to use as the encoding layer
                         for the gating model. (default: &#x27;EleutherAI/gpt-neo-125m&#x27;)
- `--gating.num_uids`: Number of uids to gate on. (default: 4096)
- `--gating.learning_rate`: Learning rate for the gating model optimizer. (default: 0.01)
- `--gating.momentum`: Momentum for the gating model optimizer. (default: 0.9)

#### forward

```python
@abstractmethod
def forward(message: str) -> "torch.FloatTensor"
```

Forward pass through the gating model

#### backward

```python
@abstractmethod
def backward(scores: "torch.FloatTensor", rewards: "torch.FloatTensor")
```

Backward pass through the gating model

#### resync

```python
@abstractmethod
def resync(previous_metagraph: "bt.metagraph.Metagraph",
           metagraph: "bt.metagraph.Metagraph")
```

Resync the gating model with the latest state of the network

**Arguments**:

  previous_metagraph (:obj: bt.metagraph.Metagraph):
  Previous state of metagraph before updated resync
  metagraph (:obj: bt.metagraph.Metagraph):
  Latest state of the metagraph with updated uids and hotkeys

#### config

```python
@classmethod
def config(cls)
```

Returns a configuration object that contains the command line arguments for the gating model.

#### check\_config

```python
@classmethod
def check_config(cls, config: "bt.Config")
```

Validates the configuration object for the gating model.

## GatingModel Objects

```python
class GatingModel(BaseGatingModel)
```

This class is a PyTorch module that encapsulates the gating model functionality.

    - The backward method runs a backward pass through the model using the mean squared error between
    the normalized scores and the normalized rewards as the loss function.

    - The forward method runs a forward pass through the model, encoding the input message and generating scores
    for each uid in the network. The scores are returned as a tensor.

#### \_\_init\_\_

```python
def __init__(metagraph: "bt.metagraph.Metagraph",
             config: "bt.config" = None,
             model_name: str = None,
             num_uids: int = None)
```

Initializes the gating model.
- `metagraph`: A reference to the Bittensor metagraph object.
- `config`: Configuration object for the gating model. If `None`, the default configuration is used.
- `model_name`: Name of the pre-trained transformer-based language model to use as the encoding layer
                for the gating model. If `None`, the default model name specified in the configuration is used.
- `num_uids`: Number of uids to gate on. If `None`, the default number specified in the configuration is used.

#### backward

```python
def backward(scores: torch.FloatTensor, rewards: torch.FloatTensor)
```

Runs a backward pass through the model.

**Arguments**:

  scores (:obj:`torch.FloatTensor` of shape :obj:`(metagraph.n)`):
  Scores for each uids as output by the gating model.
  rewards (:obj:`torch.FloatTensor` of shape :obj:`(metagraph.n)`):
  Rewards for each uids as output by the reward model.

#### forward

```python
def forward(message: str) -> "torch.FloatTensor"
```

Runs a forward pass through the model.

**Arguments**:

  message (:obj:`str`):
  text message to be encoded.

**Returns**:

  scores (:obj:`torch.FloatTensor` of shape :obj:`(network_size)`):
  Scores for each uids as output by the gating model.

## SentenceEmbedGatingModel Objects

```python
class SentenceEmbedGatingModel(BaseGatingModel)
```

This class is a PyTorch module that encapsulates a custom version of a gating model based on sentence transformers.

    - The backward method runs a backward pass through the model using the mean squared error between the normalized
            scores and the normalized rewards as the loss function.
    - The forward method runs a forward pass through the model, encoding the input message and generating scores
            for each uid in the network. The scores are returned as a tensor.

#### \_\_init\_\_

```python
def __init__(metagraph: "bt.metagraph.Metagraph",
             config: "bt.config" = None,
             model_name: str = None,
             num_uids: int = None)
```

Initializes the gating model.
- `metagraph`: A reference to the Bittensor metagraph object.
- `config`: Configuration object for the gating model. If `None`, the default configuration is used.
- `model_name`: Name of the pre-trained transformer-based language model to use as the encoding layer for the
                gating model. If `None`, the default model name specified in the configuration is used.
- `num_uids`: Number of uids to gate on. If `None`, the default number specified in the configuration is used.

#### mean\_pooling

```python
def mean_pooling(model_output, attention_mask)
```

Applies mean pooling to the token embeddings generated by the model.

**Arguments**:

- `model_output` _torch.Tensor_ - Embedding model output, where the first element contains token embeddings.
- `attention_mask` _torch.Tensor_ - Attention mask to indicate valid tokens.

**Returns**:

- `torch.Tensor` - Mean-pooled representation of the token embeddings.

**Notes**:

  - The function calculates the mean-pooled representation using the attention mask for valid tokens.
  - Input_mask_expanded is created by expanding the attention mask to match the size of token embeddings.
  - The result is obtained by summing the element-wise multiplication of embeddings and input_mask_expanded,
  and dividing it by the sum of input_mask_expanded after clamping its values to a minimum of 1e-9.

#### forward

```python
def forward(message: str) -> "torch.FloatTensor"
```

Runs a forward pass through the model.

**Arguments**:

  message (:obj:`str`):
  text message to be encoded.

**Returns**:

  scores (:obj:`torch.FloatTensor` of shape :obj:`(network_size)`):
  Scores for each uids as output by the gating model.

#### backward

```python
def backward(scores: torch.FloatTensor, rewards: torch.FloatTensor)
```

Runs a backward pass through the model.

**Arguments**:

  scores (:obj:`torch.FloatTensor` of shape :obj:`(metagraph.n)`):
  Scores for each uids as output by the gating model.
  rewards (:obj:`torch.FloatTensor` of shape :obj:`(metagraph.n)`):
  Rewards for each uids as output by the reward model.

