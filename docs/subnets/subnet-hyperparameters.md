---
title: "Subnet Configuration (Hyperparameters)"
---

# Subnet Configuration (Hyperparameters)

Bittensor subnets are configured with a set of state variables (known as hyperparameters) that are recorded on the blockchain. Many of these can be accessed (viewed and set) using the Bittensor CLI `btcli`, but some of them must be checked or set using Subtensor extrinsics, as noted.

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

## Subnet Hyperparameters

The following variables are configurable by the subnet creator.

**Permissions required to set**: Subnet Creator

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

**Permissions required to set**: root
<!-- Is this configurable??? ^^ -->

**Description**:
The magnitude of the penalty subtracted from weights for exceeding consensus, for a specific subnet.

See [Yuma Consensus: Penalizing out-of-consensus bonds](../yuma-consensus#penalizing-out-of-consensus-bonds).


### CommitRevealPeriod

**Type**: u16 
<!-- fact check ^^ for some reason I could not identify this in https://github.com/opentensor/subtensor/blob/main/runtime/src/lib.rs#L1038 -->
**Default**: 1

**`btcli` setter**: `btcli sudo set --param commit_reveal_period`

**Setter extrinsic**: `sudo_set_commit_reveal_weights_interval`

**Permissions required to set**: Subnet Creator

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

**`btcli` setter**: none

**Setter extrinsic**: `sudo_set_difficulty` 

**Permissions required to set**: Root

**Description**:

Current dynamically computed value for the proof-of-work (POW) requirement for POW hotkey registration. Decreases over time but increases after new registrations, between the min and the maximum set by the subnet creator. see [#max-difficulty].

<!-- What are the units here? What does this actually mean, how are miners supposed to read/understand this? -->


### ImmunityPeriod


**Type**: u16

**Default**: 5000

**`btcli` setter**: yes

**Setter extrinsic**: `sudo_set_immunity_period` 

**Permissions required to set**: Subnet creator

**Description**:

The number of blocks after registration when a miner is protected from deregistration


### Kappa


**Type**: u16

**Default**:  32767 ( or approximately 0.5 normalized )

**`btcli` setter**: yes

**Setter extrinsic**: `sudo_set_kappa`

**Permissions required to set**: Subnet creator

**Description**:

The consensus majority ratio: The weights set by validators who have lower normalized stake than Kappa are not used in calculating consensus, which affects ranks, which affect incentives.

   

the consensus threshold for bond-clipping during [Yuma Consensus](../yuma-consensus)

### LiquidAlphaEnabled

**Type**: Bool

**Default**: False

**`btcli` setter**: `btcli sudo set --param liquid_alpha_enabled`

**Setter extrinsic**: `sudo_set_liquid_alpha_enabled`

**Permissions required to set**: SN creator

**Description**:

Enables the [liquid alpha ](./consensus-based-weights) feature.



 
### MaxAllowedValidators


**Type**: u16

**Default**: 64

**`btcli` setter**: `btcli sudo set --param max_validators`

**Setter extrinsic**: `sudo_set_max_allowed_validators`

**Permissions required to set**: Root

**Description**:

Maximum validators on a subnet.


### MaxBurn

**Type**: u64

**Default**: 100000000000 normalized to 100.0000(τ)

**`btcli` setter**: `btcli sudo set --param max_burn`

**Setter extrinsic**: `sudo_set_max_burn`

**Permissions required to set**: Subnet creator

**Description**:

The maximum of the dynamic range for TAO cost of burn registration on the subnet.
 

### MaxDifficulty

**Type**: u64

**Default**: 18446744073709551615 normalized to 1

**`btcli` setter**: `btcli sudo set --param min_difficulty`

**Setter extrinsic**: 

**Permissions required to set**: Subnet creator

**Description**:

The maximum of the dynamic range for difficulty of proof-of-work registration on the subnet.

### MaxRegistrationsPerBlock

**Type**: u16

**Default**: 1

**`btcli` setter**: `btcli sudo set --param max_regs_per_block`

**Setter extrinsic**: `sudo_set_max_registrations_per_block`

**Permissions required to set**: Subnet creator

**Description**:

Maximum neuron registrations per block. Note: Actual limit may be lower, as there is also per interval limit `TargetRegistrationsPerInterval`.


### MaxWeightsLimit


**Type**: u16

**Default**: 65535

**`btcli` setter**: `btcli sudo set --param max_weights_limit`

**Setter extrinsic**: `sudo_set_max_weight_limit`

**Permissions required to set**: Subnet creator

**Description**: The limit for the u16-normalized weights. If some weight is greater than this limit when all weights are normalized so that maximum weight is 65535, then it will not be used.

### MinAllowedWeights

**Type**: u16

**Default**: 1

**`btcli` setter**: `btcli sudo set --param min_allowed_weights`

**Setter extrinsic**: `sudo_set_min_allowed_weights`

**Permissions required to set**: Subnet creator

**Description**:
Minimum number of weights for a validator to set when setting weights.

### MinBurn


**Type**: u64

**Default**: 500000 normalized to 0.0005(τ)

**`btcli` setter**: `btcli sudo set --param min_burn`

**Setter extrinsic**: `sudo_set_min_burn`

**Permissions required to set**: Subnet creator
 
**Description**:

The minimum of the range of the dynamic burn cost for registering on the subnet.

### MinDifficulty

**Type**: u64

**Default**: 10000000 normalized to 5.421010862e-13

**`btcli` setter**: `btcli sudo set --param min_difficulty`

**Setter extrinsic**: `sudo_set_min_difficulty`

**Permissions required to set**: Subnet creator

**Description**:

The minimum of the range of the proof-of-work for registering on the subnet

### NetworkPowRegistrationAllowed

**Type**: Boolean

**Default**: False

**`btcli` setter**: none

<!-- Is it weird this one doesn't have a  btcli setter like registration_allowed ??? -->

**Setter extrinsic**: `sudo_set_network_pow_registration_allowed`

**Permissions required to set**: Subnet creator

**Description**:

`NetworkPowRegistrationAllowed` is a flag that toggles PoW registrations on a subnet


### NetworkRateLimit


**Type**: u64

**Default**: 7200

**`btcli` setter**: none

**Setter extrinsic**: 

**Permissions required to set**: root

**Description**:

Rate limit for network registrations expressed in blocks


### NetworkRegistrationAllowed

**Type**: Boolean

**Default**: True

**`btcli` setter**: `btcli sudo set --param registration_allowed`

**Setter extrinsic**: `sudo_set_network_registration_allowed` 

**Permissions required to set**: Subnet creator

**Description**:

`NetworkRegistrationAllowed` determines if burned registrations are allowed. If both burned and pow registrations are disabled, the subnet will not get emissions.



### Rho


**Type**: u16

**Default**: 10

**`btcli` setter**: yes

**Setter extrinsic**:  `sudo_set_rho`

**Permissions required to set**: Subnet creator

**Description**:

Deprecated.

<!-- will this be chopped from btcli? -->

### ServingRateLimit


**Type**: u16

**Default**: 50

**`btcli` setter**: 

**Setter extrinsic**: `sudo_set_serving_rate_limit` 

**Permissions required to set**: Subnet creator

**Description**:

Rate limit for calling `serve_axon` and `serve_prometheus` extrinsics used by miners.


### TargetRegistrationsPerInterval


**Type**: u16

**Default**: 1

**`btcli` command**: `btcli sudo set --param target_regs_per_interval`

**Setter extrinsic**: `sudo_set_target_registrations_per_interval`

**Permissions required to set**: root

**Description**:

Maximum number of neuron registrations allowed per interval. Interval is `AdjustmentInterval`


### Tempo

**Type**: u16

**Default**: 360

**`btcli` setter**: `btcli sudo set --param tempo`

**Setter extrinsic**: `sudo_set_tempo`

**Permissions required to set**: root

**Description**:

Length of subnet tempo in blocks.
See [Emission](../emissions.md)

### ToggleTransfer


**Type**: Boolean

**Default**: True

**`btcli` setter**: none

**Setter extrinsic**: `sudo_set_toggle_transfer` 

**Permissions required to set**: Subnet creator

**Description**:

Allows/disallows transfer of stake between coldkeys.

### WeightsVersion

**Type**: u16

**Default**: 0

**`btcli` setter**: `btcli sudo set --param weights_version`

**Setter extrinsic**: `sudo_set_weights_version_key`

**Permissions required to set**: Subnet Creator

**Description**:

If the version key specified in `set_weights` extrinsic is lower than this system-wide setting (WeightsVersionKey), the transaction will fail. This is a fool-proofing protection for validators to update, not a security feature.

<!-- need more explanation/clarification ??? -->

### WeightsRateLimit / CommitmentRateLimit

**Type**: u12

**Default**: 100

**`btcli` setter**: `btcli sudo set --param weights_rate_limit`

**Setter extrinsic**: 

**Permissions required to set**: Root

**Description**:

How long, in blocks, a validator must wait between weight commits on a subnet.

## Global/Root State Variables

The following variables are global and/or can only be configured with `root` permissions, which are held by a triumvirate of Opentensor Foundation employees. They are listed here for reference.

### ColdkeySwapScheduleDuration

**Type**: u12

**Default**: 

**`btcli` setter**: no

**Setter extrinsic**: `sudo_set_coldkey_swap_schedule_duration`

**Permissions required to set**: Root

**Description**:

The duration in blocks of the waiting period before a coldkey swap.

See [Rotate/Swap your Coldkey](./schedule-coldkey-swap)


### Issuance

**Type**: u64

**Description**:
Refers to total issuance, the amount of TAO in circulation.


### LockReductionInterval


**Type**: u64

**Default**: 14 * 7200

**`btcli` setter**: 

**Setter extrinsic**: 

**Permissions required to set**: root

**Description**:

The number of blocks that need to pass in order for the network lock cost to half.

`sudo_set_lock_reduction_interval`| root 



### NetworkMinLockCost

**`btcli` setter**: none

**Setter extrinsic**: `sudo_set_network_min_lock_cost`

**Permissions required to set**: root

**Description**:

`NetworkMinLockCost` is the minimum TAO to pay for subnet registration

### StakeThreshold


**Type**: u12

**Default**: 1000

**`btcli` setter**: none

**Setter extrinsic**: `sudo_set_stake_threshold`

**Permissions required to set**: root

**Description**:

The minimum stake required for validating. Currently 1000

### TxDelegateTakeRateLimit


**Type**: u64

**Default**: 216000

**`btcli` setter**: 

**Setter extrinsic**: 

**Permissions required to set**: root

**Description**:

Rate limit of how frequently can a delegate take be increased

<!-- fact check what is this on chain -->

### DissolveNetworkScheduleDuration

Deprecated

### EmissionValue

**Description**:

Deprecated. replaced with SubnetAlphaInEmission, SubnetAlphaOutEmission, and SubnetTaoInEmission. 

### EvmChainId

**Permissions required to set**: root

**Description**:

The Chain ID. `945` for Bittensor mainnet, a.k.a. Finney.


### TxRateLimit


**Type**: u64

**Default**: 1000

**`btcli` setter**: none

**Setter extrinsic**: `sudo_set_tx_rate_limit`

**Permissions required to set**: root

**Description**:

Rate limit for `swap_hotkey` extrinsic.


### SubnetOwnerCut

**`btcli` setter**: none

**Setter extrinsic**: `sudo_set_subnet_owner_cut`

**Permissions required to set**: root 

**Description**:

The ratio of all subnet alpha emissions that is given to subnet owner as stake. (Global, fixed at 18%.)

