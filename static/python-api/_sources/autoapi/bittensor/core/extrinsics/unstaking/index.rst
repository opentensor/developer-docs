bittensor.core.extrinsics.unstaking
===================================

.. py:module:: bittensor.core.extrinsics.unstaking


Functions
---------

.. autoapisummary::

   bittensor.core.extrinsics.unstaking.unstake_extrinsic
   bittensor.core.extrinsics.unstaking.unstake_multiple_extrinsic


Module Contents
---------------

.. py:function:: unstake_extrinsic(subtensor, wallet, hotkey_ss58 = None, amount = None, wait_for_inclusion = True, wait_for_finalization = False)

   Removes stake into the wallet coldkey from the specified hotkey ``uid``.

   :param subtensor: Subtensor instance.
   :type subtensor: bittensor.core.subtensor.Subtensor
   :param wallet: Bittensor wallet object.
   :type wallet: bittensor_wallet.Wallet
   :param hotkey_ss58: The ``ss58`` address of the hotkey to unstake from. By default, the wallet hotkey
                       is used.
   :type hotkey_ss58: Optional[str]
   :param amount: Amount to stake as Bittensor balance, or ``float`` interpreted as Tao.
   :type amount: Union[Balance, float]
   :param wait_for_inclusion: If set, waits for the extrinsic to enter a block before returning ``True``, or
                              returns ``False`` if the extrinsic fails to enter the block within the timeout.
   :type wait_for_inclusion: bool
   :param wait_for_finalization: If set, waits for the extrinsic to be finalized on the chain before returning
                                 ``True``, or returns ``False`` if the extrinsic fails to be finalized within the timeout.
   :type wait_for_finalization: bool

   :returns:

             Flag is ``True`` if extrinsic was finalized or included in the block. If we did not wait for
                 finalization / inclusion, the response is ``True``.
   :rtype: success (bool)


.. py:function:: unstake_multiple_extrinsic(subtensor, wallet, hotkey_ss58s, amounts = None, wait_for_inclusion = True, wait_for_finalization = False)

   Removes stake from each ``hotkey_ss58`` in the list, using each amount, to a common coldkey.

   :param subtensor: Subtensor instance.
   :type subtensor: bittensor.core.subtensor.Subtensor
   :param wallet: The wallet with the coldkey to unstake to.
   :type wallet: bittensor_wallet.Wallet
   :param hotkey_ss58s: List of hotkeys to unstake from.
   :type hotkey_ss58s: List[str]
   :param amounts: List of amounts to unstake. If ``None``, unstake all.
   :type amounts: List[Union[Balance, float]]
   :param wait_for_inclusion: If set, waits for the extrinsic to enter a block before returning ``True``, or
                              returns ``False`` if the extrinsic fails to enter the block within the timeout.
   :type wait_for_inclusion: bool
   :param wait_for_finalization: If set, waits for the extrinsic to be finalized on the chain before returning
                                 ``True``, or returns ``False`` if the extrinsic fails to be finalized within the timeout.
   :type wait_for_finalization: bool

   :returns:

             Flag is ``True`` if extrinsic was finalized or included in the block. Flag is ``True`` if any
                 wallet was unstaked. If we did not wait for finalization / inclusion, the response is ``True``.
   :rtype: success (bool)


