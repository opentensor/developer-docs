tests.e2e_tests.test_incentive
==============================

.. py:module:: tests.e2e_tests.test_incentive


Attributes
----------

.. autoapisummary::

   tests.e2e_tests.test_incentive.FAST_BLOCKS_SPEEDUP_FACTOR


Functions
---------

.. autoapisummary::

   tests.e2e_tests.test_incentive.test_incentive


Module Contents
---------------

.. py:data:: FAST_BLOCKS_SPEEDUP_FACTOR
   :value: 5


.. py:function:: test_incentive(local_chain)
   :async:


   Test the incentive mechanism and interaction of miners/validators

   Steps:
       1. Register a subnet and register Alice & Bob
       2. Add Stake by Alice
       3. Run Alice as validator & Bob as miner. Wait Epoch
       4. Verify miner has correct: trust, rank, consensus, incentive
       5. Verify validator has correct: validator_permit, validator_trust, dividends, stake
   :raises AssertionError: If any of the checks or verifications fail


