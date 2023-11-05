- A neuron is the core. It is the node in the subnet graph. 
- When you call metagraph on a subnet, it will give you the complete information on all the nodes (neurons) in the subnet. You can get every piece of information on every node from this metagraph object. 
- A neuron is just a node. It can be either a subnet miner or a subnet validator. 
- 

The `text-prompting/neurons` directory contains definitions of subnet miners and subnet validators. 

When you execute,

```bash
CUDA_VISIBLE_DEVICES=1 pm2 start ~/tutorial/text-prompting/neurons/validators/validator.py \
    --name validator1 --interpreter ~/miniconda3/envs/val/bin/python -- \
    --wallet.name validator --netuid 8 --wallet.hotkey vali --subtensor.network test \
    --logging.debug --neuron.reward_path ~/.bittensor/test-subnet1-validators \
    --axon.port 8899 --neuron.followup_sample_size 2 --neuron.answer_sample_size 2
```

the `validator.py` Python code is executed in the following way:

1. The `neuron().run()` method in the `main()` is executed first. 
2. And the main function, what that does is it creates an object of a class called neuron. And then it just calls this run method. And that's it.
3. <The text prompting subnet protocol is designed in such a way that first the validator is activated. True?>
4. <Document the meaning of all the input arguments>. The above parameters are parsed using the imported functions in line 32. Is the `axon.port` the port through which this validator will communicate with others?
5. When the `neuron` object is created, it creates using the above configuration. It includes the target hardware, getting the information of the validator name, wallet, the subtensor network (mainchain or testchain name) and so on. 
6. When the `neuron` object is created, it means the subnet validator node instance is created on the target hardware specified, with the subnet validator identity contained in the hotkey and the `netuid` of the subnet.

So then this is what happens basically we call a neuron. This is just making sure that configurations are makes sense. This makes sure that it's running on a GPU if it needs to. 

Also, this just make sure that it has a chain connection. So that's the sub tensor object. 

So on line 98, when the `self.subtensor = bt.subtensor(config=self.config)` is run, this creates a network connection to either local or test or finney, whatever was specified in the `self.config` or the input arguments for the `python validatory.py` command shown above on line 10. 

Add the diagram from my book. The `local` value is valid only assuming that a subtensor chain is running locally. Here, the connection is between the subnet validator with the netuid and going into the network (either local or test or finney) at the IP:port address. A node (neuron) is usually associated with its subtensor. This subtensor can be local, or test or finney. Whatever it may be, the object `self.subtensor` contains the information on the node's current association to the subtensor (i.e., blockchain). 

This makes sure that the owner whoever's running this code has a wallet that is well defined, and also that it's registered. Otherwise, you're not allowed to participate on Main net with this repo. 

Okay, so all of this is kind of housekeeping. And this is common to every subnet. In fact, I expect most of the subnets will have copy pasted this block of code, because it's all very generic. 

===========================================

DEBUG
-----
1. But we also first call `bt.logging.debug` to make sure that whatever log and error messages coming from various object instances are captured by the bt.logging class object and displayed on the terminal for the developer.
2. This `bt.logging.debug()` is called at various places in the code, wherever you want log messages for debugging.

CALL METAGRAPH
--------------
1. Next, during the same intialization, what we then do is initialze the metagraph of the subnet.
2. This means we just make sure that we know who is on the network because assuming we're on Main net right now, you want to just basically take a snapshot, see who the miners are. So you can see self the meta graph contains. I know you said that you weren't super confident on what that is. But you can think of that as like, this is the table where you can get further information about every everyone that's on the graph right now. Okay, so it's like if the players list is the lineup for the match everyone that's present in the metagraph.

When you go 
``` python
self.metagraph = bt.metagraph( 
        netuid=self.config.netuid, network=self.subtensor.network, sync=False
        )  # Make sure not to sync without passing subtensor
        self.metagraph.sync(subtensor=self.subtensor)  # Sync metagraph with subtensor.
```
on line 49 above the subnet validator is creating a metagraph object with the `netuid` parameter but do not perform any state sync yet. It doesn't matter whether you supplied `network` value as local or test or finney. Don't sync yet. 

On line 54 above it says `self.metagraph.sync(subtensor=self.subtensor)  # Sync metagraph with subtensor` which means this: 
First, some background: A node (neuron) is usually associated with its subtensor. This subtensor can be local, or test or finney. Whatever it may be, the object `self.subtensor` contains the information on the node's current association to the subtensor (i.e., blockchain). The above says fetch the blocks, i.e., fetch the metagraph, from the subtensor that is currently connected to this subnet validator and store this metagraph locally on the subnet validator node.

[QUESTION: Still, what is the difference between lines 117 and 120 in the validator.py? Clarify this.]

The graph represent like a TensorFlow graph or a pie torch graph representation of the all the nodes is that similar and

Exactly every literally every black spot in your diagram of a graph has additional attributes, you know, like Facebook is a big graph, where every node in that graph has user information. So it has all the details, all of the pictures of that user on Facebook and so on that node, which is the which is going to be a person in Facebook or even an x it could be a group or other things, but it has attributes are totally. So the metal graph is basically a bunch of extra attributes so you can know who it who is participating in present on the graph.

