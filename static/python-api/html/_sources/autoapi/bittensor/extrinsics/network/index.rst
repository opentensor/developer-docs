:py:mod:`bittensor.extrinsics.network`
======================================

.. py:module:: bittensor.extrinsics.network


Module Contents
---------------


Functions
~~~~~~~~~

.. autoapisummary::

   bittensor.extrinsics.network.find_event_attributes_in_extrinsic_receipt
   bittensor.extrinsics.network.register_subnetwork_extrinsic
   bittensor.extrinsics.network.set_hyperparameter_extrinsic



.. py:function:: find_event_attributes_in_extrinsic_receipt(response, event_name) -> list


.. py:function:: register_subnetwork_extrinsic(subtensor: bittensor.subtensor, wallet: bittensor.wallet, wait_for_inclusion: bool = False, wait_for_finalization: bool = True, prompt: bool = False) -> bool

   Registers a new subnetwork.

   :param wallet: bittensor wallet object.
   :type wallet: bittensor.wallet
   :param wait_for_inclusion: If set, waits for the extrinsic to enter a block before returning ``true``, or returns ``false`` if the extrinsic fails to enter the block within the timeout.
   :type wait_for_inclusion: bool
   :param wait_for_finalization: If set, waits for the extrinsic to be finalized on the chain before returning ``true``, or returns ``false`` if the extrinsic fails to be finalized within the timeout.
   :type wait_for_finalization: bool
   :param prompt: If true, the call waits for confirmation from the user before proceeding.
   :type prompt: bool

   :returns:     Flag is ``true`` if extrinsic was finalized or included in the block.
                 If we did not wait for finalization / inclusion, the response is ``true``.
   :rtype: success (bool)


.. py:function:: set_hyperparameter_extrinsic(subtensor: bittensor.subtensor, wallet: bittensor.wallet, netuid: int, parameter: str, value, wait_for_inclusion: bool = False, wait_for_finalization: bool = True, prompt: bool = False) -> bool

   Sets a hyperparameter for a specific subnetwork.

   :param wallet: bittensor wallet object.
   :type wallet: bittensor.wallet
   :param netuid: Subnetwork ``uid``.
   :type netuid: int
   :param parameter: Hyperparameter name.
   :type parameter: str
   :param value: New hyperparameter value.
   :type value: any
   :param wait_for_inclusion: If set, waits for the extrinsic to enter a block before returning ``true``, or returns ``false`` if the extrinsic fails to enter the block within the timeout.
   :type wait_for_inclusion: bool
   :param wait_for_finalization: If set, waits for the extrinsic to be finalized on the chain before returning ``true``, or returns ``false`` if the extrinsic fails to be finalized within the timeout.
   :type wait_for_finalization: bool
   :param prompt: If ``true``, the call waits for confirmation from the user before proceeding.
   :type prompt: bool

   :returns:     Flag is ``true`` if extrinsic was finalized or included in the block.
                 If we did not wait for finalization / inclusion, the response is ``true``.
   :rtype: success (bool)


