bittensor.core.chain_data.axon_info
===================================

.. py:module:: bittensor.core.chain_data.axon_info

.. autoapi-nested-parse::

   This module defines the :obj:`AxonInfo` class, a data structure used to represent information about an axon endpoint in the Bittensor network.



Classes
-------

.. autoapisummary::

   bittensor.core.chain_data.axon_info.AxonInfo


Module Contents
---------------

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



