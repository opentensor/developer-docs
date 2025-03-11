---
title: "Subnet Hyperparameters"
---

# Subnet Hyperparameters
https://github.com/opentensor/subtensor/blob/5073ade602c367471f5124329b9d7ccf8e972d69/runtime/src/lib.rs#L1038

## Manage hyperparams with `btcli`

:::note
Some hyperparameters can be viewed and set with `btcli`, but some can only be configured directly on chain using extrinsic transactions.
:::

### View the hyperparameters

```bash
btcli subnet hyperparameters
```

```console
 btcli subnet hyperparameters
/Users/michaeltrestman/Library/Python/3.9/lib/python/site-packages/urllib3/__init__.py:35: NotOpenSSLWarning: urllib3 v2 only supports OpenSSL 1.1.1+, currently the 'ssl' module is compiled with 'LibreSSL 2.8.3'. See: https://github.com/urllib3/urllib3/issues/3020
  warnings.warn(
Netuid: 19
Using the specified network test from config

                          Subnet Hyperparameters
                  NETUID: 19 (inference) - Network: test


 HYPERPARAMETER                    VALUE                  NORMALIZED
 ────────────────────────────────────────────────────────────────────────
   rho                             10                     10
   kappa                           32767                  0.4999923705
   immunity_period                 5000                   5000
   min_allowed_weights             1                      1
   max_weights_limit               65535                  65535
   tempo                           99                     99
   min_difficulty                  10000000               5.421010862e-13
   max_difficulty                  18446744073709551615   1
   weights_version                 0                      0
   weights_rate_limit              100                    100
   adjustment_interval             360                    360
   activity_cutoff                 5000                   5000
   registration_allowed            True                   True
   target_regs_per_interval        1                      1
   min_burn                        500000                 τ 0.0005
   max_burn                        100000000000           τ 100.0000
   bonds_moving_avg                900000                 4.878909776e-14
   max_regs_per_block              1                      1
   serving_rate_limit              50                     50
   max_validators                  64                     64
   adjustment_alpha                58000                  3.1441863e-15
   difficulty                      10000000               5.421010862e-13
   commit_reveal_period            1                      1
   commit_reveal_weights_enabled   False                  False
   alpha_high                      58982                  0.9000076295
   alpha_low                       45875                  0.7000076295
   liquid_alpha_enabled            False                  False
 ────────────────────────────────────────────────────────────────────────
 ```

:::tip

`btcli` does not include all of the chain state variables, some of which can only be accessed through the Bittensor Python SDK or directly through extrinsic calls.

:::

### Set hyperparameters

Use the below command to set these hyperparameters. Note that subnet creator permissions are required to set subnet hyperparameters using `btcli`.

```bash
btcli sudo set
```

## Hyperparameters list

### ActivityCutoff

**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: `sudo_set_activity_cutoff`

**Permissions required to set**: Subnet Creator

**Description**:

The number of blocks for the stake to become inactive for the purpose of epoch in Yuma Consensus. If a validator doesn't submit weights within the first `ActivityCutoff` blocks of the epoch, it will not be able to participate until the start of the next epoch.

### AdjustmentAlpha ???

**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: `sudo_set_activity_cutoff`

**Permissions required to set**: Subnet Creator

**Description**:
`AdjustmentAlpha` is the rate at which difficulty and burn are adjusted up or down.


### AdjustmentInterval

**Type**: Int

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: `sudo_set_adjustment_interval`

**Permissions required to set**: Subnet Creator ???

**Description**:

`AdjustmentInterval` is number of blocks that pass between difficulty and burn adjustments. So, I was wrong about "next block" when I said that if root sets difficulty outside of range, it will get back in range. Difficulty will get back in range at most after `AdjustmentInterval` blocks pass.


### BondsMovingAverage

**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**:  `sudo_set_bonds_moving_average`

**Permissions required to set**: Subnet Creator ???

**Description**:

The moving average of bonds. The higher bonds yield to higher dividends for validators.

See [Yuma Consensus: bonding mechanics](../yuma-consensus#bonding-mechanics).


### BondsPenalty

**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: `sudo_set_bonds_penalty`

**Permissions required to set**: Subnet Creator ???

**Description**:
The magnitude of the penalty subtracted from weights for exceeding consensus, for a specific subnet.

See [Yuma Consensus: Penalizing out-of-consensus bonds](../yuma-consensus#penalizing-out-of-consensus-bonds).


### Burn

**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: Subnet Creator ???

**Description**:

???


### ColdkeySwapScheduleDuration

**Type**: int

**Default**: ???

**`btcli` method**: none

**Setter extrinsic**: `sudo_set_coldkey_swap_schedule_duration`

**Permissions required to set**: Root ??? Sounds like a whole network thing, not per subnet.

**Description**:

The number of blocks that need to pass from the moment when the coldkey swap is scheduled and the actual swap.


### CommitRevealPeriod

**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: `sudo_set_commit_reveal_weights_interval`

**Permissions required to set**: Subnet Creator ???

**Description**:

This is how long the consensus weights for a subnet remain time-lock encrypted, preventing weight-copying on that time-scale.

See [Commit Reveal](./commit-reveal)

### CommitRevealWeightsEnabled

**Type**: Boolean

**Default**: false

**`btcli` method**: `btcli subnet hyperparameters`

**Setter extrinsic**: `sudo_set_commit_reveal_weights_enabled`

**Permissions required to set**: Subnet Creator

**Description**:
 Enables [Commit Reveal](./commit-reveal)


### Difficulty

**Type**: ???

**Default**: ???

**`btcli` method**: `btcli subnet hyperparameters`

**Setter extrinsic**: `sudo_set_difficulty` 

**Permissions required to set**: Subnet Creator

**Description**:

Measure of the POW requirement for POW registration for miners on subnets. Need to clarify ???

### DissolveNetworkScheduleDuration


**Type**: ???

**Default**: ???

**`btcli` method**: none

**Setter extrinsic**:  `sudo_set_dissolve_network_schedule_duration`

**Permissions required to set**: root

**Description**:

Deprecated

### EmissionValue

**Permissions required to set**: root
]
**Description**:

Deprecated. replaced with SubnetAlphaInEmission, SubnetAlphaOutEmission, and SubnetTaoInEmission. These values indicate how much alpha-in, alpha-out, and tao-in the subnet is getting per block (updated every block and is equal to last block gain).

### EvmChainId


**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:

The Chain ID. `945` for Bittensor mainnet, a.k.a. Finney.


### ImmunityPeriod



**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:

number of blocks when miner is protected from deregistration


 `sudo_set_immunity_period`  | sn_owner

### Issuance



**Type**: u64

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:


???

### Kappa



**Type**: u16

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:



  | `u16` | `32767`| `sudo_set_kappa`|  ???

the consensus threshold for bond-clipping during [Yuma Consensus](../yuma-consensus)


### DefaultValidatorTake

**Type**: u16

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: sudo_set_default_take ???

**Permissions required to set**: ???

**Description**:


### LiquidAlphaEnabled


**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: `sudo_set_liquid_alpha_enabled`

**Permissions required to set**: SN creator

**Description**:

enables [liquid alpha ](./consensus-based-weights)


### LockReductionInterval



**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:

???

`sudo_set_lock_reduction_interval`| root 

### MaxAllowedUids



**Type**: u16

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:



 `sudo_set_max_allowed_uids` |

### MaxAllowedValidators



**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:



  `sudo_set_max_allowed_validators` | root 

### MaxBurn



**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:



 `sudo_set_max_burn`  | sn_owner

### MaxDifficulty



**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:



 `sudo_set_max_difficulty`  | sn_owner

### MaxRegistrationsPerBlock



**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:



| `u16` | `1` | `sudo_set_max_registrations_per_block`  | root 

### MaxWeightLimit



**Type**: u16

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:



  | `u16` | `655`  | `sudo_set_max_weight_limit` | sn_owner

### MinAllowedWeights



**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:



  | `u16` | `50`| `sudo_set_min_allowed_weights` | sn_owner

### MinBurn



**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:



 | `u64` | `1000000000` (1 TAO)  | `sudo_set_min_burn`  | root 

### MinDifficulty



**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:



 | `u64` | `10000000`| `sudo_set_min_difficulty`  | root 

### NetworkMaxStake



**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:



| `int` | N/A | `sudo_set_network_max_stake`| root | N/A |

### NetworkMinLockCost



**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:



| `int` | N/A | `sudo_set_network_min_lock_cost`  | root 

### NetworkPowRegistrationAllowed



**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:



  `sudo_set_network_pow_registration_allowed`| sn_owner

### NetworkRateLimit



**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:



 | `int` | N/A | `sudo_set_network_rate_limit`  | root 

### NetworkRegistrationAllowed

**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:



  `sudo_set_network_registration_allowed` | sn_owner

### NominatorMinRequiredStake



**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:



 | `int` | N/A | `sudo_set_nominator_min_required_stake` | root

### PruningScore



**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:




### Rho



**Type**: u16

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:



 `sudo_set_rho`  | sn_owner

### ScalingLawPower



**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:





### ScheduleGrandpaChange


**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:



 `schedule_grandpa_change`| root 

### ServingRateLimit


**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:



  `sudo_set_serving_rate_limit`  | root/sn_owner 

### StakeThreshold


**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:



`sudo_set_stake_threshold`  | root

### SubnetLimit


**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:



   `sudo_set_subnet_limit`  | root 

### SubnetMovingAlpha


**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:



   `sudo_set_subnet_moving_alpha` | root 

### SubnetOwnerCut


**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:



   `sudo_set_subnet_owner_cut` | root 

### SynergyScalingLawPower


**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:



 

### TargetRegistrationsPerInterval


**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:



 `sudo_set_target_registrations_per_interval`  | root 

### TargetStakesPerInterval


**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:



   `sudo_set_target_stakes_per_interval`| root 

### Tempo


**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:



  `sudo_set_tempo`| root

### ToggleTransfer


**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:



  `sudo_set_toggle_transfer`  | sn_owner

### TxDelegateTakeRateLimit


**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:



  `sudo_set_tx_delegate_take_rate_limit`  | root 

### TxRateLimit


**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:



   `sudo_set_tx_rate_limit` | root 

### ValidatorBatchSize


**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:




### ValidatorEpochLen


**Type**: u16

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:



### ValidatorEpochsPerReset


**Type**: u16

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:



### ValidatorExcludeQuantile


**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:




### ValidatorLogitsDivergence


**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:



### ValidatorPruneLen


**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:




### ValidatorSequenceLen


**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:




### WeightsRateLimit


**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: `sudo_set_weights_set_rate_limit`

**Permissions required to set**: ???

**Description**:

 

### WeightsVersion


**Type**: ???

**Default**: ???

**`btcli` method**: 

**Setter extrinsic**: `sudo_set_weights_version_key`

**Permissions required to set**: ???

**Description**:




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
