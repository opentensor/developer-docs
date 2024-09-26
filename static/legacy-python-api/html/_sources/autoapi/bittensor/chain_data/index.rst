bittensor.chain_data
====================

.. py:module:: bittensor.chain_data

.. autoapi-nested-parse::

   This module provides data structures and functions for working with the Bittensor network,
   including neuron and subnet information, SCALE encoding/decoding, and custom RPC type registry.



Attributes
----------

.. autoapisummary::

   bittensor.chain_data.custom_rpc_type_registry
   bittensor.chain_data.ProposalCallData


Classes
-------

.. autoapisummary::

   bittensor.chain_data.AxonInfo
   bittensor.chain_data.ChainDataType
   bittensor.chain_data.NeuronInfo
   bittensor.chain_data.NeuronInfoLite
   bittensor.chain_data.PrometheusInfo
   bittensor.chain_data.DelegateInfoLite
   bittensor.chain_data.DelegateInfo
   bittensor.chain_data.StakeInfo
   bittensor.chain_data.SubnetInfo
   bittensor.chain_data.SubnetHyperparameters
   bittensor.chain_data.IPInfo
   bittensor.chain_data.ProposalVoteData
   bittensor.chain_data.ScheduledColdkeySwapInfo


Functions
---------

.. autoapisummary::

   bittensor.chain_data.from_scale_encoding
   bittensor.chain_data.from_scale_encoding_using_type_string


Module Contents
---------------

.. py:data:: custom_rpc_type_registry

.. py:class:: AxonInfo

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

      Converts the AxonInfo object to a string representation using JSON.



   .. py:method:: from_string(json_string)
      :classmethod:


      Creates an AxonInfo object from its string representation using JSON.

      :param json_string: The JSON string representation of the AxonInfo object.
      :type json_string: str

      :returns: An instance of AxonInfo created from the JSON string. If decoding fails, returns a default AxonInfo object with default values.
      :rtype: AxonInfo

      :raises json.JSONDecodeError: If there is an error in decoding the JSON string.
      :raises TypeError: If there is a type error when creating the AxonInfo object.
      :raises ValueError: If there is a value error when creating the AxonInfo object.



   .. py:method:: from_neuron_info(neuron_info)
      :classmethod:


      Converts a dictionary to an AxonInfo object.

      :param neuron_info: A dictionary containing the neuron information.
      :type neuron_info: dict

      :returns: An instance of AxonInfo created from the dictionary.
      :rtype: instance (AxonInfo)



   .. py:method:: to_parameter_dict()

      Returns a torch tensor or dict of the subnet info, depending on the USE_TORCH flag set.



   .. py:method:: from_parameter_dict(parameter_dict)
      :classmethod:


      Returns an axon_info object from a torch parameter_dict or a parameter dict.



.. py:class:: ChainDataType(*args, **kwds)

   Bases: :py:obj:`enum.Enum`


   Create a collection of name/value pairs.

   Example enumeration:

   >>> class Color(Enum):
   ...     RED = 1
   ...     BLUE = 2
   ...     GREEN = 3

   Access them by:

   - attribute access:

     >>> Color.RED
     <Color.RED: 1>

   - value lookup:

     >>> Color(1)
     <Color.RED: 1>

   - name lookup:

     >>> Color['RED']
     <Color.RED: 1>

   Enumerations can be iterated over, and know how many members they have:

   >>> len(Color)
   3

   >>> list(Color)
   [<Color.RED: 1>, <Color.BLUE: 2>, <Color.GREEN: 3>]

   Methods can be added to enumerations, and members can have their own
   attributes -- see the documentation for details.


   .. py:attribute:: NeuronInfo
      :value: 1



   .. py:attribute:: SubnetInfo
      :value: 2



   .. py:attribute:: DelegateInfo
      :value: 3



   .. py:attribute:: NeuronInfoLite
      :value: 4



   .. py:attribute:: DelegatedInfo
      :value: 5



   .. py:attribute:: StakeInfo
      :value: 6



   .. py:attribute:: IPInfo
      :value: 7



   .. py:attribute:: SubnetHyperparameters
      :value: 8



   .. py:attribute:: ScheduledColdkeySwapInfo
      :value: 9



.. py:function:: from_scale_encoding(input_, type_name, is_vec = False, is_option = False)

   Decodes input_ data from SCALE encoding based on the specified type name and modifiers.

   :param input_: The input_ data to decode.
   :type input_: Union[List[int], bytes, ScaleBytes]
   :param type_name: The type of data being decoded.
   :type type_name: ChainDataType
   :param is_vec: Whether the data is a vector of the specified type. Default is ``False``.
   :type is_vec: bool, optional
   :param is_option: Whether the data is an optional value of the specified type. Default is ``False``.
   :type is_option: bool, optional

   :returns: The decoded data as a dictionary, or ``None`` if the decoding fails.
   :rtype: Optional[Dict]


.. py:function:: from_scale_encoding_using_type_string(input_, type_string)

