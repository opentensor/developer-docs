bittensor.core.extrinsics.set_weights
=====================================

.. py:module:: bittensor.core.extrinsics.set_weights

.. autoapi-nested-parse::

   Module sync setting weights extrinsic.



Functions
---------

.. autoapisummary::

   bittensor.core.extrinsics.set_weights.set_weights_extrinsic


Module Contents
---------------

.. py:function:: set_weights_extrinsic(subtensor, wallet, netuid, uids, weights, version_key = 0, wait_for_inclusion = False, wait_for_finalization = False)

   Sets the given weights and values on chain for wallet hotkey account.

   :param subtensor: Bittensor subtensor object.
   :type subtensor: bittensor.core.async_subtensor.AsyncSubtensor
   :param wallet: Bittensor wallet object.
   :type wallet: bittensor_wallet.Wallet
   :param netuid: The ``netuid`` of the subnet to set weights for.
   :type netuid: int
   :param uids: The ``uint64`` uids of destination neurons.
   :type uids: Union[NDArray[np.int64], torch.LongTensor, list]
   :param weights: The weights to set. These must be ``float`` s
                   and correspond to the passed ``uid`` s.
   :type weights: Union[NDArray[np.float32], torch.FloatTensor, list]
   :param version_key: The version key of the validator.
   :type version_key: int
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


