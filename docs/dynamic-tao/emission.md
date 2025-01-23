---
title: "Emission of rewards in Dynamic TAO"
---
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Emission of rewards in Dynamic TAO

Emission is the process by which the Bittensor network rewards participants, including miners, validators, stakers, and subnet owners. It unfolds in two stages:

- Injection into subnets
- Distribution to participants

### Injection to subnets

The first stage of emissions is injection of liquidity into the subnet pools, which occurs each block. This liquidity is divided between the subnet's reserves of TAO and alpha, and to *alpha outstanding*, which is the accumulating reward to be divided among subnet participants at the end of each tempo.

See [Core Dynamic TAO Concepts: Subnet liquidity reserves](./dtao-guide.md#subnet-liquidity-reserves)

Each block, 2 alpha are divided between the subnet's alpha reserves and alpha outstanding, and a small fraction of TAO is added to the subnet's TAO reserve.  TAO and alpha are injected according to a balancing algorithm, so that injection of liquidity does not not change its price.

### Distribution of rewards

At the end of each tempo (360 blocks), the accumulated alpha during the injection over each block of the tempo is distributed among network participants as follows:

1. 18% goes to subnet owner
1. 41% goes to incentives for miners
1. 41% goes to dividends to validators and their stakers:
    1. First, validators receive their take   
    1.  Then, stakers are paid out. Alpha and TAO dividends are emitted according to their relative weight. For validator x's TAO stake $\tau_x$, and alpha stake $\alpha_x$, and the global TAO weight $w_{\tau}$:

        Stakers in TAO (on the root subnet) receive TAO dividends in proportion to the validator's stake weight's proportion of TAO. These TAO dividends are sourced from the protocol automatically swapping a portion of the alpha dividends to TAO through the subnet's liquidity pool during distribution.
          $$
          \text{proportional dividends (\%) to root stakers} 
          = \frac{\tau_{x}{} \, w_{\tau}}
                 {\alpha_{x} + \tau_{x} \, w_{\tau}}
          $$        
        Stakers in alpha, i.e. on the mining subnet itself, receive alpha dividends in proportion to the validator's stake weight's proportion of alpha:
          $$
          \text{proportional dividends (\%) to alpha stakers} 
          = \frac{\alpha_{x}}
                 {\alpha_{x} + \tau_{x} \, w_{\tau}}
          $$        

        Validators who hold both root TAO and subnet alphas will receive dividends in both token types accordingly.

    See [Core Dynamic TAO Concepts: Validator stake weight](./dtao-guide.md#validator-stake-weight)

### Note on evolution of dividends distribution

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