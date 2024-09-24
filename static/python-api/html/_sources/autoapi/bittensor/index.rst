bittensor
=========

.. py:module:: bittensor


Subpackages
-----------

.. toctree::
   :maxdepth: 1

   /autoapi/bittensor/core/index
   /autoapi/bittensor/utils/index


Submodules
----------

.. toctree::
   :maxdepth: 1

   /autoapi/bittensor/__main__/index


Attributes
----------

.. autoapisummary::

   bittensor.__version__
   bittensor.version_split
   bittensor.DEFAULTS
   bittensor.logging
   bittensor.ProposalCallData
   bittensor.T
   bittensor.Metagraph
   bittensor.BLOCKTIME
   bittensor.axon
   bittensor.config
   bittensor.dendrite
   bittensor.keyfile
   bittensor.metagraph
   bittensor.wallet
   bittensor.subtensor
   bittensor.synapse
   bittensor.__blocktime__
   bittensor.__network_explorer_map__
   bittensor.__pipaddress__
   bittensor.__ss58_format__
   bittensor.__type_registry__
   bittensor.__ss58_address_length__
   bittensor.__networks__
   bittensor.__finney_entrypoint__
   bittensor.__finney_test_entrypoint__
   bittensor.__archive_entrypoint__
   bittensor.__local_entrypoint__
   bittensor.__tao_symbol__
   bittensor.__rao_symbol__
   bittensor.mock_subpackage
   bittensor.extrinsics_subpackage


Exceptions
----------

.. autoapisummary::

   bittensor.InvalidConfigFile
   bittensor.BlacklistedException
   bittensor.ChainConnectionError
   bittensor.ChainError
   bittensor.ChainQueryError
   bittensor.ChainTransactionError
   bittensor.IdentityError
   bittensor.InternalServerError
   bittensor.InvalidRequestNameError
   bittensor.MetadataError
   bittensor.NominationError
   bittensor.NotDelegateError
   bittensor.NotRegisteredError
   bittensor.NotVerifiedException
   bittensor.PostProcessException
   bittensor.PriorityException
   bittensor.RegistrationError
   bittensor.RunException
   bittensor.StakeError
   bittensor.SynapseDendriteNoneException
   bittensor.SynapseParsingError
   bittensor.TransferError
   bittensor.UnknownSynapseError
   bittensor.UnstakeError


Classes
-------

.. autoapisummary::

   bittensor.Axon
   bittensor.AxonInfo
   bittensor.NeuronInfo
   bittensor.NeuronInfoLite
   bittensor.PrometheusInfo
   bittensor.DelegateInfo
   bittensor.StakeInfo
   bittensor.SubnetInfo
   bittensor.SubnetHyperparameters
   bittensor.IPInfo
   bittensor.ProposalVoteData
   bittensor.DefaultConfig
   bittensor.Config
   bittensor.Dendrite
   bittensor.StreamingSynapse
   bittensor.Subtensor
   bittensor.TerminalInfo
   bittensor.Synapse
   bittensor.Tensor
   bittensor.PriorityThreadPoolExecutor
   bittensor.Balance
   bittensor.MockSubtensor
   bittensor.SubnetsAPI


Functions
---------

.. autoapisummary::

   bittensor.ss58_to_vec_u8
   bittensor.version_checking
   bittensor.strtobool
   bittensor.get_explorer_url_for_network
   bittensor.ss58_address_to_bytes
   bittensor.u16_normalized_float
   bittensor.u64_normalized_float
   bittensor.get_hash
   bittensor.trace
   bittensor.debug
   bittensor.__getattr__


Package Contents
----------------

.. py:data:: __version__

.. py:data:: version_split

.. py:data:: DEFAULTS

.. py:data:: logging

