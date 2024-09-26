bittensor.commands.delegates
============================

.. py:module:: bittensor.commands.delegates


Attributes
----------

.. autoapisummary::

   bittensor.commands.delegates.console


Classes
-------

.. autoapisummary::

   bittensor.commands.delegates.DelegateStakeCommand
   bittensor.commands.delegates.DelegateUnstakeCommand
   bittensor.commands.delegates.ListDelegatesCommand
   bittensor.commands.delegates.NominateCommand
   bittensor.commands.delegates.MyDelegatesCommand
   bittensor.commands.delegates.SetTakeCommand


Functions
---------

.. autoapisummary::

   bittensor.commands.delegates._get_coldkey_wallets_for_path
   bittensor.commands.delegates.show_delegates_lite
   bittensor.commands.delegates.show_delegates


Module Contents
---------------

.. py:function:: _get_coldkey_wallets_for_path(path)

.. py:data:: console

.. py:function:: show_delegates_lite(delegates_lite, width = None)

   This method is a lite version of the :func:`show_delegates`. This method displays a formatted table of Bittensor network delegates with detailed statistics to the console.

   The table is sorted by total stake in descending order and provides
   a snapshot of delegate performance and status, helping users make informed decisions for staking or nominating.

   This helper function is not intended to be used directly in user code unless specifically required.

   :param delegates_lite: A list of delegate information objects to be displayed.
   :type delegates_lite: List[bittensor.DelegateInfoLite]
   :param width: The width of the console output table. Defaults to ``None``, which will make the table expand to the maximum width of the console.
   :type width: Optional[int]

   The output table contains the following columns. To display more columns, use the :func:`show_delegates` function.

   - INDEX: The numerical index of the delegate.
   - DELEGATE: The name of the delegate.
   - SS58: The truncated SS58 address of the delegate.
   - NOMINATORS: The number of nominators supporting the delegate.
   - VPERMIT: Validator permits held by the delegate for the subnets.
   - TAKE: The percentage of the delegate's earnings taken by the network.
   - DELEGATE/(24h): The earnings of the delegate in the last 24 hours.
   - Desc: A brief description provided by the delegate.

   Usage:
       This function is typically used within the Bittensor CLI to show current delegate options to users who are considering where to stake their tokens.

   Example usage::

       show_delegates_lite(delegates_lite, width=80)

   .. note::

      This function is primarily for display purposes within a command-line interface and does not return any values. It relies on the `rich <https://github.com/Textualize/rich>`_ Python library to render
      the table in the console.


.. py:function:: show_delegates(delegates, prev_delegates, width = None)

   Displays a formatted table of Bittensor network delegates with detailed statistics to the console.

   The table is sorted by total stake in descending order and provides
   a snapshot of delegate performance and status, helping users make informed decisions for staking or nominating.

   This is a helper function that is called by the :func:`list_delegates` and :func:`my_delegates`, and is not intended
   to be used directly in user code unless specifically required.

   :param delegates: A list of delegate information objects to be displayed.
   :type delegates: List[bittensor.DelegateInfo]
   :param prev_delegates: A list of delegate information objects from a previous state, used to calculate changes in stake. Defaults to ``None``.
   :type prev_delegates: Optional[List[bittensor.DelegateInfo]]
   :param width: The width of the console output table. Defaults to ``None``, which will make the table expand to the maximum width of the console.
   :type width: Optional[int]

   The output table contains the following columns:

   - INDEX: The numerical index of the delegate.
   - DELEGATE: The name of the delegate.
   - SS58: The truncated SS58 address of the delegate.
   - NOMINATORS: The number of nominators supporting the delegate.
   - DELEGATE STAKE(τ): The stake that is directly delegated to the delegate.
   - TOTAL STAKE(τ): The total stake held by the delegate, including nominators' stake.
   - CHANGE/(4h): The percentage change in the delegate's stake over the past 4 hours.
   - VPERMIT: Validator permits held by the delegate for the subnets.
   - TAKE: The percentage of the delegate's earnings taken by the network.
   - NOMINATOR/(24h)/kτ: The earnings per 1000 τ staked by nominators in the last 24 hours.
   - DELEGATE/(24h): The earnings of the delegate in the last 24 hours.
   - Desc: A brief description provided by the delegate.

   Usage:
       This function is typically used within the Bittensor CLI to show current delegate options to users who are considering where to stake their tokens.

   Example usage::

       show_delegates(current_delegates, previous_delegates, width=80)

   .. note::

      This function is primarily for display purposes within a command-line interface and does
      not return any values. It relies on the `rich <https://github.com/Textualize/rich>`_ Python library to render
      the table in the
      console.


