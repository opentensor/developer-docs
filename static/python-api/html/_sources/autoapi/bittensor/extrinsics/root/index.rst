:py:mod:`bittensor.extrinsics.root`
===================================

.. py:module:: bittensor.extrinsics.root


Module Contents
---------------


Functions
~~~~~~~~~

.. autoapisummary::

   bittensor.extrinsics.root.root_register_extrinsic
   bittensor.extrinsics.root.set_root_weights_extrinsic



Attributes
~~~~~~~~~~

.. autoapisummary::

   bittensor.extrinsics.root.logger


.. py:data:: logger

   

.. py:function:: root_register_extrinsic(subtensor: bittensor.subtensor, wallet: bittensor.wallet, wait_for_inclusion: bool = False, wait_for_finalization: bool = True, prompt: bool = False) -> bool

   Registers the wallet to root network.

   :param wallet: Bittensor wallet object.
   :type wallet: bittensor.wallet
   :param wait_for_inclusion: If set, waits for the extrinsic to enter a block before returning ``true``, or returns ``false`` if the extrinsic fails to enter the block within the timeout.
   :type wait_for_inclusion: bool
   :param wait_for_finalization: If set, waits for the extrinsic to be finalized on the chain before returning ``true``, or returns ``false`` if the extrinsic fails to be finalized within the timeout.
   :type wait_for_finalization: bool
   :param prompt: If ``true``, the call waits for confirmation from the user before proceeding.
   :type prompt: bool

   :returns:     Flag is ``true`` if extrinsic was finalized or uncluded in the block. If we did not wait for finalization / inclusion, the response is ``true``.
   :rtype: success (bool)


.. py:function:: set_root_weights_extrinsic(subtensor: bittensor.subtensor, wallet: bittensor.wallet, netuids: Union[numpy.typing.NDArray[numpy.int64], bittensor.utils.registration.torch.LongTensor, List[int]], weights: Union[numpy.typing.NDArray[numpy.float32], bittensor.utils.registration.torch.FloatTensor, List[float]], version_key: int = 0, wait_for_inclusion: bool = False, wait_for_finalization: bool = False, prompt: bool = False) -> bool

   Sets the given weights and values on chain for wallet hotkey account.

   :param wallet: Bittensor wallet object.
   :type wallet: bittensor.wallet
   :param netuids: The ``netuid`` of the subnet to set weights for.
   :type netuids: Union[NDArray[np.int64], torch.LongTensor, List[int]]
   :param weights: Weights to set. These must be ``float`` s and must correspond to the passed ``netuid`` s.
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


