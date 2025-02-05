bittensor.utils.registration.async_pow
======================================

.. py:module:: bittensor.utils.registration.async_pow

.. autoapi-nested-parse::

   This module provides async utilities for solving Proof-of-Work (PoW) challenges in Bittensor network.



Functions
---------

.. autoapisummary::

   bittensor.utils.registration.async_pow.create_pow_async


Module Contents
---------------

.. py:function:: create_pow_async(subtensor, wallet, netuid, output_in_place = True, cuda = False, dev_id = 0, tpb = 256, num_processes = None, update_interval = None, log_verbose = False)
   :async:


   Creates a proof of work for the given subtensor and wallet.

   :param subtensor: The subtensor instance.
   :type subtensor: bittensor.core.async_subtensor.AsyncSubtensor
   :param wallet: The wallet to create a proof of work for.
   :type wallet: bittensor_wallet.Wallet
   :param netuid: The netuid for the subnet to create a proof of work for.
   :type netuid: int
   :param output_in_place: If true, prints the progress of the proof of work to the console in-place. Meaning the
                           progress is printed on the same lines.
   :type output_in_place: bool
   :param cuda: If true, uses CUDA to solve the proof of work.
   :type cuda: bool
   :param dev_id: The CUDA device id(s) to use. If cuda is true and dev_id is a list, then
                  multiple CUDA devices will be used to solve the proof of work.
   :type dev_id: Union[list[int], int]
   :param tpb: The number of threads per block to use when solving the proof of work. Should be a multiple of 32.
   :type tpb: int
   :param num_processes: The number of processes to use when solving the proof of work. If None, then the number of
                         processes is equal to the number of CPU cores.
   :type num_processes: int
   :param update_interval: The number of nonces to run before checking for a new block.
   :type update_interval: int
   :param log_verbose: If true, prints the progress of the proof of work more verbosely.
   :type log_verbose: bool

   :returns: The proof of work solution or None if the wallet is already registered or there is a different error.

   :raises ValueError: If the subnet does not exist.


