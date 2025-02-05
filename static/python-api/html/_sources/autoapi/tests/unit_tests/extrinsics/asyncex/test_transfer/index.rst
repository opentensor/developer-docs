tests.unit_tests.extrinsics.asyncex.test_transfer
=================================================

.. py:module:: tests.unit_tests.extrinsics.asyncex.test_transfer


Functions
---------

.. autoapisummary::

   tests.unit_tests.extrinsics.asyncex.test_transfer.subtensor
   tests.unit_tests.extrinsics.asyncex.test_transfer.test_do_transfer_failure
   tests.unit_tests.extrinsics.asyncex.test_transfer.test_do_transfer_no_waiting
   tests.unit_tests.extrinsics.asyncex.test_transfer.test_do_transfer_success
   tests.unit_tests.extrinsics.asyncex.test_transfer.test_transfer_extrinsic_call_successful_with_failed_response
   tests.unit_tests.extrinsics.asyncex.test_transfer.test_transfer_extrinsic_insufficient_balance
   tests.unit_tests.extrinsics.asyncex.test_transfer.test_transfer_extrinsic_invalid_destination
   tests.unit_tests.extrinsics.asyncex.test_transfer.test_transfer_extrinsic_keep_alive_false_and_transfer_all_true
   tests.unit_tests.extrinsics.asyncex.test_transfer.test_transfer_extrinsic_success
   tests.unit_tests.extrinsics.asyncex.test_transfer.test_transfer_extrinsic_unlock_key_false


Module Contents
---------------

.. py:function:: subtensor(mocker)

.. py:function:: test_do_transfer_failure(subtensor, mocker)
   :async:


   Tests _do_transfer when the transfer fails.


.. py:function:: test_do_transfer_no_waiting(subtensor, mocker)
   :async:


   Tests _do_transfer when no waiting for inclusion or finalization.


.. py:function:: test_do_transfer_success(subtensor, mocker)
   :async:


   Tests _do_transfer when the transfer is successful.


.. py:function:: test_transfer_extrinsic_call_successful_with_failed_response(subtensor, mocker)
   :async:


   Tests successful transfer call is successful with failed response.


.. py:function:: test_transfer_extrinsic_insufficient_balance(subtensor, mocker)
   :async:


   Tests transfer when balance is insufficient.


.. py:function:: test_transfer_extrinsic_invalid_destination(subtensor, mocker)
   :async:


   Tests transfer with invalid destination address.


.. py:function:: test_transfer_extrinsic_keep_alive_false_and_transfer_all_true(subtensor, mocker)
   :async:


   Tests transfer with keep_alive flag set to False and transfer_all flag set to True.


.. py:function:: test_transfer_extrinsic_success(subtensor, mocker)
   :async:


   Tests successful transfer.


.. py:function:: test_transfer_extrinsic_unlock_key_false(subtensor, mocker)
   :async:


   Tests transfer failed unlock_key.


