---
title: "Subtensor Errors"
---

# Subtensor Errors

Subtensor errors are specific to the Bittensor blockchain implementation. These errors are defined in the Subtensor Rust codebase and can occur during various blockchain operations.

Related: 
- [Custom Errors](./custom.md) - Bittensor's custom error codes
- [Substrate Errors](./substrate.md) - Errors from the underlying Substrate framework 

    
## Network and Subnet Errors

### SubNetworkDoesNotExist

 The subnet does not exist

### RootNetworkDoesNotExist

 The root network does not exist

### SubnetNotExists

 Trying to perform action on non-existent subnet

### NotRootSubnet

 Netuid does not match for setting root network weights

### CanNotSetRootNetworkWeights

 Cannot set weights for the root network

### RegistrationNotPermittedOnRootSubnet

 Operation is not permitted on the root subnet

### AllNetworksInImmunity

 All subnets are in the immunity period

### MechanismDoesNotExist

 Trying to register a subnet into a mechanism that does not exist

### SubNetRegistrationDisabled

 Registration is disabled for this subnet

### NoNeuronIdAvailable

 No neuron ID is available in the subnet

## Hotkey and Coldkey Errors


### HotKeyNotRegisteredInSubNet

 The hotkey is not registered in subnet

### HotKeyAccountNotExists

 The hotkey does not exist

### HotKeyNotRegisteredInNetwork

 The hotkey is not registered in any subnet

### NonAssociatedColdKey

 Request made by a coldkey that is not associated with the hotkey account

### HotKeyAlreadyRegisteredInSubNet

 The caller is requesting registering a neuron which already exists

### NewHotKeyIsSameWithOld

 The new hotkey is the same as old one

### HotKeyAlreadyDelegate

 The hotkey is attempting to become a delegate when already a delegate

### TransactorAccountShouldBeHotKey

 The hotkey is required to be the origin

### NewColdKeyIsHotkey

 New coldkey is hotkey

### ColdKeyAlreadyAssociated

 The coldkey has already been swapped

### ColdkeyIsInArbitration

 The coldkey is in arbitration

### UnableToRecoverPublicKey

 Public key cannot be recovered

### InvalidRecoveredPublicKey

 Recovered public key is invalid

## Stake and Balance Errors


### NotEnoughStake

 The caller does not have enough stake to perform this action

### NotEnoughStakeToWithdraw

 Not enough stake to withdraw

### NotEnoughStakeToSetWeights

 Less than minimum stake required to set weights

### NotEnoughStakeToSetChildkeys

 Parent hotkey doesn't have enough own stake

### NotEnoughBalanceToStake

 Not enough balance in coldkey account

### BalanceWithdrawalError

 Could not withdraw from coldkey account

### ZeroBalanceAfterWithdrawn

 Balance would be zero after withdrawal

### StakeTooLowForRoot

 Hotkey with too little stake attempting to join root subnet

### NotEnoughBalanceToPaySwapHotKey

 Not enough balance to pay swapping hotkey

### NotEnoughBalanceToPaySwapColdKey

 Not enough balance to pay for the swap

### AmountTooLow

 Stake amount is too low

### ZeroMaxStakeAmount

 Zero max stake amount

### CannotUnstakeLock

 Cannot unstake lock amount

### NotEnoughAlphaOutToRecycle

 Not enough AlphaOut to recycle

### CannotBurnOrRecycleOnRootSubnet

 Cannot burn/recycle TAO from root subnet

### InsufficientLiquidity

 Not enough liquidity in the pool

### SlippageTooHigh

 Transaction slippage is above your limit

### TransferDisallowed

 Transfers are disallowed on this subnet

## Weight Setting Errors


### NeuronNoValidatorPermit

 Attempting to set non-self weights without being a permitted validator

### WeightVecNotEqualSize

 Weight keys and values vectors have different sizes

### DuplicateUids

 Attempting to set weights with duplicate UIDs

### UidVecContainInvalidOne

 Attempting to set weight to non-existent UID

### WeightVecLengthIsLow

 Setting weights with fewer elements than allowed

### MaxWeightExceeded

 Weight value exceeds MaxWeightLimit

### SettingWeightsTooFast

 Exceeded rate limit for setting weights

### IncorrectWeightVersionKey

 Incorrect weight version key

### UidsLengthExceedUidsInSubNet

 More UIDs than allowed

### NoWeightsCommitFound

 No commit found for hotkey+netuid combination

### InvalidRevealCommitHashNotMatch

 Committed hash does not match reveal data

### CommitRevealEnabled

 Attempting to call set_weights when commit/reveal is enabled

### CommitRevealDisabled

 Attempting to commit/reveal weights when disabled

### TooManyUnrevealedCommits

 Maximum commit limit reached

### ExpiredWeightCommit

 Attempted to reveal expired weights

### RevealTooEarly

 Attempted to reveal weights too early

### InputLengthsUnequal

 Mismatched vector input lengths in batch reveal

### CommittingWeightsTooFast

 Exceeded rate limit for setting weights

### LiquidAlphaDisabled

 Attempting to set alpha high/low while disabled

### AlphaHighTooLow

 Alpha high value is too low (> 0.8 required)

### AlphaLowOutOfRange

 Alpha low value is out of allowed range (0 < alpha_low < 0.8)

## Rate Limiting Errors


### ServingRateLimitExceeded

 Rate limit exceeded for axon serve/publish

### NetworkTxRateLimitExceeded

 Rate limit exceeded for add network transaction

### DelegateTxRateLimitExceeded

 Rate limit exceeded for delegate transaction

### HotKeySetTxRateLimitExceeded

 Rate limit exceeded for setting/swapping hotkey

### StakingRateLimitExceeded

 Rate limit exceeded for staking

### TxRateLimitExceeded

 Default transaction rate limit exceeded

### TxChildkeyTakeRateLimitExceeded

 Childkey take rate limit exceeded

## Registration and Network Management


### TooManyRegistrationsThisBlock

 Too many registrations in this block

### TooManyRegistrationsThisInterval

 Too many registration attempts in interval

### CouldNotJoinSenate

 Not able to join the senate

### NotSenateMember

 Not a senate member

### NotSubnetOwner

 Not a subnet owner

### FirstEmissionBlockNumberAlreadySet

 First emission block number already set

### NeedWaitingMoreBlocksToStarCall

 Need to wait for more blocks

## Delegation and Childkey Errors


### DelegateTakeTooLow

 Delegate take is too low

### DelegateTakeTooHigh

 Delegate take is too high

### InvalidChild

 Invalid child for a hotkey

### DuplicateChild

 Duplicate child when setting children

### ProportionOverflow

 Proportion overflow when setting children

### TooManyChildren

 Too many children (max 5)

### InvalidChildkeyTake

 Childkey take is invalid

## Other Errors


### InvalidIpType

 Invalid IP type (must be IPv4 or IPv6)

### InvalidIpAddress

 Invalid IP address

### InvalidPort

 Invalid port

### InvalidWorkBlock

 Invalid PoW hash block

### InvalidDifficulty

 PoW hash block does not meet network difficulty

### InvalidSeal

 PoW hash seal does not match work

### FaucetDisabled

 Faucet is disabled

### SwapAlreadyScheduled

 Swap already scheduled

### FailedToSchedule

 Failed to schedule swap

### InvalidIdentity

 Invalid identity

### ActivityCutoffTooLow

 Activity cutoff is too low

### CallDisabled

 Call is disabled

### SubtokenDisabled

 SubToken disabled

### SameNetuid

 Invalid netuid duplication