.. py:class:: NeuronInfo

   Dataclass for neuron metadata.


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
      :type:  Dict[str, bittensor.utils.balance.Balance]


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
      :type:  List[List[int]]


   .. py:attribute:: bonds
      :type:  List[List[int]]


   .. py:attribute:: pruning_score
      :type:  int


   .. py:attribute:: prometheus_info
      :type:  Optional[PrometheusInfo]
      :value: None



   .. py:attribute:: axon_info
      :type:  Optional[AxonInfo]
      :value: None



   .. py:attribute:: is_null
      :type:  bool
      :value: False



   .. py:method:: fix_decoded_values(neuron_info_decoded)
      :classmethod:


      Fixes the values of the NeuronInfo object.



   .. py:method:: from_vec_u8(vec_u8)
      :classmethod:


      Returns a NeuronInfo object from a ``vec_u8``.



   .. py:method:: list_from_vec_u8(vec_u8)
      :classmethod:


      Returns a list of NeuronInfo objects from a ``vec_u8``



   .. py:method:: get_null_neuron()
      :staticmethod:



   .. py:method:: from_weights_bonds_and_neuron_lite(neuron_lite, weights_as_dict, bonds_as_dict)
      :classmethod:



.. py:class:: NeuronInfoLite

   Dataclass for neuron metadata, but without the weights and bonds.


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
      :type:  Dict[str, bittensor.utils.balance.Balance]


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
      :type:  Optional[PrometheusInfo]


   .. py:attribute:: axon_info
      :type:  NeuronInfoLite.axon_info


   .. py:attribute:: pruning_score
      :type:  int


   .. py:attribute:: is_null
      :type:  bool
      :value: False



   .. py:method:: fix_decoded_values(neuron_info_decoded)
      :classmethod:


      Fixes the values of the NeuronInfoLite object.



   .. py:method:: from_vec_u8(vec_u8)
      :classmethod:


      Returns a NeuronInfoLite object from a ``vec_u8``.



   .. py:method:: list_from_vec_u8(vec_u8)
      :classmethod:


      Returns a list of NeuronInfoLite objects from a ``vec_u8``.



   .. py:method:: get_null_neuron()
      :staticmethod:



.. py:class:: PrometheusInfo

   Dataclass for prometheus info.


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



.. py:class:: DelegateInfoLite

   Dataclass for DelegateLiteInfo. This is a lighter version of :func:`DelegateInfo`.

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


.. py:class:: DelegateInfo

   Dataclass for delegate information. For a lighter version of this class, see :func:`DelegateInfoLite`.

   :param hotkey_ss58: Hotkey of the delegate for which the information is being fetched.
   :type hotkey_ss58: str
   :param total_stake: Total stake of the delegate.
   :type total_stake: int
   :param nominators: List of nominators of the delegate and their stake.
   :type nominators: list[Tuple[str, int]]
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
      :type:  List[Tuple[str, bittensor.utils.balance.Balance]]


   .. py:attribute:: owner_ss58
      :type:  str


   .. py:attribute:: take
      :type:  float


   .. py:attribute:: validator_permits
      :type:  List[int]


   .. py:attribute:: registrations
      :type:  List[int]


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



.. py:class:: StakeInfo

   Dataclass for stake info.


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
      :type:  Dict[str, float]


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



.. py:class:: SubnetHyperparameters

   Dataclass for subnet hyperparameters.


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


      Returns a SubnetHyperparameters object from a ``vec_u8``.



   .. py:method:: list_from_vec_u8(vec_u8)
      :classmethod:


      Returns a list of SubnetHyperparameters objects from a ``vec_u8``.



   .. py:method:: fix_decoded_values(decoded)
      :classmethod:


      Returns a SubnetInfo object from a decoded SubnetInfo dictionary.



   .. py:method:: to_parameter_dict()

      Returns a torch tensor or dict of the subnet hyperparameters.



   .. py:method:: from_parameter_dict(parameter_dict)
      :classmethod:



.. py:class:: IPInfo

   Dataclass for associated IP Info.


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



.. py:class:: ProposalVoteData

   Bases: :py:obj:`TypedDict`


   dict() -> new empty dictionary
   dict(mapping) -> new dictionary initialized from a mapping object's
       (key, value) pairs
   dict(iterable) -> new dictionary initialized as if via:
       d = {}
       for k, v in iterable:
           d[k] = v
   dict(**kwargs) -> new dictionary initialized with the name=value pairs
       in the keyword argument list.  For example:  dict(one=1, two=2)

   Initialize self.  See help(type(self)) for accurate signature.


   .. py:attribute:: index
      :type:  int


   .. py:attribute:: threshold
      :type:  int


   .. py:attribute:: ayes
      :type:  List[str]


   .. py:attribute:: nays
      :type:  List[str]


   .. py:attribute:: end
      :type:  int


.. py:data:: ProposalCallData

.. py:class:: ScheduledColdkeySwapInfo

   Dataclass for scheduled coldkey swap information.


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



