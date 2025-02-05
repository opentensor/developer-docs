tests.unit_tests.test_dendrite
==============================

.. py:module:: tests.unit_tests.test_dendrite


Classes
-------

.. autoapisummary::

   tests.unit_tests.test_dendrite.AsyncMock
   tests.unit_tests.test_dendrite.SynapseDummy


Functions
---------

.. autoapisummary::

   tests.unit_tests.test_dendrite.axon_info
   tests.unit_tests.test_dendrite.cast_float
   tests.unit_tests.test_dendrite.cast_int
   tests.unit_tests.test_dendrite.dummy
   tests.unit_tests.test_dendrite.setup_axon
   tests.unit_tests.test_dendrite.setup_dendrite
   tests.unit_tests.test_dendrite.test_aclose
   tests.unit_tests.test_dendrite.test_close
   tests.unit_tests.test_dendrite.test_dendrite__call__handles_http_error_response
   tests.unit_tests.test_dendrite.test_dendrite__call__success_response
   tests.unit_tests.test_dendrite.test_dendrite_create_wallet
   tests.unit_tests.test_dendrite.test_forward_many
   tests.unit_tests.test_dendrite.test_init
   tests.unit_tests.test_dendrite.test_pre_process_synapse
   tests.unit_tests.test_dendrite.test_process_error_message
   tests.unit_tests.test_dendrite.test_repr
   tests.unit_tests.test_dendrite.test_str
   tests.unit_tests.test_dendrite.test_terminal_info_edge_cases
   tests.unit_tests.test_dendrite.test_terminal_info_error_cases
   tests.unit_tests.test_dendrite.test_terminal_info_happy_path


Module Contents
---------------

.. py:class:: AsyncMock(spec=None, side_effect=None, return_value=DEFAULT, wraps=None, name=None, spec_set=None, parent=None, _spec_state=None, _new_name='', _new_parent=None, **kwargs)

   Bases: :py:obj:`unittest.mock.Mock`


   Create a new `Mock` object. `Mock` takes several optional arguments
   that specify the behaviour of the Mock object:

   * `spec`: This can be either a list of strings or an existing object (a
     class or instance) that acts as the specification for the mock object. If
     you pass in an object then a list of strings is formed by calling dir on
     the object (excluding unsupported magic attributes and methods). Accessing
     any attribute not in this list will raise an `AttributeError`.

     If `spec` is an object (rather than a list of strings) then
     `mock.__class__` returns the class of the spec object. This allows mocks
     to pass `isinstance` tests.

   * `spec_set`: A stricter variant of `spec`. If used, attempting to *set*
     or get an attribute on the mock that isn't on the object passed as
     `spec_set` will raise an `AttributeError`.

   * `side_effect`: A function to be called whenever the Mock is called. See
     the `side_effect` attribute. Useful for raising exceptions or
     dynamically changing return values. The function is called with the same
     arguments as the mock, and unless it returns `DEFAULT`, the return
     value of this function is used as the return value.

     If `side_effect` is an iterable then each call to the mock will return
     the next value from the iterable. If any of the members of the iterable
     are exceptions they will be raised instead of returned.

   * `return_value`: The value returned when the mock is called. By default
     this is a new Mock (created on first access). See the
     `return_value` attribute.

   * `wraps`: Item for the mock object to wrap. If `wraps` is not None then
     calling the Mock will pass the call through to the wrapped object
     (returning the real result). Attribute access on the mock will return a
     Mock object that wraps the corresponding attribute of the wrapped object
     (so attempting to access an attribute that doesn't exist will raise an
     `AttributeError`).

     If the mock has an explicit `return_value` set then calls are not passed
     to the wrapped object and the `return_value` is returned instead.

   * `name`: If the mock has a name then it will be used in the repr of the
     mock. This can be useful for debugging. The name is propagated to child
     mocks.

   Mocks can also be called with arbitrary keyword arguments. These will be
   used to set attributes on the mock after it is created.


.. py:class:: SynapseDummy(/, **data)

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


   .. py:attribute:: input
      :type:  int


   .. py:attribute:: output
      :type:  Optional[int]
      :value: None



.. py:function:: axon_info()

.. py:function:: cast_float(value)

.. py:function:: cast_int(value)

.. py:function:: dummy(synapse)

.. py:function:: setup_axon()

.. py:function:: setup_dendrite()

.. py:function:: test_aclose(setup_dendrite, setup_axon)
   :async:


.. py:function:: test_close(setup_dendrite, setup_axon)

.. py:function:: test_dendrite__call__handles_http_error_response(axon_info, setup_dendrite, mock_aio_response)
   :async:


.. py:function:: test_dendrite__call__success_response(axon_info, setup_dendrite, mock_aio_response)
   :async:


.. py:function:: test_dendrite_create_wallet()

.. py:function:: test_forward_many()
   :async:


.. py:function:: test_init(setup_dendrite)

.. py:function:: test_pre_process_synapse()

.. py:function:: test_process_error_message(exception, expected_status_code, expected_message, synapse_timeout, synapse_ip, synapse_port, request_name, setup_dendrite)

.. py:function:: test_repr(setup_dendrite)

.. py:function:: test_str(setup_dendrite)

.. py:function:: test_terminal_info_edge_cases(status_code, process_time, port, version, nonce, expected_exception)

.. py:function:: test_terminal_info_error_cases(status_code, process_time, port, ip, version, nonce, expected_exception)

.. py:function:: test_terminal_info_happy_path(status_code, status_message, process_time, ip, port, version, nonce, uuid, hotkey, signature, expected)

