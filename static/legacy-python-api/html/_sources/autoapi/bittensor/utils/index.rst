bittensor.utils
===============

.. py:module:: bittensor.utils


Submodules
----------

.. toctree::
   :maxdepth: 1

   /autoapi/bittensor/utils/_register_cuda/index
   /autoapi/bittensor/utils/axon_utils/index
   /autoapi/bittensor/utils/balance/index
   /autoapi/bittensor/utils/formatting/index
   /autoapi/bittensor/utils/networking/index
   /autoapi/bittensor/utils/registration/index
   /autoapi/bittensor/utils/subtensor/index
   /autoapi/bittensor/utils/test_utils/index
   /autoapi/bittensor/utils/version/index
   /autoapi/bittensor/utils/wallet_utils/index
   /autoapi/bittensor/utils/weight_utils/index


Attributes
----------

.. autoapisummary::

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
   bittensor.utils.get_ss58_format
   bittensor.utils.is_valid_ss58_address
   bittensor.utils.is_valid_ed25519_pubkey
   bittensor.utils.is_valid_bittensor_address_or_public_key
   bittensor.utils.create_identity_dict
   bittensor.utils.decode_hex_identity_dict
   bittensor.utils.ss58_to_vec_u8
   bittensor.utils._unbiased_topk
   bittensor.utils.unbiased_topk
   bittensor.utils.strtobool_with_default
   bittensor.utils.strtobool
   bittensor.utils.get_explorer_root_url_by_network_from_map
   bittensor.utils.get_explorer_url_for_network
   bittensor.utils.ss58_address_to_bytes
   bittensor.utils.U16_NORMALIZED_FLOAT
   bittensor.utils.U64_NORMALIZED_FLOAT
   bittensor.utils.u8_key_to_ss58
   bittensor.utils.hash
   bittensor.utils.format_error_message


Package Contents
----------------

.. py:data:: torch

.. py:function:: use_torch()

   Force the use of torch over numpy for certain operations.


.. py:function:: version_checking(timeout = 15)

   Deprecated, kept for backwards compatibility. Use check_version() instead.


.. py:function:: check_version(timeout = 15)

   Check if the current version of Bittensor is up to date with the latest version on PyPi.
   Raises a VersionCheckError if the version check fails.


.. py:exception:: VersionCheckError

   Bases: :py:obj:`Exception`


   Common base class for all non-exit exceptions.

   Initialize self.  See help(type(self)) for accurate signature.


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

.. py:data:: RAOPERTAO
   :value: 1000000000.0


.. py:data:: U16_MAX
   :value: 65535


.. py:data:: U64_MAX
   :value: 18446744073709551615


.. py:function:: ss58_to_vec_u8(ss58_address)

.. py:function:: _unbiased_topk(values, k, dim=0, sorted=True, largest=True, axis=0, return_type = 'numpy')

   Selects topk as in torch.topk but does not bias lower indices when values are equal.
   :param values: (np.ndarray) if using numpy, (torch.Tensor) if using torch:
                  Values to index into.
   :param k: (int):
             Number to take.
   :param dim: (int):
               Dimension to index into (used by Torch)
   :param sorted: (bool):
                  Whether to sort indices.
   :param largest: (bool):
                   Whether to take the largest value.
   :param axis: (int):
                Axis along which to index into (used by Numpy)
   :param return_type: (str):
                       Whether or use torch or numpy approach

   :returns:

             (np.ndarray) if using numpy, (torch.Tensor) if using torch:
                 topk k values.
             indices: (np.ndarray) if using numpy, (torch.LongTensor) if using torch:
                 indices of the topk values.
   :rtype: topk


.. py:function:: unbiased_topk(values, k, dim = 0, sorted = True, largest = True, axis = 0)

   Selects topk as in torch.topk but does not bias lower indices when values are equal.
   :param values: (np.ndarray) if using numpy, (torch.Tensor) if using torch:
                  Values to index into.
   :param k: (int):
             Number to take.
   :param dim: (int):
               Dimension to index into (used by Torch)
   :param sorted: (bool):
                  Whether to sort indices.
   :param largest: (bool):
                   Whether to take the largest value.
   :param axis: (int):
                Axis along which to index into (used by Numpy)

   :returns:

             (np.ndarray) if using numpy, (torch.Tensor) if using torch:
                 topk k values.
             indices: (np.ndarray) if using numpy, (torch.LongTensor) if using torch:
                 indices of the topk values.
   :rtype: topk


.. py:function:: strtobool_with_default(default)

   Creates a strtobool function with a default value.

   :param default: The default value to return if the string is empty.
   :type default: bool

   :returns: The strtobool function with the default value.


.. py:function:: strtobool(val)

   Converts a string to a boolean value.

   truth-y values are 'y', 'yes', 't', 'true', 'on', and '1';
   false-y values are 'n', 'no', 'f', 'false', 'off', and '0'.

   Raises ValueError if 'val' is anything else.


.. py:function:: get_explorer_root_url_by_network_from_map(network, network_map)

   Returns the explorer root url for the given network name from the given network map.

   :param network: The network to get the explorer url for.
   :type network: str
   :param network_map: The network map to get the explorer url from.
   :type network_map: Dict[str, str]

   :returns: The explorer url for the given network.
             Or None if the network is not in the network map.


.. py:function:: get_explorer_url_for_network(network, block_hash, network_map)

   Returns the explorer url for the given block hash and network.

   :param network: The network to get the explorer url for.
   :type network: str
   :param block_hash: The block hash to get the explorer url for.
   :type block_hash: str
   :param network_map: The network maps to get the explorer urls from.
   :type network_map: Dict[str, Dict[str, str]]

   :returns: The explorer url for the given block hash and network.
             Or None if the network is not known.


.. py:function:: ss58_address_to_bytes(ss58_address)

   Converts a ss58 address to a bytes object.


.. py:function:: U16_NORMALIZED_FLOAT(x)

.. py:function:: U64_NORMALIZED_FLOAT(x)

.. py:function:: u8_key_to_ss58(u8_key)

   Converts a u8-encoded account key to an ss58 address.

   :param u8_key: The u8-encoded account key.
   :type u8_key: List[int]


.. py:function:: hash(content, encoding='utf-8')

.. py:function:: format_error_message(error_message)

   Formats an error message from the Subtensor error information to using in extrinsics.

   :param error_message: A dictionary containing the error information from Subtensor.
   :type error_message: dict

   :returns: A formatted error message string.
   :rtype: str


