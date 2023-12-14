---
title: "OCR Subnet Tutorial"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# OCR Subnet Tutorial

In this tutorial you will learn how to quickly convert your validated idea into a functional Bittensor subnet. This tutorial begins with Python notebooks that contain the already validated code for optical character recognition (OCR). We demonstrate how straightforward it is to start with such notebooks and produce a working subnet.


## Motivation 

Bittensor subnets are:
- Naturally suitable for continuous improvement of the subnet miners. 
- High throughput environments to accomplish such improvements. 

This is the motivation for creating an OCR subnet for this tutorial. By using the OCR subnet, one can extract the text from an entire library of books in a matter of hours or days. Moreover, when we expose the subnet miners, during training, to examples of  real-world use-cases, the OCR subnet can be fine-tuned to be maximally effective.

## Takeaway lessons

When you complete this tutorial, you will know the following:

- How to convert your Python notebooks containing validated idea into a working Bittensor subnet.  
- How to use the [Bittensor Subnet Template](https://github.com/opentensor/bittensor-subnet-template) to accomplish this goal.
- How to perform subnet validation and subnet mining.
- How to design your own subnet incentive mechanism.

## Tutorial code

### Python notebooks

The Python notebooks we use in this tutorial contain all the three essential components of the OCR subnet:

- [Validation flow](https://colab.research.google.com/drive/1Z2KT11hyKwsmMib8C6lDsY93vnomJznz#scrollTo=M8Cf2XVUJnBh).
- [Baseline miner implementation](https://colab.research.google.com/drive/1Z2KT11hyKwsmMib8C6lDsY93vnomJznz#scrollTo=hhKFy5U2EW7e).
- [Reward model (incentive mechanism)](https://colab.research.google.com/drive/1Z2KT11hyKwsmMib8C6lDsY93vnomJznz#scrollTo=jcwFaIjwJnBj).


### OCR subnet repository

- We will use the [OCR subnet repository](https://github.com/steffencruz/ocr_subnet) to place the working code for the OCR subnet.

## Tutorial method

For the rest of this tutorial we will proceed by demonstrating which blocks of Python notebook code are copied into specific sections of the [OCR subnet repository](https://github.com/steffencruz/ocr_subnet). 

### OCR subnet repo structure

See below for the tree structure of this repo:

```bash
├── LICENSE
├── README.md
├── contrib
│   ├── CODE_REVIEW_DOCS.md
│   ├── CONTRIBUTING.md
│   ├── DEVELOPMENT_WORKFLOW.md
│   └── STYLE.md
├── docs
│   ├── running_on_mainnet.md
│   ├── running_on_staging.md
│   ├── running_on_testnet.md
│   └── what_are_subnets.md
├── min_compute.yml
├── neurons
│   ├── __init__.py
│   ├── miner.py
│   └── validator.py
├── ocr_subnet
│   ├── __init__.py
│   ├── base
│   │   ├── __init__.py
│   │   ├── miner.py
│   │   ├── neuron.py
│   │   └── validator.py
│   ├── protocol.py
│   ├── utils
│   │   ├── __init__.py
│   │   ├── config.py
│   │   ├── misc.py
│   │   ├── serialize.py
│   │   └── uids.py
│   └── validator
│       ├── __init__.py
│       ├── corrupt.py
│       ├── forward.py
│       ├── generate.py
│       ├── reward.py
│       └── utils.py
├── requirements.txt
├── scripts
│   ├── check_compatibility.sh
│   ├── check_requirements_changes.sh
│   ├── demo_pytesseract_miner.ipynb
│   ├── demo_validator.ipynb
│   ├── noisy_invoice.pdf
│   ├── noisy_invoice.png
│   └── sample_invoice.pdf
├── setup.py
└── tests
    └── test_template_validator.py
```

## Prerequisites

### Required reading

If you are new to Bittensor, read the following sections before you proceed:

1. [Introduction](../learn/introduction.md) that describes how subnets form the heartbeat of the Bittensor network.
2. [Bittensor Building Blocks](../learn/bittensor-building-blocks.md) that presents the basic building blocks you use to develop your subnet incentive mechanism.
3. [Anatomy of Incentive Mechanism](../learn/anatomy-of-incentive-mechanism.md) that introduces the general concept of a subnet incentive mechanism. 

## OCR subnet summary

This tutorial OCR subnet works like this:

<ThemedImage
alt="Incentive Mechanism Big Picture"
sources={{
    light: useBaseUrl('/img/docs/OCR-high-level.png'),
    dark: useBaseUrl('/img/docs/OCR-high-level.png'),
  }}
/>

1. In this tutorial the subnet validator sends a challenge simultaneously to a few subnet miners. In this tutorial the challenge consists of an image file of a synthetic invoice document. The image file is contained in a synapse object called `OCRSynapse`. This step constitutes the **query** from the subnet validator to subnet miners.
2. The subnet miners respond after performing the challenge **task**. After receiving the synapse object containing the image data, each miner then performs the task of extracting, from the image data, its contents, including the text content, the positional information of the text, the fonts used in the text and the font size. 
3. The subnet validator then **scores** each subnet miner based on the quality of the response and how quickly the miner completed the task. The subnet validator uses the original synthetic invoice document as the ground truth for this step. 
4. Finally, the subnet validator **sets the weights** for the subnet miners by sending the weights to the blockchain. 

<!-- ## Step 1. Clone the template

1. Go to [Bittensor Subnet Template](https://github.com/opentensor/bittensor-subnet-template) and click on the **Use this template** dropdown on the top right. 
2. Click on **Create a new repository** and give your preferred name in the **Repository name** field. We will use the name **ocr_subnet** in this tutorial. 
3. Optionally provide a description in the **Description** field. 
4. Choose either **Public** or **Private**.
5. Click on **Create repository**.
6. GitHub will now show you your **ocr_subnet** repository page. 
7. Clone your **ocr_subnet** repo locally. -->

## Step 1: Generate challenge and query the miners

### Step 1.1: Synthetic PDF as challenge

In this tutorial, the subnet validator will generate synthetic data, which is a PDF document. The validator will use this synthetic PDF as the basis for assessing the subnet miner performance. Synthetic data is an appropriate choice, in contrast to using a pre-existing dataset from the web. Subnet miners cannot "lookup" the answers on the web with synthetic data. 

The contents of the PDF document are the ground truth labels. The subnet validator uses them to score the miner responses. The synthetic PDF document is corrupted with different types of noise to mimic poorly scanned documents. The amount of noise can also be gradually increased to make the task more challenging.

To generate this challenge, the subnet validator applies the following steps:

- Creates a synthetic invoice document using the [Python Faker library](https://github.com/joke2k/faker). 
- Converts this synthetic data into PDF using [ReportLab Python library](https://docs.reportlab.com/install/open_source_installation/). 
- Finally the validator creates the challenge by converting this PDF into a corrupted image, called `noisy_image`. 

**Collab Notebook source:** The validated code for the above synthetic PDF generation logic is in [Validation flow cell](https://colab.research.google.com/drive/1Z2KT11hyKwsmMib8C6lDsY93vnomJznz#scrollTo=M8Cf2XVUJnBh).

All we have to do is to copy the above Notebook code into a proper place in the OCR subnet repo. 

```bash {7,9}
...
├── ocr_subnet
│   ├── __init__.py
│  ...
│   └── validator
│       ├── __init__.py
│       ├── corrupt.py
│       ├── forward.py
│       ├── generate.py
│       ├── reward.py
│       └── utils.py
...
├── scripts
│   ├── check_compatibility.sh
│   ├── check_requirements_changes.sh
│   ├── demo_pytesseract_miner.ipynb
│   ├── demo_validator.ipynb
│   ├── noisy_invoice.pdf
│   ├── noisy_invoice.png
│   └── sample_invoice.pdf

```

We copy the above Notebook code into the following code files. Click on the OCR repo file names to see the copied code:

| Python Notebook source| OCR repo destination |
| :---------- | :-------------- |
| Methods: `create_invoice`, `random_items`, `load_image`, and lists `items_list` and `invoice_info` and all the `import` statements in cell 34. | [ocr_subnet/validator/generate.py](https://github.com/steffencruz/ocr_subnet/blob/main/ocr_subnet/validator/generate.py) | 
| Method: `corrupt_image`       | [ocr_subnet/validator/corrupt.py](https://github.com/steffencruz/ocr_subnet/blob/main/ocr_subnet/validator/corrupt.py) |

### Step 1.2: Query miners

Next, the subnet validator sends this `noisy_image` to the miners, tasking them to perform OCR and content extraction. 

**Collab Notebook source:** In the validated Collab Notebook code, this step is accomplished by **directly passing the path information** of the `noisy_image` from the Validator cell to the miner. 

:::tip
[See `noisy_image` from line 32 in Quick sanity check cell](https://colab.research.google.com/drive/1Z2KT11hyKwsmMib8C6lDsY93vnomJznz#scrollTo=_rHjuG6JD--P) being passed to [line 90 of the Miner cell](https://colab.research.google.com/drive/1Z2KT11hyKwsmMib8C6lDsY93vnomJznz#scrollTo=hhKFy5U2EW7e).
::: 

#### Define OCRSynapse class

However, in a Bittensor subnet, any communication between a subnet validator and a subnet miner must use an object of the type `Synapse`. Hence, the subnet validator must embed the corrupted image into a `Synapse` object and send this object to the miners. The miners will then place their responses into this same object they received and send them back to the subnet validator. 

:::tip important
The `OCRSynapse` object can only contain serializable objects. This is because both the subnet validators and the subnet miners must be able to deserialize after receiving the object.
:::

See the `OCRSynapse` class definition in [**ocr_subnet/protocol.py**](https://github.com/steffencruz/ocr_subnet/blob/main/ocr_subnet/protocol.py).

```bash {7}
...
├── ocr_subnet
│   ├── __init__.py
│   ├── base
│   │   ├── __init__.py
│   │   ...
│   ├── protocol.py
...
```

:::tip Study tip
See [Neuron-to-neuron communication](../learn/bittensor-building-blocks.md#neuron-to-neuron-communication).
:::

#### Send OCRSynapse to miners

With the `OCRSynapse` class defined, next we use the network client `dendrite` of the subnet validator to send queries to the `Axon` server of the subnet miners. 

See [**ocr_subnet/forward.py**](https://github.com/steffencruz/ocr_subnet/blob/main/ocr_subnet/validator/forward.py) which contains all this communication logic. 

Also note that the [**scripts/**](https://github.com/steffencruz/ocr_subnet/tree/main/scripts) directory contains the sample invoice document and its noisy version. The subnet validator uses these as ground truth labels to score the miner responses.

```bash {8,13}
...
├── ocr_subnet
│   ├── __init__.py
│  ...
│   └── validator
│       ├── __init__.py
│       ├── corrupt.py
│       ├── forward.py
│       ├── generate.py
│       ├── reward.py
│       └── utils.py
...
├── scripts
│   ├── check_compatibility.sh
│   ├── check_requirements_changes.sh
│   ├── demo_pytesseract_miner.ipynb
│   ├── demo_validator.ipynb
│   ├── noisy_invoice.pdf
│   ├── noisy_invoice.png
│   └── sample_invoice.pdf

```

## Step 2: Miner response

Having received the `OCRSynapse` object with the corrupted image data in it, the miners will next perform the data extraction. 

### Base miner 

The Python notebook contains an implementation of the base miner, which uses [`pytesseract`](https://github.com/madmaze/pytesseract), a popular open source OCR tool to extract data from the image sent by the subnet validator. 

**Collab Notebook source**: See the `miner` method in this [Miner cell of the Collab Notebook](https://colab.research.google.com/drive/1Z2KT11hyKwsmMib8C6lDsY93vnomJznz#scrollTo=hhKFy5U2EW7e).

We copy the above miner code from the Notebook into the following code files. Click on the OCR repo file names to see the copied code:

```bash {4}
...
├── neurons
│   ├── __init__.py
│   ├── miner.py
│   └── validator.py
...
```

| Python Notebook source| OCR repo destination |
| :---------- | :-------------- |
| Methods: `group_and_merge_boxes` and `miner` and all the `import` statements in this [Miner cell of the Collab Notebook](https://colab.research.google.com/drive/1Z2KT11hyKwsmMib8C6lDsY93vnomJznz#scrollTo=hhKFy5U2EW7e). | [neurons/miner.py](https://github.com/steffencruz/ocr_subnet/blob/main/neurons/miner.py) | 

:::tip Student exercise
[`pytesseract`](https://github.com/madmaze/pytesseract) is well-suited for this OCR problem. But it can be beaten by a subnet miner using more sophisticated approaches such as deep learning for OCR. 
:::

## Step 3: Scoring miner responses

When a miner sends its response, the subnet validator scores the quality of the response in the following way:

**Prediction loss**
: Compute the loss in the prediction of the miner for the text content, text position and the font. The total prediction loss is calculated as below:

- For each section of the synthetic invoice document, compute the **three** partial loss quantities: text loss, font loss and position loss. This is done by comparing a section in the miner response to the corresponding section in the ground truth synthetic invoice document. 
- Add the above three partial loss quantities to compute the total loss for the particlar section.
- Take the mean score of all such total losses over all the sections of the invoice document.

**Response time penalty**
: Calculate the response time penalty for the miner for these predictions.

**Collab Notebook source**: See the [Incentive mechanism cell](https://colab.research.google.com/drive/1Z2KT11hyKwsmMib8C6lDsY93vnomJznz#scrollTo=jcwFaIjwJnBj).

We copy the above miner code from the Notebook into the following code files. Click on the OCR repo file names to see the copied code:

```bash {10,11}
...
├── ocr_subnet
│   ├── __init__.py
│  ...
│   └── validator
│       ├── __init__.py
│       ├── corrupt.py
│       ├── forward.py
│       ├── generate.py
│       ├── reward.py
│       └── utils.py
...
```

| Python Notebook source| OCR repo destination |
| :---------- | :-------------- |
| Methods: `reward` and `miner` and all the `import` statements in this [Miner cell of the Collab Notebook](https://colab.research.google.com/drive/1Z2KT11hyKwsmMib8C6lDsY93vnomJznz#scrollTo=hhKFy5U2EW7e). | [ocr_subnet/validator/reward.py](https://github.com/steffencruz/ocr_subnet/blob/main/ocr_subnet/validator/reward.py) | 
| Method `section_reward`. | Method `loss` in the `reward.py`. |
| Methods: `get_position_reward`, `get_text_reward` and `get_font_reward`. | Methods: `get_iou`, `get_edit_distance` and `get_font_distance`, respectively, in [ocr_subnet/validator/utils.py](https://github.com/steffencruz/ocr_subnet/blob/main/ocr_subnet/validator/utils.py) |


## Step 4: Set weights 

Finally, as shown in the above [OCR subnet summary](#ocr-subnet-summary), the subnet validator sends the weights of the subnet miners to the blockchain. This step is not in the Python notebooks. This step is performed by the function `set_weights` in the [ocr_subnet/base/validator.py](https://github.com/steffencruz/ocr_subnet/blob/main/ocr_subnet/base/validator.py#L206) and it is already available fully implemented in the OCR subnet repo. 

## Next steps 

TBD 