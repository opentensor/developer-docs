bittensor.mock
==============

.. py:module:: bittensor.mock


Submodules
----------

.. toctree::
   :maxdepth: 1

   /autoapi/bittensor/mock/keyfile_mock/index
   /autoapi/bittensor/mock/subtensor_mock/index
   /autoapi/bittensor/mock/wallet_mock/index


Classes
-------

.. autoapisummary::

   bittensor.mock.MockSubtensor


Package Contents
----------------

.. py:class:: MockSubtensor(*args, **kwargs)

   Bases: :py:obj:`bittensor.subtensor.Subtensor`


   A Mock Subtensor class for running tests.
   This should mock only methods that make queries to the chain.
   e.g. We mock `Subtensor.query_subtensor` instead of all query methods.

   This class will also store a local (mock) state of the chain.

   Initializes a Subtensor interface for interacting with the Bittensor blockchain.

   .. note:: Currently subtensor defaults to the ``finney`` network. This will change in a future release.

   We strongly encourage users to run their own local subtensor node whenever possible. This increases
   decentralization and resilience of the network. In a future release, local subtensor will become the
   default and the fallback to ``finney`` removed. Please plan ahead for this change. We will provide detailed
   instructions on how to run a local subtensor node in the documentation in a subsequent release.

   :param network: The network name to connect to (e.g., ``finney``, ``local``). This can also be the
                   chain endpoint (e.g., ``wss://entrypoint-finney.opentensor.ai:443``) and will be correctly parsed into
                   the network and chain endpoint. If not specified, defaults to the main Bittensor network.
   :type network: str, optional
   :param config: Configuration object for the subtensor. If not provided, a default
                  configuration is used.
   :type config: bittensor.config, optional
   :param _mock: If set to ``True``, uses a mocked connection for testing purposes.
   :type _mock: bool, optional

   This initialization sets up the connection to the specified Bittensor network, allowing for various
   blockchain operations such as neuron registration, stake management, and setting weights.



   .. py:attribute:: chain_state
      :type:  MockChainState


   .. py:attribute:: block_number
      :type:  int


   .. py:method:: reset()
      :classmethod:



   .. py:method:: setup()


   .. py:attribute:: __dict__


   .. py:method:: get_block_hash(block_id)

      Retrieves the hash of a specific block on the Bittensor blockchain. The block hash is a unique
      identifier representing the cryptographic hash of the block's content, ensuring its integrity and
      immutability.

      :param block_id: The block number for which the hash is to be retrieved.
      :type block_id: int

      :returns: The cryptographic hash of the specified block.
      :rtype: str

      The block hash is a fundamental aspect of blockchain technology, providing a secure reference to
      each block's data. It is crucial for verifying transactions, ensuring data consistency, and
      maintaining the trustworthiness of the blockchain.



   .. py:method:: create_subnet(netuid)


   .. py:method:: set_difficulty(netuid, difficulty)


   .. py:method:: _register_neuron(netuid, hotkey, coldkey)


   .. py:method:: _convert_to_balance(balance)
      :staticmethod:



   .. py:method:: force_register_neuron(netuid, hotkey, coldkey, stake = Balance(0), balance = Balance(0))

      Force register a neuron on the mock chain, returning the UID.



   .. py:method:: force_set_balance(ss58_address, balance = Balance(0))

      :returns: (success, err_msg)
      :rtype: Tuple[bool, Optional[str]]



   .. py:attribute:: sudo_force_set_balance


   .. py:method:: do_block_step()


   .. py:method:: _handle_type_default(name, params)


   .. py:method:: commit(wallet, netuid, data)

      Commits arbitrary data to the Bittensor network by publishing metadata.

      :param wallet: The wallet associated with the neuron committing the data.
      :type wallet: bittensor.wallet
      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param data: The data to be committed to the network.
      :type data: str



   .. py:method:: get_commitment(netuid, uid, block = None)

      Retrieves the on-chain commitment for a specific neuron in the Bittensor network.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param uid: The unique identifier of the neuron.
      :type uid: int
      :param block: The block number to retrieve the commitment from. If None, the latest block
                    is used. Default is ``None``.
      :type block: Optional[int]

      :returns: The commitment data as a string.
      :rtype: str



   .. py:method:: query_subtensor(name, block = None, params = [])

      Queries named storage from the Subtensor module on the Bittensor blockchain. This function is used to retrieve
      specific data or parameters from the blockchain, such as stake, rank, or other neuron-specific attributes.

      :param name: The name of the storage function to query.
      :type name: str
      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int]
      :param params: A list of parameters to pass to the query function.
      :type params: Optional[List[object]], optional

      :returns: An object containing the requested data.
      :rtype: query_response (ScaleType)

      This query function is essential for accessing detailed information about the network and its neurons,
      providing valuable insights into the state and dynamics of the Bittensor ecosystem.



   .. py:method:: query_map_subtensor(name, block = None, params = [])

      Note: Double map requires one param



   .. py:method:: query_constant(module_name, constant_name, block = None)

      Retrieves a constant from the specified module on the Bittensor blockchain. This function is used to
      access fixed parameters or values defined within the blockchain's modules, which are essential for
      understanding the network's configuration and rules.

      :param module_name: The name of the module containing the constant.
      :type module_name: str
      :param constant_name: The name of the constant to retrieve.
      :type constant_name: str
      :param block: The blockchain block number at which to query the constant.
      :type block: Optional[int]

      :returns: The value of the constant if found, ``None`` otherwise.
      :rtype: Optional[ScaleType]

      Constants queried through this function can include critical network parameters such as inflation rates,
      consensus rules, or validation thresholds, providing a deeper understanding of the Bittensor network's
      operational parameters.



   .. py:method:: get_current_block()

      Returns the current block number on the Bittensor blockchain. This function provides the latest block
      number, indicating the most recent state of the blockchain.

      :returns: The current chain block number.
      :rtype: int

      Knowing the current block number is essential for querying real-time data and performing time-sensitive
      operations on the blockchain. It serves as a reference point for network activities and data synchronization.



   .. py:method:: get_balance(address, block = None)

      Retrieves the token balance of a specific address within the Bittensor network. This function queries
      the blockchain to determine the amount of Tao held by a given account.

      :param address: The Substrate address in ``ss58`` format.
      :type address: str
      :param block: The blockchain block number at which to perform the query.
      :type block: int, optional

      :returns: The account balance at the specified block, represented as a Balance object.
      :rtype: Balance

      This function is important for monitoring account holdings and managing financial transactions
      within the Bittensor ecosystem. It helps in assessing the economic status and capacity of network participants.



   .. py:method:: get_balances(block = None)

      Retrieves the token balances of all accounts within the Bittensor network as of a specific blockchain block.
      This function provides a comprehensive view of the token distribution among different accounts.

      :param block: The blockchain block number at which to perform the query.
      :type block: int, optional

      :returns: A dictionary mapping each account's ``ss58`` address to its balance.
      :rtype: Dict[str, Balance]

      This function is valuable for analyzing the overall economic landscape of the Bittensor network,
      including the distribution of financial resources and the financial status of network participants.



   .. py:method:: neuron_for_uid(uid, netuid, block = None)

      Retrieves detailed information about a specific neuron identified by its unique identifier (UID)
      within a specified subnet (netuid) of the Bittensor network. This function provides a comprehensive
      view of a neuron's attributes, including its stake, rank, and operational status.

      :param uid: The unique identifier of the neuron.
      :type uid: int
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: Detailed information about the neuron if found, ``None`` otherwise.
      :rtype: NeuronInfo

      This function is crucial for analyzing individual neurons' contributions and status within a specific
      subnet, offering insights into their roles in the network's consensus and validation mechanisms.



   .. py:method:: neurons(netuid, block = None)

      Retrieves a list of all neurons within a specified subnet of the Bittensor network. This function
      provides a snapshot of the subnet's neuron population, including each neuron's attributes and network
      interactions.

      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: A list of NeuronInfo objects detailing each neuron's characteristics in the subnet.
      :rtype: List[NeuronInfo]

      Understanding the distribution and status of neurons within a subnet is key to comprehending the
      network's decentralized structure and the dynamics of its consensus and governance processes.



   .. py:method:: _get_most_recent_storage(storage, block_number = None)
      :staticmethod:



   .. py:method:: _get_axon_info(netuid, hotkey, block = None)


   .. py:method:: _get_prometheus_info(netuid, hotkey, block = None)


   .. py:method:: _neuron_subnet_exists(uid, netuid, block = None)


   .. py:method:: neuron_for_uid_lite(uid, netuid, block = None)

      Retrieves a lightweight version of information about a neuron in a specific subnet, identified by
      its UID. The 'lite' version focuses on essential attributes such as stake and network activity.

      :param uid: The unique identifier of the neuron.
      :type uid: int
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: A simplified version of neuron information if found, ``None`` otherwise.
      :rtype: Optional[NeuronInfoLite]

      This function is useful for quick and efficient analyses of neuron status and activities within a
      subnet without the need for comprehensive data retrieval.



   .. py:method:: neurons_lite(netuid, block = None)

      Retrieves a list of neurons in a 'lite' format from a specific subnet of the Bittensor network.
      This function provides a streamlined view of the neurons, focusing on key attributes such as stake
      and network participation.

      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: A list of simplified neuron information for the subnet.
      :rtype: List[NeuronInfoLite]

      This function offers a quick overview of the neuron population within a subnet, facilitating
      efficient analysis of the network's decentralized structure and neuron dynamics.



   .. py:method:: _do_delegation(wallet, delegate_ss58, amount, wait_for_inclusion = True, wait_for_finalization = False)

      Delegates a specified amount of stake to a delegate's hotkey.

      This method sends a transaction to add stake to a delegate's hotkey and retries the call up to three times
      with exponential backoff in case of failures.

      :param wallet: The wallet from which the stake will be delegated.
      :type wallet: bittensor.wallet
      :param delegate_ss58: The SS58 address of the delegate's hotkey.
      :type delegate_ss58: str
      :param amount: The amount of stake to be delegated.
      :type amount: Balance
      :param wait_for_inclusion: Whether to wait for the transaction to be included in a block. Default is ``True``.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Whether to wait for the transaction to be finalized. Default is ``False``.
      :type wait_for_finalization: bool, optional

      :returns: ``True`` if the delegation is successful, ``False`` otherwise.
      :rtype: bool



   .. py:method:: _do_undelegation(wallet, delegate_ss58, amount, wait_for_inclusion = True, wait_for_finalization = False)

      Removes a specified amount of stake from a delegate's hotkey.

      This method sends a transaction to remove stake from a delegate's hotkey and retries the call up to three times
      with exponential backoff in case of failures.

      :param wallet: The wallet from which the stake will be removed.
      :type wallet: bittensor.wallet
      :param delegate_ss58: The SS58 address of the delegate's hotkey.
      :type delegate_ss58: str
      :param amount: The amount of stake to be removed.
      :type amount: Balance
      :param wait_for_inclusion: Whether to wait for the transaction to be included in a block. Default is ``True``.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Whether to wait for the transaction to be finalized. Default is ``False``.
      :type wait_for_finalization: bool, optional

      :returns: ``True`` if the undelegation is successful, ``False`` otherwise.
      :rtype: bool



   .. py:method:: _do_nominate(wallet, wait_for_inclusion = True, wait_for_finalization = False)

      Nominates the wallet's hotkey to become a delegate.

      This method sends a transaction to nominate the wallet's hotkey to become a delegate and retries the call up to
      three times with exponential backoff in case of failures.

      :param wallet: The wallet whose hotkey will be nominated.
      :type wallet: bittensor.wallet
      :param wait_for_inclusion: Whether to wait for the transaction to be included in a block. Default is ``True``.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Whether to wait for the transaction to be finalized. Default is ``False``.
      :type wait_for_finalization: bool, optional

      :returns: ``True`` if the nomination is successful, ``False`` otherwise.
      :rtype: bool



   .. py:method:: get_transfer_fee(wallet, dest, value)

      Calculates the transaction fee for transferring tokens from a wallet to a specified destination address.
      This function simulates the transfer to estimate the associated cost, taking into account the current
      network conditions and transaction complexity.

      :param wallet: The wallet from which the transfer is initiated.
      :type wallet: bittensor.wallet
      :param dest: The ``SS58`` address of the destination account.
      :type dest: str
      :param value: The amount of tokens to be transferred, specified as a Balance object,
                    or in Tao (float) or Rao (int) units.
      :type value: Union[Balance, float, int]

      :returns: The estimated transaction fee for the transfer, represented as a Balance object.
      :rtype: Balance

      Estimating the transfer fee is essential for planning and executing token transactions, ensuring that the
      wallet has sufficient funds to cover both the transfer amount and the associated costs. This function
      provides a crucial tool for managing financial operations within the Bittensor network.



   .. py:method:: _do_transfer(wallet, dest, transfer_balance, wait_for_inclusion = True, wait_for_finalization = False)

      Sends a transfer extrinsic to the chain.

      :param wallet: Wallet object.
      :type wallet: :func:`bittensor.wallet`
      :param dest: Destination public key address.
      :type dest: str
      :param transfer_balance: Amount to transfer.
      :type transfer_balance: :func:`Balance`
      :param wait_for_inclusion: If ``true``, waits for inclusion.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: If ``true``, waits for finalization.
      :type wait_for_finalization: bool

      :returns: ``True`` if transfer was successful.
                block_hash (str): Block hash of the transfer. On success and if wait_for_ finalization/inclusion is
                    ``True``.
                error (str): Error message if transfer failed.
      :rtype: success (bool)



   .. py:method:: _do_pow_register(netuid, wallet, pow_result, wait_for_inclusion = False, wait_for_finalization = True)

      Sends a (POW) register extrinsic to the chain.

      :param netuid: The subnet to register on.
      :type netuid: int
      :param wallet: The wallet to register.
      :type wallet: bittensor.wallet
      :param pow_result: The PoW result to register.
      :type pow_result: POWSolution
      :param wait_for_inclusion: If ``True``, waits for the extrinsic to be included in a block.
                                 Default to `False`.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: If ``True``, waits for the extrinsic to be finalized. Default to `True`.
      :type wait_for_finalization: bool

      :returns: ``True`` if the extrinsic was included in a block.
                error (Optional[str]): ``None`` on success or not waiting for inclusion/finalization, otherwise the error
                    message.
      :rtype: success (bool)



   .. py:method:: _do_burned_register(netuid, wallet, wait_for_inclusion = False, wait_for_finalization = True)

      Performs a burned register extrinsic call to the Subtensor chain.

      This method sends a registration transaction to the Subtensor blockchain using the burned register mechanism. It
      retries the call up to three times with exponential backoff in case of failures.

      :param netuid: The network unique identifier to register on.
      :type netuid: int
      :param wallet: The wallet to be registered.
      :type wallet: bittensor.wallet
      :param wait_for_inclusion: Whether to wait for the transaction to be included in a block. Default is False.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: Whether to wait for the transaction to be finalized. Default is True.
      :type wait_for_finalization: bool

      :returns: A tuple containing a boolean indicating success or failure, and an optional error message.
      :rtype: Tuple[bool, Optional[str]]



   .. py:method:: _do_stake(wallet, hotkey_ss58, amount, wait_for_inclusion = True, wait_for_finalization = False)

      Sends a stake extrinsic to the chain.

      :param wallet: Wallet object that can sign the extrinsic.
      :type wallet: :func:`bittensor.wallet`
      :param hotkey_ss58: Hotkey ``ss58`` address to stake to.
      :type hotkey_ss58: str
      :param amount: Amount to stake.
      :type amount: :func:`Balance`
      :param wait_for_inclusion: If ``true``, waits for inclusion before returning.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: If ``true``, waits for finalization before returning.
      :type wait_for_finalization: bool

      :returns: ``True`` if the extrinsic was successful.
      :rtype: success (bool)

      :raises StakeError: If the extrinsic failed.



   .. py:method:: _do_unstake(wallet, hotkey_ss58, amount, wait_for_inclusion = True, wait_for_finalization = False)

      Sends an unstake extrinsic to the chain.

      :param wallet: Wallet object that can sign the extrinsic.
      :type wallet: :func:`bittensor.wallet`
      :param hotkey_ss58: Hotkey ``ss58`` address to unstake from.
      :type hotkey_ss58: str
      :param amount: Amount to unstake.
      :type amount: :func:`Balance`
      :param wait_for_inclusion: If ``true``, waits for inclusion before returning.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: If ``true``, waits for finalization before returning.
      :type wait_for_finalization: bool

      :returns: ``True`` if the extrinsic was successful.
      :rtype: success (bool)

      :raises StakeError: If the extrinsic failed.



   .. py:method:: min_required_stake()
      :staticmethod:


      As the minimum required stake may change, this method allows us to dynamically
      update the amount in the mock without updating the tests



   .. py:method:: get_minimum_required_stake()

      Returns the minimum required stake for nominators in the Subtensor network.

      This method retries the substrate call up to three times with exponential backoff in case of failures.

      :returns: The minimum required stake as a Balance object.
      :rtype: Balance

      :raises Exception: If the substrate call fails after the maximum number of retries.



   .. py:method:: get_delegate_by_hotkey(hotkey_ss58, block = None)

      Retrieves detailed information about a delegate neuron based on its hotkey. This function provides
      a comprehensive view of the delegate's status, including its stakes, nominators, and reward distribution.

      :param hotkey_ss58: The ``SS58`` address of the delegate's hotkey.
      :type hotkey_ss58: str
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: Detailed information about the delegate neuron, ``None`` if not found.
      :rtype: Optional[DelegateInfo]

      This function is essential for understanding the roles and influence of delegate neurons within
      the Bittensor network's consensus and governance structures.



   .. py:method:: get_delegates(block = None)

      Retrieves a list of all delegate neurons within the Bittensor network. This function provides an overview of the
      neurons that are actively involved in the network's delegation system.

      Analyzing the delegate population offers insights into the network's governance dynamics and the distribution of
      trust and responsibility among participating neurons.

      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: A list of DelegateInfo objects detailing each delegate's characteristics.
      :rtype: List[DelegateInfo]



   .. py:method:: get_delegated(coldkey_ss58, block = None)

      Returns the list of delegates that a given coldkey is staked to.



   .. py:method:: get_all_subnets_info(block = None)

      Retrieves detailed information about all subnets within the Bittensor network. This function
      provides comprehensive data on each subnet, including its characteristics and operational parameters.

      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: A list of SubnetInfo objects, each containing detailed information about a subnet.
      :rtype: List[SubnetInfo]

      Gaining insights into the subnets' details assists in understanding the network's composition,
      the roles of different subnets, and their unique features.



   .. py:method:: get_subnet_info(netuid, block = None)

      Retrieves detailed information about a specific subnet within the Bittensor network. This function
      provides key data on the subnet, including its operational parameters and network status.

      :param netuid: The network UID of the subnet to query.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: Detailed information about the subnet, or ``None`` if not found.
      :rtype: Optional[SubnetInfo]

      This function is essential for neurons and stakeholders interested in the specifics of a particular
      subnet, including its governance, performance, and role within the broader network.



   .. py:method:: _do_serve_prometheus(wallet, call_params, wait_for_inclusion = False, wait_for_finalization = True)

      Sends a serve prometheus extrinsic to the chain.
      :param wallet: Wallet object.
      :type wallet: :func:`bittensor.wallet`
      :param call_params: Prometheus serve call parameters.
      :type call_params: :func:`PrometheusServeCallParams`
      :param wait_for_inclusion: If ``true``, waits for inclusion.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: If ``true``, waits for finalization.
      :type wait_for_finalization: bool

      :returns: ``True`` if serve prometheus was successful.
                error (:func:`Optional[str]`): Error message if serve prometheus failed, ``None`` otherwise.
      :rtype: success (bool)



   .. py:method:: _do_set_weights(wallet, netuid, uids, vals, version_key, wait_for_inclusion = False, wait_for_finalization = True)

      Internal method to send a transaction to the Bittensor blockchain, setting weights
      for specified neurons. This method constructs and submits the transaction, handling
      retries and blockchain communication.

      :param wallet: The wallet associated with the neuron setting the weights.
      :type wallet: bittensor.wallet
      :param uids: List of neuron UIDs for which weights are being set.
      :type uids: List[int]
      :param vals: List of weight values corresponding to each UID.
      :type vals: List[int]
      :param netuid: Unique identifier for the network.
      :type netuid: int
      :param version_key: Version key for compatibility with the network.
      :type version_key: int, optional
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional

      :returns: A tuple containing a success flag and an optional error message.
      :rtype: Tuple[bool, Optional[str]]

      This method is vital for the dynamic weighting mechanism in Bittensor, where neurons adjust their
      trust in other neurons based on observed performance and contributions.



   .. py:method:: _do_serve_axon(wallet, call_params, wait_for_inclusion = False, wait_for_finalization = True)

      Internal method to submit a serve axon transaction to the Bittensor blockchain. This method
      creates and submits a transaction, enabling a neuron's Axon to serve requests on the network.

      :param wallet: The wallet associated with the neuron.
      :type wallet: bittensor.wallet
      :param call_params: Parameters required for the serve axon call.
      :type call_params: AxonServeCallParams
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional

      :returns: A tuple containing a success flag and an optional error message.
      :rtype: Tuple[bool, Optional[str]]

      This function is crucial for initializing and announcing a neuron's Axon service on the network,
      enhancing the decentralized computation capabilities of Bittensor.



