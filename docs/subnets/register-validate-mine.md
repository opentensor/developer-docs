---
title: "Register, Validate and Mine"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Register, Validate and Mine

To participate either as a subnet validator or subnet miner, you must register first. Registration means registering your keys with your preferred subnet and purchasing a UID slot in that subnet.

:::tip No need to create a subnet
You **do not** have to create a subnet to mine or validate on the Bittensor network. See the [Checklist for Validating and Mining](./checklist-for-validating-mining.md) for information on mining and validating on Bittensor.
:::

## Register

Run the below command to register your keys. The `YOUR_PREFERRED_NETUID` is the `netuid` of your preferred subnet.

```bash
btcli subnet register --netuid YOUR_PREFERRED_NETUID --wallet.name YOUR_COLDKEY --wallet.hotkey YOUR_HOTKEY
```

Registering works like this:

- When you run the above command, you have purchased a UID slot in the subnet of your choice.
- Your hotkey, which is part of your wallet, becomes the holder of the UID slot. **The terms "account" and "hotkey" are used synonymously.**

:::tip Ownership belongs to a hotkey
Ownership belongs to a hotkey. Hence, for example, when you delegate your TAO to a subnet validator, you attach your delegated TAO to the hotkey of the subnet validator. See [Delegation](../staking-and-delegation/delegation.md). 

A hotkey can hold multiple UIDs across **separate** subnets. However within one subnet, each UID must have a unique hotkey. 
:::

After you register your keys, you can then proceed to become either a subnet miner or a subnet validator, which have different requirements. See below. 

:::danger Windows not supported
While wallet transactions like delegating, transfer, registering, staking can be performed on a Windows machine using WSL (Windows Subsystem for Linux), mining and validating are not recommended and are not supported on Windows machines.
 :::

## Running a subnet validator 

