---
title: "Dynamic TAO"
---

import { HiOutlineCommandLine } from "react-icons/hi2";
import { HiAcademicCap } from "react-icons/hi2";

# Dynamic TAO

Dynamic TAO is a planned evolution of the integrated tokenomic and governance model that underlies the Bittensor network. It represents a significant step in Bittensor's trajectory toward more thorough decentralization.

See the [Dynamic TAO Whitepaper](https://drive.google.com/file/d/1vkuxOFPJyUyoY6dQzfIWwZm2_XL3AEOx/view) for a full explanation.

See: [Conceptual guide to Dynamic TAO](./dtao-guide.md)

Dynamic TAO is now live on Bittensor [testnet](../bittensor-networks), and is currently being voted on in the senate as an upgrade to mainnet.

:::tip
Run `btcli root proposals --network finney` to view current proposals and votes that have been cast.
:::

## What to expect with Dynamic TAO

Most operations will remain unchanged, including the main workflows for miners (e.g., registering on subnets) and validators (e.g., setting weights on miners).
Simply update the Bittensor SDK and/or `btcli`, and you will be prepared to work with the Dynamic TAO-enabled Bittensor test network.


:::danger
The migration to Dynamic TAO includes breaking changes. Older versions of the SDK and `btcli` are not compatible with Dynamic TAO. If a participant on your subnet does not upgrade their tooling, they will fall out of consensus.

The changes to `btcli` and the Bittensor SDK are not backwards compatible.
:::

## Using Dynamic TAO

To update to the Dynamic TAO-enabled versions of the tooling, run:

```
# update the SDK to the most recent dTao enabled release candidate
pip install bittensor==8.5.1rc6
# update BTCLI to the most recent dTao enabled release candidate
pip install bittensor-cli==8.2.0rc10
```

:::danger
The changes to `btcli` and the Bittensor SDK are not backwards compatible.

The migration to Dynamic TAO includes breaking changes. Older versions of the SDK and `btcli` are not compatible with Dynamic TAO. If a participant on your subnet does not upgrade their tooling, they will fall out of consensus.
:::

See:
- [Bittensor SDK release page](https://pypi.org/project/bittensor/)
- [Bittensor CLI release page](https://pypi.org/project/bittensor-cli/)
- [Upgrade the Bittensor SDK](../getting-started/installation.md#upgrade)

:::tip
Please help us evolve this technology! If you notice bugs or have clarifying questions, let us know on Discord.
:::

### Subnet tokens/liquidity pools

After upgrading, the most visible difference is the addition of one new token per subnet in the bittensor network.

Run `btcli subnet list` to view information about the subnets and their currency reserves:

For example: 
```txt
                                                                Subnets
                                                               Network: rao


        ┃               ┃ Price       ┃ Market Cap  ┃              ┃                         ┃               ┃              ┃
 Netuid ┃ Name          ┃ (τ_in/α_in) ┃ (α * Price) ┃ Emission (τ) ┃ P (τ_in, α_in)          ┃ Stake (α_out) ┃ Supply (α)   ┃ Tempo (k/n)
━━━━━━━━╇━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━╇━━━━━━━━━━━━━╇━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━╇━━━━━━━━━━━━━
   0    │ τ root        │ 1.00 τ/Τ    │ τ 5.93m     │ τ 0.0000     │ -, -                    │ Τ 5.93m       │ 5.93m Τ /21M │ -/-
   3    │ γ templar     │ 0.02 τ/γ    │ τ 57.32     │ τ 0.0197     │ τ 31.44, 1.43k γ        │ 1.18k γ       │ 2.61k γ /21M │ 67/99
   9    │ ι pretrain    │ 0.02 τ/ι    │ τ 55.38     │ τ 0.0194     │ τ 30.91, 1.46k ι        │ 1.16k ι       │ 2.61k ι /21M │ 73/99
   1    │ α apex        │ 0.02 τ/α    │ τ 54.45     │ τ 0.0192     │ τ 30.65, 1.47k α        │ 1.14k α       │ 2.61k α /21M │ 65/99
   2    │ β omron       │ 0.02 τ/β    │ τ 54.45     │ τ 0.0192     │ τ 30.65, 1.47k β        │ 1.14k β       │ 2.61k β /21M │ 66/99
   4    │ δ targon      │ 0.02 τ/δ    │ τ 54.45     │ τ 0.0192     │ τ 30.65, 1.47k δ        │ 1.14k δ       │ 2.61k δ /21M │ 68/99
   ...
```

### Gradual impact on consensus dynamics 

The rollout of Dynamic TAO is calculated to have a gradual impact. When Dynamic TAO is first released, the weight of all validators (in terms of stake) will remain unchanged, because a biasing variable known as *TAO weight*, which controls the relative weight of TAO and alpha currencies, will heavily favor TAO&mdash;which currently has 100% weight since alpha currencies don't exist. Over time (an estimated 100 days), this *TAO Weight* will shift to favor alpha currencies over TAO.
