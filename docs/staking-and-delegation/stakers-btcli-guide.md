---
title: "Staker's Guide to `BTCLI`"
---

# Staker's Guide to `BTCLI`

Stakers enter value into the Bittensor network by acquiring TAO and staking or *delegating* it to validators to support their work. As validators extract emissions, a certain percentage goes back to stakers.


Stakers must be familiar with operations related to managing the TAO and staked alpha tokens in their Bittensor wallet balance.

Performing these functions requires using a **coldkey**, and hence must be performed in a [**highly secure environment**](../getting-started/coldkey-hotkey-security) for any wallet connected to real (mainnet) TAO balance. A leak of your coldkey can lead to a catastrophic loss of funds.

Accounts can be viewed without using a coldkey, but any changes to stake, transfers, or delegations require signing with the coldkey.

**Stakers only need a coldkeys**.

See:
- [Staking/Delegation Overview](./delegation.md)
- [Bittensor CLI: Permissions Guide](../btcli-permissions)
- [Wallets, Coldkeys and Hotkeys in Bittensor](../getting-started/wallets)
- [Coldkey and Hotkey Workstation Security](../getting-started/coldkey-hotkey-security)

## Commands most relevant to stakers
### Wallets
  - View balances and stake&mdash;only coldkey public key is required (permissionless)
  - Create or generate a new coldkey (coldkey required).
  - transfer TAO
  - Transfer TAO from your coldkey to another address. Requires a coldkey signature (secure environment).
### Subnet Discovery
  - `btcli subnets list`, `btcli subnets show`, `btcli subnets metagraph`: Permissionless *reads* to see available subnets or node info. 
  - `btcli subnets price`, `btcli subnets burn-cost`, `btcli subnets burn_cost`: Show the required burn to register in a particular subnet. Permissionless read.
### Staking (All require **coldkey** except for list):
  - Add, remove, or move stake to validators on specific subnets.
  - Transfer ownership of stake to anoth
  - `btcli stake child ...` / `btcli stake children ...` (get, set, revoke, take)
  - Short aliases: `btcli st add`, `btcli st remove`, etc.

### Workstation configuration
  - `btcli config set`, `btcli config get`, etc. (Permissionless) to configure a `btcli` environment.
