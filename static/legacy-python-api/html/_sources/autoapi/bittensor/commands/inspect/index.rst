bittensor.commands.inspect
==========================

.. py:module:: bittensor.commands.inspect


Attributes
----------

.. autoapisummary::

   bittensor.commands.inspect.console


Classes
-------

.. autoapisummary::

   bittensor.commands.inspect.InspectCommand


Functions
---------

.. autoapisummary::

   bittensor.commands.inspect._get_coldkey_wallets_for_path
   bittensor.commands.inspect._get_hotkey_wallets_for_wallet


Module Contents
---------------

.. py:data:: console

.. py:function:: _get_coldkey_wallets_for_path(path)

.. py:function:: _get_hotkey_wallets_for_wallet(wallet)

.. py:class:: InspectCommand

   Executes the ``inspect`` command, which compiles and displays a detailed report of a user's wallet pairs (coldkey, hotkey) on the Bittensor network.

   This report includes balance and
   staking information for both the coldkey and hotkey associated with the wallet.

   Optional arguments:
       - ``all``: If set to ``True``, the command will inspect all wallets located within the specified path. If set to ``False``, the command will inspect only the wallet specified by the user.

   The command gathers data on:

   - Coldkey balance and delegated stakes.
   - Hotkey stake and emissions per neuron on the network.
   - Delegate names and details fetched from the network.

   The resulting table includes columns for:

   - **Coldkey**: The coldkey associated with the user's wallet.
   - **Balance**: The balance of the coldkey.
   - **Delegate**: The name of the delegate to which the coldkey has staked funds.
   - **Stake**: The amount of stake held by both the coldkey and hotkey.
   - **Emission**: The emission or rewards earned from staking.
   - **Netuid**: The network unique identifier of the subnet where the hotkey is active.
   - **Hotkey**: The hotkey associated with the neuron on the network.

   Usage:
       This command can be used to inspect a single wallet or all wallets located within a
       specified path. It is useful for a comprehensive overview of a user's participation
       and performance in the Bittensor network.

   Example usage::

           btcli wallet inspect
           btcli wallet inspect --all

   .. note::

      The ``inspect`` command is for displaying information only and does not perform any
      transactions or state changes on the Bittensor network. It is intended to be used as
      part of the Bittensor CLI and not as a standalone function within user code.


   .. py:method:: run(cli)
      :staticmethod:


      Inspect a cold, hot pair.



   .. py:method:: _run(cli, subtensor)
      :staticmethod:



   .. py:method:: check_config(config)
      :staticmethod:



   .. py:method:: add_args(parser)
      :staticmethod:



