---
title: "BTCLI with Dynamic TAO"
---

# BTCLI with Dynamic TAO

Command line interface (CLI) for Bittensor with dynamic TAO. Uses the values in the configuration file. These values can be overriden by passing them explicitly in the command line.

:::tip Looking for legacy BTCLI doc?
This document includes dynamic TAO support with `btcli`. It does not include `btcli root` commands. Other commands that are disabled for dynamic TAO are marked in this document. 

For legacy `btcli` doc that supports the `btcli root` commands, see [Bittensor CLI](./btcli.md). 
:::

**Usage**:

```bash
btcli [OPTIONS] COMMAND [ARGS]...
```

**Options**:

* `--version`
* `--install-completion`: Install completion for the current shell.
* `--show-completion`: Show completion for the current shell, to copy it or customize the installation.
* `--help`: Show this message and exit.


**Commands**:

* `config`: Config commands, aliases: `c`, `conf`
* `stake`: Stake commands, alias: `s`, `st`
* `subnet`: Subnet commands, alias: `s`, `subnets`
* `sudo`: Sudo commands, alias: `su`
* `utils`: Utility commands.
* `wallet`: Wallet commands, aliases: `wallets`, `w`
* `weights`: Weights commands, aliases: `wt`, `weight`

## btcli config

**Usage**:

```bash
btcli config [OPTIONS] COMMAND [ARGS]...
```

**Options**:

* `--help`: Show this message and exit.

### btcli config clear

Clears the fields in the config file and sets them to `None`.

#### EXAMPLE

    - To clear the `chain` and `network` fields:

```bash
        btcli config clear --chain --network
```

    - To clear your config entirely:

```bash
        btcli config clear --all
```

**Usage**:

```bash
btcli config clear [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name`
* `-p, --wallet-path, --wallet_path, --wallet.path`
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey`
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint`
* `--cache`
* `--all`
* `--help`: Show this message and exit.

### btcli config get

Prints the current config file in a table.

**Usage**:

```bash
btcli config get [OPTIONS]
```

**Options**:

* `--help`: Show this message and exit.

### btcli config metagraph

Command option to configure the display of the metagraph columns.

**Usage**:

```bash
btcli config metagraph [OPTIONS]
```

**Options**:

* `--reset`: Restore the display of metagraph columns to show all columns.
* `--help`: Show this message and exit.

### btcli config set

Sets the values in the config file. To set the metagraph configuration, use the command `btcli config metagraph`

**Usage**:

```bash
btcli config set [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--cache, --cache / --no-cache, --no_cache`: Disable caching of some commands. This will disable the `--reuse-last` and `--html` flags on commands such as `subnets metagraph`, `stake show` and `subnets list`.
* `--help`: Show this message and exit.

## btcli stake

**Usage**:

```bash
btcli stake [OPTIONS] COMMAND [ARGS]...
```

**Options**:

* `--help`: Show this message and exit.

### btcli stake add

Stake TAO to one or more hotkeys associated with the user's coldkey.

This command is used by a subnet validator to stake to their own hotkey. Compare this command with `btcli root delegate` (supported in legacy `btcli` only) that is typically run by a TAO holder to delegate their TAO to a delegate's hotkey.

This command is used by a subnet validator to allocate stake TAO to their different hotkeys, securing their position and influence on the network.

#### EXAMPLE

```bash
btcli stake add --amount 100 --wallet-name <my_wallet> --wallet-hotkey <my_hotkey>
```

**Usage**:

```bash
btcli stake add [OPTIONS]
```

**Options**:

