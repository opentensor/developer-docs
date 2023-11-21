---
title: "Subnet Tutorial"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Subnet Tutorial
In this tutorial you will learn how to build a subnet, starting from the beginning. We will use digital document restoration (DDR) as the task to be performed by the subnet miners. When you complete this tutorial, you will know the following:
- How to create a subnet.
- How to perform subnet validation and subnet mining.
- How to design your own subnet incentive mechanism. 

:::tip Tutorial source
See the tutorial source code here.
:::

## Prerequisites

### Install
To run the tutorial, make sure that you complete the below steps:
1. [Install Bittensor](../getting-started/installation.md). 
2. [Create a wallet, or know how to create one](../getting-started/wallets.md#creating-a-local-wallet). 

### Required reading

Before you proceed, read the following sections:
1. [Introduction](../learn/introduction.md) that describes how subnets form the heartbeat of the Bittensor network.
2. [Bittensor Building Blocks](../learn/bittensor-building-blocks.md) that presents the basic building blocks you use to develop your subnet incentive mechanism.
3. [Anatomy of Incentive Mechanism](../learn/anatomy-of-incentive-mechanism.md) that introduces the general concept of a subnet incentive mechanism. 

## Digital document restoration subnet

In this tutorial the DDR subnet works like this:

- Subnet validators send an image file to subnet miners.
- Subnet miners respond with a JSON object containing the contents of the image file, including the positional information of the content, fonts used in the text, font size . Subnet miners use the [Hugging Face OCR-Donut-CORD model](https://huggingface.co/jinhybr/OCR-Donut-CORD) to restore the contents from the image.
- Subnet validators then score the subnet miners on how closely the JSON object matches the images file.

## Loss function

Loss function for OCR-Donut-CORD model:

$$ 
L = \sum_i \alpha_p L^p_i + \alpha_f L^f_i + \alpha_t L^t_i 
$$

where:
- $\alpha_p, \alpha_f, \alpha_t$ are weights for each of the loss terms. These weights will determine the difficulty of the OCR challenge. For example, text correctness is likely much easier than position correctness, etc.
- $L^p_i$, $L^f_i$ and $L^t_i$ loss components are as defined below:

### Positional loss 

$L^p_i$ is the loss for section $i$ based on positional or layout correctness. This should be zero if the OCR model returns the exact box on the page. 

The positional loss $L^p_i$ is computed as the intersection over union of the bounding boxes:

$$
L^p_i = IOU(\hat{b}_i, b_i)
$$

where:
- $\hat{b}_i$ is the predicted bounding box.
- $b_i$ is the ground truth bounding box.

### Font loss 

$L^f_i$ is the loss for section $i$ based on font correctness. This should be zero if the OCR model returns the exact font for the section, including the font family, the font size and font colors.

The font loss is a delta between the predicted font and the ground truth font, with an additional term for the square of the difference between the predicted font size and the original font size:

$$
L^f_i = \alpha_f^f (1 - \delta(\hat{f}_i, f_i) )+ \alpha_f^s (\hat{s}_i - s_i)^2
$$

where:
- $\hat{f}_i$ is the predicted name of the font.
- $f_i$ is the ground truth name of the font.
- $\hat{s}_i$ is the predicted size of the font.
- $s_i$ is the ground truth size of the font.

### Text loss

$L^t_i$ is the loss for section $i$ based on text correctness. This should be zero if the OCR model returns the exact text for the section.

The text loss is the edit distance between the predicted text and the ground truth text:
$$
L^t_i = ED(\hat{t}_i, t_i) 
$$

where:

- $ED$ is the edit distance function. This is equivalent to the [Levenshtein distance](https://en.wikipedia.org/wiki/Levenshtein_distance).

## Reward

The loss $L$ is inverted to produce a reward that a miner is expected to maximize. Hence, the reward $R$ is:

$$ 
R = 1 / L 
$$

where $L$ is the loss function defined above. 

:::tip epsilon
In implementation $L$ is probably $L+\epsilon$ to avoid division by zero.
:::

