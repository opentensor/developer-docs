---
title: "Subnet Hyperparameters"
---

# Subnet Hyperparameters


## Manage hyperparams with `btcli`

:::note
Some hyperparameters can be viewed and set with `btcli`, but some can only be configured directly on chain using extrinsic transactions.
:::

### View the hyperparameters

```bash
btcli subnet hyperparameters
```

:::tip Current hyperparameters list
**Not all the hyperparameters in the output of `btcli subnet hyperparameters` are editable**. See [this line of code](https://github.com/opentensor/bittensor/blob/30d3d646571ed462e36c65c399c09ec866de7c79/bittensor/commands/network.py#L293) for the editable hyperparameters.
::: 

### Set hyperparameters

Use the below command to set these hyperparameters. Note that subnet creator permissions are required to set subnet hyperparameters using `btcli`.

```bash
btcli sudo set
```

## Consolidated list

### ActivityCutoff

**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: `sudo_set_activity_cutoff`

**Permissions required to set**: Subnet Creator

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators

### AdjustmentAlpha ???


**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: `sudo_set_activity_cutoff`

**Permissions required to set**: Subnet Creator

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators


### AdjustmentInterval


**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: `sudo_set_adjustment_interval`

**Permissions required to set**: Subnet Creator ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators


### AlphaHigh ???


**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: Subnet Creator ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators

### AlphaLow ???

**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: Subnet Creator ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators

### BondsMovingAverage

**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**:  `sudo_set_bonds_moving_average`

**Permissions required to set**: Subnet Creator ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators

### BondsPenalty

**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: `sudo_set_bonds_penalty`

**Permissions required to set**: Subnet Creator ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators

### Burn

**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: Subnet Creator ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators

### ColdkeySwapScheduleDuration

**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: `sudo_set_coldkey_swap_schedule_duration`

**Permissions required to set**: Subnet Creator ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators

### CommitRevealPeriod

**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: `sudo_set_commit_reveal_weights_interval`

**Permissions required to set**: Subnet Creator ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators

### CommitRevealWeightsEnabled

**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: `sudo_set_commit_reveal_weights_enabled`

**Permissions required to set**: Subnet Creator

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators

### Difficulty


**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: `sudo_set_difficulty` 

**Permissions required to set**: Subnet Creator

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators

### DissolveNetworkScheduleDuration


**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**:  `sudo_set_dissolve_network_schedule_duration`

**Permissions required to set**: root

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators

### EmissionValue


**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators

### EvmChainId


**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators


 `sudo_set_evm_chain_id`  | root 

### HotkeyEmissionTempo



**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators

 `sudo_set_hotkey_emission_tempo`  | root 

### ImmunityPeriod



**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators

 `sudo_set_immunity_period`  | sn_owner

### Issuance



**Type**: u64

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators


### Kappa



**Type**: u16

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators

  | `u16` | `32767`| `sudo_set_kappa`|  ???

the consensus threshold, important but arcane... see [Yuma Consensus](../yuma-consensus)



### LiquidAlphaEnabled


**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: `sudo_set_liquid_alpha_enabled`

**Permissions required to set**: SN creator

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators


### LockReductionInterval



**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators

`sudo_set_lock_reduction_interval`| root 

### MaxAllowedUids



**Type**: u16

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators

 `sudo_set_max_allowed_uids` |

### MaxAllowedValidators



**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators

  `sudo_set_max_allowed_validators` | root 

### MaxBurn



**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators

 `sudo_set_max_burn`  | sn_owner

### MaxDifficulty



**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators

 `sudo_set_max_difficulty`  | sn_owner

### MaxRegistrationsPerBlock



**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators

| `u16` | `1` | `sudo_set_max_registrations_per_block`  | root 

### MaxWeightLimit



**Type**: u16

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators

  | `u16` | `655`  | `sudo_set_max_weight_limit` | sn_owner

### MinAllowedWeights



**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators

  | `u16` | `50`| `sudo_set_min_allowed_weights` | sn_owner

### MinBurn



**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators

 | `u64` | `1000000000` (1 TAO)  | `sudo_set_min_burn`  | root 

### MinDifficulty



**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators

 | `u64` | `10000000`| `sudo_set_min_difficulty`  | root 

### NetworkMaxStake



**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators

| `int` | N/A | `sudo_set_network_max_stake`| root | N/A |

### NetworkMinLockCost



**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators

| `int` | N/A | `sudo_set_network_min_lock_cost`  | root 

### NetworkPowRegistrationAllowed



**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators

  `sudo_set_network_pow_registration_allowed`| sn_owner

### NetworkRateLimit



**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators

 | `int` | N/A | `sudo_set_network_rate_limit`  | root 

### NetworkRegistrationAllowed



**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators

  `sudo_set_network_registration_allowed` | sn_owner

### NominatorMinRequiredStake



**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators

 | `int` | N/A | `sudo_set_nominator_min_required_stake` | root

### PruningScore



**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators


### Rho



**Type**: u16

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators

 `sudo_set_rho`  | sn_owner

### ScalingLawPower



**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators



### ScheduleGrandpaChange


**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators

 `schedule_grandpa_change`| root 

### ServingRateLimit


**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators

  `sudo_set_serving_rate_limit`  | root/sn_owner 

### StakeThreshold


**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators

`sudo_set_stake_threshold`  | root

### SubnetLimit


**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators

   `sudo_set_subnet_limit`  | root 

### SubnetMovingAlpha


**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators

   `sudo_set_subnet_moving_alpha` | root 

### SubnetOwnerCut


**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators

   `sudo_set_subnet_owner_cut` | root 

### SynergyScalingLawPower


**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators

 

### TargetRegistrationsPerInterval


**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators

 `sudo_set_target_registrations_per_interval`  | root 

### TargetStakesPerInterval


**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators

   `sudo_set_target_stakes_per_interval`| root 

### Tempo


**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators

  `sudo_set_tempo`| root

### ToggleTransfer


**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators

  `sudo_set_toggle_transfer`  | sn_owner

### TxDelegateTakeRateLimit


**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators

  `sudo_set_tx_delegate_take_rate_limit`  | root 

### TxRateLimit


**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators

   `sudo_set_tx_rate_limit` | root 

### ValidatorBatchSize


**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators


### ValidatorEpochLen


**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators

  | `u16` | `250`  | *None* | *N/A*| *N/A*  |

### ValidatorEpochsPerReset


**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators

  | `u16` | `60`| *None* | *N/A*| *N/A*  |

### ValidatorExcludeQuantile


**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators


### ValidatorLogitsDivergence


**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators

### ValidatorPruneLen


**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators


### ValidatorSequenceLen


**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators


### WeightsRateLimit


**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: `sudo_set_weights_set_rate_limit`

**Permissions required to set**: ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators 

### WeightsVersion


**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: `sudo_set_weights_version_key`

**Permissions required to set**: ???

**Description (who needs to know what?)**:

	- Stakers
	- Miners
	- Validators
	- Subnet creators


## Hyperparameters list (based on Python side)

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

Below is a more concise table of **all** known Bittensor Subnet hyperparameters, without the “Description” column. After the table, you will find individual sections (in the same order) with **H3** headings that include the parameter descriptions. Each hyperparameter name in the table links down to its corresponding description section.




## Setter Extrinsics

/// =============// required permissions; audience
swap_authorities // root; root
sudo_set_default_take // root; root
sudo_set_tx_rate_limit // root; depends on rate limit category

sudo_set_serving_rate_limit // root/sn_owner; miners
sudo_set_min_difficulty // root; sn_owner, miners
sudo_set_max_difficulty // sn_owner; miners
sudo_set_weights_version_key // sn_owner; valis
sudo_set_weights_set_rate_limit // sn_owner; valis
sudo_set_adjustment_interval // root; sn_owner, miners
sudo_set_adjustment_alpha // sn_owner; miners
sudo_set_max_weight_limit // sn_owner; valis
sudo_set_immunity_period // sn_owner; miners
sudo_set_min_allowed_weights // sn_owner; valis
sudo_set_max_allowed_uids // root; sn_owner
sudo_set_kappa // sn_owner; valis, miners
sudo_set_rho // sn_owner; valis, miners
sudo_set_activity_cutoff // sn_owner; valis
sudo_set_network_registration_allowed // sn_owner; miners
sudo_set_network_pow_registration_allowed // sn_owner; miners
sudo_set_target_registrations_per_interval // root; sn_owner, miners
sudo_set_min_burn // root; sn_owner, miners
sudo_set_max_burn // sn_owner; miners
sudo_set_difficulty // root; sn_owner, miners
sudo_set_max_allowed_validators // root; sn_owner, potential valis
sudo_set_bonds_moving_average // sn_owner; valis
sudo_set_bonds_penalty // sn_owner; valis
sudo_set_max_registrations_per_block // root
sudo_set_subnet_owner_cut // root; sn_owners
sudo_set_network_rate_limit // root; potential sn_owners
sudo_set_tempo // root; sn_owners
sudo_set_network_min_lock_cost // root; potential sn_owners
sudo_set_subnet_limit // root; potential sn_owners
sudo_set_lock_reduction_interval // root; potential sn_owners
sudo_set_stake_threshold // root; valis
sudo_set_nominator_min_required_stake // root; valis, stakers
sudo_set_tx_delegate_take_rate_limit // root; valis, stakers
sudo_set_min_delegate_take // root; valis, stakers
sudo_set_target_stakes_per_interval // root; stakers
sudo_set_commit_reveal_weights_enabled // sn_owner; sn_owner, valis
sudo_set_liquid_alpha_enabled // sn_owner
sudo_set_alpha_values // sn_owner
sudo_set_hotkey_emission_tempo // root
sudo_set_network_max_stake // root
sudo_set_coldkey_swap_schedule_duration // root
sudo_set_dissolve_network_schedule_duration // root
sudo_set_commit_reveal_weights_interval // sn_owner; sn_owner, valis
sudo_set_evm_chain_id // root; EVM users (won't change)
schedule_grandpa_change // root; root
sudo_set_toggle_transfer // sn_owner; sn_owner, stakers
sudo_set_subnet_moving_alpha // root

# Hyperparameters with values
Rho: u16 = 10;
Kappa: u16 = 32_767; // 0.5 = 65535/2
MaxAllowedUids: u16 = 4096;
Issuance: u64 = 0;
MinAllowedWeights: u16 = 50;
EmissionValue: u64 = 857_777_000;
MaxWeightsLimit: u16 = 655; // 655/2^16 = 0.01 [655 @ 7,160]
ValidatorBatchSize: u16 = 32; // 32
ValidatorSequenceLen: u16 = 256; // 256
ValidatorEpochLen: u16 = 250; // [250 @ 7,161]
ValidatorEpochsPerReset: u16 = 60;
ValidatorExcludeQuantile: u16 = 3277; // 5% of u16 [3277 @ 65,065]
ValidatorPruneLen: u64 = 1;
ValidatorLogitsDivergence: u16 = 1310; // 2% of u16
ScalingLawPower: u16 = 50; // 0.5
SynergyScalingLawPower: u16 = 50; // 0.5
MaxAllowedValidators: u16 = 128;
Tempo: u16 = 99;
Difficulty: u64 = 671_088_640_000_000; // Same as nakamoto at block = 3606775 [671T @ 26,310]
AdjustmentInterval: u16 = 100;
TargetRegistrationsPerInterval: u16 = 2;
ImmunityPeriod: u16 = 4096;
ActivityCutoff: u16 = 5000; // [5000 @ 7,163]
MaxRegistrationsPerBlock: u16 = 1;
PruningScore : u16 = u16::MAX;
BondsMovingAverage: u64 = 900_000;
BondsPenalty: u16 = 0;
WeightsVersionKey: u64 = 400;
MinDifficulty: u64 = 10_000_000;
MaxDifficulty: u64 = u64::MAX / 4;
ServingRateLimit: u64 = 250; // [250 @ 7,166]
Burn: u64 = 100_000_000_000; // 100 tao [100 tao @ 26,310]
MinBurn: u64 = 1_000_000_000; // 1 tao [1 tao @ 26,310]
MaxBurn: u64 = 21_000_000_000_000_000; // 21M tao [21M tao @ 26,310]
WeightsSetRateLimit: u64 = 250; // [250 @ 7,168]
