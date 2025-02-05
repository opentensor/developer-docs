tests.unit_tests.extrinsics.test_root
=====================================

.. py:module:: tests.unit_tests.extrinsics.test_root


Functions
---------

.. autoapisummary::

   tests.unit_tests.extrinsics.test_root.mock_subtensor
   tests.unit_tests.extrinsics.test_root.mock_wallet
   tests.unit_tests.extrinsics.test_root.test_root_register_extrinsic
   tests.unit_tests.extrinsics.test_root.test_set_root_weights_extrinsic
   tests.unit_tests.extrinsics.test_root.test_set_root_weights_extrinsic_torch


Module Contents
---------------

.. py:function:: mock_subtensor(mocker)

.. py:function:: mock_wallet(mocker)

.. py:function:: test_root_register_extrinsic(mock_subtensor, mock_wallet, wait_for_inclusion, wait_for_finalization, hotkey_registered, registration_success, expected_result, mocker)

.. py:function:: test_set_root_weights_extrinsic(mock_subtensor, mock_wallet, wait_for_inclusion, wait_for_finalization, netuids, weights, expected_success, mocker)

.. py:function:: test_set_root_weights_extrinsic_torch(mock_subtensor, mock_wallet, wait_for_inclusion, wait_for_finalization, netuids, weights, user_response, expected_success, force_legacy_torch_compatible_api, mocker)

