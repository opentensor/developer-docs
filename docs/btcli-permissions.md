---
title: "Bittensor CLI: Permissions Guide"
---

The Bittensor CLI, `btcli` provides a wide range of functionality: some commands require a coldkey to authenticate, some require a hotkey, and some require neither. Additionally, different functions require different levels of permissions. Some require the user to have special status like being registered with a node, have a validator permit, or be an active member of the senate.

This page details the requirements for all of the `btcli` commands.

See also the `btcli` permissions guides for specific Bittensor personas:

- [Staker's Guide to `BTCLI`](./staking-and-delegation/stakers-btcli-guide)
- [Miner's Guide to `BTCLI`](./miners/miners-btcli-guide)
- [Validator's Guide to `BTCLI`](./validators/validators-btcli-guide)
- [Subnet Creator's Guide to `BTCLI`](./subnets/subnet-creators-btcli-guide)
- [Senator's Guide to `BTCLI`](./governance/senators-btcli-guide)

Other resources:

- [Wallets, Coldkeys and Hotkeys in Bittensor](./getting-started/wallets)
- [Coldkey and Hotkey Workstation Security](./getting-started/coldkey-hotkey-security)

## Requirements for `btcli` functions

### Coldkey

Important for all users. Your primary, fully privileged key. Should be used on a secure **coldkey workstation** to avoid catastrophic loss or malicious actions if compromised.

See [Coldkey and Hotkey Workstation Security](../getting-started/coldkey-hotkey-security).

Required for:
- Moving or transferring TAO (i.e., `wallet transfer`).
- Managing stake (add/remove/move).
- Creating hotkeys.
- Creating or modifying subnets (`btcli subnets create`).
- Voting or proposing in governance.
- Registering hotkeys in subnets


### Hotkey

Most users do not need their own hotkey. This is used by **miners** and **validators** for signing operations. Stakers use validators' hotkey public key to identify them in order to delegate stake to them.

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
<!-- what else -->

### Validator Permit

To set weights, a validator must meet several requirements. See [Requirements for validation](./validators/#requirements-for-validation).

### Senate requirements

In order to participate in the Senate, a coldkey must:

- Have registered with any subnetwork as a hotkey-coldkey pair.
- Have nominated themselves as a delegate for anyone to stake their $TAO with.
- Have a hotkey stake value is greater than 2% of the network's total stake amount, through delegation or self-stake.
- Have elected to participate in the Senate. 

## `btcli` commands

### `config`

The `btcli config ...` commands are used to configure `btcli`, including:
- selecting the targeted network (`finney` a.k.a. mainnet or `test` for test network)
- setting the directory where your Bittensor wallet coldkeys and/or hotkeys are stored

These commands don't require any permissions to run, but you'll run these commands on all `btcli` workstations:

- **Permissionless workstation**: You don't need a key to view subnets and stuff. You do need a coldkey apparently for `btcli view dashboard`, but it can be a throwaway key, it doesn't need any TAO or anything else attached to it.

- **Coldkey workstation**: Contains coldkey in the `wallet_path`. For any coldkey associated with mainnet TAO, this should only be done on a secure workstation. 

    :::tip coldkey workstation security
    See [Coldkey workstation security](./getting-started/coldkey-hotkey-security#coldkey-workstation-security)
    :::

- **Hotkey workstation**: Servers used for mining or validation. Contains only hotkey private key in the `wallet_path` in the `btcli config`. Compromised hotkeys can damage your reputation if they are used to maliciously submit false weights (if you are a validator), or bad work as a miner. However, ownership of TAO or alpha stake can only be transferred with a coldkey.

    :::tip hotkey workstation security
    See [Hotkey workstation security](./getting-started/coldkey-hotkey-security#hotkey-workstation-security)
    :::

<details>
  <summary>btcli config</summary>

  btcli config [options]
  - btcli config set
  - btcli config get
  - ...
  - btcli conf metagraph

Permissionless

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

Many wallet subcommands require a coldkey and hence should be performed on a secure coldkey workstation, NOT a mining workstation or any other insecure endpoint.

Hotkeys should be created on secure coldkey workstation and then carefully provisioned to less secure working nodes for mining and validation.

:::tip mind your keys
See: [Coldkey and Hotkey Workstation Security](./getting-started/coldkey-hotkey-security)
:::

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
#### `btcli wallet history`
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
#### `btcli w history`
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

Many `stake` subcommands require a coldkey and hence should be performed on a secure coldkey workstation, NOT a mining workstation or any other insecure endpoint.

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

Many `sudo` subcommands require a coldkey and hence should be performed on a secure coldkey workstation, NOT a mining workstation or any other insecure endpoint.

CK with senator role for proposals and votes, or CK with sudo privileges for certain chain-level commands.


Validator take...

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

Getters are typically permissionless for listing or reading subnets, prices, hyperparams, burn cost, etc.

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

Reading weights is permissionless.

Committing weights require an active hotkey that has a validator permit.

To have a **validator permit** in a given subnet, allowing you to submit miner evaluations using the [`set_weights`](pathname:///python-api/html/autoapi/bittensor/core/extrinsics/set_weights/index.html) function, you must meet the following requirements:

  - Your hotkey must be registered, granting you a UID on the subnet
  - You must have a stake-weight on the subnet of least 1000, including stake delegated to your hotkey from other wallets' coldkeys. A validator's stake weight in a subnet equals their alpha stake plus their TAO stake times the `tao_weight` parameter (current value: 0.18):

    $$

    \text{Validator stake weight} = \alpha +  0.18 \times \tau 

    $$
  - You must be one of the top 64 validators in the subnet, ranked by stake.


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
