:py:mod:`bittensor.cli`
=======================

.. py:module:: bittensor.cli


Module Contents
---------------

Classes
~~~~~~~

.. autoapisummary::

   bittensor.cli.CLIErrorParser
   bittensor.cli.cli




Attributes
~~~~~~~~~~

.. autoapisummary::

   bittensor.cli.ALIAS_TO_COMMAND
   bittensor.cli.COMMANDS
   bittensor.cli.console


.. py:data:: ALIAS_TO_COMMAND

   

.. py:class:: CLIErrorParser(prog=None, usage=None, description=None, epilog=None, parents=[], formatter_class=HelpFormatter, prefix_chars='-', fromfile_prefix_chars=None, argument_default=None, conflict_handler='error', add_help=True, allow_abbrev=True, exit_on_error=True)


   Bases: :py:obj:`argparse.ArgumentParser`

   Custom ArgumentParser for better error messages.

   .. py:method:: error(message)

      This method is called when an error occurs. It prints a custom error message.



.. py:data:: COMMANDS

   

.. py:class:: cli(config: Optional[bittensor.config] = None, args: Optional[List[str]] = None)


   Implementation of the Command Line Interface (CLI) class for the Bittensor protocol.
   This class handles operations like key management (hotkey and coldkey) and token transfer.

   Initializes a bittensor.CLI object.

   :param config: The configuration settings for the CLI.
   :type config: bittensor.config, optional
   :param args: List of command line arguments.
   :type args: List[str], optional

   .. py:method:: __create_parser__() -> argparse.ArgumentParser
      :staticmethod:

      Creates the argument parser for the Bittensor CLI.

      :returns: An argument parser object for Bittensor CLI.
      :rtype: argparse.ArgumentParser


   .. py:method:: check_config(config: bittensor.config)
      :staticmethod:

      Checks if the essential configuration exists under different command

      :param config: The configuration settings for the CLI.
      :type config: bittensor.config


   .. py:method:: create_config(args: List[str]) -> bittensor.config
      :staticmethod:

      From the argument parser, add config to bittensor.executor and local config

      :param args: List of command line arguments.
      :type args: List[str]

      :returns: The configuration object for Bittensor CLI.
      :rtype: bittensor.config


   .. py:method:: run()

      Executes the command from the configuration.



.. py:data:: console

   

