---
title: "Guide to Dynamic TAO"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Guide to Dynamic TAO

Dynamic TAO is a sophisticated mechanism for both a TAO holder and a validator to manage their stake, influence, and governance across multiple subnets in the Bittensor network. More important, the dynamic TAO:

- Eliminates the role of the centralized root network. 
- Enables a TAO holder to participate in a subnet of their choice.
- Creates a new measure of a subnet's performance via the subnet-specific dynamic TAO token (dTAO). A dTAO token is exchangeable with TAO.
- Incorporates the consensus power of a validator into their dTAO token stake holdings. 
- Uses a subnet's dTAO to determine emissions to the subnet. 

The dynamic TAO elegantly solves the problem of managing influence across different subnet economies while maintaining mathematical consistency and economic incentives.

## Subnet pool

The heart of the dynamic TAO mechanism is a **subnet pool**, with the following properties:

- Associated with each subnet is a subnet pool. 
- A subnet pool consists of two token reserves, a TAO token reserve and a subnet-specific dTAO token reserve.
- Each subnet has its own dTAO token. For example, dTAO α is the token for subnet α, dTAO β is the token for subnet β, and so on.
- All token exchanges between TAO and dTAO occur through the subnet pool. The subnet pool's reserve ratio determines the exchange rate.

<center>
<ThemedImage
alt="Subnet Pool"
sources={{
    light: useBaseUrl('/img/docs/dynamic-tao/subnet-pools.svg'),
    dark: useBaseUrl('/img/docs/dynamic-tao/subnet-pools.svg'),
  }}
style={{width: 450}}
/>
</center>

<br />

## TAO reserve (τ_in) and alpha reserve (α_in)

The TAO side of a subnet pool's reserves are denoted by τ_in, or **TAO reserve**, and are expressed in units of TAO. Similarly, the  dTAO side of the pool reserves are denoted by α_in, or **alpha reserves**. The terms α_in and **alpha reserves** are general terms and refer to the pool reserves of all subnets, including that of subnet α.

---

## Rate (τ_in/α_in)

We use the term **rate** to refer to the exchange rate between TAO and a subnet dTAO token. This is calculated as a ratio of the subnet's pool reserves, i.e., TAO reserve(τ_in) / alpha reserves (α_in). 

### Example
For example, if for subnet ε, its subnet pool contains TAO reserves of 1000 TAO units and its alpha reserves of 16000 dTAO ε units, then the exchange rate between TAO and dTAO ε is:

$$
R = \frac{\tau_{in}}{\alpha_{in}} = \frac{1000}{16000} = 0.0625
$$

Hence, 
$$
\text{1 TAO} = 0.0625ε
$$ 

This exchange rate can change every block when staking or unstaking or emissions occur on this subnet.

---

## Staking

With dynamic TAO, staking would work like this. See the below diagram.

<center>
<ThemedImage
alt="Staking"
sources={{
    light: useBaseUrl('/img/docs/dynamic-tao/staking-subnet-pools.svg'),
    dark: useBaseUrl('/img/docs/dynamic-tao/staking-subnet-pools.svg'),
  }}
style={{width: 700}}
/>
</center>

<br />

1. Under the dynamic TAO, as a TAO holder you would still stake to a  validator’s hotkey, but now you can also select a subnet (`netuid`) of your choice. When you run `btcli stake add` command, the TAO you want to stake first goes into the subnet pool.  
2. The TAO to be staked is added to the TAO reserves side of the subnet pool.  
3. The subnet pool algorithm uses the exchange rate and calculates the equivalent units of dTAO α, for the TAO that was just added to the TAO reserve side. This amount of dTAO α is taken out of the alpha reserve of the pool and is sent to the validator’s hotkey. 
4. The validator’s hotkey holds the dTAO α. This is referred as **Stake (α)**. 

:::tip Stake is always expressed in alpha units
In dynamic TAO, the stake held by a hotkey in a subnet is always expressed in the subnet-specific dTAO α units and not TAO units.
:::

---

## STAKE (α_out) or alpha out (α_out) 
 
Total stake in the subnet. This is the sum of all the [Stake (α)](#staking)  present in all the hotkeys in this subnet, including those of validators, miners and of the subnet owner. This is often referred as **α outstanding**. Compare this with [**α reserve**](#tao-reserve-τ_in-and-alpha-reserve-α_in), which is the amount of α in the subnet pool. The **α outstanding** can change every block.

## Hotkey's stake share (α / α_out) 

A hotkey's share of the total outstanding alpha tokens in the subnet is calculated as:

$$
\text{A hotkey's stake share} = \frac{\text{hotkey's stake}(\alpha)}{\text{Total stake}(\alpha_{out})\text{ in the subnet}} 
$$

:::tip Local staking power within the subnet
The hotkey's stake share represents the local stake power of the hotkey within the subnet. 
:::

---

## Unstaking

Unstaking works, not surprisingly, as a reverse of the staking operation. See the below diagram.

<center>
<ThemedImage
alt="Unstaking"
sources={{
    light: useBaseUrl('/img/docs/dynamic-tao/unstaking-subnet-pools.svg'),
    dark: useBaseUrl('/img/docs/dynamic-tao/unstaking-subnet-pools.svg'),
  }}
