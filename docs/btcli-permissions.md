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


:::info
For additional background on the difference between **coldkeys** and **hotkeys**, please refer to the [Wallets, Coldkeys and Hotkeys in Bittensor](#wallets-coldkeys-and-hotkeys-in-bittensor-reference) section below (summarized from [the separate doc](./working-with-keys.md)).
:::

## Requirements for `btcli` functions

Different functions have different requirements.

### Coldkey
Your primary, fully privileged key. Required for:
- Managing stake (add/remove/move).
- Moving or transferring TAO (i.e., `wallet transfer`).
- Creating or modifying subnets (`btcli subnets create`).
- Voting or proposing in governance.
Must be used on a **high-security machine** to avoid catastrophic loss if compromised.

### Hotkey
Used for daily operations with lower privileges:
- Running miners (signing inference, staying online).
- Running validators (weight commits, daily on-chain actions).
Usually stored on a less secure environment than the coldkey because it must be online and accessible for repeated use.

### Available liquidity
Make sure your coldkey wallet has sufficient on-chain TAO to pay fees, stake, or register subnets. Insufficient balance will cause transactions to fail.

### Validator Permit
An on-chain permission required for hotkeys that want to operate as validators. Without it, you can’t sign or submit weight commits.


## `btcli` commands and their permissions

### `btcli config`
- **Coldkey workstation**: Minimal exposure, ideally offline or with strong security controls. Used only for signing critical transactions (e.g., staking, governance, subnet creation).
- **Hotkey workstation**: Online servers used for mining or validation. Contains only hotkeys.

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

### `btcli wallet`

Mostly target a coldkey; should be performed on a secure CK workstation, NOT a mining workstation or any other insecure endpoint.

HKs should be created on secure CK workstation and then carefully provisioned to less secure working nodes for mining and validation.
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

Coldkey w sufficient TAO or w stake for unstaking/moving

Mostly target a coldkey; should be performed on a secure CK workstation, NOT a mining workstation or any other insecure endpoint.
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

### `btcli sudo`


CK with senator role for proposals and votes, or CK with sudo privileges for certain chain-level commands.

miner/validator registration stuff: typically uses a hotkey for the registration extrinsic, though the creation of subnets (which set registration parameters) requires a coldkey.

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
### `btcli subnets`

Setters need CK with creator permissions, getters are typically permissionless (for listing or reading). Creating or modifying subnets (burn cost, price, hyperparameters) requires a coldkey with sufficient balance and permissions.

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
### Weights

Setters require an active hotkey that has a validator permit. Reading or querying weights is generally permissionless, but committing or revealing them is only for registered validators.
<details>
  <summary>`btcli weight`</summary>
#### `btcli weights reveal`
#### `btcli weights commit`

#### `btcli wt reveal`
#### `btcli wt commit`
#### `btcli weight reveal`
#### `btcli weight commit`
</details>

### Utils ???

#### `btcli utils convert`
This is a convenience command for performing conversions between minimal units (RAO) and TAO, or other chain-specific conversions. Permissionless (no key required) because it performs no on-chain operation, just a local calculation.
