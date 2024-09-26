bittensor.utils.wallet_utils
============================

.. py:module:: bittensor.utils.wallet_utils


Functions
---------

.. autoapisummary::

   bittensor.utils.wallet_utils.get_ss58_format
   bittensor.utils.wallet_utils.is_valid_ss58_address
   bittensor.utils.wallet_utils.is_valid_ed25519_pubkey
   bittensor.utils.wallet_utils.is_valid_bittensor_address_or_public_key
   bittensor.utils.wallet_utils.create_identity_dict
   bittensor.utils.wallet_utils.decode_hex_identity_dict


Module Contents
---------------

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


.. py:function:: create_identity_dict(display = '', legal = '', web = '', riot = '', email = '', pgp_fingerprint = None, image = '', info = '', twitter = '')

   Creates a dictionary with structure for identity extrinsic. Must fit within 64 bits.

   :param display: String to be converted and stored under 'display'.
   :type display: str
   :param legal: String to be converted and stored under 'legal'.
   :type legal: str
   :param web: String to be converted and stored under 'web'.
   :type web: str
   :param riot: String to be converted and stored under 'riot'.
   :type riot: str
   :param email: String to be converted and stored under 'email'.
   :type email: str
   :param pgp_fingerprint: String to be converted and stored under 'pgp_fingerprint'.
   :type pgp_fingerprint: str
   :param image: String to be converted and stored under 'image'.
   :type image: str
   :param info: String to be converted and stored under 'info'.
   :type info: str
   :param twitter: String to be converted and stored under 'twitter'.
   :type twitter: str

   :returns: A dictionary with the specified structure and byte string conversions.
   :rtype: dict

   Raises:
   ValueError: If pgp_fingerprint is not exactly 20 bytes long when encoded.


.. py:function:: decode_hex_identity_dict(info_dictionary)

