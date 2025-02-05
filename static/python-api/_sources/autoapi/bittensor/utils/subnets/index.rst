bittensor.utils.subnets
=======================

.. py:module:: bittensor.utils.subnets


Classes
-------

.. autoapisummary::

   bittensor.utils.subnets.SubnetsAPI


Module Contents
---------------

.. py:class:: SubnetsAPI(wallet)

   Bases: :py:obj:`abc.ABC`


   This class is not used within the bittensor package, but is actively used by the community.


   .. py:attribute:: dendrite


   .. py:method:: prepare_synapse(*args, **kwargs)
      :abstractmethod:


      Prepare the synapse-specific payload.



   .. py:method:: process_responses(responses)
      :abstractmethod:


      Process the responses from the network.



   .. py:method:: query_api(axons, deserialize = False, timeout = 12, **kwargs)
      :async:


      Queries the API nodes of a subnet using the given synapse and bespoke query function.

      :param axons: The list of axon(s) to query.
      :type axons: Union[bt.axon, list[bt.axon]]
      :param deserialize: Whether to deserialize the responses. Defaults to False.
      :type deserialize: Optional[bool]
      :param timeout: The timeout in seconds for the query. Defaults to 12.
      :type timeout: Optional[int]
      :param \*\*kwargs: Keyword arguments for the prepare_synapse_fn.

      :returns: The result of the process_responses_fn.
      :rtype: Any



   .. py:attribute:: wallet


