bittensor.utils.axon_utils
==========================

.. py:module:: bittensor.utils.axon_utils


Attributes
----------

.. autoapisummary::

   bittensor.utils.axon_utils.ALLOWED_DELTA
   bittensor.utils.axon_utils.NANOSECONDS_IN_SECOND


Functions
---------

.. autoapisummary::

   bittensor.utils.axon_utils.allowed_nonce_window_ns
   bittensor.utils.axon_utils.calculate_diff_seconds


Module Contents
---------------

.. py:data:: ALLOWED_DELTA
   :value: 4000000000


.. py:data:: NANOSECONDS_IN_SECOND
   :value: 1000000000


.. py:function:: allowed_nonce_window_ns(current_time_ns, synapse_timeout = None)

   Calculates the allowed window for a nonce in nanoseconds.

   :param current_time_ns: The current time in nanoseconds.
   :type current_time_ns: int
   :param synapse_timeout: The optional timeout for the synapse in seconds. If None, it defaults to 0.
   :type synapse_timeout: Optional[float]

   :returns: The allowed nonce window in nanoseconds.
   :rtype: int


.. py:function:: calculate_diff_seconds(current_time, synapse_timeout, synapse_nonce)

   Calculates the difference in seconds between the current time and the synapse nonce,
   and also returns the allowed delta in seconds.

   :param current_time: The current time in nanoseconds.
   :type current_time: int
   :param synapse_timeout: The optional timeout for the synapse in seconds.
   :type synapse_timeout: Optional[float]
   :param synapse_nonce: The nonce value for the synapse in nanoseconds.
   :type synapse_nonce: int

   :returns: A tuple containing the difference in seconds (float) and the allowed delta in seconds (float).
   :rtype: tuple


