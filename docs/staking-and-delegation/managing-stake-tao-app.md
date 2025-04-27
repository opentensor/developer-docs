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
When trading is active, prices diverge&mdash;often significantly&mdash;based on supply/demand dynamics within each subnet's liquidity pool.
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

#### How it works

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

#### Why it matters

This metric matters because ecosystem participants may want to track how user-staked TAO compares to protocol-injected TAO over time, so they can understand where the momentum in subnet liquidity is coming from and how it's evolving.

**What this trend shows:**
- Sustained positive values indicate organic adoption and decentralization
- Fluctuations may reflect shifting sentiment, incentives, or volatility
- Negative dips could warn of capital outflows or cooling subnet interest

:::tip
Because it's visualized over time, this metric works like a subnet sentiment indicator&mdash;giving quick feedback on:
- User engagement trends
- Protocol reliance
- Liquidity health across the ecosystem
:::

#### How Reserves Over Injected differs from TAO injected vs TAO reserves

This metric is related to TAO Injected vs TAO Reserves, but instead of just showing the absolute values of protocol and user-contributed TAO in subnets, it shows the percent difference over time.
Where TAO Injected vs TAO Reserves shows the RAW TAO amount (e.g. 12M vs 15M), the Reserves Over Injected metric shows the percent difference (e.g. 25%)
Over time, Reserves Over Injected helps track how dependent or independent that liquidity is from protocol injects, whereas TAO Injected vs TAO Reserves helps track how the actual volume of liquidity is growing.
Therefore, the primary use of TAO Injected vs TAO Reserves is understanding scale and growth of subnet liquidity, while the primary use of Reserves Over Injected is understanding user participation and sustainability of that growth.

The kind of insights that can be gleaned from TAO Injected vs TAO Reserves are volume-based: "How big is the pool?", whereas Reserves over Injected are efficiency-based: "How much is user-driven?" The visual trend for TAO Injected vs TAO Reserves shows how much TAO is in play and how fast it's growing, whereas the visual trend for Reserves Over Injected metric tells you whether subnets are becoming more decentralized over time.

### Root TAO

#### How it works

Root TAO represents the total amount of TAO on Subnet 0 (the root subnet).
This includes all TAO staked or held on Root by users participating in its economy.
* Subnet 0 (Root) is the core subnet of the TAO network.
* It plays a foundational role in TAO emissions, staking rewards, and potentially governance or coordination.
* The metric captures how much TAO is currently committed to Root&mdash;either for rewards, yield, or protocol-level participation.

#### Why it matters

This metric matters because ecosystem participants may want to see how much TAO is allocated to Root so they can understand its importance, yield potential, and systematic role in the broader network.

* **Understand its importance**: Since Root is the foundational subnet (Subnet 0), if a large amoutn of TAO is held on Root, it suggests it's considered secure, strategic, or central to ecosystem function.
So you would expect it to go down, as the Bittensor network gets more decentralized, all things being equal.
Likewise, users may want to know: *Is Root where serious participants are putting their TAO?*
Their motivation being that they want to follow where the majority of TAO is flowing so they don't miss out on the backbone of the network&mdash;whether that be Root or some subset of subnets.

* **Understand yield potential**: 
    * Root offers staking rewards, so the amount of TAO staked there can:
        * Reflect current composition of those rewards.
        * Help users estimate APY (e.g. more TAO = lower yield per token)
    * Users may want to compare this measurement to similar metrics in other subnets to optimize returns.
Overall, users may just want to evaluate if staking on Root is worth it compared to  other subnets.
    
In summary, Root TAO reveals:
* Network confidence: A high TAO balance on Root may reflect trust in Root's reward mecahanics, stability, or APY.
* Risk Appetite: If TAO is *shifting away* from Root into subnets, it could signal users taking on more risk for higher potential rewards.
* Capital Flow: Watching this over time helps users spot macro shifts in TAO allocation strategies&mdash;e.g. are people rotating out of Root into newer subnets?

### TAO Emmitted by Root Stakers

#### How it works

TAO Emmitted to Root Stakers measure the total amount of TAO distributed every hour to users who are staking their TAO on Subnet 0 (Root).

* Emissions are protocol-defined and tied to the amount of TAO staked on Root and other factors such as network inflation, block production, and reward schedules.
* This value updates hourly, offering real-time visibility into how much TAO is being paid out to Root stakers.

