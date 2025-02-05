tests.unit_tests.utils.test_utils
=================================

.. py:module:: tests.unit_tests.utils.test_utils


Functions
---------

.. autoapisummary::

   tests.unit_tests.utils.test_utils.test_debug
   tests.unit_tests.utils.test_utils.test_get_explorer_root_url_by_network_from_map
   tests.unit_tests.utils.test_utils.test_get_explorer_url_for_network
   tests.unit_tests.utils.test_utils.test_getattr_version_split
   tests.unit_tests.utils.test_utils.test_hex_to_bytes
   tests.unit_tests.utils.test_utils.test_is_valid_bittensor_address_or_public_key
   tests.unit_tests.utils.test_utils.test_ss58_address_to_bytes
   tests.unit_tests.utils.test_utils.test_ss58_to_vec_u8
   tests.unit_tests.utils.test_utils.test_strtobool
   tests.unit_tests.utils.test_utils.test_strtobool_raise_error
   tests.unit_tests.utils.test_utils.test_trace
   tests.unit_tests.utils.test_utils.test_unlock_key
   tests.unit_tests.utils.test_utils.test_unlock_key_errors
   tests.unit_tests.utils.test_utils.test_unlock_key_raise_value_error


Module Contents
---------------

.. py:function:: test_debug(test_input, expected)

   Test the debug function turns tracing on|off.


.. py:function:: test_get_explorer_root_url_by_network_from_map()

   Tests private utils._get_explorer_root_url_by_network_from_map function.


.. py:function:: test_get_explorer_url_for_network()

   Tests `utils.get_explorer_url_for_network` function.


.. py:function:: test_getattr_version_split()

   Test that __getattr__ for 'version_split' issues a deprecation warning and returns the correct value.


.. py:function:: test_hex_to_bytes(hex_str, response)

.. py:function:: test_is_valid_bittensor_address_or_public_key(mocker, test_input, expected_result)

   Tests utils.is_valid_bittensor_address_or_public_key function.


.. py:function:: test_ss58_address_to_bytes(mocker)

   Tests utils.ss58_address_to_bytes function.


.. py:function:: test_ss58_to_vec_u8(mocker)

   Tests `utils.ss58_to_vec_u8` function.


.. py:function:: test_strtobool(test_input, expected)

   Test truthy values.


.. py:function:: test_strtobool_raise_error(test_input)

   Tests invalid values.


.. py:function:: test_trace(test_input, expected)

   Test the trace function turns tracing on|off.


.. py:function:: test_unlock_key(mocker, unlock_type, wallet_method)

   Test the unlock key function.


.. py:function:: test_unlock_key_errors(mocker, side_effect, response)

   Test the unlock key function handles the errors.


.. py:function:: test_unlock_key_raise_value_error(mocker)

   Test the unlock key function raises ValueError.


