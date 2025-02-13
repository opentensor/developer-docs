bittensor.utils.mock.subtensor_mock
===================================

.. py:module:: bittensor.utils.mock.subtensor_mock


Attributes
----------

.. autoapisummary::

   bittensor.utils.mock.subtensor_mock.BlockNumber


Classes
-------

.. autoapisummary::

   bittensor.utils.mock.subtensor_mock.AxonInfoDict
   bittensor.utils.mock.subtensor_mock.InfoDict
   bittensor.utils.mock.subtensor_mock.MockChainState
   bittensor.utils.mock.subtensor_mock.MockMapResult
   bittensor.utils.mock.subtensor_mock.MockSubtensor
   bittensor.utils.mock.subtensor_mock.MockSubtensorState
   bittensor.utils.mock.subtensor_mock.MockSubtensorValue
   bittensor.utils.mock.subtensor_mock.MockSystemState
   bittensor.utils.mock.subtensor_mock.PrometheusInfoDict
   bittensor.utils.mock.subtensor_mock.ReusableCoroutine


Module Contents
---------------

.. py:class:: AxonInfoDict

   Bases: :py:obj:`InfoDict`


   .. py:attribute:: block
      :type:  int


   .. py:method:: default()
      :classmethod:



   .. py:attribute:: ip
      :type:  int


   .. py:attribute:: ip_type
      :type:  int


   .. py:attribute:: placeholder1
      :type:  int


   .. py:attribute:: placeholder2
      :type:  int


   .. py:attribute:: port
      :type:  int


   .. py:attribute:: protocol
      :type:  int


   .. py:attribute:: version
      :type:  int


.. py:data:: BlockNumber

.. py:class:: InfoDict

   Bases: :py:obj:`collections.abc.Mapping`


   .. py:method:: default()
      :classmethod:

      :abstractmethod:



.. py:class:: MockChainState

   Bases: :py:obj:`TypedDict`


   dict() -> new empty dictionary
   dict(mapping) -> new dictionary initialized from a mapping object's
       (key, value) pairs
   dict(iterable) -> new dictionary initialized as if via:
       d = {}
       for k, v in iterable:
           d[k] = v
   dict(**kwargs) -> new dictionary initialized with the name=value pairs
       in the keyword argument list.  For example:  dict(one=1, two=2)

   Initialize self.  See help(type(self)) for accurate signature.


   .. py:attribute:: SubtensorModule
      :type:  MockSubtensorState


   .. py:attribute:: System
      :type:  MockSystemState


.. py:class:: MockMapResult(records = None)

   .. py:attribute:: records
      :type:  Optional[list[tuple[MockSubtensorValue, MockSubtensorValue]]]


