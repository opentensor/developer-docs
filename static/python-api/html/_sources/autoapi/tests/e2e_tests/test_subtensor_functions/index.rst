tests.e2e_tests.test_subtensor_functions
========================================

.. py:module:: tests.e2e_tests.test_subtensor_functions


Functions
---------

.. autoapisummary::

   tests.e2e_tests.test_subtensor_functions.test_subtensor_extrinsics


Module Contents
---------------

.. py:function:: test_subtensor_extrinsics(local_chain)
   :async:


   Tests subtensor extrinsics

   Steps:
       1. Validate subnets in the chain before/after registering netuid = 1
       2. Register Alice's neuron
       3. Verify Alice and Bob's participation in subnets (individually and global)
       4. Verify uids of Alice and Bob gets populated correctly
       5. Start Alice as a validator and verify neuroninfo before/after is different
   :raises AssertionError: If any of the checks or verifications fail


