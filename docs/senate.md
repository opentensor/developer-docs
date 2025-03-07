---
title: "Senate"
---

# Senate

The Senate is a group of delegates who have elected to participate in proposals, and who control a significant portion of total network stake. 

All members of the network who have delegated stake to any of these Senate members are represented by the party that controls the delegate they've chosen to stake with. This allows any holder within the network to be represented, and to make their opinion known by delegating with organizations who represent their interests.

## Requirements

In order to participate in the Senate, a member must meet the below four requirements. Only upon meeting these requirements can a coldkey-hotkey pair vote on proposals.

1. Has registered with any subnetwork as a hotkey-coldkey pair.
2. Has nominated themselves as a delegate for anyone to stake their $TAO with.
3. Their hotkey stake value is greater than 2% of the network's total stake amount, through delegation or self-stake.
4. Has elected to participate in the Senate.

Once all four of the requirements have been fulfilled by a coldkey-hotkey pair, they can vote on any proposal created by the [Triumvirate](glossary#triumvirate).

In the case that the Senate has all twelve seats filled, and a delegate wishes to join, they will replace the lowest stake member as long as they have more stake in the network.

## Joining the senate

Delegates elect to join the Senate by using the below command:

```
btcli root register
```
as long as they meet all the requirements listed in the above [Requirements](#requirements) section.

After executing the above `btcli root register` command and the transaction has been included in a block, they can confirm their membership with:
```
btcli root list
```

## Voting

Any delegate who has elected to participate in the Senate have the ability to vote on active proposals within the time limit from proposal creation to proposal end. If a delegate is absent from a vote, they are counted as a disapproval.

Using:
```
btcli root proposals
```
the delegate:
- Copies the proposal hash from the overview
- Runs `btcli root senate_vote` and passes the proposal hash, either with the argument `--proposal` or when prompted to enter the proposal hash by the command. 
- After they've entered a proposal hash, they will then be prompted to either cast an approval or a disapproval. Once confirmed, the vote will be included in the next block and counted in the vote. This can be confirmed with both `btcli root proposals`.

<!-- Can you transfer senate magic? What happens if your key gets leaked? Just transfer your TAO... -->