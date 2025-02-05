tests.unit_tests.test_chain_data
================================

.. py:module:: tests.unit_tests.test_chain_data


Attributes
----------

.. autoapisummary::

   tests.unit_tests.test_chain_data.RAOPERTAO


Functions
---------

.. autoapisummary::

   tests.unit_tests.test_chain_data.create_neuron_info_decoded
   tests.unit_tests.test_chain_data.test_eq
   tests.unit_tests.test_chain_data.test_from_neuron_info
   tests.unit_tests.test_chain_data.test_from_parameter_dict
   tests.unit_tests.test_chain_data.test_from_parameter_dict_torch
   tests.unit_tests.test_chain_data.test_from_string
   tests.unit_tests.test_chain_data.test_ip_str
   tests.unit_tests.test_chain_data.test_is_serving
   tests.unit_tests.test_chain_data.test_to_parameter_dict
   tests.unit_tests.test_chain_data.test_to_parameter_dict_torch
   tests.unit_tests.test_chain_data.test_to_string


Module Contents
---------------

.. py:data:: RAOPERTAO
   :value: 1000000000000000000


.. py:function:: create_neuron_info_decoded(hotkey, coldkey, stake, weights, bonds, rank, emission, incentive, consensus, trust, validator_trust, dividends, uid, netuid, active, last_update, validator_permit, pruning_score, prometheus_info, axon_info)

.. py:function:: test_eq(other, expected, test_case)

.. py:function:: test_from_neuron_info(neuron_info, expected, test_case)

.. py:function:: test_from_parameter_dict(parameter_dict, expected, test_case)

.. py:function:: test_from_parameter_dict_torch(parameter_dict, expected, test_case, force_legacy_torch_compatible_api)

.. py:function:: test_from_string(string, expected, test_case)

.. py:function:: test_ip_str(ip_type, ip, port, expected, test_case)

.. py:function:: test_is_serving(ip, expected, test_case)

.. py:function:: test_to_parameter_dict(axon_info, test_case)

.. py:function:: test_to_parameter_dict_torch(axon_info, test_case, force_legacy_torch_compatible_api)

.. py:function:: test_to_string(axon_info, expected, test_case)

