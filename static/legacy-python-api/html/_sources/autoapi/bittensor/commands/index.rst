bittensor.commands
==================

.. py:module:: bittensor.commands


Submodules
----------

.. toctree::
   :maxdepth: 1

   /autoapi/bittensor/commands/check_coldkey_swap/index
   /autoapi/bittensor/commands/delegates/index
   /autoapi/bittensor/commands/identity/index
   /autoapi/bittensor/commands/inspect/index
   /autoapi/bittensor/commands/list/index
   /autoapi/bittensor/commands/metagraph/index
   /autoapi/bittensor/commands/misc/index
   /autoapi/bittensor/commands/network/index
   /autoapi/bittensor/commands/overview/index
   /autoapi/bittensor/commands/register/index
   /autoapi/bittensor/commands/root/index
   /autoapi/bittensor/commands/senate/index
   /autoapi/bittensor/commands/stake/index
   /autoapi/bittensor/commands/transfer/index
   /autoapi/bittensor/commands/unstake/index
   /autoapi/bittensor/commands/utils/index
   /autoapi/bittensor/commands/wallets/index
   /autoapi/bittensor/commands/weights/index


Attributes
----------

.. autoapisummary::

   bittensor.commands.defaults


Classes
-------

.. autoapisummary::

   bittensor.commands.StakeCommand
   bittensor.commands.StakeShow
   bittensor.commands.SetChildrenCommand
   bittensor.commands.GetChildrenCommand
   bittensor.commands.SetChildKeyTakeCommand
   bittensor.commands.GetChildKeyTakeCommand
   bittensor.commands.UnStakeCommand
   bittensor.commands.RevokeChildrenCommand
   bittensor.commands.OverviewCommand
   bittensor.commands.PowRegisterCommand
   bittensor.commands.RegisterCommand
   bittensor.commands.RunFaucetCommand
   bittensor.commands.SwapHotkeyCommand
   bittensor.commands.NominateCommand
   bittensor.commands.ListDelegatesCommand
   bittensor.commands.DelegateStakeCommand
   bittensor.commands.DelegateUnstakeCommand
   bittensor.commands.MyDelegatesCommand
   bittensor.commands.SetTakeCommand
   bittensor.commands.NewColdkeyCommand
   bittensor.commands.NewHotkeyCommand
   bittensor.commands.RegenColdkeyCommand
   bittensor.commands.RegenColdkeypubCommand
   bittensor.commands.RegenHotkeyCommand
   bittensor.commands.UpdateWalletCommand
   bittensor.commands.WalletCreateCommand
   bittensor.commands.WalletBalanceCommand
   bittensor.commands.GetWalletHistoryCommand
   bittensor.commands.CommitWeightCommand
   bittensor.commands.RevealWeightCommand
   bittensor.commands.TransferCommand
   bittensor.commands.InspectCommand
   bittensor.commands.MetagraphCommand
   bittensor.commands.ListCommand
   bittensor.commands.UpdateCommand
   bittensor.commands.AutocompleteCommand
   bittensor.commands.SenateCommand
   bittensor.commands.ProposalsCommand
   bittensor.commands.ShowVotesCommand
   bittensor.commands.SenateRegisterCommand
   bittensor.commands.SenateLeaveCommand
   bittensor.commands.VoteCommand
   bittensor.commands.RootRegisterCommand
   bittensor.commands.RootList
   bittensor.commands.RootSetWeightsCommand
   bittensor.commands.RootGetWeightsCommand
   bittensor.commands.RootSetBoostCommand
   bittensor.commands.RootSetSlashCommand
   bittensor.commands.GetIdentityCommand
   bittensor.commands.SetIdentityCommand
   bittensor.commands.CheckColdKeySwapCommand


Package Contents
----------------

.. py:data:: defaults
   :type:  munch.Munch

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




