bittensor.commands.network
==========================

.. py:module:: bittensor.commands.network


Attributes
----------

.. autoapisummary::

   bittensor.commands.network.console
   bittensor.commands.network.HYPERPARAMS


Classes
-------

.. autoapisummary::

   bittensor.commands.network.RegisterSubnetworkCommand
   bittensor.commands.network.SubnetLockCostCommand
   bittensor.commands.network.SubnetListCommand
   bittensor.commands.network.SubnetSudoCommand
   bittensor.commands.network.SubnetHyperparamsCommand
   bittensor.commands.network.SubnetGetHyperparamsCommand


Functions
---------

.. autoapisummary::

   bittensor.commands.network.allowed_value


Module Contents
---------------

.. py:data:: console

.. py:class:: RegisterSubnetworkCommand

   Executes the ``register_subnetwork`` command to register a new subnetwork on the Bittensor network.

   This command facilitates the creation and registration of a subnetwork, which involves interaction with the user's wallet and the Bittensor subtensor. It ensures that the user has the necessary credentials and configurations to successfully register a new subnetwork.

   Usage:
       Upon invocation, the command performs several key steps to register a subnetwork:

       1. It copies the user's current configuration settings.
       2. It accesses the user's wallet using the provided configuration.
       3. It initializes the Bittensor subtensor object with the user's configuration.
       4. It then calls the ``register_subnetwork`` function of the subtensor object, passing the user's wallet and a prompt setting based on the user's configuration.

   If the user's configuration does not specify a wallet name and ``no_prompt`` is not set, the command will prompt the user to enter a wallet name. This name is then used in the registration process.

   The command structure includes:

   - Copying the user's configuration.
   - Accessing and preparing the user's wallet.
   - Initializing the Bittensor subtensor.
   - Registering the subnetwork with the necessary credentials.

   Example usage::

       btcli subnets create

   .. note:: This command is intended for advanced users of the Bittensor network who wish to contribute by adding new subnetworks. It requires a clear understanding of the network's functioning and the roles of subnetworks. Users should ensure that they have secured their wallet and are aware of the implications of adding a new subnetwork to the Bittensor ecosystem.


   .. py:method:: run(cli)
      :staticmethod:


      Register a subnetwork



   .. py:method:: _run(cli, subtensor)
      :staticmethod:


      Register a subnetwork



   .. py:method:: check_config(config)
      :classmethod:



   .. py:method:: add_args(parser)
      :classmethod:



.. py:class:: SubnetLockCostCommand

   Executes the ``lock_cost`` command to view the locking cost required for creating a new subnetwork on the Bittensor network.

   This command is designed to provide users with the current cost of registering a new subnetwork, which is a critical piece of information for anyone considering expanding the network's infrastructure.

   The current implementation anneals the cost of creating a subnet over a period of two days. If the cost is unappealing currently, check back in a day or two to see if it has reached an amenble level.

   Usage:
       Upon invocation, the command performs the following operations:

       1. It copies the user's current Bittensor configuration.
       2. It initializes the Bittensor subtensor object with this configuration.
       3. It then retrieves the subnet lock cost using the ``get_subnet_burn_cost()`` method from the subtensor object.
       4. The cost is displayed to the user in a readable format, indicating the amount of Tao required to lock for registering a new subnetwork.

   In case of any errors during the process (e.g., network issues, configuration problems), the command will catch these exceptions and inform the user that it failed to retrieve the lock cost, along with the specific error encountered.

   The command structure includes:

   - Copying and using the user's configuration for Bittensor.
   - Retrieving the current subnet lock cost from the Bittensor network.
   - Displaying the cost in a user-friendly manner.

   Example usage::

       btcli subnets lock_cost

   .. note:: This command is particularly useful for users who are planning to contribute to the Bittensor network by adding new subnetworks. Understanding the lock cost is essential for these users to make informed decisions about their potential contributions and investments in the network.


   .. py:method:: run(cli)
      :staticmethod:


      View locking cost of creating a new subnetwork



   .. py:method:: _run(cli, subtensor)
      :staticmethod:


      View locking cost of creating a new subnetwork



   .. py:method:: check_config(config)
      :classmethod:



   .. py:method:: add_args(parser)
      :classmethod:



