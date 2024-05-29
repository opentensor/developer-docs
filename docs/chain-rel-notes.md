---
title: "Chain Release Notes"
---

# Chain Release Notes

## Release Notes for Testchain 1.1.0

The following are the release notes for the testchain 1.1.0 updates. **These updates will be available on the testchain only. They are not yet available on the mainchain.**

## New feature

### Commit reveal

A new feature, called, **commit reveal**, is made available on the testchain only. This feature will address the weight copying issue. 

The commit reveal feature changes the way the subnet validator weights are recorded to the chain. Rather than submitting weights openly to the chain that can be seen by anyone on the next block, subnet validators will upload an encrypted hash of their weights. This encrypted hash will be automatically decrypted after a set number of blocks. 

The delay in revealing the weights is a parameter that can be set by the subnet owners. The delay is expressed in integer number of blocks. The optimal delay will be different for different subnets and depends mostly on the rate of turnover in the subnet miners. A subnet owner can use the `commit_reveal_weights_interval` subnet hyperparameter to adjust this delay.

In addition, a subnet owner can turn this commit reveal feature on by setting the `commit_reveal_weights_enabled` hyperparameter to `True`.

For subnets that are very stable and have durable subnet miners who change ranks rarely, a longer delay interval would likely be more effective. For subnets with more frequent subnet miner registrations and deregistrations, a shorter interval could be effective as copiers will not be able to independently score new miners.

By giving weight copiers access only to old weights, the goal is to reduce the advantage gained by copying the current consensus. With commit-reveal we aim to make weight copying less attractive by decreasing the reward.

:::tip Weight copying technical paper and blog
- See [Weight Copying in Bittensor, a technical paper (PDF)](/papers/BT_Weight_copier-29May2024.pdf).
- Blog post, Weight Copying in Bittensor.
:::

### How to test the commit reveal feature

The commit reveal feature is available only at the below testchain URL and the specified branches:

- **Testchain URL**: `wss://test.finney.opentensor.ai:443/`.
- **Subtensor repo**: Make sure to checkout the tag `1.1.1 pre-release` on the Subtensor repo `https://github.com/opentensor/subtensor`.
- **Bittensor repo and branch**: 
    1. Make sure you switch to `release/7.0.1` branch on the Bittensor repo `https://github.com/opentensor/bittensor`
    2. Install by running the below command:
    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/opentensor/bittensor/master/scripts/install.sh)"
    ```

#### New subnet hyperparameters

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