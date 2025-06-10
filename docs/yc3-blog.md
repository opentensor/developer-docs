---
title: "How Yuma Consensus 3 Makes Bittensor More Fair"
---

# How Yuma Consensus 3 Makes Bittensor More Fair

YC3 is the next evolution of Bittensor's consensus mechanism, designed to reward miner innovation and early recognition by validators.

:::tip Migration Guide Available
For subnet owners looking to migrate to Yuma3, see the [Yuma3 Migration Guide](./subnets/yuma3-migration-guide.md) for step-by-step instructions and best practices.
:::

## Introduction: Understanding Yuma Consensus

At the heart of every Bittensor subnet lies a fundamental challenge: how do you fairly distribute rewards for work, when that work can include a wide range of different digitial commodities or services? Bittensor approaches this as a distributed judgment problem: **Validators** serve as judges for the whole community, with trust in them being measured by the total stake they have been delegated. Their ratings of the performance of **miners** (who produce the commodities and services for each subnet) determine emissions to those miners.

But how can we keep validators honest and hard-working to make sure that they do their best effort to accurately judge the miners? 

Yuma Consensus is Bittensor's solution. Validators continuously rank the quality of work done by miners in their subnet, with the rankings of validators being trusted in proportion to how much stake they have received from the community. Lazy or dishonest validators lose emissions for submitting inaccurate rankings, which is likely to cause the community to move their stake to more relabile validators. Hence the community's trust in a given validator, embodied as stake, is linked over time to the emissions earned by the miners that validator rates. Hence validators are kept honest and miners are kept working hard to produce the best commodities possible.

But how does this work in detail? Each validator submits their rankings of miners they've evaluated. The algorithm then looks at all these rankings and tries to figure out which validators are giving the most reliable, honest evaluations. Validators who consistently make good predictions about which miners *other* validators will *eventually* recognize as the best, get *more* influence in the system. Meanwhile, validators give stale or otherwise inaccurate evaluations lose out.

The system builds "bonds" between validators and miners over time. When a validator consistently recognizes a miner's good work, their bond with that miner strengthens, leading to better rewards for both parties. This creates a powerful incentive for validators to be diligent, honest, and forward-thinking in their evaluations.

But the earlier versions of this system had some significant flaws—particularly when it came to rewarding validators who were ahead of the curve in recognizing promising miners, and ensuring fairness for validators with smaller stakes. Yuma Consensus 3 solves these problems.

## The Evolution of Consensus

The Yuma Consensus mechanism, which determines how emissions are distributed, has evolved through several iterations to address fairness concerns.

### The Limitations of Earlier Versions

#### Yuma Consensus V1

The first version of the algorithm distributed validator rewards based on stake and consensus weight, but had significant limitations:
- Small validators faced unfair rounding issues
- Limited mechanisms for recognizing early adopters of promising miners

#### Yuma Consensus V2

The second version introduced a more sophisticated bonding mechanism with exponential moving averages, but still struggled with:
- Unfair penalties for small validators due to rounding errors
- Insufficient rewards for validators who recognized good miners early
- Uniform alpha parameters that didn't account for individual validator-miner relationships
- A serious bug in bond distribution, when validator participation changed dramatically.

The last and most serious of these issues was that bonds were only redistributed when validators holding at least 50% of total stake cast votes for a given miner. This created a situation where:

1. **Bonds would freeze** when validators stopped actively voting for a miner.
2. **Historical allocations persisted** for months, even when those validators were no longer evaluating the miner.
3. **New evaluators were locked out** until enough high-stake validators resumed voting.
4. **Unfair reward distribution** occurred when miners became relevant again - old bond holders received rewards despite not currently evaluating, while active evaluators received minimal bonds

## Yuma Consensus V3

Yuma Consensus 3 addresses these fundamental issues with several breakthrough improvements:

### Per-Bond EMA Scaling

The most significant innovation in YC3 is that each validator-miner bond pair now gets its own adjustment rate (alpha value) rather than using a single rate for all bonds. This allows individual relationships to evolve at different speeds based on performance and consensus differences.

