tests.unit_tests.extrinsics.test_commit_reveal
==============================================

.. py:module:: tests.unit_tests.extrinsics.test_commit_reveal


Functions
---------

.. autoapisummary::

   tests.unit_tests.extrinsics.test_commit_reveal.hyperparams
   tests.unit_tests.extrinsics.test_commit_reveal.subtensor
   tests.unit_tests.extrinsics.test_commit_reveal.test_commit_reveal_v3_extrinsic_exception
   tests.unit_tests.extrinsics.test_commit_reveal.test_commit_reveal_v3_extrinsic_response_false
   tests.unit_tests.extrinsics.test_commit_reveal.test_commit_reveal_v3_extrinsic_success_with_numpy
   tests.unit_tests.extrinsics.test_commit_reveal.test_commit_reveal_v3_extrinsic_success_with_torch
   tests.unit_tests.extrinsics.test_commit_reveal.test_do_commit_reveal_v3_failure_due_to_error
   tests.unit_tests.extrinsics.test_commit_reveal.test_do_commit_reveal_v3_success


Module Contents
---------------

.. py:function:: hyperparams()

.. py:function:: subtensor(mocker)

.. py:function:: test_commit_reveal_v3_extrinsic_exception(mocker, subtensor)

   Test exception handling in commit-reveal.


.. py:function:: test_commit_reveal_v3_extrinsic_response_false(mocker, subtensor, hyperparams)

   Test unsuccessful commit-reveal with torch.


.. py:function:: test_commit_reveal_v3_extrinsic_success_with_numpy(mocker, subtensor, hyperparams)

   Test successful commit-reveal with numpy arrays.


.. py:function:: test_commit_reveal_v3_extrinsic_success_with_torch(mocker, subtensor, hyperparams)

   Test successful commit-reveal with torch tensors.


.. py:function:: test_do_commit_reveal_v3_failure_due_to_error(mocker, subtensor)

   Test commit-reveal fails due to an error in submission.


.. py:function:: test_do_commit_reveal_v3_success(mocker, subtensor)

   Test successful commit-reveal with wait for finalization.


