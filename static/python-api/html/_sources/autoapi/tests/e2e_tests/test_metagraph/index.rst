tests.e2e_tests.test_metagraph
==============================

.. py:module:: tests.e2e_tests.test_metagraph


Functions
---------

.. autoapisummary::

   tests.e2e_tests.test_metagraph.neuron_to_dict
   tests.e2e_tests.test_metagraph.test_metagraph


Module Contents
---------------

.. py:function:: neuron_to_dict(neuron)

   Convert a neuron object to a dictionary, excluding private attributes, methods, and specific fields.
   :returns: A dictionary of the neuron's public attributes.
   :rtype: dict

   .. note::

      Excludes 'weights' and 'bonds' fields. These are present in subtensor
      but not in metagraph


.. py:function:: test_metagraph(local_chain)

   Tests the metagraph

   Steps:
       1. Register a subnet through Alice
       2. Assert metagraph's initial state
       3. Register Bob and validate info in metagraph
       4. Fetch neuron info of Bob through subtensor & metagraph and verify
       5. Register Dave and validate info in metagraph
       6. Verify low balance stake fails & add stake thru Bob and verify
       7. Load pre_dave metagraph from latest save and verify both instances
   :raises AssertionError: If any of the checks or verifications fail


