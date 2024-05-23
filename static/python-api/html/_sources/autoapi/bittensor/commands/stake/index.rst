:py:mod:`bittensor.commands.stake`
==================================

.. py:module:: bittensor.commands.stake


Module Contents
---------------

Classes
~~~~~~~

.. autoapisummary::

   bittensor.commands.stake.StakeCommand
   bittensor.commands.stake.StakeShow



Functions
~~~~~~~~~

.. autoapisummary::

   bittensor.commands.stake._get_coldkey_wallets_for_path
   bittensor.commands.stake._get_hotkey_wallets_for_wallet



Attributes
~~~~~~~~~~

.. autoapisummary::

   bittensor.commands.stake.console
   bittensor.commands.stake.console


.. py:class:: StakeCommand


   Executes the ``add`` command to stake tokens to one or more hotkeys from a user's coldkey on the Bittensor network.

   This command is used to allocate tokens to different hotkeys, securing their position and influence on the network.

   Usage:
       Users can specify the amount to stake, the hotkeys to stake to (either by name or ``SS58`` address), and whether to stake to all hotkeys. The command checks for sufficient balance and hotkey registration
       before proceeding with the staking process.

   Optional arguments:
       - ``--all`` (bool): When set, stakes all available tokens from the coldkey.
       - ``--uid`` (int): The unique identifier of the neuron to which the stake is to be added.
       - ``--amount`` (float): The amount of TAO tokens to stake.
       - ``--max_stake`` (float): Sets the maximum amount of TAO to have staked in each hotkey.
       - ``--hotkeys`` (list): Specifies hotkeys by name or SS58 address to stake to.
       - ``--all_hotkeys`` (bool): When set, stakes to all hotkeys associated with the wallet, excluding any specified in --hotkeys.

   The command prompts for confirmation before executing the staking operation.

   Example usage::

       btcli stake add --amount 100 --wallet.name <my_wallet> --wallet.hotkey <my_hotkey>

   .. note::

      This command is critical for users who wish to distribute their stakes among different neurons (hotkeys) on the network.
      It allows for a strategic allocation of tokens to enhance network participation and influence.

   .. py:method:: _run(cli: bittensor.cli, subtensor: bittensor.subtensor)
      :staticmethod:

      Stake token of amount to hotkey(s).


   .. py:method:: add_args(parser: argparse.ArgumentParser)
      :classmethod:


   .. py:method:: check_config(config: bittensor.config)
      :classmethod:


   .. py:method:: run(cli: bittensor.cli)
      :staticmethod:

      Stake token of amount to hotkey(s).



.. py:class:: StakeShow


   Executes the ``show`` command to list all stake accounts associated with a user's wallet on the Bittensor network.

   This command provides a comprehensive view of the stakes associated with both hotkeys and delegates linked to the user's coldkey.

   Usage:
       The command lists all stake accounts for a specified wallet or all wallets in the user's configuration directory.
       It displays the coldkey, balance, account details (hotkey/delegate name), stake amount, and the rate of return.

   Optional arguments:
       - ``--all`` (bool): When set, the command checks all coldkey wallets instead of just the specified wallet.

   The command compiles a table showing:

   - Coldkey: The coldkey associated with the wallet.
   - Balance: The balance of the coldkey.
   - Account: The name of the hotkey or delegate.
   - Stake: The amount of TAO staked to the hotkey or delegate.
   - Rate: The rate of return on the stake, typically shown in TAO per day.

   Example usage::

       btcli stake show --all

   .. note::

      This command is essential for users who wish to monitor their stake distribution and returns across various accounts on the Bittensor network.
      It provides a clear and detailed overview of the user's staking activities.

   .. py:method:: _run(cli: bittensor.cli, subtensor: bittensor.subtensor)
      :staticmethod:

      Show all stake accounts.


   .. py:method:: add_args(parser: argparse.ArgumentParser)
      :staticmethod:


   .. py:method:: check_config(config: bittensor.config)
      :staticmethod:


   .. py:method:: run(cli: bittensor.cli)
      :staticmethod:

      Show all stake accounts.



.. py:function:: _get_coldkey_wallets_for_path(path: str) -> List[bittensor.wallet]


.. py:function:: _get_hotkey_wallets_for_wallet(wallet) -> List[bittensor.wallet]


.. py:data:: console

   

.. py:data:: console

   

