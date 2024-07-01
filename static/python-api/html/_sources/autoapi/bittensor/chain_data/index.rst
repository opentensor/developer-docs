:py:mod:`bittensor.chain_data`
==============================

.. py:module:: bittensor.chain_data


Module Contents
---------------

Classes
~~~~~~~

.. autoapisummary::

   bittensor.chain_data.AxonInfo
   bittensor.chain_data.ChainDataType
   bittensor.chain_data.DelegateInfo
   bittensor.chain_data.DelegateInfoLite
   bittensor.chain_data.IPInfo
   bittensor.chain_data.NeuronInfo
   bittensor.chain_data.NeuronInfoLite
   bittensor.chain_data.PrometheusInfo
   bittensor.chain_data.ProposalVoteData
   bittensor.chain_data.StakeInfo
   bittensor.chain_data.SubnetHyperparameters
   bittensor.chain_data.SubnetInfo



Functions
~~~~~~~~~

.. autoapisummary::

   bittensor.chain_data.from_scale_encoding
   bittensor.chain_data.from_scale_encoding_using_type_string



Attributes
~~~~~~~~~~

.. autoapisummary::

   bittensor.chain_data.ProposalCallData
   bittensor.chain_data.RAOPERTAO
   bittensor.chain_data.U16_MAX
   bittensor.chain_data.U64_MAX
   bittensor.chain_data.custom_rpc_type_registry


.. py:class:: AxonInfo


   .. py:property:: is_serving
      :type: bool

      True if the endpoint is serving.

   .. py:attribute:: coldkey
      :type: str

      

   .. py:attribute:: hotkey
      :type: str

      

   .. py:attribute:: ip
      :type: str

      

   .. py:attribute:: ip_type
      :type: int

      

   .. py:attribute:: placeholder1
      :type: int
      :value: 0

      

   .. py:attribute:: placeholder2
      :type: int
      :value: 0

      

   .. py:attribute:: port
      :type: int

      

   .. py:attribute:: protocol
      :type: int
      :value: 4

      

   .. py:attribute:: version
      :type: int

      

   .. py:method:: __eq__(other: AxonInfo)

      Return self==value.


   .. py:method:: __repr__()

      Return repr(self).


   .. py:method:: __str__()

      Return str(self).


   .. py:method:: _from_parameter_dict(parameter_dict: Union[dict[str, Any], bittensor.utils.registration.torch.nn.ParameterDict], return_type: str) -> AxonInfo
      :classmethod:


   .. py:method:: _to_parameter_dict(return_type: str) -> Union[dict[str, Union[int, str]], bittensor.utils.registration.torch.nn.ParameterDict]


   .. py:method:: from_neuron_info(neuron_info: dict) -> AxonInfo
      :classmethod:

      Converts a dictionary to an axon_info object.


   .. py:method:: from_parameter_dict(parameter_dict: Union[dict[str, Any], bittensor.utils.registration.torch.nn.ParameterDict]) -> AxonInfo
      :classmethod:

      Returns an axon_info object from a torch parameter_dict or a parameter dict.


   .. py:method:: from_string(s: str) -> AxonInfo
      :classmethod:

      Creates an AxonInfo object from its string representation using JSON.


   .. py:method:: ip_str() -> str

      Return the whole IP as string


   .. py:method:: to_parameter_dict() -> Union[dict[str, Union[int, str]], bittensor.utils.registration.torch.nn.ParameterDict]

      Returns a torch tensor or dict of the subnet info, depending on the USE_TORCH flag set


   .. py:method:: to_string() -> str

      Converts the AxonInfo object to a string representation using JSON.



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

   .. py:attribute:: DelegateInfo
      :value: 3

      

   .. py:attribute:: DelegatedInfo
      :value: 5

      

   .. py:attribute:: IPInfo
      :value: 7

      

   .. py:attribute:: NeuronInfo
      :value: 1

      

   .. py:attribute:: NeuronInfoLite
      :value: 4

      

   .. py:attribute:: StakeInfo
      :value: 6

      

   .. py:attribute:: SubnetHyperparameters
      :value: 8

      

   .. py:attribute:: SubnetInfo
      :value: 2

      


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
      :type: str

      

   .. py:attribute:: nominators
      :type: List[Tuple[str, bittensor.utils.balance.Balance]]

      

   .. py:attribute:: owner_ss58
      :type: str

      

   .. py:attribute:: registrations
      :type: List[int]

      

   .. py:attribute:: return_per_1000
      :type: bittensor.utils.balance.Balance

      

   .. py:attribute:: take
      :type: float

      

   .. py:attribute:: total_daily_return
      :type: bittensor.utils.balance.Balance

      

   .. py:attribute:: total_stake
      :type: bittensor.utils.balance.Balance

      

   .. py:attribute:: validator_permits
      :type: List[int]

      

   .. py:method:: delegated_list_from_vec_u8(vec_u8: List[int]) -> List[Tuple[DelegateInfo, bittensor.utils.balance.Balance]]
      :classmethod:

      Returns a list of Tuples of DelegateInfo objects, and Balance, from a ``vec_u8``.

      This is the list of delegates that the user has delegated to, and the amount of stake delegated.


   .. py:method:: fix_decoded_values(decoded: Any) -> DelegateInfo
      :classmethod:

      Fixes the decoded values.


   .. py:method:: from_vec_u8(vec_u8: List[int]) -> Optional[DelegateInfo]
      :classmethod:

      Returns a DelegateInfo object from a ``vec_u8``.


   .. py:method:: list_from_vec_u8(vec_u8: List[int]) -> List[DelegateInfo]
      :classmethod:

      Returns a list of DelegateInfo objects from a ``vec_u8``.



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
      :type: str

      

   .. py:attribute:: nominators
      :type: int

      

   .. py:attribute:: owner_ss58
      :type: str

      

   .. py:attribute:: registrations
      :type: list[int]

      

   .. py:attribute:: return_per_1000
      :type: int

      

   .. py:attribute:: take
      :type: float

      

   .. py:attribute:: total_daily_return
      :type: int

      

   .. py:attribute:: validator_permits
      :type: list[int]

      


.. py:class:: IPInfo


   Dataclass for associated IP Info.

   .. py:attribute:: ip
      :type: str

      

   .. py:attribute:: ip_type
      :type: int

      

   .. py:attribute:: protocol
      :type: int

      

   .. py:method:: _from_parameter_dict_numpy(parameter_dict: dict[str, Any]) -> IPInfo
      :classmethod:

      Returns a IPInfo object from a parameter_dict.


   .. py:method:: _from_parameter_dict_torch(parameter_dict: bittensor.utils.registration.torch.nn.ParameterDict) -> IPInfo
      :classmethod:

      Returns a IPInfo object from a torch parameter_dict.


   .. py:method:: _to_parameter_dict(return_type: str) -> Union[dict[str, Union[str, int]], bittensor.utils.registration.torch.nn.ParameterDict]

      Returns a torch tensor of the subnet info.


   .. py:method:: encode() -> Dict[str, Any]

      Returns a dictionary of the IPInfo object that can be encoded.


   .. py:method:: fix_decoded_values(decoded: Dict) -> IPInfo
      :classmethod:

      Returns a SubnetInfo object from a decoded IPInfo dictionary.


   .. py:method:: from_parameter_dict(parameter_dict: Union[dict[str, Any], bittensor.utils.registration.torch.nn.ParameterDict]) -> IPInfo
      :classmethod:


   .. py:method:: from_vec_u8(vec_u8: List[int]) -> Optional[IPInfo]
      :classmethod:

      Returns a IPInfo object from a ``vec_u8``.


   .. py:method:: list_from_vec_u8(vec_u8: List[int]) -> List[IPInfo]
      :classmethod:

      Returns a list of IPInfo objects from a ``vec_u8``.


   .. py:method:: to_parameter_dict() -> Union[dict[str, Union[str, int]], bittensor.utils.registration.torch.nn.ParameterDict]

      Returns a torch tensor or dict of the subnet IP info.



