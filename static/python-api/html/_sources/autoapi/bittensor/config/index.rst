:py:mod:`bittensor.config`
==========================

.. py:module:: bittensor.config

.. autoapi-nested-parse::

   Implementation of the config class, which manages the configuration of different Bittensor modules.



Module Contents
---------------

Classes
~~~~~~~

.. autoapisummary::

   bittensor.config.DefaultConfig
   bittensor.config.config




Attributes
~~~~~~~~~~

.. autoapisummary::

   bittensor.config.T


.. py:class:: DefaultConfig(parser: argparse.ArgumentParser = None, args: Optional[List[str]] = None, strict: bool = False, default: Optional[Any] = None)


   Bases: :py:obj:`config`

   A Config with a set of default values.

   Construct a new DefaultMunch. Like collections.defaultdict, the
   first argument is the default value; subsequent arguments are the
   same as those for dict.

   .. py:method:: default() -> T
      :classmethod:
      :abstractmethod:

      Get default config.



.. py:exception:: InvalidConfigFile


   Bases: :py:obj:`Exception`

   In place of YAMLError

   Initialize self.  See help(type(self)) for accurate signature.


.. py:data:: T

   

.. py:class:: config(parser: argparse.ArgumentParser = None, args: Optional[List[str]] = None, strict: bool = False, default: Optional[Any] = None)


   Bases: :py:obj:`munch.DefaultMunch`

   Implementation of the config class, which manages the configuration of different Bittensor modules.

   Construct a new DefaultMunch. Like collections.defaultdict, the
   first argument is the default value; subsequent arguments are the
   same as those for dict.

   .. py:attribute:: __is_set
      :type: Dict[str, bool]

      Translates the passed parser into a nested Bittensor config.

      :param parser: Command line parser object.
      :type parser: argparse.ArgumentParser
      :param strict: If ``true``, the command line arguments are strictly parsed.
      :type strict: bool
      :param args: Command line arguments.
      :type args: list of str
      :param default: Default value for the Config. Defaults to ``None``.
                      This default will be returned for attributes that are undefined.
      :type default: Optional[Any]

      :returns:     Nested config object created from parser arguments.
      :rtype: config (bittensor.config)

   .. py:method:: __check_for_missing_required_args(parser: argparse.ArgumentParser, args: List[str]) -> List[str]


   .. py:method:: __deepcopy__(memo) -> config


   .. py:method:: __get_required_args_from_parser(parser: argparse.ArgumentParser) -> List[str]
      :staticmethod:


   .. py:method:: __parse_args__(args: List[str], parser: argparse.ArgumentParser = None, strict: bool = False) -> argparse.Namespace
      :staticmethod:

      Parses the passed args use the passed parser.

      :param args: List of arguments to parse.
      :type args: List[str]
      :param parser: Command line parser object.
      :type parser: argparse.ArgumentParser
      :param strict: If ``true``, the command line arguments are strictly parsed.
      :type strict: bool

      :returns:     Namespace object created from parser arguments.
      :rtype: Namespace


   .. py:method:: __repr__() -> str

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


   .. py:method:: __split_params__(params: argparse.Namespace, _config: config)
      :staticmethod:


   .. py:method:: __str__() -> str

      Return str(self).


   .. py:method:: _merge(a, b)
      :classmethod:

      Merge two configurations recursively.
      If there is a conflict, the value from the second configuration will take precedence.


   .. py:method:: _remove_private_keys(d)
      :staticmethod:


   .. py:method:: copy() -> config

      D.copy() -> a shallow copy of D


   .. py:method:: is_set(param_name: str) -> bool

      Returns a boolean indicating whether the parameter has been set or is still the default.


   .. py:method:: merge(b)

      Merges the current config with another config.

      :param b: Another config to merge.


   .. py:method:: merge_all(configs: List[config]) -> config
      :classmethod:

      Merge all configs in the list into one config.
      If there is a conflict, the value from the last configuration in the list will take precedence.

      :param configs: List of configs to be merged.
      :type configs: list of config

      :returns:     Merged config object.
      :rtype: config


   .. py:method:: to_string(items) -> str

      Get string from items


   .. py:method:: update_with_kwargs(kwargs)

      Add config to self



