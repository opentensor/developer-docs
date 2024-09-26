bittensor.utils._register_cuda
==============================

.. py:module:: bittensor.utils._register_cuda


Functions
---------

.. autoapisummary::

   bittensor.utils._register_cuda.solve_cuda
   bittensor.utils._register_cuda.reset_cuda
   bittensor.utils._register_cuda.log_cuda_errors


Module Contents
---------------

.. py:function:: solve_cuda(nonce_start, update_interval, tpb, block_and_hotkey_hash_bytes, difficulty, limit, dev_id = 0)

   Solves the PoW problem using CUDA.
   :param nonce_start: int64
                       Starting nonce.
   :param update_interval: int64
                           Number of nonces to solve before updating block information.
   :param tpb: int
               Threads per block.
   :param block_and_hotkey_hash_bytes: bytes
                                       Keccak(Bytes of the block hash + bytes of the hotkey) 64 bytes.
   :param difficulty: int256
                      Difficulty of the PoW problem.
   :param limit: int256
                 Upper limit of the nonce.
   :param dev_id: int (default=0)
                  The CUDA device ID

   :returns:

             Tuple[int64, bytes]
                 Tuple of the nonce and the seal corresponding to the solution.
                 Returns -1 for nonce if no solution is found.


.. py:function:: reset_cuda()

   Resets the CUDA environment.


.. py:function:: log_cuda_errors()

   Logs any CUDA errors.


