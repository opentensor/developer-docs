bittensor.commands.stake
========================

.. py:module:: bittensor.commands.stake


Attributes
----------

.. autoapisummary::

   bittensor.commands.stake.console
   bittensor.commands.stake.MAX_CHILDREN


Classes
-------

.. autoapisummary::

   bittensor.commands.stake.StakeCommand
   bittensor.commands.stake.StakeShow
   bittensor.commands.stake.SetChildKeyTakeCommand
   bittensor.commands.stake.GetChildKeyTakeCommand
   bittensor.commands.stake.SetChildrenCommand
   bittensor.commands.stake.GetChildrenCommand


Functions
---------

.. autoapisummary::

   bittensor.commands.stake.get_netuid
   bittensor.commands.stake.get_hotkey
   bittensor.commands.stake._get_coldkey_wallets_for_path
   bittensor.commands.stake._get_hotkey_wallets_for_wallet


Module Contents
---------------

.. py:data:: console

.. py:data:: MAX_CHILDREN
   :value: 5


.. py:function:: get_netuid(cli, subtensor, prompt = True)

   Retrieve and validate the netuid from the user or configuration.


.. py:function:: get_hotkey(wallet, config)

   Retrieve the hotkey from the wallet or config.


.. py:class:: StakeCommand

   Executes the ``add`` command to stake tokens to one or more hotkeys from a user's coldkey on the Bittensor network.

   This command is used to allocate tokens to different hotkeys, securing their position and influence on the network.

   Usage:
       Users can specify the amount to stake, the hotkeys to stake to (either by name or ``SS58`` address), and whether to stake to all hotkeys. The command checks for sufficient balance and hotkey registration
       before proceeding with the staking process.

   Optional arguments:
       - ``--all`` (bool): When set, stakes all available tokens from the coldkey.
       - ``--uid`` (int): The unique identifier of the neuron to which the stake is to be added.
       - ``--amount`` (float): The amount of TAO tokens to stake.
       - ``--max_stake`` (float): Sets the maximum amount of TAO to have staked in each hotkey.
       - ``--hotkeys`` (list): Specifies hotkeys by name or SS58 address to stake to.
       - ``--all_hotkeys`` (bool): When set, stakes to all hotkeys associated with the wallet, excluding any specified in --hotkeys.

   The command prompts for confirmation before executing the staking operation.

   Example usage::

       btcli stake add --amount 100 --wallet.name <my_wallet> --wallet.hotkey <my_hotkey>

   .. note::

      This command is critical for users who wish to distribute their stakes among different neurons (hotkeys) on the network.
      It allows for a strategic allocation of tokens to enhance network participation and influence.


   .. py:method:: run(cli)
      :staticmethod:


      Stake token of amount to hotkey(s).



   .. py:method:: _run(cli, subtensor)
      :staticmethod:


      Stake token of amount to hotkey(s).



   .. py:method:: check_config(config)
      :classmethod:



   .. py:method:: add_args(parser)
      :classmethod:



.. py:function:: _get_coldkey_wallets_for_path(path)

.. py:function:: _get_hotkey_wallets_for_wallet(wallet)

.. py:class:: StakeShow

   Executes the ``show`` command to list all stake accounts associated with a user's wallet on the Bittensor network.

   This command provides a comprehensive view of the stakes associated with both hotkeys and delegates linked to the user's coldkey.

   Usage:
       The command lists all stake accounts for a specified wallet or all wallets in the user's configuration directory.
       It displays the coldkey, balance, account details (hotkey/delegate name), stake amount, and the rate of return.

   Optional arguments:
       - ``--all`` (bool): When set, the command checks all coldkey wallets instead of just the specified wallet.

   The command compiles a table showing:

   - Coldkey: The coldkey associated with the wallet.
   - Balance: The balance of the coldkey.
   - Account: The name of the hotkey or delegate.
   - Stake: The amount of TAO staked to the hotkey or delegate.
   - Rate: The rate of return on the stake, typically shown in TAO per day.

   Example usage::

       btcli stake show --all

   .. note::

      This command is essential for users who wish to monitor their stake distribution and returns across various accounts on the Bittensor network.
      It provides a clear and detailed overview of the user's staking activities.


   .. py:method:: run(cli)
      :staticmethod:


      Show all stake accounts.



   .. py:method:: _run(cli, subtensor)
      :staticmethod:


      Show all stake accounts.



   .. py:method:: check_config(config)
      :staticmethod:



   .. py:method:: add_args(parser)
      :staticmethod:



.. py:class:: SetChildKeyTakeCommand

   Executes the ``set_childkey_take`` command to modify your childkey take on a specified subnet on the Bittensor network to the caller.

   This command is used to modify your childkey take on a specified subnet on the Bittensor network.

   Usage:
       Users can specify the amount or 'take' for their child hotkeys (``SS58`` address),
       the user needs to have access to the ss58 hotkey this call, and the take must be between 0 and 18%.

   The command prompts for confirmation before executing the set_childkey_take operation.

   Example usage::

       btcli stake set_childkey_take --hotkey <childkey> --netuid 1 --take 0.18


   .. py:method:: run(cli)
      :staticmethod:


      Set childkey take.



   .. py:method:: _run(cli, subtensor)
      :staticmethod:



   .. py:method:: check_config(config)
      :staticmethod:



   .. py:method:: add_args(parser)
      :staticmethod:



