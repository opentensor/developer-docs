---
title: "Schedule Key Swap"
---

# Schedule Key Swap

This guide describes how to use the schedule coldkey swap feature. If you have a reason to believe that your wallet is at-risk as a result of the July 2nd attack, as described in [Bittensor Community Update — July 3, 2024](https://blog.bittensor.com/bittnesor-community-update-july-3-2024-45661b1d542d), we strongly recommend that you use this feature to transfer your funds to a secure wallet. This feature schedules your funds transfer from an at-risk wallet to a new secure wallet.

If you decide to use this feature, then run the commands described in this guide **before** the Bittensor mainnet fully opens.


## Description

The schedule coldkey swap feature works like this:

- The schedule coldkey swap feature enables you to schedule only the actual swapping of your TAO funds from your old potentially compromised coldkey to a new coldkey.
- When you use this feature, it will not actually swap your TAO funds. It will only schedule the swap event. 
- All scheduled coldkey swaps will be executed on-chain when the mainnet opens for normal operations.

## Do not use this feature if

You may not need to use this feature. Do not use this feature if any of the following are true for you:

- If you have never used `btcli`, regardless of the Bittensor version, then do not use this feature. Your funds are safe.
- If you have never used Bittensor version 6.12.2, then do not use this feature. Your funds are safe.
- If you only used any wallet browser extension or only a wallet application such as below, then your funds are safe:
  - The Bittensor Wallet (for Chrome or iOS)
  - SafeWallet, Talisman, Polkadot Vault, Tensor Wallet, Nova Wallet, polkadot.js
  - Websites that utilize polkadot.js, such as Taostats.io, for staking unstaking
- If you hold your TAO only on exchanges, then your funds are safe. 
- If you installed Bittensor 6.12.2 not via PyPi package but directly from GitHub source, then do not use this feature. **Only the PyPi package of Bittensor 6.12.2 is malicious.**

### Use this feature only if 

Use this feature ONLY: 

- If you downloaded the Bittensor PyPi package for the Bittensor version 6.12.2 and then performed any of the below operations.

  **Impacted btcli 6.12.2 operations**

  ```bash
  btcli stake add
  btcli stake remove
  btcli wallet transfer
  btcli root delegate
  btcli root undelegate
  btcli root set_take
  btcli subnet register
  ```

:::important reminder
If you installed Bittensor 6.12.2 not via PyPi package but directly from GitHub source, then do not use this feature. Only the PyPi package of Bittensor 6.12.2 is malicious.
:::

## Installing the schedule coldkey swap feature

The schedule coldkey swap feature is available at the below specified subtensor and bittensor repo branches:

<!--
- **Testnet URL**: `wss://test.finney.opentensor.ai:443/`.
-->
- **Bittensor repo and branch**: 

  1. First, ensure you are using a `virtual environment`. If you are not familiar with creating a virtual, environment follow this guide on [python.org](https://docs.python.org/3/library/venv.html#creating-virtual-environments).

  2. If you do not already have the Bittensor repository, clone it using the following command:

  ```bash
  git clone https://github.com/opentensor/bittensor.git
  ```

  3. Change to the Bittensor directory:
  ```bash
  cd bittensor
  ```

  4. Switch to the `feat/arbitrage-coldkeys` branch
  ```bash
  git checkout feat/arbitrage-coldkeys
  ```

  5. Then install the Bittensor by running the below command:
  ```bash
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/opentensor/bittensor/feat/arbitrage-coldkeys/scripts/install.sh)"
  ```
  The output will look like this:
  ```bash
  ❯ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/opentensor/bittensor/feat/arbitrage-coldkeys/scripts/install.sh)"


  ██████╗░██╗████████╗████████╗███████╗███╗░░██╗░██████╗░█████╗░██████╗░
  ██╔══██╗██║╚══██╔══╝╚══██╔══╝██╔════╝████╗░██║██╔════╝██╔══██╗██╔══██╗
  ██████╦╝██║░░░██║░░░░░░██║░░░█████╗░░██╔██╗██║╚█████╗░██║░░██║██████╔╝
  ██╔══██╗██║░░░██║░░░░░░██║░░░██╔══╝░░██║╚████║░╚═══██╗██║░░██║██╔══██╗
  ██████╦╝██║░░░██║░░░░░░██║░░░███████╗██║░╚███║██████╔╝╚█████╔╝██║░░██║
  ╚═════╝░╚═╝░░░╚═╝░░░░░░╚═╝░░░╚══════╝╚═╝░░╚══╝╚═════╝░░╚════╝░╚═╝░░╚═╝

                                                      - Mining a new element.

  ==> This script will install:
  xcode
  homebrew
  git
  cmake
  python3
  python3-pip
  bittensor

  Press RETURN to continue or any other key to abort
  ==> Updating ...

  ...
  ...
  ...

  Successfully installed bittensor-7.3.0


  ######################################################################
  ##                                                                  ##
  ##                      BITTENSOR SETUP                             ##
  ##                                                                  ##
  ######################################################################


  ==> Welcome. Installation successful

  ```
  **Note**: If you are using Ubuntu-Linux, the script will prompt for `sudo` access to install all required apt-get packages.

  6. Test if you installed the schedule coldkey swap feature by running the below command:
  ```bash
  btcli wallet --help
  ```

  You should see `schedule_coldkey_swap` listed as one of the positional arguments.

  The output should look like this:
  ```bash
  --help                                                                                                                                          bittensor 15:21:52
    usage: btcli <command> <command args> wallet [-h]
                                                {list,overview,transfer,inspect,balance,create,new_hotkey,new_coldkey,regen_coldkey,regen_coldkeypub,regen_hotkey,faucet,update,swap_hotkey,set_identity,get_identity,history,schedule_coldkey_swap,check_coldkey_swap}
                                                ...

    positional arguments:
      {list,overview,transfer,inspect,balance,create,new_hotkey,new_coldkey,regen_coldkey,regen_coldkeypub,regen_hotkey,faucet,update,swap_hotkey,set_identity,get_identity,history,schedule_coldkey_swap,check_coldkey_swap}
                            Commands for managing and viewing wallets.
        list                List wallets
        overview            Show registered account overview.
        transfer            Transfer Tao between accounts.
        inspect             Inspect a wallet (cold, hot) pair
        balance             Checks the balance of the wallet.
        create              Creates a new coldkey (for containing balance) under the specified path.
        new_hotkey          Creates a new hotkey (for running a miner) under the specified path.
        new_coldkey         Creates a new coldkey (for containing balance) under the specified path.
        regen_coldkey       Regenerates a coldkey from a passed value
        regen_coldkeypub    Regenerates a coldkeypub from the public part of the coldkey.
        regen_hotkey        Regenerates a hotkey from a passed mnemonic
        faucet              Perform PoW to receieve test TAO in your wallet.
        update              Updates the wallet security using NaCL instead of ansible vault.
        swap_hotkey         Swap your associated hotkey.
        set_identity        Create or update identity on-chain for a given cold wallet. Must be a subnet owner.
        get_identity        Creates a new coldkey (for containing balance) under the specified path.
        history             Fetch transfer history associated with the provided wallet
        schedule_coldkey_swap
                            Schedule a swap of the coldkey on the Bittensor network. There is a 72-hour delay on this. If there is another call to schedule_coldkey_swap , this key goes into arbitration to
                            determine on which key the swap will occur. This is a free transaction. Coldkeys require a balance of at least τ0.5 to initiate a coldkey swap.
        check_coldkey_swap  Check the status of swap requests for a coldkey on the Bittensor network. Adding more than one swap request will make the key go into arbitration mode.

    options:
      -h, --help            show this help message and exit
      ```
---

## How to use it with `btcli`

### Syntax

**This is syntax only. See the example below.**

```bash
btcli wallet schedule_coldkey_swap [--new_coldkey <new_coldkey_ss58_address>]
```
This command is used to **schedule** a swap of your coldkey to a new coldkey. You must specify the new coldkey address. You must first separately create a new coldkey before using it in this command.

- To create a new coldkey, see [Creating a coldkey using `btcli`](./getting-started/wallets.md#creating-a-coldkey-using-btcli).
- To see your coldkey's SS58 address, see [Listing all the local wallets](https://docs.bittensor.com/getting-started/wallets#listing-all-the-local-wallets).

The command checks for the validity of the new coldkey and prompts for confirmation before proceeding with the scheduling process.

### Important 

- This command does not immediately swap the coldkeys. It will schedule the coldkey swap event after a delay of 72 hours from the time this command is run.
- The actual coldkey swap event occurs on-chain when the chain is back to normal operations.
- This is a free transaction. **However, you need a balance of at least 0.1 TAO in your old coldkey, or one TAO staked, to initiate a coldkey swap to your new coldkey.**
- **For subnet owners**: You do not need any balance in your old coldkey to initiate a coldkey swap to your new coldkey. 
- **For validators**: If you have 500 TAO or more delegated then you do not need any balance in your old coldkey to initiate a coldkey swap to your new coldkey. 
- **For subnet owners**: Any subnet ownership from your old coldkey will move over to the new coldkey.
- The delegated stake will be transferred from your old coldkey to the new coldkey.
- For those who were staking to a validator from their old coldkey, their staking TAO will transfer to the new coldkey. 


:::danger Do not run this command more than once using the same coldkey
:::

### Example

**On mainnet**:

```bash
btcli wallet schedule_coldkey_swap
```

**On testnet**:

```bash
btcli wallet schedule_coldkey_swap --subtensor.network=test
```

Sample output:

```bash
btcli wallet schedule_coldkey_swap
Enter wallet name (default): 
Enter new coldkey SS58 address: 5HM...Srw
⚠If you call this on the same key multiple times, the key will enter arbitration.
Enter password to unlock key: 
Good news. There has been no previous key swap initiated for your coldkey swap.
Do you want to schedule a coldkey swap to: 5HM..Srw? [y/n]: y
Successfully scheduled coldkey swap.
```

### For help

For help description, run:
```bash
btcli wallet schedule_coldkey_swap --help
```

## Checking your scheduled swap status

To check if your coldkey has been scheduled for swap or has been placed in arbitration, run the below command. Make sure you have pulled the latest from the `feat/arbitrage-coldkeys` branch to use the below `check_coldkey_swap` command:

```bash
btcli wallet check_coldkey_swap
```


## Arbitration

When multiple coldkey swaps involving the same coldkey are scheduled, the swap will not be performed when the mainnet opens. Instead, the swap will enter an arbitration stage, where the Senate votes to determine which coldkey swap should occur.
