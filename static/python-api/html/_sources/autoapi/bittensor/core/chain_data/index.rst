bittensor.core.chain_data
=========================

.. py:module:: bittensor.core.chain_data

.. autoapi-nested-parse::

   This module provides data structures and functions for working with the Bittensor network, including neuron and subnet
   information, SCALE encoding/decoding, and custom RPC type registry.



Submodules
----------

.. toctree::
   :maxdepth: 1

   /autoapi/bittensor/core/chain_data/axon_info/index
   /autoapi/bittensor/core/chain_data/delegate_info/index
   /autoapi/bittensor/core/chain_data/delegate_info_lite/index
   /autoapi/bittensor/core/chain_data/ip_info/index
   /autoapi/bittensor/core/chain_data/neuron_info/index
   /autoapi/bittensor/core/chain_data/neuron_info_lite/index
   /autoapi/bittensor/core/chain_data/prometheus_info/index
   /autoapi/bittensor/core/chain_data/proposal_vote_data/index
   /autoapi/bittensor/core/chain_data/scheduled_coldkey_swap_info/index
   /autoapi/bittensor/core/chain_data/stake_info/index
   /autoapi/bittensor/core/chain_data/subnet_hyperparameters/index
   /autoapi/bittensor/core/chain_data/subnet_info/index
   /autoapi/bittensor/core/chain_data/utils/index


Attributes
----------

.. autoapisummary::

   bittensor.core.chain_data.custom_rpc_type_registry
   bittensor.core.chain_data.ProposalCallData


Classes
-------

.. autoapisummary::

   bittensor.core.chain_data.AxonInfo
   bittensor.core.chain_data.DelegateInfo
   bittensor.core.chain_data.DelegateInfoLite
   bittensor.core.chain_data.IPInfo
   bittensor.core.chain_data.NeuronInfo
   bittensor.core.chain_data.NeuronInfoLite
   bittensor.core.chain_data.PrometheusInfo
   bittensor.core.chain_data.ProposalVoteData
   bittensor.core.chain_data.ScheduledColdkeySwapInfo
   bittensor.core.chain_data.StakeInfo
   bittensor.core.chain_data.SubnetHyperparameters
   bittensor.core.chain_data.SubnetInfo


Package Contents
----------------

.. py:class:: AxonInfo

   The :obj:`AxonInfo` class represents information about an axon endpoint in the Bittensor network. This includes
   properties such as IP address, ports, and relevant keys.

   :ivar version: The version of the axon endpoint.
   :vartype version: int
   :ivar ip: The IP address of the axon endpoint.
   :vartype ip: str
   :ivar port: The port number the axon endpoint uses.
   :vartype port: int
   :ivar ip_type: The type of IP protocol (e.g., IPv4 or IPv6).
   :vartype ip_type: int
   :ivar hotkey: The hotkey associated with the axon endpoint.
   :vartype hotkey: str
   :ivar coldkey: The coldkey associated with the axon endpoint.
   :vartype coldkey: str
   :ivar protocol: The protocol version (default is 4).
   :vartype protocol: int
   :ivar placeholder1: Reserved field (default is 0).
   :vartype placeholder1: int
   :ivar placeholder2: Reserved field (default is 0).

   :vartype placeholder2: int


   .. py:attribute:: version
      :type:  int


   .. py:attribute:: ip
      :type:  str


   .. py:attribute:: port
      :type:  int


   .. py:attribute:: ip_type
      :type:  int


   .. py:attribute:: hotkey
      :type:  str


   .. py:attribute:: coldkey
      :type:  str


   .. py:attribute:: protocol
      :type:  int
      :value: 4



   .. py:attribute:: placeholder1
      :type:  int
      :value: 0



   .. py:attribute:: placeholder2
      :type:  int
      :value: 0



   .. py:property:: is_serving
      :type: bool

      True if the endpoint is serving.


   .. py:method:: ip_str()

      Return the whole IP as string



   .. py:method:: __eq__(other)


   .. py:method:: __str__()


   .. py:method:: __repr__()


   .. py:method:: to_string()

      Converts the :obj:`AxonInfo` object to a string representation using JSON.



   .. py:method:: from_string(json_string)
      :classmethod:


      Creates an :obj:`AxonInfo` object from its string representation using JSON.

      :param json_string: The JSON string representation of the :obj:`AxonInfo` object.
      :type json_string: str

      :returns: An instance of :obj:`AxonInfo` created from the JSON string. If decoding fails, returns a default :obj:`AxonInfo` object with default values.
      :rtype: AxonInfo

      :raises json.JSONDecodeError: If there is an error in decoding the JSON string.
      :raises TypeError: If there is a type error when creating the :obj:`AxonInfo` object.
      :raises ValueError: If there is a value error when creating the :obj:`AxonInfo` object.



   .. py:method:: from_neuron_info(neuron_info)
      :classmethod:


      Converts a dictionary to an :obj:`AxonInfo` object.

      :param neuron_info: A dictionary containing the neuron information.
      :type neuron_info: dict

      :returns: An instance of :obj:`AxonInfo` created from the dictionary.
      :rtype: instance (AxonInfo)



   .. py:method:: to_parameter_dict()

      Returns a torch tensor or dict of the subnet info, depending on the USE_TORCH flag set.



   .. py:method:: from_parameter_dict(parameter_dict)
      :classmethod:


      Returns an axon_info object from a torch parameter_dict or a parameter dict.



.. py:class:: DelegateInfo

   Dataclass for delegate information. For a lighter version of this class, see :class:`bittensor.core.chain_data.delegate_info_lite`.

   :param hotkey_ss58: Hotkey of the delegate for which the information is being fetched.
   :type hotkey_ss58: str
   :param total_stake: Total stake of the delegate.
   :type total_stake: int
   :param nominators: List of nominators of the delegate and their stake.
   :type nominators: list[tuple[str, int]]
   :param take: Take of the delegate as a percentage.
   :type take: float
   :param owner_ss58: Coldkey of the owner.
   :type owner_ss58: str
   :param registrations: List of subnets that the delegate is registered on.
   :type registrations: list[int]
   :param validator_permits: List of subnets that the delegate is allowed to validate on.
   :type validator_permits: list[int]
   :param return_per_1000: Return per 1000 TAO, for the delegate over a day.
   :type return_per_1000: int
   :param total_daily_return: Total daily return of the delegate.
   :type total_daily_return: int


   .. py:attribute:: hotkey_ss58
      :type:  str


   .. py:attribute:: total_stake
      :type:  bittensor.utils.balance.Balance


   .. py:attribute:: nominators
      :type:  list[tuple[str, bittensor.utils.balance.Balance]]


   .. py:attribute:: owner_ss58
      :type:  str


   .. py:attribute:: take
      :type:  float


   .. py:attribute:: validator_permits
      :type:  list[int]


   .. py:attribute:: registrations
      :type:  tuple[int]


   .. py:attribute:: return_per_1000
      :type:  bittensor.utils.balance.Balance


   .. py:attribute:: total_daily_return
      :type:  bittensor.utils.balance.Balance


   .. py:method:: fix_decoded_values(decoded)
      :classmethod:


      Fixes the decoded values.



   .. py:method:: from_vec_u8(vec_u8)
      :classmethod:


      Returns a DelegateInfo object from a ``vec_u8``.



   .. py:method:: list_from_vec_u8(vec_u8)
      :classmethod:


      Returns a list of DelegateInfo objects from a ``vec_u8``.



   .. py:method:: delegated_list_from_vec_u8(vec_u8)
      :classmethod:


      Returns a list of Tuples of DelegateInfo objects, and Balance, from a ``vec_u8``.

      This is the list of delegates that the user has delegated to, and the amount of stake delegated.



.. py:class:: DelegateInfoLite

   Dataclass for `DelegateLiteInfo`. This is a lighter version of :obj:`DelegateInfo`.

   :param delegate_ss58: Hotkey of the delegate for which the information is being fetched.
   :type delegate_ss58: str
   :param take: Take of the delegate as a percentage.
   :type take: float
   :param nominators: Count of the nominators of the delegate.
   :type nominators: int
   :param owner_ss58: Coldkey of the owner.
   :type owner_ss58: str
   :param registrations: List of subnets that the delegate is registered on.
   :type registrations: list[int]
   :param validator_permits: List of subnets that the delegate is allowed to validate on.
   :type validator_permits: list[int]
   :param return_per_1000: Return per 1000 TAO, for the delegate over a day.
   :type return_per_1000: int
   :param total_daily_return: Total daily return of the delegate.
   :type total_daily_return: int


   .. py:attribute:: delegate_ss58
      :type:  str


   .. py:attribute:: take
      :type:  float


   .. py:attribute:: nominators
      :type:  int


   .. py:attribute:: owner_ss58
      :type:  str


   .. py:attribute:: registrations
      :type:  list[int]


   .. py:attribute:: validator_permits
      :type:  list[int]


   .. py:attribute:: return_per_1000
      :type:  int


   .. py:attribute:: total_daily_return
      :type:  int


.. py:class:: IPInfo

   Dataclass representing IP information.

   :ivar ip: The IP address as a string.
   :vartype ip: str
   :ivar ip_type: The type of the IP address (e.g., IPv4, IPv6).
   :vartype ip_type: int
   :ivar protocol: The protocol associated with the IP (e.g., TCP, UDP).

   :vartype protocol: int


   .. py:attribute:: ip
      :type:  str


   .. py:attribute:: ip_type
      :type:  int


   .. py:attribute:: protocol
      :type:  int


   .. py:method:: encode()

      Returns a dictionary of the IPInfo object that can be encoded.



   .. py:method:: from_vec_u8(vec_u8)
      :classmethod:


      Returns a IPInfo object from a ``vec_u8``.



   .. py:method:: list_from_vec_u8(vec_u8)
      :classmethod:


      Returns a list of IPInfo objects from a ``vec_u8``.



   .. py:method:: fix_decoded_values(decoded)
      :classmethod:


      Returns a SubnetInfo object from a decoded IPInfo dictionary.



   .. py:method:: to_parameter_dict()

      Returns a torch tensor or dict of the subnet IP info.



   .. py:method:: from_parameter_dict(parameter_dict)
      :classmethod:


      Creates a IPInfo instance from a parameter dictionary.



.. py:class:: NeuronInfo

   Represents the metadata of a neuron including keys, UID, stake, rankings, and other attributes.

   :ivar hotkey: The hotkey associated with the neuron.
   :vartype hotkey: str
   :ivar coldkey: The coldkey associated with the neuron.
   :vartype coldkey: str
   :ivar uid: The unique identifier for the neuron.
   :vartype uid: int
   :ivar netuid: The network unique identifier for the neuron.
   :vartype netuid: int
   :ivar active: The active status of the neuron.
   :vartype active: int
   :ivar stake: The balance staked to this neuron.
   :vartype stake: Balance
   :ivar stake_dict: A dictionary mapping coldkey to the amount staked.
   :vartype stake_dict: dict[str, Balance]
   :ivar total_stake: The total amount of stake.
   :vartype total_stake: Balance
   :ivar rank: The rank score of the neuron.
   :vartype rank: float
   :ivar emission: The emission rate.
   :vartype emission: float
   :ivar incentive: The incentive value.
   :vartype incentive: float
   :ivar consensus: The consensus score.
   :vartype consensus: float
   :ivar trust: The trust score.
   :vartype trust: float
   :ivar validator_trust: The validation trust score.
   :vartype validator_trust: float
   :ivar dividends: The dividends value.
   :vartype dividends: float
   :ivar last_update: The timestamp of the last update.
   :vartype last_update: int
   :ivar validator_permit: Validator permit status.
   :vartype validator_permit: bool
   :ivar weights: List of weights associated with the neuron.
   :vartype weights: list[list[int]]
   :ivar bonds: List of bonds associated with the neuron.
   :vartype bonds: list[list[int]]
   :ivar pruning_score: The pruning score of the neuron.
   :vartype pruning_score: int
   :ivar prometheus_info: Information related to Prometheus.
   :vartype prometheus_info: Optional[PrometheusInfo]
   :ivar axon_info: Information related to Axon.
   :vartype axon_info: Optional[AxonInfo]
   :ivar is_null: Indicator if this is a null neuron.

   :vartype is_null: bool


   .. py:attribute:: hotkey
      :type:  str


   .. py:attribute:: coldkey
      :type:  str


   .. py:attribute:: uid
      :type:  int


   .. py:attribute:: netuid
      :type:  int


   .. py:attribute:: active
      :type:  int


   .. py:attribute:: stake
      :type:  bittensor.utils.balance.Balance


   .. py:attribute:: stake_dict
      :type:  dict[str, bittensor.utils.balance.Balance]


   .. py:attribute:: total_stake
      :type:  bittensor.utils.balance.Balance


   .. py:attribute:: rank
      :type:  float


   .. py:attribute:: emission
      :type:  float


   .. py:attribute:: incentive
      :type:  float


   .. py:attribute:: consensus
      :type:  float


   .. py:attribute:: trust
      :type:  float


   .. py:attribute:: validator_trust
      :type:  float


   .. py:attribute:: dividends
      :type:  float


   .. py:attribute:: last_update
      :type:  int


   .. py:attribute:: validator_permit
      :type:  bool


   .. py:attribute:: weights
      :type:  list[list[int]]


   .. py:attribute:: bonds
      :type:  list[list[int]]


   .. py:attribute:: pruning_score
      :type:  int


   .. py:attribute:: prometheus_info
      :type:  Optional[bittensor.core.chain_data.prometheus_info.PrometheusInfo]
      :value: None



   .. py:attribute:: axon_info
      :type:  Optional[bittensor.core.chain_data.axon_info.AxonInfo]
      :value: None



   .. py:attribute:: is_null
      :type:  bool
      :value: False



   .. py:method:: from_weights_bonds_and_neuron_lite(neuron_lite, weights_as_dict, bonds_as_dict)
      :classmethod:


      Creates an instance of NeuronInfo from NeuronInfoLite and dictionaries of weights and bonds.

      :param neuron_lite: A lite version of the neuron containing basic attributes.
      :type neuron_lite: NeuronInfoLite
      :param weights_as_dict: A dictionary where the key is the UID and the value is a list of weight tuples associated with the neuron.
      :type weights_as_dict: dict[int, list[tuple[int, int]]]
      :param bonds_as_dict: A dictionary where the key is the UID and the value is a list of bond tuples associated with the neuron.
      :type bonds_as_dict: dict[int, list[tuple[int, int]]]

      :returns: An instance of NeuronInfo populated with the provided weights and bonds.
      :rtype: NeuronInfo



   .. py:method:: get_null_neuron()
      :staticmethod:


      Returns a null NeuronInfo instance.



   .. py:method:: from_vec_u8(vec_u8)
      :classmethod:


      Instantiates NeuronInfo from a byte vector.



