bittensor.core.axon
===================

.. py:module:: bittensor.core.axon

.. autoapi-nested-parse::

   Create and initialize Axon, which services the forward and backward requests from other neurons.



Attributes
----------

.. autoapisummary::

   bittensor.core.axon.V_7_2_0


Classes
-------

.. autoapisummary::

   bittensor.core.axon.FastAPIThreadedServer
   bittensor.core.axon.Axon
   bittensor.core.axon.AxonMiddleware


Functions
---------

.. autoapisummary::

   bittensor.core.axon.create_error_response
   bittensor.core.axon.log_and_handle_error


Module Contents
---------------

.. py:data:: V_7_2_0
   :value: 7002000


.. py:class:: FastAPIThreadedServer(config)

   Bases: :py:obj:`uvicorn.Server`


   The ``FastAPIThreadedServer`` class is a specialized server implementation for the Axon server in the Bittensor network.

   It extends the functionality of :func:`uvicorn.Server` to run the FastAPI application in a separate thread, allowing the Axon server to handle HTTP requests concurrently and non-blocking.

   This class is designed to facilitate the integration of FastAPI with the Axon's asynchronous architecture, ensuring efficient and scalable handling of network requests.

   Importance and Functionality
       Threaded Execution
           The class allows the FastAPI application to run in a separate thread, enabling concurrent handling of HTTP requests which is crucial for the performance and scalability of the Axon server.

       Seamless Integration
           By running FastAPI in a threaded manner, this class ensures seamless integration of FastAPI's capabilities with the Axon server's asynchronous and multi-threaded architecture.

       Controlled Server Management
           The methods start and stop provide controlled management of the server's lifecycle, ensuring that the server can be started and stopped as needed, which is vital for maintaining the Axon server's reliability and availability.

       Signal Handling
           Overriding the default signal handlers prevents potential conflicts with the Axon server's main application flow, ensuring stable operation in various network conditions.

   Use Cases
       Starting the Server
           When the Axon server is initialized, it can use this class to start the FastAPI application in a separate thread, enabling it to begin handling HTTP requests immediately.

       Stopping the Server
           During shutdown or maintenance of the Axon server, this class can be used to stop the FastAPI application gracefully, ensuring that all resources are properly released.

   Example Usage::

       self.app = FastAPI()
       log_level = "trace"
       self.fast_config = uvicorn.Config(self.app, host="0.0.0.0", port=self.config.axon.port, log_level=log_level)
       self.fast_server = FastAPIThreadedServer(config=self.fast_config)
       self.fast_server.start()
       # do something
       self.fast_server.stop()

   :param should_exit: Flag to indicate whether the server should stop running.
   :type should_exit: bool
   :param is_running: Flag to indicate whether the server is currently running.
   :type is_running: bool

   The server overrides the default signal handlers to prevent interference with the main application flow and provides methods to start and stop the server in a controlled manner.


   .. py:attribute:: should_exit
      :type:  bool
      :value: False



   .. py:attribute:: is_running
      :type:  bool
      :value: False



   .. py:method:: install_signal_handlers()

      Overrides the default signal handlers provided by ``uvicorn.Server``. This method is essential to ensure that the signal handling in the threaded server does not interfere with the main application's flow, especially in a complex asynchronous environment like the Axon server.



   .. py:method:: run_in_thread()

      Manages the execution of the server in a separate thread, allowing the FastAPI application to run asynchronously without blocking the main thread of the Axon server. This method is a key component in enabling concurrent request handling in the Axon server.

      :Yields: *None* -- This method yields control back to the caller while the server is running in the background thread.



   .. py:method:: _wrapper_run()

      A wrapper method for the :func:`run_in_thread` context manager. This method is used internally by the ``start`` method to initiate the server's execution in a separate thread.



   .. py:method:: start()

      Starts the FastAPI server in a separate thread if it is not already running. This method sets up the server to handle HTTP requests concurrently, enabling the Axon server to efficiently manage incoming network requests.

      The method ensures that the server starts running in a non-blocking manner, allowing the Axon server to continue its other operations seamlessly.



   .. py:method:: stop()

      Signals the FastAPI server to stop running. This method sets the :func:`should_exit` flag to ``True``, indicating that the server should cease its operations and exit the running thread.

      Stopping the server is essential for controlled shutdowns and resource management in the Axon server, especially during maintenance or when redeploying with updated configurations.



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



