---
title: "Subnet Hyperparameters"
---

# Subnet Hyperparameters

## Things I want to note

**Permissions**

who can set these? who can view (everybody/everything is public I think?)

root vs subnet creators...

**Audience**

who needs to know what about which params?
- Stakers
- Miners
- Validators
- Subnet creators

## Manage hyperparams with `btcli`
### View the hyperparameters

```bash
btcli subnet hyperparameters
```

:::tip Current hyperparameters list
**Not all the hyperparameters in the output of `btcli subnet hyperparameters` are editable**. See [this line of code](https://github.com/opentensor/bittensor/blob/30d3d646571ed462e36c65c399c09ec866de7c79/bittensor/commands/network.py#L293) for the editable hyperparameters.
::: 

### Set hyperparameters

Use the below command to set these hyperparameters:

```bash
btcli sudo set
```


## Table of Hyperparameters (attempt to consolidate)

| **Name**| **Type**  | **Default / Example** | **Setter Extrinsic**| **Required Permission** | **Audience**|
|---------------------------------------------------------------------------------------------------|----------|-----------------------------------|---------------------------------------------------------|-------------------------|-----------------------------------------|
| [ActivityCutoff](#activitycutoff)  | `u16` | `5000` | `sudo_set_activity_cutoff`| sn_owner| Validators (Valis) |
| [AdjustmentAlpha ???](#adjustmentalpha)| `int` | Unknown| `sudo_set_adjustment_alpha`  | sn_owner| Miners|
| [AdjustmentInterval](#adjustmentinterval)| `u16` | `100`  | `sudo_set_adjustment_interval`  | root | Subnet Owner, Miners  |
| [AlphaHigh ???](#alphahigh)| `int` | N/A | `sudo_set_alpha_values`| sn_owner| N/A |
| [AlphaLow ???](#alphalow)  | `int` | N/A | `sudo_set_alpha_values`| sn_owner| N/A |
| [BondsMovingAverage](#bondsmovingaverage)| `u64` | `900000`  | `sudo_set_bonds_moving_average`| sn_owner| Validators (Valis) |
| [BondsPenalty](#bondspenalty)| `u16` | `0` | `sudo_set_bonds_penalty` | sn_owner| Validators (Valis) |
| [Burn](#burn) | `u64` | `100000000000` (100 TAO) | *None* | *N/A*| *N/A*  |
| [ColdkeySwapScheduleDuration](#coldkeyswapscheduleduration)| `int` | N/A | `sudo_set_coldkey_swap_schedule_duration`| root | N/A |
| [CommitRevealPeriod](#commitrevealperiod)| `int` | N/A | `sudo_set_commit_reveal_weights_interval`| sn_owner| Subnet Owner, Validators|
| [CommitRevealWeightsEnabled](#commitrevealweightsenabled)  | `bool`| `false` (example)  | `sudo_set_commit_reveal_weights_enabled` | sn_owner| Subnet Owner, Validators|
| [Difficulty](#difficulty) | `u64` | `671088640000000` | `sudo_set_difficulty` | root | Subnet Owner, Miners  |
| [DissolveNetworkScheduleDuration](#dissolvenetworkscheduleduration) | `int` | N/A | `sudo_set_dissolve_network_schedule_duration`  | root | N/A |
| [EmissionValue](#emissionvalue) | `u64` | `857777000`  | *None* | *N/A*| *N/A*  |
| [EvmChainId](#evmchainid) | `int` | N/A | `sudo_set_evm_chain_id`  | root | EVM users |
| [HotkeyEmissionTempo](#hotkeyemissiontempo) | `int` | N/A | `sudo_set_hotkey_emission_tempo`  | root | N/A |
| [ImmunityPeriod](#immunityperiod)  | `u16` | `4096` | `sudo_set_immunity_period`  | sn_owner| Miners|
| [Issuance](#issuance)  | `u64` | `0` | *None* | *N/A*| *N/A*  |
| [Kappa](#kappa)  | `u16` | `32767`| `sudo_set_kappa`| sn_owner| Validators, Miners  |
| [LiquidAlphaEnabled](#liquidalphaenabled)| `bool`| `false` (example)  | `sudo_set_liquid_alpha_enabled`| sn_owner| N/A |
| [LockReductionInterval](#lockreductioninterval)| `int` | N/A | `sudo_set_lock_reduction_interval`| root | N/A |
| [MaxAllowedUids](#maxalloweduids)  | `u16` | `4096` | `sudo_set_max_allowed_uids` | root | Subnet Owner |
| [MaxAllowedValidators](#maxallowedvalidators)  | `u16` | `128`  | `sudo_set_max_allowed_validators` | root | Subnet Owner, Potential Validators|
| [MaxBurn](#maxburn) | `u64` | `21000000000000000` (21M TAO)  | `sudo_set_max_burn`  | sn_owner| Miners|
| [MaxDifficulty](#maxdifficulty) | `u64` | `u64::MAX / 4`  | `sudo_set_max_difficulty`  | sn_owner| Miners|
| [MaxRegistrationsPerBlock](#maxregistrationsperblock)| `u16` | `1` | `sudo_set_max_registrations_per_block`  | root | N/A |
| [MaxWeightLimit](#maxweightlimit)  | `u16` | `655`  | `sudo_set_max_weight_limit` | sn_owner| Validators|
| [MinAllowedWeights](#minallowedweights)  | `u16` | `50`| `sudo_set_min_allowed_weights` | sn_owner| Validators|
| [MinBurn](#minburn) | `u64` | `1000000000` (1 TAO)  | `sudo_set_min_burn`  | root | Subnet Owner, Miners  |
| [MinDifficulty](#mindifficulty) | `u64` | `10000000`| `sudo_set_min_difficulty`  | root | Subnet Owner, Miners  |
| [NetworkMaxStake](#networkmaxstake)| `int` | N/A | `sudo_set_network_max_stake`| root | N/A |
| [NetworkMinLockCost](#networkminlockcost)| `int` | N/A | `sudo_set_network_min_lock_cost`  | root | Potential Subnet Owners  |
| [NetworkPowRegistrationAllowed](#networkpowregistrationallowed)  | `bool`| `true` (example)| `sudo_set_network_pow_registration_allowed`| sn_owner| Miners|
| [NetworkRateLimit](#networkratelimit) | `int` | N/A | `sudo_set_network_rate_limit`  | root | Potential Subnet Owners  |
| [NetworkRegistrationAllowed](#networkregistrationallowed)  | `bool`| `true` (example)| `sudo_set_network_registration_allowed` | sn_owner| Miners|
| [NominatorMinRequiredStake](#nominatorminrequiredstake) | `int` | N/A | `sudo_set_nominator_min_required_stake` | root | Validators, Stakers|
| [PruningScore](#pruningscore)| `u16` | `65535` (u16::MAX) | *None* | *N/A*| *N/A*  |
| [Rho](#rho)| `u16` | `10`| `sudo_set_rho`  | sn_owner| Validators, Miners  |
| [ScalingLawPower](#scalinglawpower)| `u16` | `50` | *None* | *N/A*| *N/A*  |
| [ScheduleGrandpaChange](#schedulegrandpachange)| *N/A* | N/A | `schedule_grandpa_change`| root | Root|
| [ServingRateLimit](#servingratelimit) | `u64` | `250`  | `sudo_set_serving_rate_limit`  | root/sn_owner | Miners|
| [StakeThreshold](#stakethreshold)  | `int` | N/A | `sudo_set_stake_threshold`  | root | Validators|
| [SubnetLimit](#subnetlimit)  | `int` | N/A | `sudo_set_subnet_limit`  | root | Potential Subnet Owners  |
| [SubnetMovingAlpha](#subnetmovingalpha)  | `int` | N/A | `sudo_set_subnet_moving_alpha` | root | N/A |
| [SubnetOwnerCut](#subnetownercut)  | `int` | N/A | `sudo_set_subnet_owner_cut` | root | Subnet Owners|
| [SynergyScalingLawPower](#synergyscalinglawpower) | `u16` | `50` | *None* | *N/A*| *N/A*  |
| [TargetRegistrationsPerInterval](#targetregistrationsperinterval)| `u16` | `2` | `sudo_set_target_registrations_per_interval`  | root | Subnet Owner, Miners  |
| [TargetStakesPerInterval](#targetstakesperinterval)  | `int` | N/A | `sudo_set_target_stakes_per_interval`| root | Stakers|
| [Tempo](#tempo)  | `u16` | `99`| `sudo_set_tempo`| root | Subnet Owners|
| [ToggleTransfer](#toggletransfer)  | `bool`| `true` (example)| `sudo_set_toggle_transfer`  | sn_owner| Subnet Owner, Stakers |
| [TxDelegateTakeRateLimit](#txdelegatetakeratelimit)  | `int` | N/A | `sudo_set_tx_delegate_take_rate_limit`  | root | Validators, Stakers|
| [TxRateLimit](#txratelimit)  | `int` | N/A | `sudo_set_tx_rate_limit` | root | Depends on usage category|
| [ValidatorBatchSize](#validatorbatchsize)| `u16` | `32`| *None* | *N/A*| *N/A*  |
| [ValidatorEpochLen](#validatorepochlen)  | `u16` | `250`  | *None* | *N/A*| *N/A*  |
| [ValidatorEpochsPerReset](#validatorepochsperreset)  | `u16` | `60`| *None* | *N/A*| *N/A*  |
| [ValidatorExcludeQuantile](#validatorexcludequantile)| `u16` | `3277` (~5% of `u16::MAX`)  | *None* | *N/A*| *N/A*  |
| [ValidatorLogitsDivergence](#validatorlogitsdivergence) | `u16` | `1310` (~2% of `u16::MAX`)  | *None* | *N/A*| *N/A*  |
| [ValidatorPruneLen](#validatorprunelen)  | `u64` | `1` | *None* | *N/A*| *N/A*  |
| [ValidatorSequenceLen](#validatorsequencelen)  | `u16` | `256`  | *None* | *N/A*| *N/A*  |
| [WeightsRateLimit](#weightsratelimit) | `u64` | `250`  | `sudo_set_weights_set_rate_limit` | sn_owner| Validators|
| [WeightsVersion](#weightsversion)  | `u64` | `400`  | `sudo_set_weights_version_key` | sn_owner| Validators|



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


## Hyperparameter List (based on Subtensor)


### ActivityCutoff
- **Description**:

### AdjustmentAlpha
- **Description**:

### AdjustmentInterval
- **Description**:

### AlphaHigh
- **Description**:

### AlphaLow
- **Description**:

### BondsMovingAverage
- **Description**:

### BondsPenalty
- **Description**:

### Burn
- **Description**:

### ColdkeySwapScheduleDuration
- **Description**:

### CommitRevealPeriod
- **Description**:

### CommitRevealWeightsEnabled
- **Description**:

### Difficulty
- **Description**:

### DissolveNetworkScheduleDuration
- **Description**:

### EmissionValue
- **Description**:

### EvmChainId
- **Description**:

### HotkeyEmissionTempo
- **Description**:

### ImmunityPeriod
- **Description**:

### Issuance
- **Description**:

### Kappa
- **Description**:

### LiquidAlphaEnabled
- **Description**:

### LockReductionInterval
- **Description**:

### MaxAllowedUids
- **Description**:

### MaxAllowedValidators
- **Description**:

### MaxBurn
- **Description**:

### MaxDifficulty
- **Description**:

### MaxRegistrationsPerBlock
- **Description**:

### MaxWeightLimit
- **Description**:

### MinAllowedWeights
- **Description**:

### MinBurn
- **Description**:

### MinDifficulty
- **Description**:

### NetworkMaxStake
- **Description**:

### NetworkMinLockCost
- **Description**:

### NetworkPowRegistrationAllowed
- **Description**:

### NetworkRateLimit
- **Description**:

### NetworkRegistrationAllowed
- **Description**:

### NominatorMinRequiredStake
- **Description**:

### PruningScore
- **Description**:

### Rho
- **Description**:

### ScalingLawPower
- **Description**:

### ScheduleGrandpaChange
- **Description**:

### ServingRateLimit
- **Description**:

### StakeThreshold
- **Description**:

### SubnetLimit
- **Description**:

### SubnetMovingAlpha
- **Description**:

### SubnetOwnerCut
- **Description**:

### SynergyScalingLawPower
- **Description**:

### TargetRegistrationsPerInterval
- **Description**:

### TargetStakesPerInterval
- **Description**:

### Tempo
- **Description**:

### ToggleTransfer
- **Description**:

### TxDelegateTakeRateLimit
- **Description**:

### TxRateLimit
- **Description**:

### ValidatorBatchSize
- **Description**:

### ValidatorEpochLen
- **Description**:

### ValidatorEpochsPerReset
- **Description**:

### ValidatorExcludeQuantile
- **Description**:

### ValidatorLogitsDivergence
- **Description**:

### ValidatorPruneLen
- **Description**:

### ValidatorSequenceLen
- **Description**:

### WeightsRateLimit
- **Description**:

### WeightsVersion
- **Description**:



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
