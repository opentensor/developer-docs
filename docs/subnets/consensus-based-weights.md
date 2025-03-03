---
title: "Consensus-based Weights/Liquid alpha"
---

# Consensus-based Weights

This guide describes how to use the **consensus-based weights** feature (also called "liquid alpha"). 

With this feature, a subnet validator's dividends are better correlated to the performance of the subnet miner on which the subnet validator is setting the weights. In this context, see also the documentation for the [Commit Reveal](./commit-reveal.md) feature, as both these features help the subnet validators find new subnet miners that perform well and bond to them quickly.

## Technical paper, blog

- See [Amplifying the Weight-copying Penalty in Bittensor, a working paper (PDF)](pathname:///papers/BT-Consensus-based-Weights.pdf).
- Blog post: [Consensus-based Weights](https://blog.bittensor.com/consensus-based-weights-1c5bbb4e029b).
- Subtensor document section: [Validator bonding](https://github.com/opentensor/subtensor/blob/main/docs/consensus.md#validator-bonding).

## Collab notebooks

A subnet owner can run the `weight_copy/liquid_alpha_diagnostic.ipynb` in the Python notebook below to experiment and choose the right values for the hyperparameters `alpha_low`, `alpha_high`, and `commit_reveal_interval`.

- For commit reveal diagnostic: https://colab.research.google.com/github/opentensor/developer-docs/blob/main/static/weight_copy/commit_reveal_diagnostic.ipynb?authuser=5
- For liquid alpha diagnostic: https://colab.research.google.com/github/opentensor/developer-docs/blob/main/static/weight_copy/liquid_alpha_diagnostic.ipynb?authuser=5
- [GitHub directory with Python notebooks](https://github.com/opentensor/developer-docs/tree/main/static/weight_copy/). 

## Description

Currently, while calculating the dividends to a subnet validator, a quantity called $\Delta B_{ij}$, defined as an **instantaneous bond value** of a subnet validator $i$ with the subnet miner $j$, is used.

A subnet validator maintains an instantaneous bond value on each subnet miner. However, while calculating a subnet validator's dividends, instead of directly using the instantaneous bond value $\Delta B_{ij}$, we use $B_{ij}^{(t)}$, an **exponential moving average (EMA)** of the bond value, weighted over the current epoch and the previous epoch. See the below equation for how this EMA is computed, where $t$ is the current epoch time and $t-1$ is the previous epoch time:

$$
B_{ij}^{(t)} = \alpha\cdot\Delta B_{ij}^{(t)} + (1-\alpha)\cdot B_{ij}^{(t-1)}
$$

This EMA, $B_{ij}^{(t)}$, helps in the early discovery of promising subnet miners and prevents abrupt changes to the bond value. Typically, any abrupt change in the bond value indicates exploitation. 

Finally, the **dividend $D_i$ to a subnet validator $i$** is calculated as:

$$
D_i = \sum_j B_{ij} \cdot I_j
$$ 

where $B_{ij}$ is the EMA bond value of the subnet validator $i$ with the subnet miner $j$, and $I_j$ is the subnet miner's incentive. See the subtensor document section, [Validator bonding](https://github.com/opentensor/subtensor/blob/main/docs/consensus.md#validator-bonding) for a rigorous mathematical treatment of this topic. 

### What changed with this feature

Without the consensus-based weights feature, the $\alpha$ in the above equation is set to `0.9`. With the consensus-based weights feature, this $\alpha$ value is made into a variable. An optimum value for the variable $\alpha$ is determined based on the current consensus (YC-2) in a given subnet. Hence, this feature is called **consensus-based weights**.

Using the new subnet hyperparameters that are described below, a subnet owner should experiment and discover the optimum $\alpha$ for their subnet. 

## Installing the consensus-based weights feature

The consensus-based weights feature is available in Bittensor 7.3.0 and later versions. To use this feature, make sure you update to the `7.3.0` version.

---

## Using test consensus-based weights feature

### Summary steps

Here are summary steps to use the consensus-based weights feature. A subnet owner typically executes these steps:

1. To activate this feature, a subnet owner should set the `liquid_alpha_enabled` (bool) hyperparameter to `True`.
2. Next, the subnet owner should set the upper and lower bounds for $\alpha$ by using a single subnet hyperparameter, `alpha_values` (List[int]). 

:::danger Set alpha low and high together
You must set `alpha_low` and `alpha_high` together using `alpha_values`. See below.
:::

---

## Default values, allowed ranges and value format

### Default values

- The default value for `alpha_low` is `0.7`.
- The default value for `alpha_high` is `0.9`.
- The default value for `liquid_alpha_enabled` is `False`.

### Allowed ranges

- The range for both `alpha_low` and `alpha_high` hyperparameters is `(0,1)`.
- However, **until further notice**, the `alpha_high` value must be greater than or equal to `0.8`.
- The value of `alpha_low` must not be greater than or equal to `alpha_high`.

### Value format

When you set the subnet hyperparameters `alpha_low` and `alpha_high`, you must pass their integer equivalents in `u16`. This applies whether you set these hyperparameters using the `btcli` command or in your Python code. These integer values are then converted by the subtensor into their corresponding decimal values in the `u16` format. 

Use the below conversion formula to determine the integer values for your desired decimal values for both `alpha_low` and `alpha_high` hyperparameters.

$$ 
\text{Integer value} = \text{(your-desired-decimal-value)} \times 65535
$$

Hence, for example:
- If you want `alpha_low` to be `0.1`, then you would pass `6554`, which is the rounded up value of `0.1 * 65535`. 
- If you want `alpha_high` to be `0.8`, then you would pass `52428`, which is the value of `0.8 * 65535`.

---

## Detailed steps using Python code

### Method signatures

See below the Python definitions for the consensus-based weights feature:

```python
import bittensor as bt

wallet = bt.wallet(name=<my_coldkey>)
subtensor = bt.subtensor(network="127.0.0.1:9946")

# Enable consensus-based weights (liquid alpha) feature
enabled_result = subtensor.set_hyperparameter(
wallet=wallet,
netuid=<your_preferred_netuid>,
parameter="liquid_alpha_enabled",
value=value,
wait_for_inclusion=True,
wait_for_finalization=True,
)
print(enabled_result)

# Set alpha_values as a list of integers passed to "value" parameter in this order: alpha_low, alpha_high
alpha_low_high_result = subtensor.set_hyperparameter(
wallet=wallet,
netuid=<your_preferred_netuid>,
parameter="alpha_values",
value=[], # decimal 0.1 for alpha_low and 0.8 for alpha_high
wait_for_inclusion=True,
wait_for_finalization=True,
)
print(alpha_low_high_result)
```

### Example Python code

Below is the example Python code showing how to use the above definitions for the commit reveal feature:

```python
import bittensor as bt

wallet = bt.wallet(name="test-coldkey")
subtensor = bt.subtensor(network="127.0.0.1:9946")

# Enable consensus-based weights (liquid alpha) feature
enabled_result = subtensor.set_hyperparameter(
wallet=wallet,
netuid=1,
parameter="liquid_alpha_enabled",
value=True,
wait_for_inclusion=True,
wait_for_finalization=True,
)
print(enabled_result)

# Set alpha low and high values
alpha_low_high_result = subtensor.set_hyperparameter(
wallet=wallet,
netuid=1,
parameter="alpha_values",
value=[6554, 52428], # decimal 0.1 for alpha_low and 0.8 for alpha_high
wait_for_inclusion=True,
wait_for_finalization=True,
)
print(alpha_low_high_result)
```

:::danger you must always set alpha_low and alpha_high together
You must set the values for both `alpha_low` and `alpha_high` together. Current functionality does not allow setting a value to only one of `alpha_low` or `alpha_high`. 

For example, if you want to set a new value to `alpha_low` but do not want to change the `alpha_high` value, you must pass the new value of `alpha_low`, and also the current, unchanging value of `alpha_high`, while setting the `alpha_values`. 
:::

---

## Detailed steps using `btcli`

### Set the subnet hyperparameters

#### 1. Enable the consensus-based weights feature

**Syntax**

```bash
btcli sudo set hyperparameters --netuid <your_preferred_netuid> --param liquid_alpha_enabled --value <True> or <False>
```

**Example**

For subnet 1 (`netuid` of `1`):

```bash
btcli sudo set hyperparameters --netuid 1 --param liquid_alpha_enabled --value True
```
or you can also use,

```bash
btcli sudo set
```
and follow the terminal prompts:

```bash
>> Enter wallet name (default):    # <my_coldkey>
>> Enter netuid [0/1/2/3] (0):     # <your_preferred_netuid>
>> Enter hyperparameter:           # <liquid_alpha_enabled>
>> Enter new value:                # <True> or <False>
>> Enter password to unlock key:   # <password>
```

:::info tip
When you use `btcli sudo set` you can use `1` or `0` to enable or disable the `liquid_alpha_enabled` hyperparameter. You can also use `true` or `True`, or `false` or `False`. 
:::

#### 2. Use the `alpha_values` to set the `alpha_low` and `alpha_high`

**Syntax**

```bash
btcli sudo set hyperparameters --netuid <your_preferred_netuid> --param alpha_values --value <value-of-alpha_low,value-of-alpha_high>
```

**Example**

Setting the value of `alpha_low` to the decimal `0.1` (integer `6554`) and `alpha_high` to the decimal `0.8` (integer `52428`) for subnet 1 (`netuid` of `1`):

```bash
btcli sudo set hyperparameters --netuid 1 --param alpha_values --value 6554,52429
```

Output:
```bash
>> Enter wallet name (default):    # <my_coldkey>
>> Enter password to unlock key:   # <password>
>> ✅ Hyper parameter alpha_values changed to [6554.0, 55706.0]
```

Now, if you want to only change the `alpha_high` value from `0.8` to `0.85` (integer `55705`), then:

First, execute the `btcli sudo set` command and provide the `netuid`. The terminal will display the current alpha_low` and `alpha_high` values.

:::warning alert
When you use `btcli sudo set,` the display will not show the `alpha_values` parameter. It will only show the `alpha_low` and `alpha_high` parameters.
:::

Use the current value of `alpha_low` from the above display and the new desired value of `alpha_high` and set both like below:

```bash
btcli sudo set hyperparameters --netuid 1 --param alpha_values --value 6554,55706
```
