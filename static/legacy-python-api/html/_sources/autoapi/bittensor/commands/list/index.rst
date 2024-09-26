bittensor.commands.list
=======================

.. py:module:: bittensor.commands.list


Attributes
----------

.. autoapisummary::

   bittensor.commands.list.console


Classes
-------

.. autoapisummary::

   bittensor.commands.list.ListCommand


Module Contents
---------------

.. py:data:: console

.. py:class:: ListCommand

   Executes the ``list`` command which enumerates all wallets and their respective hotkeys present in the user's Bittensor configuration directory.

   The command organizes the information in a tree structure, displaying each wallet along with the ``ss58`` addresses for the coldkey public key and any hotkeys associated with it.

   Optional arguments:
       - ``-p``, ``--path``: The path to the Bittensor configuration directory. Defaults to '~/.bittensor'.

   The output is presented in a hierarchical tree format, with each wallet as a root node,
   and any associated hotkeys as child nodes. The ``ss58`` address is displayed for each
   coldkey and hotkey that is not encrypted and exists on the device.

   Usage:
       Upon invocation, the command scans the wallet directory and prints a list of all wallets, indicating whether the public keys are available (``?`` denotes unavailable or encrypted keys).

   Example usage::

       btcli wallet list --path ~/.bittensor

   .. note:: This command is read-only and does not modify the filesystem or the network state. It is intended for use within the Bittensor CLI to provide a quick overview of the user's wallets.


   .. py:method:: run(cli)
      :staticmethod:


      Lists wallets.



   .. py:method:: _run(cli, wallets, return_value=False)
      :staticmethod:



   .. py:method:: check_config(config)
      :staticmethod:



   .. py:method:: add_args(parser)
      :staticmethod:



   .. py:method:: get_tree(cli)
      :staticmethod:



