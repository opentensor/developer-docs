---
title: "Subnet Configuration (Hyperparameters)"
---

# Subnet Configuration (Hyperparameters)

Bittensor subnets are configured with a set of state variables (known as hyperparameters) that are recorded on the blockchain. Many of these can be accessed (viewed and set) using the Bittensor CLI `btcli`, but some of them must be checked or set using the SDK or with Subtensor extrinsics, as noted.

Note that the names of the variables may be slightly different in various representations, e.g. in `btcli` and in the [chain codebase](https://github.com/opentensor/subtensor/blob/main/runtime/src/lib.rs#L1038).

## Manage hyperparams with `btcli`

:::note
Not all hyperparameters can be viewed and set with `btcli`.
:::

### View the hyperparameters

Anyone can view the parameters of any subnet.

**Example**

```bash
btcli subnet hyperparameters --netuid 19
```

```console
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

Use the below command to set these hyperparameters.

:::tip
Only the coldkey that created the subnet can set the hyperparameters.
:::

```bash
btcli sudo set
```

## Hyperparameters list

### ActivityCutoff

**Type**: u16

**Default**: 5000

**`btcli` setter**: `btcli sudo set --param activity_cutoff`

**Setter extrinsic**: `sudo_set_activity_cutoff`

**Permissions required to set**: Subnet Creator

**Description**:

The number of blocks for the stake to become inactive for the purpose of epoch in Yuma Consensus. If a validator doesn't submit weights within the first `ActivityCutoff` blocks of the epoch, it will not be able to participate until the start of the next epoch.

### AdjustmentAlpha

**Type**: u64

**Default**: 0

**`btcli` setter**: `btcli sudo set --param adjustment_alpha`

**Setter extrinsic**: `sudo_set_activity_cutoff`

**Permissions required to set**: Subnet Creator

**Description**:
`AdjustmentAlpha` is the rate at which difficulty and burn are adjusted up or down.


### AdjustmentInterval

**Type**: u16

**Default**: 360

**`btcli` setter**: `btcli sudo set --param adjustment_interval`

**Setter extrinsic**: `sudo_set_adjustment_interval`

**Permissions required to set**: Subnet Creator

**Description**:

`AdjustmentInterval` is number of blocks that pass between difficulty and burn adjustments. So, I was wrong about "next block" when I said that if root sets difficulty outside of range, it will get back in range. Difficulty will get back in range at most after `AdjustmentInterval` blocks pass.


### BondsMovingAverage

**Type**: 

**Default**: 

**`btcli` setter**: bonds_moving_avg

**`btcli` setter**: `btcli sudo set --param sudo_set_bonds_moving_average`

**Permissions required to set**: Subnet Creator

**Description**:

The moving average of bonds. The higher bonds yield to higher dividends for validators.

See [Yuma Consensus: bonding mechanics](../yuma-consensus#bonding-mechanics).


### BondsPenalty

**Type**: u16

**Default**: 0

**`btcli` setter**: none

**Setter extrinsic**: `sudo_set_bonds_penalty`

**Permissions required to set**: root/subnet creator ???

**Description**:
The magnitude of the penalty subtracted from weights for exceeding consensus, for a specific subnet.

See [Yuma Consensus: Penalizing out-of-consensus bonds](../yuma-consensus#penalizing-out-of-consensus-bonds).



### ColdkeySwapScheduleDuration

**Type**: int

**Default**: 

**`btcli` setter**: no

**Setter extrinsic**: `sudo_set_coldkey_swap_schedule_duration`

**Permissions required to set**: Root ??? Sounds like a whole network thing, not per subnet.

**Description**:

The number of blocks that need to pass from the moment when the coldkey swap is scheduled and the actual swap.


### CommitRevealPeriod

**Type**: ???

**Default**: ???

**`btcli` setter**: 

**Setter extrinsic**: `sudo_set_commit_reveal_weights_interval`

**Permissions required to set**: Subnet Creator ???

**Description**:

How long, in blocks, the consensus weights for a subnet remain time-lock encrypted, preventing weight-copying.

See [Commit Reveal](./commit-reveal)

### CommitRevealWeightsEnabled

**Type**: Boolean

**Default**: false

**`btcli` setter**: yes

**Setter extrinsic**: `sudo_set_commit_reveal_weights_enabled`

**Permissions required to set**: Subnet Creator

**Description**:

 Enables [Commit Reveal](./commit-reveal)


### Difficulty

**Type**: u64

**Default**: 10000000

**`btcli` setter**: yes

**Setter extrinsic**: `sudo_set_difficulty` 

**Permissions required to set**: Subnet Creator

**Description**:

Measure of the proof-of-work (POW) requirement for POW hotkey registration.

### DissolveNetworkScheduleDuration

Deprecated

### EmissionValue

**Description**:

Deprecated. replaced with SubnetAlphaInEmission, SubnetAlphaOutEmission, and SubnetTaoInEmission. 

### EvmChainId


**Type**: ???

**Default**: ???

**`btcli` setter**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:

The Chain ID. `945` for Bittensor mainnet, a.k.a. Finney.


### ImmunityPeriod



**Type**: ???

**Default**: ???

**`btcli` setter**: yes

**Setter extrinsic**: `sudo_set_immunity_period` 

**Permissions required to set**: Subnet creator

**Description**:

The number of blocks after registration when a miner is protected from deregistration


### Issuance

**Type**: u64

**Description**:
Refers to total issuance, the amount of TAO in circulation.


### Kappa


**Type**: u16

**Default**:  32767 ( or approximately 0.5 normalized )

**`btcli` setter**: yes

**Setter extrinsic**: `sudo_set_kappa`

**Permissions required to set**: ???

**Description**:

The consensus majority ratio: The weights set by validators who have lower normalized stake than Kappa are not used in calculating consensus, which affects ranks, which affect incentives.

   

the consensus threshold for bond-clipping during [Yuma Consensus](../yuma-consensus)


### DefaultValidatorTake

**Type**: u16

**Default**: ???

**`btcli` setter**: no

**Setter extrinsic**: sudo_set_default_take ???

**Permissions required to set**: ???

**Description**:


### LiquidAlphaEnabled

**Type**: Bool

**Default**: False

**`btcli` setter**: `btcli sudo set --param liquid_alpha_enabled`

**Setter extrinsic**: `sudo_set_liquid_alpha_enabled`

**Permissions required to set**: SN creator

**Description**:

Enables the [liquid alpha ](./consensus-based-weights) feature.


### MaxAllowedUids


**Type**: u16

**Default**: ???

**`btcli` setter**: no

**Setter extrinsic**: `sudo_set_max_allowed_uids`

**Permissions required to set**: root or sn ???

**Description**:

Maximum neurons on a subnet.

 
### MaxAllowedValidators


**Type**: u16

**Default**: 64

**`btcli` setter**: `btcli sudo set --param max_validators`

**Setter extrinsic**: `sudo_set_max_allowed_validators`

**Permissions required to set**: root or sn ???

**Description**:

Maximum validators on a subnet.


### MaxBurn

**Type**: u64

**Default**: 100000000000 normalized to 100.0000(τ)

**`btcli` setter**: `btcli sudo set --param max_burn`

**Setter extrinsic**: `sudo_set_max_burn`
**Permissions required to set**: Subnet creator

**Description**:

 

### MaxDifficulty

**Type**: u64

**Default**: 18446744073709551615 normalized to 1

**`btcli` setter**: `btcli sudo set --param min_difficulty`

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:



 `sudo_set_max_difficulty`  | sn_owner

### MaxRegistrationsPerBlock


**Type**: ???

**Default**: ???

**`btcli` setter**: `btcli sudo set --param max_regs_per_block`

**Setter extrinsic**: `sudo_set_max_registrations_per_block`

**Permissions required to set**: Subnet creator

**Description**:

Maximum neuron registrations per block. Note: Actual limit may be lower, as there is also per interval limit `TargetRegistrationsPerInterval`.


### MaxWeightLimit



**Type**: u16

**Default**: ???

**`btcli` setter**: yes

**Setter extrinsic**: `sudo_set_max_weight_limit`

**Permissions required to set**: sn_owner

**Description**:
`MaxWeightsLimit` (there should be "s" at the end of word Weight): The limit for the u16-normalized weights. If some weight is greater than this limit when all weights are normalized so that maximum weight is 65535, then it will not be used.


### MinAllowedWeights


**Type**: ???

**Default**: ???

**`btcli` setter**: yes

**Setter extrinsic**: `sudo_set_min_allowed_weights`

**Permissions required to set**: sn_owner

**Description**:
`MinAllowedWeights` is the minimum number of weights for a validator to set when setting weights.


  | `u16` | `50`| `sudo_set_min_allowed_weights` | sn_owner

### MinBurn


**Type**: u64

**Default**: 500000 normalized to 0.0005(τ)

**`btcli` setter**: `btcli sudo set --param min_burn`

**Setter extrinsic**: `sudo_set_min_burn`

**Permissions required to set**: Subnet creator
 
**Description**:

???

### MinDifficulty

**Type**: u64

**Default**: 10000000 normalized to 5.421010862e-13

**`btcli` setter**: `btcli sudo set --param min_difficulty`

**Setter extrinsic**: `sudo_set_min_difficulty`

**Permissions required to set**: Subnet creator

**Description**:

???



### NetworkMinLockCost



**Type**: ???

**Default**: ???

**`btcli` setter**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:

`NetworkMinLockCost` is the minimum TAO to pay for subnet registration

| `int` | N/A | `sudo_set_network_min_lock_cost`  | root 

### NetworkPowRegistrationAllowed



**Type**: ???

**Default**: ???

**`btcli` setter**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:

`NetworkPowRegistrationAllowed` is a flag that toggles PoW registrations on a subnet

  `sudo_set_network_pow_registration_allowed`| sn_owner

### NetworkRateLimit



**Type**: ???

**Default**: ???

**`btcli` setter**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:
`NetworkRateLimit` is the rate limit for network registrations expressed in blocks


 | `int` | N/A | `sudo_set_network_rate_limit`  | root 

### NetworkRegistrationAllowed

**Type**: ???

**Default**: ???

**`btcli` setter**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:

`NetworkRegistrationAllowed` determines if burned registrations are allowed. If both burned and pow registrations are disabled, the subnet will not get emissions.


  `sudo_set_network_registration_allowed` | sn_owner

### NominatorMinRequiredStake



**Type**: ???

**Default**: ???

**`btcli` setter**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:
`NominatorMinRequiredStake` is deprecated


 | `int` | N/A | `sudo_set_nominator_min_required_stake` | root

### PruningScore


**Type**: ???

**Default**: ???

**`btcli` setter**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:

???

### Rho

Allegedly unused, but is in `btcli`???

**Type**: u16

**Default**: ???

**`btcli` setter**: yes

**Setter extrinsic**:  `sudo_set_rho`

**Permissions required to set**: sn_owner

**Description**:





### ServingRateLimit


**Type**: ???

**Default**: ???

**`btcli` setter**: 

**Setter extrinsic**: `sudo_set_serving_rate_limit` 

**Permissions required to set**: ???

**Description**:
is the rate limit for calling `serve_axon` and `serve_prometheus` extrinsics


### StakeThreshold


**Type**: ???

**Default**: ???

**`btcli` setter**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:

The minimum possible stake value.


`sudo_set_stake_threshold`  | root

### SubnetLimit


**Type**: ???

**Default**: ???

**`btcli` setter**: 

**Setter extrinsic**: `sudo_set_subnet_limit` 

**Permissions required to set**: root

**Description**:
Deprecated

   

### SubnetMovingAlpha


**Type**: ???

**Default**: ???

**`btcli` setter**: 

**Setter extrinsic**: `sudo_set_subnet_moving_alpha` 

**Permissions required to set**: ???

**Description**:

`SubnetMovingAlpha` is a parameter that is used to calculate `SubnetMovingPrice` from current subnet price. The higher `SubnetMovingAlpha`, the faster the moving price diverges to the current price.

   

### SubnetOwnerCut


**Type**: ???

**Default**: ???

**`btcli` setter**: 

**Setter extrinsic**: 

**Permissions required to set**: root 

**Description**:

the ratio of all subnet alpha emissions that is given to subnet owner as stake. (global, fixed at 18%)

   `sudo_set_subnet_owner_cut` | 

 

### TargetRegistrationsPerInterval


**Type**: ???

**Default**: ???

**`btcli` command**: `btcli sudo set --param target_regs_per_interval`

**Setter extrinsic**: `sudo_set_target_registrations_per_interval`

**Permissions required to set**: root

**Description**:
maximum number of neuron registrations allowed per interval. Interval is `AdjustmentInterval`



### Tempo

**Type**: ???

**Default**: ???

**`btcli` setter**: `btcli sudo set --param tempo`

**Setter extrinsic**: `sudo_set_tempo`

**Permissions required to set**: root

**Description**:

Length of subnet epoch in blocks.


### ToggleTransfer


**Type**: ???

**Default**: ???

**`btcli` setter**: none

**Setter extrinsic**: `sudo_set_toggle_transfer` 

**Permissions required to set**: sn_owner

**Description**:

Allows/disallows transfer of stake between coldkeys.


### TxDelegateTakeRateLimit


**Type**: ???

**Default**: ???

**`btcli` setter**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:
 rate limit of how frequently can a delegate take be increased


  `sudo_set_tx_delegate_take_rate_limit`  | root 

### TxRateLimit


**Type**: ???

**Default**: ???

**`btcli` setter**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:


Rate limit for `swap_hotkey` extrinsic

   `sudo_set_tx_rate_limit` | root 




### WeightsVersion


**Type**: ???

**Default**: ???

**`btcli` setter**: 

**Setter extrinsic**: `sudo_set_weights_version_key`

**Permissions required to set**: ???

**Description**:










## Global Chain State Variables

### LockReductionInterval


**Type**: int

**Default**: ???

**`btcli` setter**: 

**Setter extrinsic**: 

**Permissions required to set**: root

**Description**:

The number of blocks that need to pass in order for the network lock cost to half.

`sudo_set_lock_reduction_interval`| root 


### NetworkMaxStake


**Type**: ???

**Default**: ???

**`btcli` setter**: 

**Setter extrinsic**: 

**Permissions required to set**: ???

**Description**:

`NetworkMaxStake` is deprecated

| `int` | N/A | `sudo_set_network_max_stake`| root | N/A |





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

