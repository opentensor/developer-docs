bittensor.extrinsics.network
============================

.. py:module:: bittensor.extrinsics.network


Functions
---------

.. autoapisummary::

   bittensor.extrinsics.network._find_event_attributes_in_extrinsic_receipt
   bittensor.extrinsics.network.register_subnetwork_extrinsic
   bittensor.extrinsics.network.set_hyperparameter_extrinsic


Module Contents
---------------

.. py:function:: _find_event_attributes_in_extrinsic_receipt(response, event_name)

   Searches for the attributes of a specified event within an extrinsic receipt.

   :param response: The receipt of the extrinsic to be searched.
   :type response: substrateinterface.base.ExtrinsicReceipt
   :param event_name: The name of the event to search for.
   :type event_name: str

   :returns: A list of attributes for the specified event. Returns [-1] if the event is not found.
   :rtype: list


.. py:function:: register_subnetwork_extrinsic(subtensor, wallet, wait_for_inclusion = False, wait_for_finalization = True, prompt = False)

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


.. py:function:: set_hyperparameter_extrinsic(subtensor, wallet, netuid, parameter, value, wait_for_inclusion = False, wait_for_finalization = True, prompt = False)

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


