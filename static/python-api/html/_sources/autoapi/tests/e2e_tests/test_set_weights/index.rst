tests.e2e_tests.test_set_weights
================================

.. py:module:: tests.e2e_tests.test_set_weights


Functions
---------

.. autoapisummary::

   tests.e2e_tests.test_set_weights.test_set_weights_uses_next_nonce


Module Contents
---------------

.. py:function:: test_set_weights_uses_next_nonce(local_chain)
   :async:


   Tests that setting weights doesn't re-use a nonce in the transaction pool.

   Steps:
       1. Register three subnets through Alice
       2. Register Alice's neuron on each subnet and add stake
       3. Verify Alice has a vpermit on each subnet
       4. Lower the set weights rate limit on each subnet
       5. Set weights on each subnet
       6. Assert that all the set weights succeeded
   :raises AssertionError: If any of the checks or verifications fail


