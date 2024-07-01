:py:mod:`bittensor.extrinsics.unstaking`
========================================

.. py:module:: bittensor.extrinsics.unstaking


Module Contents
---------------


Functions
~~~~~~~~~

.. autoapisummary::

   bittensor.extrinsics.unstaking.__do_remove_stake_single
   bittensor.extrinsics.unstaking.check_threshold_amount
   bittensor.extrinsics.unstaking.unstake_extrinsic
   bittensor.extrinsics.unstaking.unstake_multiple_extrinsic



.. py:function:: __do_remove_stake_single(subtensor: bittensor.subtensor, wallet: bittensor.wallet, hotkey_ss58: str, amount: bittensor.Balance, wait_for_inclusion: bool = True, wait_for_finalization: bool = False) -> bool

   Executes an unstake call to the chain using the wallet and the amount specified.

   :param wallet: Bittensor wallet object.
   :type wallet: bittensor.wallet
   :param hotkey_ss58: Hotkey address to unstake from.
   :type hotkey_ss58: str
   :param amount: Amount to unstake as Bittensor balance object.
   :type amount: bittensor.Balance
   :param wait_for_inclusion: If set, waits for the extrinsic to enter a block before returning ``true``, or returns ``false`` if the extrinsic fails to enter the block within the timeout.
   :type wait_for_inclusion: bool
   :param wait_for_finalization: If set, waits for the extrinsic to be finalized on the chain before returning ``true``, or returns ``false`` if the extrinsic fails to be finalized within the timeout.
   :type wait_for_finalization: bool
   :param prompt: If ``true``, the call waits for confirmation from the user before proceeding.
   :type prompt: bool

   :returns:     Flag is ``true`` if extrinsic was finalized or uncluded in the block. If we did not wait for finalization / inclusion, the response is ``true``.
   :rtype: success (bool)

   :raises bittensor.errors.StakeError: If the extrinsic fails to be finalized or included in the block.
   :raises bittensor.errors.NotRegisteredError: If the hotkey is not registered in any subnets.


.. py:function:: check_threshold_amount(subtensor: bittensor.subtensor, unstaking_balance: bittensor.utils.balance.Balance) -> bool

   Checks if the unstaking amount is above the threshold or 0

   :param unstaking_balance: the balance to check for threshold limits.
   :type unstaking_balance: Balance

   :returns:

                 ``true`` if the unstaking is above the threshold or 0, or ``false`` if the
                     unstaking is below the threshold, but not 0.
   :rtype: success (bool)


.. py:function:: unstake_extrinsic(subtensor: bittensor.subtensor, wallet: bittensor.wallet, hotkey_ss58: Optional[str] = None, amount: Optional[Union[bittensor.utils.balance.Balance, float]] = None, wait_for_inclusion: bool = True, wait_for_finalization: bool = False, prompt: bool = False) -> bool

   Removes stake into the wallet coldkey from the specified hotkey ``uid``.

   :param wallet: Bittensor wallet object.
   :type wallet: bittensor.wallet
   :param hotkey_ss58: The ``ss58`` address of the hotkey to unstake from. By default, the wallet hotkey is used.
   :type hotkey_ss58: Optional[str]
   :param amount: Amount to stake as Bittensor balance, or ``float`` interpreted as Tao.
   :type amount: Union[Balance, float]
   :param wait_for_inclusion: If set, waits for the extrinsic to enter a block before returning ``true``, or returns ``false`` if the extrinsic fails to enter the block within the timeout.
   :type wait_for_inclusion: bool
   :param wait_for_finalization: If set, waits for the extrinsic to be finalized on the chain before returning ``true``, or returns ``false`` if the extrinsic fails to be finalized within the timeout.
   :type wait_for_finalization: bool
   :param prompt: If ``true``, the call waits for confirmation from the user before proceeding.
   :type prompt: bool

   :returns:     Flag is ``true`` if extrinsic was finalized or uncluded in the block. If we did not wait for finalization / inclusion, the response is ``true``.
   :rtype: success (bool)


.. py:function:: unstake_multiple_extrinsic(subtensor: bittensor.subtensor, wallet: bittensor.wallet, hotkey_ss58s: List[str], amounts: Optional[List[Union[bittensor.utils.balance.Balance, float]]] = None, wait_for_inclusion: bool = True, wait_for_finalization: bool = False, prompt: bool = False) -> bool

   Removes stake from each ``hotkey_ss58`` in the list, using each amount, to a common coldkey.

   :param wallet: The wallet with the coldkey to unstake to.
   :type wallet: bittensor.wallet
   :param hotkey_ss58s: List of hotkeys to unstake from.
   :type hotkey_ss58s: List[str]
   :param amounts: List of amounts to unstake. If ``None``, unstake all.
   :type amounts: List[Union[Balance, float]]
   :param wait_for_inclusion: If set, waits for the extrinsic to enter a block before returning ``true``, or returns ``false`` if the extrinsic fails to enter the block within the timeout.
   :type wait_for_inclusion: bool
   :param wait_for_finalization: If set, waits for the extrinsic to be finalized on the chain before returning ``true``, or returns ``false`` if the extrinsic fails to be finalized within the timeout.
   :type wait_for_finalization: bool
   :param prompt: If ``true``, the call waits for confirmation from the user before proceeding.
   :type prompt: bool

   :returns:     Flag is ``true`` if extrinsic was finalized or included in the block. Flag is ``true`` if any wallet was unstaked. If we did not wait for finalization / inclusion, the response is ``true``.
   :rtype: success (bool)


