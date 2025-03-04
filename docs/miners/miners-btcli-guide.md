---
title: "Miner's Guide to `BTCLI`"
---

# Miner's Guide to `BTCLI`

Miners run processes that serve or forward inference requests on the network. They register with the chain using a **hotkey** to obtain a UID for the subnet(s) in which they operate. In addition, they must use a coldkey to manage their TAO and any alpha currencies, essentially perforoming all the functions of stakers.

This page discusses btcli stuff specifically for Miners. For general coverage of BTCLI and permissions stuff, see: [Bittensor CLI: Permissions Guide](../btcli-permissions)

Hotkeys and coldkeys are different yada yada...

Miners primarily rely on **hotkeys** for daily operations. The **coldkey** is only needed when you need to create or fund that hotkey, or if you want to stake additional TAO or pay the burn for certain registrations.

Hotkey creation can be done on a secure machine (paired with your coldkey). **However, day-to-day mining** is done with the hotkey in a less secure environment (the “mining rig” or server), since it needs to be online to serve inference requests.

Coldkey operations should be performed in a secure environments...

**Additional Commands most relevant to miners:**

- **Hotkey management**:
- `btcli wallet new-hotkey` / `btcli wallet regen-hotkey`: Creation/regeneration of hotkeys. Typically do these on a secure machine (paired to your coldkey), then transfer the hotkey file or mnemonic to the mining machine. 
- `btcli wallet balance` and `btcli wallet overview`: Might be used to check the hotkey’s on-chain state or small balances. (Hotkey on a less secure machine is lower risk, but still treat it with caution.)

_ **Subnet registration**:
- `btcli subnets pow-register`, `btcli subnets pow_register`, `btcli subnets register`: Miner uses these to register themselves on the subnet, typically from a machine with the hotkey. **However,** the associated transaction cost must come from the coldkey. So you either sign it with your coldkey (secure environment) or set up a valid signature flow. The **registration** associates the hotkey with a miner UID on the subnet.
