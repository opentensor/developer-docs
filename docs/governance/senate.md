
# Senate

The Senate is a group of delegates which have elected to participate in proposals, who control a significant portion of total network stake. All members of the network who have delegated stake to any of these Senate members are represented by the party who controls the delegate they've chosen to stake with. This allows any holder within the network to be represented and to make their opinion known by delegating with organizations who represent their interests.

### Requirements

In order to participate in the Senate, four requirements have to be met before a coldkey-hotkey combo is able to vote on proposals.

1. Has registered with any sub-network as a hotkey-coldkey pair.
2. Has nominated themselves as a delegate for anyone to stake their $TAO with.
3. Their hotkey stake value is greater than 2% of the network's total stake amount, through delegation or self-stake.
4. Has elected to participate in the Senate.

Once all four of the requirements have been fulfilled by a coldkey-hotkey pair, they can vote on any proposal created by the [Triumvirate](glossary/glossary#triumvirate).

In the case that the Senate has all twelve seats filled and a delegate wishes to join, they will replace the lowest stake member as long as they have more stake in the network.

### Joining the senate

Delegates elect to join the Senate by using `btcli root register`, as long as they meet all the requirements listed in the [requirements](governance/senate#requirements).

After executing the register command and the transaction has been included in a block, they can confirm their membership with `btcli root list`.

### Voting

Any delegates that have elected to participate in the Senate have the ability to vote on active proposals within the time limit from creation to proposal end. If a delegate is absent from a vote, they are counted as a disapproval.

Using `btcli root proposals`, the delegate copies the proposal hash from the overview, then runs `btcli root senate_vote` and passes the proposal hash, either with the argument `--proposal` or when prompted to enter the proposal hash by the command. After they've entered a proposal hash, they will then be prompted to either cast an approval or a disapproval. Once confirmed, the vote will be included in the next block and counted in the vote. This can be confirmed with both `btcli root proposals`.