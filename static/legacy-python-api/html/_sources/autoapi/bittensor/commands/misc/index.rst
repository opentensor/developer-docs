bittensor.commands.misc
=======================

.. py:module:: bittensor.commands.misc


Attributes
----------

.. autoapisummary::

   bittensor.commands.misc.console


Classes
-------

.. autoapisummary::

   bittensor.commands.misc.UpdateCommand
   bittensor.commands.misc.AutocompleteCommand


Module Contents
---------------

.. py:data:: console

.. py:class:: UpdateCommand

   Executes the ``update`` command to update the local Bittensor package.

   This command performs a series of operations to ensure that the user's local Bittensor installation is updated to the latest version from the master branch of its GitHub repository. It primarily involves pulling the latest changes from the repository and reinstalling the package.

   Usage:
       Upon invocation, the command first checks the user's configuration for the ``no_prompt`` setting. If ``no_prompt`` is set to ``True``, or if the user explicitly confirms with ``Y`` when prompted, the command proceeds to update the local Bittensor package. It changes the current directory to the Bittensor package directory, checks out the master branch of the Bittensor repository, pulls the latest changes, and then reinstalls the package using ``pip``.

   The command structure is as follows:

   1. Change directory to the Bittensor package directory.
   2. Check out the master branch of the Bittensor GitHub repository.
   3. Pull the latest changes with the ``--ff-only`` option to ensure a fast-forward update.
   4. Reinstall the Bittensor package using pip.

   Example usage::

       btcli legacy update

   .. note:: This command is intended to be used within the Bittensor CLI to facilitate easy updates of the Bittensor package. It should be used with caution as it directly affects the local installation of the package. It is recommended to ensure that any important data or configurations are backed up before running this command.


   .. py:method:: run(cli)
      :staticmethod:



   .. py:method:: check_config(config)
      :staticmethod:



   .. py:method:: add_args(parser)
      :staticmethod:



.. py:class:: AutocompleteCommand

   Show users how to install and run autocompletion for Bittensor CLI.


   .. py:method:: run(cli)
      :staticmethod:



   .. py:method:: add_args(parser)
      :staticmethod:



   .. py:method:: check_config(config)
      :staticmethod:



