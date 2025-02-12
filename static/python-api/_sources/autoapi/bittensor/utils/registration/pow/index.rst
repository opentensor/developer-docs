bittensor.utils.registration.pow
================================

.. py:module:: bittensor.utils.registration.pow

.. autoapi-nested-parse::

   This module provides utilities for solving Proof-of-Work (PoW) challenges in Bittensor network.



Attributes
----------

.. autoapisummary::

   bittensor.utils.registration.pow.torch


Classes
-------

.. autoapisummary::

   bittensor.utils.registration.pow.CUDASolver
   bittensor.utils.registration.pow.LazyLoadedTorch
   bittensor.utils.registration.pow.POWSolution
   bittensor.utils.registration.pow.RegistrationStatistics
   bittensor.utils.registration.pow.RegistrationStatisticsLogger
   bittensor.utils.registration.pow.Solver
   bittensor.utils.registration.pow.UsingSpawnStartMethod


Functions
---------

.. autoapisummary::

   bittensor.utils.registration.pow.create_pow
   bittensor.utils.registration.pow.get_cpu_count
   bittensor.utils.registration.pow.legacy_torch_api_compat
   bittensor.utils.registration.pow.log_no_torch_error
   bittensor.utils.registration.pow.terminate_workers_and_wait_for_exit
   bittensor.utils.registration.pow.update_curr_block
   bittensor.utils.registration.pow.use_torch


Module Contents
---------------

.. py:class:: CUDASolver(proc_num, num_proc, update_interval, finished_queue, solution_queue, stopEvent, curr_block, curr_block_num, curr_diff, check_block, limit, dev_id, tpb)

   Bases: :py:obj:`_SolverBase`


   A process that solves the registration PoW problem.

   :param proc_num: The number of the process being created.
   :type proc_num: int
   :param num_proc: The total number of processes running.
   :type num_proc: int
   :param update_interval: The number of nonces to try to solve before checking for a new block.
   :type update_interval: int
   :param finished_queue: The queue to put the process number when a process finishes each
                          update_interval. Used for calculating the average time per update_interval across all processes.
   :type finished_queue: multiprocessing.Queue
   :param solution_queue: The queue to put the solution the process has found during the pow solve.
   :type solution_queue: multiprocessing.Queue
   :param stopEvent: The event to set by the main process when all the solver processes should
                     stop. The solver process will check for the event after each update_interval. The solver process will stop
                     when the event is set. Used to stop the solver processes when a solution is found.
   :type stopEvent: multiprocessing.Event
   :param curr_block: The array containing this process's current block hash. The main process
                      will set the array to the new block hash when a new block is finalized in the network. The solver process
                      will get the new block hash from this array when newBlockEvent is set.
   :type curr_block: multiprocessing.Array
   :param curr_block_num: The value containing this process's current block number. The main
                          process will set the value to the new block number when a new block is finalized in the network. The
                          solver process will get the new block number from this value when newBlockEvent is set.
   :type curr_block_num: multiprocessing.Value
   :param curr_diff: The array containing this process's current difficulty. The main process will
                     set the array to the new difficulty when a new block is finalized in the network. The solver process will
                     get the new difficulty from this array when newBlockEvent is set.
   :type curr_diff: multiprocessing.Array
   :param check_block: The lock to prevent this process from getting the new block data while the
                       main process is updating the data.
   :type check_block: multiprocessing.Lock
   :param limit: The limit of the pow solve for a valid solution.
   :type limit: int


   .. py:attribute:: dev_id
      :type:  int


   .. py:method:: run()

      Method to be run in sub-process; can be overridden in sub-class



   .. py:attribute:: tpb
      :type:  int


.. py:class:: LazyLoadedTorch

   A lazy-loading proxy for the torch module.


.. py:class:: POWSolution

   A solution to the registration PoW problem.


   .. py:attribute:: block_number
      :type:  int


   .. py:attribute:: difficulty
      :type:  int


   .. py:method:: is_stale(subtensor)

      Synchronous implementation. Returns True if the POW is stale.

      This means the block the POW is solved for is within 3 blocks of the current block.



   .. py:method:: is_stale_async(subtensor)
      :async:


      Asynchronous implementation. Returns True if the POW is stale.

      This means the block the POW is solved for is within 3 blocks of the current block.



   .. py:attribute:: nonce
      :type:  int


   .. py:attribute:: seal
      :type:  bytes


.. py:class:: RegistrationStatistics

   Statistics for a registration.


   .. py:attribute:: block_hash
      :type:  str


   .. py:attribute:: block_number
      :type:  int


   .. py:attribute:: difficulty
      :type:  int


   .. py:attribute:: hash_rate
      :type:  float


   .. py:attribute:: hash_rate_perpetual
      :type:  float


   .. py:attribute:: rounds_total
      :type:  int


   .. py:attribute:: time_average
      :type:  float


   .. py:attribute:: time_spent
      :type:  float


   .. py:attribute:: time_spent_total
      :type:  float


.. py:class:: RegistrationStatisticsLogger(console = None, output_in_place = True)

   Logs statistics for a registration.


   .. py:attribute:: console
      :value: None



   .. py:method:: get_status_message(stats, verbose = False)
      :classmethod:


      Generates the status message based on registration statistics.



   .. py:method:: start()


   .. py:attribute:: status
      :type:  Optional[rich.status.Status]


   .. py:method:: stop()


   .. py:method:: update(stats, verbose = False)


