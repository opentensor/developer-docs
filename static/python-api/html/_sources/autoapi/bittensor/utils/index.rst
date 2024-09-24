bittensor.utils
===============

.. py:module:: bittensor.utils


Subpackages
-----------

.. toctree::
   :maxdepth: 1

   /autoapi/bittensor/utils/btlogging/index
   /autoapi/bittensor/utils/mock/index


Submodules
----------

.. toctree::
   :maxdepth: 1

   /autoapi/bittensor/utils/axon_utils/index
   /autoapi/bittensor/utils/balance/index
   /autoapi/bittensor/utils/deprecated/index
   /autoapi/bittensor/utils/networking/index
   /autoapi/bittensor/utils/registration/index
   /autoapi/bittensor/utils/subnets/index
   /autoapi/bittensor/utils/version/index
   /autoapi/bittensor/utils/weight_utils/index


Attributes
----------

.. autoapisummary::

   bittensor.utils.SS58_FORMAT
   bittensor.utils.logging
   bittensor.utils.torch
   bittensor.utils.RAOPERTAO
   bittensor.utils.U16_MAX
   bittensor.utils.U64_MAX


Exceptions
----------

.. autoapisummary::

   bittensor.utils.VersionCheckError


Functions
---------

.. autoapisummary::

   bittensor.utils.use_torch
   bittensor.utils.version_checking
   bittensor.utils.check_version
   bittensor.utils.ss58_to_vec_u8
   bittensor.utils.strtobool
   bittensor.utils._get_explorer_root_url_by_network_from_map
   bittensor.utils.get_explorer_url_for_network
   bittensor.utils.ss58_address_to_bytes
   bittensor.utils.u16_normalized_float
   bittensor.utils.u64_normalized_float
   bittensor.utils.get_hash
   bittensor.utils.format_error_message
   bittensor.utils.is_valid_ss58_address
   bittensor.utils._is_valid_ed25519_pubkey
   bittensor.utils.is_valid_bittensor_address_or_public_key


Package Contents
----------------

.. py:data:: SS58_FORMAT
   :value: 42


.. py:data:: logging

.. py:data:: torch

.. py:function:: use_torch()

   Force the use of torch over numpy for certain operations.


.. py:function:: version_checking(timeout = 15)

   Deprecated, kept for backwards compatibility. Use check_version() instead.

   :param timeout: The timeout for calling :func:``check_version`` function. Default is ``15``.
   :type timeout: int


.. py:function:: check_version(timeout = 15)

   Check if the current version of Bittensor is up-to-date with the latest version on PyPi.
   Raises a VersionCheckError if the version check fails.

   :param timeout: The timeout for the request to PyPI in seconds. Default is ``15``.
   :type timeout: int


.. py:exception:: VersionCheckError

   Bases: :py:obj:`Exception`


   Exception raised for errors in the version check process.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:data:: RAOPERTAO
   :value: 1000000000.0


.. py:data:: U16_MAX
   :value: 65535


.. py:data:: U64_MAX
   :value: 18446744073709551615


.. py:function:: ss58_to_vec_u8(ss58_address)

.. py:function:: strtobool(val)

   Converts a string to a boolean value.

   truth-y values are 'y', 'yes', 't', 'true', 'on', and '1';
   false-y values are 'n', 'no', 'f', 'false', 'off', and '0'.

   Raises ValueError if 'val' is anything else.


.. py:function:: _get_explorer_root_url_by_network_from_map(network, network_map)

   Returns the explorer root url for the given network name from the given network map.

   :param network: The network to get the explorer url for.
   :type network: str
   :param network_map: The network map to get the explorer url from.
   :type network_map: dict[str, str]

   :returns: The explorer url for the given network.
             Or None if the network is not in the network map.


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


.. py:function:: ss58_address_to_bytes(ss58_address)

   Converts a ss58 address to a bytes object.


.. py:function:: u16_normalized_float(x)

.. py:function:: u64_normalized_float(x)

.. py:function:: get_hash(content, encoding='utf-8')

.. py:function:: format_error_message(error_message, substrate = None)

   Formats an error message from the Subtensor error information for use in extrinsics.

   :param error_message: A dictionary containing the error information from Subtensor.
   :type error_message: dict
   :param substrate: The substrate interface to use.
   :type substrate: SubstrateInterface, optional

   :returns: A formatted error message string.
   :rtype: str


.. py:function:: is_valid_ss58_address(address)

   Checks if the given address is a valid ss58 address.

   :param address: The address to check.
   :type address: str

   :returns: True if the address is a valid ss58 address for Bittensor, False otherwise.


.. py:function:: _is_valid_ed25519_pubkey(public_key)

   Checks if the given public_key is a valid ed25519 key.

   :param public_key: The public_key to check.
   :type public_key: Union[str, bytes]

   :returns: True if the public_key is a valid ed25519 key, False otherwise.


.. py:function:: is_valid_bittensor_address_or_public_key(address)

   Checks if the given address is a valid destination address.

   :param address: The address to check.
   :type address: Union[str, bytes]

   :returns: True if the address is a valid destination address, False otherwise.


