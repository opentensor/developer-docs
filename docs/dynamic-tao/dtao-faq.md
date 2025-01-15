---
title: "Dynamic TAO FAQ"
---


### Is there a cap on alpha currency?

Yes. There is a hard cap of 21 million alpha that can ever be in circulation.

## Timing / Rollout

### **What is the rollout timeline for dTAO? What determines the timing?**

Dynamic TAO is currently live on testnet. It's rollout to Bittensor mainnet will depend on how things go, but is expected in the next few weeks.


The state of the network as far as ledger balances and consensus power will not change immediately upon upgrade; it will occur gradually as subnet specific alpha tokens are emitted and staked into circulation.

In Dynamic TAO, validator *weight*&mdash;a critical score that determines consensus power as well as dividend rewards&mdash;is determined by a combination of TAO and alpha token holdings. When Dymamic TAO is initiated, there will be no alpha in circulation, so validator's stake weights will be entirely determined by their share of TAO stake.

But far more alpha than TAO is introduced emitted into circulation every block, and rewards to miners, validators, and stakers are always in alpha. As a result, over time there will be more alpha relative to TAO in overall circulation, and the relative weight of a validator in a given subnet will depend more on their alpha stake share relative to their share of the TAO stake on Subnet Zero.


In order to hasten the process of alpha gaining the majority of stake power in the network, the contribution of TAO stake to validator stake weight is reduced by a global parameter called *TAO weight*, which is currently planned to be 18% ???(is that even right)???

## TAO-holders / Stakers

### **What is the risk/reward of staking TAO into a subnet?**
Each new subnet has its own market. Staking into subnets is higher-risk, higher-reward than simply holding or staking TAO on the root network.

Staking TAO into a subnet essentially **exchanges** TAO for that subnet’s alpha token.

- **Reward**: Potentially higher returns (emissions in that subnet’s token) if the subnet grows in usage and value.  
- **Risk**: Subnet tokens can fluctuate in price. If a subnet token drops in value relative to TAO, you risk a lower overall position when you swap back.  

### **Can users transfer alpha tokens (subnet tokens)?**

No this is not planned. TAO-holders can acquire alpha tokens can by staking TAO into a validator in the corresponding subnet. Miners, validators, and stakers receive alpha tokens through emission. There is no other way to acquire them.

### **How will dTAO affect governance of the network?**

Dynamic TAO does not directly change Bittensor’s on-chain governance mechanism (i.e., proposals and voting).

### **Are we risking “over-inflation” and a price collapse?**

No! The tokenomics are designed to avoid this.

Each subnet will issue its own token (alpha, beta, etc.). While it’s true that more tokens appear overall, each subnet’s token is a separate market.  

dTAO is designed so that TAO’s “global weight” in each subnet gradually declines in proportion to that subnet’s token supply. Subnet tokens compete for stake and labor (mining).  

If many subnets print tokens without real usage, their tokens may devalue. Conversely, subnets with utility and demand could retain value. TAO itself remains the base asset for the entire Bittensor network.

## Root (Subnet Zero)

### **How do emissions to subnet 0 stakers work?**
- **Conceptual Only**: The root network (also called “subnet 0”) no longer hosts AI “work” or miner consensus. It is mainly a **conceptual** place where you can stake TAO if you do not wish to stake in subnets.  
- **Dividends**: At launch of dTAO, root stakers still receive some TAO emissions, but this reward diminishes as more subnet tokens are minted.  
- **Mechanics**: The reward to root stakers is dynamically determined by the total supply of subnet tokens (relative to the effective TAO stake). As subnet tokens grow, root’s share of global emissions will shrink.

### **Will perpetual issuance to root stakers continue after a year? Why does the root chain keep issuing new TAO at all?**
- **Gradual Decline**: The root network continues issuing TAO, but at an ever-decreasing proportion (eventually approaching a low baseline).  
- **Historical Reason**: Initially, TAO stakers expected a dividend. dTAO honors that expectation but tapers it to encourage capital to flow into subnets.  
- **Motivation**: Over time, subnets become the primary engines of innovation, usage, and reward—rather than the root itself.

### **Is there a chance we remove or retire the ‘root’ network (subnet 0)?**
- **Unlikely**: Subnet 0 is the canonical ledger of Bittensor. Even though it is largely a minimal chain under dTAO, it remains crucial for:  
  1. **Baseline reference** for TAO balances.  
  2. **Staking** for those who do not want to engage with subnets.  
  3. **Governance**: TAO-based proposals and votes.  
- **Separation of Values**: Subnet tokens represent local (subnet-specific) value, while TAO remains the base currency for the entire ecosystem.  

### **If each subnet gets its own token, doesn’t that reflect all of Bittensor’s value? Why keep a separate root chain at all?**
- **Umbrella Asset**: TAO still represents the network as a whole and has governance weight, bridging all subnets.  
- **Subnet Diversity**: Each subnet token is more narrowly focused and can fail or succeed independently. This fosters competition and innovation.  
- **Security & Interchange**: Root is the unifying ledger that ensures each subnet token integrates under the same overarching network.

### **Why does the root network keep issuing TAO instead of just alpha?**
- **Historic Supply & Contract**: Original TAO token holders and stakers expect ongoing emissions from the main chain.  
- **Smooth Transition**: dTAO’s design gradually shifts weight and capital to subnets. TAO issuance tapers so that subnets can flourish, rather than abruptly cutting off all TAO rewards.

---

## Miners and Validators

### **How will miners (and validators) manage the proliferation of subnets?**
- **Selective Participation**: Each subnet’s token incentives might differ. Miners and validators choose which subnets to commit resources to based on expected returns, risk, or personal interest.  
- **Market-Driven Reward**: If a subnet has high demand and a valuable token, it may attract more miners. In a subnet with low demand or low token value, miners may leave or never join.

### **Will this dilute miner rewards?**
- **Not Necessarily**: Miners can shift their compute among subnets. In theory, more subnets could mean more opportunities for specialized or higher-paying tasks.  
- **Constant Monitoring**: Miners/validators may need to watch markets (token prices, volumes) to optimize their allocations, much as proof-of-work miners monitor different chains to see which is most profitable to mine.

---

## Subnet

### **What will it take to start and manage a subnet in dTAO?**
- **No Large Upfront Cost**: Under dTAO, new subnets can often be launched without a large TAO deposit. The exact parameters vary over time, but “testnet subnet registration” can be free or minimal.  
- **Local Token Creation**: Founders can define their subnet’s token economics, but the actual issuance mechanism is still governed by the chain code (i.e., `run_coinbase.rs`).  
- **Ongoing Management**: A healthy subnet requires validators/miners, good usage or AI tasks, and a fair token distribution.

### **Why is testnet subnet registration free (i.e., no upfront cost)?**
- **Experimentation**: Lowering barriers encourages innovation and trial subnets. It’s cheaper for developers to spin up experimental subnets and test new AI applications.  
- **Early Ecosystem Growth**: Overly high costs would stifle subnet creation, while free or minimal costs accelerate the network effect.

### **How will dTAO affect subnet governance (weight-setting)?**
- **Global + Local Stake**: Each validator’s subnet weight is a function of both local subnet tokens (e.g., alpha) and their staked TAO (with a global parameter weighting TAO).  
- **Gradual Shift**: Over time, as more tokens are issued in each subnet, those local tokens naturally dominate consensus. TAO’s role remains but diminishes proportionally as the subnet matures.

### **What happens when a subnet is abandoned?**
- **Token Devaluation**: If no participants use or mine a subnet, its token will likely drop to negligible value.  
- **Network Impact**: Other subnets and the root remain unaffected. Each subnet’s success or failure is largely self-contained.  
- **No Forced Shutdown**: The protocol does not automatically retire subnets, but abandoned subnets may simply become inactive or worthless.

### **Do subnet owners control emissions for their own tokens?**
- **No**: Emissions are calculated by protocol logic (e.g., in `run_coinbase.rs`) and are based on network-wide parameters.  
- **No Central Control**: Subnet founders cannot arbitrarily print tokens—issuance follows the same consistent rules across all subnets.

### **What happens to previously locked registration costs?**
- **Returning Costs**: Under older rules, registering a subnet required depositing TAO. With dTAO’s changes, those previously locked TAO may be **returned** (or otherwise resolved) depending on updated chain logic.  
- **Case-by-Case**: Exact procedure is spelled out in the upgrade process. Generally, if you paid a large deposit to launch a subnet under old rules, you should see that deposit unlocked or refunded after dTAO launch.

---

### **Where can I find more technical details right now?**
- **Core Code**: Refer to the Bittensor codebase, especially `run_coinbase.rs`, which calculates emissions logic for subnets and the root network.  
- **Official Docs**: Check the official Bittensor documentation and community forums. The dynamic TAO whitepaper, once published, will include more in-depth mathematical explanations.  
- **Community Channels**: Bittensor Discord and Telegram are active with ongoing discussions—especially recommended if you want to dive into examples or code snippets from the community.

---

_These FAQ answers draw from high-level design intent and discussion with Jake Steeves. As the dTAO rollout continues, final implementation details or parameters (like “18% weighting” or daily issuance) may be tweaked before or after launch._
```
