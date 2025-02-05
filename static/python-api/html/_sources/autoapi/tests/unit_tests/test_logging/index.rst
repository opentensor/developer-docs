tests.unit_tests.test_logging
=============================

.. py:module:: tests.unit_tests.test_logging


Functions
---------

.. autoapisummary::

   tests.unit_tests.test_logging.disable_stdout_streaming
   tests.unit_tests.test_logging.logging_machine
   tests.unit_tests.test_logging.mock_config
   tests.unit_tests.test_logging.test_all_log_levels_output
   tests.unit_tests.test_logging.test_concat
   tests.unit_tests.test_logging.test_enable_file_logging_with_new_config
   tests.unit_tests.test_logging.test_initialization
   tests.unit_tests.test_logging.test_state_transitions


Module Contents
---------------

.. py:function:: disable_stdout_streaming()

.. py:function:: logging_machine(mock_config)

.. py:function:: mock_config(tmp_path)

.. py:function:: test_all_log_levels_output(logging_machine, caplog)

   Test that all log levels are captured.


.. py:function:: test_concat(msg, prefix, suffix, expected_result)

   Test different options of message concatenation with prefix and suffix.


.. py:function:: test_enable_file_logging_with_new_config(tmp_path)

   Test enabling file logging by setting a new config.


.. py:function:: test_initialization(logging_machine, mock_config)

   Test initialization of LoggingMachine.


.. py:function:: test_state_transitions(logging_machine, mock_config)

   Test state transitions and the associated logging level changes.


