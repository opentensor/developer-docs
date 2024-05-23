:py:mod:`bittensor.extrinsics.prometheus`
=========================================

.. py:module:: bittensor.extrinsics.prometheus


Module Contents
---------------


Functions
~~~~~~~~~

.. autoapisummary::

   bittensor.extrinsics.prometheus.prometheus_extrinsic



.. py:function:: prometheus_extrinsic(subtensor: bittensor.subtensor, wallet: bittensor.wallet, port: int, netuid: int, ip: int = None, wait_for_inclusion: bool = False, wait_for_finalization=True) -> bool

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


