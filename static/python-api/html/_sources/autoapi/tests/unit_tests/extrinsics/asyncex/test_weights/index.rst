tests.unit_tests.extrinsics.asyncex.test_weights
================================================

.. py:module:: tests.unit_tests.extrinsics.asyncex.test_weights


Functions
---------

.. autoapisummary::

   tests.unit_tests.extrinsics.asyncex.test_weights.subtensor
   tests.unit_tests.extrinsics.asyncex.test_weights.test_commit_weights_extrinsic_failure
   tests.unit_tests.extrinsics.asyncex.test_weights.test_commit_weights_extrinsic_success
   tests.unit_tests.extrinsics.asyncex.test_weights.test_do_commit_weights_exception
   tests.unit_tests.extrinsics.asyncex.test_weights.test_do_commit_weights_failure
   tests.unit_tests.extrinsics.asyncex.test_weights.test_do_commit_weights_no_waiting
   tests.unit_tests.extrinsics.asyncex.test_weights.test_do_commit_weights_success
   tests.unit_tests.extrinsics.asyncex.test_weights.test_do_set_weights_failure
   tests.unit_tests.extrinsics.asyncex.test_weights.test_do_set_weights_no_waiting
   tests.unit_tests.extrinsics.asyncex.test_weights.test_do_set_weights_success
   tests.unit_tests.extrinsics.asyncex.test_weights.test_set_weights_extrinsic_exception
   tests.unit_tests.extrinsics.asyncex.test_weights.test_set_weights_extrinsic_failure
   tests.unit_tests.extrinsics.asyncex.test_weights.test_set_weights_extrinsic_no_waiting
   tests.unit_tests.extrinsics.asyncex.test_weights.test_set_weights_extrinsic_success_with_finalization


Module Contents
---------------

.. py:function:: subtensor(mocker)

.. py:function:: test_commit_weights_extrinsic_failure(subtensor, mocker)
   :async:


   Tests commit_weights_extrinsic when the commit fails.


.. py:function:: test_commit_weights_extrinsic_success(subtensor, mocker)
   :async:


   Tests commit_weights_extrinsic when the commit is successful.


.. py:function:: test_do_commit_weights_exception(subtensor, mocker)
   :async:


   Tests _do_commit_weights when an exception is raised.


.. py:function:: test_do_commit_weights_failure(subtensor, mocker)
   :async:


   Tests _do_commit_weights when the commit fails.


.. py:function:: test_do_commit_weights_no_waiting(subtensor, mocker)
   :async:


   Tests _do_commit_weights when not waiting for inclusion or finalization.


.. py:function:: test_do_commit_weights_success(subtensor, mocker)
   :async:


   Tests _do_commit_weights when the commit is successful.


.. py:function:: test_do_set_weights_failure(subtensor, mocker)
   :async:


   Tests _do_set_weights when setting weights fails.


.. py:function:: test_do_set_weights_no_waiting(subtensor, mocker)
   :async:


   Tests _do_set_weights when not waiting for inclusion or finalization.


.. py:function:: test_do_set_weights_success(subtensor, mocker)
   :async:


   Tests _do_set_weights when weights are set successfully.


.. py:function:: test_set_weights_extrinsic_exception(subtensor, mocker)
   :async:


   Tests set_weights_extrinsic when an exception is raised.


.. py:function:: test_set_weights_extrinsic_failure(subtensor, mocker)
   :async:


   Tests set_weights_extrinsic when setting weights fails.


.. py:function:: test_set_weights_extrinsic_no_waiting(subtensor, mocker)
   :async:


   Tests set_weights_extrinsic when no waiting for inclusion or finalization.


.. py:function:: test_set_weights_extrinsic_success_with_finalization(subtensor, mocker)
   :async:


   Tests set_weights_extrinsic when weights are successfully set with finalization.


