bittensor.utils.deprecated
==========================

.. py:module:: bittensor.utils.deprecated

.. autoapi-nested-parse::

   The Bittensor Compatibility Module is designed to ensure seamless integration and functionality with legacy versions of
   the Bittensor framework, specifically up to and including version 7.3.0. This module addresses changes and deprecated
   features in recent versions, allowing users to maintain compatibility with older systems and projects.



Attributes
----------

.. autoapisummary::

   bittensor.utils.deprecated.async_subtensor
   bittensor.utils.deprecated.axon
   bittensor.utils.deprecated.config
   bittensor.utils.deprecated.dendrite
   bittensor.utils.deprecated.extrinsics_subpackage
   bittensor.utils.deprecated.keyfile
   bittensor.utils.deprecated.metagraph
   bittensor.utils.deprecated.mock_subpackage
   bittensor.utils.deprecated.subtensor
   bittensor.utils.deprecated.synapse
   bittensor.utils.deprecated.wallet


Functions
---------

.. autoapisummary::

   bittensor.utils.deprecated.debug
   bittensor.utils.deprecated.info
   bittensor.utils.deprecated.trace
   bittensor.utils.deprecated.warning


Module Contents
---------------

.. py:data:: async_subtensor

.. py:data:: axon

.. py:data:: config

.. py:function:: debug(on = True)

   Enables or disables debug logging.
   :param on: If True, enables debug logging. If False, disables debug logging.
   :type on: bool


.. py:data:: dendrite

.. py:data:: extrinsics_subpackage

.. py:function:: info(on = True)

   Enables or disables info logging.
   :param on: If True, enables info logging. If False, disables info logging and sets default (WARNING) level.
   :type on: bool


.. py:data:: keyfile

.. py:data:: metagraph

.. py:data:: mock_subpackage

.. py:data:: subtensor

.. py:data:: synapse

.. py:function:: trace(on = True)

   Enables or disables trace logging.
   :param on: If True, enables trace logging. If False, disables trace logging.
   :type on: bool


.. py:data:: wallet

.. py:function:: warning(on = True)

   Enables or disables warning logging.
   :param on: If True, enables warning logging. If False, disables warning logging and sets default (WARNING) level.
   :type on: bool


