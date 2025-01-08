---
title: "Guide to Dynamic TAO"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Guide to Dynamic TAO

Dynamic TAO (D-TAO) is a planned evolution of the integrated tokenomic and governance model that underlies the Bittensor network. It represents a significant step in Bittensor's trajectory toward more thorough decentralization, in the following ways:

1. It eliminates the role of the centralized root network:

    - Prior to D-TAO, relative weight among subnets within the Bittensor network is determined by Yuma Consensus over the evaluations of the Root Network validators. This weight is critically important as it determines the rewards to different subnets and their participant miners and validators through the process of [emission](../glossary.md#emission). This gives a fundamentally centralizing role to the holders of Root Network validator keys.

    - In D-TAO, the relative weight of subnets is determined by their share of the network's staked TAO.

        TAO-holders can stake TAO into subnets in exchange for the subnet-specific dynamic currency, referred to as the subnet's alpha ($$\alpha$$) token. In this way, stakers 'vote with their TAO' for the value of the subnet, determining the emission payout to the validators and miners working in it.

        A staker stands to gain by staking into a high-value subnet (i.e. buying that subnet's alpha token) because the price of the alpha token is determined by the amount of TAO staked into the subnet. Those tokens are bound to gain in value as others who judge the value to be high continue to stake in. Stakers also receive a portion of emissions


 This token value represents the value of the commodities being produced by that subnet to the entire Bittensor network, and the people who buy TAO to stake into particular subnets.

1. In D-TAO tokenomics, holders of TAO ($$\tau$$) can participate in a subnet of their choice by *staking*&mdash;exchanging TAO for the subnet specific dynamic token, or alpha ($$\alpha$$). By staking into specific subnets, TAO holders can express their evaluations of different subnets, and stand to gain through the increase of the relative value of their subnet's alpha token relative to TAO.

1. D-TAO incorporates the consensus/voting function of subnet validators into the mechanism of their alpha token stake holdings.

## Subnet liquidity pools

A key mechanism introduced with Dynamic TAO mechanism is that each subnet has two liquidity reserves, one containing TAO, and one containing a subnet specific currency, referred to as that subnet's alpha token. The alpha token can be purchased by staking TAO into the reserve, which is initially empty. 

The *price* of a subnet's alpha token is determined by the ratio of TAO in that subnet's reserve to its alpha in reserve. Alpha currency that is not held in reserve but is which is held in the hotkeys of subnet participants is referred to as *alpha outstanding*.

Each block, liquidity is injected into one or the other of each subnet's liquidity pools, and distributed to the miners and validators working on the subnet, and their stakers. Whether the liquidity injected is TAO or alpha depends on which total supply is more plentiful in the network overall&mdash;see [Emissions in Dynamic TAO](#emissions-in-dynamic-tao) below for more detail. The rewards distributed to miners, validators, and stakers, is always in alpha.


- Each subnet has its own $\alpha$ token. For example, $\alpha$ is the token for subnet $\alpha$, and $\beta$ is the token for subnet $\beta$, and so on. **Note that the term $\alpha$ is also used to refer to any $\alpha$ token, not just the token for the subnet $\alpha$.**
- All token exchanges between TAO and $\alpha$ occur through the subnet pool. The subnet pool's reserve ratio determines the exchange rate.

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

## TAO reserve and alpha reserve


---

## Rate

We use the term **rate** to refer to relative price of the $\alpha$ token. This is calculated as a ratio of the subnet's pool reserve, i.e., ratio of TAO reserve and alpha reserves. This is commonly referred as the **exchange rate** between the subnet $\alpha$ token and the TAO token. 

$$
R = \frac{\tau_{in}}{\alpha_{in}}
$$

### Example

For example, if for subnet $\varepsilon$, its subnet pool contains TAO reserves of 1000 TAO units and its alpha reserves of 16000 $\varepsilon$ units, then the relative price of the $\varepsilon$ token is:

$$
R = \frac{\tau_{in}}{\alpha_{in}} = \frac{1000}{16000} = 0.0625
$$

Hence, 
$$
\text{1 } \varepsilon = 0.0625 \text{ TAO}
$$ 

This exchange rate can change every block when staking or unstaking or emissions occur on this subnet.

---

## Staking

With dynamic TAO, staking works as follows. See the below diagram.

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
3. The subnet pool algorithm uses the exchange rate and calculates the equivalent units of $\alpha$, for the TAO that was just added to the TAO reserve side. This amount of $\alpha$ is taken out of the alpha reserve of the pool and is sent to the validator’s hotkey. 
4. The validator’s hotkey holds the $\alpha$. This is referred as **Stake ($\alpha$)**. 

:::tip Stake is always expressed in alpha units
In dynamic TAO, except for the stake held in [subnet zero](#subnet-zero), the stake held by a hotkey in a subnet is always expressed in the subnet-specific $\alpha$ units and not TAO units.
:::

---

## Stake or alpha outstanding
 
Total stake in the subnet is referred as $\alpha_{out}$. This is the sum of all the [Stake](#staking)  present in all the validator hotkeys in this subnet. This is often referred as **$\alpha$ outstanding**. Compare this with [$\alpha$ reserve](#tao-reserve-and-alpha-reserve), which is the amount of $α_{in}$ in the subnet pool. The $\alpha$ outstanding can change every block. See a conceptual diagram below:


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

## Hotkey's stake share

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

1. When you issue an unstake command, `btcli stake remove`, and specify the units of $\alpha$ token you want to unstake, this $\alpha$ is first taken out of the validator’s hotkey and added to the $\alpha$ reserves of the subnet pool. 
2. The subnet pool algorithm then applies the latest exchange rate and calculates the equivalent TAO units for the $\alpha$ token units that were just added to the $\alpha$ reserves of the pool. 
3. These equivalent TAO units are then taken out of the TAO reserves of the subnet pool and are sent to the TAO holder’s coldkey.

### Example

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
Hence, while the hotkey's stake share in this subnet is 20%, its actual local weight (local voting power) in the subnet is 1,000 TAO units. This is the power of dynamic TAO mechanism. It converts a hotkey's alpha stake share into an equivalent TAO-denominated voting power in the subnet. This makes alpha stakes comparable across different subnets, even though these subnets might have very different amounts of alpha tokens outstanding.
:::

---

## Local weights vs TAO reserve

In any subnet, if you add up the local weights of all alpha holders, you will always get exactly the TAO reserve ($$\tau_{in}$$) of that subnet. 

This means:

- The total voting power in a subnet is fixed by its TAO reserve ($$\tau_{in}$$).
- For a given $$\tau_{in}$$, if a validator's hotkey in a subnet increases their local weight, it must come at the expense of others.

---

## Subnet zero

In dynamic TAO, subnet zero is a special subnet. It is designed to provide the following benefits:

- The subnet zero is the only subnet that does not have any subnet pool associated with it. TAO holders can only stake into subnet zero in TAO token denominations. Hence, TAO holders and validators who prefer not to think about either subnet-specific staking or about $\alpha$ tokens can stake in subnet zero. Their stake will remain in TAO denomination in the validator hotkeys as there is no notion of alpha in subnet zero.
- The subnet zero is also the only subnet that does not have any validating or mining defined on it. Incentive mechanisms cannot be run in subnet zero. Nevertheless, a validator's hotkey registered in subnet zero will accept stake TAO. 
- Because there is no subnet pool attached to the subnet zero, a validator hotkey's local weight in subnet zero is simply the raw TAO units that exist as stake in this hotkey. 

:::caution Staking in subnet zero
As a rule, you can only stake in TAO denomination in subnet zero, and only in the subnet-specific $\alpha$ denomination in all other subnets. Hence, stake in subnet zero is always expressed in TAO units.
:::

---

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

## Exchange Value

This is the potential instantaneous TAO you will receive, without considering slippage, if you [unstake](#unstaking) at this instant from this hotkey on this subnet. See [Swap](#swap) description. This can change every block.

:::tip Compare with TAO Equiv 
Whereas the [TAO Equiv](#local-weight-or-tao-equiv) indicates a validator's local stake weight, this Exchange Value shows TAO you will receive if you unstake now. 
:::

## Swap

This is the actual τ you will receive, after subtracting in the slippage charge, if you unstake from this hotkey now on this subnet. The slippage is calculated as:

$$
\text{Slippage} = 1 - \frac{\text{Swap(α → τ)}}{\text{Exchange Value}(α \times τ/α)}
$$

This can change every block.

---

:::danger The Emissions section is preliminary
The below Emissions section is still not settled yet. Proceed with caution.
:::

## Emission in Dynamic TAO


Emission is the process by which the Bittensor network rewards participants, including miners, validators, stakers, and subnet owners. It unfolds in two stages:

The Bittensor blockchain is the liquidity provider in the dynamic TAO. Without the liquidity provider injecting reserves into a subnet pool, the pool may run out of the reserves of one or both the tokens, thereby halting the entire subnet pool operation. This mechanism of liquidity injection is normal. 


- Injection into subnets
- Distribution to participants

### Injection to subnets

The first stage of emissions is injection of liquidity injections into the subnet pools, which occurs each block. Either TAO or alpha (the subnet's own token) will be injected into the subnet's corresponding reserve. Which currency is injected depends on whether the subnet's token's price is lower than the proportion of the total network's TAO held in the subnet's reserve. This acts to prevent the constant emission of liquidity from having a biasing effect on the evolution of pricing.

```
total_tao_in = sum([sn.tao_reserve for sn in subnets]) 
for i, sn in enumerate(subnets):
    tao_in = sn.tao_reserve/total_tao_in 
    if sn.alpha_price() < tao_in:
       tao_in = sn.alpha_price()
       alpha_in = 1 
    else:
        alpha_in = tao_in / sn.alpha_price()
    alpha_out = 2 - alpha_in
    sn.inject( tao_in, alpha_in, alpha_out )
```

### Distribution 



Stakers do get dividends - but not like miners or valis

If I have staked to OTF on root, any emission I get will be in TAO prop to my stake. 
If I stake to a dynamic subnet (anything other than root), I will get dividends in that subnet’s alpha. 

So the flow is something like this: 
1, Sn owner gets 18% 
Validators + miners get their due share
Stakers (stakers in root and subnet itself)


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

1. Total TAO reserves across all 3 subnets: 10,000 + 15,000 + 5,000 = 30,000 TAO
2. Emissions to the Gaming Subnet:
   - Emission into TAO reserve (τ_in): $$\;  \frac{10,000}{30,000} = 0.3333 \text{ TAO}$$
   - Emission into alpha reserve (α_in): 0 Alpha 
   - Emission into alpha outstanding (α_out): 1.0 Alpha
   - New $k$ = (10,000 + 0.3333) × 40,000 = 400,013,320

3. Emissions to the AI Subnet:
   - Emission into TAO reserve (τ_in): $$\;  \frac{15,000}{30,000} = 0.5 \text{ TAO}$$
   - Emission into alpha reserve (α_in): 0 Alpha 
   - Emission into alpha outstanding (α_out): 1.0 Alpha
   - New $k$ = (15,000 + 0.5) × 50,000 = 750,025,000
  
4. Emissions to the Storage Subnet:
   - Emission into TAO reserve (τ_in): $$\;  \frac{5,000}{30,000} = 0.1667 \text{ TAO}$$
   - Emission into alpha reserve (α_in): 0 Alpha 
   - Emission into alpha outstanding (α_out): 1.0 Alpha
   - New $k$ = (5,000 + 0.1667) × 25,000 = 125,004,175

- Note that all the TAO emissions in the block sum to 1.0 (0.3333 + 0.5 + 0.1667).
- Also note that the emissions change the constant product $k$ for each subnet. 


### Emission (alpha)

Represents the portion of the one $\alpha$ per block emission into a subnet that is received by this hotkey in this subnet, according to YC2 in the subnet. This can change every block.

:::caution Subnet zero does not receive any emissions
Subnet zero does not receive any emissions, either of TAO or $\alpha$. This is consistent with the fact that subnet zero does not have a pool associated with it.
:::

### Emission (TAO)

Shows how a fraction of the one τ per block emission is distributed among all the subnet pools. For each subnet, this fraction is first calculated by dividing the subnet's TAO Pool (τ_in) by the sum of all TAO Pool (τ_in) across all the subnets. This fraction is then added to the TAO Pool (τ_in) of the subnet. This can change every block.

:::caution Subnet zero does not receive any emissions
Subnet zero does not receive any emissions, either of TAO or $\alpha$. This is consistent with the fact that subnet zero does not have a pool associated with it.
:::

---


## Tempo

The tempo status of the subnet. Represented as $$\frac{k}{n}$$ where "k" is the number of blocks elapsed since the last tempo and "n" is the total number of blocks in the tempo. The number "n" is a subnet hyperparameter and does not change every block.

---

## Intuitions of dynamic TAO

This section presents a summary of intuitions about dynamic TAO. It is intended to help in conceptually grasping the dynamic TAO mechanism.


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

### Staking and unstaking

- Staking and unstaking operations do not change the constant product $k$. On the contrary, emissions into a subnet pool do change the constant product $k$. Also see [Emissions](#emissions).
- Staking and unstaking operations are always local to a subnet and its subnet pool. 
- Stake is always held in $\alpha$ token denominations. Furthermore, this $\alpha$ stake exists only in the subnet validator hotkeys.

### Constant product vs. relative price

The constant product $k$ is a critical concept to understand how the relative price of an alpha token works. See the following: 
  - A subnet pool algorithm operates purely on the basis of maintaining the constant product $k$. The pool algorithm does not have any built-in mechanism to either target or maintain specific prices for the alpha tokens of a subnet. 
  - The relative price of an alpha token is only **indirectly** determined by the ratio of the token reserves. Furthermore, controlling these relative prices is **not the goal of the pool algorithm**. 
  - Hence, the relative price of a token **is a result, not a target,** of the token exchange activity.

### Pool reserves

- No one directly owns the subnet pool reserves. These reserves exist to provide liquidity to the subnet pools.
- However, as we saw in [Local weights vs TAO reserve](#local-weights-vs-tao-reserve) , a validator who holds X% of the $\alpha$ stake in a subnet is said to own the same X% of the TAO reserve pool of that subnet. 
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






## ???
Dynamic tau is a planned evolution of the bit tensor network, as part of its overall trajectory towards greater decentralization in the current iteration, which we can refer to as ‘static tau’. Subnets are evaluated by a committee of validators in the root network, the root validators. And this represents a way in which the project is fundamentally centralized and So during emissions, every tempo with the tensor network emits, a stock of tau, and this is divided between the sub networks and then allocated to the miners, validators and sub Network owners in this subnets, okay, based on the consensus of the root net validators over their subjective judgments of the value of the subnets and dynamic tail after The transition. There's no root network valid auditors. Instead, I the emissions are divided between the subnets based on the based on relative strength of their staking pools. So how much Tau has been staked into the pool, which now belongs to eat each subnet. So each subnet has a pool of tau as well as a pool of alpha, what we refer to as, in the general sense, alpha, but each subnet will have its own coke. So and so the weight of a sub network in dynamic tau is the proportion of the total tau staked into the bit tensor network that has been staked into the subnet. So the subnets weight is its the value of its staked tau divided by the total value of tau staked into the network. So I mean to say just tau in the network, the total amount of tau in the network not staked into the network. Well, no, it is. It's steak tau. It is the percentage of steak tau, because tau can tau can be staked either into a subnet. Well, yeah, a subnet, and so there's the root, no, instead of the yeah, there's subnet zero, which you can stake into. Yeah, so as a way of staking generically into tau, you can stake into subnet zero, right and right, yeah, there's this biasing variable between being staked into sudden net zero and other ones, because over the long term, you want to disincentivize people from being staked into the network. You want to incentivize them to put their money on specific projects, rather than just into the network. And you know, by by staking into subnet zero, you are, in effect, staking into just the network itself. Because, yeah, you're not staked. Yeah. You don't get an alpha in in exchange for your stake. You're just on the board with subnet zero. Okay? Right? And throughout, there's this concept of like proportional stake, as opposed to number of tokens being what matters, which is sort of weird, but Jake described it as more efficient, which I'm sure it is. I Right. But I guess it's like when you're when you right. So every block I in every block, there's a mission into the subnet, and every tempo, there's a mission from the subnet into the miners and validators. So it's this two stage emission process. So every block, what is it? One tau or one alpha goes into the subnet pool. And then, is there a mission? And then, when does a mission out happen? And is that from the pool, or is that from the fucking root network? Outstanding question there. Okay, and then also this affects governance, the governance models change. We need to find out about that, because that's completely unknown. I