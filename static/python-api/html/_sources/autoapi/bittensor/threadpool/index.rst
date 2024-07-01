:py:mod:`bittensor.threadpool`
==============================

.. py:module:: bittensor.threadpool

.. autoapi-nested-parse::

   Implements `ThreadPoolExecutor <https://docs.python.org/3/library/concurrent.futures.html#threadpoolexecutor>`_.



Module Contents
---------------

Classes
~~~~~~~

.. autoapisummary::

   bittensor.threadpool.PriorityThreadPoolExecutor
   bittensor.threadpool._WorkItem



Functions
~~~~~~~~~

.. autoapisummary::

   bittensor.threadpool._worker



Attributes
~~~~~~~~~~

.. autoapisummary::

   bittensor.threadpool.NULL_ENTRY
   bittensor.threadpool.__author__
   bittensor.threadpool._shutdown
   bittensor.threadpool._threads_queues
   bittensor.threadpool.logger


.. py:exception:: BrokenThreadPool


   Bases: :py:obj:`concurrent.futures._base.BrokenExecutor`

   Raised when a worker thread in a `ThreadPoolExecutor <https://docs.python.org/3/library/concurrent.futures.html#threadpoolexecutor>`_ failed initializing.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:data:: NULL_ENTRY
   :value: ()

   

.. py:class:: PriorityThreadPoolExecutor(maxsize=-1, max_workers=None, thread_name_prefix='', initializer=None, initargs=())


   Bases: :py:obj:`concurrent.futures._base.Executor`

   Base threadpool executor with a priority queue

   Initializes a new `ThreadPoolExecutor <https://docs.python.org/3/library/concurrent.futures.html#threadpoolexecutor>`_ instance.

   :param max_workers: The maximum number of threads that can be used to
                       execute the given calls.
   :param thread_name_prefix: An optional name prefix to give our threads.
   :param initializer: An callable used to initialize worker threads.
   :param initargs: A tuple of arguments to pass to the initializer.

   .. py:property:: is_empty


   .. py:attribute:: _counter

      

   .. py:method:: _adjust_thread_count()


   .. py:method:: _initializer_failed()


   .. py:method:: add_args(parser: argparse.ArgumentParser, prefix: str = None)
      :classmethod:

      Accept specific arguments from parser


   .. py:method:: config() -> bittensor.config
      :classmethod:

      Get config from the argument parser.

      Return: :func:`bittensor.config` object.


   .. py:method:: shutdown(wait=True)

      Clean-up the resources associated with the Executor.

      It is safe to call this method several times. Otherwise, no other
      methods can be called after this one.

      :param wait: If True then shutdown will not return until all running
                   futures have finished executing and the resources used by the
                   executor have been reclaimed.
      :param cancel_futures: If True then shutdown will cancel all pending
                             futures. Futures that are completed or running will not be
                             cancelled.


   .. py:method:: submit(fn: Callable, *args, **kwargs) -> concurrent.futures._base.Future

      Submits a callable to be executed with the given arguments.

      Schedules the callable to be executed as fn(*args, **kwargs) and returns
      a Future instance representing the execution of the callable.

      :returns: A Future representing the given call.



.. py:class:: _WorkItem(future, fn, start_time, args, kwargs)


   Bases: :py:obj:`object`

   .. py:method:: run()

      Run the given work item



.. py:data:: __author__
   :value: 'Brian Quinlan (brian@sweetapp.com)'

   

.. py:data:: _shutdown
   :value: False

   

.. py:data:: _threads_queues

   

.. py:function:: _worker(executor_reference, work_queue, initializer, initargs)


.. py:data:: logger

   

