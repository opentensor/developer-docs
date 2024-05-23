:py:mod:`bittensor.extrinsics.set_weights`
==========================================

.. py:module:: bittensor.extrinsics.set_weights


Module Contents
---------------


Functions
~~~~~~~~~

.. autoapisummary::

   bittensor.extrinsics.set_weights.set_weights_extrinsic



Attributes
~~~~~~~~~~

.. autoapisummary::

   bittensor.extrinsics.set_weights.logger


.. py:data:: logger

   

.. py:function:: set_weights_extrinsic(subtensor: bittensor.subtensor, wallet: bittensor.wallet, netuid: int, uids: Union[numpy.typing.NDArray[numpy.int64], bittensor.utils.registration.torch.LongTensor, list], weights: Union[numpy.typing.NDArray[numpy.float32], bittensor.utils.registration.torch.FloatTensor, list], version_key: int = 0, wait_for_inclusion: bool = False, wait_for_finalization: bool = False, prompt: bool = False) -> Tuple[bool, str]

   Sets the given weights and values on chain for wallet hotkey account.

   :param subtensor_endpoint: Subtensor endpoint to use.
   :type subtensor_endpoint: bittensor.subtensor
   :param wallet: Bittensor wallet object.
   :type wallet: bittensor.wallet
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

   :returns:     Flag is ``true`` if extrinsic was finalized or uncluded in the block. If we did not wait for finalization / inclusion, the response is ``true``.
   :rtype: success (bool)


