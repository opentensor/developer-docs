bittensor.extrinsics.senate
===========================

.. py:module:: bittensor.extrinsics.senate


Functions
---------

.. autoapisummary::

   bittensor.extrinsics.senate.register_senate_extrinsic
   bittensor.extrinsics.senate.leave_senate_extrinsic
   bittensor.extrinsics.senate.vote_senate_extrinsic


Module Contents
---------------

.. py:function:: register_senate_extrinsic(subtensor, wallet, wait_for_inclusion = False, wait_for_finalization = True, prompt = False)

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


.. py:function:: leave_senate_extrinsic(subtensor, wallet, wait_for_inclusion = False, wait_for_finalization = True, prompt = False)

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


.. py:function:: vote_senate_extrinsic(subtensor, wallet, proposal_hash, proposal_idx, vote, wait_for_inclusion = False, wait_for_finalization = True, prompt = False)

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


