---
sidebar_label: reward
title: prompting.validators.reward.reward
---

## BaseRewardModel Objects

```python
class BaseRewardModel()
```

#### normalize\_rewards

```python
def normalize_rewards(rewards: torch.FloatTensor) -> torch.FloatTensor
```

This method normalizes the given rewards by updating the moving mean and variance statistics. The rewards are first standardized, and then scaled to the 0-1 range using a cumulative distribution function (CDF) to ensure they&#x27;re in a comparable range across different environments.

**Arguments**:

- `rewards` _torch.FloatTensor_ - The reward values to be normalized.
  

**Returns**:

- `torch.FloatTensor` - The normalized reward values.
  

**Notes**:

  - This function uses Welford&#x27;s online algorithm to update the mean and variance.
  - It standardizes the reward values using the updated mean and variance.
  - It then scales the standardized values to the 0-1 range using the error function (erf) as a CDF.

#### apply

```python
def apply(prompt: str, responses: List[bt.Synapse],
          name: str) -> torch.FloatTensor
```

Applies the reward model across each call. Unsuccessful responses are zeroed.

