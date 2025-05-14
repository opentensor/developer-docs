---
title: "Validating in Bittensor"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Validating in Bittensor


All mining and validating in Bittensor occurs within a subnet. Each subnet independently produces the digital commodities that are its purpose, each subnet creator defining a different *incentive mechanism* for validators to use in judging miners' work. The validator's work is to apply this incentive mechanism to miners, using it to score their performance, and then to submit these weights to the Bittensor blockchain. It is validators scores of miners' performance that determines the proportion of the subnet's emissions allocated to each miner, according to the Yuma Consensus algorithm. See [Emissions](../emissions.md).

Browse the subnets and explore links to their code repositories on [TAO.app' subnets listings](https://tao.app).

:::tip Typical compute requirements
Each subnet may have distinct hardware requirements, but this [minimum requirements template for subnet creators](https://github.com/opentensor/bittensor-subnet-template/blob/main/min_compute.yml) may give an idea of minimum memory, bandwidth and storage requirements for a typical subnet node.

Validating is not supported on Windows.
:::

## Requirements for validation

To have a **validator permit** in a given subnet, allowing you to submit miner evaluations using `btcli weights commit` or the SDK's [`set_weights`](pathname:///python-api/html/autoapi/bittensor/core/extrinsics/set_weights/index.html#module-bittensor.core.extrinsics.set_weights) function, you must meet the following requirements:

- Your hotkey must be registered, granting you a UID on the subnet
- You must have a stake-weight on the subnet of least 1000, including stake delegated to your hotkey from other wallets' coldkeys. A validator's stake weight in a subnet equals their alpha stake plus their TAO stake times the `tao_weight` parameter (current value: 0.18):

		$$

		\text{Validator stake weight} = \alpha +  0.18 \times \tau 

		$$

- You must be one of the top 64 validators in the subnet, ranked by stake weight.

## Hotkey Association & Staking (subnet 0, the root subnet, only)

:::tip Root Subnet (Subnet 0) only
Skip this step if you are not registering a validator on the root subnet (subnet 0)
:::

```bash
btcli wallet associate-hotkey --wallet.name  <wallet name> --hotkey <your hotkey>
```
Add stake to your validator before registering: 

```bash
# Stake funds to your hotkey account within the subnet.
btcli stake add --wallet.name <wallet name> --wallet.hotkey <your validating hotkey>
```
:::tip Root Subnet (Subnet 0) only
In order to be able to set weights in a subnet, you will need a minimum of 1000 of stake weight in the subnet's alpha token.  Stake weight is calculated as TAO * .18 + alpha: 1000 stake weight of alpha in a subnet could be 1000 alpha tokens staked, 18000 TAO staked, or a combination of the two such that the stake weight for the subnet is at least 1000.
:::

## Validator registration

To participate as a validator, you must first register your keys with the subnet in order to receive a UID on that subnet.

A subnet can have a maximum of 64 active subnet validator UIDs and 192 subnet miner UIDs (256 total).

Upon registration, your hotkey, which is part of your wallet, becomes the holder of the UID slot.


```bash
btcli subnet register --netuid <desired netuid> --wallet.name  <wallet name> --hotkey <your hotkey>
```

## Acquiring stake

A validator's consensus weight and emissions depend on their hotkey's stake weight. You can stake your own TAO to your validator hotkey, or advertise your hotkey to others and seek stake. Any wallet's coldkey can stake to any hotkey, subsequently receiving emissions from that stake.

:::tip Delegation
See [StakingDelegation](../staking-and-delegation/delegation.md)
:::

### Add stake


```bash
# Stake funds to your hotkey account within the subnet.
btcli stake add --wallet.name <wallet name> --wallet.hotkey <your validating hotkey>
```

### Calculate TAO required 

The amount of TAO needed to acquire a validator permit depends on how the other largest 64 wallets distribute TAO across themselves. You can calculate the minimum using [bt.metagraph](pathname:///python-api/html/autoapi/bittensor/core/metagraph/index.html):

```python
import bittensor as bt
subnet = bt.metagraph(1)
top_64_stake = sorted(subnet.S)[-64:]
print (f'Current requirement for validator permits based on the top 64 stake stands at {min(top_64_stake)} tao')
```

### Check the permit status 

Replace the string values for the `name` (`<my_coldkey>`) and `hotkey` (`<my_validator_hotkey>`) with your own.  
This information can be obtained from the metagraph using your UID.

```python
import bittensor as bt
subnet = bt.metagraph(1)
wallet = bt.wallet( name = 'my_coldkey', hotkey = 'my_validator_hotkey' )
my_uid = subnet.hotkeys.index( wallet.hotkey.ss58_address )
print(f'Validator permit: {subnet.validator_permit(my_uid)}')
```

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
