bittensor.core.types
====================

.. py:module:: bittensor.core.types


Classes
-------

.. autoapisummary::

   bittensor.core.types.AxonServeCallParams
   bittensor.core.types.AxonServeCallParams_
   bittensor.core.types.ParamWithTypes
   bittensor.core.types.PrometheusServeCallParams
   bittensor.core.types.SubtensorMixin


Module Contents
---------------

.. py:class:: AxonServeCallParams(version, ip, port, ip_type, netuid, hotkey, coldkey, protocol, placeholder1, placeholder2, certificate)

   .. py:attribute:: certificate


   .. py:attribute:: coldkey


   .. py:method:: copy()


   .. py:method:: dict()

      Returns a dict representation of this object. If `self.certificate` is `None`,
      it is not included in this.



   .. py:attribute:: hotkey


   .. py:attribute:: ip


   .. py:attribute:: ip_type


   .. py:attribute:: netuid


   .. py:attribute:: placeholder1


   .. py:attribute:: placeholder2


   .. py:attribute:: port


   .. py:attribute:: protocol


   .. py:attribute:: version


.. py:class:: AxonServeCallParams_

   Bases: :py:obj:`TypedDict`


   Axon serve chain call parameters.

   Initialize self.  See help(type(self)) for accurate signature.


   .. py:attribute:: certificate
      :type:  Optional[bittensor.utils.Certificate]


   .. py:attribute:: ip
      :type:  int


   .. py:attribute:: ip_type
      :type:  int


   .. py:attribute:: netuid
      :type:  int


   .. py:attribute:: port
      :type:  int


   .. py:attribute:: version
      :type:  int


.. py:class:: ParamWithTypes

   Bases: :py:obj:`TypedDict`


   dict() -> new empty dictionary
   dict(mapping) -> new dictionary initialized from a mapping object's
       (key, value) pairs
   dict(iterable) -> new dictionary initialized as if via:
       d = {}
       for k, v in iterable:
           d[k] = v
   dict(**kwargs) -> new dictionary initialized with the name=value pairs
       in the keyword argument list.  For example:  dict(one=1, two=2)

   Initialize self.  See help(type(self)) for accurate signature.


   .. py:attribute:: name
      :type:  str


   .. py:attribute:: type
      :type:  str


.. py:class:: PrometheusServeCallParams

   Bases: :py:obj:`TypedDict`


   Prometheus serve chain call parameters.

   Initialize self.  See help(type(self)) for accurate signature.


   .. py:attribute:: ip
      :type:  int


   .. py:attribute:: ip_type
      :type:  int


   .. py:attribute:: netuid
      :type:  int


   .. py:attribute:: port
      :type:  int


   .. py:attribute:: version
      :type:  int


.. py:class:: SubtensorMixin

   Bases: :py:obj:`abc.ABC`


   Helper class that provides a standard way to create an ABC using
   inheritance.


   .. py:method:: add_args(parser, prefix = None)
      :classmethod:


      Adds command-line arguments to the provided ArgumentParser for configuring the Subtensor settings.

      :param parser: The ArgumentParser object to which the Subtensor arguments will be added.
      :type parser: argparse.ArgumentParser
      :param prefix: An optional prefix for the argument names. If provided, the prefix is prepended to
                     each argument name.
      :type prefix: Optional[str]

      Arguments added:
          --subtensor.network: The Subtensor network flag. Possible values are 'finney', 'test', 'archive', and
              'local'. Overrides the chain endpoint if set.
          --subtensor.chain_endpoint: The Subtensor chain endpoint flag. If set, it overrides the network flag.
          --subtensor._mock: If true, uses a mocked connection to the chain.

      .. admonition:: Example

         parser = argparse.ArgumentParser()
         Subtensor.add_args(parser)



   .. py:attribute:: chain_endpoint
      :type:  str


   .. py:method:: config()
      :staticmethod:


      Creates and returns a Bittensor configuration object.

      :returns:

                A Bittensor configuration object configured with arguments added by
                    the `subtensor.add_args` method.
      :rtype: config (bittensor.core.config.Config)



   .. py:method:: determine_chain_endpoint_and_network(network)
      :staticmethod:


      Determines the chain endpoint and network from the passed network or chain_endpoint.

      :param network: The network flag. The choices are: ``finney`` (main network), ``archive`` (archive network
                      +300 blocks), ``local`` (local running network), ``test`` (test network).
      :type network: str

      :returns:

                The network and chain endpoint flag. If passed, overrides the
                    ``network`` argument.
      :rtype: tuple[Optional[str], Optional[str]]



   .. py:method:: help()
      :classmethod:


      Print help to stdout.



   .. py:attribute:: log_verbose
      :type:  bool


   .. py:attribute:: network
      :type:  str


   .. py:method:: setup_config(network, config)
      :staticmethod:


      Sets up and returns the configuration for the Subtensor network and endpoint.

      This method determines the appropriate network and chain endpoint based on the provided network string or
          configuration object. It evaluates the network and endpoint in the following order of precedence:
          1. Provided network string.
          2. Configured chain endpoint in the `config` object.
          3. Configured network in the `config` object.
          4. Default chain endpoint.
          5. Default network.

      :param network: The name of the Subtensor network. If None, the network and endpoint will be
                      determined from the `config` object.
      :type network: Optional[str]
      :param config: The configuration object containing the network and chain endpoint
                     settings.
      :type config: bittensor.core.config.Config

      :returns: A tuple containing the formatted WebSocket endpoint URL and the evaluated network name.
      :rtype: tuple



