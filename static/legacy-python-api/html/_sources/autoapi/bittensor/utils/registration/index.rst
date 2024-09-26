bittensor.utils.registration
============================

.. py:module:: bittensor.utils.registration


Attributes
----------

.. autoapisummary::

   bittensor.utils.registration.torch


Exceptions
----------

.. autoapisummary::

   bittensor.utils.registration.CUDAException


Classes
-------

.. autoapisummary::

   bittensor.utils.registration.LazyLoadedTorch
   bittensor.utils.registration.POWSolution
   bittensor.utils.registration._SolverBase
   bittensor.utils.registration._Solver
   bittensor.utils.registration._CUDASolver
   bittensor.utils.registration.RegistrationStatistics
   bittensor.utils.registration.RegistrationStatisticsLogger
   bittensor.utils.registration._UsingSpawnStartMethod


Functions
---------

.. autoapisummary::

   bittensor.utils.registration.use_torch
   bittensor.utils.registration.legacy_torch_api_compat
   bittensor.utils.registration._get_real_torch
   bittensor.utils.registration.log_no_torch_error
   bittensor.utils.registration._hex_bytes_to_u8_list
   bittensor.utils.registration._create_seal_hash
   bittensor.utils.registration._seal_meets_difficulty
   bittensor.utils.registration._solve_for_nonce_block_cuda
   bittensor.utils.registration._solve_for_nonce_block
   bittensor.utils.registration._registration_diff_unpack
   bittensor.utils.registration._registration_diff_pack
   bittensor.utils.registration._hash_block_with_hotkey
   bittensor.utils.registration._update_curr_block
   bittensor.utils.registration.get_cpu_count
   bittensor.utils.registration._solve_for_difficulty_fast
   bittensor.utils.registration._get_block_with_retry
   bittensor.utils.registration._check_for_newest_block_and_update
   bittensor.utils.registration._solve_for_difficulty_fast_cuda
   bittensor.utils.registration._terminate_workers_and_wait_for_exit
   bittensor.utils.registration.create_pow


Module Contents
---------------

.. py:function:: use_torch()

   Force the use of torch over numpy for certain operations.


.. py:function:: legacy_torch_api_compat(func)

   Convert function operating on numpy Input&Output to legacy torch Input&Output API if `use_torch()` is True.

   :param func: Function with numpy Input/Output to be decorated.
   :type func: function

   :returns:     Decorated function.
   :rtype: decorated (function)


.. py:function:: _get_real_torch()

.. py:function:: log_no_torch_error()

.. py:class:: LazyLoadedTorch

   .. py:method:: __bool__()


   .. py:method:: __getattr__(name)


.. py:data:: torch

.. py:exception:: CUDAException

   Bases: :py:obj:`Exception`


   An exception raised when an error occurs in the CUDA environment.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:function:: _hex_bytes_to_u8_list(hex_bytes)

.. py:function:: _create_seal_hash(block_and_hotkey_hash_bytes, nonce)

.. py:function:: _seal_meets_difficulty(seal, difficulty, limit)

.. py:class:: POWSolution

   A solution to the registration PoW problem.


   .. py:attribute:: nonce
      :type:  int


   .. py:attribute:: block_number
      :type:  int


   .. py:attribute:: difficulty
      :type:  int


   .. py:attribute:: seal
      :type:  bytes


   .. py:method:: is_stale(subtensor)

      Returns True if the POW is stale.
      This means the block the POW is solved for is within 3 blocks of the current block.



