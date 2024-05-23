:py:mod:`bittensor.btlogging.loggingmachine`
============================================

.. py:module:: bittensor.btlogging.loggingmachine

.. autoapi-nested-parse::

   Module provides a logging framework for Bittensor, managing both Bittensor-specific and third-party logging states.
   It leverages the StateMachine from the statemachine package to transition between different logging states such as
   Default, Debug, Trace, and Disabled.



Module Contents
---------------

Classes
~~~~~~~

.. autoapisummary::

   bittensor.btlogging.loggingmachine.LoggingConfig
   bittensor.btlogging.loggingmachine.LoggingMachine




.. py:class:: LoggingConfig


   Bases: :py:obj:`NamedTuple`

   Named tuple to hold the logging configuration.

   .. py:attribute:: debug
      :type: bool

      

   .. py:attribute:: logging_dir
      :type: str

      

   .. py:attribute:: record_log
      :type: bool

      

   .. py:attribute:: trace
      :type: bool

      


.. py:class:: LoggingMachine(config: bittensor.config, name: str = BITTENSOR_LOGGER_NAME)


   Bases: :py:obj:`statemachine.StateMachine`

   Handles logger states for bittensor and 3rd party libraries.

   .. py:property:: __trace_on__
      :type: bool

      Checks if the current state is in "Trace" mode.

      :returns: True if the current state is "Trace", otherwise False.
      :rtype: bool

   .. py:attribute:: Debug

      

   .. py:attribute:: Default

      

   .. py:attribute:: Disabled

      

   .. py:attribute:: Trace

      

   .. py:attribute:: disable_debug
      :type: LoggingMachine.Default

      

   .. py:attribute:: disable_logging
      :type: LoggingMachine.Disabled

      

   .. py:attribute:: disable_trace
      :type: LoggingMachine.Default

      

   .. py:attribute:: enable_debug
      :type: LoggingMachine.Debug

      

   .. py:attribute:: enable_default

      

   .. py:attribute:: enable_trace
      :type: LoggingMachine.Trace

      

   .. py:method:: __call__(config: bittensor.config = None, debug: bool = None, trace: bool = None, record_log: bool = None, logging_dir: str = None)


   .. py:method:: _configure_handlers(config) -> list[logging.Handler]


   .. py:method:: _create_and_start_listener(handlers)

      A listener to receive and publish log records.

      This listener receives records from a queue populated by the main bittensor logger, as well as 3rd party loggers


   .. py:method:: _create_file_handler(logfile: str)


   .. py:method:: _deinitialize_bt_logger(name)

      Find the logger by name and remove the queue handler associated with it.


   .. py:method:: _enable_file_logging(logfile: str)


   .. py:method:: _initialize_bt_logger(name)

      Initialize logging for bittensor.

      Since the initial state is Default, logging level for the module logger is INFO, and all third-party loggers are
      silenced. Subsequent state transitions will handle all logger outputs.


   .. py:method:: add_args(parser: argparse.ArgumentParser, prefix: str = None)
      :classmethod:

      Accept specific arguments fro parser


   .. py:method:: after_disable_debug()

      Logs status after disable Debug.


   .. py:method:: after_disable_trace()

      Logs status after disable Trace.


   .. py:method:: after_enable_debug()

      Logs status after enable Debug.


   .. py:method:: after_enable_default()


   .. py:method:: after_enable_trace()

      Logs status after enable Trace.


   .. py:method:: after_transition(event, state)

      Starts listener after transition.


   .. py:method:: before_disable_debug()

      Logs status before disable Debug.


   .. py:method:: before_disable_logging()

      Prepares the logging system for disabling.

      This method performs the following actions:
      1. Logs an informational message indicating that logging is being disabled.
      2. Disables trace mode in the stream formatter.
      3. Sets the logging level to CRITICAL for all loggers.

      This ensures that only critical messages will be logged after this method is called.


   .. py:method:: before_disable_trace()

      Logs status before disable Trace.


   .. py:method:: before_enable_debug()

      Logs status before enable Debug.


   .. py:method:: before_enable_default()

      Logs status before enable Default.


   .. py:method:: before_enable_trace()

      Logs status before enable Trace.


   .. py:method:: before_transition(event, state)

      Stops listener after transition.


   .. py:method:: check_config(config: bittensor.config)


   .. py:method:: config() -> bittensor.config
      :classmethod:

      Get config from the argument parser.

      :returns: config object
      :rtype: config (bittensor.config)


   .. py:method:: critical(msg='', prefix='', suffix='', *args, **kwargs)

      Wraps critical message with prefix and suffix.


   .. py:method:: debug(msg='', prefix='', suffix='', *args, **kwargs)

      Wraps debug message with prefix and suffix.


   .. py:method:: deregister_primary_logger(name: str)

      De-registers a primary logger

      This function removes the logger from the _primary_loggers
      set and deinitializes its queue handler


   .. py:method:: disable_third_party_loggers()

      Disables logging for third-party loggers by removing all their handlers.


   .. py:method:: enable_third_party_loggers()

      Enables logging for third-party loggers by adding a queue handler to each.


   .. py:method:: error(msg='', prefix='', suffix='', *args, **kwargs)

      Wraps error message with prefix and suffix.


   .. py:method:: exception(msg='', prefix='', suffix='', *args, **kwargs)

      Wraps exception message with prefix and suffix.


   .. py:method:: get_config()


   .. py:method:: get_level() -> int

      Returns Logging level.


   .. py:method:: get_queue()

      Get the queue the QueueListener is publishing from.

      To set up logging in a separate process, a QueueHandler must be added to all the desired loggers.


   .. py:method:: help()


   .. py:method:: info(msg='', prefix='', suffix='', *args, **kwargs)

      Wraps info message with prefix and suffix.


   .. py:method:: off()

      Disables all states.


   .. py:method:: on()

      Enable default state.


   .. py:method:: register_primary_logger(name: str)

      Register a logger as primary logger

      This adds a logger to the _primary_loggers set to ensure
      it doesn't get disabled when disabling third-party loggers.
      A queue handler is also associated with it.


   .. py:method:: set_config(config)

      Set config after initialization, if desired.


   .. py:method:: set_debug(on: bool = True)

      Sets Debug state.


   .. py:method:: set_trace(on: bool = True)

      Sets Trace state.


   .. py:method:: success(msg='', prefix='', suffix='', *args, **kwargs)

      Wraps success message with prefix and suffix.


   .. py:method:: trace(msg='', prefix='', suffix='', *args, **kwargs)

      Wraps trace message with prefix and suffix.


   .. py:method:: warning(msg='', prefix='', suffix='', *args, **kwargs)

      Wraps warning message with prefix and suffix.



