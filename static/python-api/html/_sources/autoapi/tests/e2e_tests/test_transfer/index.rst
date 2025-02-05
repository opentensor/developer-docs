tests.e2e_tests.test_transfer
=============================

.. py:module:: tests.e2e_tests.test_transfer


Functions
---------

.. autoapisummary::

   tests.e2e_tests.test_transfer.test_transfer


Module Contents
---------------

.. py:function:: test_transfer(local_chain)

   Test the transfer mechanism on the chain

   Steps:
       1. Create a wallet for Alice
       2. Calculate existing balance and transfer 2 Tao
       3. Calculate balance after transfer call and verify calculations
   :raises AssertionError: If any of the checks or verifications fail


