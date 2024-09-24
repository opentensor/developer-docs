bittensor.core.chain_data.ip_info
=================================

.. py:module:: bittensor.core.chain_data.ip_info


Classes
-------

.. autoapisummary::

   bittensor.core.chain_data.ip_info.IPInfo


Module Contents
---------------

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



