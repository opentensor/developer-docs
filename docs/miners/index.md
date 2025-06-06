---
title: "Mining in Bittensor"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Mining in Bittensor

## Choosing a subnet

All mining in Bittensor occurs within a subnet. Each subnet independently produces the digital commodities that are its purpose. Each subnet creator defines a different _incentive mechanism_ for validators to use in judging miners' work. Its validators score miners' performances according to the subnet's incentive mechanism. These scores determine the proportion of the subnet's emissions allocated to each miner. See [Emissions](../emissions.md).

Mining in Bittensor differs significantly from mining Bitcoin or other blockchains. It is active, creative, and competitive. Preparing to be a subnet miner involves researching the right subnet(s) for _you_ to mine, given your own expertise and access to hardware.

Browse the subnets and explore links to their code repositories on [TAO.app' subnets listings](https://tao.app).

:::tip Typical compute requirements
Each subnet may have distinct hardware requirements, but this [subnet minimum requirements template](https://github.com/opentensor/bittensor-subnet-template/blob/main/min_compute.yml#L14) may give an idea of the minimum memory, bandwidth and storage requirements for miners in a typical subnet node.

Mining is not supported on Windows.
:::

## Miner registration

To participate as a miner, you must first register a hotkey with the subnet in order to receive a UID on that subnet.

:::tip No need to create a subnet to mine
You **do not** have to create a subnet to mine on the Bittensor network. Most miners work on already established subnets.
:::

Registration has a cost in TAO, which fluctuates dynamically based on the time since the last registration. When you secure a UID slot in a subnet on the main chain, this TAO is sunk cost and cannot be recovered.

A subnet can have a maximum of 64 subnet validator UIDs and 192 subnet miner UIDs (256 total) in subnets other than Subnet 1.

Upon registration, your hotkey, which is part of your wallet, becomes the holder of the UID slot.

:::tip Ownership belongs to a hotkey
When you delegate your TAO to a subnet validator, you attach your delegated TAO to that validator’s hotkey. See [Delegation](../staking-and-delegation/delegation.md).

A hotkey can hold multiple UIDs across **separate** subnets. However, within one subnet, each UID must have a unique hotkey.
:::

To register your keys with a subnet, run the following command on your terminal, replacing `<your_preferred_netuid>`, `<my_coldkey>`, `<my_hotkey>`.
`<your_preferred_netuid>` is the `netuid` of your preferred subnet.

```bash
btcli subnet register --netuid <your_preferred_netuid>  --wallet.name  <my_coldkey> --wallet.hotkey <my_hotkey>
```

For example, to register your keys with subnet 1—netuid of 1:

```bash
btcli subnet register --netuid 1 --wallet.name test-coldkey --wallet.hotkey test-hotkey
```

## Miner deregistration

A miner can be deregistered if it earns low emissions due to receiving low weights (ratings) from validators. Typical subnets have 256 UID slots per subnet, of which a maximum of 64 subnet can be occupied by validators. Each tempo, the lowest ranked slot is deregistered from the hotkey that holds it and assigned to a new registrant.

- Every subnet has an `immunity_period` hyperparameter expressed in a number of blocks.
  :::tip See
  See [`immunity_period`](../subnets/subnet-hyperparameters.md#immunityperiod).
  :::
- A subnet miner or validator at a UID (in that subnet) has a defined number of blocks to improve its performance. This is known as `immunity_period`. When the `immunity_period` expires, that miner or validator can be deregistered if it has the lowest performance in the subnet and a new registration arrives.
- A neuron's `immunity_period` starts when the miner or validator is registered into the subnet.
  Miners as well as validators can be deregistered if their emissions are low.

Typically, subnets have 256 UID slots, with a maximum of 64 slots capable of serving as validators by default. This leaves 192 UIDs for miners, though if there are fewer than 64 eligible validators on a subnet, miners can occupy available slots.

:::info
Deregistration only occurs on subnets where all 256 UID slots are occupied. If a new registration occurs in a subnet with available UID slots, the registered neuron occupies one of the available UID slots.
:::

Each tempo, the '[neuron](../learn/bittensor-building-blocks)' (miner _or_ validator node) with the lowest 'pruning score' (based solely on emissions), and that is no longer within its [immunity period](../subnets/subnet-hyperparameters.md#immunityperiod), risks being replaced by a newly registered neuron, who takes over that UID.

:::info Deregistration is based on emissions
The subnet does not distinguish between miners and validators for the purpose of deregistration. The chain only looks at emissions (represented as 'pruning score'). Whenever a new registration occurs in the subnet, the neuron with the lowest emissions will get deregistered.
:::

### Immunity period

Every subnet has an `immunity_period` hyperparameter expressed in a number of blocks. A neuron's `immunity_period` starts when the miner or validator registers into the subnet. For more information, see [`immunity_period`](../subnets/subnet-hyperparameters.md#immunityperiod).

A subnet neuron (miner or validator) at a UID (in that subnet) has `immunity_period` blocks to improve its performance. When `immunity_period` expires, that miner or validator can be deregistered if it has the lowest performance in the subnet and a new registration arrives.

:::tip Special cases

- In the unlikely event that all neurons are still immune, the one with the lowest "pruning score" will be deregistered by the next incoming registration.

- In cases where two or more nodes have the lowest "pruning score", the older node gets deregistered first.

- The subnet owner's hotkey has permanent immunity from deregistration.
  :::

### Registration flow diagram

Below is a diagram illustrating a subnet neuron's registration timeline:

<ThemedImage
alt="Neuron deregistration"
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
- If the miner’s emissions rank among the lowest for nodes outside of their `immunity_period`, their UID gets transferred to the next new registrant.

:::tip Subnet miner emission
Emissions may not always appear as a smooth curve. Emission might only update at the end of tempo periods, or subnet validators might do more frequent internal updates. For example, a validator might detect new miners and refresh every 100 blocks.
:::

## Moving a subnet miner to a different machine

Once your subnet miner has begun mining, you can move it to a different machine, but proceed with caution.

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

| Parameter   | Example value      | Description                                                                 |
| :---------- | :----------------- | :-------------------------------------------------------------------------- |
| COLDKEY     | my_coldkey         | The name of the coldkey associated with your slot.                          |
| HOTKEY      | my_first_hotkey    | The name of the hotkey associated with your slot.                           |
| UID         | 5                  | The index of the uid out of available uids.                                 |
| ACTIVE      | True               | The validator has set weights within the subnet's activity_cutoff           |
| STAKE(τ)    | 71.296             | The amount of stake in this wallet.                                         |
| RANK        | 0.0629             | This miner's absolute ranking according to validators on the network.       |
| TRUST       | 0.2629             | This miner's trust as a proportion of validators on the network.            |
| CONSENSUS   | 0.89               | This validator's aggregate consensus score.                                 |
| INCENTIVE   | 0.029              | This miner's incentive, TAO emission, is attained via mining.               |
| DIVIDENDS   | 0.001              | This validator's dividends, TAO emission, are attained via validating.      |
| EMISSION    | 29_340_153         | This miner's total emission in RAO (10^(-9) TAO) per block.                 |
| VTRUST      | 0.96936            | This validator's trust score as a validator.                                |
| VPERMIT     | \*                 | For validators: The uid is considered active for validating on this subnet. |
| UPDATED     | 43                 | Blocks since this miner set weights on the chain.                           |
| AXON        | 131.186.56.85:8091 | The entrypoint advertised by this miner on the bittensor blockchain.        |
| HOTKEY_SS58 | 5F4tQyWr...        | The ss58-encoded address of the miner's hotkey.                             |

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
