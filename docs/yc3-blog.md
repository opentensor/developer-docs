Blog Article: How Yuma Consensus 3 realizes the promise of fairness in Bittensor

How Yuma Consensus 3 Realizes the Promise of Fairness in Bittensor
In the world of Bittensor, validators play a crucial role in evaluating and ranking miners' performance. The Yuma Consensus mechanism, which determines how rewards are distributed, has evolved through several iterations to address fairness and efficiency concerns. The latest version, Yuma Consensus 3 (YC3), introduces significant improvements that better align incentives and create a more equitable system for all participants.
The Evolution of Yuma Consensus
To understand YC3's improvements, let's look at how the system has evolved:
Yuma 1: Initial Implementation
The first iteration of Yuma Consensus distributed validator rewards based on their stake and the consensus weight of miners they evaluated. While functional, it had limitations in handling small validators and could lead to unfair rounding issues when distributing rewards.
Yuma 2: Improved Bonding
Yuma 2 introduced a more sophisticated bonding mechanism with a 10% daily adjustment limit. However, it still had issues:
Small validators could get unfairly penalized due to rounding
A bug in the anti-fraud system could cause bond distribution to freeze for months
Early recognition of good miners wasn't properly rewarded
Yuma 3: Revolutionary Improvements
YC3 introduces significant improvements that better reward early recognition and create a more level playing field. Here's how it works:
Independent Bond Adjustment: Each validator's bonds can change by up to 10% per day, but crucially, they can increase or decrease independently of other validators' opinions.
Fair Scaling: The bond values are stored on a 0-65535 scale, but in a way that allows every validator to potentially reach the maximum value for the same miner if they maintain high-quality evaluations.
Early Recognition Rewards: Validators who identify promising miners early can start accumulating bonds before the miner becomes widely recognized. This creates a proper incentive for proactive evaluation rather than just following the crowd.
Liquid Alpha Integration: YC3 works seamlessly with the Liquid Alpha feature, which provides additional rewards for validators who vote for miners that aren't yet receiving votes from other validators. This further encourages independent evaluation and early recognition.
Key Improvements in YC3
Fairness for Small Validators: Unlike previous versions, YC3 doesn't unfairly penalize validators with smaller stake. The system ensures that all validators, regardless of their size, can earn appropriate rewards for their evaluations.
Better Early Recognition: The system properly rewards validators who identify promising miners early, creating stronger incentives for independent evaluation rather than just copying others' weights.
Smoother Transitions: The 10% daily adjustment limit helps prevent sudden changes in reward distribution while still allowing for meaningful updates to validator evaluations.
Anti-Fraud Protection: The system maintains strong protection against malicious behavior while fixing the issues that could cause bond distribution to freeze in Yuma 2.
The Impact
YC3 represents a significant step forward in creating a more fair and efficient consensus mechanism. By better rewarding early recognition and independent evaluation, it encourages validators to:
Actively seek out and evaluate new miners
Make independent judgments rather than following the crowd
Maintain consistent, high-quality evaluations
Participate in the network regardless of their stake size
This creates a healthier ecosystem where innovation and early recognition are properly rewarded, while maintaining the security and reliability of the consensus mechanism.
Looking Forward
As Bittensor continues to grow, YC3 provides a solid foundation for fair and efficient consensus. The system's ability to reward early recognition while maintaining security makes it well-suited for the network's future development.
For subnet owners looking to implement YC3, it's available as an optional feature that can be enabled through the network's governance mechanisms. When combined with Liquid Alpha, it provides a powerful tool for creating fair and efficient subnet ecosystems.

Discord dialogue for reference
It's like America Got Talent or ice skate dancing in the winder olympics, where for every day of the competition in the morning the organizer allows up to 64 judges to register, but they sort them by the number of twitter followers.

If a judge is canceled (due to a vote copying scandal?) during the day, they can still cast votes until the end of the day as long as they have more than 1000 twitter followers (or alphas).

