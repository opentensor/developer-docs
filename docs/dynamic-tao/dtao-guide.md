---
title: "Guide to Dynamic TAO"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Guide to Dynamic TAO

Follow this guide to learn the essential concepts, features and mechanisms of dynamic TAO.

:::tip looking for quick intuitions?
Skip to [Intuitions of dynamic TAO](#intuitions-of-dynamic-tao).
:::

## Subnet pool

The heart of the dynamic TAO mechanism is a **subnet pool**, with the following properties:

- Associated with each subnet is a subnet pool. 
- A subnet pool consists of two token reserves, a TAO token reserve and a subnet-specific dTAO token reserve.
- Each subnet has its own dTAO token. For example, dTAO $\alpha$ is the token for subnet $\alpha$, dTAO β is the token for subnet β, and so on.
- All token exchanges between TAO and dTAO occur through the subnet pool. The subnet pool's reserve ratio determines the exchange rate.

<center>
<ThemedImage
alt="Subnet Pool"
sources={{
    light: useBaseUrl('/img/docs/dynamic-tao/subnet-pools.svg'),
    dark: useBaseUrl('/img/docs/dynamic-tao/dark-subnet-pools.svg'),
  }}
style={{width: 450}}
/>
</center>

<br />

## TAO reserve (τ_in) and alpha reserve (α_in)

The TAO side of a subnet pool's reserves are denoted by τ_in, or **TAO reserve**, and are expressed in units of TAO. Similarly, the  dTAO side of the pool reserves are denoted by $\alpha_{in}$, or **alpha reserves**. The terms $\alpha_{in}$ and **alpha reserves** are general terms and refer to the pool reserves of all subnets, including that of subnet $\alpha$.

---

## Rate (τ_in/α_in)

We use the term **rate** to refer to relative price of the dTAO token. This is calculated as a ratio of the subnet's pool reserves, i.e., TAO reserve(τ_in) / alpha reserves ($\alpha_{in}$). This is commonly referred as the **exchange rate** between the subnet dTAO token and the TAO token. 

### Example

For example, if for subnet $\varepsilon$, its subnet pool contains TAO reserves of 1000 TAO units and its alpha reserves of 16000 dTAO $\varepsilon$ units, then the relative price of the dTAO $\varepsilon$ token is:

$$
R = \frac{\tau_{in}}{\alpha_{in}} = \frac{1000}{16000} = 0.0625
$$

Hence, 
$$
\text{1 dTAO } \varepsilon = 0.0625 \text{ TAO}
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
    dark: useBaseUrl('/img/docs/dynamic-tao/dark-staking-subnet-pools.svg'),
  }}
style={{width: 700}}
/>
</center>

<br />

1. Under the dynamic TAO, as a TAO holder you would still stake to a  validator’s hotkey, but now you can also select a subnet (`netuid`) of your choice. When you run `btcli stake add` command, the TAO you want to stake first goes into the subnet pool.  
2. The TAO to be staked is added to the TAO reserves side of the subnet pool.  
3. The subnet pool algorithm uses the exchange rate and calculates the equivalent units of dTAO $\alpha$, for the TAO that was just added to the TAO reserve side. This amount of dTAO $\alpha$ is taken out of the alpha reserve of the pool and is sent to the validator’s hotkey. 
4. The validator’s hotkey holds the dTAO $\alpha$. This is referred as **Stake ($\alpha$)**. 

