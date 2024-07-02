:py:mod:`bittensor.extrinsics.senate`
=====================================

.. py:module:: bittensor.extrinsics.senate


Module Contents
---------------


Functions
~~~~~~~~~

.. autoapisummary::

   bittensor.extrinsics.senate.leave_senate_extrinsic
   bittensor.extrinsics.senate.register_senate_extrinsic
   bittensor.extrinsics.senate.vote_senate_extrinsic



.. py:function:: leave_senate_extrinsic(subtensor: bittensor.subtensor, wallet: bittensor.wallet, wait_for_inclusion: bool = False, wait_for_finalization: bool = True, prompt: bool = False) -> bool

   Removes the wallet from chain for senate voting.

   :param wallet: Bittensor wallet object.
   :type wallet: bittensor.wallet
   :param wait_for_inclusion: If set, waits for the extrinsic to enter a block before returning ``true``, or returns ``false`` if the extrinsic fails to enter the block within the timeout.
   :type wait_for_inclusion: bool
   :param wait_for_finalization: If set, waits for the extrinsic to be finalized on the chain before returning ``true``, or returns ``false`` if the extrinsic fails to be finalized within the timeout.
   :type wait_for_finalization: bool
   :param prompt: If ``true``, the call waits for confirmation from the user before proceeding.
   :type prompt: bool

   :returns:     Flag is ``true`` if extrinsic was finalized or included in the block. If we did not wait for finalization / inclusion, the response is ``true``.
   :rtype: success (bool)


.. py:function:: register_senate_extrinsic(subtensor: bittensor.subtensor, wallet: bittensor.wallet, wait_for_inclusion: bool = False, wait_for_finalization: bool = True, prompt: bool = False) -> bool

   Registers the wallet to chain for senate voting.

   :param wallet: Bittensor wallet object.
   :type wallet: bittensor.wallet
   :param wait_for_inclusion: If set, waits for the extrinsic to enter a block before returning ``true``, or returns ``false`` if the extrinsic fails to enter the block within the timeout.
   :type wait_for_inclusion: bool
   :param wait_for_finalization: If set, waits for the extrinsic to be finalized on the chain before returning ``true``, or returns ``false`` if the extrinsic fails to be finalized within the timeout.
   :type wait_for_finalization: bool
   :param prompt: If ``true``, the call waits for confirmation from the user before proceeding.
   :type prompt: bool

   :returns:     Flag is ``true`` if extrinsic was finalized or included in the block. If we did not wait for finalization / inclusion, the response is ``true``.
   :rtype: success (bool)


.. py:function:: vote_senate_extrinsic(subtensor: bittensor.subtensor, wallet: bittensor.wallet, proposal_hash: str, proposal_idx: int, vote: bool, wait_for_inclusion: bool = False, wait_for_finalization: bool = True, prompt: bool = False) -> bool

   Votes ayes or nays on proposals.

   :param wallet: Bittensor wallet object.
   :type wallet: bittensor.wallet
   :param wait_for_inclusion: If set, waits for the extrinsic to enter a block before returning ``true``, or returns ``false`` if the extrinsic fails to enter the block within the timeout.
   :type wait_for_inclusion: bool
   :param wait_for_finalization: If set, waits for the extrinsic to be finalized on the chain before returning ``true``, or returns ``false`` if the extrinsic fails to be finalized within the timeout.
   :type wait_for_finalization: bool
   :param prompt: If ``true``, the call waits for confirmation from the user before proceeding.
   :type prompt: bool

   :returns:     Flag is ``true`` if extrinsic was finalized or included in the block. If we did not wait for finalization / inclusion, the response is ``true``.
   :rtype: success (bool)


