tests.unit_tests.test_synapse
=============================

.. py:module:: tests.unit_tests.test_synapse


Classes
-------

.. autoapisummary::

   tests.unit_tests.test_synapse.HashedSynapse
   tests.unit_tests.test_synapse.LegacyHashedSynapse


Functions
---------

.. autoapisummary::

   tests.unit_tests.test_synapse.test_body_hash_override
   tests.unit_tests.test_synapse.test_custom_synapse
   tests.unit_tests.test_synapse.test_default_instance_fields_dict_consistency
   tests.unit_tests.test_synapse.test_from_headers
   tests.unit_tests.test_synapse.test_parse_headers_to_inputs
   tests.unit_tests.test_synapse.test_synapse_body_hash
   tests.unit_tests.test_synapse.test_synapse_create


Module Contents
---------------

.. py:class:: HashedSynapse(/, **data)

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


   .. py:attribute:: a
      :type:  int


   .. py:attribute:: b
      :type:  int


   .. py:attribute:: c
      :type:  Optional[int]
      :value: None



   .. py:attribute:: d
      :type:  Optional[list[str]]
      :value: None



   .. py:attribute:: required_hash_fields
      :type:  ClassVar[tuple[str, Ellipsis]]
      :value: ('a', 'b', 'd')



.. py:class:: LegacyHashedSynapse(/, **data)

   Bases: :py:obj:`bittensor.core.synapse.Synapse`


   Legacy Synapse subclass that serialized `required_hash_fields`.

   Create a new model by parsing and validating input data from keyword arguments.

   Raises [`ValidationError`][pydantic_core.ValidationError] if the input data cannot be
   validated to form a valid model.

   `self` is explicitly positional-only to allow `self` as a field name.


   .. py:attribute:: a
      :type:  int


   .. py:attribute:: b
      :type:  int


   .. py:attribute:: c
      :type:  Optional[int]
      :value: None



   .. py:attribute:: d
      :type:  Optional[list[str]]
      :value: None



   .. py:attribute:: required_hash_fields
      :type:  Optional[list[str]]
      :value: ['b', 'a', 'd']



.. py:function:: test_body_hash_override()

.. py:function:: test_custom_synapse()

.. py:function:: test_default_instance_fields_dict_consistency()

.. py:function:: test_from_headers()

.. py:function:: test_parse_headers_to_inputs()

.. py:function:: test_synapse_body_hash(synapse_cls)

.. py:function:: test_synapse_create()

