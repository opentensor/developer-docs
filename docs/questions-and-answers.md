---
title: "Frequently asked questions (FAQ)"
hide_table_of_contents: false 
---

# Frequently asked questions (FAQ)

## General

### Is Bittensor a blockchain or an AI platform?

In Bittensor there is one blockchain and many platforms that are connected to this one blockchain. We call these platforms as subnets. So, a subnet can be AI-related or can be something else. The Bittensor network has a number of distinct subnets. All these subnets are connected to the single blockchain. We use the term "subtensor" for the blockchain. If you are thinking, "So, subnets are connected to subtensor?" then the answer is "yes, exactly."

### So what is a subnet?

A subnet is a competition market. Anyone can create a subnet, or participate in an existing subnet. You create a subnet by paying the registration cost (in TAO) and you will receive a subnet `netuid`. There are two ways you can participate in an existing subnet: Either as a subnet miner or as a subnet validator. You bring a computer that has sufficient computing resources, register that computer, along with your wallet, into a subnet. On this computer you then run either the subnet miner module or the subnet validator module (Python code) provided by the subnet owner. That's how simple it is to participate.

### How does competition work in a subnet?

So the subnet competition works like this. Say you decided to be a subnet miner. The subnet validators will give you some work to do. Other subnet miners in the subnet are also given the same work task. All you subnet miners complete the task and respond to the subnet validator with the work results. 

The subnet validator then ranks the quality of the work done by the subnet miners. You as a subnet miner will get a reward (in TAO) based on your work quality. Other subnet miners also get their reward based on their work quality. At the same time, the subnet validator is also rewarded because the subnet validator makes sure that higher quality subnet miners are rewarded better so that overall subnet quality is continuously improving. All this happens programmatically, as coded up by the subnet owner. 

### What exactly is the task of a subnet miner?

It depends on the subnet. For example, in subnet 1 the miner task is to respond to a text prompt, in subnet 2 it is the machine translation, and in subnet 21 it is to serve storage space.

### So where does the blockchain come in?

The subtensor blockchain records all the key activity of all the subnets in its ledger. But most importantly, the subtensor blockchain determines the rewards distribution for subnet miners and subnet validators. An algorithm called Yuma Consensus (YC) is always running on the blockchain. Rankings of the subnet miners set by the subnet validators are input to the YC algorithm. Every 12 seconds, the YC algorithm computes the rewards based on these inputs. These rewards (in TAO) are then deposited into the wallets of subnet miners and subnet validators. The subtensor blockchain continuously runs the YC algorithm for each subnet separately.

:::tip See also
See [Introduction](./learn/introduction.md) and [Anatomy of Incentive Mechanism](./learn/anatomy-of-incentive-mechanism.md) next.
:::

### So we have all these subnets, do they talk to each other?

A new abstract base class, called `SubnetsAPI` is released in Bittensor `6.8.0` and your application can use this to enable cross subnet communication. Normally, however, if you are not using the `SubnetsAPI`, then the subtensor blockchain does not mix data from one subnet with another subnet data and a subnet does not communicate with another subnet. 

:::tip See also
See [Bittensor Subnets API](https://github.com/opentensor/bittensor/blob/master/README.md#bittensor-subnets-api).
:::

## Mining and validation

### I don't understand Bittensor mining and validation

In Bittensor, the term "mining" is not related to Bitcoin mining. Similarly, Bittensor "validation" has nothing to do with blockchain validation. In Bittensor, mining is "subnet mining" and validation is "subnet validation". Subnet miners perform some useful task given to them by subnet validators. See the above [General](#general) section. 

:::tip See also
See more here in [How a subnet works](learn/introduction.md#how-a-subnet-works). 
:::

### So is there a separate blockchain validation on Bittensor?

Yes. As we saw in the above [So where does the blockchain come in](#so-where-does-the-blockchain-come-in) section, the subtensor blockchain is an essential part of the Bittensor. This subtensor blockchain is like any blockchain, i.e., there are validator nodes, hosted by the Opentensor Foundation and functioning via Proof-of-Authority, that validate the transactions coming into the subtensor blockchain and post them in the subtensor blockchain ledger. Blocks containing such transactions are processed at the rate of one block every 12 seconds. You can run your own public subtensor node to synchronize with the Bittensor mainchain or testchain. 

:::tip See also
See [Subtensor Nodes](./subtensor-nodes/index.md). 
:::


### What is the incentive for me to be a miner or a validator, or even create a subnet? 

Your incentive is that you earn TAO. It works like this. Every 12 seconds a new TAO is created (i.e., minted). This single TAO is then distributed among all the subnets. So every 12 seconds each subnet gets a fraction of this newly-created TAO, based on the performance of the subnet. This fractional TAO reward that a subnet receives, called emission, is, in turn, distributed within the subnet like this: 
- 18% of it goes to the subnet owner.
- 41% goes to subnet validators (this is called dividend).
- 41% goes to the subnet miners (this is called incentive). 

Like this, every day 7200 TAO (86,400 seconds in a day, one TAO per 12 seconds) are newly created and distributed as rewards. 

:::tip See also
See [Emissions](./emissions.md) for details, in specific the role of the root network in determining which subnet gets how much reward.
:::

### I don't want to create a subnet, can I just be a miner or a validator?

Yes. But remember, you have so many different subnets to choose from. Requirements for mining or validating are subnet-specific. Start with this [Checklist for Validating and Mining](./subnets/checklist-for-validating-mining.md). Then see the step-by-step instructions in [Register, Validate and Mine](./subnets/register-validate-mine.md).

### Is there a central place where I can see compute requirements for mining and validating for all subnets?

Unfortunately no. Not all subnets are run or managed by Opentensor Foundation. Moreover, a poor-performing subnet might be removed from a `netuid` and a new subnet may have taken its place. We have not automated tracking the subnets this way yet. Your best approach is to visit each subnet's GitHub repo for documentation.

### Can I be a subnet miner or a subnet validator forever?

Depends on your performance. Mining and validating in a subnet is competitive. If a subnet miner's (or a subnet validator's) performance is poor, it might get deregistered. See more here in [Miner deregistration](./subnets/register-validate-mine.md#miner-deregistration). 