Unknown Speaker  2:16  
right now. Is it just a JSON representation?

Speaker 1  2:21  
I'm not sure what the raw form is. But when we use the Python API here, this will give you actually has a bunch of lists like objects internally, like the 1d tensors. And they're glorified lists. 
- So you have a list of steaks where the eighth element so the steak in the eighth element in that list is the state of the of the entity UID defined by that index. So let's just say you have a state vector s zero is equal to the state of whoever is currently at slot zero. Perfect. And there's a bunch of other attributes as well as state there's also things that measure their earnings, like their incentive and their dividends is things like the trust of the entity. There's about let's say, roughly 10 attributes that are used as well as identification, which is going to be like a hotkey and a coldkey, which is kind of like the you know, the identification of terms.
  


METAGRAPH LOADING AND INITIALIZNG IS DONE
-----------------------------------------
So now what we've done is we've just made sure that we have a monograph and it's up to date. So again, this is generic housekeeping, because we're going to refer to a particular actually a meta graph very often, which is the hotkeys. So that is the live identification of everyone that's on the network. Right now. We actually explicitly assign that to its own attributes. But again, this is all just bundled as information about everyone on the graph right now. Perfect.
Next, because you are a validator, you will maintain a vector of weights for all the miners. You will keep updating this vector as a moving average at the end of each step of the validation. So, first start by setting these moving average weights to zero. 

SET MOVING AVERAGE SCORE TO ZERO TO START WITH
----------------------------------------------

Now the last thing here is we have moving average scores This is approximately the weights that are going to be set to everyone on the graph. So we initialize it to zero. We started off of course, without having any scores for anyone, and they accumulate and they evolve over time with each step of validation. So this is the container (`self.moving_averaged_scores` on line 122), which eventually is used to set the weights which drives the emissions.

Until now all the above is for any subnet, mostly. So, when you write your incentive mechanism, think about these as a boilerplate code that you may want to use.

NOW THE BELOW IS SUBNET 1 SPECIFIC
----------------------------------

SUBNET VALIDATOR ESTABLISHES THE CONTEXT FIRST
----------------------------------------------
For the text prompting subnet, the goal is for the subnet validators to prompt the subnet miners and evaluate the quality of the responses from the subnet miners. To accomplish this, we need the following:
1. Both the sv and sm must first establish the subject matter between them. This is the context. We need to have a context which we refer to so that's like some subject matter which the validator and miners are going to engage in dialogue about.
2. The subnet validator extracts this context from a dataset. You don't need to know everything about this dataset. All you need to know is it just download something from hugging face. Line 126. Also see the comment on line 125.
3. I don't even think we download it. We actually just stream it one row at a time at random. Okay, so you can think about this as just this. Just choose at the topic that the conversation is going to be about for a little while. So that's what this does. And then we have some testing capabilities, which just mocks which means it's like a dummy placeholder. 
   
SELECTION OF SUBNET MINERS (GATING MODEL)
----------------------------------------

1. gating is actually not really used. But part of the design of a subnet is it's called a mixture of experts model and a mixture of experts model should recruit who shouldn't route requests to the most qualified individuals that can serve that request. And that is achieved by means of a gating model or another thing that can be called as a routing model. So that's what that says, Okay? And then we the number of UU IDs is just the maximum number of people that you're allowed to route to. Line 136. This is the maximum number of uids of the subnet miners, i.e., the max number of subnet miners the validator can recruit as a mixture of experts. <who sets this number for the subnet validator?>
   
2. And then what we do is, depending on whether you're in test mode, which is this one (line 139), while you're in live mode (line 141), which is this one, we actually now that we know how many entities that you're allowed to route to. We're just going to build our gating model around this. 
3. And what this line 141 actually does, is whenever you ask a question, it turns the natural language question into a long numerical vector, which is supposed to encapsulate the meaning of the semantics of your question. And then with that vector, that numerical vector that is produced from your query, and then basically, this gating model is trained to pretty much predict a probability for every member of the network, how likely they are to do well, given that particular question that was asked, which is how routing works at a high level. Okay. (see line 28 that shows where this is imported from). This is another neural network model that is trained at this point of the execution, using the hardware specified.
4. 

Speaker 2  6:28  
I see even before sending any query out to the miners it does this evaluation.

Well, this gating model, this mixture of experts model, isn't really used 
Speaker 1  6:34  
Well, actually this is why this is kind of dead right now. To be honest, this is all the use when an API client actually sends requests. When we're when we're training. We actually want to be completely agnostic as to who is good at what we want to give everyone an opportunity to, you know, change what they're good at and bad and to evolve and to grow. So we actually don't preferentially route queries at all during validation. 

We intentionally select miners at random in batches of 50 because otherwise you get stuck and it's like self reinforcing cycle where you only ask this guy this kind of question. And then it's like, it's not really where you want the network to go. So everyone has equal opportunity during validation to to do well or badly on a given question, and the gating model is updated every time a step happens to reflect the performance of all the miners. 

