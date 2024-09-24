bittensor.utils.mock
====================

.. py:module:: bittensor.utils.mock


Submodules
----------

.. toctree::
   :maxdepth: 1

   /autoapi/bittensor/utils/mock/subtensor_mock/index


Classes
-------

.. autoapisummary::

   bittensor.utils.mock.MockSubtensor


Package Contents
----------------

.. py:class:: MockSubtensor(*args, **kwargs)

   Bases: :py:obj:`bittensor.core.subtensor.Subtensor`


   A Mock Subtensor class for running tests.
   This should mock only methods that make queries to the chain.
   e.g. We mock `Subtensor.query_subtensor` instead of all query methods.

   This class will also store a local (mock) state of the chain.

   Initializes a Subtensor interface for interacting with the Bittensor blockchain.

   .. note:: Currently subtensor defaults to the ``finney`` network. This will change in a future release.

   We strongly encourage users to run their own local subtensor node whenever possible. This increases decentralization and resilience of the network. In a future release, local subtensor will become the default and the fallback to ``finney`` removed. Please plan ahead for this change. We will provide detailed instructions on how to run a local subtensor node in the documentation in a subsequent release.

   :param network: The network name to connect to (e.g., ``finney``, ``local``). This can also be the chain endpoint (e.g., ``wss://entrypoint-finney.opentensor.ai:443``) and will be correctly parsed into the network and chain endpoint. If not specified, defaults to the main Bittensor network.
   :type network: Optional[str]
   :param config: Configuration object for the subtensor. If not provided, a default configuration is used.
   :type config: Optional[bittensor.core.config.Config]
   :param _mock: If set to ``True``, uses a mocked connection for testing purposes. Default is ``False``.
   :type _mock: bool
   :param log_verbose: Whether to enable verbose logging. If set to ``True``, detailed log information about the connection and network operations will be provided. Default is ``True``.
   :type log_verbose: bool
   :param connection_timeout: The maximum time in seconds to keep the connection alive. Default is ``600``.
   :type connection_timeout: int

   This initialization sets up the connection to the specified Bittensor network, allowing for various blockchain operations such as neuron registration, stake management, and setting weights.


   .. py:attribute:: chain_state
      :type:  MockChainState


   .. py:attribute:: block_number
      :type:  int


   .. py:method:: reset()
      :classmethod:



   .. py:method:: setup()


   .. py:attribute:: __dict__


   .. py:method:: get_block_hash(block_id)

      Retrieves the hash of a specific block on the Bittensor blockchain. The block hash is a unique identifier representing the cryptographic hash of the block's content, ensuring its integrity and immutability.

      :param block_id: The block number for which the hash is to be retrieved.
      :type block_id: int

      :returns: The cryptographic hash of the specified block.
      :rtype: str

      The block hash is a fundamental aspect of blockchain technology, providing a secure reference to each block's data. It is crucial for verifying transactions, ensuring data consistency, and maintaining the trustworthiness of the blockchain.



   .. py:method:: create_subnet(netuid)


   .. py:method:: set_difficulty(netuid, difficulty)


   .. py:method:: _convert_to_balance(balance)
      :staticmethod:



   .. py:method:: force_set_balance(ss58_address, balance = Balance(0))

      :returns: (success, err_msg)
      :rtype: tuple[bool, Optional[str]]



   .. py:attribute:: sudo_force_set_balance


   .. py:method:: do_block_step()


   .. py:method:: _handle_type_default(name, params)


   .. py:method:: commit(wallet, netuid, data)

      Commits arbitrary data to the Bittensor network by publishing metadata.

      :param wallet: The wallet associated with the neuron committing the data.
      :type wallet: bittensor_wallet.Wallet
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
      :param block: The block number to retrieve the commitment from. If None, the latest block is used. Default is ``None``.
      :type block: Optional[int]

      :returns: The commitment data as a string.
      :rtype: str



   .. py:method:: query_subtensor(name, block = None, params = [])

      Queries named storage from the Subtensor module on the Bittensor blockchain. This function is used to retrieve specific data or parameters from the blockchain, such as stake, rank, or other neuron-specific attributes.

      :param name: The name of the storage function to query.
      :type name: str
      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int]
      :param params: A list of parameters to pass to the query function.
      :type params: Optional[list[object]]

      :returns: An object containing the requested data.
      :rtype: query_response (scalecodec.ScaleType)

      This query function is essential for accessing detailed information about the network and its neurons, providing valuable insights into the state and dynamics of the Bittensor ecosystem.



   .. py:method:: query_map_subtensor(name, block = None, params = [])

      Note: Double map requires one param



   .. py:method:: query_constant(module_name, constant_name, block = None)

      Retrieves a constant from the specified module on the Bittensor blockchain. This function is used to access fixed parameters or values defined within the blockchain's modules, which are essential for understanding the network's configuration and rules.

      :param module_name: The name of the module containing the constant.
      :type module_name: str
      :param constant_name: The name of the constant to retrieve.
      :type constant_name: str
      :param block: The blockchain block number at which to query the constant.
      :type block: Optional[int]

      :returns: The value of the constant if found, ``None`` otherwise.
      :rtype: Optional[scalecodec.ScaleType]

      Constants queried through this function can include critical network parameters such as inflation rates, consensus rules, or validation thresholds, providing a deeper understanding of the Bittensor network's operational parameters.



   .. py:method:: get_current_block()

      Returns the current block number on the Bittensor blockchain. This function provides the latest block number, indicating the most recent state of the blockchain.

      :returns: The current chain block number.
      :rtype: int

      Knowing the current block number is essential for querying real-time data and performing time-sensitive operations on the blockchain. It serves as a reference point for network activities and data synchronization.



   .. py:method:: get_balance(address, block = None)

      Retrieves the token balance of a specific address within the Bittensor network. This function queries the blockchain to determine the amount of Tao held by a given account.

      :param address: The Substrate address in ``ss58`` format.
      :type address: str
      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int]

      :returns: The account balance at the specified block, represented as a Balance object.
      :rtype: bittensor.utils.balance.Balance

      This function is important for monitoring account holdings and managing financial transactions within the Bittensor ecosystem. It helps in assessing the economic status and capacity of network participants.



   .. py:method:: neuron_for_uid(uid, netuid, block = None)

      Retrieves detailed information about a specific neuron identified by its unique identifier (UID) within a specified subnet (netuid) of the Bittensor network. This function provides a comprehensive view of a neuron's attributes, including its stake, rank, and operational status.

      :param uid: The unique identifier of the neuron.
      :type uid: Optional[int]
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]

      :returns: Detailed information about the neuron if found, ``None`` otherwise.
      :rtype: bittensor.core.chain_data.neuron_info.NeuronInfo

      This function is crucial for analyzing individual neurons' contributions and status within a specific subnet, offering insights into their roles in the network's consensus and validation mechanisms.



   .. py:method:: neurons(netuid, block = None)

      Retrieves a list of all neurons within a specified subnet of the Bittensor network. This function provides a snapshot of the subnet's neuron population, including each neuron's attributes and network interactions.

      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]

      :returns: A list of NeuronInfo objects detailing each neuron's characteristics in the subnet.
      :rtype: list[bittensor.core.chain_data.neuron_info.NeuronInfo]

      Understanding the distribution and status of neurons within a subnet is key to comprehending the network's decentralized structure and the dynamics of its consensus and governance processes.



   .. py:method:: _get_most_recent_storage(storage, block_number = None)
      :staticmethod:



   .. py:method:: _get_axon_info(netuid, hotkey, block = None)


   .. py:method:: _get_prometheus_info(netuid, hotkey, block = None)


   .. py:method:: _neuron_subnet_exists(uid, netuid, block = None)


   .. py:method:: neurons_lite(netuid, block = None)

      Retrieves a list of neurons in a 'lite' format from a specific subnet of the Bittensor network. This function provides a streamlined view of the neurons, focusing on key attributes such as stake and network participation.

      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]

      :returns: A list of simplified neuron information for the subnet.
      :rtype: list[bittensor.core.chain_data.neuron_info_lite.NeuronInfoLite]

      This function offers a quick overview of the neuron population within a subnet, facilitating efficient analysis of the network's decentralized structure and neuron dynamics.



   .. py:method:: get_transfer_fee(wallet, dest, value)

      Calculates the transaction fee for transferring tokens from a wallet to a specified destination address. This function simulates the transfer to estimate the associated cost, taking into account the current network conditions and transaction complexity.

      :param wallet: The wallet from which the transfer is initiated.
      :type wallet: bittensor_wallet.Wallet
      :param dest: The ``SS58`` address of the destination account.
      :type dest: str
      :param value: The amount of tokens to be transferred, specified as a Balance object, or in Tao (float) or Rao (int) units.
      :type value: Union[bittensor.utils.balance.Balance, float, int]

      :returns: The estimated transaction fee for the transfer, represented as a Balance object.
      :rtype: bittensor.utils.balance.Balance

      Estimating the transfer fee is essential for planning and executing token transactions, ensuring that the wallet has sufficient funds to cover both the transfer amount and the associated costs. This function provides a crucial tool for managing financial operations within the Bittensor network.



   .. py:method:: do_transfer(wallet, dest, transfer_balance, wait_for_inclusion = True, wait_for_finalization = False)


   .. py:method:: min_required_stake()
      :staticmethod:


      As the minimum required stake may change, this method allows us to dynamically
      update the amount in the mock without updating the tests



   .. py:method:: do_serve_prometheus(wallet, call_params, wait_for_inclusion = False, wait_for_finalization = True)


   .. py:method:: do_set_weights(wallet, netuid, uids, vals, version_key, wait_for_inclusion = False, wait_for_finalization = True)


   .. py:method:: do_serve_axon(wallet, call_params, wait_for_inclusion = False, wait_for_finalization = True)