:::tip Stake is always expressed in alpha units
In dynamic TAO, except for the stake held in [subnet zero](#subnet-zero), the stake held by a hotkey in a subnet is always expressed in the subnet-specific dTAO $\alpha$ units and not TAO units.
:::

### Constant product k 

The subnet pool algorithm is set up to always maintain a **constant product** $k$ of the two reserves. That is, 

$$
k = \text{(TAO reserves)}\times\text{(dTAO α reserves)}
$$

Anytime either of the reserves **increases**, for example as a result of a random external action such as some stake TAO entering the pool, the subnet pool algorithm automatically recalculates, using the new reserves, how much the other reserve should **decrease** in order to maintain the same constant product $$k$$. 

:::tip Staking and unstaking do not change the constant product
Staking and unstaking operations do not change the constant product $k$. On the contrary, emissions into a subnet pool do change the constant product $k$. Also see [Emissions](#emissions).
:::

As described in the [Staking](#staking) section, a staking event results in the staked TAO being added to the τ_in reserves of the subnet pool. The subnet pool algorithm calculates the number of units by which the $\alpha_{in}$ reserves should decrease. These units are then taken out of the $\alpha_{in}$ reserves and sent to the validator’s hotkey in the subnet. See an example below.

### Example

:::caution slippage not considered in this example
In order to convey the key idea of staking in a simple way, slippage is not considered in this example.
:::

The below example shows how staking 5 TAO works. 

Let us assume the following initial state of TAO and dTAO $\alpha$ reserves in a subnet:
- TAO reserves: 10 TAO tokens
- dTAO $\alpha$ reserves: 100 dTAO $\alpha$ tokens

Hence, the constant product 𝑘 = 10 × 100 =1000.

- **Initial relative price** of dTAO $\alpha$ is = reserve ratio of subnet pool $\alpha$ = (TAO token reserves of pool $\alpha$)/(dTAO $\alpha$ token reserves) = 10/100 = 0.1 TAO.
- Stake 5 TAO: This adds 5 TAO into the TAO reserves of the pool. Hence, the new TAO reserve = 10 + 5 = 15 TAO tokens.
- Using the new TAO reserve of 15, the subnet pool algorithm calculates what should be the new dTAO $\alpha$ reserves, in order to maintain k at 1000. 
- Calculating: 
$$
\begin{split}
& 15 \times\text{new dTAO α reserves} = 1000\\ 
\implies & \text{new dTAO α reserves} = 1000/15 = 66.667 \text{ dTAO α}.
\end{split}
$$

- Hence, the dTAO $\alpha$ that should be **taken out of** the $α_{in}$ reserve and sent to the validator’s hotkey is: 
$$
100 − 66.67 = 33.33 \text{ dTAO α}
$$

**New state of the reserves in the subnet pool after 5 TAO is staked**
  - TAO reserves: 15 tokens
  - dTAO $\alpha$ reserves: 66.67 dTAO $\alpha$ tokens
  - Constant product 𝑘 = 15 × 66.67 = 1000 (unchanged)
- **New relative price** of dTAO $\alpha$ after the staking event = reserve ratio of subnet pool $\alpha$ = (TAO token reserves of pool $\alpha$)/(dTAO $\alpha$ token reserves) = 15/66.67 = 0.225 TAO.

### Effect of staking

Note that as a result of staking 5 TAO into subnet $\alpha$, the relative price of dTAO $\alpha$ **increased** from 0.1 TAO to 0.225 TAO. All else being equal, staking into a subnet leads to an increase in its dTAO token relative price. This can be understood in two ways: 
- By staking your TAO into this subnet, you are expressing an increase in demand for this dTAO $\alpha$, thereby increasing the price of the dTAO $\alpha$.
- When your TAO stake is added to the pool, the TAO reserves in the pool have increased, with a net effect that the dTAO reserves have become scarcer relative to the new TAO reserves. The dTAO price is calculated as (TAO reserves / dTAO reserves), hence the denominator decreased, leading to increase in dTAO price.  


---

## STAKE (α_out) or alpha out (α_out) 
 
Total stake in the subnet is referred as $α_{out}$. This is the sum of all the [Stake (α)](#staking)  present in all the validator hotkeys in this subnet. This is often referred as **$\alpha$ outstanding**. Compare this with [$\alpha$ reserve](#tao-reserve-τ_in-and-alpha-reserve-α_in), which is the amount of $α_{in}$ in the subnet pool. The $\alpha$ outstanding can change every block. See a conceptual diagram below:


<center>
<ThemedImage
alt="Staking"
sources={{
    light: useBaseUrl('/img/docs/dynamic-tao/alpha-and-alpha-out.svg'),
    dark: useBaseUrl('/img/docs/dynamic-tao/dark-alpha-and-alpha-out.svg'),
  }}
style={{width: 650}}
/>
</center>

<br />

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
    dark: useBaseUrl('/img/docs/dynamic-tao/dark-unstaking-subnet-pools.svg'),
  }}
style={{width: 700}}
/>
</center>

<br />

1. When you issue an unstake command, `btcli stake remove`, and specify the units of $\alpha$ token you want to unstake, this dTAO $\alpha$ is first taken out of the validator’s hotkey and added to the $\alpha$ reserves of the subnet pool. 
2. The subnet pool algorithm then applies the latest exchange rate and calculates the equivalent TAO units for the $\alpha$ token units that were just added to the $\alpha$ reserves of the pool. 
3. These equivalent TAO units are then taken out of the TAO reserves of the subnet pool and are sent to the TAO holder’s coldkey.

### Example

:::caution slippage not considered in this example
In order to convey the key idea of unstaking in a simple way, slippage is not considered in this example.
:::

The below example shows how unstaking 20 dTAO $\alpha$ works. Let’s continue with the state of the TAO and dTAO $\alpha$ reserves after the [above staking operation](#example-1):

- TAO reserves: 15 tokens
- dTAO $\alpha$ reserves: 66.67 dTAO $\alpha$ tokens
- Constant product 𝑘 = 15 × 66.67 = 1000
- Relative price dTAO $\alpha$ is = reserve ratio of subnet pool $\alpha$ = (TAO token reserves of pool $\alpha$)/(dTAO $\alpha$ token reserves) = 15/66.67 = 0.225 TAO (same as the relative price after the above staking operation)
- Unstake 20 dTAO $\alpha$: This adds 20 dTAO $\alpha$ to the dTAO side of the pool. New dTAO $\alpha$ reserves = 66.67 + 20 = 86.67 dTAO $\alpha$ tokens.
- Using the new dTAO $\alpha$ reserve of 86.67, the subnet pool algorithm calculates what should be the new TAO reserve in order to maintain $k$ at 1000. 
- Calculating: 

$$  
\begin{split}
& 86.67 \times\text{new TAO reserves} = 1000\\
\implies & \text{new TAO reserves} = 1000/86.67 = 11.54 \text{ TAO}.
\end{split}
$$

- Hence, the TAO that should be taken out of the TAO reserves of the pool and sent to the TAO holder’s coldkey is: 15 − 11.54 = 3.46 TAO.

**New state of the reserves in the subnet pool after 20 dTAO $\alpha$ is unstaked**
- TAO reserves: 11.54 TAO tokens
- dTAO $\alpha$ reserves: 86.67 dTAO $\alpha$ tokens
- Constant product 𝑘 = 11.54 × 66.67 = 1000 (unchanged)
- New relative price of dTAO $\alpha$ after the unstaking event = reserve ratio of subnet pool $\alpha$ = (TAO token reserves of pool $\alpha$)/(dTAO $\alpha$ token reserves) = 11.54/86.67 = 0.133 TAO.

### Effect of unstaking

Note that as a result of unstaking 20 dTAO $\alpha$ from subnet $\alpha$, the dTAO $\alpha$ price **decreased** from 0.225 TAO to 0.113 TAO. All else being equal, unstaking from a subnet leads to a decrease in its dTAO token's relative price. This can be understood in two ways: 
- By unstaking your TAO from this subnet, you are expressing a decrease in demand for this dTAO, thereby decreasing the price of the dTAO.
- When your stake TAO is removed from the subnet pool, the TAO reserves in the pool have decreased, with a net effect that the dTAO reserves have become more abundant relative to the new TAO reserves. The dTAO price is calculated as (TAO reserves / dTAO reserves), hence the denominator increased, leading to decrease in the dTAO price.  

---

## Local weight or TAO Equiv (τ_in x α/α_out)

A hotkey's stake, i.e., [stake(α)](#staking), represents subnet-specific stake. As a result, a [hotkey's stake share ($\alpha$ / α_out)](#hotkeys-stake-share-α--α_out) can only represent the validator's staking power **within the subnet**. Moreover, a dTAO token of a subnet is not fungible with a dTAO token of another subnet. For this very reason, when a hotkey is validating in multiple subnets, the hotkey's stake share in one subnet cannot be simply added to the same hotkey's stake share in a different subnet. 

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
Hence, while the hotkey's stake share in this subnet is 20%, its actual local weight (local voting power) in the subnet is 1,000 TAO units. This is the power of dynamic TAO mechanism. It converts a hotkey's alpha stake share into an equivalent TAO-denominated voting power in the subnet. This makes alpha stakes comparable across different subnets, even though these subnets might have very different amounts of alpha tokens outstanding.
:::

---

## Local weights vs τ_in

In any subnet, if you add up the local weights of all alpha holders, you will always get exactly the TAO reserve (τ_in) of that subnet. 

This means:

- The total voting power in a subnet is fixed by its TAO reserve (τ_in).
- For a given τ_in, if a validator's hotkey in a subnet increases their local weight, it must come at the expense of others.

---

## Subnet zero

In dynamic TAO, subnet zero is a special subnet. It is designed to provide the following benefits:

- The subnet zero is the only subnet that does not have any subnet pool associated with it. TAO holders can only stake into subnet zero in TAO token denominations. Hence, TAO holders and validators who prefer not to think about either subnet-specific staking or about dTAO tokens can stake in subnet zero. Their stake will remain in TAO denomination in the validator hotkeys as there is no notion of alpha in subnet zero.
- The subnet zero is also the only subnet that does not have any validating or mining defined on it. Incentive mechanisms cannot be run in subnet zero. Nevertheless, a validator's hotkey registered in subnet zero will accept stake TAO. 
- Because there is no subnet pool attached to the subnet zero, a validator hotkey's local weight in subnet zero is simply the raw TAO units that exist as stake in this hotkey. 

:::caution Staking in subnet zero
As a rule, you can only stake in TAO denomination in subnet zero, and only in alpha (dTAO) denomination in all other subnets. Hence, stake in subnet zero is always expressed in TAO units.
:::

---

## Global weight

Global weight of a validator hotkey is the sum of the [local weights](#local-weight-or-tao-equiv-τ_in-x-αα_out) for all the subnets, including subnet zero, where this hotkey is validating. 

### Example

Let's say that a validator's hotkey has the following positions in four different subnets, including in subnet zero. 

- Subnet zero:
  - validator's stake: 1000 TAO
  - validator's stake share: 10% (i.e., out of all TAO stake in subnet zero, this validator holds 10% of it)
- Gaming subnet:
  - validator's [stake share](#hotkeys-stake-share-α--α_out) = (α / α_out) =  30%
  - τ_in in this subnet pool = 10,000 TAO

- AI subnet:
  - validator's [stake share](#hotkeys-stake-share-α--α_out) = (α / α_out) =  40%
  - τ_in in this subnet pool = 15,000 TAO

- Storage subnet:
  - validator's [stake share](#hotkeys-stake-share-α--α_out) = (α / α_out) =  20%
  - τ_in in this subnet pool = 5,000 TAO

Hence, the [local weights, or local voting power](#local-weight-or-tao-equiv-τ_in-x-αα_out) of this hotkey in each subnet are as below:

- For subnet zero: 1000 TAO (TAO number used as is, without any multiplier, see [subnet zero](#subnet-zero))
- Gaming subnet: $$\tau_{in}\times\text{hotkey's stake share}$$ = 0.30 × 10,000 = 3,000 TAO
- Similarly, for AI subnet: 0.40 × 15,000 = 6,000 TAO
- For Storage subnet: 0.20 × 5,000  = 1,000 TAO

Hence the global weight of this hotkey is: 1000 + 3000 + 6000 + 1000 = 11,000 TAO.

### Root weight

Notice that in the above calculation, we used the hotkey's subnet zero stake of 1000 TAO as it is while calculating the global weight of the hotkey. However, in dynamic TAO it is normal to multiply the subnet zero stake TAO number by a factor called `root_weight` that varies from 0 to 1. 

Hence, for `root_weight` of 0.5, the subnet zero stake of the hotkey will now be `root_weight` x 1000 = 0.5 x 1000 = 500 TAO. Hence, under this condition, the updated global weight of this hotkey is: 500 + 3000 + 6000 + 1000 = 10,500 TAO.

### Global weight vs. local weight

The two quantities defined above for a validator hotkey, i.e., the hotkey's global weight (across all subnets where it is validating) and its local weight (per subnet), are critically important. 
:::caution global weight appears in every subnet
In addition to the local weight of a hotkey in a subnet, this hotkey's global weight also appears in this subnet. This is why global weight of a validator's hotkey is critical.
:::

Note that in the above, **both local weight and global weight of a hotkey are expressed in TAO units.** However, to represent a validator hotkey's overall stake weight in a subnet, instead of using the two individual TAO units (one for global weight and second for local weight), a new quantity called [**validator's stake weight in a subnet**](#validator-stake-weight), is defined as follows:
- The local weight of a hotkey is normalized with respect to the sum of all the local weights of all other hotkeys in this subnet, so that they all sum to 1.0. This normalized local weight represents the hotkey's relative proportion of its **influence in the subnet**.
- Similarly the global weight of the hotkey is normalized with respect to the sum of all the global weights of all other hotkeys for the subnets in question, to sum to 1.0. This normalized global weight represents the hotkey's relative proportion of its **influence in the subnets in question**. 

---

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

---

## Exchange Value (α x τ/α)

This is the potential instantaneous TAO you will receive, without considering slippage, if you [unstake](#unstaking) at this instant from this hotkey on this subnet. See [Swap(α → τ)](#swap-α--τ) description. This can change every block.

:::tip Compare with TAO Equiv 
Whereas the [TAO Equiv(τ_in x α/α_out)](#tao-equiv-τ_in-x-αα_out) indicates a validator's local stake weight, this Exchange Value shows TAO you will receive if you unstake now. 
:::

## Swap (α → τ)                 

This is the actual τ you will receive, after subtracting in the slippage charge, if you unstake from this hotkey now on this subnet. The slippage is calculated as:

$$
\text{Slippage} = 1 - \frac{\text{Swap(α → τ)}}{\text{Exchange Value}(α \times τ/α)}
$$

This can change every block.

---

## Emissions

### Liquidity provision

Emissions are the liquidity injections into the subnet pools. The Bittensor blockchain is the liquidity provider in the dynamic TAO. Without the liquidity provider injecting reserves into a subnet pool, the pool may run out of the reserves of one or both the tokens, thereby halting the entire subnet pool operation. This mechanism of liquidity injection is normal. 

While staking and unstaking operations are similar to trading on a pool, the emissions are liquidity providing operations. 

:::tip Emissions change the constant product
Emissions into a subnet pool do change the constant product $k$ for that pool. On the contrary, the staking and unstaking operations **do not** change the pool's constant product $k$. See [Staking](#staking) and [Unstaking](#unstaking).
:::

### Emissions algorithm

The below table shows how emissions are injected into the subnet pools. 

:::caution Alpha price is always relative price
Note that the terms relative price, alpha token's price, alpha price are the same as [Rate](#rate-τ_inα_in).
:::

| <img style={{width: 500}} /> Every block, do this |<img style={{width: 500}} /> If (sum) $\geqslant$ 1 | <img style={{width: 400}} /> Else (If (sum) $\lt$ 1) |
|:---------------------|:---|:---|
| **Evaluate sum of all alpha prices** | Alpha prices are high across the Bittensor network | Alpha prices are not high|
| **Emission into tao_in reserve**| Do nothing | Add a fraction of a TAO into TAO reserve. <br />$$\text{Fraction = } \frac{\text{this alpha token's price}}{\text{sum of all alpha prices across all subnets}}$$ |
| **Emission into alpha_in reserve** | Add one alpha token into alpha reserve | Do nothing |
| **Effect of emissions into pool**  | Increases this subnet pool’s alpha reserve, thereby **decreasing** this alpha token’s price  | Increases this subnet pool's TAO reserve, thereby **increasing** this alpha token's price |
| **Emission into alpha_out** | Add one alpha token into the subnet alpha outstanding  | Add one alpha token into the subnet alpha outstanding |

### Example

Consider the following subnets:

#### Case 1: Sum of alpha prices greater than 1

1. Gaming Subnet:
   - TAO reserve (τ_in): 10,000 TAO
   - Alpha reserve (α_in): 8,000 Alpha 
   - Alpha outstanding (α_out): 50,000 Alpha
   - Hence alpha price = $$ R = \frac{\tau_{in}}{\alpha_{in}} = \frac{10000}{8000} = 1.25 $$

2. AI Subnet:
   - TAO reserve (τ_in): 15,000 TAO
   - Alpha reserve (α_in): 15,000 Alpha 
   - Alpha outstanding (α_out): 80,000 Alpha
   - Hence alpha price = $$ R = \frac{\tau_{in}}{\alpha_{in}} = \frac{15000}{15000} = 1.0 $$
  
3. Storage Subnet:
   - TAO reserve (τ_in): 5,000 TAO
   - Alpha reserve (α_in): 10,000 Alpha 
   - Alpha outstanding (α_out): 30,000 Alpha
   - Hence alpha price = $$ R = \frac{\tau_{in}}{\alpha_{in}} = \frac{5000}{10000} = 0.5 $$

Hence, sum of all alpha prices $$ = 1.25 + 1.0 + 0.5 = 2.75 \gt 1.0 $$

As a result, the emissions to the subnets are as follows:

1. Emissions to the Gaming Subnet:
   - Emission into TAO reserve (τ_in): 0 TAO
   - Emission into alpha reserve (α_in): 1.0 Alpha 
   - Emission into alpha outstanding (α_out): 1.0 Alpha

2. Emissions to the AI Subnet:
   - Emission into TAO reserve (τ_in): 0 TAO
   - Emission into alpha reserve (α_in): 1.0 Alpha 
   - Emission into alpha outstanding (α_out): 1.0 Alpha
  
3. Emissions to the Storage Subnet:
   - Emission into TAO reserve (τ_in): 0 TAO
   - Emission into alpha reserve (α_in): 1.0 Alpha 
   - Emission into alpha outstanding (α_out): 1.0 Alpha

#### Case 2: Sum of alpha prices less than 1

Let's change the state of the subnets to the below:

1. Gaming Subnet:
   - TAO reserve (τ_in): 10,000 TAO
   - Alpha reserve (α_in): **40,000** Alpha 
   - Alpha outstanding (α_out): 50,000 Alpha
   - Hence alpha price = $$ R = \frac{\tau_{in}}{\alpha_{in}} = \frac{10000}{40000} = 0.25 $$

2. AI Subnet:
   - TAO reserve (τ_in): 15,000 TAO
   - Alpha reserve (α_in): **50,000** Alpha 
   - Alpha outstanding (α_out): 80,000 Alpha
   - Hence alpha price = $$ R = \frac{\tau_{in}}{\alpha_{in}} = \frac{15000}{50000} = 0.3 $$
  
3. Storage Subnet:
   - TAO reserve (τ_in): 5,000 TAO
   - Alpha reserve (α_in): **25,000** Alpha 
   - Alpha outstanding (α_out): 30,000 Alpha
   - Hence alpha price = $$ R = \frac{\tau_{in}}{\alpha_{in}} = \frac{5000}{25000} = 0.2 $$

Hence, sum of all alpha prices $$ = 0.25 + 0.3 + 0.2 = 0.75 \lt 1.0 $$

As a result, the emissions to the subnets are as follows:

1. Emissions to the Gaming Subnet:
   - Emission into TAO reserve (τ_in): $$\;  \frac{0.25}{0.75} = 0.3333 \text{ TAO}$$
   - Emission into alpha reserve (α_in): 0 Alpha 
   - Emission into alpha outstanding (α_out): 1.0 Alpha

2. Emissions to the AI Subnet:
   - Emission into TAO reserve (τ_in): $$\;  \frac{0.3}{0.75} = 0.4 \text{ TAO}$$
   - Emission into alpha reserve (α_in): 0 Alpha 
   - Emission into alpha outstanding (α_out): 1.0 Alpha
  
3. Emissions to the Storage Subnet:
   - Emission into TAO reserve (τ_in): $$\;  \frac{0.2}{0.75} = 0.2667 \text{ TAO}$$
   - Emission into alpha reserve (α_in): 0 Alpha 
   - Emission into alpha outstanding (α_out): 1.0 Alpha

- Note that all the TAO emissions in the block sum to 1.0 (0.3333 + 0.4 + 0.2667).
- Also note that the emissions change the constant product $k$. For example, for the Gaming subnet:
  - The original $k$ was: $$(10,000)\times(40,000) = 400,000,000$$ 
  - The new $k$ is: $$(10,000 + 0.3333)\times(40,000 + 0) = 400,013,332$$.


### Emission (α/block)

Represents the portion of the one $\alpha$ per block emission into a subnet that is received by this hotkey in this subnet, according to YC2 in the subnet. This can change every block.

:::caution Subnet zero does not receive any emissions
Subnet zero does not receive any emissions, either of TAO or $\alpha$. This is consistent with the fact that subnet zero does not have a pool associated with it.
:::

### Emission (τ)

Shows how a fraction of the one τ per block emission is distributed among all the subnet pools. For each subnet, this fraction is first calculated by dividing the subnet's TAO Pool (τ_in) by the sum of all TAO Pool (τ_in) across all the subnets. This fraction is then added to the TAO Pool (τ_in) of the subnet. This can change every block.

:::caution Subnet zero does not receive any emissions
Subnet zero does not receive any emissions, either of TAO or $\alpha$. This is consistent with the fact that subnet zero does not have a pool associated with it.
:::

---


## Tempo (k/n)

The tempo status of the subnet. Represented as (k/n) where "k" is the number of blocks elapsed since the last tempo and "n" is the total number of blocks in the tempo. The number "n" is a subnet hyperparameter and does not change every block.

## Local weight coeff (γ)

A multiplication factor between 0 and 1, applied to the relative proportion of a validator's stake in this subnet. Applied as (γ) × (a validator's $\alpha$ stake in this subnet) / (Total $\alpha$ stake in this subnet, i.e., Stake (α_out)). This γ-weighted relative proportion is used, in addition to other factors, in determining the overall stake weight of a validator in this subnet. This is a subnet parameter.

---

## Intuitions of dynamic TAO

This section presents a summary of intuitions about dynamic TAO. It is intended to help in conceptually grasping the dynamic TAO mechanism.


### TAO and dTAO

- The entire TAO token emitted from the coinbase in the lifetime of Bittensor network exists:
  - In coldkeys: In a TAO holder’s own coldkeys, for example, as subnet zero emissions into a subnet owner’s coldkey, and in exchange-owned coldkeys.
  - In subnet zero hotkeys: In the validator hotkeys of subnet zero as staked TAO and dividends.
  - In TAO reserves of subnet pools.
  - TAO exists nowhere else.
  - Furthermore, for the Bittensor network operations, only staked TAO matters, i.e., only the staked TAO in the validator hotkeys and in TAO reserves act as fuel in the Bittensor network operations. This means that for any discussions on consensus power, only the sum total of the entire staked TAO is considered&mdash;the TAO that is in the coldkeys or in exchanges does not contribute directly to Bittensor network operations.
- Similarly, the entire dTAO token emitted from the coinbase in the lifetime of Bittensor network exists:
  - **A dTAO token does not exist in a coldkey**. It only exists in the hotkeys of subnet validators, subnet miners and subnet owners.
  - In the subnet pool reserves. 
  - A dTAO token of one subnet is not fungible with a dTAO token of another subnet. 

### Staking and unstaking

- Staking and unstaking operations do not change the constant product $k$. On the contrary, emissions into a subnet pool do change the constant product $k$. Also see [Emissions](#emissions).
- Staking and unstaking operations are always local to a subnet and its subnet pool. 
- Stake is always held in dTAO token denominations. Furthermore, this dTAO stake exists only in the subnet validator hotkeys.

### Constant product vs. relative price

The constant product $k$ is a critical concept to understand how the relative price of an alpha token works. See the following: 
  - A subnet pool algorithm operates purely on the basis of maintaining the constant product $k$. The pool algorithm does not have any built-in mechanism to either target or maintain specific prices for the alpha tokens of a subnet. 
  - The relative price of an alpha token is only **indirectly** determined by the ratio of the token reserves. Furthermore, controlling these relative prices is **not the goal of the pool algorithm**. 
  - Hence, the relative price of a token **is a result, not a target,** of the token exchange activity.

### Pool reserves

- No one directly owns the subnet pool reserves. These reserves exist to provide liquidity to the subnet pools.
- However, as we saw in [Local weights vs τ_in](#local-weights-vs-τ_in) , a validator who holds X% of the dTAO stake in a subnet is said to own the same X% of the TAO reserve pool of that subnet. 
- In dynamic TAO the sum of α_in (also called alpha reserve) and α_out (all the alpha stake in the subnet) is treated as the the sum total of all alpha. **This is not not strictly true.** This sum total only represents the alpha associated with staking and unstaking. There is the another source of alpha, which is the emissions alpha. This emissions alpha is awarded to validators, subnet owners and miners. 
- More important, these emissions alpha bypasses the subnet pool and gets into the subnet directly from the coinbase. Furthermore, the only way for this emissions alpha to come out of the subnet is via unstaking, even though they did not participate in staking. 

### Subnet zero

- Even though subnet zero does not run any incentive mechanism, a hotkey can be registered in subnet zero and can accept stake TAO. This stake TAO can be either from a TAO holder or from another hotkey. 

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

As we saw in [Validator stake weight](#validator-stake-weight), the dynamic TAO scheme makes use of both global and local characteristics of the stake to strengthen the overall consensus security of the Bittensor network.