.. py:class:: MockSubtensor(*args, **kwargs)

   Bases: :py:obj:`bittensor.core.subtensor.Subtensor`


   A Mock Subtensor class for running tests.
   This should mock only methods that make queries to the chain.
   e.g. We mock `Subtensor.query_subtensor` instead of all query methods.

   This class will also store a local (mock) state of the chain.

   Initializes an instance of the Subtensor class.

   :param network: The network name or type to connect to.
   :type network: str
   :param config: Configuration object for the AsyncSubtensor instance.
   :type config: Optional[Config]
   :param _mock: Whether this is a mock instance. Mainly just for use in testing.
   :param log_verbose: Enables or disables verbose logging.
   :type log_verbose: bool

   :raises Any exceptions raised during the setup, configuration, or connection process.:


   .. py:attribute:: block_number
      :type:  int


   .. py:attribute:: chain_state
      :type:  MockChainState


   .. py:method:: commit(wallet, netuid, data)

      Commits arbitrary data to the Bittensor network by publishing metadata.

      :param wallet: The wallet associated with the neuron committing the data.
      :type wallet: bittensor_wallet.Wallet
      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param data: The data to be committed to the network.
      :type data: str



   .. py:method:: create_subnet(netuid)


   .. py:method:: do_block_step()


   .. py:method:: do_serve_axon(wallet, call_params, wait_for_inclusion = False, wait_for_finalization = True)


   .. py:method:: do_serve_prometheus(wallet, call_params, wait_for_inclusion = False, wait_for_finalization = True)


   .. py:method:: do_set_weights(wallet, netuid, uids, vals, version_key, wait_for_inclusion = False, wait_for_finalization = True)


   .. py:method:: do_transfer(wallet, dest, transfer_balance, wait_for_inclusion = True, wait_for_finalization = False)


   .. py:method:: force_set_balance(ss58_address, balance = Balance(0))

      :returns: (success, err_msg)
      :rtype: tuple[bool, Optional[str]]



   .. py:method:: get_balance(address, block = None)

      Retrieves the balance for given coldkey.

      :param address: coldkey address.
      :type address: str
      :param block: The blockchain block number for the query.
      :type block: Optional[int]

      :returns: Balance object.



   .. py:method:: get_block_hash(block = None)

      Retrieves the hash of a specific block on the Bittensor blockchain. The block hash is a unique identifier
          representing the cryptographic hash of the block's content, ensuring its integrity and immutability.

      :param block: The block number for which the hash is to be retrieved.
      :type block: int

      :returns: The cryptographic hash of the specified block.
      :rtype: str

      The block hash is a fundamental aspect of blockchain technology, providing a secure reference to each block's
          data. It is crucial for verifying transactions, ensuring data consistency, and maintaining the
          trustworthiness of the blockchain.



   .. py:method:: get_commitment(netuid, uid, block = None)

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

      Returns the current block number on the Bittensor blockchain. This function provides the latest block number,
          indicating the most recent state of the blockchain.

      :returns: The current chain block number.
      :rtype: int

      Knowing the current block number is essential for querying real-time data and performing time-sensitive
          operations on the blockchain. It serves as a reference point for network activities and data
          synchronization.



   .. py:method:: get_transfer_fee(wallet, dest, value)

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



   .. py:method:: min_required_stake()
      :staticmethod:


      As the minimum required stake may change, this method allows us to dynamically
      update the amount in the mock without updating the tests



   .. py:method:: neuron_for_uid(uid, netuid, block = None)

      Retrieves detailed information about a specific neuron identified by its unique identifier (UID) within a
          specified subnet (netuid) of the Bittensor network. This function provides a comprehensive view of a
          neuron's attributes, including its stake, rank, and operational status.

      :param uid: The unique identifier of the neuron.
      :type uid: int
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]

      :returns: Detailed information about the neuron if found, a null neuron otherwise

      This function is crucial for analyzing individual neurons' contributions and status within a specific subnet,
          offering insights into their roles in the network's consensus and validation mechanisms.



   .. py:method:: neuron_for_uid_lite(uid, netuid, block = None)


   .. py:method:: neurons(netuid, block = None)

      Retrieves a list of all neurons within a specified subnet of the Bittensor network.
      This function provides a snapshot of the subnet's neuron population, including each neuron's attributes and
          network interactions.

      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]

      :returns: A list of NeuronInfo objects detailing each neuron's characteristics in the subnet.

      Understanding the distribution and status of neurons within a subnet is key to comprehending the network's
          decentralized structure and the dynamics of its consensus and governance processes.



   .. py:method:: neurons_lite(netuid, block = None)

      Retrieves a list of neurons in a 'lite' format from a specific subnet of the Bittensor network.
      This function provides a streamlined view of the neurons, focusing on key attributes such as stake and network
          participation.

      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]

      :returns: A list of simplified neuron information for the subnet.

      This function offers a quick overview of the neuron population within a subnet, facilitating efficient analysis
          of the network's decentralized structure and neuron dynamics.



   .. py:method:: query_constant(module_name, constant_name, block = None)

      Retrieves a constant from the specified module on the Bittensor blockchain. This function is used to access
          fixed parameters or values defined within the blockchain's modules, which are essential for understanding
          the network's configuration and rules.

      :param module_name: The name of the module containing the constant.
      :param constant_name: The name of the constant to retrieve.
      :param block: The blockchain block number at which to query the constant.

      :returns: The value of the constant if found, `None` otherwise.
      :rtype: Optional[scalecodec.ScaleType]

      Constants queried through this function can include critical network parameters such as inflation rates,
          consensus rules, or validation thresholds, providing a deeper understanding of the Bittensor network's
          operational parameters.



   .. py:method:: query_map_subtensor(name, block = None, params = None)

      Note: Double map requires one param



   .. py:method:: query_subtensor(name, block = None, params = None)

      Queries named storage from the Subtensor module on the Bittensor blockchain. This function is used to retrieve
          specific data or parameters from the blockchain, such as stake, rank, or other neuron-specific attributes.

      :param name: The name of the storage function to query.
      :param block: The blockchain block number at which to perform the query.
      :param params: A list of parameters to pass to the query function.

      :returns: An object containing the requested data.
      :rtype: query_response (scalecodec.ScaleType)

      This query function is essential for accessing detailed information about the network and its neurons, providing
          valuable insights into the state and dynamics of the Bittensor ecosystem.



   .. py:method:: reset()
      :classmethod:



   .. py:method:: set_difficulty(netuid, difficulty)


   .. py:method:: setup()


   .. py:attribute:: sudo_force_set_balance