To become a subnet validator, you must:
1. Register your keys to the subnet (as described above).
2. Stake sufficient TAO on your hotkey to secure [validator permit](#validator-permit).

### Staking

:::tip Delegation
See also [Delegation](../staking-and-delegation/delegation.md)
:::

You stake by attaching TAO to your hotkey. Attaching TAO to your hotkey can be achieved in two ways:

#### Stake your own TAO

By staking your own TAO funds to your hotkey that holds the UID in the subnet where you want to validate.
```bash
# Stake funds to your hotkey account within the subnet.
btcli stake add
    --wallet.name YOUR_WALLET_NAME
    --wallet.hotkey YOUR_HOTKEY_NAME
```

#### Attract delegated stake 

By attracting delegated stake from the nominators. For this you must first nominate your hotkey as a delegate and then advertising your hotkey. The nominators can then delegate their TAO to your hotkey. 

```bash
# Nominate your hotkey as a delegate
btcli root nominate
    --wallet.name YOUR_WALLET_NAME
    --wallet.hotkey YOUR_HOTKEY_NAME
```

:::tip See also
See [Becoming a delegate](../staking-and-delegation/delegation.md#becoming-a-delegate) for specific steps.
:::

### Validator permit

Only the largest 64 subnet validators, in terms of stake, on any particular subnet are considered to have **validator permit**. Only the subnet validators with permit are considered active in a subnet. 

#### Calculate TAO required 

The amount of TAO needed to acquire a validator permit depends on how the other largest 64 wallets distribute TAO across themselves. You can calculate the minimum using [bt.metagraph](../reference/bittensor-api-ref.md#btmetagraph):

```python
import bittensor as bt
subnet = bt.metagraph(1)
top_64_stake = subnet.S.sort()[0][-64:].tolist()
print (f'Current requirement for validator permits based on the top 64 stake stands at {min(top_64_stake)} tao')
```

#### Check the permit status 

This information can be obtained from the metagraph using your UID.
```python
import bittensor as bt
subnet = bt.metagraph(1)
wallet = bt.wallet( name = 'my_wallet_name', hotkey = 'my_validator_hotkey_name' )
my_uid = subnet.hotkeys.index( wallet.hotkey.ss58_address )
print ('validator permit', subnet.validator_permit[ my_uid ])
```

## Running a subnet miner

After registering your key to the subnet, you can start mining. You can run your own miner or select miner modules that are provided in the subnet codebase. 

:::tip Stake not needed to run a miner 
Note that to run a miner you do not need to have any stake. You only need to register.
:::

If you plan to run an existing miner module, make sure to read the documentation of the specific subnet, including the node requirements to run the specific miner you want to run. See [Preparing for Subnet](checklist-for-validating-mining.md) for more details.

### Moving a subnet miner to a different machine

Once your subnet miner has began mining, you can change it to a different machine, but proceed with caution. 

:::tip Always minimize subnet miner downtime
Make sure that you always minimize any downtime for your subnet miner. This is because missing validation requests can be significantly damaging to incentive and rewards for your subnet miner.
:::

To move a subnet miner from one machine to another, follow the below guidelines in this order:

1. Start the subnet miner on the new machine.
2. Wait for the old miner to stop receiving requests from the subnet validators.
3. Stop the old miner.

It can take the subnet validators some time to realize that the IP of the Axon for your subnet miner has changed. 

### Miner deregistration

A subnet miner can be deregistered if its performance is poor. Mining is competitive&mdash;and the UID slots are limited. Except in Subnet 1, all subnets have 256 UID slots per subnet. Of these 256 UID slots, a subnet can have a maximum of 64 subnet validator UIDs and 192 (i.e., 256-64) UIDs for subnet miners.

A poor performing miner occupying a UID risks being replaced by a newly registered miner who then occupies this UID. It works like this:

- Every subnet has a `immunity_period` hyperparameter, expressed in number of blocks. 
    :::tip See
    See [`immunity_period`](./subnet-hyperparameters.md#immunity_period).
    :::
- A subnet miner or a subnet validator at a UID (in that subnet) has the duration of `immunity_period` during which this miner or validator must improve its performance. When the `immunity_period` expires for a miner or a validator, then they risk being deregistered, but only if their performance is the worst in the subnet. In specific, if, at the end of its `immunity_period`, the emissions to a subnet miner is the lowest in the subnet, then this subnet miner will be deregistered when a new registration request arrives. 
- The `immunity_period` starts when a subnet validator or a subnet miner is registered into the subnet.

See the below subnet miner timeline diagram illustrating how registration works:

<ThemedImage
alt="Miner deregistration"
sources={{
    light: useBaseUrl('/img/docs/miner-deregistration.svg'),
    dark: useBaseUrl('/img/docs/dark-miner-deregistration.svg'),
  }}
style={{width: 990}}
/>

- Blocks are processed in the subtensor (Bittensor blockchain) at every 12 seconds. 
- A subnet miner registers a hotkey and receives a UID&mdash;and its immunity period starts.
- The subnet miner starts running and publishes its Axon's `IP:PORT` for the subnet validators.
- The subnet validators refresh their metagraph, and hence will know about the hotkey change on the UID and the new miner Axon's ``IP:PORT`` information. 
- The subnet validators send requests to the subnet miner's Axon and evaluate the responses, i.e., they participate in the subnet's incentive mechanism. The subnet miner will receive emission award based on its responses.
- While in `immunity_period` the subnet miner slowly builds its emissions, starting with no history.
- At the end of `immunity_period` for this subnet miner, its performance is  scored against all other subnet miners that were similarly out of their `immunity_period` in this subnet. If this subnet miner's performance (i.e., emission) is the lowest, then at the next registration request this poor-performing subnet miner's UID will be transferred to the newly registered hotkey.

:::tip Subnet miner emission
Note that a subnet miner's emission may not always grow as a continuous graph as shown in the above picture. The emission may only be updated at the end of the tempo periods, or the subnet validators might have internal mechanisms that update faster than the subnet's tempo. For example, a subnet validator might discover new subnet miners and update its metagraph every 100 blocks to ensure that the metagraph will always have the latest information.
:::

## Inspecting UIDs

After you obtain a UID slot you can view the status of your registered wallet by running:

```bash
btcli wallet overview --netuid
```

After providing your wallet name at the prompt, you will see the following output:

| Parameter         | Value | Description |
| :---------------- | :------: | :---- |
| COLDKEY        |   my_coldkey   | The name of the coldkey associated with your slot. |
| HOTKEY      | my_first_hotkey      |    The name of the hotkey associated with your slot.                          |
| UID         | 5                    |    The index of the uid out of available uids.                                   |
| ACTIVE      | True                 |    Whether or not the uid is considered active.                                  |
| STAKE(τ)    | 71.296               |    The amount of stake in this wallet.                                           |
| RANK        | 0.0629               |    This miner's absolute ranking according to validators on the network.         |
| TRUST       | 0.2629               |    This miner's trust as a proportion of validators on the network.              |
| CONSENSUS   | 0.89                 |    This validator's aggregate consensus score.                                       |
| INCENTIVE   | 0.029                |    This miner's incentive, TAO emission attained via mining.                     |
| DIVIDENDS   | 0.001                |    This validator's dividends, TAO emission attained via validating.                 |
| EMISSION    | 29_340_153           |    This miner's total emission in RAO ( 10<sup>-9</sup> TAO ) per block.                   |
| VTRUST      | 0.96936              |    This validators trust score as a validator.                                   |
| VPERMIT     | *                    |    Whether this miner is considered active for validating on this subnetwork.    |
| UPDATED     | 43                   |    Blocks since this miner set weights on the chain.                             |
| AXON        | 131.186.56.85:8091   |    The entrypoint advertised by this miner on bittensor blockchain.              |
| HOTKEY_SS58 | 5F4tQyWr...          |    The raw ss58 encoded address of the miner's hotkey.                           |

### Meaning of ACTIVE

In the above table, the `ACTIVE` row is applicable only for UIDs that are subnet validators. It shows whether the UID is actively setting the weights within the [`activity_cutoff`](./subnet-hyperparameters#activity_cutoff) window. If the UID has not set weights on the blockchain for `activity_cutoff` duration, then the Yuma Consensus will consider this subnet validator as offline, i.e., turned off (`False`).

## Checking the registration status

To check the registration status of your UID, use any one of the below Python code fragments. To use these code fragments:

- **Using Python interpreter**: A straightforward way is to type "python" or "python3" on your macOS or Linux terminal and it will open up a Python interpreter. Copy and paste the entire code fragment into it and hit "Return" and see the output.
- **Using Python binary**: Or you can use the Python binary. Copy the code fragment into a file, say, "check_reg.py" and run the command `python3 check_reg.py` or `python check_reg.py` on your terminal command line and see the output.

### With SS58 hotkey

In the below code, replace the `hotkey` field value with the SS58 version of your hotkey:

```python
import bittensor as bt
# Replace below with your SS58 hotkey 
hotkey = "5HEo565WAy4Dbq3Sv271SAi7syBSofyfhhwRNjFNSM2gP9M2"
network = "finney"
sub = bt.subtensor(network)
print(f"Registration status for hotkey {hotkey} is: {sub.is_hotkey_registered(hotkey)}")
```

### With SS58 hotkey and netuid

In the below code, replace the `hotkey` field value with the SS58 version of your hotkey and the `netuid` field value with the `netuid` of the subnet you have registered into:

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

Additionally, if you also know your UID, replace `uid` value with your UID:

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
