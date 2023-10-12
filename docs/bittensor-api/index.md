
# API Reference


### Bt.subtensor 

The `Subtensor` is utilized for managing interactions with the subtensor chain. It serves as an interface to communicate with "Finney", Bittensor's main blockchain network, or others, enabling operations like querying and transacting.


<Accordion title="_examples">

```python dark
# Creating a default chain connection to remote finney instance.
sub = bt.subtensor()

# Parsing --subtensor.network and --subtensor.chain_endpoint from the command line
sub = bt.subtensor( config = bt.subtensor.config() )

# Connecting subtensor's default local entrypoint "ws://127.0.0.1:9944"
sub = bt.subtensor( network = 'local' )

# Connecting to a specific endpoint
sub = bt.subtensor( chain_endpoint = "ws://127.0.0.1:9944" )
```

</Accordion>

<Accordion title="_methods">



#### nominate
```python
nominate(self, wallet: 'bittensor.Wallet', wait_for_finalization: bool = False, wait_for_inclusion: bool = True) -> bool
```
Designates the wallet's hotkey as a delegate.


#### delegate
```python
delegate(self, wallet: 'bittensor.wallet', delegate_ss58: Optional[str] = None, amount: Union[Balance, float] = None, wait_for_inclusion: bool = True, wait_for_finalization: bool = False, prompt: bool = False) -> bool
```
Adds a specific amount of stake to a delegate using a wallet.


#### undelegate
```python
undelegate(self, wallet: 'bittensor.wallet', delegate_ss58: Optional[str] = None, amount: Union[Balance, float] = None, wait_for_inclusion: bool = True, wait_for_finalization: bool = False, prompt: bool = False) -> bool
```
Removes a specific amount of stake from a delegate using a wallet.


#### set_weights
```python
set_weights(self, wallet: 'bittensor.wallet', netuid: int, uids: Union[torch.LongTensor, list], weights: Union[torch.FloatTensor, list], version_key: int = bittensor.__version_as_int__, wait_for_inclusion:bool = False, wait_for_finalization:bool = False, prompt:bool = False) -> bool
```
Sets weights for a given netuid.


#### register
```python
register(self, wallet: 'bittensor.Wallet', netuid: int, wait_for_inclusion: bool = False, wait_for_finalization: bool = True, prompt: bool = False, max_allowed_attempts: int = 3, output_in_place: bool = True, cuda: bool = False, dev_id: Union[List[int], int] = 0, TPB: int = 256, num_processes: Optional[int] = None, update_interval: Optional[int] = None, log_verbose: bool = False) -> bool
```
Registers the wallet to the chain.


#### burned_register
```python
burned_register(self, wallet: 'bittensor.Wallet', netuid: int, wait_for_inclusion: bool = False, wait_for_finalization: bool = True, prompt: bool = False) -> bool
```
Registers the wallet to the chain by recycling TAO.


#### transfer
```python
transfer(self, wallet: 'bittensor.wallet', dest: str, amount: Union[Balance, float], wait_for_inclusion: bool = True, wait_for_finalization: bool = False, prompt: bool = False) -> bool
```
Transfers funds from the wallet to a destination public key address.


#### get_existential_deposit
```python
get_existential_deposit(self, block: Optional[int] = None) -> Optional[Balance]
```
Returns the existential deposit for the chain.


#### serve
```python
serve(self, wallet: 'bittensor.wallet', ip: str, port: int, protocol: int, netuid: int, placeholder1: int = 0, placeholder2: int = 0, wait_for_inclusion: bool = False, wait_for_finalization = True, prompt: bool = False) -> bool
```
Starts serving on a specific IP, port and protocol for a given netuid.


#### serve_axon
```python
serve_axon(self, netuid: int, axon: 'bittensor.Axon', use_upnpc: bool = False, wait_for_inclusion: bool = False, wait_for_finalization: bool = True, prompt: bool

 = False) -> bool
```
Starts serving an Axon for a given netuid.


#### serve_prometheus
```python
serve_prometheus(self, wallet: 'bittensor.wallet', port: int, netuid: int, wait_for_inclusion: bool = False, wait_for_finalization: bool = True) -> bool
```
Starts serving a Prometheus server on a specific port for a given netuid.


