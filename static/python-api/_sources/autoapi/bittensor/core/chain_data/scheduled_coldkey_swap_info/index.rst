bittensor.core.chain_data.scheduled_coldkey_swap_info
=====================================================

.. py:module:: bittensor.core.chain_data.scheduled_coldkey_swap_info


Classes
-------

.. autoapisummary::

   bittensor.core.chain_data.scheduled_coldkey_swap_info.ScheduledColdkeySwapInfo


Module Contents
---------------

.. py:class:: ScheduledColdkeySwapInfo

   The `ScheduledColdkeySwapInfo` class is a dataclass representing information about scheduled cold key swaps.

   :ivar old_coldkey: The old cold key before the swap.
   :vartype old_coldkey: str
   :ivar new_coldkey: The new cold key after the swap.
   :vartype new_coldkey: str
   :ivar arbitration_block: The block number at which the arbitration of the swap will take place.

   :vartype arbitration_block: int


   .. py:attribute:: arbitration_block
      :type:  int


   .. py:method:: decode_account_id_list(vec_u8)
      :classmethod:


      Decodes a list of AccountIds from vec_u8.



   .. py:method:: fix_decoded_values(decoded)
      :classmethod:


      Fixes the decoded values.



   .. py:method:: from_vec_u8(vec_u8)
      :classmethod:


      Returns a ScheduledColdkeySwapInfo object from a ``vec_u8``.



   .. py:method:: list_from_vec_u8(vec_u8)
      :classmethod:


      Returns a list of ScheduledColdkeySwapInfo objects from a ``vec_u8``.



   .. py:attribute:: new_coldkey
      :type:  str


   .. py:attribute:: old_coldkey
      :type:  str


