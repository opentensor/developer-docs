---
title: "Walkthrough of Subnet 1"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Walkthrough of Subnet 1

In this section we present a high-level walkthrough of the [Subnet 1: Prompting](https://github.com/opentensor/prompting/tree/main). This subnet contains multiple incentive mechanisms which produce an internet-scale conversational intelligence. It is driven by large language models (LLMs) which search the internet and utilize specialized simulator modules to produce factually accurate and mathematically correct responses.

- Answering questions.
- Summarizing a given text.
- Debugging code. 
- Solve mathematics problems, and more.

:::tip Explorer
You can see the prompting subnet in action on the [Taostats explorer (select Subnet 01: Text Prompting from the top menu)](https://taostats.io/). 
:::

## Before you proceed

If you are new to Bittensor subnets and building blocks, read the following sections before you proceed further:

- [Bittensor Building Blocks](../learn/bittensor-building-blocks).
- [Anatomy of Incentive Mechanism](../learn/anatomy-of-incentive-mechanism).

The below diagram shows a typical subnet with many subnet miners and subnet validators together executing the subnet incentive mechanism code. On the [Taostats explorer (select Subnet 01: Text Prompting from the top menu)](https://taostats.io/) the **Metagraph** view for this Subnet 1: Prompting shows the performance details for each subnet miner and validator. 

For easier understanding, in this document we will focus on how a **single** subnet validator interacts with **multiple** subnet miners in this subnet. 

<center id="bittensor-img">
<ThemedImage
alt="1-Prompting Walkthrough"
sources={{
    light: useBaseUrl('/img/docs/1-prompting-subnet-walkthrough.svg'),
    dark: useBaseUrl('/img/docs/1-prompting-subnet-walkthrough.svg'),
  }}
style={{width: 600}}
/>
</center>

## Subnet 1 summary

See the below diagram showing a high-level view of how this Prompting subnet works. 

<center>
<ThemedImage
alt="Prompting Subnet 1 Big Picture"
sources={{
    light: useBaseUrl('/img/docs/2-prompting-subnet-high-level.svg'),
    dark: useBaseUrl('/img/docs/2-prompting-subnet-high-level.svg'),
  }}
style={{width: 750}}
/>
</center>

The numbered items in the below description correspond to the numbered sections in the above diagram:

1. The subnet validator sends a **challenge** simultaneously to multiple subnet miners. This step constitutes the **prompt** from the subnet validator to subnet miners. A challenge is a prompt sent to subnet miners in such a way that:
   - This prompt is in a style and tone that is similar to humans.
   - This prompt drives the conversation between the subnet validator and the subnet miners in order to reach a pre-defined goal. 

    See below section for how a challenge is generated. 
2. The subnet miners respond to the subnet validator after performing the challenge **task**. 
3. The subnet validator then **scores** each subnet miner by comparing the subnet miner's response with a locally generated **reference** answer. The subnet validator uses this reference as the ground truth for this step. 
4. Finally, the subnet validator **sets the weights** for the subnet miners by sending the weights to the blockchain. In the Bittensor blockchain the Yuma Consensus allocates the rewards to the participating subnet miners and subnet validators. 

:::tip Use of large language models 
In this subnet both the subnet validator and the subnet miners use large language models (LLMs) to create the challenges (subnet validator) and respond to the prompts (subnet miners).
:::

## Challenge generation

The subnet validator composes a challenge based on whether the task is answering questions, summarizing a given text, debugging code, solve mathematics problems. The challenge-creation works like this:

- The subnet validator generates a **query** consisting of a question or a task description, for a given task type. 
- The subnet validator also generates one or more **reference** answers to the above query. 
- A requirement for this subnet is that the entire conversation should be human-like. To accomplish this, the subnet validator takes on a human persona. The subnet validator then wraps the above query in the persona's style and tone. This query wrapped in the persona style is called a **challenge**. The subnet validator prompts the subnet miners with this challenge. Note that the **reference** is not sent to the subnet miners.

## Score the subnet miner responses

The responses from the subnet miners are compared to the reference answers by the subnet validator. The closer a subnet miner's response is to the reference answer, the higher is the subnet miner's score. 

:::tip Measuring subnet miner's response
This Prompting Subnet 1 presently uses a combination of string literal similarity and semantic similarity as the basis for measuring the closeness of a subnet miner's response to the reference answer. 
:::
