!!!Legacy!!!
!!!For reference, do not publish!!!


## serving_rate_limit

**Description**
: Determines how often you can change your node's IP address on the blockchain. Expressed in number of blocks. Applies to both subnet validator and subnet miner nodes. Used when you move your node to a new machine.

**Value**
: Usually this is set to `100` blocks. 

**Setting**
: This parameter can be changed by the subnet owner. The value of this parameter varies from subnet to subnet. 

---

## min_difficulty, max_difficulty

**Description**
: For subnets that have enabled PoW registration using [`network_pow_registration_allowed`](#network_pow_registration_allowed), these parameters determine the minimum and maximum difficulty for the Proof of Work calculation, respectively, expressed in terahashes.  The actual difficulty is dynamic, auto-adjusting based on the number of registrations per [adjustment interval](#adjustment_interval). When a new adjustment interval is reached and the number of registrations or registration attempts in the previous adjustment interval exceeds the target number of registrations value, the difficulty will double in the following adjustment interval.  If the number of registrations or registration attempts was fewer than the target number of registrations value, the difficulty will halve.

**Setting**
: This parameter can be changed by the subnet owner.

---

## weights_version

**Description**
: Indicates the required minimum version of the subnet validator code. 

**Value**
: Set to `2013` for Subnet-1. 
: This means that every subnet validator in Subnet-1 must have at least version `2013` of the subnet validator code.

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

## max_weight_limit

**Description**

: This is the maximum weight that can be set by a subnet validator for a subnet miner, expressed as a value between `0` and `65535`. This is a u16 (unsigned integer) representation of the range from 0 and 1.0. The normalized weights of all miners in a subnet must always sum to 1.

**Value**
: Set to `455` for Subnet-1. 

**Setting**
: This parameter can be changed by the subnet owner. The value of this parameter varies from subnet to subnet. 

### Example

Consider Subnet-1 where `max_weight_limit` is set to 455 and `min_allowed_weights` is set to 8. This means that each subnet validator must set weights for at least 8 subnet miners, and each such weight must not exceed `455`.

---

<!-- 

## rho, kappa

**Description**
: These two parameters determine how the Yuma Consensus behaves. Generally speaking, they determine how the Yuma Consensus normalizes divergent weights.

**Value**
: - **rho** ($\rho$): Set to `10`.
  - **kappa** ($\kappa$): Set to `32767`.

**Setting**
: Must not be changed. 

--- -->

## commit_reveal_weights_enabled

**Description**
: Enables the [Commit Reveal](./commit-reveal.md) feature.

**Value**
: `True` or `False`. Enables or disables the feature, default: false.

**Setting**
: This parameter can be changed by the subnet owner.


## commit_reveal_weights_interval

**Description**
: The interval, measured as a number of blocks, that elapses before unencrypted weights are revealed.

**Value**
: The commit reveal interval, as an integer count of blocks.

**Setting**
:  This parameter can be changed by the subnet owner, and must be tuned carefully for the subnet. It should always be greater than the [immunity period](#immunity_period) to avoid unintended miner deregistration&mdash;see [Commit Reveal and Immunity Period](./commit-reveal.md#commit-reveal-and-immunity-period).

## immunity_period

**Description**
: The [Immunity Period](../glossary.md#immunity-period) within a subnet. This is a grace period, measured in blocks, granted to a miner or a validator when registered at a UID on a given subnet, that elapses before they are considered for deregistration due to performance.

If the UID still does not perform well even after the expiry of the `immunity_period`, the miner or validator at that UID can be removed from the subnet when a new miner or validator requests to join.

When a subnet miner or a subnet validator is deregistered, they must register again to rejoin the subnet.

In case all peers (miners or validators within a subnet) are in their immunity period, immunity is overriden, and the lowest scoring peer is de-registered.

In case the lowest ranking position is held by multiple peers with a tied score, the one who was registered first is de-registered. This step applies first to peers outside of their immunity period unless all are immune, in which case it applies to immune peers.

**Value**
: Default value: 5000 blocks. 

Varies between subnets, for example 7200 blocks for Subnet-1.

**Setting**
: This parameter can be changed by the subnet owner, and must be tuned carefully for the subnet. 

If [Commit Reveal](./commit-reveal.md) is enabled for the subnet, the value of the commit reveal interval should always be greater than the immunity period within the subnet, to avoid unintended miner deregistration&mdash;see [Commit Reveal and Immunity Period](./commit-reveal.md#commit-reveal-and-immunity-period).

:::tip immunity period for a subnet

Immunity Period for miners and validators *within* a subnet is distinct from the immunity period *for* a newly created subnet, before it can be deregistered from the Bittensor network. For the latter, see [Immunity period for a subnet](./create-a-subnet.md#immunity-period-for-a-subnet).
:::

### Example
Consider Subnet-1, that has its `immunity_period` set to 7200 blocks. The duration of a block is 12 seconds. Hence a subnet validator or a subnet miner at any UID in Subnet-1 has 24 hours (=7200 blocks) from the moment they have registered, before they will be considered for deregistration. 

:::tip Managing node deregistration during major updates
The subnet owner may modify the [`immunity_period`](#immunity_period) at any given time, as well as temporarily turn off [`network_registration_allowed`] to allow established nodes (miners and/or validators) to adjust to major codebase updates without being deregistered.
:::

--- 

## min_allowed_weights

**Description**
: The minimum number of UIDs a subnet validator must set weights on, before the subnet validator is allowed to set weights on the blockchain. 

**Value**
: Set to `8` for Subnet-1. 
: This means that any subnet validator who is trying to set weights on the blockchain must set weights on a minimum of 8 subnet miners before this subnet validator is able to successfully set its weights on the blockchain. 

**Setting**
: This parameter can be changed by the subnet owner. The value of this parameter varies from subnet to subnet. 

The value of `min_allowed_weights` sets a lower bound for the consensus. A higher value of `min_allowed_weights` means that the subnet validators are forced to set weights for more subnet miners. This parameter is mainly for security reasons, to eliminate unreasonably low consensus amongst the subnet validators in the subnet.

### Example

A subnet validator can be considered as poorly performing if they set weights on only five subnet miners, when the `min_allowed_weights` is set to 8. This might occur due to a variety of reasons, for example: Maybe the subnet validator does not have enough stake to query the subnet miners, or maybe the subnet validator is part of a cabal engaged in cheating the system. 

In this case, none of the actual weight-setting extrinsics that the subnet validator sends to the chain will be accepted. Hence on the chain it will look like this subnet validator has not set any weights at all. The Yuma Consensus may conclude that this subnet validator is performing poorly and after the `immunity_period` expires, this subnet validator could be deregistered to make room for others waiting to be miners or validators.

:::important Minimum 1000 TAO required to set weights 
A validate function will blacklist set-weights transactions from keys with less than 1000 TAO. This is designed to reduce chain bloat and make it easier for validators to set weights on the chain. 
:::

---

## tempo

**Description**
: A duration of a number of blocks. Several subnet events occur at the end of every tempo period. For example, Yuma Consensus runs for the subnet and emissions are transferred to the hotkeys (delegated or staked).

:::tip See also
See also [Anatomy of Incentive Mechanism](../learn/anatomy-of-incentive-mechanism.md#tempo).
:::

**Value**
: Set to `99` blocks for Subnet-1. All other subnets are set to `360` blocks. 

**Setting**
: Must not be changed.

---

## adjustment_alpha

**Description**

A factor that controls the subnet registrations adjustment interval. This hyperparameter is now set to `0.97`, a change from an earlier value of `0`. A larger adjustment alpha will smooth the registration burn and POW cost for newly registered subnets, thus reducing the thrashing seen for registration costs. This parameter functions as a balance between registration burn and POW cost. 

For example: If the target registration was `2` and there was `1` burn registration in the interval, the registration cost halving would apply to POW. On the other hand, if there were 1 POW registration, it would decrease the registration burn costs by half. In this way the `adjustment_alpha` mechanism tries to balance out the registration burn and POW costs.

:::important
By default this change from `0` to `0.97` does not affect already registered subnets. However, to take advantage of the new value, we strongly recommend that existing subnet owners update this value by setting it through the CLI, by running the below command. The `--value 17893341751498265066` corresponds to setting the `adjustment_alpha` to `0.97`. See [this line of code](https://github.com/opentensor/subtensor/pull/249/files#diff-731a2a37ce113771b45fd0a44bf63d71307465bcb1ce26353eed95c1f4d4c26cR728).
:::

```bash
btcli sudo set --param adjustment_alpha --value 17893341751498265066 --netuid <NETUID>
```

**Setting**
: Must not be changed. 

---

## adjustment_interval

**Description**
: Expressed in number of blocks. This is the number of blocks after which the recycle register cost and the `pow_register` difficulty are recalculated. 

If the number of actual registrations that occurred in the last [`adjustment_interval`](#adjustment_interval) is higher than the [`target_regs_per_interval`](#target_regs_per_interval), then the blockchain will raise the recycle register cost, by increasing the [`min_burn`](#min_burn-max_burn) value by a certain amount, in order to slow down the actual registrations and bring them back to `target_regs_per_interval` value.

**Value**
: Set to `112` for Subnet-1. 
: The blockchain uses this parameter together with the `target_regs_per_interval` and the [`min_burn`](#min_burn-max_burn) and [`max_burn`](#min_burn-max_burn) parameters. 

**Setting**
: Must not be changed. 

### Example

The Subnet-1 has its `target_regs_per_interval` set to 2. Consider a scenario where, in a 112-block interval (`adjustment_interval`) this subnet had 6 registrations. This is higher than `target_regs_per_interval`. The blockchain will now raise the minimum cost to recycle register, by increasing the `min_burn` value by a certain amount, in order to slow down the actual registrations. 

---

## activity_cutoff

**Description**
: Expressed in number of blocks. If a subnet validator has not set weights on the blockchain for `activity_cutoff` duration, then the Yuma Consensus will consider this subnet validator as offline, i.e., turned off. The weights of this subnet validator are considered too old to be useful. The weights of this subnet validator slowly lose their impact over time and eventually will no longer be considered for consensus calculation.

:::tip This parameter is applicable to subnet validators only.
:::

**Value**
: Set to `5000` (blocks) for Subnet-1. 

**Setting**
: This parameter can be changed by the subnet owner. The value of this parameter varies from subnet to subnet. 

---

## network_registration_allowed

**Description**
: `True` or `False`. Indicates whether this subnet allows registrations. 

**Value**
: Set to `True` for Subnet-1. 

**Setting**
: This parameter can be changed by the subnet owner. The value of this parameter varies from subnet to subnet. 

---

## network_pow_registration_allowed

**Description**
: `True` or `False`. Indicates whether this subnet allows POW (proof of work) registrations. 

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
: Must not be changed. 

---

## min_burn, max_burn

**Description**
: Minimum and maximum cost to register on this subnet. Expressed in Rao (10<sup>-9</sup> TAO).

**Setting**
: This parameter is automatically updated by the blockchain. 

---

<!-- 
## bonds_moving_avg

**Description**
: This parameter controls how fast bonds will decay in the entire subnet. This is a unit-less number. This number has a direct impact on subnet validator. The faster the bonds decay the quicker a subnet validator will lose its dividends after the subnet validator is out of the `activity_cutoff`.

If this `bonds_moving_avg` value is low, then the moving average of the bonds will decay slowly. This will allow the subnet validator to become active again, start setting new weights and start earning new bonds. 

If this `bonds_moving_avg` value is high, then bonds in the subnet decay quickly. As a result, a subnet validator who has fallen out of the `activity_cutoff` and hence is running the risk of being viewed as "turned off", may not be able to become active again.

**Value**
: Set to `900000` for Subnet-1. 

**Setting**
: This parameter can be changed by the subnet owner. The value of this parameter varies from subnet to subnet. 

--- -->

## max_regs_per_block

**Description**
: Maximum allowed registrations in this subnet per block. 

**Value**
: Set to `1` for Subnet-1. 

**Setting**
: Must not be changed. 

---

## max_validators

**Description**
: Determines the maximum number of subnet validators you can have in the subnet. 

**Value**
: Default value is `64`.

**Setting**
: Must not be changed. 
