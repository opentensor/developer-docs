---
title: "Code Walkthrough of Text Prompting Subnet"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Code Walkthrough of Text Prompting Subnet

In this section we present a step-by-step code walkthrough of the the [Text Prompting Subnet](https://github.com/opentensor/text-prompting/tree/main). You can see this subnet in action on the [Taostats explorer (select Subnet 01: Text Generation from top right menu)](https://taostats.io/). 

## Before you proceed

If you are new to Bittensor subnets and building blocks, read the following sections before you proceed further:

- [Bittensor Building Blocks](../concepts/bittensor-building-blocks).
- [Anatomy of Incentive Mechanism](../concepts/anatomy-of-incentive-mechanism).


For ease of understanding, we will focus on how a single subnet validator interacts with multiple subnet miners in this subnet. 

<center>
<ThemedImage
alt="1-Text Prompting Walkthrough"
sources={{
    light: useBaseUrl('/img/docs/1-text-prompting-walkthrough.png'),
    dark: useBaseUrl('/img/docs/1-text-prompting-walkthrough.png'),
  }}
/>
</center>

## Text prompting subnet summary

In the text prompting subnet the subnet validator sends text prompts to subnet miners and waits for the responses from the subnet miners. The subnet validator then scores and ranks the responses from the subnet miners. Finally, the subnet validator sends these ranks to the blockchain, where the Yuma Consensus allocates the rewards to the participating subnet miners and subnet validators. 

:::tip Use of large language models 
Both the subnet validator and the subnet miners use large language models to create the prompt text strings (subnet validator) and respond to the prompts with prompt completions (subnet miners).
:::

## Start

When you start the subnet validator script, as described in the  [Bittensor Validator Setup Guide](https://github.com/opentensor/text-prompting/blob/main/docs/running_a_validator.md), after you install Bittensor, create wallet, register, you will execute the following command to start validating in the text prompting subnet. 

```bash
CUDA_VISIBLE_DEVICES=1 pm2 start ~/tutorial/text-prompting/neurons/validators/validator.py \
    --name validator1 --interpreter ~/miniconda3/envs/val/bin/python -- \
    --wallet.name validator --netuid 8 --wallet.hotkey vali --subtensor.network test \
    --logging.debug --neuron.reward_path ~/.bittensor/test-subnet1-validators \
    --axon.port 8899 --neuron.followup_sample_size 2 --neuron.answer_sample_size 2
```

The above command runs the following code segment of the [`validator.py`](https://github.com/opentensor/text-prompting/blob/6c493cbce0c621e28ded203d947ce47a9ae062ea/neurons/validators/validator.py#L348C1-L349C19): 
```python
def main():
    neuron().run()
```

The above code executes the following steps:

- [**First, initializes a `neuron` object**](https://github.com/opentensor/text-prompting/blob/6c493cbce0c621e28ded203d947ce47a9ae062ea/neurons/validators/validator.py#L84).
- [**Then starts the `neuron.run()` method**](https://github.com/opentensor/text-prompting/blob/6c493cbce0c621e28ded203d947ce47a9ae062ea/neurons/validators/validator.py#L349). The `run()` calls the [`run_forward()`](https://github.com/opentensor/text-prompting/blob/6c493cbce0c621e28ded203d947ce47a9ae062ea/neurons/validators/validator.py#L319), which then calls the [`forward()`](https://github.com/opentensor/text-prompting/blob/6c493cbce0c621e28ded203d947ce47a9ae062ea/prompting/validators/forward.py#L220) function. 

We will skip the initialization part for now and go directly to the run phase. In the run phase we can see the text prompting subnet incentive mechanism in action. 

## Validation summary

:::tip  
See the code for the [`forward()`](https://github.com/opentensor/text-prompting/blob/6c493cbce0c621e28ded203d947ce47a9ae062ea/prompting/validators/forward.py#L220) function. 
:::

The `forward()` function performs the following steps (see the below diagram): 

<center>
<ThemedImage
alt="2-Text Prompting Walkthrough"
sources={{
    light: useBaseUrl('/img/docs/2-text-prompting-walkthrough.png'),
    dark: useBaseUrl('/img/docs/2-text-prompting-walkthrough.png'),
  }}
/>
</center>

1. **Prompt for summary**: The subnet validator sends a few sentences of text to a set of subnet miners with a prompt asking the subnet miners to **summarize** these sentences. The subnet validator scores the responses containing summaries from the subnet miners. The subnet validator updates the weights of the subnet miners. These weights are not yet sent to the blockchain. This establishes the context for this entire run.
2. **Prompt for question**: The subnet validator then takes the best scoring summary text, selects a separate set of subnet miners and sends them a prompt asking them to craft a **question** based on the summary text. The subnet validator then scores the question responses and locally updates the weights of these subnet miners. 
3. **Prompt for answer**: Next, the subnet validator takes the best scoring question from the above step, selects a separate set of subnet miners, non-overlapping with any that were already prompted in the above steps, and prompts these subnet miners for **answers** to the question. The subnet validator then scores the answer responses and locally updates the weights of these subnet miners.  
4. Repeat 2 and 3.
5. Repeat 2 and 3.
6. Repeat 2 and 3. 

This completes a single run, i.e., a single iteration of the [`forward()`](https://github.com/opentensor/text-prompting/blob/6c493cbce0c621e28ded203d947ce47a9ae062ea/prompting/validators/forward.py#L220) method. 

:::tip 
Hence, in a single run, i.e., in a single iteration of the `forward()` method, the subnet validator prompts 9 times, each time selecting a separate set of subnet miners, prompting them, scoring their responses and updating their weights locally. 
:::

At the conclusion of the single run, the subnet validator sets weights on chain. Line 332.

## Validation details

Below diagram shows 
