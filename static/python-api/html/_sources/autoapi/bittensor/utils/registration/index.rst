bittensor.utils.registration
============================

.. py:module:: bittensor.utils.registration


Attributes
----------

.. autoapisummary::

   bittensor.utils.registration.torch


Classes
-------

.. autoapisummary::

   bittensor.utils.registration.LazyLoadedTorch


Functions
---------

.. autoapisummary::

   bittensor.utils.registration.use_torch
   bittensor.utils.registration.legacy_torch_api_compat
   bittensor.utils.registration._get_real_torch
   bittensor.utils.registration.log_no_torch_error


Module Contents
---------------

.. py:function:: use_torch()

   Force the use of torch over numpy for certain operations.


.. py:function:: legacy_torch_api_compat(func)

   Convert function operating on numpy Input&Output to legacy torch Input&Output API if `use_torch()` is True.

   :param func: Function with numpy Input/Output to be decorated.
   :type func: function

   :returns: Decorated function.
   :rtype: decorated (function)


.. py:function:: _get_real_torch()

.. py:function:: log_no_torch_error()

.. py:class:: LazyLoadedTorch

   A lazy-loading proxy for the torch module.


   .. py:method:: __bool__()


   .. py:method:: __getattr__(name)


.. py:data:: torch

