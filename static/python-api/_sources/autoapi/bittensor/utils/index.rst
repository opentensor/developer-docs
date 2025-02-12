bittensor.utils
===============

.. py:module:: bittensor.utils


Submodules
----------

.. toctree::
   :maxdepth: 1

   /autoapi/bittensor/utils/axon_utils/index
   /autoapi/bittensor/utils/balance/index
   /autoapi/bittensor/utils/btlogging/index
   /autoapi/bittensor/utils/delegates_details/index
   /autoapi/bittensor/utils/deprecated/index
   /autoapi/bittensor/utils/formatting/index
   /autoapi/bittensor/utils/mock/index
   /autoapi/bittensor/utils/networking/index
   /autoapi/bittensor/utils/registration/index
   /autoapi/bittensor/utils/subnets/index
   /autoapi/bittensor/utils/substrate_utils/index
   /autoapi/bittensor/utils/version/index
   /autoapi/bittensor/utils/weight_utils/index


Attributes
----------

.. autoapisummary::

   bittensor.utils.Certificate
   bittensor.utils.RAOPERTAO
   bittensor.utils.U16_MAX
   bittensor.utils.U64_MAX
   bittensor.utils.VersionCheckError
   bittensor.utils.check_version
   bittensor.utils.hex_to_bytes
   bittensor.utils.logging
   bittensor.utils.ss58_decode
   bittensor.utils.torch
   bittensor.utils.use_torch
   bittensor.utils.version_checking


Classes
-------

.. autoapisummary::

   bittensor.utils.UnlockStatus


Functions
---------

.. autoapisummary::

   bittensor.utils.decode_hex_identity_dict
   bittensor.utils.format_error_message
   bittensor.utils.get_explorer_url_for_network
   bittensor.utils.get_hash
   bittensor.utils.is_valid_bittensor_address_or_public_key
   bittensor.utils.is_valid_ss58_address
   bittensor.utils.ss58_address_to_bytes
   bittensor.utils.ss58_to_vec_u8
   bittensor.utils.strtobool
   bittensor.utils.u16_normalized_float
   bittensor.utils.u64_normalized_float
   bittensor.utils.unlock_key
   bittensor.utils.validate_chain_endpoint


Package Contents
----------------

.. py:data:: Certificate

.. py:data:: RAOPERTAO
   :value: 1000000000.0


.. py:data:: U16_MAX
   :value: 65535


.. py:data:: U64_MAX
   :value: 18446744073709551615


.. py:class:: UnlockStatus

   Bases: :py:obj:`tuple`


   .. py:attribute:: message


   .. py:attribute:: success


.. py:data:: VersionCheckError

.. py:data:: check_version

.. py:function:: decode_hex_identity_dict(info_dictionary)

   Decodes hex-encoded strings in a dictionary.

   This function traverses the given dictionary, identifies hex-encoded strings, and decodes them into readable
       strings. It handles nested dictionaries and lists within the dictionary.

   :param info_dictionary: The dictionary containing hex-encoded strings to decode.
   :type info_dictionary: dict

   :returns: The dictionary with decoded strings.
   :rtype: dict

   .. admonition:: Examples

      input_dict = {
      ...     "name": {"value": "0x6a6f686e"},
      ...     "additional": [
      ...         [{"data": "0x64617461"}]
      ...     ]
      ... }
      decode_hex_identity_dict(input_dict)
      {'name': 'john', 'additional': [('data', 'data')]}


.. py:function:: format_error_message(error_message)

   Formats an error message from the Subtensor error information for use in extrinsics.

   :param error_message: A dictionary containing the error information from Subtensor, or a SubstrateRequestException
                         containing dictionary literal args.

   :returns: A formatted error message string.
   :rtype: str


.. py:function:: get_explorer_url_for_network(network, block_hash, network_map)

   Returns the explorer url for the given block hash and network.

   :param network: The network to get the explorer url for.
   :type network: str
   :param block_hash: The block hash to get the explorer url for.
   :type block_hash: str
   :param network_map: The network maps to get the explorer urls from.
   :type network_map: dict[str, dict[str, str]]

   :returns: The explorer url for the given block hash and network.
             Or None if the network is not known.


.. py:function:: get_hash(content, encoding='utf-8')

.. py:data:: hex_to_bytes

.. py:function:: is_valid_bittensor_address_or_public_key(address)

   Checks if the given address is a valid destination address.

   :param address: The address to check.
   :type address: Union[str, bytes]

   :returns: True if the address is a valid destination address, False otherwise.


.. py:function:: is_valid_ss58_address(address)

   Checks if the given address is a valid ss58 address.

   :param address: The address to check.
   :type address: str

   :returns: True if the address is a valid ss58 address for Bittensor, False otherwise.


.. py:data:: logging

.. py:function:: ss58_address_to_bytes(ss58_address)

   Converts a ss58 address to a bytes object.


.. py:data:: ss58_decode

.. py:function:: ss58_to_vec_u8(ss58_address)

.. py:function:: strtobool(val)

   Converts a string to a boolean value.

   truth-y values are 'y', 'yes', 't', 'true', 'on', and '1';
   false-y values are 'n', 'no', 'f', 'false', 'off', and '0'.

   Raises ValueError if 'val' is anything else.


.. py:data:: torch

.. py:function:: u16_normalized_float(x)

.. py:function:: u64_normalized_float(x)

.. py:function:: unlock_key(wallet, unlock_type='coldkey')

   Attempts to decrypt a wallet's coldkey or hotkey
   :param wallet: a Wallet object
   :param unlock_type: the key type, 'coldkey' or 'hotkey'

   Returns: UnlockStatus for success status of unlock, with error message if unsuccessful


.. py:data:: use_torch

.. py:function:: validate_chain_endpoint(endpoint_url)

   Validates if the provided endpoint URL is a valid WebSocket URL.


.. py:data:: version_checking

