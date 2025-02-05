tests.unit_tests.test_axon
==========================

.. py:module:: tests.unit_tests.test_axon


Classes
-------

.. autoapisummary::

   tests.unit_tests.test_axon.AxonMock
   tests.unit_tests.test_axon.MockHotkey
   tests.unit_tests.test_axon.MockInfo
   tests.unit_tests.test_axon.MockWallet
   tests.unit_tests.test_axon.SynapseHTTPClient
   tests.unit_tests.test_axon.SynapseMock
   tests.unit_tests.test_axon.TestAxonHTTPAPIResponses
   tests.unit_tests.test_axon.TestAxonMiddleware


Functions
---------

.. autoapisummary::

   tests.unit_tests.test_axon.axon_instance
   tests.unit_tests.test_axon.blacklist_fn_fail
   tests.unit_tests.test_axon.blacklist_fn_pass
   tests.unit_tests.test_axon.is_nonce_within_allowed_window
   tests.unit_tests.test_axon.middleware
   tests.unit_tests.test_axon.mock_request
   tests.unit_tests.test_axon.priority_fn_pass
   tests.unit_tests.test_axon.priority_fn_timeout
   tests.unit_tests.test_axon.test_allowed_nonce_window_ns
   tests.unit_tests.test_axon.test_attach
   tests.unit_tests.test_axon.test_attach_initial
   tests.unit_tests.test_axon.test_axon_str_representation
   tests.unit_tests.test_axon.test_blacklist_fail
   tests.unit_tests.test_axon.test_blacklist_pass
   tests.unit_tests.test_axon.test_create_error_response
   tests.unit_tests.test_axon.test_invalid_ip_address
   tests.unit_tests.test_axon.test_log_and_handle_error
   tests.unit_tests.test_axon.test_nonce_diff_seconds
   tests.unit_tests.test_axon.test_nonce_within_allowed_window
   tests.unit_tests.test_axon.test_priority_pass
   tests.unit_tests.test_axon.test_to_string
   tests.unit_tests.test_axon.test_valid_ipv4_and_ipv6_address
   tests.unit_tests.test_axon.test_verify_body_integrity_edge_cases
   tests.unit_tests.test_axon.test_verify_body_integrity_error_cases
   tests.unit_tests.test_axon.test_verify_body_integrity_happy_path
   tests.unit_tests.test_axon.test_verify_fail
   tests.unit_tests.test_axon.test_verify_pass
   tests.unit_tests.test_axon.verify_fn_fail
   tests.unit_tests.test_axon.verify_fn_pass


Module Contents
---------------

.. py:class:: AxonMock

   .. py:attribute:: blacklist_fns


   .. py:attribute:: forward_class_types


   .. py:attribute:: forward_fns


   .. py:attribute:: priority_fns


   .. py:attribute:: status_code
      :value: None



   .. py:attribute:: thread_pool


   .. py:attribute:: verify_fns


.. py:class:: MockHotkey(ss58_address)

   .. py:method:: sign(*args, **kwargs)


   .. py:attribute:: ss58_address


.. py:class:: MockInfo

   .. py:method:: to_string()


.. py:class:: MockWallet

   .. py:attribute:: coldkey
      :type:  Any
      :value: None



   .. py:attribute:: coldkeypub
      :type:  Any
      :value: None



   .. py:attribute:: hotkey
      :type:  Any


.. py:class:: SynapseHTTPClient(app, base_url = 'http://testserver', raise_server_exceptions = True, root_path = '', backend = 'asyncio', backend_options = None, cookies = None, headers = None, follow_redirects = True)

   Bases: :py:obj:`fastapi.testclient.TestClient`


   An HTTP client, with connection pooling, HTTP/2, redirects, cookie persistence, etc.

   It can be shared between threads.

   Usage:

   ```python
   >>> client = httpx.Client()
   >>> response = client.get('https://example.org')
   ```

   **Parameters:**

   * **auth** - *(optional)* An authentication class to use when sending
   requests.
   * **params** - *(optional)* Query parameters to include in request URLs, as
   a string, dictionary, or sequence of two-tuples.
   * **headers** - *(optional)* Dictionary of HTTP headers to include when
   sending requests.
   * **cookies** - *(optional)* Dictionary of Cookie items to include when
   sending requests.
   * **verify** - *(optional)* Either `True` to use an SSL context with the
   default CA bundle, `False` to disable verification, or an instance of
   `ssl.SSLContext` to use a custom context.
   * **http2** - *(optional)* A boolean indicating if HTTP/2 support should be
   enabled. Defaults to `False`.
   * **proxy** - *(optional)* A proxy URL where all the traffic should be routed.
   * **timeout** - *(optional)* The timeout configuration to use when sending
   requests.
   * **limits** - *(optional)* The limits configuration to use.
   * **max_redirects** - *(optional)* The maximum number of redirect responses
   that should be followed.
   * **base_url** - *(optional)* A URL to use as the base when building
   request URLs.
   * **transport** - *(optional)* A transport class to use for sending requests
   over the network.
   * **trust_env** - *(optional)* Enables or disables usage of environment
   variables for configuration.
   * **default_encoding** - *(optional)* The default encoding to use for decoding
   response text, if no charset information is included in a response Content-Type
   header. Set to a callable for automatic character set detection. Default: "utf-8".


   .. py:method:: post_synapse(synapse)


.. py:class:: SynapseMock(/, **data)

   Bases: :py:obj:`bittensor.core.synapse.Synapse`


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


.. py:class:: TestAxonHTTPAPIResponses

   .. py:class:: NonDeterministicHeaders(/, **data)

      Bases: :py:obj:`pydantic.BaseModel`


      Helper class to verify headers.

      Size headers are non-determistic as for example, header_size depends on non-deterministic
      processing-time value.

      Create a new model by parsing and validating input data from keyword arguments.

      Raises [`ValidationError`][pydantic_core.ValidationError] if the input data cannot be
      validated to form a valid model.

      `self` is explicitly positional-only to allow `self` as a field name.


      .. py:attribute:: bt_header_axon_process_time
         :type:  float
         :value: None



      .. py:attribute:: content_length
         :type:  Optional[int]
         :value: None



      .. py:attribute:: header_size
         :type:  int
         :value: None



      .. py:attribute:: timeout
         :type:  float
         :value: None



      .. py:attribute:: total_size
         :type:  int
         :value: None




   .. py:method:: assert_headers(response, expected_headers)


   .. py:method:: axon()


   .. py:method:: custom_synapse_cls()


   .. py:method:: http_client(axon)


   .. py:method:: no_verify_axon(axon)


   .. py:method:: no_verify_fn(synapse)
      :async:



   .. py:method:: streaming_synapse_cls()


   .. py:method:: test_ping__no_dendrite(http_client)
      :async:



   .. py:method:: test_ping__without_verification(http_client, axon)
      :async:



   .. py:method:: test_synapse__exception_with_set_status_code(http_client, axon, custom_synapse_cls, no_verify_axon)
      :async:



   .. py:method:: test_synapse__explicitly_set_status_code(http_client, axon, custom_synapse_cls, no_verify_axon)
      :async:



   .. py:method:: test_synapse__internal_error(http_client, axon, custom_synapse_cls, no_verify_axon)
      :async:



   .. py:method:: test_unknown_path(http_client)
      :async:



.. py:class:: TestAxonMiddleware(methodName='runTest')

   Bases: :py:obj:`unittest.IsolatedAsyncioTestCase`


   A class whose instances are single test cases.

   By default, the test code itself should be placed in a method named
   'runTest'.

   If the fixture may be used for many test cases, create as
   many test methods as are needed. When instantiating such a TestCase
   subclass, specify in the constructor arguments the name of the test method
   that the instance is to execute.

   Test authors should subclass TestCase for their own tests. Construction
   and deconstruction of the test's environment ('fixture') can be
   implemented by overriding the 'setUp' and 'tearDown' methods respectively.

   If it is necessary to override the __init__ method, the base class
   __init__ method must always be called. It is important that subclasses
   should not change the signature of their __init__ method, since instances
   of the classes are instantiated automatically by parts of the framework
   in order to be run.

   When subclassing TestCase, you can set these attributes:
   * failureException: determines which exception will be raised when
       the instance's assertion methods fail; test methods raising this
       exception will be deemed to have 'failed' rather than 'errored'.
   * longMessage: determines whether long messages (including repr of
       objects used in assert methods) will be printed on failure in *addition*
       to any explicit message passed.
   * maxDiff: sets the maximum length of a diff in failure messages
       by assert methods using difflib. It is looked up as an instance
       attribute so can be configured by individual tests if required.

   Create an instance of the class that will use the named test
   method when executed. Raises a ValueError if the instance does
   not have a method with the specified name.


   .. py:method:: setUp()

      Hook method for setting up the test fixture before exercising it.



   .. py:method:: test_preprocess()
      :async:



.. py:function:: axon_instance()

.. py:function:: blacklist_fn_fail(synapse)

.. py:function:: blacklist_fn_pass(synapse)

.. py:function:: is_nonce_within_allowed_window(synapse_nonce, allowed_window_ns)

.. py:function:: middleware()

.. py:function:: mock_request()

.. py:function:: priority_fn_pass(synapse)

.. py:function:: priority_fn_timeout(synapse)

.. py:function:: test_allowed_nonce_window_ns()

.. py:function:: test_attach()

.. py:function:: test_attach_initial()

.. py:function:: test_axon_str_representation(ip, port, ss58_address, started, forward_fns, expected_str, test_id)

.. py:function:: test_blacklist_fail(middleware)
   :async:


.. py:function:: test_blacklist_pass(middleware)
   :async:


.. py:function:: test_create_error_response()

.. py:function:: test_invalid_ip_address(ip, port, expected_exception)

.. py:function:: test_log_and_handle_error()

.. py:function:: test_nonce_diff_seconds(nonce_offset_seconds)

.. py:function:: test_nonce_within_allowed_window(nonce_offset_seconds, expected_result)

.. py:function:: test_priority_pass(middleware)
   :async:


.. py:function:: test_to_string(info_return, expected_output, test_id)

.. py:function:: test_valid_ipv4_and_ipv6_address(ip, port, expected_ip_type, test_id)

.. py:function:: test_verify_body_integrity_edge_cases(mock_request, axon_instance, body, expected_exception_name)
   :async:


.. py:function:: test_verify_body_integrity_error_cases(mock_request, axon_instance, computed_hash, expected_error)
   :async:


.. py:function:: test_verify_body_integrity_happy_path(mock_request, axon_instance, body, expected)
   :async:


.. py:function:: test_verify_fail(middleware)
   :async:


.. py:function:: test_verify_pass(middleware)
   :async:


.. py:function:: verify_fn_fail(synapse)

.. py:function:: verify_fn_pass(synapse)

