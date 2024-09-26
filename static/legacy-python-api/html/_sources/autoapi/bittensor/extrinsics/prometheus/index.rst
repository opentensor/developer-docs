bittensor.extrinsics.prometheus
===============================

.. py:module:: bittensor.extrinsics.prometheus


Functions
---------

.. autoapisummary::

   bittensor.extrinsics.prometheus.prometheus_extrinsic


Module Contents
---------------

.. py:function:: prometheus_extrinsic(subtensor, wallet, port, netuid, ip = None, wait_for_inclusion = False, wait_for_finalization=True)

   Subscribes an Bittensor endpoint to the substensor chain.

   :param subtensor: Bittensor subtensor object.
   :type subtensor: bittensor.subtensor
   :param wallet: Bittensor wallet object.
   :type wallet: bittensor.wallet
   :param ip: Endpoint host port i.e., ``192.122.31.4``.
   :type ip: str
   :param port: Endpoint port number i.e., `9221`.
   :type port: int
   :param netuid: Network `uid` to serve on.
   :type netuid: int
   :param wait_for_inclusion: If set, waits for the extrinsic to enter a block before returning ``true``, or returns ``false`` if the extrinsic fails to enter the block within the timeout.
   :type wait_for_inclusion: bool
   :param wait_for_finalization: If set, waits for the extrinsic to be finalized on the chain before returning ``true``, or returns ``false`` if the extrinsic fails to be finalized within the timeout.
   :type wait_for_finalization: bool

   :returns:     Flag is ``true`` if extrinsic was finalized or uncluded in the block.
                 If we did not wait for finalization / inclusion, the response is ``true``.
   :rtype: success (bool)


