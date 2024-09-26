bittensor.extrinsics.serving
============================

.. py:module:: bittensor.extrinsics.serving


Functions
---------

.. autoapisummary::

   bittensor.extrinsics.serving.serve_extrinsic
   bittensor.extrinsics.serving.serve_axon_extrinsic
   bittensor.extrinsics.serving.publish_metadata
   bittensor.extrinsics.serving.get_metadata


Module Contents
---------------

.. py:function:: serve_extrinsic(subtensor, wallet, ip, port, protocol, netuid, placeholder1 = 0, placeholder2 = 0, wait_for_inclusion = False, wait_for_finalization=True, prompt = False)

   Subscribes a Bittensor endpoint to the subtensor chain.

   :param wallet: Bittensor wallet object.
   :type wallet: bittensor.wallet
   :param ip: Endpoint host port i.e., ``192.122.31.4``.
   :type ip: str
   :param port: Endpoint port number i.e., ``9221``.
   :type port: int
   :param protocol: An ``int`` representation of the protocol.
   :type protocol: int
   :param netuid: The network uid to serve on.
   :type netuid: int
   :param placeholder1: A placeholder for future use.
   :type placeholder1: int
   :param placeholder2: A placeholder for future use.
   :type placeholder2: int
   :param wait_for_inclusion: If set, waits for the extrinsic to enter a block before returning ``true``, or returns ``false`` if the extrinsic fails to enter the block within the timeout.
   :type wait_for_inclusion: bool
   :param wait_for_finalization: If set, waits for the extrinsic to be finalized on the chain before returning ``true``, or returns ``false`` if the extrinsic fails to be finalized within the timeout.
   :type wait_for_finalization: bool
   :param prompt: If ``true``, the call waits for confirmation from the user before proceeding.
   :type prompt: bool

   :returns:     Flag is ``true`` if extrinsic was finalized or uncluded in the block. If we did not wait for finalization / inclusion, the response is ``true``.
   :rtype: success (bool)


.. py:function:: serve_axon_extrinsic(subtensor, netuid, axon, wait_for_inclusion = False, wait_for_finalization = True, prompt = False)

   Serves the axon to the network.

   :param netuid: The ``netuid`` being served on.
   :type netuid: int
   :param axon: Axon to serve.
   :type axon: bittensor.Axon
   :param wait_for_inclusion: If set, waits for the extrinsic to enter a block before returning ``true``, or returns ``false`` if the extrinsic fails to enter the block within the timeout.
   :type wait_for_inclusion: bool
   :param wait_for_finalization: If set, waits for the extrinsic to be finalized on the chain before returning ``true``, or returns ``false`` if the extrinsic fails to be finalized within the timeout.
   :type wait_for_finalization: bool
   :param prompt: If ``true``, the call waits for confirmation from the user before proceeding.
   :type prompt: bool

   :returns:     Flag is ``true`` if extrinsic was finalized or uncluded in the block. If we did not wait for finalization / inclusion, the response is ``true``.
   :rtype: success (bool)


.. py:function:: publish_metadata(subtensor, wallet, netuid, data_type, data, wait_for_inclusion = False, wait_for_finalization = True)

   Publishes metadata on the Bittensor network using the specified wallet and network identifier.

   :param subtensor: The subtensor instance representing the Bittensor blockchain connection.
   :type subtensor: bittensor.subtensor
   :param wallet: The wallet object used for authentication in the transaction.
   :type wallet: bittensor.wallet
   :param netuid: Network UID on which the metadata is to be published.
   :type netuid: int
   :param data_type: The data type of the information being submitted. It should be one of the following: ``'Sha256'``, ``'Blake256'``, ``'Keccak256'``, or ``'Raw0-128'``. This specifies the format or hashing algorithm used for the data.
   :type data_type: str
   :param data: The actual metadata content to be published. This should be formatted or hashed according to the ``type`` specified. (Note: max ``str`` length is 128 bytes)
   :type data: str
   :param wait_for_inclusion: If ``True``, the function will wait for the extrinsic to be included in a block before returning. Defaults to ``False``.
   :type wait_for_inclusion: bool, optional
   :param wait_for_finalization: If ``True``, the function will wait for the extrinsic to be finalized on the chain before returning. Defaults to ``True``.
   :type wait_for_finalization: bool, optional

   :returns:     ``True`` if the metadata was successfully published (and finalized if specified). ``False`` otherwise.
   :rtype: bool

   :raises MetadataError: If there is an error in submitting the extrinsic or if the response from the blockchain indicates failure.


.. py:function:: get_metadata(self, netuid, hotkey, block = None)

