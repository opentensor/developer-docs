btwallet.utils
==============

.. py:module:: btwallet.utils


Attributes
----------

.. autoapisummary::

   btwallet.utils.SS58_FORMAT


Functions
---------

.. autoapisummary::

   btwallet.utils.get_ss58_format
   btwallet.utils.is_valid_ss58_address
   btwallet.utils.is_valid_ed25519_pubkey
   btwallet.utils.is_valid_bittensor_address_or_public_key


Module Contents
---------------

.. py:data:: SS58_FORMAT
   :value: 42


.. py:function:: get_ss58_format(ss58_address)

   Returns the ss58 format of the given ss58 address.


.. py:function:: is_valid_ss58_address(address)

   Checks if the given address is a valid ss58 address.

   :param address: The address to check.
   :type address: str

   :returns: True if the address is a valid ss58 address for Bittensor, False otherwise.


.. py:function:: is_valid_ed25519_pubkey(public_key)

   Checks if the given public_key is a valid ed25519 key.

   :param public_key: The public_key to check.
   :type public_key: Union[str, bytes]

   :returns: True if the public_key is a valid ed25519 key, False otherwise.


.. py:function:: is_valid_bittensor_address_or_public_key(address)

   Checks if the given address is a valid destination address.

   :param address: The address to check.
   :type address: Union[str, bytes]

   :returns: True if the address is a valid destination address, False otherwise.