If on the next day they won't get a judge permit in the morning because they were not in 64, but later in the day they defend themselves with a heartfelt apology and regain their followers, they still won't be able to cast votes until they get the judge permit in the morning.
now hear this, because we are getting to the fun part
the judges can also perform on the stage, but they cannot vote on themselves. There can be a situation where every single person in the room (which typically fits 256 people) is a performer and they can all receive incentive, but the bigger the following a judge has, the more effective voting power he'll lose due to self-voting being prohibited
also some judges are lazy and they don't watch and honestly judge the participants, but they print out the votes of the other judges (weighted by twitter following) from yesterday and they submit that as their votes
Rhef — 6/2/25, 1:06 PM
it doesn't matter if a judge has one twitter account with 200k followers or two accounts with 100k followers - the weighted voting power will be exactly the same (ok that's a bit of a lie when the stake gets smaller and smaller - Yuma 1 and 2 had a bad habit of destroying bonds of small validators for no good reason, something only @Fish | Datura, Celium cared about, but nobody paid attention and eventually Yuma 3 fixed this)
Kat | Biττensor CM・won't DM 1st — 6/2/25, 1:07 PM
By "account", you mean "hotkey", yes?  (You're describing one person running more than one validator)
Rhef — 6/2/25, 1:08 PM
I mean a neuron, so a hotkey registered in the subnet
Kat | Biττensor CM・won't DM 1st — 6/2/25, 1:08 PM
Right, thanks. : )
Rhef — 6/2/25, 1:10 PM
there is also an anti-fraud mechanism which makes it really hard for a group of malicious judges (called a cabal) to steal any incentive unless they have more than kappa (almost always 50%) of all followers of all the (active) judges
depending on the configuration of a subnet a judge may survive for a few days after they lost their permit while they still have bonds
Kat | Biττensor CM・won't DM 1st — 6/2/25, 1:13 PM
Okay.  So then the next question would be: what is the difference between stake and bonds, with respect to a validator?
(When you are done with your current thought)
Rhef — 6/2/25, 1:13 PM
in Yuma 1 and 2 they can sometimes appear to be an extremely profitable judge if they collect some bonds and they lose stake. Then their bonds / stake, also called "APY", can be high when stake drops suddenly
stake is the number of twitter followers. Can change from 0 to 100k in one block and then back to 0 in the next block.
as for bonds 🤔 let me think for a sec, it's starting to escape the abstraction
Kat | Biττensor CM・won't DM 1st — 6/2/25, 1:18 PM
And if stake drops to 0 (i.e., 0 twitter followers), wouldn't that result in a divide-by-zero error when trying to calculate APY?
Kat | Biττensor CM・won't DM 1st — 6/2/25, 1:55 PM
"Infinite APY!  What could POSSIBLY go wrong!"
Rhef — 6/2/25, 1:58 PM
at the end of the day the organizer performs an antifraud thing to prevent the malicious judges from stealing and then pays out the daily rewards to the participants. Those that got more votes from judges with larger following will get more and those that barely got any votes will barely get any incentive. Participant compensation is rather easy (unless you want to get into details of the anti-fraud system, which we'll skip today), but compensation for judges is a bit more complicated and depends on Yuma version chosen by the organizer and on hyperparameters. We'll assume default values of hyperparameters today.
lets say every participant performs on a concert once again in the evening
in Yuma 1 the organizer distributes 65535 tickets to each concert among the judges. Assuming no judge was found to be fraudulent, the tickets are distributed to judges proportionally to their twitter following. If there was some suspected fraud, then the judges found to be fraudulent can get less tickets for the participants they have voted less than the consensus of the judges. The total amounf of tickets they'll get can be called vtrust. If it's 100%, then they get tickets proportional to their following, if it's zero then they can get nothing.
Kat | Biττensor CM・won't DM 1st — 6/2/25, 2:06 PM
Okay.  So if I have 100K followers, but only .5 vtrust, I get 50K tickets.
Rhef — 6/2/25, 2:06 PM
in Yuma 1 yes
but you don't want tickets, you want money. The way you get it is you sell the tickets in an online store. The tickets for good performers are worth a lot, but the tickets of the bad performers are worthless.
you can sell the tickets for a concert of a given participant for a price that is proportional to the reward the participant received on that day from the organizer
now someone can observe that this can be a bit unfair when the total number of twitter followers is already reaching 1.8 million - a judge with a thousand followers should get 1/1800 of the tickets, but 65536 doesn't divide very well by 1800, so there might be some rounding down there, causing judges with a small following to suffer unjustly!

Fortunately the organizer has thought of that and they sort of calculate it in their head and pay it out properly
Rhef — 6/2/25, 2:16 PM
----
in Yuma 2 the organizer distributes 65535 little ticket printers to the judges for every participant and the judges keep the printers overnight. Each printer prints one ticket every evening and the tickets can again be sold (with the magic fair rounding done in the organizers head).

The interesting part happens on the second day though - the organizer, you see, will calculate the printer allocation for the second day, but he will only change the ownership of no more than 10% of the printers per day (assuming the following doesn't change). From 10% lost, through keeping the previous amount of printers to a 10% gain - that's as much as can happen in one day.
now someone can observe, hey, a judge in a perfectly honest subnet with a thousand followers indeed got a perfect 1/1800 of the value of the tickets for every performer, but overnight the amount of printers was still 65535, so he should get 36.4 printers but only got 36 because you can't have a fraction of a printer
Then on the second day he starts with 36 and can go up to 10% up, but that means up to 3.6 printers up, but in such case he'd have to end up with 39.6 printers, but that's going to get rounded down to 39.

Yuma 2 can be unfair to judges with small following.
Rhef — 6/2/25, 2:40 PM
Yuma 2 and 3 help with cooperative judging. You see, in many subnets it is not possible for every judge to watch every participant every day, so what they tend to do, is every judge pseudorandomly selects a few new participants to watch, but also they look at the printouts of votes from the previous day and they look at the participants that other judges voted on yesterday. This way if a participant is good and someone starts voting on them, within a few days the other judges will hear about it and they will see the performance of the new talent that everyone is talking about... but by that time the first judge(s) that discovered the new talent should have accumulated a lot of ticket printers, which once the talent has been universally recognized, they can profit from heavily as they have a lot of printers and every ticket for this participant is worth a lot. Over time their APY will decline as the organizer moves 10% of the tickets from them to the other judges every day, but early recognition was meant to be profitable... unfortunately, there was a bug in the antifraud system which made it so that the printers were not distributed or redistributed unless judges with a sum of at least 50% of twitter followers have cast at least one vote for the given participant. This meant that when most or all judges stopped voting for a given participant, the ticket printer distribution would remain the same, sometimes FOR MONTHS and then suddenly when the participant got a new act they started showing off, when the value of the tickets to their concert increased, the payouts to the judges mostly reflected the pre-existing ticket printer allocation and would only adjust by 10% per day and only until the tickets become worthless again when the printer allocation will freeze again.
Kat | Biττensor CM・won't DM 1st — 6/2/25, 2:41 PM
Did someone read "Honeybee Democracy" by Dr. Thomas Seeley?

Anyway, can you relate tickets to stake/bond?  And what are ticket printers analogous to?  (The actual ticket is representing either stake or earnings in the subnet's alpha token, right?)
Rhef — 6/2/25, 2:42 PM
this meant that a couple of judges with a high following were more likely to cross 50% and get the minimum recognition required for the participant to receive any incentive. If they were the only two casting votes on him, then ALL the printers for tickets of that participant would be distributed proportionally to their following and the others would need to patiently wait to get the 10%/day change
bonds are tickets in Yuma 1 
bonds are ticket printers in Yuma 2
bonds held by a validator for a given miner, produce dividends with a simple multiplication. For every miner a judge receives dividends = bonds * incentive
Kat | Biττensor CM・won't DM 1st — 6/2/25, 2:46 PM
Oh.  So bonds are the incentive that a validator earns for ranking a miner, relative to the incentive that's earned by that miner?
(So if I'm ranking a miner that's popular with the other validators, and we're in consensus, we all earn a reward specifically tied to that miner's success?)
<going to get more coffee>
Rhef — 6/2/25, 2:49 PM
bonds allow the validator to earn dividends for ranking a miner, equal to the incentive that's earned by that miner and the number of bonds of that miner that the given validator holds
Kat | Biττensor CM・won't DM 1st — 6/2/25, 2:52 PM
Okay.  And how does a validator acquire bonds for a miner?
Rhef — 6/2/25, 2:54 PM
In Yuma 2 they need to vote on that miner while at least 50% of the validators are voting for that miner... so if a small validator discovers a new talent and starts voting on it, everybody will see it and will soon check that new talent out, but that small validator won't get any bonds until the big judges start voting on it, though when they do, the small validator will only get a small portion of the bonds
so unfair! 😭
Kat | Biττensor CM・won't DM 1st — 6/2/25, 2:57 PM
This is startlingly similar to the way honeybee colonies that are about to swarm choose a new location.
Rhef — 6/2/25, 3:07 PM
----
in Yuma 3 every judge receives allowance for exclusive material about the participant. The allowance can change by 10% per day, but the allowance can increase or decrease every day, regardless of what other judges think. The judges then monetize the material by posting it on their twitter and they get ad revenue equal to amount of twitter followers * popularity of the participant. The allowance for every (judge, participant) pair is saved overnight on a 0-65535 scale, but in such a way that, if they vote long enough and high enough, every judge can end up having a 65535 for the same miner.

The judge can recognize new talent and start accumulating the allowance a few tempos before the talent gets widely recognized. In such case that judge who found the talent early will already accumulate some bonds and will receive higher APY than others (for about a day).
Kat | Biττensor CM・won't DM 1st — 6/2/25, 3:09 PM
OT question: is there a way to find out through Polkadot.js.org/apps whether there is a maximum number of subnets that can be registered?
Fish | Datura, Celium — 6/2/25, 3:11 PM
yes
subnet limit storage value
Kat | Biττensor CM・won't DM 1st — 6/2/25, 3:12 PM
I found this get_max_allowed_uids in the GitHub.  I will look for these things in Polka, thanks Fish. : )
So it returns 4096 for me.  Am I correct in understanding that the max number of subnets currently is then 4096?  (I'm not tripping, or reading the wrong thing?)
https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fentrypoint-finney.opentensor.ai%3A443#/chainstate/constants
subtensorModule > initialMaxAllowedUids
Kat | Biττensor CM・won't DM 1st — 6/2/25, 3:16 PM
How is popularity calculated?  Is this the number of judges that are rating a participant, so that the judge can max out if they're the only voter?  (Their allowance == their exclusive material?). How is such exclusivity determined?
Fish | Datura, Celium — 6/2/25, 3:20 PM
that is uids not subnets
uids for one subnet
Kat | Biττensor CM・won't DM 1st — 6/2/25, 3:20 PM
Ah, okay.  Hm.
Fish | Datura, Celium — 6/2/25, 3:29 PM
just checked and the parameter was removed with dtao. But will get added back when the subnet limit gets added back
https://github.com/opentensor/subtensor/issues/1651
so it doesn't exist right now
Kat | Biττensor CM・won't DM 1st — 6/2/25, 3:30 PM
Got it, thanks!
Rhef — 6/2/25, 3:30 PM
the limit is currently a subject of a heated discussion
unfortunately disabling the subnets when they go inactive is not an option because it exposes us to some nasty attacks. We got to delete them.
Kat | Biττensor CM・won't DM 1st — 6/2/25, 3:32 PM
I presume most of the debate is in CoR, right?
🙏
Rhef — 6/2/25, 3:33 PM
the exclusive material is like seconds of backstage video material or something. Good stuff people value.

Here by popularity I really meant incentive
Kat | Biττensor CM・won't DM 1st — 6/2/25, 3:34 PM
Okay, it's going to take me a hot minute to go through and try to map all of this out in my head.  It's complicated stuff.
I appreciate all the hard work you're doing to try to explain this, though, a thousand-fold!
Rhef — 6/2/25, 3:35 PM
----
in liquid alpha 2, the organizer recognizes courageous judges and gives bonus allowance for exclusive material to those judges who vote for talent which doesn't yet get votes from other judges. This means that the vote copying judges who are always one day behind will never get this bonus and will always stay behind
I'm gonna send it to my marketing guys in hope they can make a video explainer out of it
Kat | Biττensor CM・won't DM 1st — 6/2/25, 3:40 PM
Where/how are judges acquiring this exclusive backstage material?
Rhef — 6/2/25, 3:43 PM
the organizer distributes the exclusive backstage material in the afternoon, after figuring out what the new allowance is for the judges
Kat | Biττensor CM・won't DM 1st — 6/2/25, 3:44 PM
And the organizer is...?
Rhef — 6/2/25, 3:44 PM
subtensor
Kat | Biττensor CM・won't DM 1st — 6/2/25, 3:48 PM
Okay.  So, just so that I can try to sort these things out:

o Liquid Alpha is a hyperparameter that subnet owners can enable to fight weight copiers.

o Yuma 3 is a new and still optional hyperparameter (that I can't see yet, so probably needs to be enabled in a different way I haven't caught up with yet) that helps to even out rewards for validators who recognize new miners before other validators do, but whose stake is not very large with respect to other validators and whose bonds for the new miners would be correspondingly lower than what other validators are receiving.  The goal is to reward swifter recognition of new quality miners, without penalizing validators with relatively small stake. 

o Subnets that want to use Yuma 3 also need to have Liquid Alpha enabled.

Is this going in the right direction?
Rhef — 6/2/25, 3:51 PM
liquid alpha 2 is optional and works only with Yuma 3
Kat | Biττensor CM・won't DM 1st — 6/2/25, 3:52 PM
Okay, so it's the other way around.  You can have Yuma 3 (by itself), or Yuma 3 + Liquid Alpha, but you can't have Liquid Alpha without Yuma 3?
Rhef — 6/2/25, 3:52 PM
correct
Kat | Biττensor CM・won't DM 1st — 6/2/25, 4:00 PM
How do you set "on-chain toggle(s)"?  I can see the liquid alpha hyperparameter, but not one for Yuma3
NM, found it!
(For anyone who's looking: Polkadot.js.org/apps -- Developer > Extrinsic > adminUtils > SudoSetYuma3Enabled) 
Rhef — 6/3/25, 4:51 AM
I think @bdhimes is yet to add a nice btcli command for this one
TAO4Fun [ τ, τ ] — 6/3/25, 9:06 AM
has trading on new subnets been blocked?
trexman — 6/3/25, 10:51 AM
@Kat | Biττensor CM・won't DM 1st @Rhef @TAO4Fun [ τ, τ ] 
Another quick question on dereg stuff, sorry if someone answered this above and I missed it...
I was thinking that the lowest emission neuron was eligible to be bumped each block (the docs said that before and still say it), but as far as I can see in the code, it looks that only happens if the UIDs are capped.
So unless there are 4096 uids, nobody gets deregistered?
Kat | Biττensor CM・won't DM 1st — 6/3/25, 10:52 AM
Well, you're probably asking the wrong person, but if there are open slots in the subnet, then as I understand it, no one gets deregged until the slots are full and the next registration comes in.  But it's 256 slots per subnet.
(Except for subnet 1, which is a weird subnet, being the original, granddaddy subnet)