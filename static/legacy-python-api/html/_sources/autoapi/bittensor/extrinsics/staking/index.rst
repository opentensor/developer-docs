bittensor.extrinsics.staking
============================

.. py:module:: bittensor.extrinsics.staking


Attributes
----------

.. autoapisummary::

   bittensor.extrinsics.staking.console


Functions
---------

.. autoapisummary::

   bittensor.extrinsics.staking._check_threshold_amount
   bittensor.extrinsics.staking.add_stake_extrinsic
   bittensor.extrinsics.staking.add_stake_multiple_extrinsic
   bittensor.extrinsics.staking.__do_add_stake_single
   bittensor.extrinsics.staking.set_childkey_take_extrinsic
   bittensor.extrinsics.staking.set_children_extrinsic
   bittensor.extrinsics.staking.prepare_child_proportions


Module Contents
---------------

.. py:data:: console

.. py:function:: _check_threshold_amount(subtensor, stake_balance)

   Checks if the new stake balance will be above the minimum required stake threshold.

   :param stake_balance: the balance to check for threshold limits.
   :type stake_balance: Balance

   :returns:

                 ``true`` if the staking balance is above the threshold, or ``false`` if the
                     staking balance is below the threshold.
                 The threshold balance required to stake.
   :rtype: success, threshold (bool, Balance)


.. py:function:: add_stake_extrinsic(subtensor, wallet, hotkey_ss58 = None, amount = None, wait_for_inclusion = True, wait_for_finalization = False, prompt = False)

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


.. py:function:: add_stake_multiple_extrinsic(subtensor, wallet, hotkey_ss58s, amounts = None, wait_for_inclusion = True, wait_for_finalization = False, prompt = False)

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


.. py:function:: __do_add_stake_single(subtensor, wallet, hotkey_ss58, amount, wait_for_inclusion = True, wait_for_finalization = False)

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


.. py:function:: set_childkey_take_extrinsic(subtensor, wallet, hotkey, netuid, take, wait_for_inclusion = True, wait_for_finalization = False, prompt = False)

   Sets childkey take.

   :param subtensor: Subtensor endpoint to use.
   :type subtensor: bittensor.subtensor
   :param wallet: Bittensor wallet object.
   :type wallet: bittensor.wallet
   :param hotkey: Childkey hotkey.
   :type hotkey: str
   :param take: Childkey take value.
   :type take: float
   :param netuid: Unique identifier of for the subnet.
   :type netuid: int
   :param wait_for_inclusion: If set, waits for the extrinsic to enter a block before returning ``true``, or returns ``false`` if the extrinsic fails to enter the block within the timeout.
   :type wait_for_inclusion: bool
   :param wait_for_finalization: If set, waits for the extrinsic to be finalized on the chain before returning ``true``, or returns ``false`` if the extrinsic fails to be finalized within the timeout.
   :type wait_for_finalization: bool
   :param prompt: If ``true``, the call waits for confirmation from the user before proceeding.
   :type prompt: bool

   :returns: A tuple containing a success flag and an optional error message.
   :rtype: Tuple[bool, Optional[str]]

   :raises bittensor.errors.ChildHotkeyError: If the extrinsic fails to be finalized or included in the block.
   :raises bittensor.errors.NotRegisteredError: If the hotkey is not registered in any subnets.


.. py:function:: set_children_extrinsic(subtensor, wallet, hotkey, netuid, children_with_proportions, wait_for_inclusion = True, wait_for_finalization = False, prompt = False)

   Sets children hotkeys with proportions assigned from the parent.

   :param subtensor: Subtensor endpoint to use.
   :type subtensor: bittensor.subtensor
   :param wallet: Bittensor wallet object.
   :type wallet: bittensor.wallet
   :param hotkey: Parent hotkey.
   :type hotkey: str
   :param children_with_proportions: Children hotkeys.
   :type children_with_proportions: List[str]
   :param netuid: Unique identifier of for the subnet.
   :type netuid: int
   :param wait_for_inclusion: If set, waits for the extrinsic to enter a block before returning ``true``, or returns ``false`` if the extrinsic fails to enter the block within the timeout.
   :type wait_for_inclusion: bool
   :param wait_for_finalization: If set, waits for the extrinsic to be finalized on the chain before returning ``true``, or returns ``false`` if the extrinsic fails to be finalized within the timeout.
   :type wait_for_finalization: bool
   :param prompt: If ``true``, the call waits for confirmation from the user before proceeding.
   :type prompt: bool

   :returns: A tuple containing a success flag and an optional error message.
   :rtype: Tuple[bool, Optional[str]]

   :raises bittensor.errors.ChildHotkeyError: If the extrinsic fails to be finalized or included in the block.
   :raises bittensor.errors.NotRegisteredError: If the hotkey is not registered in any subnets.


.. py:function:: prepare_child_proportions(children_with_proportions)

   Convert proportions to u64 and normalize, ensuring total does not exceed u64 max.


