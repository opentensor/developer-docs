tests.unit_tests.extrinsics.test_set_weights
============================================

.. py:module:: tests.unit_tests.extrinsics.test_set_weights


Functions
---------

.. autoapisummary::

   tests.unit_tests.extrinsics.test_set_weights.mock_subtensor
   tests.unit_tests.extrinsics.test_set_weights.mock_wallet
   tests.unit_tests.extrinsics.test_set_weights.test_do_set_weights_is_not_success
   tests.unit_tests.extrinsics.test_set_weights.test_do_set_weights_is_success
   tests.unit_tests.extrinsics.test_set_weights.test_do_set_weights_no_waits
   tests.unit_tests.extrinsics.test_set_weights.test_set_weights_extrinsic


Module Contents
---------------

.. py:function:: mock_subtensor()

.. py:function:: mock_wallet()

.. py:function:: test_do_set_weights_is_not_success(mock_subtensor, mocker)

   Unsuccessful _do_set_weights call.


.. py:function:: test_do_set_weights_is_success(mock_subtensor, mocker)

   Successful _do_set_weights call.


.. py:function:: test_do_set_weights_no_waits(mock_subtensor, mocker)

   Successful _do_set_weights call without wait flags for fake_wait_for_inclusion and fake_wait_for_finalization.


.. py:function:: test_set_weights_extrinsic(mock_subtensor, mock_wallet, uids, weights, version_key, wait_for_inclusion, wait_for_finalization, expected_success, expected_message)