#### add_stake
```python
add_stake(self, wallet: 'bittensor.wallet', hotkey_ss58: Optional[str] = None, amount: Union[Balance, float] = None, wait_for_inclusion: bool = True, wait_for_finalization: bool = False, prompt: bool = False) -> bool
```
Adds a specific amount of stake to a hotkey uid.


#### add_stake_multiple
```python
add_stake_multiple(self, wallet: 'bittensor.wallet', hotkey_ss58s: List[str], amounts: List[Union[Balance, float]] = None, wait_for_inclusion: bool = True, wait_for_finalization: bool = False, prompt: bool = False) -> bool
```
Adds stake to each hotkey in the list from a common coldkey.


#### unstake
```python
unstake(self, wallet: 'bittensor.wallet', hotkey_ss58: Optional[str] = None, amount: Union[Balance, float] = None, wait_for_inclusion:bool = True, wait_for_finalization:bool = False, prompt: bool = False) -> bool
```
Removes stake into the wallet coldkey from the specified hotkey uid.


#### unstake_multiple
```python
unstake_multiple(self, wallet: 'bittensor.wallet', hotkey_ss58s: List[str], amounts: List[Union[Balance, float]] = None, wait_for_inclusion: bool = True, wait_for_finalization: bool = False, prompt: bool = False) -> bool
```
Removes stake from each hotkey in the list to a common coldkey.












<Accordion title="(hyperparameters)">

#### rho
```python
rho (self, netuid: int, block: Optional[int] = None ) -> Optional[int]
```
Returns the network Rho hyperparameter if the network exists. Accepts an integer `netuid` representing the unique network ID and an optional integer `block` representing the block number.


#### kappa
```python
kappa (self, netuid: int, block: Optional[int] = None ) -> Optional[float]
```
Returns the network Kappa hyperparameter if the network exists. Inputs are `netuid` and an optional `block` number.


#### difficulty
```python
difficulty (self, netuid: int, block: Optional[int] = None ) -> Optional[int]
```
Returns the network Difficulty hyperparameter if the network exists. Inputs are `netuid` and an optional `block` number.


#### burn
```python
burn (self, netuid: int, block: Optional[int] = None ) -> Optional[bittensor.Balance]
```
Returns the network Burn hyperparameter if the network exists. Inputs are `netuid` and an optional `block` number.


#### immunity_period
```python
immunity_period (self, netuid: int, block: Optional[int] = None ) -> Optional[int]
```
Returns the network ImmunityPeriod hyperparameter if the network exists. Inputs are `netuid` and an optional `block` number.


#### validator_batch_size
```python
validator_batch_size (self, netuid: int, block: Optional[int] = None ) -> Optional[int]
```
Returns the network ValidatorBatchSize hyperparameter if the network exists. Inputs are `netuid` and an optional `block` number.


#### validator_prune_len
```python
validator_prune_len (self, netuid: int, block: Optional[int] = None ) -> int
```
Returns the network ValidatorPruneLen hyperparameter if the network exists. Inputs are `netuid` and an optional `block` number.

#### validator_logits_divergence
```python
validator_logits_divergence (self, netuid: int, block: Optional[int] = None ) -> Optional[float]
```
Returns the network ValidatorLogitsDivergence hyperparameter if the network exists. Inputs are `netuid` and an optional `block` number.


#### validator_sequence_length
```python
validator_sequence_length (self, netuid: int, block: Optional[int] = None ) -> Optional[int]
```
Returns the network ValidatorSequenceLength hyperparameter if the network exists. Inputs are `netuid` and an optional `block` number.


#### validator_epochs_per_reset
```python
validator_epochs_per_reset (self, netuid: int, block: Optional[int] = None ) -> Optional[int]
```
Returns the network ValidatorEpochsPerReset hyperparameter if the network exists. Inputs are `netuid` and an optional `block` number.


#### validator_epoch_length
```python
validator_epoch_length (self, netuid: int, block: Optional[int] = None ) -> Optional[int]
```
Returns the network ValidatorEpochLen hyperparameter if the network exists. Inputs are `netuid` and an optional `block` number.


