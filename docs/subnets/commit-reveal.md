
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Commit Reveal

This page describes the **commit reveal** feature: a configurable waiting period that elapses between a) when consensus weights set by subnet validators are first committed, and b) when they are revealed publicly and included in Yuma Consensus.

This feature was designed to address the issue of *weight copying* by validators. 

## Weight copying

In each Bittensor subnet, each validator scores&mdash;or *'weights'*&mdash;each miner, producing what is referred to as a [weight vector](../glossary.md#weight-vector). The weight vectors for each validator in a subnet are combined into a weight matrix. This matrix determines the distribution of rewards to miners in the subnet based on the consensus evaluation of their performance, according to [Yuma Consensus](../glossary.md#yuma-consensus).

The weight matrix is public information, and must be, so that the distribution of rewards in the Bittensor platform can be transparently fair. However, this transparency makes it possible for subnet validators to free-ride on the work of other validators by copying the latest consensus rather than independently evaluating subnet miners. This is unfair and potentially degrades the quality of validation work, undermining Bittensor's ability to reward the best miners and produce the best artificial intelligence as a whole.

The commit reveal feature is designed to solve the weight copying problem by giving would-be weight copiers access only to stale weights. Copying stale weights should result in validators departing from consensus. However, it is critical to note that this only works if the consensus weight matrix is constantly changing on the time scale of the commit reveal interval. If the demands on miners are too static, and miner performance is very stable, weight copying will still be successful.

The only solution for this is to continuously change demands on miners, requiring them to continuously evolve their behavior to maintain their scoring. Combined with a properly tuned Commit Reveal interval, this will keep validators honest, as well as producing the best models.

## Commit Reveal and Immunity Period

The [Immunity Period](../glossary.md#immunity-period) is the interval (measured in blocks) during which a miner or validator newly registered on a subnet is 'immune' from deregistration due to performance, because their performance is not yet scored. The duration of this period value should always be larger than the Commit Reveal interval, otherwise the immunity period will expire before a given miner's scores are available, and they may be deregistered without having their work counted.

To ensure that the immunity period is always greater than the Commit Reveal interval, we recommend using the following logic when setting the Immunity Period or Commit Reveal interval hyperparameters for a subnet:

```
new_immunity_period = (new_commit_reveal_interval - old_commit_reveal_interval) + old_immunity_period
```

See [Subnet Hyperparameters](./subnet-hyperparameters.md).


## Commit reveal in detail

When commit reveal is enabled, it works as follows:  

1. A subnet validator sets the weights normally by using [`set_weights`](pathname:///python-api/html/autoapi/bittensor/core/extrinsics/set_weights/index.html). 

2. Instead of publishing weights openly, an encrypted hash of these consensus weights is committed to the blockchain, using an internal method called [`commit_weights`](pathname:///python-api/html/autoapi/bittensor/core/extrinsics/commit_weights/index.html).

3. A waiting interval, specified as a number of blocks, elapses. Subnet owners configure this interval with the subnet hyperparameter `commit_reveal_weights_interval`.

4. After this interval has elapsed, the unencrypted weights are published to the blockchain.

5. On the blockchain, the committed hash from step 2 is compared to the hash of the openly submitted (revealed) weights from step 4:
	* If the hashes are the same, the blockchain will apply the weights to the Yuma Consensus algorithm on-chain.
	* If the hashes are not the same, the blockchain will issue an error and the weights are not applied. 

<br />
:::tip Commit reveal works behind the scenes
After the subnet owner turns ON the commit reveal feature, everything happens behind the scenes. A subnet validator will continue to set weights normally by using [`set_weights`](pathname:///python-api/html/autoapi/bittensor/core/extrinsics/set_weights/index.html).
:::


<center>
<ThemedImage
alt="'1-Commit Reveal'"
sources={{
    light: useBaseUrl('/img/docs/2-commit-reveal.svg'),
    dark: useBaseUrl('/img/docs/dark-2-commit-reveal.svg'),
}}
style={{width: 750}}
/>
</center>


## How to use the commit reveal feature

As a subnet owner, set the below hyperparameters to use the commit reveal feature:

1. `commit_reveal_weights_enabled` (boolean): Set this to `True` to activate the commit reveal feature for the subnet. Default value is `False`.
2. `commit_reveal_weights_interval` (int): Set this to an integer number. This is the number of subnet tempos to elapse before revealing the weights by submitting them again to the blockchain, but now openly for everyone to see. Default value is `1`.

See [Setting subnet hyperparameters](subnet-hyperparameters#setting-the-hyperparameters).

:::danger Ensure that the commit reveal interval is less than your immunity period to avoid unintended miner de-registration!
See [Commit Reveal and Immunity Period](#commit-reveal-and-immunity-period).
:::


Weights will be revealed immediately at the beginning of the tempo after the `commit_reveal_weights_interval`. For example, if `commit_reveal_weights_interval` value is set to `3`, then the reveal will occur at the beginning of the fourth tempo from the current tempo. The current tempo is counted as the first tempo. See the below diagram for this example: 

<center>
<ThemedImage
alt="'1-Commit Reveal'"
sources={{
    light: useBaseUrl('/img/docs/1-commit-reveal.svg'),
    dark: useBaseUrl('/img/docs/dark-1-commit-reveal.svg'),
}}
style={{width: 750}}
/>
</center>

<br />


## Technical papers and blog

- ACM CCS2024 Poster PDF [Solving the Free-rider Problem In Bittensor](pathname:///papers/ACM_CCS2024_Poster.pdf).
- See [Weight Copying in Bittensor, a technical paper (PDF)](pathname:///papers/BT_Weight_Copier-29May2024.pdf).
- Blog post, [Weight Copying in Bittensor](https://blog.bittensor.com/weight-copying-in-bittensor-422585ab8fa5).

