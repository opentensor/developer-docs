---
title: "Senator's Guide to `BTCLI`"
---

# Senator's Guide to `BTCLI`

Governance participants (senate members, sudo-level accounts) can propose changes, cast votes, or execute privileged commands that affect the entire network. They must have a **coldkey** with the relevant governance role (senate membership or sudo privileges).

See [Requirements for Senate participation](../senate)

This page discusses btcli considerations specifically for Senators. For general coverage of BTCLI and permissions stuff, see: [Bittensor CLI: Permissions Guide](../btcli-permissions)

See also: [Coldkey and Hotkey Workstation Security](../getting-started/coldkey-hotkey-security).


See: [Senate](../senate).

## **Commands most relevant to governance:**
**Senate / Proposals** (coldkey with senator role):
  - `btcli sudo senate`
  - `btcli sudo proposals`
  - `btcli sudo senate-vote`
  - `btcli sudo senate_vote`

## Key rotation

If you suspect your coldkey may have been leaked, you can request to swap it out of your wallet, using an extrinsic blockchain transaction. This operation has a 5 day waiting period, during which your coldkey will be locked. The cost of this coldkey swap transaction is 0.1 TAO.

See [Rotate/Swap your Coldkey](../subnets/schedule-coldkey-swap)

