---
title: "Miner's Guide to `BTCLI`"
---

# Miner's Guide to `BTCLI`

This page discusses `btcli` security and usage considerations specifically for Bittensor miners.

For general coverage of `btcli` security and usage considerations across persona, see: [Bittensor CLI: Permissions Guide](../btcli-permissions)

See also:

- [Wallets, Coldkeys and Hotkeys in Bittensor](../getting-started/wallets) for an introduction to the authentication technology used in Bittensor.
- [Coldkey and Hotkey Workstation Security](../getting-started/coldkey-hotkey-security) for contrete security details about managing keys material.


## Intro

Miners in Bittensor work to produce digital commondities. To securely serve these commodities to validators, miners use their registered hotkey to sign requests. Therefore, miners primarily rely on **hotkeys** for daily operations.

The **coldkey** is only needed when you need to create or fund that hotkey, or if you want to stake additional TAO or pay the burn for registrations.


Miners must also manage their own TAO and alpha stake (to exit the emissions that accure to them), and hence should familiarize themselves with staking operations.

See:
- [Staking/Delegation Overview](../staking-and-delegation/delegation)
- [Staker's Guide to `BTCLI`](../staking-and-delegation/stakers-btcli-guide)


Creating hotkeys requires a coldkey private key, and should be done on a secure [coldkey workstation](../getting-started/coldkey-hotkey-security#coldkey-workstation). However, using hotkeys for signing requests when mining does not require a coldkey, which should never be present on a mining server, i.e. a hotkey workstation. The coldkey should not be placed on a machine used for mining because the software dependencies for mining should not be considered safe/trusted code to the standards of a coldkey workstation. 

See [Coldkey and Hotkey Workstation Security](../getting-started/coldkey-hotkey-security).

## Requirements for mining functions

### Unpermissioned workstation (public keys only):
- Check balances
- Monitor emissions and other metagraph info
- Check subnet alpha prices across Bittensor

### Coldkey workstation:
- Create/import coldkey
- Create hotkeys
- Manage TAO and alpha stake
- Transfer/rotate TAO and alpha stake in case of key compromise
- Rotate hotkeys in case of compromise
- Register a hotkey to mine on a subnet

### Mining node (Hotkey workstation):
- Import/provision hotkey
- Provide hotkey to subnet codebase for operations such as axon serving, commitment creation etc

:::tip Coldkeys do not mine

Miners will need coldkeys to manage their TAO and alpha currency, as well as hotkeys to serve requests. Ensure there is a clear boundary: The coldkey should **never** be on an environment with untrusted ML code from containers, frameworks, or libraries that might exfiltrate secrets.
:::

## `btcli` commandsfor miners:

### Hotkey Managementd

`btcli wallet new-hotkey` , `btcli wallet regen-hotkey`,  : Create and register a hotkey on a secure coldkey workstation  then transfer the hotkey file or mnemonic to the mining workstation. 

`btcli subnets register`, `btcli subnets pow-register`: register a UID


## Key rotation

If you suspect your coldkey may have been leaked, you can request to swap it out of your wallet, using an extrinsic blockchain transaction. This operation has a 5 day waiting period, during which your coldkey will be locked. The cost of this coldkey swap transaction is 0.1 TAO.

See [Rotate/Swap your Coldkey](../subnets/schedule-coldkey-swap)