So the only kind of gating model is actually used is when an API client says "hey, I want to ask subnet 1 this question, and I want you to send it to 10 people". The gate model is responsible for selecting the 10 most qualified miners to serve your request. Okay, let's move on. 

SUBNET VALIDATOR OPENS UP ITS AXON TO THE QUERY FROM CLIENTS
------------------------------------------------------------

So now, the subnet validator is ready with the context. 

Until now the subnet validator has established itself within the subnet. Nothing more.

You can call FastAPI to set up a REST API server on your node, set up routes on your node, and give you an easy way to configure these routes on the server. Next, you can design your REST APIs to be served by these routes on this server. For example use FastAPI to spawn a REST API server and query this server to obtain responses from this server. 

Next, line 153, the subnet validator calls `axon = bt.axon(wallet=self.wallet, config=self.config)` this means an API server is spawned on the subnet validator node with the name `axon`. The `self.wallet` and `self.config` arguments for the `bt.axon()` method means that an API server with the name `axon` is now available on the subnet validator and the `axon` will now begin to serve on behalf of the subnet validator, i.e., the subnet validator has now turned on its API server.

Now its axon is turned on. This means this subnet validator is ready to receive queries from any client worldwide. Line 150.

So now we have this axon off so if not axon off, meaning if axon is turned on, then this is actually what exposes the validator to the outside world, and allows clients anywhere in the world to send queries through the network. So this is this close is only true if axon is not switched off. So the axon is the interface with the outside world.

Next, see line 156. When a subnet validator calls `subtensor` object
and then you can see here, it just has a subtensor command (`subtensor.serve_axon(netuid=self.config.netuid, axon=axon)`). 
-First, you need an active Axon in your `self` to connect to your peers. 
-Second, a subnet validator always only connects to subnet miners. A subnet validator does not connect to another subnet validator. Similarly a subnet miner only connects to a subnet validator, and does not connect to other subnet miners. 

So it basically tells the chain, open this port and make sure that whoever requests relay to me so I can ask the miners on the behalf of this validator. In other words, the `subtensor.serve_axon(netuid=self.config.netuid, axon=axon)` is invoking a `serve_axon()` method on its subtensor. The `subtensor.serve_axon()` takes `axon` input, which is the API server with its specific IP:port address, and makes this address available, i.e., starts accepting requests from outside world (`serve_axon()`). 

The way to think about this is this. When we go `self.subtensor.serve_axon()` we are first referring to the chain connected to this subnet validator. This could be mainchain, testchain or local. Let's say mainchain. So now we are saying to the mainchain to `serve_axon`. So the mainchain acts as "eyes and ears" to the outside world for this subnet validator. This `subtensor.serve_axon()` is the main conduit from the outside world into this subnet validator. 

Think of this `axon` object simply as IP:port address. This address comes to exist when `axon=bt.axon()` is executed. Then the `serve_axon()` opens it up to the outside world. When a request comes in to `axon` this request is relayed to the subnet validator. The entire lines 150 to 172 are this. As simple as that. 

=============
QUESTION: Do I have to be running a local chain for the above `subtensor()` command to work? 
==============


Okay, I see Yeah. Okay. So and then what we have done here is we have the dendrite this is actually what is going to create the network. Again, it has a test version, but you don't have to worry about that. 

INITIALIZE REWARD MODEL
=======================

And lastly, I'm just gonna come down here because it's a really big init function, actually, and I don't want to burn through too much time on just this one function. This just takes care of initializing a bunch of things that it needs for validation, things like 

- Reward functions, which measure the quality of response from the miner. 
- reward weights, the weights of those functions, which is how much they contribute to the final score, 
- blacklist, which is like, well, you know, what a blacklist is. So this just makes sure that we can explicitly exclude things. 
- Masking functions are just another component of our reward landscape. Whereas functions are an additive way to add some, the masking functions or a binary on off switch. So if you are flagged with respect to you can see this as a list with two items in it. It has a well this is actually mock mode. So all of this is just a test mode. So this is light loads on here. self dot rewards. 

Reward functions
----------------

When a response comes in from the miner, the validator puts this response through multiple validation mechanisms in order to determine the weight for the miner in this pass. 

So what you do is, you add to the list of `self.reward_functions` all the reward functions you want to use. Simplest case is if you use only one reward function: You evaluate the response using just this one reward function and out comes the weight for the miner. 
- if you use two reward functions, then you must decide how much value you want to give to the output of each reward function. If you believe both the reward functions are equally valuable, then you give them 0.5 weight factor each. 
- if you use all five reward functions, then you must assign a weight to each of this reward function so that the total weight factor sums to 1. 

Yes, the weight of all models is actually something that you could set on the command line with flags, you can see here as five elements. So the total reward is the weight of some of these five different models and you can set the relative weight of them. It turns out that people typically don't really change these numbers. Because if you change these numbers a lot, then you will not agree with the validators based on what's good or bad because now you have a different scale. You have a different function that calculates the weights for the miners and that's not a good thing. in any case this is just some error checking, making sure that the weights normalized to one because the weight of some one of these weight terms should sum to one. 