.. py:class:: NeuronInfoLite

   NeuronInfoLite is a dataclass representing neuron metadata without weights and bonds.

   :ivar hotkey: The hotkey string for the neuron.
   :vartype hotkey: str
   :ivar coldkey: The coldkey string for the neuron.
   :vartype coldkey: str
   :ivar uid: A unique identifier for the neuron.
   :vartype uid: int
   :ivar netuid: Network unique identifier for the neuron.
   :vartype netuid: int
   :ivar active: Indicates whether the neuron is active.
   :vartype active: int
   :ivar stake: The stake amount associated with the neuron.
   :vartype stake: Balance
   :ivar stake_dict: Mapping of coldkey to the amount staked to this Neuron.
   :vartype stake_dict: dict
   :ivar total_stake: Total amount of the stake.
   :vartype total_stake: Balance
   :ivar rank: The rank of the neuron.
   :vartype rank: float
   :ivar emission: The emission value of the neuron.
   :vartype emission: float
   :ivar incentive: The incentive value of the neuron.
   :vartype incentive: float
   :ivar consensus: The consensus value of the neuron.
   :vartype consensus: float
   :ivar trust: Trust value of the neuron.
   :vartype trust: float
   :ivar validator_trust: Validator trust value of the neuron.
   :vartype validator_trust: float
   :ivar dividends: Dividends associated with the neuron.
   :vartype dividends: float
   :ivar last_update: Timestamp of the last update.
   :vartype last_update: int
   :ivar validator_permit: Indicates if the neuron has a validator permit.
   :vartype validator_permit: bool
   :ivar prometheus_info: Prometheus information associated with the neuron.
   :vartype prometheus_info: Optional[PrometheusInfo]
   :ivar axon_info: Axon information associated with the neuron.
   :vartype axon_info: Optional[AxonInfo]
   :ivar pruning_score: The pruning score of the neuron.
   :vartype pruning_score: int
   :ivar is_null: Indicates whether the neuron is null.

   :vartype is_null: bool

   .. method:: get_null_neuron

      Returns a NeuronInfoLite object representing a null neuron.

   .. method:: list_from_vec_u8

      Decodes a bytes object into a list of NeuronInfoLite instances.
      


   .. py:attribute:: hotkey
      :type:  str


   .. py:attribute:: coldkey
      :type:  str


   .. py:attribute:: uid
      :type:  int


   .. py:attribute:: netuid
      :type:  int


   .. py:attribute:: active
      :type:  int


   .. py:attribute:: stake
      :type:  bittensor.utils.balance.Balance


   .. py:attribute:: stake_dict
      :type:  dict[str, bittensor.utils.balance.Balance]


   .. py:attribute:: total_stake
      :type:  bittensor.utils.balance.Balance


   .. py:attribute:: rank
      :type:  float


   .. py:attribute:: emission
      :type:  float


   .. py:attribute:: incentive
      :type:  float


   .. py:attribute:: consensus
      :type:  float


   .. py:attribute:: trust
      :type:  float


   .. py:attribute:: validator_trust
      :type:  float


   .. py:attribute:: dividends
      :type:  float


   .. py:attribute:: last_update
      :type:  int


   .. py:attribute:: validator_permit
      :type:  bool


   .. py:attribute:: prometheus_info
      :type:  Optional[bittensor.core.chain_data.prometheus_info.PrometheusInfo]


   .. py:attribute:: axon_info
      :type:  Optional[bittensor.core.chain_data.axon_info.AxonInfo]


   .. py:attribute:: pruning_score
      :type:  int


   .. py:attribute:: is_null
      :type:  bool
      :value: False



   .. py:method:: get_null_neuron()
      :staticmethod:


      Returns a null NeuronInfoLite instance.



   .. py:method:: list_from_vec_u8(vec_u8)
      :classmethod:


      Decodes a bytes object into a list of NeuronInfoLite instances.

      :param vec_u8: The bytes object to decode into NeuronInfoLite instances.
      :type vec_u8: bytes

      :returns: A list of NeuronInfoLite instances decoded from the provided bytes object.
      :rtype: list[NeuronInfoLite]



