bittensor.utils.btlogging.helpers
=================================

.. py:module:: bittensor.utils.btlogging.helpers

.. autoapi-nested-parse::

   btlogging.helpers module provides helper functions for the Bittensor logging system.



Functions
---------

.. autoapisummary::

   bittensor.utils.btlogging.helpers.all_logger_names
   bittensor.utils.btlogging.helpers.all_loggers
   bittensor.utils.btlogging.helpers.get_max_logger_name_length


Module Contents
---------------

.. py:function:: all_logger_names()

   Generate the names of all active loggers.

   This function iterates through the logging root manager's logger dictionary and yields the names of all active
   `Logger` instances. It skips placeholders and other types that are not instances of `Logger`.

   :Yields: *name (str)* -- The name of an active logger.


.. py:function:: all_loggers()

   Generator that yields all logger instances in the application.

   Iterates through the logging root manager's logger dictionary and yields all active `Logger` instances. It skips
   placeholders and other types that are not instances of `Logger`.

   :Yields: *logger (logging.Logger)* -- An active logger instance.


.. py:function:: get_max_logger_name_length()

   Calculate and return the length of the longest logger name.

   This function iterates through all active logger names and determines the length of the longest name.

   :returns: The length of the longest logger name.
   :rtype: max_length (int)