Now reward functions. So this is our incentive landscape now. What you see is it has something called a direct preference reward model. We call that DPO for sure. We have another one model open Asst. We have a reciprocal reward model, thou house model and prompt reward model. And they will have as you already saw, they'll have a weight associated. So you'll see like we add this into the list, if its weight is greater than zero. We add this one to the list. If it's weight, it's going to zero so you can think as long as all those weights are greater than zero. You end up with all of these objects in your list of reward functions. 

And then every time you get completions from a miner, what you'll do is you'll score that completion using each of these independently one at a time. And then you'll take a weighted sum for the scores that they output and that's pretty much the final score. 

You are making sure the reward function weight factors sum up to one because the denominator in the weighted sum of the scores must equal to one. 

You say you that's the validator doing that? Yeah, this is all this is all what the validators point of view. Miners do not have reward functions. They just at a base level, a miner just has a language model that responds to queries. That's it. 

And then it gives them more error checking and now we have let's go down here we have masking functions. So these are all these are all reward models output 01. And if if you get zero, or if you get a one from any of these, then you're flagged, you're out so you get exactly zero as a reward. So this is like very punitive. 

So blacklist, again, like if we explicitly say to minors, you're not allowed to include this completion. You're not allowed to say this, or your answer could contain this. And if we find that they still use it, then they're blacklisted. Ignore what 

task validator is more about following instructions. I won't go more into it than that, but it just makes sure that miners are following instructions 

and relevance makes sure that it's on topic. So it takes the completion and what it effectively does at a high level is it say we asked another language model on the validator side, we say to the relevance model, which is this one right here, relevance model we say given this prompt, is this response relevant, and it will give us a floating point value, let's just say between zero and one and we just threshold that we say okay, well, if relevance was greater than naught point five, then you're good to go. And so that's what relevance does 

diversity is making sure that not all of the miners say exactly the same thing, because then we just lose the parallelization of the network. Actually one miners to say something slightly different. So we benefit from the fact that we have multiple of them. Okay.

Speaker 2  12:29  
Yeah, in any subnet. validators don't talk to each other and miners also don't talk to each other.

Speaker 1  12:36  
Yes, yes. That that is the design. It's called a bipartite graph, which means only all of the nodes in one layer are connected to all of the nodes in the next layer, like two layers of neural network.

Speaker 2  12:47  
It's similar to a neural net model. So you have circles don't talk to each other, right? It's only one layer to next layer. Yeah.

Speaker 1  12:55  
Yep. So the last thing here, not safe for work. Just make sure that it's appropriate. And so if you fail any of these tests during the course of validation as a minor, then you don't get any rewards for that specific step. Okay. Cool. And now we're pretty much out of this function. 

Line 282 or so. This is some more housekeeping. This just takes care of how often we're going to log things to the chain. And this is logging things to weights and biases, which is like a data repository and an analytics platform. 

And then yeah, now we've created our own object, we've instantiated everything. This can take quite a lot of time because some of these are like multibillion parameter models. So it's pretty heavyweight requires 10s of gigabytes of the RAM, heavy, so let's say 3030 seconds or a minute or the first time you run it, it has to download all of those weights from hooking face as well, which can be one of those models can be 10 gigabytes, 20 gigabytes, so it can take a long time to create this object the first time. 

CONCLUSION OF INITIALIZATION
----------------------------

Next, get into RUN mode.
========================

After that, you load it into memory, get everything onto the GPU, and now you can now you call run. So if you remember, we create a neuron and then whatever this thing returns, we just click run on that. So hit this function. So now this is the main loop. This is basically the entire validation process. So let's see what happens. 

VALIDATION PROCESS
==================

First of all, we check our we check that we are still right. Okay, so the validator is running this code, which is the self part, we checke if our wallet is still in the hotkeys, meaning it's still a live member of the network. 

If it's not, then well, we have to exit this loop would say hey, you're not even registered. You can't query the network. I'm sorry. Okay. Right. 

And now what we do is let's just do this part right here, which is the meat of the whole validation process. Lines 309 to 314. Forget about this async stuff. We basically just call this function run forward, and we call inside of there. What happens is, we just call forward. This is actually just set to one right now. So this is just a very elaborate way of doing something very simple. 

We basically just broadcast , we run a forward call over and over again. 

So that would look something like I don't know if I could go into edit mode here. But all of all of that looks really fancy. But I believe all it's actually doing is this right? It's just going it just goes a function which is forward. 

Forward is the thing that contains 
- querying the network, 
- gathering the responses 
- and also scoring the responses. 
- Not setting the weights. So again,
- pulls something out of the data set the context 
- set the topic 
- form the task that you're going to ask the miners to do. 
- Send them the task, 
- wait for the responses, 
- score the responses is all happening inside of forward. Okay. 

So this is we're gonna go a bit into this function in a lot more detail. 

Resync the network state (line 310)
==================================

Remember we're actually training our gating model every time we do a forward step. Recall that the subnet validator first sends the query to the gating model (even before this query is sent to the subnet miners). This gating model produces a numerical vector from this query, and then basically, this gating model is trained to pretty much predict a probability for every member of the network, how likely they are to do well, given that particular question that was asked, which is how routing works at a high level. So this is the first step, i.e., actually retuning that gating model so it knows based on the miners that are alive right now, which miners are the most suitable candidates to receive requests of this type, this type this type. So that's what we call checkpoint (line 312). 

We just make sure that whatever the current state is of the gating model or the routing model, we just make sure that we save it, so you can return to the state later. 

SAVE THE MINER WEIGHTS ONCHAIN
==============================

So we also set the weights on the chain, which is, of course very important. This is where the validator basically submits its votes on like, Oh, these are the rankings of the miners. This is the best guy this is the worst guy, blah, blah, blah. This is where we communicate with the chain, very important (line 316, `set_weights(self)`). 

We also save state again. And then this is just making sure that we basically when we're pushing the validator data that is generating during its runtime, we make sure that we we don't create one file that's too big. So this just takes care of rolling over to a new file. Not important. Line 319.

KEEP ON VALIDATING INDEFINITELY
===============================

And then you can see this whole thing is just "while True" So it goes on forever. This means subnet validator keeps going on forever. And even the only thing that can really break you out of here is if you have an exception. So if an exception happens, then you come out of the try block. And what basically happens is your code exits. Okay. 

An example of something that causes the validator spontaneously stopped working is well if you're not registered anymore, if you're not registered anymore, we raise an exception and this exception is a breakout. So we'll end up say, hey, we can't do training anymore (line 301, 302 and 326, 327). We're done. But there's lots of other things that can cause cause an exception as well, most most of it wouldn't happen inside of forward. Maybe unexpected data types get are obtained or processed stuff like that.

All right. So that is the main flow of how validation works. 

WHAT HAPPENS IN THE FORWARD RUN
===============================

So now we go into this run, we're gonna go to forward. Okay, so let's see where forward is in prompting, and it is `forward.py`. And in here, this is where we go. And this is the thing that we call over and over again. 

Detailed subnet mechanism loop 
------------------------------

1) So first of all, we pull out a unique context or subject from our data set. This is just going to be a, let's say 30 sentences of some context. So it could be a discussion about current affairs. It could be a discussion about football player, a scientist, it could be a deep physics calculation pulled out of a textbook doesn't really matter instead of a string of text. Line 207.
2) Then what we do is we this is our first step, we create our augment  prompt. So what we want to happen is, we want the miners to take this long context that can be 1000s of words, or hundreds, and we want the miners to just distill it with a summarization. So just give me a summary of five sentences. So that's what we basically do here this (line 212). The result of this is an object `aug_prompt`, which is a string. And this string is going to say something like we can even look in here, augment prompt. Okay, so this is what the prompt exactly will be. Line 377, `def augment_prompt(base_text: str) -> str:` 

`base_text` is what was pulled out of the data set, augment request template. This is just going to be this thing right here. So we basically say given 50 sentences then we drop this in here, summarize the preceding context in random level, so that's going to be between four and eight. So summarize the preceding context in four to eight sentences will sample a number from four to eight at random. Do not try to create questions or answers via summarization. So that is the task that is formed when we call augment prompt. So this thing right here, (line 212 of `forward.py`) once again, it's going to be like 50 sentences. And then it's going to be say it's gonna have two new (additional) lines and they will say "summarize the preceding context in six sentences. Do not try and answer or ask any questions in your prompt." Cool. 
3) Now what we do is we call it run step. Line 218. `run_step` is now the full round trip of a forward out to the miners  and their response and our scoring of these responses. Okay, so we call run step, we pass it the prompt, which is what's gonna go to the miners and it's this augmentation prompt. And we even label it as the augmentation it could have called it summarize, to be honest, it's more of a interpretable name, but whatever. And then we have some configuration, which is just like how long are you prepared to wait which is time and also, `k` is the number of miners that we're going to ask simultaneously. So right now this is set to 50. 
4) Okay, so let's go into run step here. Line 72 of `forward.py`. Okay, so now we have a prompt. We know how many miners we want to ask that prompt to, we know how long we're going to wait. And then you don't have to worry about anything else in there. So what do we do? Well, we want to ask, `k` is 50, we want to ask 50 Miners at random without any preference, to respond to our query. So we call get random UU IDs with k equal to k, meaning this is going to give us back 50 integers, basically unique integers. 
5) Then we're going to grab the axons for those integers, which is now coming out of the meta graph. It's like saying, Okay, now give me now that I've selected these 50 indices in the graph, tell me who the people are behind those indices. And that's what those axons are, right? It's like, oh, this is the hotkey and this is the coldkey and this is the IP I can reach them on. 