.. py:class:: Solver(proc_num, num_proc, update_interval, finished_queue, solution_queue, stopEvent, curr_block, curr_block_num, curr_diff, check_block, limit)

   Bases: :py:obj:`_SolverBase`


   A process that solves the registration PoW problem.

   :param proc_num: The number of the process being created.
   :type proc_num: int
   :param num_proc: The total number of processes running.
   :type num_proc: int
   :param update_interval: The number of nonces to try to solve before checking for a new block.
   :type update_interval: int
   :param finished_queue: The queue to put the process number when a process finishes each
                          update_interval. Used for calculating the average time per update_interval across all processes.
   :type finished_queue: multiprocessing.Queue
   :param solution_queue: The queue to put the solution the process has found during the pow solve.
   :type solution_queue: multiprocessing.Queue
   :param stopEvent: The event to set by the main process when all the solver processes should
                     stop. The solver process will check for the event after each update_interval. The solver process will stop
                     when the event is set. Used to stop the solver processes when a solution is found.
   :type stopEvent: multiprocessing.Event
   :param curr_block: The array containing this process's current block hash. The main process
                      will set the array to the new block hash when a new block is finalized in the network. The solver process
                      will get the new block hash from this array when newBlockEvent is set.
   :type curr_block: multiprocessing.Array
   :param curr_block_num: The value containing this process's current block number. The main
                          process will set the value to the new block number when a new block is finalized in the network. The
                          solver process will get the new block number from this value when newBlockEvent is set.
   :type curr_block_num: multiprocessing.Value
   :param curr_diff: The array containing this process's current difficulty. The main process will
                     set the array to the new difficulty when a new block is finalized in the network. The solver process will
                     get the new difficulty from this array when newBlockEvent is set.
   :type curr_diff: multiprocessing.Array
   :param check_block: The lock to prevent this process from getting the new block data while the
                       main process is updating the data.
   :type check_block: multiprocessing.Lock
   :param limit: The limit of the pow solve for a valid solution.
   :type limit: int


   .. py:method:: run()

      Method to be run in sub-process; can be overridden in sub-class



.. py:class:: UsingSpawnStartMethod(force = False)

.. py:function:: create_pow(subtensor, wallet, netuid, output_in_place = True, cuda = False, dev_id = 0, tpb = 256, num_processes = None, update_interval = None, log_verbose = False)

   Creates a proof of work for the given subtensor and wallet.

   :param subtensor: The subtensor to create a proof of work for.
   :type subtensor: bittensor.core.subtensor.Subtensor
   :param wallet: The wallet to create a proof of work for.
   :type wallet: bittensor_wallet.Wallet
   :param netuid: The netuid for the subnet to create a proof of work for.
   :type netuid: int
   :param output_in_place: If true, prints the progress of the proof of work to the console in-place. Meaning the
                           progress is printed on the same lines. Default is ``True``.
   :type output_in_place: bool
   :param cuda: If true, uses CUDA to solve the proof of work. Default is ``False``.
   :type cuda: bool
   :param dev_id: The CUDA device id(s) to use. If cuda is true and dev_id is a list, then
                  multiple CUDA devices will be used to solve the proof of work. Default is ``0``.
   :type dev_id: Union[List[int], int]
   :param tpb: The number of threads per block to use when solving the proof of work. Should be a multiple of 32.
               Default is ``256``.
   :type tpb: int
   :param num_processes: The number of processes to use when solving the proof of work. If None, then the
                         number of processes is equal to the number of CPU cores. Default is None.
   :type num_processes: Optional[int]
   :param update_interval: The number of nonces to run before checking for a new block. Default is ``None``.
   :type update_interval: Optional[int]
   :param log_verbose: If true, prints the progress of the proof of work more verbosely. Default is ``False``.
   :type log_verbose: bool

   :returns:

             The proof of work solution or None if the wallet is already registered or there is a
                 different error.
   :rtype: Optional[Dict[str, Any]]

   :raises ValueError: If the subnet does not exist.


.. py:function:: get_cpu_count()

   Returns the number of CPUs in the system.


.. py:function:: legacy_torch_api_compat(func)

   Convert function operating on numpy Input&Output to legacy torch Input&Output API if `use_torch()` is True.

   :param func: Function with numpy Input/Output to be decorated.
   :type func: function

   :returns: Decorated function.
   :rtype: decorated (function)


.. py:function:: log_no_torch_error()

.. py:function:: terminate_workers_and_wait_for_exit(workers)

.. py:data:: torch

.. py:function:: update_curr_block(curr_diff, curr_block, curr_block_num, block_number, block_bytes, diff, hotkey_bytes, lock)

   Update the current block data with the provided block information and difficulty.

   This function updates the current block and its difficulty in a thread-safe manner. It sets the current block
   number, hashes the block with the hotkey, updates the current block bytes, and packs the difficulty.

   :param curr_diff: Shared array to store the current difficulty.
   :param curr_block: Shared array to store the current block data.
   :param curr_block_num: Shared value to store the current block number.
   :param block_number: The block number to set as the current block number.
   :param block_bytes: The block data bytes to be hashed with the hotkey.
   :param diff: The difficulty value to be packed into the current difficulty array.
   :param hotkey_bytes: The hotkey bytes used for hashing the block.
   :param lock: A lock to ensure thread-safe updates.


.. py:function:: use_torch()

   Force the use of torch over numpy for certain operations.


