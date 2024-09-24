bittensor.core.subtensor
========================

.. py:module:: bittensor.core.subtensor

.. autoapi-nested-parse::

   The ``bittensor.core.subtensor`` module in Bittensor serves as a crucial interface for interacting with the Bittensor
   blockchain, facilitating a range of operations essential for the decentralized machine learning network.



Attributes
----------

.. autoapisummary::

   bittensor.core.subtensor.KEY_NONCE


Classes
-------

.. autoapisummary::

   bittensor.core.subtensor.ParamWithTypes
   bittensor.core.subtensor.Subtensor


Module Contents
---------------

.. py:data:: KEY_NONCE
   :type:  dict[str, int]

.. py:class:: ParamWithTypes

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


   .. py:attribute:: name
      :type:  str


   .. py:attribute:: type
      :type:  str


.. py:class:: Subtensor(network = None, config = None, _mock = False, log_verbose = True, connection_timeout = 600)

   The Subtensor class in Bittensor serves as a crucial interface for interacting with the Bittensor blockchain,
   facilitating a range of operations essential for the decentralized machine learning network.

   This class enables neurons (network participants) to engage in activities such as registering on the network,
   managing staked weights, setting inter-neuronal weights, and participating in consensus mechanisms.

   The Bittensor network operates on a digital ledger where each neuron holds stakes (S) and learns a set
   of inter-peer weights (W). These weights, set by the neurons themselves, play a critical role in determining
   the ranking and incentive mechanisms within the network. Higher-ranked neurons, as determined by their
   contributions and trust within the network, receive more incentives.

   The Subtensor class connects to various Bittensor networks like the main ``finney`` network or local test
   networks, providing a gateway to the blockchain layer of Bittensor. It leverages a staked weighted trust
   system and consensus to ensure fair and distributed incentive mechanisms, where incentives (I) are
   primarily allocated to neurons that are trusted by the majority of the network.

   Additionally, Bittensor introduces a speculation-based reward mechanism in the form of bonds (B), allowing
   neurons to accumulate bonds in other neurons, speculating on their future value. This mechanism aligns
   with market-based speculation, incentivizing neurons to make judicious decisions in their inter-neuronal
   investments.

   Example Usage::

       from bittensor.core.subtensor import Subtensor

       # Connect to the main Bittensor network (Finney).
       finney_subtensor = Subtensor(network='finney')

       # Close websocket connection with the Bittensor network.
       finney_subtensor.close()

       # Register a new neuron on the network.
       wallet = bittensor_wallet.Wallet(...)  # Assuming a wallet instance is created.
       netuid = 1
       success = finney_subtensor.register(wallet=wallet, netuid=netuid)

       # Set inter-neuronal weights for collaborative learning.
       success = finney_subtensor.set_weights(wallet=wallet, netuid=netuid, uids=[...], weights=[...])

       # Get the metagraph for a specific subnet using given subtensor connection
       metagraph = finney_subtensor.metagraph(netuid=netuid)

   By facilitating these operations, the Subtensor class is instrumental in maintaining the decentralized
   intelligence and dynamic learning environment of the Bittensor network, as envisioned in its foundational
   principles and mechanisms described in the `NeurIPS paper
   <https://bittensor.com/pdfs/academia/NeurIPS_DAO_Workshop_2022_3_3.pdf>`_. paper.

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


   .. py:attribute:: _config


   .. py:attribute:: log_verbose


   .. py:attribute:: _connection_timeout


   .. py:method:: __str__()


   .. py:method:: __repr__()


   .. py:method:: close()

      Cleans up resources for this subtensor instance like active websocket connection and active extensions.



   .. py:method:: _get_substrate()

      Establishes a connection to the Substrate node using configured parameters.



   .. py:method:: config()
      :staticmethod:


      Creates and returns a Bittensor configuration object.

      :returns: A Bittensor configuration object configured with arguments added by the `subtensor.add_args` method.
      :rtype: config (bittensor.core.config.Config)



   .. py:method:: setup_config(network, config)
      :staticmethod:


      Sets up and returns the configuration for the Subtensor network and endpoint.

      This method determines the appropriate network and chain endpoint based on the provided network string or
      configuration object. It evaluates the network and endpoint in the following order of precedence:
      1. Provided network string.
      2. Configured chain endpoint in the `config` object.
      3. Configured network in the `config` object.
      4. Default chain endpoint.
      5. Default network.

      :param network: The name of the Subtensor network. If None, the network and endpoint will be determined from the `config` object.
      :type network: Optional[str]
      :param config: The configuration object containing the network and chain endpoint settings.
      :type config: bittensor.core.config.Config

      :returns: A tuple containing the formatted WebSocket endpoint URL and the evaluated network name.
      :rtype: tuple



   .. py:method:: help()
      :classmethod:


      Print help to stdout.



   .. py:method:: add_args(parser, prefix = None)
      :classmethod:


      Adds command-line arguments to the provided ArgumentParser for configuring the Subtensor settings.

      :param parser: The ArgumentParser object to which the Subtensor arguments will be added.
      :type parser: argparse.ArgumentParser
      :param prefix: An optional prefix for the argument names. If provided, the prefix is prepended to each argument name.
      :type prefix: Optional[str]

      Arguments added:
          --subtensor.network: The Subtensor network flag. Possible values are 'finney', 'test', 'archive', and 'local'. Overrides the chain endpoint if set.
          --subtensor.chain_endpoint: The Subtensor chain endpoint flag. If set, it overrides the network flag.
          --subtensor._mock: If true, uses a mocked connection to the chain.

      .. admonition:: Example

         parser = argparse.ArgumentParser()
         Subtensor.add_args(parser)



   .. py:method:: _encode_params(call_definition, params)

      Returns a hex encoded string of the params using their types.



   .. py:method:: _get_hyperparameter(param_name, netuid, block = None)

      Retrieves a specified hyperparameter for a specific subnet.

      :param param_name: The name of the hyperparameter to retrieve.
      :type param_name: str
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]

      :returns: The value of the specified hyperparameter if the subnet exists, ``None`` otherwise.
      :rtype: Optional[Union[int, float]]



   .. py:method:: query_subtensor(name, block = None, params = None)

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



   .. py:method:: query_map_subtensor(name, block = None, params = None)

      Queries map storage from the Subtensor module on the Bittensor blockchain. This function is designed to retrieve a map-like data structure, which can include various neuron-specific details or network-wide attributes.

      :param name: The name of the map storage function to query.
      :type name: str
      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int]
      :param params: A list of parameters to pass to the query function.
      :type params: Optional[list[object]]

      :returns: An object containing the map-like data structure, or ``None`` if not found.
      :rtype: QueryMapResult (substrateinterface.base.QueryMapResult)

      This function is particularly useful for analyzing and understanding complex network structures and relationships within the Bittensor ecosystem, such as inter-neuronal connections and stake distributions.



   .. py:method:: query_runtime_api(runtime_api, method, params, block = None)

      Queries the runtime API of the Bittensor blockchain, providing a way to interact with the underlying runtime and retrieve data encoded in Scale Bytes format. This function is essential for advanced users who need to interact with specific runtime methods and decode complex data types.

      :param runtime_api: The name of the runtime API to query.
      :type runtime_api: str
      :param method: The specific method within the runtime API to call.
      :type method: str
      :param params: The parameters to pass to the method call.
      :type params: Optional[list[ParamWithTypes]]
      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int]

      :returns: The Scale Bytes encoded result from the runtime API call, or ``None`` if the call fails.
      :rtype: Optional[str]

      This function enables access to the deeper layers of the Bittensor blockchain, allowing for detailed and specific interactions with the network's runtime environment.



   .. py:method:: state_call(method, data, block = None)

      Makes a state call to the Bittensor blockchain, allowing for direct queries of the blockchain's state. This function is typically used for advanced queries that require specific method calls and data inputs.

      :param method: The method name for the state call.
      :type method: str
      :param data: The data to be passed to the method.
      :type data: str
      :param block: The blockchain block number at which to perform the state call.
      :type block: Optional[int]

      :returns: The result of the rpc call.
      :rtype: result (dict[Any, Any])

      The state call function provides a more direct and flexible way of querying blockchain data, useful for specific use cases where standard queries are insufficient.



   .. py:method:: query_map(module, name, block = None, params = None)

      Queries map storage from any module on the Bittensor blockchain. This function retrieves data structures that represent key-value mappings, essential for accessing complex and structured data within the blockchain modules.

      :param module: The name of the module from which to query the map storage.
      :type module: str
      :param name: The specific storage function within the module to query.
      :type name: str
      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int]
      :param params: Parameters to be passed to the query.
      :type params: Optional[list[object]]

      :returns: A data structure representing the map storage if found, ``None`` otherwise.
      :rtype: result (substrateinterface.base.QueryMapResult)

      This function is particularly useful for retrieving detailed and structured data from various blockchain modules, offering insights into the network's state and the relationships between its different components.



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



   .. py:method:: query_module(module, name, block = None, params = None)

      Queries any module storage on the Bittensor blockchain with the specified parameters and block number. This function is a generic query interface that allows for flexible and diverse data retrieval from various blockchain modules.

      :param module: The name of the module from which to query data.
      :type module: str
      :param name: The name of the storage function within the module.
      :type name: str
      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int]
      :param params: A list of parameters to pass to the query function.
      :type params: Optional[list[object]]

      :returns: An object containing the requested data if found, ``None`` otherwise.
      :rtype: Optional[scalecodec.ScaleType]

      This versatile query function is key to accessing a wide range of data and insights from different parts of the Bittensor blockchain, enhancing the understanding and analysis of the network's state and dynamics.



   .. py:method:: metagraph(netuid, lite = True, block = None)

      Returns a synced metagraph for a specified subnet within the Bittensor network. The metagraph represents the network's structure, including neuron connections and interactions.

      :param netuid: The network UID of the subnet to query.
      :type netuid: int
      :param lite: If true, returns a metagraph using a lightweight sync (no weights, no bonds). Default is ``True``.
      :type lite: bool
      :param block: Block number for synchronization, or ``None`` for the latest block.
      :type block: Optional[int]

      :returns: The metagraph representing the subnet's structure and neuron relationships.
      :rtype: bittensor.core.metagraph.Metagraph

      The metagraph is an essential tool for understanding the topology and dynamics of the Bittensor network's decentralized architecture, particularly in relation to neuron interconnectivity and consensus processes.



   .. py:method:: determine_chain_endpoint_and_network(network)
      :staticmethod:


      Determines the chain endpoint and network from the passed network or chain_endpoint.

      :param network: The network flag. The choices are: ``finney`` (main network), ``archive`` (archive network +300 blocks), ``local`` (local running network), ``test`` (test network).
      :type network: str

      :returns: The network and chain endpoint flag. If passed, overrides the ``network`` argument.
      :rtype: tuple[Optional[str], Optional[str]]



   .. py:method:: get_netuids_for_hotkey(hotkey_ss58, block = None)

      Retrieves a list of subnet UIDs (netuids) for which a given hotkey is a member. This function identifies the specific subnets within the Bittensor network where the neuron associated with the hotkey is active.

      :param hotkey_ss58: The ``SS58`` address of the neuron's hotkey.
      :type hotkey_ss58: str
      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int]

      :returns: A list of netuids where the neuron is a member.
      :rtype: list[int]



   .. py:method:: get_current_block()

      Returns the current block number on the Bittensor blockchain. This function provides the latest block number, indicating the most recent state of the blockchain.

      :returns: The current chain block number.
      :rtype: int

      Knowing the current block number is essential for querying real-time data and performing time-sensitive operations on the blockchain. It serves as a reference point for network activities and data synchronization.



   .. py:method:: is_hotkey_registered_any(hotkey_ss58, block = None)

      Checks if a neuron's hotkey is registered on any subnet within the Bittensor network.

      :param hotkey_ss58: The ``SS58`` address of the neuron's hotkey.
      :type hotkey_ss58: str
      :param block: The blockchain block number at which to perform the check.
      :type block: Optional[int]

      :returns: ``True`` if the hotkey is registered on any subnet, False otherwise.
      :rtype: bool

      This function is essential for determining the network-wide presence and participation of a neuron.



   .. py:method:: is_hotkey_registered_on_subnet(hotkey_ss58, netuid, block = None)

      Checks if a neuron's hotkey is registered on a specific subnet within the Bittensor network.

      :param hotkey_ss58: The ``SS58`` address of the neuron's hotkey.
      :type hotkey_ss58: str
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number at which to perform the check.
      :type block: Optional[int]

      :returns: ``True`` if the hotkey is registered on the specified subnet, False otherwise.
      :rtype: bool

      This function helps in assessing the participation of a neuron in a particular subnet, indicating its specific area of operation or influence within the network.



   .. py:method:: is_hotkey_registered(hotkey_ss58, netuid = None, block = None)

      Determines whether a given hotkey (public key) is registered in the Bittensor network, either globally across any subnet or specifically on a specified subnet. This function checks the registration status of a neuron identified by its hotkey, which is crucial for validating its participation and activities within the network.

      :param hotkey_ss58: The SS58 address of the neuron's hotkey.
      :type hotkey_ss58: str
      :param netuid: The unique identifier of the subnet to check the registration. If ``None``, the registration is checked across all subnets.
      :type netuid: Optional[int]
      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int]

      :returns: ``True`` if the hotkey is registered in the specified context (either any subnet or a specific subnet), ``False`` otherwise.
      :rtype: bool

      This function is important for verifying the active status of neurons in the Bittensor network. It aids in understanding whether a neuron is eligible to participate in network processes such as consensus, validation, and incentive distribution based on its registration status.



   .. py:method:: set_weights(wallet, netuid, uids, weights, version_key = settings.version_as_int, wait_for_inclusion = False, wait_for_finalization = False, prompt = False, max_retries = 5)

      Sets the inter-neuronal weights for the specified neuron. This process involves specifying the influence or trust a neuron places on other neurons in the network, which is a fundamental aspect of Bittensor's decentralized learning architecture.

      :param wallet: The wallet associated with the neuron setting the weights.
      :type wallet: bittensor_wallet.Wallet
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param uids: The list of neuron UIDs that the weights are being set for.
      :type uids: Union[NDArray[np.int64], torch.LongTensor, list]
      :param weights: The corresponding weights to be set for each UID.
      :type weights: Union[NDArray[np.float32], torch.FloatTensor, list]
      :param version_key: Version key for compatibility with the network.  Default is ``int representation of Bittensor version.``.
      :type version_key: int
      :param wait_for_inclusion: Waits for the transaction to be included in a block. Default is ``False``.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain. Default is ``False``.
      :type wait_for_finalization: bool
      :param prompt: If ``True``, prompts for user confirmation before proceeding. Default is ``False``.
      :type prompt: bool
      :param max_retries: The number of maximum attempts to set weights. Default is ``5``.
      :type max_retries: int

      :returns: ``True`` if the setting of weights is successful, False otherwise. And `msg`, a string value describing the success or potential error.
      :rtype: tuple[bool, str]

      This function is crucial in shaping the network's collective intelligence, where each neuron's learning and contribution are influenced by the weights it sets towards others【81†source】.



   .. py:method:: serve_axon(netuid, axon, wait_for_inclusion = False, wait_for_finalization = True)

      Registers an ``Axon`` serving endpoint on the Bittensor network for a specific neuron. This function is used to set up the Axon, a key component of a neuron that handles incoming queries and data processing tasks.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param axon: The Axon instance to be registered for serving.
      :type axon: bittensor.core.axon.Axon
      :param wait_for_inclusion: Waits for the transaction to be included in a block. Default is ``False``.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain. Default is ``True``.
      :type wait_for_finalization: bool

      :returns: ``True`` if the Axon serve registration is successful, False otherwise.
      :rtype: bool

      By registering an Axon, the neuron becomes an active part of the network's distributed computing infrastructure, contributing to the collective intelligence of Bittensor.



   .. py:property:: block
      :type: int

      Returns current chain block.

      :returns: Current chain block.
      :rtype: block (int)


   .. py:method:: blocks_since_last_update(netuid, uid)

      Returns the number of blocks since the last update for a specific UID in the subnetwork.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param uid: The unique identifier of the neuron.
      :type uid: int

      :returns: The number of blocks since the last update, or ``None`` if the subnetwork or UID does not exist.
      :rtype: Optional[int]



   .. py:method:: get_block_hash(block_id)

      Retrieves the hash of a specific block on the Bittensor blockchain. The block hash is a unique identifier representing the cryptographic hash of the block's content, ensuring its integrity and immutability.

      :param block_id: The block number for which the hash is to be retrieved.
      :type block_id: int

      :returns: The cryptographic hash of the specified block.
      :rtype: str

      The block hash is a fundamental aspect of blockchain technology, providing a secure reference to each block's data. It is crucial for verifying transactions, ensuring data consistency, and maintaining the trustworthiness of the blockchain.



   .. py:method:: weights_rate_limit(netuid)

      Returns network WeightsSetRateLimit hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int

      :returns: The value of the WeightsSetRateLimit hyperparameter, or ``None`` if the subnetwork does not exist or the parameter is not found.
      :rtype: Optional[int]



   .. py:method:: commit(wallet, netuid, data)

      Commits arbitrary data to the Bittensor network by publishing metadata.

      :param wallet: The wallet associated with the neuron committing the data.
      :type wallet: bittensor_wallet.Wallet
      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param data: The data to be committed to the network.
      :type data: str



   .. py:method:: subnetwork_n(netuid, block = None)

      Returns network SubnetworkN hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If ``None``, the latest block is used. Default is ``None``.
      :type block: Optional[int]

      :returns: The value of the SubnetworkN hyperparameter, or ``None`` if the subnetwork does not exist or the parameter is not found.
      :rtype: Optional[int]



   .. py:method:: transfer(wallet, dest, amount, wait_for_inclusion = True, wait_for_finalization = False, prompt = False)

      Executes a transfer of funds from the provided wallet to the specified destination address. This function is used to move TAO tokens within the Bittensor network, facilitating transactions between neurons.

      :param wallet: The wallet from which funds are being transferred.
      :type wallet: bittensor_wallet.Wallet
      :param dest: The destination public key address.
      :type dest: str
      :param amount: The amount of TAO to be transferred.
      :type amount: Union[bittensor.utils.balance.Balance, float]
      :param wait_for_inclusion: Waits for the transaction to be included in a block.  Default is ``True``.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.  Default is ``False``.
      :type wait_for_finalization: bool
      :param prompt: If ``True``, prompts for user confirmation before proceeding. Default is ``False``.
      :type prompt: bool

      :returns: ``True`` if the transfer is successful, False otherwise.
      :rtype: transfer_extrinsic (bool)

      This function is essential for the fluid movement of tokens in the network, supporting various economic activities such as staking, delegation, and reward distribution.



   .. py:method:: get_neuron_for_pubkey_and_subnet(hotkey_ss58, netuid, block = None)

      Retrieves information about a neuron based on its public key (hotkey SS58 address) and the specific subnet UID (netuid). This function provides detailed neuron information for a particular subnet within the Bittensor network.

      :param hotkey_ss58: The ``SS58`` address of the neuron's hotkey.
      :type hotkey_ss58: str
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int]

      :returns: Detailed information about the neuron if found, ``None`` otherwise.
      :rtype: Optional[bittensor.core.chain_data.neuron_info.NeuronInfo]

      This function is crucial for accessing specific neuron data and understanding its status, stake, and other attributes within a particular subnet of the Bittensor ecosystem.



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



   .. py:method:: serve_prometheus(wallet, port, netuid, wait_for_inclusion = False, wait_for_finalization = True)

      Serves Prometheus metrics by submitting an extrinsic to a blockchain network via the specified wallet. The function allows configuring whether to wait for the transaction's inclusion in a block and its finalization.

      :param wallet: Bittensor wallet instance used for submitting the extrinsic.
      :type wallet: bittensor_wallet.Wallet
      :param port: The port number on which Prometheus metrics are served.
      :type port: int
      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param wait_for_inclusion: If True, waits for the transaction to be included in a block. Defaults to ``False``.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: If True, waits for the transaction to be finalized. Defaults to ``True``.
      :type wait_for_finalization: bool

      :returns: Returns True if the Prometheus extrinsic is successfully processed, otherwise False.
      :rtype: bool



   .. py:method:: get_subnet_hyperparameters(netuid, block = None)

      Retrieves the hyperparameters for a specific subnet within the Bittensor network. These hyperparameters define the operational settings and rules governing the subnet's behavior.

      :param netuid: The network UID of the subnet to query.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]

      :returns: The subnet's hyperparameters, or ``None`` if not available.
      :rtype: Optional[bittensor.core.chain_data.subnet_hyperparameters.SubnetHyperparameters]

      Understanding the hyperparameters is crucial for comprehending how subnets are configured and managed, and how they interact with the network's consensus and incentive mechanisms.



   .. py:method:: immunity_period(netuid, block = None)

      Retrieves the 'ImmunityPeriod' hyperparameter for a specific subnet. This parameter defines the duration during which new neurons are protected from certain network penalties or restrictions.

      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]

      :returns: The value of the 'ImmunityPeriod' hyperparameter if the subnet exists, ``None`` otherwise.
      :rtype: Optional[int]

      The 'ImmunityPeriod' is a critical aspect of the network's governance system, ensuring that new participants have a grace period to establish themselves and contribute to the network without facing immediate punitive actions.



   .. py:method:: get_uid_for_hotkey_on_subnet(hotkey_ss58, netuid, block = None)

      Retrieves the unique identifier (UID) for a neuron's hotkey on a specific subnet.

      :param hotkey_ss58: The ``SS58`` address of the neuron's hotkey.
      :type hotkey_ss58: str
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]

      :returns: The UID of the neuron if it is registered on the subnet, ``None`` otherwise.
      :rtype: Optional[int]

      The UID is a critical identifier within the network, linking the neuron's hotkey to its operational and governance activities on a particular subnet.



   .. py:method:: tempo(netuid, block = None)

      Returns network Tempo hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If ``None``, the latest block is used. Default is ``None``.
      :type block: Optional[int]

      :returns: The value of the Tempo hyperparameter, or ``None`` if the subnetwork does not exist or the parameter is not found.
      :rtype: Optional[int]



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



   .. py:method:: min_allowed_weights(netuid, block = None)

      Returns network MinAllowedWeights hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If ``None``, the latest block is used. Default is ``None``.
      :type block: Optional[int]

      :returns: The value of the MinAllowedWeights hyperparameter, or ``None`` if the subnetwork does not exist or the parameter is not found.
      :rtype: Optional[int]



   .. py:method:: max_weight_limit(netuid, block = None)

      Returns network MaxWeightsLimit hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If ``None``, the latest block is used. Default is ``None``.
      :type block: Optional[int]

      :returns: The value of the MaxWeightsLimit hyperparameter, or ``None`` if the subnetwork does not exist or the parameter is not found.
      :rtype: Optional[float]



   .. py:method:: get_prometheus_info(netuid, hotkey_ss58, block = None)

      Returns the prometheus information for this hotkey account.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param hotkey_ss58: The SS58 address of the hotkey.
      :type hotkey_ss58: str
      :param block: The block number to retrieve the prometheus information from. If ``None``, the latest block is used. Default is ``None``.
      :type block: Optional[int]

      :returns: A PrometheusInfo object containing the prometheus information, or ``None`` if the prometheus information is not found.
      :rtype: Optional[bittensor.core.chain_data.prometheus_info.PrometheusInfo]



   .. py:method:: subnet_exists(netuid, block = None)

      Checks if a subnet with the specified unique identifier (netuid) exists within the Bittensor network.

      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number at which to check the subnet's existence.
      :type block: Optional[int]

      :returns: ``True`` if the subnet exists, False otherwise.
      :rtype: bool

      This function is critical for verifying the presence of specific subnets in the network, enabling a deeper understanding of the network's structure and composition.



   .. py:method:: bonds(netuid, block = None)

      Retrieves the bond distribution set by neurons within a specific subnet of the Bittensor network. Bonds represent the investments or commitments made by neurons in one another, indicating a level of trust and perceived value. This bonding mechanism is integral to the network's market-based approach to measuring and rewarding machine intelligence.

      :param netuid: The network UID of the subnet to query.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]

      :returns: A list of tuples mapping each neuron's UID to its bonds with other neurons.
      :rtype: list[tuple[int, list[tuple[int, int]]]]

      Understanding bond distributions is crucial for analyzing the trust dynamics and market behavior within the subnet. It reflects how neurons recognize and invest in each other's intelligence and contributions, supporting diverse and niche systems within the Bittensor ecosystem.



   .. py:method:: neurons(netuid, block = None)

      Retrieves a list of all neurons within a specified subnet of the Bittensor network. This function provides a snapshot of the subnet's neuron population, including each neuron's attributes and network interactions.

      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]

      :returns: A list of NeuronInfo objects detailing each neuron's characteristics in the subnet.
      :rtype: list[bittensor.core.chain_data.neuron_info.NeuronInfo]

      Understanding the distribution and status of neurons within a subnet is key to comprehending the network's decentralized structure and the dynamics of its consensus and governance processes.



   .. py:method:: get_total_subnets(block = None)

      Retrieves the total number of subnets within the Bittensor network as of a specific blockchain block.

      :param block: The blockchain block number for the query.
      :type block: Optional[int]

      :returns: The total number of subnets in the network.
      :rtype: Optional[int]

      Understanding the total number of subnets is essential for assessing the network's growth and the extent of its decentralized infrastructure.



   .. py:method:: get_subnets(block = None)

      Retrieves a list of all subnets currently active within the Bittensor network. This function provides an overview of the various subnets and their identifiers.

      :param block: The blockchain block number for the query.
      :type block: Optional[int]

      :returns: A list of network UIDs representing each active subnet.
      :rtype: list[int]

      This function is valuable for understanding the network's structure and the diversity of subnets available for neuron participation and collaboration.



   .. py:method:: neurons_lite(netuid, block = None)

      Retrieves a list of neurons in a 'lite' format from a specific subnet of the Bittensor network. This function provides a streamlined view of the neurons, focusing on key attributes such as stake and network participation.

      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]

      :returns: A list of simplified neuron information for the subnet.
      :rtype: list[bittensor.core.chain_data.neuron_info_lite.NeuronInfoLite]

      This function offers a quick overview of the neuron population within a subnet, facilitating efficient analysis of the network's decentralized structure and neuron dynamics.



   .. py:method:: weights(netuid, block = None)

      Retrieves the weight distribution set by neurons within a specific subnet of the Bittensor network. This function maps each neuron's UID to the weights it assigns to other neurons, reflecting the network's trust and value assignment mechanisms.

      :param netuid: The network UID of the subnet to query.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]

      :returns: A list of tuples mapping each neuron's UID to its assigned weights.
      :rtype: list[tuple[int, list[tuple[int, int]]]]

      The weight distribution is a key factor in the network's consensus algorithm and the ranking of neurons, influencing their influence and reward allocation within the subnet.



   .. py:method:: get_balance(address, block = None)

      Retrieves the token balance of a specific address within the Bittensor network. This function queries the blockchain to determine the amount of Tao held by a given account.

      :param address: The Substrate address in ``ss58`` format.
      :type address: str
      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int]

      :returns: The account balance at the specified block, represented as a Balance object.
      :rtype: bittensor.utils.balance.Balance

      This function is important for monitoring account holdings and managing financial transactions within the Bittensor ecosystem. It helps in assessing the economic status and capacity of network participants.



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



   .. py:method:: get_existential_deposit(block = None)

      Retrieves the existential deposit amount for the Bittensor blockchain. The existential deposit is the minimum amount of TAO required for an account to exist on the blockchain. Accounts with balances below this threshold can be reaped to conserve network resources.

      :param block: Block number at which to query the deposit amount. If ``None``, the current block is used.
      :type block: Optional[int]

      :returns: The existential deposit amount, or ``None`` if the query fails.
      :rtype: Optional[bittensor.utils.balance.Balance]

      The existential deposit is a fundamental economic parameter in the Bittensor network, ensuring efficient use of storage and preventing the proliferation of dust accounts.



   .. py:method:: commit_weights(wallet, netuid, salt, uids, weights, version_key = settings.version_as_int, wait_for_inclusion = False, wait_for_finalization = False, prompt = False, max_retries = 5)

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
      :param version_key: Version key for compatibility with the network. Default is ``int representation of Bittensor version.``.
      :type version_key: int
      :param wait_for_inclusion: Waits for the transaction to be included in a block. Default is ``False``.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain. Default is ``False``.
      :type wait_for_finalization: bool
      :param prompt: If ``True``, prompts for user confirmation before proceeding. Default is ``False``.
      :type prompt: bool
      :param max_retries: The number of maximum attempts to commit weights. Default is ``5``.
      :type max_retries: int

      :returns: ``True`` if the weight commitment is successful, False otherwise. And `msg`, a string
                value describing the success or potential error.
      :rtype: tuple[bool, str]

      This function allows neurons to create a tamper-proof record of their weight distribution at a specific point in time,
      enhancing transparency and accountability within the Bittensor network.



   .. py:method:: reveal_weights(wallet, netuid, uids, weights, salt, version_key = settings.version_as_int, wait_for_inclusion = False, wait_for_finalization = False, prompt = False, max_retries = 5)

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
      :param version_key: Version key for compatibility with the network. Default is ``int representation of Bittensor version``.
      :type version_key: int
      :param wait_for_inclusion: Waits for the transaction to be included in a block. Default is ``False``.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain. Default is ``False``.
      :type wait_for_finalization: bool
      :param prompt: If ``True``, prompts for user confirmation before proceeding. Default is ``False``.
      :type prompt: bool
      :param max_retries: The number of maximum attempts to reveal weights. Default is ``5``.
      :type max_retries: int

      :returns: ``True`` if the weight revelation is successful, False otherwise. And `msg`, a string
                value describing the success or potential error.
      :rtype: tuple[bool, str]

      This function allows neurons to reveal their previously committed weight distribution, ensuring transparency
      and accountability within the Bittensor network.



   .. py:attribute:: _do_serve_prometheus


   .. py:attribute:: _do_serve_axon


