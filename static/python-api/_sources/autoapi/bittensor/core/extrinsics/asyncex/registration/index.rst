bittensor.core.extrinsics.asyncex.registration
==============================================

.. py:module:: bittensor.core.extrinsics.asyncex.registration

.. autoapi-nested-parse::

   This module provides asynchronous functionalities for registering a wallet with the subtensor network using
   Proof-of-Work (PoW).

   Extrinsics:
   - register_extrinsic: Registers the wallet to the subnet.
   - burned_register_extrinsic: Registers the wallet to chain by recycling TAO.



Functions
---------

.. autoapisummary::

   bittensor.core.extrinsics.asyncex.registration.burned_register_extrinsic
   bittensor.core.extrinsics.asyncex.registration.register_extrinsic


Module Contents
---------------

.. py:function:: burned_register_extrinsic(subtensor, wallet, netuid, wait_for_inclusion = False, wait_for_finalization = True)
   :async:


   Registers the wallet to chain by recycling TAO.

   :param subtensor: Subtensor instance.
   :type subtensor: bittensor.core.async_subtensor.AsyncSubtensor
   :param wallet: Bittensor wallet object.
   :type wallet: bittensor.wallet
   :param netuid: The ``netuid`` of the subnet to register on.
   :type netuid: int
   :param wait_for_inclusion: If set, waits for the extrinsic to enter a block before returning ``True``, or
                              returns ``False`` if the extrinsic fails to enter the block within the timeout.
   :type wait_for_inclusion: bool
   :param wait_for_finalization: If set, waits for the extrinsic to be finalized on the chain before returning
                                 ``True``, or returns ``False`` if the extrinsic fails to be finalized within the timeout.
   :type wait_for_finalization: bool

   :returns:

             Flag is ``True`` if extrinsic was finalized or included in the block. If we did not wait for
                 finalization / inclusion, the response is ``True``.
   :rtype: success (bool)


.. py:function:: register_extrinsic(subtensor, wallet, netuid, wait_for_inclusion = False, wait_for_finalization = True, max_allowed_attempts = 3, output_in_place = True, cuda = False, dev_id = 0, tpb = 256, num_processes = None, update_interval = None, log_verbose = False)
   :async:


   Registers the wallet to the chain.

   :param subtensor: initialized AsyncSubtensor object to use for chain
                     interactions
   :type subtensor: bittensor.core.async_subtensor.AsyncSubtensor
   :param wallet: Bittensor wallet object.
   :type wallet: bittensor_wallet.Wallet
   :param netuid: The ``netuid`` of the subnet to register on.
   :type netuid: int
   :param wait_for_inclusion: If set, waits for the extrinsic to enter a block before returning `True`, or returns
                              `False` if the extrinsic fails to enter the block within the timeout.
   :type wait_for_inclusion: bool
   :param wait_for_finalization: If set, waits for the extrinsic to be finalized on the chain before returning
                                 `True`, or returns `False` if the extrinsic fails to be finalized within the timeout.
   :type wait_for_finalization: bool
   :param max_allowed_attempts: Maximum number of attempts to register the wallet.
   :type max_allowed_attempts: int
   :param output_in_place: Whether the POW solving should be outputted to the console as it goes along.
   :type output_in_place: bool
   :param cuda: If `True`, the wallet should be registered using CUDA device(s).
   :type cuda: bool
   :param dev_id: The CUDA device id to use, or a list of device ids.
   :param tpb: The number of threads per block (CUDA).
   :param num_processes: The number of processes to use to register.
   :param update_interval: The number of nonces to solve between updates.
   :param log_verbose: If `True`, the registration process will log more information.

   :returns:

             `True` if extrinsic was finalized or included in the block. If we did not wait for finalization/inclusion, the
                 response is `True`.


