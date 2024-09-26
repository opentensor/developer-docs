bittensor.commands.unstake
==========================

.. py:module:: bittensor.commands.unstake


Attributes
----------

.. autoapisummary::

   bittensor.commands.unstake.console


Classes
-------

.. autoapisummary::

   bittensor.commands.unstake.UnStakeCommand
   bittensor.commands.unstake.RevokeChildrenCommand


Module Contents
---------------

.. py:data:: console

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


   .. py:method:: check_config(config)
      :classmethod:



   .. py:method:: add_args(command_parser)
      :staticmethod:



   .. py:method:: run(cli)
      :staticmethod:


      Unstake token of amount from hotkey(s).



   .. py:method:: _run(cli, subtensor)
      :staticmethod:


      Unstake token of amount from hotkey(s).



.. py:class:: RevokeChildrenCommand

   Executes the ``revoke_children`` command to remove all children hotkeys on a specified subnet on the Bittensor network.

   This command is used to remove delegated authority from all child hotkeys, removing their position and influence on the subnet.

   Usage:
       Users need to specify the parent hotkey and the subnet ID (netuid).
       The user needs to have sufficient authority to make this call.

   The command prompts for confirmation before executing the revoke_children operation.

   Example usage::

       btcli stake revoke_children --hotkey <parent_hotkey> --netuid 1

   .. note::

      This command is critical for users who wish to remove children hotkeys on the network.
      It allows for a complete removal of delegated authority to enhance network participation and influence.


   .. py:method:: run(cli)
      :staticmethod:


      Revokes all children hotkeys.



   .. py:method:: _run(cli, subtensor)
      :staticmethod:



   .. py:method:: check_config(config)
      :staticmethod:



   .. py:method:: add_args(parser)
      :staticmethod:



