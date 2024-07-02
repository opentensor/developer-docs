:py:mod:`bittensor.commands.metagraph`
======================================

.. py:module:: bittensor.commands.metagraph


Module Contents
---------------

Classes
~~~~~~~

.. autoapisummary::

   bittensor.commands.metagraph.MetagraphCommand




Attributes
~~~~~~~~~~

.. autoapisummary::

   bittensor.commands.metagraph.console


.. py:class:: MetagraphCommand


   Executes the ``metagraph`` command to retrieve and display the entire metagraph for a specified network.

   This metagraph contains detailed information about
   all the neurons (nodes) participating in the network, including their stakes,
   trust scores, and more.

   Optional arguments:
       - ``--netuid``: The netuid of the network to query. Defaults to the default network UID.
       - ``--subtensor.network``: The name of the network to query. Defaults to the default network name.

   The table displayed includes the following columns for each neuron:

   - UID: Unique identifier of the neuron.
   - STAKE(τ): Total stake of the neuron in Tau (τ).
   - RANK: Rank score of the neuron.
   - TRUST: Trust score assigned to the neuron by other neurons.
   - CONSENSUS: Consensus score of the neuron.
   - INCENTIVE: Incentive score representing the neuron's incentive alignment.
   - DIVIDENDS: Dividends earned by the neuron.
   - EMISSION(p): Emission in Rho (p) received by the neuron.
   - VTRUST: Validator trust score indicating the network's trust in the neuron as a validator.
   - VAL: Validator status of the neuron.
   - UPDATED: Number of blocks since the neuron's last update.
   - ACTIVE: Activity status of the neuron.
   - AXON: Network endpoint information of the neuron.
   - HOTKEY: Partial hotkey (public key) of the neuron.
   - COLDKEY: Partial coldkey (public key) of the neuron.

   The command also prints network-wide statistics such as total stake, issuance, and difficulty.

   Usage:
       The user must specify the network UID to query the metagraph. If not specified, the default network UID is used.

   Example usage::

       btcli subnet metagraph --netuid 0 # Root network
       btcli subnet metagraph --netuid 1 --subtensor.network test

   .. note::

      This command provides a snapshot of the network's state at the time of calling.
      It is useful for network analysis and diagnostics. It is intended to be used as
      part of the Bittensor CLI and not as a standalone function within user code.

   .. py:method:: _run(subtensor: bittensor.subtensor)

      Prints an entire metagraph.


   .. py:method:: add_args(parser: argparse.ArgumentParser)
      :staticmethod:


   .. py:method:: check_config(config: bittensor.config)
      :staticmethod:


   .. py:method:: run(cli: bittensor.cli)
      :staticmethod:

      Prints an entire metagraph.



.. py:data:: console

   

