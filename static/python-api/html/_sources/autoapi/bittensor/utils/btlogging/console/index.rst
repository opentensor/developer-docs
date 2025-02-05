bittensor.utils.btlogging.console
=================================

.. py:module:: bittensor.utils.btlogging.console

.. autoapi-nested-parse::

   BittensorConsole class gives the ability to log messages to the terminal without changing Bittensor logging level.

   .. admonition:: Example

      from bittensor import logging
      
      # will be logged
      logging.console.info("info message")
      logging.console.error("error message")
      logging.console.success("success message")
      logging.console.warning("warning message")
      logging.console.critical("critical message")
      
      # will not be logged
      logging.info("test info")



Classes
-------

.. autoapisummary::

   bittensor.utils.btlogging.console.BittensorConsole


Module Contents
---------------

.. py:class:: BittensorConsole(logger)

   .. py:method:: critical(message)

      Logs a CRITICAL message to the console.



   .. py:method:: debug(message)

      Logs a DEBUG message to the console.



   .. py:method:: error(message)

      Logs a ERROR message to the console.



   .. py:method:: info(message)

      Logs a INFO message to the console.



   .. py:attribute:: logger


   .. py:method:: success(message)

      Logs a SUCCESS message to the console.



   .. py:method:: warning(message)

      Logs a WARNING message to the console.



