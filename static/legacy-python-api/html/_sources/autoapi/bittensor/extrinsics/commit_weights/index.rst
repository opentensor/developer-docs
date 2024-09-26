bittensor.extrinsics.commit_weights
===================================

.. py:module:: bittensor.extrinsics.commit_weights

.. autoapi-nested-parse::

   Module commit weights and reveal weights extrinsic.



Functions
---------

.. autoapisummary::

   bittensor.extrinsics.commit_weights.commit_weights_extrinsic
   bittensor.extrinsics.commit_weights.reveal_weights_extrinsic


Module Contents
---------------

.. py:function:: commit_weights_extrinsic(subtensor, wallet, netuid, commit_hash, wait_for_inclusion = False, wait_for_finalization = False, prompt = False)

   Commits a hash of the neuron's weights to the Bittensor blockchain using the provided wallet.
   This function is a wrapper around the `_do_commit_weights` method, handling user prompts and error messages.
   :param subtensor: The subtensor instance used for blockchain interaction.
   :type subtensor: bittensor.subtensor
   :param wallet: The wallet associated with the neuron committing the weights.
   :type wallet: bittensor.wallet
   :param netuid: The unique identifier of the subnet.
   :type netuid: int
   :param commit_hash: The hash of the neuron's weights to be committed.
   :type commit_hash: str
   :param wait_for_inclusion: Waits for the transaction to be included in a block.
   :type wait_for_inclusion: bool, optional
   :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
   :type wait_for_finalization: bool, optional
   :param prompt: If ``True``, prompts for user confirmation before proceeding.
   :type prompt: bool, optional

   :returns: ``True`` if the weight commitment is successful, False otherwise. And `msg`, a string
             value describing the success or potential error.
   :rtype: Tuple[bool, str]

   This function provides a user-friendly interface for committing weights to the Bittensor blockchain, ensuring proper
   error handling and user interaction when required.


.. py:function:: reveal_weights_extrinsic(subtensor, wallet, netuid, uids, weights, salt, version_key, wait_for_inclusion = False, wait_for_finalization = False, prompt = False)

   Reveals the weights for a specific subnet on the Bittensor blockchain using the provided wallet.
   This function is a wrapper around the `_do_reveal_weights` method, handling user prompts and error messages.
   :param subtensor: The subtensor instance used for blockchain interaction.
   :type subtensor: bittensor.subtensor
   :param wallet: The wallet associated with the neuron revealing the weights.
   :type wallet: bittensor.wallet
   :param netuid: The unique identifier of the subnet.
   :type netuid: int
   :param uids: List of neuron UIDs for which weights are being revealed.
   :type uids: List[int]
   :param weights: List of weight values corresponding to each UID.
   :type weights: List[int]
   :param salt: List of salt values corresponding to the hash function.
   :type salt: List[int]
   :param version_key: Version key for compatibility with the network.
   :type version_key: int
   :param wait_for_inclusion: Waits for the transaction to be included in a block.
   :type wait_for_inclusion: bool, optional
   :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
   :type wait_for_finalization: bool, optional
   :param prompt: If ``True``, prompts for user confirmation before proceeding.
   :type prompt: bool, optional

   :returns: ``True`` if the weight revelation is successful, False otherwise. And `msg`, a string
             value describing the success or potential error.
   :rtype: Tuple[bool, str]

   This function provides a user-friendly interface for revealing weights on the Bittensor blockchain, ensuring proper
   error handling and user interaction when required.


