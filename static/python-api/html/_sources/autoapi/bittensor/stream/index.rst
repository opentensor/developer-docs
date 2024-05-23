:py:mod:`bittensor.stream`
==========================

.. py:module:: bittensor.stream


Module Contents
---------------

Classes
~~~~~~~

.. autoapisummary::

   bittensor.stream.BTStreamingResponseModel
   bittensor.stream.StreamingSynapse




.. py:class:: BTStreamingResponseModel(**data: Any)


   Bases: :py:obj:`pydantic.BaseModel`

   :func:`BTStreamingResponseModel` is a Pydantic model that encapsulates the token streamer callable for Pydantic validation.
   It is used within the :func:`StreamingSynapse` class to create a :func:`BTStreamingResponse` object, which is responsible for handling
   the streaming of tokens.

   The token streamer is a callable that takes a send function and returns an awaitable. It is responsible for generating
   the content of the streaming response, typically by processing tokens and sending them to the client.

   This model ensures that the token streamer conforms to the expected signature and provides a clear interface for
   passing the token streamer to the BTStreamingResponse class.

   .. attribute:: token_streamer

      Callable[[Send], Awaitable[None]]
      The token streamer callable, which takes a send function (provided by the ASGI server) and returns an awaitable.
      It is responsible for generating the content of the streaming response.

   Create a new model by parsing and validating input data from keyword arguments.

   Raises ValidationError if the input data cannot be parsed to form a valid model.

   .. py:attribute:: token_streamer
      :type: Callable[[starlette.types.Send], Awaitable[None]]

      


.. py:class:: StreamingSynapse(**data: Any)


   Bases: :py:obj:`bittensor.Synapse`, :py:obj:`abc.ABC`

   The :func:`StreamingSynapse` class is designed to be subclassed for handling streaming responses in the Bittensor network.
   It provides abstract methods that must be implemented by the subclass to deserialize, process streaming responses,
   and extract JSON data. It also includes a method to create a streaming response object.

   Create a new model by parsing and validating input data from keyword arguments.

   Raises ValidationError if the input data cannot be parsed to form a valid model.

   .. py:class:: BTStreamingResponse(model: BTStreamingResponseModel, **kwargs)


      Bases: :py:obj:`starlette.responses.StreamingResponse`

      :func:`BTStreamingResponse` is a specialized subclass of the Starlette StreamingResponse designed to handle the streaming
      of tokens within the Bittensor network. It is used internally by the StreamingSynapse class to manage the response
      streaming process, including sending headers and calling the token streamer provided by the subclass.

      This class is not intended to be directly instantiated or modified by developers subclassing StreamingSynapse.
      Instead, it is used by the :func:`create_streaming_response` method to create a response object based on the token streamer
      provided by the subclass.

      Initializes the BTStreamingResponse with the given token streamer model.

      :param model: A BTStreamingResponseModel instance containing the token streamer callable, which is responsible for generating the content of the response.
      :param \*\*kwargs: Additional keyword arguments passed to the parent StreamingResponse class.

      .. py:method:: __call__(scope: starlette.types.Scope, receive: starlette.types.Receive, send: starlette.types.Send)
         :async:

         Asynchronously calls the stream_response method, allowing the BTStreamingResponse object to be used as an ASGI
         application.

         This method is part of the ASGI interface and is called by the ASGI server to handle the request and send the
         response. It delegates to the :func:`stream_response` method to perform the actual streaming process.

         :param scope: The scope of the request, containing information about the client, server, and request itself.
         :param receive: A callable to receive the request, provided by the ASGI server.
         :param send: A callable to send the response, provided by the ASGI server.


      .. py:method:: stream_response(send: starlette.types.Send)
         :async:

         Asynchronously streams the response by sending headers and calling the token streamer.

         This method is responsible for initiating the response by sending the appropriate headers, including the
         content type for event-streaming. It then calls the token streamer to generate the content and sends the
         response body to the client.

         :param send: A callable to send the response, provided by the ASGI server.



   .. py:attribute:: model_config

      

   .. py:method:: create_streaming_response(token_streamer: Callable[[starlette.types.Send], Awaitable[None]]) -> BTStreamingResponse

      Creates a streaming response using the provided token streamer.
      This method can be used by the subclass to create a response object that can be sent back to the client.
      The token streamer should be implemented to generate the content of the response according to the specific
      requirements of the subclass.

      :param token_streamer: A callable that takes a send function and returns an awaitable. It's responsible for generating the content of the response.

      :returns: The streaming response object, ready to be sent to the client.
      :rtype: BTStreamingResponse


   .. py:method:: extract_response_json(response: aiohttp.ClientResponse) -> dict
      :abstractmethod:

      Abstract method that must be implemented by the subclass.
      This method should provide logic to extract JSON data from the response, including headers and content.
      It is called after the response has been processed and is responsible for retrieving structured data
      that can be used by the application.

      :param response: The response object from which to extract JSON data.


   .. py:method:: process_streaming_response(response: aiohttp.ClientResponse)
      :abstractmethod:
      :async:

      Abstract method that must be implemented by the subclass.
      This method should provide logic to handle the streaming response, such as parsing and accumulating data.
      It is called as the response is being streamed from the network, and should be implemented to handle the specific
      streaming data format and requirements of the subclass.

      :param response: The response object to be processed, typically containing chunks of data.



