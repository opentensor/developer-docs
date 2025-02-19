bittensor.core.config
=====================

.. py:module:: bittensor.core.config

.. autoapi-nested-parse::

   Implementation of the config class, which manages the configuration of different Bittensor modules.

   .. admonition:: Example

      import argparse
      import bittensor as bt
      
      parser = argparse.ArgumentParser('Miner')
      bt.Axon.add_args(parser)
      bt.Subtensor.add_args(parser)
      bt.Async_subtensor.add_args(parser)
      bt.Wallet.add_args(parser)
      bt.logging.add_args(parser)
      bt.PriorityThreadPoolExecutor.add_args(parser)
      config = bt.config(parser)
      
      print(config)



Attributes
----------

.. autoapisummary::

   bittensor.core.config.T


Exceptions
----------

.. autoapisummary::

   bittensor.core.config.InvalidConfigFile


Classes
-------

.. autoapisummary::

   bittensor.core.config.Config
   bittensor.core.config.DefaultConfig


Module Contents
---------------

.. py:class:: Config(parser = None, args = None, strict = False, default = None)

   Bases: :py:obj:`munch.DefaultMunch`


   Manages configuration for Bittensor modules with nested namespace support.

   Construct a new DefaultMunch. Like collections.defaultdict, the
   first argument is the default value; subsequent arguments are the
   same as those for dict.


   .. py:method:: is_set(param_name)

      Checks if a parameter was explicitly set.



   .. py:method:: merge(other)

      Merges another Config into this one.



   .. py:method:: to_dict()

      Returns the configuration as a dictionary.



.. py:class:: DefaultConfig(parser = None, args = None, strict = False, default = None)

   Bases: :py:obj:`Config`


   A Config with a set of default values.

   Construct a new DefaultMunch. Like collections.defaultdict, the
   first argument is the default value; subsequent arguments are the
   same as those for dict.


   .. py:method:: default()
      :classmethod:

      :abstractmethod:


      Get default config.



.. py:exception:: InvalidConfigFile

   Bases: :py:obj:`Exception`


   Raised when there's an error loading the config file.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:data:: T