.. py:class:: GetChildKeyTakeCommand

   Executes the ``get_childkey_take`` command to get your childkey take on a specified subnet on the Bittensor network to the caller.

   This command is used to get your childkey take on a specified subnet on the Bittensor network.

   Usage:
       Users can get the amount or 'take' for their child hotkeys (``SS58`` address)

   Example usage::

       btcli stake get_childkey_take --hotkey <childkey> --netuid 1


   .. py:method:: run(cli)
      :staticmethod:


      Get childkey take.



   .. py:method:: _run(cli, subtensor)
      :staticmethod:



   .. py:method:: check_config(config)
      :staticmethod:



   .. py:method:: add_args(parser)
      :staticmethod:



   .. py:method:: get_take(subtensor, hotkey, netuid)
      :staticmethod:


      Get the take value for a given subtensor, hotkey, and netuid.

      @param subtensor: The subtensor object.
      @param hotkey: The hotkey to retrieve the take value for.
      @param netuid: The netuid to retrieve the take value for.

      @return: The take value as a float. If the take value is not available, it returns 0.




.. py:class:: SetChildrenCommand

   Executes the ``set_children`` command to add children hotkeys on a specified subnet on the Bittensor network to the caller.

   This command is used to delegate authority to different hotkeys, securing their position and influence on the subnet.

   Usage:
       Users can specify the amount or 'proportion' to delegate to child hotkeys (``SS58`` address),
       the user needs to have sufficient authority to make this call, and the sum of proportions must equal 1,
       representing 100% of the proportion allocation.

   The command prompts for confirmation before executing the set_children operation.

   Example usage::

       btcli stake set_children --children <child_hotkey>,<child_hotkey> --hotkey <parent_hotkey> --netuid 1 --proportions 0.4,0.6

   .. note::

      This command is critical for users who wish to delegate children hotkeys among different neurons (hotkeys) on the network.
      It allows for a strategic allocation of authority to enhance network participation and influence.


   .. py:method:: run(cli)
      :staticmethod:


      Set children hotkeys.



   .. py:method:: _run(cli, subtensor)
      :staticmethod:



   .. py:method:: check_config(config)
      :staticmethod:



   .. py:method:: add_args(parser)
      :staticmethod:



   .. py:method:: print_current_stake(subtensor, children, hotkey)
      :staticmethod:



.. py:class:: GetChildrenCommand

   Executes the ``get_children_info`` command to get all child hotkeys on a specified subnet on the Bittensor network.

   This command is used to view delegated authority to different hotkeys on the subnet.

   Usage:
       Users can specify the subnet and see the children and the proportion that is given to them.

       The command compiles a table showing:

   - ChildHotkey: The hotkey associated with the child.
   - ParentHotKey: The hotkey associated with the parent.
   - Proportion: The proportion that is assigned to them.
   - Expiration: The expiration of the hotkey.

   Example usage::

       btcli stake get_children --netuid 1

   .. note:: This command is for users who wish to see child hotkeys among different neurons (hotkeys) on the network.


   .. py:method:: run(cli)
      :staticmethod:


      Get children hotkeys.



   .. py:method:: _run(cli, subtensor)
      :staticmethod:



   .. py:method:: get_parent_stake_info(console, subtensor, hotkey)
      :staticmethod:



   .. py:method:: retrieve_children(subtensor, hotkey, netuid, render_table)
      :staticmethod:


      Static method to retrieve children for a given subtensor.

      :param subtensor: The subtensor object used to interact with the Bittensor network.
      :type subtensor: bittensor.subtensor
      :param hotkey: The hotkey of the parent.
      :type hotkey: str
      :param netuid: The network unique identifier of the subtensor.
      :type netuid: int
      :param render_table: Flag indicating whether to render the retrieved children in a table.
      :type render_table: bool

      :returns: A list of children hotkeys.
      :rtype: List[str]



   .. py:method:: check_config(config)
      :staticmethod:



   .. py:method:: add_args(parser)
      :staticmethod:



   .. py:method:: render_table(subtensor, hotkey, hotkey_stake, children, netuid, prompt)
      :staticmethod:


      Render a table displaying information about child hotkeys on a particular subnet.

      Parameters:
      - subtensor: An instance of the "bittensor.subtensor" class.
      - hotkey: The hotkey of the parent node.
      - children: A list of tuples containing information about child hotkeys. Each tuple should contain:
          - The proportion of the child's stake relative to the total stake.
          - The hotkey of the child node.
      - netuid: The ID of the subnet.
      - prompt: A boolean indicating whether to display a prompt for adding a child hotkey.

      Returns:
      None

      Example Usage:
          subtensor = bittensor.subtensor_instance
          hotkey = "parent_hotkey"
          children = [(0.5, "child1_hotkey"), (0.3, "child2_hotkey"), (0.2, "child3_hotkey")]
          netuid = 1234
          prompt = True
          render_table(subtensor, hotkey, children, netuid, prompt)




