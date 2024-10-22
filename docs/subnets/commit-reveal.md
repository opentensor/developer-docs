---
title: "Commit Reveal"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Commit Reveal

This guide describes the **commit reveal** feature. This feature will address the weight copying issue. 

## Weight copying

In a subnet, the consensus weights reached by the subnet validators is public information. This leads to an unfortunate outcome: Some subnet validators do not do the work of evaluating the subnet miners, but instead  copy the latest consensus, thereby free-riding on the work done by other subnet validators in the subnet. This is the weight-copying problem. 

The commit reveal feature is designed to combat this weight-copying problem by giving the weight-copiers access only to the old weights. The main idea is this: The consensus weights set by subnet validators are hidden for a certain interval. The weight-copiers would be able to view these weights only after this interval is elapsed. But by then these consensus weights would've become quite old, ineffective and hence would create a loss for the weight-copier using these copied old weights. As a result, weight-copiers would not have advantage over honest subnet validators.

---

## How it works

When the subnet owner turns ON the commit reveal feature, it works like this:  

<center>
<ThemedImage
alt="'1-Commit Reveal'"
sources={{
    light: useBaseUrl('/img/docs/2-commit-reveal.png'),
    dark: useBaseUrl('/img/docs/2-commit-reveal.png'),
}}
style={{width: 750}}
/>
</center>

<br />

1. A subnet validator sets the weights normally by using [`set_weights`](pathname:///python-api/html/autoapi/bittensor/core/extrinsics/set_weights/index.html). 
2. But behind the scenes, the commit reveal feature will use an internal method called [`commit_weights`](pathname:///python-api/html/autoapi/bittensor/core/extrinsics/commit_weights/index.html) to commit an encrypted hash of these consensus weights to the blockchain, instead of submitting weights openly to the chain where they can be seen by anyone.
3. The commit reveal feature then waits for a certain interval. A subnet owner can control this interval by setting the subnet hyperparameter `commit_reveal_periods`.
4. After this interval is elapsed, the commit reveal automatically reveals these weights by submitting them again, but now openly for everyone to see, to the blockchain.
5. On the blockchain, the committed hash from step 2 is compared to the hash of the openly submitted (revealed) weights from step 4. If the hashes are the same, the blockchain will apply the weights to the Yuma Consensus algorithm on-chain. If the hashes are not the same, the blockchain will issue an error and the weights are not applied. 

:::tip Commit reveal works behind the scenes
After the subnet owner turns ON the commit reveal feature, everything happens behind the scenes. A subnet validator will continue to set weights normally by using [`set_weights`](pathname:///python-api/html/autoapi/bittensor/core/extrinsics/set_weights/index.html).
:::

---

## How to use commit reveal feature

If you are a subnet owner, set the below hyperparameters to use the commit reveal feature:

1. `commit_reveal_weights_enabled` (boolean): Set this to `True` to activate the commit reveal feature for the subnet. Default value is `False`.
2. `commit_reveal_periods` (int): Set this to an integer number. This is the number of subnet tempos to elapse before revealing the weights by submitting them again to the blockchain, but now openly for everyone to see. Default value is `1`.

That's all you have to do. The commit reveal feature will now start to work behind the scenes.

All reveals will occur immediately at the beginning of the tempo after the `commit_reveal_periods`. For example, if `commit_reveal_periods` value is set to `3`, then the reveal will occur at the beginning of the fourth tempo from the current tempo. The current tempo is counted as the first tempo. See the below diagram for this example: 

<center>
<ThemedImage
alt="'1-Commit Reveal'"
sources={{
    light: useBaseUrl('/img/docs/1-commit-reveal.png'),
    dark: useBaseUrl('/img/docs/1-commit-reveal.png'),
}}
style={{width: 750}}
/>
</center>

<br />

For subnets that are very stable and have durable subnet miners who change ranks rarely, a longer delay interval would likely be more effective. For subnets with more frequent subnet miner registrations and deregistrations, a shorter interval could be effective as weight copiers would not be able to independently score new miners.

---

## Technical paper and blog

- See [Weight Copying in Bittensor, a technical paper (PDF)](pathname:///papers/BT_Weight_Copier-29May2024.pdf).
- Blog post, [Weight Copying in Bittensor](https://blog.bittensor.com/weight-copying-in-bittensor-422585ab8fa5).