.. py:function:: create_error_response(synapse)

   Creates an error response based on the provided synapse object.

   :param synapse: The synapse object containing details about the request and the associated axon.
   :type synapse: bittensor.core.synapse.Synapse

   :returns: A JSON response with a status code and content indicating the error message.
   :rtype: JSONResponse


.. py:function:: log_and_handle_error(synapse, exception, status_code = None, start_time = None)

   Logs the error and updates the synapse object with the appropriate error details.

   :param synapse: The synapse object to be updated with error information.
   :type synapse: bittensor.core.synapse.Synapse
   :param exception: The exception that was raised and needs to be logged and handled.
   :type exception: Exception
   :param status_code: The HTTP status code to be set on the synapse object. Defaults to None.
   :type status_code: Optional[int]
   :param start_time: The timestamp marking the start of the processing, used to calculate process time. Defaults to None.
   :type start_time: Optional[float]

   :returns: The updated synapse object with error details.
   :rtype: Synapse


.. py:class:: AxonMiddleware(app, axon)

   Bases: :py:obj:`starlette.middleware.base.BaseHTTPMiddleware`


   The `AxonMiddleware` class is a key component in the Axon server, responsible for processing all incoming requests.

   It handles the essential tasks of verifying requests, executing blacklist checks,
   running priority functions, and managing the logging of messages and errors. Additionally, the class
   is responsible for updating the headers of the response and executing the requested functions.

   This middleware acts as an intermediary layer in request handling, ensuring that each request is
   processed according to the defined rules and protocols of the Bittensor network. It plays a pivotal
   role in maintaining the integrity and security of the network communication.

   :param app: An instance of the FastAPI application to which this middleware is attached.
   :type app: FastAPI
   :param axon: The Axon instance that will process the requests.
   :type axon: bittensor.core.axon.Axon

   The middleware operates by intercepting incoming requests, performing necessary preprocessing
   (like verification and priority assessment), executing the request through the Axon's endpoints, and
   then handling any postprocessing steps such as response header updating and logging.

   Initialize the AxonMiddleware class.

   :param app: An instance of the application where the middleware processor is used.
   :type app: bittensor.core.axon.AxonMiddleware
   :param axon: The axon instance used to process the requests.
   :type axon: bittensor.core.axon.Axon


   .. py:attribute:: axon


   .. py:method:: dispatch(request, call_next)
      :async:


      Asynchronously processes incoming HTTP requests and returns the corresponding responses. This
      method acts as the central processing unit of the AxonMiddleware, handling each step in the
      request lifecycle.

      :param request: The incoming HTTP request to be processed.
      :type request: Request
      :param call_next: A callable that processes the request and returns a response.
      :type call_next: RequestResponseEndpoint

      :returns: The HTTP response generated after processing the request.
      :rtype: Response

      This method performs several key functions:

      1. Request Preprocessing: Sets up Synapse object from request headers and fills necessary information.
      2. Logging: Logs the start of request processing.
      3. Blacklist Checking: Verifies if the request is blacklisted.
      4. Request Verification: Ensures the authenticity and integrity of the request.
      5. Priority Assessment: Evaluates and assigns priority to the request.
      6. Request Execution: Calls the next function in the middleware chain to process the request.
      7. Response Postprocessing: Updates response headers and logs the end of the request processing.

      The method also handles exceptions and errors that might occur during each stage, ensuring that
      appropriate responses are returned to the client.



   .. py:method:: preprocess(request)
      :async:


      Performs the initial processing of the incoming request. This method is responsible for
      extracting relevant information from the request and setting up the Synapse object, which
      represents the state and context of the request within the Axon server.

      :param request: The incoming request to be preprocessed.
      :type request: Request

      :returns: The Synapse object representing the preprocessed state of the request.
      :rtype: bittensor.core.synapse.Synapse

      The preprocessing involves:

      1. Extracting the request name from the URL path.
      2. Creating a Synapse instance from the request headers using the appropriate class type.
      3. Filling in the Axon and Dendrite information into the Synapse object.
      4. Signing the Synapse from the Axon side using the wallet hotkey.

      This method sets the foundation for the subsequent steps in the request handling process,
      ensuring that all necessary information is encapsulated within the Synapse object.



   .. py:method:: verify(synapse)
      :async:


      Verifies the authenticity and integrity of the request. This method ensures that the incoming
      request meets the predefined security and validation criteria.

      :param synapse: The Synapse object representing the request.
      :type synapse: bittensor.core.synapse.Synapse

      :raises Exception: If the verification process fails due to unmet criteria or security concerns.

      The verification process involves:

      1. Retrieving the specific verification function for the request's Synapse type.
      2. Executing the verification function and handling any exceptions that arise.

      Successful verification allows the request to proceed further in the processing pipeline, while
      failure results in an appropriate exception being raised.



   .. py:method:: blacklist(synapse)
      :async:


      Checks if the request should be blacklisted. This method ensures that requests from disallowed
      sources or with malicious intent are blocked from processing. This can be extremely useful for
      preventing spam or other forms of abuse. The blacklist is a list of keys or identifiers that
      are prohibited from accessing certain resources.

      :param synapse: The Synapse object representing the request.
      :type synapse: bittensor.core.synapse.Synapse

      :raises Exception: If the request is found in the blacklist.

      The blacklist check involves:

      1. Retrieving the blacklist checking function for the request's Synapse type.
      2. Executing the check and handling the case where the request is blacklisted.

      If a request is blacklisted, it is blocked, and an exception is raised to halt further processing.



   .. py:method:: priority(synapse)
      :async:


      Executes the priority function for the request. This method assesses and assigns a priority
      level to the request, determining its urgency and importance in the processing queue.

      :param synapse: The Synapse object representing the request.
      :type synapse: bittensor.core.synapse.Synapse

      :raises Exception: If the priority assessment process encounters issues, such as timeouts.

      The priority function plays a crucial role in managing the processing load and ensuring that
      critical requests are handled promptly.



   .. py:method:: run(synapse, call_next, request)
      :async:


      Executes the requested function as part of the request processing pipeline. This method calls
      the next function in the middleware chain to process the request and generate a response.

      :param synapse: The Synapse object representing the request.
      :type synapse: bittensor.core.synapse.Synapse
      :param call_next: The next function in the middleware chain to process requests.
      :type call_next: RequestResponseEndpoint
      :param request: The original HTTP request.
      :type request: Request

      :returns: The HTTP response generated by processing the request.
      :rtype: Response

      This method is a critical part of the request lifecycle, where the actual processing of the
      request takes place, leading to the generation of a response.



   .. py:method:: synapse_to_response(synapse, start_time, *, response_override = None)
      :classmethod:

      :async:


      Converts the Synapse object into a JSON response with HTTP headers.

      :param synapse: The Synapse object representing the request.
      :type synapse: bittensor.core.synapse.Synapse
      :param start_time: The timestamp when the request processing started.
      :type start_time: float
      :param response_override: Instead of serializing the synapse, mutate the provided response object. This is only really useful for StreamingSynapse responses.

      :returns: The final HTTP response, with updated headers, ready to be sent back to the client.
      :rtype: Response

      Postprocessing is the last step in the request handling process, ensuring that the response is
      properly formatted and contains all necessary information.