#### validator_exclude_quantile
```python
validator_exclude_quantile (self, netuid: int, block: Optional[int] = None ) -> Optional[float]
```
Returns the network ValidatorExcludeQuantile hyperparameter if the network exists. Inputs are `netuid` and an optional `block` number.


#### max_allowed_validators
```python
max_allowed_validators(self, netuid: int, block: Optional[int] = None) -> Optional[int]
```
Returns the network MaxAllowedValidators hyperparameter if the network exists. Inputs are `netuid` and an optional `block` number.


#### min_allowed_weights
```python
min_allowed_weights (self, netuid: int, block: Optional[int] = None ) -> Optional[int]
```
Returns the network MinAllowedWeights hyperparameter if the network exists. Inputs are `netuid` and an optional `block` number.


#### max_weight_limit
```python
max_weight_limit (self, netuid: int, block: Optional[int] = None ) -> Optional[float]
```
Returns the network MaxWeightsLimit hyperparameter if the network exists. Inputs are `netuid` and an optional `block` number.


#### scaling_law_power
```python
scaling_law_power (self, netuid: int, block: Optional[int] = None ) -> Optional[float]
```
Returns the network ScalingLawPower hyperparameter if the network exists. Inputs are `netuid` and an optional `block` number.


#### synergy_scaling_law_power
```python
synergy_scaling_law_power (self, netuid: int, block: Optional[int] = None ) -> Optional[float]
```
Returns the network SynergyScalingLawPower hyperparameter if the network exists. Inputs are `netuid` and an optional `block` number.


#### subnetwork_n
```python
subnetwork_n (self, netuid: int, block: Optional[int] = None ) -> int
```
Returns the network SubnetworkN hyperparameter if the network exists. Inputs are `netuid` and an optional `block` number.


#### max_n
```python
max_n (self, netuid: int, block: Optional[int] = None ) -> Optional[int]
```
Returns the network MaxAllowedUids hyperparameter if the network exists. Inputs are `netuid` and an optional `block` number.


#### blocks_since_epoch
```python
blocks_since_epoch (self, netuid: int, block: Optional[int] = None) -> int
```
Returns the network BlocksSinceLastStep hyperparameter if the network exists. Inputs are `netuid` and an optional `block` number.


#### tempo
```python
tempo (self, netuid: int, block: Optional[int] = None) -> int
```
Returns the network Tempo hyperparameter if the network exists. Inputs are `netuid` and an optional `block` number.

</Accordion>












<Accordion title="_account functions">

#### get_total_stake_for_hotkey
```python
get_total_stake_for_hotkey( self, ss58_address: str, block: Optional[int] = None ) -> Optional['bittensor.Balance']
```
Returns the total stake held on a hotkey including delegated. Inputs are `ss58_address` and an optional `block` number.


#### get_total_stake_for_coldkey
```python
get_total_stake_for_coldkey( self, ss58_address: str, block: Optional[int] = None ) -> Optional['bittensor.Balance']
```
Returns the total stake held on a coldkey across all hotkeys including delegates. Inputs are `ss58_address` and an optional `block` number.


#### get_stake_for_coldkey_and_hotkey
```python
get_stake_for_coldkey_and_hotkey( self, hotkey_ss58: str, coldkey_ss58: str, block: Optional[int] = None ) -> Optional['bittensor.Balance']
```
Returns the stake under a coldkey - hotkey pairing. Inputs are `hotkey_ss58`, `coldkey_ss58` and an optional `block` number.



#### get_stake
```python
get_stake( self, hotkey_ss58: str, block: Optional[int] = None ) -> List[Tuple[str,'bittensor.Balance']]
```
Returns a list of stake tuples (coldkey, balance) for each delegating coldkey including the owner. Inputs are `hotkey_ss58` and an optional `block` number.


#### does_hotkey_exist
```python
does_hotkey_exist( self, hotkey_ss58: str, block: Optional[int] = None ) -> bool
```
Returns true if the hotkey is known by the chain and there are accounts. Inputs are `hotkey_ss58` and an optional `block` number.


