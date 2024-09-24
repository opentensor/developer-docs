bittensor.core.extrinsics.utils
===============================

.. py:module:: bittensor.core.extrinsics.utils

.. autoapi-nested-parse::

   Module with helper functions for extrinsics.



Functions
---------

.. autoapisummary::

   bittensor.core.extrinsics.utils.submit_extrinsic


Module Contents
---------------

.. py:function:: submit_extrinsic(substrate, extrinsic, wait_for_inclusion, wait_for_finalization)

   Submits an extrinsic to the substrate blockchain and handles potential exceptions.

   This function attempts to submit an extrinsic to the substrate blockchain with specified options
   for waiting for inclusion in a block and/or finalization. If an exception occurs during submission,
   it logs the error and re-raises the exception.

   :param substrate: The substrate interface instance used to interact with the blockchain.
   :type substrate: substrateinterface.SubstrateInterface
   :param extrinsic: The extrinsic to be submitted to the blockchain.
   :type extrinsic: scalecodec.types.GenericExtrinsic
   :param wait_for_inclusion: Whether to wait for the extrinsic to be included in a block.
   :type wait_for_inclusion: bool
   :param wait_for_finalization: Whether to wait for the extrinsic to be finalized on the blockchain.
   :type wait_for_finalization: bool

   :returns: The response from the substrate after submitting the extrinsic.
   :rtype: response

   :raises SubstrateRequestException: If the submission of the extrinsic fails, the error is logged and re-raised.


