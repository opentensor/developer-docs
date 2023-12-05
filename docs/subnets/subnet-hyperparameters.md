---
title: "Subnet Hyperparameters"
---

# Subnet Hyperparameters

intro 

## rho, kappa

**Description**
: These two parameters determine how the Yuma Consensus behaves. Generally speaking, they determine how the Yuma Consensus normalizes divergent weights.

**Value**
: - **rho**: ($\rho$): Set to `10`.
  - **kappa** ($\kappa$): Set to `32767`.

**Setting**
: Must not be changed. 

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

## max_weight_limit

This is the maximum weight that can be set by a subnet validator for a subnet miner, expressed as a value between `0` and `65535`. This is a u16 (unsigned integer) type. 

**Value**
: Set to `455` for Subnet-1. 

**Setting**
: This parameter can be changed by the subnet owner. The value of this parameter varies from subnet to subnet. 

### Example

Consider Subnet-1 where `max_weight_limit` is set to 455 and `min_allowed_weights` is set to 8. This means that each subnet validator must set weights for at least 8 subnet miners, and each such weight must not exceed `455`.

## tempo

**Description**
: How often the emissions occur for the subnet, expressed in number of blocks. This is also how often the Yuma Consensus runs for the subnet.  

:::tip See also
See also [Anatomy of Incentive Mechanism](../learn/anatomy-of-incentive-mechanism.md#tempo).
:::

**Value**
: Set to `99` for Subnet-1. All other subnets are set to `360`. 

**Setting**
: Must not be changed. 

## min_difficulty, max_difficulty

**Description**
: Obsolete. We no longer support PoW (proof-of-work) registration, hence these parameters are no longer used. 

## weights_version

**Description**
: Indicates the required minimum version of the subnet validator code. 

**Value**
: Set to `2013` for Subnet-1. 
: This means that every subnet validator in Subnet-1 must have at least version `2013` of the subnet validaor code.

**Setting**
: This parameter can be changed by the subnet owner. The value of this parameter varies from subnet to subnet. Setting this parameter to a version ensures that all the subnet validators use the same version of the code.

## weights_rate_limit

**Description**
: How often a subnet validator can set weights on the blockchain, expressed in number of blocks. 

**Value**
: Set to `100` for Subnet-1. 
: This means that after a subnet validator in Subnet-1 sends the weights to the blockchain, this subnet validator must wait for at least 100 blocks before sending the weights again to the blockchain.

**Setting**
: Must not be changed.

## adjustment_interval

**Description**
: Expressed in number of blocks. How often the [`min_burn`](#min_burn-max_burn) and [`max_burn`](#min_burn-max_burn) costs, i.e., the minimum and maximum costs of registering into this subnet, must be adjusted by the blockchain.  

**Value**
: Set to `112` for Subnet-1. 
: The blockchain uses this parameter together with the `target_regs_per_interval` and the [`min_burn`](#min_burn-max_burn) and [`max_burn`](#min_burn-max_burn) parameters. 

**Setting**
: This parameter can be changed by the subnet owner. The value of this parameter varies from subnet to subnet. 

### Example

Consider Subnet-1 where `target_regs_per_interval` is set to 2. Consider a scenario where, in a 112-block interval (`adjustment_interval`) this subnet had 3 registrations. This is higher than `target_regs_per_interval`. The blockchain will now raise the minimum cost to register, i.e., the `min_burn` value, by a certain amount, in order to lower the actual registrations within the 112-block interval from 3 to 2 (`target_regs_per_interval`). 

## activity_cutoff



## registration_allowed



## target_regs_per_interval

**Description**
: Maximum number of registrations allowed in a `adjustment_interval` period. Expressed in integer number.

**Value**
: Set to `1` for Subnet-1. 

**Setting**
: This parameter can be changed by the subnet owner. The value of this parameter varies from subnet to subnet. 

## min_burn, max_burn

**Description**
: Minimum and maximum cost to register on this subnet. Expressed in Rao (10<sup>-9</sup> TAO).

**Setting**
: This parameter is automatically updated by the blockchain. 


## bonds_moving_avg


## max_regs_per_block