#### get_hotkey_owner
```python
get_hotkey_owner( self, hotkey_ss58: str, block: Optional[int] = None ) -> Optional[str]
```
Returns the coldkey owner of the passed hotkey if it exists. Inputs are `hotkey_ss58` and an optional `block` number.


#### get_axon_info
```python
get_axon_info( self, hotkey_ss58: str, block: Optional[int] = None ) -> Optional[axon_info]
```
Returns the axon information for the specified hotkey account if it exists. Inputs are `hotkey_ss58` and an optional `block` number.


#### get_prometheus_info
```python
get_prometheus_info( self, hotkey_ss58: str, block: Optional[int] = None ) -> Optional[axon_info]
```
Returns the prometheus information for the specified hotkey account if it exists. Inputs are `hotkey_ss58` and an optional `block` number.


</Accordion>














<Accordion title="_global state">


#### block
```python
@property
def block (self) -> int:
```
Property that returns the current chain block.


#### total_issuance
```python
total_issuance (self, block: Optional[int] = None ) -> 'bittensor.Balance'
```
Returns the total issuance of tokens as of a specified block. If no block is provided, the default is the current block.


#### total_stake
```python
total_stake (self,block: Optional[int] = None ) -> 'bittensor.Balance'
```
Returns the total amount of stake as of a specified block. If no block is provided, the default is the current block.


#### serving_rate_limit
```python
serving_rate_limit (self, block: Optional[int] = None ) -> Optional[int]
```
Returns the serving rate limit as of a specified block. If no block is provided, the default is the current block.


#### tx_rate_limit
```python
tx_rate_limit (self, block: Optional[int] = None ) -> Optional[int]
```
Returns the transaction rate limit as of a specified block. If no block is provided, the default is the current block.



</Accordion>
















<Accordion title="_subnetwork stake">

#### subnet_exists
```python
subnet_exists( self, netuid: int, block: Optional[int] = None ) -> bool
```
Checks if a subnet with the given `netuid` exists as of a specified block. If no block is provided, the default is the current block.


#### get_all_subnet_netuids
```python
get_all_subnet_netuids( self, block: Optional[int] = None ) -> List[int]
```
Returns a list of `netuid`s of all subnets as of a specified block. If no block is provided, the default is the current block.


#### get_total_subnets
```python
get_total_subnets( self, block: Optional[int] = None ) -> int
```
Returns the total number of subnets as of a specified block. If no block is provided, the default is the current block.


#### get_subnet_modality
```python
get_subnet_modality( self, netuid: int, block: Optional[int] = None ) -> Optional[int]
```
Returns the modality of a subnet with a specified `netuid` as of a given block. If no block is provided, the default is the current block.


#### get_subnet_connection_requirement
```python
get_subnet_connection_requirement( self, netuid_0: int, netuid_1: int, block: Optional[int] = None) -> Optional[int]
```
Returns the connection requirement between two subnets with specified `netuid`s as of a given block. If no block is provided, the default is the current block.


#### get_emission_value_by_subnet
```python
get_emission_value_by_subnet( self, netuid: int, block: Optional[int] = None ) -> Optional[float]
```
Returns the emission value of a subnet with the given `netuid` as of a specified block. If no block is provided, the default is the current block.


#### get_subnet_connection_requirements
```python
get_subnet_connection_requirements( self, netuid: int, block: Optional[int] = None) -> Dict[str, int]
```
Returns a dictionary of the connection requirements of a subnet with the given `netuid` as of a specified block. If no block is provided, the default is the current block.


#### get_subnets
```python
get_subnets( self, block: Optional[int] = None ) -> List[int]
```
Returns a list of all subnets as of a specified block. If no block is provided, the default is the current block.


#### get_all_subnets_info
```python
get_all_subnets_info( self, block: Optional[int] = None ) -> List[SubnetInfo]
```
Returns a list of information about all subnets as of a specified block. If no block is provided, the default is the current block.


#### get_subnet_info
```python
get_subnet_info( self, netuid: int, block: Optional[int] = None ) -> Optional[SubnetInfo]
```
Returns information about a subnet with a given `netuid` as of a specified block. If no block is provided, the default is the current block.


