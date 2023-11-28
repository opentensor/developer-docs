
# Glossary

### a-e

#### axon
Servers receive requests from other peers in the network via the [dendrite](#dendrite).


#### backward requests
The second stage of the transaction in which the [validator](#validators) sends feedback (in the form of gradients or reward signal) to the [miner](#miners).


#### bittensor protocol
The over the wire encoding of requests and responses subscribed to by [miners](#miners), [validators](#validators) and `clients` of the Bittensor network.


#### bonds
The moving average of the weights `B = alpha * W + (1 - alpha) * B`. Historical assessment of weights maintained on chain used for computing [dividends](#dividends).


#### blockchain
A technology for building decentralized append only databases. Blockchains increase in size by appending blocks containing many [`extrinsics`](#extrinsics) which are unique function calls on the underlying state.

#### blocks
Fundemental incremnets of state on [subtensor](#subtensor) Bittensors [blockchain](#blockchain). New block are created and added to the chain every 12 seconds.


#### chain security
Connecting to the [Polkadot](#polkadot) infrastructure will offer greater network security. [Polkadot](#polkadot) takes the concept of validation security away from the chain so that the Polkadot relay chain is now responsible for security. Read more about [Polkadot security.](https://wiki.polkadot.network/docs/learn-security)

#### coldkey
The part of the miner that contains cold storage. Remains on device.

#### consensus
The thresholded trust score via a shifted sigmoid activation. Miners with >50% [trust](#trust) have consensus values close to 1 and close to 0 otherwise.
```python dark
subnet = bittensor.metagraph(1)
subnet.C
```

#### dendrite
Servers send requests to other peers in the network via the [axon](#axon).

#### dividends
Proportion of emission passed to validators based on their share of [bonds](#bonds) held in a miner based on the matrix `B`. `D = 0.5 * I * CB` where `CB` represents the normalized column sum of the bonds matrix ('temporal trust').

#### emission
The absolute number of tokens, usually measured in [RAO](#rao), a [miner](#miners) recieves every [epoch](#epoch).


#### embeddings
Also referred to as representations, embeddings are a way of expressing information (i.e the comprehensible meaning of a word) as a very high-dimensional vector.


#### epoch
The number of [blocks](#blocks) that progress between moments when [yuma consensus`](#yuma-consensus) is run and newly minted [`TAO`](#tao) are [emitted](#emission) into a [subnetwork](#subnetworks)

#### epoch emission
The amount of [TAO](#tao) emitted into a [subnetwork](#subnetworks) on an [epoch](#epoch).

#### extrinsics
Functions called on a [blockchain](#blockchain) which append state and usually signed by a [wallet](#wallet)

### F-k

#### forward requests
The first stage of the transaction in which a [validator](#validators) sends a task a [miner](#miners) and the the [miner](#miners) sends task outputs back to the [validator](#validators)

#### hotkey
The part of the miner that contains "hot storage". It is loaded into the network and gives ability to set weights (for Validators).

#### incentive
The proportion of [emission](#emission) a [miner](#miners)  recieves every [epoch](#epoch) across other [miners](#miners) within the subnetwork.

### L-p

#### logits
The probability of a word in NTP (next token prediction) or MTP (masked token prediction).

#### masked token prediction
Predicting an answer given a context before and after the place of prediction (i.e. predicting the next word in a sentence).

#### metagraph
A Python torch object that produces a view into the network. This tool is used internally by [miners](#miners)  and also for network analysis.

#### miners
Computers which service requests described by the [bittensor protocol](#bittensor-protocol) via an Axon endpoint. [miners](#miners) attempt to service the requests sent by [validators](#validators) to maximize their [incentive](#incentive) within a [subnetwork](#subnetworks)

#### miner/neuron/peer/node
Used interchangeably to refer to a participant in the [subnetwork.](#subnetworks)

#### mountain dataset
Bittensor uses a 1.5 Terrabyte corpus dataset for training known as the Mountain.

#### nakamoto
Bittensor current main blockchain network post-March 2023.

#### nakamoto
Bittensor's legacy network pre-March 2023

#### next token prediction
Predicting an answer given a context before the place of prediction (i.e. predicting the next word in a sentence).

#### nobunaga
Bittensor's legacy test-network pre-March 2023

#### polkadot
Polkadot is a blockchain platform and cryptocurrency. The native cryptocurrency for the Polkadot blockchain is the DOT. It is designed to allow blockchains to exchange messages and perform transactions with each other without a trusted third-party.

### Q-u

#### ranks
The column sum of the weight matrix [W](#weights) representing each miner's stake weighted rating according to the validators withing a [subnetwork](#subnetworks).
```python dark
subnet = bittensor.metagraph(1)
subnet.R
```

#### RAO
The smallest denomination of [`TAO`](#tao). `1 TAO` is eqvuivalent to 1,000,000,000 (10^9 or 1 billion) [`RAO`](#rao).

#### shapely value
A measure of individuals' contributions in a cooperative game.

#### sigmoid function
The sigmoid produces a threshold-like scaling that rewards connected peers and punishes the non-trusted.

#### stake
Equivalent to the amount of [TAO](#tao) attached to the [miners](#miners) [hotkey](#hotkey). For [validators](#validators), more [stake](#stake) translates to [rankings](#ranks) being worth more in [yuma consensus](#yuma-consensus).

#### subnetworks
Self-contained economic markets incentivizing access to different forms of machine intelligence access, for instance; subnetwork 1 produces completions from text prompts and subnetwork 2 incentivizes the production of informationally dense embeddings from text. These economic domains are called "subnetworks".

#### substrate
An API build by [Polkadot](#polkadot) allowing the fast development of modular upgradable [blockchains](#blockchain).

#### subtensor
Bittensor's [blockchain](#blockchain) build on [Polkadot](#pol) blockchain infrastructure [substrate](#substrate)

#### TAO
Bittensor unit of intelligence and value. TAO [inflation](#incentive) occurs continuously with block production.
The digital token that functions as currency in the network. Tao uses the same tokenomics as Bitcoin with a 4 year halving cycle and a max supply of 21 millions tokens.

#### Triumvirate
The Triumvirate has three seats which are filled by Opentensor Foundation members, and is the party responsible for creating and executing proposals. Triumvirate members are not elected, but they have no voting power on the proposals they create. The [Senate](#senate) is the party responsible for whether or not the proposal should be included into the network.

#### trust
The average number of non-zero weights in the weight matrix [W](#weights) in a [subnetwork](#subnetworks)
```python dark
subnet = bittensor.metagraph(1)
subnet.T
```

#### UIDs
The set of positions available in each [subnetwork](#subnetworks). UIDs increment like indices from 0 to the size of the network. i.e. 0 to 1023 for a 1024 sized subnetwork. UIDs can be owned by a wallet who has registered into the position within side each [subnetwork](#subnetworks).

### V-z

**validators
Computers holds [TAO](#tao) who verify the abilities of [miners](#miners)  to perform the machine learning tasks required of their subnetwork. Validators run the continous process of validation in the classical machine learning train-test-validation process.

#### wallet
The logical pairing of one [coldkey](#coldkey) with 1 or more [hotkeys](#hotkey) for the separation of security layers within side Bittensor.

#### weights
Vector lists of weights `w_i = [w_ij]` which are trained by [validators](#validators) while verifying the outputs of [miners](#miners). The weights from all validators on a [subnetwork](#subnetworks) aggregate into a single matrix [W](#weights) over which [Yuma Consensus](#yuma-consensus) is run.
```python dark
subnet = bittensor.metagraph(1)
subnet.W
```
#### yuma consensus
The incentive mechanism detailed in the Bittensor Whitepaper around which [emission](#emission) is distributed.