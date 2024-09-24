bittensor.core.config
=====================

.. py:module:: bittensor.core.config

.. autoapi-nested-parse::

   Implementation of the config class, which manages the configuration of different Bittensor modules.



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

.. py:exception:: InvalidConfigFile

   Bases: :py:obj:`Exception`


   In place of YAMLError

   Initialize self.  See help(type(self)) for accurate signature.


.. py:class:: Config(parser = None, args = None, strict = False, default = None)

   Bases: :py:obj:`munch.DefaultMunch`


   Implementation of the config class, which manages the configuration of different Bittensor modules.

   Translates the passed parser into a nested Bittensor config.

   :param parser: Command line parser object.
   :type parser: argparse.ArgumentParser
   :param strict: If ``true``, the command line arguments are strictly parsed.
   :type strict: bool
   :param args: Command line arguments.
   :type args: list of str
   :param default: Default value for the Config. Defaults to ``None``. This default will be returned for attributes that are undefined.
   :type default: Optional[Any]

   :returns: Nested config object created from parser arguments.
   :rtype: config (bittensor.core.config.Config)

   Construct a new DefaultMunch. Like collections.defaultdict, the
   first argument is the default value; subsequent arguments are the
   same as those for dict.


   .. py:attribute:: __is_set
      :type:  dict[str, bool]


   .. py:attribute:: missing_required_args


   .. py:attribute:: config_params


   .. py:attribute:: strict


   .. py:attribute:: params


   .. py:attribute:: _config


   .. py:attribute:: parser_no_defaults


   .. py:attribute:: default_param_args


   .. py:attribute:: default_params


   .. py:attribute:: all_default_args


   .. py:attribute:: defaults_as_suppress


   .. py:attribute:: params_no_defaults


   .. py:method:: __split_params__(params, _config)
      :staticmethod:



   .. py:method:: __parse_args__(args, parser = None, strict = False)
      :staticmethod:


      Parses the passed args use the passed parser.

      :param args: List of arguments to parse.
      :type args: list[str]
      :param parser: Command line parser object.
      :type parser: argparse.ArgumentParser
      :param strict: If ``true``, the command line arguments are strictly parsed.
      :type strict: bool

      :returns: Namespace object created from parser arguments.
      :rtype: Namespace



   .. py:method:: __deepcopy__(memo)


   .. py:method:: __repr__()

      Invertible* string-form of a Munch.

      >>> b = Munch(foo=Munch(lol=True), hello=42, ponies='are pretty!')
      >>> print (repr(b))
      Munch({'ponies': 'are pretty!', 'foo': Munch({'lol': True}), 'hello': 42})
      >>> eval(repr(b))
      Munch({'ponies': 'are pretty!', 'foo': Munch({'lol': True}), 'hello': 42})

      >>> with_spaces = Munch({1: 2, 'a b': 9, 'c': Munch({'simple': 5})})
      >>> print (repr(with_spaces))
      Munch({'a b': 9, 1: 2, 'c': Munch({'simple': 5})})
      >>> eval(repr(with_spaces))
      Munch({'a b': 9, 1: 2, 'c': Munch({'simple': 5})})

      (*) Invertible so long as collection contents are each repr-invertible.



   .. py:method:: _remove_private_keys(d)
      :staticmethod:



   .. py:method:: __str__()

      Return str(self).



   .. py:method:: copy()

      D.copy() -> a shallow copy of D



   .. py:method:: to_string(items)
      :staticmethod:


      Get string from items.



   .. py:method:: update_with_kwargs(kwargs)

      Add config to self



   .. py:method:: _merge(a, b)
      :classmethod:


      Merge two configurations recursively.
      If there is a conflict, the value from the second configuration will take precedence.



   .. py:method:: merge(b)

      Merges the current config with another config.

      :param b: Another config to merge.
      :type b: bittensor.core.config.Config



   .. py:method:: merge_all(configs)
      :classmethod:


      Merge all configs in the list into one config.
      If there is a conflict, the value from the last configuration in the list will take precedence.

      :param configs: List of configs to be merged.
      :type configs: list[bittensor.core.config.Config]

      :returns: Merged config object.
      :rtype: config (bittensor.core.config.Config)



   .. py:method:: is_set(param_name)

      Returns a boolean indicating whether the parameter has been set or is still the default.



   .. py:method:: __check_for_missing_required_args(parser, args)


   .. py:method:: __get_required_args_from_parser(parser)
      :staticmethod:



.. py:data:: T

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



