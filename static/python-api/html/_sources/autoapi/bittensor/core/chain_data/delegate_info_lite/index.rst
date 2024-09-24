bittensor.core.chain_data.delegate_info_lite
============================================

.. py:module:: bittensor.core.chain_data.delegate_info_lite


Classes
-------

.. autoapisummary::

   bittensor.core.chain_data.delegate_info_lite.DelegateInfoLite


Module Contents
---------------

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