Axon is the outward facing component of the neuron. So it's how you plug into a neuron. That's what the axon is. And again, we call any node on the network is a neuron equivalently. If it's a miner, or a validator, they're all neurons and they all have axons. The difference is only validator can connect to the axons of the miner which is this bipartite graph that I was talking about, and only external people outside of the network can plug into the axons of the validators. So it's actually kind of like a three layer neural network. Layer zero is the outside world. The outside world connects to the validator axons, and then the validator neurons are the only ones that can connect to the miner neurons through the miner axons.

So the axons are the receivers. The dendrites are the senders. Okay? So the neuron itself, you can just like the neuron is sorry, yeah, the neuron in this case is the entire object. It's the entire all encompassing object and it has two things. It has a thing that sends signals out and it has things that receive signals. That's it, right. 

=====
Axon receives.
Dendrite sends.
=====

So line 91 of `forward.py`, these are the axons of the miners. You are just getting a listing of them into `axons` object. The intention is that you will soon send something to the miner axons. 

Line 92 is `synapse`. Refer to line 27 of the `protocol.py`, where `class Prompting (bt.Synapse):` definition begins. A Synapse is a data object. The Synapse class inherits from the `BaseModel` of the Pydantic data validation library. You use a Synapse data object to exchange information between neurons. 

NOTE: When you think about the protocol aspect of your incentive mechanism, use the Synapse data object to exchange messages between neurons. 

So, when you go, 
`synapse = prompting.protocol.Prompting(roles=["user"], messages=[prompt])` on line 90 of `foward.py` you are creating Synapse data object called Prompting. This Prompting class is defined with three fields. The fields `roles` and `messages` are set during the initialization of this Prompting data object and they cannot be changed after that. The third field, `completion` is a mutable field. When subnet miners and the subnet validator exchange these Synapse data objects, this `completion` field is where the information is written. 

6) Connect to all the Axons of the miners with our dendrite and broadcast our `synapse` object to them. 

On line 95, when you go:

```python
    responses: List[bt.Synapse] = await self.dendrite(
        axons=axons,
        synapse=synapse,
        timeout=timeout,
    )
```
we are connecting to all the miners that are in the list `axon` by attaching our own `dendrite` to each of the miners, and passing the `synapse` data object to each of them, with the provision that this connection event happens within the `timeout` period. We put our `prompt` in the `messages` field of the `synapse` object. See line 80 of the `forward.py` where we composed the `prompt` object.

The connection will be between our dendrite as the validator and all of the axons that we're carrying in our `axon` list. The `responses` is another list of `Synapse` objects. Each synapse object in this `responses` list will contain our dendrite, the miner 1, synapse object specific between our dendrite and miner 1, and the second item in the list will be our dendrite, the miner 2, synapse object between our dendrite and miner 2 and so on. So each pairing is unique and each synapse object is a representation of the connection of this pairing. 

On line 78, we pass a `Task` object. We used this `Task` object method to compose our prompt (line 80).

When a neuron wants to communicate to another neuron, the sender neuron sends a Synapse object to the receiving neuron. The receiving neuron does something to this Synapse object and returns it back to the sending neuron. The Synapse object contains what fields are allowed to be changed by which party, and so on. 

EVALUATE THE RESPONSE FROM THE MINERS
=====================================

7) Line 100. Here we look at the responses from the subnet miners. See from above that `responses` is a List of Synapse objects. When the `timeout` is expired, the Synapse objects in this `responses` list will contain the responses from the subnet miners in the form of the mutated `completion` field of each synapse object. So we loop through the list to see what are all the acceptable responses.  

COMPUTE THE REWARDS FOR THE MINERS
==================================

8) Line 121 of `forward.py`. Remember that `self.reward_functions` and `self.reward_weights` are are initializated as lists in the init section of `validator.py`. Lines 189 and 190.




Speaker 1  24:52  
Yes. Okay. So now what we did here was the event. This took the amount of time that this line took was defined by timeout, because that is literally how long this this is gonna last, that we use this as to 10 seconds. So now we've selected the miners exposed via their axons. We're connecting to all of them through our dendrite, which returns a bunch of events or whatever interaction events and interaction outcomes, call it whatever you want. We've waited 10 seconds. And here you can see that the synapse is the thing that the  interaction event is where we put our problems, which is the thing that we want the miners to deal with. And then what we do is we make sure that that goes to all of those Axons, which are specified here. And we're prepared to wait this long. That's great. 

Now what happens is we've got our responses, and some of them may have been successful, and some of them may be failed. So now we're going to look over them intuitively. 

I'm gonna go to the next part here, which is given these responses, you want to calculate the rewards. So let's look at this loop. Line 118, 121. 

So what we do here is we loop over the reward functions, which is makes a lot of sense. It's a sequential list. So you basically take those responses, you push them into that particular reward model, and it gives you one number for the axon that was inside of that object. Okay, so we query 50 miners, which means that we get 50 responses. Not all of them are necessarily successful, but we get 50 responses nonetheless. This is per run. 

And then that results in 50 floating point values of the rewards from the perspective of each of our award models. Okay, perfect. Perfect. 

So, so what happens is we initiate our rewards object, and the size of this is of course the size of the length of the responses, which in our case is 50 (line 118).