.. py:class:: _SolverBase(proc_num, num_proc, update_interval, finished_queue, solution_queue, stopEvent, curr_block, curr_block_num, curr_diff, check_block, limit)

   Bases: :py:obj:`multiprocessing.Process`


   A process that solves the registration PoW problem.

   :param proc_num: int
                    The number of the process being created.
   :param num_proc: int
                    The total number of processes running.
   :param update_interval: int
                           The number of nonces to try to solve before checking for a new block.
   :param finished_queue: multiprocessing.Queue
                          The queue to put the process number when a process finishes each update_interval.
                          Used for calculating the average time per update_interval across all processes.
   :param solution_queue: multiprocessing.Queue
                          The queue to put the solution the process has found during the pow solve.
   :param newBlockEvent: multiprocessing.Event
                         The event to set by the main process when a new block is finalized in the network.
                         The solver process will check for the event after each update_interval.
                         The solver process will get the new block hash and difficulty and start solving for a new nonce.
   :param stopEvent: multiprocessing.Event
                     The event to set by the main process when all the solver processes should stop.
                     The solver process will check for the event after each update_interval.
                     The solver process will stop when the event is set.
                     Used to stop the solver processes when a solution is found.
   :param curr_block: multiprocessing.Array
                      The array containing this process's current block hash.
                      The main process will set the array to the new block hash when a new block is finalized in the network.
                      The solver process will get the new block hash from this array when newBlockEvent is set.
   :param curr_block_num: multiprocessing.Value
                          The value containing this process's current block number.
                          The main process will set the value to the new block number when a new block is finalized in the network.
                          The solver process will get the new block number from this value when newBlockEvent is set.
   :param curr_diff: multiprocessing.Array
                     The array containing this process's current difficulty.
                     The main process will set the array to the new difficulty when a new block is finalized in the network.
                     The solver process will get the new difficulty from this array when newBlockEvent is set.
   :param check_block: multiprocessing.Lock
                       The lock to prevent this process from getting the new block data while the main process is updating the data.
   :param limit: int
                 The limit of the pow solve for a valid solution.


   .. py:attribute:: proc_num
      :type:  int


   .. py:attribute:: num_proc
      :type:  int


   .. py:attribute:: update_interval
      :type:  int


   .. py:attribute:: finished_queue
      :type:  multiprocessing.Queue


   .. py:attribute:: solution_queue
      :type:  multiprocessing.Queue


   .. py:attribute:: newBlockEvent
      :type:  multiprocessing.Event


   .. py:attribute:: stopEvent
      :type:  multiprocessing.Event


   .. py:attribute:: hotkey_bytes
      :type:  bytes


   .. py:attribute:: curr_block
      :type:  multiprocessing.Array


   .. py:attribute:: curr_block_num
      :type:  multiprocessing.Value


   .. py:attribute:: curr_diff
      :type:  multiprocessing.Array


   .. py:attribute:: check_block
      :type:  multiprocessing.Lock


   .. py:attribute:: limit
      :type:  int


   .. py:method:: run()
      :abstractmethod:


      Method to be run in sub-process; can be overridden in sub-class



   .. py:method:: create_shared_memory()
      :staticmethod:


      Creates shared memory for the solver processes to use.



.. py:class:: _Solver(proc_num, num_proc, update_interval, finished_queue, solution_queue, stopEvent, curr_block, curr_block_num, curr_diff, check_block, limit)

   Bases: :py:obj:`_SolverBase`


   A process that solves the registration PoW problem.

   :param proc_num: int
                    The number of the process being created.
   :param num_proc: int
                    The total number of processes running.
   :param update_interval: int
                           The number of nonces to try to solve before checking for a new block.
   :param finished_queue: multiprocessing.Queue
                          The queue to put the process number when a process finishes each update_interval.
                          Used for calculating the average time per update_interval across all processes.
   :param solution_queue: multiprocessing.Queue
                          The queue to put the solution the process has found during the pow solve.
   :param newBlockEvent: multiprocessing.Event
                         The event to set by the main process when a new block is finalized in the network.
                         The solver process will check for the event after each update_interval.
                         The solver process will get the new block hash and difficulty and start solving for a new nonce.
   :param stopEvent: multiprocessing.Event
                     The event to set by the main process when all the solver processes should stop.
                     The solver process will check for the event after each update_interval.
                     The solver process will stop when the event is set.
                     Used to stop the solver processes when a solution is found.
   :param curr_block: multiprocessing.Array
                      The array containing this process's current block hash.
                      The main process will set the array to the new block hash when a new block is finalized in the network.
                      The solver process will get the new block hash from this array when newBlockEvent is set.
   :param curr_block_num: multiprocessing.Value
                          The value containing this process's current block number.
                          The main process will set the value to the new block number when a new block is finalized in the network.
                          The solver process will get the new block number from this value when newBlockEvent is set.
   :param curr_diff: multiprocessing.Array
                     The array containing this process's current difficulty.
                     The main process will set the array to the new difficulty when a new block is finalized in the network.
                     The solver process will get the new difficulty from this array when newBlockEvent is set.
   :param check_block: multiprocessing.Lock
                       The lock to prevent this process from getting the new block data while the main process is updating the data.
   :param limit: int
                 The limit of the pow solve for a valid solution.


   .. py:method:: run()

      Method to be run in sub-process; can be overridden in sub-class



