bittensor.core.async_subtensor
==============================

.. py:module:: bittensor.core.async_subtensor


Classes
-------

.. autoapisummary::

   bittensor.core.async_subtensor.AsyncSubtensor


Functions
---------

.. autoapisummary::

   bittensor.core.async_subtensor.get_async_subtensor


Module Contents
---------------

.. py:class:: AsyncSubtensor(network = None, config = None, _mock = False, log_verbose = False)

   Bases: :py:obj:`bittensor.core.types.SubtensorMixin`


   Thin layer for interacting with Substrate Interface. Mostly a collection of frequently-used calls.

   Initializes an instance of the AsyncSubtensor class.

   :param network: The network name or type to connect to.
   :type network: str
   :param config: Configuration object for the AsyncSubtensor instance.
   :type config: Optional[Config]
   :param _mock: Whether this is a mock instance. Mainly just for use in testing.
   :param log_verbose: Enables or disables verbose logging.
   :type log_verbose: bool

   :raises Any exceptions raised during the setup, configuration, or connection process.:


   .. py:method:: add_stake(wallet, hotkey_ss58 = None, amount = None, wait_for_inclusion = True, wait_for_finalization = False)
      :async:


      Adds the specified amount of stake to a neuron identified by the hotkey ``SS58`` address.
      Staking is a fundamental process in the Bittensor network that enables neurons to participate actively and earn
          incentives.

      :param wallet: The wallet to be used for staking.
      :type wallet: bittensor_wallet.Wallet
      :param hotkey_ss58: The ``SS58`` address of the hotkey associated with the neuron.
      :type hotkey_ss58: Optional[str]
      :param amount: The amount of TAO to stake.
      :type amount: Union[Balance, float]
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool

      :returns: ``True`` if the staking is successful, False otherwise.
      :rtype: bool

      This function enables neurons to increase their stake in the network, enhancing their influence and potential
          rewards in line with Bittensor's consensus and reward mechanisms.



   .. py:method:: add_stake_multiple(wallet, hotkey_ss58s, amounts = None, wait_for_inclusion = True, wait_for_finalization = False)
      :async:


      Adds stakes to multiple neurons identified by their hotkey SS58 addresses.
      This bulk operation allows for efficient staking across different neurons from a single wallet.

      :param wallet: The wallet used for staking.
      :type wallet: bittensor_wallet.Wallet
      :param hotkey_ss58s: List of ``SS58`` addresses of hotkeys to stake to.
      :type hotkey_ss58s: list[str]
      :param amounts: Corresponding amounts of TAO to stake for each hotkey.
      :type amounts: list[Union[Balance, float]]
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool

      :returns: ``True`` if the staking is successful for all specified neurons, False otherwise.
      :rtype: bool

      This function is essential for managing stakes across multiple neurons, reflecting the dynamic and collaborative
          nature of the Bittensor network.



   .. py:property:: block

      Provides an asynchronous property to retrieve the current block.


   .. py:method:: blocks_since_last_update(netuid, uid)
      :async:


      Returns the number of blocks since the last update for a specific UID in the subnetwork.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param uid: The unique identifier of the neuron.
      :type uid: int

      :returns:

                The number of blocks since the last update, or ``None`` if the subnetwork or UID does not
                    exist.
      :rtype: Optional[int]



   .. py:method:: bonds(netuid, block = None, block_hash = None, reuse_block = False)
      :async:


      Retrieves the bond distribution set by neurons within a specific subnet of the Bittensor network.
          Bonds represent the investments or commitments made by neurons in one another, indicating a level of trust
          and perceived value. This bonding mechanism is integral to the network's market-based approach to
          measuring and rewarding machine intelligence.

      :param netuid: The network UID of the subnet to query.
      :param block: the block number for this query. Do not specify if using block_hash or reuse_block
      :param block_hash: The hash of the blockchain block number for the query. Do not specify if using reuse_block or
                         block.
      :param reuse_block: Whether to reuse the last-used blockchain block hash. Do not set if using block_hash or block.

      :returns: List of tuples mapping each neuron's UID to its bonds with other neurons.

      Understanding bond distributions is crucial for analyzing the trust dynamics and market behavior within the
          subnet. It reflects how neurons recognize and invest in each other's intelligence and contributions,
          supporting diverse and niche systems within the Bittensor ecosystem.



   .. py:method:: burned_register(wallet, netuid, wait_for_inclusion = False, wait_for_finalization = True)
      :async:


      Registers a neuron on the Bittensor network by recycling TAO. This method of registration involves recycling
          TAO tokens, allowing them to be re-mined by performing work on the network.

      :param wallet: The wallet associated with the neuron to be registered.
      :type wallet: bittensor_wallet.Wallet
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param wait_for_inclusion: Waits for the transaction to be included in a block. Defaults to
                                 `False`.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
                                    Defaults to `True`.
      :type wait_for_finalization: bool, optional

      :returns: ``True`` if the registration is successful, False otherwise.
      :rtype: bool



   .. py:method:: close()
      :async:


      Close the connection.



   .. py:method:: commit(wallet, netuid, data)
      :async:


      Commits arbitrary data to the Bittensor network by publishing metadata.

      :param wallet: The wallet associated with the neuron committing the data.
      :type wallet: bittensor_wallet.Wallet
      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param data: The data to be committed to the network.
      :type data: str



   .. py:method:: commit_reveal_enabled(netuid, block = None, block_hash = None, reuse_block = False)
      :async:


      Check if commit-reveal mechanism is enabled for a given network at a specific block.

      :param netuid: The network identifier for which to check the commit-reveal mechanism.
      :param block: The block number to query. Do not specify if using block_hash or reuse_block.
      :param block_hash: The block hash of block at which to check the parameter. Do not set if using block or
                         reuse_block.
      :param reuse_block: Whether to reuse the last-used blockchain block hash. Do not set if using block_hash or
                          block.

      :returns: Returns the integer value of the hyperparameter if available; otherwise, returns None.



   .. py:method:: commit_weights(wallet, netuid, salt, uids, weights, version_key = version_as_int, wait_for_inclusion = False, wait_for_finalization = False, max_retries = 5)
      :async:


      Commits a hash of the neuron's weights to the Bittensor blockchain using the provided wallet.
      This action serves as a commitment or snapshot of the neuron's current weight distribution.

      :param wallet: The wallet associated with the neuron committing the weights.
      :type wallet: bittensor_wallet.Wallet
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param salt: list of randomly generated integers as salt to generated weighted hash.
      :type salt: list[int]
      :param uids: NumPy array of neuron UIDs for which weights are being committed.
      :type uids: np.ndarray
      :param weights: NumPy array of weight values corresponding to each UID.
      :type weights: np.ndarray
      :param version_key: Version key for compatibility with the network. Default is ``int representation of
                          Bittensor version.``.
      :type version_key: int
      :param wait_for_inclusion: Waits for the transaction to be included in a block. Default is ``False``.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain. Default is
                                    ``False``.
      :type wait_for_finalization: bool
      :param max_retries: The number of maximum attempts to commit weights. Default is ``5``.
      :type max_retries: int

      :returns:

                ``True`` if the weight commitment is successful, False otherwise. And `msg`, a string
                    value describing the success or potential error.
      :rtype: tuple[bool, str]

      This function allows neurons to create a tamper-proof record of their weight distribution at a specific point
          in time, enhancing transparency and accountability within the Bittensor network.



   .. py:method:: determine_block_hash(block, block_hash = None, reuse_block = False)
      :async:



   .. py:method:: difficulty(netuid, block = None, block_hash = None, reuse_block = False)
      :async:


      Retrieves the 'Difficulty' hyperparameter for a specified subnet in the Bittensor network.

      This parameter is instrumental in determining the computational challenge required for neurons to participate in
          consensus and validation processes.

      :param netuid: The unique identifier of the subnet.
      :param block: The blockchain block number for the query. Do not specify if using block_hash or reuse_block
      :param block_hash: The hash of the block to retrieve the parameter from. Do not specify if using block or
                         reuse_block
      :param reuse_block: Whether to use the last-used block. Do not set if using block_hash or block.

      :returns: The value of the 'Difficulty' hyperparameter if the subnet exists, ``None`` otherwise.
      :rtype: Optional[int]

      The 'Difficulty' parameter directly impacts the network's security and integrity by setting the computational
          effort required for validating transactions and participating in the network's consensus mechanism.



   .. py:method:: does_hotkey_exist(hotkey_ss58, block = None, block_hash = None, reuse_block = False)
      :async:


      Returns true if the hotkey is known by the chain and there are accounts.

      :param hotkey_ss58: The SS58 address of the hotkey.
      :param block: the block number for this query. Do not specify if using block_hash or reuse_block
      :param block_hash: The hash of the block number to check the hotkey against. Do not specify if using reuse_block
                         or block.
      :param reuse_block: Whether to reuse the last-used blockchain hash. Do not set if using block_hash or block.

      :returns: `True` if the hotkey is known by the chain and there are accounts, `False` otherwise.



   .. py:method:: encode_params(call_definition, params)
      :async:


      Returns a hex encoded string of the params using their types.



   .. py:method:: filter_netuids_by_registered_hotkeys(all_netuids, filter_for_netuids, all_hotkeys, block = None, block_hash = None, reuse_block = False)
      :async:


      Filters a given list of all netuids for certain specified netuids and hotkeys

      :param all_netuids: A list of netuids to filter.
      :type all_netuids: Iterable[int]
      :param filter_for_netuids: A subset of all_netuids to filter from the main list.
      :type filter_for_netuids: Iterable[int]
      :param all_hotkeys: Hotkeys to filter from the main list.
      :type all_hotkeys: Iterable[Wallet]
      :param block: The blockchain block number for the query.
      :type block: Optional[int]
      :param block_hash: hash of the blockchain block number at which to perform the query.
      :type block_hash: str
      :param reuse_block: whether to reuse the last-used blockchain hash when retrieving info.
      :type reuse_block: bool

      :returns: The filtered list of netuids.



   .. py:method:: get_all_subnets_info(block = None, block_hash = None, reuse_block = False)
      :async:


      Retrieves detailed information about all subnets within the Bittensor network. This function provides
          comprehensive data on each subnet, including its characteristics and operational parameters.

      :param block: The blockchain block number for the query.
      :type block: Optional[int]
      :param block_hash: The blockchain block_hash for the query.
      :type block_hash: Optional[str]
      :param reuse_block: Whether to reuse the last-used blockchain block hash.
      :type reuse_block: bool

      :returns: A list of SubnetInfo objects, each containing detailed information about a subnet.
      :rtype: list[SubnetInfo]

      Gaining insights into the subnets' details assists in understanding the network's composition, the roles of
          different subnets, and their unique features.



   .. py:method:: get_balance(address, block = None, block_hash = None, reuse_block = False)
      :async:


      Retrieves the balance for given coldkey.

      :param address: coldkey address.
      :type address: str
      :param block: The blockchain block number for the query.
      :type block: Optional[int]
      :param block_hash: The blockchain block_hash for the query.
      :type block_hash: Optional[str]
      :param reuse_block: Whether to reuse the last-used blockchain block hash.
      :type reuse_block: bool

      :returns: Balance object.



   .. py:method:: get_balances(*addresses, block = None, block_hash = None, reuse_block = False)
      :async:


      Retrieves the balance for given coldkey(s)

      :param addresses: coldkey addresses(s).
      :type addresses: str
      :param block: The blockchain block number for the query.
      :type block: Optional[int]
      :param block_hash: the block hash, optional.
      :type block_hash: Optional[str]
      :param reuse_block: whether to reuse the last-used block hash.
      :type reuse_block: Optional[bool]

      :returns: Balance objects}.
      :rtype: Dict of {address



   .. py:method:: get_block_hash(block = None)
      :async:


      Retrieves the hash of a specific block on the Bittensor blockchain. The block hash is a unique identifier
          representing the cryptographic hash of the block's content, ensuring its integrity and immutability.

      :param block: The block number for which the hash is to be retrieved.
      :type block: int

      :returns: The cryptographic hash of the specified block.
      :rtype: str

      The block hash is a fundamental aspect of blockchain technology, providing a secure reference to each block's
          data. It is crucial for verifying transactions, ensuring data consistency, and maintaining the
          trustworthiness of the blockchain.



   .. py:method:: get_children(hotkey, netuid, block = None, block_hash = None, reuse_block = False)
      :async:


      This method retrieves the children of a given hotkey and netuid. It queries the SubtensorModule's ChildKeys
          storage function to get the children and formats them before returning as a tuple.

      :param hotkey: The hotkey value.
      :type hotkey: str
      :param netuid: The netuid value.
      :type netuid: int
      :param block: The block number for which the children are to be retrieved.
      :type block: Optional[int]
      :param block_hash: The hash of the block to retrieve the subnet unique identifiers from.
      :type block_hash: Optional[str]
      :param reuse_block: Whether to reuse the last-used block hash.
      :type reuse_block: bool

      :returns:

                A tuple containing a boolean indicating success or failure, a list of formatted children, and an error
                    message (if applicable)



   .. py:method:: get_commitment(netuid, uid, block = None)
      :async:


      Retrieves the on-chain commitment for a specific neuron in the Bittensor network.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param uid: The unique identifier of the neuron.
      :type uid: int
      :param block: The block number to retrieve the commitment from. If None, the latest block is used.
                    Default is ``None``.
      :type block: Optional[int]

      :returns: The commitment data as a string.
      :rtype: str



   .. py:method:: get_current_block()
      :async:


      Returns the current block number on the Bittensor blockchain. This function provides the latest block number,
          indicating the most recent state of the blockchain.

      :returns: The current chain block number.
      :rtype: int

      Knowing the current block number is essential for querying real-time data and performing time-sensitive
          operations on the blockchain. It serves as a reference point for network activities and data
          synchronization.



   .. py:method:: get_current_weight_commit_info(netuid, block = None, block_hash = None, reuse_block = False)
      :async:


      Retrieves CRV3 weight commit information for a specific subnet.

      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query. Default is ``None``.
      :type block: Optional[int]
      :param block_hash: The hash of the block to retrieve the subnet unique identifiers from.
      :type block_hash: Optional[str]
      :param reuse_block: Whether to reuse the last-used block hash.
      :type reuse_block: bool

      :returns: A list of commit details, where each entry is a dictionary with keys 'who', 'serialized_commit', and
                'reveal_round', or an empty list if no data is found.
      :rtype: list



   .. py:method:: get_delegate_by_hotkey(hotkey_ss58, block = None, block_hash = None, reuse_block = False)
      :async:


      Retrieves detailed information about a delegate neuron based on its hotkey. This function provides a
          comprehensive view of the delegate's status, including its stakes, nominators, and reward distribution.

      :param hotkey_ss58: The ``SS58`` address of the delegate's hotkey.
      :type hotkey_ss58: str
      :param block: The blockchain block number for the query.
      :type block: Optional[int]
      :param block_hash: The hash of the block to retrieve the subnet unique identifiers from.
      :type block_hash: Optional[str]
      :param reuse_block: Whether to reuse the last-used block hash.
      :type reuse_block: bool

      :returns: Detailed information about the delegate neuron, ``None`` if not found.
      :rtype: Optional[DelegateInfo]

      This function is essential for understanding the roles and influence of delegate neurons within the Bittensor
          network's consensus and governance structures.



   .. py:method:: get_delegate_identities(block = None, block_hash = None, reuse_block = False)
      :async:


      Fetches delegates identities from the chain and GitHub. Preference is given to chain data, and missing info is
          filled-in by the info from GitHub. At some point, we want to totally move away from fetching this info from
          GitHub, but chain data is still limited in that regard.

      :param block: The blockchain block number for the query.
      :type block: Optional[int]
      :param block_hash: the hash of the blockchain block for the query
      :type block_hash: str
      :param reuse_block: Whether to reuse the last-used blockchain block hash.
      :type reuse_block: bool

      :returns: DelegatesDetails, ...}
      :rtype: Dict {ss58



   .. py:method:: get_delegate_take(hotkey_ss58, block = None, block_hash = None, reuse_block = False)
      :async:


      Retrieves the delegate 'take' percentage for a neuron identified by its hotkey. The 'take' represents the
          percentage of rewards that the delegate claims from its nominators' stakes.

      :param hotkey_ss58: The ``SS58`` address of the neuron's hotkey.
      :type hotkey_ss58: str
      :param block: The blockchain block number for the query.
      :type block: Optional[int]
      :param block_hash: The hash of the block to retrieve the subnet unique identifiers from.
      :type block_hash: Optional[str]
      :param reuse_block: Whether to reuse the last-used block hash.
      :type reuse_block: bool

      :returns: The delegate take percentage, None if not available.
      :rtype: Optional[float]

      The delegate take is a critical parameter in the network's incentive structure, influencing the distribution of
          rewards among neurons and their nominators.



   .. py:method:: get_delegated(coldkey_ss58, block = None, block_hash = None, reuse_block = False)
      :async:


      Retrieves a list of delegates and their associated stakes for a given coldkey. This function identifies the
      delegates that a specific account has staked tokens on.

      :param coldkey_ss58: The `SS58` address of the account's coldkey.
      :type coldkey_ss58: str
      :param block: The blockchain block number for the query.
      :type block: Optional[int]
      :param block_hash: The hash of the blockchain block number for the query.
      :type block_hash: Optional[str]
      :param reuse_block: Whether to reuse the last-used blockchain block hash.
      :type reuse_block: bool

      :returns: A list of tuples, each containing a delegate's information and staked amount.

      This function is important for account holders to understand their stake allocations and their involvement in
          the network's delegation and consensus mechanisms.



   .. py:method:: get_delegates(block = None, block_hash = None, reuse_block = False)
      :async:


      Fetches all delegates on the chain

      :param block: The blockchain block number for the query.
      :type block: Optional[int]
      :param block_hash: hash of the blockchain block number for the query.
      :type block_hash: Optional[str]
      :param reuse_block: whether to reuse the last-used block hash.
      :type reuse_block: Optional[bool]

      :returns: List of DelegateInfo objects, or an empty list if there are no delegates.



   .. py:method:: get_existential_deposit(block = None, block_hash = None, reuse_block = False)
      :async:


      Retrieves the existential deposit amount for the Bittensor blockchain.
      The existential deposit is the minimum amount of TAO required for an account to exist on the blockchain.
      Accounts with balances below this threshold can be reaped to conserve network resources.

      :param block: The blockchain block number for the query.
      :type block: Optional[int]
      :param block_hash: Block hash at which to query the deposit amount. If `None`, the current block is used.
      :type block_hash: str
      :param reuse_block: Whether to reuse the last-used blockchain block hash.
      :type reuse_block: bool

      :returns: The existential deposit amount.

      The existential deposit is a fundamental economic parameter in the Bittensor network, ensuring efficient use of
          storage and preventing the proliferation of dust accounts.



   .. py:method:: get_hotkey_owner(hotkey_ss58, block = None, block_hash = None, reuse_block = False)
      :async:


      Retrieves the owner of the given hotkey at a specific block hash.
      This function queries the blockchain for the owner of the provided hotkey. If the hotkey does not exist at the
          specified block hash, it returns None.

      :param hotkey_ss58: The SS58 address of the hotkey.
      :type hotkey_ss58: str
      :param block: The blockchain block number for the query.
      :type block: Optional[int]
      :param block_hash: The hash of the block at which to check the hotkey ownership.
      :type block_hash: Optional[str]
      :param reuse_block: Whether to reuse the last-used blockchain hash.
      :type reuse_block: bool

      :returns: The SS58 address of the owner if the hotkey exists, or None if it doesn't.
      :rtype: Optional[str]



   .. py:method:: get_hyperparameter(param_name, netuid, block = None, block_hash = None, reuse_block = False)
      :async:


      Retrieves a specified hyperparameter for a specific subnet.

      :param param_name: The name of the hyperparameter to retrieve.
      :type param_name: str
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: the block number at which to retrieve the hyperparameter. Do not specify if using block_hash or
                    reuse_block
      :param block_hash: The hash of blockchain block number for the query. Do not specify if using
                         block or reuse_block
      :type block_hash: Optional[str]
      :param reuse_block: Whether to reuse the last-used block hash. Do not set if using block_hash or block.
      :type reuse_block: bool

      :returns: The value of the specified hyperparameter if the subnet exists, or None



   .. py:method:: get_minimum_required_stake()
      :async:


      Returns the minimum required stake for nominators in the Subtensor network.
      This method retries the substrate call up to three times with exponential backoff in case of failures.

      :returns: The minimum required stake as a Balance object.
      :rtype: Balance

      :raises Exception: If the substrate call fails after the maximum number of retries.



   .. py:method:: get_netuids_for_hotkey(hotkey_ss58, block = None, block_hash = None, reuse_block = False)
      :async:


      Retrieves a list of subnet UIDs (netuids) for which a given hotkey is a member. This function identifies the
          specific subnets within the Bittensor network where the neuron associated with the hotkey is active.

      :param hotkey_ss58: The ``SS58`` address of the neuron's hotkey.
      :type hotkey_ss58: str
      :param block: The blockchain block number for the query.
      :type block: Optional[int]
      :param block_hash: The hash of the blockchain block number at which to perform the query.
      :type block_hash: Optional[str]
      :param reuse_block: Whether to reuse the last-used block hash when retrieving info.
      :type reuse_block: Optional[bool]

      :returns: A list of netuids where the neuron is a member.



   .. py:method:: get_neuron_certificate(hotkey, netuid, block = None, block_hash = None, reuse_block = False)
      :async:


      Retrieves the TLS certificate for a specific neuron identified by its unique identifier (UID) within a
          specified subnet (netuid) of the Bittensor network.

      :param hotkey: The hotkey to query.
      :param netuid: The unique identifier of the subnet.
      :param block: The blockchain block number for the query.
      :param block_hash: The hash of the block to retrieve the parameter from. Do not specify if using block or
                         reuse_block.
      :param reuse_block: Whether to use the last-used block. Do not set if using block_hash or block.

      :returns: the certificate of the neuron if found, `None` otherwise.

      This function is used for certificate discovery for setting up mutual tls communication between neurons.



   .. py:method:: get_neuron_for_pubkey_and_subnet(hotkey_ss58, netuid, block = None, block_hash = None, reuse_block = False)
      :async:


      Retrieves information about a neuron based on its public key (hotkey SS58 address) and the specific subnet UID
          (netuid). This function provides detailed neuron information for a particular subnet within the Bittensor
          network.

      :param hotkey_ss58: The ``SS58`` address of the neuron's hotkey.
      :type hotkey_ss58: str
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]
      :param block_hash: The blockchain block number at which to perform the query.
      :type block_hash: Optional[int]
      :param reuse_block: Whether to reuse the last-used blockchain block hash.
      :type reuse_block: bool

      :returns:

                Detailed information about the neuron if found,
                    ``None`` otherwise.
      :rtype: Optional[bittensor.core.chain_data.neuron_info.NeuronInfo]

      This function is crucial for accessing specific neuron data and understanding its status, stake, and other
          attributes within a particular subnet of the Bittensor ecosystem.



   .. py:method:: get_stake_for_coldkey_and_hotkey(hotkey_ss58, coldkey_ss58, block = None, block_hash = None, reuse_block = False)
      :async:


      Retrieves stake information associated with a specific coldkey and hotkey.

      :param hotkey_ss58: the hotkey SS58 address to query
      :type hotkey_ss58: str
      :param coldkey_ss58: the coldkey SS58 address to query
      :type coldkey_ss58: str
      :param block: the block number to query
      :type block: Optional[int]
      :param block_hash: the hash of the blockchain block number for the query.
      :type block_hash: Optional[str]
      :param reuse_block: whether to reuse the last-used block hash.
      :type reuse_block: Optional[bool]

      :returns: Stake Balance for the given coldkey and hotkey



   .. py:method:: get_stake_info_for_coldkey(coldkey_ss58, block = None, block_hash = None, reuse_block = False)
      :async:


      Retrieves stake information associated with a specific coldkey. This function provides details about the stakes
          held by an account, including the staked amounts and associated delegates.

      :param coldkey_ss58: The ``SS58`` address of the account's coldkey.
      :type coldkey_ss58: str
      :param block: The blockchain block number for the query.
      :type block: Optional[int]
      :param block_hash: The hash of the blockchain block number for the query.
      :type block_hash: Optional[str]
      :param reuse_block: Whether to reuse the last-used block hash.
      :type reuse_block: bool

      :returns: A list of StakeInfo objects detailing the stake allocations for the account.

      Stake information is vital for account holders to assess their investment and participation in the network's
          delegation and consensus processes.



   .. py:method:: get_subnet_burn_cost(block = None, block_hash = None, reuse_block = False)
      :async:


      Retrieves the burn cost for registering a new subnet within the Bittensor network. This cost represents the
          amount of Tao that needs to be locked or burned to establish a new subnet.

      :param block: The blockchain block number for the query.
      :type block: Optional[int]
      :param block_hash: The blockchain block_hash of the block id.
      :type block_hash: Optional[int]
      :param reuse_block: Whether to reuse the last-used block hash.
      :type reuse_block: bool

      :returns: The burn cost for subnet registration.
      :rtype: int

      The subnet burn cost is an important economic parameter, reflecting the network's mechanisms for controlling
          the proliferation of subnets and ensuring their commitment to the network's long-term viability.



   .. py:method:: get_subnet_hyperparameters(netuid, block = None, block_hash = None, reuse_block = False)
      :async:


      Retrieves the hyperparameters for a specific subnet within the Bittensor network. These hyperparameters define
          the operational settings and rules governing the subnet's behavior.

      :param netuid: The network UID of the subnet to query.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]
      :param block_hash: The hash of the blockchain block number for the query.
      :type block_hash: Optional[str]
      :param reuse_block: Whether to reuse the last-used blockchain hash.
      :type reuse_block: bool

      :returns: The subnet's hyperparameters, or `None` if not available.

      Understanding the hyperparameters is crucial for comprehending how subnets are configured and managed, and how
          they interact with the network's consensus and incentive mechanisms.



   .. py:method:: get_subnet_reveal_period_epochs(netuid, block = None, block_hash = None)
      :async:


      Retrieve the SubnetRevealPeriodEpochs hyperparameter.



   .. py:method:: get_subnets(block = None, block_hash = None, reuse_block = False)
      :async:


      Retrieves the list of all subnet unique identifiers (netuids) currently present in the Bittensor network.

      :param block: The blockchain block number for the query.
      :type block: Optional[int]
      :param block_hash: The hash of the block to retrieve the subnet unique identifiers from.
      :type block_hash: Optional[str]
      :param reuse_block: Whether to reuse the last-used block hash.
      :type reuse_block: bool

      :returns: A list of subnet netuids.

      This function provides a comprehensive view of the subnets within the Bittensor network,
      offering insights into its diversity and scale.



   .. py:method:: get_total_stake_for_coldkey(ss58_address, block = None, block_hash = None, reuse_block = False)
      :async:


      Returns the total stake held on a coldkey.

      :param ss58_address: The SS58 address of the coldkey
      :type ss58_address: str
      :param block: The blockchain block number for the query.
      :type block: Optional[int]
      :param block_hash: The hash of the block number to retrieve the stake from.
      :type block_hash: str
      :param reuse_block: Whether to reuse the last-used block hash.
      :type reuse_block: bool

      :returns: Balance of the stake held on the coldkey.



   .. py:method:: get_total_stake_for_coldkeys(*ss58_addresses, block = None, block_hash = None, reuse_block = False)
      :async:


      Returns the total stake held on multiple coldkeys.

      :param ss58_addresses: The SS58 address(es) of the coldkey(s)
      :type ss58_addresses: tuple[str]
      :param block: The blockchain block number for the query.
      :type block: Optional[int]
      :param block_hash: The hash of the block number to retrieve the stake from.
      :type block_hash: str
      :param reuse_block: Whether to reuse the last-used block hash.
      :type reuse_block: bool

      :returns: Balance objects}.
      :rtype: Dict in view {address



   .. py:method:: get_total_stake_for_hotkey(ss58_address, block = None, block_hash = None, reuse_block = False)
      :async:


      Returns the total stake held on a hotkey.

      :param ss58_address: The SS58 address of the hotkey
      :type ss58_address: str
      :param block: The blockchain block number for the query.
      :type block: Optional[int]
      :param block_hash: The hash of the block number to retrieve the stake from.
      :type block_hash: str
      :param reuse_block: Whether to reuse the last-used block hash when retrieving info.
      :type reuse_block: bool

      :returns: Balance of the stake held on the hotkey.



   .. py:method:: get_total_stake_for_hotkeys(*ss58_addresses, block = None, block_hash = None, reuse_block = False)
      :async:


      Returns the total stake held on hotkeys.

      :param ss58_addresses: The SS58 address(es) of the hotkey(s)
      :type ss58_addresses: tuple[str]
      :param block: The blockchain block number for the query.
      :type block: Optional[int]
      :param block_hash: The hash of the block number to retrieve the stake from.
      :type block_hash: str
      :param reuse_block: Whether to reuse the last-used block hash when retrieving info.
      :type reuse_block: bool

      :returns: Balance objects}.
      :rtype: Dict {address



   .. py:method:: get_total_subnets(block = None, block_hash = None, reuse_block = False)
      :async:


      Retrieves the total number of subnets within the Bittensor network as of a specific blockchain block.

      :param block: The blockchain block number for the query.
      :type block: Optional[int]
      :param block_hash: The blockchain block_hash representation of block id.
      :type block_hash: Optional[str]
      :param reuse_block: Whether to reuse the last-used block hash.
      :type reuse_block: bool

      :returns: The total number of subnets in the network.
      :rtype: Optional[str]

      Understanding the total number of subnets is essential for assessing the network's growth and the extent of its
          decentralized infrastructure.



   .. py:method:: get_transfer_fee(wallet, dest, value)
      :async:


      Calculates the transaction fee for transferring tokens from a wallet to a specified destination address. This
          function simulates the transfer to estimate the associated cost, taking into account the current network
          conditions and transaction complexity.

      :param wallet: The wallet from which the transfer is initiated.
      :type wallet: bittensor_wallet.Wallet
      :param dest: The ``SS58`` address of the destination account.
      :type dest: str
      :param value: The amount of tokens to be transferred,
                    specified as a Balance object, or in Tao (float) or Rao (int) units.
      :type value: Union[bittensor.utils.balance.Balance, float, int]

      :returns:

                The estimated transaction fee for the transfer, represented as a Balance
                    object.
      :rtype: bittensor.utils.balance.Balance

      Estimating the transfer fee is essential for planning and executing token transactions, ensuring that the wallet
          has sufficient funds to cover both the transfer amount and the associated costs. This function provides a
          crucial tool for managing financial operations within the Bittensor network.



   .. py:method:: get_uid_for_hotkey_on_subnet(hotkey_ss58, netuid, block = None, block_hash = None, reuse_block = False)
      :async:


      Retrieves the unique identifier (UID) for a neuron's hotkey on a specific subnet.

      :param hotkey_ss58: The ``SS58`` address of the neuron's hotkey.
      :type hotkey_ss58: str
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]
      :param block_hash: The blockchain block_hash representation of the block id.
      :type block_hash: Optional[str]
      :param reuse_block: Whether to reuse the last-used blockchain block hash.
      :type reuse_block: bool

      :returns: The UID of the neuron if it is registered on the subnet, ``None`` otherwise.
      :rtype: Optional[int]

      The UID is a critical identifier within the network, linking the neuron's hotkey to its operational and
          governance activities on a particular subnet.



   .. py:method:: get_vote_data(proposal_hash, block = None, block_hash = None, reuse_block = False)
      :async:


      Retrieves the voting data for a specific proposal on the Bittensor blockchain. This data includes information
          about how senate members have voted on the proposal.

      :param proposal_hash: The hash of the proposal for which voting data is requested.
      :type proposal_hash: str
      :param block: The blockchain block number for the query.
      :type block: Optional[int]
      :param block_hash: The hash of the blockchain block number to query the voting data.
      :type block_hash: Optional[str]
      :param reuse_block: Whether to reuse the last-used blockchain block hash.
      :type reuse_block: bool

      :returns: An object containing the proposal's voting data, or `None` if not found.

      This function is important for tracking and understanding the decision-making processes within the Bittensor
          network, particularly how proposals are received and acted upon by the governing body.



   .. py:method:: immunity_period(netuid, block = None, block_hash = None, reuse_block = False)
      :async:


      Retrieves the 'ImmunityPeriod' hyperparameter for a specific subnet. This parameter defines the duration during
          which new neurons are protected from certain network penalties or restrictions.

      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]
      :param block_hash: The blockchain block_hash representation of the block id.
      :type block_hash: Optional[str]
      :param reuse_block: Whether to reuse the last-used blockchain block hash.
      :type reuse_block: bool

      :returns: The value of the 'ImmunityPeriod' hyperparameter if the subnet exists, ``None`` otherwise.
      :rtype: Optional[int]

      The 'ImmunityPeriod' is a critical aspect of the network's governance system, ensuring that new participants
          have a grace period to establish themselves and contribute to the network without facing immediate
          punitive actions.



   .. py:method:: initialize()
      :async:



   .. py:method:: is_hotkey_delegate(hotkey_ss58, block = None, block_hash = None, reuse_block = False)
      :async:


      Determines whether a given hotkey (public key) is a delegate on the Bittensor network. This function checks if
          the neuron associated with the hotkey is part of the network's delegation system.

      :param hotkey_ss58: The SS58 address of the neuron's hotkey.
      :type hotkey_ss58: str
      :param block: The blockchain block number for the query.
      :type block: Optional[int]
      :param block_hash: The hash of the blockchain block number for the query.
      :type block_hash: Optional[str]
      :param reuse_block: Whether to reuse the last-used block hash.
      :type reuse_block: Optional[bool]

      :returns: `True` if the hotkey is a delegate, `False` otherwise.

      Being a delegate is a significant status within the Bittensor network, indicating a neuron's involvement in
          consensus and governance processes.



   .. py:method:: is_hotkey_registered(hotkey_ss58, netuid = None, block = None, block_hash = None, reuse_block = False)
      :async:


      Determines whether a given hotkey (public key) is registered in the Bittensor network, either globally across
          any subnet or specifically on a specified subnet. This function checks the registration status of a neuron
          identified by its hotkey, which is crucial for validating its participation and activities within the
          network.

      :param hotkey_ss58: The SS58 address of the neuron's hotkey.
      :param netuid: The unique identifier of the subnet to check the registration. If `None`, the
                     registration is checked across all subnets.
      :param block: The blockchain block number at which to perform the query.
      :param block_hash: The blockchain block_hash representation of the block id. Do not specify if using block or
                         reuse_block
      :param reuse_block: Whether to reuse the last-used blockchain block hash. Do not set if using block_hash or
                          reuse_block.
      :type reuse_block: bool

      :returns:

                `True` if the hotkey is registered in the specified context (either any subnet or a specific subnet),
                    `False` otherwise.
      :rtype: bool

      This function is important for verifying the active status of neurons in the Bittensor network. It aids in
          understanding whether a neuron is eligible to participate in network processes such as consensus,
          validation, and incentive distribution based on its registration status.



   .. py:method:: is_hotkey_registered_any(hotkey_ss58, block = None, block_hash = None, reuse_block = False)
      :async:


      Checks if a neuron's hotkey is registered on any subnet within the Bittensor network.

      :param hotkey_ss58: The ``SS58`` address of the neuron's hotkey.
      :type hotkey_ss58: str
      :param block: The blockchain block number for the query.
      :type block: Optional[int]
      :param block_hash: The blockchain block_hash representation of block id.
      :type block_hash: Optional[str]
      :param reuse_block: Whether to reuse the last-used block hash.
      :type reuse_block: bool

      :returns: ``True`` if the hotkey is registered on any subnet, False otherwise.
      :rtype: bool

      This function is essential for determining the network-wide presence and participation of a neuron.



   .. py:method:: is_hotkey_registered_on_subnet(hotkey_ss58, netuid, block = None, block_hash = None, reuse_block = False)
      :async:


      Checks if the hotkey is registered on a given netuid.



   .. py:method:: last_drand_round()
      :async:


      Retrieves the last drand round emitted in bittensor. This corresponds when committed weights will be revealed.

      :returns: The latest Drand round emitted in bittensor.
      :rtype: int



   .. py:attribute:: log_verbose
      :value: False



   .. py:method:: max_weight_limit(netuid, block = None, block_hash = None, reuse_block = False)
      :async:


      Returns network MaxWeightsLimit hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]
      :param block_hash: The blockchain block_hash representation of block id.
      :type block_hash: Optional[str]
      :param reuse_block: Whether to reuse the last-used block hash.
      :type reuse_block: bool

      :returns:

                The value of the MaxWeightsLimit hyperparameter, or ``None`` if the subnetwork does not
                    exist or the parameter is not found.
      :rtype: Optional[float]



   .. py:method:: metagraph(netuid, lite = True, block = None)
      :async:


      Returns a synced metagraph for a specified subnet within the Bittensor network. The metagraph represents the
          network's structure, including neuron connections and interactions.

      :param netuid: The network UID of the subnet to query.
      :type netuid: int
      :param lite: If true, returns a metagraph using a lightweight sync (no weights, no bonds). Default is
                   ``True``.
      :type lite: bool
      :param block: Block number for synchronization, or ``None`` for the latest block.
      :type block: Optional[int]

      :returns:

                The metagraph representing the subnet's structure and neuron
                    relationships.
      :rtype: bittensor.core.metagraph.Metagraph

      The metagraph is an essential tool for understanding the topology and dynamics of the Bittensor network's
          decentralized architecture, particularly in relation to neuron interconnectivity and consensus processes.



   .. py:method:: min_allowed_weights(netuid, block = None, block_hash = None, reuse_block = False)
      :async:


      Returns network MinAllowedWeights hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]
      :param block_hash: The blockchain block_hash representation of block id.
      :type block_hash: Optional[str]
      :param reuse_block: Whether to reuse the last-used block hash.
      :type reuse_block: bool

      :returns:

                The value of the MinAllowedWeights hyperparameter, or ``None`` if the subnetwork does not
                    exist or the parameter is not found.
      :rtype: Optional[int]



   .. py:method:: neuron_for_uid(uid, netuid, block = None, block_hash = None, reuse_block = False)
      :async:


      Retrieves detailed information about a specific neuron identified by its unique identifier (UID) within a
          specified subnet (netuid) of the Bittensor network. This function provides a comprehensive view of a
          neuron's attributes, including its stake, rank, and operational status.

      :param uid: The unique identifier of the neuron.
      :type uid: int
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]
      :param block_hash: The hash of the blockchain block number for the query.
      :type block_hash: str
      :param reuse_block: Whether to reuse the last-used blockchain block hash.
      :type reuse_block: bool

      :returns: Detailed information about the neuron if found, a null neuron otherwise

      This function is crucial for analyzing individual neurons' contributions and status within a specific subnet,
          offering insights into their roles in the network's consensus and validation mechanisms.



   .. py:method:: neurons(netuid, block = None, block_hash = None, reuse_block = False)
      :async:


      Retrieves a list of all neurons within a specified subnet of the Bittensor network.
      This function provides a snapshot of the subnet's neuron population, including each neuron's attributes and
          network interactions.

      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]
      :param block_hash: The hash of the blockchain block number for the query.
      :type block_hash: str
      :param reuse_block: Whether to reuse the last-used blockchain block hash.
      :type reuse_block: bool

      :returns: A list of NeuronInfo objects detailing each neuron's characteristics in the subnet.

      Understanding the distribution and status of neurons within a subnet is key to comprehending the network's
          decentralized structure and the dynamics of its consensus and governance processes.



   .. py:method:: neurons_lite(netuid, block = None, block_hash = None, reuse_block = False)
      :async:


      Retrieves a list of neurons in a 'lite' format from a specific subnet of the Bittensor network.
      This function provides a streamlined view of the neurons, focusing on key attributes such as stake and network
          participation.

      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]
      :param block_hash: The hash of the blockchain block number for the query.
      :type block_hash: str
      :param reuse_block: Whether to reuse the last-used blockchain block hash.
      :type reuse_block: bool

      :returns: A list of simplified neuron information for the subnet.

      This function offers a quick overview of the neuron population within a subnet, facilitating efficient analysis
          of the network's decentralized structure and neuron dynamics.



   .. py:method:: query_constant(module_name, constant_name, block = None, block_hash = None, reuse_block = False)
      :async:


      Retrieves a constant from the specified module on the Bittensor blockchain. This function is used to access
          fixed parameters or values defined within the blockchain's modules, which are essential for understanding
          the network's configuration and rules.

      :param module_name: The name of the module containing the constant.
      :param constant_name: The name of the constant to retrieve.
      :param block: The blockchain block number at which to query the constant. Do not specify if using block_hash or
                    reuse_block
      :param block_hash: the hash of th blockchain block at which to query the constant. Do not specify if using block
                         or reuse_block
      :param reuse_block: Whether to reuse the blockchain block at which to query the constant.

      :returns: The value of the constant if found, `None` otherwise.
      :rtype: Optional[scalecodec.ScaleType]

      Constants queried through this function can include critical network parameters such as inflation rates,
          consensus rules, or validation thresholds, providing a deeper understanding of the Bittensor network's
          operational parameters.



   .. py:method:: query_identity(key, block = None, block_hash = None, reuse_block = False)
      :async:


      Queries the identity of a neuron on the Bittensor blockchain using the given key. This function retrieves
          detailed identity information about a specific neuron, which is a crucial aspect of the network's
          decentralized identity and governance system.

      :param key: The key used to query the neuron's identity, typically the neuron's SS58 address.
      :type key: str
      :param block: The blockchain block number for the query.
      :type block: Optional[int]
      :param block_hash: The hash of the blockchain block number at which to perform the query.
      :type block_hash: str
      :param reuse_block: Whether to reuse the last-used blockchain block hash.
      :type reuse_block: bool

      :returns: An object containing the identity information of the neuron if found, ``None`` otherwise.

      The identity information can include various attributes such as the neuron's stake, rank, and other
          network-specific details, providing insights into the neuron's role and status within the Bittensor network.

      .. note::

         See the `Bittensor CLI documentation <https://docs.bittensor.com/reference/btcli>`_ for supported identity
             parameters.



   .. py:method:: query_map(module, name, block = None, block_hash = None, reuse_block = False, params = None)
      :async:


      Queries map storage from any module on the Bittensor blockchain. This function retrieves data structures that
          represent key-value mappings, essential for accessing complex and structured data within the blockchain
          modules.

      :param module: The name of the module from which to query the map storage.
      :param name: The specific storage function within the module to query.
      :param block: The blockchain block number at which to perform the query.
      :param block_hash: The hash of the block to retrieve the parameter from. Do not specify if using block or
                         reuse_block
      :param reuse_block: Whether to use the last-used block. Do not set if using block_hash or block.
      :param params: Parameters to be passed to the query.

      :returns: A data structure representing the map storage if found, `None` otherwise.
      :rtype: result

      This function is particularly useful for retrieving detailed and structured data from various blockchain
          modules, offering insights into the network's state and the relationships between its different components.



   .. py:method:: query_map_subtensor(name, block = None, block_hash = None, reuse_block = False, params = None)
      :async:


      Queries map storage from the Subtensor module on the Bittensor blockchain. This function is designed to retrieve
          a map-like data structure, which can include various neuron-specific details or network-wide attributes.

      :param name: The name of the map storage function to query.
      :param block: The blockchain block number at which to perform the query.
      :param block_hash: The hash of the block to retrieve the parameter from. Do not specify if using block or
                         reuse_block
      :param reuse_block: Whether to use the last-used block. Do not set if using block_hash or block.
      :param params: A list of parameters to pass to the query function.

      :returns: An object containing the map-like data structure, or `None` if not found.

      This function is particularly useful for analyzing and understanding complex network structures and
          relationships within the Bittensor ecosystem, such as interneuronal connections and stake distributions.



   .. py:method:: query_module(module, name, block = None, block_hash = None, reuse_block = False, params = None)
      :async:


      Queries any module storage on the Bittensor blockchain with the specified parameters and block number. This
          function is a generic query interface that allows for flexible and diverse data retrieval from various
          blockchain modules.

      :param module: The name of the module from which to query data.
      :type module: str
      :param name: The name of the storage function within the module.
      :type name: str
      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int]
      :param block_hash: The hash of the block to retrieve the parameter from. Do not specify if using block or
                         reuse_block
      :param reuse_block: Whether to use the last-used block. Do not set if using block_hash or block.
      :param params: A list of parameters to pass to the query function.
      :type params: Optional[list[object]]

      :returns: An object containing the requested data if found, `None` otherwise.

      This versatile query function is key to accessing a wide range of data and insights from different parts of the
          Bittensor blockchain, enhancing the understanding and analysis of the network's state and dynamics.



   .. py:method:: query_runtime_api(runtime_api, method, params = None, block = None, block_hash = None, reuse_block = False)
      :async:


      Queries the runtime API of the Bittensor blockchain, providing a way to interact with the underlying runtime and
          retrieve data encoded in Scale Bytes format. This function is essential for advanced users who need to
          interact with specific runtime methods and decode complex data types.

      :param runtime_api: The name of the runtime API to query.
      :param method: The specific method within the runtime API to call.
      :param params: The parameters to pass to the method call.
      :param block: the block number for this query. Do not specify if using block_hash or reuse_block
      :param block_hash: The hash of the blockchain block number at which to perform the query. Do not specify if
                         using block or reuse_block
      :param reuse_block: Whether to reuse the last-used block hash. Do not set if using block_hash or block

      :returns: The Scale Bytes encoded result from the runtime API call, or `None` if the call fails.

      This function enables access to the deeper layers of the Bittensor blockchain, allowing for detailed and
          specific interactions with the network's runtime environment.



   .. py:method:: query_subtensor(name, block = None, block_hash = None, reuse_block = False, params = None)
      :async:


      Queries named storage from the Subtensor module on the Bittensor blockchain. This function is used to retrieve
          specific data or parameters from the blockchain, such as stake, rank, or other neuron-specific attributes.

      :param name: The name of the storage function to query.
      :param block: The blockchain block number at which to perform the query.
      :param block_hash: The hash of the block to retrieve the parameter from. Do not specify if using block or
                         reuse_block
      :param reuse_block: Whether to use the last-used block. Do not set if using block_hash or block.
      :param params: A list of parameters to pass to the query function.

      :returns: An object containing the requested data.
      :rtype: query_response (scalecodec.ScaleType)

      This query function is essential for accessing detailed information about the network and its neurons, providing
          valuable insights into the state and dynamics of the Bittensor ecosystem.



   .. py:method:: recycle(netuid, block = None, block_hash = None, reuse_block = False)
      :async:


      Retrieves the 'Burn' hyperparameter for a specified subnet. The 'Burn' parameter represents the amount of Tao
          that is effectively recycled within the Bittensor network.

      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]
      :param block_hash: The hash of the blockchain block number for the query.
      :type block_hash: str
      :param reuse_block: Whether to reuse the last-used blockchain block hash.
      :type reuse_block: bool

      :returns: The value of the 'Burn' hyperparameter if the subnet exists, None otherwise.
      :rtype: Optional[Balance]

      Understanding the 'Burn' rate is essential for analyzing the network registration usage, particularly how it is
          correlated with user activity and the overall cost of participation in a given subnet.



   .. py:method:: register(wallet, netuid, wait_for_inclusion = False, wait_for_finalization = True, max_allowed_attempts = 3, output_in_place = False, cuda = False, dev_id = 0, tpb = 256, num_processes = None, update_interval = None, log_verbose = False)
      :async:


      Registers a neuron on the Bittensor network using the provided wallet.

      Registration is a critical step for a neuron to become an active participant in the network, enabling it to
          stake, set weights, and receive incentives.

      :param wallet: The wallet associated with the neuron to be registered.
      :type wallet: bittensor_wallet.Wallet
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param wait_for_inclusion: Waits for the transaction to be included in a block. Defaults to `False`.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain. Defaults to
                                    `True`.
      :type wait_for_finalization: bool
      :param max_allowed_attempts: Maximum number of attempts to register the wallet.
      :type max_allowed_attempts: int
      :param output_in_place: If true, prints the progress of the proof of work to the console in-place. Meaning
                              the progress is printed on the same lines. Defaults to `True`.
      :type output_in_place: bool
      :param cuda: If ``true``, the wallet should be registered using CUDA device(s). Defaults to `False`.
      :type cuda: bool
      :param dev_id: The CUDA device id to use, or a list of device ids. Defaults to `0` (zero).
      :type dev_id: Union[List[int], int]
      :param tpb: The number of threads per block (CUDA). Default to `256`.
      :type tpb: int
      :param num_processes: The number of processes to use to register. Default to `None`.
      :type num_processes: Optional[int]
      :param update_interval: The number of nonces to solve between updates.  Default to `None`.
      :type update_interval: Optional[int]
      :param log_verbose: If ``true``, the registration process will log more information.  Default to `False`.
      :type log_verbose: bool

      :returns: ``True`` if the registration is successful, False otherwise.
      :rtype: bool

      This function facilitates the entry of new neurons into the network, supporting the decentralized
      growth and scalability of the Bittensor ecosystem.



   .. py:method:: reveal_weights(wallet, netuid, uids, weights, salt, version_key = version_as_int, wait_for_inclusion = False, wait_for_finalization = False, max_retries = 5)
      :async:


      Reveals the weights for a specific subnet on the Bittensor blockchain using the provided wallet.
      This action serves as a revelation of the neuron's previously committed weight distribution.

      :param wallet: The wallet associated with the neuron revealing the weights.
      :type wallet: bittensor_wallet.Wallet
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param uids: NumPy array of neuron UIDs for which weights are being revealed.
      :type uids: np.ndarray
      :param weights: NumPy array of weight values corresponding to each UID.
      :type weights: np.ndarray
      :param salt: NumPy array of salt values corresponding to the hash function.
      :type salt: np.ndarray
      :param version_key: Version key for compatibility with the network. Default is ``int representation of
                          Bittensor version``.
      :type version_key: int
      :param wait_for_inclusion: Waits for the transaction to be included in a block. Default is ``False``.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain. Default is
                                    ``False``.
      :type wait_for_finalization: bool
      :param max_retries: The number of maximum attempts to reveal weights. Default is ``5``.
      :type max_retries: int

      :returns:

                ``True`` if the weight revelation is successful, False otherwise. And `msg`, a string
                    value describing the success or potential error.
      :rtype: tuple[bool, str]

      This function allows neurons to reveal their previously committed weight distribution, ensuring transparency
          and accountability within the Bittensor network.



   .. py:method:: root_register(wallet, block_hash = None, wait_for_inclusion = True, wait_for_finalization = True)
      :async:


      Register neuron by recycling some TAO.

      :param wallet: Bittensor wallet instance.
      :type wallet: bittensor_wallet.Wallet
      :param block_hash: The hash of the blockchain block for the query.
      :type block_hash: Optional[str]
      :param wait_for_inclusion: Waits for the transaction to be included in a block. Default is ``False``.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain. Default is
                                    ``False``.
      :type wait_for_finalization: bool

      :returns: `True` if registration was successful, otherwise `False`.



   .. py:method:: root_set_weights(wallet, netuids, weights, version_key = 0, wait_for_inclusion = True, wait_for_finalization = True)
      :async:


      Set weights for root network.

      :param wallet: bittensor wallet instance.
      :type wallet: bittensor_wallet.Wallet
      :param netuids: The list of subnet uids.
      :type netuids: list[int]
      :param weights: The list of weights to be set.
      :type weights: list[float]
      :param version_key: Version key for compatibility with the network. Default is ``0``.
      :type version_key: int, optional
      :param wait_for_inclusion: Waits for the transaction to be included in a block. Defaults to
                                 ``False``.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
                                    Defaults to ``False``.
      :type wait_for_finalization: bool, optional

      :returns: `True` if the setting of weights is successful, `False` otherwise.



   .. py:method:: serve_axon(netuid, axon, wait_for_inclusion = False, wait_for_finalization = True, certificate = None)
      :async:


      Registers an ``Axon`` serving endpoint on the Bittensor network for a specific neuron. This function is used to
          set up the Axon, a key component of a neuron that handles incoming queries and data processing tasks.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param axon: The Axon instance to be registered for serving.
      :type axon: bittensor.core.axon.Axon
      :param wait_for_inclusion: Waits for the transaction to be included in a block. Default is ``False``.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain. Default is
                                    ``True``.
      :type wait_for_finalization: bool
      :param certificate: Certificate to use for TLS. If ``None``, no TLS will be used.
                          Defaults to ``None``.
      :type certificate: bittensor.utils.Certificate

      :returns: ``True`` if the Axon serve registration is successful, False otherwise.
      :rtype: bool

      By registering an Axon, the neuron becomes an active part of the network's distributed computing infrastructure,
          contributing to the collective intelligence of Bittensor.



   .. py:method:: set_weights(wallet, netuid, uids, weights, version_key = version_as_int, wait_for_inclusion = False, wait_for_finalization = False, max_retries = 5)
      :async:


      Sets the inter-neuronal weights for the specified neuron. This process involves specifying the influence or
          trust a neuron places on other neurons in the network, which is a fundamental aspect of Bittensor's
          decentralized learning architecture.

      :param wallet: The wallet associated with the neuron setting the weights.
      :type wallet: bittensor_wallet.Wallet
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param uids: The list of neuron UIDs that the weights are being
                   set for.
      :type uids: Union[NDArray[np.int64], torch.LongTensor, list]
      :param weights: The corresponding weights to be set for each
                      UID.
      :type weights: Union[NDArray[np.float32], torch.FloatTensor, list]
      :param version_key: Version key for compatibility with the network.  Default is int representation of
                          Bittensor version.
      :type version_key: int
      :param wait_for_inclusion: Waits for the transaction to be included in a block. Default is ``False``.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain. Default is
                                    ``False``.
      :type wait_for_finalization: bool
      :param max_retries: The number of maximum attempts to set weights. Default is ``5``.
      :type max_retries: int

      :returns:

                ``True`` if the setting of weights is successful, False otherwise. And `msg`, a string
                    value describing the success or potential error.
      :rtype: tuple[bool, str]

      This function is crucial in shaping the network's collective intelligence, where each neuron's learning and
          contribution are influenced by the weights it sets towards others【81†source】.



   .. py:method:: sign_and_send_extrinsic(call, wallet, wait_for_inclusion = True, wait_for_finalization = False, sign_with = 'coldkey')
      :async:


      Helper method to sign and submit an extrinsic call to chain.

      :param call: a prepared Call object
      :type call: scalecodec.types.GenericCall
      :param wallet: the wallet whose coldkey will be used to sign the extrinsic
      :type wallet: bittensor_wallet.Wallet
      :param wait_for_inclusion: whether to wait until the extrinsic call is included on the chain
      :type wait_for_inclusion: bool
      :param wait_for_finalization: whether to wait until the extrinsic call is finalized on the chain
      :type wait_for_finalization: bool
      :param sign_with: the wallet's keypair to use for the signing. Options are "coldkey", "hotkey", "coldkeypub"

      :returns: (success, error message)



   .. py:method:: state_call(method, data, block = None, block_hash = None, reuse_block = False)
      :async:


      Makes a state call to the Bittensor blockchain, allowing for direct queries of the blockchain's state. This
          function is typically used for advanced queries that require specific method calls and data inputs.

      :param method: The method name for the state call.
      :param data: The data to be passed to the method.
      :param block: The blockchain block number at which to perform the state call.
      :param block_hash: The hash of the block to retrieve the parameter from. Do not specify if using block or
                         reuse_block
      :param reuse_block: Whether to use the last-used block. Do not set if using block_hash or block.

      :returns: The result of the rpc call.
      :rtype: result (dict[Any, Any])

      The state call function provides a more direct and flexible way of querying blockchain data, useful for specific
          use cases where standard queries are insufficient.



   .. py:method:: subnet_exists(netuid, block = None, block_hash = None, reuse_block = False)
      :async:


      Checks if a subnet with the specified unique identifier (netuid) exists within the Bittensor network.

      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]
      :param block_hash: The hash of the blockchain block number at which to check the subnet existence.
      :type block_hash: Optional[str]
      :param reuse_block: Whether to reuse the last-used block hash.
      :type reuse_block: bool

      :returns: `True` if the subnet exists, `False` otherwise.

      This function is critical for verifying the presence of specific subnets in the network,
      enabling a deeper understanding of the network's structure and composition.



   .. py:method:: subnetwork_n(netuid, block = None, block_hash = None, reuse_block = False)
      :async:


      Returns network SubnetworkN hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]
      :param block_hash: The hash of the blockchain block number at which to check the subnet existence.
      :type block_hash: Optional[str]
      :param reuse_block: Whether to reuse the last-used block hash.
      :type reuse_block: bool

      :returns:

                The value of the SubnetworkN hyperparameter, or ``None`` if the subnetwork does not exist or
                    the parameter is not found.
      :rtype: Optional[int]



   .. py:attribute:: substrate


   .. py:method:: tempo(netuid, block = None, block_hash = None, reuse_block = False)
      :async:


      Returns network Tempo hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]
      :param block_hash: The hash of the blockchain block number at which to check the subnet existence.
      :type block_hash: Optional[str]
      :param reuse_block: Whether to reuse the last-used block hash.
      :type reuse_block: bool

      :returns:

                The value of the Tempo hyperparameter, or ``None`` if the subnetwork does not exist or the
                    parameter is not found.
      :rtype: Optional[int]



   .. py:method:: transfer(wallet, dest, amount, transfer_all = False, wait_for_inclusion = True, wait_for_finalization = False, keep_alive = True)
      :async:


      Transfer token of amount to destination.

      :param wallet: Source wallet for the transfer.
      :type wallet: bittensor_wallet.Wallet
      :param dest: Destination address for the transfer.
      :type dest: str
      :param amount: Amount of tokens to transfer.
      :type amount: float
      :param transfer_all: Flag to transfer all tokens. Default is ``False``.
      :type transfer_all: bool
      :param wait_for_inclusion: Waits for the transaction to be included in a block.  Default is ``True``.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.  Default is
                                    ``False``.
      :type wait_for_finalization: bool
      :param keep_alive: Flag to keep the connection alive. Default is ``True``.
      :type keep_alive: bool

      :returns: `True` if the transferring was successful, otherwise `False`.



   .. py:method:: tx_rate_limit(block = None, block_hash = None, reuse_block = False)
      :async:


      Retrieves the transaction rate limit for the Bittensor network as of a specific blockchain block.
      This rate limit sets the maximum number of transactions that can be processed within a given time frame.

      :param block: The blockchain block number for the query.
      :type block: Optional[int]
      :param block_hash: The hash of the blockchain block number at which to check the subnet existence.
      :type block_hash: Optional[str]
      :param reuse_block: Whether to reuse the last-used block hash.
      :type reuse_block: bool

      :returns: The transaction rate limit of the network, None if not available.
      :rtype: Optional[int]

      The transaction rate limit is an essential parameter for ensuring the stability and scalability of the Bittensor
          network. It helps in managing network load and preventing congestion, thereby maintaining efficient and
          timely transaction processing.



   .. py:method:: unstake(wallet, hotkey_ss58 = None, amount = None, wait_for_inclusion = True, wait_for_finalization = False)
      :async:


      Removes a specified amount of stake from a single hotkey account. This function is critical for adjusting
          individual neuron stakes within the Bittensor network.

      :param wallet: The wallet associated with the neuron from which the stake is being
                     removed.
      :type wallet: bittensor_wallet.wallet
      :param hotkey_ss58: The ``SS58`` address of the hotkey account to unstake from.
      :type hotkey_ss58: Optional[str]
      :param amount: The amount of TAO to unstake. If not specified, unstakes all.
      :type amount: Union[Balance, float]
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool

      :returns: ``True`` if the unstaking process is successful, False otherwise.
      :rtype: bool

      This function supports flexible stake management, allowing neurons to adjust their network participation and
          potential reward accruals.



   .. py:method:: unstake_multiple(wallet, hotkey_ss58s, amounts = None, wait_for_inclusion = True, wait_for_finalization = False)
      :async:


      Performs batch unstaking from multiple hotkey accounts, allowing a neuron to reduce its staked amounts
          efficiently. This function is useful for managing the distribution of stakes across multiple neurons.

      :param wallet: The wallet linked to the coldkey from which the stakes are being
                     withdrawn.
      :type wallet: bittensor_wallet.Wallet
      :param hotkey_ss58s: A list of hotkey ``SS58`` addresses to unstake from.
      :type hotkey_ss58s: List[str]
      :param amounts: The amounts of TAO to unstake from each hotkey. If not provided,
                      unstakes all available stakes.
      :type amounts: List[Union[Balance, float]]
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool

      :returns: ``True`` if the batch unstaking is successful, False otherwise.
      :rtype: bool

      This function allows for strategic reallocation or withdrawal of stakes, aligning with the dynamic stake
          management aspect of the Bittensor network.



   .. py:method:: weights(netuid, block = None, block_hash = None, reuse_block = False)
      :async:


      Retrieves the weight distribution set by neurons within a specific subnet of the Bittensor network.
      This function maps each neuron's UID to the weights it assigns to other neurons, reflecting the network's trust
          and value assignment mechanisms.

      :param netuid: The network UID of the subnet to query.
      :type netuid: int
      :param block: Block number for synchronization, or ``None`` for the latest block.
      :type block: Optional[int]
      :param block_hash: The hash of the blockchain block for the query.
      :type block_hash: str
      :param reuse_block: Whether to reuse the last-used blockchain block hash.
      :type reuse_block: bool

      :returns: A list of tuples mapping each neuron's UID to its assigned weights.

      The weight distribution is a key factor in the network's consensus algorithm and the ranking of neurons,
          influencing their influence and reward allocation within the subnet.



   .. py:method:: weights_rate_limit(netuid, block = None, block_hash = None, reuse_block = False)
      :async:


      Returns network WeightsSetRateLimit hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]
      :param block_hash: The blockchain block_hash representation of the block id.
      :type block_hash: Optional[str]
      :param reuse_block: Whether to reuse the last-used blockchain block hash.
      :type reuse_block: bool

      :returns:

                The value of the WeightsSetRateLimit hyperparameter, or ``None`` if the subnetwork does not
                    exist or the parameter is not found.
      :rtype: Optional[int]



.. py:function:: get_async_subtensor(network = None, config = None, _mock = False, log_verbose = False)
   :async:


   Factory method to create an initialized AsyncSubtensor. Mainly useful for when you don't want to run
   `await subtensor.initialize()` after instantiation.


