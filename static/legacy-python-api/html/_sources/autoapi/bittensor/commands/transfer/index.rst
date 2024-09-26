bittensor.commands.transfer
===========================

.. py:module:: bittensor.commands.transfer


Attributes
----------

.. autoapisummary::

   bittensor.commands.transfer.console


Classes
-------

.. autoapisummary::

   bittensor.commands.transfer.TransferCommand


Module Contents
---------------

.. py:data:: console

.. py:class:: TransferCommand

   Executes the ``transfer`` command to transfer TAO tokens from one account to another on the Bittensor network.

   This command is used for transactions between different accounts, enabling users to send tokens to other participants on the network.

   Usage:
       The command requires specifying the destination address (public key) and the amount of TAO to be transferred.
       It checks for sufficient balance and prompts for confirmation before proceeding with the transaction.

   Optional arguments:
       - ``--dest`` (str): The destination address for the transfer. This can be in the form of an SS58 or ed2519 public key.
       - ``--amount`` (float): The amount of TAO tokens to transfer.

   The command displays the user's current balance before prompting for the amount to transfer, ensuring transparency and accuracy in the transaction.

   Example usage::

       btcli wallet transfer --dest 5Dp8... --amount 100

   .. note:: This command is crucial for executing token transfers within the Bittensor network. Users should verify the destination address and amount before confirming the transaction to avoid errors or loss of funds.


   .. py:method:: run(cli)
      :staticmethod:


      Transfer token of amount to destination.



   .. py:method:: _run(cli, subtensor)
      :staticmethod:


      Transfer token of amount to destination.



   .. py:method:: check_config(config)
      :staticmethod:



   .. py:method:: add_args(parser)
      :staticmethod:



