---
title: "Emission of rewards in Dynamic TAO"
---

# Emission of rewards in Dynamic TAO

Emission is the process by which the Bittensor network rewards participants, including miners, validators, stakers, and subnet owners. It unfolds in two stages:

- Injection into subnets
- Distribution to participants

### Injection to subnets

The first stage of emissions is injection of liquidity into the subnet pools, which occurs each block. This liquidity is divided between the subnet's reserves of TAO and alpha, and to *alpha outstanding*, which is the accumulating reward to be divided among subnet participants at the end of each tempo.

See [Core Dynamic TAO Concepts: Subnet liquidity reserves](./dtao-guide.md#subnet-liquidity-reserves)

Each block, 2 alpha are divided between the subnet's alpha reserves and alpha outstanding, and a small fraction of TAO is added to the subnet's TAO reserve.  TAO and alpha are injected according to a balancing algorithm, so that injection of liquidity does not not change its price.




### Distribution of rewards

At the end of each tempo (360 blocks), the alpha accumulated during the injection over each block of the tempo is distributed among network participants as follows:

1. 18% goes to subnet owner
1. 41% goes to incentives for miners
1. 41% goes to dividencds to validators and their stakers:
    1. First, validators receive their take   
    1.  Then, stakers are paid out. Alpha and TAO dividends are emitted according to their relative weight:
        1. Stakers in TAO, i.e. on the root subnet receive TAO dividends in proportion to the validator's weight that is TAO:
          $$
          \text{dividends that to root stakers} 
          = \frac{\tau_{x} \, w_{\tau}}
                 {\alpha_{x} + \tau_{x} \, w_{\tau}}
          $$        
        1. Stakers in alpha, i.e. on the mining subnet itself, receive alpha dividends in proportion to the validator's weight that is alpha:
          $$
          \text{dividends that go to alpha stakers} 
          = \frac{\alpha_{x}}
                 {\alpha_{x} + \tau_{x} \, w_{\tau}}
          $$        
