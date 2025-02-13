bittensor.utils.substrate_utils.hasher
======================================

.. py:module:: bittensor.utils.substrate_utils.hasher

.. autoapi-nested-parse::

   Helper functions used to calculate keys for Substrate storage items



Functions
---------

.. autoapisummary::

   bittensor.utils.substrate_utils.hasher.blake2_128
   bittensor.utils.substrate_utils.hasher.blake2_128_concat
   bittensor.utils.substrate_utils.hasher.blake2_256
   bittensor.utils.substrate_utils.hasher.identity
   bittensor.utils.substrate_utils.hasher.two_x64_concat
   bittensor.utils.substrate_utils.hasher.xxh128
   bittensor.utils.substrate_utils.hasher.xxh64


Module Contents
---------------

.. py:function:: blake2_128(data)

   Helper function to calculate a 16 bytes Blake2b hash for provided data, used as key for Substrate storage items


.. py:function:: blake2_128_concat(data)

   Helper function to calculate a 16 bytes Blake2b hash for provided data, concatenated with data, used as key
   for Substrate storage items


.. py:function:: blake2_256(data)

   Helper function to calculate a 32 bytes Blake2b hash for provided data, used as key for Substrate storage items


.. py:function:: identity(data)

.. py:function:: two_x64_concat(data)

   Helper function to calculate a xxh64 hash with concatenated data for provided data,
   used as key for several Substrate


.. py:function:: xxh128(data)

   Helper function to calculate a 2 concatenated xxh64 hash for provided data, used as key for several Substrate


.. py:function:: xxh64(data)

