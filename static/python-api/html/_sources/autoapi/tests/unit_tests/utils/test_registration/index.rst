tests.unit_tests.utils.test_registration
========================================

.. py:module:: tests.unit_tests.utils.test_registration


Classes
-------

.. autoapisummary::

   tests.unit_tests.utils.test_registration.MockBittensorLogging


Functions
---------

.. autoapisummary::

   tests.unit_tests.utils.test_registration.mock_bittensor_logging
   tests.unit_tests.utils.test_registration.test_lazy_loaded_torch__no_torch
   tests.unit_tests.utils.test_registration.test_lazy_loaded_torch__torch_installed


Module Contents
---------------

.. py:class:: MockBittensorLogging

   .. py:method:: error(message)


   .. py:attribute:: messages
      :value: []



.. py:function:: mock_bittensor_logging(monkeypatch)

.. py:function:: test_lazy_loaded_torch__no_torch(monkeypatch, mock_bittensor_logging)

.. py:function:: test_lazy_loaded_torch__torch_installed(monkeypatch, mock_bittensor_logging)

