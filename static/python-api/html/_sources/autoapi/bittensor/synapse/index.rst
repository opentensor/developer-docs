:py:mod:`bittensor.synapse`
===========================

.. py:module:: bittensor.synapse


Module Contents
---------------

Classes
~~~~~~~

.. autoapisummary::

   bittensor.synapse.Synapse
   bittensor.synapse.TerminalInfo



Functions
~~~~~~~~~

.. autoapisummary::

   bittensor.synapse.cast_float
   bittensor.synapse.cast_int
   bittensor.synapse.get_size



.. py:class:: Synapse(**data: Any)


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
   :type dendrite: TerminalInfo
   :param axon: Information about the axon terminal.
   :type axon: TerminalInfo
   :param computed_body_hash: Computed hash of the request body.
   :type computed_body_hash: str
   :param required_hash_fields: Fields required to compute the body hash.
   :type required_hash_fields: List[str]

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

   Raises ValidationError if the input data cannot be parsed to form a valid model.

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

   .. py:property:: failed_verification
      :type: bool

      Checks if the dendrite's status code indicates failed verification.

      This method returns ``True`` if the status code of the dendrite is ``401``,
      which is the HTTP status code for unauthorized access.

      :returns: ``True`` if dendrite's status code is ``401``, ``False`` otherwise.
      :rtype: bool

   .. py:property:: is_blacklist
      :type: bool

      Checks if the dendrite's status code indicates a blacklisted request.

      This method returns ``True`` if the status code of the dendrite is ``403``,
      which is the HTTP status code for a forbidden request.

      :returns: ``True`` if dendrite's status code is ``403``, ``False`` otherwise.
      :rtype: bool

   .. py:property:: is_failure
      :type: bool

      Checks if the dendrite's status code indicates failure.

      This method returns ``True`` if the status code of the dendrite is not ``200``,
      which would mean the HTTP request was not successful.

      :returns: ``True`` if dendrite's status code is not ``200``, ``False`` otherwise.
      :rtype: bool

   .. py:property:: is_success
      :type: bool

      Checks if the dendrite's status code indicates success.

      This method returns ``True`` if the status code of the dendrite is ``200``,
      which typically represents a successful HTTP request.

      :returns: ``True`` if dendrite's status code is ``200``, ``False`` otherwise.
      :rtype: bool

   .. py:property:: is_timeout
      :type: bool

      Checks if the dendrite's status code indicates a timeout.

      This method returns ``True`` if the status code of the dendrite is ``408``,
      which is the HTTP status code for a request timeout.

      :returns: ``True`` if dendrite's status code is ``408``, ``False`` otherwise.
      :rtype: bool

   .. py:attribute:: _extract_header_size

      

   .. py:attribute:: _extract_timeout

      

   .. py:attribute:: _extract_total_size

      

   .. py:attribute:: axon
      :type: Optional[TerminalInfo]

      

   .. py:attribute:: computed_body_hash
      :type: Optional[str]

      

   .. py:attribute:: dendrite
      :type: Optional[TerminalInfo]

      

   .. py:attribute:: header_size
      :type: Optional[int]

      

   .. py:attribute:: model_config

      

   .. py:attribute:: name
      :type: Optional[str]

      

   .. py:attribute:: required_hash_fields
      :type: ClassVar[Tuple[str, Ellipsis]]
      :value: ()

      

   .. py:attribute:: timeout
      :type: Optional[float]

      

   .. py:attribute:: total_size
      :type: Optional[int]

      

   .. py:method:: __setattr__(name: str, value: Any)

      Override the :func:`__setattr__` method to make the ``required_hash_fields`` property read-only.

      This is a security mechanism such that the ``required_hash_fields`` property cannot be
      overridden by the user or malicious code.


   .. py:method:: deserialize() -> Synapse

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


   .. py:method:: from_headers(headers: dict) -> Synapse
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
      :rtype: Synapse


   .. py:method:: get_required_fields()

      Get the required fields from the model's JSON schema.


   .. py:method:: get_total_size() -> int

      Get the total size of the current object.

      This method first calculates the size of the current object, then assigns it
      to the instance variable :func:`self.total_size` and finally returns this value.

      :returns: The total size of the current object.
      :rtype: int


   .. py:method:: parse_headers_to_inputs(headers: dict) -> dict
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


   .. py:method:: set_name_type(values) -> dict


   .. py:method:: to_headers() -> dict

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



.. py:class:: TerminalInfo(**data: Any)


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
   :param nonce: Unix timestamp that linearly increases for each request, ensuring requests cannot be duplicated or repeated
   :type nonce: int
   :param uuid: Unique identifier for the terminal, fundamental for network security and identification.
   :type uuid: str
   :param hotkey: Encoded hotkey string of the terminal wallet, important for transaction and identity verification in the network.
   :type hotkey: str
   :param signature: Digital signature verifying the tuple of nonce, axon_hotkey, dendrite_hotkey, and uuid, critical for ensuring data authenticity and security.
   :type signature: str

   Usage::

       # Creating a TerminalInfo instance
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

   Raises ValidationError if the input data cannot be parsed to form a valid model.

   .. py:attribute:: _extract_nonce

      

   .. py:attribute:: _extract_port

      

   .. py:attribute:: _extract_process_time

      

   .. py:attribute:: _extract_status_code

      

   .. py:attribute:: _extract_version

      

   .. py:attribute:: hotkey
      :type: Optional[str]

      

   .. py:attribute:: ip
      :type: Optional[str]

      

   .. py:attribute:: model_config

      

   .. py:attribute:: nonce
      :type: Optional[int]

      

   .. py:attribute:: port
      :type: Optional[int]

      

   .. py:attribute:: process_time
      :type: Optional[float]

      

   .. py:attribute:: signature
      :type: Optional[str]

      

   .. py:attribute:: status_code
      :type: Optional[int]

      

   .. py:attribute:: status_message
      :type: Optional[str]

      

   .. py:attribute:: uuid
      :type: Optional[str]

      

   .. py:attribute:: version
      :type: Optional[int]

      


.. py:function:: cast_float(raw: str) -> float

   Converts a string to a float, if the string is not ``None``.

   This function attempts to convert a string to a float. If the string is ``None``, it simply returns ``None``.

   :param raw: The string to convert.
   :type raw: str

   :returns: The converted float, or ``None`` if the input was ``None``.
   :rtype: float or None


.. py:function:: cast_int(raw: str) -> int

   Converts a string to an integer, if the string is not ``None``.

   This function attempts to convert a string to an integer. If the string is ``None``, it simply returns ``None``.

   :param raw: The string to convert.
   :type raw: str

   :returns: The converted integer, or ``None`` if the input was ``None``.
   :rtype: int or None


.. py:function:: get_size(obj, seen=None) -> int

   Recursively finds size of objects.

   This function traverses every item of a given object and sums their sizes to compute the total size.

   :param obj: The object to get the size of.
   :type obj: any type
   :param seen: Set of object ids that have been calculated.
   :type seen: set

   :returns: The total size of the object.
   :rtype: int


