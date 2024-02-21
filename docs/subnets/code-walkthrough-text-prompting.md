---
title: "Code Walkthrough of Text Prompting Subnet"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Code Walkthrough of Text Prompting Subnet

In this section we present a step-by-step code walkthrough of the [Text Prompting Subnet](https://github.com/opentensor/prompting/tree/main). 

:::tip Explorer
You can see the text prompting subnet in action on the [Taostats explorer (select Subnet 01: Text Generation from top right menu)](https://taostats.io/). 
:::

## Before you proceed

If you are new to Bittensor subnets and building blocks, read the following sections before you proceed further:

- [Bittensor Building Blocks](../learn/bittensor-building-blocks).
- [Anatomy of Incentive Mechanism](../learn/anatomy-of-incentive-mechanism).

For ease of understanding, we will focus on how a single subnet validator interacts with multiple subnet miners in this subnet. 

<center id="bittensor-img">
<ThemedImage
alt="1-Text Prompting Walkthrough"
sources={{
    light: useBaseUrl('/img/docs/1-text-prompting-walkthrough.svg'),
    dark: useBaseUrl('/img/docs/dark-1-text-prompting-walkthrough.svg'),
  }}
/>
</center>

## Subnet summary

The text prompting subnet works like this:
- The subnet validator sends text prompts to subnet miners and waits for the responses from the subnet miners. 
- After receiving the responses from the subnet miners, the subnet validator scores and ranks the responses from the subnet miners. 
- Finally, the subnet validator sends these ranks to the blockchain, where the Yuma Consensus allocates the rewards to the participating subnet miners and subnet validators. 

:::tip Use of large language models 
Both the subnet validator and the subnet miners use large language models to create the prompt text strings (subnet validator) and respond to the prompts with prompt completions (subnet miners).
:::

## Start

After you install Bittensor, create a wallet, register to be a subnet validator and ensure that you have enough stake to be a subnet validator, you will execute a command like below to start validating in the text prompting subnet. For the exact command, see [Bittensor Validator Setup Guide](https://github.com/opentensor/prompting/blob/main/docs/running_a_validator.md),  

```bash
python3 /path/to/validator.py <options>
```

The above command runs the following code segment of the [`validator.py`](https://github.com/opentensor/prompting/blob/6c493cbce0c621e28ded203d947ce47a9ae062ea/neurons/validators/validator.py#L348C1-L349C19): 
```python
def main():
    neuron().run()
```

The above code executes the following steps:

- [First, initializes a `neuron` object](https://github.com/opentensor/prompting/blob/6c493cbce0c621e28ded203d947ce47a9ae062ea/neurons/validators/validator.py#L84).
- [Then starts the `neuron.run()` method](https://github.com/opentensor/prompting/blob/6c493cbce0c621e28ded203d947ce47a9ae062ea/neurons/validators/validator.py#L349). The `run()` calls the [`run_forward()`](https://github.com/opentensor/prompting/blob/6c493cbce0c621e28ded203d947ce47a9ae062ea/neurons/validators/validator.py#L319), which then calls the [`forward()`](https://github.com/opentensor/prompting/blob/6c493cbce0c621e28ded203d947ce47a9ae062ea/prompting/validators/forward.py#L220) function. 

Before we look at the initialization part of the code, let's first summarize the run phase where we can see the key actions centered on a subnet validator in this incentive mechanism. 

## Subnet validator run summary

The [`forward()`](https://github.com/opentensor/prompting/blob/6c493cbce0c621e28ded203d947ce47a9ae062ea/prompting/validators/forward.py#L220) function performs the following steps (see the below diagram): 

<center id="bittensor-img">
<ThemedImage
alt="2-Text Prompting Walkthrough"
sources={{
    light: useBaseUrl('/img/docs/2-text-prompting-walkthrough.svg'),
    dark: useBaseUrl('/img/docs/dark-2-text-prompting-walkthrough.svg'),
  }}
/>
</center>

### 1. Prompt for summary 
- The subnet validator sends a body of text to a set of subnet miners with a prompt asking the subnet miners to **summarize** these sentences. 
- The subnet validator scores the responses containing summaries from the subnet miners. 
- The subnet validator then updates the weights of the subnet miners. These weights are not yet sent to the blockchain. This establishes the context for this entire run.
### 2. Prompt for question
- The subnet validator takes the best scoring summary text, selects a **separate** set of subnet miners and sends them a prompt asking them to craft a **question** based on the summary text. 
- The subnet validator then scores the question responses and locally updates the weights of these subnet miners. 
### 3. Prompt for answer 
- Next, the subnet validator takes the best scoring question from the above step.
- The subnet validator then selects a **separate** set of subnet miners, non-overlapping with any that were already prompted in the above steps, and prompts these subnet miners for **answers** to the question. 
- The subnet validator then scores the answer responses and locally updates the weights of these subnet miners.  

### 4. Repeat
- Repeat steps 2 and 3 multiple times.

This completes a single run, i.e., a single iteration of the [`forward()`](https://github.com/opentensor/prompting/blob/6c493cbce0c621e28ded203d947ce47a9ae062ea/prompting/validators/forward.py#L220) method. At the conclusion of the single run of `forward()`, the subnet validator sets weights on chain. 

:::tip 
Hence, in a single run, i.e., in a single iteration of the `forward()` method, the subnet validator prompts multiple times, each time selecting a separate set of subnet miners, prompting them, scoring their responses and updating their weights locally. 
:::

See also [Subnet validator run details](#subnet-validator-run-details).

## Initialization 

The following steps are executed in the intialization of the `neuron` object. Refer to the [code that initializes a `neuron` object](https://github.com/opentensor/prompting/blob/6c493cbce0c621e28ded203d947ce47a9ae062ea/neurons/validators/validator.py#L84).

### Create a subnet validator instance 
- A `neuron` object is created, using the configuration passed in the command line arguments list for the above `validator.py`. This is managed by the `bt.Config` method. Setting up the configuration includes the target hardware, getting the information of the validator name, wallet, the subtensor network (mainchain or testchain name) and so on. 
- When the `neuron` object is created, it means a subnet validator node instance is created with the subnet validator identity contained in the hotkey and the `netuid` of the subnet. 

### Use the specified hardware device 

This below [device initialization section](https://github.com/opentensor/prompting/blob/6c493cbce0c621e28ded203d947ce47a9ae062ea/neurons/validators/validator.py#L91C9-L94C43) makes sure that the subnet validator instance runs on the target hardware device specified:
  ```python
  # Init device.
      bt.logging.debug("loading", "device")
      self.device = torch.device(self.config.neuron.device)
      bt.logging.debug(str(self.device))
  ```

### Connect with the blockchain and initialize

This below [subtensor initialization section](https://github.com/opentensor/prompting/blob/6c493cbce0c621e28ded203d947ce47a9ae062ea/neurons/validators/validator.py#L98C9-L98C58) starts a connection from this subnet validator to the blockchain.
```python
self.subtensor = bt.subtensor(config=self.config)
```

### Establish the identity 

This below section makes sure that you, who is running this code, have a Bittensor wallet and it is registered. Otherwise, you are not allowed to participate on the mainchain. 

```python
self.wallet = bt.wallet(config=self.config)
```

### Initialize the metagraph

Next, we sync with the metagraph of the subnet. The metagraph is a neural network graph object. It contains comprehensive information about all the participants in the subnet. We sync with this subnet's metagraph because we must know all the subnet miners that are in this text prompting subnet. We pass the `netuid` to the `bt.metagraph` method, identifying which subnet we belong to, and download the subnet's metagraph into our local subtensor (i.e., local blockchain). 

In this below [initialize metagraph section](https://github.com/opentensor/prompting/blob/6c493cbce0c621e28ded203d947ce47a9ae062ea/neurons/validators/validator.py#L117) the Bittensor method `bt.metagraph` is called on the current `netuid`.

``` python
self.metagraph = bt.metagraph( 
    netuid=self.config.netuid, network=self.subtensor.network, sync=False
    )  # Make sure not to sync without passing subtensor
    self.metagraph.sync(subtensor=self.subtensor)  # Sync metagraph with subtensor.
```

### Initialize weights

Next, because you are a subnet validator, you will maintain a vector of weights for all the subnet miners. Each element of this vector is a weight, a floating point number, for a subnet miner. At the end of each step of the validation run (see [Subnet validator summary](#subnet-validator-summary)) you will update this vector as a moving average. So, first [start by setting these moving average weights to zero](https://github.com/opentensor/prompting/blob/6c493cbce0c621e28ded203d947ce47a9ae062ea/neurons/validators/validator.py#L126C9-L126C86). 
```python
self.moving_averaged_scores = torch.zeros((self.metagraph.n)).to(self.device)
```

### Establish the context for prompting 

We know from [Prompt for summary](#1-prompt-for-summary) that the very first thing a subnet validator does is to establish a common context with the subnet miners ("What's the topic we will be talking about?").

The subnet validator [extracts some random lines of text from Dataset](https://github.com/opentensor/prompting/blob/6c493cbce0c621e28ded203d947ce47a9ae062ea/neurons/validators/validator.py#L134).

```python
self.dataset = Dataset()
```

:::tip OpenWebText and RedPajama-Data
The [`Dataset` class](https://github.com/opentensor/prompting/blob/6c493cbce0c621e28ded203d947ce47a9ae062ea/prompting/validators/dataset.py#L25) downloads datasets from [OpenWebText](https://github.com/jcpeterson/openwebtext) and [RedPajama-Data](https://github.com/togethercomputer/RedPajama-Data).   
:::

### Gating model

The gating model is intended to be used in inference, when a subnet validator wants to pre-determine a set of subnet miners that are suitable for the inference task at hand. The [GatingModel](https://github.com/opentensor/prompting/blob/6c493cbce0c621e28ded203d947ce47a9ae062ea/prompting/validators/gating.py#L109) is a neural network model that is trained to identify such subnet miners. 

### Create axon server

Next, the subnet validator activates an `axon` server on itself. This is the first step in estabilishing the network connectivity between itself and all the subnet miners in this subnet. 

In [this block of code](https://github.com/opentensor/prompting/blob/6c493cbce0c621e28ded203d947ce47a9ae062ea/neurons/validators/validator.py#L154C9-L176C67), replicated below:

```python showLineNumbers
if not self.config.neuron.axon_off:
    bt.logging.debug("serving ip to chain...")
    try:
        axon = bt.axon(wallet=self.wallet, config=self.config)
        try:
            self.subtensor.serve_axon(
                netuid=self.config.netuid,
                axon=axon,
            )
        except Exception as e:
            bt.logging.error(f"Failed to serve Axon with exception: {e}")
            pass
        del axon
    except Exception as e:
        bt.logging.error(
            f"Failed to create Axon initialize with exception: {e}"
        )
        pass
else:
    bt.logging.debug("axon off, not serving ip to chain.")
```

When the subnet validator calls `axon = bt.axon(wallet=self.wallet, config=self.config)` (line 4 above) this means that an API server is spawned on this subnet validator node with the name `axon`. The `axon` server will now begin to serve on behalf of this subnet validator, i.e., this subnet validator is ready to receive queries from any client worldwide.

Next, when this subnet validator executes the subtensor command `subtensor.serve_axon(netuid=self.config.netuid, axon=axon)` (line 6 above), this subnet validator is:
  - Passing its `axon` information to the blockchain (subtensor) it is connected to (see [Connect with the blockchain and initialize](#connect-with-the-blockchain-and-initialize)).
  - Telling (`subtensor.serve_axon()`) its subtensor to "turn on this `axon` server on my behalf, open the IP:port information contained in this `axon` so the outside world can send requests to me."

### Create dendrite client 

The `axon` acts mainly as a server. However, during the process of prompting the subnet miners and receiving responses from them, this subnet validator needs a way to query these subnet miners. This is accomplished by the subnet validator by means of  [instantiating `dendrite` client on itself](https://github.com/opentensor/prompting/blob/6c493cbce0c621e28ded203d947ce47a9ae062ea/neurons/validators/validator.py#L183C13-L183C60). 
```python
self.dendrite = bt.dendrite(wallet=self.wallet)
```

### Initialize the reward model

Next, the [reward model is initialized](https://github.com/opentensor/prompting/blob/6c493cbce0c621e28ded203d947ce47a9ae062ea/neurons/validators/validator.py#L186). **The reward model determines the subnet incentive mechanism**. The reward functions used in the reward model determine how a response from a subnet miner must be processed to generate the reward for this subnet miner. See the below diagram that shows how a response from a subnet miner is processed to compute the reward. 

:::tip Journey from response to reward 
The below diagram shows the journey of a subnet miner's response to the reward for a **single prompt run**. As described in [Subnet validator run summary](#subnet-validator-run-summary), a full single run of `forward()` consists of 9 such prompt runs. Hence, only after 9 such response-to-reward journeys are completed will a single `forward()` run be complete.
:::

<center id="bittensor-img">
<ThemedImage
alt="2-Text Prompting Walkthrough"
sources={{
    light: useBaseUrl('/img/docs/3-text-prompting-walkthrough.svg'),
    dark: useBaseUrl('/img/docs/dark-3-text-prompting-walkthrough.svg'),
  }}
/>
</center>

A few key notes on this reward model section of the code:

- Reward model consists of three types of functions that process the response from the subnet miner:
  - **Reward functions**: The outputs of these functions are floating point numbers. The output of one function is added to the output of another function. A reward weight typically **does not entirely zero out** the corresponding reward function, only adjusts the contribution of the reward function.
  - **Masking functions**: The outputs of these functions are either 0 or 1. **These are non-negotiable functions.** These outputs are multiplied with the response. Hence, if a masking function outputs a 0, then it will zero out the response from the subnet miner. These masking functions reflect whether the subnet miner is blacklisted, or caught with a NSFW (not safe for work) element in the response, or similar such safeguards. 
  - **Penalty functions**: The outputs of these functions are floating point numbers. These outputs are multiplied with the response.
- The subnet validator must decide which reward functions to use and add that function name in the list. See below code section:
  ```python
  self.reward_weights = torch.tensor(
      [
          self.config.reward.dpo_weight,
          self.config.reward.rlhf_weight,
          self.config.reward.reciprocate_weight,
          self.config.reward.dahoas_weight,
          self.config.reward.prompt_based_weight,
      ],
      dtype=torch.float32,
    ).to(self.device)
  ``` 
- **Important**: Set the reward function weight for each reward function you have added to the list. Make sure that however many reward functions you added to the list, [their `reward_weights` must all sum to one](https://github.com/opentensor/prompting/blob/6c493cbce0c621e28ded203d947ce47a9ae062ea/neurons/validators/validator.py#L203).
- Similarly, [for penalty functions, see](https://github.com/opentensor/prompting/blob/6c493cbce0c621e28ded203d947ce47a9ae062ea/neurons/validators/validator.py#L279):
  ```python
  self.penalty_functions = [
      TaskValidationPenaltyModel(max_penalty=0.1),
      ContentMatchPenaltyModel(max_penalty=0.1),
      KeywordMatchPenaltyModel(max_penalty=1),
  ]
  ```

With this the initialization code section concludes. 

## Subnet validator run details

:::tip Before you proceed
See [Subnet validator run summary](#subnet-validator-run-summary) before you proceed.
:::

Recall that when the subnet validator starts off, the [`validator.py`](https://github.com/opentensor/prompting/blob/6c493cbce0c621e28ded203d947ce47a9ae062ea/neurons/validators/validator.py#L348C1-L349C19) Python code executes this below code:
```python
def main():
    neuron().run()
```

In the above code, first the `neuron()` function creates a `neuron` object, i.e., a subnet validator node instance, where the initialization happens. 

Next, the [`neuron().run()`](https://github.com/opentensor/prompting/blob/6c493cbce0c621e28ded203d947ce47a9ae062ea/neurons/validators/validator.py#L305) method is run, which is when the subnet validator begins the validation process. 

In the `run` mode, the following steps are executed:

- A [self check is performed](https://github.com/opentensor/prompting/blob/6c493cbce0c621e28ded203d947ce47a9ae062ea/neurons/validators/validator.py#L311) to ensure that the subnet validator is registered and possesss proper hotkeys.  
- The [`run_forward()`](https://github.com/opentensor/prompting/blob/6c493cbce0c621e28ded203d947ce47a9ae062ea/neurons/validators/validator.py#L319) section calls the [`forward` function](https://github.com/opentensor/prompting/blob/6c493cbce0c621e28ded203d947ce47a9ae062ea/prompting/validators/forward.py#L220).
- This `forward` function will then:
  - Start with subnet miner weights all initialized to zero.
  - Perform 9 distinct prompt runs as described in the [Subnet validator run summary](#subnet-validator-run-summary).
  - Then it will set the subnet miner weights on chain. See [`should_set_weights`](https://github.com/opentensor/prompting/blob/6c493cbce0c621e28ded203d947ce47a9ae062ea/neurons/validators/validator.py#L332).

### Common actions in all prompt runs

In all the multiple prompt runs that occur within a single run of the `forward()`, the following applies:

- Each prompt is sent to a distinct, non-overlapping, set of subnet miners. Hence, a given subnet miner is not prompted more than once within a given `forward()` run. 
[(Not used) Gating model](#gating-model)
- At the end of each prompt run the subnet validator computes the rewards for all the subnet miners that participated in this prompt run. The subnet validator maintains these rewards as a **reward vector**.
- The reward vectors between any two prompt runs within a given `forward()` run are updated on a **moving average basis**. See [this code section](https://github.com/opentensor/prompting/blob/6c493cbce0c621e28ded203d947ce47a9ae062ea/prompting/validators/forward.py#L181C5-L186C52):
  ```python
  # Update moving_averaged_scores with rewards produced by this step.
    # shape: [ metagraph.n ]
    alpha: float = self.config.neuron.moving_average_alpha
    self.moving_averaged_scores: torch.FloatTensor = alpha * scattered_rewards + (
        1 - alpha
    ) * self.moving_averaged_scores.to(self.device)
  ```
- Within a `forward()` run, any subsequent prompt run usually extracts [the best completion](https://github.com/opentensor/prompting/blob/6c493cbce0c621e28ded203d947ce47a9ae062ea/prompting/validators/forward.py#L158) from the immediate previous prompt run, within the same `forward()` run, and makes use of this best completion. 

### Select miners

Recall that in the initialization section the subnet validator has downloaded the metagraph of the subnet. See [Initialize the metagraph](#initialize-the-metagraph). 

This metagraph contains the `uid`s of all the active subnet miners in the subnet. [A random list of `uid`s is extracted from this metagraph](https://github.com/opentensor/prompting/blob/6c493cbce0c621e28ded203d947ce47a9ae062ea/prompting/validators/forward.py#L87C5-L88C71). See the below code section:
```python
  # Get the list of uids to query for this step.
   uids = get_random_uids(self, k=k, exclude=exclude).to(self.device)
   axons = [self.metagraph.axons[uid] for uid in uids]
```

### Gather the axons of the subnet miners

To prompt a subnet miner, the subnet validator must know the `axon` information of the subnet miner to send prompt query to. The above line `axons = [self.metagraph.axons[uid] for uid in uids]` pulls together the `axon` server information of all the above-selected `uid`s into a list object `axons`. 

### Create synapse object

Next, a Synapse object `synapse` is created for constructing the prompt. 
```python
synapse = prompting.protocol.Prompting(roles=["user"], messages=[prompt])
```
The above `Prompting` class is a subclass of the Synapse class. See the [code section in `protocol.py`](https://github.com/opentensor/prompting/blob/6c493cbce0c621e28ded203d947ce47a9ae062ea/prompting/protocol.py#L27) that begins with the following line:
```python
class Prompting(bt.Synapse):
```
This Synapse object `synapse` will serve as the vehicle for exchanging information between the subnet validator and subnet miners. When the subnet miners receive this `synapse` object, they will update the `completion` field of the object with their responses (prompt completions).

### Send the prompt

Now it is time to send out the prompt to the selected subnet miners. Recall from the initialization section [Create dendrite client](#create-dendrite-client) that the subnet validator created the `dendrite` client instance on itself. In the below code section the [subnet validator broadcasts the `synapse` object](https://github.com/opentensor/prompting/blob/6c493cbce0c621e28ded203d947ce47a9ae062ea/prompting/validators/forward.py#L92C5-L97C6) to the `axons` of the selected subnet miners:
```python
# Make calls to the network with the prompt.
responses: List[bt.Synapse] = await self.dendrite(
    axons=axons,
    synapse=synapse,
    timeout=timeout,
)
```
The subnet validator waits until the `timeout` has elapsed before processing the `responses` list. 

### Score the responses

The text prompt completions from the subnet miners are [first cleaned up](https://github.com/opentensor/prompting/blob/6c493cbce0c621e28ded203d947ce47a9ae062ea/prompting/validators/forward.py#L100). See the code section that begins with the below line:
```python
for response in responses:
    # remove leading and trailing periods
    completion = response.completion.strip(".")
```
Next, the responses are processed using the reward model described in [Initialize the reward model](#initialize-the-reward-model).

### Send subsequent prompts

As described in [Subnet validator run summary](#subnet-validator-run-summary), a series of 9 prompts are sent, and the subnet miner responses are scored according to the reward model. 
:::tip Common actions in all prompt runs
Also see [Common actions in all prompt runs](#common-actions-in-all-prompt-runs).
:::

### Send updated weights to subtensor

When the 9 prompt runs are completed within this single `forward()` run, [the code returns back to the `validator.py`](https://github.com/opentensor/prompting/blob/6c493cbce0c621e28ded203d947ce47a9ae062ea/neurons/validators/validator.py#L324). See below:

```python showLineNumbers
# Run multiple forwards.
async def run_forward():
    coroutines = [
        forward(self)
        for _ in range(self.config.neuron.num_concurrent_forwards)
    ]
    await asyncio.gather(*coroutines)
    self.loop.run_until_complete(run_forward())
    # Resync the network state
    if should_checkpoint(self):
        checkpoint(self)
    # Set the weights on chain.
    if should_set_weights(self):
        set_weights(self)
        save_state(self)
    # Rollover wandb to a new run.
    if should_reinit_wandb(self):
        reinit_wandb(self)
```

The `set_weights()` function on line 14 above calls the `self.subtensor.set_weights()` function that transmits the subnet miner weights to the subtensor (blockchain). [See the below code section in the `weights.py`](https://github.com/opentensor/prompting/blob/6c493cbce0c621e28ded203d947ce47a9ae062ea/prompting/validators/weights.py#L61C5-L69C6):
```python
# Set the weights on chain via our subtensor connection.
self.subtensor.set_weights(
    wallet=self.wallet,
    netuid=self.config.netuid,
    uids=processed_weight_uids,
    weights=processed_weights,
    wait_for_finalization=False,
    version_key=validators.__spec_version__,
)
```