bittensor.core.chain_data.delegate_info
=======================================

.. py:module:: bittensor.core.chain_data.delegate_info


Classes
-------

.. autoapisummary::

   bittensor.core.chain_data.delegate_info.DelegateInfo


Module Contents
---------------

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



