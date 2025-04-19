---
title: "Managing Stake with tao.app"
---

[Tao.app](https://tao.app) offers a portal to real-time tokenomic data about the Bittensor ecoystems and all its subnets, and allows users to securely manage their stake using the Bittensor wallet browser extension.

## Subnets Explorer


## Metrics/dTAO Market Overview

The dTAO Market Overview panel gives ecosystem users and investors an overview into the many measurements for assessing various important aspects of the state of the overall TAO ecosystem. 

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

The reason this matters is that ecosystem participants want to understand how much of the total liquidy in subnets comes from protocol support versus user contribution, so they can gauge ecosystem health and decentralization as a whole across subnets.

##### Questions you can answer

* Is the ecosystem bootstrapped or community-supported overall?
    * If TAO Reserves are mostly from injected TAO, the protocol is still actively seeding subnet economies.
    * If TAO Reserves grow beyond injected TAO, users are staking their own TAO&mdashshowing organic adoption.
* Are subnet markets self-sustaining?
    A growing gap between Reserves and injected TAO (with Reserves > injected) suggests increasing confidence in subnet economies and less reliance on protocol support.
* Are there shifts in capital allocation?
    Tracking this over time gives early signals on whether participants are migrating stake into subnets&mdashpossibly due to new oppurtunities, better APY, or growing demand in general.






## Subnet details