* `-a, --all-tokens, --all`: When set, the command stakes all the available TAO from the coldkey.
* `--amount FLOAT`: The amount of TAO to stake  [default: 0.0]
* `-m, --max-stake FLOAT`: Stake is sent to a hotkey only until the hotkey's total stake is less than or equal to this maximum staked TAO. If a hotkey already has stake greater than this amount, then stake is not added to this hotkey.  [default: 0.0]
* `-in, --include-hotkeys, --hotkey-ss58-address TEXT`: Specifies hotkeys by name or ss58 address to stake to. For example, `-in hk1,hk2`
* `-ex, --exclude-hotkeys TEXT`: Specifies hotkeys by name or ss58 address to not to stake to (use this option only with `--all-hotkeys`) i.e. `--all-hotkeys -ex hk3,hk4`
* `--all-hotkeys / --`no-all-hotkeys``: When set, this command stakes to all hotkeys associated with the wallet. Do not use if specifying hotkeys in `--include-hotkeys`.  [default: `no-all-hotkeys`]
* `--netuid INTEGER`: The netuid of the subnet in the root network, (e.g. 1).
* `--all-netuids / --no-all-netuids`: Use all netuids  [default: no-all-netuids]
* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--prompt, --prompt / -y, --no-prompt, --yes, --no_prompt`: Enable or disable interactive prompts.  [default: prompt]
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### btcli stake child

**Usage**:

```bash
btcli stake child [OPTIONS] COMMAND [ARGS]...
```

**Options**:

* `--help`: Show this message and exit.

#### btcli stake child get

Get all the child hotkeys on a specified subnet.

Users can specify the subnet and see the child hotkeys and the proportion that is given to them. This command is used to view the authority delegated to different hotkeys on the subnet.

#### EXAMPLE

```bash
btcli stake child get --all-netuids
```

**Usage**:

```bash
btcli stake child get [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--netuid INTEGER`: The netuid of the subnet (e.g. 2)
* `--all-netuids, --all, --allnetuids`: When set, gets the child hotkeys from all the subnets.
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

#### btcli stake child revoke

Remove all children hotkeys on a specified subnet.

This command is used to remove delegated authority from all child hotkeys, removing their position and influence on the subnet.

#### EXAMPLE

```bash
btcli stake child revoke --hotkey <parent_hotkey> --netuid 1
```

**Usage**:

```bash
btcli stake child revoke [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--netuid INTEGER`: The netuid of the subnet, (e.g. 8)
* `--all-netuids, --all, --allnetuids`: When this flag is used it sets child hotkeys on all the subnets.
* `--wait-for-inclusion / --no-wait-for-inclusion`: If `True`, waits until the transaction is included in a block.  [default: wait-for-inclusion]
* `--wait-for-finalization / --no-wait-for-finalization`: If `True`, waits until the transaction is finalized on the blockchain.  [default: wait-for-finalization]
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

#### btcli stake child set

Set child hotkeys on specified subnets.

Users can specify the 'proportion' to delegate to child hotkeys (ss58 address). The sum of proportions cannot be greater than 1.

This command is used to delegate authority to different hotkeys, securing their position and influence on the subnet.

#### EXAMPLE

```bash
btcli stake child set -c 5FCL3gmjtQV4xxxxuEPEFQVhyyyyqYgNwX7drFLw7MSdBnxP -c 5Hp5dxxxxtGg7pu8dN2btyyyyVA1vELmM9dy8KQv3LxV8PA7 --hotkey default --netuid 1 -p 0.3 -p 0.7
```

**Usage**:

```bash
btcli stake child set [OPTIONS]
```

**Options**:

* `-c, --children TEXT`: Enter child hotkeys (ss58)
* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--netuid INTEGER`: The netuid of the subnet in the root network, (e.g. 1).
* `--all-netuids / --no-all-netuids`: Use all netuids  [default: no-all-netuids]
* `-p, --proportions, --prop FLOAT`: Enter the stake weight proportions for the child hotkeys (sum should be less than or equal to 1)
* `--wait-for-inclusion / --no-wait-for-inclusion`: If `True`, waits until the transaction is included in a block.  [default: wait-for-inclusion]
* `--wait-for-finalization / --no-wait-for-finalization`: If `True`, waits until the transaction is finalized on the blockchain.  [default: wait-for-finalization]
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

#### btcli stake child take

Get and set your child hotkey take on a specified subnet.

The child hotkey take must be between 0 - 18%.

#### EXAMPLE

To get the current take value, do not use the '--take' option:

```bash
    btcli stake child take --hotkey <child_hotkey> --netuid 1
```

To set a new take value, use the '--take' option:

```bash
    btcli stake child take --hotkey <child_hotkey> --take 0.12 --netuid 1
```

**Usage**:

```bash
btcli stake child take [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--hotkey TEXT`
* `--netuid INTEGER`: The netuid of the subnet, (e.g. 23)
* `--all-netuids, --all, --allnetuids`: When this flag is used it sets child hotkeys on all the subnets.
* `-t, --take FLOAT`: Use to set the take value for your child hotkey. When not used, the command will fetch the current take value.
* `--wait-for-inclusion / --no-wait-for-inclusion`: If `True`, waits until the transaction is included in a block.  [default: wait-for-inclusion]
* `--wait-for-finalization / --no-wait-for-finalization`: If `True`, waits until the transaction is finalized on the blockchain.  [default: wait-for-finalization]
* `--prompt, --prompt / -y, --no-prompt, --yes, --no_prompt`: Enable or disable interactive prompts.  [default: prompt]
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### btcli stake children

**Usage**:

```bash
btcli stake children [OPTIONS] COMMAND [ARGS]...
```

**Options**:

* `--help`: Show this message and exit.

#### btcli stake children get

Get all the child hotkeys on a specified subnet.

Users can specify the subnet and see the child hotkeys and the proportion that is given to them. This command is used to view the authority delegated to different hotkeys on the subnet.

#### EXAMPLE

```bash
btcli stake child get --all-netuids
```

**Usage**:

```bash
btcli stake children get [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--netuid INTEGER`: The netuid of the subnet (e.g. 2)
* `--all-netuids, --all, --allnetuids`: When set, gets the child hotkeys from all the subnets.
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

#### btcli stake children revoke

Remove all children hotkeys on a specified subnet.

This command is used to remove delegated authority from all child hotkeys, removing their position and influence on the subnet.

#### EXAMPLE

```bash
btcli stake child revoke --hotkey <parent_hotkey> --netuid 1
```

**Usage**:

```bash
btcli stake children revoke [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--netuid INTEGER`: The netuid of the subnet, (e.g. 8)
* `--all-netuids, --all, --allnetuids`: When this flag is used it sets child hotkeys on all the subnets.
* `--wait-for-inclusion / --no-wait-for-inclusion`: If `True`, waits until the transaction is included in a block.  [default: wait-for-inclusion]
* `--wait-for-finalization / --no-wait-for-finalization`: If `True`, waits until the transaction is finalized on the blockchain.  [default: wait-for-finalization]
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

#### btcli stake children set

Set child hotkeys on specified subnets.

Users can specify the 'proportion' to delegate to child hotkeys (ss58 address). The sum of proportions cannot be greater than 1.

This command is used to delegate authority to different hotkeys, securing their position and influence on the subnet.

#### EXAMPLE

```bash
btcli stake child set -c 5FCL3gmjtQV4xxxxuEPEFQVhyyyyqYgNwX7drFLw7MSdBnxP -c 5Hp5dxxxxtGg7pu8dN2btyyyyVA1vELmM9dy8KQv3LxV8PA7 --hotkey default --netuid 1 -p 0.3 -p 0.7
```

**Usage**:

```bash
btcli stake children set [OPTIONS]
```

**Options**:

* `-c, --children TEXT`: Enter child hotkeys (ss58)
* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--netuid INTEGER`: The netuid of the subnet in the root network, (e.g. 1).
* `--all-netuids / --no-all-netuids`: Use all netuids  [default: no-all-netuids]
* `-p, --proportions, --prop FLOAT`: Enter the stake weight proportions for the child hotkeys (sum should be less than or equal to 1)
* `--wait-for-inclusion / --no-wait-for-inclusion`: If `True`, waits until the transaction is included in a block.  [default: wait-for-inclusion]
* `--wait-for-finalization / --no-wait-for-finalization`: If `True`, waits until the transaction is finalized on the blockchain.  [default: wait-for-finalization]
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

#### btcli stake children take

Get and set your child hotkey take on a specified subnet.

The child hotkey take must be between 0 - 18%.

#### EXAMPLE

To get the current take value, do not use the '--take' option:

```bash
    btcli stake child take --hotkey <child_hotkey> --netuid 1
```

To set a new take value, use the '--take' option:

```bash
    btcli stake child take --hotkey <child_hotkey> --take 0.12 --netuid 1
```

**Usage**:

```bash
btcli stake children take [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--hotkey TEXT`
* `--netuid INTEGER`: The netuid of the subnet, (e.g. 23)
* `--all-netuids, --all, --allnetuids`: When this flag is used it sets child hotkeys on all the subnets.
* `-t, --take FLOAT`: Use to set the take value for your child hotkey. When not used, the command will fetch the current take value.
* `--wait-for-inclusion / --no-wait-for-inclusion`: If `True`, waits until the transaction is included in a block.  [default: wait-for-inclusion]
* `--wait-for-finalization / --no-wait-for-finalization`: If `True`, waits until the transaction is finalized on the blockchain.  [default: wait-for-finalization]
* `--prompt, --prompt / -y, --no-prompt, --yes, --no_prompt`: Enable or disable interactive prompts.  [default: prompt]
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### btcli stake list

List all stake accounts for wallet.

**Usage**:

```bash
btcli stake list [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### btcli stake move

Move Staked TAO to a hotkey from one subnet to another.

THe move commands converts the origin subnet's dTao to Tao, and then converts Tao to destination subnet's dTao.

#### EXAMPLE

```bash
btcli stake move
```

**Usage**:

```bash
btcli stake move [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--origin-netuid INTEGER`: Origin netuid  [required]
* `--destination-netuid INTEGER`: Destination netuid  [required]
* `--destination-hotkey TEXT`: Destination hotkey
* `--amount FLOAT`: The amount of TAO to stake  [default: 0.0]
* `--stake-all, --all`: Stake all
* `--prompt, --prompt / -y, --no-prompt, --yes, --no_prompt`: Enable or disable interactive prompts.  [default: prompt]
* `--help`: Show this message and exit.

### btcli stake remove

Unstake TAO from one or more hotkeys and transfer them back to the user's coldkey.

This command is used to withdraw TAO previously staked to different hotkeys.

#### EXAMPLE

```bash
btcli stake remove --amount 100 -in hk1,hk2
```

:::tip
This command is for users who wish to reallocate their stake or withdraw them from the network. It allows for flexible management of TAO stake across different neurons (hotkeys) on the network.
:::


**Usage**:

```bash
btcli stake remove [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--netuid INTEGER`: The netuid of the subnet in the root network, (e.g. 1).
* `--all-netuids / --no-all-netuids`: Use all netuids  [default: no-all-netuids]
* `--unstake-all, --all`: When set, this command unstakes all staked TAO from the specified hotkeys.
* `-a, --amount FLOAT`: The amount of TAO to unstake.  [default: 0.0]
* `--hotkey-ss58-address TEXT`: The ss58 address of the hotkey to unstake from.
* `--keep-stake, --keep FLOAT`: Sets the maximum amount of TAO to remain staked in each hotkey.  [default: 0.0]
* `-in, --include-hotkeys TEXT`: Specifies the hotkeys by name or ss58 address to unstake from. For example, `-in hk1,hk2`
* `-ex, --exclude-hotkeys TEXT`: Specifies the hotkeys by name or ss58 address not to unstake from (only use with `--all-hotkeys`) i.e. `--all-hotkeys -ex hk3,hk4`
* `--all-hotkeys / --`no-all-hotkeys``: When set, this command unstakes from all the hotkeys associated with the wallet. Do not use if specifying hotkeys in `--include-hotkeys`.  [default: `no-all-hotkeys`]
* `--prompt, --prompt / -y, --no-prompt, --yes, --no_prompt`: Enable or disable interactive prompts.  [default: prompt]
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

## btcli subnet

**Usage**:

```bash
btcli subnet [OPTIONS] COMMAND [ARGS]...
```

**Options**:

* `--help`: Show this message and exit.


### btcli subnet create

Registers a new subnet.

#### EXAMPLE

```bash
btcli subnets create
```

**Usage**:

```bash
btcli subnet create [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--prompt, --prompt / -y, --no-prompt, --yes, --no_prompt`: Enable or disable interactive prompts.  [default: prompt]
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### btcli subnet hyperparameters

Shows a list of the hyperparameters for the specified subnet.

The output of this command is the same as that of `btcli subnets hyperparameters`.

#### EXAMPLE

```bash
btcli sudo get --netuid 1
```

**Usage**:

```bash
btcli subnet hyperparameters [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--netuid INTEGER`: The netuid of the subnet in the root network, (e.g. 1).
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### btcli subnet list

List all subnets and their detailed information.

This command displays a table with the below columns:

- NETUID: The subnet's netuid.
- N: The number of neurons (subnet validators and subnet miners) in the subnet.
- MAX_N: The maximum allowed number of neurons in the subnet.
- EMISSION: The percentage of emissions to the subnet as of the last tempo.
- TEMPO: The subnet's tempo, expressed in number of blocks.
- RECYCLE: The recycle register cost for this subnet.
- POW: The proof of work (PoW) difficulty.
- SUDO: The subnet owner's name or the owner's ss58 address.

#### EXAMPLE

```bash
btcli subnets list
```

**Usage**:

```bash
btcli subnet list [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### btcli subnet lock-cost

Shows the required amount of TAO to be locked for creating a new subnet, i.e., cost of registering a new subnet.

The current implementation anneals the cost of creating a subnet over a period of two days. If the displayed cost is unappealing to you, check back in a day or two to see if it has decreased to a more affordable level.

#### EXAMPLE

```bash
btcli subnets lock_cost
```

**Usage**:

```bash
btcli subnet lock-cost [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### btcli subnet metagraph

Disabled for dynamic TAO.

<!-- Shows the metagraph of a subnet.

The displayed metagraph, representing a snapshot of the subnet's state at the time of calling, contains detailed information about all the neurons (subnet validator and subnet miner nodes) participating in the subnet, including the neuron's stake, trust score, and more.

The table displayed includes the following columns for each neuron:

- **UID**: Unique identifier of the neuron.

- **STAKE(τ)**: Total stake of the neuron in TAO (τ).

- **RANK**: Rank score of the neuron.

- **TRUST**: Trust score assigned to the neuron by other neurons.

- **CONSENSUS**: Consensus score of the neuron.

- **INCENTIVE**: Incentive score representing the neuron's incentive alignment.

- **DIVIDENDS**: Dividends earned by the neuron.

- **EMISSION(p)**: Emission in rho (p) received by the neuron.

- **VTRUST**: Validator trust score indicating the network's trust in the neuron as a validator.

- **VAL**: Validator status of the neuron.

- **UPDATED**: Number of blocks since the neuron's last update.

- **ACTIVE**: Activity status of the neuron.

- **AXON**: Network endpoint information of the neuron.

- **HOTKEY**: Partial hotkey (public key) of the neuron.

- **COLDKEY**: Partial coldkey (public key) of the neuron.

The command also prints network-wide statistics such as total stake, issuance, and difficulty.

The user must specify the netuid to query the metagraph. If not specified, the default netuid from the config is used.

#### EXAMPLE

Show the metagraph of the root network (netuid 0) on finney (mainnet):

```bash
    btcli subnet metagraph --netuid 0
```

Show the metagraph of subnet 1 on the testnet:

```bash
    btcli subnet metagraph --netuid 1 --network test
```

:::tip
This command is not intended to be used as a standalone function within user code.
:::


**Usage**:

```bash
btcli subnet metagraph [OPTIONS]
```

**Options**:

* `--netuid INTEGER`: The netuid of the subnet (e.g. 1). This option is ignored when used with `--reuse-last`.
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--reuse-last`: Reuse the metagraph data you last retrieved.Use this option only if you have already retrieved the metagraph.data
* `--html`: Display the table as HTML in the browser.
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit. -->

### btcli subnet pow-register

Register a neuron (a subnet validator or a subnet miner) using Proof of Work (POW).

This method is an alternative registration process that uses computational work for securing a neuron's place on the subnet.

The command starts by verifying the existence of the specified subnet. If the subnet does not exist, it terminates with an error message. On successful verification, the POW registration process is initiated, which requires solving computational puzzles.

The command also supports additional wallet and subtensor arguments, enabling further customization of the registration process.

#### EXAMPLE

```bash
btcli pow_register --netuid 1 --num_processes 4 --cuda
```

:::tip
This command is suitable for users with adequate computational resources to participate in POW registration. It requires a sound understanding of the network's operations and POW mechanics. Users should ensure their systems meet the necessary hardware and software requirements, particularly when opting for CUDA-based GPU acceleration.
:::


This command may be disabled by the subnet owner. For example, on netuid 1 this is permanently disabled.

**Usage**:

```bash
btcli subnet pow-register [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--netuid INTEGER`: The netuid of the subnet in the root network, (e.g. 1).
* `--processors INTEGER`: Number of processors to use for POW registration.
* `-u, --update-interval INTEGER`: The number of nonces to process before checking for the next block during registration  [default: 50000]
* `--output-in-place / --no-output-in-place`: Whether to output the registration statistics in-place.  [default: output-in-place]
* `-v, --verbose`: Whether to output the registration statistics verbosely.
* `--use-cuda, --cuda / --no-use-cuda, --no-cuda`: Set the flag to use CUDA for POW registration.  [default: no-use-cuda]
* `-d, --dev-id INTEGER`: Set the CUDA device id(s), in the order of the device speed (0 is the fastest).  [default: 0]
* `-tbp, --threads-per-block INTEGER`: Set the number of threads per block for CUDA.  [default: 256]
* `--help`: Show this message and exit.

### btcli subnet register

Register a neuron (a subnet validator or a subnet miner) in the specified subnet by recycling some TAO.

Before registering, the command checks if the specified subnet exists and whether the user's balance is sufficient to cover the registration cost.

The registration cost is determined by the current recycle amount for the specified subnet. If the balance is insufficient or the subnet does not exist, the command will exit with an error message.

#### EXAMPLE

```bash
btcli subnets register --netuid 1
```

**Usage**:

```bash
btcli subnet register [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--netuid INTEGER`: The netuid of the subnet in the root network, (e.g. 1).
* `--prompt, --prompt / -y, --no-prompt, --yes, --no_prompt`: Enable or disable interactive prompts.  [default: prompt]
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### btcli subnet show

Displays detailed information about a subnet including participants and their state.

#### EXAMPLE

```bash
btcli subnets list
```

**Usage**:

```bash
btcli subnet show [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--netuid INTEGER`: The netuid of the subnet in the root network, (e.g. 1).
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--prompt, --prompt / -y, --no-prompt, --yes, --no_prompt`: Enable or disable interactive prompts.  [default: prompt]
* `--help`: Show this message and exit.

## btcli sudo

**Usage**:

```bash
btcli sudo [OPTIONS] COMMAND [ARGS]...
```

**Options**:

* `--help`: Show this message and exit.


### btcli sudo get

Shows a list of the hyperparameters for the specified subnet.

The output of this command is the same as that of `btcli subnets hyperparameters`.

#### EXAMPLE

```bash
btcli sudo get --netuid 1
```

**Usage**:

```bash
btcli sudo get [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--netuid INTEGER`: The netuid of the subnet in the root network, (e.g. 1).
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### btcli sudo get-take

Allows users to check their delegate take percentage.

This command can be used to fetch the delegate take of your hotkey.

#### EXAMPLE
```bash
btcli sudo get-take --wallet-name my_wallet --wallet-hotkey my_hotkey
```

**Usage**:

```bash
btcli sudo get-take [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### btcli sudo proposals

View active proposals for the senate in the Bittensor's governance protocol.

This command displays the details of ongoing proposals, including proposal hashes, votes, thresholds, and proposal data.

#### EXAMPLE
```bash
btcli sudo proposals
```

**Usage**:

```bash
btcli sudo proposals [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### btcli sudo senate

Shows the Senate members of the Bittensor's governance protocol.

This command lists the delegates involved in the decision-making process of the Bittensor network, showing their names and wallet addresses. This information is crucial for understanding who holds governance roles within the network.

#### EXAMPLE
```bash
btcli sudo senate
```

**Usage**:

```bash
btcli sudo senate [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### btcli sudo senate-vote

Cast a vote on an active proposal in Bittensor's governance protocol.

This command is used by Senate members to vote on various proposals that shape the network's future. Use `btcli sudo proposals` to see the active proposals and their hashes.

USAGE
The user must specify the hash of the proposal they want to vote on. The command then allows the Senate member to cast a 'Yes' or 'No' vote, contributing to the decision-making process on the proposal. This command is crucial for Senate members to exercise their voting rights on key proposals. It plays a vital role in the governance and evolution of the Bittensor network.

#### EXAMPLE
```bash
btcli sudo senate_vote --proposal <proposal_hash>
```

**Usage**:

```bash
btcli sudo senate-vote [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--proposal, --proposal-hash TEXT`: The hash of the proposal to vote on.
* `--prompt, --prompt / -y, --no-prompt, --yes, --no_prompt`: Enable or disable interactive prompts.  [default: prompt]
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--vote-aye / --vote-nay`: The vote casted on the proposal
* `--help`: Show this message and exit.

### btcli sudo set

Used to set hyperparameters for a specific subnet.

This command allows subnet owners to modify hyperparameters such as its tempo, emission rates, and other hyperparameters.

#### EXAMPLE

```bash
btcli sudo set --netuid 1 --param tempo --value 400
```

**Usage**:

```bash
btcli sudo set [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--netuid INTEGER`: The netuid of the subnet in the root network, (e.g. 1).
* `--param, --parameter TEXT`: The subnet hyperparameter to set
* `--value TEXT`: Value to set the hyperparameter to.
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### btcli sudo set-take

Allows users to change their delegate take percentage.

This command can be used to update the delegate takes. To run the command, the user must have a configured wallet with both hotkey and coldkey.
The command makes sure the new take value is within 0-18% range.

#### EXAMPLE
```bash
btcli sudo set-take --wallet-name my_wallet --wallet-hotkey my_hotkey
```

**Usage**:

```bash
btcli sudo set-take [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--take FLOAT`: The new take value.
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

## btcli utils

**Usage**:

```bash
btcli utils [OPTIONS] COMMAND [ARGS]...
```

**Options**:

* `--help`: Show this message and exit.

### btcli utils convert

Allows for converting between tao and rao using the specified flags

**Usage**:

```bash
btcli utils convert [OPTIONS]
```

**Options**:

* `--rao TEXT`: Convert amount from Rao
* `--tao FLOAT`: Convert amount from Tao
* `--help`: Show this message and exit.

## btcli wallet

**Usage**:

```bash
btcli wallet [OPTIONS] COMMAND [ARGS]...
```

**Options**:

* `--help`: Show this message and exit.


### btcli wallet balance

Check the balance of the wallet. This command shows a detailed view of the wallet's coldkey balances, including free and staked balances.

You can also pass multiple ss58 addresses of coldkeys to check their balance (using --ss58).

EXAMPLES:

- To display the balance of a single wallet, use the command with the `--wallet-name` argument and provide the wallet name:

```bash
    btcli w balance --wallet-name WALLET
```

- To use the default config values, use:

```bash
    btcli w balance
```

- To display the balances of all your wallets, use the `--all` argument:

```bash
    btcli w balance --all
```

- To display the balances of ss58 addresses, use the `--ss58` argument:

```bash
    btcli w balance --ss58 <ss58_address> --ss58 <ss58_address>
```

**Usage**:

```bash
btcli wallet balance [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--ss58, --ss58-address TEXT`: The SS58 address of the coldkey.
* `-a, --all`: Whether to display the balances for all the wallets.
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### btcli wallet create

Create a complete wallet by setting up both coldkey and hotkeys.

USAGE

The command creates a new coldkey and hotkey. It provides an option for mnemonic word count. It supports password protection for the coldkey and allows overwriting of existing keys.

#### EXAMPLE

```bash
btcli wallet create --n_words 21
```

:::tip
This command is for new users setting up their wallet for the first time, or for those who wish to completely renew their wallet keys. It ensures a fresh start with new keys for secure and effective participation in the Bittensor network.
:::


**Usage**:

```bash
btcli wallet create [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--n-words INTEGER`
* `--use-password / --no-use-password`: Set this to `True` to protect the generated Bittensor key with a password.  [default: use-password]
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### btcli wallet faucet

Obtain test TAO tokens by performing Proof of Work (PoW).

This command is useful for users who need test tokens for operations on a local blockchain.

**IMPORTANT**: THIS COMMAND IS DISABLED ON FINNEY AND TESTNET.

USAGE

The command uses the proof-of-work (POW) mechanism to validate the user's effort and rewards them with test TAO tokens. It is
typically used in local blockchain environments where transactions do not use real TAO tokens.

#### EXAMPLE

```bash
btcli wallet faucet --faucet.num_processes 4 --faucet.cuda.use_cuda
```

:::tip
This command is meant for used in local environments where users can experiment with the blockchain without using real TAO tokens. Users must have the necessary hardware setup, especially when opting for CUDA-based GPU calculations. It is currently disabled on testnet and mainnet (finney). You can only use this command on a local blockchain.
:::


**Usage**:

```bash
btcli wallet faucet [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--processors INTEGER`: Number of processors to use for proof of work (POW) registration.
* `-u, --update-interval INTEGER`: The number of nonces to process before checking for next block during registration  [default: 50000]
* `--output-in-place / --no-output-in-place`: Whether to output the registration statistics in-place.  [default: output-in-place]
* `-v, --verbose`: Whether to output the registration statistics verbosely.
* `--use-cuda, --cuda / --no-use-cuda, --no-cuda`: Set flag to use CUDA for proof of work (POW) registration.  [default: no-use-cuda]
* `-d, --dev-id INTEGER`: Set the CUDA device id(s) in the order of speed, where 0 is the fastest.  [default: 0]
* `-tbp, --threads-per-block INTEGER`: Set the number of threads per block for CUDA.  [default: 256]
* `--max-successes INTEGER`: Set the maximum number of times to successfully run the faucet for this command.  [default: 3]
* `--help`: Show this message and exit.

### btcli wallet get-identity

Shows the identity details of a user's coldkey or hotkey.

The command displays the information in a table format showing:

- **Address**: The ``ss58`` address of the queried key.

- **Item**: Various attributes of the identity such as stake, rank, and trust.

- **Value**: The corresponding values of the attributes.

#### EXAMPLE

```bash
btcli wallet get_identity --key <s58_address>
```

:::tip
This command is primarily used for informational purposes and has no side effects on the blockchain network state.
:::


**Usage**:

```bash
btcli wallet get-identity [OPTIONS]
```

**Options**:

* `-k, --key, --ss58 TEXT`: The coldkey or hotkey ss58 address to query.
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### btcli wallet history

Show the history of the transfers carried out with the provided wallet on the Bittensor network.

USAGE

The output shows the latest transfers of the provided wallet, showing the columns 'From', 'To', 'Amount', 'Extrinsic ID' and 'Block Number'.

#### EXAMPLE

```bash
btcli wallet history
```

**Usage**:

```bash
btcli wallet history [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### btcli wallet inspect

Disabled for dynamic TAO.

<!-- Displays the details of the user's wallet pairs (coldkey, hotkey) on the Bittensor network.

The output is presented as a table with the below columns:

- **Coldkey**: The coldkey associated with the user's wallet.

- **Balance**: The balance of the coldkey.

- **Delegate**: The name of the delegate to which the coldkey has staked TAO.

- **Stake**: The amount of stake held by both the coldkey and hotkey.

- **Emission**: The emission or rewards earned from staking.

- **Netuid**: The network unique identifier of the subnet where the hotkey is active (i.e., validating).

- **Hotkey**: The hotkey associated with the neuron on the network.

USAGE

This command can be used to inspect a single wallet or all the wallets located at a specified path. It is useful for a comprehensive overview of a user's participation and performance in the Bittensor network.

#### EXAMPLE

```bash
btcli wallet inspect
```

```bash
btcli wallet inspect --all -n 1 -n 2 -n 3
```

:::tip
The `inspect` command is for displaying information only and does not perform any transactions or state changes on the blockchain. It is intended to be used with Bittensor CLI and not as a standalone function in user code.
:::


**Usage**:

```bash
btcli wallet inspect [OPTIONS]
```

**Options**:

* `-a, --all, --all-wallets`: Inspect all the wallets at the specified wallet path.
* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `-n, --netuids, --netuid TEXT`: Set the netuid(s) to exclude. Separate multiple netuids with a comma, for example: `-n 0,1,2`.
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit. -->

### btcli wallet list

Displays all the wallets and their corresponding hotkeys that are located in the wallet path specified in the config.

The output display shows each wallet and its associated `ss58` addresses for the coldkey public key and any hotkeys. The output is presented in a hierarchical tree format, with each wallet as a root node and any associated hotkeys as child nodes. The `ss58` address is displayed for each coldkey and hotkey that is not encrypted and exists on the device.

Upon invocation, the command scans the wallet directory and prints a list of all the wallets, indicating whether the
public keys are available (`?` denotes unavailable or encrypted keys).

#### EXAMPLE

```bash
btcli wallet list --path ~/.bittensor
```

**NOTE**: This command is read-only and does not modify the filesystem or the blockchain state. It is intended for use with the Bittensor CLI to provide a quick overview of the user's wallets.

**Usage**:

```bash
btcli wallet list [OPTIONS]
```

**Options**:

* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### btcli wallet new-coldkey

Create a new coldkey. A coldkey is required for holding TAO balances and performing high-value transactions.

USAGE

The command creates a new coldkey. It provides options for the mnemonic word count, and supports password protection. It also allows overwriting an existing coldkey.

#### EXAMPLE

```bash
btcli wallet new_coldkey --n_words 15
```

:::tip
This command is crucial for users who need to create a new coldkey for enhanced security or as part of setting up a new wallet. It is a foundational step in establishing a secure presence on the Bittensor network.
:::


**Usage**:

```bash
btcli wallet new-coldkey [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--n-words, --n_words INTEGER`: The number of words used in the mnemonic. Options: [12, 15, 18, 21, 24]
* `--use-password / --no-use-password`: Set this to `True` to protect the generated Bittensor key with a password.  [default: use-password]
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### btcli wallet new-hotkey

Create a new hotkey for a wallet.

USAGE

This command is used to generate a new hotkey for managing a neuron or participating in a subnet. It provides options for the mnemonic word count, and supports password protection. It also allows overwriting the
existing hotkey.

#### EXAMPLE

```bash
btcli wallet new-hotkey --n_words 24
```

:::tip
This command is useful to create additional hotkeys for different purposes, such as running multiple subnet miners or subnet validators or separating operational roles within the Bittensor network.
:::


**Usage**:

```bash
btcli wallet new-hotkey [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--n-words, --n_words INTEGER`: The number of words used in the mnemonic. Options: [12, 15, 18, 21, 24]
* `--use-password / --no-use-password`: Set to 'True' to protect the generated Bittensor key with a password.  [default: no-use-password]
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### btcli wallet overview

Disabled for dynamic TAO.

<!-- Displays a detailed overview of the user's registered accounts on the Bittensor network.

This command compiles and displays comprehensive information about each neuron associated with the user's wallets, including both hotkeys and coldkeys. It is especially useful for users managing multiple accounts or looking for a summary of their network activities and stake distributions.

USAGE

The command offers various options to customize the output. Users can filter the displayed data by specific
netuid, sort by different criteria, and choose to include all the wallets in the user's wallet path location.
The output is presented in a tabular format with the following columns:

- COLDKEY: The SS58 address of the coldkey.

- HOTKEY: The SS58 address of the hotkey.

- UID: Unique identifier of the neuron.

- ACTIVE: Indicates if the neuron is active.

- STAKE(τ): Amount of stake in the neuron, in TAO.

- RANK: The rank of the neuron within the network.

- TRUST: Trust score of the neuron.

- CONSENSUS: Consensus score of the neuron.

- INCENTIVE: Incentive score of the neuron.

- DIVIDENDS: Dividends earned by the neuron.

- EMISSION(p): Emission received by the neuron, expressed in rho.

- VTRUST: Validator trust score of the neuron.

- VPERMIT: Indicates if the neuron has a validator permit.

- UPDATED: Time since last update.

- AXON: IP address and port of the neuron.

- HOTKEY_SS58: Human-readable representation of the hotkey.


#### EXAMPLE

```bash
btcli wallet overview
```

```bash
btcli wallet overview --all --sort-by stake --sort-order descending
```

```bash
btcli wallet overview -in hk1,hk2 --sort-by stake
```

**NOTE**: This command is read-only and does not modify the blockchain state or account configuration.
It provides a quick and comprehensive view of the user's network presence, making it useful for monitoring account status,
stake distribution, and overall contribution to the Bittensor network.

**Usage**:

```bash
btcli wallet overview [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `-a, --all`: See an overview for all the wallets
* `--sort-by, --sort_by TEXT`: Sort the hotkeys by the specified column title. For example: name, uid, axon.
* `--sort-order, --sort_order TEXT`: Sort the hotkeys in the specified order (ascending/asc or descending/desc/reverse).
* `-in, --include-hotkeys TEXT`: Hotkeys to include. Specify by name or ss58 address. If left empty, all hotkeys, except those in the '--exclude-hotkeys', will be included.
* `-ex, --exclude-hotkeys TEXT`: Hotkeys to exclude. Specify by name or ss58 address. If left empty, all hotkeys, except those in the '--include-hotkeys', will be excluded.
* `-n, --netuids, --netuid TEXT`: Set the netuid(s) to exclude. Separate multiple netuids with a comma, for example: `-n 0,1,2`.
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit. -->

### btcli wallet regen-coldkey

Regenerate a coldkey for a wallet on the Bittensor blockchain network.

This command is used to create a new coldkey from an existing mnemonic, seed, or JSON file.

USAGE

Users can specify a mnemonic, a seed string, or a JSON file path to regenerate a coldkey. The command supports optional password protection for the generated key.

#### EXAMPLE

```bash
btcli wallet regen-coldkey --mnemonic "word1 word2 ... word12"
```


:::tip
This command is critical for users who need to regenerate their coldkey either for recovery or for security reasons.
:::


**Usage**:

```bash
btcli wallet regen-coldkey [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--mnemonic TEXT`: Mnemonic used to regenerate your key. For example: horse cart dog ...
* `--seed TEXT`: Seed hex string used to regenerate your key. For example: 0x1234...
* `-j, --json TEXT`: Path to a JSON file containing the encrypted key backup. For example, a JSON file from PolkadotJS.
* `--json-password TEXT`: Password to decrypt the JSON file.
* `--use-password / --no-use-password`: Set this to `True` to protect the generated Bittensor key with a password.  [default: use-password]
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### btcli wallet regen-coldkeypub

Regenerates the public part of a coldkey (coldkeypub.txt) for a wallet.

Use this command when you need to move machine for subnet mining. Use the public key or SS58 address from your coldkeypub.txt that you have on another machine to regenerate the coldkeypub.txt on this new machine.

USAGE

The command requires either a public key in hexadecimal format or an ``SS58`` address from the existing coldkeypub.txt from old machine to regenerate the coldkeypub on the new machine.

#### EXAMPLE

```bash
btcli wallet regen_coldkeypub --ss58_address 5DkQ4...
```

:::tip
This command is particularly useful for users who need to regenerate their coldkeypub, perhaps due to file corruption or loss. You will need either ss58 address or public hex key from your old coldkeypub.txt for the wallet. It is a recovery-focused utility that ensures continued access to your wallet functionalities.
:::


**Usage**:

```bash
btcli wallet regen-coldkeypub [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--public-key-hex TEXT`: The public key in hex format.
* `--ss58, --ss58-address TEXT`: The SS58 address of the coldkey.
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### btcli wallet regen-hotkey

Regenerates a hotkey for a wallet.

Similar to regenerating a coldkey, this command creates a new hotkey from a mnemonic, seed, or JSON file.

USAGE

Users can provide a mnemonic, seed string, or a JSON file to regenerate the hotkey. The command supports optional password protection and can overwrite an existing hotkey.

#### Example usage

```bash
btcli wallet regen_hotkey --seed 0x1234...
```

:::tip
This command is essential for users who need to regenerate their hotkey, possibly for security upgrades or key recovery. It should be used with caution to avoid accidental overwriting of existing keys.
:::


**Usage**:

```bash
btcli wallet regen-hotkey [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--mnemonic TEXT`: Mnemonic used to regenerate your key. For example: horse cart dog ...
* `--seed TEXT`: Seed hex string used to regenerate your key. For example: 0x1234...
* `-j, --json TEXT`: Path to a JSON file containing the encrypted key backup. For example, a JSON file from PolkadotJS.
* `--json-password TEXT`: Password to decrypt the JSON file.
* `--use-password / --no-use-password`: Set to 'True' to protect the generated Bittensor key with a password.  [default: no-use-password]
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### btcli wallet set-identity

Create or update the on-chain identity of a coldkey or a hotkey on the Bittensor network. **Incurs a 1 TAO transaction fee.**

The on-chain identity includes attributes such as display name, legal name, web URL, PGP fingerprint, and contact information, among others.

The command prompts the user for the identity attributes and validates the input size for each attribute. It provides an option to update an existing validator hotkey identity. If the user consents to the transaction cost, the identity is updated on the blockchain.

Each field has a maximum size of 64 bytes. The PGP fingerprint field is an exception and has a maximum size of 20 bytes. The user is prompted to enter the PGP fingerprint as a hex string, which is then converted to bytes. The user is also prompted to enter the coldkey or hotkey ``ss58`` address for the identity to be updated.

If the user does not have a hotkey, the coldkey address is used by default. If setting a validator identity, the hotkey will be used by default. If the user is setting an identity for a subnet, the coldkey will be used by default.

#### EXAMPLE

```bash
btcli wallet set_identity
```

:::tip
This command should only be used if the user is willing to incur the a recycle fee associated with setting an identity on the blockchain. It is a high-level command that makes changes to the blockchain state and should not be used programmatically as part of other scripts or applications.
:::


**Usage**:

```bash
btcli wallet set-identity [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--display-name, --display TEXT`: The display name for the identity.
* `--legal-name, --legal TEXT`: The legal name for the identity.
* `--web-url, --web TEXT`: The web URL for the identity.
* `--riot-handle, --riot TEXT`: The Riot handle for the identity.
* `--email TEXT`: The email address for the identity.
* `--pgp-fingerprint, --pgp TEXT`: The PGP fingerprint for the identity.
* `--image-url, --image TEXT`: The image URL for the identity.
* `-i, --info TEXT`: The info for the identity.
* `-x, -𝕏, --twitter-url, --twitter TEXT`: The 𝕏 (Twitter) URL for the identity.
* `--validator / --not-validator`: Are you updating a validator hotkey identity?
* `--netuid INTEGER`: Netuid if you are updating identity of a subnet owner
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--prompt, --prompt / -y, --no-prompt, --yes, --no_prompt`: Enable or disable interactive prompts.  [default: prompt]
* `--help`: Show this message and exit.

### btcli wallet sign

Allows users to sign a message with the provided wallet or wallet hotkey. Use this command to easily prove your ownership of a coldkey or a hotkey.

USAGE

Using the provided wallet (coldkey), the command generates a signature for a given message.

EXAMPLES

```bash
btcli wallet sign --wallet-name default --message '{"something": "here", "timestamp": 1719908486}'
```

```bash
btcli wallet sign --wallet-name default --wallet-hotkey hotkey --message '{"something": "here", "timestamp": 1719908486}'
```

**Usage**:

```bash
btcli wallet sign [OPTIONS]
```

**Options**:

* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--use-hotkey / --no-use-hotkey`: If specified, the message will be signed by the hotkey. If not specified, the user will be prompted.
* `--message TEXT`: The message to encode and sign
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### btcli wallet swap-hotkey

Swap hotkeys of a given wallet on the blockchain. For a registered key pair, for example, a (coldkeyA, hotkeyA) pair, this command swaps the hotkeyA with a new, unregistered, hotkeyB to move the original registration to the (coldkeyA, hotkeyB) pair.

USAGE

The command is used to swap the hotkey of a wallet for another hotkey on that same wallet.

IMPORTANT

- Make sure that your original key pair (coldkeyA, hotkeyA) is already registered.
- Make sure that you use a newly created hotkeyB in this command. A hotkeyB that is already registered cannot be used in this command.
- Finally, note that this command requires a fee of 1 TAO for recycling and this fee is taken from your wallet (coldkeyA).

#### EXAMPLE

```bash
btcli wallet swap_hotkey destination_hotkey_name --wallet-name your_wallet_name --wallet-hotkey original_hotkey
```

**Usage**:

```bash
btcli wallet swap-hotkey [OPTIONS] [DESTINATION_HOTKEY_NAME]
```

**Arguments**:

* `[DESTINATION_HOTKEY_NAME]`: Destination hotkey name.

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--prompt, --prompt / -y, --no-prompt, --yes, --no_prompt`: Enable or disable interactive prompts.  [default: prompt]
* `--help`: Show this message and exit.

### btcli wallet transfer

Disabled for dynamic TAO.

<!-- Send TAO tokens from one wallet to another wallet on the Bittensor network.

This command is used for transactions between different wallet accounts, enabling users to send tokens to other
participants on the network. The command displays the user's current balance before prompting for the amount
to transfer (send), ensuring transparency and accuracy in the transaction.

USAGE

The command requires that you specify the destination address (public key) and the amount of TAO you want transferred.
It checks if sufficient balance exists in your wallet and prompts for confirmation before proceeding with the transaction.

#### EXAMPLE

```bash
btcli wallet transfer --dest 5Dp8... --amount 100
```

**NOTE**: This command is used for executing token transfers within the Bittensor network. Users should verify the destination address and the TAO amount before confirming the transaction to avoid errors or loss of funds.

**Usage**:

```bash
btcli wallet transfer [OPTIONS]
```

**Options**:

* `-d, --destination, --dest TEXT`: Destination address (ss58) of the wallet (coldkey).
* `-a, --amount FLOAT`: Amount (in TAO) to transfer.
* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--prompt, --prompt / -y, --no-prompt, --yes, --no_prompt`: Enable or disable interactive prompts.  [default: prompt]
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit. -->

## btcli weights

**Usage**:

```bash
btcli weights [OPTIONS] COMMAND [ARGS]...
```

**Options**:

* `--help`: Show this message and exit.


### btcli weights commit

Commit weights for specific subnet.

Use this command to commit weights for a specific subnet. You must specify the netuid, the UIDs you are interested in, and the weights you wish to commit.

#### EXAMPLE

```bash
btcli wt commit --netuid 1 --uids 1,2,3,4 --w 0.1,0.2,0.3
```

:::tip
This command is used to commit weights for a specific subnet and requires the user to have the necessary permissions.
:::


**Usage**:

```bash
btcli weights commit [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--netuid INTEGER`: The netuid of the subnet in the root network, (e.g. 1).
* `-u, --uids TEXT`: UIDs of interest for the specified netuid, e.g. -u 1,2,3 ...
* `-w, --weights TEXT`: Weights for the specified UIDs, e.g. `-w 0.2,0.4,0.1 ...` Must correspond to the order of the UIDs.
* `-s, --salt TEXT`: Corresponding salt for the hash function, e.g. -s 163 -s 241 -s 217 ...
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### btcli weights reveal

Reveal weights for a specific subnet.

You must specify the netuid, the UIDs you are interested in, and weights you wish to reveal.

#### EXAMPLE

```bash
btcli wt reveal --netuid 1 --uids 1,2,3,4 --weights 0.1,0.2,0.3,0.4 --salt 163,241,217,11,161,142,147,189
```

**Usage**:

```bash
btcli weights reveal [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--netuid INTEGER`: The netuid of the subnet in the root network, (e.g. 1).
* `-u, --uids TEXT`: Corresponding UIDs for the specified netuid, e.g. -u 1,2,3 ...
* `-w, --weights TEXT`: Weights for the specified UIDs, e.g. `-w 0.2,0.4,0.1 ...` Must correspond to the order of the UIDs.
* `-s, --salt TEXT`: Corresponding salt for the hash function, e.g. -s 163,241,217 ...
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.