When [Liquid Alpha is enabled](https://github.com/opentensor/subtensor/blob/main/pallets/subtensor/src/epoch/run_epoch.rs#L633-L640), the system calculates [individual alpha values](https://github.com/opentensor/subtensor/blob/main/pallets/subtensor/src/epoch/run_epoch.rs#L1166-L1206) for each validator-miner pair using a [sigmoid function](https://github.com/opentensor/subtensor/blob/main/pallets/subtensor/src/epoch/run_epoch.rs#L1274-L1302). When Liquid Alpha is disabled, it falls back to a [uniform alpha calculation](https://github.com/opentensor/subtensor/blob/main/pallets/subtensor/src/epoch/run_epoch.rs#L1304-L1312) based on the bonds moving average parameter.

### Fair Scaling for All Validators

Bond values are computed using fixed-point arithmetic and then [converted to u16 for storage efficiency](https://github.com/opentensor/subtensor/blob/main/pallets/subtensor/src/epoch/run_epoch.rs#L859-L861), allowing precise fractional relationships while maintaining a 0-65535 storage scale. This fixes the disadvantages that plagued small-stake validators in previous versions.

### Early Recognition Rewards

Validators who identify promising miners before they become widely recognized can now start accumulating bonds early. This creates proper incentives for proactive evaluation rather than just following the crowd.

The [alpha sigmoid function](https://github.com/opentensor/subtensor/blob/main/pallets/subtensor/src/epoch/run_epoch.rs#L1274-L1302) calculates adjustment rates based on the difference between a validator's current weights and the network consensus. When a validator's weight for a miner differs significantly from consensus, the sigmoid determines whether to increase or decrease the bond adjustment rate, rewarding early recognition while preventing manipulation.

## Understanding Bonds: The Key to Validator Rewards

**Bonds** are the mechanism by which validators earn rewards for their evaluation work. Think of them as shares or stakes that validators accumulate with specific miners over time.

Bonds held by a validator for a given miner, produce emissions in proportion to the strength of the bond and the emissions to the miner. See [source code.](https://github.com/opentensor/subtensor/blob/main/pallets/subtensor/src/epoch/run_epoch.rs#L712)

**The Technical Implementation:**
1. **Storage**: Bonds are stored as [sparse matrices](https://github.com/opentensor/subtensor/blob/main/pallets/subtensor/src/epoch/run_epoch.rs#L948-L964) on a 0-65535 scale for efficiency
2. **Computation**: Each epoch, bonds are updated via [Exponential Moving Average (EMA)](https://github.com/opentensor/subtensor/blob/main/pallets/subtensor/src/epoch/run_epoch.rs#L651-L658) based on validator weights and previous bond values
3. **Rewards**: Validator dividends are computed by multiplying bonds with miner incentives

**Mathematical Foundation:** Under the hood, bonds following the EMA equation. Here, $\Delta B_{ij}$ is the "instant bond" based on a validator's stake-weighted evaluation of a miner.

$$
B_{ij}^{(t)} = \alpha \,\Delta B_{ij} + (1-\alpha)\,B_{ij}^{(t-1)}
$$


However, YC3's innovation is that α can now be different for each validator-miner pair rather than uniform across all bonds. The system also applies a bonds penalty factor β when validator weights exceed consensus, helping maintain anti-fraud protection. For the complete mathematical treatment, see the main article on [Yuma Consensus](./yuma-consensus.md#bonding-mechanics).

### How Validators Acquire Bonds

**In Yuma v2** (the problematic version): A validator needed to vote on a miner while at least 50% of validators were also voting for that miner. This meant early discoverers got locked out until big validators joined.

**In Yuma v3**: Validators can [build bonds independently](https://github.com/opentensor/subtensor/blob/main/pallets/subtensor/src/epoch/run_epoch.rs#L1108-L1127) through the EMA process. When Liquid Alpha is enabled, each validator-miner pair gets its own alpha value, allowing bonds to accumulate even when others haven't recognized the miner yet.

### Liquid Alpha Integration

YC3 works seamlessly with Liquid Alpha, providing additional rewards for validators who vote for 
miners that aren't yet receiving votes from others. This further encourages independent evaluation 
and early recognition.
YC3 integrates with Liquid Alpha when [specific conditions are met](https://github.com/opentensor/subtensor/blob/main/pallets/subtensor/src/epoch/run_epoch.rs#L633-L640):
1. Liquid Alpha must be enabled for the subnet
2. Consensus values must exist and contain non-zero values
3. The network must have sufficient activity

When these conditions are satisfied, validators receive additional rewards for voting for miners that aren't yet receiving votes from others. If conditions aren't met, the system [falls back to traditional EMA bonding](https://github.com/opentensor/subtensor/blob/main/pallets/subtensor/src/epoch/run_epoch.rs#L1108-L1115).

### Enhanced EMA Smoothing

The system maintains strong anti-fraud protection while providing smoother bond transitions. The adjustment rate is controlled by the [bonds moving average parameter](https://github.com/opentensor/subtensor/blob/main/pallets/subtensor/src/epoch/run_epoch.rs#L1055-L1062), which can be configured up to 97.5% (meaning bonds change by 2.5% per epoch toward their target values).

**Technical note:** The [EMA calculation](https://github.com/opentensor/subtensor/blob/main/pallets/subtensor/src/epoch/run_epoch.rs#L1028) uses `alpha = 1 - (bonds_moving_average / 1_000_000)`, where bonds_moving_average is typically set to 975,000, resulting in approximately 2.5% adjustment per epoch.

## The Real-World Impact

YC3 creates a healthier ecosystem by encouraging validators to:

- **Make independent evaluations** rather than copying popular validators
- **Recognize promising miners early** through differentiated bond adjustment rates  
- **Maintain consistent evaluations** while being rewarded for good prediction accuracy
- **Participate meaningfully regardless of stake size** through fair scaling mechanisms

This transformation means innovation and early recognition are properly rewarded, while maintaining the security and reliability that makes Bittensor networks trustworthy.

## Practical Implementation: Migration to YC3

### Deployment Status

YC3 is designed as a **drop-in replacement** for existing consensus mechanisms. Subnet 2 has already successfully migrated to YC3, experiencing:
- Seamless activation with no downtime
- A brief stabilization period of 2-3 tempo periods
- Improved fairness for validators of all sizes

### Migration Process

For most subnet owners, **no action is required**. YC3 maintains backward compatibility with existing configurations. However, to leverage the full benefits:

```bash
# Check current YC3 status
btcli subnet hyperparameters --netuid YOUR_NETUID

# Enable YC3 features (if not already enabled)
btcli sudo set --param yuma3_enabled --value true --netuid YOUR_NETUID

# Enable Liquid Alpha for enhanced benefits
btcli sudo set --param liquid_alpha_enabled --value true --netuid YOUR_NETUID
```

### Configuration Parameters

YC3 introduces several tunable parameters for advanced customization:

```bash
# Alpha sigmoid steepness (affects reward distribution curves)
btcli sudo set --param alpha_sigmoid_steepness --value YOUR_VALUE --netuid YOUR_NETUID

# Bonds moving average (default: 975000 for 2.5% adjustment per epoch)
btcli sudo set --param bonds_moving_avg --value 975000 --netuid YOUR_NETUID

# Alpha range parameters
btcli sudo set --param alpha_high --value YOUR_VALUE --netuid YOUR_NETUID
btcli sudo set --param alpha_low --value YOUR_VALUE --netuid YOUR_NETUID
```

### Monitoring Your Migration

After enabling YC3, monitor these key metrics:

- **Bond distribution patterns** using sparse matrix queries
- **Individual alpha values** being applied to validator-miner pairs  
- **Small validator performance** to ensure fairness improvements
- **Early recognition rewards** for validators discovering new miners

## For Subnet Owners

Yuma 3 works best in subnets where validators can independently evaluate miners and benefit from early recognition of promising innovations. The system distributes dividends more fairly than previous versions, and when combined with Liquid Alpha, provides powerful tools to encourage independent evaluation.

YC3 can be [toggled per subnet](https://github.com/opentensor/subtensor/blob/main/pallets/subtensor/src/epoch/run_epoch.rs#L628) through governance mechanisms. The [alpha parameter controls](https://github.com/opentensor/subtensor/blob/main/pallets/subtensor/src/epoch/run_epoch.rs#L1316-L1356) allow fine-tuning of the sigmoid steepness and adjustment ranges for your specific subnet needs.

**Important considerations:**
- Liquid Alpha must be enabled to get full YC3 benefits
- The system requires active consensus formation to function optimally  
- Bond reset functionality is available for subnets that need it
- Testing on testnet is recommended before mainnet deployment

**Migration Timeline:**
- **Current**: YC3 is live and being adopted by subnets
- **No forced deadline**: Subnets can adopt when ready
- **Recommendation**: Monitor performance and consider gradual parameter tuning

## Looking Forward

As Bittensor continues to grow, YC3 provides a solid foundation for fair and efficient consensus. The system's ability to reward early recognition while maintaining security makes it well-suited for the network's future development.

For subnet owners ready to embrace more sophisticated consensus mechanisms, YC3 combined with Liquid Alpha provides a powerful toolkit for creating equitable and efficient subnet ecosystems.

**Next Steps for Subnet Owners:**
1. Review the [Yuma3 Migration Guide](./subnets/yuma3-migration-guide.md) for detailed implementation steps
2. Test YC3 features on testnet before mainnet deployment
3. Consider enabling Liquid Alpha to maximize validator incentives
4. Monitor subnet performance during the migration period
5. Engage with the Bittensor community for migration support

YC3 was introduced to the Subtensor Code base in [PR 1593](https://github.com/opentensor/subtensor/pull/1593).