.. py:class:: PrometheusInfo

   Dataclass representing information related to Prometheus.

   :ivar block: The block number associated with the Prometheus data.
   :vartype block: int
   :ivar version: The version of the Prometheus data.
   :vartype version: int
   :ivar ip: The IP address associated with Prometheus.
   :vartype ip: str
   :ivar port: The port number for Prometheus.
   :vartype port: int
   :ivar ip_type: The type of IP address (e.g., IPv4, IPv6).

   :vartype ip_type: int


   .. py:attribute:: block
      :type:  int


   .. py:attribute:: version
      :type:  int


   .. py:attribute:: ip
      :type:  str


   .. py:attribute:: port
      :type:  int


   .. py:attribute:: ip_type
      :type:  int


   .. py:method:: fix_decoded_values(prometheus_info_decoded)
      :classmethod:


      Returns a PrometheusInfo object from a prometheus_info_decoded dictionary.



.. py:class:: ProposalVoteData

   Bases: :py:obj:`TypedDict`


   This TypedDict represents the data structure for a proposal vote in the Senate.

   :ivar index: The index of the proposal.
   :vartype index: int
   :ivar threshold: The threshold required for the proposal to pass.
   :vartype threshold: int
   :ivar ayes: List of senators who voted 'aye'.
   :vartype ayes: List[str]
   :ivar nays: List of senators who voted 'nay'.
   :vartype nays: List[str]
   :ivar end: The ending timestamp of the voting period.

   :vartype end: int

   Initialize self.  See help(type(self)) for accurate signature.


   .. py:attribute:: index
      :type:  int


   .. py:attribute:: threshold
      :type:  int


   .. py:attribute:: ayes
      :type:  list[str]


   .. py:attribute:: nays
      :type:  list[str]


   .. py:attribute:: end
      :type:  int


.. py:class:: ScheduledColdkeySwapInfo

   The `ScheduledColdkeySwapInfo` class is a dataclass representing information about scheduled cold key swaps.

   :ivar old_coldkey: The old cold key before the swap.
   :vartype old_coldkey: str
   :ivar new_coldkey: The new cold key after the swap.
   :vartype new_coldkey: str
   :ivar arbitration_block: The block number at which the arbitration of the swap will take place.

   :vartype arbitration_block: int


   .. py:attribute:: old_coldkey
      :type:  str


   .. py:attribute:: new_coldkey
      :type:  str


   .. py:attribute:: arbitration_block
      :type:  int


   .. py:method:: fix_decoded_values(decoded)
      :classmethod:


      Fixes the decoded values.



   .. py:method:: from_vec_u8(vec_u8)
      :classmethod:


      Returns a ScheduledColdkeySwapInfo object from a ``vec_u8``.



   .. py:method:: list_from_vec_u8(vec_u8)
      :classmethod:


      Returns a list of ScheduledColdkeySwapInfo objects from a ``vec_u8``.



   .. py:method:: decode_account_id_list(vec_u8)
      :classmethod:


      Decodes a list of AccountIds from vec_u8.



