---
title: "Subnet Hyperparameters"
---

# Subnet Hyperparameters

This document presents the description of subnet hyperparameters. You can see the subnet hyperparameters by running this below command and selecting the `netuid` (i.e., selecting the subnet):

```bash
btcli subnet hyperparameters
```


## rho, kappa

**Description**
: These two parameters determine how the Yuma Consensus behaves. Generally speaking, they determine how the Yuma Consensus normalizes divergent weights.

**Value**
: - **rho**: ($\rho$): Set to `10`.
  - **kappa** ($\kappa$): Set to `32767`.

**Setting**
: Must not be changed. 

---

## immunity_period

**Description**
: The immunity period is expressed in number of blocks. The immunity period is the number of blocks given to a subnet miner or a subnet validator at a UID before they are considered available for deregistration. 

**Value**
: Set to `7200` blocks for Subnet-1. The `immunity_period` at a UID starts when a subnet validator or a subnet miner is registered into the subnet. 

**Setting**
: This parameter can be changed by the subnet owner. The value of this parameter varies from subnet to subnet. 

A subnet miner or a subnet validator at a UID can perform poorly during the `immunity_period` without risking deregistration. If the UID still does not perform well even after the expiry of the `immunity_period`, then the subnet miner or subnet validator at that UID can be removed from the subnet. They will be removed when a new entity, i.e., a subnet miner or a subnet validator, requests to join the subnet.

When a subnet miner or a subnet validator is deregistered, they are required to register again  to be considered for the subnet. 

### Example

Consider Subnet-1, that has its `immunity_period` set to 7200 blocks. The duration of a block is 12 seconds. Hence a subnet validator or a subnet miner at any UID in Subnet-1 has 24 hours (=7200 blocks) from the moment they have registred, before they will be considered for deregistration. 

:::tip Controlling the number of UIDs in immunity period 
The subnet owner should modify the [`adjustment_interval`](#adjustment_interval), `target_regs_per_interval` and [`max_regs_per_block`](#max_regs_per_block) parameters to control the number of UIDs that are within the [`immunity_period`](#immunity_period) at any given time.
:::

---

## min_allowed_weights

**Description**
: The minimum number of UIDs a subnet validator must set weights on, before the subnet validator is allowed to set weights on the blockhain. 

**Value**
: Set to `8` for Subnet-1. 
: This means that any subnet validator who is trying to set weights on the blockchain must set weights on a minimum of 8 subnet miners before this subnet validator is able to successfully set its weights on the blockchain. 

**Setting**
: This parameter can be changed by the subnet owner. The value of this parameter varies from subnet to subnet. 

The value of `min_allowed_weights` sets a lower bound for the consensus. A higher value of `min_allowed_weights` means that the subnet validators are forced to set weights for more subnet miners. This parameter is mainly for security reasons, to eliminate unreasonably low consensus amongst the subnet validators in the subnet.

### Example

A subnet validator can be considered as poorly performing if they set weights on only five subnet miners, when the `min_allowed_weights` is set to 8. This might occur due to a variety of reasons, for example: Maybe the subnet validator does not have enough stake to query the subnet miners, or maybe the subnet validator is part of a cabal engaged in cheating the system. 

In this case, none of the actual weight-setting extrinsics that the subnet validator sends to the chain will be accepted. Hence on the chain it will look like this subnet validator has not set any weights at all. The Yuma Consensus may conclude that this subnet validator is performing poorly and after the `immunity_period` expires, this subnet validator could be deregistered to make room for others waiting to be miners or validators.

---

## max_weight_limit

This is the maximum weight that can be set by a subnet validator for a subnet miner, expressed as a value between `0` and `65535`. This is a u16 (unsigned integer) type. 

**Value**
: Set to `455` for Subnet-1. 

**Setting**
: This parameter can be changed by the subnet owner. The value of this parameter varies from subnet to subnet. 

### Example

Consider Subnet-1 where `max_weight_limit` is set to 455 and `min_allowed_weights` is set to 8. This means that each subnet validator must set weights for at least 8 subnet miners, and each such weight must not exceed `455`.

---

## tempo

**Description**
: A duration of a number of blocks. Several subnet events occur at the end of every tempo period. For example, Yuma Consensus runs for the subnet and emissions are transferred to the hotkeys (delegated or staked).

:::tip See also
See also [Anatomy of Incentive Mechanism](../learn/anatomy-of-incentive-mechanism.md#tempo).
:::

**Value**
: Set to `99` blocks for Subnet-1. All user-created subnets are set to `360` blocks. 

**Setting**
: Must not be changed. 

---

## min_difficulty, max_difficulty

**Description**
: Obsolete. We no longer support PoW (proof-of-work) registration, hence these parameters are no longer used. 

---

## weights_version

**Description**
: Indicates the required minimum version of the subnet validator code. 

**Value**
: Set to `2013` for Subnet-1. 
: This means that every subnet validator in Subnet-1 must have at least version `2013` of the subnet validaor code.

**Setting**
: This parameter can be changed by the subnet owner. The value of this parameter varies from subnet to subnet. Setting this parameter to a version ensures that all the subnet validators use the same version of the code.

---

## weights_rate_limit

**Description**
: How often a subnet validator can set weights on the blockchain, expressed in number of blocks. 

**Value**
: Set to `100` for Subnet-1. 
: This means that after a subnet validator in Subnet-1 sends the weights to the blockchain, this subnet validator must wait for at least 100 blocks before sending the weights again to the blockchain.

**Setting**
: This parameter can be changed by the subnet owner. The value of this parameter varies from subnet to subnet. 

---

## adjustment_interval

**Description**
: Expressed in number of blocks. This is the number of blocks after which the recycle register cost and the `pow_register` difficulty are recalculated. 

If the number of actual registrations that occurred in the last `adjustment_interval` is higher than the [`target_regs_per_interval`](#target_regs_per_interval), then the blockchain will raise the recycle register cost, by increasing the [`min_burn`](#min_burn-max_burn) value by a certain amount, in order to slow down the actual registrations and bring them back to `target_regs_per_interval` value.

**Value**
: Set to `112` for Subnet-1. 
: The blockchain uses this parameter together with the `target_regs_per_interval` and the [`min_burn`](#min_burn-max_burn) and [`max_burn`](#min_burn-max_burn) parameters. 

**Setting**
: This parameter can be changed by the subnet owner. The value of this parameter varies from subnet to subnet. 

### Example

The Subnet-1 has its `target_regs_per_interval` set to 2. Consider a scenario where, in a 112-block interval (`adjustment_interval`) this subnet had 6 registrations. This is higher than `target_regs_per_interval`. The blockchain will now raise the minimum cost to recycle register, by increasing the `min_burn` value by a certain amount, in order to slow down the actual registrations. 

:::tip Controlling the number of UIDs in immunity period 
The subnet owner should modify the [`adjustment_interval`](#adjustment_interval), `target_regs_per_interval` and [`max_regs_per_block`](#max_regs_per_block) parameters to control the number of UIDs that are within the [`immunity_period`](#immunity_period) at any given time.
:::

---

## activity_cutoff

**Description**
: Expressed in number of blocks. If a subnet validator has not set weights on the blockchain for `activity_cutoff` duration, then the Yuma Consensus will consider this subnet validator as offline, i.e., turned off. The weights of this subnet validator are considered too old to be useful. The weights of this subnet validator slowly lose their impact over time and eventually will no longer be considered for consensus calcuation.

:::tip This parameter is applicable to subnet validators only.
:::

**Value**
: Set to `5000` (blocks) for Subnet-1. 

**Setting**
: This parameter can be changed by the subnet owner. The value of this parameter varies from subnet to subnet. 

---

## registration_allowed

**Description**
: `True` or `False`. Indicates whether this subnet allows registrations. 

**Value**
: Set to `True` for Subnet-1. 

**Setting**
: This parameter can be changed by the subnet owner. The value of this parameter varies from subnet to subnet. 

---

## target_regs_per_interval

**Description**
: The target number of registrations desired in a `adjustment_interval` period. Expressed as an integer number.

:::tip Maximum number of registrations
The maximum number of registrations that can occur in an `adjustment_interval` is (3 * `target_regs_per_interval`). 
:::

**Value**
: Set to `1` for Subnet-1. 

**Setting**
: This parameter can be changed by the subnet owner. The value of this parameter varies from subnet to subnet. 

:::tip Controlling the number of UIDs in immunity period 
The subnet owner should modify the [`adjustment_interval`](#adjustment_interval), `target_regs_per_interval` and [`max_regs_per_block`](#max_regs_per_block) parameters to control the number of UIDs that are within the [`immunity_period`](#immunity_period) at any given time.
:::

---

## min_burn, max_burn

**Description**
: Minimum and maximum cost to register on this subnet. Expressed in Rao (10<sup>-9</sup> TAO).

**Setting**
: This parameter is automatically updated by the blockchain. 

---

## bonds_moving_avg

**Description**
: This parameter controls how fast bonds will decay in the entire subnet. This is a unit-less number. This number has a direct impact on subnet validator. The faster the bonds decay the quicker a subnet validator will lose its dividends after the subnet validator is out of the `activity_cutoff`.

If this `bonds_moving_avg` value is low, then the moving average of the bonds will decay slowly. This will allow the subnet validator to become active again, start setting new weights and start earning new bonds. 

If this `bonds_moving_avg` value is high, then bonds in the subnet decay quickly. As a result, a subnet validator who has fallen out of the `activity_cutoff` and hence is running the risk of being viewed as "turned off", may not be able to become active again.

**Value**
: Set to `900000` for Subnet-1. 

**Setting**
: This parameter can be changed by the subnet owner. The value of this parameter varies from subnet to subnet. 

---

## max_regs_per_block

**Description**
: Maximum allowed registrations in this subnet per block. 

**Value**
: Set to `1` for Subnet-1. 

**Setting**
: This parameter can be changed by the subnet owner. The value of this parameter varies from subnet to subnet. 

:::tip Controlling the number of UIDs in immunity period 
The subnet owner should modify the [`adjustment_interval`](#adjustment_interval), `target_regs_per_interval` and [`max_regs_per_block`](#max_regs_per_block) parameters to control the number of UIDs that are within the [`immunity_period`](#immunity_period) at any given time.
:::

---

## serving_rate_limit

**Description**
: Determines how often you can change your node's IP address on the blockchain. Expressed in number of blocks. Applies to both subnet validator and subnet miner nodes. Used when you move your node to a new machine.

**Value**
: Usually this is set to `100` blocks. 

**Setting**
: This parameter can be changed by the subnet owner. The value of this parameter varies from subnet to subnet. 

---

## max_validators

**Description**
: Determines the maximum number of subnet validators you can have in the subnet. 

**Value**
: Default value is `64`.

**Setting**
: This parameter can be changed by the subnet owner. The value of this parameter varies from subnet to subnet. 