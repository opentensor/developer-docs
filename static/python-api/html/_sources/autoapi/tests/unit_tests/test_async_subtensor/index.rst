tests.unit_tests.test_async_subtensor
=====================================

.. py:module:: tests.unit_tests.test_async_subtensor


Functions
---------

.. autoapisummary::

   tests.unit_tests.test_async_subtensor.subtensor
   tests.unit_tests.test_async_subtensor.test__str__return
   tests.unit_tests.test_async_subtensor.test_async_subtensor_aenter_connection_refused_error
   tests.unit_tests.test_async_subtensor.test_async_subtensor_magic_methods
   tests.unit_tests.test_async_subtensor.test_blocks_since_last_update_no_last_update
   tests.unit_tests.test_async_subtensor.test_blocks_since_last_update_success
   tests.unit_tests.test_async_subtensor.test_bonds
   tests.unit_tests.test_async_subtensor.test_commit_reveal_enabled
   tests.unit_tests.test_async_subtensor.test_commit_weights_success
   tests.unit_tests.test_async_subtensor.test_commit_weights_with_exception
   tests.unit_tests.test_async_subtensor.test_decode_hex_identity_dict_with_nested_dict
   tests.unit_tests.test_async_subtensor.test_decode_hex_identity_dict_with_non_tuple_value
   tests.unit_tests.test_async_subtensor.test_decode_hex_identity_dict_with_non_utf8_data
   tests.unit_tests.test_async_subtensor.test_decode_hex_identity_dict_with_single_byte_utf8
   tests.unit_tests.test_async_subtensor.test_decode_ss58_tuples_in_proposal_vote_data
   tests.unit_tests.test_async_subtensor.test_does_hotkey_exist_false_for_specific_account
   tests.unit_tests.test_async_subtensor.test_does_hotkey_exist_true
   tests.unit_tests.test_async_subtensor.test_encode_params
   tests.unit_tests.test_async_subtensor.test_encode_params_raises_error
   tests.unit_tests.test_async_subtensor.test_filter_netuids_by_registered_hotkeys
   tests.unit_tests.test_async_subtensor.test_get_balance
   tests.unit_tests.test_async_subtensor.test_get_block_hash_with_block_id
   tests.unit_tests.test_async_subtensor.test_get_block_hash_without_block_id_aka_none
   tests.unit_tests.test_async_subtensor.test_get_children_no_children
   tests.unit_tests.test_async_subtensor.test_get_children_substrate_request_exception
   tests.unit_tests.test_async_subtensor.test_get_children_success
   tests.unit_tests.test_async_subtensor.test_get_current_block
   tests.unit_tests.test_async_subtensor.test_get_delegate_identities
   tests.unit_tests.test_async_subtensor.test_get_delegated_no_block_hash_no_reuse
   tests.unit_tests.test_async_subtensor.test_get_delegated_with_block_hash
   tests.unit_tests.test_async_subtensor.test_get_delegated_with_empty_result
   tests.unit_tests.test_async_subtensor.test_get_delegated_with_reuse_block
   tests.unit_tests.test_async_subtensor.test_get_delegates
   tests.unit_tests.test_async_subtensor.test_get_existential_deposit_happy_path
   tests.unit_tests.test_async_subtensor.test_get_existential_deposit_raise_exception
   tests.unit_tests.test_async_subtensor.test_get_hotkey_owner_exists_but_does_not_exist_flag_false
   tests.unit_tests.test_async_subtensor.test_get_hotkey_owner_non_existent_hotkey
   tests.unit_tests.test_async_subtensor.test_get_hotkey_owner_successful
   tests.unit_tests.test_async_subtensor.test_get_hyperparameter_happy_path
   tests.unit_tests.test_async_subtensor.test_get_hyperparameter_if_subnet_does_not_exist
   tests.unit_tests.test_async_subtensor.test_get_netuids_for_hotkey_with_records
   tests.unit_tests.test_async_subtensor.test_get_netuids_for_hotkey_without_records
   tests.unit_tests.test_async_subtensor.test_get_neuron_for_pubkey_and_subnet_rpc_result_empty
   tests.unit_tests.test_async_subtensor.test_get_neuron_for_pubkey_and_subnet_success
   tests.unit_tests.test_async_subtensor.test_get_neuron_for_pubkey_and_subnet_uid_not_found
   tests.unit_tests.test_async_subtensor.test_get_stake_for_coldkey_and_hotkey
   tests.unit_tests.test_async_subtensor.test_get_stake_info_for_coldkey
   tests.unit_tests.test_async_subtensor.test_get_subnet_burn_cost
   tests.unit_tests.test_async_subtensor.test_get_subnet_hyperparameters_no_data
   tests.unit_tests.test_async_subtensor.test_get_subnet_hyperparameters_success
   tests.unit_tests.test_async_subtensor.test_get_subnet_hyperparameters_without_0x_prefix
   tests.unit_tests.test_async_subtensor.test_get_subnet_reveal_period_epochs
   tests.unit_tests.test_async_subtensor.test_get_subnets
   tests.unit_tests.test_async_subtensor.test_get_total_stake_for_coldkey
   tests.unit_tests.test_async_subtensor.test_get_total_stake_for_hotkey
   tests.unit_tests.test_async_subtensor.test_get_total_subnets
   tests.unit_tests.test_async_subtensor.test_get_transfer_fee
   tests.unit_tests.test_async_subtensor.test_get_transfer_fee_with_non_balance_accepted_value_type
   tests.unit_tests.test_async_subtensor.test_get_transfer_with_exception
   tests.unit_tests.test_async_subtensor.test_get_uid_for_hotkey_on_subnet_not_registered
   tests.unit_tests.test_async_subtensor.test_get_uid_for_hotkey_on_subnet_registered
   tests.unit_tests.test_async_subtensor.test_get_vote_data_no_data
   tests.unit_tests.test_async_subtensor.test_get_vote_data_success
   tests.unit_tests.test_async_subtensor.test_init_if_unknown_network_is_known_endpoint
   tests.unit_tests.test_async_subtensor.test_init_if_unknown_network_is_not_valid
   tests.unit_tests.test_async_subtensor.test_init_if_unknown_network_is_valid
   tests.unit_tests.test_async_subtensor.test_is_hotkey_delegate
   tests.unit_tests.test_async_subtensor.test_is_hotkey_registered_any
   tests.unit_tests.test_async_subtensor.test_is_hotkey_registered_false
   tests.unit_tests.test_async_subtensor.test_is_hotkey_registered_true
   tests.unit_tests.test_async_subtensor.test_neuron_for_uid
   tests.unit_tests.test_async_subtensor.test_neuron_for_uid_happy_path
   tests.unit_tests.test_async_subtensor.test_neuron_for_uid_with_none_uid
   tests.unit_tests.test_async_subtensor.test_neurons
   tests.unit_tests.test_async_subtensor.test_neurons_lite
   tests.unit_tests.test_async_subtensor.test_query_identity_no_info
   tests.unit_tests.test_async_subtensor.test_query_identity_successful
   tests.unit_tests.test_async_subtensor.test_query_identity_type_error
   tests.unit_tests.test_async_subtensor.test_query_runtime_api
   tests.unit_tests.test_async_subtensor.test_register_success
   tests.unit_tests.test_async_subtensor.test_root_set_weights_success
   tests.unit_tests.test_async_subtensor.test_set_weights_success
   tests.unit_tests.test_async_subtensor.test_set_weights_with_exception
   tests.unit_tests.test_async_subtensor.test_sign_and_send_extrinsic_error_finalization
   tests.unit_tests.test_async_subtensor.test_sign_and_send_extrinsic_substrate_request_exception
   tests.unit_tests.test_async_subtensor.test_sign_and_send_extrinsic_success_finalization
   tests.unit_tests.test_async_subtensor.test_sign_and_send_extrinsic_success_without_inclusion_finalization
   tests.unit_tests.test_async_subtensor.test_subnet_exists
   tests.unit_tests.test_async_subtensor.test_transfer_success
   tests.unit_tests.test_async_subtensor.test_weights_rate_limit_none
   tests.unit_tests.test_async_subtensor.test_weights_rate_limit_success
   tests.unit_tests.test_async_subtensor.test_weights_successful


