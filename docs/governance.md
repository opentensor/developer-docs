---
title: "Governance"
---

# Governance

Bittensor's governance protocol transitions the management of the network from centralization within the foundation to community ownership over time.

The first stage of this transition to decentralized management is the creation of a bicameral legislature. In this stage, the [Triumvirate](./glossary.md#triumvirate) creates proposals for the [Senate](./senate.md) to approve. 

Triumvirate members are Opentensor Foundation employees, while the Senate is formed from the top K delegate hotkeys.

## Proposals

Proposals are encapsulations of other extrinsics and will be executed only after meeting both of the two conditions:

1. The proposal has obtained (50% + 1) approvals from the Senate, and
2. A member of the Triumvirate has closed the proposal.

The above guarantees that the Senate must reach a majority consensus to execute a proposal.

:::tip Execution of a proposal
When a proposal is executed, the calldata passed to it during its creation are included in the same block as the close extrinsic.
:::

## Security

Before the governance protocol existed, all administrative actions within the network (e.g., changing hyperparameters, creating new subnetworks, chain upgrades) required permission via a single privileged key, known as `sudo`. If the `sudo` private key were somehow compromised, a malicious actor could take over the network and execute any privileged extrinsics.

Under the governance protocol, a malicious actor would have to compromise a Triumvirate member and control a majority of Senate seats in order to approve a proposal.

## Example

Consider the following:

- The Triumvirate contains three seats, with members `Alice`, `Bob`, and `Charlie`.
- The Senate has three members elected to participate: `Dave`, `Eve`, and `Ferdie`.

**Triumvirate**

`Bob` has a novel concept for a subnet and wishes to deploy it on the Bittensor network. `Bob` creates a proposal with the calldata:
```python
SubtensorModule.SudoAddNetwork(netuid, tempo, modality)
```
and sends the transaction to the network in order to broadcast the proposal.

**Senate**

- `Dave`, `Eve`, and `Ferdie` all own the nominated delegate hotkeys, and they individually control more than two percent of the network's total stakes.
- Using `btcli`, they can view the proposal and the calldata, which it will execute upon approval.
- `Dave` and `Ferdie` decided they wanted to approve this new subnet, and they both approved the proposal.
- `Eve` disagrees with the concept and disapproves of the proposal.

Even though the Senate may have twelve members at any time, it is not guaranteed that there will be twelve occupied seats. With a Senate size of three, the approval threshold will be two approvals. Since `Dave` and `Ferdie` both approved this proposal, a member of the Triumvirate can now execute it.

**Closing**

`Alice` sees Senate has passed the proposal and executes the `close` extrinsic to execute the calldata within the proposal.

Bittensor now has a new subnet on which `Alice`, `Bob`, or `Charlie` can create further proposals to change hyperparameters, allow or disallow registration, and control any other configuration previously controlled by the `sudo` private key.
