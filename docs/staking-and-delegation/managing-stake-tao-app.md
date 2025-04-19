---
title: "Managing Stake with tao.app"
---

[Tao.app](https://tao.app) offers a portal to real-time tokenomic data about the Bittensor ecoystems and all its subnets, and allows users to securely manage their stake using the Bittensor wallet browser extension.

## Subnets Explorer


## Metrics/dTAO Market Overview

The dTAO Market Overview panel gives ecosystem users and investors an overview into the many measurements for assessing various important aspects of the state of the overall TAO ecosystem.

The first three are covered in-depth below.

### Sum of Alpha Prices

The Sum of Alpha Prices is the combined value of all active subnet token prices (Alpha tokens) relative to TAO. 

#### How it works

When there's no trading activity, the AMM mechanism causes Alpha token prices to converge back toward 1, maintaining price equilibrium.
When trading is active, prices diverge &mdash often significantly &mdash based on supply/demand dynamics within each subnet's liquidity pool.
Because prices are AMM-driven, the sum can theoretically grow infinitely if there's significant buy pressure on multiple subnet at once.

#### Why it matters

The most useful aspect of this overview metric is that it can give you, as an ecosystem participant, insight into the level of speculation currently in the market overall over a given time period.

When the sum is closer to around 1 for the time period specified, it suggest that there has been little market pressure, low activity, and/or natural decay back to equilibrium between TAO and Alpha tokens.
When the sum is greater than 1 for the time period specified, it suggests that at least some subnets are experiencing buying pressure, which is driving up prices.
When there is a high sum (e.g. 10+) in a relatively short time frame, it could indicate widespread speculation, possibly even signaling a bubble, or at least high usage/subnet demand.

### TAO injected vs TAO Reserves

#### How it works

In the TAO ecosystem, each subnet has a liquidity pool composed of TAO. 
The protocol itself injects a certain amount of TAO into these pools to bootstrap liquidity and enable subnet token trading.
This is known as TAO injected.

Meanwhile, participants (users, validators, or stakers) can also add TAO to these pools by staking, contributing to TAO Reserves.
Therefore:

**TAO Reserves = TAO injected + TAO Staked**
(*Root is excluded from this calculation*)

#### Why it matters

The reason this matters is that ecosystem participants want to compare the steadily injecetd TAO over time with the actual reserve growth so they can distinguish between protocol support and organic user contribution to subnet liquidity.

##### Questions you can answer

* Is the ecosystem bootstrapped or community-supported overall?
    * If TAO Reserves are mostly from injected TAO, the protocol is still actively seeding subnet economies.
    * If TAO Reserves grow beyond injected TAO, users are staking their own TAO &mdash showing organic adoption.
* Are subnet markets self-sustaining?
    A growing gap between Reserves and injected TAO (with Reserves > injected) suggests increasing confidence in subnet economies and less reliance on protocol support.
* Are there shifts in capital allocation?
    Tracking this over time gives early signals on whether participants are migrating stake into subnets &mdash possibly due to new oppurtunities, better APY, or growing demand in general.

##### Watch the gap

TAO injected grows at a predictable pace, linear pace &mdash set by the protocol.
TAO Reserves, however, are dynamic and user-driven.

The gap between them is a key signal of:

* **Subnet traction**: A widening gap indicates increased user staking and growing engagement across subnets.
* **Ecosystem maturity**: The longer the gap is remains elevated, the more sustainable and self-sufficent the ecosystem becomes.
* **Decentralization trends**: Sustained growth in the gap signal a shift away from protocol-driven liquidity toward community-supported subnet economies. 

### Reserves Over Injected

### How it works

The metric shows the percentage difference between TAO Reserves and TAO injected across all subnets (excluding Root).
It's calculated as:

* ((TAO Reserves - TAO injected)/TAO injected) x 100

Where:
- TAO injected is the protocol's contribution to subnet liquidity
- TAO Reserves = Injected + STaked (user-contributed TAO)

A value of: 
- 0% means subnets are sustained entirely by protocol injection
- > 0% means users are staking extra TAO into subnet reserves
- < 0% may suggest liquidity withdrawal or rebalancing

### Why it matters

This metric matters because ecosystem participants may want to track how user-staked TAO compares to protocol-injected TAO over time, so they can understand where the momentem in subnet liquidity is coming from and how it's evolving.

**What this trend shows:**
- Sustained positive values indicate organic adoption and decentralization
- Fluctuations may reflect shifting sentiment, incentives, or volatility
- Negative dips could warn of capital outflows or cooling subnet interest

::: Tip: Read it like a sentiment index

Because it's visualized over time, this metric works like a subnet sentiment indicator &mdash giving quick feedback on:
- User engagement trends
- Protocol reliance
- Liquidity health across the ecosystem
:::

#### How Reserves OVer Injected differs from TAO injected vs TAO reserves

This metric is related to TAO Injected vs TAO Reserves, but instead of just showing the absolute values of protocol and user-contributed TAO in subnets, it shows the percent difference over time.
Where TAO Injected vs TAO Reserves shows the RAW TAO amount (e.g. 12M vs 15M), the Reserves Over Injected metric shows the percent difference (e.g. 25%)
Over time, Reserves Over Injected helps track how dependent or independent that liquidity is from protocol injects, whereas TAO Injected vs TAO Reserves helps track how the actual volume of liquidity is growing.
Therefore, the primary use of TAO Injected vs TAO Reserves is understanding scale and growth of subnet liquidity, while the primary use of Reserves Over Injected is understanding user participation and sustainability of that growth.

The kind of insights that can be gleaned from TAO Injected vs TAO Reserves are volume-based: "How big is the pool?", whereas Reserves over Injected are efficiency-based: "How much is user-driven?" The visual trend for TAO Injected vs TAO Reserves shows how much TAO is in play and how fast it's growing, whereas the visual trend for Reserves Over Injected metric tells you whether subnets are becoming more decentralized over time.


## Subnet details