So now we basically just have an empty list or actually a list with zeros for all of those responses. Now, what we do is one reward function at a time. We just call this applying function. And all this does is it says given this prompt, and this this all of these 50 responses, can you just give me the list of 50 scores that you get from the perspective of this reward model and now we're just going to add it, we're going to just do a way to turn in a sum, we're going to just add weight I multiplied by whatever the rewards from this model once again, this object is of length 50. So we basically do that make sense? Yeah, yeah. Great. And we're just gonna, as you can see, as we accumulate forgetting about the extra details here, we're just going to basically compute a weighted sum inside of this for loop right now. And then we do the same thing here in Mustin functions. The only difference is while these are floating point values, typically between well these are between zero and one, when we add a corresponding weight term to all of them. These are now binaries, so there's zeros or ones, and we multiply by them. Okay, so that means for a

Speaker 2  27:45  
wouldn't, wouldn't it not make sense to do the multiplication earlier? Because you will save the cost of compute the

Speaker 1  27:52  
answer? Yes, we raised that issue as well. And I forgot about it. You're absolutely right. Yes. If you're gonna, if you know you're gonna get a zero max value, then you shouldn't worry about even calculating the rewards. The problem is we're not doing it per entity. We're doing it in batches, which needs a little bit trickier. So you can think here like, reward I normalized is equal to whatever.

Speaker 2  28:15  
Yeah, okay. Unless you bet correspondingly, the same way the masking functions also. That would not work, right. Yeah. Yeah. Yeah,

Speaker 1  28:25  
exactly. The main problem here is even if even if half of the elements are 99% of the elements are zeros, we're actually still doing it in a way that's actually parallelized. We run all all of these as a single batch to all of the models inside of the reward stack. So it's still it's basically the same. Okay, so going back into the source code, now we've computed where we were here, we've computed the weighted sum that's great. And now we have all of these zeros or ones that we're going to multiply at the end, which is ultimately going to give us our final reward. That is the lion's share of what's happening unless you need feel the need to dig into what the reward functions themselves are. I don't think you need that level of detail just that there's an arbitrary number of them. Each of them outputs a value between zero and one, which is a measure of quality. Usually, they basically always work in batches. So 50 responses go in 50 will always come out at a time because that's just a nice way to use neural networks. We accumulate our weighted sum over and over again, then we apply our binary penalties over and over again. 

Great. The final result is we have a vector or a float tensor of length 50. And now it has values between zero and one. Okay. 

COMPUTATION OF REWARDS IS COMPLETE
----------------------------------

NEXT, COMPUTE THE GATING LOSS
-----------------------------

So now what we can also do is we also compute the gating loss. The main reason for this is we just trained okay to model. So maybe the gating model would say, Oh, I think that the best UU IDs for this query are UU IDs 123. And then we calculate the rewards for all of the miners that were involved in that step and we say, oh, no, no, no, no, you IDs, one, two, and three, were actually not the best at this challenge. They actually did pretty bad. So then we basically this backwards function is a way of sending feedback into the data model. So it updates its weights so that the gating model weights capture what these rewards told it in terms of which miners were the best of the job, because now we actually can quantify it was the best.

So that goes back into here, gating scores, line 138. You can see here, what we basically do here is the gating scores are we select the UI IDs that were queried. So we say we're only going to update these weights, which would correspond to these miners which participated in the step. And this is the feedback I can give you. This is how well they did. Now go away, take that and update your weights so that next time you're better at predicting how, how the miners will do. Great. 

Yeah, and now I think the rest of this is pretty much just housekeeping. We select the best out of all of them. 

NOW extract the actual completions from the winning miner
---------------------------------------------------------

Line 143.

So the responses are the things that came came back from all of those axons, or from all the synapses, which are the events, and then we pull out the text completion. So this is the actual string attribute inside of a response, which contains the text response to the prompt. So we grab those and now it's a list of strings. As I just said, we can also say, Okay, well, let's just make sure we know what status messages they had. They should all give 202 which is like a thumbs up, but maybe not. Let's track that. Let's log that because that's useful for analytics to understand how available over those miners are in the network and how often they're responding to a successfully. 

Similarly, we have status codes, sorry. So this is actually a list of strings because that's their status messages. So something went wrong internally or I couldn't serve your requests because you're not registered, whatever that string might say. These are the status codes. These are the status codes. So these are more like HTTP codes. They're just like, basically 200s are good effectively. 

And then we just choose the completion that was the highest scored given all of those previous steps now that we've quantified the quality of all of the responses from all of the miners given that prompt we can actually just choose the best one. And that's what we did here. Line 152.

So now we have the best one, and then a little bit more housekeeping. We figure out how long it took all of the miners to respond. And that is this thing here called the process time. Line 156. So we basically we loop over the responses and we look inside of its internal attribute called process time and we log that to so we can understand how long it takes him to respond. 

Now we update the moving average of the weight vector
----------------------------------------------------