.. py:class:: NeuronInfo


   Dataclass for neuron metadata.

   .. py:attribute:: active
      :type: int

      

   .. py:attribute:: axon_info
      :type: Optional[AxonInfo]

      

   .. py:attribute:: bonds
      :type: List[List[int]]

      

   .. py:attribute:: coldkey
      :type: str

      

   .. py:attribute:: consensus
      :type: float

      

   .. py:attribute:: dividends
      :type: float

      

   .. py:attribute:: emission
      :type: float

      

   .. py:attribute:: hotkey
      :type: str

      

   .. py:attribute:: incentive
      :type: float

      

   .. py:attribute:: is_null
      :type: bool
      :value: False

      

   .. py:attribute:: last_update
      :type: int

      

   .. py:attribute:: netuid
      :type: int

      

   .. py:attribute:: prometheus_info
      :type: Optional[PrometheusInfo]

      

   .. py:attribute:: pruning_score
      :type: int

      

   .. py:attribute:: rank
      :type: float

      

   .. py:attribute:: stake
      :type: bittensor.utils.balance.Balance

      

   .. py:attribute:: stake_dict
      :type: Dict[str, bittensor.utils.balance.Balance]

      

   .. py:attribute:: total_stake
      :type: bittensor.utils.balance.Balance

      

   .. py:attribute:: trust
      :type: float

      

   .. py:attribute:: uid
      :type: int

      

   .. py:attribute:: validator_permit
      :type: bool

      

   .. py:attribute:: validator_trust
      :type: float

      

   .. py:attribute:: weights
      :type: List[List[int]]

      

   .. py:method:: _neuron_dict_to_namespace(neuron_dict) -> NeuronInfo
      :staticmethod:


   .. py:method:: _null_neuron() -> NeuronInfo
      :staticmethod:


   .. py:method:: fix_decoded_values(neuron_info_decoded: Any) -> NeuronInfo
      :classmethod:

      Fixes the values of the NeuronInfo object.


   .. py:method:: from_vec_u8(vec_u8: List[int]) -> NeuronInfo
      :classmethod:

      Returns a NeuronInfo object from a ``vec_u8``.


   .. py:method:: from_weights_bonds_and_neuron_lite(neuron_lite: NeuronInfoLite, weights_as_dict: Dict[int, List[Tuple[int, int]]], bonds_as_dict: Dict[int, List[Tuple[int, int]]]) -> NeuronInfo
      :classmethod:


   .. py:method:: list_from_vec_u8(vec_u8: List[int]) -> List[NeuronInfo]
      :classmethod:

      Returns a list of NeuronInfo objects from a ``vec_u8``.



.. py:class:: NeuronInfoLite


   Dataclass for neuron metadata, but without the weights and bonds.

   .. py:attribute:: active
      :type: int

      

   .. py:attribute:: axon_info
      :type: NeuronInfoLite.axon_info

      

   .. py:attribute:: coldkey
      :type: str

      

   .. py:attribute:: consensus
      :type: float

      

   .. py:attribute:: dividends
      :type: float

      

   .. py:attribute:: emission
      :type: float

      

   .. py:attribute:: hotkey
      :type: str

      

   .. py:attribute:: incentive
      :type: float

      

   .. py:attribute:: is_null
      :type: bool
      :value: False

      

   .. py:attribute:: last_update
      :type: int

      

   .. py:attribute:: netuid
      :type: int

      

   .. py:attribute:: prometheus_info
      :type: PrometheusInfo

      

   .. py:attribute:: pruning_score
      :type: int

      

   .. py:attribute:: rank
      :type: float

      

   .. py:attribute:: stake
      :type: bittensor.utils.balance.Balance

      

   .. py:attribute:: stake_dict
      :type: Dict[str, bittensor.utils.balance.Balance]

      

   .. py:attribute:: total_stake
      :type: bittensor.utils.balance.Balance

      

   .. py:attribute:: trust
      :type: float

      

   .. py:attribute:: uid
      :type: int

      

   .. py:attribute:: validator_permit
      :type: bool

      

   .. py:attribute:: validator_trust
      :type: float

      

   .. py:method:: _neuron_dict_to_namespace(neuron_dict) -> NeuronInfoLite
      :staticmethod:


   .. py:method:: _null_neuron() -> NeuronInfoLite
      :staticmethod:


   .. py:method:: fix_decoded_values(neuron_info_decoded: Any) -> NeuronInfoLite
      :classmethod:

      Fixes the values of the NeuronInfoLite object.


   .. py:method:: from_vec_u8(vec_u8: List[int]) -> NeuronInfoLite
      :classmethod:

      Returns a NeuronInfoLite object from a ``vec_u8``.


   .. py:method:: list_from_vec_u8(vec_u8: List[int]) -> List[NeuronInfoLite]
      :classmethod:

      Returns a list of NeuronInfoLite objects from a ``vec_u8``.