In short, it's a live indicator of staking rewards from the Root subnet.

#### Why it matters

This metric matters because ecosystem participants want to monitor how much TAO is being emitted to Root stakers so they can evaluate reward opportunities, staking competitiveness, and protocol-level economic dynamics.

##### What this metric helps users understand

* **Yield potential**: Higher hourly emissions can mean greater staking rewards (unless heavily diluted by many stakers). Users can compare this with Extrapolated Root APY (Hourly) adn other subnets' metrics to decide where to stake.
* **Network sentiment**: Rising emissions can attract more staking activity (and competition) to Subnet 0. Sudden drops may suggest liquidity shifts, or broader economic changes in the network.
* **Timing strategy**: Since this is tracked hourly, user can:
    * Spot when emissions spike or dip
    * Time their stake entries/exits
    * Evaluate short-term vs long-term reward patterns

### Extrapolated Root APY (hourly)

#### How it works

Extrapolated Root APY (hourly) is an estimated Annual Percentage Yield for staking TAO on Subnet 0 (Root). 
It is calculated based on the current hourly emissions and the total amount of TAO staked on Root.

* It's an extrapolation: meaning it projects what your yearly yield would be *if the current hourly emission rate held constant*.
* Actual APY may vary based on:
    * The validator you are stked to (some cover more subnets than others)
    * The validator's VTRUST score, which affects reward splits
    * Your share of total stake on that validator

#### Why it matters

This metric matters because TAO stakers want to estimate the potential yield from staking on Root so they can make informed decisions about where to allocate their TAO and which validator to stake with.

##### This metric helps you

* Estimate real-time staking performance
    * You can compare this APY to other subnets, or to other validators on Root.
* Choose optimal validators
    * A validator's VTRUST and subnet coverage affect your share of emissions. Lower VTRUST = potentially lower rewards.
* Timing your staking decisions
    * Since the APY is extrapolated from hourly data, you can track trends and decide whether it's a good time to stake, wait, or reallocate.

#### How Extrapolated Root APY (hourly) connects to TAO Emitted to Root Stakers (hourly)

* Tao Emitted to Root Stakers (hourly) gives you the raw emission rate - the total TAO being distributed per hour.
* Extrapolated Root APY (hourly) converts that raw emission data into a user-facing yield estimate based on the total stake in Root.

You can this of this like:

Emission Rate (TAO/hour) -> APY Estimate (Yield/year)

If emissions stay the same but more users stake, APY goes down due to dilution.
If emissions go up but stake stays constant, APY goes up.

Together, these two metrics give you both:
* The supply side (how much TAO is flowing in)
* and the reward side (how much you might earn as a result)

### TAO Needed to Sustain Prices for 360 Blocks

#### How it works

TAO Needed to Sustain Prices for 360 Blocks measure the total amount of TAO that would need to be staked across all subnets (excluding Root) to keep Alpha token prices stable for the next 360 blocks&mdash;roughly 72 minutes.
* Alpha token prices are determined by automated market makers (AMMs). As users buy Alpha tokens, their price increases.
* This metric estimates the inflow of TAO required to offset that upward pressue&mdash;essentially, how much additional stake would be needed to keep prices from drifting higher due to existing demand and emission pressure.

Even though the prices are per subnet, this metric aggregates the TAO requirement across all active subnets to maintain their *current* token prices over a short time horizon.

The Y axis shows the amount of TAO needed. The X axis here shows the last 85 time intervals&mdash;or in this case, 72 min periods.

#### Why it matters

This metric matters because ecosystem participants want to see how much TAO is needed to sustain current Alpha token prices across subnets so they can gauge systemic demand, staking pressure, and the potential for price movement.

##### This metric helps answer:

* Is the subnet layer in balance or under pressure?
    * A low required amount suggests price stability&mdash;minimal new stake needed to maintain current prices.
    * A high required amount indicates the system is under staking pressure or speculative demand, making price inflation likely without fresh TAO inflow.
* Is now a good time to stake, in general?
    * If the require TAO is high, prices may soon rise. Early staking could be strategic.
* Are we nearing an inflection point?
    * Spikes in this value can indicate ecosystem stress&mdash;too much demand and too little backing&mdash;signalling volatility or unsustainable growth.
