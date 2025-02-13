bittensor.core.extrinsics.root
==============================

.. py:module:: bittensor.core.extrinsics.root


Functions
---------

.. autoapisummary::

   bittensor.core.extrinsics.root.root_register_extrinsic
   bittensor.core.extrinsics.root.set_root_weights_extrinsic


Module Contents
---------------

.. py:function:: root_register_extrinsic(subtensor, wallet, wait_for_inclusion = False, wait_for_finalization = True)

   Registers the wallet to root network.

   :param subtensor: The Subtensor object
   :type subtensor: bittensor.core.subtensor.Subtensor
   :param wallet: Bittensor wallet object.
   :type wallet: bittensor_wallet.Wallet
   :param wait_for_inclusion: If set, waits for the extrinsic to enter a block before returning `True`, or returns
                              `False` if the extrinsic fails to enter the block within the timeout.
   :type wait_for_inclusion: bool
   :param wait_for_finalization: If set, waits for the extrinsic to be finalized on the chain before returning
                                 `True`, or returns `False` if the extrinsic fails to be finalized within the timeout.
   :type wait_for_finalization: bool

   :returns:

             `True` if extrinsic was finalized or included in the block. If we did not wait for finalization/inclusion, the
                 response is `True`.


.. py:function:: set_root_weights_extrinsic(subtensor, wallet, netuids, weights, version_key = 0, wait_for_inclusion = False, wait_for_finalization = False)

   Sets the given weights and values on chain for wallet hotkey account.

   :param subtensor: The Subtensor object
   :type subtensor: bittensor.core.subtensor.Subtensor
   :param wallet: Bittensor wallet object.
   :type wallet: bittensor_wallet.Wallet
   :param netuids: The `netuid` of the subnet to set weights for.
   :type netuids: Union[NDArray[np.int64], list[int]]
   :param weights: Weights to set. These must be `float` s and must correspond
                   to the passed `netuid` s.
   :type weights: Union[NDArray[np.float32], list[float]]
   :param version_key: The version key of the validator.
   :type version_key: int
   :param wait_for_inclusion: If set, waits for the extrinsic to enter a block before returning `True`, or returns
                              `False` if the extrinsic fails to enter the block within the timeout.
   :type wait_for_inclusion: bool
   :param wait_for_finalization: If set, waits for the extrinsic to be finalized on the chain before returning
                                 True`, or returns `False` if the extrinsic fails to be finalized within the timeout.
   :type wait_for_finalization: bool

   :returns:

             `True` if extrinsic was finalized or included in the block. If we did not wait for finalization/inclusion, the
                 response is `True`.


