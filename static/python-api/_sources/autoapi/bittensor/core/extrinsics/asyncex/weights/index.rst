bittensor.core.extrinsics.asyncex.weights
=========================================

.. py:module:: bittensor.core.extrinsics.asyncex.weights

.. autoapi-nested-parse::

   This module provides sync functionality for working with weights in the Bittensor network.



Functions
---------

.. autoapisummary::

   bittensor.core.extrinsics.asyncex.weights.commit_weights_extrinsic
   bittensor.core.extrinsics.asyncex.weights.reveal_weights_extrinsic
   bittensor.core.extrinsics.asyncex.weights.set_weights_extrinsic
   bittensor.core.extrinsics.asyncex.weights.sign_and_send_with_nonce


Module Contents
---------------

.. py:function:: commit_weights_extrinsic(subtensor, wallet, netuid, commit_hash, wait_for_inclusion = False, wait_for_finalization = False)
   :async:


   Commits a hash of the neuron's weights to the Bittensor blockchain using the provided wallet.
   This function is a wrapper around the `do_commit_weights` method.

   :param subtensor: The subtensor instance used for blockchain
                     interaction.
   :type subtensor: bittensor.core.async_subtensor.AsyncSubtensor
   :param wallet: The wallet associated with the neuron committing the weights.
   :type wallet: bittensor_wallet.Wallet
   :param netuid: The unique identifier of the subnet.
   :type netuid: int
   :param commit_hash: The hash of the neuron's weights to be committed.
   :type commit_hash: str
   :param wait_for_inclusion: Waits for the transaction to be included in a block.
   :type wait_for_inclusion: bool
   :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
   :type wait_for_finalization: bool

   :returns: ``True`` if the weight commitment is successful, False otherwise. And `msg`, a string
             value describing the success or potential error.
   :rtype: tuple[bool, str]

   This function provides a user-friendly interface for committing weights to the Bittensor blockchain, ensuring proper
       error handling and user interaction when required.


.. py:function:: reveal_weights_extrinsic(subtensor, wallet, netuid, uids, weights, salt, version_key, wait_for_inclusion = False, wait_for_finalization = False)
   :async:


   Reveals the weights for a specific subnet on the Bittensor blockchain using the provided wallet.
   This function is a wrapper around the `_do_reveal_weights` method.

   :param subtensor: The subtensor instance used for blockchain
                     interaction.
   :type subtensor: bittensor.core.async_subtensor.AsyncSubtensor
   :param wallet: The wallet associated with the neuron revealing the weights.
   :type wallet: bittensor_wallet.Wallet
   :param netuid: The unique identifier of the subnet.
   :type netuid: int
   :param uids: List of neuron UIDs for which weights are being revealed.
   :type uids: list[int]
   :param weights: List of weight values corresponding to each UID.
   :type weights: list[int]
   :param salt: List of salt values corresponding to the hash function.
   :type salt: list[int]
   :param version_key: Version key for compatibility with the network.
   :type version_key: int
   :param wait_for_inclusion: Waits for the transaction to be included in a block.
   :type wait_for_inclusion: bool
   :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
   :type wait_for_finalization: bool

   :returns:

             ``True`` if the weight revelation is successful, False otherwise. And `msg`, a string value
                 describing the success or potential error.
   :rtype: tuple[bool, str]

   This function provides a user-friendly interface for revealing weights on the Bittensor blockchain, ensuring proper
       error handling and user interaction when required.


.. py:function:: set_weights_extrinsic(subtensor, wallet, netuid, uids, weights, version_key = 0, wait_for_inclusion = False, wait_for_finalization = False)
   :async:


   Sets the given weights and values on chain for wallet hotkey account.

   :param subtensor: Bittensor subtensor object.
   :type subtensor: bittensor.core.async_subtensor.AsyncSubtensor
   :param wallet: Bittensor wallet object.
   :type wallet: bittensor_wallet.Wallet
   :param netuid: The ``netuid`` of the subnet to set weights for.
   :type netuid: int
   :param uids: The ``uint64`` uids of destination neurons.
   :type uids: Union[NDArray[np.int64], torch.LongTensor, list]
   :param weights: The weights to set. These must be ``float`` s and
                   correspond to the passed ``uid`` s.
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


.. py:function:: sign_and_send_with_nonce(subtensor, call, wallet, wait_for_inclusion, wait_for_finalization, period = None)
   :async:


   Signs an extrinsic call with the wallet hotkey, adding an optional era for period


