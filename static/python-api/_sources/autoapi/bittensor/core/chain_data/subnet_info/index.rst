bittensor.core.chain_data.subnet_info
=====================================

.. py:module:: bittensor.core.chain_data.subnet_info


Classes
-------

.. autoapisummary::

   bittensor.core.chain_data.subnet_info.SubnetInfo


Module Contents
---------------

.. py:class:: SubnetInfo

   Dataclass for subnet info.


   .. py:attribute:: blocks_since_epoch
      :type:  int


   .. py:attribute:: burn
      :type:  bittensor.utils.balance.Balance


   .. py:attribute:: connection_requirements
      :type:  dict[str, float]


   .. py:attribute:: difficulty
      :type:  int


   .. py:attribute:: emission_value
      :type:  float


   .. py:attribute:: immunity_period
      :type:  int


   .. py:attribute:: kappa
      :type:  int


   .. py:method:: list_from_vec_u8(vec_u8)
      :classmethod:



   .. py:attribute:: max_allowed_validators
      :type:  int


   .. py:attribute:: max_n
      :type:  int


   .. py:attribute:: max_weight_limit
      :type:  float


   .. py:attribute:: min_allowed_weights
      :type:  int


   .. py:attribute:: modality
      :type:  int


   .. py:attribute:: netuid
      :type:  int


   .. py:attribute:: owner_ss58
      :type:  str


   .. py:attribute:: rho
      :type:  int


   .. py:attribute:: scaling_law_power
      :type:  float


   .. py:attribute:: subnetwork_n
      :type:  int


   .. py:attribute:: tempo
      :type:  int


