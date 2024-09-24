bittensor.core.chain_data.neuron_info_lite
==========================================

.. py:module:: bittensor.core.chain_data.neuron_info_lite


Classes
-------

.. autoapisummary::

   bittensor.core.chain_data.neuron_info_lite.NeuronInfoLite


Module Contents
---------------

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



