---
title: "Register and Participate"
---

# Register and Participate

To participate either as a subnet validator or subnet miner, you must register first. Registration means registering your keys with your preferred subnet and purchasing a UID slot in that subnet.

Run the below command to register your keys. The `YOUR_PREFERRED_NETUID` is the `netuid` of your preferred subnet.

```bash
btcli subnet recycle_register --netuid YOUR_PREFERRED_NETUID --wallet.name YOUR_COLDKEY --wallet.hotkey YOUR_HOTKEY
```

Registering works like this:

- When you run the above command, you have purchased a UID slot in the subnet of your choice.
- Your hotkey, which is part of your wallet, becomes the holder of the UID slot. **The terms "account" and "hotkey" are used synonymously.**

:::tip A hotkey can hold multiple UID slots 
Ownership belongs to a hotkey. Hence, for example, when you delegate your TAO to a subnet validator, you attach your delegated TAO to the hotkey of the subnet validator. A hotkey can hold many UID slots, either in a single subnet or in multiple subnets. See [Delegation](../delegation.md).
:::

After your register your keys, you can then proceed to become either a subnet miner or a subnet validator, which have different requirements. See below. 

## Running a subnet miner

After registering your key to the subnet, you can start mining. You can run your own miner or select miner modules that are provided in the subnet codebase. 

:::tip Stake not needed to run a miner 
Note that you do not need to have any stake to run a miner. You only need to register. 
:::

If you plan to run an existing miner module, make sure to read the documentation of the specific subnet, including the node requirements to run the specific miner you want to run. See [Preparing for Subnet](checklist-for-subnet.md) for more details.

## Running a subnet validator 

To become a subnet validator, you must:
1. Register your keys to the subnet (as described above).
2. Stake sufficient TAO on your hotkey to secure [validator permit](#validator-permit).

### Staking

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
See [Becoming a delegate](../delegation.md#becoming-a-delegate) for specific steps.
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

## Inspecting UIDs

After you obtain a UID slot you can view the performance of your registered wallet by running:

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





