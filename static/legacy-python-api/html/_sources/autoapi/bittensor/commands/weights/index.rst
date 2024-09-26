bittensor.commands.weights
==========================

.. py:module:: bittensor.commands.weights

.. autoapi-nested-parse::

   Module that encapsulates the CommitWeightCommand and the RevealWeightCommand. Used to commit and reveal weights
   for a specific subnet on the Bittensor Network.



Classes
-------

.. autoapisummary::

   bittensor.commands.weights.CommitWeightCommand
   bittensor.commands.weights.RevealWeightCommand


Module Contents
---------------

.. py:class:: CommitWeightCommand

   Executes the ``commit`` command to commit weights for specific subnet on the Bittensor network.

   Usage:
       The command allows committing weights for a specific subnet. Users need to specify the netuid (network unique identifier), corresponding UIDs, and weights they wish to commit.

   Optional arguments:
       - ``--netuid`` (int): The netuid of the subnet for which weights are to be commited.
       - ``--uids`` (str): Corresponding UIDs for the specified netuid, in comma-separated format.
       - ``--weights`` (str): Corresponding weights for the specified UIDs, in comma-separated format.

   Example usage:
       $ btcli wt commit --netuid 1 --uids 1,2,3,4 --weights 0.1,0.2,0.3,0.4

   .. note:: This command is used to commit weights for a specific subnet and requires the user to have the necessary permissions.


   .. py:method:: run(cli)
      :staticmethod:


      Commit weights for a specific subnet.



   .. py:method:: _run(cli, subtensor)
      :staticmethod:


      Commit weights for a specific subnet



   .. py:method:: add_args(parser)
      :staticmethod:



   .. py:method:: check_config(config)
      :staticmethod:



.. py:class:: RevealWeightCommand

   Executes the ``reveal`` command to reveal weights for a specific subnet on the Bittensor network.
   Usage:
       The command allows revealing weights for a specific subnet. Users need to specify the netuid (network unique identifier), corresponding UIDs, and weights they wish to reveal.
   Optional arguments:
       - ``--netuid`` (int): The netuid of the subnet for which weights are to be revealed.
       - ``--uids`` (str): Corresponding UIDs for the specified netuid, in comma-separated format.
       - ``--weights`` (str): Corresponding weights for the specified UIDs, in comma-separated format.
       - ``--salt`` (str): Corresponding salt for the hash function, integers in comma-separated format.
   Example usage::
       $ btcli wt reveal --netuid 1 --uids 1,2,3,4 --weights 0.1,0.2,0.3,0.4 --salt 163,241,217,11,161,142,147,189
   .. note:: This command is used to reveal weights for a specific subnet and requires the user to have the necessary permissions.


   .. py:method:: run(cli)
      :staticmethod:


      Reveal weights for a specific subnet.



   .. py:method:: _run(cli, subtensor)
      :staticmethod:


      Reveal weights for a specific subnet.



   .. py:method:: add_args(parser)
      :staticmethod:



   .. py:method:: check_config(config)
      :staticmethod:



