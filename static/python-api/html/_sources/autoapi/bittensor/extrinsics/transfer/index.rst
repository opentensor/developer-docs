:py:mod:`bittensor.extrinsics.transfer`
=======================================

.. py:module:: bittensor.extrinsics.transfer


Module Contents
---------------


Functions
~~~~~~~~~

.. autoapisummary::

   bittensor.extrinsics.transfer.transfer_extrinsic



.. py:function:: transfer_extrinsic(subtensor: bittensor.subtensor, wallet: bittensor.wallet, dest: str, amount: Union[bittensor.utils.balance.Balance, float], wait_for_inclusion: bool = True, wait_for_finalization: bool = False, keep_alive: bool = True, prompt: bool = False) -> bool

   Transfers funds from this wallet to the destination public key address.

   :param wallet: Bittensor wallet object to make transfer from.
   :type wallet: bittensor.wallet
   :param dest: Destination public key address of reciever.
   :type dest: str, ss58_address or ed25519
   :param amount: Amount to stake as Bittensor balance, or ``float`` interpreted as Tao.
   :type amount: Union[Balance, int]
   :param wait_for_inclusion: If set, waits for the extrinsic to enter a block before returning ``true``, or returns ``false`` if the extrinsic fails to enter the block within the timeout.
   :type wait_for_inclusion: bool
   :param wait_for_finalization: If set, waits for the extrinsic to be finalized on the chain before returning ``true``, or returns ``false`` if the extrinsic fails to be finalized within the timeout.
   :type wait_for_finalization: bool
   :param keep_alive: If set, keeps the account alive by keeping the balance above the existential deposit.
   :type keep_alive: bool
   :param prompt: If ``true``, the call waits for confirmation from the user before proceeding.
   :type prompt: bool

   :returns:     Flag is ``true`` if extrinsic was finalized or uncluded in the block. If we did not wait for finalization / inclusion, the response is ``true``.
   :rtype: success (bool)


