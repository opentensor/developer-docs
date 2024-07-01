:py:mod:`bittensor.extrinsics.staking`
======================================

.. py:module:: bittensor.extrinsics.staking


Module Contents
---------------


Functions
~~~~~~~~~

.. autoapisummary::

   bittensor.extrinsics.staking.__do_add_stake_single
   bittensor.extrinsics.staking.add_stake_extrinsic
   bittensor.extrinsics.staking.add_stake_multiple_extrinsic



.. py:function:: __do_add_stake_single(subtensor: bittensor.subtensor, wallet: bittensor.wallet, hotkey_ss58: str, amount: bittensor.Balance, wait_for_inclusion: bool = True, wait_for_finalization: bool = False) -> bool

   Executes a stake call to the chain using the wallet and the amount specified.

   :param wallet: Bittensor wallet object.
   :type wallet: bittensor.wallet
   :param hotkey_ss58: Hotkey to stake to.
   :type hotkey_ss58: str
   :param amount: Amount to stake as Bittensor balance object.
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
   :raises bittensor.errors.NotDelegateError: If the hotkey is not a delegate.
   :raises bittensor.errors.NotRegisteredError: If the hotkey is not registered in any subnets.


.. py:function:: add_stake_extrinsic(subtensor: bittensor.subtensor, wallet: bittensor.wallet, hotkey_ss58: Optional[str] = None, amount: Optional[Union[bittensor.utils.balance.Balance, float]] = None, wait_for_inclusion: bool = True, wait_for_finalization: bool = False, prompt: bool = False) -> bool

   Adds the specified amount of stake to passed hotkey ``uid``.

   :param wallet: Bittensor wallet object.
   :type wallet: bittensor.wallet
   :param hotkey_ss58: The ``ss58`` address of the hotkey account to stake to defaults to the wallet's hotkey.
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

   :raises bittensor.errors.NotRegisteredError: If the wallet is not registered on the chain.
   :raises bittensor.errors.NotDelegateError: If the hotkey is not a delegate on the chain.


.. py:function:: add_stake_multiple_extrinsic(subtensor: bittensor.subtensor, wallet: bittensor.wallet, hotkey_ss58s: List[str], amounts: Optional[List[Union[bittensor.utils.balance.Balance, float]]] = None, wait_for_inclusion: bool = True, wait_for_finalization: bool = False, prompt: bool = False) -> bool

   Adds stake to each ``hotkey_ss58`` in the list, using each amount, from a common coldkey.

   :param wallet: Bittensor wallet object for the coldkey.
   :type wallet: bittensor.wallet
   :param hotkey_ss58s: List of hotkeys to stake to.
   :type hotkey_ss58s: List[str]
   :param amounts: List of amounts to stake. If ``None``, stake all to the first hotkey.
   :type amounts: List[Union[Balance, float]]
   :param wait_for_inclusion: If set, waits for the extrinsic to enter a block before returning ``true``, or returns ``false`` if the extrinsic fails to enter the block within the timeout.
   :type wait_for_inclusion: bool
   :param wait_for_finalization: If set, waits for the extrinsic to be finalized on the chain before returning ``true``, or returns ``false`` if the extrinsic fails to be finalized within the timeout.
   :type wait_for_finalization: bool
   :param prompt: If ``true``, the call waits for confirmation from the user before proceeding.
   :type prompt: bool

   :returns:     Flag is ``true`` if extrinsic was finalized or included in the block. Flag is ``true`` if any wallet was staked. If we did not wait for finalization / inclusion, the response is ``true``.
   :rtype: success (bool)


