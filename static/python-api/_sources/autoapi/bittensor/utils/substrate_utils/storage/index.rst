bittensor.utils.substrate_utils.storage
=======================================

.. py:module:: bittensor.utils.substrate_utils.storage


Classes
-------

.. autoapisummary::

   bittensor.utils.substrate_utils.storage.StorageKey


Module Contents
---------------

.. py:class:: StorageKey(pallet, storage_function, params, data, value_scale_type, metadata, runtime_config)

   A StorageKey instance is a representation of a single state entry.

   Substrate uses a simple key-value data store implemented as a database-backed, modified Merkle tree.
   All of Substrate's higher-level storage abstractions are built on top of this simple key-value store.


   .. py:method:: convert_storage_parameter(scale_type, value)


   .. py:method:: create_from_data(data, runtime_config, metadata, value_scale_type = None, pallet = None, storage_function = None)
      :classmethod:


      Create a StorageKey instance providing raw storage key bytes

      :param data: bytes representation of the storage key
      :param runtime_config: RuntimeConfigurationObject
      :param metadata: GenericMetadataVersioned
      :param value_scale_type: type string of to decode result data
      :param pallet: name of pallet
      :param storage_function: name of storage function

      :returns: StorageKey



   .. py:method:: create_from_storage_function(pallet, storage_function, params, runtime_config, metadata)
      :classmethod:


      Create a StorageKey instance providing storage function details

      :param pallet: name of pallet
      :param storage_function: name of storage function
      :param params: Optional list of parameters in case of a Mapped storage function
      :param runtime_config: RuntimeConfigurationObject
      :param metadata: GenericMetadataVersioned

      :returns: StorageKey



   .. py:attribute:: data


   .. py:method:: decode_scale_value(data = None)


   .. py:method:: generate()

      Generate a storage key for current specified pallet/function/params



   .. py:attribute:: metadata


   .. py:attribute:: metadata_storage_function
      :value: None



   .. py:attribute:: pallet


   .. py:attribute:: params


   .. py:attribute:: params_encoded
      :value: []



   .. py:attribute:: runtime_config


   .. py:attribute:: storage_function


   .. py:method:: to_hex()

      Returns a Hex-string representation of current StorageKey data

      :returns: Hex string



   .. py:attribute:: value_scale_type


