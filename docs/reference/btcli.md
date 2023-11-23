---
title: "Bittensor CLI"
---

# Bittensor CLI

The Bittensor command line interface (btcli) comes [installed](../getting-started/installation.md) with the bittensor API and can be used to stake or unstake funds, run miners, check network state, and even deploy, analyze, and interface with the Bittensor network.

## Basic commands

```bash dark
btcli [COMMAND]
usage: btcli <command> <command args>
bittensor cli v6.0.0
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

## Wallets 

### List wallets
Lists all wallets locally stored on your machine under path `--wallet.path`. Outputs addresses are [ss58 encoded](https://docs.substrate.io/reference/address-formats/#:~:text=case%20L%20(l)-,Address%20type,address%20bytes%20that%20follow%20it.&text=Simple%20account%2Faddress%2Fnetwork%20identifier,directly%20as%20such%20an%20identifier) required as desinstations for ```btcli transfer```
**Usage**: ```btcli wallet list [OPTIONS]```
```bash dark
btcli wallet list
Wallets
└─
    my_wallet (<ss58_address>)
       └── my_first_hotkey (<ss58_address>)
```
### New Coldkey
Create a new wallet with encrypted coldkey [EdDSA cryptographic keypair](https://en.wikipedia.org/wiki/EdDSA#Ed25519)
**Usage**: ```btcli wallet new_coldkey [OPTIONS]```
```bash dark
btcli wallet new_coldkey
```

### New Hotkey
Create a [EdDSA cryptographic keypair](https://en.wikipedia.org/wiki/EdDSA#Ed25519) hotkey associated with a wallet.
**Usage**: ```btcli wallet new_hotkey [OPTIONS]```
```bash dark
btcli wallet new_hotkey
```

### Regenerate Hotkey
Regenerate a hotkey from mnemonic.
**Usage**: ```btcli wallet regen_hotkey [OPTIONS]```
```bash dark
btcli wallet regen_hotkey
```

### Regenerate Coldkey
Regenerate a wallet encrypted coldkey file from mnemonic or seed.
**Usage**: ```btcli wallet regen_coldkey [OPTIONS]```
```bash dark
btcli wallet regen_coldkey
```

### Regenerate Coldkeypub
Regenerate a wallet with just the public seed of your coldkey.
**Usage**: ```btcli wallet regen_coldkeypub [OPTIONS]```
```bash dark
btcli wallet regen_coldkeypub
```

## Registration

### Recycle registration
Initiates a TAO recycle registration.
**Usage**: ```btcli recycle_register [OPTIONS]```
```bash dark
btcli subnet recycle_register
```

### Transfers and staking 

### Transfer Tao
Transfers TAO from a wallet coldkey to another wallet public key address. Destination addresses must be [ss58 encoded](https://docs.substrate.io/reference/address-formats/#:~:text=case%20L%20(l)-,Address%20type,address%20bytes%20that%20follow%20it.&text=Simple%20account%2Faddress%2Fnetwork%20identifier,directly%20as%20such%20an%20identifier).
**Usage**: ```btcli wallet transfer [OPTIONS]```
```bash dark
btcli wallet transfer
```

### Stake Tao
Stake TAO from the coldkey balance to the hotkey staking account.
**Usage**: ```btcli stake add [OPTIONS]```
```bash dark
btcli stake add
```

### Unstake Tao
Remove stake TAO from the hotkey staking account and add it to the coldkey.
**Usage**: ```btcli stake remove [OPTIONS]```
```bash dark
btcli stake remove
```

## Delegation

### Delegate Tao
List all active delegates available for delegated TAO.
**Usage**: ```btcli root list```
```bash dark
btcli root list
```
![List Delegates](/img/list_delegates.png 'Output of List Delegates')

### Delegate Tao
Delegate TAO from the coldkey balance to the hotkey staking account of a delegate.
**Usage**: ```btcli delegate [OPTIONS]```
```bash dark
btcli delegate
```

### Undelegate Tao
Remove TAO from the hotkey balance of delegate you have previously delegated to.
**Usage**: ```btcli root undelegate [OPTIONS]```
```bash dark
btcli root undelegate
```

### My Delegates
Create a hotkey associated to a wallet.
**Usage**: ```btcli wallet new_hotkey [OPTIONS]```
```bash dark
btcli wallet new_hotkey
```

## Governance

### View proposals
List all active proposals for the Senate to vote on.
**Usage**: ```btcli root proposals```
```bash dark
btcli root proposals
```
![Proposals](/img/list_proposals.png 'Output of Proposals')

### Proposal Votes
Inspect the votes for a single proposal.
**Usage**: ```btcli root proposals [OPTIONS]```
```bash dark
btcli root proposals --proposal=[PROPOSAL_HASH]
```

### Senate Register
Elect to join the Senate with your nominated hotkey.
**Usage**: ```btcli root register [OPTIONS]```
```bash dark
btcli root register
```

### Senate Vote
Participate in a triumvirate proposal by voting with your senate hotkey.
**Usage**: ```btcli root senate_vote [OPTIONS]```
```bash dark
btcli root senate_vote --proposal=[PROPOSAL_HASH]
```

## Misc

### Update Bittensor
Update your Bittensor installation
**Usage**: ```btcli misc update [OPTIONS]```
```bash dark
btcli misc update
```
