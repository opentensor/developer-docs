---
title: "Understanding Incentive Mechanisms"
---

# Understanding Incentive Mechanisms

This page explores the concept and usage of incentive mechanisms in Bittensor.

See [Components of the Bittensor platform](../learn/bittensor-building-blocks) for an explanation of the basics, such as subnets, miners, validators, and the role of the blockchain.

Each subnet has its own *incentive mechanism*, which drives the behavior of its community of miners and validators by defining a standard model for how miners’ work is to be evaluated. Miners are incentivized to meet this standard so validators will score (or 'weight') their work highly, resulting in higher emissions. Validators are incentivized to accurately score miners' work according to this standard because the algorithm penalizes departure from consensus in miner scores with lower emissions.

A well-designed incentive mechanism is critical for a well-functioning subnet! Carefully consider and test the consequences of the behaviors you will be incentivizing and punishing before releasing your IM to your subnet on the main Bittensor network.

A subnet incentive mechanism, when running optimally on a subnet, will continuously produce high-quality results because the subnet miners and subnet validators are incentivized to do so. Furthermore, a good incentive mechanism will encourage **continuous improvement** of the subnet as a whole by leveraging the competition between miners to attain ever higher scores.

## Subnet creator responsibilities

A subnet creator is responsible for:

- Design an incentive mechanism that aligns miners with the desired task outcomes.
- Enable participation
- Discourage exploits

::: note
Though a subnet incentive mechanism works in conjunction with the Yuma Consensus in the Bittensor network, you must design your subnet incentive mechanism **by treating Yuma Consensus as a black box**. 
:::

### Enable participation

To attract high-performing subnet miners and subnet validators, make sure that you publish sufficient documentation on your subnet.

:::tip Good docs are important!
Make sure that your subnet documentation helps developers successfully onboard to mining and validating.
:::

After a subnet validator registers into your subnet, they will run the validator module to begin the validation operation. Similarly, a subnet miner will register and then run the miner module. For example, see the following documents in the text prompting subnet for a quick view of these steps:

- [Running a validator](https://github.com/opentensor/prompting/blob/main/docs/SN1_validation.md).
- [Running a miner](https://github.com/opentensor/prompting/blob/main/docs/stream_miner_template.md).

### Discourage exploits

The incentive mechanism is ultimately the judge of subnet miner performance. When the incentive mechanism is well calibrated, it can result in a virtuous cycle in which the subnet miners continuously improve at the desired task due to competition.

On the contrary, a poorly designed incentive mechanism can result in exploits and shortcuts, which can detrimentally impact the overall quality of the subnet and discourage fair miners.

### Design incentive mechanism

Research what other subnet creators are doing.

Browse the subnets and explore links to their code repositories on [Taostats' subnets listings](https://taostats.io/subnets), and learn about the latest research on subnet design, which is an active area.

## Components of incentive mechanism

A subnet incentive mechanism must provide the following:

- A protocol for how validators query miners and how miners respond
- A task definition for the work miners are to perform
- A scoring mechanism for validators to use in evaluating miners' work

### Miner-validator protocol

A subnet creator must define a protocol for how validators are to query miners, and how miners should respond. Protocols are built using the Axon-Dendrite client-server model and Synapse data objects.

See [Neuron to neuron communication](./bittensor-building-blocks.md#neuron-to-neuron-communication).

### Subnet task

The task is one of the key components of any incentive mechanism as it defines what miners will perform as work. The task should be chosen so that miners are maximally effective at the intended use case for the subnet.

In other words, **the task should mimic an intended user interaction with a subnet**. Examples of tasks are responding to natural language prompts and storing encrypted files.

The task defines the scope of work that miners will undertake, and what utility the subnet can provide to users. In some cases this should be very specific (such as storage) and in other cases it can be varied (many types of natural language query).

### Subnet scoring model

Where the task describes **what** miners should do, the scoring model dictates **how** it should be done. Similarly, just as tasks should mimic user interactions, scoring models should mimic user preferences or desired outcomes.

As with any machine learning model, a subnet has an objective function that it is continuously optimizing. The scoring model defines the quality of all miner behavior in the subnet (both intended and unintended).

Operationally, it is the mathematical object that converts miner responses into numerical scores. A scoring model can in fact contain as many different scoring mechanisms as are necessary to align miners with the intended task.

Miners will continuously compete to achieve the highest score possible, since it determines their emissions. If the score is capped at an upper limit, miners may not be motivated to improve further. Hence care should be taken to enable continuous improvement of the miner, rather than stagnation.

:::tip The zen of incentive mechanisms
Subnets should be endlessly improving.
:::

## Allocation of emissions

1. Each validator on the subnet computes a vector of weights assigned to each miner, representing an aggregate ranking based on their performance. Validators transmit these **weight vectors** to the blockchain. Typically, each subnet validator transmits an updated ranking weight vector to the blockchain every 100-200 blocks.
2. The Bittensor blockchain waits for the latest ranking weight vectors from all the subnet validators of a given subnet, then forms a **weight matrix** from these ranking/weight vectors, which is then provided as input to the Yuma Consensus module on-chain.
3. The Yuma Consensus (YC) uses this weight matrix, along with the amount of stake associated with each UID on the subnet, to calculate emissions to each subnet and each participant within each subnet. These emissions are finalized and debited to participants' hotkeys at the end of each *tempo* or 360 blocks.

:::tip note
The tempo duration (360 blocks) is the same for all the user-created subnets. However, the timing of tempos can differ among subnets, depending on when they were created.
:::

## Additional Considerations for Subnet Incentive Design

- Take miner hardware into account, where it may cause differences in output, or in judging performance.
- Set tight similarity thresholds if exact reproducibility is challenging. For example, compare embeddings (like CLIP) or apply perceptual hashing.  
- Take steps to prevent miners from precomputing or caching results:
	- Use validator-provided random seeds; avoid letting miners control all the randomness in the output.
	- Introduce small input variations.
	- Ensure your scoring logic prevents partial outputs from being judged as similar to complete results.
- Consider carefully how to balance speed, reliability, and quality.
- Consider incorporating organic queries into the validation process.
- Expect to frequently release updated that refine your incentive mechanism and address emergent exploits or other points of suboptimality. The best subnets update frequently, accomodating new hardware, new models, and new miner behaviors.
- Observe other subnets. Many solutions—like adopting multi-model strategies or partial randomization—can be adapted to your own.