.. py:class:: PrometheusInfo


   Dataclass for prometheus info.

   .. py:attribute:: block
      :type: int

      

   .. py:attribute:: ip
      :type: str

      

   .. py:attribute:: ip_type
      :type: int

      

   .. py:attribute:: port
      :type: int

      

   .. py:attribute:: version
      :type: int

      

   .. py:method:: fix_decoded_values(prometheus_info_decoded: Dict) -> PrometheusInfo
      :classmethod:

      Returns a PrometheusInfo object from a prometheus_info_decoded dictionary.



.. py:data:: ProposalCallData

   

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

   .. py:attribute:: ayes
      :type: List[str]

      

   .. py:attribute:: end
      :type: int

      

   .. py:attribute:: index
      :type: int

      

   .. py:attribute:: nays
      :type: List[str]

      

   .. py:attribute:: threshold
      :type: int

      


.. py:data:: RAOPERTAO
   :value: 1000000000.0

   

.. py:class:: StakeInfo


   Dataclass for stake info.

   .. py:attribute:: coldkey_ss58
      :type: str

      

   .. py:attribute:: hotkey_ss58
      :type: str

      

   .. py:attribute:: stake
      :type: bittensor.utils.balance.Balance

      

   .. py:method:: fix_decoded_values(decoded: Any) -> StakeInfo
      :classmethod:

      Fixes the decoded values.


   .. py:method:: from_vec_u8(vec_u8: List[int]) -> Optional[StakeInfo]
      :classmethod:

      Returns a StakeInfo object from a ``vec_u8``.


   .. py:method:: list_from_vec_u8(vec_u8: List[int]) -> List[StakeInfo]
      :classmethod:

      Returns a list of StakeInfo objects from a ``vec_u8``.


   .. py:method:: list_of_tuple_from_vec_u8(vec_u8: List[int]) -> Dict[str, List[StakeInfo]]
      :classmethod:

      Returns a list of StakeInfo objects from a ``vec_u8``.



.. py:class:: SubnetHyperparameters


   Dataclass for subnet hyperparameters.

   .. py:attribute:: activity_cutoff
      :type: int

      

   .. py:attribute:: adjustment_alpha
      :type: int

      

   .. py:attribute:: adjustment_interval
      :type: int

      

   .. py:attribute:: bonds_moving_avg
      :type: int

      

   .. py:attribute:: difficulty
      :type: int

      

   .. py:attribute:: immunity_period
      :type: int

      

   .. py:attribute:: kappa
      :type: int

      

   .. py:attribute:: max_burn
      :type: int

      

   .. py:attribute:: max_difficulty
      :type: int

      

   .. py:attribute:: max_regs_per_block
      :type: int

      

   .. py:attribute:: max_validators
      :type: int

      

   .. py:attribute:: max_weight_limit
      :type: float

      

   .. py:attribute:: min_allowed_weights
      :type: int

      

   .. py:attribute:: min_burn
      :type: int

      

   .. py:attribute:: min_difficulty
      :type: int

      

   .. py:attribute:: registration_allowed
      :type: bool

      

   .. py:attribute:: rho
      :type: int

      

   .. py:attribute:: serving_rate_limit
      :type: int

      

   .. py:attribute:: target_regs_per_interval
      :type: int

      

   .. py:attribute:: tempo
      :type: int

      

   .. py:attribute:: weights_rate_limit
      :type: int

      

   .. py:attribute:: weights_version
      :type: int

      

   .. py:method:: _from_parameter_dict_numpy(parameter_dict: dict[str, Any]) -> SubnetHyperparameters
      :classmethod:

      Returns a SubnetHyperparameters object from a parameter_dict.


   .. py:method:: _from_parameter_dict_torch(parameter_dict: bittensor.utils.registration.torch.nn.ParameterDict) -> SubnetHyperparameters
      :classmethod:

      Returns a SubnetHyperparameters object from a torch parameter_dict.


   .. py:method:: _to_parameter_dict_torch(return_type: str) -> Union[dict[str, Union[int, float, bool]], bittensor.utils.registration.torch.nn.ParameterDict]


   .. py:method:: fix_decoded_values(decoded: Dict) -> SubnetHyperparameters
      :classmethod:

      Returns a SubnetInfo object from a decoded SubnetInfo dictionary.


   .. py:method:: from_parameter_dict(parameter_dict: Union[dict[str, Any], bittensor.utils.registration.torch.nn.ParameterDict]) -> SubnetHyperparameters
      :classmethod:


   .. py:method:: from_vec_u8(vec_u8: List[int]) -> Optional[SubnetHyperparameters]
      :classmethod:

      Returns a SubnetHyperparameters object from a ``vec_u8``.


   .. py:method:: list_from_vec_u8(vec_u8: List[int]) -> List[SubnetHyperparameters]
      :classmethod:

      Returns a list of SubnetHyperparameters objects from a ``vec_u8``.


   .. py:method:: to_parameter_dict() -> Union[dict[str, Union[int, float, bool]], bittensor.utils.registration.torch.nn.ParameterDict]

      Returns a torch tensor or dict of the subnet hyperparameters.



