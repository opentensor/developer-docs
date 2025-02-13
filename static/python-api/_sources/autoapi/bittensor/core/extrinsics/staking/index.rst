bittensor.core.extrinsics.staking
=================================

.. py:module:: bittensor.core.extrinsics.staking


Functions
---------

.. autoapisummary::

   bittensor.core.extrinsics.staking.add_stake_extrinsic
   bittensor.core.extrinsics.staking.add_stake_multiple_extrinsic


Module Contents
---------------

.. py:function:: add_stake_extrinsic(subtensor, wallet, hotkey_ss58 = None, amount = None, wait_for_inclusion = True, wait_for_finalization = False)

   Adds the specified amount of stake to passed hotkey `uid`.

   :param subtensor: the Subtensor object to use
   :param wallet: Bittensor wallet object.
   :param hotkey_ss58: The `ss58` address of the hotkey account to stake to defaults to the wallet's hotkey.
   :param amount: Amount to stake as Bittensor balance, `None` if staking all.
   :param wait_for_inclusion: If set, waits for the extrinsic to enter a block before returning `True`, or returns
                              `False` if the extrinsic fails to enter the block within the timeout.
   :param wait_for_finalization: If set, waits for the extrinsic to be finalized on the chain before returning `True`,
                                 or returns `False` if the extrinsic fails to be finalized within the timeout.

   :returns:

             Flag is `True` if extrinsic was finalized or included in the block. If we did not wait for
                           finalization/inclusion, the response is `True`.
   :rtype: success


.. py:function:: add_stake_multiple_extrinsic(subtensor, wallet, hotkey_ss58s, amounts = None, wait_for_inclusion = True, wait_for_finalization = False)

   Adds stake to each ``hotkey_ss58`` in the list, using each amount, from a common coldkey.

   :param subtensor: The initialized SubtensorInterface object.
   :param wallet: Bittensor wallet object for the coldkey.
   :param hotkey_ss58s: List of hotkeys to stake to.
   :param amounts: List of amounts to stake. If `None`, stake all to the first hotkey.
   :param wait_for_inclusion: If set, waits for the extrinsic to enter a block before returning `True`, or returns `False`
                              if the extrinsic fails to enter the block within the timeout.
   :param wait_for_finalization: If set, waits for the extrinsic to be finalized on the chain before returning `True`, or
                                 returns `False` if the extrinsic fails to be finalized within the timeout.

   :returns:

             `True` if extrinsic was finalized or included in the block. `True` if any wallet was staked. If we did
                 not wait for finalization/inclusion, the response is `True`.
   :rtype: success


