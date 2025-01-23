---
title: "Governance in Dynamic TAO"
---


## Governance and voting

Dynamic TAO also incorporates the consensus/voting function of subnet validators into the mechanism of their alpha token stake holdings ???


## Local weight or TAO Equiv

A hotkey's stake, i.e., [stake(α)](#staking), represents subnet-specific stake. As a result, a [hotkey's stake share](#hotkeys-stake-share) can only represent the validator's staking power **within the subnet**. Moreover, an $\alpha$ token of a subnet is not fungible with an $\alpha$ token of another subnet. For this very reason, when a hotkey is validating in multiple subnets, the hotkey's stake share in one subnet cannot be simply added to the same hotkey's stake share in a different subnet. 

This is where the TAO-equivalent value of the hotkeys stake share (α / α_out) comes into play. As we saw in the [Staking](#staking) section, any TAO staked into a subnet is added to the TAO reserves of the subnet pool, i.e., added to  τ_in. Similarly any TAO unstaked from a subnet is removed from the TAO reserves of the subnet pool. As a consequence, τ_in reserve represents the total voting power of the subnet as a whole. Hence, 

$$ 
\text{a subnet's total voting power}\times\text{hotkey's stake share in the subnet}
$$

represents the **hotkey's local voting power proportional to its stake share in the subnet**. It is calculated as:

$$ 
\tau_{in}\times\text{hotkey's stake share} = \tau_{in}\times\frac{\alpha}{\alpha_{out}}
$$

and is expressed in TAO units. This can change every block.

:::caution Local voting power is also referred as local weight
This local voting power or local weight represents the hotkey's influence in the subnet.
:::

### Example

For example, for a validator's hotkey in a given subnet:

- Total outstanding alpha (α_out) = 30,000 alpha tokens.
- The hotkey's alpha stake ($\alpha$) = 6,000 alpha tokens.
- TAO reserve in the subnet's pool (τ_in) = 5,000 TAO.

- Then, this validator's hotkey stake share = (6,000/30,000) = 0.2 or 20%.
- Hence, this validator hotkey's local voting power, i.e., **local weight** = τ_in x hotkey's stake share = 5000 x 0.2 = 1000 TAO.

:::tip Stake share → TAO-denominated voting power
Hence, while the hotkey's stake share in this subnet is 20%, its actual local weight (local voting power) in the subnet is 1,000 TAO units. This is the power of Dynamic TAO mechanism. It converts a hotkey's alpha stake share into an equivalent TAO-denominated voting power in the subnet. This makes alpha stakes comparable across different subnets, even though these subnets might have very different amounts of alpha tokens outstanding.
:::


## Global weight

Global weight of a validator hotkey is the sum of the [local weights](#local-weight-or-tao-equiv) for all the subnets, including subnet zero, where this hotkey is validating. 

### Example

Let's say that a validator's hotkey has the following positions in four different subnets, including in subnet zero. 

- Subnet zero:
  - validator's stake: 1000 TAO
  - validator's stake share: 10% (i.e., out of all TAO stake in subnet zero, this validator holds 10% of it)
- Gaming subnet:
  - validator's [stake share](#hotkeys-stake-share) = (α / α_out) =  30%
  - τ_in in this subnet pool = 10,000 TAO

- AI subnet:
  - validator's [stake share](#hotkeys-stake-share) = (α / α_out) =  40%
  - τ_in in this subnet pool = 15,000 TAO

- Storage subnet:
  - validator's [stake share](#hotkeys-stake-share) = (α / α_out) =  20%
  - τ_in in this subnet pool = 5,000 TAO

Hence, the [local weights, or local voting power](#local-weight-or-tao-equiv) of this hotkey in each subnet are as below:

- For subnet zero: 1000 TAO (TAO number used as is, without any multiplier, see [subnet zero](#subnet-zero))
- Gaming subnet: $$\tau_{in}\times\text{hotkey's stake share}$$ = 0.30 × 10,000 = 3,000 TAO
- Similarly, for AI subnet: 0.40 × 15,000 = 6,000 TAO
- For Storage subnet: 0.20 × 5,000  = 1,000 TAO

Hence the global weight of this hotkey is: 1000 + 3000 + 6000 + 1000 = 11,000 TAO.

### Root weight

Notice that in the above calculation, we used the hotkey's subnet zero stake of 1000 TAO as it is while calculating the global weight of the hotkey. However, in Dynamic TAO it is normal to multiply the subnet zero stake TAO number by a factor called `root_weight` that varies from 0 to 1. 

Hence, for `root_weight` of 0.5, the subnet zero stake of the hotkey will now be `root_weight` x 1000 = 0.5 x 1000 = 500 TAO. Hence, under this condition, the updated global weight of this hotkey is: 500 + 3000 + 6000 + 1000 = 10,500 TAO.

### Global weight vs. local weight

The two quantities defined above for a validator hotkey, i.e., the hotkey's global weight (across all subnets where it is validating) and its local weight (per subnet), are critically important. 

:::caution global weight appears in every subnet
In addition to the local weight of a hotkey in a subnet, this hotkey's global weight also appears in this subnet. This is why global weight of a validator's hotkey is critical.
:::

Note that in the above, **both local weight and global weight of a hotkey are expressed in TAO units.** However, to represent a validator hotkey's overall stake weight in a subnet, instead of using the two individual TAO units (one for global weight and second for local weight), a new quantity called [**validator's stake weight in a subnet**](#validator-stake-weight), is defined as follows:
- The local weight of a hotkey is normalized with respect to the sum of all the local weights of all other hotkeys in this subnet, so that they all sum to 1.0. This normalized local weight represents the hotkey's relative proportion of its **influence in the subnet**.
- Similarly the global weight of the hotkey is normalized with respect to the sum of all the global weights of all other hotkeys for the subnets in question, to sum to 1.0. This normalized global weight represents the hotkey's relative proportion of its **influence in the subnets in question**. 


## Validator stake weight

A validator hotkey's stake weight is defined for a subnet. It varies from 0 to 1. It is defined as the sum of the hotkey's normalized global and local weights, as follows:

For any subnet $i$, the validator hotkey's stake weight is:

$$ 
\begin{split}
& = \text{(global\_split}\times\text{normalized global weight)} + \text{(1-global\_split}\times\text{normalized local weight)}\\\\
& = \text{global\_split}\times\frac{\text{hotkey's global weight}}{\text{sum of all global weights of all hotkeys in the subnets in question}}\\ \\
& + \text{ (1-global\_split)}\times\frac{\text{hotkey's local weight}}{\text{sum of all local weights in the subnet}}
\end{split}
$$

### Global split

A parameter called `global_split`, which varies between 0 and 1, controls the balance between the normalized global and local weights. In effect, the `global_split` parameter controls the balance between the validator hotkeys local and global influence.

:::tip Why global stake matters
Also see [Why global stake matters](#why-global-stake-matters).
:::

### Example

We will use the example from [Global weight](#global-weight) section and extend it to show the validator stake weight.

#### Assumptions

- Assume `root_weight` is 0.5.

- Subnet zero:
  - Total TAO outstanding = 10,000 TAO (this is the total TAO stake held by all the hotkeys in subnet zero)
  - Hence, sum of all global weights in subnet zero = 10,000 TAO
  - Validator's stake share = 10% × 10,000 = 1,000 TAO (also calculated in the above example)

- Gaming Subnet:
  - Assume total α_out = 50,000 $\alpha$
  - Validator's stake share = 30% × 50,000 = 15,000 $\alpha$
  - TAO reserve = 10,000 τ
  - TAO reserve is also the sum of all global weights in this gaming subnet = 10,000 TAO
  - Local weight = (15,000/50,000) × 10,000 = 3,000 τ (also calculated in the above example)

- AI Subnet:
  - Assume total α_out = 80,000 $\alpha$
  - Validator's stake share = 40% × 80,000 = 32,000 $\alpha$
  - TAO reserve = 15,000 τ
  - TAO reserve is also the sum of all global weights in this AI subnet = 15,000 TAO
  - Local weight = (32,000/80,000) × 15,000 = 6,000 τ (also calculated in the above example)

- Storage Subnet:
  - Assume total α_out = 30,000 $\alpha$
  - Validator's stake share = 20% × 30,000 = 6,000 $\alpha$
  - TAO reserve = 5,000 τ
  - TAO reserve is also the sum of all global weights in this storage subnet = 5,000 TAO
  - Local weight = (6,000/30,000) × 5,000 = 1,000 τ (also calculated in the above example)

Hence, sum of all global weights in the all the above subnets is = (`root_weight` x subnet zero's total global weight) + sum of all global weights in gaming subnet + sum of all global weights in AI subnet + sum of all global weights in storage subnet

= (0.5 x 10,000) + 10,000 + 15,000 + 5,000
= 35,000 TAO. This is the global weights in all the subnets where this validator's hotkey is validating. 

#### Validator stake weight for each subnet

- Hotkey's global weight = 10,500 TAO (from the above [Root weight](#root-weight) section).
- Total global subnet weights = 35,000 TAO (from above).
- Assume `global_split` is 0.3.


1. Gaming Subnet:
   
   - Local weight of the hotkey: 3000 TAO (from the above example)
   - Sum of all local weights in this subnet = TAO reserve = 10,000 TAO
   - Hence, the validator's stake weight in this gaming subnet = 0.3 × (10,500/35,000) + 0.7 × (3,000/10,000)
                = 0.3 × 0.30 + 0.7 × 0.30
                = 0.09 + 0.21
                = 0.30 (30% influence in the gaming subnet)

2. AI Subnet:
   - Local weight of the hotkey: 6000 TAO (from the above example)
   - Sum of all local weights in this subnet = TAO reserve = 15,000 TAO
   - Hence, the validator's stake weight in this AI subnet = 0.3 × (10,500/35,000) + 0.7 × (6,000/15,000)
              = 0.3 × 0.30 + 0.7 × 0.40
              = 0.09 + 0.28
              = 0.37 (37% influence in the AI subnet)

3. Storage Subnet:
   - Local weight of the hotkey: 1000 TAO (from the above example)
   - Sum of all local weights in this subnet = TAO reserve = 5,000 TAO
   - Hence, the validator's stake weight in this storage subnet = 0.3 × (10,500/35,000) + 0.7 × (1,000/5,000)
                = 0.3 × 0.30 + 0.7 × 0.20
                = 0.09 + 0.14
                = 0.23 (23% influence in the storage subnet)

4. Subnet zero: (special case - only local weight matters)
   - Validator's stake weight = 1,000/10,000 = 0.10 (10% influence in the subnet zero)


## Intuitions of Dynamic TAO

This section presents a summary of intuitions about Dynamic TAO. It is intended to help in conceptually grasping the Dynamic TAO mechanism.


### TAO and alpha

- The entire TAO token emitted from the coinbase in the lifetime of Bittensor network exists:
  - In coldkeys: In a TAO holder’s own coldkeys, for example, as subnet zero emissions into a subnet owner’s coldkey, and in exchange-owned coldkeys.
  - In subnet zero hotkeys: In the validator hotkeys of subnet zero as staked TAO and dividends.
  - In TAO reserves of subnet pools.
  - TAO exists nowhere else.
  - Furthermore, for the Bittensor network operations, only staked TAO matters, i.e., only the staked TAO in the validator hotkeys and in TAO reserves act as fuel in the Bittensor network operations. This means that for any discussions on consensus power, only the sum total of the entire staked TAO is considered&mdash;the TAO that is in the coldkeys or in exchanges does not contribute directly to Bittensor network operations.
- Similarly, the entire $\alpha$ token emitted from the coinbase in the lifetime of Bittensor network exists as follows:
  - **An $\alpha$ token does not exist in a coldkey**. It only exists in the hotkeys of subnet validators, subnet miners and subnet owners.
  - In the subnet pool reserves. 
  - A $\alpha$ token of one subnet is not fungible with a $\alpha$ token of another subnet. 


### Pool reserves

- No one directly owns the subnet pool reserves. These reserves exist to provide liquidity to the subnet pools.
- However, as we saw in [Local weights vs TAO reserve](#local-weights-vs-tao-reserve) , a validator who holds X% of the $\alpha$ stake in a subnet is said to own the same X% of the TAO reserve pool of that subnet. 
- In Dynamic TAO the sum of α_in (also called alpha reserve) and α_out (all the alpha stake in the subnet) is treated as the the sum total of all alpha. **This is not not strictly true.** This sum total only represents the alpha associated with staking and unstaking. There is the another source of alpha, which is the emissions alpha. This emissions alpha is awarded to validators, subnet owners and miners. 
- More important, these emissions alpha bypasses the subnet pool and gets into the subnet directly from the coinbase. Furthermore, the only way for this emissions alpha to come out of the subnet is via unstaking, even though they did not participate in staking. 


### Why global stake matters

When a validator’s stake is global it protects the Bittensor network much better. It does so by making it hard for a rogue validator (or for a cabal of rogue validators) to acquire 51% of the consensus voting power. Here is a simple example showing how it works: 

Let's say we have 52 subnets and hypothetically a total 52,000 staked TAO tokens distributed amongst all the validators across these 52 subnets.


<center>
<ThemedImage
alt="Staking"
sources={{
    light: useBaseUrl('/img/docs/dynamic-tao/fifty-one-percent-example.svg'),
    dark: useBaseUrl('/img/docs/dynamic-tao/dark-fifty-one-percent-example.svg'),
  }}
style={{width: 650}}
/>
</center>

<br />

- When the stake is global, every validator’s stake is 100% global, hence every validator’s stake will appear in every subnet. A rogue validator would have to hold at least 51% of the total staked TAO, i.e., at least 26,500 TAO (51% of 52,000 TAO), to take control of the consensus power. This consensus power would appear in every subnet, giving the rogue validator a control over all the subnets. 

- Let’s now make stake 100% local. This means that only the stake the validator has in a subnet is applicable for that subnet. This validator's stake in other subnets is not taken into account in this subnet. For simplicity, assume that all the validators’ stake is evenly spread among these 52 subnets. Then each subnet will have 1000 TAO tokens (52,000/52) as a combined stake of its validators. 

- **But notice this**: In this case, when the stake is 100% local, a validator in a subnet only needs 500 TAO tokens + 1 to take over that subnet. Hence shifting stake from 100% global to 100% local has resulted in severely degrading the security of subnets. 

As we saw in [Validator stake weight](#validator-stake-weight), the Dynamic TAO scheme makes use of both global and local characteristics of the stake to strengthen the overall consensus security of the Bittensor network.