</Accordion>

<Accordion title="_delegation">



#### is_hotkey_delegate
```python
is_hotkey_delegate( self, hotkey_ss58: str ) -> bool
```
Checks if a delegate with the specified hotkey exists.


#### get_delegate_take
```python
get_delegate_take( self, hotkey_ss58: str, block: Optional[int] = None ) -> Optional[float]
```
Returns the 'take' (portion of the reward a delegate receives from staking) of a delegate specified by a hotkey as of a given block. If no block is provided, the default is the current block.


#### get_nominators_for_hotkey
```python
get_nominators_for_hotkey( self, hotkey_ss58: str, block: Optional[int] = None ) -> List[Tuple[str, Balance]]
```
Returns a list of tuples, each containing a nominator's address and balance for the delegate specified by a hotkey as of a given block. If no block is provided, the default is the current block.


#### get_delegate_by_hotkey
```python
get_delegate_by_hotkey( self, hotkey_ss58: str, block: Optional[int] = None ) -> Optional[DelegateInfo]
```
Returns information about a delegate specified by a hotkey as of a given block. If no block is provided, the default is the current block.


#### get_delegates
```python
get_delegates( self, block: Optional[int] = None ) -> List[DelegateInfo]
```
Returns a list of all delegates as of a specified block. If no block is provided, the default is the current block.


#### get_delegated
```python
get_delegated( self, coldkey_ss58: str, block: Optional[int] = None ) -> List[Tuple[DelegateInfo, Balance]]
```
Returns a list of delegates that a given coldkey is staked to, as of a specified block. If no block is provided, the default is the current block. Each item in the list is a tuple containing the delegate's information and the staked balance.



</Accordion>














<Accordion title="_neuron information per subnet">

#### is_hotkey_registered_any
```python
is_hotkey_registered_any( self, hotkey_ss58: str, block: Optional[int] = None) -> bool
```
Returns True if the hotkey is registered on any subnet. If no block is specified, the current block is used.


#### is_hotkey_registered_on_subnet
```python
is_hotkey_registered_on_subnet( self, hotkey_ss58: str, netuid: int, block: Optional[int] = None) -> bool
```
Returns True if the hotkey is registered on a specified subnet. If no block is specified, the current block is used.


#### is_hotkey_registered
```python
is_hotkey_registered( self, hotkey_ss58: str, netuid: int, block: Optional[int] = None) -> bool
```
Returns True if the hotkey is registered on a specified subnet. If no block is specified, the current block is used.


#### get_uid_for_hotkey_on_subnet
```python
get_uid_for_hotkey_on_subnet( self, hotkey_ss58: str, netuid: int, block: Optional[int] = None) -> int
```
Returns the user id (uid) for the hotkey on a specified subnet. If no block is specified, the current block is used.


#### get_all_uids_for_hotkey
```python
get_all_uids_for_hotkey( self, hotkey_ss58: str, block: Optional[int] = None) -> List[int]
```
Returns a list of all user ids (uids) for the hotkey. If no block is specified, the current block is used.


#### get_netuids_for_hotkey
```python
get_netuids_for_hotkey( self, hotkey_ss58: str, block: Optional[int] = None) -> List[int]
```
Returns a list of all network user ids (netuids) for the hotkey. If no block is specified, the current block is used.


#### get_neuron_for_pubkey_and_subnet
```python
get_neuron_for_pubkey_and_subnet( self, hotkey_ss58: str, netuid: int, block: Optional[int] = None ) -> Optional[NeuronInfo]
```
Returns the neuron information for the hotkey on a specified subnet. If no block is specified, the current block is used.


#### get_all_neurons_for_pubkey
```python
get_all_neurons_for_pubkey( self, hotkey_ss58: str, block: Optional[int] = None ) -> List[NeuronInfo]
```
Returns a list of all neurons for the hotkey. If no block is specified, the current block is used.


#### neuron_has_validator_permit
```python
neuron_has_validator_permit( self, uid: int, netuid: int, block: Optional[int] = None ) -> Optional[bool]
```
Returns True if the neuron with the given uid has a validator permit for the specified subnet. If no block is specified, the current block is used.


