bittensor.core.extrinsics.set_weights
=====================================

.. py:module:: bittensor.core.extrinsics.set_weights


Functions
---------

.. autoapisummary::

   bittensor.core.extrinsics.set_weights.do_set_weights
   bittensor.core.extrinsics.set_weights.set_weights_extrinsic


Module Contents
---------------

.. py:function:: do_set_weights(self, wallet, uids, vals, netuid, version_key = version_as_int, wait_for_inclusion = False, wait_for_finalization = False)

   Internal method to send a transaction to the Bittensor blockchain, setting weights for specified neurons. This method constructs and submits the transaction, handling retries and blockchain communication.

   :param self: Subtensor interface
   :type self: bittensor.core.subtensor.Subtensor
   :param wallet: The wallet associated with the neuron setting the weights.
   :type wallet: bittensor_wallet.Wallet
   :param uids: List of neuron UIDs for which weights are being set.
   :type uids: list[int]
   :param vals: List of weight values corresponding to each UID.
   :type vals: list[int]
   :param netuid: Unique identifier for the network.
   :type netuid: int
   :param version_key: Version key for compatibility with the network.
   :type version_key: int
   :param wait_for_inclusion: Waits for the transaction to be included in a block.
   :type wait_for_inclusion: bool
   :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
   :type wait_for_finalization: bool

   :returns: A tuple containing a success flag and an optional response message.
   :rtype: tuple[bool, Optional[str]]

   This method is vital for the dynamic weighting mechanism in Bittensor, where neurons adjust their trust in other neurons based on observed performance and contributions.


.. py:function:: set_weights_extrinsic(subtensor, wallet, netuid, uids, weights, version_key = 0, wait_for_inclusion = False, wait_for_finalization = False, prompt = False)

   Sets the given weights and values on chain for wallet hotkey account.

   :param subtensor: Subtensor endpoint to use.
   :type subtensor: bittensor.core.subtensor.Subtensor
   :param wallet: Bittensor wallet object.
   :type wallet: bittensor_wallet.Wallet
   :param netuid: The ``netuid`` of the subnet to set weights for.
   :type netuid: int
   :param uids: The ``uint64`` uids of destination neurons.
   :type uids: Union[NDArray[np.int64], torch.LongTensor, list]
   :param weights: The weights to set. These must be ``float`` s and correspond to the passed ``uid`` s.
   :type weights: Union[NDArray[np.float32], torch.FloatTensor, list]
   :param version_key: The version key of the validator.
   :type version_key: int
   :param wait_for_inclusion: If set, waits for the extrinsic to enter a block before returning ``true``, or returns ``false`` if the extrinsic fails to enter the block within the timeout.
   :type wait_for_inclusion: bool
   :param wait_for_finalization: If set, waits for the extrinsic to be finalized on the chain before returning ``true``, or returns ``false`` if the extrinsic fails to be finalized within the timeout.
   :type wait_for_finalization: bool
   :param prompt: If ``true``, the call waits for confirmation from the user before proceeding.
   :type prompt: bool

   :returns: A tuple containing a success flag and an optional response message.
   :rtype: tuple[bool, str]


