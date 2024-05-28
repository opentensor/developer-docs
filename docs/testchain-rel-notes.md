---
title: "Testchain Release Notes"
---

# Testchain Release Notes

## Pre-release Notes for Testchain 1.0.1

The following are the pre-release notes for the testchain 1.0.1 updates. **These updates will be available on the testchain only. They are not yet available on the mainchain.**

## New features and enhancements

### Commit reveal

A new feature, called, **commit reveal**, is made available on the testchain only. This feature will address the weight copying issue. 

The commit reveal feature changes the way the subnet validator weights are recorded to the chain. Rather than submitting weights openly to the chain that can be seen by anyone on the next block, subnet validators will upload an encrypted hash of their weights. This encrypted hash will be automatically decrypted after a set number of blocks. 

The length of the delay in revealing the weights is a parameter that can be set by the subnet owners. The optimal delay will be different for different subnets and depends mostly on the rate of turnover in the subnet miners. 

For subnets that are very stable and have durable subnet miners who change ranks rarely, a longer delay interval would likely be more effective. For subnets with more frequent subnet miner registrations and deregistrations, a shorter interval could be effective as copiers will not be able to independently score new miners.

By giving weight copiers access only to old weights, the goal is to reduce the advantage gained by copying the current consensus. With commit-reveal we aim to make weight copying less attractive by decreasing the reward.

### How to test the commit reveal feature
The commit reveal feature is only available at the below testchain URL and the specified branches:

- **Testchain URL**: `wss://test.finney.opentensor.ai:443/`
- **Subtensor repo branch:** 
- **Bittensor repo and branch**: Make sure you switch to `release/7.0.1` branch on the Bittensor repo `https://github.com/opentensor/bittensor`