bittensor.commands.overview
===========================

.. py:module:: bittensor.commands.overview


Attributes
----------

.. autoapisummary::

   bittensor.commands.overview.console


Classes
-------

.. autoapisummary::

   bittensor.commands.overview.OverviewCommand


Module Contents
---------------

.. py:data:: console

.. py:class:: OverviewCommand

   Executes the ``overview`` command to present a detailed overview of the user's registered accounts on the Bittensor network.

   This command compiles and displays comprehensive information about each neuron associated with the user's wallets,
   including both hotkeys and coldkeys. It is especially useful for users managing multiple accounts or seeking a summary
   of their network activities and stake distributions.

   Usage:
       The command offers various options to customize the output. Users can filter the displayed data by specific netuids,
       sort by different criteria, and choose to include all wallets in the user's configuration directory. The output is
       presented in a tabular format with the following columns:

       - COLDKEY: The SS58 address of the coldkey.
       - HOTKEY: The SS58 address of the hotkey.
       - UID: Unique identifier of the neuron.
       - ACTIVE: Indicates if the neuron is active.
       - STAKE(τ): Amount of stake in the neuron, in Tao.
       - RANK: The rank of the neuron within the network.
       - TRUST: Trust score of the neuron.
       - CONSENSUS: Consensus score of the neuron.
       - INCENTIVE: Incentive score of the neuron.
       - DIVIDENDS: Dividends earned by the neuron.
       - EMISSION(p): Emission received by the neuron, in Rho.
       - VTRUST: Validator trust score of the neuron.
       - VPERMIT: Indicates if the neuron has a validator permit.
       - UPDATED: Time since last update.
       - AXON: IP address and port of the neuron.
       - HOTKEY_SS58: Human-readable representation of the hotkey.

   Example usage::

       btcli wallet overview
       btcli wallet overview --all --sort_by stake --sort_order descending

   .. note::

      This command is read-only and does not modify the network state or account configurations. It provides a quick and
      comprehensive view of the user's network presence, making it ideal for monitoring account status, stake distribution,
      and overall contribution to the Bittensor network.


   .. py:method:: run(cli)
      :staticmethod:


      Prints an overview for the wallet's colkey.



   .. py:method:: _get_total_balance(total_balance, subtensor, cli)
      :staticmethod:



   .. py:method:: _get_hotkeys(cli, all_hotkeys)
      :staticmethod:



   .. py:method:: _get_key_address(all_hotkeys)
      :staticmethod:



   .. py:method:: _process_neuron_results(results, neurons, netuids)
      :staticmethod:



   .. py:method:: _run(subtensor)

      Prints an overview for the wallet's colkey.



   .. py:method:: _get_neurons_for_netuid(args_tuple)
      :staticmethod:



   .. py:method:: _get_de_registered_stake_for_coldkey_wallet(args_tuple)
      :staticmethod:



   .. py:method:: add_args(parser)
      :staticmethod:



   .. py:method:: check_config(config)
      :staticmethod:



