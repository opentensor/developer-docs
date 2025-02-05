tests.e2e_tests.test_axon
=========================

.. py:module:: tests.e2e_tests.test_axon


Functions
---------

.. autoapisummary::

   tests.e2e_tests.test_axon.test_axon


Module Contents
---------------

.. py:function:: test_axon(local_chain)
   :async:


   Test the Axon mechanism and successful registration on the network.

   Steps:
       1. Register a subnet and register Alice
       2. Check if metagraph.axon is updated and check axon attributes
       3. Run Alice as a miner on the subnet
       4. Check the metagraph again after running the miner and verify all attributes
   :raises AssertionError: If any of the checks or verifications fail


