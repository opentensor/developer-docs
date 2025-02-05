tests.unit_tests.test_subnets
=============================

.. py:module:: tests.unit_tests.test_subnets


Classes
-------

.. autoapisummary::

   tests.unit_tests.test_subnets.MySubnetsAPI


Functions
---------

.. autoapisummary::

   tests.unit_tests.test_subnets.test_instance_creation
   tests.unit_tests.test_subnets.test_query_api
   tests.unit_tests.test_subnets.test_test_instance_call


Module Contents
---------------

.. py:class:: MySubnetsAPI(wallet)

   Bases: :py:obj:`bittensor.utils.subnets.SubnetsAPI`


   Example of user class inherited from SubnetsAPI.


   .. py:method:: prepare_synapse(*args, **kwargs)

      Prepare the synapse-specific payload.



   .. py:method:: process_responses(responses)

      Process the responses from the network.



.. py:function:: test_instance_creation(mocker)

   Test the creation of a MySubnetsAPI instance.


.. py:function:: test_query_api(mocker)
   :async:


   Test querying the MySubnetsAPI instance asynchronously.


.. py:function:: test_test_instance_call(mocker)
   :async:


   Test the MySubnetsAPI instance call with asynchronous handling.


