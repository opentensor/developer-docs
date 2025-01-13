---
title: "Emission in Dynamic TAO"
---

# Emission in Dynamic TAO


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
