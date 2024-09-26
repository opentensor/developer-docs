bittensor.utils.formatting
==========================

.. py:module:: bittensor.utils.formatting


Functions
---------

.. autoapisummary::

   bittensor.utils.formatting.get_human_readable
   bittensor.utils.formatting.millify
   bittensor.utils.formatting.convert_blocks_to_time
   bittensor.utils.formatting.float_to_u16
   bittensor.utils.formatting.u16_to_float
   bittensor.utils.formatting.float_to_u64
   bittensor.utils.formatting.u64_to_float
   bittensor.utils.formatting.normalize_u64_values


Module Contents
---------------

.. py:function:: get_human_readable(num, suffix='H')

.. py:function:: millify(n)

.. py:function:: convert_blocks_to_time(blocks, block_time = 12)

   Converts number of blocks into number of hours, minutes, seconds.
   :param blocks: number of blocks
   :param block_time: time per block, by default this is 12
   :return: tuple containing number of hours, number of minutes, number of seconds


.. py:function:: float_to_u16(value)

.. py:function:: u16_to_float(value)

.. py:function:: float_to_u64(value)

.. py:function:: u64_to_float(value)

.. py:function:: normalize_u64_values(values)

   Normalize a list of u64 values so that their sum equals u64::MAX (2^64 - 1).


