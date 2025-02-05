bittensor.core.extrinsics.transfer
==================================

.. py:module:: bittensor.core.extrinsics.transfer


Functions
---------

.. autoapisummary::

   bittensor.core.extrinsics.transfer.transfer_extrinsic


Module Contents
---------------

.. py:function:: transfer_extrinsic(subtensor, wallet, dest, amount, transfer_all = False, wait_for_inclusion = True, wait_for_finalization = False, keep_alive = True)

   Transfers funds from this wallet to the destination public key address.

   :param subtensor: the Subtensor object used for transfer
   :type subtensor: bittensor.core.subtensor.Subtensor
   :param wallet: Bittensor wallet object to make transfer from.
   :type wallet: bittensor_wallet.Wallet
   :param dest: Destination public key address (ss58_address or ed25519) of recipient.
   :type dest: str
   :param amount: Amount to stake as Bittensor balance.
   :type amount: bittensor.utils.balance.Balance
   :param transfer_all: Whether to transfer all funds from this wallet to the destination address.
   :type transfer_all: bool
   :param wait_for_inclusion: If set, waits for the extrinsic to enter a block before returning `True`, or returns
                              `False` if the extrinsic fails to enter the block within the timeout.
   :type wait_for_inclusion: bool
   :param wait_for_finalization: If set, waits for the extrinsic to be finalized on the chain before returning
                                 `True`, or returns `False` if the extrinsic fails to be finalized within the timeout.
   :type wait_for_finalization: bool
   :param keep_alive: If set, keeps the account alive by keeping the balance above the existential deposit.
   :type keep_alive: bool

   :returns:

             Flag is `True` if extrinsic was finalized or included in the block. If we did not wait for
                 finalization / inclusion, the response is `True`, regardless of its inclusion.
   :rtype: success (bool)


