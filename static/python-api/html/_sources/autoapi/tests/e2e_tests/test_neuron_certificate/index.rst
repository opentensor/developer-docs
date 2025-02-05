tests.e2e_tests.test_neuron_certificate
=======================================

.. py:module:: tests.e2e_tests.test_neuron_certificate


Functions
---------

.. autoapisummary::

   tests.e2e_tests.test_neuron_certificate.test_neuron_certificate


Module Contents
---------------

.. py:function:: test_neuron_certificate(local_chain)
   :async:


   Tests the metagraph

   Steps:
       1. Register a subnet through Alice
       2. Serve Alice axon with neuron certificate
       3. Verify neuron certificate can be retrieved
   :raises AssertionError: If any of the checks or verifications fail


