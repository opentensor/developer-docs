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



