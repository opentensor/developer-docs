---
title: "Dynamic TAO FAQ"
--- 

## Timing / Rollout

### What is the rollout timeline for Dyanmic TAO? What determines the timing?

Dynamic TAO is currently live on testnet. It's rollout to Bittensor mainnet will depend on how things go, but is expected in the next few weeks.

### How will Dynamic TAO take effect?

The state of the network as far as ledger balances and consensus power will not change immediately upon upgrade; it will occur gradually as subnet specific alpha tokens are emitted and staked into circulation.

In Dynamic TAO, validator *weight*&mdash;a critical score that determines consensus power as well as dividend rewards&mdash;is determined by a combination of TAO and alpha token holdings. When Dymamic TAO is initiated, there will be no alpha in circulation, so validator's stake weights will be entirely determined by their share of TAO stake.

But far more alpha than TAO is introduced emitted into circulation every block, and rewards to miners, validators, and stakers are always in alpha. As a result, over time there will be more alpha relative to TAO in overall circulation, and the relative weight of a validator in a given subnet will depend more on their alpha stake share relative to their share of the TAO stake on Subnet Zero.

In order to hasten the process of alpha gaining the majority of stake power in the network, the contribution of TAO stake to validator stake weight is reduced by a global parameter called *TAO weight*. Currently, this is planned to be ???%, in order to achieve a weight parity between TAO and total alpha in approximately 100 days.
<!-- FACT CHECK ??? -->

See [Emission of rewards in Dynamic TAO](./emission.md)

### Will there be a cap on alpha currency?

Yes. There is a hard cap of 21 million for any subnet's alpha token, the same as for TAO itself.

## TAO-holders / Stakers

### How has staking changed?

Instead of staking TAO to a validator, in Dynamic TAO, you stake a dynamic token, the alpha of subnet on which the validator is working. This means that all staking is local to a subnet.

### What is the risk/reward profile of staking into a subnet?

Staking into subnets is higher-risk, higher-reward than simply holding or staking TAO on the root network.

Each new subnet has its own token, referred to as its alpha. When you stake into a validator within a given subnet, you exchange TAO for that subnet's alpha. When you unstake from the validator in that subnet, you exchange the alpha for TAO. Staking and unstaking is therefore sensitive to the price of the alpha. This price of a subnet's alpha is the ratio of TAO in its reserve to alpha in reserve. 

Staking TAO into a subnet essentially **exchanges** TAO for that subnet’s alpha token.

- **Reward**: Potentially higher returns (emissions in that subnet’s token) if the subnet grows in usage and value.  
- **Risk**: Subnet tokens can fluctuate in price. If a subnet token drops in value relative to TAO, you risk a lower overall position when you swap back.  

### Can users transfer alpha tokens (subnet tokens)?

No, this is deliberately not allowed. Alpha tokens cannot be transferred like TAO, only staked and unstaked. TAO-holders can acquire alpha tokens by staking TAO into a validator in the corresponding subnet. Miners, validators, and stakers receive alpha tokens through emission. There is no other way to acquire them.

### How will Dynamic TAO affect governance of the network?

Dynamic TAO does not directly change Bittensor’s on-chain governance mechanism (i.e., proposals and voting).

### How do emissions to subnet 0 stakers work?

???

### Why does the root network keep issuing TAO instead of just alpha?

Price stabilization? insert explanation here???

## Subnets

### Subnet Zero

In dynamic TAO, Subnet Zero is a special subnet. It is the only subnet that does not have its own $\alpha$ currency. No miners can register on subnet zero, and no validation work is performed. However validators can register, and $\tau$-holders can stake to those validators, as with any other subnet. This offers a mechanism for $\tau$-holders to stake $\tau$ into validators in a subnet-agnostic way. This works because the weight of a validator in a subnet includes both their share of that subnet's $\alpha$ and their share of staked TAO in Subnet Zero.

Subnet Zero is sometimes called the root subnet, since it sort of replaces the root network in the pre-Dyanmic-TAO architecture. However, Subnet Zero does not perform consensus over subnets, which was the defining function of the root network.

### What will it take to start and manage a subnet in Dyanmic TAO?

???


### How will Dynamic TAO affect subnet governance (weight-setting)?

Each validator’s weight in the subnet is a function of the TAO staked to them on the subnet plus the TAO staked to them in Subnet Zero, with the value of the TAO being multiplied by the TAO weight, which is between 0 and 1.

See [validator stake weight](./dtao-guide.md#walidator-stake-weight).

### What happens when a subnet is abandoned?

If no participants use or mine a subnet, its token will likely drop to negligible value. Other subnets and the root remain unaffected. Each subnet’s success or failure is largely self-contained.

The protocol does not automatically retire subnets, and abandoned subnets may be revived.

### Do subnet owners control emissions for their own tokens?

**No**. Emissions are calculated by protocol logic (e.g., in `run_coinbase.rs`) and are based on network-wide parameters. Subnet founders cannot arbitrarily print tokens&mdash;emission follows the same consistent rules across all subnets.

See [Emission of rewards in Dynamic TAO](./emission.md)

### What happens to previously locked registration costs from pre-Dynamic-TAO subnets?

They are returned to subnet owners.

## Miners and Validators

### How will miners (and validators) manage the proliferation of subnets?

Miners and validators must now consider the TAO value of the alpha token in which they receive emissions. Doing the same work in a subnet whose alpha token is half as valuable (in TAO) means getting paid half as much, if they need to exit value now, although not necessarily in the long run, since the price of the tokens may vary.

However, because alpha is less valuable in subnets with lower TAO reserves, the competition for mining will be less intensive.

### Will this dilute miner rewards?

Miners can and must shift their work among subnets, depending on the value of the subnets and their own ability to compete. More subnets will mean more opportunities for specialized work.

Miners/validators may need to watch markets (token prices, volumes) to optimize their allocations, much as proof-of-work miners in other crypto systems monitor different chains to see which is most profitable to mine.

## Where can I find more technical details right now?

- Codebase: Refer to the Bittensor codebase, especially `run_coinbase.rs`, which calculates emissions logic for subnets and the root network.  
- White paper TBD???
