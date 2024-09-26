bittensor.extrinsics.registration
=================================

.. py:module:: bittensor.extrinsics.registration


Exceptions
----------

.. autoapisummary::

   bittensor.extrinsics.registration.MaxSuccessException
   bittensor.extrinsics.registration.MaxAttemptsException


Functions
---------

.. autoapisummary::

   bittensor.extrinsics.registration.register_extrinsic
   bittensor.extrinsics.registration.burned_register_extrinsic
   bittensor.extrinsics.registration.run_faucet_extrinsic
   bittensor.extrinsics.registration.swap_hotkey_extrinsic


Module Contents
---------------

.. py:function:: register_extrinsic(subtensor, wallet, netuid, wait_for_inclusion = False, wait_for_finalization = True, prompt = False, max_allowed_attempts = 3, output_in_place = True, cuda = False, dev_id = 0, tpb = 256, num_processes = None, update_interval = None, log_verbose = False)

   Registers the wallet to the chain.

   :param wallet: Bittensor wallet object.
   :type wallet: bittensor.wallet
   :param netuid: The ``netuid`` of the subnet to register on.
   :type netuid: int
   :param wait_for_inclusion: If set, waits for the extrinsic to enter a block before returning ``true``, or returns ``false`` if the extrinsic fails to enter the block within the timeout.
   :type wait_for_inclusion: bool
   :param wait_for_finalization: If set, waits for the extrinsic to be finalized on the chain before returning ``true``, or returns ``false`` if the extrinsic fails to be finalized within the timeout.
   :type wait_for_finalization: bool
   :param prompt: If ``true``, the call waits for confirmation from the user before proceeding.
   :type prompt: bool
   :param max_allowed_attempts: Maximum number of attempts to register the wallet.
   :type max_allowed_attempts: int
   :param cuda: If ``true``, the wallet should be registered using CUDA device(s).
   :type cuda: bool
   :param dev_id: The CUDA device id to use, or a list of device ids.
   :type dev_id: Union[List[int], int]
   :param tpb: The number of threads per block (CUDA).
   :type tpb: int
   :param num_processes: The number of processes to use to register.
   :type num_processes: int
   :param update_interval: The number of nonces to solve between updates.
   :type update_interval: int
   :param log_verbose: If ``true``, the registration process will log more information.
   :type log_verbose: bool

   :returns:     Flag is ``true`` if extrinsic was finalized or uncluded in the block. If we did not wait for finalization / inclusion, the response is ``true``.
   :rtype: success (bool)


.. py:function:: burned_register_extrinsic(subtensor, wallet, netuid, wait_for_inclusion = False, wait_for_finalization = True, prompt = False)

   Registers the wallet to chain by recycling TAO.

   :param wallet: Bittensor wallet object.
   :type wallet: bittensor.wallet
   :param netuid: The ``netuid`` of the subnet to register on.
   :type netuid: int
   :param wait_for_inclusion: If set, waits for the extrinsic to enter a block before returning ``true``, or returns ``false`` if the extrinsic fails to enter the block within the timeout.
   :type wait_for_inclusion: bool
   :param wait_for_finalization: If set, waits for the extrinsic to be finalized on the chain before returning ``true``, or returns ``false`` if the extrinsic fails to be finalized within the timeout.
   :type wait_for_finalization: bool
   :param prompt: If ``true``, the call waits for confirmation from the user before proceeding.
   :type prompt: bool

   :returns:     Flag is ``true`` if extrinsic was finalized or uncluded in the block. If we did not wait for finalization / inclusion, the response is ``true``.
   :rtype: success (bool)


.. py:exception:: MaxSuccessException

   Bases: :py:obj:`Exception`


   Common base class for all non-exit exceptions.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: MaxAttemptsException

   Bases: :py:obj:`Exception`


   Common base class for all non-exit exceptions.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:function:: run_faucet_extrinsic(subtensor, wallet, wait_for_inclusion = False, wait_for_finalization = True, prompt = False, max_allowed_attempts = 3, output_in_place = True, cuda = False, dev_id = 0, tpb = 256, num_processes = None, update_interval = None, log_verbose = False)

   Runs a continual POW to get a faucet of TAO on the test net.

   :param wallet: Bittensor wallet object.
   :type wallet: bittensor.wallet
   :param prompt: If ``true``, the call waits for confirmation from the user before proceeding.
   :type prompt: bool
   :param wait_for_inclusion: If set, waits for the extrinsic to enter a block before returning ``true``, or returns ``false`` if the extrinsic fails to enter the block within the timeout.
   :type wait_for_inclusion: bool
   :param wait_for_finalization: If set, waits for the extrinsic to be finalized on the chain before returning ``true``, or returns ``false`` if the extrinsic fails to be finalized within the timeout.
   :type wait_for_finalization: bool
   :param max_allowed_attempts: Maximum number of attempts to register the wallet.
   :type max_allowed_attempts: int
   :param cuda: If ``true``, the wallet should be registered using CUDA device(s).
   :type cuda: bool
   :param dev_id: The CUDA device id to use, or a list of device ids.
   :type dev_id: Union[List[int], int]
   :param tpb: The number of threads per block (CUDA).
   :type tpb: int
   :param num_processes: The number of processes to use to register.
   :type num_processes: int
   :param update_interval: The number of nonces to solve between updates.
   :type update_interval: int
   :param log_verbose: If ``true``, the registration process will log more information.
   :type log_verbose: bool

   :returns:     Flag is ``true`` if extrinsic was finalized or uncluded in the block. If we did not wait for finalization / inclusion, the response is ``true``.
   :rtype: success (bool)


.. py:function:: swap_hotkey_extrinsic(subtensor, wallet, new_wallet, wait_for_inclusion = False, wait_for_finalization = True, prompt = False)

