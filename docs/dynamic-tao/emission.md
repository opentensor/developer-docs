---
title: "Emission of rewards in Dynamic TAO"
---

# Emission of rewards in Dynamic TAO

Emission is the process by which the Bittensor network rewards participants, including miners, validators, stakers, and subnet owners. It unfolds in two stages:

The Bittensor blockchain is the liquidity provider in the dynamic TAO. Without the liquidity provider injecting reserves into a subnet pool, the pool may run out of the reserves of one or both the tokens, thereby halting the entire subnet pool operation. This mechanism of liquidity injection is normal. 


- Injection into subnets
- Distribution to participants

### Injection to subnets

The first stage of emissions is injection of liquidity injections into the subnet pools, which occurs each block. Either TAO or alpha (the subnet's own token) will be injected into the subnet's corresponding reserve. Which currency is injected depends on whether the subnet's token's price is lower than the proportion of the total network's TAO held in the subnet's reserve. This acts to prevent the constant emission of liquidity from having a biasing effect on the evolution of pricing.

This occurs every block.


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


1. 18% goes to subnet owner
1. 41% each to miners and validators
1. validators pay out stakers in TAO and ALPHA

This occurs every tempo (???).
