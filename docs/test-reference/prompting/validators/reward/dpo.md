---
sidebar_label: dpo
title: prompting.validators.reward.dpo
---

## DirectPreferenceRewardModel Objects

```python
class DirectPreferenceRewardModel(BaseRewardModel)
```

#### reward\_single

```python
def reward_single(prompt: str,
                  completion: str,
                  name: str,
                  with_penalty=True) -> float
```

Calculates a direct preference optimization (DPO) style reward for a completion,
which is a reference model&#x27;s average log-probability for completion tokens given a prompt.
Uses guidance from https://github.com/eric-mitchell/direct-preference-optimization/blob/main/trainers.py.

