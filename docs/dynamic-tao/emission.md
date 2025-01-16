---
title: "Emission of rewards in Dynamic TAO"
---

# Emission of rewards in Dynamic TAO

Emission is the process by which the Bittensor network rewards participants, including miners, validators, stakers, and subnet owners. It unfolds in two stages:

- Injection into subnets
- Distribution to participants

### Injection to subnets

The first stage of emissions is injection of liquidity injections into the subnet pools, which occurs each block. This liquidity is divided between the subnet's reserves of TAO and alpha, and to *alpha outgoing*, which is the accumulating reward to be divided among subnet participants at the end of each tempo.

See [Core Dynamic TAO Concepts: Subnet liquidity reserves](./dtao-guide.md#subnet-liquidity-reserves)

Each block, 2 alpha are divided between the subnet's alpha reserves and alpha outgoing, and a small fraction of TAO is added to the subnet's TAO reserve. The quantities injected depend on whether the subnet's token's price is lower than the proportion of the total network's TAO held in the subnet's reserve. This acts to prevent the constant emission of liquidity from having a biasing effect on the evolution of pricing, and more generally to stabilize the price of each alpha token around a value close to its subnet's proportion of the total TAO staked into all subnets.

**Injection Logic:**

- If the subnet's token price is *lower* than its proportion of TAO in reserve (the subnet's TAO reserve divided by the total TAO reserve of all subnets, including Subnet Zero):

  - The subnet's liquidity reserves recieve:
      - TAO equivalent to the subnet's token price
      - 1 alpha 

  - The alpha outgoing (rewards for subnet participants) for the tempo receives 1 alpha

- If the subnet's token price is greater or equal to its proportion of TAO in reserve:

  - The subnet's liquidity reserves receive:

    - TAO equivalent to the subnet's proportion of the network's TAO reserves
    - alpha equivalent to subnet's proportion of TAO reserves divided by the subnet's token price

  - The alpha outgoing (rewards for subnet participants) for the tempo receives 2 alpha minus the quantity of alpha bound for the subnet's alpha rserves



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

### Distribution of rewards

At the end of each tempo (a number of blocks configurable per subnet), the alpha accumulated during the injection over each block of the tempo is distributed among network participants as follows:

1. 18% goes to subnet owner
1. 41% each to miners and validators
1. validators pay out stakers in TAO and ALPHA (what's the math???)