.. py:class:: SubnetInfo


   Dataclass for subnet info.

   .. py:attribute:: blocks_since_epoch
      :type: int

      

   .. py:attribute:: burn
      :type: bittensor.utils.balance.Balance

      

   .. py:attribute:: connection_requirements
      :type: Dict[str, float]

      

   .. py:attribute:: difficulty
      :type: int

      

   .. py:attribute:: emission_value
      :type: float

      

   .. py:attribute:: immunity_period
      :type: int

      

   .. py:attribute:: kappa
      :type: int

      

   .. py:attribute:: max_allowed_validators
      :type: int

      

   .. py:attribute:: max_n
      :type: int

      

   .. py:attribute:: max_weight_limit
      :type: float

      

   .. py:attribute:: min_allowed_weights
      :type: int

      

   .. py:attribute:: modality
      :type: int

      

   .. py:attribute:: netuid
      :type: int

      

   .. py:attribute:: owner_ss58
      :type: str

      

   .. py:attribute:: rho
      :type: int

      

   .. py:attribute:: scaling_law_power
      :type: float

      

   .. py:attribute:: subnetwork_n
      :type: int

      

   .. py:attribute:: tempo
      :type: int

      

   .. py:method:: _from_parameter_dict_numpy(parameter_dict: dict[str, Any]) -> SubnetInfo
      :classmethod:

      Returns a SubnetInfo object from a parameter_dict.


   .. py:method:: _from_parameter_dict_torch(parameter_dict: bittensor.utils.registration.torch.nn.ParameterDict) -> SubnetInfo
      :classmethod:

      Returns a SubnetInfo object from a torch parameter_dict.


   .. py:method:: _to_parameter_dict(return_type: str) -> Union[dict[str, Any], bittensor.utils.registration.torch.nn.ParameterDict]


   .. py:method:: fix_decoded_values(decoded: Dict) -> SubnetInfo
      :classmethod:

      Returns a SubnetInfo object from a decoded SubnetInfo dictionary.


   .. py:method:: from_parameter_dict(parameter_dict: Union[dict[str, Any], bittensor.utils.registration.torch.nn.ParameterDict]) -> SubnetInfo
      :classmethod:


   .. py:method:: from_vec_u8(vec_u8: List[int]) -> Optional[SubnetInfo]
      :classmethod:

      Returns a SubnetInfo object from a ``vec_u8``.


   .. py:method:: list_from_vec_u8(vec_u8: List[int]) -> List[SubnetInfo]
      :classmethod:

      Returns a list of SubnetInfo objects from a ``vec_u8``.


   .. py:method:: to_parameter_dict() -> Union[dict[str, Any], bittensor.utils.registration.torch.nn.ParameterDict]

      Returns a torch tensor or dict of the subnet info.



.. py:data:: U16_MAX
   :value: 65535

   

.. py:data:: U64_MAX
   :value: 18446744073709551615

   

.. py:data:: custom_rpc_type_registry

   

.. py:function:: from_scale_encoding(input: Union[List[int], bytes, scalecodec.base.ScaleBytes], type_name: ChainDataType, is_vec: bool = False, is_option: bool = False) -> Optional[Dict]


.. py:function:: from_scale_encoding_using_type_string(input: Union[List[int], bytes, scalecodec.base.ScaleBytes], type_string: str) -> Optional[Dict]


