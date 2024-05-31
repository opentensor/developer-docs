---
title: "Commit Reveal"
---

# Commit Reveal

This guide describes the **commit reveal** feature. This feature will address the weight copying issue. 

:::tip Available only in Bittensor 7.0.1 and later versions
This feature is available in Bittensor 7.0.1 and later versions. Make sure you update to Bittensor 7.0.1 before using this feature.
:::

## Technical paper, blog and Python notebook

- See [Weight Copying in Bittensor, a technical paper (PDF)](pathname:///papers/BT_Weight_Copier-29May2024.pdf).
- Blog post, [Weight Copying in Bittensor](https://blog.bittensor.com/weight-copying-in-bittensor-422585ab8fa5).
- Also go to the GitHub repo directory for the [Python notebook](https://github.com/opentensor/developer-docs/tree/main/static/weight_copy/). 

## Description

The commit reveal feature changes the way the subnet validator weights are recorded to the chain. Rather than submitting weights openly to the chain that can be seen by anyone on the next block, subnet validators will upload an encrypted hash of their weights. This encrypted hash will be automatically decrypted after a set number of blocks. 

The delay in revealing the weights is a parameter that can be set by the subnet owners. The delay is expressed in integer number of blocks. The optimal delay will be different for different subnets and depends mostly on the rate of turnover in the subnet miners. A subnet owner can use the `commit_reveal_weights_interval` subnet hyperparameter to adjust this delay.

In addition, a subnet owner can turn this commit reveal feature on by setting the `commit_reveal_weights_enabled` hyperparameter to `True`.

For subnets that are very stable and have durable subnet miners who change ranks rarely, a longer delay interval would likely be more effective. For subnets with more frequent subnet miner registrations and deregistrations, a shorter interval could be effective as copiers will not be able to independently score new miners.

By giving weight copiers access only to old weights, the goal is to reduce the advantage gained by copying the current consensus. With commit-reveal we aim to make weight copying less attractive by decreasing the reward.

### New subnet hyperparameters

Two new subnet hyperparameters are added to support the commit reveal feature. A subnet owner can use `btcli subnet hyperparameters` command to set the values for these new hyperparameters:

- `commit_reveal_weights_interval` (integer): Specify the desired number of blocks of delay before revealing the weights. 
- `commit_reveal_weights_enabled` (boolean): Set this hyperparameter to `True` to enable the commit reveal feature.

### Commit weights

Example usage:

```bash
btcli wt commit --netuid 1 --uids 1,2,3,4 --weights 0.1,0.2,0.3,0.4 --subtensor.network wss://test.chain.opentensor.ai:443
```
The above command is used to commit weights for a specific subnet and requires the user to have the necessary permissions.

Optional arguments:
- ``--netuid`` (int): The netuid of the subnet for which weights are to be commited.
- ``--uids`` (str): Corresponding UIDs for the specified netuid, in comma-separated format.
- ``--weights`` (str): Corresponding weights for the specified UIDs, in comma-separated format.

:::tip store the salt values 
After executing the above command you will see the `salt` values displayed on the terminal. Store these values. You will need them to reveal weights (see below).
:::

### Reveal weights

Example usage:

```bash
btcli wt reveal --netuid 1 --uids 1,2,3,4 --weights 0.1,0.2,0.3,0.4 --salt 163,241,217,11,161,142,147,189 --subtensor.network wss://test.chain.opentensor.ai:443
```

The above command is used to reveal weights for a specific subnet and requires the user to have the necessary permissions.

Optional arguments:
- ``--netuid`` (int): The netuid of the subnet for which weights are to be revealed.
- ``--uids`` (str): Corresponding UIDs for the specified netuid, in comma-separated format.
- ``--weights`` (str): Corresponding weights for the specified UIDs, in comma-separated format.
- ``--salt`` (str): Corresponding salt for the hash function, integers in comma-separated format. You will use the `salt` values you stored when executing the `btcli wt commit` command above.