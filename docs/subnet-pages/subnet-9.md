---
title: "Subnet 9"
---

# Subnet 9

## Name

Pretrain Subnet

## Netuid
9

## Description

This subnet rewards miners for producing pretrained Foundation-Models on the Falcon Refined Web dataset. It acts like a continuous benchmark whereby miners are rewarded for attaining the best losses on randomly sampled pages of Falcon given a consistent model architecture. The reward mechanism works as follows:

1. Miners train and periodically host trained model weights linked to their miner key as exampled by the code in neurons/miner.py.
2. Validators run a continuous eval on the hosted models, performing the validation system outlined in neurons/validator.py and setting weights to the chain based on the performance of each miner on the Falcon dataset.
3. The chain aggregates weights from all active validators and runs Yuma Consensus to determine the proportion of TAO emission rewarded to miners and validators. 

## Subnet owner

https://github.com/RaoFoundation/pretraining

## GitHub

https://github.com/RaoFoundation/pretraining

<!-- 
## Hyperparameters

| Hyperparameter| Value|
|:---|------|
| rho | 10 |
| kappa | 32767 |
| immunity_period | 7200 |
| min_allowed_weights | 8 |
| max_weight_limit | 455 |
| tempo | 99 |
| min_difficulty | 1000000000000000000 |
| max_difficulty | 1000000000000000000 |
| weights_version | 2013 |
| weights_rate_limit | 100 |
| adjustment_interval | 112 |
| activity_cutoff | 5000 |
| registration_allowed | True |
| target_regs_per_interval | 2 |
| min_burn | 1000000000 |
| max_burn | 100000000000 |
| bonds_moving_avg | 900000 |
| max_regs_per_block | 1 |
| serving_rate_limit | 10 |
| max_validators | 128 | -->