.. py:class:: _CUDASolver(proc_num, num_proc, update_interval, finished_queue, solution_queue, stopEvent, curr_block, curr_block_num, curr_diff, check_block, limit, dev_id, tpb)

   Bases: :py:obj:`_SolverBase`


   A process that solves the registration PoW problem.

   :param proc_num: int
                    The number of the process being created.
   :param num_proc: int
                    The total number of processes running.
   :param update_interval: int
                           The number of nonces to try to solve before checking for a new block.
   :param finished_queue: multiprocessing.Queue
                          The queue to put the process number when a process finishes each update_interval.
                          Used for calculating the average time per update_interval across all processes.
   :param solution_queue: multiprocessing.Queue
                          The queue to put the solution the process has found during the pow solve.
   :param newBlockEvent: multiprocessing.Event
                         The event to set by the main process when a new block is finalized in the network.
                         The solver process will check for the event after each update_interval.
                         The solver process will get the new block hash and difficulty and start solving for a new nonce.
   :param stopEvent: multiprocessing.Event
                     The event to set by the main process when all the solver processes should stop.
                     The solver process will check for the event after each update_interval.
                     The solver process will stop when the event is set.
                     Used to stop the solver processes when a solution is found.
   :param curr_block: multiprocessing.Array
                      The array containing this process's current block hash.
                      The main process will set the array to the new block hash when a new block is finalized in the network.
                      The solver process will get the new block hash from this array when newBlockEvent is set.
   :param curr_block_num: multiprocessing.Value
                          The value containing this process's current block number.
                          The main process will set the value to the new block number when a new block is finalized in the network.
                          The solver process will get the new block number from this value when newBlockEvent is set.
   :param curr_diff: multiprocessing.Array
                     The array containing this process's current difficulty.
                     The main process will set the array to the new difficulty when a new block is finalized in the network.
                     The solver process will get the new difficulty from this array when newBlockEvent is set.
   :param check_block: multiprocessing.Lock
                       The lock to prevent this process from getting the new block data while the main process is updating the data.
   :param limit: int
                 The limit of the pow solve for a valid solution.


   .. py:attribute:: dev_id
      :type:  int


   .. py:attribute:: tpb
      :type:  int


   .. py:method:: run()

      Method to be run in sub-process; can be overridden in sub-class



