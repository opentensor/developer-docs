---
title: "Bittensor CLI: Permissions Guide"
---

The Bittensor CLI, `btcli` provides a wide range of functionality: some commands require a coldkey to authenticate, some require a hotkey, and some require neither. Additionally, different functions require different levels of permissions. Some require the user to have special status like being registered with a node, have a validator permit, or be an active member of the senate.

This page details the requirements for all of the `btcli` commands. It is organized by Bittensor *persona*, on the assumption that everyone who uses `btcli` is in one or more of the following roles:

- stakers:
- miners:
- validators:
- subnet creators: 
- governance:

:::info
For additional background on the difference between **coldkeys** and **hotkeys**, please refer to the [Wallets, Coldkeys and Hotkeys in Bittensor](#wallets-coldkeys-and-hotkeys-in-bittensor-reference) section below (summarized from [the separate doc](./working-with-keys.md)).
:::

## Stakers

Stakers enter value into the Bittensor network by acquiring TAO and staking or *delegating* it to validators to support their work. As validators extract emissions, a certain percentage goes back to stakers.

See [Staking/Delegation Overview](./staking-and-delegation/delegation.md).

Stakers must be familiar with operations related to managing the TAO and staked alpha tokens in their Bittensor wallet balance.

Performing these functions requires using a **coldkey**, and hence must be performed in a **highly secure environment** for any wallet connected to real (mainnet) TAO balance. A leak of your coldkey can lead to a catastrophic loss of funds.

Accounts can be viewed without using a coldkey, but any changes to stake, transfers, or delegations require signing with the coldkey.

### Commands most relevant to stakers:
- **Wallet Commands** (Coldkey required for modifications):
  - `btcli wallet create`, `btcli wallet new-coldkey`, `btcli wallet new_coldkey`: Create or generate a new coldkey (secure environment).
  - `btcli wallet balance`, `btcli wallet overview`, `btcli wallet history`: View balances and transaction history. Viewing does not require a coldkey *if* you only query public chain state, but typically you’ll specify the coldkey to reference your own account data.
  - `btcli wallet transfer`: Transfer TAO from your coldkey to another address. Requires a coldkey signature (secure environment).
  - `btcli wallet faucet`: (Testnet only or any environment with a faucet). Coldkey not necessarily required if the faucet only needs a public key, but typically you’ll manage it via your wallet.
  - `btcli wallet inspect`: Inspect wallet details (permissionless unless you want to do private key operations).
- **Stake Management** (All require **coldkey** in a secure environment):
  - `btcli stake add`, `btcli stake remove`, `btcli stake list`, `btcli stake move`, `btcli stake transfer`, `btcli stake swap`
  - `btcli stake child ...` / `btcli stake children ...` (get, set, revoke, take)
  - Short aliases: `btcli st add`, `btcli st remove`, etc.
- **Subnet Discovery**:
  - `btcli subnets list`, `btcli subnets show`, `btcli subnets metagraph`: Permissionless *reads* to see available subnets or node info. 
  - `btcli subnets price`, `btcli subnets burn-cost`, `btcli subnets burn_cost`: Show the required burn to register in a particular subnet. Permissionless read.
- **Config**:
  - `btcli config set`, `btcli config get`, etc. (Permissionless) to configure a `btcli` environment.

In summary, **stakers only need a coldkey**. Staking commands should **never** be run on an insecure or public-facing machine since the coldkey manages your TAO holdings.

## Miners

Miners run processes that serve or forward inference requests on the network. They register with the chain using a **hotkey** to obtain a UID for the subnet(s) in which they operate.

- Hotkey creation can be done on a secure machine (paired with your coldkey). **However, day-to-day mining** is done with the hotkey in a less secure environment (the “mining rig” or server), since it needs to be online to serve inference requests.
- Miners *can* also stake TAO, but that typically requires using the coldkey in a secure environment to move or delegate stake. Once staked, the miner can remain on their hotkey-based environment to continue operation.

### Additional Commands most relevant to miners:
  - `btcli subnets pow-register`, `btcli subnets pow_register`, `btcli subnets register`: Miner uses these to register themselves on the subnet, typically from a machine with the hotkey. **However,** the associated transaction cost must come from the coldkey. So you either sign it with your coldkey (secure environment) or set up a valid signature flow. 
    - The **registration** places the hotkey on the chain with a UID in that subnet.
- **Wallet**:
  - `btcli wallet new-hotkey` / `btcli wallet regen-hotkey`: Creation/regeneration of hotkeys. Typically do these on a secure machine (paired to your coldkey), then transfer the hotkey file or mnemonic to the mining machine. 
  - `btcli wallet balance` and `btcli wallet overview`: Might be used to check the hotkey’s on-chain state or small balances. (Hotkey on a less secure machine is lower risk, but still treat it with caution.)

Miners primarily rely on **hotkeys** for daily operations. The **coldkey** is only needed when you need to create or fund that hotkey, or if you want to stake additional TAO or pay the burn for certain registrations.

## Validators

Validators secure the network by finalizing blocks, validating miner performance, and posting “weights” that reflect consensus on performance. In Bittensor’s design:
- **Hotkey** (with a validator permit) signs and submits “weight” extrinsics, typically from a machine that is online and runs the validator logic.  
- **Coldkey** is needed for any stake management or large fund transfers.

### Commands most relevant to validators:
- **Weights**:
  - `btcli weights reveal`, `btcli weights commit`  
  - `btcli wt reveal`, `btcli wt commit`  
  - `btcli weight reveal`, `btcli weight commit`  
  These require a hotkey with an on-chain validator permit. Typically run in a live environment (the validator node).
- **Stake Management** (if you stake TAO to your validator hotkey or accept delegations):
  - `btcli stake add`, `btcli stake remove`, `btcli stake move`, etc. (see [Stakers](#stakers) section).  
  Requires the coldkey in a **secure environment** if you are adding or removing stake from your own coldkey to your validator hotkey.
- **Subnet Registration**:
  - If you are validating on a particular subnet, you often must register with `btcli subnets register` or `btcli subnets pow-register`, same as miners. This also typically involves your coldkey to pay any required fees, while awarding your hotkey the validator status/UID in that subnet.

In short, validators use their **hotkey** for daily validation and weights. The coldkey is still needed for any staking or managing TAO, so you keep it offline or in a more secure environment whenever possible.

## Subnet Creators

Subnet creators define and manage new subnets, specifying parameters like burn cost, hyperparameters, or other chain-level configurations. This role inherently requires a **coldkey** with sufficient balance/permissions to create or update subnets. 

### Commands most relevant to subnet creators:
- **Subnet Creation / Configuration** (all require **coldkey** in a secure environment to sign on-chain transactions):
  - `btcli subnets create`
  - `btcli subnets hyperparameters`
  - `btcli subnets burn-cost` / `btcli subnets burn_cost`
  - `btcli subnets price`
  - `btcli subnets set` (some advanced usage might come in via `sudo` or governance commands)
  - Similarly, short forms like `btcli s create`, `btcli s burn-cost`, `btcli subnet create`, etc. 
- **Reads** (permissionless in many cases):
  - `btcli subnets list`, `btcli subnets show`, `btcli subnets metagraph`
  - The short forms `btcli s list`, `btcli s show`, `btcli subnet list`, and so on.  

The core difference is that *creating* or *altering* a subnet’s parameters requires a secure environment and a coldkey that has enough TAO and the appropriate on-chain privileges.

## Governance Functions

Governance participants (senate members, sudo-level accounts) can propose changes, cast votes, or execute privileged commands that affect the entire network. They must have a **coldkey** with the relevant governance role (senate membership or sudo privileges).

### Commands most relevant to governance:

- **Senate / Proposals** (coldkey with senator role):
  - `btcli sudo senate`
  - `btcli sudo proposals`
  - `btcli sudo senate-vote`
  - `btcli sudo senate_vote`
  - Aliases: `btcli su senate`, `btcli su proposals`, etc.
- **Sudo Commands** (coldkey with sudo privileges):
  - `btcli sudo set`, `btcli sudo get`
  - `btcli sudo set-take`, `btcli sudo get-take`
  - `btcli sudo set_take`, `btcli sudo get_take`
  - Aliases: `btcli su set`, `btcli su get`, etc.

Because these commands can significantly change chain parameters or enact critical changes, they require a fully privileged coldkey in a **very** secure environment.

## Requirements:

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

## Workstation config
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

## Wallet management

Mostly target a coldkey; should be performed on a secure CK workstation, NOT a mining workstation or any other insecure endpoint.

HKs should be created on secure CK workstation and then carefully provisioned to less secure working nodes for mining and validation.

### `btcli wallet list`
### `btcli wallet swap-hotkey`
### `btcli wallet regen-coldkey`
### `btcli wallet regen-coldkeypub`
### `btcli wallet regen-hotkey`
### `btcli wallet new-hotkey`
### `btcli wallet new-coldkey`
### `btcli wallet create`
### `btcli wallet balance`
### `btcli wallet history`
### `btcli wallet overview`
### `btcli wallet transfer`
### `btcli wallet inspect`
### `btcli wallet faucet`
### `btcli wallet set-identity`
### `btcli wallet get-identity`
### `btcli wallet sign`
### `btcli wallet swap_hotkey`
### `btcli wallet regen_coldkey`
### `btcli wallet regen_coldkeypub`
### `btcli wallet regen_hotkey`
### `btcli wallet new_hotkey`
### `btcli wallet new_coldkey`
### `btcli wallet set_identity`
### `btcli wallet get_identity`

### `btcli w list`
### `btcli w swap-hotkey`
### `btcli w regen-coldkey`
### `btcli w regen-coldkeypub`
### `btcli w regen-hotkey`
### `btcli w new-hotkey`
### `btcli w new-coldkey`
### `btcli w create`
### `btcli w balance`
### `btcli w history`
### `btcli w overview`
### `btcli w transfer`
### `btcli w inspect`
### `btcli w faucet`
### `btcli w set-identity`
### `btcli w get-identity`
### `btcli w sign`
### `btcli w swap_hotkey`
### `btcli w regen_coldkey`
### `btcli w regen_coldkeypub`
### `btcli w regen_hotkey`
### `btcli w new_hotkey`
### `btcli w new_coldkey`
### `btcli w set_identity`
### `btcli w get_identity`
### `btcli wallets list`
### `btcli wallets swap-hotkey`
### `btcli wallets regen-coldkey`
### `btcli wallets regen-coldkeypub`
### `btcli wallets regen-hotkey`
### `btcli wallets new-hotkey`
### `btcli wallets new-coldkey`
### `btcli wallets create`
### `btcli wallets balance`
### `btcli wallets history`
### `btcli wallets overview`
### `btcli wallets transfer`
### `btcli wallets inspect`
### `btcli wallets faucet`
### `btcli wallets set-identity`
### `btcli wallets get-identity`
### `btcli wallets sign`
### `btcli wallets swap_hotkey`
### `btcli wallets regen_coldkey`
### `btcli wallets regen_coldkeypub`
### `btcli wallets regen_hotkey`
### `btcli wallets new_hotkey`
### `btcli wallets new_coldkey`
### `btcli wallets set_identity`
### `btcli wallets get_identity`

## Stake Management

Coldkey w sufficient TAO or w stake for unstaking/moving

Mostly target a coldkey; should be performed on a secure CK workstation, NOT a mining workstation or any other insecure endpoint.

### `btcli stake add`
### `btcli stake remove`
### `btcli stake list`
### `btcli stake move`
### `btcli stake transfer`
### `btcli stake swap`
### `btcli stake child`
#### `btcli stake child get`
#### `btcli stake child set`
#### `btcli stake child revoke`
#### `btcli stake child take`
### `btcli stake children`
#### `btcli stake children get`
#### `btcli stake children set`
#### `btcli stake children revoke`
#### `btcli stake children take`
### `btcli st add`
### `btcli st remove`
### `btcli st list`
### `btcli st move`
### `btcli st transfer`
### `btcli st swap`
### `btcli st child`
#### `btcli st child get`
#### `btcli st child set`
#### `btcli st child revoke`
#### `btcli st child take`
### `btcli st children`
#### `btcli st children get`
#### `btcli st children set`
#### `btcli st children revoke`
#### `btcli st children take`


## Subnet Management and Governance

Complicated!

Subnet management: Setters need CK with creator permissions, getters are typically permissionless (for listing or reading). Creating or modifying subnets (burn cost, price, hyperparameters) requires a coldkey with sufficient balance and permissions.

Senate stuff: CK with senator role for proposals and votes, or CK with sudo privileges for certain chain-level commands.

miner/validator registration stuff: typically uses a hotkey for the registration extrinsic, though the creation of subnets (which set registration parameters) requires a coldkey.

### `btcli sudo set`
### `btcli sudo get`
### `btcli sudo senate`
### `btcli sudo proposals`
### `btcli sudo senate-vote`
### `btcli sudo set-take`
### `btcli sudo get-take`
### `btcli sudo senate_vote`
### `btcli sudo get_take`
### `btcli sudo set_take`
### `btcli su set`
### `btcli su get`

### `btcli su senate`
### `btcli su proposals`
### `btcli su senate-vote`
### `btcli su set-take`
### `btcli su get-take`
### `btcli su senate_vote`
### `btcli su get_take`
### `btcli su set_take`

### `btcli subnets hyperparameters`
### `btcli subnets list`
### `btcli subnets burn-cost`
### `btcli subnets create`
### `btcli subnets pow-register`
### `btcli subnets register`
### `btcli subnets metagraph`
### `btcli subnets show`
### `btcli subnets price`
### `btcli subnets burn_cost`
### `btcli subnets pow_register`
### `btcli s hyperparameters`
### `btcli s list`
### `btcli s burn-cost`
### `btcli s create`
### `btcli s pow-register`
### `btcli s register`
### `btcli s metagraph`
### `btcli s show`
### `btcli s price`
### `btcli s burn_cost`
### `btcli s pow_register`
### `btcli subnet hyperparameters`
### `btcli subnet list`
### `btcli subnet burn-cost`
### `btcli subnet create`
### `btcli subnet pow-register`
### `btcli subnet register`
### `btcli subnet metagraph`
### `btcli subnet show`
### `btcli subnet price`
### `btcli subnet burn_cost`
### `btcli subnet pow_register`
### `btcli weights reveal`
### `btcli weights commit`


## Weights

Setters require an active hotkey that has a validator permit. Reading or querying weights is generally permissionless, but committing or revealing them is only for registered validators.

### `btcli wt reveal`
### `btcli wt commit`
### `btcli weight reveal`
### `btcli weight commit`


## Utils ???

### `btcli utils convert`
This is a convenience command for performing conversions between minimal units (RAO) and TAO, or other chain-specific conversions. Permissionless (no key required) because it performs no on-chain operation, just a local calculation.