* Could prices deflate soon?
    * If the metric drops sharply, it could mean less staking demand or waning activity&mdash;potentially triggering Alpha price corrections.

##### Macro framing

This is a health check for the subnet layer. It gives ecosystem participants a short-term forecast of:
* How much stake pressure the system is under
* Whether prices are likely to remain stable
* Where the next capital flow might be needed

##### Why it still works as a measure across all subnets (exluding Root)

Even though the measurement is across all subnets, it still works because:
* The price stablization logic is **local per subnet** (driven by each AMM)
* But the **metric you see** is the **cumulative TAO** that would be needed to flow into the **entire subnet layer** to hold current Alpha prices steady across the board.

So it still gives users an **ecosystem-wide signal** about:
* How much **total TAO inflow** is required to avoid Alpha price rises
* How much **staking pressure** is present across all subnets as a whole
* Whether current prices are **sustainable without new capital**

In summary, each subnet has its own Alpha token and price.
This metric adds up the required TAO needed in each subnet to maintain its own Alpha token price, giving an ecosystem-wide snapshot of staking pressure.

##### Why so low?

You might notice that the total amount of TAO to sustain prices for 360 blocks seems, maybe somewhat surprisingly, low&mdash;for example ~4 TAO needed across all subnets to keep prices stable.
This is because:

1. AMM-based Alpha pricing responds to supply
    Alpha token prices are typically determined by an AMM curve, something like:
    Price ⍺ Emissions / TAO in Reserve

    Because of this: 
        * If the current Alpha price is stable, and
        * The recent trading/emission pressure is low, then
        * IT might only take a small amoutn of additional TAO to maintain price for a short horizon (360 blocks = ~72 min)
    So a low number doesn't mean the subnets are unhealthy&mdash;it may just mean:
        * Prices are already well-supported by current reserves, or
        * There's not much buying pressure driving Alpha prices upward in that window
1. 360 blocks is a short horizon: 360 blocks (~72 min) is a very short forecasting window. Even if there's underlying imbalance building, the near-term TAO needed to hold prices steady might still be small. Compare to a weather report:
    * 72-minute forecast: "No big storm coming right now."
    * Doesn't mean there isn't pressure building in the system

1. Low recent Alpha emissions or trading: If Alpha tokens haven't been actively traded, or if the subnets haven't recently issued a significant amount of new Alpha tokens, the AMM price curve isn't under pressure&mdash;meaning little additional TAO is needed to maintain the current Alpha price.

:::tip
This is a network-wide metric.
A low TAO requirement may reflect that most subnets are currently stable&mdash;either due to low Alpha issuance, sufficient reserves, or low trading activity&mdash;even if a few individual subnets are more volatile.
:::

### Total Trading Volume (TAO): 1h/1d

#### How it works

Total Trading Volume (TAO) measure the total amount of TAO that has been traded across all subnets over a selected time period&mdash;either the past 1 hour or past 24 hours.

* This includes TAO used to buy or sell Alpha tokens in subnet liquidity pools.
* It aggregates activity across the entire subnet layer (excluding Root).
* The TAO shown reflects actual usage: people swapping, entering, or exiting subnets.

By allowing users to toggle between 1-hour and 1-day views, the metric offers insight into short-term surges versus daily trends.

#### Why it matters

This metric matters because ecosystem participants want to monitor total trading volume so they can gauge the overall level of activity and engagement across the subnet layer, assess market sentiment, and determine if capital is flowing through the network.

##### What this metric helps you do

* **Measure network engagement**
A rise in aggregate trading volume shows that subnet activity is increasing, even if it doesn't specify where.
It's a high-level signal of ecosystem energy.

* **Detect market momentum**
Volume spikes often precede price shifts&mdash;if TAO is moving, it means participants are acting. 
This can suggest speculative momentum, staking reallocation, or new subnet launches.

* **Compare activity over time**
By viewing 1 hour vs 1 day trends, you can:
    * Spot real time surges (1h)
    * Observed more sustained engagement or capital rotation (1d)

:::tip
This metric does not specify which subnets are responsible for volume increases.
It reflects overall subnet layer activity, no per-subnet flows. 
To pinpoint specific hotspots, pair this metric with subnet-level dashboards and Alpha price movements.
:::

