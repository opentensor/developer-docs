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

Below is a more concise table of **all** known Bittensor Subnet hyperparameters, without the “Description” column. After the table, you will find individual sections (in the same order) with **H3** headings that include the parameter descriptions. Each hyperparameter name in the table links down to its corresponding description section.

---

## Table of Hyperparameters

| **Name**| **Type**  | **Default / Example** | **Setter Extrinsic**| **Required Permission** | **Audience**|
|---------------------------------------------------------------------------------------------------|----------|-----------------------------------|---------------------------------------------------------|-------------------------|-----------------------------------------|
| [ActivityCutoff](#activitycutoff)  | `u16` | `5000` | `sudo_set_activity_cutoff`| sn_owner| Validators (Valis) |
| [AdjustmentAlpha](#adjustmentalpha)| `int` | Unknown| `sudo_set_adjustment_alpha`  | sn_owner| Miners|
| [AdjustmentInterval](#adjustmentinterval)| `u16` | `100`  | `sudo_set_adjustment_interval`  | root | Subnet Owner, Miners  |
| [AlphaHigh](#alphahigh)| `int` | N/A | `sudo_set_alpha_values`| sn_owner| N/A |
| [AlphaLow](#alphalow)  | `int` | N/A | `sudo_set_alpha_values`| sn_owner| N/A |
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

---

## Hyperparameter Descriptions

Below are individual descriptions for each hyperparameter, listed in the same order as in the table above.

### ActivityCutoff
- **Description**: Activity cutoff threshold. Nodes with an activity score below this may be pruned.

### AdjustmentAlpha
- **Description**: Alpha parameter for difficulty or emission adjustments.

### AdjustmentInterval
- **Description**: Interval (in blocks) at which difficulty or other dynamic parameters are adjusted.

### AlphaHigh
- **Description**: High bound for the “liquid alpha” mechanism.

### AlphaLow
- **Description**: Low bound for the “liquid alpha” mechanism.

### BondsMovingAverage
- **Description**: Moving average factor applied to bonding weights.

### BondsPenalty
- **Description**: Penalty factor for bonding. Higher penalty may reduce bond-based rewards.

### Burn
- **Description**: Typical burn value (e.g., 100 TAO). This is not currently set via an extrinsic.

### ColdkeySwapScheduleDuration
- **Description**: Number of blocks (duration) for coldkey swap schedules (if used).

### CommitRevealPeriod
- **Description**: Interval (in blocks) for the commit-reveal weights scheme (if enabled).

### CommitRevealWeightsEnabled
- **Description**: If `true`, validators must commit weights, then reveal them after a set period.

### Difficulty
- **Description**: Base PoW difficulty for miners/hotkeys when registering via PoW.

### DissolveNetworkScheduleDuration
- **Description**: Number of blocks (duration) for dissolving a network or subnet.

### EmissionValue
- **Description**: Emission value parameter (if used in token issuance).

### EvmChainId
- **Description**: Chain ID for EVM compatibility. Typically set once and never changed.

### HotkeyEmissionTempo
- **Description**: Interval or “tempo” for hotkey-based emission schedules (if supported).

### ImmunityPeriod
- **Description**: Number of blocks that newly registered hotkeys are immune to pruning or difficulty changes.

### Issuance
- **Description**: Global issuance setting (if used for token issuance).

### Kappa
- **Description**: Factor used in certain block emission or difficulty scaling calculations.

### LiquidAlphaEnabled
- **Description**: Toggles the “liquid alpha” parameter adjustments.

### LockReductionInterval
- **Description**: Interval at which required locked stake can be gradually reduced.

### MaxAllowedUids
- **Description**: Maximum number of UIDs (hotkeys) allowed to register in the subnet.

### MaxAllowedValidators
- **Description**: Maximum number of validator hotkeys.

### MaxBurn
- **Description**: Maximum burn allowed in a burn-based registration scenario.

### MaxDifficulty
- **Description**: Upper bound for PoW difficulty in subnet registration.

### MaxRegistrationsPerBlock
- **Description**: Limit of how many new registrations can happen within a single block.

### MaxWeightLimit
- **Description**: Maximum weight limit (scaled factor) a validator can set.

### MinAllowedWeights
- **Description**: Minimum number of weights that a validator must set.

### MinBurn
- **Description**: Minimum required burn (e.g., 1 TAO) to register via burn.

### MinDifficulty
- **Description**: Lower bound for PoW difficulty in the subnet.

### NetworkMaxStake
- **Description**: Maximum stake allowed in the network (if enforced).

### NetworkMinLockCost
- **Description**: Minimum lock cost for network creation or participation.

### NetworkPowRegistrationAllowed
- **Description**: Whether PoW-based registration is permitted in this subnet.

### NetworkRateLimit
- **Description**: Rate limit for network-level extrinsics or usage.

### NetworkRegistrationAllowed
- **Description**: Whether new (non-PoW) registrations are allowed on this subnet.

### NominatorMinRequiredStake
- **Description**: Minimum stake required by nominators.

### PruningScore
- **Description**: Score threshold above which nodes are pruned. Set internally, not user-editable.

### Rho
- **Description**: Rho factor for block emission or difficulty scaling.

### ScalingLawPower
- **Description**: Exponent used for synergy/emission scaling (e.g., 0.5 if stored as 50 in `u16`).

### ScheduleGrandpaChange
- **Description**: Schedules a GRANDPA authority change (not a hyperparameter per se, but an extrinsic).

### ServingRateLimit
- **Description**: Rate limit for serving requests (e.g., forward/backward calls).

### StakeThreshold
- **Description**: Minimum threshold stake to become a validator or maintain validator status.

### SubnetLimit
- **Description**: Maximum number of subnets that can be created.

### SubnetMovingAlpha
- **Description**: “Moving alpha” factor for dynamically adjusting subnet parameters.

### SubnetOwnerCut
- **Description**: Cut or portion of rewards/fees allocated to the subnet owner.

### SynergyScalingLawPower
- **Description**: Exponent specifically for synergy scaling, parallel to `ScalingLawPower`.

### TargetRegistrationsPerInterval
- **Description**: Target number of registrations per difficulty/emission adjustment interval.

### TargetStakesPerInterval
- **Description**: Target number of staked positions or delegations within each interval.

### Tempo
- **Description**: Network “tempo,” typically relating to block timing or intervals.

### ToggleTransfer
- **Description**: Whether token transfers are enabled in the subnet.

### TxDelegateTakeRateLimit
- **Description**: Rate limit for changes to delegate “take” percentages.

### TxRateLimit
- **Description**: Network transaction rate limit.

### ValidatorBatchSize
- **Description**: Batch size for validator calls or checks (e.g., forward calls).

### ValidatorEpochLen
- **Description**: Number of blocks in each validator epoch.

### ValidatorEpochsPerReset
- **Description**: Number of epochs before a reset occurs (e.g., to remove stale states).

### ValidatorExcludeQuantile
- **Description**: Quantile threshold for excluding underperforming validators.

### ValidatorLogitsDivergence
- **Description**: Divergence threshold for validator logits or scores.

### ValidatorPruneLen
- **Description**: How many blocks (or epochs) after which validator pruning is triggered.

### ValidatorSequenceLen
- **Description**: Sequence length for validator queries.

### WeightsRateLimit
- **Description**: Rate limit for setting validator weights.

### WeightsVersion
- **Description**: Version key for submitted weights to prevent replay or stale weights.




## Scrable of Hyperparameters

| **Name**  | **Type** | **Default / Example** | **Description**| **Setter Extrinsic**  | **Required Permission** | **Audience**  |
|-------------------------------|---------:|--------------------------------------|---------------------------------------------------------------------|------------------------------------------------------|-------------------------|-----------------------------------------|
| **ActivityCutoff** |`u16`  | `5000` | Activity cutoff threshold. Nodes with lower activity may be pruned. | `sudo_set_activity_cutoff` | sn_owner| Validators (Valis)  |
| **AdjustmentAlpha**|`int`  | Unknown| Alpha parameter for difficulty/adjustment tuning. | `sudo_set_adjustment_alpha`| sn_owner| Miners|
| **AdjustmentInterval**  |`u16`  | `100`  | Interval (in blocks) at which difficulty adjustments are made. | `sudo_set_adjustment_interval`  | root | Subnet Owner, Miners|
| **AlphaHigh** |`int`  | N/A | High bound for “liquid alpha” mechanism.| `sudo_set_alpha_values` | sn_owner| N/A  |
| **AlphaLow**  |`int`  | N/A | Low bound for “liquid alpha” mechanism. | `sudo_set_alpha_values` | sn_owner| N/A  |
| **BondsMovingAverage**  |  `u64`| `900000` | Moving average applied to bonding weights. | `sudo_set_bonds_moving_average`| sn_owner| Validators (Valis)  |
| **BondsPenalty**|`u16`  | `0` | Penalty factor in bonding weights calculation.  | `sudo_set_bonds_penalty`  | sn_owner| Validators (Valis)  |
| **Burn** |  `u64`| `100000000000` (100 TAO)| Fixed burn (if used); not currently exposed in extrinsics.| *None* | *N/A*| *N/A*|
| **ColdkeySwapScheduleDuration** | `int` | N/A | Duration for the coldkey swap schedule (if enabled). | `sudo_set_coldkey_swap_schedule_duration` | root | N/A  |
| **CommitRevealPeriod**  |`int`  | N/A | Interval (in blocks) for commit-reveal weights scheme. | `sudo_set_commit_reveal_weights_interval` | sn_owner| Subnet Owner, Validators |
| **CommitRevealWeightsEnabled** | `bool` | `false` (example)| Enables the commit-reveal weight update mechanism.| `sudo_set_commit_reveal_weights_enabled`  | sn_owner| Subnet Owner, Validators |
| **Difficulty**|  `u64`| `671088640000000`| Base PoW difficulty for registration. | `sudo_set_difficulty`| root | Subnet Owner, Miners|
| **DissolveNetworkScheduleDuration** | `int` | N/A | Blocks until a “dissolve network” schedule completes.| `sudo_set_dissolve_network_schedule_duration`  | root | N/A  |
| **EmissionValue**  |  `u64`| `857777000` | Emission value parameter (if used in token issuance).| *None* | *N/A*| *N/A*|
| **EvmChainId**|`int`  | N/A | Chain ID for EVM compatibility. Typically not changed. | `sudo_set_evm_chain_id`| root | EVM users |
| **HotkeyEmissionTempo** |`int`  | N/A | Tempo (interval) for hotkey-based emission (if implemented).| `sudo_set_hotkey_emission_tempo` | root | N/A  |
| **ImmunityPeriod** |`u16`  | `4096` | Period (in blocks) that newly registered hotkeys are immune.| `sudo_set_immunity_period`| sn_owner| Miners|
| **Issuance**  |  `u64`| `0` | Global issuance setting (if used). | *None* | *N/A*| *N/A*|
| **Kappa**|`u16`  | `32767`| Kappa factor for block emission or difficulty scaling. | `sudo_set_kappa`| sn_owner| Validators, Miners|
| **LiquidAlphaEnabled**  |  `bool`  | `false` (example)| Toggles “liquid alpha” mechanism.| `sudo_set_liquid_alpha_enabled`| sn_owner| N/A  |
| **LockReductionInterval** |`int`  | N/A | Interval for gradually reducing locked stake requirements.| `sudo_set_lock_reduction_interval`  | root | N/A  |
| **MaxAllowedUids**|`u16`  | `4096` | Maximum number of UIDs (hotkeys) allowed in the subnet.| `sudo_set_max_allowed_uids` | root | Subnet Owner|
| **MaxAllowedValidators**|`u16`  | `128`  | Maximum number of validator hotkeys.  | `sudo_set_max_allowed_validators`| root | Subnet Owner, Potential Validators |
| **MaxBurn**|  `u64`| `21000000000000000` (21M TAO)| Maximum burn allowed for PoW or other burns.| `sudo_set_max_burn` | sn_owner| Miners|
| **MaxDifficulty**  |  `u64`| `u64::MAX / 4`| Maximum difficulty limit.| `sudo_set_max_difficulty`| sn_owner| Miners|
| **MaxRegistrationsPerBlock** |`u16`  | `1` | Max # of new registrations in one block.| `sudo_set_max_registrations_per_block`| root | N/A  |
| **MaxWeightLimit** |`u16`  | `655`  | Max weight limit (scaled factor for validator weights).| `sudo_set_max_weight_limit` | sn_owner| Validators|
| **MinAllowedWeights**|`u16`  | `50`| Minimum number of weights a validator must set. | `sudo_set_min_allowed_weights` | sn_owner| Validators|
| **MinBurn**|  `u64`| `1000000000` (1 TAO)  | Minimum burn required (e.g., to register via burn).  | `sudo_set_min_burn` | root | Subnet Owner, Miners|
| **MinDifficulty**  |  `u64`| `10000000`  | Minimum difficulty for PoW-based registrations. | `sudo_set_min_difficulty`| root | Subnet Owner, Miners|
| **NetworkMaxStake**|`int`  | N/A | Maximum stake allowed network-wide (if enforced). | `sudo_set_network_max_stake`| root | N/A  |
| **NetworkMinLockCost**  |`int`  | N/A | Minimum lock cost for network creation or participation.  | `sudo_set_network_min_lock_cost` | root | Potential Subnet Owners  |
| **NetworkPowRegistrationAllowed** | `bool` | `true` (example) | Whether PoW-based registrations are allowed. | `sudo_set_network_pow_registration_allowed`| sn_owner| Miners|
| **NetworkRateLimit** |`int`  | N/A | Global rate limit for network extrinsics/usage. | `sudo_set_network_rate_limit`  | root | Potential Subnet Owners  |
| **NetworkRegistrationAllowed** (formerly *RegistrationAllowed*) | `bool` | `true` (example) | Whether new registrations (non-PoW) are allowed on this subnet.| `sudo_set_network_registration_allowed`  | sn_owner| Miners|
| **NominatorMinRequiredStake** |  `int`  | N/A | Minimum stake required by nominators. | `sudo_set_nominator_min_required_stake`  | root | Validators, Stakers |
| **PruningScore**|`u16`  | `65535` (u16::MAX) | Score threshold for pruning.| *None* | *N/A*| *N/A*|
| **Rho**  |`u16`  | `10`| Rho factor for block emission or difficulty scaling. | `sudo_set_rho`  | sn_owner| Validators, Miners|
| **ScalingLawPower**|`u16`  | `50` (represents 0.5 if scaled) | Exponent for synergy or emission scaling.  | *None* | *N/A*| *N/A*|
| **ScheduleGrandpaChange** | *N/A* | N/A | Schedules a GRANDPA authority change (not a param).  | `schedule_grandpa_change` | root | Root |
| **ServingRateLimit** |  `u64`| `250`  | Rate limit for serving requests (e.g. forward or backward calls). | `sudo_set_serving_rate_limit`  | root or sn_owner  | Miners|
| **StakeThreshold** |`int`  | N/A | Threshold stake required to participate (if enforced).| `sudo_set_stake_threshold`| root | Validators|
| **SubnetLimit** |`int`  | N/A | Maximum number of subnets.  | `sudo_set_subnet_limit`| root | Potential Subnet Owners  |
| **SubnetMovingAlpha**|`int`  | N/A | “Moving alpha” for dynamic subnet param adjustment.  | `sudo_set_subnet_moving_alpha` | root | N/A  |
| **SubnetOwnerCut** |`int`  | N/A | The “cut” or portion for subnet owners on fees/rewards.  | `sudo_set_subnet_owner_cut` | root | Subnet Owners  |
| **SynergyScalingLawPower**|`u16`  | `50` (represents 0.5 if scaled) | Exponent for synergy scaling. | *None* | *N/A*| *N/A*|
| **TargetRegistrationsPerInterval** | `u16`| `2` | Target # of registrations per adjustment interval.| `sudo_set_target_registrations_per_interval`  | root | Subnet Owner, Miners|
| **TargetStakesPerInterval**  |`int`  | N/A | Target # of stake increases/delegations per interval.| `sudo_set_target_stakes_per_interval` | root | Stakers|
| **Tempo**|`u16`  | `99`| Network “tempo” in block intervals (e.g. block time multiplier). | `sudo_set_tempo` | root | Subnet Owners  |
| **ToggleTransfer** |  `bool`  | `true` (example) | Toggles token transfers in the subnet on/off.| `sudo_set_toggle_transfer`| sn_owner| Subnet Owner, Stakers |
| **TxDelegateTakeRateLimit**  |`int`  | N/A | Rate limit for delegate “take” updates. | `sudo_set_tx_delegate_take_rate_limit`| root | Validators, Stakers |
| **TxRateLimit** |`int`  | N/A | Network transaction rate limit.  | `sudo_set_tx_rate_limit`  | root | Depends on usage category|
| **ValidatorBatchSize**  |`u16`  | `32`| Batch size for validator queries (e.g. forward calls). | *None* | *N/A*| *N/A*|
| **ValidatorEpochLen**|`u16`  | `250`  | Blocks per validator epoch. | *None* | *N/A*| *N/A*|
| **ValidatorEpochsPerReset**  |`u16`  | `60`| # of epochs per reset cycle for validators.| *None* | *N/A*| *N/A*|
| **ValidatorExcludeQuantile** |`u16`  | `3277` (~5% of `u16::MAX`) | Quantile threshold for validator exclusion.| *None* | *N/A*| *N/A*|
| **ValidatorLogitsDivergence**|`u16`  | `1310` (~2% of `u16::MAX`) | Divergence threshold for validator logits. | *None* | *N/A*| *N/A*|
| **ValidatorPruneLen**|`u64`  | `1` | Number of blocks/epochs after which pruning is triggered. | *None* | *N/A*| *N/A*|
| **ValidatorSequenceLen**|`u16`  | `256`  | Sequence length for validator queries or updates. | *None* | *N/A*| *N/A*|
| **WeightsRateLimit** |  `u64`| `250`  | Rate limit for setting validator weights.  | `sudo_set_weights_set_rate_limit`| sn_owner| Validators|
| **WeightsVersion** |  `u64`| `400`  | Version key for weights (prevents stale weight submissions).| `sudo_set_weights_version_key` | sn_owner| Validators|

---

## Notes

1. **Editable vs. Non-Editable**  
Many parameters have a corresponding `sudo_set_*` extrinsic. Those without any listed extrinsic may be read-only or not yet exposed for editing.

2. **Permissions**  
- **root**: Full-chain access (often associated with the governance root/sudo account).
- **sn_owner**: Owner (or controller) of a specific subnet.

3. **Audience**  
- **Miners**: Parties primarily affected in PoW-based registrations or mining operations.  
- **Validators (Valis)**: Nodes involved in the validation and weighting process.  
- **Subnet Owners (sn_owners)**: Entities that created or manage subnets.  
- **Potential Subnet Owners**: Anyone interested in creating new subnets or controlling them.  
- **Stakers**: Parties that stake tokens or nominate validators.  

4. **Additional Hyperparameters**  
Some extrinsics, such as `sudo_set_default_take` or `sudo_set_subnet_owner_cut`, may govern additional economics or reward distribution parameters not explicitly detailed in the snippet above. Where a parameter is not shown in the table, it may be network-specific, newly introduced, or simply not documented here.

5. **Getting Current Values**  
To view the current hyperparameter values for a subnet, use:
```bash
btcli subnet hyperparameters
```
Then select the appropriate `netuid` (subnet ID).

6. **Setting Hyperparameters**  
To set any hyperparameter that **is** editable, you typically use:
```bash
btcli sudo set ...
```
which will internally call the relevant `sudo_set_*` extrinsic, assuming you have the required permissions.

---

### Quick Examples

- **Setting `MaxWeightLimit`** (as `sn_owner`):
  ```bash
  btcli sudo set --key <sn_owner_key> --netuid <subnet_id> max_weight_limit 700
  ```
- **Setting `Tempo`** (as `root`):
  ```bash
  btcli sudo set --key <root_key> --netuid <subnet_id> tempo 120
  ```

(Ensure your wallet/key has the proper on-chain privileges: `root` or `sn_owner`.)

---


# Setter Extrinsics

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