.. py:class:: SubnetListCommand

   Executes the ``list`` command to list all subnets and their detailed information on the Bittensor network.

   This command is designed to provide users with comprehensive information about each subnet within the
   network, including its unique identifier (netuid), the number of neurons, maximum neuron capacity,
   emission rate, tempo, recycle register cost (burn), proof of work (PoW) difficulty, and the name or
   SS58 address of the subnet owner.

   Usage:
       Upon invocation, the command performs the following actions:

       1. It initializes the Bittensor subtensor object with the user's configuration.
       2. It retrieves a list of all subnets in the network along with their detailed information.
       3. The command compiles this data into a table format, displaying key information about each subnet.

   In addition to the basic subnet details, the command also fetches delegate information to provide the
   name of the subnet owner where available. If the owner's name is not available, the owner's ``SS58``
   address is displayed.

   The command structure includes:

   - Initializing the Bittensor subtensor and retrieving subnet information.
   - Calculating the total number of neurons across all subnets.
   - Constructing a table that includes columns for ``NETUID``, ``N`` (current neurons), ``MAX_N`` (maximum neurons), ``EMISSION``, ``TEMPO``, ``BURN``, ``POW`` (proof of work difficulty), and ``SUDO`` (owner's name or ``SS58`` address).
   - Displaying the table with a footer that summarizes the total number of subnets and neurons.

   Example usage::

       btcli subnets list

   .. note:: This command is particularly useful for users seeking an overview of the Bittensor network's structure  and the distribution of its resources and ownership information for each subnet.


   .. py:method:: run(cli)
      :staticmethod:


      List all subnet netuids in the network.



   .. py:method:: _run(cli, subtensor)
      :staticmethod:


      List all subnet netuids in the network.



   .. py:method:: check_config(config)
      :staticmethod:



   .. py:method:: add_args(parser)
      :staticmethod:



.. py:data:: HYPERPARAMS

.. py:class:: SubnetSudoCommand

   Executes the ``set`` command to set hyperparameters for a specific subnet on the Bittensor network.

   This command allows subnet owners to modify various hyperparameters of theirs subnet, such as its tempo,
   emission rates, and other network-specific settings.

   Usage:
       The command first prompts the user to enter the hyperparameter they wish to change and its new value.
       It then uses the user's wallet and configuration settings to authenticate and send the hyperparameter update
       to the specified subnet.

   Example usage::

       btcli sudo set --netuid 1 --param 'tempo' --value '0.5'

   .. note::

      This command requires the user to specify the subnet identifier (``netuid``) and both the hyperparameter
      and its new value. It is intended for advanced users who are familiar with the network's functioning
      and the impact of changing these parameters.


   .. py:method:: run(cli)
      :staticmethod:


      Set subnet hyperparameters.



   .. py:method:: _run(cli, subtensor)
      :staticmethod:


      Set subnet hyperparameters.



   .. py:method:: check_config(config)
      :staticmethod:



   .. py:method:: add_args(parser)
      :staticmethod:



.. py:class:: SubnetHyperparamsCommand

   Executes the '``hyperparameters``' command to view the current hyperparameters of a specific subnet on the Bittensor network.

   This command is useful for users who wish to understand the configuration and
   operational parameters of a particular subnet.

   Usage:
       Upon invocation, the command fetches and displays a list of all hyperparameters for the specified subnet.
       These include settings like tempo, emission rates, and other critical network parameters that define
       the subnet's behavior.

   Example usage::

       $ btcli subnets hyperparameters --netuid 1

       Subnet Hyperparameters - NETUID: 1 - finney
       HYPERPARAMETER            VALUE
       rho                       10
       kappa                     32767
       immunity_period           7200
       min_allowed_weights       8
       max_weight_limit          455
       tempo                     99
       min_difficulty            1000000000000000000
       max_difficulty            1000000000000000000
       weights_version           2013
       weights_rate_limit        100
       adjustment_interval       112
       activity_cutoff           5000
       registration_allowed      True
       target_regs_per_interval  2
       min_burn                  1000000000
       max_burn                  100000000000
       bonds_moving_avg          900000
       max_regs_per_block        1

   .. note::

      The user must specify the subnet identifier (``netuid``) for which they want to view the hyperparameters.
      This command is read-only and does not modify the network state or configurations.


   .. py:method:: run(cli)
      :staticmethod:


      View hyperparameters of a subnetwork.



   .. py:method:: _run(cli, subtensor)
      :staticmethod:


      View hyperparameters of a subnetwork.



   .. py:method:: check_config(config)
      :staticmethod:



   .. py:method:: add_args(parser)
      :staticmethod:



.. py:class:: SubnetGetHyperparamsCommand

   Executes the ``get`` command to retrieve the hyperparameters of a specific subnet on the Bittensor network.

   This command is similar to the ``hyperparameters`` command but may be used in different contexts within the CLI.

   Usage:
       The command connects to the Bittensor network, queries the specified subnet, and returns a detailed list
       of all its hyperparameters. This includes crucial operational parameters that determine the subnet's
       performance and interaction within the network.

   Example usage::

       $ btcli sudo get --netuid 1

       Subnet Hyperparameters - NETUID: 1 - finney
       HYPERPARAMETER            VALUE
       rho                       10
       kappa                     32767
       immunity_period           7200
       min_allowed_weights       8
       max_weight_limit          455
       tempo                     99
       min_difficulty            1000000000000000000
       max_difficulty            1000000000000000000
       weights_version           2013
       weights_rate_limit        100
       adjustment_interval       112
       activity_cutoff           5000
       registration_allowed      True
       target_regs_per_interval  2
       min_burn                  1000000000
       max_burn                  100000000000
       bonds_moving_avg          900000
       max_regs_per_block        1

   .. note::

      Users need to provide the ``netuid`` of the subnet whose hyperparameters they wish to view. This command is
      designed for informational purposes and does not alter any network settings or configurations.


   .. py:method:: run(cli)
      :staticmethod:


      View hyperparameters of a subnetwork.



   .. py:method:: _run(cli, subtensor)
      :staticmethod:


      View hyperparameters of a subnetwork.



   .. py:method:: check_config(config)
      :staticmethod:



   .. py:method:: add_args(parser)
      :staticmethod:



.. py:function:: allowed_value(param, value)

   Check the allowed values on hyperparameters. Return False if value is out of bounds.


