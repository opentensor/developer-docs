---
title: "Governance"
---

# Governance

Bittensor's governance protocol transitions the management of the network from centralization within the foundation to community-ownership over time. 

The first stage of this transition to decentralized management is the creation of a bicameral legislature. In this stage, the [Triumvirate](./glossary.md#triumvirate) creates proposals for the [Senate](./senate.md) to approve. 

Triumvirate members are Opentensor Foundation employees, while the Senate is formed from the top K delegate hotkeys.

## Proposals

Proposals are encapsulations of other extrinsics. A proposal will be executed only after meeting the both the below two conditions:

1. The proposal has obtained (50% + 1) approvals from the Senate, and
2. The proposal has been closed by a member of the Triumvirate.

The above guarantees that Senate has to come to a majority consensus in order for a proposal to be executed. 

:::tip Execution of a proposal
When a proposal is executed, the calldata that was passed to it during its creation is then included in the same block as the close extrinsic.
:::

## Security

Before the governance protocol came to exist, all the administrative actions within the network (e.g. changing hyperparameters, creating new sub-networks, chain upgrades) were permissioned via a single privileged key, known as `sudo`. If the `sudo` private key were somehow compromised, a malicious actor could take over the network and execute any privileged extrinsics. 

With the governance protocol, a malicious actor would have to compromise a Triumvirate member, along with controlling a majority of Senate seats in order to approve a proposal.

## Example

Consider the following:

- The Triumvirate contains three seats, with members `Alice`, `Bob`, and `Charlie`.
- The Senate has three members elected to participate, named `Dave`, `Eve`, and `Ferdie`.

**Triumvirate**

`Bob` has a novel concept for a subnet, and wishes to deploy it on the Bittensor network. `Bob` creates a proposal with the calldata:
```python
SubtensorModule.SudoAddNetwork(netuid, tempo, modality)
```
and sends the transaction to the network in order to broadcast the proposal.

**Senate**

- `Dave`, `Eve`, and `Ferdie` all own the nominated delegate hotkeys, all of which individually control greater than two percent of all total stake in the network. 
- Using `btcli`, they are able to view the proposal and the calldata which it will execute upon approval. 
- `Dave` and `Ferdie` decide that they wish to approve this new subnet, and they both approve the proposal. 
- `Eve` disagrees with the concept, and decides to disapprove of the proposal.

Even though the Senate may hold twelve members at any time, it is not a guarantee that there will be twelve occupied seats. The approval threshold with a Senate size of three will be two approvals. Since `Dave` and `Ferdie` both approved of this proposal, it is now able to be executed by a member of the Triumvirate.

**Closing**

`Alice` sees that the proposal has been passed by the Senate, and executes the `close` extrinsic in order to execute the calldata within the proposal.

Bittensor now has a new subnet on which `Alice`, `Bob`, or `Charlie` can create further proposals in order to change hyperparameters, allow or disallow registration, and any other configuration which was prevously controlled by the `sudo` private key.