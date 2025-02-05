bittensor.utils.registration.register_cuda
==========================================

.. py:module:: bittensor.utils.registration.register_cuda

.. autoapi-nested-parse::

   This module provides functions for solving Proof of Work (PoW) problems using CUDA.



Functions
---------

.. autoapisummary::

   bittensor.utils.registration.register_cuda.log_cuda_errors
   bittensor.utils.registration.register_cuda.reset_cuda
   bittensor.utils.registration.register_cuda.solve_cuda


Module Contents
---------------

.. py:function:: log_cuda_errors()

   Logs any CUDA errors.


.. py:function:: reset_cuda()

   Resets the CUDA environment.


.. py:function:: solve_cuda(nonce_start, update_interval, tpb, block_and_hotkey_hash_bytes, difficulty, limit, dev_id = 0)

   Solves the PoW problem using CUDA.

   :param nonce_start: Starting nonce.
   :type nonce_start: numpy.int64
   :param update_interval: Number of nonces to solve before updating block information.
   :type update_interval: numpy.int64
   :param tpb: Threads per block.
   :type tpb: int
   :param block_and_hotkey_hash_bytes: Keccak(Bytes of the block hash + bytes of the hotkey) 64 bytes.
   :type block_and_hotkey_hash_bytes: bytes
   :param difficulty: Difficulty of the PoW problem.
   :type difficulty: int
   :param limit: Upper limit of the nonce.
   :type limit: int
   :param dev_id: The CUDA device ID. Defaults to ``0``.
   :type dev_id: int

   :returns:

             Tuple of the nonce and the seal corresponding
                 to the solution. Returns -1 for nonce if no solution is found.
   :rtype: (Union[tuple[Any, bytes], tuple[int, bytes], tuple[Any, None]])


