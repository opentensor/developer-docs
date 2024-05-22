---
title: "Bittensor CLI"
---

# Bittensor CLI

After you [install Bittensor](/getting-started/installation.md) you can use `btcli` command line interface (CLI) to stake or unstake funds, run miners, check network state, and even deploy, analyze, and interface with the Bittensor network. This section presents the command and subcommand options available in `btcli` CLI.

## Usage

```bash
btcli [COMMAND]
usage: btcli <command> <command args>
positional arguments:
  {subnets,s,subnet,root,r,roots,wallet,w,wallets,stake,st,stakes,sudo,su,sudos,legacy,l}
    subnets (s, subnet)
                        Commands for managing and viewing subnetworks.
    root (r, roots)     Commands for managing and viewing the root network.
    wallet (w, wallets)
                        Commands for managing and viewing wallets.
    stake (st, stakes)  Commands for staking and removing stake from hotkey accounts.
    sudo (su, sudos)    Commands for subnet management
    legacy (l)          Miscellaneous commands.
```
---

## Wallets 

### Show overview

```bash
btcli wallet overview [OPTIONS]
```

Displays comprehensive information about each neuron associated with the user's wallets, including both hotkeys and coldkeys. It is especially useful for users managing multiple accounts or looking for a summary of their network activities and stake distributions.

#### Example

```bash
btcli wallet overview
```

With example options:

```bash
btcli wallet overview --all --sort_by stake --sort_order descending
```

Run,
```bash
btcli wallet overview --help
```
for full options.

### Show history

```bash
btcli wallet history --wallet.name <YOUR WALLET NAME>
```

