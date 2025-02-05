bittensor.utils.networking
==========================

.. py:module:: bittensor.utils.networking

.. autoapi-nested-parse::

   Utils for handling local network with ip and ports.



Exceptions
----------

.. autoapisummary::

   bittensor.utils.networking.ExternalIPNotFound


Functions
---------

.. autoapisummary::

   bittensor.utils.networking.get_external_ip
   bittensor.utils.networking.get_formatted_ws_endpoint_url
   bittensor.utils.networking.int_to_ip
   bittensor.utils.networking.ip__str__
   bittensor.utils.networking.ip_to_int
   bittensor.utils.networking.ip_version


Module Contents
---------------

.. py:exception:: ExternalIPNotFound

   Bases: :py:obj:`Exception`


   Raised if we cannot attain your external ip from CURL/URLLIB/IPIFY/AWS

   Initialize self.  See help(type(self)) for accurate signature.


.. py:function:: get_external_ip()

   Checks CURL/URLLIB/IPIFY/AWS for your external ip.
   :returns:     Your routers external facing ip as a string.
   :rtype: external_ip  (:obj:`str` `required`)

   :raises ExternalIPNotFound (Exception): Raised if all external ip attempts fail.


.. py:function:: get_formatted_ws_endpoint_url(endpoint_url)

   Returns a formatted websocket endpoint url.
   Note: The port (or lack thereof) is left unchanged
   :param endpoint_url: The endpoint url to format.
   :type endpoint_url: Optional[str]

   :returns:

             The formatted endpoint url. In the form of ws://<endpoint_url> or
                 wss://<endpoint_url>
   :rtype: formatted_endpoint_url (Optional[str])


.. py:function:: int_to_ip(int_val)

   Maps an integer to a unique ip-string
   :param int_val: The integer representation of an ip. Must be in the range (0, 3.4028237e+38).
   :type int_val: int

   :returns:     The string representation of an ip. Of form *.*.*.* for ipv4 or *::*:*:*:* for ipv6
   :rtype: str_val (str)

   :raises netaddr.core.AddrFormatError (Exception): Raised when the passed int_vals is not a valid ip int value.


.. py:function:: ip__str__(ip_type, ip_str, port)

   Return a formatted ip string


.. py:function:: ip_to_int(str_val)

   Maps an ip-string to a unique integer.
   arg:
       str_val (:tyep:`str`, `required):
           The string representation of an ip. Of form *.*.*.* for ipv4 or *::*:*:*:* for ipv6

   :returns:     The integer representation of an ip. Must be in the range (0, 3.4028237e+38).
   :rtype: int_val  (:type:`int128`, `required`)

   :raises netaddr.core.AddrFormatError (Exception): Raised when the passed str_val is not a valid ip string value.


.. py:function:: ip_version(str_val)

   Returns the ip version (IPV4 or IPV6).
   arg:
       str_val (:tyep:`str`, `required):
           The string representation of an ip. Of form *.*.*.* for ipv4 or *::*:*:*:* for ipv6

   :returns:     The ip version (Either 4 or 6 for IPv4/IPv6)
   :rtype: int_val  (:type:`int128`, `required`)

   :raises netaddr.core.AddrFormatError (Exception): Raised when the passed str_val is not a valid ip string value.


