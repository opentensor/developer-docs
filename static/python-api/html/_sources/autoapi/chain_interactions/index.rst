chain_interactions
==================

.. py:module:: chain_interactions

.. autoapi-nested-parse::

   This module provides functions interacting with the chain for end-to-end testing;
   these are not present in btsdk but are required for e2e tests



Functions
---------

.. autoapisummary::

   chain_interactions.add_stake
   chain_interactions.next_tempo
   chain_interactions.register_subnet
   chain_interactions.root_set_subtensor_hyperparameter_values
   chain_interactions.sudo_set_admin_utils
   chain_interactions.sudo_set_hyperparameter_bool
   chain_interactions.sudo_set_hyperparameter_values
   chain_interactions.wait_epoch
   chain_interactions.wait_interval


Module Contents
---------------

.. py:function:: add_stake(substrate, wallet, amount)

   Adds stake to a hotkey using SubtensorModule. Mimics command of adding stake


.. py:function:: next_tempo(current_block, tempo, netuid)

   Calculates the next tempo block for a specific subnet.

   :param current_block: The current block number.
   :type current_block: int
   :param tempo: The tempo value for the subnet.
   :type tempo: int
   :param netuid: The unique identifier of the subnet.
   :type netuid: int

   :returns: The next tempo block number.
   :rtype: int


.. py:function:: register_subnet(substrate, wallet)

   Registers a subnet on the chain using wallet. Mimics register subnet command.


.. py:function:: root_set_subtensor_hyperparameter_values(substrate, wallet, call_function, call_params, return_error_message = False)
   :async:


   Sets liquid alpha values using AdminUtils. Mimics setting hyperparams


.. py:function:: sudo_set_admin_utils(substrate, wallet, call_function, call_params, return_error_message = False)

   Wraps the call in sudo to set hyperparameter values using AdminUtils.

   :param substrate: Substrate connection.
   :type substrate: SubstrateInterface
   :param wallet: Wallet object with the keypair for signing.
   :type wallet: Wallet
   :param call_function: The AdminUtils function to call.
   :type call_function: str
   :param call_params: Parameters for the AdminUtils function.
   :type call_params: dict
   :param return_error_message: If True, returns the error message along with the success status.
   :type return_error_message: bool

   :returns: Success status or (success status, error message).
   :rtype: Union[bool, tuple[bool, Optional[str]]]


.. py:function:: sudo_set_hyperparameter_bool(substrate, wallet, call_function, value, netuid)

   Sets boolean hyperparameter value through AdminUtils. Mimics setting hyperparams


.. py:function:: sudo_set_hyperparameter_values(substrate, wallet, call_function, call_params, return_error_message = False)

   Sets liquid alpha values using AdminUtils. Mimics setting hyperparams


.. py:function:: wait_epoch(subtensor, netuid = 1)
   :async:


   Waits for the next epoch to start on a specific subnet.

   Queries the tempo value from the Subtensor module and calculates the
   interval based on the tempo. Then waits for the next epoch to start
   by monitoring the current block number.

   :raises Exception: If the tempo cannot be determined from the chain.


.. py:function:: wait_interval(tempo, subtensor, netuid = 1, reporting_interval = 10)
   :async:


   Waits until the next tempo interval starts for a specific subnet.

   Calculates the next tempo block start based on the current block number
   and the provided tempo, then enters a loop where it periodically checks
   the current block number until the next tempo interval starts.


