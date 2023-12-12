---
title: "OCR Subnet Tutorial"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# OCR Subnet Tutorial

In this tutorial you will learn how to write incentive mechanism for a subnet, starting from the beginning. You will use [Bittensor Subnet Template](https://github.com/opentensor/bittensor-subnet-template) for this tutorial. In this template the subnet validator presents Optical Character Recognition (OCR) as the task to the subnet miners. When you complete this tutorial, you will know the following:

- How to use the [Bittensor Subnet Template](https://github.com/opentensor/bittensor-subnet-template) to quickstart your subnet creation process.
- How to perform subnet validation and subnet mining.
- How to design your own subnet incentive mechanism. 

:::tip Tutorial source
See the tutorial source code here (TBD).
:::

## Prerequisites

<!-- ### Install

To run the tutorial, make sure that you complete the below steps:

1. [Install Bittensor](../getting-started/installation.md). 
2. [Create a wallet, or know how to create one](../getting-started/wallets.md#creating-a-local-wallet).  -->

### Required reading

If you are new to Bittensor, read the following sections before you proceed:

1. [Introduction](../learn/introduction.md) that describes how subnets form the heartbeat of the Bittensor network.
2. [Bittensor Building Blocks](../learn/bittensor-building-blocks.md) that presents the basic building blocks you use to develop your subnet incentive mechanism.
3. [Anatomy of Incentive Mechanism](../learn/anatomy-of-incentive-mechanism.md) that introduces the general concept of a subnet incentive mechanism. 

## OCR subnet code structure

This tutorial OCR subnet works like this:

<ThemedImage
alt="Incentive Mechanism Big Picture"
sources={{
    light: useBaseUrl('/img/docs/OCR-high-level.png'),
    dark: useBaseUrl('/img/docs/OCR-high-level.png'),
  }}
/>

1. The subnet validator sends a challenge simultaneously to a few subnet miners. In this tutorial the challenge consists of an image file of a synthetic invoice document. The image file is contained in a synapse object called `OCRSynapse`. This step constitutes the **query** from the subnet validator to subnet miners.
   - [**neurons/validator.py**](https://github.com/steffencruz/ocr_subnet/blob/main/neurons/validator.py): Validator neuron class.
   - [**ocr_subnet/protocol.py**](https://github.com/steffencruz/ocr_subnet/blob/main/ocr_subnet/protocol.py): `OCRSynapse` class definition.
   - [**ocr_subnet/validator/generate.py**](https://github.com/steffencruz/ocr_subnet/blob/main/ocr_subnet/validator/generate.py): Code to generate a synthetic sample invoice PDF document.
   - [**ocr_subnet/validator/corrupt.py**](https://github.com/steffencruz/ocr_subnet/blob/main/ocr_subnet/validator/corrupt.py): Code that adds noise to the sample invoice document.
   
   - [**ocr_subnet/forward.py**](https://github.com/steffencruz/ocr_subnet/blob/main/ocr_subnet/validator/forward.py): Code that creates the challenge, sends it out to subnet miners, scores the miner responses and sets the on-chain weights.
   - [**scripts/**](https://github.com/steffencruz/ocr_subnet/tree/main/scripts): Sample invoice document and its noisy version are located in this directory.

2. The subnet miners respond after performing the challenge **task**. After receiving the synapse object containing the image data, each miner then performs the task of extracting, from the image data, its contents, including the text content, the positional information of the text, the fonts used in the text and the font size. 
   - [**neurons/miner.py**](https://github.com/steffencruz/ocr_subnet/blob/main/neurons/miner.py): Miner neuron class. Processes the incoming synapse object with image data in it, and responds to the subnet validator.

3. The subnet validator then **scores** each subnet miner based on the quality of the response and how quickly the miner completed the task. The subnet validator uses the original synthetic invoice document as the ground truth for this step. 
   - [**ocr_subnet/validator/reward.py**](https://github.com/steffencruz/ocr_subnet/blob/main/ocr_subnet/validator/reward.py): Scores the miner responses by comparing them with ground truth.

4. Finally, the subnet validator **sets the weights** for the subnet miners by sending the weights to the blockchain. 
   - [**ocr_subnet/base/validator.py**](https://github.com/steffencruz/ocr_subnet/blob/main/ocr_subnet/base/validator.py): Sets the on-chain weights.


<!-- ## Step 1. Clone the template

1. Go to [Bittensor Subnet Template](https://github.com/opentensor/bittensor-subnet-template) and click on the **Use this template** dropdown on the top right. 
2. Click on **Create a new repository** and give your preferred name in the **Repository name** field. We will use the name **ocr_subnet** in this tutorial. 
3. Optionally provide a description in the **Description** field. 
4. Choose either **Public** or **Private**.
5. Click on **Create repository**.
6. GitHub will now show you your **ocr_subnet** repository page. 
7. Clone your **ocr_subnet** repo locally. -->

## Step 1: Generate challenge and query miners

TBD

## Step 2: Miner response

TBD

## Step 3: Scoring miner responses

When a miner sends its response, the subnet validator scores the quality of the response in the following way:

1. **Prediction loss**: Compute the loss in the prediction of the miner for the text content, text position and the font.
2. **Response time penalty**: Calculate the response time penalty for the miner for these predictions.

These two computations are elborated below:

### Prediction loss

The total prediction loss is calculated as below:

- For each section of the synthetic invoice document, compute the **three** partial loss quantities: text loss, font loss and position loss. This is done by comparing a section in the miner response to the corresponding section in the ground truth synthetic invoice document. 
- Add the three partial loss quantities to compute the total loss for the particlar section.
- Take the mean score of all such total losses over all the sections of the invoice document.

Hence, the total prediction loss $L$ is:

$$ 
L = \sum_i (\alpha_p L^p_i + \alpha_f L^f_i + \alpha_t L^t_i) 
$$

where:
- $L^p_i$ is positional loss, $L^f_i$ is font loss and $L^t_i$ is text loss. 
- $\alpha_p, \alpha_f, \alpha_t$ are weights for each of the loss terms. These weights will determine the difficulty of the OCR challenge. For example, text correctness is likely much easier than position correctness.

### Positional loss code 

See [`get_iou`](https://github.com/steffencruz/ocr_subnet/blob/faed6be1155deb16865bd3c36de4767adfd538ba/ocr_subnet/validator/utils.py#L4) in `ocr_subnet/validator/utils.py`.

### Positional loss math

$L^p_i$ is the loss for section $i$ based on positional or layout correctness. This should be zero if the OCR model returns the exact box on the page. 

The positional loss $L^p_i$ is computed as the intersection over union of the bounding boxes:

$$
L^p_i = IOU(\hat{b}_i, b_i)
$$

where:
- $\hat{b}_i$ is the predicted bounding box.
- $b_i$ is the ground truth bounding box.

### Font loss code 

See [`get_font_distance`](https://github.com/steffencruz/ocr_subnet/blob/faed6be1155deb16865bd3c36de4767adfd538ba/ocr_subnet/validator/utils.py#L73) in `ocr_subnet/validator/utils.py`.

### Font loss math 

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

### Text loss code 

See [`get_edit_distance`](https://github.com/steffencruz/ocr_subnet/blob/faed6be1155deb16865bd3c36de4767adfd538ba/ocr_subnet/validator/utils.py#L55) in `ocr_subnet/validator/utils.py`.

### Text loss math

$L^t_i$ is the loss for section $i$ based on text correctness. This should be zero if the OCR model returns the exact text for the section.

The text loss is the edit distance between the predicted text and the ground truth text:
$$
L^t_i = ED(\hat{t}_i, t_i) 
$$

where:

- $ED$ is the edit distance function. This is equivalent to the [Levenshtein distance](https://en.wikipedia.org/wiki/Levenshtein_distance).

### Response time penalty

- See [`time_loss` in `ocr_subnet/validator/reward.py`](https://github.com/steffencruz/ocr_subnet/blob/faed6be1155deb16865bd3c36de4767adfd538ba/ocr_subnet/validator/reward.py#L101).

## Reward 

The sum of loss $L$ and response time penalty is inverted to produce a reward for the miner. The miner is expected to maximize this consolidated reward $R$.

### Reward code 

- See [raw_reward](https://github.com/steffencruz/ocr_subnet/blob/faed6be1155deb16865bd3c36de4767adfd538ba/ocr_subnet/validator/reward.py#L105).

### Reward math 

Hence, the reward $R$ for the miner is:

$$ 
R = 1 / (L + L^{tp} + \epsilon)
$$

where:
- $L$ is the total prediction loss.
- $L^{tp}$ is the response time penalty. 
- $\epsilon$ is an infinitesimal included to avoid division by zero.

## Step 4: Set weights 

TBD
