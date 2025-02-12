bittensor.core.chain_data.stake_info
====================================

.. py:module:: bittensor.core.chain_data.stake_info


Classes
-------

.. autoapisummary::

   bittensor.core.chain_data.stake_info.StakeInfo


Module Contents
---------------

.. py:class:: StakeInfo

   Dataclass for representing stake information linked to hotkey and coldkey pairs.

   :ivar hotkey_ss58: The SS58 encoded hotkey address.
   :vartype hotkey_ss58: str
   :ivar coldkey_ss58: The SS58 encoded coldkey address.
   :vartype coldkey_ss58: str
   :ivar stake: The stake associated with the hotkey-coldkey pair, represented as a Balance object.

   :vartype stake: Balance


   .. py:attribute:: coldkey_ss58
      :type:  str


   .. py:method:: fix_decoded_values(decoded)
      :classmethod:


      Fixes the decoded values.



   .. py:method:: from_vec_u8(vec_u8)
      :classmethod:


      Returns a StakeInfo object from a ``vec_u8``.



   .. py:attribute:: hotkey_ss58
      :type:  str


   .. py:method:: list_from_vec_u8(vec_u8)
      :classmethod:


      Returns a list of StakeInfo objects from a ``vec_u8``.



   .. py:method:: list_of_tuple_from_vec_u8(vec_u8)
      :classmethod:


      Returns a list of StakeInfo objects from a ``vec_u8``.



   .. py:attribute:: stake
      :type:  bittensor.utils.balance.Balance


