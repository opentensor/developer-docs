---
title: "Conceptual guide to Dynamic TAO"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Conceptual guide to Dynamic TAO

Dynamic TAO is a planned evolution of the integrated tokenomic and governance model that underlies the Bittensor network. It represents a significant step in Bittensor's trajectory toward more thorough decentralization, by eliminating the centralized role of the root network in judging the value of subnetworks. Instead, in the Dynamic TAO model, the relative value of subnets is determined in a wholly distributed fashion: by the amount of TAO that users have staked into their currency reserves.

## Subnet liquidity reserves

A key mechanism introduced with Dynamic TAO mechanism is that each subnet has two liquidity reserves, one containing TAO($$\tau$$)&mdash;the currency of the Bittensor network, and one containing a subnet specific "dynamic" currency, referred to as that subnet's alpha ($$\alpha$$) token. The alpha token is purchased by staking TAO into the subnet's reserve, which is initially empty. 

A subnet's economy therefore consists of three pools of currency:
- **Tao reserves**: the amount of tao ($$\tau$$) that has been staked into the subnet
- **Alpha reserves**: the amount of alpha ($$\alpha$$) available for purchase
- **Alpha outstanding**: the amount of alpha ($$\alpha$$) held in the hotkeys of subnet participants.

The *price* of a subnet's alpha token is determined by the ratio of TAO in that subnet's reserve to its alpha in reserve. Alpha currency that is not held in reserve but is which is held in the hotkeys of subnet participants is referred to as *alpha outstanding*.

Each passing block, liquidity is injected into one or the other of each subnet's liquidity pools, tao or alpha, and rewards are distributed to the miners and validators working on the subnet, and their stakers. Whether the liquidity injected is TAO or alpha depends on which total supply is more plentiful in the network overall. The rewards distributed to miners, validators, and stakers is always in alpha.

:::tip
Each subnet has its own currency with its own name, but in the abstract a given subnet's token is referred to as its $\alpha$ token. With a set of subnets in mind, we refer to $\alpha$ as the token for subnet $\alpha$, $$\beta$$ as the token for subnet $$\beta$$, $$\gamma$$ as the token for subnet $$\gamma$$, and so on.

These subnet tokens contrast with TAO ($$\tau$$), the token of the Bittensor network as a whole. A subnet pool's reserve ratio (tao/alpha) determines the price of its alpha token.
:::
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

## Decentralized evaluation of subnets

This relative value or *weight* of subnets within Bittensor is critically important as it determines the rewards granted to different subnets and their participant miners and validators through the process of [emission](../glossary.md#emission). This gives a fundamentally centralizing role to the holders of Root Network validator keys. Prior to Dynamic TAO, relative weight among subnets within the Bittensor network is determined by Yuma Consensus over the evaluations of the Root Network validators. 

In Dynamic TAO, the relative weight of subnets is determined by their share of the network's staked TAO.
TAO-holders can stake TAO into subnets in exchange for the subnet-specific dynamic currency, referred to as the subnet's alpha ($$\alpha$$) token. In this way, stakers 'vote with their TAO' for the value of the subnet, determining the emission payout to the validators and miners working in it. In return, stakers receive a portion of the rewards emitted to the subnet.


## Subnet Zero

In dynamic TAO, Subnet Zero is a special subnet. It is the only subnet that does not have its own $\alpha$ currency, and no mining or validating activity takes place. It offers a way for $\tau$-holders to stake $\tau$ into a validator in a way that applies across all subnets in which that validator works. This works because the weight of a validator in a subnet includes both their share of that subnet's $\alpha$ and their share of staked TAO in Subnet Zero&mdash;a validator's stake weight equals their alpha stake plus their tau stake times the 'tao weight' parameter:
$$

\text{Validator stake weight} = \text{Alpha stake} (\alpha) + \text{TAO stake} (\tau) \times \text{TAO weight} 

$$

A validator's stake weight determines a subnet's voting power when evaluating miners as well as their share of the emissions.


 tokens can stake in Subnet Zero. Their stake will remain in TAO denomination in the validator hotkeys as there is no notion of alpha in Subnet Zero.
- The Subnet Zero is also the only subnet that does not have any validating or mining defined on it. Incentive mechanisms cannot be run in Subnet Zero. Nevertheless, a validator's hotkey registered in Subnet Zero will accept stake TAO. 
- Because there is no subnet pool attached to the Subnet Zero, a validator hotkey's local weight in Subnet Zero is simply the raw TAO units that exist as stake in this hotkey. 


- Even though Subnet Zero does not run any incentive mechanism, a hotkey can be registered in Subnet Zero and can accept stake TAO. This stake TAO can be either from a TAO holder or from another hotkey. 

:::caution Staking in Subnet Zero
As a rule, you can only stake in TAO denomination in Subnet Zero, and only in the subnet-specific $\alpha$ denomination in all other subnets. Hence, stake in Subnet Zero is always expressed in TAO units.
:::



## Price/rate of alpha tokens

The *rate* or *price* of a subnet $\alpha$ token is calculated as a ratio of the subnet's TAO reserve and alpha reserves.

$$
R = \frac{\tau_{in}}{\alpha_{in}}
$$

For example, if for subnet $\varepsilon$, its subnet pool contains TAO reserves of 1000 TAO units and its alpha reserves of 16000 $\varepsilon$ units, then the relative price of the $\varepsilon$ token is:

$$
R = \frac{\tau_{in}}{\alpha_{in}} = \frac{1000}{16000} = 0.0625
$$

Hence, 
$$
\text{1 } \varepsilon = 0.0625 \text{ TAO}
$$ 

This exchange rate can change every block when staking or unstaking or emissions occur on this subnet.


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
