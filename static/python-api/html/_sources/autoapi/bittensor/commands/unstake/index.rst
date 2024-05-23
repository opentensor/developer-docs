:py:mod:`bittensor.commands.unstake`
====================================

.. py:module:: bittensor.commands.unstake


Module Contents
---------------

Classes
~~~~~~~

.. autoapisummary::

   bittensor.commands.unstake.UnStakeCommand




Attributes
~~~~~~~~~~

.. autoapisummary::

   bittensor.commands.unstake.console


.. py:class:: UnStakeCommand


   Executes the ``remove`` command to unstake TAO tokens from one or more hotkeys and transfer them back to the user's coldkey on the Bittensor network.

   This command is used to withdraw tokens previously staked to different hotkeys.

   Usage:
       Users can specify the amount to unstake, the hotkeys to unstake from (either by name or ``SS58`` address), and whether to unstake from all hotkeys. The command checks for sufficient stake and prompts for confirmation before proceeding with the unstaking process.

   Optional arguments:
       - ``--all`` (bool): When set, unstakes all staked tokens from the specified hotkeys.
       - ``--amount`` (float): The amount of TAO tokens to unstake.
       - --hotkey_ss58address (str): The SS58 address of the hotkey to unstake from.
       - ``--max_stake`` (float): Sets the maximum amount of TAO to remain staked in each hotkey.
       - ``--hotkeys`` (list): Specifies hotkeys by name or SS58 address to unstake from.
       - ``--all_hotkeys`` (bool): When set, unstakes from all hotkeys associated with the wallet, excluding any specified in --hotkeys.

   The command prompts for confirmation before executing the unstaking operation.

   Example usage::

       btcli stake remove --amount 100 --hotkeys hk1,hk2

   .. note::

      This command is important for users who wish to reallocate their stakes or withdraw them from the network.
      It allows for flexible management of token stakes across different neurons (hotkeys) on the network.

   .. py:method:: _run(cli: bittensor.cli, subtensor: bittensor.subtensor)
      :staticmethod:

      Unstake token of amount from hotkey(s).


   .. py:method:: add_args(command_parser)
      :staticmethod:


   .. py:method:: check_config(config: bittensor.config)
      :classmethod:


   .. py:method:: run(cli: bittensor.cli)
      :staticmethod:

      Unstake token of amount from hotkey(s).



.. py:data:: console

   

