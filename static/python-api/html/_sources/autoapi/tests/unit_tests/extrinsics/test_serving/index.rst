tests.unit_tests.extrinsics.test_serving
========================================

.. py:module:: tests.unit_tests.extrinsics.test_serving


Functions
---------

.. autoapisummary::

   tests.unit_tests.extrinsics.test_serving.mock_axon
   tests.unit_tests.extrinsics.test_serving.mock_subtensor
   tests.unit_tests.extrinsics.test_serving.mock_wallet
   tests.unit_tests.extrinsics.test_serving.test_publish_metadata
   tests.unit_tests.extrinsics.test_serving.test_serve_axon_extrinsic
   tests.unit_tests.extrinsics.test_serving.test_serve_extrinsic_edge_cases
   tests.unit_tests.extrinsics.test_serving.test_serve_extrinsic_error_cases
   tests.unit_tests.extrinsics.test_serving.test_serve_extrinsic_happy_path


Module Contents
---------------

.. py:function:: mock_axon(mock_wallet, mocker)

.. py:function:: mock_subtensor(mocker)

.. py:function:: mock_wallet(mocker)

.. py:function:: test_publish_metadata(mock_subtensor, mock_wallet, wait_for_inclusion, wait_for_finalization, net_uid, type_u, data, response_success, expected_result, test_id)

.. py:function:: test_serve_axon_extrinsic(mock_subtensor, mock_axon, netuid, wait_for_inclusion, wait_for_finalization, external_ip, external_ip_success, serve_success, expected_result, test_id, mocker)

.. py:function:: test_serve_extrinsic_edge_cases(mock_subtensor, mock_wallet, ip, port, protocol, netuid, placeholder1, placeholder2, wait_for_inclusion, wait_for_finalization, expected, test_id, mocker)

.. py:function:: test_serve_extrinsic_error_cases(mock_subtensor, mock_wallet, ip, port, protocol, netuid, placeholder1, placeholder2, wait_for_inclusion, wait_for_finalization, expected_error_message, test_id, mocker)

.. py:function:: test_serve_extrinsic_happy_path(mock_subtensor, mock_wallet, ip, port, protocol, netuid, placeholder1, placeholder2, wait_for_inclusion, wait_for_finalization, expected, test_id, mocker)

