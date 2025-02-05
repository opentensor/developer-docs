tests.unit_tests.utils.test_weight_utils
========================================

.. py:module:: tests.unit_tests.utils.test_weight_utils


Functions
---------

.. autoapisummary::

   tests.unit_tests.utils.test_weight_utils.test_convert_root_weight_uids_and_vals_to_tensor_edge_cases
   tests.unit_tests.utils.test_weight_utils.test_convert_root_weight_uids_and_vals_to_tensor_edge_cases
   tests.unit_tests.utils.test_weight_utils.test_convert_root_weight_uids_and_vals_to_tensor_error_cases
   tests.unit_tests.utils.test_weight_utils.test_convert_root_weight_uids_and_vals_to_tensor_happy_paths
   tests.unit_tests.utils.test_weight_utils.test_convert_weight_and_uids
   tests.unit_tests.utils.test_weight_utils.test_convert_weight_and_uids_torch
   tests.unit_tests.utils.test_weight_utils.test_convert_weight_uids_and_vals_to_tensor_edge_cases
   tests.unit_tests.utils.test_weight_utils.test_convert_weight_uids_and_vals_to_tensor_error_cases
   tests.unit_tests.utils.test_weight_utils.test_convert_weight_uids_and_vals_to_tensor_happy_path
   tests.unit_tests.utils.test_weight_utils.test_convert_weight_uids_and_vals_to_tensor_happy_path_torch
   tests.unit_tests.utils.test_weight_utils.test_edge_cases
   tests.unit_tests.utils.test_weight_utils.test_edge_cases_torch
   tests.unit_tests.utils.test_weight_utils.test_error_cases
   tests.unit_tests.utils.test_weight_utils.test_generate_weight_hash
   tests.unit_tests.utils.test_weight_utils.test_happy_path
   tests.unit_tests.utils.test_weight_utils.test_happy_path_torch
   tests.unit_tests.utils.test_weight_utils.test_normalize_with_max_weight
   tests.unit_tests.utils.test_weight_utils.test_normalize_with_max_weight__legacy_torch_api_compat
   tests.unit_tests.utils.test_weight_utils.test_process_weights_for_netuid
   tests.unit_tests.utils.test_weight_utils.test_process_weights_for_netuid_with_nzs_less_min_allowed_weights
   tests.unit_tests.utils.test_weight_utils.test_process_weights_with_all_zero_weights


Module Contents
---------------

.. py:function:: test_convert_root_weight_uids_and_vals_to_tensor_edge_cases(test_id, n, uids, weights, subnets, expected, force_legacy_torch_compatible_api)

.. py:function:: test_convert_root_weight_uids_and_vals_to_tensor_edge_cases(test_id, n, uids, weights, subnets, expected)

.. py:function:: test_convert_root_weight_uids_and_vals_to_tensor_error_cases(test_id, n, uids, weights, subnets, exception, caplog)

.. py:function:: test_convert_root_weight_uids_and_vals_to_tensor_happy_paths(test_id, n, uids, weights, subnets, expected)

.. py:function:: test_convert_weight_and_uids()

.. py:function:: test_convert_weight_and_uids_torch(force_legacy_torch_compatible_api)

.. py:function:: test_convert_weight_uids_and_vals_to_tensor_edge_cases(test_id, n, uids, weights, expected)

.. py:function:: test_convert_weight_uids_and_vals_to_tensor_error_cases(test_id, n, uids, weights, exception)

.. py:function:: test_convert_weight_uids_and_vals_to_tensor_happy_path(test_id, n, uids, weights, expected)

.. py:function:: test_convert_weight_uids_and_vals_to_tensor_happy_path_torch(test_id, n, uids, weights, subnets, expected, force_legacy_torch_compatible_api)

.. py:function:: test_edge_cases(test_id, n, uids, bonds, expected_output)

.. py:function:: test_edge_cases_torch(test_id, n, uids, bonds, expected_output, force_legacy_torch_compatible_api)

.. py:function:: test_error_cases(test_id, n, uids, bonds, exception)

.. py:function:: test_generate_weight_hash(mocker)

   Tests weight_utils.generate_weight_hash function.


.. py:function:: test_happy_path(test_id, n, uids, bonds, expected_output)

.. py:function:: test_happy_path_torch(test_id, n, uids, bonds, expected_output, force_legacy_torch_compatible_api)

.. py:function:: test_normalize_with_max_weight()

.. py:function:: test_normalize_with_max_weight__legacy_torch_api_compat(force_legacy_torch_compatible_api)

.. py:function:: test_process_weights_for_netuid(mocker)

   Test the process_weights_for_netuid function.


.. py:function:: test_process_weights_for_netuid_with_nzs_less_min_allowed_weights(mocker)

   Tests process_weights_for_netuid method when non-zero weights are less than the min allowed weights.


.. py:function:: test_process_weights_with_all_zero_weights(mocker)

   Test the process_weights_for_netuid function with all zero weights.


