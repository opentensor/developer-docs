bittensor.commands.senate
=========================

.. py:module:: bittensor.commands.senate


Attributes
----------

.. autoapisummary::

   bittensor.commands.senate.console


Classes
-------

.. autoapisummary::

   bittensor.commands.senate.SenateCommand
   bittensor.commands.senate.ProposalsCommand
   bittensor.commands.senate.ShowVotesCommand
   bittensor.commands.senate.SenateRegisterCommand
   bittensor.commands.senate.SenateLeaveCommand
   bittensor.commands.senate.VoteCommand


Functions
---------

.. autoapisummary::

   bittensor.commands.senate.format_call_data
   bittensor.commands.senate.display_votes


Module Contents
---------------

.. py:data:: console

.. py:class:: SenateCommand

   Executes the ``senate`` command to view the members of Bittensor's governance protocol, known as the Senate.

   This command lists the delegates involved in the decision-making process of the Bittensor network.

   Usage:
       The command retrieves and displays a list of Senate members, showing their names and wallet addresses.
       This information is crucial for understanding who holds governance roles within the network.

   Example usage::

       btcli root senate

   .. note:: This command is particularly useful for users interested in the governance structure and participants of the Bittensor network. It provides transparency into the network's decision-making body.


   .. py:method:: run(cli)
      :staticmethod:


      View Bittensor's governance protocol proposals



   .. py:method:: _run(cli, subtensor)
      :staticmethod:


      View Bittensor's governance protocol proposals



   .. py:method:: check_config(config)
      :classmethod:



   .. py:method:: add_args(parser)
      :classmethod:



.. py:function:: format_call_data(call_data)

.. py:function:: display_votes(vote_data, delegate_info)

.. py:class:: ProposalsCommand

   Executes the ``proposals`` command to view active proposals within Bittensor's governance protocol.

   This command displays the details of ongoing proposals, including votes, thresholds, and proposal data.

   Usage:
       The command lists all active proposals, showing their hash, voting threshold, number of ayes and nays, detailed votes by address, end block number, and call data associated with each proposal.

   Example usage::

       btcli root proposals

   .. note::

      This command is essential for users who are actively participating in or monitoring the governance of the Bittensor network.
      It provides a detailed view of the proposals being considered, along with the community's response to each.


   .. py:method:: run(cli)
      :staticmethod:


      View Bittensor's governance protocol proposals



   .. py:method:: _run(cli, subtensor)
      :staticmethod:


      View Bittensor's governance protocol proposals



   .. py:method:: check_config(config)
      :classmethod:



   .. py:method:: add_args(parser)
      :classmethod:



.. py:class:: ShowVotesCommand

   Executes the ``proposal_votes`` command to view the votes for a specific proposal in Bittensor's governance protocol.

   IMPORTANT
       **THIS COMMAND IS DEPRECATED**. Use ``btcli root proposals`` to see vote status.

   This command provides a detailed breakdown of the votes cast by the senators for a particular proposal.

   Usage:
       Users need to specify the hash of the proposal they are interested in. The command then displays the voting addresses and their respective votes (Aye or Nay) for the specified proposal.

   Optional arguments:
       - ``--proposal`` (str): The hash of the proposal for which votes need to be displayed.

   Example usage::

       btcli root proposal_votes --proposal <proposal_hash>

   .. note::

      This command is crucial for users seeking detailed insights into the voting behavior of the Senate on specific governance proposals.
      It helps in understanding the level of consensus or disagreement within the Senate on key decisions.

   **THIS COMMAND IS DEPRECATED**. Use ``btcli root proposals`` to see vote status.


   .. py:method:: run(cli)
      :staticmethod:


      View Bittensor's governance protocol proposals active votes



   .. py:method:: _run(cli, subtensor)
      :staticmethod:


      View Bittensor's governance protocol proposals active votes



   .. py:method:: check_config(config)
      :classmethod:



   .. py:method:: add_args(parser)
      :classmethod:



.. py:class:: SenateRegisterCommand

   Executes the ``senate_register`` command to register as a member of the Senate in Bittensor's governance protocol.

   This command is used by delegates who wish to participate in the governance and decision-making process of the network.

   Usage:
       The command checks if the user's hotkey is a delegate and not already a Senate member before registering them to the Senate.
       Successful execution allows the user to participate in proposal voting and other governance activities.

   Example usage::

       btcli root senate_register

   .. note::

      This command is intended for delegates who are interested in actively participating in the governance of the Bittensor network.
      It is a significant step towards engaging in network decision-making processes.


   .. py:method:: run(cli)
      :staticmethod:


      Register to participate in Bittensor's governance protocol proposals



   .. py:method:: _run(cli, subtensor)
      :staticmethod:


      Register to participate in Bittensor's governance protocol proposals



   .. py:method:: check_config(config)
      :classmethod:



   .. py:method:: add_args(parser)
      :classmethod:



.. py:class:: SenateLeaveCommand

   Executes the ``senate_leave`` command to discard membership in Bittensor's Senate.

   This command allows a Senate member to voluntarily leave the governance body.

   Usage:
       The command checks if the user's hotkey is currently a Senate member before processing the request to leave the Senate.
       It effectively removes the user from participating in future governance decisions.

   Example usage::

       btcli root senate_leave

   .. note::

      This command is relevant for Senate members who wish to step down from their governance responsibilities within the Bittensor network.
      It should be used when a member no longer desires to participate in the Senate activities.


   .. py:method:: run(cli)
      :staticmethod:


      Discard membership in Bittensor's governance protocol proposals



   .. py:method:: _run(cli, subtensor)
      :staticmethod:


      Discard membership in Bittensor's governance protocol proposals



   .. py:method:: check_config(config)
      :classmethod:



   .. py:method:: add_args(parser)
      :classmethod:



.. py:class:: VoteCommand

   Executes the ``senate_vote`` command to cast a vote on an active proposal in Bittensor's governance protocol.

   This command is used by Senate members to vote on various proposals that shape the network's future.

   Usage:
       The user needs to specify the hash of the proposal they want to vote on. The command then allows the Senate member to cast an 'Aye' or 'Nay' vote, contributing to the decision-making process.

   Optional arguments:
       - ``--proposal`` (str): The hash of the proposal to vote on.

   Example usage::

       btcli root senate_vote --proposal <proposal_hash>

   .. note:: This command is crucial for Senate members to exercise their voting rights on key proposals. It plays a vital role in the governance and evolution of the Bittensor network.


   .. py:method:: run(cli)
      :staticmethod:


      Vote in Bittensor's governance protocol proposals



   .. py:method:: _run(cli, subtensor)
      :staticmethod:


      Vote in Bittensor's governance protocol proposals



   .. py:method:: check_config(config)
      :classmethod:



   .. py:method:: add_args(parser)
      :classmethod:



