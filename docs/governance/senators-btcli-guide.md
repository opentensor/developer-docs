---
title: "Senator's Guide to `BTCLI`"
---

# Senator's Guide to `BTCLI`

Governance participants (senate members, sudo-level accounts) can propose changes, cast votes, or execute privileged commands that affect the entire network. They must have a **coldkey** with the relevant governance role (senate membership or sudo privileges).

See [Requirements for Senate participation](./senate)

This page discusses btcli considerations specifically for Senators. For general coverage of BTCLI and permissions stuff, see: [Bittensor CLI: Permissions Guide](../btcli-permissions)

See also: [Coldkey and Hotkey Workstation Security](../getting-started/coldkey-hotkey-security).


See: [Senate](../senate).

**Commands most relevant to governance:**

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

Because these commands can significantly change chain parameters or enact critical changes, they require a fully privileged coldkey in a maximally secure environment.

