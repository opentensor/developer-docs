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


Hotkey creation can be done on a secure machine (paired with your coldkey). **However, day-to-day mining** is done with the hotkey in a less secure environment (the “mining rig” or server), since it needs to be online to serve inference requests.

Hotkeys do need to be present for a variety of operations which miner and validator software interact with such as axon serving, on-chain data commitments, and other functions. These essentially need to be present in the unsafe environment that is running subnet code on a machine but come with less risks if they do get compromised.

Coldkey operations should be performed in a secure environments, ideally on an air gapped device or at least a device with minimal access / security risk involved. The coldkey must not be placed on a server used for mining as subnet code should not be considered safe code. Though most subnets take appropriate steps to ensure the security of their codebases, any time you have a port open and requests coming in there is risk.

See [Coldkey and Hotkey Workstation Security](../getting-started/coldkey-hotkey-security).


## Miner operations by workstation/env:

Unpermissioned workstation (public keys only):
- Check balances
- Monitor emissions and other metagraph info
- Check subnet alpha prices across Bittensor

Coldkey workstation:
- Create/import coldkey
- Create hotkeys
- Manage TAO and alpha stake
- Transfer/rotate TAO and alpha stake in case of key compromise
- Rotate hotkeys in case of compromise
- Register a hotkey to mine on a subnet

Hotkey workstation:
- import/provision hotkey
- serve w axon




:::tip Coldkeys do not mine

Miners will need coldkeys to manage their TAO and alpha currency, as well as hotkeys to serve requests. Ensure there is a clear boundary: The coldkey should **never** be on an environment with untrusted ML code from containers, frameworks, or libraries that might exfiltrate secrets.
:::

## `btcli` commands for miners:

`btcli wallet balance` and `btcli wallet overview`: Might be used to check the hotkey’s on-chain state or small balances. Suitable for low-sec on permissionless (public key only) workstation.

`btcli wallet new-hotkey` , `btcli subnets pow-register`, `btcli subnets pow_register`, `btcli subnets register`, `btcli wallet regen-hotkey`: Create and register a hotkey on a secure coldkey workstation (since this requires the coldkey), then transfer the hotkey file or mnemonic to the mining workstation. 