And then we effectively update our moving average. This is the thing that ultimately drives the weights that are set on the chain and how many how much incentive the miners receive. So of course, as you would have expected, these rewards are now basically used to iteratively update the contents of this running average, which is like a smooth version. So you don't just have big spikes when you do well. And then big drops and you do bad but it's actually something that averages the behavior of each UID or each miner over time. That is well captured inside of here. Moving Average score. Line 169.

Finally, this is just logging, line 174. This is all logging now we just make sure that we have visibility on what the network's producing so we can analyze it so we can track exploits, so on and so forth. And then we return (line 202). everything else is just a log event. We send the event log to Weights and Biases site. Okay? Perfect. 

So that was a pretty rapid fire tour of this. So that was the ultimate step. And you think, Oh no, we're not even fruit as forward function yet. Yes, we are. We're done. 

So in each run the subnet validator evaluates miners on the following tasks:

1. Summerize some text. Given some sentences, summarize these sentences. Send me the response. This is called the augment prompt. This is also called augment event. Here you asked miners with uids 0 to 49. Miner weights are updated. Now exclude these 50 miners for the rest of this run.
2. We take the best completion we identified in step 1, then we ask a separate set of 50 miners another question: Ask a question based on this summary. Get the response, update the miner weights. Now exclude these 50 miners for the rest of this run. 
3. We take the best question from step 2, and we ask a separate set of 50 miners to answer the questiohn. Get the response, update the miner weights. Now exclude these 50 miners for the rest of this run. 
4. Repeat 2 and 3.
5. Repeat 2 and 3.
6. Repeat 2 and 3. You are done. This completes a single run. 

So in a single run, you are prompting 9 times. Each time to a separate set of miners. 
7. Then you set weights on chain. Line 332.

If you remember we just pull this forward function over and over again, which is basically the training process or the validated process. Yeah. And the main thing I want to draw your attention to here as well as a couple of details that change all we're really doing is just calling run step: Three times we call it here, and then we call it here and here in a loop. 

And you can think of this as the structure of the dialogue that's validated with the miners. We given them a long context and we say, give me a summary. 

And then in this part, we say okay, given the summary, now ask a useful question about that summary. 

Now in this one, it's answered the question that was selected as the best questions would be this step. 

So validating on text prompting right now the way it works as a summarization task, followed by a question generation test, followed by a question answering task, and then we go to the top of this loop, followed by another question tasks, and then answer that question, and then ask another question and answer that question. And this typically happens four times. So we have one of these, and then net debt, debt debt, and then we're done. And then sorry, so you're measuring a

Speaker 2  35:58  
minor on how well you summarize and how well you ask a question and how well you answer the question. Yes, okay.

Speaker 1  36:08  
The problem here is the structure is too predictable. The fact that it's such a formula, it's like Okay, everybody, let's summarize now ask the question, what's the question? And so on. The problem with that is it's too predictable, which is very susceptible to exploitation. 

If you think about what a validator should be doing is it should be making the miners as useful as possible for an end user. That is the mission objective of of a validator. Which means that the validation task, the thing that I'm showing you right here, should completely mirror a human interaction with the network. 

This is hands down the most complicated subnet out there. Okay. Okay.

Speaker 2  37:21  
I only have one question. At what point and where do these updated weight vectors sent to the human consensus? I want to see where the sub tensor where the connection with the blockchain happens. Okay. Great. Just pointed me to meet Yes, absolutely. So again, the neuron is just the definition literally, both of these files just have a single class in them called neuron. So, here we have our neuron object, as I showed you before, inside of the run method down here, right. We have this thing right here, set weights. Okay. This means that we basically run forward as you know, now that contains nine steps inside of it, augment follow, up, follow up, answer, follow up, answer, follow up answer. Now, before it is complete. We proceed down here, we see if when the checkpoint that depends on `should_set_weights`. 

We can take a look at what `should_set_weights` does, that's important. So it's got their code so this is what subset should set weights does. It just makes sure that first of all, the user hasn't disabled weight setting. Line 30 of `validators/weights.py`.

And then it just makes sure this is just a matter of like, has it been long enough that it's time to do it again. That's all this means. Okay? And if that's true, then let's go into the last file. It should set weights evaluates true, then we then we evaluate set weights. So let's go into set weights. And this is where we communicate. Are you ready? Are you ready? Are you ready? Sub tensor dot set weights. Perfect. Yeah,


Speaker 1  39:08  
But I mean, the, the name of the spokesman says it all. So in fact, I think that your diagrams and your explanations should conceptually be just based on this right? Here, because this is the most generic framework possible, right? Yeah, just we just continuously do this without bounds without limit. What we do is we do some one or more forwards and backwards passes to and from the miners. We measure how good they are. We update the internal moving average. scores for all the miners on the network. Then, if necessary, we save our models so that we can resume later on and we set the weights if it's time. That's it, conceptually, what's happening. So the whole validator brain is this thing. Run forward. And that is that is the incentive mechanism. Yeah, yeah. Perfect. This is great.

Speaker 2  39:55  
I think this you've covered a ton of ground here. And this is very helpful. I'm going to once you send me the link to the recording whenever you know it gives you a Google gives you