#### neuron_for_wallet
```python
neuron_for_wallet( self, wallet: 'bittensor.Wallet', netuid = int, block: Optional[int] = None ) -> Optional[NeuronInfo]
```
Returns the neuron information for the given wallet on a specified subnet. If no block is specified, the current block is used.

#### neuron_for_uid
```python
neuron_for_uid( self, uid: int, netuid: int, block: Optional[int] = None ) -> Optional[NeuronInfo]
```
Returns the neuron metadata associated with a given user id (uid) and network user id (netuid) at a specified block, or None if it does not exist.


#### neurons
```python
neurons(self, netuid: int, block: Optional[int] = None ) -> List[NeuronInfo]
```
Returns a list of neurons from the chain for a given network user id (netuid) at a specified block.


#### neuron_for_uid_lite
```python
neuron_for_uid_lite( self, uid: int, netuid: int, block: Optional[int] = None ) -> Optional[NeuronInfoLite]
```
Returns the lightweight neuron metadata (without weights and bonds) associated with a given user id (uid) and network user id (netuid) at a specified block, or None if it does not exist.


#### neurons_lite
```python
neurons_lite(self, netuid: int, block: Optional[int] = None ) -> List[NeuronInfoLite]
```
Returns a list of lightweight neurons (without weights and bonds) from the chain for a given network user id (netuid) at a specified block.


#### metagraph
```python
metagraph( self, netuid: int, lite: bool = True ) -> 'bittensor.Metagraph'
```
Returns the metagraph for the subnet associated with a given network user id (netuid). If 'lite' is True, it returns a metagraph using the lightweight sync (no weights, no bonds).


</Accordion>














<Accordion title="_legacy">


#### get_balance
```python
get_balance(self, address: str, block: int = None) -> Balance
```
Returns the token balance for the given Substrate address at a specified block.


#### get_current_block
```python
get_current_block(self) -> int
```
Returns the current block number on the chain.


#### get_balances
```python
get_balances(self, block: int = None) -> Dict[str, Balance]
```
Returns a dictionary of balances for all addresses at a specified block. The dictionary keys are addresses and values are their corresponding balances.


#### `__str__()`
This method is used to provide a string representation of the instance.
```python dark
str(obj)
```
If the `network` argument equals the `chain_endpoint` argument, it returns a string that denotes connecting to a chain endpoint without a known network. Otherwise, it represents connecting to a network with a known endpoint.


#### `__repr__()`
This method is used to provide an official string representation of the instance.
```python dark
repr(obj)
```
The string returned by this method is identical to the one provided by the `__str__()` method.

</Accordion>


</Accordion>








<Accordion title="_initialization">


To initialize an instance of the `Subtensor` class, you'll need to provide three arguments:

```python dark
import bittensor as bt
obj = bt.subtensor( config, network, chain_endpoint )
```

</Accordion>

<Accordion title="_arguments">

- `config (bt.Config, optional, defaults=bt.subtensor.config())`:
    Subtensor config object containing arguments from bt.subtensor.config() which are automatically parsed from command line and ENV vars.
- `network (str, optional, default='finney')`:
    The subtensor network flag. The likely choices are:
            -- local (local running network)
            -- finney (main network)
            -- mock (mock network for testing.)
    If this option is set it overloads subtensor.chain_endpoint with
    an entry point node from that network.
- `chain_endpoint (str, default=None)`:
    The subtensor endpoint flag. If set, overrides the network argument.

</Accordion>


### Bt.metagraph

#### Chain State Torch Interface

The `Metagraph` class holds the chain state of a particular subnetwork at a specific block.

<Accordion title="_examples">

