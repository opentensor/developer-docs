tests.e2e_tests.test_commit_weights
===================================

.. py:module:: tests.e2e_tests.test_commit_weights


Functions
---------

.. autoapisummary::

   tests.e2e_tests.test_commit_weights.test_commit_and_reveal_weights_legacy
   tests.e2e_tests.test_commit_weights.test_commit_weights_uses_next_nonce


Module Contents
---------------

.. py:function:: test_commit_and_reveal_weights_legacy(local_chain)
   :async:


   Tests the commit/reveal weights mechanism with subprocess disabled (CR1.0)

   Steps:
       1. Register a subnet through Alice
       2. Register Alice's neuron and add stake
       3. Enable commit-reveal mechanism on the subnet
       4. Lower the commit_reveal interval and rate limit
       5. Commit weights and verify
       6. Wait interval & reveal weights and verify
   :raises AssertionError: If any of the checks or verifications fail


.. py:function:: test_commit_weights_uses_next_nonce(local_chain)
   :async:


   Tests that commiting weights doesn't re-use a nonce in the transaction pool.

   Steps:
       1. Register a subnet through Alice
       2. Register Alice's neuron and add stake
       3. Enable commit-reveal mechanism on the subnet
       4. Lower the commit_reveal interval and rate limit
       5. Commit weights three times
       6. Assert that all commits succeeded
   :raises AssertionError: If any of the checks or verifications fail