Displays the last 1000 transactions performed with `<YOUR WALLET NAME>` by querying the [Taostats](https://taostats.io/) GraphQL indexer. It shows the `From`, `To`, `Amount`, `Extrinsic Id` and `Block Number`.

Run,
```bash
btcli wallet history --help
```
for help.

### List wallets

```bash
btcli wallet list [OPTIONS]
```


- Lists all wallets locally stored on your machine under path `--wallet.path`. 
- Output addresses are [SS58 encoded](https://docs.substrate.io/reference/address-formats/#:~:text=case%20L%20(l)-,Address%20type,address%20bytes%20that%20follow%20it.&text=Simple%20account%2Faddress%2Fnetwork%20identifier,directly%20as%20such%20an%20identifier). 
- Required as destinations for ```btcli transfer```

```bash 
btcli wallet list
Wallets
└─
    my_wallet (<ss58_address>)
       └── my_first_hotkey (<ss58_address>)
```

### Check balance in all wallets

```bash
btcli wallet balance --all
```

Lists the balances in all the wallets in the user's configuration directory, showing the wallet name, coldkey address, and the free and staked balances.

### Check balance in a single wallet

```bash
btcli w balance --wallet.name WALLET
```

or you can specify the wallet's name in the terminal prompt:

```bash
btcli w balance
```

### New coldkey

```bash
btcli wallet new_coldkey [OPTIONS]
```

Create a new wallet with encrypted coldkey [EdDSA cryptographic keypair](https://en.wikipedia.org/wiki/EdDSA#Ed25519):

```bash
btcli wallet new_coldkey
```

### New hotkey

```bash
btcli wallet new_hotkey [OPTIONS]
```

Create a [EdDSA cryptographic keypair](https://en.wikipedia.org/wiki/EdDSA#Ed25519) hotkey associated with a wallet:

```bash
btcli wallet new_hotkey
```

### Regenerate hotkey

```bash
btcli wallet regen_hotkey [OPTIONS]
```

Regenerate a hotkey from mnemonic:
```bash
btcli wallet regen_hotkey
```

### Regenerate coldkey

```bash
btcli wallet regen_coldkey [OPTIONS]
```
Regenerate a wallet encrypted coldkey file from mnemonic or seed:

```bash
btcli wallet regen_coldkey
```

### Regenerate coldkeypub

```bash
btcli wallet regen_coldkeypub [OPTIONS]
```

Regenerate a wallet with just the public seed of your coldkey:

```bash
btcli wallet regen_coldkeypub
```

### Get identity

```
btcli wallet get_identity --key <s58_address> [OPTIONS]
```

- `--key` [Optional] is the SS58 address of the coldkey or hotkey.

Displays the identity details of a user's coldkey or hotkey associated with the Bittensor network.

### Set identity

```bash
btcli wallet set_identity [OPTIONS]
```

Creates or updates a delegate's on-chain identity. This identity includes various attributes such as display name, legal name, web URL, PGP fingerprint, and contact information, among others.

:::caution
This command should only be used if the user is willing to incur the 1 TAO transaction fee associated with setting an identity on the blockchain. It is a high-level command that makes changes to the blockchain state and should not be used programmatically as part of other scripts or applications.
:::

---

## Subnets

### List subnets

Lists the existing subnets and shows their detailed information. In addition to the subnet details, the command fetches delegate information and provides the name of the subnet owner where available. If the owner's name is not available, the owner's SS58 address is displayed.

Defaults to subnets on the mainchain. 

```bash
btcli subnets list [OPTIONS]
```

Use,

```bash
btcli subnets list --help
```

to see the available OPTIONS.

### Show lock cost

Shows the locking cost required for creating a new subnet on the Bittensor network. This command is designed to provide users with the current cost of registering a new subnet. If the cost is unappealing currently, check back in a day or two to see if it has improved.

```bash
btcli subnets lock_cost [OPTIONS]
```

Use,

```bash
btcli subnets lock_cost --help
```

to see the available OPTIONS.

### Create subnet

:::tip For advanced users only
This command is intended for advanced users of the Bittensor network who wish to contribute by adding new subnets. It requires a clear understanding of the Bittensor network's functioning and the roles of subnets. Users should ensure that they have secured their wallet and are aware of the implications of adding a new subnetwork to the Bittensor ecosystem.
:::

Creates and registers a new subnet. This involves interaction with the user's wallet and the Bittensor subtensor. It ensures that the user has the necessary credentials and configurations to successfully register a new subnet.

```bash
btcli subnets create [OPTIONS]
```

Use,

```bash
btcli subnets create --help
```

to see the available OPTIONS.


### Register

```bash

btcli subnets register [OPTIONS]
```

Registers a new neuron using the `recycle_register` option. Adds a new neuron to the specified subnet `--netuid`.

:::caution alert
The command option `recycle_register` is removed. Instead, use the above `register` option.
:::

To register in a subnet of `netuid` of `1`:

```bash

btcli subnets register --netuid 1
```

Use,

```bash
btcli subnets register --help
```

to see the available OPTIONS.

### PoW registration

```bash
btcli subnets pow_register [OPTIONS]
```

Registers a neuron on the Bittensor network using Proof of Work (PoW). This method is an alternative registration process that leverages computational work for securing a neuron's place on the network.

Example:

```bash
btcli subnets pow_register --netuid 1 --pow_register.num_processes 4 --cuda.use_cuda
```

Use,

```bash
btcli subnets pow_register --help
```

to see the available OPTIONS.

:::caution
This command is for users with adequate computational resources to participate in PoW registration. It requires a sound understanding of the network's operations and PoW mechanics. Users should ensure their systems meet the necessary hardware and software requirements, particularly when opting for CUDA-based GPU acceleration.
:::

### Show metagraph

Shows the metagraph of the desired subnet. Defaults to subnets on the mainchain. 

```bash
btcli subnets metagraph [OPTIONS]
```

Use,

```bash
btcli subnets metagraph --help
```

to see the available OPTIONS.

### Show hyperparameters

Shows the current hyperparameters for the desired subnet. This command is useful for users who wish to understand the configuration and operational parameters of a particular subnet.

```bash
btcli subnets hyperparameters [OPTIONS]
```

Use,

```bash
btcli subnets hyperparameters --help
```

to see the available OPTIONS.

---

## Transfers and staking 

### Transfer Tao

```bash
btcli wallet transfer [OPTIONS]
```

- Transfers TAO from a wallet coldkey to another wallet public key address. 
- Destination addresses must be [SS58 encoded](https://docs.substrate.io/reference/address-formats/#:~:text=case%20L%20(l)-,Address%20type,address%20bytes%20that%20follow%20it.&text=Simple%20account%2Faddress%2Fnetwork%20identifier,directly%20as%20such%20an%20identifier).

```bash
btcli wallet transfer
```

### Stake 

```bash
btcli stake add [OPTIONS]
```

Stake TAO from the coldkey balance to the hotkey staking account.

```bash
btcli stake add
```

### Unstake Tao

```bash
btcli stake remove [OPTIONS]
```

Remove stake TAO from the hotkey staking account and add it to the coldkey.

```bash
btcli stake remove
```

---

## Delegation

### See available delegates

```bash
btcli root list_delegates
```

List all active delegates available for delegated TAO. Displays the below output:

[![List Delegates](/img/docs/list_delegates_screenshot.png 'Output of List Delegates')](/img/docs/list_delegates_screenshot.png)


### Delegate Tao

```bash
btcli root delegate [OPTIONS]
```

Delegate TAO from the coldkey balance to the hotkey staking account of a delegate.

```bash
btcli root delegate
```

### Set delegate take

```bash
btcli root set_take [OPTIONS]
```

Sets the take percentage of the delegate.

To set the delegate take at 10%:

```bash
btcli root set_take --take 0.1
```

The `--take` value must be a floating point number between `0` and `0.18`. 

:::tip Default `--take` value is `0.09` (`9%`).
:::

To use a specific wallet:

```bash
btcli root set_take --wallet.name my_wallet --wallet.hotkey my_hotkey --take 0.1
```

- **Allowed `take` values**: Ensure the `--take` value is within the range of `0` to `0.18`.
- **`wallet.name` and `wallet.hotkey`**: If not specified, the command will prompt for the wallet name and hotkey.

Examples:

1. Set delegate take to 10%:
    ```bash
    btcli root set_take --take 0.1
    ```

2. Set delegate take to 10% using a specific wallet:
    ```bash
    btcli root set_take --wallet.name my_wallet --wallet.hotkey my_hotkey --take 0.1
    ```

### Undelegate Tao

```bash
btcli root undelegate [OPTIONS]
```
Remove TAO from the hotkey balance of delegate you have previously delegated to.

```bash
btcli root undelegate
```

### My delegates

```bash
btcli root my_delegates
```

Show all your previously made delegations.

:::tip
Use `--all` option to show delegations across all your wallets.
:::

---

## Root network

### Root network list

```bash
btcli root list
```

Lists all the root network members. Shows the top 64 validators in the root network.


### Boost weights


```bash
btcli root boost [OPTIONS]
```

This command allows boosting (increasing) of weights for different subnets within the root network.

Optional arguments:
  - `--netuid` (int): A single `netuid` for which weights are to be boosted (increased).
  - `--increase` (float): The corresponding increase in the weight for this subnet.

Example:

```bash
btcli root boost --netuid 1 --increase 0.01
```

### Slash weights


```bash
btcli root slash [OPTIONS]
```

This command allows slashing (decreasing) the weights for different subnets within the root network.

Optional arguments:
  - `--netuid` (int): A single `netuid` for which weights are to be slashed (decreased).
  - `--decrease` (float): The corresponding decrease in the weight for this subnet.

Example:

```bash
btcli root slash --netuid 1 --decrease 0.01
```

---

## Governance

### View proposals

```bash
btcli root proposals
```

List all active proposals for the Senate to vote on. Displays an output similar to below:

[![Proposals](/img/list_proposals.png 'Output of Proposals')](/img/list_proposals.png)


### Proposal votes

```bash
btcli root proposals [OPTIONS]
```
Inspect the votes for a single proposal.

```bash 
btcli root proposals --proposal=[PROPOSAL_HASH]
```

### Senate register

```bash
btcli root register [OPTIONS]
```

Elect to join the Senate with your nominated hotkey.

```bash dark
btcli root register
```

### Senate vote

```bash
btcli root senate_vote [OPTIONS]
```

Participate in a triumvirate proposal by voting with your senate hotkey.

```bash 
btcli root senate_vote --proposal=[PROPOSAL_HASH]
```

---

## Misc

### Update Bittensor

```bash
btcli legacy update [OPTIONS]
```

Update your Bittensor installation.

```bash 
btcli legacy update
```
