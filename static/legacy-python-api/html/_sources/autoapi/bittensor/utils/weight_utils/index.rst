bittensor.utils.weight_utils
============================

.. py:module:: bittensor.utils.weight_utils

.. autoapi-nested-parse::

   Conversion for weight between chain representation and np.array or torch.Tensor



Attributes
----------

.. autoapisummary::

   bittensor.utils.weight_utils.U32_MAX
   bittensor.utils.weight_utils.U16_MAX


Functions
---------

.. autoapisummary::

   bittensor.utils.weight_utils.normalize_max_weight
   bittensor.utils.weight_utils.convert_weight_uids_and_vals_to_tensor
   bittensor.utils.weight_utils.convert_root_weight_uids_and_vals_to_tensor
   bittensor.utils.weight_utils.convert_bond_uids_and_vals_to_tensor
   bittensor.utils.weight_utils.convert_weights_and_uids_for_emit
   bittensor.utils.weight_utils.process_weights_for_netuid
   bittensor.utils.weight_utils.generate_weight_hash


Module Contents
---------------

.. py:data:: U32_MAX
   :value: 4294967295


.. py:data:: U16_MAX
   :value: 65535


.. py:function:: normalize_max_weight(x, limit = 0.1)

   Normalizes the tensor x so that sum(x) = 1 and the max value is not greater than the limit.
   :param x: Tensor to be max_value normalized.
   :type x: :obj:`np.float32`
   :param limit: float:
                 Max value after normalization.

   :returns:     Normalized x tensor.
   :rtype: y (:obj:`np.float32`)


.. py:function:: convert_weight_uids_and_vals_to_tensor(n, uids, weights)

   Converts weights and uids from chain representation into a np.array (inverse operation from convert_weights_and_uids_for_emit)
   :param n: int:
             number of neurons on network.
   :param uids: Tensor of uids as destinations for passed weights.
   :type uids: :obj:`List[int],`
   :param weights: Tensor of weights.
   :type weights: :obj:`List[int],`

   :returns:     Converted row weights.
   :rtype: row_weights ( np.float32 or torch.FloatTensor )


.. py:function:: convert_root_weight_uids_and_vals_to_tensor(n, uids, weights, subnets)

   Converts root weights and uids from chain representation into a np.array or torch FloatTensor (inverse operation from convert_weights_and_uids_for_emit)
   :param n: int:
             number of neurons on network.
   :param uids: Tensor of uids as destinations for passed weights.
   :type uids: :obj:`List[int],`
   :param weights: Tensor of weights.
   :type weights: :obj:`List[int],`
   :param subnets: list of subnets on the network
   :type subnets: :obj:`List[int],`

   :returns:     Converted row weights.
   :rtype: row_weights ( np.float32 )


.. py:function:: convert_bond_uids_and_vals_to_tensor(n, uids, bonds)

   Converts bond and uids from chain representation into a np.array.
   :param n: int:
             number of neurons on network.
   :param uids: Tensor of uids as destinations for passed bonds.
   :type uids: :obj:`List[int],`
   :param bonds: Tensor of bonds.
   :type bonds: :obj:`List[int],`

   :returns:     Converted row bonds.
   :rtype: row_bonds ( np.float32 )


.. py:function:: convert_weights_and_uids_for_emit(uids, weights)

   Converts weights into integer u32 representation that sum to MAX_INT_WEIGHT.
   :param uids: Tensor of uids as destinations for passed weights.
   :type uids: :obj:`np.int64,`
   :param weights: Tensor of weights.
   :type weights: :obj:`np.float32,`

   :returns:     Uids as a list.
             weight_vals (List[int]):
                 Weights as a list.
   :rtype: weight_uids (List[int])


.. py:function:: process_weights_for_netuid(uids, weights, netuid, subtensor, metagraph = None, exclude_quantile = 0)

.. py:function:: generate_weight_hash(address, netuid, uids, values, version_key, salt)

   Generate a valid commit hash from the provided weights.

   :param address: The account identifier. Wallet ss58_address.
   :type address: str
   :param netuid: The network unique identifier.
   :type netuid: int
   :param uids: The list of UIDs.
   :type uids: List[int]
   :param salt: The salt to add to hash.
   :type salt: List[int]
   :param values: The list of weight values.
   :type values: List[int]
   :param version_key: The version key.
   :type version_key: int

   :returns: The generated commit hash.
   :rtype: str


