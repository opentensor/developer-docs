bittensor.threadpool
====================

.. py:module:: bittensor.threadpool

.. autoapi-nested-parse::

   Implements `ThreadPoolExecutor <https://docs.python.org/3/library/concurrent.futures.html#threadpoolexecutor>`_.



Attributes
----------

.. autoapisummary::

   bittensor.threadpool.__author__
   bittensor.threadpool.logger
   bittensor.threadpool._threads_queues
   bittensor.threadpool._shutdown
   bittensor.threadpool.NULL_ENTRY


Exceptions
----------

.. autoapisummary::

   bittensor.threadpool.BrokenThreadPool


Classes
-------

.. autoapisummary::

   bittensor.threadpool._WorkItem
   bittensor.threadpool.PriorityThreadPoolExecutor


Functions
---------

.. autoapisummary::

   bittensor.threadpool._worker


Module Contents
---------------

.. py:data:: __author__
   :value: 'Brian Quinlan (brian@sweetapp.com)'


.. py:data:: logger

.. py:data:: _threads_queues

.. py:data:: _shutdown
   :value: False


.. py:class:: _WorkItem(future, fn, start_time, args, kwargs)

   Bases: :py:obj:`object`


   .. py:attribute:: future


   .. py:attribute:: fn


   .. py:attribute:: start_time


   .. py:attribute:: args


   .. py:attribute:: kwargs


   .. py:method:: run()

      Run the given work item



.. py:data:: NULL_ENTRY

.. py:function:: _worker(executor_reference, work_queue, initializer, initargs)

.. py:exception:: BrokenThreadPool

   Bases: :py:obj:`concurrent.futures._base.BrokenExecutor`


   Raised when a worker thread in a `ThreadPoolExecutor <https://docs.python.org/3/library/concurrent.futures.html#threadpoolexecutor>`_ failed initializing.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:class:: PriorityThreadPoolExecutor(maxsize=-1, max_workers=None, thread_name_prefix='', initializer=None, initargs=())

   Bases: :py:obj:`concurrent.futures._base.Executor`


   Base threadpool executor with a priority queue

   Initializes a new `ThreadPoolExecutor <https://docs.python.org/3/library/concurrent.futures.html#threadpoolexecutor>`_ instance.

   :param max_workers: The maximum number of threads that can be used to
                       execute the given calls.
   :param thread_name_prefix: An optional name prefix to give our threads.
   :param initializer: An callable used to initialize worker threads.
   :param initargs: A tuple of arguments to pass to the initializer.


   .. py:attribute:: _counter


   .. py:attribute:: _max_workers


   .. py:attribute:: _work_queue


   .. py:attribute:: _idle_semaphore


   .. py:attribute:: _threads


   .. py:attribute:: _broken
      :value: False



   .. py:attribute:: _shutdown
      :value: False



   .. py:attribute:: _shutdown_lock


   .. py:attribute:: _thread_name_prefix


   .. py:attribute:: _initializer


   .. py:attribute:: _initargs


   .. py:method:: add_args(parser, prefix = None)
      :classmethod:


      Accept specific arguments from parser



   .. py:method:: config()
      :classmethod:


      Get config from the argument parser.

      Return: :func:`bittensor.config` object.



   .. py:property:: is_empty


   .. py:method:: submit(fn, *args, **kwargs)

      Submits a callable to be executed with the given arguments.

      Schedules the callable to be executed as fn(*args, **kwargs) and returns
      a Future instance representing the execution of the callable.

      :returns: A Future representing the given call.



   .. py:method:: _adjust_thread_count()


   .. py:method:: _initializer_failed()


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



