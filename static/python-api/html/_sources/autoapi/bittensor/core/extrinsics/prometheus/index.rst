bittensor.core.extrinsics.prometheus
====================================

.. py:module:: bittensor.core.extrinsics.prometheus


Functions
---------

.. autoapisummary::

   bittensor.core.extrinsics.prometheus.do_serve_prometheus
   bittensor.core.extrinsics.prometheus.prometheus_extrinsic


Module Contents
---------------

.. py:function:: do_serve_prometheus(self, wallet, call_params, wait_for_inclusion = False, wait_for_finalization = True)

   Sends a serve prometheus extrinsic to the chain.

   :param self: Bittensor subtensor object
   :type self: bittensor.core.subtensor.Subtensor
   :param wallet: Wallet object.
   :type wallet: bittensor_wallet.Wallet
   :param call_params: Prometheus serve call parameters.
   :type call_params: bittensor.core.types.PrometheusServeCallParams
   :param wait_for_inclusion: If ``true``, waits for inclusion.
   :type wait_for_inclusion: bool
   :param wait_for_finalization: If ``true``, waits for finalization.
   :type wait_for_finalization: bool

   :returns: ``True`` if serve prometheus was successful.
             error (Optional[str]): Error message if serve prometheus failed, ``None`` otherwise.
   :rtype: success (bool)


.. py:function:: prometheus_extrinsic(subtensor, wallet, port, netuid, ip = None, wait_for_inclusion = False, wait_for_finalization=True)

   Subscribes a Bittensor endpoint to the Subtensor chain.

   :param subtensor: Bittensor subtensor object.
   :type subtensor: bittensor.core.subtensor.Subtensor
   :param wallet: Bittensor wallet object.
   :type wallet: bittensor_wallet.Wallet
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

   :returns: Flag is ``true`` if extrinsic was finalized or uncluded in the block. If we did not wait for finalization / inclusion, the response is ``true``.
   :rtype: success (bool)