.. py:class:: UnStakeCommand

   Executes the ``remove`` command to unstake TAO tokens from one or more hotkeys and transfer them back to the user's coldkey on the Bittensor network.

   This command is used to withdraw tokens previously staked to different hotkeys.

   Usage:
       Users can specify the amount to unstake, the hotkeys to unstake from (either by name or ``SS58`` address), and whether to unstake from all hotkeys. The command checks for sufficient stake and prompts for confirmation before proceeding with the unstaking process.

   Optional arguments:
       - ``--all`` (bool): When set, unstakes all staked tokens from the specified hotkeys.
       - ``--amount`` (float): The amount of TAO tokens to unstake.
       - --hotkey_ss58address (str): The SS58 address of the hotkey to unstake from.
       - ``--max_stake`` (float): Sets the maximum amount of TAO to remain staked in each hotkey.
       - ``--hotkeys`` (list): Specifies hotkeys by name or SS58 address to unstake from.
       - ``--all_hotkeys`` (bool): When set, unstakes from all hotkeys associated with the wallet, excluding any specified in --hotkeys.

   The command prompts for confirmation before executing the unstaking operation.

   Example usage::

       btcli stake remove --amount 100 --hotkeys hk1,hk2

   .. note::

      This command is important for users who wish to reallocate their stakes or withdraw them from the network.
      It allows for flexible management of token stakes across different neurons (hotkeys) on the network.


   .. py:method:: check_config(config)
      :classmethod:



   .. py:method:: add_args(command_parser)
      :staticmethod:



   .. py:method:: run(cli)
      :staticmethod:


      Unstake token of amount from hotkey(s).



   .. py:method:: _run(cli, subtensor)
      :staticmethod:


      Unstake token of amount from hotkey(s).



.. py:class:: RevokeChildrenCommand

   Executes the ``revoke_children`` command to remove all children hotkeys on a specified subnet on the Bittensor network.

   This command is used to remove delegated authority from all child hotkeys, removing their position and influence on the subnet.

   Usage:
       Users need to specify the parent hotkey and the subnet ID (netuid).
       The user needs to have sufficient authority to make this call.

   The command prompts for confirmation before executing the revoke_children operation.

   Example usage::

       btcli stake revoke_children --hotkey <parent_hotkey> --netuid 1

   .. note::

      This command is critical for users who wish to remove children hotkeys on the network.
      It allows for a complete removal of delegated authority to enhance network participation and influence.


   .. py:method:: run(cli)
      :staticmethod:


      Revokes all children hotkeys.



   .. py:method:: _run(cli, subtensor)
      :staticmethod:



   .. py:method:: check_config(config)
      :staticmethod:



   .. py:method:: add_args(parser)
      :staticmethod:



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



.. py:class:: PowRegisterCommand

   Executes the ``pow_register`` command to register a neuron on the Bittensor network using Proof of Work (PoW).

   This method is an alternative registration process that leverages computational work for securing a neuron's place on the network.

   Usage:
       The command starts by verifying the existence of the specified subnet. If the subnet does not exist, it terminates with an error message.
       On successful verification, the PoW registration process is initiated, which requires solving computational puzzles.

   Optional arguments:
       - ``--netuid`` (int): The netuid for the subnet on which to serve the neuron. Mandatory for specifying the target subnet.
       - ``--pow_register.num_processes`` (int): The number of processors to use for PoW registration. Defaults to the system's default setting.
       - ``--pow_register.update_interval`` (int): The number of nonces to process before checking for the next block during registration. Affects the frequency of update checks.
       - ``--pow_register.no_output_in_place`` (bool): When set, disables the output of registration statistics in place. Useful for cleaner logs.
       - ``--pow_register.verbose`` (bool): Enables verbose output of registration statistics for detailed information.
       - ``--pow_register.cuda.use_cuda`` (bool): Enables the use of CUDA for GPU-accelerated PoW calculations. Requires a CUDA-compatible GPU.
       - ``--pow_register.cuda.no_cuda`` (bool): Disables the use of CUDA, defaulting to CPU-based calculations.
       - ``--pow_register.cuda.dev_id`` (int): Specifies the CUDA device ID, useful for systems with multiple CUDA-compatible GPUs.
       - ``--pow_register.cuda.tpb`` (int): Sets the number of Threads Per Block for CUDA operations, affecting the GPU calculation dynamics.

   The command also supports additional wallet and subtensor arguments, enabling further customization of the registration process.

   Example usage::

       btcli pow_register --netuid 1 --pow_register.num_processes 4 --cuda.use_cuda

   .. note::

      This command is suited for users with adequate computational resources to participate in PoW registration. It requires a sound understanding
      of the network's operations and PoW mechanics. Users should ensure their systems meet the necessary hardware and software requirements,
      particularly when opting for CUDA-based GPU acceleration.

   This command may be disabled according on the subnet owner's directive. For example, on netuid 1 this is permanently disabled.


   .. py:method:: run(cli)
      :staticmethod:


      Register neuron.



   .. py:method:: _run(cli, subtensor)
      :staticmethod:


      Register neuron.



   .. py:method:: add_args(parser)
      :staticmethod:



   .. py:method:: check_config(config)
      :staticmethod:



.. py:class:: RegisterCommand

   Executes the ``register`` command to register a neuron on the Bittensor network by recycling some TAO (the network's native token).

   This command is used to add a new neuron to a specified subnet within the network, contributing to the decentralization and robustness of Bittensor.

   Usage:
       Before registering, the command checks if the specified subnet exists and whether the user's balance is sufficient to cover the registration cost.

       The registration cost is determined by the current recycle amount for the specified subnet. If the balance is insufficient or the subnet does not exist, the command will exit with an appropriate error message.

       If the preconditions are met, and the user confirms the transaction (if ``no_prompt`` is not set), the command proceeds to register the neuron by recycling the required amount of TAO.

   The command structure includes:

   - Verification of subnet existence.
   - Checking the user's balance against the current recycle amount for the subnet.
   - User confirmation prompt for proceeding with registration.
   - Execution of the registration process.

   Columns Displayed in the confirmation prompt:

   - Balance: The current balance of the user's wallet in TAO.
   - Cost to Register: The required amount of TAO needed to register on the specified subnet.

   Example usage::

       btcli subnets register --netuid 1

   .. note:: This command is critical for users who wish to contribute a new neuron to the network. It requires careful consideration of the subnet selection and an understanding of the registration costs. Users should ensure their wallet is sufficiently funded before attempting to register a neuron.


   .. py:method:: run(cli)
      :staticmethod:


      Register neuron by recycling some TAO.



   .. py:method:: _run(cli, subtensor)
      :staticmethod:


      Register neuron by recycling some TAO.



   .. py:method:: add_args(parser)
      :staticmethod:



   .. py:method:: check_config(config)
      :staticmethod:



.. py:class:: RunFaucetCommand

   Executes the ``faucet`` command to obtain test TAO tokens by performing Proof of Work (PoW).

   .. important:: **THIS COMMAND IS CURRENTLY DISABLED.**

   This command is particularly useful for users who need test tokens for operations on the Bittensor testnet.

   Usage:
       The command uses the PoW mechanism to validate the user's effort and rewards them with test TAO tokens. It is typically used in testnet environments where real value transactions are not necessary.

   Optional arguments:
       - ``--faucet.num_processes`` (int): Specifies the number of processors to use for the PoW operation. A higher number of processors may increase the chances of successful computation.
       - ``--faucet.update_interval`` (int): Sets the frequency of nonce processing before checking for the next block, which impacts the PoW operation's responsiveness.
       - ``--faucet.no_output_in_place`` (bool): When set, it disables in-place output of registration statistics for cleaner log visibility.
       - ``--faucet.verbose`` (bool): Enables verbose output for detailed statistical information during the PoW process.
       - ``--faucet.cuda.use_cuda`` (bool): Activates the use of CUDA for GPU acceleration in the PoW process, suitable for CUDA-compatible GPUs.
       - ``--faucet.cuda.no_cuda`` (bool): Disables the use of CUDA, opting for CPU-based calculations.
       - ``--faucet.cuda.dev_id`` (int[]): Allows selection of specific CUDA device IDs for the operation, useful in multi-GPU setups.
       - ``--faucet.cuda.tpb`` (int): Determines the number of Threads Per Block for CUDA operations, affecting GPU calculation efficiency.

   These options provide flexibility in configuring the PoW process according to the user's hardware capabilities and preferences.

   Example usage::

       btcli wallet faucet --faucet.num_processes 4 --faucet.cuda.use_cuda

   .. note::

      This command is meant for use in testnet environments where users can experiment with the network without using real TAO tokens.
      It's important for users to have the necessary hardware setup, especially when opting for CUDA-based GPU calculations.

   **THIS COMMAND IS CURRENTLY DISABLED.**


   .. py:method:: run(cli)
      :staticmethod:


      Register neuron.



   .. py:method:: _run(cli, subtensor)
      :staticmethod:


      Register neuron.



   .. py:method:: add_args(parser)
      :staticmethod:



   .. py:method:: check_config(config)
      :staticmethod:



.. py:class:: SwapHotkeyCommand

   .. py:method:: run(cli)
      :staticmethod:


      Executes the ``swap_hotkey`` command to swap the hotkeys for a neuron on the network.

      Usage:
          The command is used to swap the hotkey of a wallet for another hotkey on that same wallet.

      Optional arguments:
          - ``--wallet.name`` (str): Specifies the wallet for which the hotkey is to be swapped.
          - ``--wallet.hotkey`` (str): The original hotkey name that is getting swapped out.
          - ``--wallet.hotkey_b`` (str): The new hotkey name for which the old is getting swapped out for.

      Example usage::

          btcli wallet swap_hotkey --wallet.name your_wallet_name --wallet.hotkey original_hotkey --wallet.hotkey_b new_hotkey



   .. py:method:: _run(cli, subtensor)
      :staticmethod:


      Swap your hotkey for all registered axons on the network.



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



.. py:class:: NewColdkeyCommand

   Executes the ``new_coldkey`` command to create a new coldkey under a wallet on the Bittensor network.

   This command generates a coldkey, which is essential for holding balances and performing high-value transactions.

   Usage:
       The command creates a new coldkey with an optional word count for the mnemonic and supports password protection.
       It also allows overwriting an existing coldkey.

   Optional arguments:
       - ``--n_words`` (int): The number of words in the mnemonic phrase.
       - ``--use_password`` (bool): Enables password protection for the generated key.
       - ``--overwrite_coldkey`` (bool): Overwrites the existing coldkey with the new one.

   Example usage::

       btcli wallet new_coldkey --n_words 15

   .. note::

      This command is crucial for users who need to create a new coldkey for enhanced security or as part of setting up a new wallet.
      It's a foundational step in establishing a secure presence on the Bittensor network.


   .. py:method:: run()

      Creates a new coldkey under this wallet.



   .. py:method:: check_config(config)
      :staticmethod:



   .. py:method:: add_args(parser)
      :staticmethod:



.. py:class:: NewHotkeyCommand

   Executes the ``new_hotkey`` command to create a new hotkey under a wallet on the Bittensor network.

   This command is used to generate a new hotkey for managing a neuron or participating in the network.

   Usage:
       The command creates a new hotkey with an optional word count for the mnemonic and supports password protection.
       It also allows overwriting an existing hotkey.

   Optional arguments:
       - ``--n_words`` (int): The number of words in the mnemonic phrase.
       - ``--use_password`` (bool): Enables password protection for the generated key.
       - ``--overwrite_hotkey`` (bool): Overwrites the existing hotkey with the new one.

   Example usage::

       btcli wallet new_hotkey --n_words 24

   .. note::

      This command is useful for users who wish to create additional hotkeys for different purposes,
      such as running multiple miners or separating operational roles within the network.


   .. py:method:: run()

      Creates a new hotke under this wallet.



   .. py:method:: check_config(config)
      :staticmethod:



   .. py:method:: add_args(parser)
      :staticmethod:



.. py:class:: RegenColdkeyCommand

   Executes the ``regen_coldkey`` command to regenerate a coldkey for a wallet on the Bittensor network.

   This command is used to create a new coldkey from an existing mnemonic, seed, or JSON file.

   Usage:
       Users can specify a mnemonic, a seed string, or a JSON file path to regenerate a coldkey.
       The command supports optional password protection for the generated key and can overwrite an existing coldkey.

   Optional arguments:
       - ``--mnemonic`` (str): A mnemonic phrase used to regenerate the key.
       - ``--seed`` (str): A seed hex string used for key regeneration.
       - ``--json`` (str): Path to a JSON file containing an encrypted key backup.
       - ``--json_password`` (str): Password to decrypt the JSON file.
       - ``--use_password`` (bool): Enables password protection for the generated key.
       - ``--overwrite_coldkey`` (bool): Overwrites the existing coldkey with the new one.

   Example usage::

       btcli wallet regen_coldkey --mnemonic "word1 word2 ... word12"

   .. note::

      This command is critical for users who need to regenerate their coldkey, possibly for recovery or security reasons.
      It should be used with caution to avoid overwriting existing keys unintentionally.


   .. py:method:: run()

      Creates a new coldkey under this wallet.



   .. py:method:: check_config(config)
      :staticmethod:



   .. py:method:: add_args(parser)
      :staticmethod:



.. py:class:: RegenColdkeypubCommand

   Executes the ``regen_coldkeypub`` command to regenerate the public part of a coldkey (coldkeypub) for a wallet on the Bittensor network.

   This command is used when a user needs to recreate their coldkeypub from an existing public key or SS58 address.

   Usage:
       The command requires either a public key in hexadecimal format or an ``SS58`` address to regenerate the coldkeypub. It optionally allows overwriting an existing coldkeypub file.

   Optional arguments:
       - ``--public_key_hex`` (str): The public key in hex format.
       - ``--ss58_address`` (str): The SS58 address of the coldkey.
       - ``--overwrite_coldkeypub`` (bool): Overwrites the existing coldkeypub file with the new one.

   Example usage::

       btcli wallet regen_coldkeypub --ss58_address 5DkQ4...

   .. note::

      This command is particularly useful for users who need to regenerate their coldkeypub, perhaps due to file corruption or loss.
      It is a recovery-focused utility that ensures continued access to wallet functionalities.


   .. py:method:: run()

      Creates a new coldkeypub under this wallet.



   .. py:method:: check_config(config)
      :staticmethod:



   .. py:method:: add_args(parser)
      :staticmethod:



.. py:class:: RegenHotkeyCommand

   Executes the ``regen_hotkey`` command to regenerate a hotkey for a wallet on the Bittensor network.

   Similar to regenerating a coldkey, this command creates a new hotkey from a mnemonic, seed, or JSON file.

   Usage:
       Users can provide a mnemonic, seed string, or a JSON file to regenerate the hotkey.
       The command supports optional password protection and can overwrite an existing hotkey.

   Optional arguments:
       - ``--mnemonic`` (str): A mnemonic phrase used to regenerate the key.
       - ``--seed`` (str): A seed hex string used for key regeneration.
       - ``--json`` (str): Path to a JSON file containing an encrypted key backup.
       - ``--json_password`` (str): Password to decrypt the JSON file.
       - ``--use_password`` (bool): Enables password protection for the generated key.
       - ``--overwrite_hotkey`` (bool): Overwrites the existing hotkey with the new one.

   Example usage::

       btcli wallet regen_hotkey
       btcli wallet regen_hotkey --seed 0x1234...

   .. note::

      This command is essential for users who need to regenerate their hotkey, possibly for security upgrades or key recovery.
      It should be used cautiously to avoid accidental overwrites of existing keys.


   .. py:method:: run()

      Creates a new coldkey under this wallet.



   .. py:method:: check_config(config)
      :staticmethod:



   .. py:method:: add_args(parser)
      :staticmethod:



.. py:class:: UpdateWalletCommand

   Executes the ``update`` command to check and potentially update the security of the wallets in the Bittensor network.

   This command is used to enhance wallet security using modern encryption standards.

   Usage:
       The command checks if any of the wallets need an update in their security protocols.
       It supports updating all legacy wallets or a specific one based on the user's choice.

   Optional arguments:
       - ``--all`` (bool): When set, updates all legacy wallets.

   Example usage::

       btcli wallet update --all

   .. note::

      This command is important for maintaining the highest security standards for users' wallets.
      It is recommended to run this command periodically to ensure wallets are up-to-date with the latest security practices.


   .. py:method:: run(cli)
      :staticmethod:


      Check if any of the wallets needs an update.



   .. py:method:: add_args(parser)
      :staticmethod:



   .. py:method:: check_config(config)
      :staticmethod:



.. py:class:: WalletCreateCommand

   Executes the ``create`` command to generate both a new coldkey and hotkey under a specified wallet on the Bittensor network.

   This command is a comprehensive utility for creating a complete wallet setup with both cold and hotkeys.

   Usage:
       The command facilitates the creation of a new coldkey and hotkey with an optional word count for the mnemonics.
       It supports password protection for the coldkey and allows overwriting of existing keys.

   Optional arguments:
       - ``--n_words`` (int): The number of words in the mnemonic phrase for both keys.
       - ``--use_password`` (bool): Enables password protection for the coldkey.
       - ``--overwrite_coldkey`` (bool): Overwrites the existing coldkey with the new one.
       - ``--overwrite_hotkey`` (bool): Overwrites the existing hotkey with the new one.

   Example usage::

       btcli wallet create --n_words 21

   .. note::

      This command is ideal for new users setting up their wallet for the first time or for those who wish to completely renew their wallet keys.
      It ensures a fresh start with new keys for secure and effective participation in the network.


   .. py:method:: run()

      Creates a new coldkey and hotkey under this wallet.



   .. py:method:: check_config(config)
      :staticmethod:



   .. py:method:: add_args(parser)
      :staticmethod:



.. py:class:: WalletBalanceCommand

   Executes the ``balance`` command to check the balance of the wallet on the Bittensor network.

   This command provides a detailed view of the wallet's coldkey balances, including free and staked balances.

   Usage:
       The command lists the balances of all wallets in the user's configuration directory, showing the wallet name, coldkey address, and the respective free and staked balances.

   Optional arguments:
       None. The command uses the wallet and subtensor configurations to fetch balance data.

   Example usages:

       - To display the balance of a single wallet, use the command with the `--wallet.name` argument to specify the wallet name:

       ```
       btcli w balance --wallet.name WALLET
       ```

       - Alternatively, you can invoke the command without specifying a wallet name, which will prompt you to enter the wallets path:

       ```
       btcli w balance
       ```

       - To display the balances of all wallets, use the `--all` argument:

       ```
       btcli w balance --all
       ```

   .. note::

      When using `btcli`, `w` is used interchangeably with `wallet`. You may use either based on your preference for brevity or clarity.
      This command is essential for users to monitor their financial status on the Bittensor network.
      It helps in keeping track of assets and ensuring the wallet's financial health.


   .. py:method:: run(cli)
      :staticmethod:


      Check the balance of the wallet.



   .. py:method:: _run(cli, subtensor)
      :staticmethod:



   .. py:method:: add_args(parser)
      :staticmethod:



   .. py:method:: check_config(config)
      :staticmethod:



.. py:class:: GetWalletHistoryCommand

   Executes the ``history`` command to fetch the latest transfers of the provided wallet on the Bittensor network.

   This command provides a detailed view of the transfers carried out on the wallet.

   Usage:
       The command lists the latest transfers of the provided wallet, showing the From, To, Amount, Extrinsic Id and Block Number.

   Optional arguments:
       None. The command uses the wallet and subtensor configurations to fetch latest transfer data associated with a wallet.

   Example usage::

       btcli wallet history

   .. note::

      This command is essential for users to monitor their financial status on the Bittensor network.
      It helps in fetching info on all the transfers so that user can easily tally and cross check the transactions.


   .. py:method:: run(cli)
      :staticmethod:


      Check the transfer history of the provided wallet.



   .. py:method:: add_args(parser)
      :staticmethod:



   .. py:method:: check_config(config)
      :staticmethod:



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



.. py:class:: TransferCommand

   Executes the ``transfer`` command to transfer TAO tokens from one account to another on the Bittensor network.

   This command is used for transactions between different accounts, enabling users to send tokens to other participants on the network.

   Usage:
       The command requires specifying the destination address (public key) and the amount of TAO to be transferred.
       It checks for sufficient balance and prompts for confirmation before proceeding with the transaction.

   Optional arguments:
       - ``--dest`` (str): The destination address for the transfer. This can be in the form of an SS58 or ed2519 public key.
       - ``--amount`` (float): The amount of TAO tokens to transfer.

   The command displays the user's current balance before prompting for the amount to transfer, ensuring transparency and accuracy in the transaction.

   Example usage::

       btcli wallet transfer --dest 5Dp8... --amount 100

   .. note:: This command is crucial for executing token transfers within the Bittensor network. Users should verify the destination address and amount before confirming the transaction to avoid errors or loss of funds.


   .. py:method:: run(cli)
      :staticmethod:


      Transfer token of amount to destination.



   .. py:method:: _run(cli, subtensor)
      :staticmethod:


      Transfer token of amount to destination.



   .. py:method:: check_config(config)
      :staticmethod:



   .. py:method:: add_args(parser)
      :staticmethod:



.. py:class:: InspectCommand

   Executes the ``inspect`` command, which compiles and displays a detailed report of a user's wallet pairs (coldkey, hotkey) on the Bittensor network.

   This report includes balance and
   staking information for both the coldkey and hotkey associated with the wallet.

   Optional arguments:
       - ``all``: If set to ``True``, the command will inspect all wallets located within the specified path. If set to ``False``, the command will inspect only the wallet specified by the user.

   The command gathers data on:

   - Coldkey balance and delegated stakes.
   - Hotkey stake and emissions per neuron on the network.
   - Delegate names and details fetched from the network.

   The resulting table includes columns for:

   - **Coldkey**: The coldkey associated with the user's wallet.
   - **Balance**: The balance of the coldkey.
   - **Delegate**: The name of the delegate to which the coldkey has staked funds.
   - **Stake**: The amount of stake held by both the coldkey and hotkey.
   - **Emission**: The emission or rewards earned from staking.
   - **Netuid**: The network unique identifier of the subnet where the hotkey is active.
   - **Hotkey**: The hotkey associated with the neuron on the network.

   Usage:
       This command can be used to inspect a single wallet or all wallets located within a
       specified path. It is useful for a comprehensive overview of a user's participation
       and performance in the Bittensor network.

   Example usage::

           btcli wallet inspect
           btcli wallet inspect --all

   .. note::

      The ``inspect`` command is for displaying information only and does not perform any
      transactions or state changes on the Bittensor network. It is intended to be used as
      part of the Bittensor CLI and not as a standalone function within user code.


   .. py:method:: run(cli)
      :staticmethod:


      Inspect a cold, hot pair.



   .. py:method:: _run(cli, subtensor)
      :staticmethod:



   .. py:method:: check_config(config)
      :staticmethod:



   .. py:method:: add_args(parser)
      :staticmethod:



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


   .. py:method:: run(cli)
      :staticmethod:


      Prints an entire metagraph.



   .. py:method:: _run(subtensor)

      Prints an entire metagraph.



   .. py:method:: check_config(config)
      :staticmethod:



   .. py:method:: add_args(parser)
      :staticmethod:



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



.. py:class:: UpdateCommand

   Executes the ``update`` command to update the local Bittensor package.

   This command performs a series of operations to ensure that the user's local Bittensor installation is updated to the latest version from the master branch of its GitHub repository. It primarily involves pulling the latest changes from the repository and reinstalling the package.

   Usage:
       Upon invocation, the command first checks the user's configuration for the ``no_prompt`` setting. If ``no_prompt`` is set to ``True``, or if the user explicitly confirms with ``Y`` when prompted, the command proceeds to update the local Bittensor package. It changes the current directory to the Bittensor package directory, checks out the master branch of the Bittensor repository, pulls the latest changes, and then reinstalls the package using ``pip``.

   The command structure is as follows:

   1. Change directory to the Bittensor package directory.
   2. Check out the master branch of the Bittensor GitHub repository.
   3. Pull the latest changes with the ``--ff-only`` option to ensure a fast-forward update.
   4. Reinstall the Bittensor package using pip.

   Example usage::

       btcli legacy update

   .. note:: This command is intended to be used within the Bittensor CLI to facilitate easy updates of the Bittensor package. It should be used with caution as it directly affects the local installation of the package. It is recommended to ensure that any important data or configurations are backed up before running this command.


   .. py:method:: run(cli)
      :staticmethod:



   .. py:method:: check_config(config)
      :staticmethod:



   .. py:method:: add_args(parser)
      :staticmethod:



.. py:class:: AutocompleteCommand

   Show users how to install and run autocompletion for Bittensor CLI.


   .. py:method:: run(cli)
      :staticmethod:



   .. py:method:: add_args(parser)
      :staticmethod:



   .. py:method:: check_config(config)
      :staticmethod:



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



.. py:class:: GetIdentityCommand

   Executes the :func:`get_identity` command, which retrieves and displays the identity details of a user's coldkey or hotkey associated with the Bittensor network. This function
   queries the subtensor chain for information such as the stake, rank, and trust associated
   with the provided key.

   Optional Arguments:
       - ``key``: The ``ss58`` address of the coldkey or hotkey to query.

   The command performs the following actions:

   - Connects to the subtensor network and retrieves the identity information.
   - Displays the information in a structured table format.

   The displayed table includes:

   - **Address**: The ``ss58`` address of the queried key.
   - **Item**: Various attributes of the identity such as stake, rank, and trust.
   - **Value**: The corresponding values of the attributes.

   Usage:
       The user must provide an ``ss58`` address as input to the command. If the address is not
       provided in the configuration, the user is prompted to enter one.

   Example usage::

       btcli wallet get_identity --key <s58_address>

   .. note::

      This function is designed for CLI use and should be executed in a terminal. It is
      primarily used for informational purposes and has no side effects on the network state.


   .. py:method:: run()

      Queries the subtensor chain for user identity.



   .. py:method:: _run(subtensor)


   .. py:method:: check_config(config)
      :staticmethod:



   .. py:method:: add_args(parser)
      :staticmethod:



.. py:class:: SetIdentityCommand

   Executes the :func:`set_identity` command within the Bittensor network, which allows for the creation or update of a delegate's on-chain identity.

   This identity includes various
   attributes such as display name, legal name, web URL, PGP fingerprint, and contact
   information, among others.

   Optional Arguments:
       - ``display``: The display name for the identity.
       - ``legal``: The legal name for the identity.
       - ``web``: The web URL for the identity.
       - ``riot``: The riot handle for the identity.
       - ``email``: The email address for the identity.
       - ``pgp_fingerprint``: The PGP fingerprint for the identity.
       - ``image``: The image URL for the identity.
       - ``info``: The info for the identity.
       - ``twitter``: The X (twitter) URL for the identity.

   The command prompts the user for the different identity attributes and validates the
   input size for each attribute. It provides an option to update an existing validator
   hotkey identity. If the user consents to the transaction cost, the identity is updated
   on the blockchain.

   Each field has a maximum size of 64 bytes. The PGP fingerprint field is an exception
   and has a maximum size of 20 bytes. The user is prompted to enter the PGP fingerprint
   as a hex string, which is then converted to bytes. The user is also prompted to enter
   the coldkey or hotkey ``ss58`` address for the identity to be updated. If the user does
   not have a hotkey, the coldkey address is used by default.

   If setting a validator identity, the hotkey will be used by default. If the user is
   setting an identity for a subnet, the coldkey will be used by default.

   Usage:
       The user should call this command from the command line and follow the interactive
       prompts to enter or update the identity information. The command will display the
       updated identity details in a table format upon successful execution.

   Example usage::

       btcli wallet set_identity

   .. note::

      This command should only be used if the user is willing to incur the 1 TAO transaction
      fee associated with setting an identity on the blockchain. It is a high-level command
      that makes changes to the blockchain state and should not be used programmatically as
      part of other scripts or applications.


   .. py:method:: run()

      Create a new or update existing identity on-chain.



   .. py:method:: _run(subtensor)

      Create a new or update existing identity on-chain.



   .. py:method:: check_config(config)
      :staticmethod:



   .. py:method:: add_args(parser)
      :staticmethod:



.. py:class:: CheckColdKeySwapCommand

   Executes the ``check_coldkey_swap`` command to check swap status of a coldkey in the Bittensor network.
   Usage:
       Users need to specify the wallet they want to check the swap status of.
   Example usage::
       btcli wallet check_coldkey_swap
   .. note:: This command is important for users who wish check if swap requests were made against their coldkey.


   .. py:method:: run(cli)
      :staticmethod:


      Runs the check coldkey swap command.
      :param cli: The CLI object containing configuration and command-line interface utilities.
      :type cli: bittensor.cli



   .. py:method:: _run(cli, subtensor)
      :staticmethod:


      Internal method to check coldkey swap status.
      :param cli: The CLI object containing configuration and command-line interface utilities.
      :type cli: bittensor.cli
      :param subtensor: The subtensor object for blockchain interactions.
      :type subtensor: bittensor.subtensor



   .. py:method:: check_config(config)
      :classmethod:


      Checks and prompts for necessary configuration settings.
      :param config: The configuration object.
      :type config: bittensor.config

      Prompts the user for wallet name if not set in the config.



   .. py:method:: add_args(command_parser)
      :staticmethod:


      Adds arguments to the command parser.
      :param command_parser: The command parser to add arguments to.
      :type command_parser: argparse.ArgumentParser



