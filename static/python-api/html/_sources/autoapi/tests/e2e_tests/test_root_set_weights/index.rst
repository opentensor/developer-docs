tests.e2e_tests.test_root_set_weights
=====================================

.. py:module:: tests.e2e_tests.test_root_set_weights


Attributes
----------

.. autoapisummary::

   tests.e2e_tests.test_root_set_weights.FAST_BLOCKS_SPEEDUP_FACTOR


Functions
---------

.. autoapisummary::

   tests.e2e_tests.test_root_set_weights.test_root_reg_hyperparams


Module Contents
---------------

.. py:data:: FAST_BLOCKS_SPEEDUP_FACTOR
   :value: 5


   Verifies:

   * root_register()
   * neurons()
   * register_subnet()
   * burned_register()
   * immunity_period()
   * tempo()
   * get_uid_for_hotkey_on_subnet()
   * blocks_since_last_update()
   * subnetwork_n()
   * min_allowed_weights()
   * max_weight_limit()
   * weights_rate_limit()
   * root_set_weights()
   * neurons_lite()

.. py:function:: test_root_reg_hyperparams(local_chain)
   :async:


   Test root weights and hyperparameters in the Subtensor network.

   Steps:
       1. Register Alice in the root network (netuid=0).
       2. Create a new subnet (netuid=1) and register Alice on this subnet using burned registration.
       3. Verify that the subnet's `immunity_period` and `tempo` match the default values.
       4. Run Alice as a validator in the background.
       5. Fetch Alice's UID on the subnet and record the blocks since her last update.
       6. Verify that the subnet was created successfully by checking `subnetwork_n`.
       7. Verify hyperparameters related to weights: `min_allowed_weights`, `max_weight_limit`, and `weights_rate_limit`.
       8. Wait until the next epoch and set root weights for netuids 0 and 1.
       9. Verify that the weights are correctly set on the chain.
       10. Adjust hyperparameters to allow proof-of-work (PoW) registration.
       11. Verify that the `blocks_since_last_update` has incremented.
       12. Fetch neurons using `neurons_lite` for the subnet and verify Alice's participation.

   :raises AssertionError: If any of the checks or verifications fail.