Module Contents
---------------

.. py:function:: subtensor(mocker)

.. py:function:: test__str__return(subtensor)

   Simply tests the result if printing subtensor instance.


.. py:function:: test_async_subtensor_aenter_connection_refused_error(subtensor, mocker, error)
   :async:


   Tests __aenter__ method handling all errors.


.. py:function:: test_async_subtensor_magic_methods(mocker)
   :async:


   Tests async magic methods of AsyncSubtensor class.


.. py:function:: test_blocks_since_last_update_no_last_update(subtensor, mocker)
   :async:


   Tests blocks_since_last_update when the last update data is not found.


.. py:function:: test_blocks_since_last_update_success(subtensor, mocker)
   :async:


   Tests blocks_since_last_update when the data is successfully retrieved.


.. py:function:: test_bonds(subtensor, mocker)
   :async:


   Tests bonds method with successful bond distribution retrieval.


.. py:function:: test_commit_reveal_enabled(subtensor, mocker)
   :async:


   Test commit_reveal_enabled.


.. py:function:: test_commit_weights_success(subtensor, mocker)
   :async:


   Tests commit_weights when the weights are committed successfully.


.. py:function:: test_commit_weights_with_exception(subtensor, mocker)
   :async:


   Tests commit_weights when an exception is raised during weight commitment.


.. py:function:: test_decode_hex_identity_dict_with_nested_dict()

   Tests _decode_hex_identity_dict with a nested dictionary.


.. py:function:: test_decode_hex_identity_dict_with_non_tuple_value()

   Tests _decode_hex_identity_dict when value is not a tuple.


.. py:function:: test_decode_hex_identity_dict_with_non_utf8_data()

   Tests _decode_hex_identity_dict when value cannot be decoded as utf-8.


.. py:function:: test_decode_hex_identity_dict_with_single_byte_utf8()

   Tests _decode_hex_identity_dict when value is a single utf-8 decodable byte.


.. py:function:: test_decode_ss58_tuples_in_proposal_vote_data(mocker)

   Tests that ProposalVoteData instance instantiation works properly,


.. py:function:: test_does_hotkey_exist_false_for_specific_account(subtensor, mocker)
   :async:


   Tests does_hotkey_exist method when the hotkey exists but matches the specific account ID to ignore.


.. py:function:: test_does_hotkey_exist_true(subtensor, mocker)
   :async:


   Tests does_hotkey_exist method when the hotkey exists and is valid.


.. py:function:: test_encode_params(subtensor, mocker)
   :async:


   Tests encode_params happy path.


.. py:function:: test_encode_params_raises_error(subtensor, mocker)
   :async:


   Tests encode_params with raised error.


.. py:function:: test_filter_netuids_by_registered_hotkeys(subtensor, mocker, all_netuids, filter_for_netuids, response)
   :async:


   Tests filter_netuids_by_registered_hotkeys method.


.. py:function:: test_get_balance(subtensor, mocker)
   :async:


   Tests get_balance method.


.. py:function:: test_get_block_hash_with_block_id(subtensor)
   :async:


   Tests get_block_hash method with passed block_id.


.. py:function:: test_get_block_hash_without_block_id_aka_none(subtensor)
   :async:


   Tests get_block_hash method without passed block_id.


.. py:function:: test_get_children_no_children(subtensor, mocker)
   :async:


   Tests get_children when there are no children to retrieve.


.. py:function:: test_get_children_substrate_request_exception(subtensor, mocker)
   :async:


   Tests get_children when SubstrateRequestException is raised.


.. py:function:: test_get_children_success(subtensor, mocker)
   :async:


   Tests get_children when children are successfully retrieved and formatted.


.. py:function:: test_get_current_block(subtensor)
   :async:


   Tests get_current_block method.


.. py:function:: test_get_delegate_identities(subtensor, mocker)
   :async:


   Tests get_delegate_identities with successful data retrieval from both chain and GitHub.


.. py:function:: test_get_delegated_no_block_hash_no_reuse(subtensor, mocker)
   :async:


   Tests get_delegated method with no block_hash and reuse_block=False.


.. py:function:: test_get_delegated_with_block_hash(subtensor, mocker)
   :async:


   Tests get_delegated method with specified block_hash.


.. py:function:: test_get_delegated_with_empty_result(subtensor, mocker)
   :async:


   Tests get_delegated method when RPC request returns an empty result.


.. py:function:: test_get_delegated_with_reuse_block(subtensor, mocker)
   :async:


   Tests get_delegated method with reuse_block=True.


.. py:function:: test_get_delegates(subtensor, mocker, fake_hex_bytes_result, response)
   :async:


   Tests get_delegates method.


.. py:function:: test_get_existential_deposit_happy_path(subtensor, mocker)
   :async:


   Tests get_existential_deposit method.


.. py:function:: test_get_existential_deposit_raise_exception(subtensor, mocker)
   :async:


   Tests get_existential_deposit method raise Exception.


.. py:function:: test_get_hotkey_owner_exists_but_does_not_exist_flag_false(subtensor, mocker)
   :async:


   Tests get_hotkey_owner method when decode_account_id returns a value but does_hotkey_exist returns False.


.. py:function:: test_get_hotkey_owner_non_existent_hotkey(subtensor, mocker)
   :async:


   Tests get_hotkey_owner method when the hotkey does not exist in the query result.


.. py:function:: test_get_hotkey_owner_successful(subtensor, mocker)
   :async:


   Tests get_hotkey_owner method when the hotkey exists and has an owner.


.. py:function:: test_get_hyperparameter_happy_path(subtensor, mocker)
   :async:


   Tests get_hyperparameter method with happy path.


.. py:function:: test_get_hyperparameter_if_subnet_does_not_exist(subtensor, mocker)
   :async:


   Tests get_hyperparameter method if subnet does not exist.


.. py:function:: test_get_netuids_for_hotkey_with_records(subtensor, mocker)
   :async:


   Tests get_netuids_for_hotkey method handle records properly.


.. py:function:: test_get_netuids_for_hotkey_without_records(subtensor, mocker)
   :async:


   Tests get_netuids_for_hotkey method handle empty records properly.


.. py:function:: test_get_neuron_for_pubkey_and_subnet_rpc_result_empty(subtensor, mocker)
   :async:


   Tests the case where RPC result is empty.


.. py:function:: test_get_neuron_for_pubkey_and_subnet_success(subtensor, mocker)
   :async:


   Tests successful retrieval of neuron information.


.. py:function:: test_get_neuron_for_pubkey_and_subnet_uid_not_found(subtensor, mocker)
   :async:


   Tests the case where UID is not found.


.. py:function:: test_get_stake_for_coldkey_and_hotkey(subtensor, mocker)
   :async:


   Tests get_stake_for_coldkey_and_hotkey method.


.. py:function:: test_get_stake_info_for_coldkey(subtensor, mocker, fake_hex_bytes_result, response)
   :async:


   Tests get_stake_info_for_coldkey method.


.. py:function:: test_get_subnet_burn_cost(subtensor, mocker)
   :async:


   Tests get_subnet_burn_cost method.


.. py:function:: test_get_subnet_hyperparameters_no_data(subtensor, mocker)
   :async:


   Tests get_subnet_hyperparameters when no hyperparameters data is returned.


.. py:function:: test_get_subnet_hyperparameters_success(subtensor, mocker)
   :async:


   Tests get_subnet_hyperparameters with successful hyperparameter retrieval.


.. py:function:: test_get_subnet_hyperparameters_without_0x_prefix(subtensor, mocker)
   :async:


   Tests get_subnet_hyperparameters when hex_bytes_result is without 0x prefix.


.. py:function:: test_get_subnet_reveal_period_epochs(subtensor, mocker)
   :async:


   Test get_subnet_reveal_period_epochs.


.. py:function:: test_get_subnets(subtensor, mocker, records, response)
   :async:


   Tests get_subnets method with any return.


.. py:function:: test_get_total_stake_for_coldkey(subtensor, mocker)
   :async:


   Tests get_total_stake_for_coldkey method.


.. py:function:: test_get_total_stake_for_hotkey(subtensor, mocker)
   :async:


   Tests get_total_stake_for_hotkey method.


.. py:function:: test_get_total_subnets(subtensor, mocker)
   :async:


   Tests get_total_subnets method.


.. py:function:: test_get_transfer_fee(subtensor, mocker, balance)
   :async:


   Tests get_transfer_fee method.


.. py:function:: test_get_transfer_fee_with_non_balance_accepted_value_type(subtensor, mocker)
   :async:


   Tests get_transfer_fee method with non balance accepted value type.


.. py:function:: test_get_transfer_with_exception(subtensor, mocker)
   :async:


   Tests get_transfer_fee method handle Exception properly.


.. py:function:: test_get_uid_for_hotkey_on_subnet_not_registered(subtensor, mocker)
   :async:


   Tests get_uid_for_hotkey_on_subnet when the hotkey is not registered on the subnet.


.. py:function:: test_get_uid_for_hotkey_on_subnet_registered(subtensor, mocker)
   :async:


   Tests get_uid_for_hotkey_on_subnet when the hotkey is registered and has a UID.


.. py:function:: test_get_vote_data_no_data(subtensor, mocker)
   :async:


   Tests get_vote_data when no voting data is available.


.. py:function:: test_get_vote_data_success(subtensor, mocker)
   :async:


   Tests get_vote_data when voting data is successfully retrieved.


.. py:function:: test_init_if_unknown_network_is_known_endpoint(mocker)
   :async:


   Tests __init__ if passed network unknown and is valid.


.. py:function:: test_init_if_unknown_network_is_not_valid(mocker)
   :async:


   Tests __init__ if passed network unknown and isn't valid.


.. py:function:: test_init_if_unknown_network_is_valid(mocker)
   :async:


   Tests __init__ if passed network unknown and is valid.


.. py:function:: test_is_hotkey_delegate(subtensor, mocker, hotkey_ss58_in_result)
   :async:


   Tests is_hotkey_delegate method with any return.


.. py:function:: test_is_hotkey_registered_any(subtensor, mocker)
   :async:


   Tests is_hotkey_registered_any method.


.. py:function:: test_is_hotkey_registered_false(subtensor, mocker)
   :async:


   Tests is_hotkey_registered when the hotkey is not registered on the netuid.


.. py:function:: test_is_hotkey_registered_true(subtensor, mocker)
   :async:


   Tests is_hotkey_registered when the hotkey is registered on the netuid.


.. py:function:: test_neuron_for_uid(subtensor, mocker)
   :async:


   Tests neuron_for_uid method.


.. py:function:: test_neuron_for_uid_happy_path(subtensor, mocker)
   :async:


   Tests neuron_for_uid method with happy path.


.. py:function:: test_neuron_for_uid_with_none_uid(subtensor, mocker)
   :async:


   Tests neuron_for_uid method when uid is None.


.. py:function:: test_neurons(subtensor, mocker)
   :async:


   Tests neurons method.


.. py:function:: test_neurons_lite(subtensor, mocker, fake_hex_bytes_result, response)
   :async:


   Tests neurons_lite method.


.. py:function:: test_query_identity_no_info(subtensor, mocker)
   :async:


   Tests query_identity method when no identity info is returned.


.. py:function:: test_query_identity_successful(subtensor, mocker)
   :async:


   Tests query_identity method with successful identity query.


.. py:function:: test_query_identity_type_error(subtensor, mocker)
   :async:


   Tests query_identity method when a TypeError occurs during decoding.


.. py:function:: test_query_runtime_api(subtensor, mocker)
   :async:


   Tests query_runtime_api method.


.. py:function:: test_register_success(subtensor, mocker)
   :async:


   Tests register when there is enough balance and registration succeeds.


.. py:function:: test_root_set_weights_success(subtensor, mocker)
   :async:


   Tests root_set_weights when the setting of weights is successful.


.. py:function:: test_set_weights_success(subtensor, mocker)
   :async:


   Tests set_weights with successful weight setting on the first try.


.. py:function:: test_set_weights_with_exception(subtensor, mocker)
   :async:


   Tests set_weights when set_weights_extrinsic raises an exception.


.. py:function:: test_sign_and_send_extrinsic_error_finalization(subtensor, mocker)
   :async:


   Tests sign_and_send_extrinsic when the extrinsic is error finalized.


.. py:function:: test_sign_and_send_extrinsic_substrate_request_exception(subtensor, mocker)
   :async:


   Tests sign_and_send_extrinsic when SubstrateRequestException is raised.


.. py:function:: test_sign_and_send_extrinsic_success_finalization(subtensor, mocker)
   :async:


   Tests sign_and_send_extrinsic when the extrinsic is successfully finalized.


.. py:function:: test_sign_and_send_extrinsic_success_without_inclusion_finalization(subtensor, mocker)
   :async:


   Tests sign_and_send_extrinsic when extrinsic is submitted without waiting for inclusion or finalization.


.. py:function:: test_subnet_exists(subtensor, mocker)
   :async:


   Tests subnet_exists method .


.. py:function:: test_transfer_success(subtensor, mocker)
   :async:


   Tests transfer when the transfer is successful.


.. py:function:: test_weights_rate_limit_none(subtensor, mocker)
   :async:


   Tests weights_rate_limit when the hyperparameter value is not found.


.. py:function:: test_weights_rate_limit_success(subtensor, mocker)
   :async:


   Tests weights_rate_limit when the hyperparameter value is successfully retrieved.


.. py:function:: test_weights_successful(subtensor, mocker)
   :async:


   Tests weights method with successful weight distribution retrieval.


