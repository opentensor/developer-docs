tests.e2e_tests.test_dendrite
=============================

.. py:module:: tests.e2e_tests.test_dendrite


Functions
---------

.. autoapisummary::

   tests.e2e_tests.test_dendrite.test_dendrite


Module Contents
---------------

.. py:function:: test_dendrite(local_chain)
   :async:


   Test the Dendrite mechanism

   Steps:
       1. Register a subnet through Alice
       2. Register Bob as a validator
       3. Add stake to Bob and ensure neuron is not a validator yet
       4. Run Bob as a validator and wait epoch
       5. Ensure Bob's neuron has all correct attributes of a validator
   :raises AssertionError: If any of the checks or verifications fail


