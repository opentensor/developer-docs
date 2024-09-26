bittensor.commands.root
=======================

.. py:module:: bittensor.commands.root


Attributes
----------

.. autoapisummary::

   bittensor.commands.root.console


Classes
-------

.. autoapisummary::

   bittensor.commands.root.RootRegisterCommand
   bittensor.commands.root.RootList
   bittensor.commands.root.RootSetBoostCommand
   bittensor.commands.root.RootSetSlashCommand
   bittensor.commands.root.RootSetWeightsCommand
   bittensor.commands.root.RootGetWeightsCommand


Module Contents
---------------

.. py:data:: console

.. py:class:: RootRegisterCommand

   Executes the ``register`` command to register a wallet to the root network of the Bittensor network.

   This command is used to formally acknowledge a wallet's participation in the network's root layer.

   Usage:
       The command registers the user's wallet with the root network, which is a crucial step for participating in network governance and other advanced functions.

   Optional arguments:
       - None. The command primarily uses the wallet and subtensor configurations.

   Example usage::

       btcli root register

   .. note::

      This command is important for users seeking to engage deeply with the Bittensor network, particularly in aspects related to network governance and decision-making.
      
      It is a straightforward process but requires the user to have an initialized and configured wallet.


   .. py:method:: run(cli)
      :staticmethod:


      Register to root network.



   .. py:method:: _run(cli, subtensor)
      :staticmethod:


      Register to root network.



   .. py:method:: add_args(parser)
      :staticmethod:



   .. py:method:: check_config(config)
      :staticmethod:



.. py:class:: RootList

   Executes the ``list`` command to display the members of the root network on the Bittensor network.

   This command provides an overview of the neurons that constitute the network's foundational layer.

   Usage:
       Upon execution, the command fetches and lists the neurons in the root network, showing their unique identifiers (UIDs), names, addresses, stakes, and whether they are part of the senate (network governance body).

   Optional arguments:
       - None. The command uses the subtensor configuration to retrieve data.

   Example usage::

       $ btcli root list

       UID  NAME                             ADDRESS                                                STAKE(τ)  SENATOR
       0                                     5CaCUPsSSdKWcMJbmdmJdnWVa15fJQuz5HsSGgVdZffpHAUa    27086.37070  Yes
       1    RaoK9                            5GmaAk7frPXnAxjbQvXcoEzMGZfkrDee76eGmKoB3wxUburE      520.24199  No
       2    Openτensor Foundaτion            5F4tQyWrhfGVcNhoqeiNsR6KjD4wMZ2kfhLj4oHYuyHbZAc3  1275437.45895  Yes
       3    RoundTable21                     5FFApaS75bv5pJHfAp2FVLBj9ZaXuFDjEypsaBNc1wCfe52v    84718.42095  Yes
       4                                     5HK5tp6t2S59DywmHRWPBVJeJ86T61KjurYqeooqj8sREpeN   168897.40859  Yes
       5    Rizzo                            5CXRfP2ekFhe62r7q3vppRajJmGhTi7vwvb2yr79jveZ282w    53383.34400  No
       6    τaosτaτs and BitAPAI             5Hddm3iBFD2GLT5ik7LZnT3XJUnRnN8PoeCFgGQgawUVKNm8   646944.73569  Yes
       ...

   .. note:: This command is useful for users interested in understanding the composition and governance structure of the Bittensor network's root layer. It provides insights into which neurons hold significant influence and responsibility within the network.


   .. py:method:: run(cli)
      :staticmethod:


      List the root network



   .. py:method:: _run(cli, subtensor)
      :staticmethod:


      List the root network



   .. py:method:: add_args(parser)
      :staticmethod:



   .. py:method:: check_config(config)
      :staticmethod:



.. py:class:: RootSetBoostCommand

   Executes the ``boost`` command to boost the weights for a specific subnet within the root network on the Bittensor network.

   Usage:
       The command allows boosting the weights for different subnets within the root network.

   Optional arguments:
       - ``--netuid`` (int): A single netuid for which weights are to be boosted.
       - ``--increase`` (float): The cooresponding increase in the weight for this subnet.

   Example usage::

       $ btcli root boost --netuid 1 --increase 0.01

       Enter netuid (e.g. 1): 1
       Enter amount (e.g. 0.01): 0.1
       Boosting weight for subnet: 1 by amount: 0.1

       Normalized weights:
               tensor([
               0.0000, 0.5455, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000,
               0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000,
               0.0000, 0.0000, 0.0000, 0.0000, 0.4545, 0.0000, 0.0000, 0.0000, 0.0000,
               0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000,
               0.0000, 0.0000, 0.0000, 0.0000, 0.0000]) -> tensor([0.0000, 0.5455, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000,
               0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000,
               0.0000, 0.0000, 0.0000, 0.0000, 0.4545, 0.0000, 0.0000, 0.0000, 0.0000,
               0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000,
               0.0000, 0.0000, 0.0000, 0.0000, 0.0000]
           )

       Do you want to set the following root weights?:
       weights: tensor([
               0.0000, 0.5455, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000,
               0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000,
               0.0000, 0.0000, 0.0000, 0.0000, 0.4545, 0.0000, 0.0000, 0.0000, 0.0000,
               0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000,
               0.0000, 0.0000, 0.0000, 0.0000, 0.0000])
       uids: tensor([ 0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17,
               18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
               36, 37, 38, 39, 40])? [y/n]: y
       True None
       ✅ Finalized
       ⠙ 📡 Setting root weights on test ...2023-11-28 22:09:14.001 |     SUCCESS      | Set weights                   Finalized: True



   .. py:method:: run(cli)
      :staticmethod:


      Set weights for root network.



   .. py:method:: _run(cli, subtensor)
      :staticmethod:


      Set weights for root network.



   .. py:method:: add_args(parser)
      :staticmethod:



   .. py:method:: check_config(config)
      :staticmethod:



