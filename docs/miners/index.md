---
title: "Mining in Bittensor"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Mining in Bittensor

## Choosing a subnet

All mining in Bittensor occurs within a subnet. Each subnet independently produces the digital commodities that are its purpose, each subnet creator defining a different *incentive mechanism* for validators to use in judging miners' work. It is validators scores of miners' performance, according to this incentive mechanism, that determines the proportion of the subnet's emissions allocated to each miner. See [Emissions](../emissions.md).

Mining in Bittensor is not like mining Bitcoin or many other blockchains, it is active, creative, and competitive. Preparing to be a subnet miner involves researching the right subnet(s) for *you* to mine, given your own expertise and access to hardware.

Browse the subnets and explore links to their code repositories on [Taostats' subnets listings](https://taostats.io/subnets).

:::tip Typical compute requirements
Each subnet may have distinct hardware requirements, but this [minimum requirements template for subnet creators](https://github.com/opentensor/bittensor-subnet-template/blob/main/min_compute.yml) may give an idea of minimum memory, bandwidth and storage requirements for a typical subnet node.

Mining is not supported on Windows.
:::

## Miner registration

To participate as a miner, you must first register your keys with the subnet in order to receive a UID on that subnet.

:::tip No need to create a subnet to mine
You **do not** have to create a subnet to mine on the Bittensor network. Most miners work on established subnets.
:::
<!-- what determines the registration cost for a subnet??? is it burned, recycled, or locked??? this all needs a fact check... -->

Registration has a cost in TAO. When you secure a UID slot in a subnet on the main chain, this TAO is sunk cost. Nevertheless, you can be a subnet miner in as many subnets as you can afford and expect to be successful.

A subnet can have a maximum of 64 subnet validator UIDs and 192 subnet miner UIDs (256 total) in subnets other than Subnet 1.

Upon registration, your hotkey, which is part of your wallet, becomes the holder of the UID slot. **The terms "account" and "hotkey" are used synonymously.**

:::tip Ownership belongs to a hotkey
When you delegate your TAO to a subnet validator, you attach your delegated TAO to that validator’s hotkey. See [Delegation](../staking-and-delegation/delegation.md). 

A hotkey can hold multiple UIDs across **separate** subnets. However, within one subnet, each UID must have a unique hotkey.
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

## Miner deregistration

A subnet miner can be deregistered if its performance is poor. Mining is competitive—and the UID slots are limited. Except in Subnet 1, all subnets have 256 UID slots per subnet. Of these 256 UID slots, a subnet can have a maximum of 64 subnet validator UIDs and 192 subnet miner UIDs. Each tempo, the lowest ranked mine risks being replaced by a newly registered miner, who takes over that UID. 

- Every subnet has an `immunity_period` hyperparameter expressed in a number of blocks.
    :::tip See
    See [`immunity_period`](../subnets/subnet-hyperparameters.md#immunity_period).
    :::
- A subnet miner or validator at a UID (in that subnet) has `immunity_period` blocks to improve its performance. When `immunity_period` expires, that miner or validator can be deregistered if it has the lowest performance in the subnet and a new registration arrives.
- The `immunity_period` starts when a miner or validator is registered into the subnet.

Below is a diagram illustrating a subnet miner’s registration timeline:

<ThemedImage
alt="Miner deregistration"
sources={{
    light: useBaseUrl('/img/docs/miner-deregistration.svg'),
    dark: useBaseUrl('/img/docs/dark-miner-deregistration.svg'),
  }}
style={{width: 990}}
/>

- Blocks are processed in subtensor (the Bittensor blockchain) every 12 seconds.
- A subnet miner registers a hotkey and receives a UID—and its `immunity_period` starts.
- The miner publishes its Axon’s `IP:PORT` for the subnet validators.
- The subnet validators refresh their metagraph and discover the new Axon.
- The subnet validators send requests to that Axon and evaluate its responses. This drives the subnet’s incentive mechanism, awarding emissions to the miner.
- While still in the `immunity_period`, the subnet miner builds up its emissions from zero.
- At the end of the `immunity_period`, if this miner’s emission ranks the lowest among those also out of their `immunity_period`, then upon the next registration, this miner’s UID gets transferred to the new registrant.

:::tip Subnet miner emission
A subnet miner's emission may not always appear as a smooth curve. Emission might only update at the end of tempo periods, or subnet validators might do more frequent internal updates. For example, a validator might detect new miners and refresh every 100 blocks.
:::

## Moving a subnet miner to a different machine

Once your subnet miner has begun mining, you can move it to a different machine, but proceed with caution.

:::tip Always minimize subnet miner downtime
Always minimize any downtime for your subnet miner. Missing validation requests can significantly damage the incentive and rewards of your subnet miner.
:::

To move a subnet miner from one machine to another, follow these steps in order:

1. Start the subnet miner on the new machine.
2. Wait for the old miner to stop receiving requests from the subnet validators.
3. Stop the old miner.

It can take subnet validators some time to recognize the updated IP of the Axon for your subnet miner.


## Inspecting UIDs

After you obtain a UID slot, you can view your wallet’s status by running:

```bash
btcli wallet overview --netuid
```

After providing your wallet name when prompted, you will see output such as:

| Parameter   | Value                | Description                                                                 |
| :---------- | :------------------- | :-------------------------------------------------------------------------- |
| COLDKEY     | my_coldkey          | The name of the coldkey associated with your slot.                          |
| HOTKEY      | my_first_hotkey     | The name of the hotkey associated with your slot.                           |
| UID         | 5                   | The index of the uid out of available uids.                                 |
| ACTIVE      | True                | The validator has set weights within the subnet's activity_cutoff           |
| STAKE(τ)    | 71.296              | The amount of stake in this wallet.                                         |
| RANK        | 0.0629              | This miner's absolute ranking according to validators on the network.       |
| TRUST       | 0.2629              | This miner's trust as a proportion of validators on the network.            |
| CONSENSUS   | 0.89                | This validator's aggregate consensus score.                                 |
| INCENTIVE   | 0.029               | This miner's incentive, TAO emission, is attained via mining.               |
| DIVIDENDS   | 0.001               | This validator's dividends, TAO emission, are attained via validating.      |
| EMISSION    | 29_340_153          | This miner's total emission in RAO (10^(-9) TAO) per block.                 |
| VTRUST      | 0.96936             | This validator's trust score as a validator.                                |
| VPERMIT     | *                   | For validators: The uid is considered active for validating on this subnet. |
| UPDATED     | 43                  | Blocks since this miner set weights on the chain.                           |
| AXON        | 131.186.56.85:8091  | The entrypoint advertised by this miner on the bittensor blockchain.        |
| HOTKEY_SS58 | 5F4tQyWr...         | The ss58-encoded address of the miner's hotkey.                             |

## Checking miner registration status

Use any of the Python snippets below:

- **Using Python interpreter**: Type "python" or "python3" in your terminal, then paste a snippet.
- **Using a Python file**: Copy into, e.g., `check_reg.py`, then run `python3 check_reg.py`.

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
