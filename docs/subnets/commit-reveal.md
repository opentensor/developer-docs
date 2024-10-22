---
title: "Commit Reveal"
---

# Commit Reveal

This guide describes the **commit reveal** feature. This feature will address the weight copying issue. 

## Weight copying

In a subnet, the consensus weights reached by the subnet validators is public information. This leads to an unfortunate outcome: Some subnet validators do not do the work of evaluating the subnet miners, but instead  copy the latest consensus, thereby free-riding on the work done by other subnet validators in the subnet. This is the weight-copying problem. 

The commit reveal feature is designed to combat this weight-copying problem. The main idea is this: The consensus weights set by subnet validators are hidden for a certain interval. The weight-copiers would be able to view these weights only after this interval is elapsed. But by then these consensus weights would've become quite old and hence would create a loss for the weight-copier using these copied old weights. In specific, it works like this:  

A subnet validator:
1. Instead of setting the consensus weights normally using [`set_weights`](pathname:///python-api/html/autoapi/bittensor/core/extrinsics/set_weights/index.html), hashes these weights.
2. Commits this hash to the blockchain.
3. Waits for a certain interval.
4. Then reveals these weights by finally submitting them to the blockchain.  

On the chain side, the hash of the revealed weights are compared to the hash that was committed earlier.  If the hashes are the same, the chain will apply the weights.  The purpose of this is to allow honest validators to have an advantage over weight-copying validators by essentially hiding their weights for a certain interval, so by the time weight-copiers are able to view the honest validator’s weights, they will already be fairly old.


## Technical paper, blog and Python notebook

- See [Weight Copying in Bittensor, a technical paper (PDF)](pathname:///papers/BT_Weight_Copier-29May2024.pdf).
- Blog post, [Weight Copying in Bittensor](https://blog.bittensor.com/weight-copying-in-bittensor-422585ab8fa5).

## Collab notebooks

A subnet owner can run the below Python notebook to experiment and choose the right values for the hyperparameter `commit_reveal_interval`.

- For commit reveal diagnostic: https://colab.research.google.com/github/opentensor/developer-docs/blob/main/static/weight_copy/commit_reveal_diagnostic.ipynb?authuser=5
- [GitHub directory with Python notebooks](https://github.com/opentensor/developer-docs/tree/main/static/weight_copy/). 

## Description

The commit reveal feature changes the way the subnet validator weights are recorded on the chain. Instead of submitting weights openly to the chain where they can be seen by anyone, subnet validators will commit an encrypted hash of their weights to the chain. These same validators will then be encouraged to reveal these weights after the expiry of `commit_reveal_weights_interval`.

The delay in revealing the weights is a parameter that can be set by the subnet owners. The delay is expressed in integer number of blocks. The optimal delay will be different for different subnets and depends mostly on the rate of turnover in the subnet miners. 

### New subnet hyperparameters

This feature is meant to be used by a subnet owner. To activate this feature, a subnet owner should set the `commit_reveal_weights_enabled` hyperparameter to `True`.

In addition, the subnet owner should use the `commit_reveal_weights_interval` subnet hyperparameter to set the delay before revealing the weights.

For subnets that are very stable and have durable subnet miners who change ranks rarely, a longer delay interval would likely be more effective. For subnets with more frequent subnet miner registrations and deregistrations, a shorter interval could be effective as copiers will not be able to independently score new miners.

By giving weight copiers access only to old weights, the goal is to reduce the advantage gained by copying the current consensus. With commit-reveal we aim to make weight copying less attractive by decreasing the reward.

## How to use commit reveal feature

Here are summary steps to use the commit reveal feature. These steps are typically executed by a subnet owner:

1. Enable the commit reveal feature by setting the new subnet hyperparameter `commit_reveal_weights_enabled` (bool) to `True`.
2. Specify the desired number of blocks of delay before revealing the weights, by using the new subnet hyperparameter `commit_reveal_weights_interval` (integer). 
3. Set the subnet hyperparameter `weights_rate_limit`.
4. Generate your own salt. For example, you can use the following code snippet to generate salt. 
    ```python
        # Generate random salt
        salt_length = 8
        salt = list(os.urandom(salt_length))
    ```
5. Commit weights. You will use the above-generated salt.
6. Reveal weights. You will use the above-generated salt.

## Using in Python code

### Method signatures

See below the Python definitions for the commit reveal feature:

```python
import bittensor as bt
    # Enable Commit Reveal
    enabled_result = bt.subtensor.set_hyperparameter(
        wallet=wallet,
        netuid=netuid,
        parameter="commit_reveal_weights_enabled",
        value=value,
        wait_for_inclusion=True,
        wait_for_finalization=True,
    )
    # Set interval
    interval_result = bt.subtensor.set_hyperparameter(
        wallet=wallet,
        netuid=netuid,
        parameter="commit_reveal_weights_interval",
        value=value,
        wait_for_inclusion=True,
        wait_for_finalization=True,
    )
    # Set rate limit
    rate_limit_result = bt.subtensor.set_hyperparameter(
        wallet=wallet,
        netuid=netuid,
        parameter="weights_rate_limit",
        value=value,
        wait_for_inclusion=True,
        wait_for_finalization=True,
    )
    # Run the commit weights operation
    success, message = bt.subtensor.commit_weights(
        wallet=wallet,
        netuid=netuid,
        uids=weight_uids,
        weights=weight_vals,
        salt=salt,
        wait_for_inclusion=True,
        wait_for_finalization=True,
    )
    # Run the reveal weights operation.
    success, message = bt.subtensor.reveal_weights(
        wallet=wallet,
        netuid=netuid,
        uids=weight_uids,
        weights=weight_vals,
        salt=salt,
        wait_for_inclusion=True,
        wait_for_finalization=True,
    )
```

:::tip Optional parameters
In the above `reveal_weights()` method, the `wait_for_inclusion=True`, and `wait_for_finalization=True` parameters are optionals.
:::

### Example Python code

Below is the example Python code showing how to use the above definitions for the commit reveal feature:

:::tip generating salt
You are expected to generate your own salt and use it in the commit reveal feature. For example, you can use the following Python code snippet to generate your salt and use it:
    ```python
        # Generate random salt
        salt_length = 8
        salt = list(os.urandom(salt_length))
    ```
:::

See the example Python code below:

```python
import bittensor as bt
    # Enable Commit Reveal
    enabled_result = bt.subtensor.set_hyperparameter(
        wallet=wallet,
        netuid=1,
        parameter="commit_reveal_weights_enabled",
        value=True
    )
    # Set interval
    interval_result = bt.subtensor.set_hyperparameter(
        wallet=wallet,
        netuid=1,
        parameter="commit_reveal_weights_interval",
        value=370
    )
    # Set rate limit
    rate_limit_result = bt.subtensor.set_hyperparameter(
        wallet=wallet,
        netuid=1,
        parameter="weights_rate_limit",
        value=0
    )
    # Run the commit weights operation
    weights = [0.1,0.2,0.3,0.4]
    weight_uids = [1, 2, 3, 4]
    salt = [18, 179, 107, 0, 165, 211, 141, 197]
    success, message = bt.subtensor.commit_weights(
        wallet=wallet,
        netuid=1,
        uids=weight_uids,
        weights=weights,
        salt=salt
    )
    # Run the reveal weights operation.
    success, message = bt.subtensor.reveal_weights(
        wallet=wallet,
        netuid=1,
        uids=weight_uids,
        weights=weights,
        salt=salt
    )
```
---

## Using `btcli`

### Set the subnet hyperparameters 

#### 1. Enable the commit reveal feature

**Syntax**

```bash
btcli sudo set hyperparameters --netuid <NETUID> --param commit_reveal_weights_enabled --value <True or False>
```

**Example**

For subnet 1 (`netuid` of `1`):

```bash
btcli sudo set hyperparameters --netuid 1 --param commit_reveal_weights_enabled --value True
```

#### 2. Set the interval

**Syntax**

```bash
btcli sudo set hyperparameters --netuid <NETUID> --param commit_reveal_weights_interval --value <INTEGER>
```

**Example**

Setting the interval of 370 blocks for subnet 1 (`netuid` of `1`):

```bash
btcli sudo set hyperparameters --netuid 1 --param commit_reveal_weights_interval --value 370
```

#### 3. Set the weights rate limit

If you are a subnet owner, you may already have set the subnet hyperparameter `weights_rate_limit`. If you have not set it, then use the below command to set it. See the section in the [Subnet Hyperparameters](./subnet-hyperparameters.md#weights_rate_limit) document.

```bash
btcli sudo set
```

### Commit weights

Example usage using the testnet:

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

Example usage using the testnet:

```bash
btcli wt reveal --netuid 1 --uids 1,2,3,4 --weights 0.1,0.2,0.3,0.4 --salt 163,241,217,11,161,142,147,189 --subtensor.network wss://test.chain.opentensor.ai:443
```

The above command is used to reveal weights for a specific subnet and requires the user to have the necessary permissions.

Optional arguments:
- ``--netuid`` (int): The netuid of the subnet for which weights are to be revealed.
- ``--uids`` (str): Corresponding UIDs for the specified netuid, in comma-separated format.
- ``--weights`` (str): Corresponding weights for the specified UIDs, in comma-separated format.
- ``--salt`` (str): Corresponding salt for the hash function, integers in comma-separated format. You will use the `salt` values you stored when executing the `btcli wt commit` command above.
