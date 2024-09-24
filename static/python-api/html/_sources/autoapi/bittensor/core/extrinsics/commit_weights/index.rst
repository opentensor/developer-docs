bittensor.core.extrinsics.commit_weights
========================================

.. py:module:: bittensor.core.extrinsics.commit_weights

.. autoapi-nested-parse::

   Module commit weights and reveal weights extrinsic.



Functions
---------

.. autoapisummary::

   bittensor.core.extrinsics.commit_weights.do_commit_weights
   bittensor.core.extrinsics.commit_weights.commit_weights_extrinsic
   bittensor.core.extrinsics.commit_weights.do_reveal_weights
   bittensor.core.extrinsics.commit_weights.reveal_weights_extrinsic


Module Contents
---------------

.. py:function:: do_commit_weights(self, wallet, netuid, commit_hash, wait_for_inclusion = False, wait_for_finalization = False)

   Internal method to send a transaction to the Bittensor blockchain, committing the hash of a neuron's weights.
   This method constructs and submits the transaction, handling retries and blockchain communication.

   :param self: The subtensor instance used for blockchain interaction.
   :type self: bittensor.core.subtensor.Subtensor
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

   :returns: A tuple containing a success flag and an optional error message.
   :rtype: tuple[bool, Optional[str]]

   This method ensures that the weight commitment is securely recorded on the Bittensor blockchain, providing a verifiable record of the neuron's weight distribution at a specific point in time.


.. py:function:: commit_weights_extrinsic(subtensor, wallet, netuid, commit_hash, wait_for_inclusion = False, wait_for_finalization = False, prompt = False)

   Commits a hash of the neuron's weights to the Bittensor blockchain using the provided wallet.
   This function is a wrapper around the `do_commit_weights` method, handling user prompts and error messages.

   :param subtensor: The subtensor instance used for blockchain interaction.
   :type subtensor: bittensor.core.subtensor.Subtensor
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
   :param prompt: If ``True``, prompts for user confirmation before proceeding.
   :type prompt: bool

   :returns: ``True`` if the weight commitment is successful, False otherwise. And `msg`, a string
             value describing the success or potential error.
   :rtype: tuple[bool, str]

   This function provides a user-friendly interface for committing weights to the Bittensor blockchain, ensuring proper error handling and user interaction when required.


.. py:function:: do_reveal_weights(self, wallet, netuid, uids, values, salt, version_key, wait_for_inclusion = False, wait_for_finalization = False)

   Internal method to send a transaction to the Bittensor blockchain, revealing the weights for a specific subnet.
   This method constructs and submits the transaction, handling retries and blockchain communication.

   :param self: The subtensor instance used for blockchain interaction.
   :type self: bittensor.core.subtensor.Subtensor
   :param wallet: The wallet associated with the neuron revealing the weights.
   :type wallet: bittensor_wallet.Wallet
   :param netuid: The unique identifier of the subnet.
   :type netuid: int
   :param uids: List of neuron UIDs for which weights are being revealed.
   :type uids: list[int]
   :param values: List of weight values corresponding to each UID.
   :type values: list[int]
   :param salt: List of salt values corresponding to the hash function.
   :type salt: list[int]
   :param version_key: Version key for compatibility with the network.
   :type version_key: int
   :param wait_for_inclusion: Waits for the transaction to be included in a block.
   :type wait_for_inclusion: bool
   :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
   :type wait_for_finalization: bool

   :returns: A tuple containing a success flag and an optional error message.
   :rtype: tuple[bool, Optional[str]]

   This method ensures that the weight revelation is securely recorded on the Bittensor blockchain, providing transparency and accountability for the neuron's weight distribution.


.. py:function:: reveal_weights_extrinsic(subtensor, wallet, netuid, uids, weights, salt, version_key, wait_for_inclusion = False, wait_for_finalization = False, prompt = False)

   Reveals the weights for a specific subnet on the Bittensor blockchain using the provided wallet.
   This function is a wrapper around the `_do_reveal_weights` method, handling user prompts and error messages.

   :param subtensor: The subtensor instance used for blockchain interaction.
   :type subtensor: bittensor.core.subtensor.Subtensor
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
   :param prompt: If ``True``, prompts for user confirmation before proceeding.
   :type prompt: bool

   :returns: ``True`` if the weight revelation is successful, False otherwise. And `msg`, a string
             value describing the success or potential error.
   :rtype: tuple[bool, str]

   This function provides a user-friendly interface for revealing weights on the Bittensor blockchain, ensuring proper error handling and user interaction when required.