.. py:class:: Axon(wallet = None, config = None, port = None, ip = None, external_ip = None, external_port = None, max_workers = None)

   The ``Axon`` class in Bittensor is a fundamental component that serves as the server-side interface for a neuron within the Bittensor network.

   This class is responsible for managing
   incoming requests from other neurons and implements various mechanisms to ensure efficient
   and secure network interactions.

   An axon relies on a FastAPI router to create endpoints for different message types. These
   endpoints are crucial for handling various request types that a neuron might receive. The
   class is designed to be flexible and customizable, allowing users to specify custom rules
   for forwarding, blacklisting, prioritizing, and verifying incoming requests. The class also
   includes internal mechanisms to manage a thread pool, supporting concurrent handling of
   requests with defined priority levels.

   Methods in this class are equipped to deal with incoming requests from various scenarios in the
   network and serve as the server face for a neuron. It accepts multiple arguments, like wallet,
   configuration parameters, ip address, server binding  port, external ip, external port and max
   workers. Key methods involve managing and operating the FastAPI application router, including
   the attachment and operation of endpoints.

   Key Features:

   - FastAPI router integration for endpoint creation and management.
   - Customizable request handling including forwarding, blacklisting, and prioritization.
   - Verification of incoming requests against custom-defined functions.
   - Thread pool management for concurrent request handling.
   - Command-line argument support for user-friendly program interaction.

   Example Usage::

       import bittensor
       # Define your custom synapse class
       class MySynapse( bittensor.Synapse ):
           input: int = 1
           output: int = None

       # Define a custom request forwarding function using your synapse class
       def forward( synapse: MySynapse ) -> MySynapse:
           # Apply custom logic to synapse and return it
           synapse.output = 2
           return synapse

       # Define a custom request verification function
       def verify_my_synapse( synapse: MySynapse ):
           # Apply custom verification logic to synapse
           # Optionally raise Exception
           assert synapse.input == 1
           ...

       # Define a custom request blacklist function
       def blacklist_my_synapse( synapse: MySynapse ) -> bool:
           # Apply custom blacklist
           return False ( if non blacklisted ) or True ( if blacklisted )

       # Define a custom request priority function
       def prioritize_my_synapse( synapse: MySynapse ) -> float:
           # Apply custom priority
           return 1.0

       # Initialize Axon object with a custom configuration
       my_axon = bittensor.Axon(
           config=my_config,
           wallet=my_wallet,
           port=9090,
           ip="192.0.2.0",
           external_ip="203.0.113.0",
           external_port=7070
       )

       # Attach the endpoint with the specified verification and forward functions.
       my_axon.attach(
           forward_fn = forward_my_synapse,
           verify_fn = verify_my_synapse,
           blacklist_fn = blacklist_my_synapse,
           priority_fn = prioritize_my_synapse
       )

       # Serve and start your axon.
       my_axon.serve(
           netuid = ...
           subtensor = ...
       ).start()

       # If you have multiple forwarding functions, you can chain attach them.
       my_axon.attach(
           forward_fn = forward_my_synapse,
           verify_fn = verify_my_synapse,
           blacklist_fn = blacklist_my_synapse,
           priority_fn = prioritize_my_synapse
       ).attach(
           forward_fn = forward_my_synapse_2,
           verify_fn = verify_my_synapse_2,
           blacklist_fn = blacklist_my_synapse_2,
           priority_fn = prioritize_my_synapse_2
       ).serve(
           netuid = ...
           subtensor = ...
       ).start()

   :param wallet: Wallet with hotkey and coldkeypub.
   :type wallet: Optional[bittensor_wallet.Wallet]
   :param config: Configuration parameters for the axon.
   :type config: Optional[bittensor.core.config.Config]
   :param port: Port for server binding.
   :type port: Optional[int]
   :param ip: Binding IP address.
   :type ip: Optional[str]
   :param external_ip: External IP address to broadcast.
   :type external_ip: Optional[str]
   :param external_port: External port to broadcast.
   :type external_port: Optional[int]
   :param max_workers: Number of active threads for request handling.
   :type max_workers: Optional[int]

   :returns: An instance of the axon class configured as per the provided arguments.
   :rtype: bittensor.core.axon.Axon

   .. note::

      This class is a core part of Bittensor's decentralized network for machine intelligence,
      allowing neurons to communicate effectively and securely.

   Importance and Functionality
       Endpoint Registration
           This method dynamically registers API endpoints based on the Synapse used, allowing the Axon to respond to specific types of requests and synapses.

       Customization of Request Handling
           By attaching different functions, the Axon can customize how it
           handles, verifies, prioritizes, and potentially blocks incoming requests, making it adaptable to various network scenarios.

       Security and Efficiency
           The method contributes to both the security (via verification and blacklisting) and efficiency (via prioritization) of request handling, which are crucial in a decentralized network environment.

       Flexibility
           The ability to define custom functions for different aspects of request handling provides great flexibility, allowing the Axon to be tailored to specific needs and use cases within the Bittensor network.

       Error Handling and Validation
           The method ensures that the attached functions meet the required
           signatures, providing error handling to prevent runtime issues.

   Creates a new bittensor.Axon object from passed arguments.

   :param config: bittensor.Axon.config()
   :type config: :obj:`Optional[bittensor.core.config.Config]`
   :param wallet: bittensor wallet with hotkey and coldkeypub.
   :type wallet: :obj:`Optional[bittensor_wallet.Wallet]`
   :param port: Binding port.
   :type port: :type:`Optional[int]`
   :param ip: Binding ip.
   :type ip: :type:`Optional[str]`
   :param external_ip: The external ip of the server to broadcast to the network.
   :type external_ip: :type:`Optional[str]`
   :param external_port: The external port of the server to broadcast to the network.
   :type external_port: :type:`Optional[int]`
   :param max_workers: Used to create the threadpool if not passed, specifies the number of active threads servicing requests.
   :type max_workers: :type:`Optional[int]`


   .. py:attribute:: config


   .. py:attribute:: ip


   .. py:attribute:: port


   .. py:attribute:: external_ip


   .. py:attribute:: external_port


   .. py:attribute:: max_workers


   .. py:attribute:: wallet


   .. py:attribute:: uuid


   .. py:attribute:: full_address


   .. py:attribute:: started
      :value: False



   .. py:attribute:: thread_pool


   .. py:attribute:: nonces
      :type:  dict[str, int]


   .. py:attribute:: forward_class_types
      :type:  dict[str, list[inspect.Signature]]


   .. py:attribute:: blacklist_fns
      :type:  dict[str, Optional[Callable]]


   .. py:attribute:: priority_fns
      :type:  dict[str, Optional[Callable]]


   .. py:attribute:: forward_fns
      :type:  dict[str, Optional[Callable]]


   .. py:attribute:: verify_fns
      :type:  dict[str, Optional[Callable]]


   .. py:attribute:: app


   .. py:attribute:: log_level


   .. py:attribute:: fast_config


   .. py:attribute:: fast_server


   .. py:attribute:: router


   .. py:attribute:: middleware_cls


   .. py:method:: info()

      Returns the axon info object associated with this axon.



   .. py:method:: attach(forward_fn, blacklist_fn = None, priority_fn = None, verify_fn = None)

      Attaches custom functions to the Axon server for handling incoming requests. This method enables
      the ``Axon`` to define specific behaviors for request forwarding, verification, blacklisting, and
      prioritization, thereby customizing its interaction within the Bittensor network.

      Registers an API endpoint to the FastAPI application router.
      It uses the name of the first argument of the :func:`forward_fn` function as the endpoint name.

      The :func:`attach` method in the Bittensor framework's axon class is a crucial function for registering
      API endpoints to the Axon's FastAPI application router. This method allows the Axon server to
      define how it handles incoming requests by attaching functions for forwarding, verifying,
      blacklisting, and prioritizing requests. It's a key part of customizing the server's behavior
      and ensuring efficient and secure handling of requests within the Bittensor network.

      :param forward_fn: Function to be called when the API endpoint is accessed. It should have at least one argument.
      :type forward_fn: Callable
      :param blacklist_fn: Function to filter out undesired requests. It should take the same arguments as :func:`forward_fn` and return a boolean value. Defaults to ``None``, meaning no blacklist filter will be used.
      :type blacklist_fn: Optional[Callable]
      :param priority_fn: Function to rank requests based on their priority. It should take the same arguments as :func:`forward_fn` and return a numerical value representing the request's priority. Defaults to ``None``, meaning no priority sorting will be applied.
      :type priority_fn: Optional[Callable]
      :param verify_fn: Function to verify requests. It should take the same arguments as :func:`forward_fn` and return a boolean value. If ``None``, :func:`self.default_verify` function will be used.
      :type verify_fn: Optional[Callable]

      .. note:: The methods :func:`forward_fn`, :func:`blacklist_fn`, :func:`priority_fn`, and :func:`verify_fn` should be designed to receive the same parameters.

      :raises AssertionError: If :func:`forward_fn` does not have the signature: ``forward( synapse: YourSynapse ) -> synapse``.
      :raises AssertionError: If :func:`blacklist_fn` does not have the signature: ``blacklist( synapse: YourSynapse ) -> bool``.
      :raises AssertionError: If :func:`priority_fn` does not have the signature: ``priority( synapse: YourSynapse ) -> float``.
      :raises AssertionError: If :func:`verify_fn` does not have the signature: ``verify( synapse: YourSynapse ) -> None``.

      :returns: Returns the instance of the AxonServer class for potential method chaining.
      :rtype: self

      Example Usage::

          def forward_custom(synapse: MyCustomSynapse) -> MyCustomSynapse:
              # Custom logic for processing the request
              return synapse

          def blacklist_custom(synapse: MyCustomSynapse) -> tuple[bool, str]:
              return True, "Allowed!"

          def priority_custom(synapse: MyCustomSynapse) -> float:
              return 1.0

          def verify_custom(synapse: MyCustomSynapse):
              # Custom logic for verifying the request
              pass

          my_axon = bittensor.Axon(...)
          my_axon.attach(forward_fn=forward_custom, verify_fn=verify_custom)

      .. note::

         The :func:`attach` method is fundamental in setting up the Axon server's request handling capabilities,
         enabling it to participate effectively and securely in the Bittensor network. The flexibility
         offered by this method allows developers to tailor the Axon's behavior to specific requirements and
         use cases.



   .. py:method:: help()
      :classmethod:


      Prints the help text (list of command-line arguments and their descriptions) to stdout.



   .. py:method:: add_args(parser, prefix = None)
      :classmethod:


      Adds AxonServer-specific command-line arguments to the argument parser.

      :param parser: Argument parser to which the arguments will be added.
      :type parser: argparse.ArgumentParser
      :param prefix: Prefix to add to the argument names. Defaults to None.
      :type prefix: Optional[str]

      .. note:: Environment variables are used to define default values for the arguments.



   .. py:method:: verify_body_integrity(request)
      :async:


      The ``verify_body_integrity`` method in the Bittensor framework is a key security function within the
      Axon server's middleware. It is responsible for ensuring the integrity of the body of incoming HTTP
      requests.

      It asynchronously verifies the integrity of the body of a request by comparing the hash of required fields
      with the corresponding hashes provided in the request headers. This method is critical for ensuring
      that the incoming request payload has not been altered or tampered with during transmission, establishing
      a level of trust and security between the sender and receiver in the network.

      :param request: The incoming FastAPI request object containing both headers and the request body.
      :type request: Request

      :returns: Returns the parsed body of the request as a dictionary if all the hash comparisons match, indicating that the body is intact and has not been tampered with.
      :rtype: dict

      :raises JSONResponse: Raises a JSONResponse with a 400 status code if any of the hash comparisons fail, indicating a potential integrity issue with the incoming request payload. The response includes the detailed error message specifying which field has a hash mismatch.

      This method performs several key functions:

      1. Decoding and loading the request body for inspection.
      2. Gathering required field names for hash comparison from the Axon configuration.
      3. Loading and parsing the request body into a dictionary.
      4. Reconstructing the Synapse object and recomputing the hash for verification and logging.
      5. Comparing the recomputed hash with the hash provided in the request headers for verification.

      .. note:: The integrity verification is an essential step in ensuring the security of the data exchange within the Bittensor network. It helps prevent tampering and manipulation of data during transit, thereby maintaining the reliability and trust in the network communication.



   .. py:method:: check_config(config)
      :classmethod:


      This method checks the configuration for the axon's port and wallet.

      :param config: The config object holding axon settings.
      :type config: bittensor.core.config.Config

      :raises AssertionError: If the axon or external ports are not in range [1024, 65535]



   .. py:method:: to_string()

      Provides a human-readable representation of the AxonInfo for this Axon.



   .. py:method:: __str__()

      Provides a human-readable representation of the Axon instance.



   .. py:method:: __repr__()

      Provides a machine-readable (unambiguous) representation of the Axon instance.
      It is made identical to __str__ in this case.



   .. py:method:: __del__()

      This magic method is called when the Axon object is about to be destroyed.
      It ensures that the Axon server shuts down properly.



   .. py:method:: start()

      Starts the Axon server and its underlying FastAPI server thread, transitioning the state of the
      Axon instance to ``started``. This method initiates the server's ability to accept and process
      incoming network requests, making it an active participant in the Bittensor network.

      The start method triggers the FastAPI server associated with the Axon to begin listening for
      incoming requests. It is a crucial step in making the neuron represented by this Axon operational
      within the Bittensor network.

      :returns: The Axon instance in the 'started' state.
      :rtype: bittensor.core.axon.Axon

      Example::

          my_axon = bittensor.Axon(...)
          ... # setup axon, attach functions, etc.
          my_axon.start()  # Starts the axon server

      .. note:: After invoking this method, the Axon is ready to handle requests as per its configured endpoints and custom logic.



   .. py:method:: stop()

      Stops the Axon server and its underlying GRPC server thread, transitioning the state of the Axon
      instance to ``stopped``. This method ceases the server's ability to accept new network requests,
      effectively removing the neuron's server-side presence in the Bittensor network.

      By stopping the FastAPI server, the Axon ceases to listen for incoming requests, and any existing
      connections are gracefully terminated. This function is typically used when the neuron is being
      shut down or needs to temporarily go offline.

      :returns: The Axon instance in the 'stopped' state.
      :rtype: bittensor.core.axon.Axon

      Example::

          my_axon = bittensor.Axon(...)
          my_axon.start()
          ...
          my_axon.stop()  # Stops the axon server


      .. note:: It is advisable to ensure that all ongoing processes or requests are completed or properly handled before invoking this method.



   .. py:method:: serve(netuid, subtensor = None)

      Serves the Axon on the specified subtensor connection using the configured wallet. This method
      registers the Axon with a specific subnet within the Bittensor network, identified by the ``netuid``.
      It links the Axon to the broader network, allowing it to participate in the decentralized exchange
      of information.

      :param netuid: The unique identifier of the subnet to register on. This ID is essential for the Axon to correctly position itself within the Bittensor network topology.
      :type netuid: int
      :param subtensor: The subtensor connection to use for serving. If not provided, a new connection is established based on default configurations.
      :type subtensor: Optional[bittensor.core.subtensor.Subtensor]

      :returns: The Axon instance that is now actively serving on the specified subtensor.
      :rtype: bittensor.core.axon.Axon

      Example::

          my_axon = bittensor.Axon(...)
          subtensor = bt.subtensor(network="local") # Local by default
          my_axon.serve(netuid=1, subtensor=subtensor)  # Serves the axon on subnet with netuid 1

      .. note::

         The ``serve`` method is crucial for integrating the Axon into the Bittensor network, allowing it
         to start receiving and processing requests from other neurons.



   .. py:method:: default_verify(synapse)
      :async:


      This method is used to verify the authenticity of a received message using a digital signature.

      It ensures that the message was not tampered with and was sent by the expected sender.

      The :func:`default_verify` method in the Bittensor framework is a critical security function within the
      Axon server. It is designed to authenticate incoming messages by verifying their digital
      signatures. This verification ensures the integrity of the message and confirms that it was
      indeed sent by the claimed sender. The method plays a pivotal role in maintaining the trustworthiness
      and reliability of the communication within the Bittensor network.

      Key Features
          Security Assurance
              The default_verify method is crucial for ensuring the security of the Bittensor network. By verifying digital signatures, it guards against unauthorized access
              and data manipulation.

          Preventing Replay Attacks
              The method checks for increasing nonce values, which is a vital
              step in preventing replay attacks. A replay attack involves an adversary reusing or
              delaying the transmission of a valid data transmission to deceive the receiver.
              The first time a nonce is seen, it is checked for freshness by ensuring it is
              within an acceptable delta time range.

          Authenticity and Integrity Checks
              By verifying that the message's digital signature matches
              its content, the method ensures the message's authenticity (it comes from the claimed
              sender) and integrity (it hasn't been altered during transmission).

          Trust in Communication
              This method fosters trust in the network communication. Neurons
              (nodes in the Bittensor network) can confidently interact, knowing that the messages they
              receive are genuine and have not been tampered with.

          Cryptographic Techniques
              The method's reliance on asymmetric encryption techniques is a
              cornerstone of modern cryptographic security, ensuring that only entities with the correct
              cryptographic keys can participate in secure communication.

      :param synapse: bittensor request synapse.
      :type synapse: bittensor.core.synapse.Synapse

      :raises Exception: If the ``receiver_hotkey`` doesn't match with ``self.receiver_hotkey``.
      :raises Exception: If the nonce is not larger than the previous nonce for the same endpoint key.
      :raises Exception: If the signature verification fails.

      After successful verification, the nonce for the given endpoint key is updated.

      .. note::

         The verification process assumes the use of an asymmetric encryption algorithm,
         where the sender signs the message with their private key and the receiver verifies the
         signature using the sender's public key.



.. py:class:: AxonInfo

   The :obj:`AxonInfo` class represents information about an axon endpoint in the Bittensor network. This includes
   properties such as IP address, ports, and relevant keys.

   :ivar version: The version of the axon endpoint.
   :vartype version: int
   :ivar ip: The IP address of the axon endpoint.
   :vartype ip: str
   :ivar port: The port number the axon endpoint uses.
   :vartype port: int
   :ivar ip_type: The type of IP protocol (e.g., IPv4 or IPv6).
   :vartype ip_type: int
   :ivar hotkey: The hotkey associated with the axon endpoint.
   :vartype hotkey: str
   :ivar coldkey: The coldkey associated with the axon endpoint.
   :vartype coldkey: str
   :ivar protocol: The protocol version (default is 4).
   :vartype protocol: int
   :ivar placeholder1: Reserved field (default is 0).
   :vartype placeholder1: int
   :ivar placeholder2: Reserved field (default is 0).

   :vartype placeholder2: int


   .. py:attribute:: version
      :type:  int


   .. py:attribute:: ip
      :type:  str


   .. py:attribute:: port
      :type:  int


   .. py:attribute:: ip_type
      :type:  int


   .. py:attribute:: hotkey
      :type:  str


   .. py:attribute:: coldkey
      :type:  str


   .. py:attribute:: protocol
      :type:  int
      :value: 4



   .. py:attribute:: placeholder1
      :type:  int
      :value: 0



   .. py:attribute:: placeholder2
      :type:  int
      :value: 0



   .. py:property:: is_serving
      :type: bool

      True if the endpoint is serving.


   .. py:method:: ip_str()

      Return the whole IP as string



   .. py:method:: __eq__(other)


   .. py:method:: __str__()


   .. py:method:: __repr__()


   .. py:method:: to_string()

      Converts the :obj:`AxonInfo` object to a string representation using JSON.



   .. py:method:: from_string(json_string)
      :classmethod:


      Creates an :obj:`AxonInfo` object from its string representation using JSON.

      :param json_string: The JSON string representation of the :obj:`AxonInfo` object.
      :type json_string: str

      :returns: An instance of :obj:`AxonInfo` created from the JSON string. If decoding fails, returns a default :obj:`AxonInfo` object with default values.
      :rtype: AxonInfo

      :raises json.JSONDecodeError: If there is an error in decoding the JSON string.
      :raises TypeError: If there is a type error when creating the :obj:`AxonInfo` object.
      :raises ValueError: If there is a value error when creating the :obj:`AxonInfo` object.



   .. py:method:: from_neuron_info(neuron_info)
      :classmethod:


      Converts a dictionary to an :obj:`AxonInfo` object.

      :param neuron_info: A dictionary containing the neuron information.
      :type neuron_info: dict

      :returns: An instance of :obj:`AxonInfo` created from the dictionary.
      :rtype: instance (AxonInfo)



   .. py:method:: to_parameter_dict()

      Returns a torch tensor or dict of the subnet info, depending on the USE_TORCH flag set.



   .. py:method:: from_parameter_dict(parameter_dict)
      :classmethod:


      Returns an axon_info object from a torch parameter_dict or a parameter dict.



.. py:class:: NeuronInfo

   Represents the metadata of a neuron including keys, UID, stake, rankings, and other attributes.

   :ivar hotkey: The hotkey associated with the neuron.
   :vartype hotkey: str
   :ivar coldkey: The coldkey associated with the neuron.
   :vartype coldkey: str
   :ivar uid: The unique identifier for the neuron.
   :vartype uid: int
   :ivar netuid: The network unique identifier for the neuron.
   :vartype netuid: int
   :ivar active: The active status of the neuron.
   :vartype active: int
   :ivar stake: The balance staked to this neuron.
   :vartype stake: Balance
   :ivar stake_dict: A dictionary mapping coldkey to the amount staked.
   :vartype stake_dict: dict[str, Balance]
   :ivar total_stake: The total amount of stake.
   :vartype total_stake: Balance
   :ivar rank: The rank score of the neuron.
   :vartype rank: float
   :ivar emission: The emission rate.
   :vartype emission: float
   :ivar incentive: The incentive value.
   :vartype incentive: float
   :ivar consensus: The consensus score.
   :vartype consensus: float
   :ivar trust: The trust score.
   :vartype trust: float
   :ivar validator_trust: The validation trust score.
   :vartype validator_trust: float
   :ivar dividends: The dividends value.
   :vartype dividends: float
   :ivar last_update: The timestamp of the last update.
   :vartype last_update: int
   :ivar validator_permit: Validator permit status.
   :vartype validator_permit: bool
   :ivar weights: List of weights associated with the neuron.
   :vartype weights: list[list[int]]
   :ivar bonds: List of bonds associated with the neuron.
   :vartype bonds: list[list[int]]
   :ivar pruning_score: The pruning score of the neuron.
   :vartype pruning_score: int
   :ivar prometheus_info: Information related to Prometheus.
   :vartype prometheus_info: Optional[PrometheusInfo]
   :ivar axon_info: Information related to Axon.
   :vartype axon_info: Optional[AxonInfo]
   :ivar is_null: Indicator if this is a null neuron.

   :vartype is_null: bool


   .. py:attribute:: hotkey
      :type:  str


   .. py:attribute:: coldkey
      :type:  str


   .. py:attribute:: uid
      :type:  int


   .. py:attribute:: netuid
      :type:  int


   .. py:attribute:: active
      :type:  int


   .. py:attribute:: stake
      :type:  bittensor.utils.balance.Balance


   .. py:attribute:: stake_dict
      :type:  dict[str, bittensor.utils.balance.Balance]


   .. py:attribute:: total_stake
      :type:  bittensor.utils.balance.Balance


   .. py:attribute:: rank
      :type:  float


   .. py:attribute:: emission
      :type:  float


   .. py:attribute:: incentive
      :type:  float


   .. py:attribute:: consensus
      :type:  float


   .. py:attribute:: trust
      :type:  float


   .. py:attribute:: validator_trust
      :type:  float


   .. py:attribute:: dividends
      :type:  float


   .. py:attribute:: last_update
      :type:  int


   .. py:attribute:: validator_permit
      :type:  bool


   .. py:attribute:: weights
      :type:  list[list[int]]


   .. py:attribute:: bonds
      :type:  list[list[int]]


   .. py:attribute:: pruning_score
      :type:  int


   .. py:attribute:: prometheus_info
      :type:  Optional[bittensor.core.chain_data.prometheus_info.PrometheusInfo]
      :value: None



   .. py:attribute:: axon_info
      :type:  Optional[bittensor.core.chain_data.axon_info.AxonInfo]
      :value: None



   .. py:attribute:: is_null
      :type:  bool
      :value: False



   .. py:method:: from_weights_bonds_and_neuron_lite(neuron_lite, weights_as_dict, bonds_as_dict)
      :classmethod:


      Creates an instance of NeuronInfo from NeuronInfoLite and dictionaries of weights and bonds.

      :param neuron_lite: A lite version of the neuron containing basic attributes.
      :type neuron_lite: NeuronInfoLite
      :param weights_as_dict: A dictionary where the key is the UID and the value is a list of weight tuples associated with the neuron.
      :type weights_as_dict: dict[int, list[tuple[int, int]]]
      :param bonds_as_dict: A dictionary where the key is the UID and the value is a list of bond tuples associated with the neuron.
      :type bonds_as_dict: dict[int, list[tuple[int, int]]]

      :returns: An instance of NeuronInfo populated with the provided weights and bonds.
      :rtype: NeuronInfo



   .. py:method:: get_null_neuron()
      :staticmethod:


      Returns a null NeuronInfo instance.



   .. py:method:: from_vec_u8(vec_u8)
      :classmethod:


      Instantiates NeuronInfo from a byte vector.



.. py:class:: NeuronInfoLite

   NeuronInfoLite is a dataclass representing neuron metadata without weights and bonds.

   :ivar hotkey: The hotkey string for the neuron.
   :vartype hotkey: str
   :ivar coldkey: The coldkey string for the neuron.
   :vartype coldkey: str
   :ivar uid: A unique identifier for the neuron.
   :vartype uid: int
   :ivar netuid: Network unique identifier for the neuron.
   :vartype netuid: int
   :ivar active: Indicates whether the neuron is active.
   :vartype active: int
   :ivar stake: The stake amount associated with the neuron.
   :vartype stake: Balance
   :ivar stake_dict: Mapping of coldkey to the amount staked to this Neuron.
   :vartype stake_dict: dict
   :ivar total_stake: Total amount of the stake.
   :vartype total_stake: Balance
   :ivar rank: The rank of the neuron.
   :vartype rank: float
   :ivar emission: The emission value of the neuron.
   :vartype emission: float
   :ivar incentive: The incentive value of the neuron.
   :vartype incentive: float
   :ivar consensus: The consensus value of the neuron.
   :vartype consensus: float
   :ivar trust: Trust value of the neuron.
   :vartype trust: float
   :ivar validator_trust: Validator trust value of the neuron.
   :vartype validator_trust: float
   :ivar dividends: Dividends associated with the neuron.
   :vartype dividends: float
   :ivar last_update: Timestamp of the last update.
   :vartype last_update: int
   :ivar validator_permit: Indicates if the neuron has a validator permit.
   :vartype validator_permit: bool
   :ivar prometheus_info: Prometheus information associated with the neuron.
   :vartype prometheus_info: Optional[PrometheusInfo]
   :ivar axon_info: Axon information associated with the neuron.
   :vartype axon_info: Optional[AxonInfo]
   :ivar pruning_score: The pruning score of the neuron.
   :vartype pruning_score: int
   :ivar is_null: Indicates whether the neuron is null.

   :vartype is_null: bool

   .. method:: get_null_neuron

      Returns a NeuronInfoLite object representing a null neuron.

   .. method:: list_from_vec_u8

      Decodes a bytes object into a list of NeuronInfoLite instances.
      


   .. py:attribute:: hotkey
      :type:  str


   .. py:attribute:: coldkey
      :type:  str


   .. py:attribute:: uid
      :type:  int


   .. py:attribute:: netuid
      :type:  int


   .. py:attribute:: active
      :type:  int


   .. py:attribute:: stake
      :type:  bittensor.utils.balance.Balance


   .. py:attribute:: stake_dict
      :type:  dict[str, bittensor.utils.balance.Balance]


   .. py:attribute:: total_stake
      :type:  bittensor.utils.balance.Balance


   .. py:attribute:: rank
      :type:  float


   .. py:attribute:: emission
      :type:  float


   .. py:attribute:: incentive
      :type:  float


   .. py:attribute:: consensus
      :type:  float


   .. py:attribute:: trust
      :type:  float


   .. py:attribute:: validator_trust
      :type:  float


   .. py:attribute:: dividends
      :type:  float


   .. py:attribute:: last_update
      :type:  int


   .. py:attribute:: validator_permit
      :type:  bool


   .. py:attribute:: prometheus_info
      :type:  Optional[bittensor.core.chain_data.prometheus_info.PrometheusInfo]


   .. py:attribute:: axon_info
      :type:  Optional[bittensor.core.chain_data.axon_info.AxonInfo]


   .. py:attribute:: pruning_score
      :type:  int


   .. py:attribute:: is_null
      :type:  bool
      :value: False



   .. py:method:: get_null_neuron()
      :staticmethod:


      Returns a null NeuronInfoLite instance.



   .. py:method:: list_from_vec_u8(vec_u8)
      :classmethod:


      Decodes a bytes object into a list of NeuronInfoLite instances.

      :param vec_u8: The bytes object to decode into NeuronInfoLite instances.
      :type vec_u8: bytes

      :returns: A list of NeuronInfoLite instances decoded from the provided bytes object.
      :rtype: list[NeuronInfoLite]



.. py:class:: PrometheusInfo

   Dataclass representing information related to Prometheus.

   :ivar block: The block number associated with the Prometheus data.
   :vartype block: int
   :ivar version: The version of the Prometheus data.
   :vartype version: int
   :ivar ip: The IP address associated with Prometheus.
   :vartype ip: str
   :ivar port: The port number for Prometheus.
   :vartype port: int
   :ivar ip_type: The type of IP address (e.g., IPv4, IPv6).

   :vartype ip_type: int


   .. py:attribute:: block
      :type:  int


   .. py:attribute:: version
      :type:  int


   .. py:attribute:: ip
      :type:  str


   .. py:attribute:: port
      :type:  int


   .. py:attribute:: ip_type
      :type:  int


   .. py:method:: fix_decoded_values(prometheus_info_decoded)
      :classmethod:


      Returns a PrometheusInfo object from a prometheus_info_decoded dictionary.



.. py:class:: DelegateInfo

   Dataclass for delegate information. For a lighter version of this class, see :class:`bittensor.core.chain_data.delegate_info_lite`.

   :param hotkey_ss58: Hotkey of the delegate for which the information is being fetched.
   :type hotkey_ss58: str
   :param total_stake: Total stake of the delegate.
   :type total_stake: int
   :param nominators: List of nominators of the delegate and their stake.
   :type nominators: list[tuple[str, int]]
   :param take: Take of the delegate as a percentage.
   :type take: float
   :param owner_ss58: Coldkey of the owner.
   :type owner_ss58: str
   :param registrations: List of subnets that the delegate is registered on.
   :type registrations: list[int]
   :param validator_permits: List of subnets that the delegate is allowed to validate on.
   :type validator_permits: list[int]
   :param return_per_1000: Return per 1000 TAO, for the delegate over a day.
   :type return_per_1000: int
   :param total_daily_return: Total daily return of the delegate.
   :type total_daily_return: int


   .. py:attribute:: hotkey_ss58
      :type:  str


   .. py:attribute:: total_stake
      :type:  bittensor.utils.balance.Balance


   .. py:attribute:: nominators
      :type:  list[tuple[str, bittensor.utils.balance.Balance]]


   .. py:attribute:: owner_ss58
      :type:  str


   .. py:attribute:: take
      :type:  float


   .. py:attribute:: validator_permits
      :type:  list[int]


   .. py:attribute:: registrations
      :type:  tuple[int]


   .. py:attribute:: return_per_1000
      :type:  bittensor.utils.balance.Balance


   .. py:attribute:: total_daily_return
      :type:  bittensor.utils.balance.Balance


   .. py:method:: fix_decoded_values(decoded)
      :classmethod:


      Fixes the decoded values.



   .. py:method:: from_vec_u8(vec_u8)
      :classmethod:


      Returns a DelegateInfo object from a ``vec_u8``.



   .. py:method:: list_from_vec_u8(vec_u8)
      :classmethod:


      Returns a list of DelegateInfo objects from a ``vec_u8``.



   .. py:method:: delegated_list_from_vec_u8(vec_u8)
      :classmethod:


      Returns a list of Tuples of DelegateInfo objects, and Balance, from a ``vec_u8``.

      This is the list of delegates that the user has delegated to, and the amount of stake delegated.



.. py:class:: StakeInfo

   Dataclass for representing stake information linked to hotkey and coldkey pairs.

   :ivar hotkey_ss58: The SS58 encoded hotkey address.
   :vartype hotkey_ss58: str
   :ivar coldkey_ss58: The SS58 encoded coldkey address.
   :vartype coldkey_ss58: str
   :ivar stake: The stake associated with the hotkey-coldkey pair, represented as a Balance object.

   :vartype stake: Balance


   .. py:attribute:: hotkey_ss58
      :type:  str


   .. py:attribute:: coldkey_ss58
      :type:  str


   .. py:attribute:: stake
      :type:  bittensor.utils.balance.Balance


   .. py:method:: fix_decoded_values(decoded)
      :classmethod:


      Fixes the decoded values.



   .. py:method:: from_vec_u8(vec_u8)
      :classmethod:


      Returns a StakeInfo object from a ``vec_u8``.



   .. py:method:: list_of_tuple_from_vec_u8(vec_u8)
      :classmethod:


      Returns a list of StakeInfo objects from a ``vec_u8``.



   .. py:method:: list_from_vec_u8(vec_u8)
      :classmethod:


      Returns a list of StakeInfo objects from a ``vec_u8``.



.. py:class:: SubnetInfo

   Dataclass for subnet info.


   .. py:attribute:: netuid
      :type:  int


   .. py:attribute:: rho
      :type:  int


   .. py:attribute:: kappa
      :type:  int


   .. py:attribute:: difficulty
      :type:  int


   .. py:attribute:: immunity_period
      :type:  int


   .. py:attribute:: max_allowed_validators
      :type:  int


   .. py:attribute:: min_allowed_weights
      :type:  int


   .. py:attribute:: max_weight_limit
      :type:  float


   .. py:attribute:: scaling_law_power
      :type:  float


   .. py:attribute:: subnetwork_n
      :type:  int


   .. py:attribute:: max_n
      :type:  int


   .. py:attribute:: blocks_since_epoch
      :type:  int


   .. py:attribute:: tempo
      :type:  int


   .. py:attribute:: modality
      :type:  int


   .. py:attribute:: connection_requirements
      :type:  dict[str, float]


   .. py:attribute:: emission_value
      :type:  float


   .. py:attribute:: burn
      :type:  bittensor.utils.balance.Balance


   .. py:attribute:: owner_ss58
      :type:  str


   .. py:method:: from_vec_u8(vec_u8)
      :classmethod:


      Returns a SubnetInfo object from a ``vec_u8``.



   .. py:method:: list_from_vec_u8(vec_u8)
      :classmethod:


      Returns a list of SubnetInfo objects from a ``vec_u8``.



   .. py:method:: fix_decoded_values(decoded)
      :classmethod:


      Returns a SubnetInfo object from a decoded SubnetInfo dictionary.



   .. py:method:: to_parameter_dict()

      Returns a torch tensor or dict of the subnet info.



   .. py:method:: from_parameter_dict(parameter_dict)
      :classmethod:


      Creates a SubnetInfo instance from a parameter dictionary.



.. py:class:: SubnetHyperparameters

   This class represents the hyperparameters for a subnet.

   :ivar rho: The rate of decay of some value.
   :vartype rho: int
   :ivar kappa: A constant multiplier used in calculations.
   :vartype kappa: int
   :ivar immunity_period: The period during which immunity is active.
   :vartype immunity_period: int
   :ivar min_allowed_weights: Minimum allowed weights.
   :vartype min_allowed_weights: int
   :ivar max_weight_limit: Maximum weight limit.
   :vartype max_weight_limit: float
   :ivar tempo: The tempo or rate of operation.
   :vartype tempo: int
   :ivar min_difficulty: Minimum difficulty for some operations.
   :vartype min_difficulty: int
   :ivar max_difficulty: Maximum difficulty for some operations.
   :vartype max_difficulty: int
   :ivar weights_version: The version number of the weights used.
   :vartype weights_version: int
   :ivar weights_rate_limit: Rate limit for processing weights.
   :vartype weights_rate_limit: int
   :ivar adjustment_interval: Interval at which adjustments are made.
   :vartype adjustment_interval: int
   :ivar activity_cutoff: Activity cutoff threshold.
   :vartype activity_cutoff: int
   :ivar registration_allowed: Indicates if registration is allowed.
   :vartype registration_allowed: bool
   :ivar target_regs_per_interval: Target number of registrations per interval.
   :vartype target_regs_per_interval: int
   :ivar min_burn: Minimum burn value.
   :vartype min_burn: int
   :ivar max_burn: Maximum burn value.
   :vartype max_burn: int
   :ivar bonds_moving_avg: Moving average of bonds.
   :vartype bonds_moving_avg: int
   :ivar max_regs_per_block: Maximum number of registrations per block.
   :vartype max_regs_per_block: int
   :ivar serving_rate_limit: Limit on the rate of service.
   :vartype serving_rate_limit: int
   :ivar max_validators: Maximum number of validators.
   :vartype max_validators: int
   :ivar adjustment_alpha: Alpha value for adjustments.
   :vartype adjustment_alpha: int
   :ivar difficulty: Difficulty level.
   :vartype difficulty: int
   :ivar commit_reveal_weights_interval: Interval for commit-reveal weights.
   :vartype commit_reveal_weights_interval: int
   :ivar commit_reveal_weights_enabled: Flag indicating if commit-reveal weights are enabled.
   :vartype commit_reveal_weights_enabled: bool
   :ivar alpha_high: High value of alpha.
   :vartype alpha_high: int
   :ivar alpha_low: Low value of alpha.
   :vartype alpha_low: int
   :ivar liquid_alpha_enabled: Flag indicating if liquid alpha is enabled.

   :vartype liquid_alpha_enabled: bool


   .. py:attribute:: rho
      :type:  int


   .. py:attribute:: kappa
      :type:  int


   .. py:attribute:: immunity_period
      :type:  int


   .. py:attribute:: min_allowed_weights
      :type:  int


   .. py:attribute:: max_weight_limit
      :type:  float


   .. py:attribute:: tempo
      :type:  int


   .. py:attribute:: min_difficulty
      :type:  int


   .. py:attribute:: max_difficulty
      :type:  int


   .. py:attribute:: weights_version
      :type:  int


   .. py:attribute:: weights_rate_limit
      :type:  int


   .. py:attribute:: adjustment_interval
      :type:  int


   .. py:attribute:: activity_cutoff
      :type:  int


   .. py:attribute:: registration_allowed
      :type:  bool


   .. py:attribute:: target_regs_per_interval
      :type:  int


   .. py:attribute:: min_burn
      :type:  int


   .. py:attribute:: max_burn
      :type:  int


   .. py:attribute:: bonds_moving_avg
      :type:  int


   .. py:attribute:: max_regs_per_block
      :type:  int


   .. py:attribute:: serving_rate_limit
      :type:  int


   .. py:attribute:: max_validators
      :type:  int


   .. py:attribute:: adjustment_alpha
      :type:  int


   .. py:attribute:: difficulty
      :type:  int


   .. py:attribute:: commit_reveal_weights_interval
      :type:  int


   .. py:attribute:: commit_reveal_weights_enabled
      :type:  bool


   .. py:attribute:: alpha_high
      :type:  int


   .. py:attribute:: alpha_low
      :type:  int


   .. py:attribute:: liquid_alpha_enabled
      :type:  bool


   .. py:method:: from_vec_u8(vec_u8)
      :classmethod:


      Create a `SubnetHyperparameters` instance from a vector of bytes.

      This method decodes the given vector of bytes using the `bt_decode` module and creates a new instance of `SubnetHyperparameters` with the decoded values.

      :param vec_u8: A vector of bytes to decode into `SubnetHyperparameters`.
      :type vec_u8: bytes

      :returns: An instance of `SubnetHyperparameters` if decoding is successful, None otherwise.
      :rtype: Optional[SubnetHyperparameters]



.. py:class:: IPInfo

   Dataclass representing IP information.

   :ivar ip: The IP address as a string.
   :vartype ip: str
   :ivar ip_type: The type of the IP address (e.g., IPv4, IPv6).
   :vartype ip_type: int
   :ivar protocol: The protocol associated with the IP (e.g., TCP, UDP).

   :vartype protocol: int


   .. py:attribute:: ip
      :type:  str


   .. py:attribute:: ip_type
      :type:  int


   .. py:attribute:: protocol
      :type:  int


   .. py:method:: encode()

      Returns a dictionary of the IPInfo object that can be encoded.



   .. py:method:: from_vec_u8(vec_u8)
      :classmethod:


      Returns a IPInfo object from a ``vec_u8``.



   .. py:method:: list_from_vec_u8(vec_u8)
      :classmethod:


      Returns a list of IPInfo objects from a ``vec_u8``.



   .. py:method:: fix_decoded_values(decoded)
      :classmethod:


      Returns a SubnetInfo object from a decoded IPInfo dictionary.



   .. py:method:: to_parameter_dict()

      Returns a torch tensor or dict of the subnet IP info.



   .. py:method:: from_parameter_dict(parameter_dict)
      :classmethod:


      Creates a IPInfo instance from a parameter dictionary.



.. py:data:: ProposalCallData

.. py:class:: ProposalVoteData

   Bases: :py:obj:`TypedDict`


   This TypedDict represents the data structure for a proposal vote in the Senate.

   :ivar index: The index of the proposal.
   :vartype index: int
   :ivar threshold: The threshold required for the proposal to pass.
   :vartype threshold: int
   :ivar ayes: List of senators who voted 'aye'.
   :vartype ayes: List[str]
   :ivar nays: List of senators who voted 'nay'.
   :vartype nays: List[str]
   :ivar end: The ending timestamp of the voting period.

   :vartype end: int

   Initialize self.  See help(type(self)) for accurate signature.


   .. py:attribute:: index
      :type:  int


   .. py:attribute:: threshold
      :type:  int


   .. py:attribute:: ayes
      :type:  list[str]


   .. py:attribute:: nays
      :type:  list[str]


   .. py:attribute:: end
      :type:  int


.. py:exception:: InvalidConfigFile

   Bases: :py:obj:`Exception`


   In place of YAMLError

   Initialize self.  See help(type(self)) for accurate signature.


.. py:class:: DefaultConfig(parser = None, args = None, strict = False, default = None)

   Bases: :py:obj:`Config`


   A Config with a set of default values.

   Construct a new DefaultMunch. Like collections.defaultdict, the
   first argument is the default value; subsequent arguments are the
   same as those for dict.


   .. py:method:: default()
      :classmethod:

      :abstractmethod:


      Get default config.



.. py:class:: Config(parser = None, args = None, strict = False, default = None)

   Bases: :py:obj:`munch.DefaultMunch`


   Implementation of the config class, which manages the configuration of different Bittensor modules.

   Translates the passed parser into a nested Bittensor config.

   :param parser: Command line parser object.
   :type parser: argparse.ArgumentParser
   :param strict: If ``true``, the command line arguments are strictly parsed.
   :type strict: bool
   :param args: Command line arguments.
   :type args: list of str
   :param default: Default value for the Config. Defaults to ``None``. This default will be returned for attributes that are undefined.
   :type default: Optional[Any]

   :returns: Nested config object created from parser arguments.
   :rtype: config (bittensor.core.config.Config)

   Construct a new DefaultMunch. Like collections.defaultdict, the
   first argument is the default value; subsequent arguments are the
   same as those for dict.


   .. py:attribute:: __is_set
      :type:  dict[str, bool]


   .. py:attribute:: missing_required_args


   .. py:attribute:: config_params


   .. py:attribute:: strict


   .. py:attribute:: params


   .. py:attribute:: _config


   .. py:attribute:: parser_no_defaults


   .. py:attribute:: default_param_args


   .. py:attribute:: default_params


   .. py:attribute:: all_default_args


   .. py:attribute:: defaults_as_suppress


   .. py:attribute:: params_no_defaults


   .. py:method:: __split_params__(params, _config)
      :staticmethod:



   .. py:method:: __parse_args__(args, parser = None, strict = False)
      :staticmethod:


      Parses the passed args use the passed parser.

      :param args: List of arguments to parse.
      :type args: list[str]
      :param parser: Command line parser object.
      :type parser: argparse.ArgumentParser
      :param strict: If ``true``, the command line arguments are strictly parsed.
      :type strict: bool

      :returns: Namespace object created from parser arguments.
      :rtype: Namespace



   .. py:method:: __deepcopy__(memo)


   .. py:method:: __repr__()

      Invertible* string-form of a Munch.

      >>> b = Munch(foo=Munch(lol=True), hello=42, ponies='are pretty!')
      >>> print (repr(b))
      Munch({'ponies': 'are pretty!', 'foo': Munch({'lol': True}), 'hello': 42})
      >>> eval(repr(b))
      Munch({'ponies': 'are pretty!', 'foo': Munch({'lol': True}), 'hello': 42})

      >>> with_spaces = Munch({1: 2, 'a b': 9, 'c': Munch({'simple': 5})})
      >>> print (repr(with_spaces))
      Munch({'a b': 9, 1: 2, 'c': Munch({'simple': 5})})
      >>> eval(repr(with_spaces))
      Munch({'a b': 9, 1: 2, 'c': Munch({'simple': 5})})

      (*) Invertible so long as collection contents are each repr-invertible.



   .. py:method:: _remove_private_keys(d)
      :staticmethod:



   .. py:method:: __str__()

      Return str(self).



   .. py:method:: copy()

      D.copy() -> a shallow copy of D



   .. py:method:: to_string(items)
      :staticmethod:


      Get string from items.



   .. py:method:: update_with_kwargs(kwargs)

      Add config to self



   .. py:method:: _merge(a, b)
      :classmethod:


      Merge two configurations recursively.
      If there is a conflict, the value from the second configuration will take precedence.



   .. py:method:: merge(b)

      Merges the current config with another config.

      :param b: Another config to merge.
      :type b: bittensor.core.config.Config



   .. py:method:: merge_all(configs)
      :classmethod:


      Merge all configs in the list into one config.
      If there is a conflict, the value from the last configuration in the list will take precedence.

      :param configs: List of configs to be merged.
      :type configs: list[bittensor.core.config.Config]

      :returns: Merged config object.
      :rtype: config (bittensor.core.config.Config)



   .. py:method:: is_set(param_name)

      Returns a boolean indicating whether the parameter has been set or is still the default.



   .. py:method:: __check_for_missing_required_args(parser, args)


   .. py:method:: __get_required_args_from_parser(parser)
      :staticmethod:



.. py:data:: T

.. py:class:: Dendrite(wallet = None)

   Bases: :py:obj:`DendriteMixin`, :py:obj:`BaseModel`


   The Dendrite class represents the abstracted implementation of a network client module.

   In the brain analogy, dendrites receive signals
   from other neurons (in this case, network servers or axons), and the Dendrite class here is designed
   to send requests to those endpoint to receive inputs.

   This class includes a wallet or keypair used for signing messages, and methods for making
   HTTP requests to the network servers. It also provides functionalities such as logging
   network requests and processing server responses.

   :param keypair: The wallet or keypair used for signing messages.
   :type keypair: Option[Union[bittensor_wallet.Wallet, substrateinterface.Keypair]]
   :param external_ip: The external IP address of the local system.
   :type external_ip: str
   :param synapse_history: A list of Synapse objects representing the historical responses.
   :type synapse_history: list

   .. method:: __str__()

      Returns a string representation of the Dendrite object.

   .. method:: __repr__()

      Returns a string representation of the Dendrite object, acting as a fallback for __str__().

   .. method:: query(self, *args, **kwargs) -> Union[Synapse, list[Synapse]]

      Makes synchronous requests to one or multiple target Axons and returns responses.

   .. method:: forward(self, axons, synapse=Synapse(), timeout=12, deserialize=True, run_async=True, streaming=False) -> Synapse

      Asynchronously sends requests to one or multiple Axons and collates their responses.

   .. method:: call(self, target_axon, synapse=Synapse(), timeout=12.0, deserialize=True) -> Synapse

      Asynchronously sends a request to a specified Axon and processes the response.

   .. method:: call_stream(self, target_axon, synapse=Synapse(), timeout=12.0, deserialize=True) -> AsyncGenerator[Synapse, None]

      Sends a request to a specified Axon and yields an AsyncGenerator that contains streaming response chunks before finally yielding the filled Synapse as the final element.

   .. method:: preprocess_synapse_for_request(self, target_axon_info, synapse, timeout=12.0) -> Synapse

      Preprocesses the synapse for making a request, including building headers and signing.

   .. method:: process_server_response(self, server_response, json_response, local_synapse)

      Processes the server response, updates the local synapse state, and merges headers.

   .. method:: close_session(self)

      Synchronously closes the internal aiohttp client session.

   .. method:: aclose_session(self)

      Asynchronously closes the internal aiohttp client session.
      

   .. note:: When working with async `aiohttp <https://github.com/aio-libs/aiohttp>`_ client sessions, it is recommended to use a context manager.

   Example with a context manager::

       async with dendrite(wallet = bittensor_wallet.Wallet()) as d:
           print(d)
           d( <axon> ) # ping axon
           d( [<axons>] ) # ping multiple
           d( Axon(), Synapse )

   However, you are able to safely call :func:`dendrite.query()` without a context manager in a synchronous setting.

   Example without a context manager::

       d = dendrite(wallet = bittensor_wallet.Wallet() )
       print(d)
       d( <axon> ) # ping axon
       d( [<axons>] ) # ping multiple
       d( bittensor.core.axon.Axon, bittensor.core.synapse.Synapse )

   Initializes the Dendrite object, setting up essential properties.

   :param wallet: The user's wallet or keypair used for signing messages. Defaults to ``None``, in which case a new :func:`bittensor_wallet.Wallet().hotkey` is generated and used.
   :type wallet: Optional[Union[bittensor_wallet.Wallet, substrateinterface.Keypair]]


.. py:exception:: BlacklistedException(message='Synapse Exception', synapse = None)

   Bases: :py:obj:`SynapseException`


   This exception is raised when the request is blacklisted.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: ChainConnectionError

   Bases: :py:obj:`ChainError`


   Error for any chain connection related errors.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: ChainError

   Bases: :py:obj:`BaseException`


   Base error for any chain related errors.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: ChainQueryError

   Bases: :py:obj:`ChainError`


   Error for any chain query related errors.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: ChainTransactionError

   Bases: :py:obj:`ChainError`


   Error for any chain transaction related errors.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: IdentityError

   Bases: :py:obj:`ChainTransactionError`


   Error raised when an identity transaction fails.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: InternalServerError(message='Synapse Exception', synapse = None)

   Bases: :py:obj:`SynapseException`


   This exception is raised when the requested function fails on the server. Indicates a server error.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: InvalidRequestNameError

   Bases: :py:obj:`Exception`


   This exception is raised when the request name is invalid. Usually indicates a broken URL.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: MetadataError

   Bases: :py:obj:`ChainTransactionError`


   Error raised when metadata commitment transaction fails.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: NominationError

   Bases: :py:obj:`ChainTransactionError`


   Error raised when a nomination transaction fails.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: NotDelegateError

   Bases: :py:obj:`StakeError`


   Error raised when a hotkey you are trying to stake to is not a delegate.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: NotRegisteredError

   Bases: :py:obj:`ChainTransactionError`


   Error raised when a neuron is not registered, and the transaction requires it to be.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: NotVerifiedException(message='Synapse Exception', synapse = None)

   Bases: :py:obj:`SynapseException`


   This exception is raised when the request is not verified.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: PostProcessException(message='Synapse Exception', synapse = None)

   Bases: :py:obj:`SynapseException`


   This exception is raised when the response headers cannot be updated.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: PriorityException(message='Synapse Exception', synapse = None)

   Bases: :py:obj:`SynapseException`


   This exception is raised when the request priority is not met.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: RegistrationError

   Bases: :py:obj:`ChainTransactionError`


   Error raised when a neuron registration transaction fails.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: RunException(message='Synapse Exception', synapse = None)

   Bases: :py:obj:`SynapseException`


   This exception is raised when the requested function cannot be executed. Indicates a server error.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: StakeError

   Bases: :py:obj:`ChainTransactionError`


   Error raised when a stake transaction fails.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: SynapseDendriteNoneException(message='Synapse Dendrite is None', synapse = None)

   Bases: :py:obj:`SynapseException`


   Common base class for all non-exit exceptions.

   Initialize self.  See help(type(self)) for accurate signature.


   .. py:attribute:: message


.. py:exception:: SynapseParsingError

   Bases: :py:obj:`Exception`


   This exception is raised when the request headers are unable to be parsed into the synapse type.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: TransferError

   Bases: :py:obj:`ChainTransactionError`


   Error raised when a transfer transaction fails.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: UnknownSynapseError(message='Synapse Exception', synapse = None)

   Bases: :py:obj:`SynapseException`


   This exception is raised when the request name is not found in the Axon's forward_fns dictionary.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: UnstakeError

   Bases: :py:obj:`ChainTransactionError`


   Error raised when an unstake transaction fails.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:data:: Metagraph

   Metagraph class that uses :class:`TorchMetaGraph` if PyTorch is available; otherwise, it falls back to :class:`NonTorchMetagraph`.

   - **With PyTorch**: When `use_torch()` returns `True`, `Metagraph` is set to :class:`TorchMetaGraph`, which utilizes PyTorch functionalities.
   - **Without PyTorch**: When `use_torch()` returns `False`, `Metagraph` is set to :class:`NonTorchMetagraph`, which does not rely on PyTorch.

.. py:data:: BLOCKTIME
   :value: 12


.. py:class:: StreamingSynapse(/, **data)

   Bases: :py:obj:`bittensor.core.synapse.Synapse`, :py:obj:`abc.ABC`


   The :func:`StreamingSynapse` class is designed to be subclassed for handling streaming responses in the Bittensor network.
   It provides abstract methods that must be implemented by the subclass to deserialize, process streaming responses,
   and extract JSON data. It also includes a method to create a streaming response object.

   Create a new model by parsing and validating input data from keyword arguments.

   Raises [`ValidationError`][pydantic_core.ValidationError] if the input data cannot be
   validated to form a valid model.

   `self` is explicitly positional-only to allow `self` as a field name.


   .. py:attribute:: model_config

      Configuration for the model, should be a dictionary conforming to [`ConfigDict`][pydantic.config.ConfigDict].


   .. py:class:: BTStreamingResponse(model, *, synapse = None, **kwargs)

      Bases: :py:obj:`starlette.responses.StreamingResponse`


      :func:`BTStreamingResponse` is a specialized subclass of the Starlette StreamingResponse designed to handle the streaming
      of tokens within the Bittensor network. It is used internally by the StreamingSynapse class to manage the response
      streaming process, including sending headers and calling the token streamer provided by the subclass.

      This class is not intended to be directly instantiated or modified by developers subclassing StreamingSynapse.
      Instead, it is used by the :func:`create_streaming_response` method to create a response object based on the token streamer
      provided by the subclass.

      Initializes the BTStreamingResponse with the given token streamer model.

      :param model: A BTStreamingResponseModel instance containing the token streamer callable, which is responsible for generating the content of the response.
      :type model: bittensor.core.stream.BTStreamingResponseModel
      :param synapse: The response Synapse to be used to update the response headers etc.
      :type synapse: bittensor.core.stream.StreamingSynapse
      :param \*\*kwargs: Additional keyword arguments passed to the parent StreamingResponse class.


      .. py:attribute:: token_streamer


      .. py:attribute:: synapse


      .. py:method:: stream_response(send)
         :async:


         Asynchronously streams the response by sending headers and calling the token streamer.

         This method is responsible for initiating the response by sending the appropriate headers, including the content type for event-streaming. It then calls the token streamer to generate the content and sends the response body to the client.

         :param send: A callable to send the response, provided by the ASGI server.
         :type send: starlette.types.Send



      .. py:method:: __call__(scope, receive, send)
         :async:


         Asynchronously calls the :func:`stream_response method`, allowing the :func:`BTStreamingResponse` object to be used as an ASGI application.

         This method is part of the ASGI interface and is called by the ASGI server to handle the request and send the response. It delegates to the :func:`stream_response` method to perform the actual streaming process.

         :param scope: The scope of the request, containing information about the client, server, and request itself.
         :type scope: starlette.types.Scope
         :param receive: A callable to receive the request, provided by the ASGI server.
         :type receive: starlette.types.Receive
         :param send: A callable to send the response, provided by the ASGI server.
         :type send: starlette.types.Send




   .. py:method:: process_streaming_response(response)
      :abstractmethod:

      :async:


      Abstract method that must be implemented by the subclass.
      This method should provide logic to handle the streaming response, such as parsing and accumulating data.
      It is called as the response is being streamed from the network, and should be implemented to handle the specific streaming data format and requirements of the subclass.

      :param response: The response object to be processed, typically containing chunks of data.
      :type response: aiohttp.ClientResponse



   .. py:method:: extract_response_json(response)
      :abstractmethod:


      Abstract method that must be implemented by the subclass.
      This method should provide logic to extract JSON data from the response, including headers and content.
      It is called after the response has been processed and is responsible for retrieving structured data that can be used by the application.

      :param response: The response object from which to extract JSON data.
      :type response: aiohttp.ClientResponse



   .. py:method:: create_streaming_response(token_streamer)

      Creates a streaming response using the provided token streamer.
      This method can be used by the subclass to create a response object that can be sent back to the client.
      The token streamer should be implemented to generate the content of the response according to the specific requirements of the subclass.

      :param token_streamer: A callable that takes a send function and returns an awaitable. It's responsible for generating the content of the response.
      :type token_streamer: Callable[[starlette.types.Send], Awaitable[None]]

      :returns: The streaming response object, ready to be sent to the client.
      :rtype: BTStreamingResponse (bittensor.core.stream.StreamingSynapse.BTStreamingResponse)



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


.. py:class:: TerminalInfo(/, **data)

   Bases: :py:obj:`pydantic.BaseModel`


   TerminalInfo encapsulates detailed information about a network synapse (node) involved in a communication process.

   This class serves as a metadata carrier,
   providing essential details about the state and configuration of a terminal during network interactions. This is a crucial class in the Bittensor framework.

   The TerminalInfo class contains information such as HTTP status codes and messages, processing times,
   IP addresses, ports, Bittensor version numbers, and unique identifiers. These details are vital for
   maintaining network reliability, security, and efficient data flow within the Bittensor network.

   This class includes Pydantic validators and root validators to enforce data integrity and format. It is
   designed to be used natively within Synapses, so that you will not need to call this directly, but rather
   is used as a helper class for Synapses.

   :param status_code: HTTP status code indicating the result of a network request. Essential for identifying the outcome of network interactions.
   :type status_code: int
   :param status_message: Descriptive message associated with the status code, providing additional context about the request's result.
   :type status_message: str
   :param process_time: Time taken by the terminal to process the call, important for performance monitoring and optimization.
   :type process_time: float
   :param ip: IP address of the terminal, crucial for network routing and data transmission.
   :type ip: str
   :param port: Network port used by the terminal, key for establishing network connections.
   :type port: int
   :param version: Bittensor version running on the terminal, ensuring compatibility between different nodes in the network.
   :type version: int
   :param nonce: Unique, monotonically increasing number for each terminal, aiding in identifying and ordering network interactions.
   :type nonce: int
   :param uuid: Unique identifier for the terminal, fundamental for network security and identification.
   :type uuid: str
   :param hotkey: Encoded hotkey string of the terminal wallet, important for transaction and identity verification in the network.
   :type hotkey: str
   :param signature: Digital signature verifying the tuple of nonce, axon_hotkey, dendrite_hotkey, and uuid, critical for ensuring data authenticity and security.
   :type signature: str

   Usage::

       # Creating a TerminalInfo instance
       from bittensor.core.synapse import TerminalInfo

       terminal_info = TerminalInfo(
           status_code=200,
           status_message="Success",
           process_time=0.1,
           ip="198.123.23.1",
           port=9282,
           version=111,
           nonce=111111,
           uuid="5ecbd69c-1cec-11ee-b0dc-e29ce36fec1a",
           hotkey="5EnjDGNqqWnuL2HCAdxeEtN2oqtXZw6BMBe936Kfy2PFz1J1",
           signature="0x0813029319030129u4120u10841824y0182u091u230912u"
       )

       # Accessing TerminalInfo attributes
       ip_address = terminal_info.ip
       processing_duration = terminal_info.process_time

       # TerminalInfo can be used to monitor and verify network interactions, ensuring proper communication and security within the Bittensor network.

   TerminalInfo plays a pivotal role in providing transparency and control over network operations, making it an indispensable tool for developers and users interacting with the Bittensor ecosystem.

   Create a new model by parsing and validating input data from keyword arguments.

   Raises [`ValidationError`][pydantic_core.ValidationError] if the input data cannot be
   validated to form a valid model.

   `self` is explicitly positional-only to allow `self` as a field name.


   .. py:attribute:: model_config

      Configuration for the model, should be a dictionary conforming to [`ConfigDict`][pydantic.config.ConfigDict].


   .. py:attribute:: status_code
      :type:  Optional[int]


   .. py:attribute:: status_message
      :type:  Optional[str]


   .. py:attribute:: process_time
      :type:  Optional[float]


   .. py:attribute:: ip
      :type:  Optional[str]


   .. py:attribute:: port
      :type:  Optional[int]


   .. py:attribute:: version
      :type:  Optional[int]


   .. py:attribute:: nonce
      :type:  Optional[int]


   .. py:attribute:: uuid
      :type:  Optional[str]


   .. py:attribute:: hotkey
      :type:  Optional[str]


   .. py:attribute:: signature
      :type:  Optional[str]


   .. py:attribute:: _extract_process_time


   .. py:attribute:: _extract_port


   .. py:attribute:: _extract_version


   .. py:attribute:: _extract_nonce


   .. py:attribute:: _extract_status_code


.. py:class:: Synapse(/, **data)

   Bases: :py:obj:`pydantic.BaseModel`


   Represents a Synapse in the Bittensor network, serving as a communication schema between neurons (nodes).

   Synapses ensure the format and correctness of transmission tensors according to the Bittensor protocol.
   Each Synapse type is tailored for a specific machine learning (ML) task, following unique compression and
   communication processes. This helps maintain sanitized, correct, and useful information flow across the network.

   The Synapse class encompasses essential network properties such as HTTP route names, timeouts, request sizes, and
   terminal information. It also includes methods for serialization, deserialization, attribute setting, and hash
   computation, ensuring secure and efficient data exchange in the network.

   The class includes Pydantic validators and root validators to enforce data integrity and format. Additionally,
   properties like ``is_success``, ``is_failure``, ``is_timeout``, etc., provide convenient status checks based on
   dendrite responses.

   Think of Bittensor Synapses as glorified pydantic wrappers that have been designed to be used in a distributed
   network. They provide a standardized way to communicate between neurons, and are the primary mechanism for
   communication between neurons in Bittensor.

   Key Features:

   1. HTTP Route Name (``name`` attribute):
       Enables the identification and proper routing of requests within the network. Essential for users
       defining custom routes for specific machine learning tasks.

   2. Query Timeout (``timeout`` attribute):
       Determines the maximum duration allowed for a query, ensuring timely responses and network
       efficiency. Crucial for users to manage network latency and response times, particularly in
       time-sensitive applications.

   3. Request Sizes (``total_size``, ``header_size`` attributes):
       Keeps track of the size of request bodies and headers, ensuring efficient data transmission without
       overloading the network. Important for users to monitor and optimize the data payload, especially
       in bandwidth-constrained environments.

   4. Terminal Information (``dendrite``, ``axon`` attributes):
       Stores information about the dendrite (receiving end) and axon (sending end), facilitating communication
       between nodes. Users can access detailed information about the communication endpoints, aiding in
       debugging and network analysis.

   5. Body Hash Computation (``computed_body_hash``, ``required_hash_fields``):
       Ensures data integrity and security by computing hashes of transmitted data. Provides users with a
       mechanism to verify data integrity and detect any tampering during transmission.
       It is recommended that names of fields in `required_hash_fields` are listed in the order they are
       defined in the class.

   6. Serialization and Deserialization Methods:
       Facilitates the conversion of Synapse objects to and from a format suitable for network transmission.
       Essential for users who need to customize data formats for specific machine learning models or tasks.

   7. Status Check Properties (``is_success``, ``is_failure``, ``is_timeout``, etc.):
       Provides quick and easy methods to check the status of a request, improving error handling and
       response management. Users can efficiently handle different outcomes of network requests, enhancing
       the robustness of their applications.

   Example usage::

       # Creating a Synapse instance with default values
       from bittensor.core.synapse import Synapse

       synapse = Synapse()

       # Setting properties and input
       synapse.timeout = 15.0
       synapse.name = "MySynapse"

       # Not setting fields that are not defined in your synapse class will result in an error, e.g.:
       synapse.dummy_input = 1 # This will raise an error because dummy_input is not defined in the Synapse class

       # Get a dictionary of headers and body from the synapse instance
       synapse_dict = synapse.model_dump_json()

       # Get a dictionary of headers from the synapse instance
       headers = synapse.to_headers()

       # Reconstruct the synapse from headers using the classmethod 'from_headers'
       synapse = Synapse.from_headers(headers)

       # Deserialize synapse after receiving it over the network, controlled by `deserialize` method
       deserialized_synapse = synapse.deserialize()

       # Checking the status of the request
       if synapse.is_success:
           print("Request succeeded")

       # Checking and setting the status of the request
       print(synapse.axon.status_code)
       synapse.axon.status_code = 408 # Timeout

   :param name: HTTP route name, set on :func:`axon.attach`.
   :type name: str
   :param timeout: Total query length, set by the dendrite terminal.
   :type timeout: float
   :param total_size: Total size of request body in bytes.
   :type total_size: int
   :param header_size: Size of request header in bytes.
   :type header_size: int
   :param dendrite: Information about the dendrite terminal.
   :type dendrite: :func:`TerminalInfo`
   :param axon: Information about the axon terminal.
   :type axon: :func:`TerminalInfo`
   :param computed_body_hash: Computed hash of the request body.
   :type computed_body_hash: str
   :param required_hash_fields: Fields required to compute the body hash.
   :type required_hash_fields: list[str]

   .. method:: deserialize

      Custom deserialization logic for subclasses.

   .. method:: __setattr__

      Override method to make ``required_hash_fields`` read-only.

   .. method:: get_total_size

      Calculates and returns the total size of the object.

   .. method:: to_headers

      Constructs a dictionary of headers from instance properties.

   .. method:: body_hash

      Computes a SHA3-256 hash of the serialized body.

   .. method:: parse_headers_to_inputs

      Parses headers to construct an inputs dictionary.

   .. method:: from_headers

      Creates an instance from a headers dictionary.
      

   This class is a cornerstone in the Bittensor framework, providing the necessary tools for secure, efficient, and
   standardized communication in a decentralized environment.

   Create a new model by parsing and validating input data from keyword arguments.

   Raises [`ValidationError`][pydantic_core.ValidationError] if the input data cannot be
   validated to form a valid model.

   `self` is explicitly positional-only to allow `self` as a field name.


   .. py:attribute:: model_config

      Configuration for the model, should be a dictionary conforming to [`ConfigDict`][pydantic.config.ConfigDict].


   .. py:method:: deserialize()

      Deserializes the Synapse object.

      This method is intended to be overridden by subclasses for custom deserialization logic.
      In the context of the Synapse superclass, this method simply returns the instance itself.
      When inheriting from this class, subclasses should provide their own implementation for
      deserialization if specific deserialization behavior is desired.

      By default, if a subclass does not provide its own implementation of this method, the
      Synapse's deserialize method will be used, returning the object instance as-is.

      In its default form, this method simply returns the instance of the Synapse itself without any modifications. Subclasses of Synapse can override this method to add specific deserialization behaviors, such as converting serialized data back into complex object types or performing additional data integrity checks.

      Example::

          class CustomSynapse(Synapse):
              additional_data: str

              def deserialize(self) -> "CustomSynapse":
                  # Custom deserialization logic
                  # For example, decoding a base64 encoded string in 'additional_data'
                  if self.additional_data:
                      self.additional_data = base64.b64decode(self.additional_data).decode('utf-8')
                  return self

          serialized_data = '{"additional_data": "SGVsbG8gV29ybGQ="}'  # Base64 for 'Hello World'
          custom_synapse = CustomSynapse.model_validate_json(serialized_data)
          deserialized_synapse = custom_synapse.deserialize()

          # deserialized_synapse.additional_data would now be 'Hello World'

      :returns: The deserialized Synapse object. In this default implementation, it returns the object itself.
      :rtype: Synapse



   .. py:method:: set_name_type(values)


   .. py:attribute:: name
      :type:  Optional[str]


   .. py:attribute:: timeout
      :type:  Optional[float]


   .. py:attribute:: total_size
      :type:  Optional[int]


   .. py:attribute:: header_size
      :type:  Optional[int]


   .. py:attribute:: dendrite
      :type:  Optional[TerminalInfo]


   .. py:attribute:: axon
      :type:  Optional[TerminalInfo]


   .. py:attribute:: computed_body_hash
      :type:  Optional[str]


   .. py:attribute:: required_hash_fields
      :type:  ClassVar[tuple[str, Ellipsis]]
      :value: ()



   .. py:attribute:: _extract_total_size


   .. py:attribute:: _extract_header_size


   .. py:attribute:: _extract_timeout


   .. py:method:: __setattr__(name, value)

      Override the :func:`__setattr__` method to make the ``required_hash_fields`` property read-only.

      This is a security mechanism such that the ``required_hash_fields`` property cannot be
      overridden by the user or malicious code.



   .. py:method:: get_total_size()

      Get the total size of the current object.

      This method first calculates the size of the current object, then assigns it
      to the instance variable :func:`self.total_size` and finally returns this value.

      :returns: The total size of the current object.
      :rtype: int



   .. py:property:: is_success
      :type: bool

      Checks if the dendrite's status code indicates success.

      This method returns ``True`` if the status code of the dendrite is ``200``,
      which typically represents a successful HTTP request.

      :returns: ``True`` if dendrite's status code is ``200``, ``False`` otherwise.
      :rtype: bool


   .. py:property:: is_failure
      :type: bool

      Checks if the dendrite's status code indicates failure.

      This method returns ``True`` if the status code of the dendrite is not ``200``,
      which would mean the HTTP request was not successful.

      :returns: ``True`` if dendrite's status code is not ``200``, ``False`` otherwise.
      :rtype: bool


   .. py:property:: is_timeout
      :type: bool

      Checks if the dendrite's status code indicates a timeout.

      This method returns ``True`` if the status code of the dendrite is ``408``,
      which is the HTTP status code for a request timeout.

      :returns: ``True`` if dendrite's status code is ``408``, ``False`` otherwise.
      :rtype: bool


   .. py:property:: is_blacklist
      :type: bool

      Checks if the dendrite's status code indicates a blacklisted request.

      This method returns ``True`` if the status code of the dendrite is ``403``,
      which is the HTTP status code for a forbidden request.

      :returns: ``True`` if dendrite's status code is ``403``, ``False`` otherwise.
      :rtype: bool


   .. py:property:: failed_verification
      :type: bool

      Checks if the dendrite's status code indicates failed verification.

      This method returns ``True`` if the status code of the dendrite is ``401``,
      which is the HTTP status code for unauthorized access.

      :returns: ``True`` if dendrite's status code is ``401``, ``False`` otherwise.
      :rtype: bool


   .. py:method:: get_required_fields()

      Get the required fields from the model's JSON schema.



   .. py:method:: to_headers()

      Converts the state of a Synapse instance into a dictionary of HTTP headers.

      This method is essential for
      packaging Synapse data for network transmission in the Bittensor framework, ensuring that each key aspect of
      the Synapse is represented in a format suitable for HTTP communication.

      Process:

      1. Basic Information: It starts by including the ``name`` and ``timeout`` of the Synapse, which are fundamental for identifying the query and managing its lifespan on the network.
      2. Complex Objects: The method serializes the ``axon`` and ``dendrite`` objects, if present, into strings. This serialization is crucial for preserving the state and structure of these objects over the network.
      3. Encoding: Non-optional complex objects are serialized and encoded in base64, making them safe for HTTP transport.
      4. Size Metrics: The method calculates and adds the size of headers and the total object size, providing valuable information for network bandwidth management.

      Example Usage::

          synapse = Synapse(name="ExampleSynapse", timeout=30)
          headers = synapse.to_headers()
          # headers now contains a dictionary representing the Synapse instance

      :returns: A dictionary containing key-value pairs representing the Synapse's properties, suitable for HTTP communication.
      :rtype: dict



   .. py:property:: body_hash
      :type: str

      Computes a SHA3-256 hash of the serialized body of the Synapse instance.

      This hash is used to
      ensure the data integrity and security of the Synapse instance when it's transmitted across the
      network. It is a crucial feature for verifying that the data received is the same as the data sent.

      Process:

      1. Iterates over each required field as specified in ``required_hash_fields``.
      2. Concatenates the string representation of these fields.
      3. Applies SHA3-256 hashing to the concatenated string to produce a unique fingerprint of the data.

      Example::

          synapse = Synapse(name="ExampleRoute", timeout=10)
          hash_value = synapse.body_hash
          # hash_value is the SHA3-256 hash of the serialized body of the Synapse instance

      :returns: The SHA3-256 hash as a hexadecimal string, providing a fingerprint of the Synapse instance's data for integrity checks.
      :rtype: str


   .. py:method:: parse_headers_to_inputs(headers)
      :classmethod:


      Interprets and transforms a given dictionary of headers into a structured dictionary, facilitating the reconstruction of Synapse objects.

      This method is essential for parsing network-transmitted
      data back into a Synapse instance, ensuring data consistency and integrity.

      Process:

      1. Separates headers into categories based on prefixes (``axon``, ``dendrite``, etc.).
      2. Decodes and deserializes ``input_obj`` headers into their original objects.
      3. Assigns simple fields directly from the headers to the input dictionary.

      Example::

          received_headers = {
              'bt_header_axon_address': '127.0.0.1',
              'bt_header_dendrite_port': '8080',
              # Other headers...
          }
          inputs = Synapse.parse_headers_to_inputs(received_headers)
          # inputs now contains a structured representation of Synapse properties based on the headers

      .. note:: This is handled automatically when calling :func:`Synapse.from_headers(headers)` and does not need to be called directly.

      :param headers: The headers dictionary to parse.
      :type headers: dict

      :returns: A structured dictionary representing the inputs for constructing a Synapse instance.
      :rtype: dict



   .. py:method:: from_headers(headers)
      :classmethod:


      Constructs a new Synapse instance from a given headers dictionary, enabling the re-creation of the Synapse's state as it was prior to network transmission.

      This method is a key part of the
      deserialization process in the Bittensor network, allowing nodes to accurately reconstruct Synapse
      objects from received data.

      Example::

          received_headers = {
              'bt_header_axon_address': '127.0.0.1',
              'bt_header_dendrite_port': '8080',
              # Other headers...
          }
          synapse = Synapse.from_headers(received_headers)
          # synapse is a new Synapse instance reconstructed from the received headers

      :param headers: The dictionary of headers containing serialized Synapse information.
      :type headers: dict

      :returns: A new instance of Synapse, reconstructed from the parsed header information, replicating the original instance's state.
      :rtype: bittensor.core.synapse.Synapse



.. py:class:: Tensor(/, **data)

   Bases: :py:obj:`pydantic.BaseModel`


   Represents a Tensor object.

   :param buffer: Tensor buffer data.
   :type buffer: Optional[str]
   :param dtype: Tensor data type.
   :type dtype: str
   :param shape: Tensor shape.
   :type shape: list[int]

   Create a new model by parsing and validating input data from keyword arguments.

   Raises [`ValidationError`][pydantic_core.ValidationError] if the input data cannot be
   validated to form a valid model.

   `self` is explicitly positional-only to allow `self` as a field name.


   .. py:attribute:: model_config

      Configuration for the model, should be a dictionary conforming to [`ConfigDict`][pydantic.config.ConfigDict].


   .. py:method:: tensor()


   .. py:method:: tolist()


   .. py:method:: numpy()


   .. py:method:: deserialize()

      Deserializes the Tensor object.

      :returns: The deserialized tensor object.
      :rtype: np.array or torch.Tensor

      :raises Exception: If the deserialization process encounters an error.



   .. py:method:: serialize(tensor_)
      :staticmethod:


      Serializes the given tensor.

      :param tensor_: The tensor to serialize.
      :type tensor_: np.array or torch.Tensor

      :returns: The serialized tensor.
      :rtype: :func:`Tensor`

      :raises Exception: If the serialization process encounters an error.



   .. py:attribute:: buffer
      :type:  Optional[str]


   .. py:attribute:: dtype
      :type:  str


   .. py:attribute:: shape
      :type:  list[int]


   .. py:attribute:: _extract_shape


   .. py:attribute:: _extract_dtype


.. py:class:: PriorityThreadPoolExecutor(maxsize=-1, max_workers=None, thread_name_prefix='', initializer=None, initargs=())

   Bases: :py:obj:`concurrent.futures._base.Executor`


   Base threadpool executor with a priority queue.

   Initializes a new `ThreadPoolExecutor <https://docs.python.org/3/library/concurrent.futures.html#threadpoolexecutor>`_ instance.

   :param max_workers: The maximum number of threads that can be used to
                       execute the given calls.
   :param thread_name_prefix: An optional name prefix to give our threads.
   :param initializer: An callable used to initialize worker threads.
   :param initargs: A tuple of arguments to pass to the initializer.


   .. py:attribute:: _counter


   .. py:attribute:: _max_workers


   .. py:attribute:: _work_queue


   .. py:attribute:: _idle_semaphore


   .. py:attribute:: _threads


   .. py:attribute:: _broken
      :value: False



   .. py:attribute:: _shutdown
      :value: False



   .. py:attribute:: _shutdown_lock


   .. py:attribute:: _thread_name_prefix


   .. py:attribute:: _initializer


   .. py:attribute:: _initargs


   .. py:method:: add_args(parser, prefix = None)
      :classmethod:


      Accept specific arguments from parser



   .. py:method:: config()
      :classmethod:


      Get config from the argument parser.

      Return: :func:`bittensor.Config` object.



   .. py:property:: is_empty


   .. py:method:: submit(fn, *args, **kwargs)

      Submits a callable to be executed with the given arguments.

      Schedules the callable to be executed as fn(*args, **kwargs) and returns
      a Future instance representing the execution of the callable.

      :returns: A Future representing the given call.



   .. py:method:: _adjust_thread_count()


   .. py:method:: _initializer_failed()


   .. py:method:: shutdown(wait=True)

      Clean-up the resources associated with the Executor.

      It is safe to call this method several times. Otherwise, no other
      methods can be called after this one.

      :param wait: If True then shutdown will not return until all running
                   futures have finished executing and the resources used by the
                   executor have been reclaimed.
      :param cancel_futures: If True then shutdown will cancel all pending
                             futures. Futures that are completed or running will not be
                             cancelled.



.. py:function:: ss58_to_vec_u8(ss58_address)

.. py:function:: version_checking(timeout = 15)

   Deprecated, kept for backwards compatibility. Use check_version() instead.

   :param timeout: The timeout for calling :func:``check_version`` function. Default is ``15``.
   :type timeout: int


.. py:function:: strtobool(val)

   Converts a string to a boolean value.

   truth-y values are 'y', 'yes', 't', 'true', 'on', and '1';
   false-y values are 'n', 'no', 'f', 'false', 'off', and '0'.

   Raises ValueError if 'val' is anything else.


.. py:function:: get_explorer_url_for_network(network, block_hash, network_map)

   Returns the explorer url for the given block hash and network.

   :param network: The network to get the explorer url for.
   :type network: str
   :param block_hash: The block hash to get the explorer url for.
   :type block_hash: str
   :param network_map: The network maps to get the explorer urls from.
   :type network_map: dict[str, dict[str, str]]

   :returns: The explorer url for the given block hash and network.
             Or None if the network is not known.


.. py:function:: ss58_address_to_bytes(ss58_address)

   Converts a ss58 address to a bytes object.


.. py:function:: u16_normalized_float(x)

.. py:function:: u64_normalized_float(x)

.. py:function:: get_hash(content, encoding='utf-8')

.. py:class:: Balance(balance)

   Represents the bittensor balance of the wallet, stored as rao (int).
   This class provides a way to interact with balances in two different units: rao and tao.
   It provides methods to convert between these units, as well as to perform arithmetic and comparison operations.

   :ivar unit: A string representing the symbol for the tao unit.
   :vartype unit: str
   :ivar rao_unit: A string representing the symbol for the rao unit.
   :vartype rao_unit: str
   :ivar rao: An integer that stores the balance in rao units.
   :vartype rao: int
   :ivar tao: A float property that gives the balance in tao units.

   :vartype tao: float

   Initialize a Balance object. If balance is an int, it's assumed to be in rao.
   If balance is a float, it's assumed to be in tao.

   :param balance: The initial balance, in either rao (if an int) or tao (if a float).


   .. py:attribute:: unit
      :type:  str


   .. py:attribute:: rao_unit
      :type:  str


   .. py:attribute:: rao
      :type:  int


   .. py:property:: tao


   .. py:method:: __int__()

      Convert the Balance object to an int. The resulting value is in rao.



   .. py:method:: __float__()

      Convert the Balance object to a float. The resulting value is in tao.



   .. py:method:: __str__()

      Returns the Balance object as a string in the format "symbolvalue", where the value is in tao.



   .. py:method:: __rich__()


   .. py:method:: __str_rao__()


   .. py:method:: __rich_rao__()


   .. py:method:: __repr__()


   .. py:method:: __eq__(other)


   .. py:method:: __ne__(other)


   .. py:method:: __gt__(other)


   .. py:method:: __lt__(other)


   .. py:method:: __le__(other)


   .. py:method:: __ge__(other)


   .. py:method:: __add__(other)


   .. py:method:: __radd__(other)


   .. py:method:: __sub__(other)


   .. py:method:: __rsub__(other)


   .. py:method:: __mul__(other)


   .. py:method:: __rmul__(other)


   .. py:method:: __truediv__(other)


   .. py:method:: __rtruediv__(other)


   .. py:method:: __floordiv__(other)


   .. py:method:: __rfloordiv__(other)


   .. py:method:: __nonzero__()


   .. py:method:: __neg__()


   .. py:method:: __pos__()


   .. py:method:: __abs__()


   .. py:method:: from_float(amount)
      :staticmethod:


      Given tao, return :func:`Balance` object with rao(``int``) and tao(``float``), where rao = int(tao*pow(10,9))
      :param amount: The amount in tao.
      :type amount: float

      :returns: A Balance object representing the given amount.



   .. py:method:: from_tao(amount)
      :staticmethod:


      Given tao, return Balance object with rao(``int``) and tao(``float``), where rao = int(tao*pow(10,9))

      :param amount: The amount in tao.
      :type amount: float

      :returns: A Balance object representing the given amount.



   .. py:method:: from_rao(amount)
      :staticmethod:


      Given rao, return Balance object with rao(``int``) and tao(``float``), where rao = int(tao*pow(10,9))

      :param amount: The amount in rao.
      :type amount: int

      :returns: A Balance object representing the given amount.



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


.. py:class:: SubnetsAPI(wallet)

   Bases: :py:obj:`abc.ABC`


   This class is not used within the bittensor package, but is actively used by the community.


   .. py:attribute:: wallet


   .. py:attribute:: dendrite


   .. py:method:: __call__(*args, **kwargs)
      :async:



   .. py:method:: prepare_synapse(*args, **kwargs)
      :abstractmethod:


      Prepare the synapse-specific payload.



   .. py:method:: process_responses(responses)
      :abstractmethod:


      Process the responses from the network.



   .. py:method:: query_api(axons, deserialize = False, timeout = 12, **kwargs)
      :async:


      Queries the API nodes of a subnet using the given synapse and bespoke query function.

      :param axons: The list of axon(s) to query.
      :type axons: Union[bt.axon, list[bt.axon]]
      :param deserialize: Whether to deserialize the responses. Defaults to False.
      :type deserialize: Optional[bool]
      :param timeout: The timeout in seconds for the query. Defaults to 12.
      :type timeout: Optional[int]
      :param \*\*kwargs: Keyword arguments for the prepare_synapse_fn.

      :returns: The result of the process_responses_fn.
      :rtype: Any



.. py:data:: axon

.. py:data:: config

.. py:data:: dendrite

.. py:data:: keyfile

.. py:data:: metagraph

.. py:data:: wallet

.. py:data:: subtensor

.. py:data:: synapse

.. py:data:: __blocktime__

.. py:data:: __network_explorer_map__

.. py:data:: __pipaddress__

.. py:data:: __ss58_format__

.. py:data:: __type_registry__

.. py:data:: __ss58_address_length__

.. py:data:: __networks__

.. py:data:: __finney_entrypoint__

.. py:data:: __finney_test_entrypoint__

.. py:data:: __archive_entrypoint__

.. py:data:: __local_entrypoint__

.. py:data:: __tao_symbol__

.. py:data:: __rao_symbol__

.. py:data:: mock_subpackage

.. py:data:: extrinsics_subpackage

.. py:function:: trace(on = True)

   Enables or disables trace logging.

   :param on: If True, enables trace logging. If False, disables trace logging.
   :type on: bool


.. py:function:: debug(on = True)

   Enables or disables debug logging.

   :param on: If True, enables debug logging. If False, disables debug logging.
   :type on: bool


.. py:function:: __getattr__(name)

