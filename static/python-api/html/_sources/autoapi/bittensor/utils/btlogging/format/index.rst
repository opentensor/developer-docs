bittensor.utils.btlogging.format
================================

.. py:module:: bittensor.utils.btlogging.format

.. autoapi-nested-parse::

   btlogging.format module

   This module defines custom logging formatters for the Bittensor project.



Attributes
----------

.. autoapisummary::

   bittensor.utils.btlogging.format.DEFAULT_LOG_FORMAT
   bittensor.utils.btlogging.format.DEFAULT_TRACE_FORMAT
   bittensor.utils.btlogging.format.LOG_FORMATS
   bittensor.utils.btlogging.format.LOG_TRACE_FORMATS
   bittensor.utils.btlogging.format.SUCCESS_LEVEL_NUM
   bittensor.utils.btlogging.format.TRACE_LEVEL_NUM
   bittensor.utils.btlogging.format.color_map
   bittensor.utils.btlogging.format.emoji_map
   bittensor.utils.btlogging.format.log_level_color_prefix


Classes
-------

.. autoapisummary::

   bittensor.utils.btlogging.format.BtFileFormatter
   bittensor.utils.btlogging.format.BtStreamFormatter


Module Contents
---------------

.. py:class:: BtFileFormatter(fmt=None, datefmt=None, style='%', validate=True)

   Bases: :py:obj:`logging.Formatter`


   BtFileFormatter

   A custom logging formatter for the Bittensor project that overrides the time formatting to include milliseconds and
   centers the level name.

   Initialize the formatter with specified format strings.

   Initialize the formatter either with the specified format string, or a
   default as described above. Allow for specialized date formatting with
   the optional datefmt argument. If datefmt is omitted, you get an
   ISO8601-like (or RFC 3339-like) format.

   Use a style parameter of '%', '{' or '$' to specify that you want to
   use one of %-formatting, :meth:`str.format` (``{}``) formatting or
   :class:`string.Template` formatting in your format string.

   .. versionchanged:: 3.2
      Added the ``style`` parameter.


   .. py:method:: format(record)

      Override format to center the level name.

      :param record: The log record.
      :type record: logging.LogRecord

      :returns: The formatted log record.
      :rtype: formatted record (str)



   .. py:method:: formatTime(record, datefmt = None)

      Override formatTime to add milliseconds.

      :param record: The log record.
      :type record: logging.LogRecord
      :param datefmt: The date format string.
      :type datefmt: Optional[str]

      :returns: The formatted time string with milliseconds.
      :rtype: s (str)



.. py:class:: BtStreamFormatter(*args, **kwargs)

   Bases: :py:obj:`logging.Formatter`


   A custom logging formatter for the Bittensor project that overrides the time formatting to include milliseconds,
   centers the level name, and applies custom log formats, emojis, and colors.

   Initialize the formatter with specified format strings.

   Initialize the formatter either with the specified format string, or a
   default as described above. Allow for specialized date formatting with
   the optional datefmt argument. If datefmt is omitted, you get an
   ISO8601-like (or RFC 3339-like) format.

   Use a style parameter of '%', '{' or '$' to specify that you want to
   use one of %-formatting, :meth:`str.format` (``{}``) formatting or
   :class:`string.Template` formatting in your format string.

   .. versionchanged:: 3.2
      Added the ``style`` parameter.


   .. py:method:: format(record)

      Override format to apply custom formatting including emojis and colors.

      This method saves the original format, applies custom formatting based on the log level and trace flag, replaces
      text with emojis and colors, and then returns the formatted log record.

      :param record: The log record.
      :type record: logging.LogRecord

      :returns: The formatted log record.
      :rtype: result (str)



   .. py:method:: formatTime(record, datefmt = None)

      Override formatTime to add milliseconds.

      :param record: The log record.
      :type record: logging.LogRecord
      :param datefmt: The date format string.
      :type datefmt: Optional[str]

      :returns: The formatted time string with milliseconds.
      :rtype: s (str)



   .. py:method:: set_trace(state = True)

      Change formatter state.



   .. py:attribute:: trace
      :value: False



.. py:data:: DEFAULT_LOG_FORMAT
   :type:  str
   :value: '34%(asctime)s39 | 137%(levelname)s0 | %(name)s:%(filename)s:%(lineno)s | %(message)s'


.. py:data:: DEFAULT_TRACE_FORMAT
   :type:  str
   :value: '34%(asctime)s39 | 137%(levelname)s0 | %(name)s:%(filename)s:%(lineno)s | %(message)s'


.. py:data:: LOG_FORMATS
   :type:  dict[int, str]

.. py:data:: LOG_TRACE_FORMATS
   :type:  dict[int, str]

.. py:data:: SUCCESS_LEVEL_NUM
   :type:  int
   :value: 21


.. py:data:: TRACE_LEVEL_NUM
   :type:  int
   :value: 5


.. py:data:: color_map
   :type:  dict[str, str]

.. py:data:: emoji_map
   :type:  dict[str, str]

.. py:data:: log_level_color_prefix
   :type:  dict[int, str]

