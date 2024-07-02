:py:mod:`bittensor.commands.overview`
=====================================

.. py:module:: bittensor.commands.overview


Module Contents
---------------

Classes
~~~~~~~

.. autoapisummary::

   bittensor.commands.overview.OverviewCommand




Attributes
~~~~~~~~~~

.. autoapisummary::

   bittensor.commands.overview.console


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

   .. py:method:: _get_de_registered_stake_for_coldkey_wallet(args_tuple) -> Tuple[bittensor.Wallet, List[Tuple[str, bittensor.Balance]], Optional[str]]
      :staticmethod:


   .. py:method:: _get_hotkeys(cli: bittensor.cli, all_hotkeys: List[bittensor.wallet]) -> List[bittensor.wallet]
      :staticmethod:


   .. py:method:: _get_key_address(all_hotkeys: List[bittensor.wallet])
      :staticmethod:


   .. py:method:: _get_neurons_for_netuid(args_tuple: Tuple[bittensor.Config, int, List[str]]) -> Tuple[int, List[bittensor.NeuronInfoLite], Optional[str]]
      :staticmethod:


   .. py:method:: _get_total_balance(total_balance: bittensor.Balance, subtensor: bittensor.subtensor, cli: bittensor.cli) -> Tuple[List[bittensor.wallet], bittensor.Balance]
      :staticmethod:


   .. py:method:: _process_neuron_results(results: List[Tuple[int, List[bittensor.NeuronInfoLite], Optional[str]]], neurons: Dict[str, List[bittensor.NeuronInfoLite]], netuids: List[int]) -> Dict[str, List[bittensor.NeuronInfoLite]]
      :staticmethod:


   .. py:method:: _run(subtensor: bittensor.subtensor)

      Prints an overview for the wallet's colkey.


   .. py:method:: add_args(parser: argparse.ArgumentParser)
      :staticmethod:


   .. py:method:: check_config(config: bittensor.config)
      :staticmethod:


   .. py:method:: run(cli: bittensor.cli)
      :staticmethod:

      Prints an overview for the wallet's colkey.



.. py:data:: console

   

