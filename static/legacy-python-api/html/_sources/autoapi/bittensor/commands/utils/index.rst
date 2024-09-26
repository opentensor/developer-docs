bittensor.commands.utils
========================

.. py:module:: bittensor.commands.utils


Attributes
----------

.. autoapisummary::

   bittensor.commands.utils.console


Classes
-------

.. autoapisummary::

   bittensor.commands.utils.IntListPrompt
   bittensor.commands.utils.DelegatesDetails


Functions
---------

.. autoapisummary::

   bittensor.commands.utils.check_netuid_set
   bittensor.commands.utils.check_for_cuda_reg_config
   bittensor.commands.utils.get_hotkey_wallets_for_wallet
   bittensor.commands.utils.get_coldkey_wallets_for_path
   bittensor.commands.utils.get_all_wallets_for_path
   bittensor.commands.utils.filter_netuids_by_registered_hotkeys
   bittensor.commands.utils.normalize_hyperparameters
   bittensor.commands.utils._get_delegates_details_from_github
   bittensor.commands.utils.get_delegates_details


Module Contents
---------------

.. py:data:: console

.. py:class:: IntListPrompt(prompt = '', *, console = None, password = False, choices = None, show_default = True, show_choices = True)

   Bases: :py:obj:`rich.prompt.PromptBase`


   Prompt for a list of integers.


   .. py:method:: check_choice(value)

      Check value is in the list of valid choices.

      :param value: Value entered by user.
      :type value: str

      :returns: True if choice was valid, otherwise False.
      :rtype: bool



.. py:function:: check_netuid_set(config, subtensor, allow_none = False)

.. py:function:: check_for_cuda_reg_config(config)

   Checks, when CUDA is available, if the user would like to register with their CUDA device.


.. py:function:: get_hotkey_wallets_for_wallet(wallet)

.. py:function:: get_coldkey_wallets_for_path(path)

.. py:function:: get_all_wallets_for_path(path)

.. py:function:: filter_netuids_by_registered_hotkeys(cli, subtensor, netuids, all_hotkeys)

.. py:function:: normalize_hyperparameters(subnet)

   Normalizes the hyperparameters of a subnet.

   :param subnet: The subnet hyperparameters object.

   :returns: A list of tuples containing the parameter name, value, and normalized value.


.. py:class:: DelegatesDetails

   .. py:attribute:: name
      :type:  str


   .. py:attribute:: url
      :type:  str


   .. py:attribute:: description
      :type:  str


   .. py:attribute:: signature
      :type:  str


   .. py:method:: from_json(json)
      :classmethod:



.. py:function:: _get_delegates_details_from_github(requests_get, url)

.. py:function:: get_delegates_details(url)