.. py:function:: _solve_for_nonce_block_cuda(nonce_start, update_interval, block_and_hotkey_hash_bytes, difficulty, limit, block_number, dev_id, tpb)

   Tries to solve the POW on a CUDA device for a block of nonces (nonce_start, nonce_start + update_interval * tpb


.. py:function:: _solve_for_nonce_block(nonce_start, nonce_end, block_and_hotkey_hash_bytes, difficulty, limit, block_number)

   Tries to solve the POW for a block of nonces (nonce_start, nonce_end)


.. py:function:: _registration_diff_unpack(packed_diff)

   Unpacks the packed two 32-bit integers into one 64-bit integer. Little endian.


.. py:function:: _registration_diff_pack(diff, packed_diff)

   Packs the difficulty into two 32-bit integers. Little endian.


.. py:function:: _hash_block_with_hotkey(block_bytes, hotkey_bytes)

   Hashes the block with the hotkey using Keccak-256 to get 32 bytes


.. py:function:: _update_curr_block(curr_diff, curr_block, curr_block_num, block_number, block_bytes, diff, hotkey_bytes, lock)

.. py:function:: get_cpu_count()

.. py:class:: RegistrationStatistics

   Statistics for a registration.


   .. py:attribute:: time_spent_total
      :type:  float


   .. py:attribute:: rounds_total
      :type:  int


   .. py:attribute:: time_average
      :type:  float


   .. py:attribute:: time_spent
      :type:  float


   .. py:attribute:: hash_rate_perpetual
      :type:  float


   .. py:attribute:: hash_rate
      :type:  float


   .. py:attribute:: difficulty
      :type:  int


   .. py:attribute:: block_number
      :type:  int


   .. py:attribute:: block_hash
      :type:  bytes


.. py:class:: RegistrationStatisticsLogger(console, output_in_place = True)

   Logs statistics for a registration.


   .. py:attribute:: console
      :type:  rich.console.Console


   .. py:attribute:: status
      :type:  Optional[rich.status.Status]


   .. py:method:: start()


   .. py:method:: stop()


   .. py:method:: get_status_message(stats, verbose = False)


   .. py:method:: update(stats, verbose = False)


.. py:function:: _solve_for_difficulty_fast(subtensor, wallet, netuid, output_in_place = True, num_processes = None, update_interval = None, n_samples = 10, alpha_ = 0.8, log_verbose = False)

   Solves the POW for registration using multiprocessing.
   :param subtensor: Subtensor to connect to for block information and to submit.
   :param wallet: wallet to use for registration.
   :param netuid: int
                  The netuid of the subnet to register to.
   :param output_in_place: bool
                           If true, prints the status in place. Otherwise, prints the status on a new line.
   :param num_processes: int
                         Number of processes to use.
   :param update_interval: int
                           Number of nonces to solve before updating block information.
   :param n_samples: int
                     The number of samples of the hash_rate to keep for the EWMA
   :param alpha_: float
                  The alpha for the EWMA for the hash_rate calculation
   :param log_verbose: bool
                       If true, prints more verbose logging of the registration metrics.

   Note: The hash rate is calculated as an exponentially weighted moving average in order to make the measure more robust.
   Note:
   - We can also modify the update interval to do smaller blocks of work,
       while still updating the block information after a different number of nonces,
       to increase the transparency of the process while still keeping the speed.


.. py:function:: _get_block_with_retry(subtensor, netuid)

   Gets the current block number, difficulty, and block hash from the substrate node.

   :param subtensor: The subtensor object to use to get the block number, difficulty, and block hash.
   :type subtensor: :obj:`bittensor.subtensor`, `required`
   :param netuid: The netuid of the network to get the block number, difficulty, and block hash from.
   :type netuid: :obj:`int`, `required`

   :returns:     The current block number.

             difficulty (:obj:`int`):
                 The current difficulty of the subnet.

             block_hash (:obj:`bytes`):
                 The current block hash.
   :rtype: block_number (:obj:`int`)

   :raises Exception: If the block hash is None.
   :raises ValueError: If the difficulty is None.


.. py:class:: _UsingSpawnStartMethod(force = False)

   .. py:attribute:: _old_start_method
      :value: None



   .. py:attribute:: _force


   .. py:method:: __enter__()


   .. py:method:: __exit__(*args)


.. py:function:: _check_for_newest_block_and_update(subtensor, netuid, old_block_number, hotkey_bytes, curr_diff, curr_block, curr_block_num, update_curr_block, check_block, solvers, curr_stats)

   Checks for a new block and updates the current block information if a new block is found.

   :param subtensor: The subtensor object to use for getting the current block.
   :type subtensor: :obj:`bittensor.subtensor`, `required`
   :param netuid: The netuid to use for retrieving the difficulty.
   :type netuid: :obj:`int`, `required`
   :param old_block_number: The old block number to check against.
   :type old_block_number: :obj:`int`, `required`
   :param hotkey_bytes: The bytes of the hotkey's pubkey.
   :type hotkey_bytes: :obj:`bytes`, `required`
   :param curr_diff: The current difficulty as a multiprocessing array.
   :type curr_diff: :obj:`multiprocessing.Array`, `required`
   :param curr_block: Where the current block is stored as a multiprocessing array.
   :type curr_block: :obj:`multiprocessing.Array`, `required`
   :param curr_block_num: Where the current block number is stored as a multiprocessing value.
   :type curr_block_num: :obj:`multiprocessing.Value`, `required`
   :param update_curr_block: A function that updates the current block.
   :type update_curr_block: :obj:`Callable`, `required`
   :param check_block: A mp lock that is used to check for a new block.
   :type check_block: :obj:`multiprocessing.Lock`, `required`
   :param solvers: A list of solvers to update the current block for.
   :type solvers: :obj:`List[_Solver]`, `required`
   :param curr_stats: The current registration statistics to update.
   :type curr_stats: :obj:`RegistrationStatistics`, `required`

   :returns: (int) The current block number.


.. py:function:: _solve_for_difficulty_fast_cuda(subtensor, wallet, netuid, output_in_place = True, update_interval = 50000, tpb = 512, dev_id = 0, n_samples = 10, alpha_ = 0.8, log_verbose = False)

   Solves the registration fast using CUDA
   :param subtensor: bittensor.subtensor
                     The subtensor node to grab blocks
   :param wallet: bittensor.wallet
                  The wallet to register
   :param netuid: int
                  The netuid of the subnet to register to.
   :param output_in_place: bool
                           If true, prints the output in place, otherwise prints to new lines
   :param update_interval: int
                           The number of nonces to try before checking for more blocks
   :param tpb: int
               The number of threads per block. CUDA param that should match the GPU capability
   :param dev_id: Union[List[int], int]
                  The CUDA device IDs to execute the registration on, either a single device or a list of devices
   :param n_samples: int
                     The number of samples of the hash_rate to keep for the EWMA
   :param alpha_: float
                  The alpha for the EWMA for the hash_rate calculation
   :param log_verbose: bool
                       If true, prints more verbose logging of the registration metrics.

   Note: The hash rate is calculated as an exponentially weighted moving average in order to make the measure more robust.


.. py:function:: _terminate_workers_and_wait_for_exit(workers)

.. py:function:: create_pow(subtensor, wallet, netuid, output_in_place = True, cuda = False, dev_id = 0, tpb = 256, num_processes = None, update_interval = None, log_verbose = False)

   Creates a proof of work for the given subtensor and wallet.
   :param subtensor: The subtensor to create a proof of work for.
   :type subtensor: :obj:`bittensor.subtensor.subtensor`, `required`
   :param wallet: The wallet to create a proof of work for.
   :type wallet: :obj:`bittensor.wallet.wallet`, `required`
   :param netuid: The netuid for the subnet to create a proof of work for.
   :type netuid: :obj:`int`, `required`
   :param output_in_place:
                           If true, prints the progress of the proof of work to the console
                               in-place. Meaning the progress is printed on the same lines.
   :type output_in_place: :obj:`bool`, `optional`, defaults to :obj:`True`
   :param cuda: If true, uses CUDA to solve the proof of work.
   :type cuda: :obj:`bool`, `optional`, defaults to :obj:`False`
   :param dev_id:
                  The CUDA device id(s) to use. If cuda is true and dev_id is a list,
                      then multiple CUDA devices will be used to solve the proof of work.
   :type dev_id: :obj:`Union[List[int], int]`, `optional`, defaults to :obj:`0`
   :param tpb: The number of threads per block to use when solving the proof of work.
               Should be a multiple of 32.
   :type tpb: :obj:`int`, `optional`, defaults to :obj:`256`
   :param num_processes: The number of processes to use when solving the proof of work.
                         If None, then the number of processes is equal to the number of
                             CPU cores.
   :type num_processes: :obj:`int`, `optional`, defaults to :obj:`None`
   :param update_interval: The number of nonces to run before checking for a new block.
   :type update_interval: :obj:`int`, `optional`, defaults to :obj:`None`
   :param log_verbose: If true, prints the progress of the proof of work more verbosely.
   :type log_verbose: :obj:`bool`, `optional`, defaults to :obj:`False`

   :returns:

             The proof of work solution or None if
                 the wallet is already registered or there is a different error.
   :rtype: :obj:`Optional[Dict[str, Any]]`

   :raises ValueError: If the subnet does not exist.


