---
title: "Bittensor CLI"
---

# Bittensor CLI

Command line interface (CLI) for Bittensor. Uses the values in the configuration file. These values can be overriden by passing them explicitly in the command line.

## Install

See [Getting Started](./getting-started/install-btcli.md) to install `btcli`.

## Usage

```console
$ btcli [OPTIONS] COMMAND [ARGS]
```

**Options**:

- `--version`
- `--install-completion`: Install completion for the current shell.
- `--show-completion`: Show completion for the current shell, to copy it or customize the installation.
- `--help`: Show this message and exit.

**Commands**:

- `config`: [Config commands](#btcli-config), aliases: `c`, `conf`.
- `root`: [Root commands](#btcli-root), alias: `r`.
- `stake`: [Stake commands](#btcli-stake), alias: `st`.
- `subnet`: [Subnet commands](#btcli-subnet), alias: `s`, `subnets`.
- `sudo`: [Sudo commands](#btcli-sudo), alias: `su`.
- `wallet`: [Wallet commands](#btcli-wallet), aliases: `w`, `wallets`.
- `weights`: [Weights commands](#btcli-weights), aliases: `wt`, `weight`.

## Config

## btcli config

## Example config file

You can set the commonly used values, such as your hotkey and coldkey names, the default chain URL or the network name you use, and more, in `config.yml`. You can override these values by explicitly passing them in the command line for any `btcli` command.

The default location of the config file is: `~/.bittensor/config.yml`. An example of a `config.yml` is shown below:

```yaml title="Example ~/.bittensor/config.yml"
chain: ws://127.0.0.1:9945
network: local
no_cache: False
wallet_hotkey: hotkey-user1
wallet_name: coldkey-user1
wallet_path: ~/.bittensor/wallets
metagraph_cols:
  ACTIVE: true
  AXON: true
  COLDKEY: true
  CONSENSUS: true
  DIVIDENDS: true
  EMISSION: true
  HOTKEY: true
  INCENTIVE: true
  RANK: true
  STAKE: true
  TRUST: true
  UID: true
  UPDATED: true
  VAL: true
  VTRUST: true
```

:::caution alert
If both `chain` and `network` config values are present in the `config.yml`, then `chain` has the higher precedence. The the `btcli` command uses the `chain` value.
:::

**Usage**:

```console
$ btcli config [OPTIONS] COMMAND [ARGS]...
```

**Options**:

- `--help`: Show this message and exit.

**Commands**:

- `clear`: Setting the flags in this command will clear those items from your config file.
- `get`: Prints the current config file in a table. The default location of your config file is `~/.bittensor/config.yml`.
- `metagraph`: Interactive module to update the config for which columns to display in the metagraph output.
- `set`: Sets the values in the config file.

### btcli config clear

Setting the flags in this command will clear those items from your config file.

#### Examples

- To clear the chain and network:

```bash
btcli config clear --chain --network
```

- To clear your config entirely:

```bash
btcli config clear --all
```

**Options**:

- `--wallet-name, --name, --wallet_name, --wallet.name`
- `-p, --wallet-path, --wallet_path, --wallet.path`
- `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey`
- `--network, --subtensor.network`
- `--chain, --subtensor.chain_endpoint`
- `--no-cache, --no_cache`
- `--all`
- `--help`: Show this message and exit.

### btcli config get

Prints the current config file in a table

**Usage**:

```console
$ btcli config get [OPTIONS]
```

**Options**:

- `--help`: Show this message and exit.

### btcli config metagraph

Interactive module to update the config for which columns to display in the metagraph output.

**Usage**:

```console
$ btcli config metagraph [OPTIONS]
```

**Options**:

- `--reset`: Restore the config for metagraph columns to its default setting (all enabled).
- `--help`: Show this message and exit.

### btcli config set

Sets values in config file

**Usage**:

```console
$ btcli config set [OPTIONS]
```

**Options**:

- `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of wallet.
- `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Filepath of root of wallets.
- `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of wallet.
- `--network, --subtensor.network TEXT`: The subtensor network to connect to. Default: finney.
- `--chain, --subtensor.chain_endpoint TEXT`: The subtensor chain endpoint to connect to.
- `--cache, --cache / --no-cache, --no_cache`: Disable caching of certain commands. This will disable the `--reuse-last` and `html` flags on commands such as `subnets metagraph`, `stake show` and `subnets list`. [default: no-cache].
- `--help`: Show this message and exit.

:::caution alert
If both `chain` and `network` config values are present in the `config.yml`, then `chain` has the higher precedence. The the `btcli` command uses the `chain` value.
:::

---

## Root

## btcli root

**Usage**:

```console
$ btcli root [OPTIONS] COMMAND [ARGS]...
```

**Options**:

- `--help`: Show this message and exit.

**Commands**:

- `boost`: Boost the weights for a specific subnet within the root network on the Bittensor network.
- `delegate-stake` or `delegate_stake`: Stakes TAO to a specified delegate.
- `get-weights` or `get_weights`: Retrieve the weights set for the root network.
- `list`: Display the members of the root network.
- `list-delegates` or `list_delegates`: Displays a table of Bittensor network delegates.
- `my-delegates` or `my_delegates`: Displays a table of delegated stakes from a user's wallet(s) to various delegates.
- `nominate`: Facilitates a wallet to become a delegate.
- `proposals`: View active proposals for the senate.
- `register`: Register a neuron by recycling some TAO.
- `senate`: View the members of Bittensor's governance protocol, known as the Senate.
- `senate-vote` or `senate_vote`: Cast a vote on an active proposal in the Senate.
- `set-take` or `set_take`: Allows users to change their delegate take.
- `set-weights` or `set_weights`: Set the weights for the root network on the...
- `slash`: Decrease the weights for a specific subnet.
- `undelegate-stake` or `undelegate_stake`: Allows users to withdraw their staked TAO.

### btcli root boost

Boost the weights for a specific subnet within the root network on the Bittensor
network. The command allows boosting the weights for different subnets within the root network.

#### Example

```bash
btcli root boost --netuid 1 --increase 0.01
```

**Usage**:

```console
$ btcli root boost [OPTIONS]
```

**Options**:

- `--network, --subtensor.network TEXT`: The subtensor network to connect to. Default: finney.
- `--chain, --subtensor.chain_endpoint TEXT`: The subtensor chain endpoint to connect to.
- `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of wallet.
- `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Filepath of root of wallets.
- `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of wallet.
- `--netuid INTEGER`: The netuid (network unique identifier) of the subnet within the root network, (e.g. 1).
- `-a, --amount, --increase FLOAT`: Amount (float) to boost, (e.g. 0.01). Any amount provided will be added to the subnet's existing weight.
- `--prompt / --no-prompt`: Enable or disable interactive prompts. [default: prompt].
- `--quiet`: Do not output to the console besides critical information.
- `--verbose`: Enable verbose output.
- `--help`: Show this message and exit.

### btcli root delegate-stake

Stakes TAO to a specified delegate on the Bittensor network.

This action allocates the user's TAO to support a delegate, potentially earning staking rewards in return.

The command interacts with the user to determine the delegate and the amount of TAO to be staked. If the
`--all` flag is used, it delegates the entire available balance.

The user must specify the delegate's SS58 address and the amount of TAO to stake. The function sends a
transaction to the subtensor network to delegate the specified amount to the chosen delegate. These values are
prompted if not provided. You can list all delegates with `btcli root list-delegates`.

#### Examples

```bash
btcli delegate-stake --delegate_ss58key <SS58_ADDRESS> --amount <AMOUNT>
```

```bash
btcli delegate-stake --delegate_ss58key <SS58_ADDRESS> --all
```

:::tip
This command modifies the blockchain state and may incur transaction fees. It requires user confirmation and interaction, and is designed to be used within the Bittensor CLI environment. The user should ensure the delegate's address and the amount to be staked are correct before executing the command.
:::

**Usage**:

```console
$ btcli root delegate-stake [OPTIONS]
```

**Options**:

- `--delegate-ss58key TEXT`: The `SS58` address of the delegate to stake to.
- `--amount FLOAT`: The amount of TAO to stake. Do no specify if using `--all`.
- `-a, --all`: If specified, the command stakes all available TAO. Do not specify if using `--amount`.
- `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of wallet.
- `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Filepath of root of wallets.
- `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of wallet.
- `--network, --subtensor.network TEXT`: The subtensor network to connect to. Default: finney.
- `--chain, --subtensor.chain_endpoint TEXT`: The subtensor chain endpoint to connect to.
- `--prompt / --no-prompt`: Enable or disable interactive prompts. [default: prompt].
- `--quiet`: Do not output to the console besides critical information.
- `--verbose`: Enable verbose output.
- `--help`: Show this message and exit.

### btcli root get-weights

Retrieve the weights set for the root network on the Bittensor network. This command provides visibility into how network responsibilities and rewards are distributed among various
subnets.

The command outputs a table listing the weights assigned to each subnet within the root network. This
information is crucial for understanding the current influence and reward distribution among the subnets.

#### Example

```bash
btcli root get-weights
```

:::tip
This command is essential for users interested in the governance and operational dynamics of the Bittensor network. It offers transparency into how network rewards and responsibilities are allocated across different subnets.
:::

**Usage**:

```console
$ btcli root get-weights [OPTIONS]
```

**Options**:

- `--network, --subtensor.network TEXT`: The subtensor network to connect to. Default: finney.
- `--chain, --subtensor.chain_endpoint TEXT`: The subtensor chain endpoint to connect to.
- `--limit-min-col, --min INTEGER`: Limit left display of the table to this column.
- `--limit-max-col, --max INTEGER`: Limit right display of the table to this column.
- `--reuse-last`: Reuse the metagraph data you last retrieved. Only use this if you have already retrieved metagraphdata
- `--html`: Display the table as HTML in the browser, rather than in the Terminal.
- `--quiet`: Do not output to the console besides critical information.
- `--verbose`: Enable verbose output.
- `--help`: Show this message and exit.

### btcli root list

Display the members of the root network (Netuid = 0) on the Bittensor network.

This command provides an overview of the neurons that constitute the network's foundational layer.

Upon execution, the command fetches and lists the neurons in the root network, showing their unique identifiers
(UIDs), names, addresses, stakes, and whether they are part of the senate (network governance body).

#### Example

```bash
btcli root list
```

:::tip
This command is useful for users interested in understanding the composition and governance structure of the Bittensor network's root layer. It provides insights into which neurons hold significant influence and responsibility within the network.
:::

**Usage**:

```console
$ btcli root list [OPTIONS]
```

**Options**:

- `--network, --subtensor.network TEXT`: The subtensor network to connect to. Default: finney.
- `--chain, --subtensor.chain_endpoint TEXT`: The subtensor chain endpoint to connect to.
- `--quiet`: Do not output to the console besides critical information.
- `--verbose`: Enable verbose output.
- `--help`: Show this message and exit.

### btcli root list-delegates

Displays a table of Bittensor network delegates, providing a comprehensive overview of delegate statistics and information.

This table helps users make informed decisions on which delegates to allocate their TAO stake.

The table columns include:

- INDEX: The delegate's index in the sorted list.

- DELEGATE: The name of the delegate.

- SS58: The delegate's unique SS58 address (truncated for display).

- NOMINATORS: The count of nominators backing the delegate.

- OWNER STAKE(τ): The amount of delegate's own stake (not the TAO delegated from any nominators).

- TOTAL STAKE(τ): The delegate's cumulative stake, including self-staked and nominators' stakes.

- CHANGE/(4h): The percentage change in the delegate's stake over the last four hours.

- SUBNETS: The subnets to which the delegate is registered.

- VPERMIT: Indicates the subnets for which the delegate has validator permits.

- NOMINATOR/(24h)/kτ: The earnings per 1000 τ staked by nominators in the last 24 hours.

- DELEGATE/(24h): The total earnings of the delegate in the last 24 hours.

- DESCRIPTION: A brief description of the delegate's purpose and operations.

Sorting is done based on the `TOTAL STAKE` column in descending order. Changes in stake are highlighted:
increases in green and decreases in red. Entries with no previous data are marked with `NA`. Each delegate's
name is a hyperlink to their respective URL, if available.

#### Examples

```bash
btcli root list-delegates
```

```bash
btcli root list-delegates --wallet-name <my_wallet>
```

```bash
btcli root list-delegates --subtensor.network finney # can also be `test` or `local`
```

:::tip
This function is part of the Bittensor CLI tools and is intended for use within a console application. It prints directly to the console and does not return any value.
:::

**Usage**:

```console
$ btcli root list-delegates [OPTIONS]
```

**Options**:

- `--network, --subtensor.network TEXT`: The subtensor network to connect to. Default: finney.
- `--chain, --subtensor.chain_endpoint TEXT`: The subtensor chain endpoint to connect to.
- `--quiet`: Do not output to the console besides critical information.
- `--verbose`: Enable verbose output.
- `--help`: Show this message and exit.

### btcli root my-delegates

Retrieves and displays a table of delegated stakes from a user's wallet(s) to various delegates.

The command provides detailed insights into the user's
staking activities and the performance of their chosen delegates.

The table output includes the following columns:

- Wallet: The name of the user's wallet.

- OWNER: The name of the delegate's owner.

- SS58: The truncated SS58 address of the delegate.

- Delegation: The amount of TAO staked by the user to the delegate.

- τ/24h: The earnings from the delegate to the user over the past 24 hours.

- NOMS: The number of nominators for the delegate.

- OWNER STAKE(τ): The stake amount owned by the delegate.

- TOTAL STAKE(τ): The total stake amount held by the delegate.

- SUBNETS: The list of subnets the delegate is a part of.

- VPERMIT: Validator permits held by the delegate for various subnets.

- 24h/kτ: Earnings per 1000 TAO staked over the last 24 hours.

- Desc: A description of the delegate.

The command also sums and prints the total amount of TAO delegated across all wallets.

The command can be run as part of the Bittensor CLI suite of tools and requires no parameters if a single wallet
is used. If multiple wallets are present, the `--all` flag can be specified to aggregate information across
all wallets.

#### Examples

```bash
btcli root my-delegates
```

```bash
btcli root my-delegates --all
```

```bash
btcli root my-delegates --wallet-name <my_wallet>
```

:::tip
This function is typically called by the CLI parser and is not intended to be used directly in user code.
:::

**Usage**:

```console
$ btcli root my-delegates [OPTIONS]
```

**Options**:

- `--network, --subtensor.network TEXT`: The subtensor network to connect to. Default: finney.
- `--chain, --subtensor.chain_endpoint TEXT`: The subtensor chain endpoint to connect to.
- `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of wallet
- `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Filepath of root of wallets
- `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of wallet
- `-a, --all-wallets, --all`: If specified, the command aggregates information across all wallets.
- `--quiet`: Do not output to the console besides critical information.
- `--verbose`: Enable verbose output.
- `--help`: Show this message and exit.

### btcli root nominate

Facilitates a wallet to become a delegate on the Bittensor network.

This command handles the nomination process, including wallet unlocking and verification of the hotkey's current
delegate status.

The command performs several checks:

- Verifies that the hotkey is not already a delegate to prevent redundant nominations.

- Tries to nominate the wallet and reports success or failure.

Upon success, the wallet's hotkey is registered as a delegate on the network.

To run the command, the user must have a configured wallet with both hotkey and coldkey. If the wallet is not
already nominated, this command will initiate the process.

#### Examples

```bash
btcli root nominate
```

```bash
btcli root nominate --wallet-name <my_wallet> --wallet-hotkey <my_hotkey>
```

:::tip
This function is intended to be used as a CLI command. It prints the outcome directly to the console and does not return any value. It should not be called programmatically in user code due to its interactive nature and side effects on the network state.
:::

**Usage**:

```console
$ btcli root nominate [OPTIONS]
```

**Options**:

- `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of wallet
- `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Filepath of root of wallets
- `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of wallet
- `--network, --subtensor.network TEXT`: The subtensor network to connect to. Default: finney.
- `--chain, --subtensor.chain_endpoint TEXT`: The subtensor chain endpoint to connect to.
- `--prompt / --no-prompt`: Enable or disable interactive prompts. [default: prompt]
- `--quiet`: Do not output to the console besides critical information.
- `--verbose`: Enable verbose output.
- `--help`: Show this message and exit.

### btcli root proposals

View active proposals for the senate within Bittensor's governance protocol.

This command displays the details of ongoing proposals, including votes, thresholds, and proposal data.

The command lists all active proposals, showing their hash, voting threshold, number of ayes and nays, detailed
votes by address, end block number, and call data associated with each proposal.

#### Example

```bash
btcli root proposals
```

:::tip
This command is essential for users who are actively participating in or monitoring the governance of the Bittensor network. It provides a detailed view of the proposals being considered, along with the community's response to each.
:::

**Usage**:

```console
$ btcli root proposals [OPTIONS]
```

**Options**:

- `--network, --subtensor.network TEXT`: The subtensor network to connect to. Default: finney.
- `--chain, --subtensor.chain_endpoint TEXT`: The subtensor chain endpoint to connect to.
- `--quiet`: Do not output to the console besides critical information.
- `--verbose`: Enable verbose output.
- `--help`: Show this message and exit.

### btcli root register

Register a neuron on the Bittensor network by recycling some TAO (the network's native token).

This command is used to add a new neuron to a specified subnet within the network, contributing to the
decentralization and robustness of Bittensor.

Before registering, the command checks if the specified subnet exists and whether the user's balance is
sufficient to cover the registration cost.

The registration cost is determined by the current recycle amount for the specified subnet. If the balance is
insufficient or the subnet does not exist, the command will exit with an appropriate error message.

If the preconditions are met, and the user confirms the transaction (if `no_prompt` is not set), the command
proceeds to register the neuron by recycling the required amount of TAO.

The command structure includes:

- Verification of subnet existence.

- Checking the user's balance against the current recycle amount for the subnet.

- User confirmation prompt for proceeding with registration.

- Execution of the registration process.

Columns Displayed in the confirmation prompt:

- Balance: The current balance of the user's wallet in TAO.

- Cost to Register: The required amount of TAO needed to register on the specified subnet.

#### Example

```bash
btcli subnets register --netuid 1
```

:::tip
This command is critical for users who wish to contribute a new neuron to the network. It requires careful consideration of the subnet selection and an understanding of the registration costs. Users should ensure their wallet is sufficiently funded before attempting to register a neuron.
:::

**Usage**:

```console
$ btcli root register [OPTIONS]
```

**Options**:

- `--network, --subtensor.network TEXT`: The subtensor network to connect to. Default: finney.
- `--chain, --subtensor.chain_endpoint TEXT`: The subtensor chain endpoint to connect to.
- `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of wallet
- `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Filepath of root of wallets
- `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of wallet
- `--prompt / --no-prompt`: Enable or disable interactive prompts. [default: prompt]
- `--quiet`: Do not output to the console besides critical information.
- `--verbose`: Enable verbose output.
- `--help`: Show this message and exit.

### btcli root senate

View the members of Bittensor's governance protocol, known as the Senate.

This command lists the delegates involved in the decision-making process of the Bittensor network.

The command retrieves and displays a list of Senate members, showing their names and wallet addresses.
This information is crucial for understanding who holds governance roles within the network.

#### Example

```bash
btcli root senate
```

:::tip
This command is particularly useful for users interested in the governance structure and participants of the Bittensor network. It provides transparency into the network's decision-making body.
:::

**Usage**:

```console
$ btcli root senate [OPTIONS]
```

**Options**:

- `--network, --subtensor.network TEXT`: The subtensor network to connect to. Default: finney.
- `--chain, --subtensor.chain_endpoint TEXT`: The subtensor chain endpoint to connect to.
- `--quiet`: Do not output to the console besides critical information.
- `--verbose`: Enable verbose output.
- `--help`: Show this message and exit.

### btcli root senate-vote

Cast a vote on an active proposal in Bittensor's governance protocol.

This command is used by Senate members to vote on various proposals that shape the network's future.

The user needs to specify the hash of the proposal they want to vote on. The command then allows the Senate
member to cast a 'Yes' or 'No' vote, contributing to the decision-making process.

#### Example

```bash
btcli root senate-vote --proposal <proposal_hash>
```

:::tip
This command is crucial for Senate members to exercise their voting rights on key proposals. It plays a vital role in the governance and evolution of the Bittensor network.
:::

**Usage**:

```console
$ btcli root senate-vote [OPTIONS]
```

**Options**:

- `--network, --subtensor.network TEXT`: The subtensor network to connect to. Default: finney.
- `--chain, --subtensor.chain_endpoint TEXT`: The subtensor chain endpoint to connect to.
- `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of wallet
- `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Filepath of root of wallets
- `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of wallet
- `--proposal, --proposal-hash TEXT`: The hash of the proposal to vote on.
- `--prompt / --no-prompt`: Enable or disable interactive prompts. [default: prompt]
- `--quiet`: Do not output to the console besides critical information.
- `--verbose`: Enable verbose output.
- `--help`: Show this message and exit.

### btcli root set-take

Allows users to change their delegate take.

The command performs several checks:

1. Hotkey is already a delegate.
2. New take value is within 9%-18% range

To run the command, the user must have a configured wallet with both hotkey and coldkey. Also, the hotkey should already be a delegate.

#### Example

```bash
btcli root set-take --wallet-name <my_wallet> --wallet-hotkey <my_hotkey>
```

:::tip
This function can be used to update the takes individually for every subnet. Default `take` value is 0.18 (18%).
:::

**Usage**:

```console
$ btcli root set-take [OPTIONS]
```

**Options**:

- `--network, --subtensor.network TEXT`: The subtensor network to connect to. Default: finney.
- `--chain, --subtensor.chain_endpoint TEXT`: The subtensor chain endpoint to connect to.
- `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of wallet
- `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Filepath of root of wallets
- `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of wallet
- `--take FLOAT`: The new take value.
- `--quiet`: Do not output to the console besides critical information.
- `--verbose`: Enable verbose output.
- `--help`: Show this message and exit.

### btcli root set-weights

Set the weights for the oot network on the Bittensor network.

This command is used by network senators to influence the distribution of network rewards and responsibilities.

The command allows setting weights for different subnets within the root network. Users need to specify the
netuids (network unique identifiers) and corresponding weights they wish to assign.

#### Example

```bash
btcli root set-weights -w 0.3,0.3,0.4 -n 1,2,3 --chain ws://127.0.0.1:9945
```

:::tip
This command is particularly important for network senators and requires a comprehensive understanding of the network's dynamics. It is a powerful tool that directly impacts the network's operational mechanics and reward distribution.
:::

**Usage**:

```console
$ btcli root set-weights [OPTIONS]
```

**Options**:

- `--network, --subtensor.network TEXT`: The subtensor network to connect to. Default: finney.
- `--chain, --subtensor.chain_endpoint TEXT`: The subtensor chain endpoint to connect to.
- `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of wallet
- `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Filepath of root of wallets
- `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of wallet
- `-n, --netuids INTEGER`: Set the netuid(s) to filter by. Separate multiple netuids with a comma, for example: `-n 0,1,2`. [default: None]
- `-w, --weights FLOAT`: Weights for the specified UIDs, e.g. `-w 0.2,0.4,0.1 ...` Must correspond to the order of the UIDs. [default: None]`
- `--prompt / --no-prompt`: Enable or disable interactive prompts. [default: prompt]
- `--quiet`: Do not output to the console besides critical information.
- `--verbose`: Enable verbose output.
- `--help`: Show this message and exit.

### btcli root slash

Decrease the weights for a specific subnet within the root network on the Bittensor network.

The command allows slashing (decreasing) the weights for different subnets within the root network.

#### Example

```bash
btcli root slash --netuid 1 --decrease 0.01
```
Output:
```bash
Enter netuid (e.g. 1): 1
Enter decrease amount (e.g. 0.01): 0.2
Slashing weight for subnet: 1 by amount: 0.2
```

**Usage**:

```console
$ btcli root slash [OPTIONS]
```

**Options**:

- `--network, --subtensor.network TEXT`: The subtensor network to connect to. Default: finney.
- `--chain, --subtensor.chain_endpoint TEXT`: The subtensor chain endpoint to connect to.
- `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of wallet
- `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Filepath of root of wallets
- `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of wallet
- `--netuid INTEGER`: The netuid (network unique identifier) of the subnet within the root network, (e.g. 1)
- `-a, --amount, --decrease FLOAT`: Amount (float) to boost, (e.g. 0.01)
- `--prompt / --no-prompt`: Enable or disable interactive prompts. [default: prompt]
- `--quiet`: Do not output to the console besides critical information.
- `--verbose`: Enable verbose output.
- `--help`: Show this message and exit.

### btcli root undelegate-stake

Allows users to withdraw their staked TAO from a delegate on the Bittensor network.

This process is known as "undelegating" and it reverses the delegation process, freeing up the staked tokens.

The command prompts the user for the amount of TAO to undelegate and the `SS58` address of the delegate from
which to undelegate. If the `--all` flag is used, it will attempt to undelegate the entire staked amount from
the specified delegate.

The user must provide the delegate's SS58 address and the amount of TAO to undelegate. The function will then
send a transaction to the Bittensor network to process the undelegation.

#### Examples

```bash
 btcli undelegate --delegate_ss58key <SS58_ADDRESS> --amount <AMOUNT>
```

```bash
 btcli undelegate --delegate_ss58key <SS58_ADDRESS> --all
```

:::tip
This command can result in a change to the blockchain state and may incur transaction fees. It is interactive and requires confirmation from the user before proceeding. It should be used with care as undelegating can affect the delegate's total stake and potentially the user's staking rewards.
:::

**Usage**:

```console
$ btcli root undelegate-stake [OPTIONS]
```

**Options**:

- `--delegate-ss58key TEXT`: The `SS58` address of the delegate to undelegate from.
- `--amount FLOAT`: The amount of TAO to unstake. Do no specify if using `--all`
- `-a, --all`: If specified, the command undelegates all staked TAO from the delegate. Do not specify if using `--amount`
- `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of wallet
- `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Filepath of root of wallets
- `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of wallet
- `--network, --subtensor.network TEXT`: The subtensor network to connect to. Default: finney.
- `--chain, --subtensor.chain_endpoint TEXT`: The subtensor chain endpoint to connect to.
- `--prompt / --no-prompt`: Enable or disable interactive prompts. [default: prompt]
- `--quiet`: Do not output to the console besides critical information.
- `--verbose`: Enable verbose output.
- `--help`: Show this message and exit.

---

## Stake

## btcli stake

**Usage**:

```console
$ btcli stake [OPTIONS] COMMAND [ARGS]...
```

**Options**:

- `--help`: Show this message and exit.

**Commands**:

- `add`: Stake TAO tokens to one or more hotkeys from a user's coldkey on the Bittensor network.
- `child`: Child Hotkey commands, alias: `children`.
- `remove`: Unstake TAO tokens from one or more hotkeys and transfer them back to the user's coldkey.
- `show`: List all stake accounts associated with a user's wallet on the Bittensor network.

### btcli stake add

Stake TAO tokens to one or more hotkeys from a user's coldkey on the Bittensor network.

This command is used to allocate tokens to different hotkeys, securing their position and influence on the network.

Users can specify the amount to stake, the hotkeys to stake to (either by name or `SS58` address), and whether
to stake to all hotkeys. The command checks for sufficient balance and hotkey registration before proceeding
with the staking process.

The command prompts for confirmation before executing the staking operation.

#### Example

```bash
btcli stake add --amount 100 --wallet-name <my_wallet> --wallet-hotkey <my_hotkey>
```

:::tip
This command is critical for users who wish to distribute their stakes among different neurons (hotkeys) on the network. It allows for a strategic allocation of tokens to enhance network participation and influence.
:::

**Usage**:

```console
$ btcli stake add [OPTIONS]
```

**Options**:

- `-a, --all-tokens, --all`: When set, stakes all available tokens from the coldkey.
- `--amount FLOAT`: The amount of TAO tokens to stake [default: 0.0].
- `-m, --max-stake FLOAT`: Sets the maximum amount of TAO to have staked in each hotkey. [default: 0.0].
- `--hotkey-ss58-address TEXT`: The SS58 address of the hotkey to stake to.
- `-in, --include-hotkeys, --hotkey-ss58-address TEXT`: Specifies hotkeys by name or ss58 address to stake to. For example, `-in hk1,hk2``.
- `-ex, --exclude-hotkeys, --hotkey-ss58-address TEXT`: Specifies hotkeys by name or ss58 address to not to stake to (use this option only with `--all-hotkeys`) i.e. `--all-hotkeys -ex hk3,hk4`
- `--all-hotkeys / --no-all-hotkeys`: When set, stakes to all hotkeys associated with the wallet. Do not use if specifying hotkeys in `--include-hotkeys`. [default: no-all-hotkeys].
- `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of wallet
- `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Filepath of root of wallets.
- `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of wallet.
- `--network, --subtensor.network TEXT`: The subtensor network to connect to. Default: finney.
- `--chain, --subtensor.chain_endpoint TEXT`: The subtensor chain endpoint to connect to.
- `--prompt / --no-prompt`: Enable or disable interactive prompts. [default: prompt].
- `--quiet`: Do not output to the console besides critical information.
- `--verbose`: Enable verbose output.
- `--help`: Show this message and exit.

### btcli stake child

**Usage**:

```console
$ btcli stake child [OPTIONS] COMMAND [ARGS]...
```

**Options**:

- `--help`: Show this message and exit.

**Commands**:

- `get`: Get all child hotkeys on a specified...
- `revoke`: Remove all children hotkeys on a specified...
- `set`: Add children hotkeys on a specified subnet...
- `take`: Get and set your childkey take on a...

#### btcli stake child get

Get all child hotkeys on a specified subnet on the Bittensor network.

This command is used to view delegated authority to different hotkeys on the subnet.

Users can specify the subnet and see the children and the proportion that is given to them.

The command compiles a table showing:

- ChildHotkey: The hotkey associated with the child.
- ParentHotKey: The hotkey associated with the parent.
- Proportion: The proportion that is assigned to them.
- Expiration: The expiration of the hotkey.

#### Examples

```bash
btcli stake child get --netuid 1
```

```bash
btcli stake child get --all-netuids
```

:::tip
This command is for users who wish to see child hotkeys among different neurons (hotkeys) on the network.
:::

**Usage**:

```console
$ btcli stake child get [OPTIONS]
```

**Options**:

- `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of wallet
- `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of wallet
- `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Filepath of root of wallets
- `--network, --subtensor.network TEXT`: The subtensor network to connect to. Default: finney.
- `--chain, --subtensor.chain_endpoint TEXT`: The subtensor chain endpoint to connect to.
- `--netuid INTEGER`: The netuid (network unique identifier) of the subnet within the root network, (e.g. 1)
- `--all-netuids, --all, --allnetuids`: When set, gets children from all subnets on the bittensor network.
- `--quiet`: Do not output to the console besides critical information.
- `--verbose`: Enable verbose output.
- `--help`: Show this message and exit.

#### btcli stake child revoke

Remove all children hotkeys on a specified subnet on the Bittensor network.

This command is used to remove delegated authority from all child hotkeys, removing their position and influence
on the subnet.

Users need to specify the parent hotkey and the subnet ID (netuid).
The user needs to have sufficient authority to make this call.

The command prompts for confirmation before executing the revoke_children operation.

#### Example

```bash
btcli stake child revoke --hotkey <parent_hotkey> --netuid 1
```

:::tip
This command is critical for users who wish to remove children hotkeys on the network. It allows for a complete removal of delegated authority to enhance network participation and influence.
:::

**Usage**:

```console
$ btcli stake child revoke [OPTIONS]
```

**Options**:

- `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of wallet
- `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of wallet
- `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Filepath of root of wallets
- `--network, --subtensor.network TEXT`: The subtensor network to connect to. Default: finney.
- `--chain, --subtensor.chain_endpoint TEXT`: The subtensor chain endpoint to connect to.
- `--netuid INTEGER`: The netuid (network unique identifier) of the subnet within the root network, (e.g. 1)
- `--all-netuids, --all, --allnetuids`: When this flag is used it sets children on all subnets on the bittensor network.
- `--wait-for-inclusion / --no-wait-for-inclusion`: If set, waits until the transaction is included in a block. [default: wait-for-inclusion]
- `--wait-for-finalization / --no-wait-for-finalization`: If set, waits until the transaction is finalized on the blockchain. [default: wait-for-finalization]
- `--quiet`: Do not output to the console besides critical information.
- `--verbose`: Enable verbose output.
- `--help`: Show this message and exit.

#### btcli stake child set

Add children hotkeys on a specified subnet on the Bittensor network.

This command is used to delegate authority to different hotkeys, securing their position and influence on the
subnet.

Users can specify the amount or 'proportion' to delegate to child hotkeys (`SS58` address),
the user needs to have sufficient authority to make this call, and the sum of proportions cannot be greater
than 1.

The command prompts for confirmation before executing the set_children operation.

#### Example

```bash
btcli stake child set --children <child_ss58> --children <child_ss58> --hotkey <parent_hotkey> --netuid 1 --prop 0.3 --prop 0.3
```

:::tip
This command is critical for users who wish to delegate children hotkeys among different neurons (hotkeys) on the network. It allows for a strategic allocation of authority to enhance network participation and influence.
:::

**Usage**:

```console
$ btcli stake child set [OPTIONS]
```

**Options**:

- `-c, --children TEXT`: Enter children hotkeys (ss58).
- `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of wallet.
- `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of wallet.
- `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Filepath of root of wallets.
- `--network, --subtensor.network TEXT`: The subtensor network to connect to. Default: finney.
- `--chain, --subtensor.chain_endpoint TEXT`: The subtensor chain endpoint to connect to.
- `--netuid INTEGER`: The netuid (network unique identifier) of the subnet within the root network, (e.g. 1).
- `--all-netuids, --all, --allnetuids`: When this flag is used it sets children on all subnets on the bittensor network.
- `-p, --proportions, --prop FLOAT`: Enter proportions for children as (sum less than 1).
- `--wait-for-inclusion / --no-wait-for-inclusion`: If set, waits until the transaction is included in a block. [default: wait-for-inclusion].
- `--wait-for-finalization / --no-wait-for-finalization`: If set, waits until the transaction is finalized on the blockchain. [default: wait-for-finalization].
- `--quiet`: Do not output to the console besides critical information.
- `--verbose`: Enable verbose output.
- `--help`: Show this message and exit.

#### btcli stake child take

Get and set your childkey take on a specified subnet on the Bittensor network.

This command is used to set the take on your child hotkeys with limits between 0 - 18%.

Users need to specify their child hotkey and the subnet ID (netuid).

The command prompts for confirmation before setting the childkey take.

#### Examples

```bash
btcli stake child take --hotkey <child_hotkey> --netuid 1
```

````bash
btcli stake child take --hotkey <child_hotkey> --take 0.12 --netuid 1
````

:::tip
This command is critical for users who wish to modify their child hotkey take on the network.
:::

**Usage**:

```console
$ btcli stake child take [OPTIONS]
```

**Options**:

- `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of wallet.
- `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of wallet.
- `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Filepath of root of wallets.
- `--network, --subtensor.network TEXT`: The subtensor network to connect to. Default: finney.
- `--chain, --subtensor.chain_endpoint TEXT`: The subtensor chain endpoint to connect to.
- `--netuid INTEGER`: The netuid (network unique identifier) of the subnet within the root network, (e.g. 1).
- `--all-netuids, --all, --allnetuids`: When this flag is used it sets children on all subnets on the bittensor network.
- `-t, --take FLOAT`: Enter take for your child hotkey.
- `--wait-for-inclusion / --no-wait-for-inclusion`: If set, waits until the transaction is included in a block. [default: wait-for-inclusion].
- `--wait-for-finalization / --no-wait-for-finalization`: If set, waits until the transaction is finalized on the blockchain. [default: wait-for-finalization].
- `--prompt / --no-prompt`: Enable or disable interactive prompts. [default: prompt].
- `--quiet`: Do not output to the console besides critical information.
- `--verbose`: Enable verbose output.
- `--help`: Show this message and exit.

### btcli stake remove

Unstake TAO tokens from one or more hotkeys and transfer them back to the user's coldkey.

This command is used to withdraw tokens previously staked to different hotkeys.

Users can specify the amount to unstake, the hotkeys to unstake from (either by name or `SS58` address), and
whether to unstake from all hotkeys. The command checks for sufficient stake and prompts for confirmation before
proceeding with the unstaking process.

The command prompts for confirmation before executing the unstaking operation.

#### Example

```bash
btcli stake remove --amount 100 -in hk1,hk2
```

:::tip
This command is important for users who wish to reallocate their stakes or withdraw them from the network. It allows for flexible management of token stakes across different neurons (hotkeys) on the network.
:::

**Usage**:

```console
$ btcli stake remove [OPTIONS]
```

**Options**:

- `--network, --subtensor.network TEXT`: The subtensor network to connect to. Default: finney.
- `--chain, --subtensor.chain_endpoint TEXT`: The subtensor chain endpoint to connect to.
- `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of wallet
- `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Filepath of root of wallets.
- `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of wallet
- `--unstake-all, --all`: When set, unstakes all staked tokens from the specified hotkeys.
- `-a, --amount FLOAT`: The amount of TAO tokens to unstake. [default: 0.0]
- `--hotkey-ss58-address TEXT`: The SS58 address of the hotkey to unstake from.
- `--max-stake, --max FLOAT`: Sets the maximum amount of TAO to remain staked in each hotkey. [default: 0.0]
- `-in, --include-hotkeys, --hotkey-ss58-address TEXT`: Specifies hotkeys by name or ss58 address to stake to. For example, `-in hk1,hk2``.
- `-ex, --exclude-hotkeys, --hotkey-ss58-address TEXT`: Specifies hotkeys by name or ss58 address to not to stake to (use this option only with `--all-hotkeys`) i.e. `--all-hotkeys -ex hk3,hk4`
- `--all-hotkeys / --no-all-hotkeys`: When set, unstakes from all hotkeys associated with the wallet. Do not use if specifying hotkeys in `--include-hotkeys`. [default: no-all-hotkeys]
- `--prompt / --no-prompt`: Enable or disable interactive prompts. [default: prompt].
- `--quiet`: Do not output to the console besides critical information.
- `--verbose`: Enable verbose output.
- `--help`: Show this message and exit.

### btcli stake show

List all stake accounts associated with a user's wallet on the Bittensor network.

This command provides a comprehensive view of the stakes associated with both hotkeys and delegates linked to
the user's coldkey.

The command lists all stake accounts for a specified wallet or all wallets in the user's configuration
directory. It displays the coldkey, balance, account details (hotkey/delegate name), stake amount, and the rate
of return.

The command compiles a table showing:

- Coldkey: The coldkey associated with the wallet.

- Balance: The balance of the coldkey.

- Account: The name of the hotkey or delegate.

- Stake: The amount of TAO staked to the hotkey or delegate.

- Rate: The rate of return on the stake, typically shown in TAO per day.

#### Example

```bash
btcli stake show --all
```

:::tip
This command is essential for users who wish to monitor their stake distribution and returns across various accounts on the Bittensor network. It provides a clear and detailed overview of the user's staking activities.
:::

**Usage**:

```console
$ btcli stake show [OPTIONS]
```

**Options**:

- `-a, --all, --all-wallets`: When set, the command checks all coldkey wallets instead of just the specified wallet.
- `--network, --subtensor.network TEXT`: The subtensor network to connect to. Default: finney.
- `--chain, --subtensor.chain_endpoint TEXT`: The subtensor chain endpoint to connect to.
- `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of wallet
- `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of wallet.
- `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Filepath of root of wallets.
- `--reuse-last`: Reuse the metagraph data you last retrieved. Only use this if you have already retrieved metagraphdata.
- `--html`: Display the table as HTML in the browser, rather than in the Terminal.
- `--quiet`: Do not output to the console besides critical information.
- `--verbose`: Enable verbose output.
- `--help`: Show this message and exit.

---

## Subnets

## btcli subnet

**Usage**:

```console
$ btcli subnet [OPTIONS] COMMAND [ARGS]...
```

**Options**:

- `--help`: Show this message and exit.

**Commands**:

- `create`: Register a new subnet.
- `hyperparameters`: Retrieve hyperparameters of a specific subnet.
- `list`: List all subnets and their detailed information.
- `lock-cost` or `lock_cost`: View the locking cost required for creating a subnet.
- `metagraph`: Retrieve and display the metagraph of a subnet.
- `pow-register` or `pow_register`: Register a neuron on the Bittensor network using Proof of Work (PoW).
- `register`: Register a neuron on the Bittensor network by recycling some TAO (the network's native token).

### btcli subnet create

Register a new subnet on the Bittensor network.

This command facilitates the creation and registration of a subnet, which involves interaction with the
user's wallet and the Bittensor subtensor. It ensures that the user has the necessary credentials and
configurations to successfully register a new subnet.

Upon invocation, the command performs several key steps to register a subnet:

1. It copies the user's current configuration settings.

2. It accesses the user's wallet using the provided configuration.

3. It initializes the Bittensor subtensor object with the user's configuration.

4. It then calls the `create` function of the subtensor object, passing the user's wallet and a prompt setting
   based on the user's configuration.

If the user's configuration does not specify a wallet name and `no_prompt` is not set, the command will prompt
the user to enter a wallet name. This name is then used in the registration process.

The command structure includes:

- Copying the user's configuration.

- Accessing and preparing the user's wallet.

- Initializing the Bittensor subtensor.

- Registering the subnet with the necessary credentials.

#### Example

```bash
btcli subnets create
```

:::tip
This command is intended for advanced users of the Bittensor network who wish to contribute by adding new subnets. It requires a clear understanding of the network's functioning and the roles of subnets. Users should ensure that they have secured their wallet and are aware of the implications of adding a new subnet to the Bittensor ecosystem.
:::

**Usage**:

```console
$ btcli subnet create [OPTIONS]
```

**Options**:

- `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of wallet
- `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Filepath of root of wallets
- `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of wallet
- `--network, --subtensor.network TEXT`: The subtensor network to connect to. Default: finney.
- `--chain, --subtensor.chain_endpoint TEXT`: The subtensor chain endpoint to connect to.
- `--prompt / --no-prompt`: Enable or disable interactive prompts. [default: prompt]
- `--quiet`: Do not output to the console besides critical information.
- `--verbose`: Enable verbose output.
- `--help`: Show this message and exit.

### btcli subnet hyperparameters

Retrieve hyperparameters of a specific subnet.

This command is used for both `sudo get` and `subnets hyperparameters`.

The command connects to the Bittensor network, queries the specified subnet, and returns a detailed list
of all its hyperparameters. This includes crucial operational parameters that determine the subnet's
performance and interaction within the network.

#### Example

```bash
btcli sudo get --netuid 1
```

:::tip
Users need to provide the `netuid` of the subnet whose hyperparameters they wish to view. This command is designed for informational purposes and does not alter any network settings or configurations.
:::

**Usage**:

```console
$ btcli subnet hyperparameters [OPTIONS]
```

**Options**:

- `--network, --subtensor.network TEXT`: The subtensor network to connect to. Default: finney.
- `--chain, --subtensor.chain_endpoint TEXT`: The subtensor chain endpoint to connect to.
- `--netuid INTEGER`: The netuid (network unique identifier) of the subnet within the root network, (e.g. 1)
- `--quiet`: Do not output to the console besides critical information.
- `--verbose`: Enable verbose output.
- `--help`: Show this message and exit.

### btcli subnet list

List all subnets and their detailed information.

This command is designed to provide users with comprehensive information about each subnet within the
network, including its unique identifier (netuid), the number of neurons, maximum neuron capacity,
emission rate, tempo, recycle register cost (burn), proof of work (PoW) difficulty, and the name or
SS58 address of the subnet owner.

Upon invocation, the command performs the following actions:

1. It initializes the Bittensor subtensor object with the user's configuration.

2. It retrieves a list of all subnets in the network along with their detailed information.

3. The command compiles this data into a table format, displaying key information about each subnet.

In addition to the basic subnet details, the command also fetches delegate information to provide the
name of the subnet owner where available. If the owner's name is not available, the owner's `SS58`
address is displayed.

The command structure includes:

- Initializing the Bittensor subtensor and retrieving subnet information.

- Calculating the total number of neurons across all subnets.

- Constructing a table that includes columns for `NETUID`, `N` (current neurons), `MAX_N`
  (maximum neurons), `EMISSION`, `TEMPO`, `BURN`, `POW` (proof of work difficulty), and
  `SUDO` (owner's name or `SS58` address).

- Displaying the table with a footer that summarizes the total number of subnets and neurons.

#### Example

```bash
btcli subnets list
```

:::tip
This command is particularly useful for users seeking an overview of the Bittensor network's structure and the distribution of its resources and ownership information for each subnet.
:::

**Usage**:

```console
$ btcli subnet list [OPTIONS]
```

**Options**:

- `--network, --subtensor.network TEXT`: The subtensor network to connect to. Default: finney.
- `--chain, --subtensor.chain_endpoint TEXT`: The subtensor chain endpoint to connect to.
- `--reuse-last`: Reuse the metagraph data you last retrieved. Only use this if you have already retrieved metagraphdata
- `--html`: Display the table as HTML in the browser, rather than in the Terminal.
- `--quiet`: Do not output to the console besides critical information.
- `--verbose`: Enable verbose output.
- `--help`: Show this message and exit.

### btcli subnet lock-cost

View the locking cost required for creating a new subnet.

This command is designed to provide users with the current cost of registering a new subnet, which is a
critical piece of information for anyone considering expanding the network's infrastructure.

The current implementation anneals the cost of creating a subnet over a period of two days. If the cost is
unappealing currently, check back in a day or two to see if it has reached a more amenable level.

Upon invocation, the command performs the following operations:

1. It copies the user's current Bittensor configuration.

2. It initializes the Bittensor subtensor object with this configuration.

3. It then retrieves the subnet lock cost using the `get_subnet_burn_cost()` method from the subtensor object.

4. The cost is displayed to the user in a readable format, indicating the amount of TAO required to lock for
   registering a new subnet.

In case of any errors during the process (e.g., network issues, configuration problems), the command will catch
these exceptions and inform the user that it failed to retrieve the lock cost, along with the specific error
encountered.

The command structure includes:

- Copying and using the user's configuration for Bittensor.

- Retrieving the current subnet lock cost from the Bittensor network.

- Displaying the cost in a user-friendly manner.

#### Example

```bash
btcli subnets lock_cost
```

:::tip
This command is particularly useful for users who are planning to contribute to the Bittensor network by adding new subnets. Understanding the lock cost is essential for these users to make informed decisions about their potential contributions and investments in the network.
:::

**Usage**:

```console
$ btcli subnet lock-cost [OPTIONS]
```

**Options**:

- `--network, --subtensor.network TEXT`: The subtensor network to connect to. Default: finney.
- `--chain, --subtensor.chain_endpoint TEXT`: The subtensor chain endpoint to connect to.
- `--quiet`: Do not output to the console besides critical information.
- `--verbose`: Enable verbose output.
- `--help`: Show this message and exit.

### btcli subnet metagraph

Retrieve and display the metagraph of a subnet.

This metagraph contains detailed information about all the neurons (nodes)
participating in the network, including their stakes, trust scores, and more.

The table displayed includes the following columns for each neuron:

- **UID**: Unique identifier of the neuron.

- **STAKE(τ)**: Total stake of the neuron in TAO (τ).

- **RANK**: Rank score of the neuron.

- **TRUST**: Trust score assigned to the neuron by other neurons.

- **CONSENSUS**: Consensus score of the neuron.

- **INCENTIVE**: Incentive score representing the neuron's incentive alignment.

- **DIVIDENDS**: Dividends earned by the neuron.

- **EMISSION(p)**: Emission in Rho (p) received by the neuron.

- **VTRUST**: Validator trust score indicating the network's trust in the neuron as a validator.

- **VAL**: Validator status of the neuron.

- **UPDATED**: Number of blocks since the neuron's last update.

- **ACTIVE**: Activity status of the neuron.

- **AXON**: Network endpoint information of the neuron.

- **HOTKEY**: Partial hotkey (public key) of the neuron.

- **COLDKEY**: Partial coldkey (public key) of the neuron.

The command also prints network-wide statistics such as total stake, issuance, and difficulty.

The user must specify the network UID to query the metagraph. If not specified, the default network UID is used.

#### Examples

```bash
btcli subnet metagraph --netuid 0 # Root network
```

```bash
btcli subnet metagraph --netuid 1 --network test
```

:::tip
This command provides a snapshot of the network's state at the time of calling. It is useful for network analysis and diagnostics. It is intended to be used as part of the Bittensor CLI and not as a standalone function within user code.
:::

**Usage**:

```console
$ btcli subnet metagraph [OPTIONS]
```

**Options**:

- `--netuid INTEGER`: The netuid (network unique identifier) of the subnet within the root network, (e.g. 1). This is ignored when used with `--reuse-last`.
- `--network, --subtensor.network TEXT`: The subtensor network to connect to. Default: finney.
- `--chain, --subtensor.chain_endpoint TEXT`: The subtensor chain endpoint to connect to.
- `--reuse-last`: Reuse the metagraph data you last retrieved. Only use this if you have already retrieved metagraphdata
- `--html`: Display the table as HTML in the browser, rather than in the Terminal.
- `--quiet`: Do not output to the console besides critical information.
- `--verbose`: Enable verbose output.
- `--help`: Show this message and exit.

### btcli subnet pow-register

Register a neuron on the Bittensor network using Proof of Work (PoW).

This method is an alternative registration process that leverages computational work for securing a neuron's
place on the network.

The command starts by verifying the existence of the specified subnet. If the subnet does not exist, it
terminates with an error message. On successful verification, the PoW registration process is initiated, which
requires solving computational puzzles.

The command also supports additional wallet and subtensor arguments, enabling further customization of the
registration process.

#### Example

```bash
btcli pow-register --netuid 1 --num_processes 4 --cuda
```

:::caution
This command is suited for users with adequate computational resources to participate in PoW registration. It requires a sound understanding of the network's operations and PoW mechanics. Users should ensure their systems meet the necessary hardware and software requirements, particularly when opting for CUDA-based GPU acceleration.
:::

This command may be disabled according to the subnet owner's directive. For example, on netuid 1 this is
permanently disabled.

**Usage**:

```console
$ btcli subnet pow-register [OPTIONS]
```

**Options**:

- `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of wallet
- `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Filepath of root of wallets
- `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of wallet
- `--network, --subtensor.network TEXT`: The subtensor network to connect to. Default: finney.
- `--chain, --subtensor.chain_endpoint TEXT`: The subtensor chain endpoint to connect to.
- `--netuid INTEGER`: The netuid (network unique identifier) of the subnet within the root network, (e.g. 1)
- `--processors INTEGER`: Number of processors to use for POW registration.
- `-u, --update-interval INTEGER`: The number of nonces to process before checking for next block during registration [default: 50000]
- `--output-in-place / --no-output-in-place`: Whether to output the registration statistics in-place. [default: output-in-place]
- `-v, --verbose`: Whether to output the registration statistics verbosely.
- `--use-cuda, --cuda / --no-use-cuda, --no-cuda`: Set flag to use CUDA to pow_register. [default: no-use-cuda]
- `-d, --dev-id INTEGER`: Set the CUDA device id(s). Goes by the order of speed. (i.e. 0 is the fastest). [default: 0]
- `-tbp, --threads-per-block INTEGER`: Set the number of Threads Per Block for CUDA. [default: 256]
- `--help`: Show this message and exit.

### btcli subnet register

Register a neuron on the Bittensor network by recycling some TAO (the network's native token) :open_book:.

This command is used to add a new neuron to a specified subnet within the network, contributing to the
decentralization and robustness of Bittensor.

Before registering, the command checks if the specified subnet exists and whether the user's balance is
sufficient to cover the registration cost.

The registration cost is determined by the current recycle amount for the specified subnet. If the balance is
insufficient or the subnet does not exist, the command will exit with an appropriate error message.

If the preconditions are met, and the user confirms the transaction (if `no_prompt` is not set), the command
proceeds to register the neuron by recycling the required amount of TAO.

The command structure includes:

- Verification of subnet existence.
- Checking the user's balance against the current recycle amount for the subnet.
- User confirmation prompt for proceeding with registration.
- Execution of the registration process.

Columns Displayed in the confirmation prompt:

- Balance: The current balance of the user's wallet in TAO.
- Cost to Register: The required amount of TAO needed to register on the specified subnet.

#### Example

```bash
btcli subnets register --netuid 1
```

:::tip
This command is critical for users who wish to contribute a new neuron to the network. It requires careful consideration of the subnet selection and an understanding of the registration costs. Users should ensure their wallet is sufficiently funded before attempting to register a neuron.
:::

**Usage**:

```console
$ btcli subnet register [OPTIONS]
```

**Options**:

- `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of wallet
- `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Filepath of root of wallets
- `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of wallet
- `--chain, --subtensor.chain_endpoint TEXT`: The subtensor chain endpoint to connect to.
- `--network, --subtensor.network TEXT`: The subtensor network to connect to. Default: finney.
- `--netuid INTEGER`: The netuid (network unique identifier) of the subnet within the root network, (e.g. 1)
- `--prompt / --no-prompt`: Enable or disable interactive prompts. [default: prompt]
- `--quiet`: Do not output to the console besides critical information.
- `--verbose`: Enable verbose output.
- `--help`: Show this message and exit.

---

## Sudo

## btcli sudo

**Usage**:

```console
$ btcli sudo [OPTIONS] COMMAND [ARGS]...
```

**Options**:

- `--help`: Show this message and exit.

**Commands**:

- `get`: Retrieve hyperparameters of a specific...
- `set`: Used to set hyperparameters for a specific...

### btcli sudo get

Retrieve hyperparameters of a specific subnet.

This command is used for both `sudo get` and `subnets hyperparameters`.

The command connects to the Bittensor network, queries the specified subnet, and returns a detailed list
of all its hyperparameters. This includes crucial operational parameters that determine the subnet's
performance and interaction within the network.

#### Example

```bash
btcli sudo get --netuid 1
```

:::tip
Users need to provide the `netuid` of the subnet whose hyperparameters they wish to view. This command is designed for informational purposes and does not alter any network settings or configurations.
:::

**Usage**:

```console
$ btcli sudo get [OPTIONS]
```

**Options**:

- `--network, --subtensor.network TEXT`: The subtensor network to connect to. Default: finney.
- `--chain, --subtensor.chain_endpoint TEXT`: The subtensor chain endpoint to connect to.
- `--netuid INTEGER`: The netuid (network unique identifier) of the subnet within the root network, (e.g. 1)
- `--quiet`: Do not output to the console besides critical information.
- `--verbose`: Enable verbose output.
- `--help`: Show this message and exit.

### btcli sudo set

Used to set hyperparameters for a specific subnet on the Bittensor network.

This command allows subnet owners to modify various hyperparameters of theirs subnet, such as its tempo,
emission rates, and other network-specific settings.

The command first prompts the user to enter the hyperparameter they wish to change and its new value.
It then uses the user's wallet and configuration settings to authenticate and send the hyperparameter update
to the specified subnet.

#### Example

```bash
btcli sudo set --netuid 1 --param 'tempo' --value '0.5'
```

:::tip
This command requires the user to specify the subnet identifier (`netuid`) and both the hyperparameter and its new value. It is intended for advanced users who are familiar with the network's functioning and the impact of changing these parameters.
:::

**Usage**:

```console
$ btcli sudo set [OPTIONS]
```

**Options**:

- `--network, --subtensor.network TEXT`: The subtensor network to connect to. Default: finney.
- `--chain, --subtensor.chain_endpoint TEXT`: The subtensor chain endpoint to connect to.
- `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of wallet
- `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Filepath of root of wallets
- `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of wallet
- `--netuid INTEGER`: The netuid (network unique identifier) of the subnet within the root network, (e.g. 1)
- `--param, --parameter TEXT`: The subnet hyperparameter to set
- `--value TEXT`: The subnet hyperparameter value to set.
- `--quiet`: Do not output to the console besides critical information.
- `--verbose`: Enable verbose output.
- `--help`: Show this message and exit.

---

## Wallet

## btcli wallet

**Usage**:

```console
$ btcli wallet [OPTIONS] COMMAND [ARGS]...
```

**Options**:

- `--help`: Show this message and exit.

**Commands**:

- `balance`: Check the balance of the wallet on the.
- `create`: Generate both a new coldkey and hotkey.
- `faucet`: Obtain test TAO tokens by performing Proof of Work.
- `get-identity` or `get_identity`: Retrieves and displays the identity of a user's coldkey or hotkey.
- `history`: Fetch the latest transfers of the provided wallet.
- `inspect`: Detailed report of a user's wallet pairs (coldkey, hotkey).
- `list`: Displays all wallets and their respective hotkeys present in the user's Bittensor configuration directory.
- `new-coldkey` or `new_coldkey`: Create a new coldkey under a wallet.
- `new-hotkey` or `new_hotkey`: Create a new hotkey under a wallet.
- `overview`: Presents a detailed overview of the user's registered accounts.
- `regen-coldkey` or `regen_coldkey`: Regenerate a coldkey for a wallet.
- `regen-coldkeypub` or `regen_coldkeypub`: Regenerate the public part of a coldkey.
- `regen-hotkey` or `regen_hotkey`: Regenerates a hotkey for a wallet.
- `set-identity` or `set_identity`: Allows for the creation or update of a delegate's on-chain identity on the Bittensor network.
- `sign`: Allows users to sign a message with the provided wallet or wallet hotkey.
- `swap-hotkey` or `swap_hotkey`: Swap hotkeys for a neuron on the network.
- `transfer`: Transfer TAO tokens from one account to another on the Bittensor network.

### btcli wallet balance

Check the balance of the wallet on the Bittensor network.
This provides a detailed view of the wallet's coldkey balances, including free and staked balances.

The command lists the balances of all wallets in the user's configuration directory, showing the
wallet name, coldkey address, and the respective free and staked balances.

#### Examples

- To display the balance of a single wallet, use the command with the `--wallet-name` argument to specify
  the wallet name:

```bash
btcli w balance --wallet-name <my_wallet>
```

```bash
btcli w balance
```

- To display the balances of all wallets, use the `--all` argument:

```bash
btcli w balance --all
```

**Usage**:

```console
$ btcli wallet balance [OPTIONS]
```

**Options**:

- `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of wallet
- `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Filepath of root of wallets
- `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of wallet
- `-a, --all`: Whether to display the balances for all wallets.
- `--network, --subtensor.network TEXT`: The subtensor network to connect to. Default: finney.
- `--chain, --subtensor.chain_endpoint TEXT`: The subtensor chain endpoint to connect to.
- `--quiet`: Do not output to the console besides critical information.
- `--verbose`: Enable verbose output.
- `--help`: Show this message and exit.

### btcli wallet create

Generate both a new coldkey and hotkey under a specified wallet.

This command is a comprehensive utility for creating a complete wallet setup with both cold
and hotkeys.

The command facilitates the creation of a new coldkey and hotkey with an optional word count for the
mnemonics. It supports password protection for the coldkey and allows overwriting of existing keys.

#### Example

```bash
btcli wallet create --n-words 21
```

:::tip
This command is ideal for new users setting up their wallet for the first time or for those who wish to completely renew their wallet keys. It ensures a fresh start with new keys for secure and effective participation in the network.
:::

**Usage**:

```console
$ btcli wallet create [OPTIONS]
```

**Options**:

- `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of wallet
- `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Filepath of root of wallets
- `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of wallet
- `--n-words INTEGER`
- `--use-password / --no-use-password`: Set true to protect the generated bittensor key with a password. [default: use-password]
- `--quiet`: Do not output to the console besides critical information.
- `--verbose`: Enable verbose output.
- `--help`: Show this message and exit.

### btcli wallet faucet

Obtain test TAO tokens by performing Proof of Work (PoW).

This command is particularly useful for users who need test tokens for operations on a local chain.

:::warning Alert
This command is disabled on finney (mainnet) and testnet.
:::

The command uses the PoW mechanism to validate the user's effort and rewards them with test TAO tokens. It is
typically used in local chain environments where real value transactions are not necessary.

#### Example

```bash
btcli wallet faucet --faucet.num_processes 4 --faucet.cuda.use_cuda
```

:::tip
This command is meant for use in local environments where users can experiment with the network without using real TAO tokens. It's important for users to have the necessary hardware setup, especially when opting for CUDA-based GPU calculations. It is currently disabled on testnet and finney. You must use this on a local chain.
:::

**Usage**:

```console
$ btcli wallet faucet [OPTIONS]
```

**Options**:

- `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of wallet.
- `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Filepath of root of wallets.
- `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of wallet.
- `--network, --subtensor.network TEXT`: The subtensor network to connect to. Default: finney.
- `--chain, --subtensor.chain_endpoint TEXT`: The subtensor chain endpoint to connect to.
- `--processors INTEGER`: Number of processors to use for POW registration.
- `-u, --update-interval INTEGER`: The number of nonces to process before checking for next block during registration [default: 50000].
- `--output-in-place / --no-output-in-place`: Whether to output the registration statistics in-place. [default: output-in-place].
- `-v, --verbose`: Whether to output the registration statistics verbosely.
- `--use-cuda, --cuda / --no-use-cuda, --no-cuda`: Set flag to use CUDA to pow_register. [default: no-use-cuda].
- `-d, --dev-id INTEGER`: Set the CUDA device id(s). Goes by the order of speed. (i.e. 0 is the fastest). [default: 0].
- `-tbp, --threads-per-block INTEGER`: Set the number of Threads Per Block for CUDA. [default: 256].
- `--max-successes INTEGER`: Set the maximum number of times to successfully run the faucet for this command. [default: 3].
- `--help`: Show this message and exit.

### btcli wallet get-identity

Retrieves and displays the identity details of a user's coldkey or hotkey.

The command performs the following actions:

- Connects to the subtensor network and retrieves the identity information.

- Displays the information in a structured table format.

The displayed table includes:

- _Address_: The `ss58` address of the queried key.

- _Item_: Various attributes of the identity such as stake, rank, and trust.

- _Value_: The corresponding values of the attributes.

The user must provide an ss58 address as input to the command. If the address is not
provided in the configuration, the user is prompted to enter one.

#### Example

```bash
btcli wallet get-identity --key <ss58_address>
```

:::tip
This function is designed for CLI use and should be executed in a terminal. It is primarily used for informational purposes and has no side effects on the network state.
:::

**Usage**:

```console
$ btcli wallet get-identity [OPTIONS]
```

**Options**:

- `-k, --key, --ss58 TEXT`: The coldkey or hotkey ss58 address to query.
- `--network, --subtensor.network TEXT`: The subtensor network to connect to. Default: finney.
- `--chain, --subtensor.chain_endpoint TEXT`: The subtensor chain endpoint to connect to.
- `--quiet`: Do not output to the console besides critical information.
- `--verbose`: Enable verbose output.
- `--help`: Show this message and exit.

### btcli wallet history

Fetch the latest transfers of the provided wallet on the Bittensor network.
This provides a detailed view of the transfers carried out on the wallet.

The command lists the latest transfers of the provided wallet, showing the 'From', 'To', 'Amount',
'Extrinsic ID' and 'Block Number'.

#### Example

```bash
btcli wallet history
```

:::tip
This command is essential for users to monitor their financial status on the Bittensor network. It helps in fetching info on all the transfers so that user can easily tally and cross-check the transactions.
:::

**Usage**:

```console
$ btcli wallet history [OPTIONS]
```

**Options**:

- `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of wallet.
- `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Filepath of root of wallets.
- `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of wallet.
- `--quiet`: Do not output to the console besides critical information.
- `--verbose`: Enable verbose output.
- `--help`: Show this message and exit.

### btcli wallet inspect

Detailed report of a user's wallet pairs (coldkey, hotkey) on the Bittensor network.

This report includes balance and staking information for both the coldkey and hotkey associated with the wallet.

The command gathers data on:

- Coldkey balance and delegated stakes.
- Hotkey stake and emissions per neuron on the network.
- Delegate names and details fetched from the network.

The resulting table includes columns for:

- _Coldkey_: The coldkey associated with the user's wallet.

- _Balance_: The balance of the coldkey.

- _Delegate_: The name of the delegate to which the coldkey has staked funds.

- _Stake_: The amount of stake held by both the coldkey and hotkey.

- _Emission_: The emission or rewards earned from staking.

- _Netuid_: The network unique identifier of the subnet where the hotkey is active.

- _Hotkey_: The hotkey associated with the neuron on the network.

This command can be used to inspect a single wallet or all wallets located within a
specified path. It is useful for a comprehensive overview of a user's participation
and performance in the Bittensor network.

#### Examples

```bash
btcli wallet inspect
```

```bash
btcli wallet inspect --all -n 1,2,3
```

:::tip
The `inspect` command is for displaying information only and does not perform any transactions or state changes on the Bittensor network. It is intended to be used as part of the Bittensor CLI and not as a standalone function within user code.
:::

**Usage**:

```console
$ btcli wallet inspect [OPTIONS]
```

**Options**:

- `-a, --all, --all-wallets`: Inspect all wallets within specified path.
- `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of wallet.
- `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Filepath of root of wallets.
- `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of wallet.
- `--network, --subtensor.network TEXT`: The subtensor network to connect to. Default: finney.
- `--chain, --subtensor.chain_endpoint TEXT`: The subtensor chain endpoint to connect to.
- `-n, --netuids INTEGER`: Set the netuid(s) to filter by (e.g. `0 1 2`).
- `--quiet`: Do not output to the console besides critical information.
- `--verbose`: Enable verbose output.
- `--help`: Show this message and exit.

### btcli wallet list

Displays all wallets and their respective hotkeys present in the user's Bittensor configuration directory.

The command organizes the information in a tree structure, displaying each
wallet along with the `ss58` addresses for the coldkey public key and any hotkeys associated with it.
The output is presented in a hierarchical tree format, with each wallet as a root node,
and any associated hotkeys as child nodes. The `ss58` address is displayed for each
coldkey and hotkey that is not encrypted and exists on the device.

Upon invocation, the command scans the wallet directory and prints a list of all wallets, indicating whether the
public keys are available (`?` denotes unavailable or encrypted keys).

#### Example

```bash
btcli wallet list --wallet-path ~/.bittensor
```

:::tip
This command is read-only and does not modify the filesystem or the network state. It is intended for use within the Bittensor CLI to provide a quick overview of the user's wallets.
:::

**Usage**:

```console
$ btcli wallet list [OPTIONS]
```

**Options**:

- `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Filepath of root of wallets.
- `--quiet`: Do not output to the console besides critical information.
- `--verbose`: Enable verbose output.
- `--help`: Show this message and exit.

### btcli wallet new-coldkey

Create a new coldkey under a wallet. A coldkey, is essential for holding balances and performing high-value transactions.

The command creates a new coldkey with an optional word count for the mnemonic and supports password
protection. It also allows overwriting an existing coldkey.

#### Example

```bash
btcli wallet new-coldkey --n-words 15
```

:::tip
This command is crucial for users who need to create a new coldkey for enhanced security or as part of setting up a new wallet. It's a foundational step in establishing a secure presence on the Bittensor network.
:::

**Usage**:

```console
$ btcli wallet new-coldkey [OPTIONS]
```

**Options**:

- `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of wallet.
- `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Filepath of root of wallets.
- `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of wallet.
- `--n-words INTEGER`.
- `--use-password / --no-use-password`: Set true to protect the generated bittensor key with a password. [default: use-password].
- `--quiet`: Do not output to the console besides critical information.
- `--verbose`: Enable verbose output.
- `--help`: Show this message and exit.

### btcli wallet new-hotkey

Create a new hotkey under a wallet.

This command is used to generate a new hotkey for managing a neuron or participating in the network,
with an optional word count for the mnemonic and supports password protection. It also allows overwriting an
existing hotkey.

#### Example

```bash
btcli wallet new-hotkey --n-words 24
```

:::tip
This command is useful for users who wish to create additional hotkeys for different purposes, such as running multiple miners or separating operational roles within the network.
:::

**Usage**:

```console
$ btcli wallet new-hotkey [OPTIONS]
```

**Options**:

- `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of wallet.
- `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Filepath of root of wallets.
- `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of wallet.
- `--n-words INTEGER`.
- `--use-password / --no-use-password`: Set true to protect the generated bittensor key with a password. [default: no-use-password].
- `--quiet`: Do not output to the console besides critical information.
- `--verbose`: Enable verbose output.
- `--help`: Show this message and exit.

### btcli wallet overview

Presents a detailed overview of the user's registered accounts on the Bittensor network.

This command compiles and displays comprehensive information about each neuron associated with the user's
wallets, including both hotkeys and coldkeys. It is especially useful for users managing multiple accounts or
seeking a summary of their network activities and stake distributions.

The command offers various options to customize the output. Users can filter the displayed data by specific
netuids, sort by different criteria, and choose to include all wallets in the user's configuration directory.
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

- EMISSION(p): Emission received by the neuron, in Rho.

- VTRUST: Validator trust score of the neuron.

- VPERMIT: Indicates if the neuron has a validator permit.

- UPDATED: Time since last update.

- AXON: IP address and port of the neuron.

- HOTKEY_SS58: Human-readable representation of the hotkey.

#### Examples

```bash
btcli wallet overview
```

```bash
btcli wallet overview --all --sort-by stake --sort-order descending
```

```bash
btcli wallet overview -in hk1,hk2 --sort-by stake
```

:::tip
This command is read-only and does not modify the network state or account configurations. It provides a quick and comprehensive view of the user's network presence, making it ideal for monitoring account status, stake distribution, and overall contribution to the Bittensor network.
:::

**Usage**:

```console
$ btcli wallet overview [OPTIONS]
```

**Options**:

- `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of wallet.
- `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Filepath of root of wallets.
- `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of wallet.
- `-a, --all`: View overview for all wallets.
- `--sort-by TEXT`: Sort the hotkeys by the specified column title (e.g. name, uid, axon).
- `--sort-order TEXT`: Sort the hotkeys in the specified ordering. (ascending/asc or descending/desc/reverse).
- `-in, --include-hotkeys TEXT`: Specify the hotkeys to include by name or ss58 address. (e.g. `hk1,hk2,hk3`). If left empty, all hotkeys not excluded will be included.
- `-ex, --exclude-hotkeys TEXT`: Specify the hotkeys to exclude by name or ss58 address. (e.g. `hk1,hk2,hk3`). If left empty, and no hotkeys included in --include-hotkeys, all hotkeys will be included.
- `-n, --netuids INTEGER`: Set the netuid(s) to filter by (e.g. `0,1,2`).
- `--network, --subtensor.network TEXT`: The subtensor network to connect to. Default: finney.
- `--chain, --subtensor.chain_endpoint TEXT`: The subtensor chain endpoint to connect to.
- `--quiet`: Do not output to the console besides critical information.
- `--verbose`: Enable verbose output.
- `--help`: Show this message and exit.

### btcli wallet regen-coldkey

Regenerate a coldkey for a wallet on the Bittensor network.

This command is used to create a new coldkey from an existing mnemonic, seed, or JSON file.

Users can specify a mnemonic, a seed string, or a JSON file path to regenerate a coldkey.
The command supports optional password protection for the generated key and can overwrite an existing coldkey.

#### Example

```bash
btcli wallet regen-coldkey --mnemonic "word1 word2 ... word12"
```

:::tip
This command is critical for users who need to regenerate their coldkey, possibly for recovery or security reasons. It should be used with caution to avoid overwriting existing keys unintentionally.
:::

**Usage**:

```console
$ btcli wallet regen-coldkey [OPTIONS]
```

**Options**:

- `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of wallet.
- `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Filepath of root of wallets.
- `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of wallet.
- `--mnemonic TEXT`: Mnemonic used to regen your key i.e. `horse cart dog ...`.
- `--seed TEXT`: Seed hex string used to regen your key i.e. `0x1234...`.
- `-j, --json TEXT`: Path to a json file containing the encrypted key backup. (e.g. from PolkadotJS).
- `--json-password TEXT`: Password to decrypt the json file.
- `--use-password / --no-use-password`: Set true to protect the generated bittensor key with a password. [default: use-password].
- `--quiet`: Do not output to the console besides critical information.
- `--verbose`: Enable verbose output.
- `--help`: Show this message and exit.

### btcli wallet regen-coldkeypub

Regenerate the public part of a coldkey (coldkeypub) for a wallet.

This command is used when a user needs to recreate their coldkeypub from an existing public key or SS58 address.

The command requires either a public key in hexadecimal format or an `SS58` address to regenerate the
coldkeypub. It optionally allows overwriting an existing coldkeypub file.

#### Example

```bash
btcli wallet regen-coldkeypub --ss58_address 5DkQ4...
```

:::tip
This command is particularly useful for users who need to regenerate their coldkeypub, perhaps due to file corruption or loss. It is a recovery-focused utility that ensures continued access to wallet functionalities.
:::

**Usage**:

```console
$ btcli wallet regen-coldkeypub [OPTIONS]
```

**Options**:

- `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of wallet.
- `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Filepath of root of wallets.
- `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of wallet.
- `--public-key-hex TEXT`: The public key in hex format.
- `--ss58-address TEXT`: The SS58 address of the coldkey.
- `--quiet`: Do not output to the console besides critical information.
- `--verbose`: Enable verbose output.
- `--help`: Show this message and exit.

### btcli wallet regen-hotkey

Regenerates a hotkey for a wallet.

Similar to regenerating a coldkey, this command creates a new hotkey from a mnemonic, seed, or JSON file.

Users can provide a mnemonic, seed string, or a JSON file to regenerate the hotkey.
The command supports optional password protection and can overwrite an existing hotkey.

#### Example

```bash
 btcli wallet regen_hotkey --seed 0x1234...
```

:::tip
This command is essential for users who need to regenerate their hotkey, possibly for security upgrades or key recovery. It should be used cautiously to avoid accidental overwrites of existing keys.
:::

**Usage**:

```console
$ btcli wallet regen-hotkey [OPTIONS]
```

**Options**:

- `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of wallet.
- `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Filepath of root of wallets.
- `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of wallet.
- `--mnemonic TEXT`: Mnemonic used to regen your key i.e. `horse cart dog ...`
- `--seed TEXT`: Seed hex string used to regen your key i.e. `0x1234...`
- `-j, --json TEXT`: Path to a json file containing the encrypted key backup. (e.g. from PolkadotJS).
- `--json-password TEXT`: Password to decrypt the json file.
- `--use-password / --no-use-password`: Set true to protect the generated bittensor key with a password. [default: no-use-password].
- `--quiet`: Do not output to the console besides critical information.
- `--verbose`: Enable verbose output.
- `--help`: Show this message and exit.

### btcli wallet set-identity

Allows for the creation or update of a delegate's on-chain identity on the Bittensor network.

This identity includes various attributes such as display name, legal name, web URL, PGP fingerprint, and
contact information, among others.

The command prompts the user for the different identity attributes and validates the
input size for each attribute. It provides an option to update an existing validator
hotkey identity. If the user consents to the transaction cost, the identity is updated
on the blockchain.

Each field has a maximum size of 64 bytes. The PGP fingerprint field is an exception
and has a maximum size of 20 bytes. The user is prompted to enter the PGP fingerprint
as a hex string, which is then converted to bytes. The user is also prompted to enter
the coldkey or hotkey `ss58` address for the identity to be updated. If the user does
not have a hotkey, the coldkey address is used by default.

If setting a validator identity, the hotkey will be used by default. If the user is
setting an identity for a subnet, the coldkey will be used by default.

The user should call this command from the command line and follow the interactive
prompts to enter or update the identity information. The command will display the
updated identity details in a table format upon successful execution.

#### Example

```bash
 btcli wallet set-identity
```

:::danger Stop, Read before using this command
This command should only be used if the user is willing to incur the 1 TAO transaction fee associated with setting an identity on the blockchain. It is a high-level command that makes changes to the blockchain state and should not be used programmatically as part of other scripts or applications.
:::

**Usage**:

```console
$ btcli wallet set-identity [OPTIONS]
```

**Options**:

- `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of wallet.
- `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Filepath of root of wallets.
- `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of wallet.
- `--network, --subtensor.network TEXT`: The subtensor network to connect to. Default: finney.
- `--chain, --subtensor.chain_endpoint TEXT`: The subtensor chain endpoint to connect to.
- `--display-name, --display TEXT`: The display name for the identity.
- `--legal-name, --legal TEXT`: The legal name for the identity.
- `--web-url, --web TEXT`: The web url for the identity.
- `--riot-handle, --riot TEXT`: The riot handle for the identity.
- `--email TEXT`: The email address for the identity.
- `--pgp-fingerprint, --pgp TEXT`: The pgp fingerprint for the identity.
- `--image-url, --image TEXT`: The image url for the identity.
- `-i, --info TEXT`: The info for the identity.
- `-x, -𝕏, --twitter-url, --twitter TEXT`: The 𝕏 (Twitter) url for the identity.
- `--validator-id / --no-validator-id`: Are you updating a validator hotkey identity? [default: validator-id]
- `--quiet`: Do not output to the console besides critical information.
- `--verbose`: Enable verbose output.
- `--prompt / --no-prompt`: Enable or disable interactive prompts. [default: prompt]
- `--help`: Show this message and exit.

### btcli wallet sign

Allows users to sign a message with the provided wallet or wallet hotkey.

The command generates a signature for a given message using the provided wallet

#### Example

```bash
btcli wallet sign --wallet-name default --message '{"something": "here", "timestamp": 1719908486}'
```

```bash
btcli wallet sign --wallet-name default --wallet-hotkey hotkey --message '{"something": "here", "timestamp": 1719908486}'
```

:::tip
When using `btcli`, `w` is used interchangeably with `wallet`. You may use either based on your preference for brevity or clarity. This command is essential for users to easily prove their ownership over a coldkey or a hotkey.
:::

**Usage**:

```console
$ btcli wallet sign [OPTIONS]
```

**Options**:

- `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Filepath of root of wallets.
- `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of wallet.
- `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of wallet.
- `--use-hotkey`: If specified, the message will be signed by the hotkey.
- `--message TEXT`: The message to encode and sign.
- `--quiet`: Do not output to the console besides critical information.
- `--verbose`: Enable verbose output.
- `--help`: Show this message and exit.

### btcli wallet swap-hotkey

Swap hotkeys for a neuron on the network.

The command is used to swap the hotkey of a wallet for another hotkey on that same wallet.

#### Example usage

```bash
btcli wallet swap-hotkey <my_new_hotkey> --wallet-name <my_wallet> --wallet-hotkey <my_hotkey>
```

**Usage**:

```console
$ btcli wallet swap-hotkey [OPTIONS] [DESTINATION_HOTKEY_NAME]
```

**Arguments**:

- `[DESTINATION_HOTKEY_NAME]`: Destination hotkey name.

**Options**:

- `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of wallet.
- `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Filepath of root of wallets.
- `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of wallet.
- `--network, --subtensor.network TEXT`: The subtensor network to connect to. Default: finney.
- `--chain, --subtensor.chain_endpoint TEXT`: The subtensor chain endpoint to connect to.
- `--quiet`: Do not output to the console besides critical information.
- `--verbose`: Enable verbose output.
- `--prompt / --no-prompt`: Enable or disable interactive prompts. [default: prompt].
- `--help`: Show this message and exit.

### btcli wallet transfer

Transfer TAO tokens from one account to another on the Bittensor network.

This command is used for transactions between different accounts, enabling users to send tokens to other
participants on the network. The command displays the user's current balance before prompting for the amount
to transfer, ensuring transparency and accuracy in the transaction.

The command requires specifying the destination address (public key) and the amount of TAO to be transferred.
It checks for sufficient balance and prompts for confirmation before proceeding with the transaction.

#### Example

```bash
btcli wallet transfer --dest 5Dp8... --amount 100
```

:::tip
This command is crucial for executing token transfers within the Bittensor network. Users should verify the destination address and amount before confirming the transaction to avoid errors or loss of funds.
:::

**Usage**:

```console
$ btcli wallet transfer [OPTIONS]
```

**Options**:

- `-d, --destination, --dest TEXT`: Destination address of the wallet.
- `-a, --amount FLOAT`: Amount (in TAO) to transfer.
- `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of wallet.
- `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Filepath of root of wallets.
- `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of wallet.
- `--network, --subtensor.network TEXT`: The subtensor network to connect to. Default: finney.
- `--chain, --subtensor.chain_endpoint TEXT`: The subtensor chain endpoint to connect to.
- `--prompt / --no-prompt`: Enable or disable interactive prompts. [default: prompt]
- `--quiet`: Do not output to the console besides critical information.
- `--verbose`: Enable verbose output.
- `--all`: Transfer the whole balance.
- `--help`: Show this message and exit.

---

## Weights

## btcli weights

**Usage**:

```console
$ btcli weights [OPTIONS] COMMAND [ARGS]...
```

**Options**:

- `--help`: Show this message and exit.

**Commands**:

- `commit`: Commit weights for specific subnet on the...
- `reveal`: Reveal weights for a specific subnet on...

### btcli weights commit

Commit weights for specific subnet on the Bittensor network.

The command allows committing weights for a specific subnet. Users need to specify the netuid (network unique
identifier), corresponding UIDs, and weights they wish to commit.

### Example

```bash
btcli wt commit --netuid 1 --uids 1,2,3,4 -w 0.1,0.2,0.3,0.4
```

:::tip
This command is used to commit weights for a specific subnet and requires the user to have the necessary permissions.
:::

**Usage**:

```console
$ btcli weights commit [OPTIONS]
```

**Options**:

- `--network, --subtensor.network TEXT`: The subtensor network to connect to. Default: finney.
- `--chain, --subtensor.chain_endpoint TEXT`: The subtensor chain endpoint to connect to.
- `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of wallet.
- `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Filepath of root of wallets.
- `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of wallet.
- `--netuid INTEGER`: The netuid (network unique identifier) of the subnet within the root network, (e.g. 1).
- `-u, --uids INTEGER`: UIDs of interest for the specified netuid, e.g. `-u 1,2,3 ... [default: None]`
- `-w, --weights FLOAT`: Weights for the specified UIDs, e.g. `-w 0.2,0.4,0.1 ...` Must correspond to the order of the UIDs.
- `-s, --salt INTEGER`: Corresponding salt for the hash function, e.g. `-s 163 -s 241 -s 217 ...`
- `--quiet`: Do not output to the console besides critical information.
- `--verbose`: Enable verbose output.
- `--help`: Show this message and exit.

### btcli weights reveal

Reveal weights for a specific subnet on the Bittensor network.

The command allows revealing weights for a specific subnet. Users need to specify the netuid (network unique
identifier), corresponding UIDs, and weights they wish to reveal.

#### Example

```bash
btcli wt reveal --netuid 1 --uids 1,2,3,4 --weights 0.1,0.2,0.3,0.4 --salt 163,241,217,11,161,142,147,189
```

:::tip
This command is used to reveal weights for a specific subnet and requires the user to have the necessary permissions.
:::

**Usage**:

```console
$ btcli weights reveal [OPTIONS]
```

**Options**:

- `--network, --subtensor.network TEXT`: The subtensor network to connect to. Default: finney.
- `--chain, --subtensor.chain_endpoint TEXT`: The subtensor chain endpoint to connect to.
- `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of wallet.
- `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Filepath of root of wallets.
- `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of wallet.
- `--netuid INTEGER`: The netuid (network unique identifier) of the subnet within the root network, (e.g. 1).
- `-u, --uids INTEGER`: Corresponding UIDs for the specified netuid, `e.g. -u 1,2,3 ... [default: None]`
- `-w, --weights FLOAT`: Weights for the specified UIDs, e.g. `-w 0.2,0.4,0.1 ...` Must correspond to the order of the UIDs. [default: None]
- `-s, --salt INTEGER`: Corresponding salt for the hash function, `e.g. -s 163,241,217 ... [default: None]`
- `--quiet`: Do not output to the console besides critical information.
- `--verbose`: Enable verbose output.
- `--help`: Show this message and exit.
