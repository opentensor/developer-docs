:py:mod:`bittensor.btlogging.helpers`
=====================================

.. py:module:: bittensor.btlogging.helpers

.. autoapi-nested-parse::

   btlogging.helpers module provides helper functions for the Bittensor logging system.



Module Contents
---------------


Functions
~~~~~~~~~

.. autoapisummary::

   bittensor.btlogging.helpers.all_logger_names
   bittensor.btlogging.helpers.all_loggers
   bittensor.btlogging.helpers.get_max_logger_name_length



.. py:function:: all_logger_names() -> Generator[str, None, None]

   Generate the names of all active loggers.

   This function iterates through the logging root manager's logger dictionary and yields the names of all active
   `Logger` instances. It skips placeholders and other types that are not instances of `Logger`.

   :Yields: *name (str)* -- The name of an active logger.


.. py:function:: all_loggers() -> Generator[logging.Logger, None, None]

   Generator that yields all logger instances in the application.

   Iterates through the logging root manager's logger dictionary and yields all active `Logger` instances. It skips
   placeholders and other types that are not instances of `Logger`.

   :Yields: *logger (logging.Logger)* -- An active logger instance.


.. py:function:: get_max_logger_name_length() -> int

   Calculate and return the length of the longest logger name.

   This function iterates through all active logger names and determines the length of the longest name.

   :returns: The length of the longest logger name.
   :rtype: max_length (int)


