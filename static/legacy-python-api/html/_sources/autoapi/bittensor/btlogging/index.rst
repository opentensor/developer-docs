bittensor.btlogging
===================

.. py:module:: bittensor.btlogging

.. autoapi-nested-parse::

   btlogging sub-package standardized logging for Bittensor.

   This module provides logging functionality for the Bittensor package. It includes custom loggers, handlers, and
   formatters to ensure consistent logging throughout the project.



Submodules
----------

.. toctree::
   :maxdepth: 1

   /autoapi/bittensor/btlogging/defines/index
   /autoapi/bittensor/btlogging/format/index
   /autoapi/bittensor/btlogging/helpers/index
   /autoapi/bittensor/btlogging/loggingmachine/index


Attributes
----------

.. autoapisummary::

   bittensor.btlogging.logging


Classes
-------

.. autoapisummary::

   bittensor.btlogging.LoggingMachine


Package Contents
----------------

.. py:class:: LoggingMachine(config, name = BITTENSOR_LOGGER_NAME)

   Bases: :py:obj:`statemachine.StateMachine`, :py:obj:`logging.Logger`


   Handles logger states for bittensor and 3rd party libraries.

   Initialize the logger with a name and an optional level.


   .. py:attribute:: Default


   .. py:attribute:: Debug


   .. py:attribute:: Trace


   .. py:attribute:: Disabled


   .. py:attribute:: enable_default


   .. py:attribute:: enable_trace


   .. py:attribute:: enable_debug


   .. py:attribute:: disable_trace


   .. py:attribute:: disable_debug


   .. py:attribute:: disable_logging


   .. py:attribute:: _queue


   .. py:attribute:: _primary_loggers


   .. py:attribute:: _config


   .. py:attribute:: _stream_formatter


   .. py:attribute:: _file_formatter


   .. py:attribute:: _handlers


   .. py:attribute:: _listener


   .. py:attribute:: _logger


   .. py:method:: _enable_initial_state(config)

      Set correct state action on initializing



   .. py:method:: _extract_logging_config(config)

      Extract btlogging's config from bittensor config



   .. py:method:: _configure_handlers(config)


   .. py:method:: get_config()


   .. py:method:: set_config(config)

      Set config after initialization, if desired.



   .. py:method:: _create_and_start_listener(handlers)

      A listener to receive and publish log records.

      This listener receives records from a queue populated by the main bittensor logger, as well as 3rd party loggers



   .. py:method:: get_queue()

      Get the queue the QueueListener is publishing from.

      To set up logging in a separate process, a QueueHandler must be added to all the desired loggers.



   .. py:method:: _initialize_bt_logger(name)

      Initialize logging for bittensor.

      Since the initial state is Default, logging level for the module logger is INFO, and all third-party loggers are
      silenced. Subsequent state transitions will handle all logger outputs.



   .. py:method:: _deinitialize_bt_logger(name)

      Find the logger by name and remove the queue handler associated with it.



   .. py:method:: _create_file_handler(logfile)


   .. py:method:: register_primary_logger(name)

      Register a logger as primary logger

      This adds a logger to the _primary_loggers set to ensure
      it doesn't get disabled when disabling third-party loggers.
      A queue handler is also associated with it.



   .. py:method:: deregister_primary_logger(name)

      De-registers a primary logger

      This function removes the logger from the _primary_loggers
      set and deinitializes its queue handler



   .. py:method:: enable_third_party_loggers()

      Enables logging for third-party loggers by adding a queue handler to each.



   .. py:method:: disable_third_party_loggers()

      Disables logging for third-party loggers by removing all their handlers.



   .. py:method:: _enable_file_logging(logfile)


   .. py:method:: before_transition(event, state)

      Stops listener after transition.



   .. py:method:: after_transition(event, state)

      Starts listener after transition.



   .. py:method:: before_enable_default()

      Logs status before enable Default.



   .. py:method:: after_enable_default()


   .. py:method:: before_enable_trace()

      Logs status before enable Trace.



   .. py:method:: after_enable_trace()

      Logs status after enable Trace.



   .. py:method:: before_disable_trace()

      Logs status before disable Trace.



   .. py:method:: after_disable_trace()

      Logs status after disable Trace.



   .. py:method:: before_enable_debug()

      Logs status before enable Debug.



   .. py:method:: after_enable_debug()

      Logs status after enable Debug.



   .. py:method:: before_disable_debug()

      Logs status before disable Debug.



   .. py:method:: after_disable_debug()

      Logs status after disable Debug.



   .. py:method:: before_disable_logging()

      Prepares the logging system for disabling.

      This method performs the following actions:
      1. Logs an informational message indicating that logging is being disabled.
      2. Disables trace mode in the stream formatter.
      3. Sets the logging level to CRITICAL for all loggers.

      This ensures that only critical messages will be logged after this method is called.



   .. py:property:: __trace_on__
      :type: bool

      Checks if the current state is in "Trace" mode.

      :returns: True if the current state is "Trace", otherwise False.
      :rtype: bool


   .. py:method:: trace(msg='', prefix='', suffix='', *args, **kwargs)

      Wraps trace message with prefix and suffix.



   .. py:method:: debug(msg='', prefix='', suffix='', *args, **kwargs)

      Wraps debug message with prefix and suffix.



   .. py:method:: info(msg='', prefix='', suffix='', *args, **kwargs)

      Wraps info message with prefix and suffix.



   .. py:method:: success(msg='', prefix='', suffix='', *args, **kwargs)

      Wraps success message with prefix and suffix.



   .. py:method:: warning(msg='', prefix='', suffix='', *args, **kwargs)

      Wraps warning message with prefix and suffix.



   .. py:method:: error(msg='', prefix='', suffix='', *args, **kwargs)

      Wraps error message with prefix and suffix.



   .. py:method:: critical(msg='', prefix='', suffix='', *args, **kwargs)

      Wraps critical message with prefix and suffix.



   .. py:method:: exception(msg='', prefix='', suffix='', *args, **kwargs)

      Wraps exception message with prefix and suffix.



   .. py:method:: on()

      Enable default state.



   .. py:method:: off()

      Disables all states.



   .. py:method:: set_debug(on = True)

      Sets Debug state.



   .. py:method:: set_trace(on = True)

      Sets Trace state.



   .. py:method:: get_level()

      Returns Logging level.



   .. py:method:: check_config(config)


   .. py:method:: help()


   .. py:method:: add_args(parser, prefix = None)
      :classmethod:


      Accept specific arguments fro parser



   .. py:method:: config()
      :classmethod:


      Get config from the argument parser.

      :returns: config object
      :rtype: config (bittensor.config)



   .. py:method:: __call__(config = None, debug = None, trace = None, record_log = None, logging_dir = None)


.. py:data:: logging