.. py:class:: DelegateStakeCommand

   Executes the ``delegate`` command, which stakes Tao to a specified delegate on the Bittensor network.

   This action allocates the user's Tao to support a delegate, potentially earning staking rewards in return.

   Optional Arguments:
       - ``wallet.name``: The name of the wallet to use for the command.
       - ``delegate_ss58key``: The ``SS58`` address of the delegate to stake to.
       - ``amount``: The amount of Tao to stake.
       - ``all``: If specified, the command stakes all available Tao.

   The command interacts with the user to determine the delegate and the amount of Tao to be staked. If the ``--all``
   flag is used, it delegates the entire available balance.

   Usage:
       The user must specify the delegate's SS58 address and the amount of Tao to stake. The function sends a
       transaction to the subtensor network to delegate the specified amount to the chosen delegate. These values are
       prompted if not provided.

   Example usage::

       btcli delegate --delegate_ss58key <SS58_ADDRESS> --amount <AMOUNT>
       btcli delegate --delegate_ss58key <SS58_ADDRESS> --all

   .. note::

      This command modifies the blockchain state and may incur transaction fees. It requires user confirmation and
      interaction, and is designed to be used within the Bittensor CLI environment. The user should ensure the
      delegate's address and the amount to be staked are correct before executing the command.


   .. py:method:: run(cli)
      :staticmethod:


      Delegates stake to a chain delegate.



   .. py:method:: add_args(parser)
      :staticmethod:



   .. py:method:: check_config(config)
      :staticmethod:



.. py:class:: DelegateUnstakeCommand

   Executes the ``undelegate`` command, allowing users to withdraw their staked Tao from a delegate on the Bittensor
   network.

   This process is known as "undelegating" and it reverses the delegation process, freeing up the staked tokens.

   Optional Arguments:
       - ``wallet.name``: The name of the wallet to use for the command.
       - ``delegate_ss58key``: The ``SS58`` address of the delegate to undelegate from.
       - ``amount``: The amount of Tao to undelegate.
       - ``all``: If specified, the command undelegates all staked Tao from the delegate.

   The command prompts the user for the amount of Tao to undelegate and the ``SS58`` address of the delegate from which
   to undelegate. If the ``--all`` flag is used, it will attempt to undelegate the entire staked amount from the
   specified delegate.

   Usage:
       The user must provide the delegate's SS58 address and the amount of Tao to undelegate. The function will then
       send a transaction to the Bittensor network to process the undelegation.

   Example usage::

       btcli undelegate --delegate_ss58key <SS58_ADDRESS> --amount <AMOUNT>
       btcli undelegate --delegate_ss58key <SS58_ADDRESS> --all

   .. note::

      This command can result in a change to the blockchain state and may incur transaction fees. It is interactive
      and requires confirmation from the user before proceeding. It should be used with care as undelegating can
      affect the delegate's total stake and
      potentially the user's staking rewards.


   .. py:method:: run(cli)
      :staticmethod:


      Undelegates stake from a chain delegate.



   .. py:method:: _run(subtensor)

      Undelegates stake from a chain delegate.



   .. py:method:: add_args(parser)
      :staticmethod:



   .. py:method:: check_config(config)
      :staticmethod:



.. py:class:: ListDelegatesCommand

   Displays a formatted table of Bittensor network delegates, providing a comprehensive overview of delegate statistics and information.

   This table helps users make informed decisions on which delegates to allocate their TAO stake.

   Optional Arguments:
       - ``wallet.name``: The name of the wallet to use for the command.
       - ``subtensor.network``: The name of the network to use for the command.

   The table columns include:

   - INDEX: The delegate's index in the sorted list.
   - DELEGATE: The name of the delegate.
   - SS58: The delegate's unique SS58 address (truncated for display).
   - NOMINATORS: The count of nominators backing the delegate.
   - DELEGATE STAKE(τ): The amount of delegate's own stake (not the TAO delegated from any nominators).
   - TOTAL STAKE(τ): The delegate's cumulative stake, including self-staked and nominators' stakes.
   - CHANGE/(4h): The percentage change in the delegate's stake over the last four hours.
   - SUBNETS: The subnets to which the delegate is registered.
   - VPERMIT: Indicates the subnets for which the delegate has validator permits.
   - NOMINATOR/(24h)/kτ: The earnings per 1000 τ staked by nominators in the last 24 hours.
   - DELEGATE/(24h): The total earnings of the delegate in the last 24 hours.
   - DESCRIPTION: A brief description of the delegate's purpose and operations.

   Sorting is done based on the ``TOTAL STAKE`` column in descending order. Changes in stake are highlighted:
   increases in green and decreases in red. Entries with no previous data are marked with ``NA``. Each delegate's name
   is a hyperlink to their respective URL, if available.

   Example usage::

       btcli root list_delegates
       btcli root list_delegates --wallet.name my_wallet
       btcli root list_delegates --subtensor.network finney # can also be `test` or `local`

   .. note::

      This function is part of the Bittensor CLI tools and is intended for use within a console application. It prints
      directly to the console and does not return any value.


   .. py:method:: run(cli)
      :staticmethod:


      List all delegates on the network.



   .. py:method:: _run(cli, subtensor)
      :staticmethod:


      List all delegates on the network.



   .. py:method:: add_args(parser)
      :staticmethod:



   .. py:method:: check_config(config)
      :staticmethod:



.. py:class:: NominateCommand

   Executes the ``nominate`` command, which facilitates a wallet to become a delegate on the Bittensor network.

   This command handles the nomination process, including wallet unlocking and verification of the hotkey's current
   delegate status.

   The command performs several checks:

   - Verifies that the hotkey is not already a delegate to prevent redundant nominations.
   - Tries to nominate the wallet and reports success or failure.

   Upon success, the wallet's hotkey is registered as a delegate on the network.

   Optional Arguments:
       - ``wallet.name``: The name of the wallet to use for the command.
       - ``wallet.hotkey``: The name of the hotkey to use for the command.

   Usage:
       To run the command, the user must have a configured wallet with both hotkey and coldkey. If the wallet is not
       already nominated, this command will initiate the process.

   Example usage::

       btcli root nominate
       btcli root nominate --wallet.name my_wallet --wallet.hotkey my_hotkey

   .. note::

      This function is intended to be used as a CLI command. It prints the outcome directly to the console and does
      not return any value. It should not be called programmatically in user code due to its interactive nature and
      side effects on the network state.


   .. py:method:: run(cli)
      :staticmethod:


      Nominate wallet.



   .. py:method:: _run(cli, subtensor)
      :staticmethod:


      Nominate wallet.



   .. py:method:: add_args(parser)
      :staticmethod:



   .. py:method:: check_config(config)
      :staticmethod:



.. py:class:: MyDelegatesCommand

   Executes the ``my_delegates`` command within the Bittensor CLI, which retrieves and displays a table of delegated
   stakes from a user's wallet(s) to various delegates on the Bittensor network.

   The command provides detailed insights into the user's
   staking activities and the performance of their chosen delegates.

   Optional Arguments:
       - ``wallet.name``: The name of the wallet to use for the command.
       - ``all``: If specified, the command aggregates information across all wallets.

   The table output includes the following columns:

   - Wallet: The name of the user's wallet.
   - OWNER: The name of the delegate's owner.
   - SS58: The truncated SS58 address of the delegate.
   - Delegation: The amount of Tao staked by the user to the delegate.
   - τ/24h: The earnings from the delegate to the user over the past 24 hours.
   - NOMS: The number of nominators for the delegate.
   - OWNER STAKE(τ): The stake amount owned by the delegate.
   - TOTAL STAKE(τ): The total stake amount held by the delegate.
   - SUBNETS: The list of subnets the delegate is a part of.
   - VPERMIT: Validator permits held by the delegate for various subnets.
   - 24h/kτ: Earnings per 1000 Tao staked over the last 24 hours.
   - Desc: A description of the delegate.

   The command also sums and prints the total amount of Tao delegated across all wallets.

   Usage:
       The command can be run as part of the Bittensor CLI suite of tools and requires no parameters if a single wallet
       is used. If multiple wallets are present, the ``--all`` flag can be specified to aggregate information across
       all wallets.

   Example usage::

       btcli my_delegates
       btcli my_delegates --all
       btcli my_delegates --wallet.name my_wallet

   .. note:: This function is typically called by the CLI parser and is not intended to be used directly in user code.


   .. py:method:: run(cli)
      :staticmethod:


      Delegates stake to a chain delegate.



   .. py:method:: _run(cli, subtensor)
      :staticmethod:


      Delegates stake to a chain delegate.



   .. py:method:: add_args(parser)
      :staticmethod:



   .. py:method:: check_config(config)
      :staticmethod:



.. py:class:: SetTakeCommand

   Executes the ``set_take`` command, which sets the delegate take.

   The command performs several checks:

       1. Hotkey is already a delegate
       2. New take value is within 0-18% range

   Optional Arguments:
       - ``take``: The new take value
       - ``wallet.name``: The name of the wallet to use for the command.
       - ``wallet.hotkey``: The name of the hotkey to use for the command.

   Usage:
       To run the command, the user must have a configured wallet with both hotkey and coldkey. Also, the hotkey should already be a delegate.

   Example usage::
       btcli root set_take --wallet.name my_wallet --wallet.hotkey my_hotkey

   .. note:: This function can be used to update the takes individually for every subnet


   .. py:method:: run(cli)
      :staticmethod:


      Set delegate take.



   .. py:method:: _run(cli, subtensor)
      :staticmethod:


      Set delegate take.



   .. py:method:: add_args(parser)
      :staticmethod:



   .. py:method:: check_config(config)
      :staticmethod:



