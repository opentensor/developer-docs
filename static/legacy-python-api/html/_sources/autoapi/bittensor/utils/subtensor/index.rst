bittensor.utils.subtensor
=========================

.. py:module:: bittensor.utils.subtensor

.. autoapi-nested-parse::

   Module providing common helper functions for working with Subtensor.



Attributes
----------

.. autoapisummary::

   bittensor.utils.subtensor._logger
   bittensor.utils.subtensor._USER_HOME_DIR
   bittensor.utils.subtensor._BT_DIR
   bittensor.utils.subtensor._ERRORS_FILE_PATH
   bittensor.utils.subtensor._ST_BUILD_ID


Functions
---------

.. autoapisummary::

   bittensor.utils.subtensor._get_errors_from_pallet
   bittensor.utils.subtensor._save_errors_to_cache
   bittensor.utils.subtensor._get_errors_from_cache
   bittensor.utils.subtensor.get_subtensor_errors
   bittensor.utils.subtensor.format_parent
   bittensor.utils.subtensor.format_children


Module Contents
---------------

.. py:data:: _logger

.. py:data:: _USER_HOME_DIR

.. py:data:: _BT_DIR

.. py:data:: _ERRORS_FILE_PATH

.. py:data:: _ST_BUILD_ID
   :value: 'subtensor_build_id'


.. py:function:: _get_errors_from_pallet(pallet)

   Extracts and returns error information from the given pallet metadata.

   :param pallet: The pallet metadata containing error definitions.
   :type pallet: PalletMetadataV14

   :returns: A dictionary of errors indexed by their IDs.
   :rtype: dict[str, str]

   :raises ValueError: If the pallet does not contain error definitions or the list is empty.


.. py:function:: _save_errors_to_cache(uniq_version, errors)

   Saves error details and unique version identifier to a JSON file.

   :param uniq_version: Unique version identifier for the Subtensor build.
   :type uniq_version: str
   :param errors: Error information to be cached.
   :type errors: dict[str, str]


.. py:function:: _get_errors_from_cache()

   Retrieves and returns the cached error information from a JSON file, if it exists.

   :returns: A dictionary containing error information.


.. py:function:: get_subtensor_errors(substrate)

   Fetches or retrieves cached Subtensor error definitions using metadata.

   :param substrate: Instance of SubstrateInterface to access metadata.
   :type substrate: SubstrateInterface

   :returns: A dictionary containing error information.
   :rtype: dict[str, str]


.. py:function:: format_parent(proportion, parent)

   Formats raw parent data into a list of tuples.
   :param parent: The raw parent data.
   :param proportion: proportion of parent data.

   :returns: List of (proportion, child_address) tuples.
   :rtype: list


.. py:function:: format_children(children)

   Formats raw children data into a list of tuples.
   :param children: The raw children data.

   :returns: List of (proportion, child_address) tuples.
   :rtype: list


