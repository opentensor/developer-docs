bittensor.core.stream
=====================

.. py:module:: bittensor.core.stream


Classes
-------

.. autoapisummary::

   bittensor.core.stream.BTStreamingResponseModel
   bittensor.core.stream.StreamingSynapse


Module Contents
---------------

.. py:class:: BTStreamingResponseModel(/, **data)

   Bases: :py:obj:`pydantic.BaseModel`


   :func:`BTStreamingResponseModel` is a Pydantic model that encapsulates the token streamer callable for Pydantic validation.
   It is used within the :func:`StreamingSynapse` class to create a :func:`BTStreamingResponse` object, which is responsible for handling
   the streaming of tokens.

   The token streamer is a callable that takes a send function and returns an awaitable. It is responsible for generating
   the content of the streaming response, typically by processing tokens and sending them to the client.

   This model ensures that the token streamer conforms to the expected signature and provides a clear interface for
   passing the token streamer to the BTStreamingResponse class.

   :ivar token_streamer: Callable[[Send], Awaitable[None]] The token streamer callable, which takes a send function (provided by the ASGI server) and returns an awaitable. It is responsible for generating the content of the streaming response.


   Create a new model by parsing and validating input data from keyword arguments.

   Raises [`ValidationError`][pydantic_core.ValidationError] if the input data cannot be
   validated to form a valid model.

   `self` is explicitly positional-only to allow `self` as a field name.


   .. py:attribute:: token_streamer
      :type:  Callable[[starlette.types.Send], Awaitable[None]]


.. py:class:: StreamingSynapse(/, **data)

   Bases: :py:obj:`bittensor.core.synapse.Synapse`, :py:obj:`abc.ABC`


   The :func:`StreamingSynapse` class is designed to be subclassed for handling streaming responses in the Bittensor network.
   It provides abstract methods that must be implemented by the subclass to deserialize, process streaming responses,
   and extract JSON data. It also includes a method to create a streaming response object.

   Create a new model by parsing and validating input data from keyword arguments.

   Raises [`ValidationError`][pydantic_core.ValidationError] if the input data cannot be
   validated to form a valid model.

   `self` is explicitly positional-only to allow `self` as a field name.


   .. py:attribute:: model_config

      Configuration for the model, should be a dictionary conforming to [`ConfigDict`][pydantic.config.ConfigDict].


   .. py:class:: BTStreamingResponse(model, *, synapse = None, **kwargs)

      Bases: :py:obj:`starlette.responses.StreamingResponse`


      :func:`BTStreamingResponse` is a specialized subclass of the Starlette StreamingResponse designed to handle the streaming
      of tokens within the Bittensor network. It is used internally by the StreamingSynapse class to manage the response
      streaming process, including sending headers and calling the token streamer provided by the subclass.

      This class is not intended to be directly instantiated or modified by developers subclassing StreamingSynapse.
      Instead, it is used by the :func:`create_streaming_response` method to create a response object based on the token streamer
      provided by the subclass.

      Initializes the BTStreamingResponse with the given token streamer model.

      :param model: A BTStreamingResponseModel instance containing the token streamer callable, which is responsible for generating the content of the response.
      :type model: bittensor.core.stream.BTStreamingResponseModel
      :param synapse: The response Synapse to be used to update the response headers etc.
      :type synapse: bittensor.core.stream.StreamingSynapse
      :param \*\*kwargs: Additional keyword arguments passed to the parent StreamingResponse class.


      .. py:attribute:: token_streamer


      .. py:attribute:: synapse


      .. py:method:: stream_response(send)
         :async:


         Asynchronously streams the response by sending headers and calling the token streamer.

         This method is responsible for initiating the response by sending the appropriate headers, including the content type for event-streaming. It then calls the token streamer to generate the content and sends the response body to the client.

         :param send: A callable to send the response, provided by the ASGI server.
         :type send: starlette.types.Send



      .. py:method:: __call__(scope, receive, send)
         :async:


         Asynchronously calls the :func:`stream_response method`, allowing the :func:`BTStreamingResponse` object to be used as an ASGI application.

         This method is part of the ASGI interface and is called by the ASGI server to handle the request and send the response. It delegates to the :func:`stream_response` method to perform the actual streaming process.

         :param scope: The scope of the request, containing information about the client, server, and request itself.
         :type scope: starlette.types.Scope
         :param receive: A callable to receive the request, provided by the ASGI server.
         :type receive: starlette.types.Receive
         :param send: A callable to send the response, provided by the ASGI server.
         :type send: starlette.types.Send




   .. py:method:: process_streaming_response(response)
      :abstractmethod:

      :async:


      Abstract method that must be implemented by the subclass.
      This method should provide logic to handle the streaming response, such as parsing and accumulating data.
      It is called as the response is being streamed from the network, and should be implemented to handle the specific streaming data format and requirements of the subclass.

      :param response: The response object to be processed, typically containing chunks of data.
      :type response: aiohttp.ClientResponse



   .. py:method:: extract_response_json(response)
      :abstractmethod:


      Abstract method that must be implemented by the subclass.
      This method should provide logic to extract JSON data from the response, including headers and content.
      It is called after the response has been processed and is responsible for retrieving structured data that can be used by the application.

      :param response: The response object from which to extract JSON data.
      :type response: aiohttp.ClientResponse



   .. py:method:: create_streaming_response(token_streamer)

      Creates a streaming response using the provided token streamer.
      This method can be used by the subclass to create a response object that can be sent back to the client.
      The token streamer should be implemented to generate the content of the response according to the specific requirements of the subclass.

      :param token_streamer: A callable that takes a send function and returns an awaitable. It's responsible for generating the content of the response.
      :type token_streamer: Callable[[starlette.types.Send], Awaitable[None]]

      :returns: The streaming response object, ready to be sent to the client.
      :rtype: BTStreamingResponse (bittensor.core.stream.StreamingSynapse.BTStreamingResponse)



