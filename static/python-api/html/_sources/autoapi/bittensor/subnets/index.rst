:py:mod:`bittensor.subnets`
===========================

.. py:module:: bittensor.subnets


Module Contents
---------------

Classes
~~~~~~~

.. autoapisummary::

   bittensor.subnets.SubnetsAPI




.. py:class:: SubnetsAPI(wallet: bittensor.wallet)


   Bases: :py:obj:`abc.ABC`

   Helper class that provides a standard way to create an ABC using
   inheritance.

   .. py:method:: __call__(*args, **kwargs)
      :async:


   .. py:method:: prepare_synapse(*args, **kwargs) -> Any
      :abstractmethod:

      Prepare the synapse-specific payload.


   .. py:method:: process_responses(responses: List[Union[bittensor.Synapse, Any]]) -> Any
      :abstractmethod:

      Process the responses from the network.


   .. py:method:: query_api(axons: Union[bittensor.axon, List[bittensor.axon]], deserialize: Optional[bool] = False, timeout: Optional[int] = 12, **kwargs: Optional[Any]) -> Any
      :async:

      Queries the API nodes of a subnet using the given synapse and bespoke query function.

      :param axons: The list of axon(s) to query.
      :type axons: Union[bt.axon, List[bt.axon]]
      :param deserialize: Whether to deserialize the responses. Defaults to False.
      :type deserialize: bool, optional
      :param timeout: The timeout in seconds for the query. Defaults to 12.
      :type timeout: int, optional
      :param \*\*kwargs: Keyword arguments for the prepare_synapse_fn.

      :returns: The result of the process_responses_fn.
      :rtype: Any



