---
title: "Bittensor CLI: btcli"
---

# Bittensor CLI: `btcli`

Command line interface (CLI) for Bittensor. Uses the values in the configuration file. These values can be overriden by passing them explicitly in the command line.

See [Getting Started](./getting-started/install-btcli.md) to install `btcli`.

Command line interface (CLI) for Bittensor. Uses the values in the configuration file. These values can be
    overriden by passing them explicitly in the command line.

**Usage**:

```console
btcli [OPTIONS] COMMAND [ARGS]...
```

**Options**:

* `--version`: Show BTCLI version
* `--commands`: Show BTCLI commands
* `--install-completion`: Install completion for the current shell.
* `--show-completion`: Show completion for the current shell, to copy it or customize the installation.
* `--help`: Show this message and exit.

**Commands**:

* `config`: Config commands, aliases: `c`, `conf`
* `conf`
* `c`
* `wallet`: Wallet commands, aliases: `wallets`, `w`
* `w`
* `wallets`
* `stake`: Stake commands, alias: `st`
* `st`
* `sudo`: Sudo commands, alias: `su`
* `su`
* `subnets`: Subnets commands, alias: `s`, `subnet`
* `s`
* `subnet`
* `weights`: Weights commands, aliases: `wt`, `weight`
* `wt`
* `weight`
* `utils`

## `btcli config`

**Usage**:

```console
btcli config [OPTIONS] COMMAND [ARGS]...
```

**Options**:

* `--help`: Show this message and exit.

**Commands**:

* `set`: Sets or updates configuration values in...
* `get`: Prints the current config file in a table.
* `clear`: Clears the fields in the config file and...
* `metagraph`: Command option to configure the display of...

### `btcli config set`

Sets or updates configuration values in the BTCLI config file.

This command allows you to set default values that will be used across all BTCLI commands.

**Usage:**

Interactive mode:
    ```
    btcli config set
    ```

Set specific values:
    ```
    btcli config set --wallet-name default --network finney
    ```
    ```
    btcli config set --safe-staking --rate-tolerance 0.1
    ```

Note:
- Network values can be network names (e.g., 'finney', 'test') or websocket URLs
- Rate tolerance is specified as a decimal (e.g., 0.05 for 0.05%)
- Changes are saved to ~/.bittensor/btcli.yaml
- Use `btcli config get` to view current settings

**Usage**:

```console
btcli config set [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--cache, --cache / --no-cache, --no_cache`: Disable caching of some commands. This will disable the `--reuse-last` and `--html` flags on commands such as `subnets metagraph`, `stake show` and `subnets list`.
* `--slippage, --slippage-tolerance, --tolerance FLOAT`: Set the rate tolerance percentage for transactions (e.g. 0.1 for 0.1%).
* `--safe-staking, --safe / --no-safe-staking, --unsafe`: Enable or disable safe staking mode.
* `--allow-partial-stake, --partial, --allow / --no-allow-partial-stake, --no-partial, --not-allow`
* `--help`: Show this message and exit.

### `btcli config get`

Prints the current config file in a table.

**Usage**:

```console
btcli config get [OPTIONS]
```

**Options**:

* `--help`: Show this message and exit.

### `btcli config clear`

Clears the fields in the config file and sets them to 'None'.


    - To clear the 'chain' and 'network' fields:

        ```
        btcli config clear --chain --network
        ```

    - To clear your config entirely:

        ```
        btcli config clear --all
        ```

**Usage**:

```console
btcli config clear [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name`
* `-p, --wallet-path, --wallet_path, --wallet.path`
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey`
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint`
* `--cache`
* `--slippage, --slippage-tolerance, --tolerance`
* `--safe-staking, --safe / --no-safe-staking, --unsafe`: [default: no-safe-staking]
* `--allow-partial-stake, --partial, --allow / --no-allow-partial-stake, --no-partial, --not-allow`: [default: no-allow-partial-stake]
* `--all`
* `--help`: Show this message and exit.

### `btcli config metagraph`

Command option to configure the display of the metagraph columns.

**Usage**:

```console
btcli config metagraph [OPTIONS]
```

**Options**:

* `--reset`: Restore the display of metagraph columns to show all columns.
* `--help`: Show this message and exit.

## `btcli conf`

**Usage**:

```console
btcli conf [OPTIONS] COMMAND [ARGS]...
```

**Options**:

* `--help`: Show this message and exit.

**Commands**:

* `set`: Sets or updates configuration values in...
* `get`: Prints the current config file in a table.
* `clear`: Clears the fields in the config file and...
* `metagraph`: Command option to configure the display of...

### `btcli conf set`

Sets or updates configuration values in the BTCLI config file.

This command allows you to set default values that will be used across all BTCLI commands.

**Usage:**

Interactive mode:
    ```
    btcli config set
    ```

Set specific values:
    ```
    btcli config set --wallet-name default --network finney
    ```
    ```
    btcli config set --safe-staking --rate-tolerance 0.1
    ```

Note:
- Network values can be network names (e.g., 'finney', 'test') or websocket URLs
- Rate tolerance is specified as a decimal (e.g., 0.05 for 0.05%)
- Changes are saved to ~/.bittensor/btcli.yaml
- Use `btcli config get` to view current settings

**Usage**:

```console
btcli conf set [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--cache, --cache / --no-cache, --no_cache`: Disable caching of some commands. This will disable the `--reuse-last` and `--html` flags on commands such as `subnets metagraph`, `stake show` and `subnets list`.
* `--slippage, --slippage-tolerance, --tolerance FLOAT`: Set the rate tolerance percentage for transactions (e.g. 0.1 for 0.1%).
* `--safe-staking, --safe / --no-safe-staking, --unsafe`: Enable or disable safe staking mode.
* `--allow-partial-stake, --partial, --allow / --no-allow-partial-stake, --no-partial, --not-allow`
* `--help`: Show this message and exit.

### `btcli conf get`

Prints the current config file in a table.

**Usage**:

```console
btcli conf get [OPTIONS]
```

**Options**:

* `--help`: Show this message and exit.

### `btcli conf clear`

Clears the fields in the config file and sets them to 'None'.


    - To clear the 'chain' and 'network' fields:

        ```
        btcli config clear --chain --network
        ```

    - To clear your config entirely:

        ```
        btcli config clear --all
        ```

**Usage**:

```console
btcli conf clear [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name`
* `-p, --wallet-path, --wallet_path, --wallet.path`
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey`
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint`
* `--cache`
* `--slippage, --slippage-tolerance, --tolerance`
* `--safe-staking, --safe / --no-safe-staking, --unsafe`: [default: no-safe-staking]
* `--allow-partial-stake, --partial, --allow / --no-allow-partial-stake, --no-partial, --not-allow`: [default: no-allow-partial-stake]
* `--all`
* `--help`: Show this message and exit.

### `btcli conf metagraph`

Command option to configure the display of the metagraph columns.

**Usage**:

```console
btcli conf metagraph [OPTIONS]
```

**Options**:

* `--reset`: Restore the display of metagraph columns to show all columns.
* `--help`: Show this message and exit.

## `btcli c`

**Usage**:

```console
btcli c [OPTIONS] COMMAND [ARGS]...
```

**Options**:

* `--help`: Show this message and exit.

**Commands**:

* `set`: Sets or updates configuration values in...
* `get`: Prints the current config file in a table.
* `clear`: Clears the fields in the config file and...
* `metagraph`: Command option to configure the display of...

### `btcli c set`

Sets or updates configuration values in the BTCLI config file.

This command allows you to set default values that will be used across all BTCLI commands.

**Usage:**
Interactive mode:
    ```
    btcli config set
    ```

Set specific values:
    ```
    btcli config set --wallet-name default --network finney
    ```
    ```
    btcli config set --safe-staking --rate-tolerance 0.1
    ```

Note:
- Network values can be network names (e.g., 'finney', 'test') or websocket URLs
- Rate tolerance is specified as a decimal (e.g., 0.05 for 0.05%)
- Changes are saved to ~/.bittensor/btcli.yaml
- Use `btcli config get` to view current settings

**Usage**:

```console
btcli c set [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--cache, --cache / --no-cache, --no_cache`: Disable caching of some commands. This will disable the `--reuse-last` and `--html` flags on commands such as `subnets metagraph`, `stake show` and `subnets list`.
* `--slippage, --slippage-tolerance, --tolerance FLOAT`: Set the rate tolerance percentage for transactions (e.g. 0.1 for 0.1%).
* `--safe-staking, --safe / --no-safe-staking, --unsafe`: Enable or disable safe staking mode.
* `--allow-partial-stake, --partial, --allow / --no-allow-partial-stake, --no-partial, --not-allow`
* `--help`: Show this message and exit.

### `btcli c get`

Prints the current config file in a table.

**Usage**:

```console
btcli c get [OPTIONS]
```

**Options**:

* `--help`: Show this message and exit.

### `btcli c clear`

Clears the fields in the config file and sets them to 'None'.


    - To clear the 'chain' and 'network' fields:

        ```
        btcli config clear --chain --network
        ```

    - To clear your config entirely:

        ```
        btcli config clear --all
        ```

**Usage**:

```console
btcli c clear [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name`
* `-p, --wallet-path, --wallet_path, --wallet.path`
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey`
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint`
* `--cache`
* `--slippage, --slippage-tolerance, --tolerance`
* `--safe-staking, --safe / --no-safe-staking, --unsafe`: [default: no-safe-staking]
* `--allow-partial-stake, --partial, --allow / --no-allow-partial-stake, --no-partial, --not-allow`: [default: no-allow-partial-stake]
* `--all`
* `--help`: Show this message and exit.

### `btcli c metagraph`

Command option to configure the display of the metagraph columns.

**Usage**:

```console
btcli c metagraph [OPTIONS]
```

**Options**:

* `--reset`: Restore the display of metagraph columns to show all columns.
* `--help`: Show this message and exit.

## `btcli view dashboard`

Display html dashboard with subnets list, stake, and neuron information.

**Usage**:

```console
btcli view dashboard
```

## `btcli wallet`

**Usage**:

```console
btcli wallet [OPTIONS] COMMAND [ARGS]...
```

**Options**:

* `--help`: Show this message and exit.

**Commands**:

* `list`: Displays all the wallets and their...
* `swap-hotkey`: Swap hotkeys of a given wallet on the...
* `regen-coldkey`: Regenerate a coldkey for a wallet on the...
* `regen-coldkeypub`: Regenerates the public part of a coldkey...
* `regen-hotkey`: Regenerates a hotkey for a wallet.
* `new-hotkey`: Create a new hotkey for a wallet.
* `new-coldkey`: Create a new coldkey.
* `create`: Create a complete wallet by setting up...
* `balance`: Check the balance of the wallet.
* `history`: Show the history of the transfers carried...
* `overview`: Displays a detailed overview of the user's...
* `transfer`: Send TAO tokens from one wallet to another...
* `inspect`: Displays the details of the user's wallet...
* `faucet`: Obtain test TAO tokens by performing Proof...
* `set-identity`: Create or update the on-chain identity of...
* `get-identity`: Shows the identity details of a user's...
* `sign`: Allows users to sign a message with the...
* `swap_hotkey`: Swap hotkeys of a given wallet on the...
* `regen_coldkey`: Regenerate a coldkey for a wallet on the...
* `regen_coldkeypub`: Regenerates the public part of a coldkey...
* `regen_hotkey`: Regenerates a hotkey for a wallet.
* `new_hotkey`: Create a new hotkey for a wallet.
* `new_coldkey`: Create a new coldkey.
* `set_identity`: Create or update the on-chain identity of...
* `get_identity`: Shows the identity details of a user's...

### `btcli wallet list`

Displays all the wallets and their corresponding hotkeys that are located in the wallet path specified in the config.

The output display shows each wallet and its associated `ss58` addresses for the coldkey public key and any hotkeys. The output is presented in a hierarchical tree format, with each wallet as a root node and any associated hotkeys as child nodes. The `ss58` address is displayed for each coldkey and hotkey that is not encrypted and exists on the device.

Upon invocation, the command scans the wallet directory and prints a list of all the wallets, indicating whether the
public keys are available (`?` denotes unavailable or encrypted keys).


```
btcli wallet list --path ~/.bittensor
```

Note: This command is read-only and does not modify the filesystem or the blockchain state. It is intended for use with the Bittensor CLI to provide a quick overview of the user's wallets.

**Usage**:

```console
btcli wallet list [OPTIONS]
```

**Options**:

* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli wallet swap-hotkey`

Swap hotkeys of a given wallet on the blockchain. For a registered key pair, for example, a (coldkeyA, hotkeyA) pair, this command swaps the hotkeyA with a new, unregistered, hotkeyB to move the original registration to the (coldkeyA, hotkeyB) pair.

**Usage:**

The command is used to swap the hotkey of a wallet for another hotkey on that same wallet.

**Important:**

- Make sure that your original key pair (coldkeyA, hotkeyA) is already registered.
- Make sure that you use a newly created hotkeyB in this command. A hotkeyB that is already registered cannot be used in this command.
- Finally, note that this command requires a fee of 1 TAO for recycling and this fee is taken from your wallet (coldkeyA).

**Example:**

```
btcli wallet swap_hotkey destination_hotkey_name --wallet-name your_wallet_name --wallet-hotkey original_hotkey
```

**Usage**:

```console
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

### `btcli wallet regen-coldkey`

Regenerate a coldkey for a wallet on the Bittensor blockchain network.

This command is used to create a new coldkey from an existing mnemonic, seed, or JSON file.

**Usage:**

Users can specify a mnemonic, a seed string, or a JSON file path to regenerate a coldkey. The command supports optional password protection for the generated key.

**Example:**

```
btcli wallet regen-coldkey --mnemonic "word1 word2 ... word12"
```


Note: This command is critical for users who need to regenerate their coldkey either for recovery or for security reasons.

**Usage**:

```console
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

### `btcli wallet regen-coldkeypub`

Regenerates the public part of a coldkey (coldkeypub.txt) for a wallet.

Use this command when you need to move machine for subnet mining. Use the public key or SS58 address from your coldkeypub.txt that you have on another machine to regenerate the coldkeypub.txt on this new machine.

**Usage:**

The command requires either a public key in hexadecimal format or an ``SS58`` address from the existing coldkeypub.txt from old machine to regenerate the coldkeypub on the new machine.

**Example:**

```
btcli wallet regen_coldkeypub --ss58_address 5DkQ4...
```

Note: This command is particularly useful for users who need to regenerate their coldkeypub, perhaps due to file corruption or loss. You will need either ss58 address or public hex key from your old coldkeypub.txt for the wallet. It is a recovery-focused utility that ensures continued access to your wallet functionalities.

**Usage**:

```console
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

### `btcli wallet regen-hotkey`

Regenerates a hotkey for a wallet.

Similar to regenerating a coldkey, this command creates a new hotkey from a mnemonic, seed, or JSON file.

**Usage:**

Users can provide a mnemonic, seed string, or a JSON file to regenerate the hotkey. The command supports optional password protection and can overwrite an existing hotkey.


```
btcli wallet regen_hotkey --seed 0x1234...
```

Note: This command is essential for users who need to regenerate their hotkey, possibly for security upgrades or key recovery.
It should be used with caution to avoid accidental overwriting of existing keys.

**Usage**:

```console
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

### `btcli wallet new-hotkey`

Create a new hotkey for a wallet.

**Usage:**

This command is used to generate a new hotkey for managing a neuron or participating in a subnet. It provides options for the mnemonic word count, and supports password protection. It also allows overwriting the
existing hotkey.

**Example:**

```
btcli wallet new-hotkey --n_words 24
```

Note: This command is useful to create additional hotkeys for different purposes, such as running multiple subnet miners or subnet validators or separating operational roles within the Bittensor network.

**Usage**:

```console
btcli wallet new-hotkey [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--n-words, --n_words INTEGER`: The number of words used in the mnemonic. Options: [12, 15, 18, 21, 24]
* `--use-password / --no-use-password`: Set to 'True' to protect the generated Bittensor key with a password.  [default: no-use-password]
* `--uri TEXT`: Create wallet from uri (e.g. 'Alice', 'Bob', 'Charlie', 'Dave', 'Eve')
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli wallet new-coldkey`

Create a new coldkey. A coldkey is required for holding TAO balances and performing high-value transactions.

**Usage:**

The command creates a new coldkey. It provides options for the mnemonic word count, and supports password protection. It also allows overwriting an existing coldkey.

**Example:**

```
btcli wallet new_coldkey --n_words 15
```

Note: This command is crucial for users who need to create a new coldkey for enhanced security or as part of setting up a new wallet. It is a foundational step in establishing a secure presence on the Bittensor network.

**Usage**:

```console
btcli wallet new-coldkey [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--n-words, --n_words INTEGER`: The number of words used in the mnemonic. Options: [12, 15, 18, 21, 24]
* `--use-password / --no-use-password`: Set this to `True` to protect the generated Bittensor key with a password.  [default: use-password]
* `--uri TEXT`: Create wallet from uri (e.g. 'Alice', 'Bob', 'Charlie', 'Dave', 'Eve')
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli wallet create`

Create a complete wallet by setting up both coldkey and hotkeys.

**Usage:**

The command creates a new coldkey and hotkey. It provides an option for mnemonic word count. It supports password protection for the coldkey and allows overwriting of existing keys.

**Example:**

```
btcli wallet create --n_words 21
```

Note: This command is for new users setting up their wallet for the first time, or for those who wish to completely renew their wallet keys. It ensures a fresh start with new keys for secure and effective participation in the Bittensor network.

**Usage**:

```console
btcli wallet create [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--n-words INTEGER`
* `--use-password / --no-use-password`: Set this to `True` to protect the generated Bittensor key with a password.  [default: use-password]
* `--uri TEXT`: Create wallet from uri (e.g. 'Alice', 'Bob', 'Charlie', 'Dave', 'Eve')
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli wallet balance`

Check the balance of the wallet. This command shows a detailed view of the wallet's coldkey balances, including free and staked balances.

You can also pass multiple ss58 addresses of coldkeys to check their balance (using --ss58).

**Example:**

- To display the balance of a single wallet, use the command with the `--wallet-name` argument and provide the wallet name:

    ```
    btcli w balance --wallet-name WALLET
    ```

- To use the default config values, use:

    ```
    btcli w balance
    ```

- To display the balances of all your wallets, use the `--all` argument:

    ```
    btcli w balance --all
    ```

- To display the balances of ss58 addresses, use the `--ss58` argument:

    ```
    btcli w balance --ss58 &lt;ss58_address&gt; --ss58 &lt;ss58_address&gt;
    ```

**Usage**:

```console
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

### `btcli wallet history`

Show the history of the transfers carried out with the provided wallet on the Bittensor network.

**Usage:**

The output shows the latest transfers of the provided wallet, showing the columns 'From', 'To', 'Amount', 'Extrinsic ID' and 'Block Number'.

**Example:**

```
btcli wallet history
```

**Usage**:

```console
btcli wallet history [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli wallet overview`

Displays a detailed overview of the user's registered accounts on the Bittensor network.

This command compiles and displays comprehensive information about each neuron associated with the user's wallets, including both hotkeys and coldkeys. It is especially useful for users managing multiple accounts or looking for a summary of their network activities and stake distributions.

**Usage:**

```
btcli wallet overview
```

```
btcli wallet overview --all
```

Note: This command is read-only and does not modify the blockchain state or account configuration.
It provides a quick and comprehensive view of the user's network presence, making it useful for monitoring account status,
stake distribution, and overall contribution to the Bittensor network.

**Usage**:

```console
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
* `--help`: Show this message and exit.

### `btcli wallet transfer`

Send TAO tokens from one wallet to another wallet on the Bittensor network.

This command is used for transactions between different wallet accounts, enabling users to send tokens to other
participants on the network. The command displays the user's current balance before prompting for the amount
to transfer (send), ensuring transparency and accuracy in the transaction.

**Usage:**

The command requires that you specify the destination address (public key) and the amount of TAO you want transferred.
It checks if sufficient balance exists in your wallet and prompts for confirmation before proceeding with the transaction.

**Example:**

```
btcli wallet transfer --dest 5Dp8... --amount 100
```

Note: This command is used for executing token transfers within the Bittensor network. Users should verify the destination address and the TAO amount before confirming the transaction to avoid errors or loss of funds.

**Usage**:

```console
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
* `--help`: Show this message and exit.

### `btcli wallet inspect`

Displays the details of the user's wallet pairs (coldkey, hotkey) on the Bittensor network.

The output is presented as a table with the below columns:

- Coldkey: The coldkey associated with the user's wallet.

- Balance: The balance of the coldkey.

- Delegate: The name of the delegate to which the coldkey has staked TAO.

- Stake: The amount of stake held by both the coldkey and hotkey.

- Emission: The emission or rewards earned from staking.

- Netuid: The network unique identifier of the subnet where the hotkey is active (i.e., validating).

- Hotkey: The hotkey associated with the neuron on the network.

**Usage:**

This command can be used to inspect a single wallet or all the wallets located at a specified path. It is useful for a comprehensive overview of a user's participation and performance in the Bittensor network.

**Example:**

```
btcli wallet inspect
```

```
btcli wallet inspect --all -n 1 -n 2 -n 3
```

Note: The `inspect` command is for displaying information only and does not perform any transactions or state changes on the blockchain. It is intended to be used with Bittensor CLI and not as a standalone function in user code.

**Usage**:

```console
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
* `--help`: Show this message and exit.

### `btcli wallet faucet`

Obtain test TAO tokens by performing Proof of Work (PoW).

This command is useful for users who need test tokens for operations on a local blockchain.

**Important:**: THIS COMMAND IS DISABLED ON FINNEY AND TESTNET.

**Usage:**

The command uses the proof-of-work (POW) mechanism to validate the user's effort and rewards them with test TAO tokens. It is
typically used in local blockchain environments where transactions do not use real TAO tokens.

**Example:**

```
btcli wallet faucet --faucet.num_processes 4 --faucet.cuda.use_cuda
```

Note: This command is meant for used in local environments where users can experiment with the blockchain without using real TAO tokens. Users must have the necessary hardware setup, especially when opting for CUDA-based GPU calculations. It is currently disabled on testnet and mainnet (finney). You can only use this command on a local blockchain.

**Usage**:

```console
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

### `btcli wallet set-identity`

Create or update the on-chain identity of a coldkey or a hotkey on the Bittensor network. Incurs a 1 TAO transaction fee.

The on-chain identity includes attributes such as display name, legal name, web URL, PGP fingerprint, and contact information, among others.

The command prompts the user for the identity attributes and validates the input size for each attribute. It provides an option to update an existing validator hotkey identity. If the user consents to the transaction cost, the identity is updated on the blockchain.

Each field has a maximum size of 64 bytes. The PGP fingerprint field is an exception and has a maximum size of 20 bytes. The user is prompted to enter the PGP fingerprint as a hex string, which is then converted to bytes. The user is also prompted to enter the coldkey or hotkey ``ss58`` address for the identity to be updated.

If the user does not have a hotkey, the coldkey address is used by default. If setting a validator identity, the hotkey will be used by default. If the user is setting an identity for a subnet, the coldkey will be used by default.

**Example:**

```
btcli wallet set_identity
```

Note: This command should only be used if the user is willing to incur the a recycle fee associated with setting an identity on the blockchain. It is a high-level command that makes changes to the blockchain state and should not be used programmatically as part of other scripts or applications.

**Usage**:

```console
btcli wallet set-identity [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--name TEXT`: The display name for the identity.
* `--web-url, --web TEXT`: The web URL for the identity.
* `--image-url, --image TEXT`: The image URL for the identity.
* `--discord TEXT`: The Discord handle for the identity.
* `--description TEXT`: The description for the identity.
* `--additional TEXT`: Additional details for the identity.
* `--github TEXT`: The GitHub repository for the identity.
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--prompt, --prompt / -y, --no-prompt, --yes, --no_prompt`: Enable or disable interactive prompts.  [default: prompt]
* `--help`: Show this message and exit.

### `btcli wallet get-identity`

Shows the identity details of a user's coldkey or hotkey.

The command displays the information in a table format showing:

- Address: The ``ss58`` address of the queried key.

- Item: Various attributes of the identity such as stake, rank, and trust.

- Value: The corresponding values of the attributes.

**Example:**

```
btcli wallet get_identity --key &lt;s58_address&gt;
```

Note: This command is primarily used for informational purposes and has no side effects on the blockchain network state.

**Usage**:

```console
btcli wallet get-identity [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-k, --ss58, --coldkey_ss58, --coldkey.ss58_address, --coldkey.ss58, --key TEXT`: Coldkey address of the wallet
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli wallet sign`

Allows users to sign a message with the provided wallet or wallet hotkey. Use this command to easily prove your ownership of a coldkey or a hotkey.

**Usage:**

Using the provided wallet (coldkey), the command generates a signature for a given message.

**Example:**

```
btcli wallet sign --wallet-name default --message '{"something": "here", "timestamp": 1719908486}'
```

```
btcli wallet sign --wallet-name default --wallet-hotkey hotkey --message '{"something": "here", "timestamp": 1719908486}'
```

**Usage**:

```console
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

### `btcli wallet swap_hotkey`

Swap hotkeys of a given wallet on the blockchain. For a registered key pair, for example, a (coldkeyA, hotkeyA) pair, this command swaps the hotkeyA with a new, unregistered, hotkeyB to move the original registration to the (coldkeyA, hotkeyB) pair.

**Usage:**

The command is used to swap the hotkey of a wallet for another hotkey on that same wallet.

**Important:**

- Make sure that your original key pair (coldkeyA, hotkeyA) is already registered.
- Make sure that you use a newly created hotkeyB in this command. A hotkeyB that is already registered cannot be used in this command.
- Finally, note that this command requires a fee of 1 TAO for recycling and this fee is taken from your wallet (coldkeyA).

**Example:**

```
btcli wallet swap_hotkey destination_hotkey_name --wallet-name your_wallet_name --wallet-hotkey original_hotkey
```

**Usage**:

```console
btcli wallet swap_hotkey [OPTIONS] [DESTINATION_HOTKEY_NAME]
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

### `btcli wallet regen_coldkey`

Regenerate a coldkey for a wallet on the Bittensor blockchain network.

This command is used to create a new coldkey from an existing mnemonic, seed, or JSON file.

**Usage:**

Users can specify a mnemonic, a seed string, or a JSON file path to regenerate a coldkey. The command supports optional password protection for the generated key.

**Example:**

```
btcli wallet regen-coldkey --mnemonic "word1 word2 ... word12"
```


Note: This command is critical for users who need to regenerate their coldkey either for recovery or for security reasons.

**Usage**:

```console
btcli wallet regen_coldkey [OPTIONS]
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

### `btcli wallet regen_coldkeypub`

Regenerates the public part of a coldkey (coldkeypub.txt) for a wallet.

Use this command when you need to move machine for subnet mining. Use the public key or SS58 address from your coldkeypub.txt that you have on another machine to regenerate the coldkeypub.txt on this new machine.

**Usage:**

The command requires either a public key in hexadecimal format or an ``SS58`` address from the existing coldkeypub.txt from old machine to regenerate the coldkeypub on the new machine.

**Example:**

```
btcli wallet regen_coldkeypub --ss58_address 5DkQ4...
```

Note: This command is particularly useful for users who need to regenerate their coldkeypub, perhaps due to file corruption or loss. You will need either ss58 address or public hex key from your old coldkeypub.txt for the wallet. It is a recovery-focused utility that ensures continued access to your wallet functionalities.

**Usage**:

```console
btcli wallet regen_coldkeypub [OPTIONS]
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

### `btcli wallet regen_hotkey`

Regenerates a hotkey for a wallet.

Similar to regenerating a coldkey, this command creates a new hotkey from a mnemonic, seed, or JSON file.

**Usage:**

Users can provide a mnemonic, seed string, or a JSON file to regenerate the hotkey. The command supports optional password protection and can overwrite an existing hotkey.


```
btcli wallet regen_hotkey --seed 0x1234...
```

Note: This command is essential for users who need to regenerate their hotkey, possibly for security upgrades or key recovery.
It should be used with caution to avoid accidental overwriting of existing keys.

**Usage**:

```console
btcli wallet regen_hotkey [OPTIONS]
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

### `btcli wallet new_hotkey`

Create a new hotkey for a wallet.

**Usage:**

This command is used to generate a new hotkey for managing a neuron or participating in a subnet. It provides options for the mnemonic word count, and supports password protection. It also allows overwriting the
existing hotkey.

**Example:**

```
btcli wallet new-hotkey --n_words 24
```

Note: This command is useful to create additional hotkeys for different purposes, such as running multiple subnet miners or subnet validators or separating operational roles within the Bittensor network.

**Usage**:

```console
btcli wallet new_hotkey [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--n-words, --n_words INTEGER`: The number of words used in the mnemonic. Options: [12, 15, 18, 21, 24]
* `--use-password / --no-use-password`: Set to 'True' to protect the generated Bittensor key with a password.  [default: no-use-password]
* `--uri TEXT`: Create wallet from uri (e.g. 'Alice', 'Bob', 'Charlie', 'Dave', 'Eve')
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli wallet new_coldkey`

Create a new coldkey. A coldkey is required for holding TAO balances and performing high-value transactions.

**Usage:**

The command creates a new coldkey. It provides options for the mnemonic word count, and supports password protection. It also allows overwriting an existing coldkey.

**Example:**

```
btcli wallet new_coldkey --n_words 15
```

Note: This command is crucial for users who need to create a new coldkey for enhanced security or as part of setting up a new wallet. It is a foundational step in establishing a secure presence on the Bittensor network.

**Usage**:

```console
btcli wallet new_coldkey [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--n-words, --n_words INTEGER`: The number of words used in the mnemonic. Options: [12, 15, 18, 21, 24]
* `--use-password / --no-use-password`: Set this to `True` to protect the generated Bittensor key with a password.  [default: use-password]
* `--uri TEXT`: Create wallet from uri (e.g. 'Alice', 'Bob', 'Charlie', 'Dave', 'Eve')
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli wallet set_identity`

Create or update the on-chain identity of a coldkey or a hotkey on the Bittensor network. Incurs a 1 TAO transaction fee.

The on-chain identity includes attributes such as display name, legal name, web URL, PGP fingerprint, and contact information, among others.

The command prompts the user for the identity attributes and validates the input size for each attribute. It provides an option to update an existing validator hotkey identity. If the user consents to the transaction cost, the identity is updated on the blockchain.

Each field has a maximum size of 64 bytes. The PGP fingerprint field is an exception and has a maximum size of 20 bytes. The user is prompted to enter the PGP fingerprint as a hex string, which is then converted to bytes. The user is also prompted to enter the coldkey or hotkey ``ss58`` address for the identity to be updated.

If the user does not have a hotkey, the coldkey address is used by default. If setting a validator identity, the hotkey will be used by default. If the user is setting an identity for a subnet, the coldkey will be used by default.

**Example:**

```
btcli wallet set_identity
```

Note: This command should only be used if the user is willing to incur the a recycle fee associated with setting an identity on the blockchain. It is a high-level command that makes changes to the blockchain state and should not be used programmatically as part of other scripts or applications.

**Usage**:

```console
btcli wallet set_identity [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--name TEXT`: The display name for the identity.
* `--web-url, --web TEXT`: The web URL for the identity.
* `--image-url, --image TEXT`: The image URL for the identity.
* `--discord TEXT`: The Discord handle for the identity.
* `--description TEXT`: The description for the identity.
* `--additional TEXT`: Additional details for the identity.
* `--github TEXT`: The GitHub repository for the identity.
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--prompt, --prompt / -y, --no-prompt, --yes, --no_prompt`: Enable or disable interactive prompts.  [default: prompt]
* `--help`: Show this message and exit.

### `btcli wallet get_identity`

Shows the identity details of a user's coldkey or hotkey.

The command displays the information in a table format showing:

- Address: The ``ss58`` address of the queried key.

- Item: Various attributes of the identity such as stake, rank, and trust.

- Value: The corresponding values of the attributes.

**Example:**

```
btcli wallet get_identity --key &lt;s58_address&gt;
```

Note: This command is primarily used for informational purposes and has no side effects on the blockchain network state.

**Usage**:

```console
btcli wallet get_identity [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-k, --ss58, --coldkey_ss58, --coldkey.ss58_address, --coldkey.ss58, --key TEXT`: Coldkey address of the wallet
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

## `btcli w`

**Usage**:

```console
btcli w [OPTIONS] COMMAND [ARGS]...
```

**Options**:

* `--help`: Show this message and exit.

**Commands**:

* `list`: Displays all the wallets and their...
* `swap-hotkey`: Swap hotkeys of a given wallet on the...
* `regen-coldkey`: Regenerate a coldkey for a wallet on the...
* `regen-coldkeypub`: Regenerates the public part of a coldkey...
* `regen-hotkey`: Regenerates a hotkey for a wallet.
* `new-hotkey`: Create a new hotkey for a wallet.
* `new-coldkey`: Create a new coldkey.
* `create`: Create a complete wallet by setting up...
* `balance`: Check the balance of the wallet.
* `history`: Show the history of the transfers carried...
* `overview`: Displays a detailed overview of the user's...
* `transfer`: Send TAO tokens from one wallet to another...
* `inspect`: Displays the details of the user's wallet...
* `faucet`: Obtain test TAO tokens by performing Proof...
* `set-identity`: Create or update the on-chain identity of...
* `get-identity`: Shows the identity details of a user's...
* `sign`: Allows users to sign a message with the...
* `swap_hotkey`: Swap hotkeys of a given wallet on the...
* `regen_coldkey`: Regenerate a coldkey for a wallet on the...
* `regen_coldkeypub`: Regenerates the public part of a coldkey...
* `regen_hotkey`: Regenerates a hotkey for a wallet.
* `new_hotkey`: Create a new hotkey for a wallet.
* `new_coldkey`: Create a new coldkey.
* `set_identity`: Create or update the on-chain identity of...
* `get_identity`: Shows the identity details of a user's...

### `btcli w list`

Displays all the wallets and their corresponding hotkeys that are located in the wallet path specified in the config.

The output display shows each wallet and its associated `ss58` addresses for the coldkey public key and any hotkeys. The output is presented in a hierarchical tree format, with each wallet as a root node and any associated hotkeys as child nodes. The `ss58` address is displayed for each coldkey and hotkey that is not encrypted and exists on the device.

Upon invocation, the command scans the wallet directory and prints a list of all the wallets, indicating whether the
public keys are available (`?` denotes unavailable or encrypted keys).


```
btcli wallet list --path ~/.bittensor
```

Note: This command is read-only and does not modify the filesystem or the blockchain state. It is intended for use with the Bittensor CLI to provide a quick overview of the user's wallets.

**Usage**:

```console
btcli w list [OPTIONS]
```

**Options**:

* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli w swap-hotkey`

Swap hotkeys of a given wallet on the blockchain. For a registered key pair, for example, a (coldkeyA, hotkeyA) pair, this command swaps the hotkeyA with a new, unregistered, hotkeyB to move the original registration to the (coldkeyA, hotkeyB) pair.

**Usage:**

The command is used to swap the hotkey of a wallet for another hotkey on that same wallet.

**Important:**

- Make sure that your original key pair (coldkeyA, hotkeyA) is already registered.
- Make sure that you use a newly created hotkeyB in this command. A hotkeyB that is already registered cannot be used in this command.
- Finally, note that this command requires a fee of 1 TAO for recycling and this fee is taken from your wallet (coldkeyA).

**Example:**

```
btcli wallet swap_hotkey destination_hotkey_name --wallet-name your_wallet_name --wallet-hotkey original_hotkey
```

**Usage**:

```console
btcli w swap-hotkey [OPTIONS] [DESTINATION_HOTKEY_NAME]
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

### `btcli w regen-coldkey`

Regenerate a coldkey for a wallet on the Bittensor blockchain network.

This command is used to create a new coldkey from an existing mnemonic, seed, or JSON file.

**Usage:**

Users can specify a mnemonic, a seed string, or a JSON file path to regenerate a coldkey. The command supports optional password protection for the generated key.

**Example:**

```
btcli wallet regen-coldkey --mnemonic "word1 word2 ... word12"
```


Note: This command is critical for users who need to regenerate their coldkey either for recovery or for security reasons.

**Usage**:

```console
btcli w regen-coldkey [OPTIONS]
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

### `btcli w regen-coldkeypub`

Regenerates the public part of a coldkey (coldkeypub.txt) for a wallet.

Use this command when you need to move machine for subnet mining. Use the public key or SS58 address from your coldkeypub.txt that you have on another machine to regenerate the coldkeypub.txt on this new machine.

**Usage:**

The command requires either a public key in hexadecimal format or an ``SS58`` address from the existing coldkeypub.txt from old machine to regenerate the coldkeypub on the new machine.

**Example:**

```
btcli wallet regen_coldkeypub --ss58_address 5DkQ4...
```

Note: This command is particularly useful for users who need to regenerate their coldkeypub, perhaps due to file corruption or loss. You will need either ss58 address or public hex key from your old coldkeypub.txt for the wallet. It is a recovery-focused utility that ensures continued access to your wallet functionalities.

**Usage**:

```console
btcli w regen-coldkeypub [OPTIONS]
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

### `btcli w regen-hotkey`

Regenerates a hotkey for a wallet.

Similar to regenerating a coldkey, this command creates a new hotkey from a mnemonic, seed, or JSON file.

**Usage:**

Users can provide a mnemonic, seed string, or a JSON file to regenerate the hotkey. The command supports optional password protection and can overwrite an existing hotkey.


```
btcli wallet regen_hotkey --seed 0x1234...
```

Note: This command is essential for users who need to regenerate their hotkey, possibly for security upgrades or key recovery.
It should be used with caution to avoid accidental overwriting of existing keys.

**Usage**:

```console
btcli w regen-hotkey [OPTIONS]
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

### `btcli w new-hotkey`

Create a new hotkey for a wallet.

**Usage:**

This command is used to generate a new hotkey for managing a neuron or participating in a subnet. It provides options for the mnemonic word count, and supports password protection. It also allows overwriting the
existing hotkey.

**Example:**

```
btcli wallet new-hotkey --n_words 24
```

Note: This command is useful to create additional hotkeys for different purposes, such as running multiple subnet miners or subnet validators or separating operational roles within the Bittensor network.

**Usage**:

```console
btcli w new-hotkey [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--n-words, --n_words INTEGER`: The number of words used in the mnemonic. Options: [12, 15, 18, 21, 24]
* `--use-password / --no-use-password`: Set to 'True' to protect the generated Bittensor key with a password.  [default: no-use-password]
* `--uri TEXT`: Create wallet from uri (e.g. 'Alice', 'Bob', 'Charlie', 'Dave', 'Eve')
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli w new-coldkey`

Create a new coldkey. A coldkey is required for holding TAO balances and performing high-value transactions.

**Usage:**

The command creates a new coldkey. It provides options for the mnemonic word count, and supports password protection. It also allows overwriting an existing coldkey.

**Example:**

```
btcli wallet new_coldkey --n_words 15
```

Note: This command is crucial for users who need to create a new coldkey for enhanced security or as part of setting up a new wallet. It is a foundational step in establishing a secure presence on the Bittensor network.

**Usage**:

```console
btcli w new-coldkey [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--n-words, --n_words INTEGER`: The number of words used in the mnemonic. Options: [12, 15, 18, 21, 24]
* `--use-password / --no-use-password`: Set this to `True` to protect the generated Bittensor key with a password.  [default: use-password]
* `--uri TEXT`: Create wallet from uri (e.g. 'Alice', 'Bob', 'Charlie', 'Dave', 'Eve')
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli w create`

Create a complete wallet by setting up both coldkey and hotkeys.

**Usage:**

The command creates a new coldkey and hotkey. It provides an option for mnemonic word count. It supports password protection for the coldkey and allows overwriting of existing keys.

**Example:**

```
btcli wallet create --n_words 21
```

Note: This command is for new users setting up their wallet for the first time, or for those who wish to completely renew their wallet keys. It ensures a fresh start with new keys for secure and effective participation in the Bittensor network.

**Usage**:

```console
btcli w create [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--n-words INTEGER`
* `--use-password / --no-use-password`: Set this to `True` to protect the generated Bittensor key with a password.  [default: use-password]
* `--uri TEXT`: Create wallet from uri (e.g. 'Alice', 'Bob', 'Charlie', 'Dave', 'Eve')
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli w balance`

Check the balance of the wallet. This command shows a detailed view of the wallet's coldkey balances, including free and staked balances.

You can also pass multiple ss58 addresses of coldkeys to check their balance (using --ss58).

**Example:**

- To display the balance of a single wallet, use the command with the `--wallet-name` argument and provide the wallet name:

    ```
    btcli w balance --wallet-name WALLET
    ```

- To use the default config values, use:

    ```
    btcli w balance
    ```

- To display the balances of all your wallets, use the `--all` argument:

    ```
    btcli w balance --all
    ```

- To display the balances of ss58 addresses, use the `--ss58` argument:

    ```
    btcli w balance --ss58 &lt;ss58_address&gt; --ss58 &lt;ss58_address&gt;
    ```

**Usage**:

```console
btcli w balance [OPTIONS]
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

### `btcli w history`

Show the history of the transfers carried out with the provided wallet on the Bittensor network.

**Usage:**

The output shows the latest transfers of the provided wallet, showing the columns 'From', 'To', 'Amount', 'Extrinsic ID' and 'Block Number'.

**Example:**

```
btcli wallet history
```

**Usage**:

```console
btcli w history [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli w overview`

Displays a detailed overview of the user's registered accounts on the Bittensor network.

This command compiles and displays comprehensive information about each neuron associated with the user's wallets, including both hotkeys and coldkeys. It is especially useful for users managing multiple accounts or looking for a summary of their network activities and stake distributions.

**Usage:**

```
btcli wallet overview
```

```
btcli wallet overview --all
```

Note: This command is read-only and does not modify the blockchain state or account configuration.
It provides a quick and comprehensive view of the user's network presence, making it useful for monitoring account status,
stake distribution, and overall contribution to the Bittensor network.

**Usage**:

```console
btcli w overview [OPTIONS]
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
* `--help`: Show this message and exit.

### `btcli w transfer`

Send TAO tokens from one wallet to another wallet on the Bittensor network.

This command is used for transactions between different wallet accounts, enabling users to send tokens to other
participants on the network. The command displays the user's current balance before prompting for the amount
to transfer (send), ensuring transparency and accuracy in the transaction.

**Usage:**

The command requires that you specify the destination address (public key) and the amount of TAO you want transferred.
It checks if sufficient balance exists in your wallet and prompts for confirmation before proceeding with the transaction.

**Example:**

```
btcli wallet transfer --dest 5Dp8... --amount 100
```

Note: This command is used for executing token transfers within the Bittensor network. Users should verify the destination address and the TAO amount before confirming the transaction to avoid errors or loss of funds.

**Usage**:

```console
btcli w transfer [OPTIONS]
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
* `--help`: Show this message and exit.

### `btcli w inspect`

Displays the details of the user's wallet pairs (coldkey, hotkey) on the Bittensor network.

The output is presented as a table with the below columns:

- Coldkey: The coldkey associated with the user's wallet.

- Balance: The balance of the coldkey.

- Delegate: The name of the delegate to which the coldkey has staked TAO.

- Stake: The amount of stake held by both the coldkey and hotkey.

- Emission: The emission or rewards earned from staking.

- Netuid: The network unique identifier of the subnet where the hotkey is active (i.e., validating).

- Hotkey: The hotkey associated with the neuron on the network.

**Usage:**

This command can be used to inspect a single wallet or all the wallets located at a specified path. It is useful for a comprehensive overview of a user's participation and performance in the Bittensor network.

**Example:**

```
btcli wallet inspect
```

```
btcli wallet inspect --all -n 1 -n 2 -n 3
```

Note: The `inspect` command is for displaying information only and does not perform any transactions or state changes on the blockchain. It is intended to be used with Bittensor CLI and not as a standalone function in user code.

**Usage**:

```console
btcli w inspect [OPTIONS]
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
* `--help`: Show this message and exit.

### `btcli w faucet`

Obtain test TAO tokens by performing Proof of Work (PoW).

This command is useful for users who need test tokens for operations on a local blockchain.

**Important:**: THIS COMMAND IS DISABLED ON FINNEY AND TESTNET.

**Usage:**

The command uses the proof-of-work (POW) mechanism to validate the user's effort and rewards them with test TAO tokens. It is
typically used in local blockchain environments where transactions do not use real TAO tokens.

**Example:**

```
btcli wallet faucet --faucet.num_processes 4 --faucet.cuda.use_cuda
```

Note: This command is meant for used in local environments where users can experiment with the blockchain without using real TAO tokens. Users must have the necessary hardware setup, especially when opting for CUDA-based GPU calculations. It is currently disabled on testnet and mainnet (finney). You can only use this command on a local blockchain.

**Usage**:

```console
btcli w faucet [OPTIONS]
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

### `btcli w set-identity`

Create or update the on-chain identity of a coldkey or a hotkey on the Bittensor network. Incurs a 1 TAO transaction fee.

The on-chain identity includes attributes such as display name, legal name, web URL, PGP fingerprint, and contact information, among others.

The command prompts the user for the identity attributes and validates the input size for each attribute. It provides an option to update an existing validator hotkey identity. If the user consents to the transaction cost, the identity is updated on the blockchain.

Each field has a maximum size of 64 bytes. The PGP fingerprint field is an exception and has a maximum size of 20 bytes. The user is prompted to enter the PGP fingerprint as a hex string, which is then converted to bytes. The user is also prompted to enter the coldkey or hotkey ``ss58`` address for the identity to be updated.

If the user does not have a hotkey, the coldkey address is used by default. If setting a validator identity, the hotkey will be used by default. If the user is setting an identity for a subnet, the coldkey will be used by default.

**Example:**

```
btcli wallet set_identity
```

Note: This command should only be used if the user is willing to incur the a recycle fee associated with setting an identity on the blockchain. It is a high-level command that makes changes to the blockchain state and should not be used programmatically as part of other scripts or applications.

**Usage**:

```console
btcli w set-identity [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--name TEXT`: The display name for the identity.
* `--web-url, --web TEXT`: The web URL for the identity.
* `--image-url, --image TEXT`: The image URL for the identity.
* `--discord TEXT`: The Discord handle for the identity.
* `--description TEXT`: The description for the identity.
* `--additional TEXT`: Additional details for the identity.
* `--github TEXT`: The GitHub repository for the identity.
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--prompt, --prompt / -y, --no-prompt, --yes, --no_prompt`: Enable or disable interactive prompts.  [default: prompt]
* `--help`: Show this message and exit.

### `btcli w get-identity`

Shows the identity details of a user's coldkey or hotkey.

The command displays the information in a table format showing:

- Address: The ``ss58`` address of the queried key.

- Item: Various attributes of the identity such as stake, rank, and trust.

- Value: The corresponding values of the attributes.

**Example:**

```
btcli wallet get_identity --key &lt;s58_address&gt;
```

Note: This command is primarily used for informational purposes and has no side effects on the blockchain network state.

**Usage**:

```console
btcli w get-identity [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-k, --ss58, --coldkey_ss58, --coldkey.ss58_address, --coldkey.ss58, --key TEXT`: Coldkey address of the wallet
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli w sign`

Allows users to sign a message with the provided wallet or wallet hotkey. Use this command to easily prove your ownership of a coldkey or a hotkey.

**Usage:**

Using the provided wallet (coldkey), the command generates a signature for a given message.

**Example:**

```
btcli wallet sign --wallet-name default --message '{"something": "here", "timestamp": 1719908486}'
```

```
btcli wallet sign --wallet-name default --wallet-hotkey hotkey --message '{"something": "here", "timestamp": 1719908486}'
```

**Usage**:

```console
btcli w sign [OPTIONS]
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

### `btcli w swap_hotkey`

Swap hotkeys of a given wallet on the blockchain. For a registered key pair, for example, a (coldkeyA, hotkeyA) pair, this command swaps the hotkeyA with a new, unregistered, hotkeyB to move the original registration to the (coldkeyA, hotkeyB) pair.

**Usage:**

The command is used to swap the hotkey of a wallet for another hotkey on that same wallet.

**Important:**

- Make sure that your original key pair (coldkeyA, hotkeyA) is already registered.
- Make sure that you use a newly created hotkeyB in this command. A hotkeyB that is already registered cannot be used in this command.
- Finally, note that this command requires a fee of 1 TAO for recycling and this fee is taken from your wallet (coldkeyA).

**Example:**

```
btcli wallet swap_hotkey destination_hotkey_name --wallet-name your_wallet_name --wallet-hotkey original_hotkey
```

**Usage**:

```console
btcli w swap_hotkey [OPTIONS] [DESTINATION_HOTKEY_NAME]
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

### `btcli w regen_coldkey`

Regenerate a coldkey for a wallet on the Bittensor blockchain network.

This command is used to create a new coldkey from an existing mnemonic, seed, or JSON file.

**Usage:**

Users can specify a mnemonic, a seed string, or a JSON file path to regenerate a coldkey. The command supports optional password protection for the generated key.

**Example:**

```
btcli wallet regen-coldkey --mnemonic "word1 word2 ... word12"
```


Note: This command is critical for users who need to regenerate their coldkey either for recovery or for security reasons.

**Usage**:

```console
btcli w regen_coldkey [OPTIONS]
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

### `btcli w regen_coldkeypub`

Regenerates the public part of a coldkey (coldkeypub.txt) for a wallet.

Use this command when you need to move machine for subnet mining. Use the public key or SS58 address from your coldkeypub.txt that you have on another machine to regenerate the coldkeypub.txt on this new machine.

**Usage:**

The command requires either a public key in hexadecimal format or an ``SS58`` address from the existing coldkeypub.txt from old machine to regenerate the coldkeypub on the new machine.

**Example:**

```
btcli wallet regen_coldkeypub --ss58_address 5DkQ4...
```

Note: This command is particularly useful for users who need to regenerate their coldkeypub, perhaps due to file corruption or loss. You will need either ss58 address or public hex key from your old coldkeypub.txt for the wallet. It is a recovery-focused utility that ensures continued access to your wallet functionalities.

**Usage**:

```console
btcli w regen_coldkeypub [OPTIONS]
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

### `btcli w regen_hotkey`

Regenerates a hotkey for a wallet.

Similar to regenerating a coldkey, this command creates a new hotkey from a mnemonic, seed, or JSON file.

**Usage:**

Users can provide a mnemonic, seed string, or a JSON file to regenerate the hotkey. The command supports optional password protection and can overwrite an existing hotkey.


```
btcli wallet regen_hotkey --seed 0x1234...
```

Note: This command is essential for users who need to regenerate their hotkey, possibly for security upgrades or key recovery.
It should be used with caution to avoid accidental overwriting of existing keys.

**Usage**:

```console
btcli w regen_hotkey [OPTIONS]
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

### `btcli w new_hotkey`

Create a new hotkey for a wallet.

**Usage:**

This command is used to generate a new hotkey for managing a neuron or participating in a subnet. It provides options for the mnemonic word count, and supports password protection. It also allows overwriting the
existing hotkey.

**Example:**

```
btcli wallet new-hotkey --n_words 24
```

Note: This command is useful to create additional hotkeys for different purposes, such as running multiple subnet miners or subnet validators or separating operational roles within the Bittensor network.

**Usage**:

```console
btcli w new_hotkey [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--n-words, --n_words INTEGER`: The number of words used in the mnemonic. Options: [12, 15, 18, 21, 24]
* `--use-password / --no-use-password`: Set to 'True' to protect the generated Bittensor key with a password.  [default: no-use-password]
* `--uri TEXT`: Create wallet from uri (e.g. 'Alice', 'Bob', 'Charlie', 'Dave', 'Eve')
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli w new_coldkey`

Create a new coldkey. A coldkey is required for holding TAO balances and performing high-value transactions.

**Usage:**

The command creates a new coldkey. It provides options for the mnemonic word count, and supports password protection. It also allows overwriting an existing coldkey.

**Example:**

```
btcli wallet new_coldkey --n_words 15
```

Note: This command is crucial for users who need to create a new coldkey for enhanced security or as part of setting up a new wallet. It is a foundational step in establishing a secure presence on the Bittensor network.

**Usage**:

```console
btcli w new_coldkey [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--n-words, --n_words INTEGER`: The number of words used in the mnemonic. Options: [12, 15, 18, 21, 24]
* `--use-password / --no-use-password`: Set this to `True` to protect the generated Bittensor key with a password.  [default: use-password]
* `--uri TEXT`: Create wallet from uri (e.g. 'Alice', 'Bob', 'Charlie', 'Dave', 'Eve')
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli w set_identity`

Create or update the on-chain identity of a coldkey or a hotkey on the Bittensor network. Incurs a 1 TAO transaction fee.

The on-chain identity includes attributes such as display name, legal name, web URL, PGP fingerprint, and contact information, among others.

The command prompts the user for the identity attributes and validates the input size for each attribute. It provides an option to update an existing validator hotkey identity. If the user consents to the transaction cost, the identity is updated on the blockchain.

Each field has a maximum size of 64 bytes. The PGP fingerprint field is an exception and has a maximum size of 20 bytes. The user is prompted to enter the PGP fingerprint as a hex string, which is then converted to bytes. The user is also prompted to enter the coldkey or hotkey ``ss58`` address for the identity to be updated.

If the user does not have a hotkey, the coldkey address is used by default. If setting a validator identity, the hotkey will be used by default. If the user is setting an identity for a subnet, the coldkey will be used by default.

**Example:**

```
btcli wallet set_identity
```

Note: This command should only be used if the user is willing to incur the a recycle fee associated with setting an identity on the blockchain. It is a high-level command that makes changes to the blockchain state and should not be used programmatically as part of other scripts or applications.

**Usage**:

```console
btcli w set_identity [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--name TEXT`: The display name for the identity.
* `--web-url, --web TEXT`: The web URL for the identity.
* `--image-url, --image TEXT`: The image URL for the identity.
* `--discord TEXT`: The Discord handle for the identity.
* `--description TEXT`: The description for the identity.
* `--additional TEXT`: Additional details for the identity.
* `--github TEXT`: The GitHub repository for the identity.
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--prompt, --prompt / -y, --no-prompt, --yes, --no_prompt`: Enable or disable interactive prompts.  [default: prompt]
* `--help`: Show this message and exit.

### `btcli w get_identity`

Shows the identity details of a user's coldkey or hotkey.

The command displays the information in a table format showing:

- Address: The ``ss58`` address of the queried key.

- Item: Various attributes of the identity such as stake, rank, and trust.

- Value: The corresponding values of the attributes.

**Example:**

```
btcli wallet get_identity --key &lt;s58_address&gt;
```

Note: This command is primarily used for informational purposes and has no side effects on the blockchain network state.

**Usage**:

```console
btcli w get_identity [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-k, --ss58, --coldkey_ss58, --coldkey.ss58_address, --coldkey.ss58, --key TEXT`: Coldkey address of the wallet
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

## `btcli wallets`

**Usage**:

```console
btcli wallets [OPTIONS] COMMAND [ARGS]...
```

**Options**:

* `--help`: Show this message and exit.

**Commands**:

* `list`: Displays all the wallets and their...
* `swap-hotkey`: Swap hotkeys of a given wallet on the...
* `regen-coldkey`: Regenerate a coldkey for a wallet on the...
* `regen-coldkeypub`: Regenerates the public part of a coldkey...
* `regen-hotkey`: Regenerates a hotkey for a wallet.
* `new-hotkey`: Create a new hotkey for a wallet.
* `new-coldkey`: Create a new coldkey.
* `create`: Create a complete wallet by setting up...
* `balance`: Check the balance of the wallet.
* `history`: Show the history of the transfers carried...
* `overview`: Displays a detailed overview of the user's...
* `transfer`: Send TAO tokens from one wallet to another...
* `inspect`: Displays the details of the user's wallet...
* `faucet`: Obtain test TAO tokens by performing Proof...
* `set-identity`: Create or update the on-chain identity of...
* `get-identity`: Shows the identity details of a user's...
* `sign`: Allows users to sign a message with the...
* `swap_hotkey`: Swap hotkeys of a given wallet on the...
* `regen_coldkey`: Regenerate a coldkey for a wallet on the...
* `regen_coldkeypub`: Regenerates the public part of a coldkey...
* `regen_hotkey`: Regenerates a hotkey for a wallet.
* `new_hotkey`: Create a new hotkey for a wallet.
* `new_coldkey`: Create a new coldkey.
* `set_identity`: Create or update the on-chain identity of...
* `get_identity`: Shows the identity details of a user's...

### `btcli wallets list`

Displays all the wallets and their corresponding hotkeys that are located in the wallet path specified in the config.

The output display shows each wallet and its associated `ss58` addresses for the coldkey public key and any hotkeys. The output is presented in a hierarchical tree format, with each wallet as a root node and any associated hotkeys as child nodes. The `ss58` address is displayed for each coldkey and hotkey that is not encrypted and exists on the device.

Upon invocation, the command scans the wallet directory and prints a list of all the wallets, indicating whether the
public keys are available (`?` denotes unavailable or encrypted keys).


```
btcli wallet list --path ~/.bittensor
```

Note: This command is read-only and does not modify the filesystem or the blockchain state. It is intended for use with the Bittensor CLI to provide a quick overview of the user's wallets.

**Usage**:

```console
btcli wallets list [OPTIONS]
```

**Options**:

* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli wallets swap-hotkey`

Swap hotkeys of a given wallet on the blockchain. For a registered key pair, for example, a (coldkeyA, hotkeyA) pair, this command swaps the hotkeyA with a new, unregistered, hotkeyB to move the original registration to the (coldkeyA, hotkeyB) pair.

**Usage:**

The command is used to swap the hotkey of a wallet for another hotkey on that same wallet.

**Important:**

- Make sure that your original key pair (coldkeyA, hotkeyA) is already registered.
- Make sure that you use a newly created hotkeyB in this command. A hotkeyB that is already registered cannot be used in this command.
- Finally, note that this command requires a fee of 1 TAO for recycling and this fee is taken from your wallet (coldkeyA).

**Example:**

```
btcli wallet swap_hotkey destination_hotkey_name --wallet-name your_wallet_name --wallet-hotkey original_hotkey
```

**Usage**:

```console
btcli wallets swap-hotkey [OPTIONS] [DESTINATION_HOTKEY_NAME]
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

### `btcli wallets regen-coldkey`

Regenerate a coldkey for a wallet on the Bittensor blockchain network.

This command is used to create a new coldkey from an existing mnemonic, seed, or JSON file.

**Usage:**

Users can specify a mnemonic, a seed string, or a JSON file path to regenerate a coldkey. The command supports optional password protection for the generated key.

**Example:**

```
btcli wallet regen-coldkey --mnemonic "word1 word2 ... word12"
```


Note: This command is critical for users who need to regenerate their coldkey either for recovery or for security reasons.

**Usage**:

```console
btcli wallets regen-coldkey [OPTIONS]
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

### `btcli wallets regen-coldkeypub`

Regenerates the public part of a coldkey (coldkeypub.txt) for a wallet.

Use this command when you need to move machine for subnet mining. Use the public key or SS58 address from your coldkeypub.txt that you have on another machine to regenerate the coldkeypub.txt on this new machine.

**Usage:**

The command requires either a public key in hexadecimal format or an ``SS58`` address from the existing coldkeypub.txt from old machine to regenerate the coldkeypub on the new machine.

**Example:**

```
btcli wallet regen_coldkeypub --ss58_address 5DkQ4...
```

Note: This command is particularly useful for users who need to regenerate their coldkeypub, perhaps due to file corruption or loss. You will need either ss58 address or public hex key from your old coldkeypub.txt for the wallet. It is a recovery-focused utility that ensures continued access to your wallet functionalities.

**Usage**:

```console
btcli wallets regen-coldkeypub [OPTIONS]
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

### `btcli wallets regen-hotkey`

Regenerates a hotkey for a wallet.

Similar to regenerating a coldkey, this command creates a new hotkey from a mnemonic, seed, or JSON file.

**Usage:**

Users can provide a mnemonic, seed string, or a JSON file to regenerate the hotkey. The command supports optional password protection and can overwrite an existing hotkey.


```
btcli wallet regen_hotkey --seed 0x1234...
```

Note: This command is essential for users who need to regenerate their hotkey, possibly for security upgrades or key recovery.
It should be used with caution to avoid accidental overwriting of existing keys.

**Usage**:

```console
btcli wallets regen-hotkey [OPTIONS]
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

### `btcli wallets new-hotkey`

Create a new hotkey for a wallet.

**Usage:**

This command is used to generate a new hotkey for managing a neuron or participating in a subnet. It provides options for the mnemonic word count, and supports password protection. It also allows overwriting the
existing hotkey.

**Example:**

```
btcli wallet new-hotkey --n_words 24
```

Note: This command is useful to create additional hotkeys for different purposes, such as running multiple subnet miners or subnet validators or separating operational roles within the Bittensor network.

**Usage**:

```console
btcli wallets new-hotkey [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--n-words, --n_words INTEGER`: The number of words used in the mnemonic. Options: [12, 15, 18, 21, 24]
* `--use-password / --no-use-password`: Set to 'True' to protect the generated Bittensor key with a password.  [default: no-use-password]
* `--uri TEXT`: Create wallet from uri (e.g. 'Alice', 'Bob', 'Charlie', 'Dave', 'Eve')
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli wallets new-coldkey`

Create a new coldkey. A coldkey is required for holding TAO balances and performing high-value transactions.

**Usage:**

The command creates a new coldkey. It provides options for the mnemonic word count, and supports password protection. It also allows overwriting an existing coldkey.

**Example:**

```
btcli wallet new_coldkey --n_words 15
```

Note: This command is crucial for users who need to create a new coldkey for enhanced security or as part of setting up a new wallet. It is a foundational step in establishing a secure presence on the Bittensor network.

**Usage**:

```console
btcli wallets new-coldkey [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--n-words, --n_words INTEGER`: The number of words used in the mnemonic. Options: [12, 15, 18, 21, 24]
* `--use-password / --no-use-password`: Set this to `True` to protect the generated Bittensor key with a password.  [default: use-password]
* `--uri TEXT`: Create wallet from uri (e.g. 'Alice', 'Bob', 'Charlie', 'Dave', 'Eve')
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli wallets create`

Create a complete wallet by setting up both coldkey and hotkeys.

**Usage:**

The command creates a new coldkey and hotkey. It provides an option for mnemonic word count. It supports password protection for the coldkey and allows overwriting of existing keys.

**Example:**

```
btcli wallet create --n_words 21
```

Note: This command is for new users setting up their wallet for the first time, or for those who wish to completely renew their wallet keys. It ensures a fresh start with new keys for secure and effective participation in the Bittensor network.

**Usage**:

```console
btcli wallets create [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--n-words INTEGER`
* `--use-password / --no-use-password`: Set this to `True` to protect the generated Bittensor key with a password.  [default: use-password]
* `--uri TEXT`: Create wallet from uri (e.g. 'Alice', 'Bob', 'Charlie', 'Dave', 'Eve')
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli wallets balance`

Check the balance of the wallet. This command shows a detailed view of the wallet's coldkey balances, including free and staked balances.

You can also pass multiple ss58 addresses of coldkeys to check their balance (using --ss58).

**Example:**

- To display the balance of a single wallet, use the command with the `--wallet-name` argument and provide the wallet name:

    ```
    btcli w balance --wallet-name WALLET
    ```

- To use the default config values, use:

    ```
    btcli w balance
    ```

- To display the balances of all your wallets, use the `--all` argument:

    ```
    btcli w balance --all
    ```

- To display the balances of ss58 addresses, use the `--ss58` argument:

    ```
    btcli w balance --ss58 &lt;ss58_address&gt; --ss58 &lt;ss58_address&gt;
    ```

**Usage**:

```console
btcli wallets balance [OPTIONS]
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

### `btcli wallets history`

Show the history of the transfers carried out with the provided wallet on the Bittensor network.

**Usage:**

The output shows the latest transfers of the provided wallet, showing the columns 'From', 'To', 'Amount', 'Extrinsic ID' and 'Block Number'.

**Example:**

```
btcli wallet history
```

**Usage**:

```console
btcli wallets history [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli wallets overview`

Displays a detailed overview of the user's registered accounts on the Bittensor network.

This command compiles and displays comprehensive information about each neuron associated with the user's wallets, including both hotkeys and coldkeys. It is especially useful for users managing multiple accounts or looking for a summary of their network activities and stake distributions.

**Usage:**

```
btcli wallet overview
```

```
btcli wallet overview --all
```

Note: This command is read-only and does not modify the blockchain state or account configuration.
It provides a quick and comprehensive view of the user's network presence, making it useful for monitoring account status,
stake distribution, and overall contribution to the Bittensor network.

**Usage**:

```console
btcli wallets overview [OPTIONS]
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
* `--help`: Show this message and exit.

### `btcli wallets transfer`

Send TAO tokens from one wallet to another wallet on the Bittensor network.

This command is used for transactions between different wallet accounts, enabling users to send tokens to other
participants on the network. The command displays the user's current balance before prompting for the amount
to transfer (send), ensuring transparency and accuracy in the transaction.

**Usage:**

The command requires that you specify the destination address (public key) and the amount of TAO you want transferred.
It checks if sufficient balance exists in your wallet and prompts for confirmation before proceeding with the transaction.

**Example:**

```
btcli wallet transfer --dest 5Dp8... --amount 100
```

Note: This command is used for executing token transfers within the Bittensor network. Users should verify the destination address and the TAO amount before confirming the transaction to avoid errors or loss of funds.

**Usage**:

```console
btcli wallets transfer [OPTIONS]
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
* `--help`: Show this message and exit.

### `btcli wallets inspect`

Displays the details of the user's wallet pairs (coldkey, hotkey) on the Bittensor network.

The output is presented as a table with the below columns:

- Coldkey: The coldkey associated with the user's wallet.

- Balance: The balance of the coldkey.

- Delegate: The name of the delegate to which the coldkey has staked TAO.

- Stake: The amount of stake held by both the coldkey and hotkey.

- Emission: The emission or rewards earned from staking.

- Netuid: The network unique identifier of the subnet where the hotkey is active (i.e., validating).

- Hotkey: The hotkey associated with the neuron on the network.

**Usage:**

This command can be used to inspect a single wallet or all the wallets located at a specified path. It is useful for a comprehensive overview of a user's participation and performance in the Bittensor network.

**Example:**

```
btcli wallet inspect
```

```
btcli wallet inspect --all -n 1 -n 2 -n 3
```

Note: The `inspect` command is for displaying information only and does not perform any transactions or state changes on the blockchain. It is intended to be used with Bittensor CLI and not as a standalone function in user code.

**Usage**:

```console
btcli wallets inspect [OPTIONS]
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
* `--help`: Show this message and exit.

### `btcli wallets faucet`

Obtain test TAO tokens by performing Proof of Work (PoW).

This command is useful for users who need test tokens for operations on a local blockchain.

**Important:**: THIS COMMAND IS DISABLED ON FINNEY AND TESTNET.

**Usage:**

The command uses the proof-of-work (POW) mechanism to validate the user's effort and rewards them with test TAO tokens. It is
typically used in local blockchain environments where transactions do not use real TAO tokens.

**Example:**

```
btcli wallet faucet --faucet.num_processes 4 --faucet.cuda.use_cuda
```

Note: This command is meant for used in local environments where users can experiment with the blockchain without using real TAO tokens. Users must have the necessary hardware setup, especially when opting for CUDA-based GPU calculations. It is currently disabled on testnet and mainnet (finney). You can only use this command on a local blockchain.

**Usage**:

```console
btcli wallets faucet [OPTIONS]
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

### `btcli wallets set-identity`

Create or update the on-chain identity of a coldkey or a hotkey on the Bittensor network. Incurs a 1 TAO transaction fee.

The on-chain identity includes attributes such as display name, legal name, web URL, PGP fingerprint, and contact information, among others.

The command prompts the user for the identity attributes and validates the input size for each attribute. It provides an option to update an existing validator hotkey identity. If the user consents to the transaction cost, the identity is updated on the blockchain.

Each field has a maximum size of 64 bytes. The PGP fingerprint field is an exception and has a maximum size of 20 bytes. The user is prompted to enter the PGP fingerprint as a hex string, which is then converted to bytes. The user is also prompted to enter the coldkey or hotkey ``ss58`` address for the identity to be updated.

If the user does not have a hotkey, the coldkey address is used by default. If setting a validator identity, the hotkey will be used by default. If the user is setting an identity for a subnet, the coldkey will be used by default.

**Example:**

```
btcli wallet set_identity
```

Note: This command should only be used if the user is willing to incur the a recycle fee associated with setting an identity on the blockchain. It is a high-level command that makes changes to the blockchain state and should not be used programmatically as part of other scripts or applications.

**Usage**:

```console
btcli wallets set-identity [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--name TEXT`: The display name for the identity.
* `--web-url, --web TEXT`: The web URL for the identity.
* `--image-url, --image TEXT`: The image URL for the identity.
* `--discord TEXT`: The Discord handle for the identity.
* `--description TEXT`: The description for the identity.
* `--additional TEXT`: Additional details for the identity.
* `--github TEXT`: The GitHub repository for the identity.
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--prompt, --prompt / -y, --no-prompt, --yes, --no_prompt`: Enable or disable interactive prompts.  [default: prompt]
* `--help`: Show this message and exit.

### `btcli wallets get-identity`

Shows the identity details of a user's coldkey or hotkey.

The command displays the information in a table format showing:

- Address: The ``ss58`` address of the queried key.

- Item: Various attributes of the identity such as stake, rank, and trust.

- Value: The corresponding values of the attributes.

**Example:**

```
btcli wallet get_identity --key &lt;s58_address&gt;
```

Note: This command is primarily used for informational purposes and has no side effects on the blockchain network state.

**Usage**:

```console
btcli wallets get-identity [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-k, --ss58, --coldkey_ss58, --coldkey.ss58_address, --coldkey.ss58, --key TEXT`: Coldkey address of the wallet
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli wallets sign`

Allows users to sign a message with the provided wallet or wallet hotkey. Use this command to easily prove your ownership of a coldkey or a hotkey.

**Usage:**

Using the provided wallet (coldkey), the command generates a signature for a given message.

**Example:**

```
btcli wallet sign --wallet-name default --message '{"something": "here", "timestamp": 1719908486}'
```

```
btcli wallet sign --wallet-name default --wallet-hotkey hotkey --message '{"something": "here", "timestamp": 1719908486}'
```


**Usage**:

```console
btcli wallets sign [OPTIONS]
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

### `btcli wallets swap_hotkey`

Swap hotkeys of a given wallet on the blockchain. For a registered key pair, for example, a (coldkeyA, hotkeyA) pair, this command swaps the hotkeyA with a new, unregistered, hotkeyB to move the original registration to the (coldkeyA, hotkeyB) pair.

**Usage:**

The command is used to swap the hotkey of a wallet for another hotkey on that same wallet.

**Important:**

- Make sure that your original key pair (coldkeyA, hotkeyA) is already registered.
- Make sure that you use a newly created hotkeyB in this command. A hotkeyB that is already registered cannot be used in this command.
- Finally, note that this command requires a fee of 1 TAO for recycling and this fee is taken from your wallet (coldkeyA).

**Example:**

```
btcli wallet swap_hotkey destination_hotkey_name --wallet-name your_wallet_name --wallet-hotkey original_hotkey
```

**Usage**:

```console
btcli wallets swap_hotkey [OPTIONS] [DESTINATION_HOTKEY_NAME]
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

### `btcli wallets regen_coldkey`

Regenerate a coldkey for a wallet on the Bittensor blockchain network.

This command is used to create a new coldkey from an existing mnemonic, seed, or JSON file.

**Usage:**

Users can specify a mnemonic, a seed string, or a JSON file path to regenerate a coldkey. The command supports optional password protection for the generated key.

**Example:**

```
btcli wallet regen-coldkey --mnemonic "word1 word2 ... word12"
```


Note: This command is critical for users who need to regenerate their coldkey either for recovery or for security reasons.

**Usage**:

```console
btcli wallets regen_coldkey [OPTIONS]
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

### `btcli wallets regen_coldkeypub`

Regenerates the public part of a coldkey (coldkeypub.txt) for a wallet.

Use this command when you need to move machine for subnet mining. Use the public key or SS58 address from your coldkeypub.txt that you have on another machine to regenerate the coldkeypub.txt on this new machine.

**Usage:**

The command requires either a public key in hexadecimal format or an ``SS58`` address from the existing coldkeypub.txt from old machine to regenerate the coldkeypub on the new machine.

**Example:**

```
btcli wallet regen_coldkeypub --ss58_address 5DkQ4...
```

Note: This command is particularly useful for users who need to regenerate their coldkeypub, perhaps due to file corruption or loss. You will need either ss58 address or public hex key from your old coldkeypub.txt for the wallet. It is a recovery-focused utility that ensures continued access to your wallet functionalities.

**Usage**:

```console
btcli wallets regen_coldkeypub [OPTIONS]
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

### `btcli wallets regen_hotkey`

Regenerates a hotkey for a wallet.

Similar to regenerating a coldkey, this command creates a new hotkey from a mnemonic, seed, or JSON file.

**Usage:**

Users can provide a mnemonic, seed string, or a JSON file to regenerate the hotkey. The command supports optional password protection and can overwrite an existing hotkey.


```
btcli wallet regen_hotkey --seed 0x1234...
```

Note: This command is essential for users who need to regenerate their hotkey, possibly for security upgrades or key recovery.
It should be used with caution to avoid accidental overwriting of existing keys.

**Usage**:

```console
btcli wallets regen_hotkey [OPTIONS]
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

### `btcli wallets new_hotkey`

Create a new hotkey for a wallet.

**Usage:**

This command is used to generate a new hotkey for managing a neuron or participating in a subnet. It provides options for the mnemonic word count, and supports password protection. It also allows overwriting the
existing hotkey.

**Example:**

```
btcli wallet new-hotkey --n_words 24
```

Note: This command is useful to create additional hotkeys for different purposes, such as running multiple subnet miners or subnet validators or separating operational roles within the Bittensor network.

**Usage**:

```console
btcli wallets new_hotkey [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--n-words, --n_words INTEGER`: The number of words used in the mnemonic. Options: [12, 15, 18, 21, 24]
* `--use-password / --no-use-password`: Set to 'True' to protect the generated Bittensor key with a password.  [default: no-use-password]
* `--uri TEXT`: Create wallet from uri (e.g. 'Alice', 'Bob', 'Charlie', 'Dave', 'Eve')
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli wallets new_coldkey`

Create a new coldkey. A coldkey is required for holding TAO balances and performing high-value transactions.

**Usage:**

The command creates a new coldkey. It provides options for the mnemonic word count, and supports password protection. It also allows overwriting an existing coldkey.

**Example:**

```
btcli wallet new_coldkey --n_words 15
```

Note: This command is crucial for users who need to create a new coldkey for enhanced security or as part of setting up a new wallet. It is a foundational step in establishing a secure presence on the Bittensor network.

**Usage**:

```console
btcli wallets new_coldkey [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--n-words, --n_words INTEGER`: The number of words used in the mnemonic. Options: [12, 15, 18, 21, 24]
* `--use-password / --no-use-password`: Set this to `True` to protect the generated Bittensor key with a password.  [default: use-password]
* `--uri TEXT`: Create wallet from uri (e.g. 'Alice', 'Bob', 'Charlie', 'Dave', 'Eve')
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli wallets set_identity`

Create or update the on-chain identity of a coldkey or a hotkey on the Bittensor network. Incurs a 1 TAO transaction fee.

The on-chain identity includes attributes such as display name, legal name, web URL, PGP fingerprint, and contact information, among others.

The command prompts the user for the identity attributes and validates the input size for each attribute. It provides an option to update an existing validator hotkey identity. If the user consents to the transaction cost, the identity is updated on the blockchain.

Each field has a maximum size of 64 bytes. The PGP fingerprint field is an exception and has a maximum size of 20 bytes. The user is prompted to enter the PGP fingerprint as a hex string, which is then converted to bytes. The user is also prompted to enter the coldkey or hotkey ``ss58`` address for the identity to be updated.

If the user does not have a hotkey, the coldkey address is used by default. If setting a validator identity, the hotkey will be used by default. If the user is setting an identity for a subnet, the coldkey will be used by default.

**Example:**

```
btcli wallet set_identity
```

Note: This command should only be used if the user is willing to incur the a recycle fee associated with setting an identity on the blockchain. It is a high-level command that makes changes to the blockchain state and should not be used programmatically as part of other scripts or applications.

**Usage**:

```console
btcli wallets set_identity [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--name TEXT`: The display name for the identity.
* `--web-url, --web TEXT`: The web URL for the identity.
* `--image-url, --image TEXT`: The image URL for the identity.
* `--discord TEXT`: The Discord handle for the identity.
* `--description TEXT`: The description for the identity.
* `--additional TEXT`: Additional details for the identity.
* `--github TEXT`: The GitHub repository for the identity.
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--prompt, --prompt / -y, --no-prompt, --yes, --no_prompt`: Enable or disable interactive prompts.  [default: prompt]
* `--help`: Show this message and exit.

### `btcli wallets get_identity`

Shows the identity details of a user's coldkey or hotkey.

The command displays the information in a table format showing:

- Address: The ``ss58`` address of the queried key.

- Item: Various attributes of the identity such as stake, rank, and trust.

- Value: The corresponding values of the attributes.

**Example:**

```
btcli wallet get_identity --key &lt;s58_address&gt;
```

Note: This command is primarily used for informational purposes and has no side effects on the blockchain network state.

**Usage**:

```console
btcli wallets get_identity [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-k, --ss58, --coldkey_ss58, --coldkey.ss58_address, --coldkey.ss58, --key TEXT`: Coldkey address of the wallet
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

## `btcli stake`

**Usage**:

```console
btcli stake [OPTIONS] COMMAND [ARGS]...
```

**Options**:

* `--help`: Show this message and exit.

**Commands**:

* `add`: Stake TAO to one or more hotkeys on...
* `remove`: Unstake TAO from one or more hotkeys and...
* `list`: Display detailed stake information for a...
* `move`: Move staked TAO between hotkeys while...
* `transfer`: Transfer stake between coldkeys while...
* `swap`: Swap stake between different subnets while...
* `child`: Child Hotkey commands, alias: `children`
* `children`

### `btcli stake add`

Stake TAO to one or more hotkeys on specific netuids with your coldkey.

Stake is always added through your coldkey's free balance. For stake movement, see the `btcli stake move` command.

Common Examples:
1. Interactive staking (guided prompts):
    ```
    btcli stake add
    ```

2. Safe staking with rate tolerance of 10% with partial transaction disabled:
    ```
    btcli stake add --amount 100 --netuid 1 --safe --tolerance 0.1 --no-partial
    ```

3. Allow partial stake if rates change with tolerance of 10%:
    ```
    btcli stake add --amount 300 --safe --partial --tolerance 0.1
    ```

4. Unsafe staking with no rate protection:
    ```
    btcli stake add --amount 300 --netuid 1 --unsafe
    ```

5. Stake to multiple hotkeys:
    ```
    btcli stake add --amount 200 --include-hotkeys hk_ss58_1,hk_ss58_2,hk_ss58_3
    ```

6. Stake all balance to a subnet:
    ```
    btcli stake add --all --netuid 3
    ```

Safe Staking Parameters:--safe: Enables rate tolerance checks
 --tolerance: Maximum % rate change allowed (0.05 = 5%)
 --partial: Complete partial stake if rates exceed tolerance

**Usage**:

```console
btcli stake add [OPTIONS]
```

**Options**:

* `-a, --all-tokens, --all`: When set, the command stakes all the available TAO from the coldkey.
* `--amount FLOAT`: The amount of TAO to stake  [default: 0.0]
* `-in, --include-hotkeys, --hotkey-ss58-address TEXT`: Specifies hotkeys by name or ss58 address to stake to. For example, `-in hk1,hk2`
* `-ex, --exclude-hotkeys TEXT`: Specifies hotkeys by name or ss58 address to not to stake to (use this option only with `--all-hotkeys`) i.e. `--all-hotkeys -ex hk3,hk4`
* `--all-hotkeys / --no-all-hotkeys`: When set, this command stakes to all hotkeys associated with the wallet. Do not use if specifying hotkeys in `--include-hotkeys`.  [default: no-all-hotkeys]
* `--netuid INTEGER`: The netuid of the subnet in the network, (e.g. 1).
* `--all-netuids / --no-all-netuids`: Use all netuids  [default: no-all-netuids]
* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--slippage, --slippage-tolerance, --tolerance FLOAT`: Set the rate tolerance percentage for transactions (default: 0.05%).
* `--safe-staking, --safe / --no-safe-staking, --unsafe`: Enable or disable safe staking mode (default: enabled).
* `--allow-partial-stake, --partial, --allow, --allow-partial / --no-allow-partial-stake, --no-partial, --not-allow, --not-partial`: Enable or disable partial stake mode (default: disabled).
* `--prompt, --prompt / -y, --no-prompt, --yes, --no_prompt`: Enable or disable interactive prompts.  [default: prompt]
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli stake remove`

Unstake TAO from one or more hotkeys and transfer them back to the user's coldkey wallet.

This command is used to withdraw TAO or Alpha stake from different hotkeys.

Common Examples:
1. Interactive unstaking (guided prompts):
    ```
    btcli stake remove
    ```

2. Safe unstaking with 10% rate tolerance:
    ```
    btcli stake remove --amount 100 --netuid 1 --safe --tolerance 0.1
    ```

3. Allow partial unstake if rates change:
    ```
    btcli stake remove --amount 300 --safe --partial
    ```

4. Unstake from multiple hotkeys:
    ```
    btcli stake remove --amount 200 --include-hotkeys hk1,hk2,hk3
    ```

5. Unstake all from a hotkey:
    ```
    btcli stake remove --all
    ```

6. Unstake all Alpha from a hotkey and stake to Root:
    ```
    btcli stake remove --all-alpha
    ```

Safe Staking Parameters:
 --safe: Enables rate tolerance checks during unstaking
 --tolerance: Max allowed rate change (0.05 = 5%)
 --partial: Complete partial unstake if rates exceed tolerance

**Usage**:

```console
btcli stake remove [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--netuid INTEGER`: The netuid of the subnet in the network, (e.g. 1).
* `--all-netuids / --no-all-netuids`: Use all netuids  [default: no-all-netuids]
* `-a, --amount FLOAT`: The amount of TAO to unstake.  [default: 0.0]
* `--hotkey-ss58-address TEXT`: The ss58 address of the hotkey to unstake from.
* `-in, --include-hotkeys TEXT`: Specifies the hotkeys by name or ss58 address to unstake from. For example, `-in hk1,hk2`
* `-ex, --exclude-hotkeys TEXT`: Specifies the hotkeys by name or ss58 address not to unstake from (only use with `--all-hotkeys`) i.e. `--all-hotkeys -ex hk3,hk4`
* `--all-hotkeys / --no-all-hotkeys`: When set, this command unstakes from all the hotkeys associated with the wallet. Do not use if specifying hotkeys in `--include-hotkeys`.  [default: no-all-hotkeys]
* `--slippage, --slippage-tolerance, --tolerance FLOAT`: Set the rate tolerance percentage for transactions (default: 0.05%).
* `--safe-staking, --safe / --no-safe-staking, --unsafe`: Enable or disable safe staking mode (default: enabled).
* `--allow-partial-stake, --partial, --allow, --allow-partial / --no-allow-partial-stake, --no-partial, --not-allow, --not-partial`: Enable or disable partial stake mode (default: disabled).
* `--prompt, --prompt / -y, --no-prompt, --yes, --no_prompt`: Enable or disable interactive prompts.  [default: prompt]
* `-i, --interactive`: Enter interactive mode for unstaking.
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli stake list`

Display detailed stake information for a wallet across all subnets.

Shows stake allocations, exchange rates, and emissions for each hotkey.

Common Examples:
1. Basic stake overview:
```
btcli stake list --wallet.name my_wallet
```

2. Live updating view with refresh:
```
btcli stake list --wallet.name my_wallet --live
```

3. View specific coldkey by address:
```
btcli stake list --ss58 5Dk...X3q
```

4. Verbose output with full values:
```
btcli stake list --wallet.name my_wallet --verbose
```

**Usage**:

```console
btcli stake list [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `--ss58, --coldkey_ss58, --coldkey.ss58_address, --coldkey.ss58 TEXT`: Coldkey address of the wallet
* `--live`: Display live view of the table
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--prompt, --prompt / -y, --no-prompt, --yes, --no_prompt`: Enable or disable interactive prompts.  [default: prompt]
* `--help`: Show this message and exit.

### `btcli stake move`

Move staked TAO between hotkeys while keeping the same coldkey ownership.

This command allows you to:
- Move stake from one hotkey to another hotkey
- Move stake between different subnets
- Keep the same coldkey ownership

You can specify:
- The origin subnet (--origin-netuid)
- The destination subnet (--dest-netuid)
- The destination hotkey (--dest-hotkey)
- The amount to move (--amount)

If no arguments are provided, an interactive selection menu will be shown.

**Example:**

```
btcli stake move
```

**Usage**:

```console
btcli stake move [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--origin-netuid INTEGER`: Origin netuid
* `--dest-netuid INTEGER`: Destination netuid
* `--dest-ss58, --dest TEXT`: Destination hotkey
* `--amount FLOAT`: The amount of TAO to stake
* `--stake-all, --all`: Stake all
* `--prompt, --prompt / -y, --no-prompt, --yes, --no_prompt`: Enable or disable interactive prompts.  [default: prompt]
* `--help`: Show this message and exit.

### `btcli stake transfer`

Transfer stake between coldkeys while keeping the same hotkey ownership.

This command allows you to:
- Transfer stake from one coldkey to another coldkey
- Keep the same hotkey ownership
- Transfer stake between different subnets

You can specify:
- The origin subnet (--origin-netuid)
- The destination subnet (--dest-netuid)
- The destination wallet/address (--dest)
- The amount to transfer (--amount)

If no arguments are provided, an interactive selection menu will be shown.

**Example:**

Transfer 100 TAO from subnet 1 to subnet 2:
```
btcli stake transfer --origin-netuid 1 --dest-netuid 2 --dest wallet2 --amount 100
```

Using SS58 address:
```
btcli stake transfer --origin-netuid 1 --dest-netuid 2 --dest 5FrLxJsyJ5x9n2rmxFwosFraxFCKcXZDngEP9H7qjkKgHLcK --amount 100
```

**Usage**:

```console
btcli stake transfer [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--origin-netuid INTEGER`: The netuid to transfer stake from
* `--dest-netuid INTEGER`: The netuid to transfer stake to
* `--dest-ss58, --dest, --dest-coldkey TEXT`: The destination wallet name or SS58 address to transfer stake to
* `-a, --amount FLOAT`: Amount of stake to transfer
* `--prompt, --prompt / -y, --no-prompt, --yes, --no_prompt`: Enable or disable interactive prompts.  [default: prompt]
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli stake swap`

Swap stake between different subnets while keeping the same coldkey-hotkey pair ownership.

This command allows you to:
- Move stake from one subnet to another subnet
- Keep the same coldkey ownership
- Keep the same hotkey ownership

You can specify:
- The origin subnet (--origin-netuid)
- The destination subnet (--dest-netuid)
- The amount to swap (--amount)

If no arguments are provided, an interactive selection menu will be shown.

**Example:**

Swap 100 TAO from subnet 1 to subnet 2:
```
btcli stake swap --wallet-name default --wallet-hotkey default --origin-netuid 1 --dest-netuid 2 --amount 100
```

**Usage**:

```console
btcli stake swap [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `-o, --origin-netuid, --origin INTEGER`: The netuid to swap stake from
* `-d, --dest-netuid, --dest INTEGER`: The netuid to swap stake to
* `-a, --amount FLOAT`: Amount of stake to swap
* `--swap-all, --all`: Swap all available stake
* `--prompt, --prompt / -y, --no-prompt, --yes, --no_prompt`: Enable or disable interactive prompts.  [default: prompt]
* `--wait-for-inclusion / --no-wait-for-inclusion`: If `True`, waits until the transaction is included in a block.  [default: wait-for-inclusion]
* `--wait-for-finalization / --no-wait-for-finalization`: If `True`, waits until the transaction is finalized on the blockchain.  [default: wait-for-finalization]
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli stake child`

**Usage**:

```console
btcli stake child [OPTIONS] COMMAND [ARGS]...
```

**Options**:

* `--help`: Show this message and exit.

**Commands**:

* `get`: Get all the child hotkeys on a specified...
* `set`: Set child hotkeys on specified subnets.
* `revoke`: Remove all children hotkeys on a specified...
* `take`: Get and set your child hotkey take on a...

#### `btcli stake child get`

Get all the child hotkeys on a specified subnet.

Users can specify the subnet and see the child hotkeys and the proportion that is given to them. This command is used to view the authority delegated to different hotkeys on the subnet.

**Example:**

```
btcli stake child get --netuid 1
```
```
btcli stake child get --all-netuids
```

**Usage**:

```console
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

#### `btcli stake child set`

Set child hotkeys on specified subnets.

Users can specify the 'proportion' to delegate to child hotkeys (ss58 address). The sum of proportions cannot be greater than 1.

This command is used to delegate authority to different hotkeys, securing their position and influence on the subnet.

**Example:**

```
btcli stake child set -c 5FCL3gmjtQV4xxxxuEPEFQVhyyyyqYgNwX7drFLw7MSdBnxP -c 5Hp5dxxxxtGg7pu8dN2btyyyyVA1vELmM9dy8KQv3LxV8PA7 --hotkey default --netuid 1 -p 0.3 -p 0.7
```

**Usage**:

```console
btcli stake child set [OPTIONS]
```

**Options**:

* `-c, --children TEXT`: Enter child hotkeys (ss58)
* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--netuid INTEGER`: The netuid of the subnet in the network, (e.g. 1).
* `--all-netuids / --no-all-netuids`: Use all netuids  [default: no-all-netuids]
* `-p, --proportions, --prop FLOAT`: Enter the stake weight proportions for the child hotkeys (sum should be less than or equal to 1)
* `--wait-for-inclusion / --no-wait-for-inclusion`: If `True`, waits until the transaction is included in a block.  [default: wait-for-inclusion]
* `--wait-for-finalization / --no-wait-for-finalization`: If `True`, waits until the transaction is finalized on the blockchain.  [default: wait-for-finalization]
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

#### `btcli stake child revoke`

Remove all children hotkeys on a specified subnet.

This command is used to remove delegated authority from all child hotkeys, removing their position and influence on the subnet.

**Example:**

```
btcli stake child revoke --hotkey &lt;parent_hotkey&gt; --netuid 1
```

**Usage**:

```console
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

#### `btcli stake child take`

Get and set your child hotkey take on a specified subnet.

The child hotkey take must be between 0 - 18%.

**Example:**

To get the current take value, do not use the '--take' option:

    ```
    btcli stake child take --hotkey &lt;child_hotkey&gt; --netuid 1
    ```

To set a new take value, use the '--take' option:

    ```
    btcli stake child take --hotkey &lt;child_hotkey&gt; --take 0.12 --netuid 1
    ```

**Usage**:

```console
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

### `btcli stake children`

**Usage**:

```console
btcli stake children [OPTIONS] COMMAND [ARGS]...
```

**Options**:

* `--help`: Show this message and exit.

**Commands**:

* `get`: Get all the child hotkeys on a specified...
* `set`: Set child hotkeys on specified subnets.
* `revoke`: Remove all children hotkeys on a specified...
* `take`: Get and set your child hotkey take on a...

#### `btcli stake children get`

Get all the child hotkeys on a specified subnet.

Users can specify the subnet and see the child hotkeys and the proportion that is given to them. This command is used to view the authority delegated to different hotkeys on the subnet.

**Example:**

```
btcli stake child get --netuid 1
```
```
btcli stake child get --all-netuids
```

**Usage**:

```console
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

#### `btcli stake children set`

Set child hotkeys on specified subnets.

Users can specify the 'proportion' to delegate to child hotkeys (ss58 address). The sum of proportions cannot be greater than 1.

This command is used to delegate authority to different hotkeys, securing their position and influence on the subnet.

**Example:**

```
btcli stake child set -c 5FCL3gmjtQV4xxxxuEPEFQVhyyyyqYgNwX7drFLw7MSdBnxP -c 5Hp5dxxxxtGg7pu8dN2btyyyyVA1vELmM9dy8KQv3LxV8PA7 --hotkey default --netuid 1 -p 0.3 -p 0.7
```

**Usage**:

```console
btcli stake children set [OPTIONS]
```

**Options**:

* `-c, --children TEXT`: Enter child hotkeys (ss58)
* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--netuid INTEGER`: The netuid of the subnet in the network, (e.g. 1).
* `--all-netuids / --no-all-netuids`: Use all netuids  [default: no-all-netuids]
* `-p, --proportions, --prop FLOAT`: Enter the stake weight proportions for the child hotkeys (sum should be less than or equal to 1)
* `--wait-for-inclusion / --no-wait-for-inclusion`: If `True`, waits until the transaction is included in a block.  [default: wait-for-inclusion]
* `--wait-for-finalization / --no-wait-for-finalization`: If `True`, waits until the transaction is finalized on the blockchain.  [default: wait-for-finalization]
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

#### `btcli stake children revoke`

Remove all children hotkeys on a specified subnet.

This command is used to remove delegated authority from all child hotkeys, removing their position and influence on the subnet.

**Example:**

```
btcli stake child revoke --hotkey &lt;parent_hotkey&gt; --netuid 1
```

**Usage**:

```console
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

#### `btcli stake children take`

Get and set your child hotkey take on a specified subnet.

The child hotkey take must be between 0 - 18%.

**Example:**

To get the current take value, do not use the '--take' option:

    ```
    btcli stake child take --hotkey &lt;child_hotkey&gt; --netuid 1
    ```

To set a new take value, use the '--take' option:

    ```
    btcli stake child take --hotkey &lt;child_hotkey&gt; --take 0.12 --netuid 1
    ```

**Usage**:

```console
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

## `btcli st`

**Usage**:

```console
btcli st [OPTIONS] COMMAND [ARGS]...
```

**Options**:

* `--help`: Show this message and exit.

**Commands**:

* `add`: Stake TAO to one or more hotkeys on...
* `remove`: Unstake TAO from one or more hotkeys and...
* `list`: Display detailed stake information for a...
* `move`: Move staked TAO between hotkeys while...
* `transfer`: Transfer stake between coldkeys while...
* `swap`: Swap stake between different subnets while...
* `child`: Child Hotkey commands, alias: `children`
* `children`

### `btcli st add`

Stake TAO to one or more hotkeys on specific netuids with your coldkey.

Stake is always added through your coldkey's free balance. For stake movement, see 
the `btcli stake move` command.


Common Examples:
1. Interactive staking (guided prompts):
    ```
    btcli stake add
    ```

2. Safe staking with rate tolerance of 10% with partial transaction disabled:
    ```
    btcli stake add --amount 100 --netuid 1 --safe --tolerance 0.1 --no-partial
    ```

3. Allow partial stake if rates change with tolerance of 10%:
    ```
    btcli stake add --amount 300 --safe --partial --tolerance 0.1
    ```

4. Unsafe staking with no rate protection:
    ```
    btcli stake add --amount 300 --netuid 1 --unsafe
    ```

5. Stake to multiple hotkeys:
    ```
    btcli stake add --amount 200 --include-hotkeys hk_ss58_1,hk_ss58_2,hk_ss58_3
    ```

6. Stake all balance to a subnet:
    ```
    btcli stake add --all --netuid 3
    ```

Safe Staking Parameters: --safe: Enables rate tolerance checks
 --tolerance: Maximum % rate change allowed (0.05 = 5%)
 --partial: Complete partial stake if rates exceed tolerance

**Usage**:

```console
btcli st add [OPTIONS]
```

**Options**:

* `-a, --all-tokens, --all`: When set, the command stakes all the available TAO from the coldkey.
* `--amount FLOAT`: The amount of TAO to stake  [default: 0.0]
* `-in, --include-hotkeys, --hotkey-ss58-address TEXT`: Specifies hotkeys by name or ss58 address to stake to. For example, `-in hk1,hk2`
* `-ex, --exclude-hotkeys TEXT`: Specifies hotkeys by name or ss58 address to not to stake to (use this option only with `--all-hotkeys`) i.e. `--all-hotkeys -ex hk3,hk4`
* `--all-hotkeys / --no-all-hotkeys`: When set, this command stakes to all hotkeys associated with the wallet. Do not use if specifying hotkeys in `--include-hotkeys`.  [default: no-all-hotkeys]
* `--netuid INTEGER`: The netuid of the subnet in the network, (e.g. 1).
* `--all-netuids / --no-all-netuids`: Use all netuids  [default: no-all-netuids]
* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--slippage, --slippage-tolerance, --tolerance FLOAT`: Set the rate tolerance percentage for transactions (default: 0.05%).
* `--safe-staking, --safe / --no-safe-staking, --unsafe`: Enable or disable safe staking mode (default: enabled).
* `--allow-partial-stake, --partial, --allow, --allow-partial / --no-allow-partial-stake, --no-partial, --not-allow, --not-partial`: Enable or disable partial stake mode (default: disabled).
* `--prompt, --prompt / -y, --no-prompt, --yes, --no_prompt`: Enable or disable interactive prompts.  [default: prompt]
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli st remove`

Unstake TAO from one or more hotkeys and transfer them back to the user's coldkey wallet.

This command is used to withdraw TAO or Alpha stake from different hotkeys.

Common Examples:
1. Interactive unstaking (guided prompts):
    ```
    btcli stake remove
    ```

2. Safe unstaking with 10% rate tolerance:
    ```
    btcli stake remove --amount 100 --netuid 1 --safe --tolerance 0.1
    ```

3. Allow partial unstake if rates change:
    ```
    btcli stake remove --amount 300 --safe --partial
    ```

4. Unstake from multiple hotkeys:
    ```
    btcli stake remove --amount 200 --include-hotkeys hk1,hk2,hk3
    ```

5. Unstake all from a hotkey:
    ```
    btcli stake remove --all
    ```

6. Unstake all Alpha from a hotkey and stake to Root:
    ```
    btcli stake remove --all-alpha
    ```

Safe Staking Parameters: --safe: Enables rate tolerance checks during unstaking
 --tolerance: Max allowed rate change (0.05 = 5%)
 --partial: Complete partial unstake if rates exceed tolerance

**Usage**:

```console
btcli st remove [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--netuid INTEGER`: The netuid of the subnet in the network, (e.g. 1).
* `--all-netuids / --no-all-netuids`: Use all netuids  [default: no-all-netuids]
* `-a, --amount FLOAT`: The amount of TAO to unstake.  [default: 0.0]
* `--hotkey-ss58-address TEXT`: The ss58 address of the hotkey to unstake from.
* `-in, --include-hotkeys TEXT`: Specifies the hotkeys by name or ss58 address to unstake from. For example, `-in hk1,hk2`
* `-ex, --exclude-hotkeys TEXT`: Specifies the hotkeys by name or ss58 address not to unstake from (only use with `--all-hotkeys`) i.e. `--all-hotkeys -ex hk3,hk4`
* `--all-hotkeys / --no-all-hotkeys`: When set, this command unstakes from all the hotkeys associated with the wallet. Do not use if specifying hotkeys in `--include-hotkeys`.  [default: no-all-hotkeys]
* `--slippage, --slippage-tolerance, --tolerance FLOAT`: Set the rate tolerance percentage for transactions (default: 0.05%).
* `--safe-staking, --safe / --no-safe-staking, --unsafe`: Enable or disable safe staking mode (default: enabled).
* `--allow-partial-stake, --partial, --allow, --allow-partial / --no-allow-partial-stake, --no-partial, --not-allow, --not-partial`: Enable or disable partial stake mode (default: disabled).
* `--prompt, --prompt / -y, --no-prompt, --yes, --no_prompt`: Enable or disable interactive prompts.  [default: prompt]
* `-i, --interactive`: Enter interactive mode for unstaking.
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli st list`

Display detailed stake information for a wallet across all subnets.

Shows stake allocations, exchange rates, and emissions for each hotkey.

Common Examples:
1. Basic stake overview:
```
btcli stake list --wallet.name my_wallet
```

2. Live updating view with refresh:
```
btcli stake list --wallet.name my_wallet --live
```

3. View specific coldkey by address:
```
btcli stake list --ss58 5Dk...X3q
```

4. Verbose output with full values:
```
btcli stake list --wallet.name my_wallet --verbose
```

**Usage**:

```console
btcli st list [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `--ss58, --coldkey_ss58, --coldkey.ss58_address, --coldkey.ss58 TEXT`: Coldkey address of the wallet
* `--live`: Display live view of the table
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--prompt, --prompt / -y, --no-prompt, --yes, --no_prompt`: Enable or disable interactive prompts.  [default: prompt]
* `--help`: Show this message and exit.

### `btcli st move`

Move staked TAO between hotkeys while keeping the same coldkey ownership.

This command allows you to:
- Move stake from one hotkey to another hotkey
- Move stake between different subnets
- Keep the same coldkey ownership

You can specify:
- The origin subnet (--origin-netuid)
- The destination subnet (--dest-netuid)
- The destination hotkey (--dest-hotkey)
- The amount to move (--amount)

If no arguments are provided, an interactive selection menu will be shown.

**Example:**

```
btcli stake move
```

**Usage**:

```console
btcli st move [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--origin-netuid INTEGER`: Origin netuid
* `--dest-netuid INTEGER`: Destination netuid
* `--dest-ss58, --dest TEXT`: Destination hotkey
* `--amount FLOAT`: The amount of TAO to stake
* `--stake-all, --all`: Stake all
* `--prompt, --prompt / -y, --no-prompt, --yes, --no_prompt`: Enable or disable interactive prompts.  [default: prompt]
* `--help`: Show this message and exit.

### `btcli st transfer`

Transfer stake between coldkeys while keeping the same hotkey ownership.

This command allows you to:
- Transfer stake from one coldkey to another coldkey
- Keep the same hotkey ownership
- Transfer stake between different subnets

You can specify:
- The origin subnet (--origin-netuid)
- The destination subnet (--dest-netuid)
- The destination wallet/address (--dest)
- The amount to transfer (--amount)

If no arguments are provided, an interactive selection menu will be shown.

**Example:**

Transfer 100 TAO from subnet 1 to subnet 2:
```
btcli stake transfer --origin-netuid 1 --dest-netuid 2 --dest wallet2 --amount 100
```

Using SS58 address:
```
btcli stake transfer --origin-netuid 1 --dest-netuid 2 --dest 5FrLxJsyJ5x9n2rmxFwosFraxFCKcXZDngEP9H7qjkKgHLcK --amount 100
```

**Usage**:

```console
btcli st transfer [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--origin-netuid INTEGER`: The netuid to transfer stake from
* `--dest-netuid INTEGER`: The netuid to transfer stake to
* `--dest-ss58, --dest, --dest-coldkey TEXT`: The destination wallet name or SS58 address to transfer stake to
* `-a, --amount FLOAT`: Amount of stake to transfer
* `--prompt, --prompt / -y, --no-prompt, --yes, --no_prompt`: Enable or disable interactive prompts.  [default: prompt]
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli st swap`

Swap stake between different subnets while keeping the same coldkey-hotkey pair ownership.

This command allows you to:
- Move stake from one subnet to another subnet
- Keep the same coldkey ownership
- Keep the same hotkey ownership

You can specify:
- The origin subnet (--origin-netuid)
- The destination subnet (--dest-netuid)
- The amount to swap (--amount)

If no arguments are provided, an interactive selection menu will be shown.

**Example:**

Swap 100 TAO from subnet 1 to subnet 2:
```
btcli stake swap --wallet-name default --wallet-hotkey default --origin-netuid 1 --dest-netuid 2 --amount 100
```

**Usage**:

```console
btcli st swap [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `-o, --origin-netuid, --origin INTEGER`: The netuid to swap stake from
* `-d, --dest-netuid, --dest INTEGER`: The netuid to swap stake to
* `-a, --amount FLOAT`: Amount of stake to swap
* `--swap-all, --all`: Swap all available stake
* `--prompt, --prompt / -y, --no-prompt, --yes, --no_prompt`: Enable or disable interactive prompts.  [default: prompt]
* `--wait-for-inclusion / --no-wait-for-inclusion`: If `True`, waits until the transaction is included in a block.  [default: wait-for-inclusion]
* `--wait-for-finalization / --no-wait-for-finalization`: If `True`, waits until the transaction is finalized on the blockchain.  [default: wait-for-finalization]
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli st child`

**Usage**:

```console
btcli st child [OPTIONS] COMMAND [ARGS]...
```

**Options**:

* `--help`: Show this message and exit.

**Commands**:

* `get`: Get all the child hotkeys on a specified...
* `set`: Set child hotkeys on specified subnets.
* `revoke`: Remove all children hotkeys on a specified...
* `take`: Get and set your child hotkey take on a...

#### `btcli st child get`

Get all the child hotkeys on a specified subnet.

Users can specify the subnet and see the child hotkeys and the proportion that is given to them. This command is used to view the authority delegated to different hotkeys on the subnet.

**Example:**

```
btcli stake child get --netuid 1
```
```
btcli stake child get --all-netuids
```

**Usage**:

```console
btcli st child get [OPTIONS]
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

#### `btcli st child set`

Set child hotkeys on specified subnets.

Users can specify the 'proportion' to delegate to child hotkeys (ss58 address). The sum of proportions cannot be greater than 1.

This command is used to delegate authority to different hotkeys, securing their position and influence on the subnet.

**Example:**

```
btcli stake child set -c 5FCL3gmjtQV4xxxxuEPEFQVhyyyyqYgNwX7drFLw7MSdBnxP -c 5Hp5dxxxxtGg7pu8dN2btyyyyVA1vELmM9dy8KQv3LxV8PA7 --hotkey default --netuid 1 -p 0.3 -p 0.7
```

**Usage**:

```console
btcli st child set [OPTIONS]
```

**Options**:

* `-c, --children TEXT`: Enter child hotkeys (ss58)
* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--netuid INTEGER`: The netuid of the subnet in the network, (e.g. 1).
* `--all-netuids / --no-all-netuids`: Use all netuids  [default: no-all-netuids]
* `-p, --proportions, --prop FLOAT`: Enter the stake weight proportions for the child hotkeys (sum should be less than or equal to 1)
* `--wait-for-inclusion / --no-wait-for-inclusion`: If `True`, waits until the transaction is included in a block.  [default: wait-for-inclusion]
* `--wait-for-finalization / --no-wait-for-finalization`: If `True`, waits until the transaction is finalized on the blockchain.  [default: wait-for-finalization]
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

#### `btcli st child revoke`

Remove all children hotkeys on a specified subnet.

This command is used to remove delegated authority from all child hotkeys, removing their position and influence on the subnet.

**Example:**

```
btcli stake child revoke --hotkey &lt;parent_hotkey&gt; --netuid 1
```

**Usage**:

```console
btcli st child revoke [OPTIONS]
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

#### `btcli st child take`

Get and set your child hotkey take on a specified subnet.

The child hotkey take must be between 0 - 18%.

**Example:**

To get the current take value, do not use the '--take' option:

    ```
    btcli stake child take --hotkey &lt;child_hotkey&gt; --netuid 1
    ```

To set a new take value, use the '--take' option:

    ```
    btcli stake child take --hotkey &lt;child_hotkey&gt; --take 0.12 --netuid 1
    ```

**Usage**:

```console
btcli st child take [OPTIONS]
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

### `btcli st children`

**Usage**:

```console
btcli st children [OPTIONS] COMMAND [ARGS]...
```

**Options**:

* `--help`: Show this message and exit.

**Commands**:

* `get`: Get all the child hotkeys on a specified...
* `set`: Set child hotkeys on specified subnets.
* `revoke`: Remove all children hotkeys on a specified...
* `take`: Get and set your child hotkey take on a...

#### `btcli st children get`

Get all the child hotkeys on a specified subnet.

Users can specify the subnet and see the child hotkeys and the proportion that is given to them. This command is used to view the authority delegated to different hotkeys on the subnet.

**Example:**

```
btcli stake child get --netuid 1
```
```
btcli stake child get --all-netuids
```

**Usage**:

```console
btcli st children get [OPTIONS]
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

#### `btcli st children set`

Set child hotkeys on specified subnets.

Users can specify the 'proportion' to delegate to child hotkeys (ss58 address). The sum of proportions cannot be greater than 1.

This command is used to delegate authority to different hotkeys, securing their position and influence on the subnet.

**Example:**

```
btcli stake child set -c 5FCL3gmjtQV4xxxxuEPEFQVhyyyyqYgNwX7drFLw7MSdBnxP -c 5Hp5dxxxxtGg7pu8dN2btyyyyVA1vELmM9dy8KQv3LxV8PA7 --hotkey default --netuid 1 -p 0.3 -p 0.7
```

**Usage**:

```console
btcli st children set [OPTIONS]
```

**Options**:

* `-c, --children TEXT`: Enter child hotkeys (ss58)
* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--netuid INTEGER`: The netuid of the subnet in the network, (e.g. 1).
* `--all-netuids / --no-all-netuids`: Use all netuids  [default: no-all-netuids]
* `-p, --proportions, --prop FLOAT`: Enter the stake weight proportions for the child hotkeys (sum should be less than or equal to 1)
* `--wait-for-inclusion / --no-wait-for-inclusion`: If `True`, waits until the transaction is included in a block.  [default: wait-for-inclusion]
* `--wait-for-finalization / --no-wait-for-finalization`: If `True`, waits until the transaction is finalized on the blockchain.  [default: wait-for-finalization]
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

#### `btcli st children revoke`

Remove all children hotkeys on a specified subnet.

This command is used to remove delegated authority from all child hotkeys, removing their position and influence on the subnet.

**Example:**

```
btcli stake child revoke --hotkey &lt;parent_hotkey&gt; --netuid 1
```

**Usage**:

```console
btcli st children revoke [OPTIONS]
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

#### `btcli st children take`

Get and set your child hotkey take on a specified subnet.

The child hotkey take must be between 0 - 18%.

**Example:**

To get the current take value, do not use the '--take' option:

    ```
    btcli stake child take --hotkey &lt;child_hotkey&gt; --netuid 1
    ```

To set a new take value, use the '--take' option:

    ```
    btcli stake child take --hotkey &lt;child_hotkey&gt; --take 0.12 --netuid 1
    ```

**Usage**:

```console
btcli st children take [OPTIONS]
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

## `btcli sudo`

**Usage**:

```console
btcli sudo [OPTIONS] COMMAND [ARGS]...
```

**Options**:

* `--help`: Show this message and exit.

**Commands**:

* `set`: Used to set hyperparameters for a specific...
* `get`: Shows a list of the hyperparameters for...
* `senate`: Shows the Senate members of the...
* `proposals`: View active proposals for the senate in...
* `senate-vote`: Cast a vote on an active proposal in...
* `set-take`: Allows users to change their delegate take...
* `get-take`: Allows users to check their delegate take...
* `senate_vote`: Cast a vote on an active proposal in...
* `get_take`: Allows users to check their delegate take...
* `set_take`: Allows users to change their delegate take...

### `btcli sudo set`

Used to set hyperparameters for a specific subnet.

This command allows subnet owners to modify hyperparameters such as its tempo, emission rates, and other hyperparameters.

**Example:**

```
btcli sudo set --netuid 1 --param tempo --value 400
```

**Usage**:

```console
btcli sudo set [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--netuid INTEGER`: The netuid of the subnet in the network, (e.g. 1).
* `--param, --parameter TEXT`: The subnet hyperparameter to set
* `--value TEXT`: Value to set the hyperparameter to.
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli sudo get`

Shows a list of the hyperparameters for the specified subnet.

**Example:**

```
btcli sudo get --netuid 1
```

**Usage**:

```console
btcli sudo get [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--netuid INTEGER`: The netuid of the subnet in the network, (e.g. 1).
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli sudo senate`

Shows the Senate members of the Bittensor's governance protocol.

This command lists the delegates involved in the decision-making process of the Bittensor network, showing their names and wallet addresses. This information is crucial for understanding who holds governance roles within the network.

**Example:**
```
btcli sudo senate
```

**Usage**:

```console
btcli sudo senate [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli sudo proposals`

View active proposals for the senate in the Bittensor's governance protocol.

This command displays the details of ongoing proposals, including proposal hashes, votes, thresholds, and proposal data.

**Example:**
```
btcli sudo proposals
```

**Usage**:

```console
btcli sudo proposals [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli sudo senate-vote`

Cast a vote on an active proposal in Bittensor's governance protocol.

This command is used by Senate members to vote on various proposals that shape the network's future. Use `btcli sudo proposals` to see the active proposals and their hashes.

**Usage:**
The user must specify the hash of the proposal they want to vote on. The command then allows the Senate member to cast a 'Yes' or 'No' vote, contributing to the decision-making process on the proposal. This command is crucial for Senate members to exercise their voting rights on key proposals. It plays a vital role in the governance and evolution of the Bittensor network.

**Example:**
```
btcli sudo senate_vote --proposal &lt;proposal_hash&gt;
```

**Usage**:

```console
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

### `btcli sudo set-take`

Allows users to change their delegate take percentage.

This command can be used to update the delegate takes. To run the command, the user must have a configured wallet with both hotkey and coldkey.
The command makes sure the new take value is within 0-18% range.

**Example:**
```
btcli sudo set-take --wallet-name my_wallet --wallet-hotkey my_hotkey
```

**Usage**:

```console
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

### `btcli sudo get-take`

Allows users to check their delegate take percentage.

This command can be used to fetch the delegate take of your hotkey.

**Example:**
```
btcli sudo get-take --wallet-name my_wallet --wallet-hotkey my_hotkey
```

**Usage**:

```console
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

### `btcli sudo senate_vote`

Cast a vote on an active proposal in Bittensor's governance protocol.

This command is used by Senate members to vote on various proposals that shape the network's future. Use `btcli sudo proposals` to see the active proposals and their hashes.

**Usage:**
The user must specify the hash of the proposal they want to vote on. The command then allows the Senate member to cast a 'Yes' or 'No' vote, contributing to the decision-making process on the proposal. This command is crucial for Senate members to exercise their voting rights on key proposals. It plays a vital role in the governance and evolution of the Bittensor network.

**Example:**
```
btcli sudo senate_vote --proposal &lt;proposal_hash&gt;
```

**Usage**:

```console
btcli sudo senate_vote [OPTIONS]
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

### `btcli sudo get_take`

Allows users to check their delegate take percentage.

This command can be used to fetch the delegate take of your hotkey.

**Example:**
```
btcli sudo get-take --wallet-name my_wallet --wallet-hotkey my_hotkey
```

**Usage**:

```console
btcli sudo get_take [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli sudo set_take`

Allows users to change their delegate take percentage.

This command can be used to update the delegate takes. To run the command, the user must have a configured wallet with both hotkey and coldkey.
The command makes sure the new take value is within 0-18% range.

**Example:**
```
btcli sudo set-take --wallet-name my_wallet --wallet-hotkey my_hotkey
```

**Usage**:

```console
btcli sudo set_take [OPTIONS]
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

## `btcli su`

**Usage**:

```console
btcli su [OPTIONS] COMMAND [ARGS]...
```

**Options**:

* `--help`: Show this message and exit.

**Commands**:

* `set`: Used to set hyperparameters for a specific...
* `get`: Shows a list of the hyperparameters for...
* `senate`: Shows the Senate members of the...
* `proposals`: View active proposals for the senate in...
* `senate-vote`: Cast a vote on an active proposal in...
* `set-take`: Allows users to change their delegate take...
* `get-take`: Allows users to check their delegate take...
* `senate_vote`: Cast a vote on an active proposal in...
* `get_take`: Allows users to check their delegate take...
* `set_take`: Allows users to change their delegate take...

### `btcli su set`

Used to set hyperparameters for a specific subnet.

This command allows subnet owners to modify hyperparameters such as its tempo, emission rates, and other hyperparameters.

**Example:**

```
btcli sudo set --netuid 1 --param tempo --value 400
```

**Usage**:

```console
btcli su set [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--netuid INTEGER`: The netuid of the subnet in the network, (e.g. 1).
* `--param, --parameter TEXT`: The subnet hyperparameter to set
* `--value TEXT`: Value to set the hyperparameter to.
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli su get`

Shows a list of the hyperparameters for the specified subnet.

**Example:**

```
btcli sudo get --netuid 1
```

**Usage**:

```console
btcli su get [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--netuid INTEGER`: The netuid of the subnet in the network, (e.g. 1).
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli su senate`

Shows the Senate members of the Bittensor's governance protocol.

This command lists the delegates involved in the decision-making process of the Bittensor network, showing their names and wallet addresses. This information is crucial for understanding who holds governance roles within the network.

**Example:**
```
btcli sudo senate
```

**Usage**:

```console
btcli su senate [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli su proposals`

View active proposals for the senate in the Bittensor's governance protocol.

This command displays the details of ongoing proposals, including proposal hashes, votes, thresholds, and proposal data.

**Example:**
```
btcli sudo proposals
```

**Usage**:

```console
btcli su proposals [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli su senate-vote`

Cast a vote on an active proposal in Bittensor's governance protocol.

This command is used by Senate members to vote on various proposals that shape the network's future. Use `btcli sudo proposals` to see the active proposals and their hashes.

**Usage:**
The user must specify the hash of the proposal they want to vote on. The command then allows the Senate member to cast a 'Yes' or 'No' vote, contributing to the decision-making process on the proposal. This command is crucial for Senate members to exercise their voting rights on key proposals. It plays a vital role in the governance and evolution of the Bittensor network.

**Example:**
```
btcli sudo senate_vote --proposal &lt;proposal_hash&gt;
```

**Usage**:

```console
btcli su senate-vote [OPTIONS]
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

### `btcli su set-take`

Allows users to change their delegate take percentage.

This command can be used to update the delegate takes. To run the command, the user must have a configured wallet with both hotkey and coldkey.
The command makes sure the new take value is within 0-18% range.

**Example:**
```
btcli sudo set-take --wallet-name my_wallet --wallet-hotkey my_hotkey
```

**Usage**:

```console
btcli su set-take [OPTIONS]
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

### `btcli su get-take`

Allows users to check their delegate take percentage.

This command can be used to fetch the delegate take of your hotkey.

**Example:**
```
btcli sudo get-take --wallet-name my_wallet --wallet-hotkey my_hotkey
```

**Usage**:

```console
btcli su get-take [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli su senate_vote`

Cast a vote on an active proposal in Bittensor's governance protocol.

This command is used by Senate members to vote on various proposals that shape the network's future. Use `btcli sudo proposals` to see the active proposals and their hashes.

**Usage:**
The user must specify the hash of the proposal they want to vote on. The command then allows the Senate member to cast a 'Yes' or 'No' vote, contributing to the decision-making process on the proposal. This command is crucial for Senate members to exercise their voting rights on key proposals. It plays a vital role in the governance and evolution of the Bittensor network.

**Example:**
```
btcli sudo senate_vote --proposal &lt;proposal_hash&gt;
```

**Usage**:

```console
btcli su senate_vote [OPTIONS]
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

### `btcli su get_take`

Allows users to check their delegate take percentage.

This command can be used to fetch the delegate take of your hotkey.

**Example:**
```
btcli sudo get-take --wallet-name my_wallet --wallet-hotkey my_hotkey
```

**Usage**:

```console
btcli su get_take [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli su set_take`

Allows users to change their delegate take percentage.

This command can be used to update the delegate takes. To run the command, the user must have a configured wallet with both hotkey and coldkey.
The command makes sure the new take value is within 0-18% range.

**Example:**
```
btcli sudo set-take --wallet-name my_wallet --wallet-hotkey my_hotkey
```

**Usage**:

```console
btcli su set_take [OPTIONS]
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

## `btcli subnets`

**Usage**:

```console
btcli subnets [OPTIONS] COMMAND [ARGS]...
```

**Options**:

* `--help`: Show this message and exit.

**Commands**:

* `hyperparameters`: Shows a list of the hyperparameters for...
* `list`: List all subnets and their detailed...
* `burn-cost`: Shows the required amount of TAO to be...
* `create`: Registers a new subnet on the network.
* `pow-register`: Register a neuron (a subnet validator or a...
* `register`: Register a neuron (a subnet validator or a...
* `metagraph`: Displays detailed information about a...
* `show`: Displays detailed information about a...
* `price`: Shows the historical price of a subnet for...
* `burn_cost`: Shows the required amount of TAO to be...
* `pow_register`: Register a neuron (a subnet validator or a...

### `btcli subnets hyperparameters`

Shows a list of the hyperparameters for the specified subnet.

**Example:**

```
btcli sudo get --netuid 1
```

**Usage**:

```console
btcli subnets hyperparameters [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--netuid INTEGER`: The netuid of the subnet in the network, (e.g. 1).
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli subnets list`

List all subnets and their detailed information.

 Common Examples:
 1. List all subnets:
 ```
 btcli subnets list
 ```

 2. List all subnets in live mode:
 ```
 btcli subnets list --live
 ```

Output Columns: Netuid - Subnet identifier number
  Name - Subnet name with currency symbol (τ/α/β etc)
  Price (τ_in/α_in) - Exchange rate (TAO per alpha token)
  Market Cap (α * Price) - Total value in TAO (alpha tokens × price)
  Emission (τ) - TAO rewards emitted per block to subnet
  P (τ_in, α_in) - Pool reserves (Tao reserves, alpha reserves) in liquidity pool
  Stake (α_out) - Total staked alpha tokens across all hotkeys (alpha outstanding)
  Supply (α) - Circulating alpha token supply
  Tempo (k/n) - Block interval for subnet updates

 **Example:**

 ```
 btcli subnets list
 ```

**Usage**:

```console
btcli subnets list [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--live`: Display live view of the table
* `--help`: Show this message and exit.

### `btcli subnets burn-cost`

Shows the required amount of TAO to be recycled for creating a new subnet, i.e., cost of registering a new subnet.

The current implementation anneals the cost of creating a subnet over a period of two days. If the displayed cost is unappealing to you, check back in a day or two to see if it has decreased to a more affordable level.

**Example:**

```
btcli subnets burn_cost
```

**Usage**:

```console
btcli subnets burn-cost [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli subnets create`

Registers a new subnet on the network.

This command allows you to create a new subnet and set the subnet's identity.
You also have the option to set your own identity after the registration is complete.

Common Examples:
1. Interactive subnet creation:
```
btcli subnets create
```

2. Create with GitHub repo and contact email:

```
btcli subnets create --subnet-name MySubnet --github-repo https://github.com/myorg/mysubnet --subnet-contact team@mysubnet.net
```
**Usage**:

```console
btcli subnets create [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--subnet-name, --name TEXT`: Name of the subnet
* `--github-repo, --repo TEXT`: GitHub repository URL
* `--subnet-contact, --contact, --email TEXT`: Contact email for subnet
* `--subnet-url, --url TEXT`: Subnet URL
* `--discord-handle, --discord TEXT`: Discord handle
* `--description TEXT`: Description
* `--additional-info TEXT`: Additional information
* `--prompt, --prompt / -y, --no-prompt, --yes, --no_prompt`: Enable or disable interactive prompts.  [default: prompt]
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli subnets pow-register`

Register a neuron (a subnet validator or a subnet miner) using Proof of Work (POW).

This method is an alternative registration process that uses computational work for securing a neuron's place on the subnet.

The command starts by verifying the existence of the specified subnet. If the subnet does not exist, it terminates with an error message. On successful verification, the POW registration process is initiated, which requires solving computational puzzles.

The command also supports additional wallet and subtensor arguments, enabling further customization of the registration process.

**Example:**

```
btcli pow_register --netuid 1 --num_processes 4 --cuda
```

Note: This command is suitable for users with adequate computational resources to participate in POW registration.
It requires a sound understanding of the network's operations and POW mechanics. Users should ensure their systems meet the necessary hardware and software requirements, particularly when opting for CUDA-based GPU acceleration.

This command may be disabled by the subnet owner. For example, on netuid 1 this is permanently disabled.

**Usage**:

```console
btcli subnets pow-register [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--netuid INTEGER`: The netuid of the subnet in the network, (e.g. 1).
* `--processors INTEGER`: Number of processors to use for POW registration.
* `-u, --update-interval INTEGER`: The number of nonces to process before checking for the next block during registration  [default: 50000]
* `--output-in-place / --no-output-in-place`: Whether to output the registration statistics in-place.  [default: output-in-place]
* `-v, --verbose`: Whether to output the registration statistics verbosely.
* `--use-cuda, --cuda / --no-use-cuda, --no-cuda`: Set the flag to use CUDA for POW registration.  [default: no-use-cuda]
* `-d, --dev-id INTEGER`: Set the CUDA device id(s), in the order of the device speed (0 is the fastest).  [default: 0]
* `-tbp, --threads-per-block INTEGER`: Set the number of threads per block for CUDA.  [default: 256]
* `--help`: Show this message and exit.

### `btcli subnets register`

Register a neuron (a subnet validator or a subnet miner) in the specified subnet by recycling some TAO.

Before registering, the command checks if the specified subnet exists and whether the user's balance is sufficient to cover the registration cost.

The registration cost is determined by the current recycle amount for the specified subnet. If the balance is insufficient or the subnet does not exist, the command will exit with an error message.

**Example:**

```
btcli subnets register --netuid 1
```

**Usage**:

```console
btcli subnets register [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--netuid INTEGER`: The netuid of the subnet in the network, (e.g. 1).
* `--prompt, --prompt / -y, --no-prompt, --yes, --no_prompt`: Enable or disable interactive prompts.  [default: prompt]
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli subnets metagraph`

Displays detailed information about a subnet including participants and their state.

**Example:**

```
btcli subnets list
```

**Usage**:

```console
btcli subnets metagraph [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--netuid INTEGER`: The netuid of the subnet in the network, (e.g. 1).
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--prompt, --prompt / -y, --no-prompt, --yes, --no_prompt`: Enable or disable interactive prompts.  [default: prompt]
* `--help`: Show this message and exit.

### `btcli subnets show`

Displays detailed information about a subnet including participants and their state.

**Example:**

```
btcli subnets list
```

**Usage**:

```console
btcli subnets show [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--netuid INTEGER`: The netuid of the subnet in the network, (e.g. 1).
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--prompt, --prompt / -y, --no-prompt, --yes, --no_prompt`: Enable or disable interactive prompts.  [default: prompt]
* `--help`: Show this message and exit.

### `btcli subnets price`

Shows the historical price of a subnet for the past 24 hours.

This command displays the historical price of a subnet for the past 24 hours.
If the `--all` flag is used, the command will display the price for all subnets in html format.
If the `--html` flag is used, the command will display the price in an HTML chart.
If the `--log-scale` flag is used, the command will display the price in log scale.
If no html flag is used, the command will display the price in the cli.

**Example:**

```
btcli subnets price --netuid 1
```
```
btcli subnets price --netuid 1 --html --log
```
```
btcli subnets price --all --html
```
```
btcli subnets price --netuids 1,2,3,4 --html
```

**Usage**:

```console
btcli subnets price [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `-n, --netuids, --netuid TEXT`: Netuid(s) to show the price for.
* `--interval-hours, --interval INTEGER`: The number of hours to show the historical price for.  [default: 24]
* `--all-netuids, --all`: Show the price for all subnets.
* `--log-scale, --log`: Show the price in log scale.
* `--html`: Display the table as HTML in the browser.
* `--help`: Show this message and exit.

### `btcli subnets burn_cost`

Shows the required amount of TAO to be recycled for creating a new subnet, i.e., cost of registering a new subnet.

The current implementation anneals the cost of creating a subnet over a period of two days. If the displayed cost is unappealing to you, check back in a day or two to see if it has decreased to a more affordable level.

**Example:**

```
btcli subnets burn_cost
```

**Usage**:

```console
btcli subnets burn_cost [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli subnets pow_register`

Register a neuron (a subnet validator or a subnet miner) using Proof of Work (POW).

This method is an alternative registration process that uses computational work for securing a neuron's place on the subnet.

The command starts by verifying the existence of the specified subnet. If the subnet does not exist, it terminates with an error message. On successful verification, the POW registration process is initiated, which requires solving computational puzzles.

The command also supports additional wallet and subtensor arguments, enabling further customization of the registration process.

**Example:**

```
btcli pow_register --netuid 1 --num_processes 4 --cuda
```

Note: This command is suitable for users with adequate computational resources to participate in POW registration.
It requires a sound understanding of the network's operations and POW mechanics. Users should ensure their systems meet the necessary hardware and software requirements, particularly when opting for CUDA-based GPU acceleration.

This command may be disabled by the subnet owner. For example, on netuid 1 this is permanently disabled.

**Usage**:

```console
btcli subnets pow_register [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--netuid INTEGER`: The netuid of the subnet in the network, (e.g. 1).
* `--processors INTEGER`: Number of processors to use for POW registration.
* `-u, --update-interval INTEGER`: The number of nonces to process before checking for the next block during registration  [default: 50000]
* `--output-in-place / --no-output-in-place`: Whether to output the registration statistics in-place.  [default: output-in-place]
* `-v, --verbose`: Whether to output the registration statistics verbosely.
* `--use-cuda, --cuda / --no-use-cuda, --no-cuda`: Set the flag to use CUDA for POW registration.  [default: no-use-cuda]
* `-d, --dev-id INTEGER`: Set the CUDA device id(s), in the order of the device speed (0 is the fastest).  [default: 0]
* `-tbp, --threads-per-block INTEGER`: Set the number of threads per block for CUDA.  [default: 256]
* `--help`: Show this message and exit.

## `btcli s`

**Usage**:

```console
btcli s [OPTIONS] COMMAND [ARGS]...
```

**Options**:

* `--help`: Show this message and exit.

**Commands**:

* `hyperparameters`: Shows a list of the hyperparameters for...
* `list`: List all subnets and their detailed...
* `burn-cost`: Shows the required amount of TAO to be...
* `create`: Registers a new subnet on the network.
* `pow-register`: Register a neuron (a subnet validator or a...
* `register`: Register a neuron (a subnet validator or a...
* `metagraph`: Displays detailed information about a...
* `show`: Displays detailed information about a...
* `price`: Shows the historical price of a subnet for...
* `burn_cost`: Shows the required amount of TAO to be...
* `pow_register`: Register a neuron (a subnet validator or a...

### `btcli s hyperparameters`

Shows a list of the hyperparameters for the specified subnet.

**Example:**

```
btcli sudo get --netuid 1
```

**Usage**:

```console
btcli s hyperparameters [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--netuid INTEGER`: The netuid of the subnet in the network, (e.g. 1).
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli s list`

List all subnets and their detailed information.

 Common Examples:
 1. List all subnets:
 ```
 btcli subnets list
 ```

 2. List all subnets in live mode:
 ```
 btcli subnets list --live
 ```

Output Columns:  Netuid - Subnet identifier number
  Name - Subnet name with currency symbol (τ/α/β etc)
  Price (τ_in/α_in) - Exchange rate (TAO per alpha token)
  Market Cap (α * Price) - Total value in TAO (alpha tokens × price)
  Emission (τ) - TAO rewards emitted per block to subnet
  P (τ_in, α_in) - Pool reserves (Tao reserves, alpha reserves) in liquidity pool
  Stake (α_out) - Total staked alpha tokens across all hotkeys (alpha outstanding)
  Supply (α) - Circulating alpha token supply
  Tempo (k/n) - Block interval for subnet updates

 **Example:**

 ```
 btcli subnets list
 ```

**Usage**:

```console
btcli s list [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--live`: Display live view of the table
* `--help`: Show this message and exit.

### `btcli s burn-cost`

Shows the required amount of TAO to be recycled for creating a new subnet, i.e., cost of registering a new subnet.

The current implementation anneals the cost of creating a subnet over a period of two days. If the displayed cost is unappealing to you, check back in a day or two to see if it has decreased to a more affordable level.

**Example:**

```
btcli subnets burn_cost
```

**Usage**:

```console
btcli s burn-cost [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli s create`

Registers a new subnet on the network.

This command allows you to create a new subnet and set the subnet's identity.
You also have the option to set your own identity after the registration is complete.

Common Examples:
1. Interactive subnet creation:
```
btcli subnets create
```

2. Create with GitHub repo and contact email:

```
btcli subnets create --subnet-name MySubnet --github-repo https://github.com/myorg/mysubnet --subnet-contact team@mysubnet.net
```

**Usage**:

```console
btcli s create [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--subnet-name, --name TEXT`: Name of the subnet
* `--github-repo, --repo TEXT`: GitHub repository URL
* `--subnet-contact, --contact, --email TEXT`: Contact email for subnet
* `--subnet-url, --url TEXT`: Subnet URL
* `--discord-handle, --discord TEXT`: Discord handle
* `--description TEXT`: Description
* `--additional-info TEXT`: Additional information
* `--prompt, --prompt / -y, --no-prompt, --yes, --no_prompt`: Enable or disable interactive prompts.  [default: prompt]
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli s pow-register`

Register a neuron (a subnet validator or a subnet miner) using Proof of Work (POW).

This method is an alternative registration process that uses computational work for securing a neuron's place on the subnet.

The command starts by verifying the existence of the specified subnet. If the subnet does not exist, it terminates with an error message. On successful verification, the POW registration process is initiated, which requires solving computational puzzles.

The command also supports additional wallet and subtensor arguments, enabling further customization of the registration process.

**Example:**

```
btcli pow_register --netuid 1 --num_processes 4 --cuda
```

Note: This command is suitable for users with adequate computational resources to participate in POW registration.
It requires a sound understanding of the network's operations and POW mechanics. Users should ensure their systems meet the necessary hardware and software requirements, particularly when opting for CUDA-based GPU acceleration.

This command may be disabled by the subnet owner. For example, on netuid 1 this is permanently disabled.

**Usage**:

```console
btcli s pow-register [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--netuid INTEGER`: The netuid of the subnet in the network, (e.g. 1).
* `--processors INTEGER`: Number of processors to use for POW registration.
* `-u, --update-interval INTEGER`: The number of nonces to process before checking for the next block during registration  [default: 50000]
* `--output-in-place / --no-output-in-place`: Whether to output the registration statistics in-place.  [default: output-in-place]
* `-v, --verbose`: Whether to output the registration statistics verbosely.
* `--use-cuda, --cuda / --no-use-cuda, --no-cuda`: Set the flag to use CUDA for POW registration.  [default: no-use-cuda]
* `-d, --dev-id INTEGER`: Set the CUDA device id(s), in the order of the device speed (0 is the fastest).  [default: 0]
* `-tbp, --threads-per-block INTEGER`: Set the number of threads per block for CUDA.  [default: 256]
* `--help`: Show this message and exit.

### `btcli s register`

Register a neuron (a subnet validator or a subnet miner) in the specified subnet by recycling some TAO.

Before registering, the command checks if the specified subnet exists and whether the user's balance is sufficient to cover the registration cost.

The registration cost is determined by the current recycle amount for the specified subnet. If the balance is insufficient or the subnet does not exist, the command will exit with an error message.

**Example:**

```
btcli subnets register --netuid 1
```

**Usage**:

```console
btcli s register [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--netuid INTEGER`: The netuid of the subnet in the network, (e.g. 1).
* `--prompt, --prompt / -y, --no-prompt, --yes, --no_prompt`: Enable or disable interactive prompts.  [default: prompt]
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli s metagraph`

Displays detailed information about a subnet including participants and their state.

**Example:**

```
btcli subnets list
```

**Usage**:

```console
btcli s metagraph [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--netuid INTEGER`: The netuid of the subnet in the network, (e.g. 1).
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--prompt, --prompt / -y, --no-prompt, --yes, --no_prompt`: Enable or disable interactive prompts.  [default: prompt]
* `--help`: Show this message and exit.

### `btcli s show`

Displays detailed information about a subnet including participants and their state.

**Example:**

```
btcli subnets list
```

**Usage**:

```console
btcli s show [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--netuid INTEGER`: The netuid of the subnet in the network, (e.g. 1).
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--prompt, --prompt / -y, --no-prompt, --yes, --no_prompt`: Enable or disable interactive prompts.  [default: prompt]
* `--help`: Show this message and exit.

### `btcli s price`

Shows the historical price of a subnet for the past 24 hours.

This command displays the historical price of a subnet for the past 24 hours.
If the `--all` flag is used, the command will display the price for all subnets in html format.
If the `--html` flag is used, the command will display the price in an HTML chart.
If the `--log-scale` flag is used, the command will display the price in log scale.
If no html flag is used, the command will display the price in the cli.

**Example:**

```
btcli subnets price --netuid 1
```
```
btcli subnets price --netuid 1 --html --log
```
```
btcli subnets price --all --html
```
```
btcli subnets price --netuids 1,2,3,4 --html
```

**Usage**:

```console
btcli s price [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `-n, --netuids, --netuid TEXT`: Netuid(s) to show the price for.
* `--interval-hours, --interval INTEGER`: The number of hours to show the historical price for.  [default: 24]
* `--all-netuids, --all`: Show the price for all subnets.
* `--log-scale, --log`: Show the price in log scale.
* `--html`: Display the table as HTML in the browser.
* `--help`: Show this message and exit.

### `btcli s burn_cost`

Shows the required amount of TAO to be recycled for creating a new subnet, i.e., cost of registering a new subnet.

The current implementation anneals the cost of creating a subnet over a period of two days. If the displayed cost is unappealing to you, check back in a day or two to see if it has decreased to a more affordable level.

**Example:**

```
btcli subnets burn_cost
```

**Usage**:

```console
btcli s burn_cost [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli s pow_register`

Register a neuron (a subnet validator or a subnet miner) using Proof of Work (POW).

This method is an alternative registration process that uses computational work for securing a neuron's place on the subnet.

The command starts by verifying the existence of the specified subnet. If the subnet does not exist, it terminates with an error message. On successful verification, the POW registration process is initiated, which requires solving computational puzzles.

The command also supports additional wallet and subtensor arguments, enabling further customization of the registration process.

**Example:**

```
btcli pow_register --netuid 1 --num_processes 4 --cuda
```

Note: This command is suitable for users with adequate computational resources to participate in POW registration.
It requires a sound understanding of the network's operations and POW mechanics. Users should ensure their systems meet the necessary hardware and software requirements, particularly when opting for CUDA-based GPU acceleration.

This command may be disabled by the subnet owner. For example, on netuid 1 this is permanently disabled.

**Usage**:

```console
btcli s pow_register [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--netuid INTEGER`: The netuid of the subnet in the network, (e.g. 1).
* `--processors INTEGER`: Number of processors to use for POW registration.
* `-u, --update-interval INTEGER`: The number of nonces to process before checking for the next block during registration  [default: 50000]
* `--output-in-place / --no-output-in-place`: Whether to output the registration statistics in-place.  [default: output-in-place]
* `-v, --verbose`: Whether to output the registration statistics verbosely.
* `--use-cuda, --cuda / --no-use-cuda, --no-cuda`: Set the flag to use CUDA for POW registration.  [default: no-use-cuda]
* `-d, --dev-id INTEGER`: Set the CUDA device id(s), in the order of the device speed (0 is the fastest).  [default: 0]
* `-tbp, --threads-per-block INTEGER`: Set the number of threads per block for CUDA.  [default: 256]
* `--help`: Show this message and exit.

## `btcli subnet`

**Usage**:

```console
btcli subnet [OPTIONS] COMMAND [ARGS]...
```

**Options**:

* `--help`: Show this message and exit.

**Commands**:

* `hyperparameters`: Shows a list of the hyperparameters for...
* `list`: List all subnets and their detailed...
* `burn-cost`: Shows the required amount of TAO to be...
* `create`: Registers a new subnet on the network.
* `pow-register`: Register a neuron (a subnet validator or a...
* `register`: Register a neuron (a subnet validator or a...
* `metagraph`: Displays detailed information about a...
* `show`: Displays detailed information about a...
* `price`: Shows the historical price of a subnet for...
* `burn_cost`: Shows the required amount of TAO to be...
* `pow_register`: Register a neuron (a subnet validator or a...

### `btcli subnet hyperparameters`

Shows a list of the hyperparameters for the specified subnet.

**Example:**

```
btcli sudo get --netuid 1
```

**Usage**:

```console
btcli subnet hyperparameters [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--netuid INTEGER`: The netuid of the subnet in the network, (e.g. 1).
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli subnet list`

List all subnets and their detailed information.

 Common Examples:
 1. List all subnets:
 ```
 btcli subnets list
 ```

 2. List all subnets in live mode:
 ```
 btcli subnets list --live
 ```

Output Columns:  Netuid - Subnet identifier number
  Name - Subnet name with currency symbol (τ/α/β etc)
  Price (τ_in/α_in) - Exchange rate (TAO per alpha token)
  Market Cap (α * Price) - Total value in TAO (alpha tokens × price)
  Emission (τ) - TAO rewards emitted per block to subnet
  P (τ_in, α_in) - Pool reserves (Tao reserves, alpha reserves) in liquidity pool
  Stake (α_out) - Total staked alpha tokens across all hotkeys (alpha outstanding)
  Supply (α) - Circulating alpha token supply
  Tempo (k/n) - Block interval for subnet updates

 **Example:**

 ```
 btcli subnets list
 ```

**Usage**:

```console
btcli subnet list [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--live`: Display live view of the table
* `--help`: Show this message and exit.

### `btcli subnet burn-cost`

Shows the required amount of TAO to be recycled for creating a new subnet, i.e., cost of registering a new subnet.

The current implementation anneals the cost of creating a subnet over a period of two days. If the displayed cost is unappealing to you, check back in a day or two to see if it has decreased to a more affordable level.

**Example:**

```
btcli subnets burn_cost
```

**Usage**:

```console
btcli subnet burn-cost [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli subnet create`

Registers a new subnet on the network.

This command allows you to create a new subnet and set the subnet's identity.
You also have the option to set your own identity after the registration is complete.

Common Examples:
1. Interactive subnet creation:
```
btcli subnets create
```

2. Create with GitHub repo and contact email:

```
btcli subnets create --subnet-name MySubnet --github-repo https://github.com/myorg/mysubnet --subnet-contact team@mysubnet.net
```

**Usage**:

```console
btcli subnet create [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--subnet-name, --name TEXT`: Name of the subnet
* `--github-repo, --repo TEXT`: GitHub repository URL
* `--subnet-contact, --contact, --email TEXT`: Contact email for subnet
* `--subnet-url, --url TEXT`: Subnet URL
* `--discord-handle, --discord TEXT`: Discord handle
* `--description TEXT`: Description
* `--additional-info TEXT`: Additional information
* `--prompt, --prompt / -y, --no-prompt, --yes, --no_prompt`: Enable or disable interactive prompts.  [default: prompt]
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli subnet pow-register`

Register a neuron (a subnet validator or a subnet miner) using Proof of Work (POW).

This method is an alternative registration process that uses computational work for securing a neuron's place on the subnet.

The command starts by verifying the existence of the specified subnet. If the subnet does not exist, it terminates with an error message. On successful verification, the POW registration process is initiated, which requires solving computational puzzles.

The command also supports additional wallet and subtensor arguments, enabling further customization of the registration process.

**Example:**

```
btcli pow_register --netuid 1 --num_processes 4 --cuda
```

Note: This command is suitable for users with adequate computational resources to participate in POW registration.
It requires a sound understanding of the network's operations and POW mechanics. Users should ensure their systems meet the necessary hardware and software requirements, particularly when opting for CUDA-based GPU acceleration.

This command may be disabled by the subnet owner. For example, on netuid 1 this is permanently disabled.

**Usage**:

```console
btcli subnet pow-register [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--netuid INTEGER`: The netuid of the subnet in the network, (e.g. 1).
* `--processors INTEGER`: Number of processors to use for POW registration.
* `-u, --update-interval INTEGER`: The number of nonces to process before checking for the next block during registration  [default: 50000]
* `--output-in-place / --no-output-in-place`: Whether to output the registration statistics in-place.  [default: output-in-place]
* `-v, --verbose`: Whether to output the registration statistics verbosely.
* `--use-cuda, --cuda / --no-use-cuda, --no-cuda`: Set the flag to use CUDA for POW registration.  [default: no-use-cuda]
* `-d, --dev-id INTEGER`: Set the CUDA device id(s), in the order of the device speed (0 is the fastest).  [default: 0]
* `-tbp, --threads-per-block INTEGER`: Set the number of threads per block for CUDA.  [default: 256]
* `--help`: Show this message and exit.

### `btcli subnet register`

Register a neuron (a subnet validator or a subnet miner) in the specified subnet by recycling some TAO.

Before registering, the command checks if the specified subnet exists and whether the user's balance is sufficient to cover the registration cost.

The registration cost is determined by the current recycle amount for the specified subnet. If the balance is insufficient or the subnet does not exist, the command will exit with an error message.

**Example:**

```
btcli subnets register --netuid 1
```

**Usage**:

```console
btcli subnet register [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--netuid INTEGER`: The netuid of the subnet in the network, (e.g. 1).
* `--prompt, --prompt / -y, --no-prompt, --yes, --no_prompt`: Enable or disable interactive prompts.  [default: prompt]
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli subnet metagraph`

Displays detailed information about a subnet including participants and their state.

**Example:**

```
btcli subnets list
```

**Usage**:

```console
btcli subnet metagraph [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--netuid INTEGER`: The netuid of the subnet in the network, (e.g. 1).
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--prompt, --prompt / -y, --no-prompt, --yes, --no_prompt`: Enable or disable interactive prompts.  [default: prompt]
* `--help`: Show this message and exit.

### `btcli subnet show`

Displays detailed information about a subnet including participants and their state.

**Example:**

```
btcli subnets list
```

**Usage**:

```console
btcli subnet show [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--netuid INTEGER`: The netuid of the subnet in the network, (e.g. 1).
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--prompt, --prompt / -y, --no-prompt, --yes, --no_prompt`: Enable or disable interactive prompts.  [default: prompt]
* `--help`: Show this message and exit.

### `btcli subnet price`

Shows the historical price of a subnet for the past 24 hours.

This command displays the historical price of a subnet for the past 24 hours.
If the `--all` flag is used, the command will display the price for all subnets in html format.
If the `--html` flag is used, the command will display the price in an HTML chart.
If the `--log-scale` flag is used, the command will display the price in log scale.
If no html flag is used, the command will display the price in the cli.

**Example:**

```
btcli subnets price --netuid 1
```
```
btcli subnets price --netuid 1 --html --log
```
```
btcli subnets price --all --html
```
```
btcli subnets price --netuids 1,2,3,4 --html
```

**Usage**:

```console
btcli subnet price [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `-n, --netuids, --netuid TEXT`: Netuid(s) to show the price for.
* `--interval-hours, --interval INTEGER`: The number of hours to show the historical price for.  [default: 24]
* `--all-netuids, --all`: Show the price for all subnets.
* `--log-scale, --log`: Show the price in log scale.
* `--html`: Display the table as HTML in the browser.
* `--help`: Show this message and exit.

### `btcli subnet burn_cost`

Shows the required amount of TAO to be recycled for creating a new subnet, i.e., cost of registering a new subnet.

The current implementation anneals the cost of creating a subnet over a period of two days. If the displayed cost is unappealing to you, check back in a day or two to see if it has decreased to a more affordable level.

**Example:**

```
btcli subnets burn_cost
```

**Usage**:

```console
btcli subnet burn_cost [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli subnet pow_register`

Register a neuron (a subnet validator or a subnet miner) using Proof of Work (POW).

This method is an alternative registration process that uses computational work for securing a neuron's place on the subnet.

The command starts by verifying the existence of the specified subnet. If the subnet does not exist, it terminates with an error message. On successful verification, the POW registration process is initiated, which requires solving computational puzzles.

The command also supports additional wallet and subtensor arguments, enabling further customization of the registration process.

**Example:**

```
btcli pow_register --netuid 1 --num_processes 4 --cuda
```

Note: This command is suitable for users with adequate computational resources to participate in POW registration.
It requires a sound understanding of the network's operations and POW mechanics. Users should ensure their systems meet the necessary hardware and software requirements, particularly when opting for CUDA-based GPU acceleration.

This command may be disabled by the subnet owner. For example, on netuid 1 this is permanently disabled.

**Usage**:

```console
btcli subnet pow_register [OPTIONS]
```

**Options**:

* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--netuid INTEGER`: The netuid of the subnet in the network, (e.g. 1).
* `--processors INTEGER`: Number of processors to use for POW registration.
* `-u, --update-interval INTEGER`: The number of nonces to process before checking for the next block during registration  [default: 50000]
* `--output-in-place / --no-output-in-place`: Whether to output the registration statistics in-place.  [default: output-in-place]
* `-v, --verbose`: Whether to output the registration statistics verbosely.
* `--use-cuda, --cuda / --no-use-cuda, --no-cuda`: Set the flag to use CUDA for POW registration.  [default: no-use-cuda]
* `-d, --dev-id INTEGER`: Set the CUDA device id(s), in the order of the device speed (0 is the fastest).  [default: 0]
* `-tbp, --threads-per-block INTEGER`: Set the number of threads per block for CUDA.  [default: 256]
* `--help`: Show this message and exit.

## `btcli weights`

**Usage**:

```console
btcli weights [OPTIONS] COMMAND [ARGS]...
```

**Options**:

* `--help`: Show this message and exit.

**Commands**:

* `reveal`: Reveal weights for a specific subnet.
* `commit`: Commit weights for specific subnet.

### `btcli weights reveal`

Reveal weights for a specific subnet.

You must specify the netuid, the UIDs you are interested in, and weights you wish to reveal.

**Example:**

```
btcli wt reveal --netuid 1 --uids 1,2,3,4 --weights 0.1,0.2,0.3,0.4 --salt 163,241,217,11,161,142,147,189
```

**Usage**:

```console
btcli weights reveal [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--netuid INTEGER`: The netuid of the subnet in the network, (e.g. 1).
* `-u, --uids TEXT`: Corresponding UIDs for the specified netuid, e.g. -u 1,2,3 ...
* `-w, --weights TEXT`: Weights for the specified UIDs, e.g. `-w 0.2,0.4,0.1 ...` Must correspond to the order of the UIDs.
* `-s, --salt TEXT`: Corresponding salt for the hash function, e.g. -s 163,241,217 ...
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli weights commit`

Commit weights for specific subnet.

Use this command to commit weights for a specific subnet. You must specify the netuid, the UIDs you are interested in, and the weights you wish to commit.

**Example:**

```
btcli wt commit --netuid 1 --uids 1,2,3,4 --w 0.1,0.2,0.3
```

Note: This command is used to commit weights for a specific subnet and requires the user to have the necessary
permissions.

**Usage**:

```console
btcli weights commit [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--netuid INTEGER`: The netuid of the subnet in the network, (e.g. 1).
* `-u, --uids TEXT`: UIDs of interest for the specified netuid, e.g. -u 1,2,3 ...
* `-w, --weights TEXT`: Weights for the specified UIDs, e.g. `-w 0.2,0.4,0.1 ...` Must correspond to the order of the UIDs.
* `-s, --salt TEXT`: Corresponding salt for the hash function, e.g. -s 163 -s 241 -s 217 ...
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

## `btcli wt`

**Usage**:

```console
btcli wt [OPTIONS] COMMAND [ARGS]...
```

**Options**:

* `--help`: Show this message and exit.

**Commands**:

* `reveal`: Reveal weights for a specific subnet.
* `commit`: Commit weights for specific subnet.

### `btcli wt reveal`

Reveal weights for a specific subnet.

You must specify the netuid, the UIDs you are interested in, and weights you wish to reveal.

**Example:**

```
btcli wt reveal --netuid 1 --uids 1,2,3,4 --weights 0.1,0.2,0.3,0.4 --salt 163,241,217,11,161,142,147,189
```

**Usage**:

```console
btcli wt reveal [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--netuid INTEGER`: The netuid of the subnet in the network, (e.g. 1).
* `-u, --uids TEXT`: Corresponding UIDs for the specified netuid, e.g. -u 1,2,3 ...
* `-w, --weights TEXT`: Weights for the specified UIDs, e.g. `-w 0.2,0.4,0.1 ...` Must correspond to the order of the UIDs.
* `-s, --salt TEXT`: Corresponding salt for the hash function, e.g. -s 163,241,217 ...
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli wt commit`

Commit weights for specific subnet.

Use this command to commit weights for a specific subnet. You must specify the netuid, the UIDs you are interested in, and the weights you wish to commit.

**Example:**

```
btcli wt commit --netuid 1 --uids 1,2,3,4 --w 0.1,0.2,0.3
```

Note: This command is used to commit weights for a specific subnet and requires the user to have the necessary
permissions.

**Usage**:

```console
btcli wt commit [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--netuid INTEGER`: The netuid of the subnet in the network, (e.g. 1).
* `-u, --uids TEXT`: UIDs of interest for the specified netuid, e.g. -u 1,2,3 ...
* `-w, --weights TEXT`: Weights for the specified UIDs, e.g. `-w 0.2,0.4,0.1 ...` Must correspond to the order of the UIDs.
* `-s, --salt TEXT`: Corresponding salt for the hash function, e.g. -s 163 -s 241 -s 217 ...
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

## `btcli weight`

**Usage**:

```console
btcli weight [OPTIONS] COMMAND [ARGS]...
```

**Options**:

* `--help`: Show this message and exit.

**Commands**:

* `reveal`: Reveal weights for a specific subnet.
* `commit`: Commit weights for specific subnet.

### `btcli weight reveal`

Reveal weights for a specific subnet.

You must specify the netuid, the UIDs you are interested in, and weights you wish to reveal.

**Example:**

```
btcli wt reveal --netuid 1 --uids 1,2,3,4 --weights 0.1,0.2,0.3,0.4 --salt 163,241,217,11,161,142,147,189
```

**Usage**:

```console
btcli weight reveal [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--netuid INTEGER`: The netuid of the subnet in the network, (e.g. 1).
* `-u, --uids TEXT`: Corresponding UIDs for the specified netuid, e.g. -u 1,2,3 ...
* `-w, --weights TEXT`: Weights for the specified UIDs, e.g. `-w 0.2,0.4,0.1 ...` Must correspond to the order of the UIDs.
* `-s, --salt TEXT`: Corresponding salt for the hash function, e.g. -s 163,241,217 ...
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

### `btcli weight commit`

Commit weights for specific subnet.

Use this command to commit weights for a specific subnet. You must specify the netuid, the UIDs you are interested in, and the weights you wish to commit.

**Example:**

```
btcli wt commit --netuid 1 --uids 1,2,3,4 --w 0.1,0.2,0.3
```

Note: This command is used to commit weights for a specific subnet and requires the user to have the necessary
permissions.

**Usage**:

```console
btcli weight commit [OPTIONS]
```

**Options**:

* `--network, --subtensor.network, --chain, --subtensor.chain_endpoint TEXT`: The subtensor network to connect to. Default: finney.
* `--wallet-name, --name, --wallet_name, --wallet.name TEXT`: Name of the wallet.
* `-p, --wallet-path, --wallet_path, --wallet.path TEXT`: Path where the wallets are located. For example: `/Users/btuser/.bittensor/wallets`.
* `-H, --hotkey, --wallet_hotkey, --wallet-hotkey, --wallet.hotkey TEXT`: Hotkey of the wallet
* `--netuid INTEGER`: The netuid of the subnet in the network, (e.g. 1).
* `-u, --uids TEXT`: UIDs of interest for the specified netuid, e.g. -u 1,2,3 ...
* `-w, --weights TEXT`: Weights for the specified UIDs, e.g. `-w 0.2,0.4,0.1 ...` Must correspond to the order of the UIDs.
* `-s, --salt TEXT`: Corresponding salt for the hash function, e.g. -s 163 -s 241 -s 217 ...
* `--quiet`: Display only critical information on the console.
* `--verbose`: Enable verbose output.
* `--help`: Show this message and exit.

## `btcli utils`

**Usage**:

```console
btcli utils [OPTIONS] COMMAND [ARGS]...
```

**Options**:

* `--help`: Show this message and exit.

**Commands**:

* `convert`: Allows for converting between tao and rao...

### `btcli utils convert`

Allows for converting between tao and rao using the specified flags

**Usage**:

```console
btcli utils convert [OPTIONS]
```

**Options**:

* `--rao TEXT`: Convert amount from Rao
* `--tao FLOAT`: Convert amount from Tao
* `--help`: Show this message and exit.
--- 
Made with :heart: by The Openτensor Foundaτion