.. py:class:: RootSetSlashCommand

   Executes the ``slash`` command to decrease the weights for a specific subnet within the root network on the Bittensor network.

   Usage:
       The command allows slashing (decreasing) the weights for different subnets within the root network.

   Optional arguments:
       - ``--netuid`` (int): A single netuid for which weights are to be slashed.
       - ``--decrease`` (float): The corresponding decrease in the weight for this subnet.

   Example usage::

       $ btcli root slash --netuid 1 --decrease 0.01

       Enter netuid (e.g. 1): 1
       Enter decrease amount (e.g. 0.01): 0.2
       Slashing weight for subnet: 1 by amount: 0.2

       Normalized weights:
               tensor([
               0.0000, 0.4318, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000,
               0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000,
               0.0000, 0.0000, 0.0000, 0.0000, 0.5682, 0.0000, 0.0000, 0.0000, 0.0000,
               0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000,
               0.0000, 0.0000, 0.0000, 0.0000, 0.0000]) -> tensor([
               0.0000, 0.4318, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000,
               0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000,
               0.0000, 0.0000, 0.0000, 0.0000, 0.5682, 0.0000, 0.0000, 0.0000, 0.0000,
               0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000,
               0.0000, 0.0000, 0.0000, 0.0000, 0.0000]
           )

       Do you want to set the following root weights?:
       weights: tensor([
               0.0000, 0.4318, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000,
               0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000,
               0.0000, 0.0000, 0.0000, 0.0000, 0.5682, 0.0000, 0.0000, 0.0000, 0.0000,
               0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000,
               0.0000, 0.0000, 0.0000, 0.0000, 0.0000])
       uids: tensor([ 0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17,
               18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
               36, 37, 38, 39, 40])? [y/n]: y
       ⠙ 📡 Setting root weights on test ...2023-11-28 22:09:14.001 |     SUCCESS      | Set weights                   Finalized: True


   .. py:method:: run(cli)
      :staticmethod:


      Set weights for root network with decreased values.



   .. py:method:: _run(cli, subtensor)
      :staticmethod:



   .. py:method:: add_args(parser)
      :staticmethod:



   .. py:method:: check_config(config)
      :staticmethod:



.. py:class:: RootSetWeightsCommand

   Executes the ``weights`` command to set the weights for the root network on the Bittensor network.

   This command is used by network senators to influence the distribution of network rewards and responsibilities.

   Usage:
       The command allows setting weights for different subnets within the root network. Users need to specify the netuids (network unique identifiers) and corresponding weights they wish to assign.

   Optional arguments:
       - ``--netuids`` (str): A comma-separated list of netuids for which weights are to be set.
       - ``--weights`` (str): Corresponding weights for the specified netuids, in comma-separated format.

   Example usage::

       btcli root weights --netuids 1,2,3 --weights 0.3,0.3,0.4

   .. note::

      This command is particularly important for network senators and requires a comprehensive understanding of the network's dynamics.
      It is a powerful tool that directly impacts the network's operational mechanics and reward distribution.


   .. py:method:: run(cli)
      :staticmethod:


      Set weights for root network.



   .. py:method:: _run(cli, subtensor)
      :staticmethod:


      Set weights for root network.



   .. py:method:: add_args(parser)
      :staticmethod:



   .. py:method:: check_config(config)
      :staticmethod:



.. py:class:: RootGetWeightsCommand

   Executes the ``get_weights`` command to retrieve the weights set for the root network on the Bittensor network.

   This command provides visibility into how network responsibilities and rewards are distributed among various subnets.

   Usage:
       The command outputs a table listing the weights assigned to each subnet within the root network. This information is crucial for understanding the current influence and reward distribution among the subnets.

   Optional arguments:
       - None. The command fetches weight information based on the subtensor configuration.

   Example usage::

       $ btcli root get_weights

                                               Root Network Weights
       UID        0        1        2       3        4        5       8        9       11     13      18       19
       1    100.00%        -        -       -        -        -       -        -        -      -       -        -
       2          -   40.00%    5.00%  10.00%   10.00%   10.00%  10.00%    5.00%        -      -  10.00%        -
       3          -        -   25.00%       -   25.00%        -  25.00%        -        -      -  25.00%        -
       4          -        -    7.00%   7.00%   20.00%   20.00%  20.00%        -    6.00%      -  20.00%        -
       5          -   20.00%        -  10.00%   15.00%   15.00%  15.00%    5.00%        -      -  10.00%   10.00%
       6          -        -        -       -   10.00%   10.00%  25.00%   25.00%        -      -  30.00%        -
       7          -   60.00%        -       -   20.00%        -       -        -   20.00%      -       -        -
       8          -   49.35%        -   7.18%   13.59%   21.14%   1.53%    0.12%    7.06%  0.03%       -        -
       9    100.00%        -        -       -        -        -       -        -        -      -       -        -
       ...

   .. note:: This command is essential for users interested in the governance and operational dynamics of the Bittensor network. It offers transparency into how network rewards and responsibilities are allocated across different subnets.


   .. py:method:: run(cli)
      :staticmethod:


      Get weights for root network.



   .. py:method:: _run(cli, subtensor)
      :staticmethod:


      Get weights for root network.



   .. py:method:: add_args(parser)
      :staticmethod:



   .. py:method:: check_config(config)
      :staticmethod:



