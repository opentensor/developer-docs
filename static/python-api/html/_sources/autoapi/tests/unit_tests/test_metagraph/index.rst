tests.unit_tests.test_metagraph
===============================

.. py:module:: tests.unit_tests.test_metagraph


Functions
---------

.. autoapisummary::

   tests.unit_tests.test_metagraph.loguru_sink
   tests.unit_tests.test_metagraph.metagraph_instance
   tests.unit_tests.test_metagraph.mock_environment
   tests.unit_tests.test_metagraph.mock_subtensor
   tests.unit_tests.test_metagraph.test_copy
   tests.unit_tests.test_metagraph.test_deepcopy
   tests.unit_tests.test_metagraph.test_process_weights_or_bonds
   tests.unit_tests.test_metagraph.test_set_metagraph_attributes
   tests.unit_tests.test_metagraph.test_sync_warning_cases


Module Contents
---------------

.. py:function:: loguru_sink()

.. py:function:: metagraph_instance(mocker)

.. py:function:: mock_environment(mocker)

.. py:function:: mock_subtensor(mocker)

.. py:function:: test_copy(mock_environment)

.. py:function:: test_deepcopy(mock_environment)

.. py:function:: test_process_weights_or_bonds(mock_environment)

.. py:function:: test_set_metagraph_attributes(mock_environment)
   :async:


.. py:function:: test_sync_warning_cases(block, test_id, metagraph_instance, mock_subtensor, caplog)