### Cumulative Trading Volume (TAO) since _____

#### How it works

Cumulative Trading Volume (TAO) since _____ measures the total amount of TAO traded across all subnets (excluding Root) from a specific start date up to now.
* It sums all trading volume across the entire network (excluding Root) over time.
* It includes all TAO used to buy, sell, or swap Alpha tokens in any subnet's liquidity pool.
* Unlike **Total Trading Volume**, which shows activity just for the last hour or day, **Cumulative Trading Volume** show the full accumulated total over multiple days up to around a couple months.

In short, Cumulative Trading Volume (TAO) since _____ is a historical running total of trading activity since a specified date (max ~8 weeks).

#### Why it matters

This metric matters because ecosystem participants may want to track cumulative trading volume so they can understand longer-term network growth, adoption trends, and the overall scale of economic activity across subnets.

##### This metric helps you

* **Assess ecosystem growth**: A steadily rising cumulative volume line suggests increasing adoption, engagement, and liquidity over time.
* **Analyze trend health**: 
    * If cumulative volume is accelerating, user engagment is growing.
    * If it flattens out, it may indicate reduced activity or ecosystem stagnation.
* **Contextualize shorter-term activity**:
    * While big 1-hour or 1-day spikes in Total Trading Volume are exciting, cumulative volume lets you check if they are **outliers** or part of **a broader growth trend**.
* **Demonstrate network vitality**: Cumulative volume is a key **health metric** when evaluating the network's attractiveness to new users, investors, and developers.

### TAO on Subnets

#### How it works

TAO in Subnets measures the percentage of **total circulating TAO** that is currently **deposited into subnet AMM liquidity pools&mdash;excluding Root**.
* It shows what share of all TAO in the ecosystem is actively **supporting Alpha token liquidity** across all subnets.
* Only TAO inside the AMM pools (available for bying/selling Alpha tokens) counts toward this metric.
* It does **not include** TAO staked in Root or tAO simply sitting in wallets.

In other words: "*Of all the TAO out there, what percent is locked into subnet economies to enable trading?*"

#### Why it matters

This metric matters because ecosystem participants may often want to track the percentage of TAO committed to subnet liquidity pools so they can gauge network decentralization, liquidity health, and strength of subnet economies in general.

##### This metric helps you
* **Understand decentralization trends**: Higher percentages suggest more TAO is supporting subnets directly, reducing reliance on Root and enhancing network resilience.
* **Measure liquidity health**: More TAO in subnets means deeper AMM liquidity&mdash;leading to **smoother trading, lower slippage, and more stable Alpha token prices**.
* **Evaluate growth and engagement**: Rising TAO commitment into subnets indicates **confidence** in subnet projects, incentives, and Alpha token ecosystems.
* **Balance capital allocation**: Watching this trend helps participants gauge whether TAO is **flowing into** productive subnet liquidity&mdash;or sitting idle in wallets.

### TAO on Root

#### How it works

TAO on Root measures the percentage of total circulating TAO that is currently **staked or deposited on Subnet 0 (Root)**.
* This includes TAO that is actively staked to participate in Root's emission reward system.
* It exludes tAO in subnet AMM pools and TAO sitting idle in wallets.
* Root (Subnet 0) plays a special role in the network: it serves to anchor emissions, stability, and possibly governance.

In short, this metric answers: "*Of all circulating TAO, what share is currently securing and supporting Root?*"

#### Why it matters

This metric matters because ecosystem participant may often want to track how much TAO is committed to Root, so they can assess the network's security, the health of Root's reward system, and shifts in capital allocation.

##### This metric helps you
* **Gauge network security and stability**: A higher percentage of TAO on Root suggests **strong confidence in the protocol's core**, providing stability for emissions and ecosystem incentives.
* **Assess reward dynamics**: More TAO on Root generally means **more competition for staking rewards**&mdash;impacting individual APY and staking strategies.
* **Watch for capital flows**: Changes in this percentage can signal movement between Root and Subnets:
    * TAO leaving Root -> potential risk-taking in subnets
    * TAO moving to Root -> desire for safer, protocol-backed rewards
* **Understand macro health**: Root's TAO share acts like a **barometer of network risk appetite:
    * High Root share = conservative, stable period
    * Lower Root share = adventurous, speculative period
* 





## Subnet details
