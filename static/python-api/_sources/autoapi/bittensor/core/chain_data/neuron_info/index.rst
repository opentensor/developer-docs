bittensor.core.chain_data.neuron_info
=====================================

.. py:module:: bittensor.core.chain_data.neuron_info


Classes
-------

.. autoapisummary::

   bittensor.core.chain_data.neuron_info.NeuronInfo


Module Contents
---------------

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
   :vartype weights: list[tuple[int]]
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


   .. py:attribute:: active
      :type:  int


   .. py:attribute:: axon_info
      :type:  Optional[bittensor.core.chain_data.axon_info.AxonInfo]
      :value: None



   .. py:attribute:: bonds
      :type:  list[list[int]]


   .. py:attribute:: coldkey
      :type:  str


   .. py:attribute:: consensus
      :type:  float


   .. py:attribute:: dividends
      :type:  float


   .. py:attribute:: emission
      :type:  float


   .. py:method:: from_vec_u8(vec_u8)
      :classmethod:


      Instantiates NeuronInfo from a byte vector.



   .. py:method:: from_weights_bonds_and_neuron_lite(neuron_lite, weights_as_dict, bonds_as_dict)
      :classmethod:


      Creates an instance of NeuronInfo from NeuronInfoLite and dictionaries of weights and bonds.

      :param neuron_lite: A lite version of the neuron containing basic attributes.
      :type neuron_lite: NeuronInfoLite
      :param weights_as_dict: A dictionary where the key is the UID and the value is
                              a list of weight tuples associated with the neuron.
      :type weights_as_dict: dict[int, list[tuple[int, int]]]
      :param bonds_as_dict: A dictionary where the key is the UID and the value is a
                            list of bond tuples associated with the neuron.
      :type bonds_as_dict: dict[int, list[tuple[int, int]]]

      :returns: An instance of NeuronInfo populated with the provided weights and bonds.
      :rtype: NeuronInfo



   .. py:method:: get_null_neuron()
      :staticmethod:


      Returns a null NeuronInfo instance.



   .. py:attribute:: hotkey
      :type:  str


   .. py:attribute:: incentive
      :type:  float


   .. py:attribute:: is_null
      :type:  bool
      :value: False



   .. py:attribute:: last_update
      :type:  int


   .. py:method:: list_from_vec_u8(vec_u8)
      :classmethod:



   .. py:attribute:: netuid
      :type:  int


   .. py:attribute:: prometheus_info
      :type:  Optional[bittensor.core.chain_data.prometheus_info.PrometheusInfo]
      :value: None



   .. py:attribute:: pruning_score
      :type:  int


   .. py:attribute:: rank
      :type:  float


   .. py:attribute:: stake
      :type:  bittensor.utils.balance.Balance


   .. py:attribute:: stake_dict
      :type:  dict[str, bittensor.utils.balance.Balance]


   .. py:attribute:: total_stake
      :type:  bittensor.utils.balance.Balance


   .. py:attribute:: trust
      :type:  float


   .. py:attribute:: uid
      :type:  int


   .. py:attribute:: validator_permit
      :type:  bool


   .. py:attribute:: validator_trust
      :type:  float


   .. py:attribute:: weights
      :type:  list[tuple[int, int]]


