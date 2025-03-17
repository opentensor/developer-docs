---
title: "Senate"
---

# Senate

The Senate is a group of delegates who have elected to participate in proposals, and who control a significant portion of total network stake. 

All members of the network who have delegated stake to any of these Senate members are represented by the party that controls the delegate they've chosen to stake with. This allows any holder within the network to be represented, and to make their opinion known by delegating with organizations who represent their interests.

## Requirements

In order to participate in the Senate, a coldkey must:

- Have registered with any subnetwork as a hotkey-coldkey pair.
- Have a hotkey stake value is greater than 2% of the network's total stake amount, through delegation or self-stake.
- Have elected to participate in the Senate. 
<!-- how ??? -->

Once all four of the requirements have been fulfilled by a coldkey-hotkey pair, they can vote on any proposal created by the [Triumvirate](glossary#triumvirate).

In the case that the Senate has all twelve seats filled, and a delegate wishes to join, they will replace the lowest stake member as long as they have more stake in the network.

<!-- ## Joining the senate


How ??? How do you get on the `btcli sudo senate` list?
How do you get to `btcli sudo senate-vote` ? Under what conditions will this command succeed?

 -->

## Viewing proposals

Anyone can view proposals currently before the senate. This is an unpermissioned request.

```shell
btcli sudo proposals
```

## Voting

Senators can vote using the following command. You will be prompted for the proposal hash, which can be obtained in the proposals overview using `btcli sudo proposals`.

After entering a proposal hash, you will then be prompted to either cast an approval or a disapproval. Once confirmed, the vote will be included in the next block and counted in the vote.

```
btcli sudo senate-vote
```
