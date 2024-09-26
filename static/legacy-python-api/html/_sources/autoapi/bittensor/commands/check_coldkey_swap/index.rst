bittensor.commands.check_coldkey_swap
=====================================

.. py:module:: bittensor.commands.check_coldkey_swap


Attributes
----------

.. autoapisummary::

   bittensor.commands.check_coldkey_swap.console


Classes
-------

.. autoapisummary::

   bittensor.commands.check_coldkey_swap.CheckColdKeySwapCommand


Functions
---------

.. autoapisummary::

   bittensor.commands.check_coldkey_swap.fetch_arbitration_stats


Module Contents
---------------

.. py:data:: console

.. py:function:: fetch_arbitration_stats(subtensor, wallet)

   Performs a check of the current arbitration data (if any), and displays it through the bittensor console.


.. py:class:: CheckColdKeySwapCommand

   Executes the ``check_coldkey_swap`` command to check swap status of a coldkey in the Bittensor network.
   Usage:
       Users need to specify the wallet they want to check the swap status of.
   Example usage::
       btcli wallet check_coldkey_swap
   .. note:: This command is important for users who wish check if swap requests were made against their coldkey.


   .. py:method:: run(cli)
      :staticmethod:


      Runs the check coldkey swap command.
      :param cli: The CLI object containing configuration and command-line interface utilities.
      :type cli: bittensor.cli



   .. py:method:: _run(cli, subtensor)
      :staticmethod:


      Internal method to check coldkey swap status.
      :param cli: The CLI object containing configuration and command-line interface utilities.
      :type cli: bittensor.cli
      :param subtensor: The subtensor object for blockchain interactions.
      :type subtensor: bittensor.subtensor



   .. py:method:: check_config(config)
      :classmethod:


      Checks and prompts for necessary configuration settings.
      :param config: The configuration object.
      :type config: bittensor.config

      Prompts the user for wallet name if not set in the config.



   .. py:method:: add_args(command_parser)
      :staticmethod:


      Adds arguments to the command parser.
      :param command_parser: The command parser to add arguments to.
      :type command_parser: argparse.ArgumentParser



