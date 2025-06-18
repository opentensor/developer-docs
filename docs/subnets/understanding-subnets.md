---
title: "Understanding Subnets"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Understanding Subnets

In Bittensor, a subnet is an incentive-based competition marketplace that produces a specific kind of digital commodity related to artificial intelligence. It consists of a community of miners that produce the commodity, and a community of validators that measure the miners' work to ensure its quality. Often, parties that serve as validators do so in order to run applications that make use of the services provided by the miners.

Emissions of TAO (τ) from Bittensor&mdash;are distributed among miners and validators based on their performance within subnets, and based on the relative performance of subnets within Bittensor.

## Anatomy of a subnet

The illustration below shows the main components of a subnet:

1. A subnet's [incentive mechanism](../learn/anatomy-of-incentive-mechanism) defines the work that miners must perform, and the work that validators must perform to evaluate the miners' work. The incentive mechanism is unique to the subnet, and maintained off-chain by the subnet creator in the form of a code-repository that defines the interface for miners and validators to participate. For example, see [Subnet 1](https://github.com/macrocosm-os/prompting).
2. **Miners** perform some useful work as defined in the subnet's incentive mechanism. For example, in Subnet 1, miners serve chat prompt completion.
3. **Validators** independently evaluate the task performed by the subnet miners, according to standards defined by the subnet's incentive mechanism.
4. Validators each score the performance of each miner over the most recent time period. The matrix of these scores, by each validator for each miner, serves as input to **Yuma Consensus**.
5. The Yuma Consensus algorithm operates on-chain, and determines emissions to miners, validators, and subnet creators across the platform, based on performance.

<center>
<ThemedImage
alt="Simplified Bittensor Network"
sources={{
    light: useBaseUrl('/img/docs/subnet-high-level.svg'),
    dark: useBaseUrl('/img/docs/dark-subnet-high-level.svg'),
  }}
style={{width: 600}}
/>
</center>

## Subnet liquidity reserves

The key mechanism introduced with Dynamic TAO is that each subnet functions as its own _automated market maker_ (_AMM_), with two liquidity reserves, one containing TAO($$\tau$$)&mdash;the currency of the Bittensor network, and one containing a subnet specific "dynamic" currency, referred to as that subnet's alpha ($$\alpha$$) token. The alpha token is purchased by staking TAO into the subnet's reserve, which is initialized with a negligible amount of liquidity (1e-9).

A subnet's economy therefore consists of three pools of currency:

- **Tao reserves**: the amount of tao ($$\tau$$) that has been staked into the subnet
- **Alpha reserves**: the amount of alpha ($$\alpha$$) available for purchase
- **Alpha outstanding**: the amount of alpha ($$\alpha$$) held in the hotkeys of a subnet's participants, also referred to as the total _stake_ in the subnet

:::tip Terminology: alpha tokens
Each subnet has its own currency with its own name, but in the abstract a given subnet's token is referred to as its $\alpha$ token. With a set of subnets in mind, we refer to $\alpha$ as the token for subnet $\alpha$, $$\beta$$ as the token for subnet $$\beta$$, $$\gamma$$ as the token for subnet $$\gamma$$, and so on.

These subnet tokens contrast with TAO ($$\tau$$), the token of the Bittensor network as a whole. A subnet pool's reserve ratio (tao/alpha) determines the price of its alpha token.
:::
The _price_ of a subnet's alpha token is determined by the ratio of TAO in that subnet's reserve to its alpha in reserve. Alpha currency that is not held in reserve but is which is held in the hotkeys of subnet participants is referred to as _alpha outstanding_.

Run the `btcli subnet list` command with the Dynamic TAO-enabled `btcli` to view information about the subnets and their currency reserves on Bittensor testnet.

```txt
        ┃               ┃ Price       ┃ Market Cap  ┃              ┃                         ┃               ┃              ┃
 Netuid ┃ Name          ┃ (τ_in/α_in) ┃ (α * Price) ┃ Emission (τ) ┃ P (τ_in, α_in)          ┃ Stake (α_out) ┃ Supply (α)   ┃ Tempo (k/n)
━━━━━━━━╇━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━╇━━━━━━━━━━━━━╇━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━╇━━━━━━━━━━━━━
   0    │ τ root        │ 1.00 τ/Τ    │ τ 5.93m     │ τ 0.0000     │ -, -                    │ Τ 5.93m       │ 5.93m Τ /21M │ -/-
   3    │ γ templar     │ 0.02 τ/γ    │ τ 57.32     │ τ 0.0197     │ τ 31.44, 1.43k γ        │ 1.18k γ       │ 2.61k γ /21M │ 67/99
   9    │ ι pretrain    │ 0.02 τ/ι    │ τ 55.38     │ τ 0.0194     │ τ 30.91, 1.46k ι        │ 1.16k ι       │ 2.61k ι /21M │ 73/99
   1    │ α apex        │ 0.02 τ/α    │ τ 54.45     │ τ 0.0192     │ τ 30.65, 1.47k α        │ 1.14k α       │ 2.61k α /21M │ 65/99
   2    │ β omron       │ 0.02 τ/β    │ τ 54.45     │ τ 0.0192     │ τ 30.65, 1.47k β        │ 1.14k β       │ 2.61k β /21M │ 66/99
   4    │ δ targon      │ 0.02 τ/δ    │ τ 54.45     │ τ 0.0192     │ τ 30.65, 1.47k δ        │ 1.14k δ       │ 2.61k δ /21M │ 68/99
   ...
```

See: [Using Dynamic TAO](./index.md#using-dynamic-tao)

## Price/rate of alpha tokens

### Ideal price

For each subnet, you'll see that _Price_ (listed in the third column) is a function of TAO in reserve `τ_in` over alpha in reserve `α_in`

$$
Price = \frac{\tau_{in}}{\alpha_{in}}
$$

<details>
  <summary><strong>See how it's calculated!</strong></summary>

    For example, if for subnet $\varepsilon$, its subnet pool contains TAO reserves of 1000 TAO units and its alpha reserves of 16000 $\varepsilon$ units, then the relative price of the $\varepsilon$ token is:

          $$
          R = \frac{\tau_{in}}{\alpha_{in}} = \frac{1000}{16000} = 0.0625
          $$

          Hence,

          $$
          \text{1 } \varepsilon = 0.0625 \text{ TAO}
          $$

This exchange rate can change every block when staking or unstaking or emissions occur on this subnet.

</details>

## Emissions in Dynamic TAO

Liquidity is steadily emitted into the Bittensor token economy according to an algorithm intended to foster growth while stabilizing prices and protecting them from manipulation.

Each block:

- the chain emits TAO and injects it into the TAO reserves of the subnets.
<!-- (how much TAO, is this still 1/block for the whole network ???) -->
- the chain emits alpha tokens at twice the base alpha emission rate (which starts at 1 α/block and follows the same halving schedule as TAO). These emitted alpha tokens are allocated between:
  - the subnet's alpha reserve (increasing available liquidity)
  - alpha outstanding (incentives for miners, validators, and subnet creators)

See the main article: [Emissions in Dynamic TAO](../emissions.md)

## Decentralized evaluation of subnets

The relative value or _weight_ of subnets within Bittensor is critically important as it determines emissions to different subnets and their participant miners and validators. Prior to Dynamic TAO, relative weight among subnets within the Bittensor network were determined by Yuma Consensus over the evaluations of the Root Network validators. This gives a fundamentally centralizing role to the holders of Root Network validator keys.

In Dynamic TAO, the relative weight is determined organically according to the emergent market value of the subnet, as represented by its stabilized token price. TAO-holders can stake TAO into subnets in exchange for the subnet-specific dynamic currency, referred to as the subnet's alpha ($$\alpha$$) token. In this way, stakers 'vote with their TAO' for the value of the subnet, determining the emissions to the validators and miners working in it. In return, stakers extract a share of the subnet's emissions.

## Subnet Zero

In Dynamic TAO, Subnet Zero&mdash;or _Root Subnet_&mdash;is a special subnet. It is the only subnet that does not have its own $\alpha$ currency. No miners can register on subnet zero, and no validation work is performed. However validators can register, and $\tau$-holders can stake to those validators, as with any other subnet. This offers a mechanism for $\tau$-holders to stake $\tau$ into validators in a subnet-agnostic way. This works because the weight of a validator in a subnet includes both their share of that subnet's $\alpha$ and their share of TAO staked into the root subnet.

Over time, the emissions generated by TAO staked into Subnet Zero will decrease, relative to stake held in the alpha currency of active subnets. See [Note on evolution of Bittensor token economy](../emissions.md#note-on-evolution-of-bittensor-token-economy).

## Validator stake weight

A validator's stake weight in a subnet equals their alpha stake plus their TAO stake times the `tao_weight` parameter:

$$

\text{Validator stake weight} = \text{Alpha stake} (\alpha) + \text{TAO stake} (\tau) \times \text{TAO weight}


$$

:::tip
A validator's stake weight in Subnet Zero is simply their staked TAO.
:::

A validator's relative stake weight (their stake weight over the total stake weight) in a subnet determines their voting power when evaluating miners, and determines their share of emissions.

$$

\text{Validator x's relative stake weight}
= \frac{\alpha_x + \tau_x \times w_{\tau}}
       {\displaystyle \sum_{v \in \text{validators}}
        \bigl(\alpha_v + \tau_v \times w_{\tau}\bigr)}


$$
