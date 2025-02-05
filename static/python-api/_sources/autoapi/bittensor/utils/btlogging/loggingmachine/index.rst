bittensor.utils.btlogging.loggingmachine
========================================

.. py:module:: bittensor.utils.btlogging.loggingmachine

.. autoapi-nested-parse::

   Module provides a logging framework for Bittensor, managing both Bittensor-specific and third-party logging states.
   It leverages the StateMachine from the statemachine package to transition between different logging states such as
   Default, Debug, Trace, and Disabled.



Attributes
----------

.. autoapisummary::

   bittensor.utils.btlogging.loggingmachine.CUSTOM_LOGGER_METHOD_STACK_LEVEL


Classes
-------

.. autoapisummary::

   bittensor.utils.btlogging.loggingmachine.LoggingConfig
   bittensor.utils.btlogging.loggingmachine.LoggingMachine


Module Contents
---------------

.. py:data:: CUSTOM_LOGGER_METHOD_STACK_LEVEL
   :value: 2


.. py:class:: LoggingConfig

   Bases: :py:obj:`NamedTuple`


   Named tuple to hold the logging configuration.


   .. py:attribute:: debug
      :type:  bool


   .. py:attribute:: info
      :type:  bool


   .. py:attribute:: logging_dir
      :type:  str


   .. py:attribute:: record_log
      :type:  bool


   .. py:attribute:: trace
      :type:  bool


.. py:class:: LoggingMachine(config, name = BITTENSOR_LOGGER_NAME)

   Bases: :py:obj:`statemachine.StateMachine`, :py:obj:`logging.Logger`


   Handles logger states for bittensor and 3rd party libraries.

   Initialize the logger with a name and an optional level.


   .. py:attribute:: Debug


   .. py:attribute:: Default


   .. py:attribute:: Disabled


   .. py:attribute:: Info


   .. py:attribute:: Trace


   .. py:attribute:: Warning


   .. py:method:: add_args(parser, prefix = None)
      :classmethod:


      Accept specific arguments fro parser



   .. py:method:: after_disable_debug()

      Logs status after disable Debug.



   .. py:method:: after_disable_trace()

      Logs status after disable Trace.



   .. py:method:: after_enable_debug()

      Logs status after enable Debug.



   .. py:method:: after_enable_default()


   .. py:method:: after_enable_info()

      Logs status after enable info.



   .. py:method:: after_enable_trace()

      Logs status after enable Trace.



   .. py:method:: after_enable_warning()

      Logs status after enable Warning.



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



   .. py:method:: before_enable_console()

      Logs status before enable Console.



   .. py:method:: before_enable_debug()

      Logs status before enable Debug.



   .. py:method:: before_enable_default()

      Logs status before enable Default.



   .. py:method:: before_enable_info()

      Logs status before enable info.



   .. py:method:: before_enable_trace()

      Logs status before enable Trace.



   .. py:method:: before_enable_warning()

      Logs status before enable Warning.



   .. py:method:: before_transition(event, state)

      Stops listener after transition.



   .. py:method:: check_config(config)


   .. py:method:: config()
      :classmethod:


      Get config from the argument parser.

      :returns: config object
      :rtype: config (bittensor.core.config.Config)



   .. py:attribute:: console


   .. py:method:: critical(msg='', prefix='', suffix='', *args, stacklevel=1, **kwargs)

      Wraps critical message with prefix and suffix.



   .. py:method:: debug(msg='', prefix='', suffix='', *args, stacklevel=1, **kwargs)

      Wraps debug message with prefix and suffix.



   .. py:method:: deregister_primary_logger(name)

      De-registers a primary logger

      This function removes the logger from the _primary_loggers
      set and deinitializes its queue handler

      :param name: the name of primary logger.
      :type name: str



   .. py:attribute:: disable_debug


   .. py:attribute:: disable_info


   .. py:attribute:: disable_logging


   .. py:method:: disable_third_party_loggers()

      Disables logging for third-party loggers by removing all their handlers.



   .. py:attribute:: disable_trace


   .. py:attribute:: disable_warning


   .. py:attribute:: enable_console


   .. py:attribute:: enable_debug


   .. py:attribute:: enable_default


   .. py:attribute:: enable_info


   .. py:method:: enable_third_party_loggers()

      Enables logging for third-party loggers by adding a queue handler to each.



   .. py:attribute:: enable_trace


   .. py:attribute:: enable_warning


   .. py:method:: error(msg='', prefix='', suffix='', *args, stacklevel=1, **kwargs)

      Wraps error message with prefix and suffix.



   .. py:method:: exception(msg='', prefix='', suffix='', *args, stacklevel=1, **kwargs)

      Wraps exception message with prefix and suffix.



   .. py:method:: get_config()


   .. py:method:: get_level()

      Returns Logging level.



   .. py:method:: get_queue()

      Get the queue the QueueListener is publishing from.

      To set up logging in a separate process, a QueueHandler must be added to all the desired loggers.



   .. py:method:: help()


   .. py:method:: info(msg='', prefix='', suffix='', *args, stacklevel=1, **kwargs)

      Wraps info message with prefix and suffix.



   .. py:method:: off()

      Disables all states.



   .. py:method:: on()

      Enable default state.



   .. py:method:: register_primary_logger(name)

      Register a logger as primary logger

      This adds a logger to the _primary_loggers set to ensure
      it doesn't get disabled when disabling third-party loggers.
      A queue handler is also associated with it.

      :param name: the name for primary logger.
      :type name: str



   .. py:method:: set_config(config)

      Set config after initialization, if desired.

      :param config: Bittensor config instance.
      :type config: bittensor.core.config.Config



   .. py:method:: set_console()

      Sets Console state.



   .. py:method:: set_debug(on = True)

      Sets Debug state.



   .. py:method:: set_default()

      Sets Default state.



   .. py:method:: set_info(on = True)

      Sets Info state.



   .. py:method:: set_trace(on = True)

      Sets Trace state.



   .. py:method:: set_warning(on = True)

      Sets Warning state.



   .. py:method:: success(msg='', prefix='', suffix='', *args, stacklevel=1, **kwargs)

      Wraps success message with prefix and suffix.



   .. py:method:: trace(msg='', prefix='', suffix='', *args, stacklevel=1, **kwargs)

      Wraps trace message with prefix and suffix.



   .. py:method:: warning(msg='', prefix='', suffix='', *args, stacklevel=1, **kwargs)

      Wraps warning message with prefix and suffix.



