---
title: "Validating in Bittensor"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Subnet Validators

## Checklist for Validating

When you are preparing to be a subnet validator, use the below checklist to get ready. When you are ready to validate, see the [Instructions](#instructions).

1. See the subnets that are active on the Bittensor network. 
2. Understand what kind of digital commodities these subnets are creating and optimizing. 
3. Understand the computing requirements for running a subnet validator in these subnets. 
    :::tip Typical compute requirements
    For example, see [Minimum compute requirements](https://github.com/opentensor/bittensor-subnet-template/blob/main/min_compute.yml) for compute, memory, bandwidth and storage requirements for a typical subnet node, i.e., for a typical subnet neuron.
    :::
4. Decide which subnet suits you best, based on the expertise you can provide and the cost of computing you can bear. **Read the subnet documentation for guidance on which subnet works best for you.**
5. **Note on Windows machine**: While wallet transactions like delegating, transfer, registering, and staking can be performed on a Windows machine using WSL (Windows Subsystem for Linux), validating is not recommended and is not supported on Windows machines.
6. Select your first choice subnet. 
7. Register on this subnet and secure a UID slot. This will cost you TAO. 
8. Know that when you secure a UID slot in a subnet on the main chain, this TAO is sunk cost. Nevertheless, you can indeed be a subnet validator in as many subnets as you can afford and expect to be successful. 
9. Keep in mind that to become a subnet validator, you must not only pay to secure the UID slot, **you must also stake enough TAO**.
10. You can only be an active subnet validator if you are in the group of 64 subnet validators who have the validator permit.

## Instructions

### Instructions for validating

1. Steps to register >> See below [Register](#register).
2. Steps to run a subnet validator >> See below [Running a subnet validator](#running-a-subnet-validator).

## Validator registration

To participate as a subnet validator, you must register first. Registration means registering your keys with your preferred subnet and purchasing a UID slot in that subnet.

:::tip No need to create a subnet to validate
You **do not** have to create a subnet to validate on the Bittensor network.
:::

Run the following command on your terminal, replacing `<your_preferred_netuid>`, `<my_coldkey>`, `<my_hotkey>`. 
`<your_preferred_netuid>` is the `netuid` of your preferred subnet.

```bash
btcli subnet register --netuid <your_preferred_netuid>  --wallet.name  <my_coldkey> --wallet.hotkey <my_hotkey>
```

For example, for subnet 1 (netuid of 1):
```bash
btcli subnet register --netuid 1 --wallet.name test-coldkey --wallet.hotkey test-hotkey
```

Registering works like this:

- When you run the above command, you have purchased a UID slot in the subnet of your choice.
- Your hotkey, which is part of your wallet, becomes the holder of the UID slot. **The terms "account" and "hotkey" are used synonymously.**

:::tip Ownership belongs to a hotkey
Ownership belongs to a hotkey. Hence, for example, when you delegate your TAO to a subnet validator, you attach your delegated TAO to the hotkey of the subnet validator. See [Delegation](../staking-and-delegation/delegation.md). 

A hotkey can hold multiple UIDs across **separate** subnets. However, within one subnet, each UID must have a unique hotkey.
:::

:::danger Windows not supported
While wallet transactions like delegating, transfer, registering, and staking can be performed on a Windows machine using WSL (Windows Subsystem for Linux), validating is not recommended or supported on Windows machines.
:::

## Running a subnet validator 

To become a subnet validator and be able to set weights, you must satisfy **all** the below conditions:
1. Register your keys to the subnet (as described above).
2. Stake sufficient TAO on your hotkey to secure a [validator permit](#validator-permit).
3. You must have at least 1000 TAO in your validator stake to be able to [set weights in the subnet](#minimum-tao-for-setting-weights). 

### Acquiring stake

:::tip Delegation
See also [Delegation](../staking-and-delegation/delegation.md)
:::

A validator's consensus weight and emissions depend on the stake attached to their hotkey. Stake can be acquired in two ways:

#### Stake your own TAO

You can do this by staking your own TAO funds to your hotkey, which holds the UID in the subnet where you want to validate.

```bash
# Stake funds to your hotkey account within the subnet.
btcli stake add --wallet.name <my_coldkey> --wallet.hotkey <my_hotkey>
```
Example:
```bash
btcli stake add --wallet.name test-coldkey --wallet.hotkey test-hotkey
```

#### Attract delegated stake 

You can also increase your stake by attracting delegated stake from nominators. For this, you must first nominate your hotkey as a delegate and then advertise this hotkey. The nominators can then delegate their TAO to your hotkey.

```bash
# Nominate your hotkey as a delegate
btcli root nominate --wallet.name <my_coldkey> --wallet.hotkey <my_hotkey>
```
Example:
```bash
btcli root nominate --wallet.name test-coldkey --wallet.hotkey test-hotkey
```

:::tip See also
See [Becoming a delegate](../staking-and-delegation/delegation.md#becoming-a-delegate) for specific steps.
:::

### Validator permit

Only the top 64 validators, when ranked by their stake amount in any particular subnet, are considered to have **a validator permit**. Only these top 64 subnet validators with permits are considered active in the subnet.

#### Calculate TAO required 

The amount of TAO needed to acquire a validator permit depends on how the other largest 64 wallets distribute TAO across themselves. You can calculate the minimum using [bt.metagraph](pathname:///python-api/html/autoapi/bittensor/core/metagraph/index.html):

```python
import bittensor as bt
subnet = bt.metagraph(1)
top_64_stake = sorted(subnet.S)[-64:]
print (f'Current requirement for validator permits based on the top 64 stake stands at {min(top_64_stake)} tao')
```

#### Check the permit status 

Replace the string values for the `name` (`<my_coldkey>`) and `hotkey` (`<my_validator_hotkey>`) with your own.  
This information can be obtained from the metagraph using your UID.

```python
import bittensor as bt
subnet = bt.metagraph(1)
wallet = bt.wallet( name = 'my_coldkey', hotkey = 'my_validator_hotkey' )
my_uid = subnet.hotkeys.index( wallet.hotkey.ss58_address )
print(f'Validator permit: {subnet.validator_permit(my_uid)}')
```

### Minimum TAO for setting weights

You must have at least 1000 TAO in your validator stake to be able to set weights in the subnet.

## Inspecting UIDs

After you obtain a UID slot, you can view the status of your registered wallet by running:

```bash
btcli wallet overview --netuid
```

After providing your wallet name at the prompt, you will see output like:

| Parameter   | Value                | Description                                                                 |
| :---------- | :------------------- | :-------------------------------------------------------------------------- |
| COLDKEY     | my_coldkey          | The name of the coldkey associated with your slot.                          |
| HOTKEY      | my_first_hotkey     | The name of the hotkey associated with your slot.                           |
| UID         | 5                   | The index of the uid out of available uids.                                 |
| ACTIVE      | True                | Whether or not the uid is considered active.                                |
| STAKE(τ)    | 71.296              | The amount of stake in this wallet.                                         |
| RANK        | 0.0629              | This miner's absolute ranking according to validators on the network.       |
| TRUST       | 0.2629              | This miner's trust as a proportion of validators on the network.            |
| CONSENSUS   | 0.89                | This validator's aggregate consensus score.                                 |
| INCENTIVE   | 0.029               | This miner's incentive, TAO emission, is attained via mining.               |
| DIVIDENDS   | 0.001               | This validator's dividends, TAO emission, are attained via validating.      |
| EMISSION    | 29_340_153          | This miner's total emission in RAO (10^(-9) TAO) per block.                 |
| VTRUST      | 0.96936             | This validator's trust score as a validator.                                |
| VPERMIT     | *                   | Whether this miner is considered active for validating on this subnetwork.  |
| UPDATED     | 43                  | Blocks since this miner set weights on the chain.                           |
| AXON        | 131.186.56.85:8091  | The entrypoint advertised by this miner on the bittensor blockchain.        |
| HOTKEY_SS58 | 5F4tQyWr...         | The ss58-encoded address of the miner's hotkey.                             |

### Meaning of ACTIVE

In the above table, the `ACTIVE` row applies only to UIDs that are subnet validators. It shows whether the UID is actively setting weights within the [`activity_cutoff`](../subnets/subnet-hyperparameters#activity_cutoff) window. If the UID has not set weights on the blockchain for the `activity_cutoff` duration, then the Yuma Consensus will consider this subnet validator offline, i.e., turned off (`False`).

## Checking the registration status

Use any of the Python code fragments below:

- **Using Python interpreter**: Type "python" or "python3" on your macOS or Linux terminal, then copy/paste one of these snippets.
- **Using a Python file**: Copy a code snippet into, for example, `check_reg.py`, then run `python3 check_reg.py`.

### With SS58 hotkey

```python
import bittensor as bt
# Replace below with your SS58 hotkey 
hotkey = "5HEo565WAy4Dbq3Sv271SAi7syBSofyfhhwRNjFNSM2gP9M2"
network = "finney"
sub = bt.subtensor(network)
print(f"Registration status for hotkey {hotkey} is: {sub.is_hotkey_registered(hotkey)}")
```

### With SS58 hotkey and netuid

```python
import bittensor as bt
# Replace below with your SS58 hotkey 
hotkey = "5HEo565WAy4Dbq3Sv271SAi7syBSofyfhhwRNjFNSM2gP9M2"
network = "finney"
netuid = 1 # subnet uid
sub = bt.subtensor(network)
mg = sub.metagraph(netuid)
if hotkey not in mg.hotkeys:
  print(f"Hotkey {hotkey} deregistered")
else:
  print(f"Hotkey {hotkey} is registered")
```

### With UID and SS58 hotkey

```python
import bittensor as bt
# Replace below with your SS58 hotkey 
hotkey = "5HEo565WAy4Dbq3Sv271SAi7syBSofyfhhwRNjFNSM2gP9M2"
network = "finney"
netuid = 1 # subnet uid
sub = bt.subtensor(network)
mg = sub.metagraph(netuid)
uid = 2 # Your UID
registered = mg.hotkeys[uid] == hotkey
if not registered:
  print(f"Miner at uid {uid} not registered")
else:
  print(f"Miner at uid {uid} registered")
```
