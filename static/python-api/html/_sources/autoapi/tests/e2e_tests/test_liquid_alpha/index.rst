tests.e2e_tests.test_liquid_alpha
=================================

.. py:module:: tests.e2e_tests.test_liquid_alpha


Functions
---------

.. autoapisummary::

   tests.e2e_tests.test_liquid_alpha.liquid_alpha_call_params
   tests.e2e_tests.test_liquid_alpha.test_liquid_alpha


Module Contents
---------------

.. py:function:: liquid_alpha_call_params(netuid, alpha_values)

.. py:function:: test_liquid_alpha(local_chain)

   Test the liquid alpha mechanism

   Steps:
       1. Register a subnet through Alice
       2. Register Alice's neuron and add stake
       3. Verify we can't set alpha values without enabling liquid_alpha
       4. Test setting alpha values after enabling liquid_alpha
       5. Verify failures when setting incorrect values (upper and lower bounds)
   :raises AssertionError: If any of the checks or verifications fail


