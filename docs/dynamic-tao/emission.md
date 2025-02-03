---
title: "Emission in Dynamic TAO"
---
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Emission in Dynamic TAO

Emission is the process by which the Bittensor network allocates TAO and alpha to participants, including miners, validators, stakers, and subnet creators.

It unfolds in two stages:

- Injection into subnets
- Extraction by participants

### Injection

The first stage of emissions is *injection of liquidity* into the subnet pools. Each block:

- TAO is injected into the subnet's TAO reserve.
- alpha is injected into the subnet's alpha reserve.
- alpha is allocated to *alpha outstanding*, to be extracted by participants.

TAO and alpha are injected according to a balancing algorithm, so that growth of a subnet's liquidity pools does not not change the price of the alpha token.

See [Core Dynamic TAO Concepts: Subnet liquidity reserves](./dtao-guide.md#subnet-liquidity-reserves)

### Extraction

At the end of each tempo (360 blocks), the quantity of alpha accumulated over each block of the tempo is extracted by network participants in the following proportions:

1. 18% by subnet owner
1. 41% by miners
1. 41% by validators and their stakers:
    1. First, validators extract their take.   
    1. Then, TAO and alpha are emitted to stakers in proportion to the validators' holdings in each token. TAO emissions are sourced by swapping a portion of alpha emissions to TAO through the subnet's liquidity pool.

        For validator x's TAO stake $\tau_x$, and alpha stake $\alpha_x$, and the global TAO weight $w_{\tau}$:

        - TAO is emitted to stakers on the root subnet (i.e. stakers in TAO) in proportion to the validator's stake weight's proportion of TAO.

          $$
          \text{proportional emissions (\%) to root stakers} 
          = \frac{\tau_{x}{} \, w_{\tau}}
                 {\alpha_{x} + \tau_{x} \, w_{\tau}}
          $$

        - Alpha is emitted to stakers on the mining subnet (i.e. stakers in alpha) in proportion to the validator's stake weight's proportion of alpha:
          $$
          \text{proportional emissions (\%) to alpha stakers} 
          = \frac{\alpha_{x}}
                 {\alpha_{x} + \tau_{x} \, w_{\tau}}
          $$        

        Validators who hold both root TAO and subnet alphas will extract both types of token.

    See [Core Dynamic TAO Concepts: Validator stake weight](./dtao-guide.md#validator-stake-weight)

### Note on evolution of Bittensor token economy

When Dynamic TAO is initiated, there will be no alpha in circulation, so validator's stake weights will be entirely determined by their share of TAO stake.

But far more alpha than TAO is emitted into circulation every block. As a result, over time there will be more alpha relative to TAO in overall circulation, and the relative weight of a validator in a given subnet will depend more on their alpha stake share relative to their share of the TAO stake on Subnet Zero.

In order to hasten the process of alpha gaining the majority of stake power in the network, the contribution of TAO stake to validator stake weight is reduced by a global parameter called *TAO weight*. Currently, this is planned to be **18%**, in order to achieve a weight parity between TAO and total alpha in approximately 100 days.

<center>
<ThemedImage
alt="Curves"
sources={{
    light: useBaseUrl('/img/docs/dynamic-tao/curves.png'),
    dark: useBaseUrl('/img/docs/dynamic-tao/curves.png'),
  }}
style={{width: 650}}
/>
</center>

<br />