```python dark
import bittensor as bt

# Creating metagraph and sync state from a netuid parameter, defaults to connecting to network `finney`
metagraph = bt.metagraph( netuid = 1 )

# Create metagraph and sync with lite = False to sync weights and bonds matrices.
metagraph = bt.metagraph( netuid = 1, lite = False)

# Create metagraph and sync state from local entrypoint, assuming a subtensor chain is currently running.
metagraph = bt.metagraph( netuid = 1, network = 'local' )

# Create an empty metagraph object with no state syncing.
metagraph = bt.metagraph( netuid = 1, sync = False )

# Sync the metagraph at a particular block
metagraph.sync( block = 100000 )

# Save the metagraph to ~/.bittensor/metagraphs/network-$NETWORK_NAME/netuid-#NETUID/block-$BLOCK.pt
metagraph.save()

# Load the latest metagraph by block.
metagraph.load()
```


</Accordion>

<Accordion title="_methods">



#### S
```python
def S(self) -> torch.FloatTensor
```
Returns the total stake.


#### R
```python
def R(self) -> torch.FloatTensor
```
Returns the ranks.


#### I
```python
def I(self) -> torch.FloatTensor
```
Returns the incentive.


#### E
```python
def E(self) -> torch.FloatTensor
```
Returns the emission.


#### C
```python
def C(self) -> torch.FloatTensor
```
Returns the consensus.


#### T
```python
def T(self) -> torch.FloatTensor
```
Returns the trust.


#### Tv
```python
def Tv(self) -> torch.FloatTensor
```
Returns the validator trust.


#### D
```python
def D(self) -> torch.FloatTensor
```
Returns the dividends.


#### B
```python
def B(self) -> torch.FloatTensor
```
Returns the bonds.


#### W
```python
def W(self) -> torch.FloatTensor
```
Returns the weights.


#### hotkeys
```python
def hotkeys(self) -> List[str]
```
Returns the list of hotkeys for the axons.


#### coldkeys
```python
def coldkeys(self) -> List[str]
```
Returns the list of coldkeys for the axons.


#### addresses
```python
def addresses(self) -> List[str]
```
Returns the list of IP addresses for the axons.


#### __str__
```python
def __str__(self)
```
Returns a string representation of the Metagraph.


#### __repr__
```python
def __repr__(self)
```
Returns the same string representation as `__str__`.


#### metadata
```python
def metadata(self) -> dict
```
Returns a dictionary of Metagraph metadata.


#### __init__
```python
def __init__(self, netuid: int, network: str = 'finney', lite: bool = True, sync: bool = True) -> 'metagraph'
```
Initializes a new instance of the Metagraph.


#### sync
```python
def sync (self, block: Optional[int] = None, lite: bool = True) -> 'metagraph'
```
Syncs the Metagraph state at the passed block. Optionally syncs the weights also.


#### save
```python
def save(self) -> 'metagraph'
```
Saves the Metagraph object's state_dict under bittensor root directory.


#### load
```python
def load(self) -> 'metagraph'
```
Loads the Metagraph object's state_dict from bittensor root directory.


#### load_from_path
```python
def load_from_path(self, dir_path:str) -> 'metagraph'
```
Loads the Metagraph object's state_dict from the specified directory path.


</Accordion>
















### Bt.logging

The `Logging` interfaces with bittensor internal logging system.

<Accordion title="_examples">


#### Examples
```python dark
import bittensor as bt

# Turn on debug logs
bt.debug()

# Turn on trace logs
bt.trace()

# Turn off debug logs
bt.set_debug(False)

# Turn off trace logs
bt.set_trace(False)

# Turn on logging from class definition
bt.logging( set_debug = True )

# Instantiate logging from command line args
bt.logging( bt.logging.config() )

# Turn on logging to file
bt.logging( record_log = True, logging_dir = '/path/to/logs/' )

# Log
bt.logging.info(message)
bt.logging.debug(message)
bt.logging.trace(message)
bt.logging.success(message)
bt.logging.critical(message)
bt.logging.error(message)
>>> 2023-05-29 09:27:25.426 |       INFO       | message

# Log using prefex suffix design
bt.logging.info(prefix, message)
bt.logging.debug(prefix, message)
bt.logging.trace(prefix, message)
bt.logging.success(prefix, message)
bt.logging.critical(prefix, message)
bt.logging.error(prefix, message)
>>> 2023-05-29 09:27:47.184 |       INFO       | cat                           dogs
```


</Accordion>










