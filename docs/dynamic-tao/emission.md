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
1. 41% goes to miners
1. 41% goes to validators:
    1. Validators receive their take   
    1.  Stakers are paid out:
        1. Stakers in TAO, i.e. on the root subnet receive TAO dividends
        1. Stakers in alpha, i.e. on the subnet, recieve alpha dividends

<!-- What is the validator take percent? -->

<!-- Alpha and TAO dividends are emitted according to their relative prevalence in the economy, so...

??? But is this per subnet or is this global evaluation? sub x as below or global?
???

proportion of root relative dividends goes to root


$$
\text{Proportion of a Validator's dividends that go to root???} 
= \frac{\tau_{x} \, w_{\tau}}
       {\alpha_{x} + \tau_{x} \, w_{\tau}}
$$




so w times t over W, W t plus alpha, right
 -->