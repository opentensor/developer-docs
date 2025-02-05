tests.helpers.helpers
=====================

.. py:module:: tests.helpers.helpers


Classes
-------

.. autoapisummary::

   tests.helpers.helpers.CLOSE_IN_VALUE
   tests.helpers.helpers.FakeConnectContextManager
   tests.helpers.helpers.FakeWebsocket


Functions
---------

.. autoapisummary::

   tests.helpers.helpers.get_mock_neuron
   tests.helpers.helpers.get_mock_neuron_by_uid


Module Contents
---------------

.. py:class:: CLOSE_IN_VALUE(value, tolerance = 0.0)

   .. py:attribute:: tolerance
      :type:  Union[float, int, bittensor.utils.balance.Balance]


   .. py:attribute:: value
      :type:  Union[float, int, bittensor.utils.balance.Balance]


.. py:class:: FakeConnectContextManager(seed)

   .. py:attribute:: seed


.. py:class:: FakeWebsocket(*args, seed, **kwargs)

   Bases: :py:obj:`websockets.asyncio.client.ClientConnection`


   :mod:`asyncio` implementation of a WebSocket client connection.

   :class:`ClientConnection` provides :meth:`recv` and :meth:`send` coroutines
   for receiving and sending messages.

   It supports asynchronous iteration to receive messages::

       async for message in websocket:
           await process(message)

   The iterator exits normally when the connection is closed with close code
   1000 (OK) or 1001 (going away) or without a close code. It raises a
   :exc:`~websockets.exceptions.ConnectionClosedError` when the connection is
   closed with any other code.

   The ``ping_interval``, ``ping_timeout``, ``close_timeout``, ``max_queue``,
   and ``write_limit`` arguments have the same meaning as in :func:`connect`.

   :param protocol: Sans-I/O connection.


   .. py:method:: close(*args, **kwargs)

      Perform the closing handshake.

      :meth:`close` waits for the other end to complete the handshake and
      for the TCP connection to terminate.

      :meth:`close` is idempotent: it doesn't do anything once the
      connection is closed.

      :param code: WebSocket close code.
      :param reason: WebSocket close reason.



   .. py:attribute:: close_code
      :value: None


      State of the WebSocket connection, defined in :rfc:`6455`.

      This attribute is provided for completeness. Typical applications
      shouldn't check its value. Instead, they should inspect attributes
      of :exc:`~websockets.exceptions.ConnectionClosed` exceptions.


   .. py:attribute:: received


   .. py:method:: recv(*args, **kwargs)

      Receive the next message.

      When the connection is closed, :meth:`recv` raises
      :exc:`~websockets.exceptions.ConnectionClosed`. Specifically, it raises
      :exc:`~websockets.exceptions.ConnectionClosedOK` after a normal closure
      and :exc:`~websockets.exceptions.ConnectionClosedError` after a protocol
      error or a network failure. This is how you detect the end of the
      message stream.

      Canceling :meth:`recv` is safe. There's no risk of losing data. The next
      invocation of :meth:`recv` will return the next message.

      This makes it possible to enforce a timeout by wrapping :meth:`recv` in
      :func:`~asyncio.timeout` or :func:`~asyncio.wait_for`.

      When the message is fragmented, :meth:`recv` waits until all fragments
      are received, reassembles them, and returns the whole message.

      :param decode: Set this flag to override the default behavior of returning
                     :class:`str` or :class:`bytes`. See below for details.

      :returns: A string (:class:`str`) for a Text_ frame or a bytestring
                (:class:`bytes`) for a Binary_ frame.

                .. _Text: https://datatracker.ietf.org/doc/html/rfc6455#section-5.6
                .. _Binary: https://datatracker.ietf.org/doc/html/rfc6455#section-5.6

                You may override this behavior with the ``decode`` argument:

                * Set ``decode=False`` to disable UTF-8 decoding of Text_ frames and
                  return a bytestring (:class:`bytes`). This improves performance
                  when decoding isn't needed, for example if the message contains
                  JSON and you're using a JSON library that expects a bytestring.
                * Set ``decode=True`` to force UTF-8 decoding of Binary_ frames
                  and return a string (:class:`str`). This may be useful for
                  servers that send binary frames instead of text frames.

      :raises ConnectionClosed: When the connection is closed.
      :raises ConcurrencyError: If two coroutines call :meth:`recv` or
          :meth:`recv_streaming` concurrently.



   .. py:attribute:: seed


   .. py:method:: send(payload, *args, **kwargs)

      Send a message.

      A string (:class:`str`) is sent as a Text_ frame. A bytestring or
      bytes-like object (:class:`bytes`, :class:`bytearray`, or
      :class:`memoryview`) is sent as a Binary_ frame.

      .. _Text: https://datatracker.ietf.org/doc/html/rfc6455#section-5.6
      .. _Binary: https://datatracker.ietf.org/doc/html/rfc6455#section-5.6

      You may override this behavior with the ``text`` argument:

      * Set ``text=True`` to send a bytestring or bytes-like object
        (:class:`bytes`, :class:`bytearray`, or :class:`memoryview`) as a
        Text_ frame. This improves performance when the message is already
        UTF-8 encoded, for example if the message contains JSON and you're
        using a JSON library that produces a bytestring.
      * Set ``text=False`` to send a string (:class:`str`) in a Binary_
        frame. This may be useful for servers that expect binary frames
        instead of text frames.

      :meth:`send` also accepts an iterable or an asynchronous iterable of
      strings, bytestrings, or bytes-like objects to enable fragmentation_.
      Each item is treated as a message fragment and sent in its own frame.
      All items must be of the same type, or else :meth:`send` will raise a
      :exc:`TypeError` and the connection will be closed.

      .. _fragmentation: https://datatracker.ietf.org/doc/html/rfc6455#section-5.4

      :meth:`send` rejects dict-like objects because this is often an error.
      (If you really want to send the keys of a dict-like object as fragments,
      call its :meth:`~dict.keys` method and pass the result to :meth:`send`.)

      Canceling :meth:`send` is discouraged. Instead, you should close the
      connection with :meth:`close`. Indeed, there are only two situations
      where :meth:`send` may yield control to the event loop and then get
      canceled; in both cases, :meth:`close` has the same effect and is
      more clear:

      1. The write buffer is full. If you don't want to wait until enough
         data is sent, your only alternative is to close the connection.
         :meth:`close` will likely time out then abort the TCP connection.
      2. ``message`` is an asynchronous iterator that yields control.
         Stopping in the middle of a fragmented message will cause a
         protocol error and the connection will be closed.

      When the connection is closed, :meth:`send` raises
      :exc:`~websockets.exceptions.ConnectionClosed`. Specifically, it
      raises :exc:`~websockets.exceptions.ConnectionClosedOK` after a normal
      connection closure and
      :exc:`~websockets.exceptions.ConnectionClosedError` after a protocol
      error or a network failure.

      :param message: Message to send.

      :raises ConnectionClosed: When the connection is closed.
      :raises TypeError: If ``message`` doesn't have a supported type.



.. py:function:: get_mock_neuron(**kwargs)

   Returns a mock neuron with the given kwargs overriding the default values.


.. py:function:: get_mock_neuron_by_uid(uid, **kwargs)

