tests.unit_tests.extrinsics.test_registration
=============================================

.. py:module:: tests.unit_tests.extrinsics.test_registration


Functions
---------

.. autoapisummary::

   tests.unit_tests.extrinsics.test_registration.mock_new_wallet
   tests.unit_tests.extrinsics.test_registration.mock_pow_solution
   tests.unit_tests.extrinsics.test_registration.mock_subtensor
   tests.unit_tests.extrinsics.test_registration.mock_wallet
   tests.unit_tests.extrinsics.test_registration.test_burned_register_extrinsic
   tests.unit_tests.extrinsics.test_registration.test_register_extrinsic_with_pow
   tests.unit_tests.extrinsics.test_registration.test_register_extrinsic_without_pow


Module Contents
---------------

.. py:function:: mock_new_wallet(mocker)

.. py:function:: mock_pow_solution(mocker)

.. py:function:: mock_subtensor(mocker)

.. py:function:: mock_wallet(mocker)

.. py:function:: test_burned_register_extrinsic(mock_subtensor, mock_wallet, subnet_exists, neuron_is_null, recycle_success, is_registered, expected_result, test_id, mocker)

.. py:function:: test_register_extrinsic_with_pow(mock_subtensor, mock_wallet, mock_pow_solution, pow_success, pow_stale, registration_success, cuda, hotkey_registered, expected_result, test_id, mocker)

.. py:function:: test_register_extrinsic_without_pow(mock_subtensor, mock_wallet, subnet_exists, neuron_is_null, cuda_available, expected_result, test_id, mocker)

