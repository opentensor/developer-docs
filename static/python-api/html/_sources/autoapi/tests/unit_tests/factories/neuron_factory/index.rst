tests.unit_tests.factories.neuron_factory
=========================================

.. py:module:: tests.unit_tests.factories.neuron_factory


Classes
-------

.. autoapisummary::

   tests.unit_tests.factories.neuron_factory.AxonInfoFactory
   tests.unit_tests.factories.neuron_factory.BalanceFactory
   tests.unit_tests.factories.neuron_factory.NeuronInfoLiteFactory
   tests.unit_tests.factories.neuron_factory.PrometheusInfoFactory


Module Contents
---------------

.. py:class:: AxonInfoFactory

   Bases: :py:obj:`factory.Factory`


   .. py:class:: Meta

      .. py:attribute:: model



   .. py:attribute:: coldkey


   .. py:attribute:: hotkey


   .. py:attribute:: ip


   .. py:attribute:: ip_type


   .. py:attribute:: port


   .. py:attribute:: version


.. py:class:: BalanceFactory

   Bases: :py:obj:`factory.Factory`


   .. py:class:: Meta

      .. py:attribute:: model



   .. py:attribute:: balance


.. py:class:: NeuronInfoLiteFactory

   Bases: :py:obj:`factory.Factory`


   .. py:class:: Meta

      .. py:attribute:: model



   .. py:attribute:: active


   .. py:attribute:: axon_info


   .. py:attribute:: coldkey


   .. py:attribute:: consensus


   .. py:attribute:: dividends


   .. py:attribute:: emission


   .. py:attribute:: hotkey


   .. py:attribute:: incentive


   .. py:attribute:: is_null


   .. py:attribute:: last_update


   .. py:attribute:: netuid


   .. py:attribute:: prometheus_info


   .. py:attribute:: pruning_score


   .. py:attribute:: rank


   .. py:attribute:: stake


   .. py:attribute:: stake_dict


   .. py:attribute:: total_stake


   .. py:attribute:: trust


   .. py:attribute:: uid


   .. py:attribute:: validator_permit


   .. py:attribute:: validator_trust


.. py:class:: PrometheusInfoFactory

   Bases: :py:obj:`factory.Factory`


   .. py:class:: Meta

      .. py:attribute:: model



   .. py:attribute:: block


   .. py:attribute:: ip


   .. py:attribute:: ip_type


   .. py:attribute:: port


   .. py:attribute:: version


