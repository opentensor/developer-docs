---
title: "Subnet Hyperparameters"
---

# Subnet Hyperparameters

This document presents the description of the allowed subnet hyperparameters. For any subnet, you can see the subnet hyperparameters by running this below command and selecting the `netuid` (i.e., selecting the subnet):

```bash
btcli subnet hyperparameters
```

:::tip Current hyperparameters list
**Not all the hyperparameters in the output of `btcli subnet hyperparameters` are editable**. See [this line of code](https://github.com/opentensor/bittensor/blob/30d3d646571ed462e36c65c399c09ec866de7c79/bittensor/commands/network.py#L293) for the editable hyperparameters.
::: 

## Setting the hyperparameters

Use the below command to set these hyperparameters:

```bash
btcli sudo set
```

## Hyperparameters list

### `max_weight_limit`

Type: float

Description: Maximum weight limit.

### `tempo`

Type: int

Description: The tempo or rate of operation.

### `min_difficulty`

Type: int

Description: Minimum difficulty for some operations.

### `max_difficulty`

Type: int

Description: Maximum difficulty for some operations.

### `weights_version`

Type: int

Description: The version number of the weights used.

### `weights_rate_limit`

Type: int

Description: Rate limit for processing weights.

### `adjustment_interval`

Type: int

Description: Interval at which adjustments are made.

### `activity_cutoff`

Type: int

Description: Activity cutoff threshold.

### `registration_allowed`

Type: bool

Description: Indicates if registration is allowed.

### `target_regs_per_interval`

Type: int

Description: Target number of registrations per interval.

### `min_burn`

Type: int

Description: Minimum burn value.

### `max_burn`

Type: int

Description: Maximum burn value.

### `bonds_moving_avg`

Type: int

Description: Moving average of bonds.

### `max_regs_per_block`

Type: int

Description: Maximum number of registrations per block.

### `serving_rate_limit`

Type: int

Description: Limit on the rate of service.

### `max_validators`

Type: int

Description: Maximum number of validators.

### `adjustment_alpha`

Type: int

Description: Alpha value for adjustments.

### `difficulty`

Type: int

Description: Difficulty level.

### `commit_reveal_period`

Type: int

Description: Interval for commit-reveal weights.

### `commit_reveal_weights_enabled`

Type: bool

Description: Flag indicating if commit-reveal weights are enabled.

### `alpha_high`

Type: int

Description: High value of alpha.

### `alpha_low`

Type: int

Description: Low value of alpha.

### `liquid_alpha_enabled`

Type: bool

Description: Flag indicating if liquid alpha is enabled.