.. py:class:: StakeInfo

   Dataclass for representing stake information linked to hotkey and coldkey pairs.

   :ivar hotkey_ss58: The SS58 encoded hotkey address.
   :vartype hotkey_ss58: str
   :ivar coldkey_ss58: The SS58 encoded coldkey address.
   :vartype coldkey_ss58: str
   :ivar stake: The stake associated with the hotkey-coldkey pair, represented as a Balance object.

   :vartype stake: Balance


   .. py:attribute:: hotkey_ss58
      :type:  str


   .. py:attribute:: coldkey_ss58
      :type:  str


   .. py:attribute:: stake
      :type:  bittensor.utils.balance.Balance


   .. py:method:: fix_decoded_values(decoded)
      :classmethod:


      Fixes the decoded values.



   .. py:method:: from_vec_u8(vec_u8)
      :classmethod:


      Returns a StakeInfo object from a ``vec_u8``.



   .. py:method:: list_of_tuple_from_vec_u8(vec_u8)
      :classmethod:


      Returns a list of StakeInfo objects from a ``vec_u8``.



   .. py:method:: list_from_vec_u8(vec_u8)
      :classmethod:


      Returns a list of StakeInfo objects from a ``vec_u8``.



.. py:class:: SubnetHyperparameters

   This class represents the hyperparameters for a subnet.

   :ivar rho: The rate of decay of some value.
   :vartype rho: int
   :ivar kappa: A constant multiplier used in calculations.
   :vartype kappa: int
   :ivar immunity_period: The period during which immunity is active.
   :vartype immunity_period: int
   :ivar min_allowed_weights: Minimum allowed weights.
   :vartype min_allowed_weights: int
   :ivar max_weight_limit: Maximum weight limit.
   :vartype max_weight_limit: float
   :ivar tempo: The tempo or rate of operation.
   :vartype tempo: int
   :ivar min_difficulty: Minimum difficulty for some operations.
   :vartype min_difficulty: int
   :ivar max_difficulty: Maximum difficulty for some operations.
   :vartype max_difficulty: int
   :ivar weights_version: The version number of the weights used.
   :vartype weights_version: int
   :ivar weights_rate_limit: Rate limit for processing weights.
   :vartype weights_rate_limit: int
   :ivar adjustment_interval: Interval at which adjustments are made.
   :vartype adjustment_interval: int
   :ivar activity_cutoff: Activity cutoff threshold.
   :vartype activity_cutoff: int
   :ivar registration_allowed: Indicates if registration is allowed.
   :vartype registration_allowed: bool
   :ivar target_regs_per_interval: Target number of registrations per interval.
   :vartype target_regs_per_interval: int
   :ivar min_burn: Minimum burn value.
   :vartype min_burn: int
   :ivar max_burn: Maximum burn value.
   :vartype max_burn: int
   :ivar bonds_moving_avg: Moving average of bonds.
   :vartype bonds_moving_avg: int
   :ivar max_regs_per_block: Maximum number of registrations per block.
   :vartype max_regs_per_block: int
   :ivar serving_rate_limit: Limit on the rate of service.
   :vartype serving_rate_limit: int
   :ivar max_validators: Maximum number of validators.
   :vartype max_validators: int
   :ivar adjustment_alpha: Alpha value for adjustments.
   :vartype adjustment_alpha: int
   :ivar difficulty: Difficulty level.
   :vartype difficulty: int
   :ivar commit_reveal_weights_interval: Interval for commit-reveal weights.
   :vartype commit_reveal_weights_interval: int
   :ivar commit_reveal_weights_enabled: Flag indicating if commit-reveal weights are enabled.
   :vartype commit_reveal_weights_enabled: bool
   :ivar alpha_high: High value of alpha.
   :vartype alpha_high: int
   :ivar alpha_low: Low value of alpha.
   :vartype alpha_low: int
   :ivar liquid_alpha_enabled: Flag indicating if liquid alpha is enabled.

   :vartype liquid_alpha_enabled: bool


   .. py:attribute:: rho
      :type:  int


   .. py:attribute:: kappa
      :type:  int


   .. py:attribute:: immunity_period
      :type:  int


   .. py:attribute:: min_allowed_weights
      :type:  int


   .. py:attribute:: max_weight_limit
      :type:  float


   .. py:attribute:: tempo
      :type:  int


   .. py:attribute:: min_difficulty
      :type:  int


   .. py:attribute:: max_difficulty
      :type:  int


   .. py:attribute:: weights_version
      :type:  int


   .. py:attribute:: weights_rate_limit
      :type:  int


   .. py:attribute:: adjustment_interval
      :type:  int


   .. py:attribute:: activity_cutoff
      :type:  int


   .. py:attribute:: registration_allowed
      :type:  bool


   .. py:attribute:: target_regs_per_interval
      :type:  int


   .. py:attribute:: min_burn
      :type:  int


   .. py:attribute:: max_burn
      :type:  int


   .. py:attribute:: bonds_moving_avg
      :type:  int


   .. py:attribute:: max_regs_per_block
      :type:  int


   .. py:attribute:: serving_rate_limit
      :type:  int


   .. py:attribute:: max_validators
      :type:  int


   .. py:attribute:: adjustment_alpha
      :type:  int


   .. py:attribute:: difficulty
      :type:  int


   .. py:attribute:: commit_reveal_weights_interval
      :type:  int


   .. py:attribute:: commit_reveal_weights_enabled
      :type:  bool


   .. py:attribute:: alpha_high
      :type:  int


   .. py:attribute:: alpha_low
      :type:  int


   .. py:attribute:: liquid_alpha_enabled
      :type:  bool


   .. py:method:: from_vec_u8(vec_u8)
      :classmethod:


      Create a `SubnetHyperparameters` instance from a vector of bytes.

      This method decodes the given vector of bytes using the `bt_decode` module and creates a new instance of `SubnetHyperparameters` with the decoded values.

      :param vec_u8: A vector of bytes to decode into `SubnetHyperparameters`.
      :type vec_u8: bytes

      :returns: An instance of `SubnetHyperparameters` if decoding is successful, None otherwise.
      :rtype: Optional[SubnetHyperparameters]



