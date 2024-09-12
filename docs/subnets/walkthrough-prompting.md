---
title: "Walkthrough of Subnet 1"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Walkthrough of Subnet 1

In this section we present a high-level walkthrough of the [Subnet 1: Prompting](https://github.com/opentensor/prompting/tree/main). This subnet contains multiple incentive mechanisms which produce an internet-scale conversational intelligence. Below are a few examples of the intelligence produced by this subnet:

- Answering questions.
- Summarizing a given text.
- Debugging code. 
- Translating languages.
- Solve mathematics problems, and more.

This subnet is driven by large language models (LLMs). These LLMs search the internet and utilize specialized simulator modules to produce factually accurate and mathematically correct responses. 

:::tip Subnet 1 Explorer
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
    dark: useBaseUrl('/img/docs/dark-1-prompting-subnet-walkthrough.svg'),
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
    dark: useBaseUrl('/img/docs/dark-2-prompting-subnet-high-level.svg'),
  }}
style={{width: 750}}
/>
</center>

The numbered items in the below description correspond to the numbered sections in the above diagram:

1. The subnet validator sends a **challenge** simultaneously to multiple subnet miners. This step constitutes the **prompt** from the subnet validator to subnet miners. A challenge is a prompt sent to subnet miners in such a way that:
   - This prompt is in a style and tone that is similar to humans. This is so that subnet miners become adept at handling "fuzzy" instructions with ambiguity. This is required in order to excel at understanding user needs.
   - This prompt drives the conversation between the subnet validator and the subnet miners in order to reach a pre-defined goal. 

    See the below [Challenge generation](#challenge-generation) section for how a challenge is generated. 
2. The subnet miners respond to the subnet validator after performing the challenge **task**. Most tasks require subnet miners to make use of APIs or tools to perform well.
3. The subnet validator then **scores** each subnet miner by comparing the subnet miner's response with a locally generated **reference** answer. The subnet validator uses this reference as the ground truth for this step. The reference is generated using data from APIs and tools to ensure factual correctness and to provide citations.
4. Finally, the subnet validator **sets the weights** for the subnet miners by sending the weights to the blockchain. In the Bittensor blockchain the Yuma Consensus allocates the rewards to the participating subnet miners and subnet validators. 

:::tip Use of large language models 
In this subnet both the subnet validator and the subnet miners use large language models (LLMs) to create the challenges (subnet validator) and respond to the prompts (subnet miners).
:::

## Challenge generation

<center>
<ThemedImage
alt="Prompting Subnet 1 Big Picture"
sources={{
    light: useBaseUrl('/img/docs/3-prompting-subnet1-key-innovation.svg'),
    dark: useBaseUrl('/img/docs/dark-3-prompting-subnet1-key-innovation.svg'),
  }}
style={{width: 600}}
/>
</center>

The challenge generation works like this (see the above diagram):

- The subnet validator generates a **prompt** consisting of a clearly stated question or a task description, for a given task type. 
- The subnet validator also generates one or more **reference** answers to the above prompt. The subnet validator also provides the context to generate this reference answer.
- A requirement for this prompting subnet is that the entire conversation should be human-like. To accomplish this, the subnet validator takes on a human persona and wraps the above prompt in the persona's style and tone. The introduction of such random persona's style and tone creates a lossy, corrupted, version of the original clear instruction. This corrupted prompt is called a **challenge**. 
- The subnet validator prompts the subnet miners with this challenge. Note that the **reference** is not sent to the subnet miners.

## Score the subnet miner responses

The responses from the subnet miners are compared to the reference answers by the subnet validator. The closer a subnet miner's response is to the reference answer, the higher is the subnet miner's score. 

:::tip Measuring subnet miner's response
This Prompting Subnet 1 presently uses a combination of string literal similarity and semantic similarity as the basis for measuring the closeness of a subnet miner's response to the reference answer. 
:::

## Key innovations in this subnet

This subnet has developed a few innovative techniques to get to a real human-like conversational AI that actually produces intelligence instead of copying from the internet. Refer to the diagram in the above [Challenge generation](#challenge-generation) section:

### Achieving human-like conversation

To deliver to a user of this subnet an experience of a human-like conversation:

- Subnet validators perform a roleplay where they take on the persona of **random** human users before they prompt the subnet miners. There are several tangible benefits to this role playing flow, such as: 
  - Subnet validators can engage the subnet miners in a real, random, human-like conversation throughout the subnet operation.
  - Subnet miners become adept at handling ambiguous instructions.
  - This generates, as a byproduct, interesting synthetic datasets that can be used to finetune other LLMs.
- Subnet miners are required to produce completions that are as close as possible to the reference. To accomplish this a subnet miner must:
  - Extract clear instruction from the lossy challenge.
  - Find the appropriate context, for example, using Wikipedia. 
  - Generate a completion that matches the tone and style of the reference.
- This means that throughout the subnet validation process the subnet miners become better and better at handling ambiguous, "fuzzy" instructions. 
- A subnet validator could increase the corruption of the instruction to increase the difficulty of the tasks.
- To change the subnet miner completions, a subnet validator may modify the style and tone of the reference answers or change the scoring function, or both.


:::tip Class HumanAgent
See [class HumanAgent](https://github.com/opentensor/prompting/blob/main/prompting/agent.py#L30).
:::

### Prevent subnet miners from looking up the answers

To prevent the subnet miners from simply looking up the answers on the internet, this subnet incorporates a novel approach&mdash;it introduces fuzziness into the prompt and requires that the subnet miners use semantic intelligence to understand the instructions contained in the prompt.

### Evolve subnet as a mixture of experts (MoE)

The subnet validator composes a challenge based on whether the task is answering questions, summarizing a given text, debugging code, solve mathematics problems, and so on. The motivation behind using multiple tasks is several fold:

- Using multiple tasks in the prompts continuously benchmarks the capabilities of the subnet miners across a broad range of tasks that are challenging but are still common use-cases. 
- Using multiple tasks, prompts can be routed to specialized subnet miners, thereby providing an effective mixture of experts system.
- This approach also serves as a precursor to Bittensor's inter-subnet bridging mechanism that will enable Subnet 1 to interact with other subnets and access the useful work provided by these subnets. 
- Finally, the subnet miners in this subnet must become adept at using tools and APIs in order to fulfill validation tasks. We are building an API layer for inter-subnet communication, which is a natural extension of 'agentic' models.

:::tip Continuously improving performance
One objective of this subnet is to achieve full coverage of the distributions across different personas (representing different users), and different tasks (representing different use-cases). See the arXiv paper [Super-Natural Instructions](https://arxiv.org/abs/2204.07705) [(PDF)](https://arxiv.org/pdf/2204.07705.pdf).

:::


