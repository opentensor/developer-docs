---
title: "Bittensor CLI: Permissions Guide"
---

The Bittensor CLI, `btcli` provides a wide range of functionality, and has a range of different requirements for various commands: some require a coldkey private key to authenticate, some require a hotkey private key, and some require neither. Additionally, different functions require different levels of permissions. Some require the user to have special status like being registered with a node, have a validator permit, or be an active member of the senate.

This page details the requirements for all of the `btcli` commands.

See also the `btcli` permissions guides for specific Bittensor personas:

- [Staker's Guide to `BTCLI`](./staking-and-delegation/stakers-btcli-guide)
- [Miner's Guide to `BTCLI`](./miners/miners-btcli-guide)
- [Validator's Guide to `BTCLI`](./validators/validators-btcli-guide)
- [Subnet Creator's Guide to `BTCLI`](./subnets/subnet-creators-btcli-guide)
- [Senator's Guide to `BTCLI`](./governance/senators-btcli-guide)

Other resources:

- [Introduction to Wallets, Coldkeys and Hotkeys in Bittensor](./getting-started/wallets)
- [Coldkey and Hotkey Workstation Security](./getting-started/coldkey-hotkey-security)

## Bittensor work environments and security requirements

Interacting with Bittensor generally falls into one of three levels of security, depending on whether you need to use your coldkey private key, hotkey private key, or neither.

The workstations you use to do this work can be referred to as a permissionless workstation (requiring neither private key), a coldkey workstation or a hotkey workstation, depending on which private key is provisioned.

1. A **permissionless workstation** has only coldkey *public keys* on it. which are sufficient for viewing all public information about a wallet, such as TAO and alpha stake balances. Information about subnets, miners, and validators can be viewed without introducing the security risk of initializing your private keys on a device.

    :::tip coldkey workstation security
    See [Permissionless workstation](./getting-started/coldkey-hotkey-security#permissionless-workstation)
    :::

1. A **coldkey workstation** contains coldkey in the `wallet_path`. For any coldkey associated with mainnet TAO, the coldkey workstation should be held to the highest possible security standards. 

    :::tip coldkey workstation security
    See [Coldkey workstation](./  getting-started/coldkey-hotkey-security#coldkey-workstation)
    :::

1. **A hotkey workstation**, which is generally a servers used for mining or validation, contains a hotkey private key in the `wallet_path` in the `btcli config`, as well as a coldkey public key for the corresponding coldkey. Compromised hotkeys can damage your reputation if they are used to maliciously submit false weights (if you are a validator), or bad work as a miner. However, ownership of TAO or alpha stake can only be transferred with a coldkey, and a leaked hotkey can be swapped using the coldkey; therefore hotkey leaks are far less dangerous than coldkey leaks.

    :::tip hotkey workstation
    See [Hotkey workstation security](./getting-started/coldkey-hotkey-security#hotkey-workstation)
    :::

## Requirements for `btcli` functions
### Coldkey

Your primary, fully privileged key; important for all users. Should be handled on a maximum security **coldkey workstation** only, to avoid catastrophic loss or malicious actions if compromised.

See [Coldkey and Hotkey Workstation Security](../getting-started/coldkey-hotkey-security).

Required for:
- Moving and transferring TAO
- Managing stake (add/remove/move)
- Creating hotkeys
- Registering hotkeys in subnets
- Creating and modifying subnets
- Participating in governance of Bittensor as a senator

### Hotkey

Hotkeys are used by **miners** and **validators** to sign transactions, and are required for governance.

Required for:
- Running miners: 
  - Serving requests from validators
  - Making on-chain data commitments (if applicable)
- Running validators:
  - making signed requests to miners
  - setting weights
  - being discoverable by stakers and miners

### Available liquidity

Some operations require a TAO balance or alpha stake balance.

- Transfers of TAO will fail if you lack the specified amount
- Staking and unstaking operations fail if they specify more than the owner has
- Registering a hotkey on a subnet to mine or validate has a fee that can be paid with TAO or proof-of-work.
- Creating a subnet requires a fee, which is computed dynamically. The price to create a subnet doubles when someone creates a subnet, and then gradually decreases. This system is designed as a kind of distributed auction, where price is determined by what people are willing to pay given the uncertain estimation of what others are willing to pay.

### Validator Permit

To set weights, a validator must meet several requirements. See [Requirements for validation](./validators/#requirements-for-validation).

### Senate requirements

See [Senate: Requirements](./senate#requirements)

## `btcli` commands

### `config`

The `btcli config ...` commands are used to configure `btcli`, including:
- selecting the targeted network (`finney` a.k.a. mainnet or `test` for test network)
- setting the directory where your Bittensor wallet coldkeys and/or hotkeys are stored

These commands don't require any permissions to run. Rather, you will run these commands on all `btcli` workstations to initialize them.

See: [Coldkey and Hotkey Workstation Security](./getting-started/coldkey-hotkey-security)

<details>
  <summary>btcli config</summary>

- `btcli config set`
- `btcli config get`
- `btcli config clear`
- `btcli config metagraph`
- `btcli conf set`
- `btcli conf get`
- `btcli conf clear`
- `btcli conf metagraph`

- `btcli c set`
- `btcli c get`
- `btcli c clear`
- `btcli c metagraph`
</details>

### `wallet`

Wallet subcommands have a variety of uses and must be run on all different kinds of workstation.

:::tip mind your keys
See: [Coldkey and Hotkey Workstation Security](./getting-started/coldkey-hotkey-security)
:::

####  Provisioning keys

1. A **permissionless workstation** can be initialized with a public key using **`btcli wallet regen-coldkeypub`**, which initializes the local wallet with your coldkey public key only. This allows you to read all information about your wallet, which is public information, but not to sign any transactions, hence not to make any *changes* to the state of the blockchain, including any of your balances or stakes. 

1. **`regen coldkey`** is used to initialize a coldkey workstation using a pre-existing wallet's *seed phrase*. This is a high security risk operation due to the inherant risk of handling the seed phrase.
1. **`new coldkey`** is used to initialize a coldkey workstation using a newly created *seed phrase*. This is a high security risk operation due to the inherant risk of handling the seed phrase.
1. **`regen hotkey`** is used to initialize a hotkey workstation using a pre-existing wallet's *seed phrase*. This is a high security risk operation due to the inherant risk of handling the seed phrase.
1. **`new hotkey`** is used to initialize a hotkey workstation using a newly created *seed phrase*. This is a high security risk operation due to the inherant risk of handling the seed phrase.



#### Permissionless operations 

- **`btcli wallet balance`**: Displays wallet balance
- **`btcli wallet overview`**: Displays a wallet overview.

#### Operations requiring coldkey private key:

- **`swap-hotkey`**: rotate a hotkey coldkey owned by the coldkey
- **`new-hotkey`**: create a new hotkey owned by the coldkey
- **`transfer`**: transfer TAO to another coldkey
- **`set-identity`**: set the coldkey's public identity information
- **`sign`(with coldkey)**: sign a message with the coldkey

#### Operations requiring hotkey private key:
- **`sign`** (with hotkey): sign a message with the hotkey


<details>
  <summary>`btcli wallet`</summary>
#### `btcli wallet list`
#### `btcli wallet swap-hotkey`
#### `btcli wallet regen-coldkey`
#### `btcli wallet regen-coldkeypub`
#### `btcli wallet regen-hotkey`
#### `btcli wallet new-hotkey`
#### `btcli wallet new-coldkey`
#### `btcli wallet create`
#### `btcli wallet balance`
#### `btcli wallet overview`
#### `btcli wallet transfer`
#### `btcli wallet inspect`
#### `btcli wallet faucet`
#### `btcli wallet set-identity`
#### `btcli wallet get-identity`
#### `btcli wallet sign`
#### `btcli wallet swap_hotkey`
#### `btcli wallet regen_coldkey`
#### `btcli wallet regen_coldkeypub`
#### `btcli wallet regen_hotkey`
#### `btcli wallet new_hotkey`
#### `btcli wallet new_coldkey`
#### `btcli wallet set_identity`
#### `btcli wallet get_identity`

#### `btcli w list`
#### `btcli w swap-hotkey`
#### `btcli w regen-coldkey`
#### `btcli w regen-coldkeypub`
#### `btcli w regen-hotkey`
#### `btcli w new-hotkey`
#### `btcli w new-coldkey`
#### `btcli w create`
#### `btcli w balance`
#### `btcli w overview`
#### `btcli w transfer`
#### `btcli w inspect`
#### `btcli w faucet`
#### `btcli w set-identity`
#### `btcli w get-identity`
#### `btcli w sign`
#### `btcli w swap_hotkey`
#### `btcli w regen_coldkey`
#### `btcli w regen_coldkeypub`
#### `btcli w regen_hotkey`
#### `btcli w new_hotkey`
#### `btcli w new_coldkey`
#### `btcli w set_identity`
#### `btcli w get_identity`
#### `btcli wallets list`
#### `btcli wallets swap-hotkey`
#### `btcli wallets regen-coldkey`
#### `btcli wallets regen-coldkeypub`
#### `btcli wallets regen-hotkey`
#### `btcli wallets new-hotkey`
#### `btcli wallets new-coldkey`
#### `btcli wallets create`
#### `btcli wallets balance`
#### `btcli wallets history`
#### `btcli wallets overview`
#### `btcli wallets transfer`
#### `btcli wallets inspect`
#### `btcli wallets faucet`
#### `btcli wallets set-identity`
#### `btcli wallets get-identity`
#### `btcli wallets sign`
#### `btcli wallets swap_hotkey`
#### `btcli wallets regen_coldkey`
#### `btcli wallets regen_coldkeypub`
#### `btcli wallets regen_hotkey`
#### `btcli wallets new_hotkey`
#### `btcli wallets new_coldkey`
#### `btcli wallets set_identity`
#### `btcli wallets get_identity`
</details>

### `stake`

Read operations require public keys. Write operations (stake add, move, remove...) require a coldkey private key.

:::tip mind your keys
See: [Coldkey and Hotkey Workstation Security](./getting-started/coldkey-hotkey-security)
:::

<details>
  <summary>btcli stake</summary>
#### `btcli stake add`
#### `btcli stake remove`
#### `btcli stake list`
#### `btcli stake move`
#### `btcli stake transfer`
#### `btcli stake swap`
#### `btcli stake child`
##### `btcli stake child get`
##### `btcli stake child set`
##### `btcli stake child revoke`
##### `btcli stake child take`
#### `btcli stake children`
##### `btcli stake children get`
##### `btcli stake children set`
##### `btcli stake children revoke`
##### `btcli stake children take`
#### `btcli st add`
#### `btcli st remove`
#### `btcli st list`
#### `btcli st move`
#### `btcli st transfer`
#### `btcli st swap`
#### `btcli st child`
##### `btcli st child get`
##### `btcli st child set`
##### `btcli st child revoke`
##### `btcli st child take`
#### `btcli st children`
##### `btcli st children get`
##### `btcli st children set`
##### `btcli st children revoke`
##### `btcli st children take`
</details>

### `sudo`

#### Read commands (permissionless)

- **`get`**: (same as `btcli subnet hyperparameters`), displays hyperparameters.
- **`proposals`**: displays proposals currently before the senate.
- **`senate`**: displays current senators.
- **`get-take`**: shows the validator take of a given validator.

#### Write commands (require coldkey)

- **`set`**: sets the hyperparameters for a subnet (requires the coldkey of the subnet creator).
- **`set-take`**: sets the validator take for a validator (requires the validator's coldkey).
- **`senate-vote`**: votes on a proposal before the senate (requres a coldkey with senate permissions).

<details>
  <summary>`btcli sudo`</summary>
#### `btcli sudo set`
#### `btcli sudo get`
#### `btcli sudo senate`
#### `btcli sudo proposals`
#### `btcli sudo senate-vote`
#### `btcli sudo set-take`
#### `btcli sudo get-take`
#### `btcli sudo senate_vote`
#### `btcli sudo get_take`
#### `btcli sudo set_take`
#### `btcli su set`
#### `btcli su get`

#### `btcli su senate`
#### `btcli su proposals`
#### `btcli su senate-vote`
#### `btcli su set-take`
#### `btcli su get-take`
#### `btcli su senate_vote`
#### `btcli su get_take`
#### `btcli su set_take`
</details>

### `subnets`

#### Read commands (permissionless)

- **`list`**: Lists subnets.
- **`show` alias `metagraph`**: Displays info about miner and validator activity on the subnet.
- **`hyperparameters`**: Shows configuration of a specific subnet.
- **`price`**: Displays a graph of alpha token prices of subnets over time.
- **`burn_cost`**: Shows current fee to create subnet.

#### Write commands (require coldkey)

- **`create`**: Create a subnet (requires burn fee)
- **`register/pow-register`**: Register a UID for the hotkey on a given subnet

:::tip
hyperparams are set with `btcli sudo`.
:::

Creating subnets requires a coldkey with sufficient balance.

Miner and validator registering a hotkey uses a coldkey, has a TAO cost unless proof-of-work
<!-- how does POW work??? -->

<details>
  <summary>`btcli subnets`</summary>
#### `btcli subnets hyperparameters`
#### `btcli subnets list`
#### `btcli subnets burn-cost`
#### `btcli subnets create`
#### `btcli subnets pow-register`
#### `btcli subnets register`
#### `btcli subnets metagraph`
#### `btcli subnets show`
#### `btcli subnets price`
#### `btcli subnets burn_cost`
#### `btcli subnets pow_register`
#### `btcli s hyperparameters`
#### `btcli s list`
#### `btcli s burn-cost`
#### `btcli s create`
#### `btcli s pow-register`
#### `btcli s register`
#### `btcli s metagraph`
#### `btcli s show`
#### `btcli s price`
#### `btcli s burn_cost`
#### `btcli s pow_register`
#### `btcli subnet hyperparameters`
#### `btcli subnet list`
#### `btcli subnet burn-cost`
#### `btcli subnet create`
#### `btcli subnet pow-register`
#### `btcli subnet register`
#### `btcli subnet metagraph`
#### `btcli subnet show`
#### `btcli subnet price`
#### `btcli subnet burn_cost`
#### `btcli subnet pow_register`

</details>

### `weights`

Reading weights with `reveal` is permissionless.

To set weights with `commit`, a validator must meet several requirements. See [Requirements for validation](./#requirements-for-validation).

<details>
  <summary>`btcli weight`</summary>
#### `btcli weights reveal`
#### `btcli weights commit`

#### `btcli wt reveal`
#### `btcli wt commit`
#### `btcli weight reveal`
#### `btcli weight commit`
</details>

### `utils`

#### `btcli utils convert`
This is a convenience command for performing conversions between minimal units (RAO) and TAO, or other chain-specific conversions. Permissionless (no key required) because it performs no on-chain operation, just a local calculation.