.. py:class:: MockSubtensorState

   Bases: :py:obj:`TypedDict`


   dict() -> new empty dictionary
   dict(mapping) -> new dictionary initialized from a mapping object's
       (key, value) pairs
   dict(iterable) -> new dictionary initialized as if via:
       d = {}
       for k, v in iterable:
           d[k] = v
   dict(**kwargs) -> new dictionary initialized with the name=value pairs
       in the keyword argument list.  For example:  dict(one=1, two=2)

   Initialize self.  See help(type(self)) for accurate signature.


   .. py:attribute:: Active
      :type:  dict[int, dict[BlockNumber, bool]]


   .. py:attribute:: Delegates
      :type:  dict[str, dict[int, float]]


   .. py:attribute:: Difficulty
      :type:  dict[int, dict[BlockNumber, int]]


   .. py:attribute:: ImmunityPeriod
      :type:  dict[int, dict[BlockNumber, int]]


   .. py:attribute:: Kappa
      :type:  dict[int, dict[BlockNumber, int]]


   .. py:attribute:: NetworksAdded
      :type:  dict[int, dict[BlockNumber, bool]]


   .. py:attribute:: Rho
      :type:  dict[int, dict[BlockNumber, int]]


   .. py:attribute:: Stake
      :type:  dict[str, dict[str, dict[int, int]]]


   .. py:attribute:: ValidatorBatchSize
      :type:  dict[int, dict[BlockNumber, int]]


.. py:class:: MockSubtensorValue

   .. py:attribute:: value
      :type:  Optional[Any]


.. py:class:: MockSystemState

   Bases: :py:obj:`TypedDict`


   dict() -> new empty dictionary
   dict(mapping) -> new dictionary initialized from a mapping object's
       (key, value) pairs
   dict(iterable) -> new dictionary initialized as if via:
       d = {}
       for k, v in iterable:
           d[k] = v
   dict(**kwargs) -> new dictionary initialized with the name=value pairs
       in the keyword argument list.  For example:  dict(one=1, two=2)

   Initialize self.  See help(type(self)) for accurate signature.


   .. py:attribute:: Account
      :type:  dict[str, dict[int, int]]


.. py:class:: PrometheusInfoDict

   Bases: :py:obj:`InfoDict`


   .. py:attribute:: block
      :type:  int


   .. py:method:: default()
      :classmethod:



   .. py:attribute:: ip
      :type:  int


   .. py:attribute:: ip_type
      :type:  int


   .. py:attribute:: port
      :type:  int


   .. py:attribute:: version
      :type:  int


.. py:class:: ReusableCoroutine(coroutine)

   .. py:attribute:: coroutine


   .. py:method:: reset()


