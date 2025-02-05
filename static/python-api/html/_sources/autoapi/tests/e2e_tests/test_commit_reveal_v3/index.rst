tests.e2e_tests.test_commit_reveal_v3
=====================================

.. py:module:: tests.e2e_tests.test_commit_reveal_v3


Functions
---------

.. autoapisummary::

   tests.e2e_tests.test_commit_reveal_v3.test_commit_and_reveal_weights_cr3


Module Contents
---------------

.. py:function:: test_commit_and_reveal_weights_cr3(local_chain)
   :async:


   Tests the commit/reveal weights mechanism (CR3)

   Steps:
       1. Register a subnet through Alice
       2. Register Alice's neuron and add stake
       3. Enable commit-reveal mechanism on the subnet
       4. Lower weights rate limit
       5. Change the tempo for subnet 1
       5. Commit weights and ensure they are committed.
       6. Wait interval & reveal weights and verify
   :raises AssertionError: If any of the checks or verifications fail