.. py:class:: SubnetInfo

   Dataclass for subnet info.


   .. py:attribute:: netuid
      :type:  int


   .. py:attribute:: rho
      :type:  int


   .. py:attribute:: kappa
      :type:  int


   .. py:attribute:: difficulty
      :type:  int


   .. py:attribute:: immunity_period
      :type:  int


   .. py:attribute:: max_allowed_validators
      :type:  int


   .. py:attribute:: min_allowed_weights
      :type:  int


   .. py:attribute:: max_weight_limit
      :type:  float


   .. py:attribute:: scaling_law_power
      :type:  float


   .. py:attribute:: subnetwork_n
      :type:  int


   .. py:attribute:: max_n
      :type:  int


   .. py:attribute:: blocks_since_epoch
      :type:  int


   .. py:attribute:: tempo
      :type:  int


   .. py:attribute:: modality
      :type:  int


   .. py:attribute:: connection_requirements
      :type:  dict[str, float]


   .. py:attribute:: emission_value
      :type:  float


   .. py:attribute:: burn
      :type:  bittensor.utils.balance.Balance


   .. py:attribute:: owner_ss58
      :type:  str


   .. py:method:: from_vec_u8(vec_u8)
      :classmethod:


      Returns a SubnetInfo object from a ``vec_u8``.



   .. py:method:: list_from_vec_u8(vec_u8)
      :classmethod:


      Returns a list of SubnetInfo objects from a ``vec_u8``.



   .. py:method:: fix_decoded_values(decoded)
      :classmethod:


      Returns a SubnetInfo object from a decoded SubnetInfo dictionary.



   .. py:method:: to_parameter_dict()

      Returns a torch tensor or dict of the subnet info.



   .. py:method:: from_parameter_dict(parameter_dict)
      :classmethod:


      Creates a SubnetInfo instance from a parameter dictionary.



.. py:data:: custom_rpc_type_registry

.. py:data:: ProposalCallData

