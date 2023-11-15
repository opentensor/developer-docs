---
title: "Working with Subnets"
---
# Working with Subnets

Bittensor runs multiple self-contained economic markets incentivizing access to different forms of machine intelligence, for instance; subnetwork 1 produces completions from text prompts and subnetwork 2 incentivizes the production of informationally dense embeddings from text. These economic domains are called "subnetworks".


### Viewing subnetworks

You can uses **btcli list_subnets** to show all currently running subnetworks on bittensor.
```bash dark
$ btcli subnets list
NETUID  NEURONS  MAX_N   DIFFICULTY  TEMPO  CON_REQ  EMISSION  BURN(τ)
1       691    1.02 K   198.08 T    99     None     28.44%   τ4.75710
3      4096    4.10 K   320.81 T    99     None     71.56%   τ1.00000
2      5120

    Description:
        NEURONS: Current UID count.
        MAX_N: Max UID count.
        DIFFICULTY: Proof of work registration difficulty.
        TEMPO: Blocks between network emission distribution.
        CON_REQ: Network requirement
        EMISSION: Percentage of global emission emitted into this network each block.
        BURN: TAO recycle cost per registration.
```

### Viewing state

To extract more fine grained information about each subnetwork use **bt.metagraph**.
```python numbered dark
import bittensor as bt
subnet = bt.metagraph( netuid = 1 )             # Get the current state.
assert subnet.netuid == 1
subnet.sync( block = 101010 )                   # Sync the state with a particular block.
assert subnet.block == 101010
```

Subnetwork are composed of a discrete number of "uids" under which validators and miners position themselves and over which Yuma Consensus is run.
```python numbered dark
import bittensor as bt
subnet = bt.metagraph( netuid = 1 )
assert subnet.uids.tolist() == [ 0, 1, 2, ... 1022, 1023 ]
```

Each uid in the network belongs to a unique **hotkey** which in turn is connected to a unique **coldkey** which a miner has used to register with.
```python numbered dark
import bittensor as bt
subnet = bt.metagraph( netuid = 1 )
uid = 123
print ('uid', uid, ' owned by hotkey:', subnet.hotkeys[ uid ], 'assoicated with coldkey': subnet.coldkey[ uid ] )
```

### Viewing parameters

Through [registration](subnetworks/registration) hotkeys cycle in and out of each subnetwork depending on their performance according to subnetworks [validators](validating/validating). Stake **metagraph.S** across subnetwork is universal. This validation method is performed by validators setting a set of weights **metagraph.W** on the chain based on their subjective valuations of the miners across the network.

```python numbered dark
import bittensor as bt
subnet = bt.metagraph( netuid = 1, lite = False)
print ('subnet 1 validator stake', subnet.S )
print ('subnet 1 validator weights', subnet.W )
```
Correctly assessing the value of the miners on the network is incentivized by the chain which distributes bonds **metagraph.B**, which pick up part of the inflation from those miners as dividends **metagraph.D**.
```python numbered dark
import bittensor as bt
subnet = bt.metagraph( netuid = 1 )
print ('subnet 1 validator dividends', subnet.D )
```

### Creating a subnet

Creating subnetworks on mainnet is competitive and the cost is determined by the rate at which new networks are being registered onto the chain. By default you must have at least 100 TAO in your owner wallet to create a subnetwork. However the exact amount will fluctuate based on demand. The code below shows how to get the current price of creating a subnetwork.

```bash dark
btcli subnet lock_cost
>> Subnet lock cost: τ100.000000000
```

Use the `btcli subnet create` subcommand to register a new subnet.

```bash dark
# Run the register subnetwork command on the main chain.
btcli subnet create
>> Enter wallet name (default): owner # Enter your owner wallet name
>> Enter password to unlock key: # Enter your wallet password.
>> Register subnet? [y/n]: <y/n> # Select yes (y)
>> ⠇ 📡 Registering subnet...
✅ Registered subnetwork with netuid: 1 # Your subnet netuid will show here, save this for later.
```


Here is the help message to see what commands are avaialable via the `subnet` subcommand.
```bash dark
btcli subnet --help
usage: btcli <command> <command args> subnets [-h]
                                              {list,metagraph,lock_cost,create,register,recycle_register,hyperparameters}
                                              ...

positional arguments:
  {list,metagraph,lock_cost,create,register,recycle_register,hyperparameters}
                        Commands for managing and viewing subnetworks.
    list                List all subnets on the network
    metagraph           View a subnet metagraph information.
    lock_cost           Return the lock cost to register a subnet
    create              Create a new bittensor subnetwork on this chain.
    register            Register a wallet to a network.
    recycle_register    Register a wallet to a network.
    hyperparameters     View subnet hyperparameters

options:
  -h, --help            show this help message and exit
```