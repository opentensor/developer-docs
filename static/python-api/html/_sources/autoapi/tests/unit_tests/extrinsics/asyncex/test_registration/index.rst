tests.unit_tests.extrinsics.asyncex.test_registration
=====================================================

.. py:module:: tests.unit_tests.extrinsics.asyncex.test_registration


Functions
---------

.. autoapisummary::

   tests.unit_tests.extrinsics.asyncex.test_registration.subtensor
   tests.unit_tests.extrinsics.asyncex.test_registration.test_do_pow_register_failure
   tests.unit_tests.extrinsics.asyncex.test_registration.test_do_pow_register_no_waiting
   tests.unit_tests.extrinsics.asyncex.test_registration.test_do_pow_register_success
   tests.unit_tests.extrinsics.asyncex.test_registration.test_register_extrinsic_already_registered
   tests.unit_tests.extrinsics.asyncex.test_registration.test_register_extrinsic_failed_with_cuda
   tests.unit_tests.extrinsics.asyncex.test_registration.test_register_extrinsic_max_attempts_reached
   tests.unit_tests.extrinsics.asyncex.test_registration.test_register_extrinsic_subnet_not_exists
   tests.unit_tests.extrinsics.asyncex.test_registration.test_register_extrinsic_success
   tests.unit_tests.extrinsics.asyncex.test_registration.test_register_extrinsic_success_with_cuda


Module Contents
---------------

.. py:function:: subtensor(mocker)

.. py:function:: test_do_pow_register_failure(subtensor, mocker)
   :async:


   Tests failed PoW registration.


.. py:function:: test_do_pow_register_no_waiting(subtensor, mocker)
   :async:


   Tests PoW registration without waiting for inclusion or finalization.


.. py:function:: test_do_pow_register_success(subtensor, mocker)
   :async:


   Tests successful PoW registration.


.. py:function:: test_register_extrinsic_already_registered(subtensor, mocker)
   :async:


   Tests registration when the key is already registered.


.. py:function:: test_register_extrinsic_failed_with_cuda(subtensor, mocker)
   :async:


   Tests failed registration with CUDA enabled.


.. py:function:: test_register_extrinsic_max_attempts_reached(subtensor, mocker)
   :async:


.. py:function:: test_register_extrinsic_subnet_not_exists(subtensor, mocker)
   :async:


   Tests registration when subnet does not exist.


.. py:function:: test_register_extrinsic_success(subtensor, mocker)
   :async:


   Tests successful registration.


.. py:function:: test_register_extrinsic_success_with_cuda(subtensor, mocker)
   :async:


   Tests successful registration with CUDA enabled.