style={{width: 700}}
/>
</center>

<br />

1. When you issue an unstake command, `btcli stake remove`, and specify the units of α token you want to unstake, this dTAO α is first taken out of the validator’s hotkey and added to the α reserves of the subnet pool. 
2. The subnet pool algorithm then applies the latest exchange rate and calculates the equivalent TAO units for the α token units that were just added to the α reserves of the pool. 
3. These equivalent TAO units are then taken out of the TAO reserves of the subnet pool and are sent to the TAO holder’s coldkey.


---

## Local weight or TAO Equiv (τ_in x α/α_out)

A hotkey's stake, i.e., [stake(α)](#staking), represents subnet-specific stake. As a result, a [hotkey's stake share (α / α_out)](#hotkeys-stake-share-α--α_out) can only represent the validator's staking power **within the subnet**. Moreover, a dTAO token of a subnet is not fungible with a dTAO token of another subnet. For this very reason, when a hotkey is validating in multiple subnets, the hotkey's stake share in one subnet cannot be simply added to the same hotkey's stake share in a different subnet. 

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
- The hotkey's alpha stake (α) = 6,000 alpha tokens.
- TAO reserve in the subnet's pool (τ_in) = 5,000 TAO.

- Then, this validator's hotkey stake share = (6,000/30,000) = 0.2 or 20%.
- Hence, this validator hotkey's local voting power, i.e., **local weight** = τ_in x hotkey's stake share = 5000 x 0.2 = 1000 TAO.

:::tip Stake share → TAO-denominated voting power
Hence, while the hotkey's stake share in this subnet is 20%, its actual local weight (local voting power) in the subnet is 1,000 TAO units. This is the power of dynamic TAO mechanism. It converts a hotkey's alpha stake share into an equivalent TAO-denominated voting power in the subnet. This makes alpha stakes comparable across different subnets, even though these subnets might have very different amounts of alpha tokens outstanding.
:::

---

## Local weights vs τ_in

In any subnet, if you add up the local weights of all alpha holders, you will always get exactly the TAO reserve (τ_in) of that subnet. 

This means:

- The total voting power in a subnet is fixed by its TAO reserve (τ_in).
- For a given τ_in, if a validator's hotkey in a subnet increases their local weight, it must come at the expense of others. That is, you cannot create "extra" voting power, it's a zero-sum game within each subnet.

---

## Subnet zero

In dynamic TAO, subnet zero is a special subnet. It is designed to provide the following benefits:

- The subnet zero is the only subnet that does not have any subnet pool associated with it. TAO holders can only stake into subnet zero in TAO token denominations. Hence, TAO holders and validators who prefer not to think about either subnet-specific staking or about dTAO tokens can stake in subnet zero. Their stake will remain in TAO denomination in the validator hotkeys as there is no notion of alpha in subnet zero.
- The subnet zero is also the only subnet that does not have any validating or mining defined on it. Incentive mechanisms cannot be run in subnet zero. 

:::caution Staking in subnet zero
As a rule, you can only stake in TAO denomination in subnet zero, and only in alpha (dTAO) denomination in all other subnets. 
:::

---

## Global weight

xxx

---

---

## Exchange Value (α x τ/α)

This is the potential instantaneous TAO you will receive, without considering slippage, if you unstake at this instant from this hotkey on this subnet. See Swap(α → τ) column description. This can change every block.

:::tip Compare with TAO Equiv 
Whereas the [TAO Equiv(τ_in x α/α_out)](#tao-equiv-τ_in-x-αα_out) indicates a validator's local stake weight, this Exchange Value shows TAO you will receive if you unstake now. 
:::

## Swap (α → τ)                 

This is the actual τ you will receive, after factoring in the slippage charge, if you unstake from this hotkey now on this subnet. The slippage is calculated as 1 - (Swap(α → τ)/Exchange Value(α x τ/α)), and is displayed in brackets. This can change every block.

## Emission (α/block)

Shows the portion of the one α per block emission into this subnet that is received by this hotkey, according to YC2 in this subnet. This can change every block.

## Emission (τ)

Shows how the one τ per block emission is distributed among all the subnet pools. For each subnet, this fraction is first calculated by dividing the subnet's TAO Pool (τ_in) by the sum of all TAO Pool (τ_in) across all the subnets. This fraction is then added to the TAO Pool (τ_in) of the subnet. This can change every block.


## Tempo (k/n)

The tempo status of the subnet. Represented as (k/n) where "k" is the number of blocks elapsed since the last tempo and "n" is the total number of blocks in the tempo. The number "n" is a subnet hyperparameter and does not change every block.

## Local weight coeff (γ)

A multiplication factor between 0 and 1, applied to the relative proportion of a validator's stake in this subnet. Applied as (γ) × (a validator's α stake in this subnet) / (Total α stake in this subnet, i.e., Stake (α_out)). This γ-weighted relative proportion is used, in addition to other factors, in determining the overall stake weight of a validator in this subnet. This is a subnet parameter.