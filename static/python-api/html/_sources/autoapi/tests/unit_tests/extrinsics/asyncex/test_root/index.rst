tests.unit_tests.extrinsics.asyncex.test_root
=============================================

.. py:module:: tests.unit_tests.extrinsics.asyncex.test_root


Functions
---------

.. autoapisummary::

   tests.unit_tests.extrinsics.asyncex.test_root.subtensor
   tests.unit_tests.extrinsics.asyncex.test_root.test_do_set_root_weights_failure
   tests.unit_tests.extrinsics.asyncex.test_root.test_do_set_root_weights_no_waiting
   tests.unit_tests.extrinsics.asyncex.test_root.test_do_set_root_weights_success
   tests.unit_tests.extrinsics.asyncex.test_root.test_get_limits_success
   tests.unit_tests.extrinsics.asyncex.test_root.test_root_register_extrinsic_already_registered
   tests.unit_tests.extrinsics.asyncex.test_root.test_root_register_extrinsic_success
   tests.unit_tests.extrinsics.asyncex.test_root.test_root_register_extrinsic_transaction_failed
   tests.unit_tests.extrinsics.asyncex.test_root.test_root_register_extrinsic_uid_not_found
   tests.unit_tests.extrinsics.asyncex.test_root.test_root_register_extrinsic_unlock_failed
   tests.unit_tests.extrinsics.asyncex.test_root.test_set_root_weights_extrinsic_insufficient_weights
   tests.unit_tests.extrinsics.asyncex.test_root.test_set_root_weights_extrinsic_no_waiting
   tests.unit_tests.extrinsics.asyncex.test_root.test_set_root_weights_extrinsic_not_registered
   tests.unit_tests.extrinsics.asyncex.test_root.test_set_root_weights_extrinsic_request_exception
   tests.unit_tests.extrinsics.asyncex.test_root.test_set_root_weights_extrinsic_success
   tests.unit_tests.extrinsics.asyncex.test_root.test_set_root_weights_extrinsic_transaction_failed
   tests.unit_tests.extrinsics.asyncex.test_root.test_set_root_weights_extrinsic_unlock_failed


Module Contents
---------------

.. py:function:: subtensor(mocker)

.. py:function:: test_do_set_root_weights_failure(subtensor, mocker)
   :async:


   Tests _do_set_root_weights when setting weights fails.


.. py:function:: test_do_set_root_weights_no_waiting(subtensor, mocker)
   :async:


   Tests _do_set_root_weights when not waiting for inclusion or finalization.


.. py:function:: test_do_set_root_weights_success(subtensor, mocker)
   :async:


   Tests _do_set_root_weights when weights are set successfully.


.. py:function:: test_get_limits_success(subtensor, mocker)
   :async:


   Tests successful retrieval of weight limits.


.. py:function:: test_root_register_extrinsic_already_registered(subtensor, mocker)
   :async:


   Tests registration when hotkey is already registered.


.. py:function:: test_root_register_extrinsic_success(subtensor, mocker)
   :async:


   Tests successful registration to root network.


.. py:function:: test_root_register_extrinsic_transaction_failed(subtensor, mocker)
   :async:


   Tests registration fails due to transaction failure.


.. py:function:: test_root_register_extrinsic_uid_not_found(subtensor, mocker)
   :async:


   Tests registration fails because UID is not found after successful transaction.


.. py:function:: test_root_register_extrinsic_unlock_failed(subtensor, mocker)
   :async:


   Tests registration fails due to unlock failure.


.. py:function:: test_set_root_weights_extrinsic_insufficient_weights(subtensor, mocker)
   :async:


   Tests failure when number of weights is less than the minimum allowed.


.. py:function:: test_set_root_weights_extrinsic_no_waiting(subtensor, mocker)
   :async:


   Tests setting root weights without waiting for inclusion or finalization.


.. py:function:: test_set_root_weights_extrinsic_not_registered(subtensor, mocker)
   :async:


   Tests failure when hotkey is not registered.


.. py:function:: test_set_root_weights_extrinsic_request_exception(subtensor, mocker)
   :async:


   Tests failure due to SubstrateRequestException.


.. py:function:: test_set_root_weights_extrinsic_success(subtensor, mocker)
   :async:


   Tests successful setting of root weights.


.. py:function:: test_set_root_weights_extrinsic_transaction_failed(subtensor, mocker)
   :async:


   Tests failure when transaction is not successful.


.. py:function:: test_set_root_weights_extrinsic_unlock_failed(subtensor, mocker)
   :async:


   Tests failure due to unlock key error.


