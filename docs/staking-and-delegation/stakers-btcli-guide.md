---
title: "Staker's Guide to `BTCLI`"
---

# Staker's Guide to `BTCLI`

Stakers enter value into the Bittensor network by acquiring TAO and staking or *delegating* it to validators to support their work. As validators extract emissions, a certain percentage goes back to stakers.

See also:
- [Staking/Delegation Overview](./delegation.md)
- [Bittensor CLI: Permissions Guide](../btcli-permissions)

Stakers must be familiar with operations related to managing the TAO and staked alpha tokens in their Bittensor wallet balance.

Performing these functions requires using a **coldkey**, and hence must be performed in a **highly secure environment** for any wallet connected to real (mainnet) TAO balance. A leak of your coldkey can lead to a catastrophic loss of funds.

Accounts can be viewed without using a coldkey, but any changes to stake, transfers, or delegations require signing with the coldkey.

**Commands most relevant to stakers:**
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

