
## Workstation config

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

Subnet management: Setters need CK with creator permissions, getters are typically permissionsless (???)

Senate stuff: CK? have to be a [Senator](./senate#requirements)

miner/validator registration stuff: setters HK, but getters permissionless or maybe HK?


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

Setters require HK w validator permit. getters permissionless (???)

### `btcli wt reveal`
### `btcli wt commit`
### `btcli weight reveal`
### `btcli weight commit`


## Utils ???

### `btcli utils convert`