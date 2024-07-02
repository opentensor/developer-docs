:py:mod:`bittensor.extrinsics.delegation`
=========================================

.. py:module:: bittensor.extrinsics.delegation


Module Contents
---------------


Functions
~~~~~~~~~

.. autoapisummary::

   bittensor.extrinsics.delegation.decrease_take_extrinsic
   bittensor.extrinsics.delegation.delegate_extrinsic
   bittensor.extrinsics.delegation.increase_take_extrinsic
   bittensor.extrinsics.delegation.nominate_extrinsic
   bittensor.extrinsics.delegation.undelegate_extrinsic



Attributes
~~~~~~~~~~

.. autoapisummary::

   bittensor.extrinsics.delegation.logger


.. py:function:: decrease_take_extrinsic(subtensor: bittensor.subtensor, wallet: bittensor.wallet, hotkey_ss58: Optional[str] = None, take: int = 0, wait_for_finalization: bool = False, wait_for_inclusion: bool = True) -> bool

   Decrease delegate take for the hotkey.

   :param wallet: Bittensor wallet object.
   :type wallet: bittensor.wallet
   :param hotkey_ss58: The ``ss58`` address of the hotkey account to stake to defaults to the wallet's hotkey.
   :type hotkey_ss58: Optional[str]
   :param take: The ``take`` of the hotkey.
   :type take: float

   :returns: ``True`` if the transaction was successful.
   :rtype: success (bool)


.. py:function:: delegate_extrinsic(subtensor: bittensor.subtensor, wallet: bittensor.wallet, delegate_ss58: Optional[str] = None, amount: Optional[Union[bittensor.utils.balance.Balance, float]] = None, wait_for_inclusion: bool = True, wait_for_finalization: bool = False, prompt: bool = False) -> bool

   Delegates the specified amount of stake to the passed delegate.

   :param wallet: Bittensor wallet object.
   :type wallet: bittensor.wallet
   :param delegate_ss58: The ``ss58`` address of the delegate.
   :type delegate_ss58: Optional[str]
   :param amount: Amount to stake as bittensor balance, or ``float`` interpreted as Tao.
   :type amount: Union[Balance, float]
   :param wait_for_inclusion: If set, waits for the extrinsic to enter a block before returning ``true``, or returns ``false`` if the extrinsic fails to enter the block within the timeout.
   :type wait_for_inclusion: bool
   :param wait_for_finalization: If set, waits for the extrinsic to be finalized on the chain before returning ``true``, or returns ``false`` if the extrinsic fails to be finalized within the timeout.
   :type wait_for_finalization: bool
   :param prompt: If ``true``, the call waits for confirmation from the user before proceeding.
   :type prompt: bool

   :returns: Flag is ``true`` if extrinsic was finalized or uncluded in the block. If we did not wait for finalization / inclusion, the response is ``true``.
   :rtype: success (bool)

   :raises NotRegisteredError: If the wallet is not registered on the chain.
   :raises NotDelegateError: If the hotkey is not a delegate on the chain.


.. py:function:: increase_take_extrinsic(subtensor: bittensor.subtensor, wallet: bittensor.wallet, hotkey_ss58: Optional[str] = None, take: int = 0, wait_for_finalization: bool = False, wait_for_inclusion: bool = True) -> bool

   Increase delegate take for the hotkey.

   :param wallet: Bittensor wallet object.
   :type wallet: bittensor.wallet
   :param hotkey_ss58: The ``ss58`` address of the hotkey account to stake to defaults to the wallet's hotkey.
   :type hotkey_ss58: Optional[str]
   :param take: The ``take`` of the hotkey.
   :type take: float

   :returns: ``True`` if the transaction was successful.
   :rtype: success (bool)


.. py:data:: logger

   

.. py:function:: nominate_extrinsic(subtensor: bittensor.subtensor, wallet: bittensor.wallet, wait_for_finalization: bool = False, wait_for_inclusion: bool = True) -> bool

   Becomes a delegate for the hotkey.

   :param wallet: The wallet to become a delegate for.
   :type wallet: bittensor.wallet

   :returns: ``True`` if the transaction was successful.
   :rtype: success (bool)


.. py:function:: undelegate_extrinsic(subtensor: bittensor.subtensor, wallet: bittensor.wallet, delegate_ss58: Optional[str] = None, amount: Optional[Union[bittensor.utils.balance.Balance, float]] = None, wait_for_inclusion: bool = True, wait_for_finalization: bool = False, prompt: bool = False) -> bool

   Un-delegates stake from the passed delegate.

   :param wallet: Bittensor wallet object.
   :type wallet: bittensor.wallet
   :param delegate_ss58: The ``ss58`` address of the delegate.
   :type delegate_ss58: Optional[str]
   :param amount: Amount to unstake as bittensor balance, or ``float`` interpreted as Tao.
   :type amount: Union[Balance, float]
   :param wait_for_inclusion: If set, waits for the extrinsic to enter a block before returning ``true``, or returns ``false`` if the extrinsic fails to enter the block within the timeout.
   :type wait_for_inclusion: bool
   :param wait_for_finalization: If set, waits for the extrinsic to be finalized on the chain before returning ``true``, or returns ``false`` if the extrinsic fails to be finalized within the timeout.
   :type wait_for_finalization: bool
   :param prompt: If ``true``, the call waits for confirmation from the user before proceeding.
   :type prompt: bool

   :returns: Flag is ``true`` if extrinsic was finalized or uncluded in the block. If we did not wait for finalization / inclusion, the response is ``true``.
   :rtype: success (bool)

   :raises NotRegisteredError: If the wallet is not registered on the chain.
   :raises NotDelegateError: If the hotkey is not a delegate on the chain.


