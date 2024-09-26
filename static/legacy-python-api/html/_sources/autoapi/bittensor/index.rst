bittensor
=========

.. py:module:: bittensor


Subpackages
-----------

.. toctree::
   :maxdepth: 1

   /autoapi/bittensor/btlogging/index
   /autoapi/bittensor/commands/index
   /autoapi/bittensor/extrinsics/index
   /autoapi/bittensor/mock/index
   /autoapi/bittensor/utils/index


Submodules
----------

.. toctree::
   :maxdepth: 1

   /autoapi/bittensor/axon/index
   /autoapi/bittensor/chain_data/index
   /autoapi/bittensor/cli/index
   /autoapi/bittensor/config/index
   /autoapi/bittensor/constants/index
   /autoapi/bittensor/dendrite/index
   /autoapi/bittensor/errors/index
   /autoapi/bittensor/keyfile/index
   /autoapi/bittensor/metagraph/index
   /autoapi/bittensor/stream/index
   /autoapi/bittensor/subnets/index
   /autoapi/bittensor/subtensor/index
   /autoapi/bittensor/synapse/index
   /autoapi/bittensor/tensor/index
   /autoapi/bittensor/threadpool/index
   /autoapi/bittensor/types/index
   /autoapi/bittensor/wallet/index


Attributes
----------

.. autoapisummary::

   bittensor.__version__
   bittensor._version_split
   bittensor.__version_info__
   bittensor._version_int_base
   bittensor.__version_as_int__
   bittensor.__new_signature_version__
   bittensor.__console__
   bittensor.__use_console__
   bittensor.__blocktime__
   bittensor.__pipaddress__
   bittensor.__delegates_details_url__
   bittensor.__ss58_format__
   bittensor.__ss58_address_length__
   bittensor.__networks__
   bittensor.__finney_entrypoint__
   bittensor.__finney_test_entrypoint__
   bittensor.__archive_entrypoint__
   bittensor.__bellagene_entrypoint__
   bittensor.__local_entrypoint__
   bittensor.__tao_symbol__
   bittensor.__rao_symbol__
   bittensor.__network_explorer_map__
   bittensor.__type_registry__
   bittensor.T
   bittensor.ProposalCallData
   bittensor.ALL_COMMANDS
   bittensor.logging
   bittensor.metagraph
   bittensor.configs
   bittensor.defaults


Exceptions
----------

.. autoapisummary::

   bittensor.BlacklistedException
   bittensor.ChainConnectionError
   bittensor.ChainError
   bittensor.ChainQueryError
   bittensor.ChainTransactionError
   bittensor.IdentityError
   bittensor.InternalServerError
   bittensor.InvalidRequestNameError
   bittensor.KeyFileError
   bittensor.MetadataError
   bittensor.NominationError
   bittensor.NotDelegateError
   bittensor.NotRegisteredError
   bittensor.NotVerifiedException
   bittensor.PostProcessException
   bittensor.PriorityException
   bittensor.RegistrationError
   bittensor.RunException
   bittensor.StakeError
   bittensor.SynapseDendriteNoneException
   bittensor.SynapseParsingError
   bittensor.TransferError
   bittensor.UnknownSynapseError
   bittensor.UnstakeError
   bittensor.InvalidConfigFile


Classes
-------

.. autoapisummary::

   bittensor.DefaultConfig
   bittensor.config
   bittensor.keyfile
   bittensor.Mockkeyfile
   bittensor.wallet
   bittensor.Balance
   bittensor.AxonInfo
   bittensor.NeuronInfo
   bittensor.NeuronInfoLite
   bittensor.PrometheusInfo
   bittensor.DelegateInfo
   bittensor.StakeInfo
   bittensor.SubnetInfo
   bittensor.SubnetHyperparameters
   bittensor.IPInfo
   bittensor.ProposalVoteData
   bittensor.Subtensor
   bittensor.subtensor
   bittensor.cli
   bittensor.PriorityThreadPoolExecutor
   bittensor.TerminalInfo
   bittensor.Synapse
   bittensor.StreamingSynapse
   bittensor.tensor
   bittensor.Tensor
   bittensor.axon
   bittensor.dendrite
   bittensor.MockKeyfile
   bittensor.MockSubtensor
   bittensor.MockWallet
   bittensor.SubnetsAPI


Functions
---------

.. autoapisummary::

   bittensor.__getattr__
   bittensor.turn_console_off
   bittensor.turn_console_on
   bittensor.trace
   bittensor.debug
   bittensor.serialized_keypair_to_keyfile_data
   bittensor.deserialize_keypair_from_keyfile_data
   bittensor.validate_password
   bittensor.ask_password_to_encrypt
   bittensor.keyfile_data_is_encrypted_nacl
   bittensor.keyfile_data_is_encrypted_ansible
   bittensor.keyfile_data_is_encrypted_legacy
   bittensor.keyfile_data_is_encrypted
   bittensor.keyfile_data_encryption_method
   bittensor.legacy_encrypt_keyfile_data
   bittensor.encrypt_keyfile_data
   bittensor.get_coldkey_password_from_environment
   bittensor.decrypt_keyfile_data
   bittensor.display_mnemonic_msg
   bittensor.ss58_to_vec_u8
   bittensor.unbiased_topk
   bittensor.version_checking
   bittensor.strtobool
   bittensor.strtobool_with_default
   bittensor.get_explorer_root_url_by_network_from_map
   bittensor.get_explorer_url_for_network
   bittensor.ss58_address_to_bytes
   bittensor.U16_NORMALIZED_FLOAT
   bittensor.U64_NORMALIZED_FLOAT
   bittensor.u8_key_to_ss58
   bittensor.hash


Package Contents
----------------

.. py:data:: __version__
   :value: '7.4.0'


.. py:data:: _version_split

.. py:data:: __version_info__

.. py:data:: _version_int_base
   :value: 1000


.. py:data:: __version_as_int__
   :type:  int

.. py:data:: __new_signature_version__
   :value: 360


.. py:data:: __console__

.. py:data:: __use_console__
   :value: True


.. py:function:: __getattr__(name)

.. py:function:: turn_console_off()

.. py:function:: turn_console_on()

.. py:function:: trace(on = True)

.. py:function:: debug(on = True)

.. py:data:: __blocktime__
   :value: 12


.. py:data:: __pipaddress__
   :value: 'https://pypi.org/pypi/bittensor/json'


.. py:data:: __delegates_details_url__
   :type:  str
   :value: 'https://raw.githubusercontent.com/opentensor/bittensor-delegates/main/public/delegates.json'


.. py:data:: __ss58_format__
   :value: 42


.. py:data:: __ss58_address_length__
   :value: 48


.. py:data:: __networks__
   :value: ['local', 'finney', 'test', 'archive']


.. py:data:: __finney_entrypoint__
   :value: 'wss://entrypoint-finney.opentensor.ai:443'


.. py:data:: __finney_test_entrypoint__
   :value: 'wss://test.finney.opentensor.ai:443/'


.. py:data:: __archive_entrypoint__
   :value: 'wss://archive.chain.opentensor.ai:443/'


.. py:data:: __bellagene_entrypoint__
   :value: 'wss://parachain.opentensor.ai:443'


.. py:data:: __local_entrypoint__

.. py:data:: __tao_symbol__
   :type:  str

.. py:data:: __rao_symbol__
   :type:  str

.. py:data:: __network_explorer_map__

.. py:data:: __type_registry__

.. py:exception:: BlacklistedException(message='Synapse Exception', synapse = None)

   Bases: :py:obj:`SynapseException`


   This exception is raised when the request is blacklisted.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: ChainConnectionError

   Bases: :py:obj:`ChainError`


   Error for any chain connection related errors.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: ChainError

   Bases: :py:obj:`BaseException`


   Base error for any chain related errors.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: ChainQueryError

   Bases: :py:obj:`ChainError`


   Error for any chain query related errors.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: ChainTransactionError

   Bases: :py:obj:`ChainError`


   Error for any chain transaction related errors.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: IdentityError

   Bases: :py:obj:`ChainTransactionError`


   Error raised when an identity transaction fails.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: InternalServerError(message='Synapse Exception', synapse = None)

   Bases: :py:obj:`SynapseException`


   This exception is raised when the requested function fails on the server. Indicates a server error.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: InvalidRequestNameError

   Bases: :py:obj:`Exception`


   This exception is raised when the request name is invalid. Ususally indicates a broken URL.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: KeyFileError

   Bases: :py:obj:`Exception`


   Error thrown when the keyfile is corrupt, non-writable, non-readable or the password used to decrypt is invalid.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: MetadataError

   Bases: :py:obj:`ChainTransactionError`


   Error raised when metadata commitment transaction fails.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: NominationError

   Bases: :py:obj:`ChainTransactionError`


   Error raised when a nomination transaction fails.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: NotDelegateError

   Bases: :py:obj:`StakeError`


   Error raised when a hotkey you are trying to stake to is not a delegate.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: NotRegisteredError

   Bases: :py:obj:`ChainTransactionError`


   Error raised when a neuron is not registered, and the transaction requires it to be.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: NotVerifiedException(message='Synapse Exception', synapse = None)

   Bases: :py:obj:`SynapseException`


   This exception is raised when the request is not verified.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: PostProcessException(message='Synapse Exception', synapse = None)

   Bases: :py:obj:`SynapseException`


   This exception is raised when the response headers cannot be updated.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: PriorityException(message='Synapse Exception', synapse = None)

   Bases: :py:obj:`SynapseException`


   This exception is raised when the request priority is not met.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: RegistrationError

   Bases: :py:obj:`ChainTransactionError`


   Error raised when a neuron registration transaction fails.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: RunException(message='Synapse Exception', synapse = None)

   Bases: :py:obj:`SynapseException`


   This exception is raised when the requested function cannot be executed. Indicates a server error.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: StakeError

   Bases: :py:obj:`ChainTransactionError`


   Error raised when a stake transaction fails.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: SynapseDendriteNoneException(message='Synapse Dendrite is None', synapse = None)

   Bases: :py:obj:`SynapseException`


   Common base class for all non-exit exceptions.

   Initialize self.  See help(type(self)) for accurate signature.


   .. py:attribute:: message


.. py:exception:: SynapseParsingError

   Bases: :py:obj:`Exception`


   This exception is raised when the request headers are unable to be parsed into the synapse type.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: TransferError

   Bases: :py:obj:`ChainTransactionError`


   Error raised when a transfer transaction fails.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: UnknownSynapseError(message='Synapse Exception', synapse = None)

   Bases: :py:obj:`SynapseException`


   This exception is raised when the request name is not found in the Axon's forward_fns dictionary.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: UnstakeError

   Bases: :py:obj:`ChainTransactionError`


   Error raised when an unstake transaction fails.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: InvalidConfigFile

   Bases: :py:obj:`Exception`


   In place of YAMLError

   Initialize self.  See help(type(self)) for accurate signature.


.. py:class:: DefaultConfig(parser = None, args = None, strict = False, default = None)

   Bases: :py:obj:`config`


   A Config with a set of default values.

   Construct a new DefaultMunch. Like collections.defaultdict, the
   first argument is the default value; subsequent arguments are the
   same as those for dict.


   .. py:method:: default()
      :classmethod:

      :abstractmethod:


      Get default config.



.. py:class:: config(parser = None, args = None, strict = False, default = None)

   Bases: :py:obj:`munch.DefaultMunch`


   Implementation of the config class, which manages the configuration of different Bittensor modules.

   Construct a new DefaultMunch. Like collections.defaultdict, the
   first argument is the default value; subsequent arguments are the
   same as those for dict.


   .. py:attribute:: __is_set
      :type:  Dict[str, bool]

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
      :type args: List[str]
      :param parser: Command line parser object.
      :type parser: argparse.ArgumentParser
      :param strict: If ``true``, the command line arguments are strictly parsed.
      :type strict: bool

      :returns:     Namespace object created from parser arguments.
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

      Get string from items



   .. py:method:: update_with_kwargs(kwargs)

      Add config to self



   .. py:method:: _merge(a, b)
      :classmethod:


      Merge two configurations recursively.
      If there is a conflict, the value from the second configuration will take precedence.



   .. py:method:: merge(b)

      Merges the current config with another config.

      :param b: Another config to merge.



   .. py:method:: merge_all(configs)
      :classmethod:


      Merge all configs in the list into one config.
      If there is a conflict, the value from the last configuration in the list will take precedence.

      :param configs: List of configs to be merged.
      :type configs: list of config

      :returns:     Merged config object.
      :rtype: config



   .. py:method:: is_set(param_name)

      Returns a boolean indicating whether the parameter has been set or is still the default.



   .. py:method:: __check_for_missing_required_args(parser, args)


   .. py:method:: __get_required_args_from_parser(parser)
      :staticmethod:



.. py:data:: T

.. py:function:: serialized_keypair_to_keyfile_data(keypair)

   Serializes keypair object into keyfile data.

   :param keypair: The keypair object to be serialized.
   :type keypair: bittensor.Keypair

   :returns: Serialized keypair data.
   :rtype: data (bytes)


.. py:function:: deserialize_keypair_from_keyfile_data(keyfile_data)

   Deserializes Keypair object from passed keyfile data.

   :param keyfile_data: The keyfile data as bytes to be loaded.
   :type keyfile_data: bytes

   :returns: The Keypair loaded from bytes.
   :rtype: keypair (bittensor.Keypair)

   :raises KeyFileError: Raised if the passed bytes cannot construct a keypair object.


.. py:function:: validate_password(password)

   Validates the password against a password policy.

   :param password: The password to verify.
   :type password: str

   :returns: ``True`` if the password meets validity requirements.
   :rtype: valid (bool)


.. py:function:: ask_password_to_encrypt()

   Prompts the user to enter a password for key encryption.

   :returns: The valid password entered by the user.
   :rtype: password (str)


.. py:function:: keyfile_data_is_encrypted_nacl(keyfile_data)

   Returns true if the keyfile data is NaCl encrypted.

   :param keyfile_data: Bytes to validate.
   :type keyfile_data: bytes, required

   :returns:     ``True`` if data is ansible encrypted.
   :rtype: is_nacl (bool)


.. py:function:: keyfile_data_is_encrypted_ansible(keyfile_data)

   Returns true if the keyfile data is ansible encrypted.

   :param keyfile_data: The bytes to validate.
   :type keyfile_data: bytes

   :returns: True if the data is ansible encrypted.
   :rtype: is_ansible (bool)


.. py:function:: keyfile_data_is_encrypted_legacy(keyfile_data)

   Returns true if the keyfile data is legacy encrypted.
   :param keyfile_data: The bytes to validate.
   :type keyfile_data: bytes

   :returns: ``True`` if the data is legacy encrypted.
   :rtype: is_legacy (bool)


.. py:function:: keyfile_data_is_encrypted(keyfile_data)

   Returns ``true`` if the keyfile data is encrypted.

   :param keyfile_data: The bytes to validate.
   :type keyfile_data: bytes

   :returns: ``True`` if the data is encrypted.
   :rtype: is_encrypted (bool)


.. py:function:: keyfile_data_encryption_method(keyfile_data)

   Returns ``true`` if the keyfile data is encrypted.

   :param keyfile_data: Bytes to validate
   :type keyfile_data: bytes, required

   :returns:     ``True`` if data is encrypted.
   :rtype: encryption_method (bool)


.. py:function:: legacy_encrypt_keyfile_data(keyfile_data, password = None)

.. py:function:: encrypt_keyfile_data(keyfile_data, password = None)

   Encrypts the passed keyfile data using ansible vault.

   :param keyfile_data: The bytes to encrypt.
   :type keyfile_data: bytes
   :param password: The password used to encrypt the data. If ``None``, asks for user input.
   :type password: str, optional

   :returns: The encrypted data.
   :rtype: encrypted_data (bytes)


.. py:function:: get_coldkey_password_from_environment(coldkey_name)

   Retrieves the cold key password from the environment variables.

   :param coldkey_name: The name of the cold key.
   :type coldkey_name: str

   :returns: The password retrieved from the environment variables, or ``None`` if not found.
   :rtype: password (str)


.. py:function:: decrypt_keyfile_data(keyfile_data, password = None, coldkey_name = None)

   Decrypts the passed keyfile data using ansible vault.

   :param keyfile_data: The bytes to decrypt.
   :type keyfile_data: bytes
   :param password: The password used to decrypt the data. If ``None``, asks for user input.
   :type password: str, optional
   :param coldkey_name: The name of the cold key. If provided, retrieves the password from environment variables.
   :type coldkey_name: str, optional

   :returns: The decrypted data.
   :rtype: decrypted_data (bytes)

   :raises KeyFileError: Raised if the file is corrupted or if the password is incorrect.


.. py:class:: keyfile(path)

   Defines an interface for a substrate interface keypair stored on device.


   .. py:attribute:: path


   .. py:attribute:: name


   .. py:method:: __str__()


   .. py:method:: __repr__()


   .. py:property:: keypair
      :type: bittensor.Keypair

      Returns the keypair from path, decrypts data if the file is encrypted.

      :returns: The keypair stored under the path.
      :rtype: keypair (bittensor.Keypair)

      :raises KeyFileError: Raised if the file does not exist, is not readable, writable, corrupted, or if the password is incorrect.


   .. py:property:: data
      :type: bytes

      Returns the keyfile data under path.

      :returns: The keyfile data stored under the path.
      :rtype: keyfile_data (bytes)

      :raises KeyFileError: Raised if the file does not exist, is not readable, or writable.


   .. py:property:: keyfile_data
      :type: bytes

      Returns the keyfile data under path.

      :returns: The keyfile data stored under the path.
      :rtype: keyfile_data (bytes)

      :raises KeyFileError: Raised if the file does not exist, is not readable, or writable.


   .. py:method:: set_keypair(keypair, encrypt = True, overwrite = False, password = None)

      Writes the keypair to the file and optionally encrypts data.

      :param keypair: The keypair to store under the path.
      :type keypair: bittensor.Keypair
      :param encrypt: If ``True``, encrypts the file under the path. Default is ``True``.
      :type encrypt: bool, optional
      :param overwrite: If ``True``, forces overwrite of the current file. Default is ``False``.
      :type overwrite: bool, optional
      :param password: The password used to encrypt the file. If ``None``, asks for user input.
      :type password: str, optional

      :raises KeyFileError: Raised if the file does not exist, is not readable, writable, or if the password is incorrect.



   .. py:method:: get_keypair(password = None)

      Returns the keypair from the path, decrypts data if the file is encrypted.

      :param password: The password used to decrypt the file. If ``None``, asks for user input.
      :type password: str, optional

      :returns: The keypair stored under the path.
      :rtype: keypair (bittensor.Keypair)

      :raises KeyFileError: Raised if the file does not exist, is not readable, writable, corrupted, or if the password is incorrect.



   .. py:method:: make_dirs()

      Creates directories for the path if they do not exist.



   .. py:method:: exists_on_device()

      Returns ``True`` if the file exists on the device.

      :returns: ``True`` if the file is on the device.
      :rtype: on_device (bool)



   .. py:method:: is_readable()

      Returns ``True`` if the file under path is readable.

      :returns: ``True`` if the file is readable.
      :rtype: readable (bool)



   .. py:method:: is_writable()

      Returns ``True`` if the file under path is writable.

      :returns: ``True`` if the file is writable.
      :rtype: writable (bool)



   .. py:method:: is_encrypted()

      Returns ``True`` if the file under path is encrypted.

      :returns: ``True`` if the file is encrypted.
      :rtype: encrypted (bool)



   .. py:method:: _may_overwrite()

      Asks the user if it is okay to overwrite the file.

      :returns: ``True`` if the user allows overwriting the file.
      :rtype: may_overwrite (bool)



   .. py:method:: check_and_update_encryption(print_result = True, no_prompt = False)

      Check the version of keyfile and update if needed.

      :param print_result: Print the checking result or not.
      :type print_result: bool
      :param no_prompt: Skip if no prompt.
      :type no_prompt: bool

      :raises KeyFileError: Raised if the file does not exists, is not readable, writable.

      :returns:     Return ``True`` if the keyfile is the most updated with nacl, else ``False``.
      :rtype: result (bool)



   .. py:method:: encrypt(password = None)

      Encrypts the file under the path.

      :param password: The password for encryption. If ``None``, asks for user input.
      :type password: str, optional

      :raises KeyFileError: Raised if the file does not exist, is not readable, or writable.



   .. py:method:: decrypt(password = None)

      Decrypts the file under the path.

      :param password: The password for decryption. If ``None``, asks for user input.
      :type password: str, optional

      :raises KeyFileError: Raised if the file does not exist, is not readable, writable, corrupted, or if the password is incorrect.



   .. py:method:: _read_keyfile_data_from_file()

      Reads the keyfile data from the file.

      :returns: The keyfile data stored under the path.
      :rtype: keyfile_data (bytes)

      :raises KeyFileError: Raised if the file does not exist or is not readable.



   .. py:method:: _write_keyfile_data_to_file(keyfile_data, overwrite = False)

      Writes the keyfile data to the file.

      :param keyfile_data: The byte data to store under the path.
      :type keyfile_data: bytes
      :param overwrite: If ``True``, overwrites the data without asking for permission from the user. Default is ``False``.
      :type overwrite: bool, optional

      :raises KeyFileError: Raised if the file is not writable or the user responds No to the overwrite prompt.



.. py:class:: Mockkeyfile(path)

   The Mockkeyfile is a mock object representing a keyfile that does not exist on the device.

   It is designed for use in testing scenarios and simulations where actual filesystem operations are not required.
   The keypair stored in the Mockkeyfile is treated as non-encrypted and the data is stored as a serialized string.

   Initializes a Mockkeyfile object.

   :param path: The path of the mock keyfile.
   :type path: str


   .. py:attribute:: path


   .. py:attribute:: _mock_keypair
      :value: None



   .. py:attribute:: _mock_data
      :value: None



   .. py:method:: __str__()

      Returns a string representation of the Mockkeyfile. The representation will indicate if the keyfile is empty, encrypted, or decrypted.

      :returns: The string representation of the Mockkeyfile.
      :rtype: str



   .. py:method:: __repr__()

      Returns a string representation of the Mockkeyfile, same as :func:`__str__()`.

      :returns: The string representation of the Mockkeyfile.
      :rtype: str



   .. py:property:: keypair
      Returns the mock keypair stored in the keyfile.

      :returns: The mock keypair.
      :rtype: bittensor.Keypair


   .. py:property:: data
      Returns the serialized keypair data stored in the keyfile.

      :returns: The serialized keypair data.
      :rtype: bytes


   .. py:method:: set_keypair(keypair, encrypt=True, overwrite=False, password=None)

      Sets the mock keypair in the keyfile. The ``encrypt`` and ``overwrite`` parameters are ignored.

      :param keypair: The mock keypair to be set.
      :type keypair: bittensor.Keypair
      :param encrypt: Ignored in this context. Defaults to ``True``.
      :type encrypt: bool, optional
      :param overwrite: Ignored in this context. Defaults to ``False``.
      :type overwrite: bool, optional
      :param password: Ignored in this context. Defaults to ``None``.
      :type password: str, optional



   .. py:method:: get_keypair(password=None)

      Returns the mock keypair stored in the keyfile. The ``password`` parameter is ignored.

      :param password: Ignored in this context. Defaults to ``None``.
      :type password: str, optional

      :returns: The mock keypair stored in the keyfile.
      :rtype: bittensor.Keypair



   .. py:method:: make_dirs()

      Creates the directories for the mock keyfile. Does nothing in this class, since no actual filesystem operations are needed.



   .. py:method:: exists_on_device()

      Returns ``True`` indicating that the mock keyfile exists on the device (although it is not created on the actual file system).

      :returns: Always returns ``True`` for Mockkeyfile.
      :rtype: bool



   .. py:method:: is_readable()

      Returns ``True`` indicating that the mock keyfile is readable (although it is not read from the actual file system).

      :returns: Always returns ``True`` for Mockkeyfile.
      :rtype: bool



   .. py:method:: is_writable()

      Returns ``True`` indicating that the mock keyfile is writable (although it is not written to the actual file system).

      :returns: Always returns ``True`` for Mockkeyfile.
      :rtype: bool



   .. py:method:: is_encrypted()

      Returns ``False`` indicating that the mock keyfile is not encrypted.

      :returns: Always returns ``False`` for Mockkeyfile.
      :rtype: bool



   .. py:method:: encrypt(password=None)

      Raises a ValueError since encryption is not supported for the mock keyfile.

      :param password: Ignored in this context. Defaults to ``None``.
      :type password: str, optional

      :raises ValueError: Always raises this exception for Mockkeyfile.



   .. py:method:: decrypt(password=None)

      Returns without doing anything since the mock keyfile is not encrypted.

      :param password: Ignored in this context. Defaults to ``None``.
      :type password: str, optional



   .. py:method:: check_and_update_encryption(no_prompt=None, print_result=False)


.. py:function:: display_mnemonic_msg(keypair, key_type)

   Display the mnemonic and a warning message to keep the mnemonic safe.

   :param keypair: Keypair object.
   :type keypair: Keypair
   :param key_type: Type of the key (coldkey or hotkey).
   :type key_type: str


.. py:class:: wallet(name = None, hotkey = None, path = None, config = None)

   The wallet class in the Bittensor framework handles wallet functionality, crucial for participating in the Bittensor network.

   It manages two types of keys: coldkey and hotkey, each serving different purposes in network operations. Each wallet contains a coldkey and a hotkey.

   The coldkey is the user's primary key for holding stake in their wallet and is the only way that users
   can access Tao. Coldkeys can hold tokens and should be encrypted on your device.

   The coldkey is the primary key used for securing the wallet's stake in the Bittensor network (Tao) and
   is critical for financial transactions like staking and unstaking tokens. It's recommended to keep the
   coldkey encrypted and secure, as it holds the actual tokens.

   The hotkey, in contrast, is used for operational tasks like subscribing to and setting weights in the
   network. It's linked to the coldkey through the metagraph and does not directly hold tokens, thereby
   offering a safer way to interact with the network during regular operations.

   :param name: The name of the wallet, used to identify it among possibly multiple wallets.
   :type name: str
   :param path: File system path where wallet keys are stored.
   :type path: str
   :param hotkey_str: String identifier for the hotkey.
   :type hotkey_str: str
   :param _hotkey: Internal representations of the hotkey and coldkey.
   :type _hotkey: bittensor.Keypair
   :param _coldkey: Internal representations of the hotkey and coldkey.
   :type _coldkey: bittensor.Keypair
   :param _coldkeypub: Internal representations of the hotkey and coldkey.
   :type _coldkeypub: bittensor.Keypair

   .. method:: create_if_non_existent, create, recreate

      Methods to handle the creation of wallet keys.

   .. method:: get_coldkey, get_hotkey, get_coldkeypub

      Methods to retrieve specific keys.

   .. method:: set_coldkey, set_hotkey, set_coldkeypub

      Methods to set or update keys.

   .. method:: hotkey_file, coldkey_file, coldkeypub_file

      Properties that return respective key file objects.

   .. method:: regenerate_coldkey, regenerate_hotkey, regenerate_coldkeypub

      Methods to regenerate keys from different sources.

   .. method:: config, help, add_args

      Utility methods for configuration and assistance.
      

   The wallet class is a fundamental component for users to interact securely with the Bittensor network, facilitating both operational tasks and transactions involving value transfer across the network.

   Example Usage::

       # Create a new wallet with default coldkey and hotkey names
       my_wallet = wallet()

       # Access hotkey and coldkey
       hotkey = my_wallet.get_hotkey()
       coldkey = my_wallet.get_coldkey()

       # Set a new coldkey
       my_wallet.new_coldkey(n_words=24) # number of seed words to use

       # Update wallet hotkey
       my_wallet.set_hotkey(new_hotkey)

       # Print wallet details
       print(my_wallet)

       # Access coldkey property, must use password to unlock
       my_wallet.coldkey

   Initialize the bittensor wallet object containing a hot and coldkey.

   :param name: The name of the wallet to unlock for running bittensor. Defaults to ``default``.
   :type name: str, optional
   :param hotkey: The name of hotkey used to running the miner. Defaults to ``default``.
   :type hotkey: str, optional
   :param path: The path to your bittensor wallets. Defaults to ``~/.bittensor/wallets/``.
   :type path: str, optional
   :param config: bittensor.wallet.config(). Defaults to ``None``.
   :type config: bittensor.config, optional


   .. py:method:: config()
      :classmethod:


      Get config from the argument parser.

      :returns: Config object.
      :rtype: bittensor.config



   .. py:method:: help()
      :classmethod:


      Print help to stdout.



   .. py:method:: add_args(parser, prefix = None)
      :classmethod:


      Accept specific arguments from parser.

      :param parser: Argument parser object.
      :type parser: argparse.ArgumentParser
      :param prefix: Argument prefix.
      :type prefix: str



   .. py:attribute:: name


   .. py:property:: hotkey
      :type: bittensor.Keypair

      Loads the hotkey from wallet.path/wallet.name/hotkeys/wallet.hotkey or raises an error.

      :returns:     hotkey loaded from config arguments.
      :rtype: hotkey (Keypair)

      :raises KeyFileError: Raised if the file is corrupt of non-existent.
      :raises CryptoKeyError: Raised if the user enters an incorrec password for an encrypted keyfile.


   .. py:attribute:: path


   .. py:attribute:: hotkey_str


   .. py:attribute:: _hotkey
      :value: None



   .. py:attribute:: _coldkey
      :value: None



   .. py:attribute:: _coldkeypub
      :value: None



   .. py:method:: __str__()

      Returns the string representation of the Wallet object.

      :returns: The string representation.
      :rtype: str



   .. py:method:: __repr__()

      Returns the string representation of the wallet object.

      :returns: The string representation.
      :rtype: str



   .. py:method:: create_if_non_existent(coldkey_use_password = True, hotkey_use_password = False)

      Checks for existing coldkeypub and hotkeys, and creates them if non-existent.

      :param coldkey_use_password: Whether to use a password for coldkey. Defaults to ``True``.
      :type coldkey_use_password: bool, optional
      :param hotkey_use_password: Whether to use a password for hotkey. Defaults to ``False``.
      :type hotkey_use_password: bool, optional

      :returns: The wallet object.
      :rtype: wallet



   .. py:method:: create(coldkey_use_password = True, hotkey_use_password = False)

      Checks for existing coldkeypub and hotkeys, and creates them if non-existent.

      :param coldkey_use_password: Whether to use a password for coldkey. Defaults to ``True``.
      :type coldkey_use_password: bool, optional
      :param hotkey_use_password: Whether to use a password for hotkey. Defaults to ``False``.
      :type hotkey_use_password: bool, optional

      :returns: The wallet object.
      :rtype: wallet



   .. py:method:: recreate(coldkey_use_password = True, hotkey_use_password = False)

      Checks for existing coldkeypub and hotkeys and creates them if non-existent.

      :param coldkey_use_password: Whether to use a password for coldkey. Defaults to ``True``.
      :type coldkey_use_password: bool, optional
      :param hotkey_use_password: Whether to use a password for hotkey. Defaults to ``False``.
      :type hotkey_use_password: bool, optional

      :returns: The wallet object.
      :rtype: wallet



   .. py:property:: hotkey_file
      :type: bittensor.keyfile

      Property that returns the hotkey file.

      :returns: The hotkey file.
      :rtype: bittensor.keyfile


   .. py:property:: coldkey_file
      :type: bittensor.keyfile

      Property that returns the coldkey file.

      :returns: The coldkey file.
      :rtype: bittensor.keyfile


   .. py:property:: coldkeypub_file
      :type: bittensor.keyfile

      Property that returns the coldkeypub file.

      :returns: The coldkeypub file.
      :rtype: bittensor.keyfile


   .. py:method:: set_hotkey(keypair, encrypt = False, overwrite = False)

      Sets the hotkey for the wallet.

      :param keypair: The hotkey keypair.
      :type keypair: bittensor.Keypair
      :param encrypt: Whether to encrypt the hotkey. Defaults to ``False``.
      :type encrypt: bool, optional
      :param overwrite: Whether to overwrite an existing hotkey. Defaults to ``False``.
      :type overwrite: bool, optional

      :returns: The hotkey file.
      :rtype: bittensor.keyfile



   .. py:method:: set_coldkeypub(keypair, encrypt = False, overwrite = False)

      Sets the coldkeypub for the wallet.

      :param keypair: The coldkeypub keypair.
      :type keypair: bittensor.Keypair
      :param encrypt: Whether to encrypt the coldkeypub. Defaults to ``False``.
      :type encrypt: bool, optional
      :param overwrite: Whether to overwrite an existing coldkeypub. Defaults to ``False``.
      :type overwrite: bool, optional

      :returns: The coldkeypub file.
      :rtype: bittensor.keyfile



   .. py:method:: set_coldkey(keypair, encrypt = True, overwrite = False)

      Sets the coldkey for the wallet.

      :param keypair: The coldkey keypair.
      :type keypair: bittensor.Keypair
      :param encrypt: Whether to encrypt the coldkey. Defaults to ``True``.
      :type encrypt: bool, optional
      :param overwrite: Whether to overwrite an existing coldkey. Defaults to ``False``.
      :type overwrite: bool, optional

      :returns: The coldkey file.
      :rtype: bittensor.keyfile



   .. py:method:: get_coldkey(password = None)

      Gets the coldkey from the wallet.

      :param password: The password to decrypt the coldkey. Defaults to ``None``.
      :type password: str, optional

      :returns: The coldkey keypair.
      :rtype: bittensor.Keypair



   .. py:method:: get_hotkey(password = None)

      Gets the hotkey from the wallet.

      :param password: The password to decrypt the hotkey. Defaults to ``None``.
      :type password: str, optional

      :returns: The hotkey keypair.
      :rtype: bittensor.Keypair



   .. py:method:: get_coldkeypub(password = None)

      Gets the coldkeypub from the wallet.

      :param password: The password to decrypt the coldkeypub. Defaults to ``None``.
      :type password: str, optional

      :returns: The coldkeypub keypair.
      :rtype: bittensor.Keypair



   .. py:property:: coldkey
      :type: bittensor.Keypair

      Loads the hotkey from wallet.path/wallet.name/coldkey or raises an error.

      :returns: coldkey loaded from config arguments.
      :rtype: coldkey (Keypair)

      :raises KeyFileError: Raised if the file is corrupt of non-existent.
      :raises CryptoKeyError: Raised if the user enters an incorrec password for an encrypted keyfile.


   .. py:property:: coldkeypub
      :type: bittensor.Keypair

      Loads the coldkeypub from wallet.path/wallet.name/coldkeypub.txt or raises an error.

      :returns: coldkeypub loaded from config arguments.
      :rtype: coldkeypub (Keypair)

      :raises KeyFileError: Raised if the file is corrupt of non-existent.
      :raises CryptoKeyError: Raised if the user enters an incorrect password for an encrypted keyfile.


   .. py:method:: create_coldkey_from_uri(uri, use_password = True, overwrite = False, suppress = False)

      Creates coldkey from suri string, optionally encrypts it with the user-provided password.

      :param uri: (str, required):
                  URI string to use i.e., ``/Alice`` or ``/Bob``.
      :param use_password: Is the created key password protected.
      :type use_password: bool, optional
      :param overwrite: Determines if this operation overwrites the coldkey under the same path ``<wallet path>/<wallet name>/coldkey``.
      :type overwrite: bool, optional

      :returns:     This object with newly created coldkey.
      :rtype: wallet (bittensor.wallet)



   .. py:method:: create_hotkey_from_uri(uri, use_password = False, overwrite = False, suppress = False)

      Creates hotkey from suri string, optionally encrypts it with the user-provided password.

      :param uri: (str, required):
                  URI string to use i.e., ``/Alice`` or ``/Bob``
      :param use_password: Is the created key password protected.
      :type use_password: bool, optional
      :param overwrite: Determines if this operation overwrites the hotkey under the same path ``<wallet path>/<wallet name>/hotkeys/<hotkey>``.
      :type overwrite: bool, optional

      :returns:     This object with newly created hotkey.
      :rtype: wallet (bittensor.wallet)



   .. py:method:: new_coldkey(n_words = 12, use_password = True, overwrite = False, suppress = False)

      Creates a new coldkey, optionally encrypts it with the user-provided password and saves to disk.

      :param n_words: (int, optional):
                      Number of mnemonic words to use.
      :param use_password: Is the created key password protected.
      :type use_password: bool, optional
      :param overwrite: Determines if this operation overwrites the coldkey under the same path ``<wallet path>/<wallet name>/coldkey``.
      :type overwrite: bool, optional

      :returns:     This object with newly created coldkey.
      :rtype: wallet (bittensor.wallet)



   .. py:method:: create_new_coldkey(n_words = 12, use_password = True, overwrite = False, suppress = False)

      Creates a new coldkey, optionally encrypts it with the user-provided password and saves to disk.

      :param n_words: (int, optional):
                      Number of mnemonic words to use.
      :param use_password: Is the created key password protected.
      :type use_password: bool, optional
      :param overwrite: Determines if this operation overwrites the coldkey under the same path ``<wallet path>/<wallet name>/coldkey``.
      :type overwrite: bool, optional

      :returns:     This object with newly created coldkey.
      :rtype: wallet (bittensor.wallet)



   .. py:method:: new_hotkey(n_words = 12, use_password = False, overwrite = False, suppress = False)

      Creates a new hotkey, optionally encrypts it with the user-provided password and saves to disk.

      :param n_words: (int, optional):
                      Number of mnemonic words to use.
      :param use_password: Is the created key password protected.
      :type use_password: bool, optional
      :param overwrite: Determines if this operation overwrites the hotkey under the same path ``<wallet path>/<wallet name>/hotkeys/<hotkey>``.
      :type overwrite: bool, optional

      :returns:     This object with newly created hotkey.
      :rtype: wallet (bittensor.wallet)



   .. py:method:: create_new_hotkey(n_words = 12, use_password = False, overwrite = False, suppress = False)

      Creates a new hotkey, optionally encrypts it with the user-provided password and saves to disk.

      :param n_words: (int, optional):
                      Number of mnemonic words to use.
      :param use_password: Is the created key password protected.
      :type use_password: bool, optional
      :param overwrite: Will this operation overwrite the hotkey under the same path <wallet path>/<wallet name>/hotkeys/<hotkey>
      :type overwrite: bool, optional

      :returns:     This object with newly created hotkey.
      :rtype: wallet (bittensor.wallet)



   .. py:method:: regenerate_coldkeypub(ss58_address = None, public_key = None, overwrite = False, suppress = False)

      Regenerates the coldkeypub from the passed ``ss58_address`` or public_key and saves the file. Requires either ``ss58_address`` or public_key to be passed.

      :param ss58_address: (str, optional):
                           Address as ``ss58`` string.
      :param public_key: (str | bytes, optional):
                         Public key as hex string or bytes.
      :param overwrite: False):
                        Determins if this operation overwrites the coldkeypub (if exists) under the same path ``<wallet path>/<wallet name>/coldkeypub``.
      :type overwrite: bool, optional

      :returns:     Newly re-generated wallet with coldkeypub.
      :rtype: wallet (bittensor.wallet)



   .. py:attribute:: regen_coldkeypub


   .. py:method:: regenerate_coldkey(mnemonic: Optional[Union[list, str]] = None, use_password: bool = True, overwrite: bool = False, suppress: bool = False) -> wallet
                  regenerate_coldkey(seed: Optional[str] = None, use_password: bool = True, overwrite: bool = False, suppress: bool = False) -> wallet
                  regenerate_coldkey(json: Optional[Tuple[Union[str, Dict], str]] = None, use_password: bool = True, overwrite: bool = False, suppress: bool = False) -> wallet

      Regenerates the coldkey from the passed mnemonic or seed, or JSON encrypts it with the user's password and saves the file.

      :param mnemonic: (Union[list, str], optional):
                       Key mnemonic as list of words or string space separated words.
      :param seed: (str, optional):
                   Seed as hex string.
      :param json: (Tuple[Union[str, Dict], str], optional):
                   Restore from encrypted JSON backup as ``(json_data: Union[str, Dict], passphrase: str)``
      :param use_password: Is the created key password protected.
      :type use_password: bool, optional
      :param overwrite: Determines if this operation overwrites the coldkey under the same path ``<wallet path>/<wallet name>/coldkey``.
      :type overwrite: bool, optional

      :returns:     This object with newly created coldkey.
      :rtype: wallet (bittensor.wallet)

      .. note:: Uses priority order: ``mnemonic > seed > json``.



   .. py:attribute:: regen_coldkey


   .. py:method:: regenerate_hotkey(mnemonic: Optional[Union[list, str]] = None, use_password: bool = True, overwrite: bool = False, suppress: bool = False) -> wallet
                  regenerate_hotkey(seed: Optional[str] = None, use_password: bool = True, overwrite: bool = False, suppress: bool = False) -> wallet
                  regenerate_hotkey(json: Optional[Tuple[Union[str, Dict], str]] = None, use_password: bool = True, overwrite: bool = False, suppress: bool = False) -> wallet

      Regenerates the hotkey from passed mnemonic or seed, encrypts it with the user's password and saves the file.

      :param mnemonic: (Union[list, str], optional):
                       Key mnemonic as list of words or string space separated words.
      :param seed: (str, optional):
                   Seed as hex string.
      :param json: (Tuple[Union[str, Dict], str], optional):
                   Restore from encrypted JSON backup as ``(json_data: Union[str, Dict], passphrase: str)``.
      :param use_password: Is the created key password protected.
      :type use_password: bool, optional
      :param overwrite: Determies if this operation overwrites the hotkey under the same path ``<wallet path>/<wallet name>/hotkeys/<hotkey>``.
      :type overwrite: bool, optional

      :returns:     This object with newly created hotkey.
      :rtype: wallet (bittensor.wallet)



   .. py:attribute:: regen_hotkey


.. py:function:: ss58_to_vec_u8(ss58_address)

.. py:function:: unbiased_topk(values, k, dim = 0, sorted = True, largest = True, axis = 0)

   Selects topk as in torch.topk but does not bias lower indices when values are equal.
   :param values: (np.ndarray) if using numpy, (torch.Tensor) if using torch:
                  Values to index into.
   :param k: (int):
             Number to take.
   :param dim: (int):
               Dimension to index into (used by Torch)
   :param sorted: (bool):
                  Whether to sort indices.
   :param largest: (bool):
                   Whether to take the largest value.
   :param axis: (int):
                Axis along which to index into (used by Numpy)

   :returns:

             (np.ndarray) if using numpy, (torch.Tensor) if using torch:
                 topk k values.
             indices: (np.ndarray) if using numpy, (torch.LongTensor) if using torch:
                 indices of the topk values.
   :rtype: topk


.. py:function:: version_checking(timeout = 15)

   Deprecated, kept for backwards compatibility. Use check_version() instead.


.. py:function:: strtobool(val)

   Converts a string to a boolean value.

   truth-y values are 'y', 'yes', 't', 'true', 'on', and '1';
   false-y values are 'n', 'no', 'f', 'false', 'off', and '0'.

   Raises ValueError if 'val' is anything else.


.. py:function:: strtobool_with_default(default)

   Creates a strtobool function with a default value.

   :param default: The default value to return if the string is empty.
   :type default: bool

   :returns: The strtobool function with the default value.


.. py:function:: get_explorer_root_url_by_network_from_map(network, network_map)

   Returns the explorer root url for the given network name from the given network map.

   :param network: The network to get the explorer url for.
   :type network: str
   :param network_map: The network map to get the explorer url from.
   :type network_map: Dict[str, str]

   :returns: The explorer url for the given network.
             Or None if the network is not in the network map.


.. py:function:: get_explorer_url_for_network(network, block_hash, network_map)

   Returns the explorer url for the given block hash and network.

   :param network: The network to get the explorer url for.
   :type network: str
   :param block_hash: The block hash to get the explorer url for.
   :type block_hash: str
   :param network_map: The network maps to get the explorer urls from.
   :type network_map: Dict[str, Dict[str, str]]

   :returns: The explorer url for the given block hash and network.
             Or None if the network is not known.


.. py:function:: ss58_address_to_bytes(ss58_address)

   Converts a ss58 address to a bytes object.


.. py:function:: U16_NORMALIZED_FLOAT(x)

.. py:function:: U64_NORMALIZED_FLOAT(x)

.. py:function:: u8_key_to_ss58(u8_key)

   Converts a u8-encoded account key to an ss58 address.

   :param u8_key: The u8-encoded account key.
   :type u8_key: List[int]


.. py:function:: hash(content, encoding='utf-8')

.. py:class:: Balance(balance)

   Represents the bittensor balance of the wallet, stored as rao (int).
   This class provides a way to interact with balances in two different units: rao and tao.
   It provides methods to convert between these units, as well as to perform arithmetic and comparison operations.

   :ivar unit: A string representing the symbol for the tao unit.
   :ivar rao_unit: A string representing the symbol for the rao unit.
   :ivar rao: An integer that stores the balance in rao units.
   :ivar tao: A float property that gives the balance in tao units.


   Initialize a Balance object. If balance is an int, it's assumed to be in rao.
   If balance is a float, it's assumed to be in tao.

   :param balance: The initial balance, in either rao (if an int) or tao (if a float).


   .. py:attribute:: unit
      :type:  str


   .. py:attribute:: rao_unit
      :type:  str


   .. py:attribute:: rao
      :type:  int


   .. py:property:: tao


   .. py:method:: __int__()

      Convert the Balance object to an int. The resulting value is in rao.



   .. py:method:: __float__()

      Convert the Balance object to a float. The resulting value is in tao.



   .. py:method:: __str__()

      Returns the Balance object as a string in the format "symbolvalue", where the value is in tao.



   .. py:method:: __rich__()


   .. py:method:: __str_rao__()


   .. py:method:: __rich_rao__()


   .. py:method:: __repr__()


   .. py:method:: __eq__(other)


   .. py:method:: __ne__(other)


   .. py:method:: __gt__(other)


   .. py:method:: __lt__(other)


   .. py:method:: __le__(other)


   .. py:method:: __ge__(other)


   .. py:method:: __add__(other)


   .. py:method:: __radd__(other)


   .. py:method:: __sub__(other)


   .. py:method:: __rsub__(other)


   .. py:method:: __mul__(other)


   .. py:method:: __rmul__(other)


   .. py:method:: __truediv__(other)


   .. py:method:: __rtruediv__(other)


   .. py:method:: __floordiv__(other)


   .. py:method:: __rfloordiv__(other)


   .. py:method:: __nonzero__()


   .. py:method:: __neg__()


   .. py:method:: __pos__()


   .. py:method:: __abs__()


   .. py:method:: from_float(amount)
      :staticmethod:


      Given tao (float), return Balance object with rao(int) and tao(float), where rao = int(tao*pow(10,9))
      :param amount: The amount in tao.

      :returns: A Balance object representing the given amount.



   .. py:method:: from_tao(amount)
      :staticmethod:


      Given tao (float), return Balance object with rao(int) and tao(float), where rao = int(tao*pow(10,9))

      :param amount: The amount in tao.

      :returns: A Balance object representing the given amount.



   .. py:method:: from_rao(amount)
      :staticmethod:


      Given rao (int), return Balance object with rao(int) and tao(float), where rao = int(tao*pow(10,9))

      :param amount: The amount in rao.

      :returns: A Balance object representing the given amount.



.. py:class:: AxonInfo

   .. py:attribute:: version
      :type:  int


   .. py:attribute:: ip
      :type:  str


   .. py:attribute:: port
      :type:  int


   .. py:attribute:: ip_type
      :type:  int


   .. py:attribute:: hotkey
      :type:  str


   .. py:attribute:: coldkey
      :type:  str


   .. py:attribute:: protocol
      :type:  int
      :value: 4



   .. py:attribute:: placeholder1
      :type:  int
      :value: 0



   .. py:attribute:: placeholder2
      :type:  int
      :value: 0



   .. py:property:: is_serving
      :type: bool

      True if the endpoint is serving.


   .. py:method:: ip_str()

      Return the whole IP as string



   .. py:method:: __eq__(other)


   .. py:method:: __str__()


   .. py:method:: __repr__()


   .. py:method:: to_string()

      Converts the AxonInfo object to a string representation using JSON.



   .. py:method:: from_string(json_string)
      :classmethod:


      Creates an AxonInfo object from its string representation using JSON.

      :param json_string: The JSON string representation of the AxonInfo object.
      :type json_string: str

      :returns: An instance of AxonInfo created from the JSON string. If decoding fails, returns a default AxonInfo object with default values.
      :rtype: AxonInfo

      :raises json.JSONDecodeError: If there is an error in decoding the JSON string.
      :raises TypeError: If there is a type error when creating the AxonInfo object.
      :raises ValueError: If there is a value error when creating the AxonInfo object.



   .. py:method:: from_neuron_info(neuron_info)
      :classmethod:


      Converts a dictionary to an AxonInfo object.

      :param neuron_info: A dictionary containing the neuron information.
      :type neuron_info: dict

      :returns: An instance of AxonInfo created from the dictionary.
      :rtype: instance (AxonInfo)



   .. py:method:: to_parameter_dict()

      Returns a torch tensor or dict of the subnet info, depending on the USE_TORCH flag set.



   .. py:method:: from_parameter_dict(parameter_dict)
      :classmethod:


      Returns an axon_info object from a torch parameter_dict or a parameter dict.



.. py:class:: NeuronInfo

   Dataclass for neuron metadata.


   .. py:attribute:: hotkey
      :type:  str


   .. py:attribute:: coldkey
      :type:  str


   .. py:attribute:: uid
      :type:  int


   .. py:attribute:: netuid
      :type:  int


   .. py:attribute:: active
      :type:  int


   .. py:attribute:: stake
      :type:  bittensor.utils.balance.Balance


   .. py:attribute:: stake_dict
      :type:  Dict[str, bittensor.utils.balance.Balance]


   .. py:attribute:: total_stake
      :type:  bittensor.utils.balance.Balance


   .. py:attribute:: rank
      :type:  float


   .. py:attribute:: emission
      :type:  float


   .. py:attribute:: incentive
      :type:  float


   .. py:attribute:: consensus
      :type:  float


   .. py:attribute:: trust
      :type:  float


   .. py:attribute:: validator_trust
      :type:  float


   .. py:attribute:: dividends
      :type:  float


   .. py:attribute:: last_update
      :type:  int


   .. py:attribute:: validator_permit
      :type:  bool


   .. py:attribute:: weights
      :type:  List[List[int]]


   .. py:attribute:: bonds
      :type:  List[List[int]]


   .. py:attribute:: pruning_score
      :type:  int


   .. py:attribute:: prometheus_info
      :type:  Optional[PrometheusInfo]
      :value: None



   .. py:attribute:: axon_info
      :type:  Optional[AxonInfo]
      :value: None



   .. py:attribute:: is_null
      :type:  bool
      :value: False



   .. py:method:: fix_decoded_values(neuron_info_decoded)
      :classmethod:


      Fixes the values of the NeuronInfo object.



   .. py:method:: from_vec_u8(vec_u8)
      :classmethod:


      Returns a NeuronInfo object from a ``vec_u8``.



   .. py:method:: list_from_vec_u8(vec_u8)
      :classmethod:


      Returns a list of NeuronInfo objects from a ``vec_u8``



   .. py:method:: get_null_neuron()
      :staticmethod:



   .. py:method:: from_weights_bonds_and_neuron_lite(neuron_lite, weights_as_dict, bonds_as_dict)
      :classmethod:



.. py:class:: NeuronInfoLite

   Dataclass for neuron metadata, but without the weights and bonds.


   .. py:attribute:: hotkey
      :type:  str


   .. py:attribute:: coldkey
      :type:  str


   .. py:attribute:: uid
      :type:  int


   .. py:attribute:: netuid
      :type:  int


   .. py:attribute:: active
      :type:  int


   .. py:attribute:: stake
      :type:  bittensor.utils.balance.Balance


   .. py:attribute:: stake_dict
      :type:  Dict[str, bittensor.utils.balance.Balance]


   .. py:attribute:: total_stake
      :type:  bittensor.utils.balance.Balance


   .. py:attribute:: rank
      :type:  float


   .. py:attribute:: emission
      :type:  float


   .. py:attribute:: incentive
      :type:  float


   .. py:attribute:: consensus
      :type:  float


   .. py:attribute:: trust
      :type:  float


   .. py:attribute:: validator_trust
      :type:  float


   .. py:attribute:: dividends
      :type:  float


   .. py:attribute:: last_update
      :type:  int


   .. py:attribute:: validator_permit
      :type:  bool


   .. py:attribute:: prometheus_info
      :type:  Optional[PrometheusInfo]


   .. py:attribute:: axon_info
      :type:  NeuronInfoLite.axon_info


   .. py:attribute:: pruning_score
      :type:  int


   .. py:attribute:: is_null
      :type:  bool
      :value: False



   .. py:method:: fix_decoded_values(neuron_info_decoded)
      :classmethod:


      Fixes the values of the NeuronInfoLite object.



   .. py:method:: from_vec_u8(vec_u8)
      :classmethod:


      Returns a NeuronInfoLite object from a ``vec_u8``.



   .. py:method:: list_from_vec_u8(vec_u8)
      :classmethod:


      Returns a list of NeuronInfoLite objects from a ``vec_u8``.



   .. py:method:: get_null_neuron()
      :staticmethod:



.. py:class:: PrometheusInfo

   Dataclass for prometheus info.


   .. py:attribute:: block
      :type:  int


   .. py:attribute:: version
      :type:  int


   .. py:attribute:: ip
      :type:  str


   .. py:attribute:: port
      :type:  int


   .. py:attribute:: ip_type
      :type:  int


   .. py:method:: fix_decoded_values(prometheus_info_decoded)
      :classmethod:


      Returns a PrometheusInfo object from a prometheus_info_decoded dictionary.



.. py:class:: DelegateInfo

   Dataclass for delegate information. For a lighter version of this class, see :func:`DelegateInfoLite`.

   :param hotkey_ss58: Hotkey of the delegate for which the information is being fetched.
   :type hotkey_ss58: str
   :param total_stake: Total stake of the delegate.
   :type total_stake: int
   :param nominators: List of nominators of the delegate and their stake.
   :type nominators: list[Tuple[str, int]]
   :param take: Take of the delegate as a percentage.
   :type take: float
   :param owner_ss58: Coldkey of the owner.
   :type owner_ss58: str
   :param registrations: List of subnets that the delegate is registered on.
   :type registrations: list[int]
   :param validator_permits: List of subnets that the delegate is allowed to validate on.
   :type validator_permits: list[int]
   :param return_per_1000: Return per 1000 TAO, for the delegate over a day.
   :type return_per_1000: int
   :param total_daily_return: Total daily return of the delegate.
   :type total_daily_return: int


   .. py:attribute:: hotkey_ss58
      :type:  str


   .. py:attribute:: total_stake
      :type:  bittensor.utils.balance.Balance


   .. py:attribute:: nominators
      :type:  List[Tuple[str, bittensor.utils.balance.Balance]]


   .. py:attribute:: owner_ss58
      :type:  str


   .. py:attribute:: take
      :type:  float


   .. py:attribute:: validator_permits
      :type:  List[int]


   .. py:attribute:: registrations
      :type:  List[int]


   .. py:attribute:: return_per_1000
      :type:  bittensor.utils.balance.Balance


   .. py:attribute:: total_daily_return
      :type:  bittensor.utils.balance.Balance


   .. py:method:: fix_decoded_values(decoded)
      :classmethod:


      Fixes the decoded values.



   .. py:method:: from_vec_u8(vec_u8)
      :classmethod:


      Returns a DelegateInfo object from a ``vec_u8``.



   .. py:method:: list_from_vec_u8(vec_u8)
      :classmethod:


      Returns a list of DelegateInfo objects from a ``vec_u8``.



   .. py:method:: delegated_list_from_vec_u8(vec_u8)
      :classmethod:


      Returns a list of Tuples of DelegateInfo objects, and Balance, from a ``vec_u8``.

      This is the list of delegates that the user has delegated to, and the amount of stake delegated.



.. py:class:: StakeInfo

   Dataclass for stake info.


   .. py:attribute:: hotkey_ss58
      :type:  str


   .. py:attribute:: coldkey_ss58
      :type:  str


   .. py:attribute:: stake
      :type:  bittensor.utils.balance.Balance


   .. py:method:: fix_decoded_values(decoded)
      :classmethod:


      Fixes the decoded values.



   .. py:method:: from_vec_u8(vec_u8)
      :classmethod:


      Returns a StakeInfo object from a ``vec_u8``.



   .. py:method:: list_of_tuple_from_vec_u8(vec_u8)
      :classmethod:


      Returns a list of StakeInfo objects from a ``vec_u8``.



   .. py:method:: list_from_vec_u8(vec_u8)
      :classmethod:


      Returns a list of StakeInfo objects from a ``vec_u8``.



.. py:class:: SubnetInfo

   Dataclass for subnet info.


   .. py:attribute:: netuid
      :type:  int


   .. py:attribute:: rho
      :type:  int


   .. py:attribute:: kappa
      :type:  int


   .. py:attribute:: difficulty
      :type:  int


   .. py:attribute:: immunity_period
      :type:  int


   .. py:attribute:: max_allowed_validators
      :type:  int


   .. py:attribute:: min_allowed_weights
      :type:  int


   .. py:attribute:: max_weight_limit
      :type:  float


   .. py:attribute:: scaling_law_power
      :type:  float


   .. py:attribute:: subnetwork_n
      :type:  int


   .. py:attribute:: max_n
      :type:  int


   .. py:attribute:: blocks_since_epoch
      :type:  int


   .. py:attribute:: tempo
      :type:  int


   .. py:attribute:: modality
      :type:  int


   .. py:attribute:: connection_requirements
      :type:  Dict[str, float]


   .. py:attribute:: emission_value
      :type:  float


   .. py:attribute:: burn
      :type:  bittensor.utils.balance.Balance


   .. py:attribute:: owner_ss58
      :type:  str


   .. py:method:: from_vec_u8(vec_u8)
      :classmethod:


      Returns a SubnetInfo object from a ``vec_u8``.



   .. py:method:: list_from_vec_u8(vec_u8)
      :classmethod:


      Returns a list of SubnetInfo objects from a ``vec_u8``.



   .. py:method:: fix_decoded_values(decoded)
      :classmethod:


      Returns a SubnetInfo object from a decoded SubnetInfo dictionary.



   .. py:method:: to_parameter_dict()

      Returns a torch tensor or dict of the subnet info.



   .. py:method:: from_parameter_dict(parameter_dict)
      :classmethod:



.. py:class:: SubnetHyperparameters

   Dataclass for subnet hyperparameters.


   .. py:attribute:: rho
      :type:  int


   .. py:attribute:: kappa
      :type:  int


   .. py:attribute:: immunity_period
      :type:  int


   .. py:attribute:: min_allowed_weights
      :type:  int


   .. py:attribute:: max_weight_limit
      :type:  float


   .. py:attribute:: tempo
      :type:  int


   .. py:attribute:: min_difficulty
      :type:  int


   .. py:attribute:: max_difficulty
      :type:  int


   .. py:attribute:: weights_version
      :type:  int


   .. py:attribute:: weights_rate_limit
      :type:  int


   .. py:attribute:: adjustment_interval
      :type:  int


   .. py:attribute:: activity_cutoff
      :type:  int


   .. py:attribute:: registration_allowed
      :type:  bool


   .. py:attribute:: target_regs_per_interval
      :type:  int


   .. py:attribute:: min_burn
      :type:  int


   .. py:attribute:: max_burn
      :type:  int


   .. py:attribute:: bonds_moving_avg
      :type:  int


   .. py:attribute:: max_regs_per_block
      :type:  int


   .. py:attribute:: serving_rate_limit
      :type:  int


   .. py:attribute:: max_validators
      :type:  int


   .. py:attribute:: adjustment_alpha
      :type:  int


   .. py:attribute:: difficulty
      :type:  int


   .. py:attribute:: commit_reveal_weights_interval
      :type:  int


   .. py:attribute:: commit_reveal_weights_enabled
      :type:  bool


   .. py:attribute:: alpha_high
      :type:  int


   .. py:attribute:: alpha_low
      :type:  int


   .. py:attribute:: liquid_alpha_enabled
      :type:  bool


   .. py:method:: from_vec_u8(vec_u8)
      :classmethod:


      Returns a SubnetHyperparameters object from a ``vec_u8``.



   .. py:method:: list_from_vec_u8(vec_u8)
      :classmethod:


      Returns a list of SubnetHyperparameters objects from a ``vec_u8``.



   .. py:method:: fix_decoded_values(decoded)
      :classmethod:


      Returns a SubnetInfo object from a decoded SubnetInfo dictionary.



   .. py:method:: to_parameter_dict()

      Returns a torch tensor or dict of the subnet hyperparameters.



   .. py:method:: from_parameter_dict(parameter_dict)
      :classmethod:



.. py:class:: IPInfo

   Dataclass for associated IP Info.


   .. py:attribute:: ip
      :type:  str


   .. py:attribute:: ip_type
      :type:  int


   .. py:attribute:: protocol
      :type:  int


   .. py:method:: encode()

      Returns a dictionary of the IPInfo object that can be encoded.



   .. py:method:: from_vec_u8(vec_u8)
      :classmethod:


      Returns a IPInfo object from a ``vec_u8``.



   .. py:method:: list_from_vec_u8(vec_u8)
      :classmethod:


      Returns a list of IPInfo objects from a ``vec_u8``.



   .. py:method:: fix_decoded_values(decoded)
      :classmethod:


      Returns a SubnetInfo object from a decoded IPInfo dictionary.



   .. py:method:: to_parameter_dict()

      Returns a torch tensor or dict of the subnet IP info.



   .. py:method:: from_parameter_dict(parameter_dict)
      :classmethod:



.. py:data:: ProposalCallData

.. py:class:: ProposalVoteData

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


   .. py:attribute:: index
      :type:  int


   .. py:attribute:: threshold
      :type:  int


   .. py:attribute:: ayes
      :type:  List[str]


   .. py:attribute:: nays
      :type:  List[str]


   .. py:attribute:: end
      :type:  int


.. py:class:: Subtensor(network = None, config = None, _mock = False, log_verbose = True, connection_timeout = 600)

   The Subtensor class in Bittensor serves as a crucial interface for interacting with the Bittensor blockchain,
   facilitating a range of operations essential for the decentralized machine learning network.

   This class enables neurons (network participants) to engage in activities such as registering on the network,
   managing staked weights, setting inter-neuronal weights, and participating in consensus mechanisms.

   The Bittensor network operates on a digital ledger where each neuron holds stakes (S) and learns a set
   of inter-peer weights (W). These weights, set by the neurons themselves, play a critical role in determining
   the ranking and incentive mechanisms within the network. Higher-ranked neurons, as determined by their
   contributions and trust within the network, receive more incentives.

   The Subtensor class connects to various Bittensor networks like the main ``finney`` network or local test
   networks, providing a gateway to the blockchain layer of Bittensor. It leverages a staked weighted trust
   system and consensus to ensure fair and distributed incentive mechanisms, where incentives (I) are
   primarily allocated to neurons that are trusted by the majority of the network.

   Additionally, Bittensor introduces a speculation-based reward mechanism in the form of bonds (B), allowing
   neurons to accumulate bonds in other neurons, speculating on their future value. This mechanism aligns
   with market-based speculation, incentivizing neurons to make judicious decisions in their inter-neuronal
   investments.

   Example Usage::

       # Connect to the main Bittensor network (Finney).
       finney_subtensor = subtensor(network='finney')

       # Close websocket connection with the Bittensor network.
       finney_subtensor.close()

       # (Re)creates the websocket connection with the Bittensor network.
       finney_subtensor.connect_websocket()

       # Register a new neuron on the network.
       wallet = bittensor.wallet(...)  # Assuming a wallet instance is created.
       success = finney_subtensor.register(wallet=wallet, netuid=netuid)

       # Set inter-neuronal weights for collaborative learning.
       success = finney_subtensor.set_weights(wallet=wallet, netuid=netuid, uids=[...], weights=[...])

       # Speculate by accumulating bonds in other promising neurons.
       success = finney_subtensor.delegate(wallet=wallet, delegate_ss58=other_neuron_ss58, amount=bond_amount)

       # Get the metagraph for a specific subnet using given subtensor connection
       metagraph = subtensor.metagraph(netuid=netuid)

   By facilitating these operations, the Subtensor class is instrumental in maintaining the decentralized
   intelligence and dynamic learning environment of the Bittensor network, as envisioned in its foundational
   principles and mechanisms described in the `NeurIPS paper
   <https://bittensor.com/pdfs/academia/NeurIPS_DAO_Workshop_2022_3_3.pdf>`_. paper.

   Initializes a Subtensor interface for interacting with the Bittensor blockchain.

   .. note:: Currently subtensor defaults to the ``finney`` network. This will change in a future release.

   We strongly encourage users to run their own local subtensor node whenever possible. This increases
   decentralization and resilience of the network. In a future release, local subtensor will become the
   default and the fallback to ``finney`` removed. Please plan ahead for this change. We will provide detailed
   instructions on how to run a local subtensor node in the documentation in a subsequent release.

   :param network: The network name to connect to (e.g., ``finney``, ``local``). This can also be the
                   chain endpoint (e.g., ``wss://entrypoint-finney.opentensor.ai:443``) and will be correctly parsed into
                   the network and chain endpoint. If not specified, defaults to the main Bittensor network.
   :type network: str, optional
   :param config: Configuration object for the subtensor. If not provided, a default
                  configuration is used.
   :type config: bittensor.config, optional
   :param _mock: If set to ``True``, uses a mocked connection for testing purposes.
   :type _mock: bool, optional

   This initialization sets up the connection to the specified Bittensor network, allowing for various
   blockchain operations such as neuron registration, stake management, and setting weights.



   .. py:attribute:: config


   .. py:attribute:: log_verbose


   .. py:attribute:: _connection_timeout


   .. py:attribute:: _subtensor_errors
      :type:  Dict[str, Dict[str, str]]


   .. py:method:: __str__()


   .. py:method:: __repr__()


   .. py:method:: _get_substrate()

      Establishes a connection to the Substrate node using configured parameters.



   .. py:method:: help()
      :classmethod:


      Print help to stdout.



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



   .. py:method:: determine_chain_endpoint_and_network(network)
      :staticmethod:


      Determines the chain endpoint and network from the passed network or chain_endpoint.

      :param network: The network flag. The choices are: ``-- finney`` (main network), ``-- archive``
                      (archive network +300 blocks), ``-- local`` (local running network), ``-- test`` (test network).
      :type network: str

      :returns: The network flag.
                chain_endpoint (str): The chain endpoint flag. If set, overrides the ``network`` argument.
      :rtype: network (str)



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

      :param network: The name of the Subtensor network. If None, the network and endpoint will be determined from
                      the `config` object.
      :type network: str
      :param config: The configuration object containing the network and chain endpoint settings.
      :type config: bittensor.config

      :returns: A tuple containing the formatted WebSocket endpoint URL and the evaluated network name.
      :rtype: tuple



   .. py:method:: close()

      Cleans up resources for this subtensor instance like active websocket connection and active extensions.



   .. py:method:: nominate(wallet, wait_for_finalization = False, wait_for_inclusion = True)

      Becomes a delegate for the hotkey associated with the given wallet. This method is used to nominate
      a neuron (identified by the hotkey in the wallet) as a delegate on the Bittensor network, allowing it
      to participate in consensus and validation processes.

      :param wallet: The wallet containing the hotkey to be nominated.
      :type wallet: bittensor.wallet
      :param wait_for_finalization: If ``True``, waits until the transaction is finalized on the
                                    blockchain.
      :type wait_for_finalization: bool, optional
      :param wait_for_inclusion: If ``True``, waits until the transaction is included in a block.
      :type wait_for_inclusion: bool, optional

      :returns: ``True`` if the nomination process is successful, ``False`` otherwise.
      :rtype: bool

      This function is a key part of the decentralized governance mechanism of Bittensor, allowing for the
      dynamic selection and participation of validators in the network's consensus process.



   .. py:method:: delegate(wallet, delegate_ss58 = None, amount = None, wait_for_inclusion = True, wait_for_finalization = False, prompt = False)

      Becomes a delegate for the hotkey associated with the given wallet. This method is used to nominate
      a neuron (identified by the hotkey in the wallet) as a delegate on the Bittensor network, allowing it
      to participate in consensus and validation processes.

      :param wallet: The wallet containing the hotkey to be nominated.
      :type wallet: bittensor.wallet
      :param delegate_ss58: The ``SS58`` address of the delegate neuron.
      :type delegate_ss58: Optional[str]
      :param amount: The amount of TAO to undelegate.
      :type amount: Union[Balance, float]
      :param wait_for_finalization: If ``True``, waits until the transaction is finalized on the
                                    blockchain.
      :type wait_for_finalization: bool, optional
      :param wait_for_inclusion: If ``True``, waits until the transaction is included in a block.
      :type wait_for_inclusion: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional

      :returns: ``True`` if the nomination process is successful, False otherwise.
      :rtype: bool

      This function is a key part of the decentralized governance mechanism of Bittensor, allowing for the
      dynamic selection and participation of validators in the network's consensus process.



   .. py:method:: undelegate(wallet, delegate_ss58 = None, amount = None, wait_for_inclusion = True, wait_for_finalization = False, prompt = False)

      Removes a specified amount of stake from a delegate neuron using the provided wallet. This action
      reduces the staked amount on another neuron, effectively withdrawing support or speculation.

      :param wallet: The wallet used for the undelegation process.
      :type wallet: bittensor.wallet
      :param delegate_ss58: The ``SS58`` address of the delegate neuron.
      :type delegate_ss58: Optional[str]
      :param amount: The amount of TAO to undelegate.
      :type amount: Union[Balance, float]
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional

      :returns: ``True`` if the undelegation is successful, False otherwise.
      :rtype: bool

      This function reflects the dynamic and speculative nature of the Bittensor network, allowing neurons
      to adjust their stakes and investments based on changing perceptions and performances within the network.



   .. py:method:: set_take(wallet, delegate_ss58 = None, take = 0.0, wait_for_inclusion = True, wait_for_finalization = False)

      Set delegate hotkey take
      :param wallet: The wallet containing the hotkey to be nominated.
      :type wallet: bittensor.wallet
      :param delegate_ss58: Hotkey
      :type delegate_ss58: str, optional
      :param take: Delegate take on subnet ID
      :type take: float
      :param wait_for_finalization: If ``True``, waits until the transaction is finalized on the
                                    blockchain.
      :type wait_for_finalization: bool, optional
      :param wait_for_inclusion: If ``True``, waits until the transaction is included in a block.
      :type wait_for_inclusion: bool, optional

      :returns: ``True`` if the process is successful, False otherwise.
      :rtype: bool

      This function is a key part of the decentralized governance mechanism of Bittensor, allowing for the
      dynamic selection and participation of validators in the network's consensus process.



   .. py:method:: send_extrinsic(wallet, module, function, params, period = 5, wait_for_inclusion = False, wait_for_finalization = False, max_retries = 3, wait_time = 3, max_wait = 20)

      Sends an extrinsic to the Bittensor blockchain using the provided wallet and parameters. This method
      constructs and submits the extrinsic, handling retries and blockchain communication.

      :param wallet: The wallet associated with the extrinsic.
      :type wallet: bittensor.wallet
      :param module: The module name for the extrinsic.
      :type module: str
      :param function: The function name for the extrinsic.
      :type function: str
      :param params: The parameters for the extrinsic.
      :type params: dict
      :param period: The number of blocks for the extrinsic to live in the mempool. Defaults to 5.
      :type period: int, optional
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional
      :param max_retries: The maximum number of retries for the extrinsic. Defaults to 3.
      :type max_retries: int, optional
      :param wait_time: The wait time between retries. Defaults to 3.
      :type wait_time: int, optional
      :param max_wait: The maximum wait time for the extrinsic. Defaults to 20.
      :type max_wait: int, optional

      :returns: The receipt of the extrinsic if successful, None otherwise.
      :rtype: Optional[ExtrinsicReceipt]



   .. py:method:: set_weights(wallet, netuid, uids, weights, version_key = bittensor.__version_as_int__, wait_for_inclusion = False, wait_for_finalization = False, prompt = False, max_retries = 5)

      Sets the inter-neuronal weights for the specified neuron. This process involves specifying the
      influence or trust a neuron places on other neurons in the network, which is a fundamental aspect
      of Bittensor's decentralized learning architecture.

      :param wallet: The wallet associated with the neuron setting the weights.
      :type wallet: bittensor.wallet
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param uids: The list of neuron UIDs that the weights are being
                   set for.
      :type uids: Union[NDArray[np.int64], torch.LongTensor, list]
      :param weights: The corresponding weights to be set for each
                      UID.
      :type weights: Union[NDArray[np.float32], torch.FloatTensor, list]
      :param version_key: Version key for compatibility with the network.
      :type version_key: int, optional
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional
      :param max_retries: The number of maximum attempts to set weights. (Default: 5)
      :type max_retries: int, optional

      :returns: ``True`` if the setting of weights is successful, False otherwise. And `msg`, a string
                value describing the success or potential error.
      :rtype: Tuple[bool, str]

      This function is crucial in shaping the network's collective intelligence, where each neuron's
      learning and contribution are influenced by the weights it sets towards others【81†source】.



   .. py:method:: _do_set_weights(wallet, uids, vals, netuid, version_key = bittensor.__version_as_int__, wait_for_inclusion = False, wait_for_finalization = False)

      Internal method to send a transaction to the Bittensor blockchain, setting weights
      for specified neurons. This method constructs and submits the transaction, handling
      retries and blockchain communication.

      :param wallet: The wallet associated with the neuron setting the weights.
      :type wallet: bittensor.wallet
      :param uids: List of neuron UIDs for which weights are being set.
      :type uids: List[int]
      :param vals: List of weight values corresponding to each UID.
      :type vals: List[int]
      :param netuid: Unique identifier for the network.
      :type netuid: int
      :param version_key: Version key for compatibility with the network.
      :type version_key: int, optional
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional

      :returns: A tuple containing a success flag and an optional error message.
      :rtype: Tuple[bool, Optional[str]]

      This method is vital for the dynamic weighting mechanism in Bittensor, where neurons adjust their
      trust in other neurons based on observed performance and contributions.



   .. py:method:: commit_weights(wallet, netuid, salt, uids, weights, version_key = bittensor.__version_as_int__, wait_for_inclusion = False, wait_for_finalization = False, prompt = False, max_retries = 5)

      Commits a hash of the neuron's weights to the Bittensor blockchain using the provided wallet.
      This action serves as a commitment or snapshot of the neuron's current weight distribution.

      :param wallet: The wallet associated with the neuron committing the weights.
      :type wallet: bittensor.wallet
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param salt: list of randomly generated integers as salt to generated weighted hash.
      :type salt: List[int]
      :param uids: NumPy array of neuron UIDs for which weights are being committed.
      :type uids: np.ndarray
      :param weights: NumPy array of weight values corresponding to each UID.
      :type weights: np.ndarray
      :param version_key: Version key for compatibility with the network.
      :type version_key: int, optional
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional
      :param max_retries: The number of maximum attempts to commit weights. (Default: 5)
      :type max_retries: int, optional

      :returns: ``True`` if the weight commitment is successful, False otherwise. And `msg`, a string
                value describing the success or potential error.
      :rtype: Tuple[bool, str]

      This function allows neurons to create a tamper-proof record of their weight distribution at a specific point in time,
      enhancing transparency and accountability within the Bittensor network.



   .. py:method:: _do_commit_weights(wallet, netuid, commit_hash, wait_for_inclusion = False, wait_for_finalization = False)

      Internal method to send a transaction to the Bittensor blockchain, committing the hash of a neuron's weights.
      This method constructs and submits the transaction, handling retries and blockchain communication.

      :param wallet: The wallet associated with the neuron committing the weights.
      :type wallet: bittensor.wallet
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param commit_hash: The hash of the neuron's weights to be committed.
      :type commit_hash: str
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional

      :returns: A tuple containing a success flag and an optional error message.
      :rtype: Tuple[bool, Optional[str]]

      This method ensures that the weight commitment is securely recorded on the Bittensor blockchain, providing a
      verifiable record of the neuron's weight distribution at a specific point in time.



   .. py:method:: reveal_weights(wallet, netuid, uids, weights, salt, version_key = bittensor.__version_as_int__, wait_for_inclusion = False, wait_for_finalization = False, prompt = False, max_retries = 5)

      Reveals the weights for a specific subnet on the Bittensor blockchain using the provided wallet.
      This action serves as a revelation of the neuron's previously committed weight distribution.

      :param wallet: The wallet associated with the neuron revealing the weights.
      :type wallet: bittensor.wallet
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param uids: NumPy array of neuron UIDs for which weights are being revealed.
      :type uids: np.ndarray
      :param weights: NumPy array of weight values corresponding to each UID.
      :type weights: np.ndarray
      :param salt: NumPy array of salt values corresponding to the hash function.
      :type salt: np.ndarray
      :param version_key: Version key for compatibility with the network.
      :type version_key: int, optional
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional
      :param max_retries: The number of maximum attempts to reveal weights. (Default: 5)
      :type max_retries: int, optional

      :returns: ``True`` if the weight revelation is successful, False otherwise. And `msg`, a string
                value describing the success or potential error.
      :rtype: Tuple[bool, str]

      This function allows neurons to reveal their previously committed weight distribution, ensuring transparency
      and accountability within the Bittensor network.



   .. py:method:: _do_reveal_weights(wallet, netuid, uids, values, salt, version_key, wait_for_inclusion = False, wait_for_finalization = False)

      Internal method to send a transaction to the Bittensor blockchain, revealing the weights for a specific subnet.
      This method constructs and submits the transaction, handling retries and blockchain communication.

      :param wallet: The wallet associated with the neuron revealing the weights.
      :type wallet: bittensor.wallet
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param uids: List of neuron UIDs for which weights are being revealed.
      :type uids: List[int]
      :param values: List of weight values corresponding to each UID.
      :type values: List[int]
      :param salt: List of salt values corresponding to the hash function.
      :type salt: List[int]
      :param version_key: Version key for compatibility with the network.
      :type version_key: int
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional

      :returns: A tuple containing a success flag and an optional error message.
      :rtype: Tuple[bool, Optional[str]]

      This method ensures that the weight revelation is securely recorded on the Bittensor blockchain, providing transparency
      and accountability for the neuron's weight distribution.



   .. py:method:: register(wallet, netuid, wait_for_inclusion = False, wait_for_finalization = True, prompt = False, max_allowed_attempts = 3, output_in_place = True, cuda = False, dev_id = 0, tpb = 256, num_processes = None, update_interval = None, log_verbose = False)

      Registers a neuron on the Bittensor network using the provided wallet. Registration
      is a critical step for a neuron to become an active participant in the network, enabling
      it to stake, set weights, and receive incentives.

      :param wallet: The wallet associated with the neuron to be registered.
      :type wallet: bittensor.wallet
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
                                 Defaults to `False`.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
                                    Defaults to `True`.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional
      :param max_allowed_attempts: Maximum number of attempts to register the wallet.
      :type max_allowed_attempts: int
      :param output_in_place: If true, prints the progress of the proof of work to the console in-place. Meaning
                              the progress is printed on the same lines. Defaults to `True`.
      :type output_in_place: bool
      :param cuda: If ``true``, the wallet should be registered using CUDA device(s). Defaults to `False`.
      :type cuda: bool
      :param dev_id: The CUDA device id to use, or a list of device ids. Defaults to `0` (zero).
      :type dev_id: Union[List[int], int]
      :param tpb: The number of threads per block (CUDA). Default to `256`.
      :type tpb: int
      :param num_processes: The number of processes to use to register. Default to `None`.
      :type num_processes: Optional[int]
      :param update_interval: The number of nonces to solve between updates.  Default to `None`.
      :type update_interval: Optional[int]
      :param log_verbose: If ``true``, the registration process will log more information.  Default to `False`.
      :type log_verbose: bool

      :returns: ``True`` if the registration is successful, False otherwise.
      :rtype: bool

      This function facilitates the entry of new neurons into the network, supporting the decentralized
      growth and scalability of the Bittensor ecosystem.



   .. py:method:: swap_hotkey(wallet, new_wallet, wait_for_inclusion = False, wait_for_finalization = True, prompt = False)

      Swaps an old hotkey with a new hotkey for the specified wallet.

      This method initiates an extrinsic to change the hotkey associated with a wallet to a new hotkey. It provides
      options to wait for inclusion and finalization of the transaction, and to prompt the user for confirmation.

      :param wallet: The wallet whose hotkey is to be swapped.
      :type wallet: bittensor.wallet
      :param new_wallet: The new wallet with the hotkey to be set.
      :type new_wallet: bittensor.wallet
      :param wait_for_inclusion: Whether to wait for the transaction to be included in a block.
                                 Default is `False`.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: Whether to wait for the transaction to be finalized. Default is `True`.
      :type wait_for_finalization: bool
      :param prompt: Whether to prompt the user for confirmation before proceeding. Default is `False`.
      :type prompt: bool

      :returns: True if the hotkey swap was successful, False otherwise.
      :rtype: bool



   .. py:method:: run_faucet(wallet, wait_for_inclusion = False, wait_for_finalization = True, prompt = False, max_allowed_attempts = 3, output_in_place = True, cuda = False, dev_id = 0, tpb = 256, num_processes = None, update_interval = None, log_verbose = False)

      Facilitates a faucet transaction, allowing new neurons to receive an initial amount of TAO
      for participating in the network. This function is particularly useful for newcomers to the
      Bittensor network, enabling them to start with a small stake on testnet only.

      :param wallet: The wallet for which the faucet transaction is to be run.
      :type wallet: bittensor.wallet
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
                                 Defaults to `False`.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
                                    Defaults to `True`.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional
      :param max_allowed_attempts: Maximum number of attempts to register the wallet.
      :type max_allowed_attempts: int
      :param output_in_place: If true, prints the progress of the proof of work to the console in-place. Meaning
                              the progress is printed on the same lines. Defaults to `True`.
      :type output_in_place: bool
      :param cuda: If ``true``, the wallet should be registered using CUDA device(s). Defaults to `False`.
      :type cuda: bool
      :param dev_id: The CUDA device id to use, or a list of device ids. Defaults to `0` (zero).
      :type dev_id: Union[List[int], int]
      :param tpb: The number of threads per block (CUDA). Default to `256`.
      :type tpb: int
      :param num_processes: The number of processes to use to register. Default to `None`.
      :type num_processes: Optional[int]
      :param update_interval: The number of nonces to solve between updates.  Default to `None`.
      :type update_interval: Optional[int]
      :param log_verbose: If ``true``, the registration process will log more information.  Default to `False`.
      :type log_verbose: bool

      :returns: ``True`` if the faucet transaction is successful, False otherwise.
      :rtype: bool

      This function is part of Bittensor's onboarding process, ensuring that new neurons have
      the necessary resources to begin their journey in the decentralized AI network.

      .. note::

         This is for testnet ONLY and is disabled currently. You must build your own staging subtensor chain with the
         ``--features pow-faucet`` argument to enable this.



   .. py:method:: burned_register(wallet, netuid, wait_for_inclusion = False, wait_for_finalization = True, prompt = False)

      Registers a neuron on the Bittensor network by recycling TAO. This method of registration
      involves recycling TAO tokens, allowing them to be re-mined by performing work on the network.

      :param wallet: The wallet associated with the neuron to be registered.
      :type wallet: bittensor.wallet
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
                                 Defaults to `False`.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
                                    Defaults to `True`.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding. Defaults to `False`.
      :type prompt: bool, optional

      :returns: ``True`` if the registration is successful, False otherwise.
      :rtype: bool



   .. py:method:: _do_pow_register(netuid, wallet, pow_result, wait_for_inclusion = False, wait_for_finalization = True)

      Sends a (POW) register extrinsic to the chain.

      :param netuid: The subnet to register on.
      :type netuid: int
      :param wallet: The wallet to register.
      :type wallet: bittensor.wallet
      :param pow_result: The PoW result to register.
      :type pow_result: POWSolution
      :param wait_for_inclusion: If ``True``, waits for the extrinsic to be included in a block.
                                 Default to `False`.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: If ``True``, waits for the extrinsic to be finalized. Default to `True`.
      :type wait_for_finalization: bool

      :returns: ``True`` if the extrinsic was included in a block.
                error (Optional[str]): ``None`` on success or not waiting for inclusion/finalization, otherwise the error
                    message.
      :rtype: success (bool)



   .. py:method:: _do_burned_register(netuid, wallet, wait_for_inclusion = False, wait_for_finalization = True)

      Performs a burned register extrinsic call to the Subtensor chain.

      This method sends a registration transaction to the Subtensor blockchain using the burned register mechanism. It
      retries the call up to three times with exponential backoff in case of failures.

      :param netuid: The network unique identifier to register on.
      :type netuid: int
      :param wallet: The wallet to be registered.
      :type wallet: bittensor.wallet
      :param wait_for_inclusion: Whether to wait for the transaction to be included in a block. Default is False.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: Whether to wait for the transaction to be finalized. Default is True.
      :type wait_for_finalization: bool

      :returns: A tuple containing a boolean indicating success or failure, and an optional error message.
      :rtype: Tuple[bool, Optional[str]]



   .. py:method:: _do_swap_hotkey(wallet, new_wallet, wait_for_inclusion = False, wait_for_finalization = True)

      Performs a hotkey swap extrinsic call to the Subtensor chain.

      :param wallet: The wallet whose hotkey is to be swapped.
      :type wallet: bittensor.wallet
      :param new_wallet: The wallet with the new hotkey to be set.
      :type new_wallet: bittensor.wallet
      :param wait_for_inclusion: Whether to wait for the transaction to be included in a block. Default is
      :type wait_for_inclusion: bool
      :param `False`.:
      :param wait_for_finalization: Whether to wait for the transaction to be finalized. Default is `True`.
      :type wait_for_finalization: bool

      :returns:

                A tuple containing a boolean indicating success or failure, and an optional
                    error message.
      :rtype: Tuple[bool, Optional[str]]



   .. py:method:: transfer(wallet, dest, amount, wait_for_inclusion = True, wait_for_finalization = False, prompt = False)

      Executes a transfer of funds from the provided wallet to the specified destination address.
      This function is used to move TAO tokens within the Bittensor network, facilitating transactions
      between neurons.

      :param wallet: The wallet from which funds are being transferred.
      :type wallet: bittensor.wallet
      :param dest: The destination public key address.
      :type dest: str
      :param amount: The amount of TAO to be transferred.
      :type amount: Union[Balance, float]
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional

      :returns: ``True`` if the transfer is successful, False otherwise.
      :rtype: transfer_extrinsic (bool)

      This function is essential for the fluid movement of tokens in the network, supporting
      various economic activities such as staking, delegation, and reward distribution.



   .. py:method:: get_transfer_fee(wallet, dest, value)

      Calculates the transaction fee for transferring tokens from a wallet to a specified destination address.
      This function simulates the transfer to estimate the associated cost, taking into account the current
      network conditions and transaction complexity.

      :param wallet: The wallet from which the transfer is initiated.
      :type wallet: bittensor.wallet
      :param dest: The ``SS58`` address of the destination account.
      :type dest: str
      :param value: The amount of tokens to be transferred, specified as a Balance object,
                    or in Tao (float) or Rao (int) units.
      :type value: Union[Balance, float, int]

      :returns: The estimated transaction fee for the transfer, represented as a Balance object.
      :rtype: Balance

      Estimating the transfer fee is essential for planning and executing token transactions, ensuring that the
      wallet has sufficient funds to cover both the transfer amount and the associated costs. This function
      provides a crucial tool for managing financial operations within the Bittensor network.



   .. py:method:: _do_transfer(wallet, dest, transfer_balance, wait_for_inclusion = True, wait_for_finalization = False)

      Sends a transfer extrinsic to the chain.

      :param wallet: Wallet object.
      :type wallet: :func:`bittensor.wallet`
      :param dest: Destination public key address.
      :type dest: str
      :param transfer_balance: Amount to transfer.
      :type transfer_balance: :func:`Balance`
      :param wait_for_inclusion: If ``true``, waits for inclusion.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: If ``true``, waits for finalization.
      :type wait_for_finalization: bool

      :returns: ``True`` if transfer was successful.
                block_hash (str): Block hash of the transfer. On success and if wait_for_ finalization/inclusion is
                    ``True``.
                error (str): Error message if transfer failed.
      :rtype: success (bool)



   .. py:method:: get_existential_deposit(block = None)

      Retrieves the existential deposit amount for the Bittensor blockchain. The existential deposit
      is the minimum amount of TAO required for an account to exist on the blockchain. Accounts with
      balances below this threshold can be reaped to conserve network resources.

      :param block: Block number at which to query the deposit amount. If ``None``, the current block is
                    used.
      :type block: Optional[int]

      :returns: The existential deposit amount, or ``None`` if the query fails.
      :rtype: Optional[Balance]

      The existential deposit is a fundamental economic parameter in the Bittensor network, ensuring
      efficient use of storage and preventing the proliferation of dust accounts.



   .. py:method:: register_subnetwork(wallet, wait_for_inclusion = False, wait_for_finalization=True, prompt = False)

      Registers a new subnetwork on the Bittensor network using the provided wallet. This function
      is used for the creation and registration of subnetworks, which are specialized segments of the
      overall Bittensor network.

      :param wallet: The wallet to be used for registration.
      :type wallet: bittensor.wallet
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional

      :returns: ``True`` if the subnetwork registration is successful, False otherwise.
      :rtype: bool

      This function allows for the expansion and diversification of the Bittensor network, supporting
      its decentralized and adaptable architecture.



   .. py:method:: set_hyperparameter(wallet, netuid, parameter, value, wait_for_inclusion = False, wait_for_finalization=True, prompt = False)

      Sets a specific hyperparameter for a given subnetwork on the Bittensor blockchain. This action
      involves adjusting network-level parameters, influencing the behavior and characteristics of the
      subnetwork.

      :param wallet: The wallet used for setting the hyperparameter.
      :type wallet: bittensor.wallet
      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param parameter: The name of the hyperparameter to be set.
      :type parameter: str
      :param value: The new value for the hyperparameter.
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional

      :returns: ``True`` if the hyperparameter setting is successful, False otherwise.
      :rtype: bool

      This function plays a critical role in the dynamic governance and adaptability of the Bittensor
      network, allowing for fine-tuning of network operations and characteristics.



   .. py:method:: serve(wallet, ip, port, protocol, netuid, placeholder1 = 0, placeholder2 = 0, wait_for_inclusion = False, wait_for_finalization=True)

      Registers a neuron's serving endpoint on the Bittensor network. This function announces the
      IP address and port where the neuron is available to serve requests, facilitating peer-to-peer
      communication within the network.

      :param wallet: The wallet associated with the neuron being served.
      :type wallet: bittensor.wallet
      :param ip: The IP address of the serving neuron.
      :type ip: str
      :param port: The port number on which the neuron is serving.
      :type port: int
      :param protocol: The protocol type used by the neuron (e.g., GRPC, HTTP).
      :type protocol: int
      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param placeholder1: Placeholder parameter for future extensions. Default is ``0``.
      :type placeholder1: int, optional
      :param placeholder2: Placeholder parameter for future extensions. Default is ``0``.
      :type placeholder2: int, optional
      :param wait_for_inclusion: Waits for the transaction to be included in a block. Default is
                                 ``False``.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain. Default
                                    is ``True``.
      :type wait_for_finalization: bool, optional

      :returns: ``True`` if the serve registration is successful, False otherwise.
      :rtype: bool

      This function is essential for establishing the neuron's presence in the network, enabling
      it to participate in the decentralized machine learning processes of Bittensor.



   .. py:method:: serve_axon(netuid, axon, wait_for_inclusion = False, wait_for_finalization = True)

      Registers an Axon serving endpoint on the Bittensor network for a specific neuron. This function
      is used to set up the Axon, a key component of a neuron that handles incoming queries and data
      processing tasks.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param axon: The Axon instance to be registered for serving.
      :type axon: bittensor.Axon
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional

      :returns: ``True`` if the Axon serve registration is successful, False otherwise.
      :rtype: bool

      By registering an Axon, the neuron becomes an active part of the network's distributed
      computing infrastructure, contributing to the collective intelligence of Bittensor.



   .. py:method:: _do_serve_axon(wallet, call_params, wait_for_inclusion = False, wait_for_finalization = True)

      Internal method to submit a serve axon transaction to the Bittensor blockchain. This method
      creates and submits a transaction, enabling a neuron's Axon to serve requests on the network.

      :param wallet: The wallet associated with the neuron.
      :type wallet: bittensor.wallet
      :param call_params: Parameters required for the serve axon call.
      :type call_params: AxonServeCallParams
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional

      :returns: A tuple containing a success flag and an optional error message.
      :rtype: Tuple[bool, Optional[str]]

      This function is crucial for initializing and announcing a neuron's Axon service on the network,
      enhancing the decentralized computation capabilities of Bittensor.



   .. py:method:: serve_prometheus(wallet, port, netuid, wait_for_inclusion = False, wait_for_finalization = True)


   .. py:method:: _do_serve_prometheus(wallet, call_params, wait_for_inclusion = False, wait_for_finalization = True)

      Sends a serve prometheus extrinsic to the chain.
      :param wallet: Wallet object.
      :type wallet: :func:`bittensor.wallet`
      :param call_params: Prometheus serve call parameters.
      :type call_params: :func:`PrometheusServeCallParams`
      :param wait_for_inclusion: If ``true``, waits for inclusion.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: If ``true``, waits for finalization.
      :type wait_for_finalization: bool

      :returns: ``True`` if serve prometheus was successful.
                error (:func:`Optional[str]`): Error message if serve prometheus failed, ``None`` otherwise.
      :rtype: success (bool)



   .. py:method:: _do_associate_ips(wallet, ip_info_list, netuid, wait_for_inclusion = False, wait_for_finalization = True)

      Sends an associate IPs extrinsic to the chain.

      :param wallet: Wallet object.
      :type wallet: :func:`bittensor.wallet`
      :param ip_info_list: List of IPInfo objects.
      :type ip_info_list: :func:`List[IPInfo]`
      :param netuid: Netuid to associate IPs to.
      :type netuid: int
      :param wait_for_inclusion: If ``true``, waits for inclusion.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: If ``true``, waits for finalization.
      :type wait_for_finalization: bool

      :returns: ``True`` if associate IPs was successful.
                error (:func:`Optional[str]`): Error message if associate IPs failed, None otherwise.
      :rtype: success (bool)



   .. py:method:: add_stake(wallet, hotkey_ss58 = None, amount = None, wait_for_inclusion = True, wait_for_finalization = False, prompt = False)

      Adds the specified amount of stake to a neuron identified by the hotkey ``SS58`` address. Staking
      is a fundamental process in the Bittensor network that enables neurons to participate actively
      and earn incentives.

      :param wallet: The wallet to be used for staking.
      :type wallet: bittensor.wallet
      :param hotkey_ss58: The ``SS58`` address of the hotkey associated with the neuron.
      :type hotkey_ss58: Optional[str]
      :param amount: The amount of TAO to stake.
      :type amount: Union[Balance, float]
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional

      :returns: ``True`` if the staking is successful, False otherwise.
      :rtype: bool

      This function enables neurons to increase their stake in the network, enhancing their influence
      and potential rewards in line with Bittensor's consensus and reward mechanisms.



   .. py:method:: add_stake_multiple(wallet, hotkey_ss58s, amounts = None, wait_for_inclusion = True, wait_for_finalization = False, prompt = False)

      Adds stakes to multiple neurons identified by their hotkey SS58 addresses. This bulk operation
      allows for efficient staking across different neurons from a single wallet.

      :param wallet: The wallet used for staking.
      :type wallet: bittensor.wallet
      :param hotkey_ss58s: List of ``SS58`` addresses of hotkeys to stake to.
      :type hotkey_ss58s: List[str]
      :param amounts: Corresponding amounts of TAO to stake for each hotkey.
      :type amounts: List[Union[Balance, float]], optional
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional

      :returns: ``True`` if the staking is successful for all specified neurons, False otherwise.
      :rtype: bool

      This function is essential for managing stakes across multiple neurons, reflecting the dynamic
      and collaborative nature of the Bittensor network.



   .. py:method:: _do_stake(wallet, hotkey_ss58, amount, wait_for_inclusion = True, wait_for_finalization = False)

      Sends a stake extrinsic to the chain.

      :param wallet: Wallet object that can sign the extrinsic.
      :type wallet: :func:`bittensor.wallet`
      :param hotkey_ss58: Hotkey ``ss58`` address to stake to.
      :type hotkey_ss58: str
      :param amount: Amount to stake.
      :type amount: :func:`Balance`
      :param wait_for_inclusion: If ``true``, waits for inclusion before returning.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: If ``true``, waits for finalization before returning.
      :type wait_for_finalization: bool

      :returns: ``True`` if the extrinsic was successful.
      :rtype: success (bool)

      :raises StakeError: If the extrinsic failed.



   .. py:method:: unstake_multiple(wallet, hotkey_ss58s, amounts = None, wait_for_inclusion = True, wait_for_finalization = False, prompt = False)

      Performs batch unstaking from multiple hotkey accounts, allowing a neuron to reduce its staked amounts
      efficiently. This function is useful for managing the distribution of stakes across multiple neurons.

      :param wallet: The wallet linked to the coldkey from which the stakes are being withdrawn.
      :type wallet: bittensor.wallet
      :param hotkey_ss58s: A list of hotkey ``SS58`` addresses to unstake from.
      :type hotkey_ss58s: List[str]
      :param amounts: The amounts of TAO to unstake from each hotkey. If not
                      provided, unstakes all available stakes.
      :type amounts: List[Union[Balance, float]], optional
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional

      :returns: ``True`` if the batch unstaking is successful, False otherwise.
      :rtype: bool

      This function allows for strategic reallocation or withdrawal of stakes, aligning with the dynamic
      stake management aspect of the Bittensor network.



   .. py:method:: unstake(wallet, hotkey_ss58 = None, amount = None, wait_for_inclusion = True, wait_for_finalization = False, prompt = False)

      Removes a specified amount of stake from a single hotkey account. This function is critical for adjusting
      individual neuron stakes within the Bittensor network.

      :param wallet: The wallet associated with the neuron from which the stake is being removed.
      :type wallet: bittensor.wallet
      :param hotkey_ss58: The ``SS58`` address of the hotkey account to unstake from.
      :type hotkey_ss58: Optional[str]
      :param amount: The amount of TAO to unstake. If not specified, unstakes all.
      :type amount: Union[Balance, float], optional
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional

      :returns: ``True`` if the unstaking process is successful, False otherwise.
      :rtype: bool

      This function supports flexible stake management, allowing neurons to adjust their network participation
      and potential reward accruals.



   .. py:method:: _do_unstake(wallet, hotkey_ss58, amount, wait_for_inclusion = True, wait_for_finalization = False)

      Sends an unstake extrinsic to the chain.

      :param wallet: Wallet object that can sign the extrinsic.
      :type wallet: :func:`bittensor.wallet`
      :param hotkey_ss58: Hotkey ``ss58`` address to unstake from.
      :type hotkey_ss58: str
      :param amount: Amount to unstake.
      :type amount: :func:`Balance`
      :param wait_for_inclusion: If ``true``, waits for inclusion before returning.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: If ``true``, waits for finalization before returning.
      :type wait_for_finalization: bool

      :returns: ``True`` if the extrinsic was successful.
      :rtype: success (bool)

      :raises StakeError: If the extrinsic failed.



   .. py:method:: set_childkey_take(wallet, hotkey, take, netuid, wait_for_inclusion = True, wait_for_finalization = False, prompt = False)

      Sets a childkey take extrinsic on the subnet.

      :param wallet: Wallet object that can sign the extrinsic.
      :type wallet: :func:`bittensor.wallet`
      :param hotkey: (str): Hotkey ``ss58`` address of the child for which take is getting set.
      :param netuid: Unique identifier of for the subnet.
      :type netuid: int
      :param take: Value of childhotkey take on subnet.
      :type take: float
      :param wait_for_inclusion: If ``true``, waits for inclusion before returning.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: If ``true``, waits for finalization before returning.
      :type wait_for_finalization: bool
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional

      :returns: ``True`` if the extrinsic was successful.
      :rtype: success (bool)

      :raises ChildHotkeyError: If the extrinsic failed.



   .. py:method:: _do_set_childkey_take(wallet, hotkey, take, netuid, wait_for_inclusion = True, wait_for_finalization = False)

      Sends a set_children hotkey extrinsic on the chain.

      :param wallet: Wallet object that can sign the extrinsic.
      :type wallet: :func:`bittensor.wallet`
      :param hotkey: (str): Hotkey ``ss58`` address of the wallet for which take is getting set.
      :param take: (int): The take that this ss58 hotkey will have if assigned as a child hotkey as u16 value.
      :param netuid: Unique identifier for the network.
      :type netuid: int
      :param wait_for_inclusion: If ``true``, waits for inclusion before returning.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: If ``true``, waits for finalization before returning.
      :type wait_for_finalization: bool

      :returns: ``True`` if the extrinsic was successful.
      :rtype: success (bool)



   .. py:method:: set_children(wallet, hotkey, children_with_proportions, netuid, wait_for_inclusion = True, wait_for_finalization = False, prompt = False)

      Sets a children hotkeys extrinsic on the subnet.

      :param wallet: Wallet object that can sign the extrinsic.
      :type wallet: :func:`bittensor.wallet`
      :param hotkey: (str): Hotkey ``ss58`` address of the parent.
      :param netuid: Unique identifier of for the subnet.
      :type netuid: int
      :param children_with_proportions: List of (proportion, child_ss58) pairs.
      :type children_with_proportions: List[Tuple[float, str]]
      :param wait_for_inclusion: If ``true``, waits for inclusion before returning.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: If ``true``, waits for finalization before returning.
      :type wait_for_finalization: bool
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional

      :returns: ``True`` if the extrinsic was successful.
      :rtype: success (bool)

      :raises ChildHotkeyError: If the extrinsic failed.



   .. py:method:: _do_set_children(wallet, hotkey, children, netuid, wait_for_inclusion = True, wait_for_finalization = False)

      Sends a set_children hotkey extrinsic on the chain.

      :param wallet: Wallet object that can sign the extrinsic.
      :type wallet: :func:`bittensor.wallet`
      :param hotkey: (str): Hotkey ``ss58`` address of the parent.
      :param children: (List[Tuple[int, str]]): A list of tuples containing the hotkey ``ss58`` addresses of the children and their proportions as u16 MAX standardized values.
      :param netuid: Unique identifier for the network.
      :type netuid: int
      :param wait_for_inclusion: If ``true``, waits for inclusion before returning.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: If ``true``, waits for finalization before returning.
      :type wait_for_finalization: bool

      :returns: ``True`` if the extrinsic was successful.
      :rtype: success (bool)



   .. py:method:: check_in_arbitration(ss58_address)

      Checks storage function to see if the provided coldkey is in arbitration.
      If 0, `swap` has not been called on this key. If 1, swap has been called once, so
      the key is not in arbitration. If >1, `swap` has been called with multiple destinations, and
      the key is thus in arbitration.



   .. py:method:: get_remaining_arbitration_period(coldkey_ss58, block = None)

      Retrieves the remaining arbitration period for a given coldkey.
      :param coldkey_ss58: The SS58 address of the coldkey.
      :type coldkey_ss58: str
      :param block: The block number to query. If None, uses the latest block.
      :type block: Optional[int], optional

      :returns: The remaining arbitration period in blocks, or 0 if not found.
      :rtype: Optional[int]



   .. py:method:: register_senate(wallet, wait_for_inclusion = True, wait_for_finalization = False, prompt = False)

      Removes a specified amount of stake from a single hotkey account. This function is critical for adjusting
      individual neuron stakes within the Bittensor network.

      :param wallet: The wallet associated with the neuron from which the stake is being removed.
      :type wallet: bittensor.wallet
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional

      :returns: ``True`` if the unstaking process is successful, False otherwise.
      :rtype: bool

      This function supports flexible stake management, allowing neurons to adjust their network participation
      and potential reward accruals.



   .. py:method:: leave_senate(wallet, wait_for_inclusion = True, wait_for_finalization = False, prompt = False)

      Removes a specified amount of stake from a single hotkey account. This function is critical for adjusting
      individual neuron stakes within the Bittensor network.

      :param wallet: The wallet associated with the neuron from which the stake is being removed.
      :type wallet: bittensor.wallet
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional

      :returns: ``True`` if the unstaking process is successful, False otherwise.
      :rtype: bool

      This function supports flexible stake management, allowing neurons to adjust their network participation
      and potential reward accruals.



   .. py:method:: vote_senate(wallet, proposal_hash, proposal_idx, vote, wait_for_inclusion = True, wait_for_finalization = False, prompt = False)

      Removes a specified amount of stake from a single hotkey account. This function is critical for adjusting
      individual neuron stakes within the Bittensor network.

      :param wallet: The wallet associated with the neuron from which the stake is being removed.
      :type wallet: bittensor.wallet
      :param proposal_hash: The hash of the proposal being voted on.
      :type proposal_hash: str
      :param proposal_idx: The index of the proposal being voted on.
      :type proposal_idx: int
      :param vote: The vote to be cast (True for yes, False for no).
      :type vote: bool
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional

      :returns: ``True`` if the unstaking process is successful, False otherwise.
      :rtype: bool

      This function supports flexible stake management, allowing neurons to adjust their network participation
      and potential reward accruals.



   .. py:method:: is_senate_member(hotkey_ss58, block = None)

      Checks if a given neuron (identified by its hotkey SS58 address) is a member of the Bittensor senate.
      The senate is a key governance body within the Bittensor network, responsible for overseeing and
      approving various network operations and proposals.

      :param hotkey_ss58: The ``SS58`` address of the neuron's hotkey.
      :type hotkey_ss58: str
      :param block: The blockchain block number at which to check senate membership.
      :type block: Optional[int]

      :returns: ``True`` if the neuron is a senate member at the given block, False otherwise.
      :rtype: bool

      This function is crucial for understanding the governance dynamics of the Bittensor network and for
      identifying the neurons that hold decision-making power within the network.



   .. py:method:: get_vote_data(proposal_hash, block = None)

      Retrieves the voting data for a specific proposal on the Bittensor blockchain. This data includes
      information about how senate members have voted on the proposal.

      :param proposal_hash: The hash of the proposal for which voting data is requested.
      :type proposal_hash: str
      :param block: The blockchain block number to query the voting data.
      :type block: Optional[int]

      :returns: An object containing the proposal's voting data, or ``None`` if not found.
      :rtype: Optional[ProposalVoteData]

      This function is important for tracking and understanding the decision-making processes within
      the Bittensor network, particularly how proposals are received and acted upon by the governing body.



   .. py:attribute:: get_proposal_vote_data


   .. py:method:: get_senate_members(block = None)

      Retrieves the list of current senate members from the Bittensor blockchain. Senate members are
      responsible for governance and decision-making within the network.

      :param block: The blockchain block number at which to retrieve the senate members.
      :type block: Optional[int]

      :returns: A list of ``SS58`` addresses of current senate members, or ``None`` if not available.
      :rtype: Optional[List[str]]

      Understanding the composition of the senate is key to grasping the governance structure and
      decision-making authority within the Bittensor network.



   .. py:method:: get_proposal_call_data(proposal_hash, block = None)

      Retrieves the call data of a specific proposal on the Bittensor blockchain. This data provides
      detailed information about the proposal, including its purpose and specifications.

      :param proposal_hash: The hash of the proposal.
      :type proposal_hash: str
      :param block: The blockchain block number at which to query the proposal call data.
      :type block: Optional[int]

      :returns: An object containing the proposal's call data, or ``None`` if not found.
      :rtype: Optional[GenericCall]

      This function is crucial for analyzing the types of proposals made within the network and the
      specific changes or actions they intend to implement or address.



   .. py:method:: get_proposal_hashes(block = None)

      Retrieves the list of proposal hashes currently present on the Bittensor blockchain. Each hash
      uniquely identifies a proposal made within the network.

      :param block: The blockchain block number to query the proposal hashes.
      :type block: Optional[int]

      :returns: A list of proposal hashes, or ``None`` if not available.
      :rtype: Optional[List[str]]

      This function enables tracking and reviewing the proposals made in the network, offering insights
      into the active governance and decision-making processes.



   .. py:method:: get_proposals(block = None)

      Retrieves all active proposals on the Bittensor blockchain, along with their call and voting data.
      This comprehensive view allows for a thorough understanding of the proposals and their reception
      by the senate.

      :param block: The blockchain block number to query the proposals.
      :type block: Optional[int]

      :returns:

                A dictionary mapping
                    proposal hashes to their corresponding call and vote data, or ``None`` if not available.
      :rtype: Optional[Dict[str, Tuple[bittensor.ProposalCallData, bittensor.ProposalVoteData]]]

      This function is integral for analyzing the governance activity on the Bittensor network,
      providing a holistic view of the proposals and their impact or potential changes within the network.



   .. py:method:: root_register(wallet, wait_for_inclusion = False, wait_for_finalization = True, prompt = False)

      Registers the neuron associated with the wallet on the root network. This process is integral for
      participating in the highest layer of decision-making and governance within the Bittensor network.

      :param wallet: The wallet associated with the neuron to be registered on the root network.
      :type wallet: bittensor.wallet
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional

      :returns: ``True`` if the registration on the root network is successful, False otherwise.
      :rtype: bool

      This function enables neurons to engage in the most critical and influential aspects of the network's
      governance, signifying a high level of commitment and responsibility in the Bittensor ecosystem.



   .. py:method:: _do_root_register(wallet, wait_for_inclusion = False, wait_for_finalization = True)


   .. py:method:: root_set_weights(wallet, netuids, weights, version_key = 0, wait_for_inclusion = False, wait_for_finalization = False, prompt = False)

      Sets the weights for neurons on the root network. This action is crucial for defining the influence
      and interactions of neurons at the root level of the Bittensor network.

      :param wallet: The wallet associated with the neuron setting the weights.
      :type wallet: bittensor.wallet
      :param netuids: The list of neuron UIDs for which weights are
                      being set.
      :type netuids: Union[NDArray[np.int64], torch.LongTensor, list]
      :param weights: The corresponding weights to be set for each
                      UID.
      :type weights: Union[NDArray[np.float32], torch.FloatTensor, list]
      :param version_key: Version key for compatibility with the network.
      :type version_key: int, optional
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional

      :returns: ``True`` if the setting of root-level weights is successful, False otherwise.
      :rtype: bool

      This function plays a pivotal role in shaping the root network's collective intelligence and decision-making
      processes, reflecting the principles of decentralized governance and collaborative learning in Bittensor.



   .. py:method:: _do_set_root_weights(wallet, uids, vals, netuid = 0, version_key = bittensor.__version_as_int__, wait_for_inclusion = False, wait_for_finalization = False)

      Internal method to send a transaction to the Bittensor blockchain, setting weights
      for specified neurons on root. This method constructs and submits the transaction, handling
      retries and blockchain communication.

      :param wallet: The wallet associated with the neuron setting the weights.
      :type wallet: bittensor.wallet
      :param uids: List of neuron UIDs for which weights are being set.
      :type uids: List[int]
      :param vals: List of weight values corresponding to each UID.
      :type vals: List[int]
      :param netuid: Unique identifier for the network.
      :type netuid: int
      :param version_key: Version key for compatibility with the network.
      :type version_key: int, optional
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional

      :returns: A tuple containing a success flag and an optional error message.
      :rtype: Tuple[bool, Optional[str]]

      This method is vital for the dynamic weighting mechanism in Bittensor, where neurons adjust their
      trust in other neurons based on observed performance and contributions on the root network.



   .. py:method:: query_identity(key, block = None)

      Queries the identity of a neuron on the Bittensor blockchain using the given key. This function retrieves
      detailed identity information about a specific neuron, which is a crucial aspect of the network's decentralized
      identity and governance system.

      .. note::

         See the `Bittensor CLI documentation <https://docs.bittensor.com/reference/btcli>`_ for supported identity
         parameters.

      :param key: The key used to query the neuron's identity, typically the neuron's ``SS58`` address.
      :type key: str
      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int]

      :returns: An object containing the identity information of the neuron if found, ``None`` otherwise.
      :rtype: result (dict)

      The identity information can include various attributes such as the neuron's stake, rank, and other
      network-specific details, providing insights into the neuron's role and status within the Bittensor network.



   .. py:method:: update_identity(wallet, identified = None, params = None, wait_for_inclusion = True, wait_for_finalization = False)

      Updates the identity of a neuron on the Bittensor blockchain. This function allows neurons to modify their
      identity attributes, reflecting changes in their roles, stakes, or other network-specific parameters.

      .. note::

         See the `Bittensor CLI documentation <https://docs.bittensor.com/reference/btcli>`_ for supported identity
         parameters.

      :param wallet: The wallet associated with the neuron whose identity is being updated.
      :type wallet: bittensor.wallet
      :param identified: The identified ``SS58`` address of the neuron. Defaults to the wallet's coldkey
                         address.
      :type identified: str, optional
      :param params: A dictionary of parameters to update in the neuron's identity.
      :type params: dict, optional
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional

      :returns: ``True`` if the identity update is successful, False otherwise.
      :rtype: bool

      This function plays a vital role in maintaining the accuracy and currency of neuron identities in the
      Bittensor network, ensuring that the network's governance and consensus mechanisms operate effectively.



   .. py:method:: commit(wallet, netuid, data)

      Commits arbitrary data to the Bittensor network by publishing metadata.

      :param wallet: The wallet associated with the neuron committing the data.
      :type wallet: bittensor.wallet
      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param data: The data to be committed to the network.
      :type data: str



   .. py:method:: get_commitment(netuid, uid, block = None)

      Retrieves the on-chain commitment for a specific neuron in the Bittensor network.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param uid: The unique identifier of the neuron.
      :type uid: int
      :param block: The block number to retrieve the commitment from. If None, the latest block
                    is used. Default is ``None``.
      :type block: Optional[int]

      :returns: The commitment data as a string.
      :rtype: str



   .. py:method:: query_subtensor(name, block = None, params = None)

      Queries named storage from the Subtensor module on the Bittensor blockchain. This function is used to retrieve
      specific data or parameters from the blockchain, such as stake, rank, or other neuron-specific attributes.

      :param name: The name of the storage function to query.
      :type name: str
      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int]
      :param params: A list of parameters to pass to the query function.
      :type params: Optional[List[object]], optional

      :returns: An object containing the requested data.
      :rtype: query_response (ScaleType)

      This query function is essential for accessing detailed information about the network and its neurons,
      providing valuable insights into the state and dynamics of the Bittensor ecosystem.



   .. py:method:: query_map_subtensor(name, block = None, params = None)

      Queries map storage from the Subtensor module on the Bittensor blockchain. This function is designed to
      retrieve a map-like data structure, which can include various neuron-specific details or network-wide
      attributes.

      :param name: The name of the map storage function to query.
      :type name: str
      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int]
      :param params: A list of parameters to pass to the query function.
      :type params: Optional[List[object]], optional

      :returns: An object containing the map-like data structure, or ``None`` if not found.
      :rtype: QueryMapResult

      This function is particularly useful for analyzing and understanding complex network structures and
      relationships within the Bittensor ecosystem, such as inter-neuronal connections and stake distributions.



   .. py:method:: query_constant(module_name, constant_name, block = None)

      Retrieves a constant from the specified module on the Bittensor blockchain. This function is used to
      access fixed parameters or values defined within the blockchain's modules, which are essential for
      understanding the network's configuration and rules.

      :param module_name: The name of the module containing the constant.
      :type module_name: str
      :param constant_name: The name of the constant to retrieve.
      :type constant_name: str
      :param block: The blockchain block number at which to query the constant.
      :type block: Optional[int]

      :returns: The value of the constant if found, ``None`` otherwise.
      :rtype: Optional[ScaleType]

      Constants queried through this function can include critical network parameters such as inflation rates,
      consensus rules, or validation thresholds, providing a deeper understanding of the Bittensor network's
      operational parameters.



   .. py:method:: query_module(module, name, block = None, params = None)

      Queries any module storage on the Bittensor blockchain with the specified parameters and block number.
      This function is a generic query interface that allows for flexible and diverse data retrieval from
      various blockchain modules.

      :param module: The name of the module from which to query data.
      :type module: str
      :param name: The name of the storage function within the module.
      :type name: str
      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int]
      :param params: A list of parameters to pass to the query function.
      :type params: Optional[List[object]], optional

      :returns: An object containing the requested data if found, ``None`` otherwise.
      :rtype: Optional[ScaleType]

      This versatile query function is key to accessing a wide range of data and insights from different
      parts of the Bittensor blockchain, enhancing the understanding and analysis of the network's state and dynamics.



   .. py:method:: query_map(module, name, block = None, params = None)

      Queries map storage from any module on the Bittensor blockchain. This function retrieves data structures
      that represent key-value mappings, essential for accessing complex and structured data within the blockchain
      modules.

      :param module: The name of the module from which to query the map storage.
      :type module: str
      :param name: The specific storage function within the module to query.
      :type name: str
      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int]
      :param params: Parameters to be passed to the query.
      :type params: Optional[List[object]], optional

      :returns: A data structure representing the map storage if found, ``None`` otherwise.
      :rtype: result (QueryMapResult)

      This function is particularly useful for retrieving detailed and structured data from various blockchain
      modules, offering insights into the network's state and the relationships between its different components.



   .. py:method:: state_call(method, data, block = None)

      Makes a state call to the Bittensor blockchain, allowing for direct queries of the blockchain's state.
      This function is typically used for advanced queries that require specific method calls and data inputs.

      :param method: The method name for the state call.
      :type method: str
      :param data: The data to be passed to the method.
      :type data: str
      :param block: The blockchain block number at which to perform the state call.
      :type block: Optional[int]

      :returns: The result of the rpc call.
      :rtype: result (Dict[Any, Any])

      The state call function provides a more direct and flexible way of querying blockchain data,
      useful for specific use cases where standard queries are insufficient.



   .. py:method:: query_runtime_api(runtime_api, method, params, block = None)

      Queries the runtime API of the Bittensor blockchain, providing a way to interact with the underlying
      runtime and retrieve data encoded in Scale Bytes format. This function is essential for advanced users
      who need to interact with specific runtime methods and decode complex data types.

      :param runtime_api: The name of the runtime API to query.
      :type runtime_api: str
      :param method: The specific method within the runtime API to call.
      :type method: str
      :param params: The parameters to pass to the method call.
      :type params: Optional[List[ParamWithTypes]], optional
      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int]

      :returns: The Scale Bytes encoded result from the runtime API call, or ``None`` if the call fails.
      :rtype: Optional[bytes]

      This function enables access to the deeper layers of the Bittensor blockchain, allowing for detailed
      and specific interactions with the network's runtime environment.



   .. py:method:: _encode_params(call_definition, params)

      Returns a hex encoded string of the params using their types.



   .. py:method:: _get_hyperparameter(param_name, netuid, block = None)

      Retrieves a specified hyperparameter for a specific subnet.

      :param param_name: The name of the hyperparameter to retrieve.
      :type param_name: str
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]

      :returns:

                The value of the specified hyperparameter if the subnet exists, ``None``
                    otherwise.
      :rtype: Optional[Union[int, float]]



   .. py:method:: rho(netuid, block = None)

      Retrieves the 'Rho' hyperparameter for a specified subnet within the Bittensor network. 'Rho' represents the
      global inflation rate, which directly influences the network's token emission rate and economic model.

      .. note:: This is currently fixed such that the Bittensor blockchain emmits 7200 Tao per day.

      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number at which to query the parameter.
      :type block: Optional[int]

      :returns: The value of the 'Rho' hyperparameter if the subnet exists, ``None`` otherwise.
      :rtype: Optional[int]

      Mathematical Context:
          Rho (p) is calculated based on the network's target inflation and actual neuron staking.
          It adjusts the emission rate of the TAO token to balance the network's economy and dynamics.
          The formula for Rho is defined as: p = (Staking_Target / Staking_Actual) * Inflation_Target.
          Here, Staking_Target and Staking_Actual represent the desired and actual total stakes in the network,
          while Inflation_Target is the predefined inflation rate goal.

      'Rho' is essential for understanding the network's economic dynamics, affecting the reward distribution
      and incentive structures across the network's neurons.



   .. py:method:: kappa(netuid, block = None)

      Retrieves the 'Kappa' hyperparameter for a specified subnet. 'Kappa' is a critical parameter in
      the Bittensor network that controls the distribution of stake weights among neurons, impacting their
      rankings and incentive allocations.

      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]

      :returns: The value of the 'Kappa' hyperparameter if the subnet exists, None otherwise.
      :rtype: Optional[float]

      Mathematical Context:
          Kappa (κ) is used in the calculation of neuron ranks, which determine their share of network incentives.
          It is derived from the softmax function applied to the inter-neuronal weights set by each neuron.
          The formula for Kappa is: κ_i = exp(w_i) / Σ(exp(w_j)), where w_i represents the weight set by neuron i,
          and the denominator is the sum of exponential weights set by all neurons.
          This mechanism ensures a normalized and probabilistic distribution of ranks based on relative weights.

      Understanding 'Kappa' is crucial for analyzing stake dynamics and the consensus mechanism within the network,
      as it plays a significant role in neuron ranking and incentive allocation processes.



   .. py:method:: difficulty(netuid, block = None)

      Retrieves the 'Difficulty' hyperparameter for a specified subnet in the Bittensor network.
      This parameter is instrumental in determining the computational challenge required for neurons
      to participate in consensus and validation processes.

      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]

      :returns: The value of the 'Difficulty' hyperparameter if the subnet exists, ``None`` otherwise.
      :rtype: Optional[int]

      The 'Difficulty' parameter directly impacts the network's security and integrity by setting the
      computational effort required for validating transactions and participating in the network's consensus
      mechanism.



   .. py:method:: recycle(netuid, block = None)

      Retrieves the 'Burn' hyperparameter for a specified subnet. The 'Burn' parameter represents the
      amount of Tao that is effectively recycled within the Bittensor network.

      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]

      :returns: The value of the 'Burn' hyperparameter if the subnet exists, None otherwise.
      :rtype: Optional[Balance]

      Understanding the 'Burn' rate is essential for analyzing the network registration usage, particularly
      how it is correlated with user activity and the overall cost of participation in a given subnet.



   .. py:method:: immunity_period(netuid, block = None)

      Retrieves the 'ImmunityPeriod' hyperparameter for a specific subnet. This parameter defines the
      duration during which new neurons are protected from certain network penalties or restrictions.

      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]

      :returns: The value of the 'ImmunityPeriod' hyperparameter if the subnet exists, ``None`` otherwise.
      :rtype: Optional[int]

      The 'ImmunityPeriod' is a critical aspect of the network's governance system, ensuring that new
      participants have a grace period to establish themselves and contribute to the network without facing
      immediate punitive actions.



   .. py:method:: validator_batch_size(netuid, block = None)

      Returns network ValidatorBatchSize hyper parameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If None, the latest block
                    is used. Default is ``None``.
      :type block: Optional[int]

      :returns:

                The value of the ValidatorBatchSize hyperparameter, or None if the subnetwork does not exist
                    or the parameter is not found.
      :rtype: Optional[int]



   .. py:method:: validator_prune_len(netuid, block = None)

      Returns network ValidatorPruneLen hyper parameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If None, the latest block
      :type block: Optional[int]
      :param is used. Default is ``None``.:

      :returns: The value of the ValidatorPruneLen hyperparameter, or None if the subnetwork does not exist
                or the parameter is not found.
      :rtype: Optional[int]



   .. py:method:: validator_logits_divergence(netuid, block = None)

      Returns network ValidatorLogitsDivergence hyper parameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If None, the latest block
      :type block: Optional[int]
      :param is used. Default is ``None``.:

      :returns: The value of the ValidatorLogitsDivergence hyperparameter, or None if the subnetwork does
                not exist or the parameter is not found.
      :rtype: Optional[float]



   .. py:method:: validator_sequence_length(netuid, block = None)

      Returns network ValidatorSequenceLength hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                The value of the ValidatorSequenceLength hyperparameter, or ``None`` if the subnetwork does
                    not exist or the parameter is not found.
      :rtype: Optional[int]



   .. py:method:: validator_epochs_per_reset(netuid, block = None)

      Returns network ValidatorEpochsPerReset hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                The value of the ValidatorEpochsPerReset hyperparameter, or ``None`` if the subnetwork does
                    not exist or the parameter is not found.
      :rtype: Optional[int]



   .. py:method:: validator_epoch_length(netuid, block = None)

      Returns network ValidatorEpochLen hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                The value of the ValidatorEpochLen hyperparameter, or ``None`` if the subnetwork does not
                    exist or the parameter is not found.
      :rtype: Optional[int]



   .. py:method:: validator_exclude_quantile(netuid, block = None)

      Returns network ValidatorExcludeQuantile hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If ``None``, the latest block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns: The value of the ValidatorExcludeQuantile hyperparameter, or ``None`` if the subnetwork does not exist or the parameter is not found.
      :rtype: Optional[float]



   .. py:method:: max_allowed_validators(netuid, block = None)

      Returns network ValidatorExcludeQuantile hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                The value of the ValidatorExcludeQuantile hyperparameter, or ``None`` if the subnetwork
                    does not exist or the parameter is not found.
      :rtype: Optional[float]



   .. py:method:: min_allowed_weights(netuid, block = None)

      Returns network MinAllowedWeights hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                The value of the MinAllowedWeights hyperparameter, or ``None`` if the subnetwork does not
                    exist or the parameter is not found.
      :rtype: Optional[int]



   .. py:method:: max_weight_limit(netuid, block = None)

      Returns network MaxWeightsLimit hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                The value of the MaxWeightsLimit hyperparameter, or ``None`` if the subnetwork does not
                    exist or the parameter is not found.
      :rtype: Optional[float]



   .. py:method:: adjustment_alpha(netuid, block = None)

      Returns network AdjustmentAlpha hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                The value of the AdjustmentAlpha hyperparameter, or ``None`` if the subnetwork does not
                    exist or the parameter is not found.
      :rtype: Optional[float]



   .. py:method:: bonds_moving_avg(netuid, block = None)

      Returns network BondsMovingAverage hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                The value of the BondsMovingAverage hyperparameter, or ``None`` if the subnetwork does not
                    exist or the parameter is not found.
      :rtype: Optional[float]



   .. py:method:: scaling_law_power(netuid, block = None)

      Returns network ScalingLawPower hyper parameter



   .. py:method:: synergy_scaling_law_power(netuid, block = None)

      Returns network ScalingLawPower hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                The value of the ScalingLawPower hyperparameter, or ``None`` if the subnetwork does not
                    exist or the parameter is not found.
      :rtype: Optional[float]



   .. py:method:: subnetwork_n(netuid, block = None)

      Returns network SubnetworkN hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                The value of the SubnetworkN hyperparameter, or ``None`` if the subnetwork does not
                    exist or the parameter is not found.
      :rtype: Optional[int]



   .. py:method:: max_n(netuid, block = None)

      Returns network MaxAllowedUids hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                The value of the MaxAllowedUids hyperparameter, or ``None`` if the subnetwork does not
                    exist or the parameter is not found.
      :rtype: Optional[int]



   .. py:method:: blocks_since_epoch(netuid, block = None)

      Returns network BlocksSinceEpoch hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                The value of the BlocksSinceEpoch hyperparameter, or ``None`` if the subnetwork does not
                    exist or the parameter is not found.
      :rtype: Optional[int]



   .. py:method:: blocks_since_last_update(netuid, uid)

      Returns the number of blocks since the last update for a specific UID in the subnetwork.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param uid: The unique identifier of the neuron.
      :type uid: int

      :returns:

                The number of blocks since the last update, or ``None`` if the subnetwork or UID does not
                    exist.
      :rtype: Optional[int]



   .. py:method:: weights_rate_limit(netuid)

      Returns network WeightsSetRateLimit hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int

      :returns:

                The value of the WeightsSetRateLimit hyperparameter, or ``None`` if the subnetwork does not
                    exist or the parameter is not found.
      :rtype: Optional[int]



   .. py:method:: tempo(netuid, block = None)

      Returns network Tempo hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                The value of the Tempo hyperparameter, or ``None`` if the subnetwork does not
                    exist or the parameter is not found.
      :rtype: Optional[int]



   .. py:method:: get_total_stake_for_hotkey(ss58_address, block = None)

      Returns the total stake held on a hotkey including delegative.

      :param ss58_address: The SS58 address of the hotkey.
      :type ss58_address: str
      :param block: The block number to retrieve the stake from. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                The total stake held on the hotkey, or ``None`` if the hotkey does not
                    exist or the stake is not found.
      :rtype: Optional[Balance]



   .. py:method:: get_total_stake_for_coldkey(ss58_address, block = None)

      Returns the total stake held on a coldkey.

      :param ss58_address: The SS58 address of the coldkey.
      :type ss58_address: str
      :param block: The block number to retrieve the stake from. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                The total stake held on the coldkey, or ``None`` if the coldkey does not
                    exist or the stake is not found.
      :rtype: Optional[Balance]



   .. py:method:: get_stake_for_coldkey_and_hotkey(hotkey_ss58, coldkey_ss58, block = None)

      Returns the stake under a coldkey - hotkey pairing.

      :param hotkey_ss58: The SS58 address of the hotkey.
      :type hotkey_ss58: str
      :param coldkey_ss58: The SS58 address of the coldkey.
      :type coldkey_ss58: str
      :param block: The block number to retrieve the stake from. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                The stake under the coldkey - hotkey pairing, or ``None`` if the pairing does not
                    exist or the stake is not found.
      :rtype: Optional[Balance]



   .. py:method:: get_stake(hotkey_ss58, block = None)

      Returns a list of stake tuples (coldkey, balance) for each delegating coldkey including the owner.

      :param hotkey_ss58: The SS58 address of the hotkey.
      :type hotkey_ss58: str
      :param block: The block number to retrieve the stakes from. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                A list of tuples, each containing a coldkey SS58 address and the corresponding
                    balance staked by that coldkey.
      :rtype: List[Tuple[str, Balance]]



   .. py:method:: does_hotkey_exist(hotkey_ss58, block = None)

      Returns true if the hotkey is known by the chain and there are accounts.

      :param hotkey_ss58: The SS58 address of the hotkey.
      :type hotkey_ss58: str
      :param block: The block number to check the hotkey against. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns: ``True`` if the hotkey is known by the chain and there are accounts, ``False`` otherwise.
      :rtype: bool



   .. py:method:: get_hotkey_owner(hotkey_ss58, block = None)

      Returns the coldkey owner of the passed hotkey.

      :param hotkey_ss58: The SS58 address of the hotkey.
      :type hotkey_ss58: str
      :param block: The block number to check the hotkey owner against. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                The SS58 address of the coldkey owner, or ``None`` if the hotkey does not exist or the owner
                    is not found.
      :rtype: Optional[str]



   .. py:method:: get_axon_info(netuid, hotkey_ss58, block = None)

      Returns the axon information for this hotkey account.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param hotkey_ss58: The SS58 address of the hotkey.
      :type hotkey_ss58: str
      :param block: The block number to retrieve the axon information from. If ``None``, the
                    latest block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                An AxonInfo object containing the axon information, or ``None`` if the axon information
                    is not found.
      :rtype: Optional[AxonInfo]



   .. py:method:: get_prometheus_info(netuid, hotkey_ss58, block = None)

      Returns the prometheus information for this hotkey account.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param hotkey_ss58: The SS58 address of the hotkey.
      :type hotkey_ss58: str
      :param block: The block number to retrieve the prometheus information from. If ``None``,
                    the latest block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                A PrometheusInfo object containing the prometheus information, or ``None`` if the
                    prometheus information is not found.
      :rtype: Optional[PrometheusInfo]



   .. py:property:: block
      :type: int

      Returns current chain block.
      :returns:     Current chain block.
      :rtype: block (int)


   .. py:method:: total_issuance(block = None)

      Retrieves the total issuance of the Bittensor network's native token (Tao) as of a specific
      blockchain block. This represents the total amount of currency that has been issued or mined on the network.

      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int], optional

      :returns: The total issuance of TAO, represented as a Balance object.
      :rtype: Balance

      The total issuance is a key economic indicator in the Bittensor network, reflecting the overall supply
      of the currency and providing insights into the network's economic health and inflationary trends.



   .. py:method:: total_stake(block = None)

      Retrieves the total amount of TAO staked on the Bittensor network as of a specific blockchain block.
      This represents the cumulative stake across all neurons in the network, indicating the overall level
      of participation and investment by the network's participants.

      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int], optional

      :returns: The total amount of TAO staked on the network, represented as a Balance object.
      :rtype: Balance

      The total stake is an important metric for understanding the network's security, governance dynamics,
      and the level of commitment by its participants. It is also a critical factor in the network's
      consensus and incentive mechanisms.



   .. py:method:: serving_rate_limit(netuid, block = None)

      Retrieves the serving rate limit for a specific subnet within the Bittensor network.
      This rate limit determines how often you can change your node's IP address on the blockchain. Expressed in
      number of blocks. Applies to both subnet validator and subnet miner nodes. Used when you move your node to a new
      machine.

      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int], optional

      :returns: The serving rate limit of the subnet if it exists, ``None`` otherwise.
      :rtype: Optional[int]

      The serving rate limit is a crucial parameter for maintaining network efficiency and preventing
      overuse of resources by individual neurons. It helps ensure a balanced distribution of service
      requests across the network.



   .. py:method:: tx_rate_limit(block = None)

      Retrieves the transaction rate limit for the Bittensor network as of a specific blockchain block.
      This rate limit sets the maximum number of transactions that can be processed within a given time frame.

      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int], optional

      :returns: The transaction rate limit of the network, None if not available.
      :rtype: Optional[int]

      The transaction rate limit is an essential parameter for ensuring the stability and scalability
      of the Bittensor network. It helps in managing network load and preventing congestion, thereby
      maintaining efficient and timely transaction processing.



   .. py:method:: subnet_exists(netuid, block = None)

      Checks if a subnet with the specified unique identifier (netuid) exists within the Bittensor network.

      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number at which to check the subnet's existence.
      :type block: Optional[int], optional

      :returns: ``True`` if the subnet exists, False otherwise.
      :rtype: bool

      This function is critical for verifying the presence of specific subnets in the network,
      enabling a deeper understanding of the network's structure and composition.



   .. py:method:: get_all_subnet_netuids(block = None)

      Retrieves the list of all subnet unique identifiers (netuids) currently present in the Bittensor network.

      :param block: The blockchain block number at which to retrieve the subnet netuids.
      :type block: Optional[int], optional

      :returns: A list of subnet netuids.
      :rtype: List[int]

      This function provides a comprehensive view of the subnets within the Bittensor network,
      offering insights into its diversity and scale.



   .. py:method:: get_total_subnets(block = None)

      Retrieves the total number of subnets within the Bittensor network as of a specific blockchain block.

      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: The total number of subnets in the network.
      :rtype: int

      Understanding the total number of subnets is essential for assessing the network's growth and
      the extent of its decentralized infrastructure.



   .. py:method:: get_subnet_modality(netuid, block = None)

      Returns the NetworkModality hyperparameter for a specific subnetwork.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If ``None``, the latest block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns: The value of the NetworkModality hyperparameter, or ``None`` if the subnetwork does not exist or the parameter is not found.
      :rtype: Optional[int]



   .. py:method:: get_subnet_connection_requirement(netuid_0, netuid_1, block = None)


   .. py:method:: get_emission_value_by_subnet(netuid, block = None)

      Retrieves the emission value of a specific subnet within the Bittensor network. The emission value
      represents the rate at which the subnet emits or distributes the network's native token (Tao).

      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: The emission value of the subnet, None if not available.
      :rtype: Optional[float]

      The emission value is a critical economic parameter, influencing the incentive distribution and
      reward mechanisms within the subnet.



   .. py:method:: get_subnet_connection_requirements(netuid, block = None)

      Retrieves the connection requirements for a specific subnet within the Bittensor network. This
      function provides details on the criteria that must be met for neurons to connect to the subnet.

      :param netuid: The network UID of the subnet to query.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: A dictionary detailing the connection requirements for the subnet.
      :rtype: Dict[str, int]

      Understanding these requirements is crucial for neurons looking to participate in or interact
      with specific subnets, ensuring compliance with their connection standards.



   .. py:method:: get_subnets(block = None)

      Retrieves a list of all subnets currently active within the Bittensor network. This function
      provides an overview of the various subnets and their identifiers.

      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: A list of network UIDs representing each active subnet.
      :rtype: List[int]

      This function is valuable for understanding the network's structure and the diversity of subnets
      available for neuron participation and collaboration.



   .. py:method:: get_all_subnets_info(block = None)

      Retrieves detailed information about all subnets within the Bittensor network. This function
      provides comprehensive data on each subnet, including its characteristics and operational parameters.

      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: A list of SubnetInfo objects, each containing detailed information about a subnet.
      :rtype: List[SubnetInfo]

      Gaining insights into the subnets' details assists in understanding the network's composition,
      the roles of different subnets, and their unique features.



   .. py:method:: get_subnet_info(netuid, block = None)

      Retrieves detailed information about a specific subnet within the Bittensor network. This function
      provides key data on the subnet, including its operational parameters and network status.

      :param netuid: The network UID of the subnet to query.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: Detailed information about the subnet, or ``None`` if not found.
      :rtype: Optional[SubnetInfo]

      This function is essential for neurons and stakeholders interested in the specifics of a particular
      subnet, including its governance, performance, and role within the broader network.



   .. py:method:: get_subnet_hyperparameters(netuid, block = None)

      Retrieves the hyperparameters for a specific subnet within the Bittensor network. These hyperparameters
      define the operational settings and rules governing the subnet's behavior.

      :param netuid: The network UID of the subnet to query.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: The subnet's hyperparameters, or ``None`` if not available.
      :rtype: Optional[SubnetHyperparameters]

      Understanding the hyperparameters is crucial for comprehending how subnets are configured and
      managed, and how they interact with the network's consensus and incentive mechanisms.



   .. py:method:: get_subnet_owner(netuid, block = None)

      Retrieves the owner's address of a specific subnet within the Bittensor network. The owner is
      typically the entity responsible for the creation and maintenance of the subnet.

      :param netuid: The network UID of the subnet to query.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: The SS58 address of the subnet's owner, or ``None`` if not available.
      :rtype: Optional[str]

      Knowing the subnet owner provides insights into the governance and operational control of the subnet,
      which can be important for decision-making and collaboration within the network.



   .. py:method:: is_hotkey_delegate(hotkey_ss58, block = None)

      Determines whether a given hotkey (public key) is a delegate on the Bittensor network. This function
      checks if the neuron associated with the hotkey is part of the network's delegation system.

      :param hotkey_ss58: The SS58 address of the neuron's hotkey.
      :type hotkey_ss58: str
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: ``True`` if the hotkey is a delegate, ``False`` otherwise.
      :rtype: bool

      Being a delegate is a significant status within the Bittensor network, indicating a neuron's
      involvement in consensus and governance processes.



   .. py:method:: get_delegate_take(hotkey_ss58, block = None)

      Retrieves the delegate 'take' percentage for a neuron identified by its hotkey. The 'take'
      represents the percentage of rewards that the delegate claims from its nominators' stakes.

      :param hotkey_ss58: The ``SS58`` address of the neuron's hotkey.
      :type hotkey_ss58: str
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: The delegate take percentage, None if not available.
      :rtype: Optional[float]

      The delegate take is a critical parameter in the network's incentive structure, influencing
      the distribution of rewards among neurons and their nominators.



   .. py:method:: get_nominators_for_hotkey(hotkey_ss58, block = None)

      Retrieves a list of nominators and their stakes for a neuron identified by its hotkey.
      Nominators are neurons that stake their tokens on a delegate to support its operations.

      :param hotkey_ss58: The ``SS58`` address of the neuron's hotkey.
      :type hotkey_ss58: str
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: A list of tuples containing each nominator's address and staked amount or 0.
      :rtype: Union[List[Tuple[str, Balance]], int]

      This function provides insights into the neuron's support network within the Bittensor ecosystem,
      indicating its trust and collaboration relationships.



   .. py:method:: get_delegate_by_hotkey(hotkey_ss58, block = None)

      Retrieves detailed information about a delegate neuron based on its hotkey. This function provides
      a comprehensive view of the delegate's status, including its stakes, nominators, and reward distribution.

      :param hotkey_ss58: The ``SS58`` address of the delegate's hotkey.
      :type hotkey_ss58: str
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: Detailed information about the delegate neuron, ``None`` if not found.
      :rtype: Optional[DelegateInfo]

      This function is essential for understanding the roles and influence of delegate neurons within
      the Bittensor network's consensus and governance structures.



   .. py:method:: get_delegates_lite(block = None)

      Retrieves a lighter list of all delegate neurons within the Bittensor network. This function provides an
      overview of the neurons that are actively involved in the network's delegation system.

      Analyzing the delegate population offers insights into the network's governance dynamics and the distribution
      of trust and responsibility among participating neurons.

      This is a lighter version of :func:`get_delegates`.

      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: A list of ``DelegateInfoLite`` objects detailing each delegate's characteristics.
      :rtype: List[DelegateInfoLite]



   .. py:method:: get_delegates(block = None)

      Retrieves a list of all delegate neurons within the Bittensor network. This function provides an overview of the
      neurons that are actively involved in the network's delegation system.

      Analyzing the delegate population offers insights into the network's governance dynamics and the distribution of
      trust and responsibility among participating neurons.

      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: A list of DelegateInfo objects detailing each delegate's characteristics.
      :rtype: List[DelegateInfo]



   .. py:method:: get_delegated(coldkey_ss58, block = None)

      Retrieves a list of delegates and their associated stakes for a given coldkey. This function
      identifies the delegates that a specific account has staked tokens on.

      :param coldkey_ss58: The ``SS58`` address of the account's coldkey.
      :type coldkey_ss58: str
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns:

                A list of tuples, each containing a delegate's information and staked
                    amount.
      :rtype: List[Tuple[DelegateInfo, Balance]]

      This function is important for account holders to understand their stake allocations and their
      involvement in the network's delegation and consensus mechanisms.



   .. py:method:: get_childkey_take(hotkey, netuid, block = None)

      Get the childkey take of a hotkey on a specific network.
      Args:
      - hotkey (str): The hotkey to search for.
      - netuid (int): The netuid to search for.
      - block (Optional[int]): Optional parameter specifying the block number. Defaults to None.

      Returns:
      - Optional[int]: The value of the "ChildkeyTake" if found, or None if any error occurs.



   .. py:method:: get_children(hotkey, netuid)

      Get the children of a hotkey on a specific network.
      :param hotkey: The hotkey to query.
      :type hotkey: str
      :param netuid: The network ID.
      :type netuid: int

      :returns: List of (proportion, child_address) tuples, or None if an error occurred.
      :rtype: list or None



   .. py:method:: get_parents(child_hotkey, netuid)

      Get the parents of a child hotkey on a specific network.
      :param child_hotkey: The child hotkey to query.
      :type child_hotkey: str
      :param netuid: The network ID.
      :type netuid: int

      :returns: List of (proportion, parent_address) tuples, or None if an error occurred.
      :rtype: list or None



   .. py:method:: get_stake_info_for_coldkey(coldkey_ss58, block = None)

      Retrieves stake information associated with a specific coldkey. This function provides details
      about the stakes held by an account, including the staked amounts and associated delegates.

      :param coldkey_ss58: The ``SS58`` address of the account's coldkey.
      :type coldkey_ss58: str
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: A list of StakeInfo objects detailing the stake allocations for the account.
      :rtype: List[StakeInfo]

      Stake information is vital for account holders to assess their investment and participation
      in the network's delegation and consensus processes.



   .. py:method:: get_stake_info_for_coldkeys(coldkey_ss58_list, block = None)

      Retrieves stake information for a list of coldkeys. This function aggregates stake data for multiple
      accounts, providing a collective view of their stakes and delegations.

      :param coldkey_ss58_list: A list of ``SS58`` addresses of the accounts' coldkeys.
      :type coldkey_ss58_list: List[str]
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: A dictionary mapping each coldkey to a list of its StakeInfo objects.
      :rtype: Dict[str, List[StakeInfo]]

      This function is useful for analyzing the stake distribution and delegation patterns of multiple
      accounts simultaneously, offering a broader perspective on network participation and investment strategies.



   .. py:method:: get_minimum_required_stake()

      Returns the minimum required stake for nominators in the Subtensor network.

      This method retries the substrate call up to three times with exponential backoff in case of failures.

      :returns: The minimum required stake as a Balance object.
      :rtype: Balance

      :raises Exception: If the substrate call fails after the maximum number of retries.



   .. py:method:: is_hotkey_registered_any(hotkey_ss58, block = None)

      Checks if a neuron's hotkey is registered on any subnet within the Bittensor network.

      :param hotkey_ss58: The ``SS58`` address of the neuron's hotkey.
      :type hotkey_ss58: str
      :param block: The blockchain block number at which to perform the check.
      :type block: Optional[int]

      :returns: ``True`` if the hotkey is registered on any subnet, False otherwise.
      :rtype: bool

      This function is essential for determining the network-wide presence and participation of a neuron.



   .. py:method:: is_hotkey_registered_on_subnet(hotkey_ss58, netuid, block = None)

      Checks if a neuron's hotkey is registered on a specific subnet within the Bittensor network.

      :param hotkey_ss58: The ``SS58`` address of the neuron's hotkey.
      :type hotkey_ss58: str
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number at which to perform the check.
      :type block: Optional[int]

      :returns: ``True`` if the hotkey is registered on the specified subnet, False otherwise.
      :rtype: bool

      This function helps in assessing the participation of a neuron in a particular subnet,
      indicating its specific area of operation or influence within the network.



   .. py:method:: is_hotkey_registered(hotkey_ss58, netuid = None, block = None)

      Determines whether a given hotkey (public key) is registered in the Bittensor network, either
      globally across any subnet or specifically on a specified subnet. This function checks the registration
      status of a neuron identified by its hotkey, which is crucial for validating its participation and
      activities within the network.

      :param hotkey_ss58: The SS58 address of the neuron's hotkey.
      :type hotkey_ss58: str
      :param netuid: The unique identifier of the subnet to check the registration. If ``None``, the
                     registration is checked across all subnets.
      :type netuid: Optional[int]
      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int]

      :returns:

                ``True`` if the hotkey is registered in the specified context (either any subnet or a specific
                    subnet), ``False`` otherwise.
      :rtype: bool

      This function is important for verifying the active status of neurons in the Bittensor network. It aids
      in understanding whether a neuron is eligible to participate in network processes such as consensus,
      validation, and incentive distribution based on its registration status.



   .. py:method:: get_uid_for_hotkey_on_subnet(hotkey_ss58, netuid, block = None)

      Retrieves the unique identifier (UID) for a neuron's hotkey on a specific subnet.

      :param hotkey_ss58: The ``SS58`` address of the neuron's hotkey.
      :type hotkey_ss58: str
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]

      :returns: The UID of the neuron if it is registered on the subnet, ``None`` otherwise.
      :rtype: Optional[int]

      The UID is a critical identifier within the network, linking the neuron's hotkey to its
      operational and governance activities on a particular subnet.



   .. py:method:: get_all_uids_for_hotkey(hotkey_ss58, block = None)

      Retrieves all unique identifiers (UIDs) associated with a given hotkey across different subnets
      within the Bittensor network. This function helps in identifying all the neuron instances that are
      linked to a specific hotkey.

      :param hotkey_ss58: The ``SS58`` address of the neuron's hotkey.
      :type hotkey_ss58: str
      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int]

      :returns: A list of UIDs associated with the given hotkey across various subnets.
      :rtype: List[int]

      This function is important for tracking a neuron's presence and activities across different
      subnets within the Bittensor ecosystem.



   .. py:method:: get_netuids_for_hotkey(hotkey_ss58, block = None)

      Retrieves a list of subnet UIDs (netuids) for which a given hotkey is a member. This function
      identifies the specific subnets within the Bittensor network where the neuron associated with
      the hotkey is active.

      :param hotkey_ss58: The ``SS58`` address of the neuron's hotkey.
      :type hotkey_ss58: str
      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int]

      :returns: A list of netuids where the neuron is a member.
      :rtype: List[int]



   .. py:method:: get_neuron_for_pubkey_and_subnet(hotkey_ss58, netuid, block = None)

      Retrieves information about a neuron based on its public key (hotkey SS58 address) and the specific
      subnet UID (netuid). This function provides detailed neuron information for a particular subnet within
      the Bittensor network.

      :param hotkey_ss58: The ``SS58`` address of the neuron's hotkey.
      :type hotkey_ss58: str
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int]

      :returns: Detailed information about the neuron if found, ``None`` otherwise.
      :rtype: Optional[NeuronInfo]

      This function is crucial for accessing specific neuron data and understanding its status, stake,
      and other attributes within a particular subnet of the Bittensor ecosystem.



   .. py:method:: get_all_neurons_for_pubkey(hotkey_ss58, block = None)

      Retrieves information about all neuron instances associated with a given public key (hotkey ``SS58``
      address) across different subnets of the Bittensor network. This function aggregates neuron data
      from various subnets to provide a comprehensive view of a neuron's presence and status within the network.

      :param hotkey_ss58: The ``SS58`` address of the neuron's hotkey.
      :type hotkey_ss58: str
      :param block: The blockchain block number for the query.
      :type block: Optional[int]

      :returns: A list of NeuronInfo objects detailing the neuron's presence across various subnets.
      :rtype: List[NeuronInfo]

      This function is valuable for analyzing a neuron's overall participation, influence, and
      contributions across the Bittensor network.



   .. py:method:: neuron_has_validator_permit(uid, netuid, block = None)

      Checks if a neuron, identified by its unique identifier (UID), has a validator permit on a specific
      subnet within the Bittensor network. This function determines whether the neuron is authorized to
      participate in validation processes on the subnet.

      :param uid: The unique identifier of the neuron.
      :type uid: int
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]

      :returns: ``True`` if the neuron has a validator permit, False otherwise.
      :rtype: Optional[bool]

      This function is essential for understanding a neuron's role and capabilities within a specific
      subnet, particularly regarding its involvement in network validation and governance.



   .. py:method:: neuron_for_wallet(wallet, netuid, block = None)

      Retrieves information about a neuron associated with a given wallet on a specific subnet.
      This function provides detailed data about the neuron's status, stake, and activities based on
      the wallet's hotkey address.

      :param wallet: The wallet associated with the neuron.
      :type wallet: bittensor.wallet
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int]

      :returns: Detailed information about the neuron if found, ``None`` otherwise.
      :rtype: Optional[NeuronInfo]

      This function is important for wallet owners to understand and manage their neuron's presence
      and activities within a particular subnet of the Bittensor network.



   .. py:method:: neuron_for_uid(uid, netuid, block = None)

      Retrieves detailed information about a specific neuron identified by its unique identifier (UID)
      within a specified subnet (netuid) of the Bittensor network. This function provides a comprehensive
      view of a neuron's attributes, including its stake, rank, and operational status.

      :param uid: The unique identifier of the neuron.
      :type uid: int
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: Detailed information about the neuron if found, ``None`` otherwise.
      :rtype: NeuronInfo

      This function is crucial for analyzing individual neurons' contributions and status within a specific
      subnet, offering insights into their roles in the network's consensus and validation mechanisms.



   .. py:method:: neurons(netuid, block = None)

      Retrieves a list of all neurons within a specified subnet of the Bittensor network. This function
      provides a snapshot of the subnet's neuron population, including each neuron's attributes and network
      interactions.

      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: A list of NeuronInfo objects detailing each neuron's characteristics in the subnet.
      :rtype: List[NeuronInfo]

      Understanding the distribution and status of neurons within a subnet is key to comprehending the
      network's decentralized structure and the dynamics of its consensus and governance processes.



   .. py:method:: neuron_for_uid_lite(uid, netuid, block = None)

      Retrieves a lightweight version of information about a neuron in a specific subnet, identified by
      its UID. The 'lite' version focuses on essential attributes such as stake and network activity.

      :param uid: The unique identifier of the neuron.
      :type uid: int
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: A simplified version of neuron information if found, ``None`` otherwise.
      :rtype: Optional[NeuronInfoLite]

      This function is useful for quick and efficient analyses of neuron status and activities within a
      subnet without the need for comprehensive data retrieval.



   .. py:method:: neurons_lite(netuid, block = None)

      Retrieves a list of neurons in a 'lite' format from a specific subnet of the Bittensor network.
      This function provides a streamlined view of the neurons, focusing on key attributes such as stake
      and network participation.

      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: A list of simplified neuron information for the subnet.
      :rtype: List[NeuronInfoLite]

      This function offers a quick overview of the neuron population within a subnet, facilitating
      efficient analysis of the network's decentralized structure and neuron dynamics.



   .. py:method:: metagraph(netuid, lite = True, block = None)

      Returns a synced metagraph for a specified subnet within the Bittensor network. The metagraph
      represents the network's structure, including neuron connections and interactions.

      :param netuid: The network UID of the subnet to query.
      :type netuid: int
      :param lite: If true, returns a metagraph using a lightweight sync (no weights, no bonds).
      :type lite: bool, default=True
      :param block: Block number for synchronization, or ``None`` for the latest block.
      :type block: Optional[int]

      :returns: The metagraph representing the subnet's structure and neuron relationships.
      :rtype: bittensor.Metagraph

      The metagraph is an essential tool for understanding the topology and dynamics of the Bittensor
      network's decentralized architecture, particularly in relation to neuron interconnectivity and consensus
          processes.



   .. py:method:: incentive(netuid, block = None)

      Retrieves the list of incentives for neurons within a specific subnet of the Bittensor network.
      This function provides insights into the reward distribution mechanisms and the incentives allocated
      to each neuron based on their contributions and activities.

      :param netuid: The network UID of the subnet to query.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]

      :returns: The list of incentives for neurons within the subnet, indexed by UID.
      :rtype: List[int]

      Understanding the incentive structure is crucial for analyzing the network's economic model and
      the motivational drivers for neuron participation and collaboration.



   .. py:method:: weights(netuid, block = None)

      Retrieves the weight distribution set by neurons within a specific subnet of the Bittensor network.
      This function maps each neuron's UID to the weights it assigns to other neurons, reflecting the
      network's trust and value assignment mechanisms.

      :param netuid: The network UID of the subnet to query.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]

      :returns: A list of tuples mapping each neuron's UID to its assigned weights.
      :rtype: List[Tuple[int, List[Tuple[int, int]]]]

      The weight distribution is a key factor in the network's consensus algorithm and the ranking of neurons,
      influencing their influence and reward allocation within the subnet.



   .. py:method:: bonds(netuid, block = None)

      Retrieves the bond distribution set by neurons within a specific subnet of the Bittensor network.
      Bonds represent the investments or commitments made by neurons in one another, indicating a level
      of trust and perceived value. This bonding mechanism is integral to the network's market-based approach
      to measuring and rewarding machine intelligence.

      :param netuid: The network UID of the subnet to query.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]

      :returns:

                A list of tuples mapping each neuron's UID to its bonds with other
                    neurons.
      :rtype: List[Tuple[int, List[Tuple[int, int]]]]

      Understanding bond distributions is crucial for analyzing the trust dynamics and market behavior
      within the subnet. It reflects how neurons recognize and invest in each other's intelligence and
      contributions, supporting diverse and niche systems within the Bittensor ecosystem.



   .. py:method:: get_subnet_burn_cost(block = None)

      Retrieves the burn cost for registering a new subnet within the Bittensor network. This cost
      represents the amount of Tao that needs to be locked or burned to establish a new subnet.

      :param block: The blockchain block number for the query.
      :type block: Optional[int]

      :returns: The burn cost for subnet registration.
      :rtype: int

      The subnet burn cost is an important economic parameter, reflecting the network's mechanisms for
      controlling the proliferation of subnets and ensuring their commitment to the network's long-term viability.



   .. py:method:: _do_delegation(wallet, delegate_ss58, amount, wait_for_inclusion = True, wait_for_finalization = False)

      Delegates a specified amount of stake to a delegate's hotkey.

      This method sends a transaction to add stake to a delegate's hotkey and retries the call up to three times
      with exponential backoff in case of failures.

      :param wallet: The wallet from which the stake will be delegated.
      :type wallet: bittensor.wallet
      :param delegate_ss58: The SS58 address of the delegate's hotkey.
      :type delegate_ss58: str
      :param amount: The amount of stake to be delegated.
      :type amount: Balance
      :param wait_for_inclusion: Whether to wait for the transaction to be included in a block. Default is ``True``.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Whether to wait for the transaction to be finalized. Default is ``False``.
      :type wait_for_finalization: bool, optional

      :returns: ``True`` if the delegation is successful, ``False`` otherwise.
      :rtype: bool



   .. py:method:: _do_undelegation(wallet, delegate_ss58, amount, wait_for_inclusion = True, wait_for_finalization = False)

      Removes a specified amount of stake from a delegate's hotkey.

      This method sends a transaction to remove stake from a delegate's hotkey and retries the call up to three times
      with exponential backoff in case of failures.

      :param wallet: The wallet from which the stake will be removed.
      :type wallet: bittensor.wallet
      :param delegate_ss58: The SS58 address of the delegate's hotkey.
      :type delegate_ss58: str
      :param amount: The amount of stake to be removed.
      :type amount: Balance
      :param wait_for_inclusion: Whether to wait for the transaction to be included in a block. Default is ``True``.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Whether to wait for the transaction to be finalized. Default is ``False``.
      :type wait_for_finalization: bool, optional

      :returns: ``True`` if the undelegation is successful, ``False`` otherwise.
      :rtype: bool



   .. py:method:: _do_nominate(wallet, wait_for_inclusion = True, wait_for_finalization = False)

      Nominates the wallet's hotkey to become a delegate.

      This method sends a transaction to nominate the wallet's hotkey to become a delegate and retries the call up to
      three times with exponential backoff in case of failures.

      :param wallet: The wallet whose hotkey will be nominated.
      :type wallet: bittensor.wallet
      :param wait_for_inclusion: Whether to wait for the transaction to be included in a block. Default is ``True``.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Whether to wait for the transaction to be finalized. Default is ``False``.
      :type wait_for_finalization: bool, optional

      :returns: ``True`` if the nomination is successful, ``False`` otherwise.
      :rtype: bool



   .. py:method:: _do_increase_take(wallet, hotkey_ss58, take, wait_for_inclusion = True, wait_for_finalization = False)

      Increases the take rate for a delegate's hotkey.

      This method sends a transaction to increase the take rate for a delegate's hotkey and retries the call up to
      three times with exponential backoff in case of failures.

      :param wallet: The wallet from which the transaction will be signed.
      :type wallet: bittensor.wallet
      :param hotkey_ss58: The SS58 address of the delegate's hotkey.
      :type hotkey_ss58: str
      :param take: The new take rate to be set.
      :type take: int
      :param wait_for_inclusion: Whether to wait for the transaction to be included in a block. Default is ``True``.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Whether to wait for the transaction to be finalized. Default is ``False``.
      :type wait_for_finalization: bool, optional

      :returns: ``True`` if the take rate increase is successful, ``False`` otherwise.
      :rtype: bool



   .. py:method:: _do_decrease_take(wallet, hotkey_ss58, take, wait_for_inclusion = True, wait_for_finalization = False)

      Decreases the take rate for a delegate's hotkey.

      This method sends a transaction to decrease the take rate for a delegate's hotkey and retries the call up to
      three times with exponential backoff in case of failures.

      :param wallet: The wallet from which the transaction will be signed.
      :type wallet: bittensor.wallet
      :param hotkey_ss58: The SS58 address of the delegate's hotkey.
      :type hotkey_ss58: str
      :param take: The new take rate to be set.
      :type take: int
      :param wait_for_inclusion: Whether to wait for the transaction to be included in a block. Default is ``True``.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Whether to wait for the transaction to be finalized. Default is ``False``.
      :type wait_for_finalization: bool, optional

      :returns: ``True`` if the take rate decrease is successful, ``False`` otherwise.
      :rtype: bool



   .. py:method:: get_balance(address, block = None)

      Retrieves the token balance of a specific address within the Bittensor network. This function queries
      the blockchain to determine the amount of Tao held by a given account.

      :param address: The Substrate address in ``ss58`` format.
      :type address: str
      :param block: The blockchain block number at which to perform the query.
      :type block: int, optional

      :returns: The account balance at the specified block, represented as a Balance object.
      :rtype: Balance

      This function is important for monitoring account holdings and managing financial transactions
      within the Bittensor ecosystem. It helps in assessing the economic status and capacity of network participants.



   .. py:method:: get_current_block()

      Returns the current block number on the Bittensor blockchain. This function provides the latest block
      number, indicating the most recent state of the blockchain.

      :returns: The current chain block number.
      :rtype: int

      Knowing the current block number is essential for querying real-time data and performing time-sensitive
      operations on the blockchain. It serves as a reference point for network activities and data synchronization.



   .. py:method:: get_balances(block = None)

      Retrieves the token balances of all accounts within the Bittensor network as of a specific blockchain block.
      This function provides a comprehensive view of the token distribution among different accounts.

      :param block: The blockchain block number at which to perform the query.
      :type block: int, optional

      :returns: A dictionary mapping each account's ``ss58`` address to its balance.
      :rtype: Dict[str, Balance]

      This function is valuable for analyzing the overall economic landscape of the Bittensor network,
      including the distribution of financial resources and the financial status of network participants.



   .. py:method:: _null_neuron()
      :staticmethod:



   .. py:method:: get_block_hash(block_id)

      Retrieves the hash of a specific block on the Bittensor blockchain. The block hash is a unique
      identifier representing the cryptographic hash of the block's content, ensuring its integrity and
      immutability.

      :param block_id: The block number for which the hash is to be retrieved.
      :type block_id: int

      :returns: The cryptographic hash of the specified block.
      :rtype: str

      The block hash is a fundamental aspect of blockchain technology, providing a secure reference to
      each block's data. It is crucial for verifying transactions, ensuring data consistency, and
      maintaining the trustworthiness of the blockchain.



   .. py:method:: get_error_info_by_index(error_index)

      Returns the error name and description from the Subtensor error list.

      :param error_index: The index of the error to retrieve.
      :type error_index: int

      :returns: A tuple containing the error name and description from substrate metadata. If the error index is not found, returns ("Unknown Error", "") and logs a warning.
      :rtype: Tuple[str, str]



.. py:class:: subtensor(network = None, config = None, _mock = False, log_verbose = True, connection_timeout = 600)

   The Subtensor class in Bittensor serves as a crucial interface for interacting with the Bittensor blockchain,
   facilitating a range of operations essential for the decentralized machine learning network.

   This class enables neurons (network participants) to engage in activities such as registering on the network,
   managing staked weights, setting inter-neuronal weights, and participating in consensus mechanisms.

   The Bittensor network operates on a digital ledger where each neuron holds stakes (S) and learns a set
   of inter-peer weights (W). These weights, set by the neurons themselves, play a critical role in determining
   the ranking and incentive mechanisms within the network. Higher-ranked neurons, as determined by their
   contributions and trust within the network, receive more incentives.

   The Subtensor class connects to various Bittensor networks like the main ``finney`` network or local test
   networks, providing a gateway to the blockchain layer of Bittensor. It leverages a staked weighted trust
   system and consensus to ensure fair and distributed incentive mechanisms, where incentives (I) are
   primarily allocated to neurons that are trusted by the majority of the network.

   Additionally, Bittensor introduces a speculation-based reward mechanism in the form of bonds (B), allowing
   neurons to accumulate bonds in other neurons, speculating on their future value. This mechanism aligns
   with market-based speculation, incentivizing neurons to make judicious decisions in their inter-neuronal
   investments.

   Example Usage::

       # Connect to the main Bittensor network (Finney).
       finney_subtensor = subtensor(network='finney')

       # Close websocket connection with the Bittensor network.
       finney_subtensor.close()

       # (Re)creates the websocket connection with the Bittensor network.
       finney_subtensor.connect_websocket()

       # Register a new neuron on the network.
       wallet = bittensor.wallet(...)  # Assuming a wallet instance is created.
       success = finney_subtensor.register(wallet=wallet, netuid=netuid)

       # Set inter-neuronal weights for collaborative learning.
       success = finney_subtensor.set_weights(wallet=wallet, netuid=netuid, uids=[...], weights=[...])

       # Speculate by accumulating bonds in other promising neurons.
       success = finney_subtensor.delegate(wallet=wallet, delegate_ss58=other_neuron_ss58, amount=bond_amount)

       # Get the metagraph for a specific subnet using given subtensor connection
       metagraph = subtensor.metagraph(netuid=netuid)

   By facilitating these operations, the Subtensor class is instrumental in maintaining the decentralized
   intelligence and dynamic learning environment of the Bittensor network, as envisioned in its foundational
   principles and mechanisms described in the `NeurIPS paper
   <https://bittensor.com/pdfs/academia/NeurIPS_DAO_Workshop_2022_3_3.pdf>`_. paper.

   Initializes a Subtensor interface for interacting with the Bittensor blockchain.

   .. note:: Currently subtensor defaults to the ``finney`` network. This will change in a future release.

   We strongly encourage users to run their own local subtensor node whenever possible. This increases
   decentralization and resilience of the network. In a future release, local subtensor will become the
   default and the fallback to ``finney`` removed. Please plan ahead for this change. We will provide detailed
   instructions on how to run a local subtensor node in the documentation in a subsequent release.

   :param network: The network name to connect to (e.g., ``finney``, ``local``). This can also be the
                   chain endpoint (e.g., ``wss://entrypoint-finney.opentensor.ai:443``) and will be correctly parsed into
                   the network and chain endpoint. If not specified, defaults to the main Bittensor network.
   :type network: str, optional
   :param config: Configuration object for the subtensor. If not provided, a default
                  configuration is used.
   :type config: bittensor.config, optional
   :param _mock: If set to ``True``, uses a mocked connection for testing purposes.
   :type _mock: bool, optional

   This initialization sets up the connection to the specified Bittensor network, allowing for various
   blockchain operations such as neuron registration, stake management, and setting weights.



   .. py:attribute:: config


   .. py:attribute:: log_verbose


   .. py:attribute:: _connection_timeout


   .. py:attribute:: _subtensor_errors
      :type:  Dict[str, Dict[str, str]]


   .. py:method:: __str__()


   .. py:method:: __repr__()


   .. py:method:: _get_substrate()

      Establishes a connection to the Substrate node using configured parameters.



   .. py:method:: help()
      :classmethod:


      Print help to stdout.



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



   .. py:method:: determine_chain_endpoint_and_network(network)
      :staticmethod:


      Determines the chain endpoint and network from the passed network or chain_endpoint.

      :param network: The network flag. The choices are: ``-- finney`` (main network), ``-- archive``
                      (archive network +300 blocks), ``-- local`` (local running network), ``-- test`` (test network).
      :type network: str

      :returns: The network flag.
                chain_endpoint (str): The chain endpoint flag. If set, overrides the ``network`` argument.
      :rtype: network (str)



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

      :param network: The name of the Subtensor network. If None, the network and endpoint will be determined from
                      the `config` object.
      :type network: str
      :param config: The configuration object containing the network and chain endpoint settings.
      :type config: bittensor.config

      :returns: A tuple containing the formatted WebSocket endpoint URL and the evaluated network name.
      :rtype: tuple



   .. py:method:: close()

      Cleans up resources for this subtensor instance like active websocket connection and active extensions.



   .. py:method:: nominate(wallet, wait_for_finalization = False, wait_for_inclusion = True)

      Becomes a delegate for the hotkey associated with the given wallet. This method is used to nominate
      a neuron (identified by the hotkey in the wallet) as a delegate on the Bittensor network, allowing it
      to participate in consensus and validation processes.

      :param wallet: The wallet containing the hotkey to be nominated.
      :type wallet: bittensor.wallet
      :param wait_for_finalization: If ``True``, waits until the transaction is finalized on the
                                    blockchain.
      :type wait_for_finalization: bool, optional
      :param wait_for_inclusion: If ``True``, waits until the transaction is included in a block.
      :type wait_for_inclusion: bool, optional

      :returns: ``True`` if the nomination process is successful, ``False`` otherwise.
      :rtype: bool

      This function is a key part of the decentralized governance mechanism of Bittensor, allowing for the
      dynamic selection and participation of validators in the network's consensus process.



   .. py:method:: delegate(wallet, delegate_ss58 = None, amount = None, wait_for_inclusion = True, wait_for_finalization = False, prompt = False)

      Becomes a delegate for the hotkey associated with the given wallet. This method is used to nominate
      a neuron (identified by the hotkey in the wallet) as a delegate on the Bittensor network, allowing it
      to participate in consensus and validation processes.

      :param wallet: The wallet containing the hotkey to be nominated.
      :type wallet: bittensor.wallet
      :param delegate_ss58: The ``SS58`` address of the delegate neuron.
      :type delegate_ss58: Optional[str]
      :param amount: The amount of TAO to undelegate.
      :type amount: Union[Balance, float]
      :param wait_for_finalization: If ``True``, waits until the transaction is finalized on the
                                    blockchain.
      :type wait_for_finalization: bool, optional
      :param wait_for_inclusion: If ``True``, waits until the transaction is included in a block.
      :type wait_for_inclusion: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional

      :returns: ``True`` if the nomination process is successful, False otherwise.
      :rtype: bool

      This function is a key part of the decentralized governance mechanism of Bittensor, allowing for the
      dynamic selection and participation of validators in the network's consensus process.



   .. py:method:: undelegate(wallet, delegate_ss58 = None, amount = None, wait_for_inclusion = True, wait_for_finalization = False, prompt = False)

      Removes a specified amount of stake from a delegate neuron using the provided wallet. This action
      reduces the staked amount on another neuron, effectively withdrawing support or speculation.

      :param wallet: The wallet used for the undelegation process.
      :type wallet: bittensor.wallet
      :param delegate_ss58: The ``SS58`` address of the delegate neuron.
      :type delegate_ss58: Optional[str]
      :param amount: The amount of TAO to undelegate.
      :type amount: Union[Balance, float]
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional

      :returns: ``True`` if the undelegation is successful, False otherwise.
      :rtype: bool

      This function reflects the dynamic and speculative nature of the Bittensor network, allowing neurons
      to adjust their stakes and investments based on changing perceptions and performances within the network.



   .. py:method:: set_take(wallet, delegate_ss58 = None, take = 0.0, wait_for_inclusion = True, wait_for_finalization = False)

      Set delegate hotkey take
      :param wallet: The wallet containing the hotkey to be nominated.
      :type wallet: bittensor.wallet
      :param delegate_ss58: Hotkey
      :type delegate_ss58: str, optional
      :param take: Delegate take on subnet ID
      :type take: float
      :param wait_for_finalization: If ``True``, waits until the transaction is finalized on the
                                    blockchain.
      :type wait_for_finalization: bool, optional
      :param wait_for_inclusion: If ``True``, waits until the transaction is included in a block.
      :type wait_for_inclusion: bool, optional

      :returns: ``True`` if the process is successful, False otherwise.
      :rtype: bool

      This function is a key part of the decentralized governance mechanism of Bittensor, allowing for the
      dynamic selection and participation of validators in the network's consensus process.



   .. py:method:: send_extrinsic(wallet, module, function, params, period = 5, wait_for_inclusion = False, wait_for_finalization = False, max_retries = 3, wait_time = 3, max_wait = 20)

      Sends an extrinsic to the Bittensor blockchain using the provided wallet and parameters. This method
      constructs and submits the extrinsic, handling retries and blockchain communication.

      :param wallet: The wallet associated with the extrinsic.
      :type wallet: bittensor.wallet
      :param module: The module name for the extrinsic.
      :type module: str
      :param function: The function name for the extrinsic.
      :type function: str
      :param params: The parameters for the extrinsic.
      :type params: dict
      :param period: The number of blocks for the extrinsic to live in the mempool. Defaults to 5.
      :type period: int, optional
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional
      :param max_retries: The maximum number of retries for the extrinsic. Defaults to 3.
      :type max_retries: int, optional
      :param wait_time: The wait time between retries. Defaults to 3.
      :type wait_time: int, optional
      :param max_wait: The maximum wait time for the extrinsic. Defaults to 20.
      :type max_wait: int, optional

      :returns: The receipt of the extrinsic if successful, None otherwise.
      :rtype: Optional[ExtrinsicReceipt]



   .. py:method:: set_weights(wallet, netuid, uids, weights, version_key = bittensor.__version_as_int__, wait_for_inclusion = False, wait_for_finalization = False, prompt = False, max_retries = 5)

      Sets the inter-neuronal weights for the specified neuron. This process involves specifying the
      influence or trust a neuron places on other neurons in the network, which is a fundamental aspect
      of Bittensor's decentralized learning architecture.

      :param wallet: The wallet associated with the neuron setting the weights.
      :type wallet: bittensor.wallet
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param uids: The list of neuron UIDs that the weights are being
                   set for.
      :type uids: Union[NDArray[np.int64], torch.LongTensor, list]
      :param weights: The corresponding weights to be set for each
                      UID.
      :type weights: Union[NDArray[np.float32], torch.FloatTensor, list]
      :param version_key: Version key for compatibility with the network.
      :type version_key: int, optional
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional
      :param max_retries: The number of maximum attempts to set weights. (Default: 5)
      :type max_retries: int, optional

      :returns: ``True`` if the setting of weights is successful, False otherwise. And `msg`, a string
                value describing the success or potential error.
      :rtype: Tuple[bool, str]

      This function is crucial in shaping the network's collective intelligence, where each neuron's
      learning and contribution are influenced by the weights it sets towards others【81†source】.



   .. py:method:: _do_set_weights(wallet, uids, vals, netuid, version_key = bittensor.__version_as_int__, wait_for_inclusion = False, wait_for_finalization = False)

      Internal method to send a transaction to the Bittensor blockchain, setting weights
      for specified neurons. This method constructs and submits the transaction, handling
      retries and blockchain communication.

      :param wallet: The wallet associated with the neuron setting the weights.
      :type wallet: bittensor.wallet
      :param uids: List of neuron UIDs for which weights are being set.
      :type uids: List[int]
      :param vals: List of weight values corresponding to each UID.
      :type vals: List[int]
      :param netuid: Unique identifier for the network.
      :type netuid: int
      :param version_key: Version key for compatibility with the network.
      :type version_key: int, optional
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional

      :returns: A tuple containing a success flag and an optional error message.
      :rtype: Tuple[bool, Optional[str]]

      This method is vital for the dynamic weighting mechanism in Bittensor, where neurons adjust their
      trust in other neurons based on observed performance and contributions.



   .. py:method:: commit_weights(wallet, netuid, salt, uids, weights, version_key = bittensor.__version_as_int__, wait_for_inclusion = False, wait_for_finalization = False, prompt = False, max_retries = 5)

      Commits a hash of the neuron's weights to the Bittensor blockchain using the provided wallet.
      This action serves as a commitment or snapshot of the neuron's current weight distribution.

      :param wallet: The wallet associated with the neuron committing the weights.
      :type wallet: bittensor.wallet
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param salt: list of randomly generated integers as salt to generated weighted hash.
      :type salt: List[int]
      :param uids: NumPy array of neuron UIDs for which weights are being committed.
      :type uids: np.ndarray
      :param weights: NumPy array of weight values corresponding to each UID.
      :type weights: np.ndarray
      :param version_key: Version key for compatibility with the network.
      :type version_key: int, optional
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional
      :param max_retries: The number of maximum attempts to commit weights. (Default: 5)
      :type max_retries: int, optional

      :returns: ``True`` if the weight commitment is successful, False otherwise. And `msg`, a string
                value describing the success or potential error.
      :rtype: Tuple[bool, str]

      This function allows neurons to create a tamper-proof record of their weight distribution at a specific point in time,
      enhancing transparency and accountability within the Bittensor network.



   .. py:method:: _do_commit_weights(wallet, netuid, commit_hash, wait_for_inclusion = False, wait_for_finalization = False)

      Internal method to send a transaction to the Bittensor blockchain, committing the hash of a neuron's weights.
      This method constructs and submits the transaction, handling retries and blockchain communication.

      :param wallet: The wallet associated with the neuron committing the weights.
      :type wallet: bittensor.wallet
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param commit_hash: The hash of the neuron's weights to be committed.
      :type commit_hash: str
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional

      :returns: A tuple containing a success flag and an optional error message.
      :rtype: Tuple[bool, Optional[str]]

      This method ensures that the weight commitment is securely recorded on the Bittensor blockchain, providing a
      verifiable record of the neuron's weight distribution at a specific point in time.



   .. py:method:: reveal_weights(wallet, netuid, uids, weights, salt, version_key = bittensor.__version_as_int__, wait_for_inclusion = False, wait_for_finalization = False, prompt = False, max_retries = 5)

      Reveals the weights for a specific subnet on the Bittensor blockchain using the provided wallet.
      This action serves as a revelation of the neuron's previously committed weight distribution.

      :param wallet: The wallet associated with the neuron revealing the weights.
      :type wallet: bittensor.wallet
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param uids: NumPy array of neuron UIDs for which weights are being revealed.
      :type uids: np.ndarray
      :param weights: NumPy array of weight values corresponding to each UID.
      :type weights: np.ndarray
      :param salt: NumPy array of salt values corresponding to the hash function.
      :type salt: np.ndarray
      :param version_key: Version key for compatibility with the network.
      :type version_key: int, optional
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional
      :param max_retries: The number of maximum attempts to reveal weights. (Default: 5)
      :type max_retries: int, optional

      :returns: ``True`` if the weight revelation is successful, False otherwise. And `msg`, a string
                value describing the success or potential error.
      :rtype: Tuple[bool, str]

      This function allows neurons to reveal their previously committed weight distribution, ensuring transparency
      and accountability within the Bittensor network.



   .. py:method:: _do_reveal_weights(wallet, netuid, uids, values, salt, version_key, wait_for_inclusion = False, wait_for_finalization = False)

      Internal method to send a transaction to the Bittensor blockchain, revealing the weights for a specific subnet.
      This method constructs and submits the transaction, handling retries and blockchain communication.

      :param wallet: The wallet associated with the neuron revealing the weights.
      :type wallet: bittensor.wallet
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param uids: List of neuron UIDs for which weights are being revealed.
      :type uids: List[int]
      :param values: List of weight values corresponding to each UID.
      :type values: List[int]
      :param salt: List of salt values corresponding to the hash function.
      :type salt: List[int]
      :param version_key: Version key for compatibility with the network.
      :type version_key: int
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional

      :returns: A tuple containing a success flag and an optional error message.
      :rtype: Tuple[bool, Optional[str]]

      This method ensures that the weight revelation is securely recorded on the Bittensor blockchain, providing transparency
      and accountability for the neuron's weight distribution.



   .. py:method:: register(wallet, netuid, wait_for_inclusion = False, wait_for_finalization = True, prompt = False, max_allowed_attempts = 3, output_in_place = True, cuda = False, dev_id = 0, tpb = 256, num_processes = None, update_interval = None, log_verbose = False)

      Registers a neuron on the Bittensor network using the provided wallet. Registration
      is a critical step for a neuron to become an active participant in the network, enabling
      it to stake, set weights, and receive incentives.

      :param wallet: The wallet associated with the neuron to be registered.
      :type wallet: bittensor.wallet
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
                                 Defaults to `False`.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
                                    Defaults to `True`.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional
      :param max_allowed_attempts: Maximum number of attempts to register the wallet.
      :type max_allowed_attempts: int
      :param output_in_place: If true, prints the progress of the proof of work to the console in-place. Meaning
                              the progress is printed on the same lines. Defaults to `True`.
      :type output_in_place: bool
      :param cuda: If ``true``, the wallet should be registered using CUDA device(s). Defaults to `False`.
      :type cuda: bool
      :param dev_id: The CUDA device id to use, or a list of device ids. Defaults to `0` (zero).
      :type dev_id: Union[List[int], int]
      :param tpb: The number of threads per block (CUDA). Default to `256`.
      :type tpb: int
      :param num_processes: The number of processes to use to register. Default to `None`.
      :type num_processes: Optional[int]
      :param update_interval: The number of nonces to solve between updates.  Default to `None`.
      :type update_interval: Optional[int]
      :param log_verbose: If ``true``, the registration process will log more information.  Default to `False`.
      :type log_verbose: bool

      :returns: ``True`` if the registration is successful, False otherwise.
      :rtype: bool

      This function facilitates the entry of new neurons into the network, supporting the decentralized
      growth and scalability of the Bittensor ecosystem.



   .. py:method:: swap_hotkey(wallet, new_wallet, wait_for_inclusion = False, wait_for_finalization = True, prompt = False)

      Swaps an old hotkey with a new hotkey for the specified wallet.

      This method initiates an extrinsic to change the hotkey associated with a wallet to a new hotkey. It provides
      options to wait for inclusion and finalization of the transaction, and to prompt the user for confirmation.

      :param wallet: The wallet whose hotkey is to be swapped.
      :type wallet: bittensor.wallet
      :param new_wallet: The new wallet with the hotkey to be set.
      :type new_wallet: bittensor.wallet
      :param wait_for_inclusion: Whether to wait for the transaction to be included in a block.
                                 Default is `False`.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: Whether to wait for the transaction to be finalized. Default is `True`.
      :type wait_for_finalization: bool
      :param prompt: Whether to prompt the user for confirmation before proceeding. Default is `False`.
      :type prompt: bool

      :returns: True if the hotkey swap was successful, False otherwise.
      :rtype: bool



   .. py:method:: run_faucet(wallet, wait_for_inclusion = False, wait_for_finalization = True, prompt = False, max_allowed_attempts = 3, output_in_place = True, cuda = False, dev_id = 0, tpb = 256, num_processes = None, update_interval = None, log_verbose = False)

      Facilitates a faucet transaction, allowing new neurons to receive an initial amount of TAO
      for participating in the network. This function is particularly useful for newcomers to the
      Bittensor network, enabling them to start with a small stake on testnet only.

      :param wallet: The wallet for which the faucet transaction is to be run.
      :type wallet: bittensor.wallet
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
                                 Defaults to `False`.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
                                    Defaults to `True`.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional
      :param max_allowed_attempts: Maximum number of attempts to register the wallet.
      :type max_allowed_attempts: int
      :param output_in_place: If true, prints the progress of the proof of work to the console in-place. Meaning
                              the progress is printed on the same lines. Defaults to `True`.
      :type output_in_place: bool
      :param cuda: If ``true``, the wallet should be registered using CUDA device(s). Defaults to `False`.
      :type cuda: bool
      :param dev_id: The CUDA device id to use, or a list of device ids. Defaults to `0` (zero).
      :type dev_id: Union[List[int], int]
      :param tpb: The number of threads per block (CUDA). Default to `256`.
      :type tpb: int
      :param num_processes: The number of processes to use to register. Default to `None`.
      :type num_processes: Optional[int]
      :param update_interval: The number of nonces to solve between updates.  Default to `None`.
      :type update_interval: Optional[int]
      :param log_verbose: If ``true``, the registration process will log more information.  Default to `False`.
      :type log_verbose: bool

      :returns: ``True`` if the faucet transaction is successful, False otherwise.
      :rtype: bool

      This function is part of Bittensor's onboarding process, ensuring that new neurons have
      the necessary resources to begin their journey in the decentralized AI network.

      .. note::

         This is for testnet ONLY and is disabled currently. You must build your own staging subtensor chain with the
         ``--features pow-faucet`` argument to enable this.



   .. py:method:: burned_register(wallet, netuid, wait_for_inclusion = False, wait_for_finalization = True, prompt = False)

      Registers a neuron on the Bittensor network by recycling TAO. This method of registration
      involves recycling TAO tokens, allowing them to be re-mined by performing work on the network.

      :param wallet: The wallet associated with the neuron to be registered.
      :type wallet: bittensor.wallet
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
                                 Defaults to `False`.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
                                    Defaults to `True`.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding. Defaults to `False`.
      :type prompt: bool, optional

      :returns: ``True`` if the registration is successful, False otherwise.
      :rtype: bool



   .. py:method:: _do_pow_register(netuid, wallet, pow_result, wait_for_inclusion = False, wait_for_finalization = True)

      Sends a (POW) register extrinsic to the chain.

      :param netuid: The subnet to register on.
      :type netuid: int
      :param wallet: The wallet to register.
      :type wallet: bittensor.wallet
      :param pow_result: The PoW result to register.
      :type pow_result: POWSolution
      :param wait_for_inclusion: If ``True``, waits for the extrinsic to be included in a block.
                                 Default to `False`.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: If ``True``, waits for the extrinsic to be finalized. Default to `True`.
      :type wait_for_finalization: bool

      :returns: ``True`` if the extrinsic was included in a block.
                error (Optional[str]): ``None`` on success or not waiting for inclusion/finalization, otherwise the error
                    message.
      :rtype: success (bool)



   .. py:method:: _do_burned_register(netuid, wallet, wait_for_inclusion = False, wait_for_finalization = True)

      Performs a burned register extrinsic call to the Subtensor chain.

      This method sends a registration transaction to the Subtensor blockchain using the burned register mechanism. It
      retries the call up to three times with exponential backoff in case of failures.

      :param netuid: The network unique identifier to register on.
      :type netuid: int
      :param wallet: The wallet to be registered.
      :type wallet: bittensor.wallet
      :param wait_for_inclusion: Whether to wait for the transaction to be included in a block. Default is False.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: Whether to wait for the transaction to be finalized. Default is True.
      :type wait_for_finalization: bool

      :returns: A tuple containing a boolean indicating success or failure, and an optional error message.
      :rtype: Tuple[bool, Optional[str]]



   .. py:method:: _do_swap_hotkey(wallet, new_wallet, wait_for_inclusion = False, wait_for_finalization = True)

      Performs a hotkey swap extrinsic call to the Subtensor chain.

      :param wallet: The wallet whose hotkey is to be swapped.
      :type wallet: bittensor.wallet
      :param new_wallet: The wallet with the new hotkey to be set.
      :type new_wallet: bittensor.wallet
      :param wait_for_inclusion: Whether to wait for the transaction to be included in a block. Default is
      :type wait_for_inclusion: bool
      :param `False`.:
      :param wait_for_finalization: Whether to wait for the transaction to be finalized. Default is `True`.
      :type wait_for_finalization: bool

      :returns:

                A tuple containing a boolean indicating success or failure, and an optional
                    error message.
      :rtype: Tuple[bool, Optional[str]]



   .. py:method:: transfer(wallet, dest, amount, wait_for_inclusion = True, wait_for_finalization = False, prompt = False)

      Executes a transfer of funds from the provided wallet to the specified destination address.
      This function is used to move TAO tokens within the Bittensor network, facilitating transactions
      between neurons.

      :param wallet: The wallet from which funds are being transferred.
      :type wallet: bittensor.wallet
      :param dest: The destination public key address.
      :type dest: str
      :param amount: The amount of TAO to be transferred.
      :type amount: Union[Balance, float]
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional

      :returns: ``True`` if the transfer is successful, False otherwise.
      :rtype: transfer_extrinsic (bool)

      This function is essential for the fluid movement of tokens in the network, supporting
      various economic activities such as staking, delegation, and reward distribution.



   .. py:method:: get_transfer_fee(wallet, dest, value)

      Calculates the transaction fee for transferring tokens from a wallet to a specified destination address.
      This function simulates the transfer to estimate the associated cost, taking into account the current
      network conditions and transaction complexity.

      :param wallet: The wallet from which the transfer is initiated.
      :type wallet: bittensor.wallet
      :param dest: The ``SS58`` address of the destination account.
      :type dest: str
      :param value: The amount of tokens to be transferred, specified as a Balance object,
                    or in Tao (float) or Rao (int) units.
      :type value: Union[Balance, float, int]

      :returns: The estimated transaction fee for the transfer, represented as a Balance object.
      :rtype: Balance

      Estimating the transfer fee is essential for planning and executing token transactions, ensuring that the
      wallet has sufficient funds to cover both the transfer amount and the associated costs. This function
      provides a crucial tool for managing financial operations within the Bittensor network.



   .. py:method:: _do_transfer(wallet, dest, transfer_balance, wait_for_inclusion = True, wait_for_finalization = False)

      Sends a transfer extrinsic to the chain.

      :param wallet: Wallet object.
      :type wallet: :func:`bittensor.wallet`
      :param dest: Destination public key address.
      :type dest: str
      :param transfer_balance: Amount to transfer.
      :type transfer_balance: :func:`Balance`
      :param wait_for_inclusion: If ``true``, waits for inclusion.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: If ``true``, waits for finalization.
      :type wait_for_finalization: bool

      :returns: ``True`` if transfer was successful.
                block_hash (str): Block hash of the transfer. On success and if wait_for_ finalization/inclusion is
                    ``True``.
                error (str): Error message if transfer failed.
      :rtype: success (bool)



   .. py:method:: get_existential_deposit(block = None)

      Retrieves the existential deposit amount for the Bittensor blockchain. The existential deposit
      is the minimum amount of TAO required for an account to exist on the blockchain. Accounts with
      balances below this threshold can be reaped to conserve network resources.

      :param block: Block number at which to query the deposit amount. If ``None``, the current block is
                    used.
      :type block: Optional[int]

      :returns: The existential deposit amount, or ``None`` if the query fails.
      :rtype: Optional[Balance]

      The existential deposit is a fundamental economic parameter in the Bittensor network, ensuring
      efficient use of storage and preventing the proliferation of dust accounts.



   .. py:method:: register_subnetwork(wallet, wait_for_inclusion = False, wait_for_finalization=True, prompt = False)

      Registers a new subnetwork on the Bittensor network using the provided wallet. This function
      is used for the creation and registration of subnetworks, which are specialized segments of the
      overall Bittensor network.

      :param wallet: The wallet to be used for registration.
      :type wallet: bittensor.wallet
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional

      :returns: ``True`` if the subnetwork registration is successful, False otherwise.
      :rtype: bool

      This function allows for the expansion and diversification of the Bittensor network, supporting
      its decentralized and adaptable architecture.



   .. py:method:: set_hyperparameter(wallet, netuid, parameter, value, wait_for_inclusion = False, wait_for_finalization=True, prompt = False)

      Sets a specific hyperparameter for a given subnetwork on the Bittensor blockchain. This action
      involves adjusting network-level parameters, influencing the behavior and characteristics of the
      subnetwork.

      :param wallet: The wallet used for setting the hyperparameter.
      :type wallet: bittensor.wallet
      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param parameter: The name of the hyperparameter to be set.
      :type parameter: str
      :param value: The new value for the hyperparameter.
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional

      :returns: ``True`` if the hyperparameter setting is successful, False otherwise.
      :rtype: bool

      This function plays a critical role in the dynamic governance and adaptability of the Bittensor
      network, allowing for fine-tuning of network operations and characteristics.



   .. py:method:: serve(wallet, ip, port, protocol, netuid, placeholder1 = 0, placeholder2 = 0, wait_for_inclusion = False, wait_for_finalization=True)

      Registers a neuron's serving endpoint on the Bittensor network. This function announces the
      IP address and port where the neuron is available to serve requests, facilitating peer-to-peer
      communication within the network.

      :param wallet: The wallet associated with the neuron being served.
      :type wallet: bittensor.wallet
      :param ip: The IP address of the serving neuron.
      :type ip: str
      :param port: The port number on which the neuron is serving.
      :type port: int
      :param protocol: The protocol type used by the neuron (e.g., GRPC, HTTP).
      :type protocol: int
      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param placeholder1: Placeholder parameter for future extensions. Default is ``0``.
      :type placeholder1: int, optional
      :param placeholder2: Placeholder parameter for future extensions. Default is ``0``.
      :type placeholder2: int, optional
      :param wait_for_inclusion: Waits for the transaction to be included in a block. Default is
                                 ``False``.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain. Default
                                    is ``True``.
      :type wait_for_finalization: bool, optional

      :returns: ``True`` if the serve registration is successful, False otherwise.
      :rtype: bool

      This function is essential for establishing the neuron's presence in the network, enabling
      it to participate in the decentralized machine learning processes of Bittensor.



   .. py:method:: serve_axon(netuid, axon, wait_for_inclusion = False, wait_for_finalization = True)

      Registers an Axon serving endpoint on the Bittensor network for a specific neuron. This function
      is used to set up the Axon, a key component of a neuron that handles incoming queries and data
      processing tasks.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param axon: The Axon instance to be registered for serving.
      :type axon: bittensor.Axon
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional

      :returns: ``True`` if the Axon serve registration is successful, False otherwise.
      :rtype: bool

      By registering an Axon, the neuron becomes an active part of the network's distributed
      computing infrastructure, contributing to the collective intelligence of Bittensor.



   .. py:method:: _do_serve_axon(wallet, call_params, wait_for_inclusion = False, wait_for_finalization = True)

      Internal method to submit a serve axon transaction to the Bittensor blockchain. This method
      creates and submits a transaction, enabling a neuron's Axon to serve requests on the network.

      :param wallet: The wallet associated with the neuron.
      :type wallet: bittensor.wallet
      :param call_params: Parameters required for the serve axon call.
      :type call_params: AxonServeCallParams
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional

      :returns: A tuple containing a success flag and an optional error message.
      :rtype: Tuple[bool, Optional[str]]

      This function is crucial for initializing and announcing a neuron's Axon service on the network,
      enhancing the decentralized computation capabilities of Bittensor.



   .. py:method:: serve_prometheus(wallet, port, netuid, wait_for_inclusion = False, wait_for_finalization = True)


   .. py:method:: _do_serve_prometheus(wallet, call_params, wait_for_inclusion = False, wait_for_finalization = True)

      Sends a serve prometheus extrinsic to the chain.
      :param wallet: Wallet object.
      :type wallet: :func:`bittensor.wallet`
      :param call_params: Prometheus serve call parameters.
      :type call_params: :func:`PrometheusServeCallParams`
      :param wait_for_inclusion: If ``true``, waits for inclusion.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: If ``true``, waits for finalization.
      :type wait_for_finalization: bool

      :returns: ``True`` if serve prometheus was successful.
                error (:func:`Optional[str]`): Error message if serve prometheus failed, ``None`` otherwise.
      :rtype: success (bool)



   .. py:method:: _do_associate_ips(wallet, ip_info_list, netuid, wait_for_inclusion = False, wait_for_finalization = True)

      Sends an associate IPs extrinsic to the chain.

      :param wallet: Wallet object.
      :type wallet: :func:`bittensor.wallet`
      :param ip_info_list: List of IPInfo objects.
      :type ip_info_list: :func:`List[IPInfo]`
      :param netuid: Netuid to associate IPs to.
      :type netuid: int
      :param wait_for_inclusion: If ``true``, waits for inclusion.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: If ``true``, waits for finalization.
      :type wait_for_finalization: bool

      :returns: ``True`` if associate IPs was successful.
                error (:func:`Optional[str]`): Error message if associate IPs failed, None otherwise.
      :rtype: success (bool)



   .. py:method:: add_stake(wallet, hotkey_ss58 = None, amount = None, wait_for_inclusion = True, wait_for_finalization = False, prompt = False)

      Adds the specified amount of stake to a neuron identified by the hotkey ``SS58`` address. Staking
      is a fundamental process in the Bittensor network that enables neurons to participate actively
      and earn incentives.

      :param wallet: The wallet to be used for staking.
      :type wallet: bittensor.wallet
      :param hotkey_ss58: The ``SS58`` address of the hotkey associated with the neuron.
      :type hotkey_ss58: Optional[str]
      :param amount: The amount of TAO to stake.
      :type amount: Union[Balance, float]
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional

      :returns: ``True`` if the staking is successful, False otherwise.
      :rtype: bool

      This function enables neurons to increase their stake in the network, enhancing their influence
      and potential rewards in line with Bittensor's consensus and reward mechanisms.



   .. py:method:: add_stake_multiple(wallet, hotkey_ss58s, amounts = None, wait_for_inclusion = True, wait_for_finalization = False, prompt = False)

      Adds stakes to multiple neurons identified by their hotkey SS58 addresses. This bulk operation
      allows for efficient staking across different neurons from a single wallet.

      :param wallet: The wallet used for staking.
      :type wallet: bittensor.wallet
      :param hotkey_ss58s: List of ``SS58`` addresses of hotkeys to stake to.
      :type hotkey_ss58s: List[str]
      :param amounts: Corresponding amounts of TAO to stake for each hotkey.
      :type amounts: List[Union[Balance, float]], optional
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional

      :returns: ``True`` if the staking is successful for all specified neurons, False otherwise.
      :rtype: bool

      This function is essential for managing stakes across multiple neurons, reflecting the dynamic
      and collaborative nature of the Bittensor network.



   .. py:method:: _do_stake(wallet, hotkey_ss58, amount, wait_for_inclusion = True, wait_for_finalization = False)

      Sends a stake extrinsic to the chain.

      :param wallet: Wallet object that can sign the extrinsic.
      :type wallet: :func:`bittensor.wallet`
      :param hotkey_ss58: Hotkey ``ss58`` address to stake to.
      :type hotkey_ss58: str
      :param amount: Amount to stake.
      :type amount: :func:`Balance`
      :param wait_for_inclusion: If ``true``, waits for inclusion before returning.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: If ``true``, waits for finalization before returning.
      :type wait_for_finalization: bool

      :returns: ``True`` if the extrinsic was successful.
      :rtype: success (bool)

      :raises StakeError: If the extrinsic failed.



   .. py:method:: unstake_multiple(wallet, hotkey_ss58s, amounts = None, wait_for_inclusion = True, wait_for_finalization = False, prompt = False)

      Performs batch unstaking from multiple hotkey accounts, allowing a neuron to reduce its staked amounts
      efficiently. This function is useful for managing the distribution of stakes across multiple neurons.

      :param wallet: The wallet linked to the coldkey from which the stakes are being withdrawn.
      :type wallet: bittensor.wallet
      :param hotkey_ss58s: A list of hotkey ``SS58`` addresses to unstake from.
      :type hotkey_ss58s: List[str]
      :param amounts: The amounts of TAO to unstake from each hotkey. If not
                      provided, unstakes all available stakes.
      :type amounts: List[Union[Balance, float]], optional
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional

      :returns: ``True`` if the batch unstaking is successful, False otherwise.
      :rtype: bool

      This function allows for strategic reallocation or withdrawal of stakes, aligning with the dynamic
      stake management aspect of the Bittensor network.



   .. py:method:: unstake(wallet, hotkey_ss58 = None, amount = None, wait_for_inclusion = True, wait_for_finalization = False, prompt = False)

      Removes a specified amount of stake from a single hotkey account. This function is critical for adjusting
      individual neuron stakes within the Bittensor network.

      :param wallet: The wallet associated with the neuron from which the stake is being removed.
      :type wallet: bittensor.wallet
      :param hotkey_ss58: The ``SS58`` address of the hotkey account to unstake from.
      :type hotkey_ss58: Optional[str]
      :param amount: The amount of TAO to unstake. If not specified, unstakes all.
      :type amount: Union[Balance, float], optional
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional

      :returns: ``True`` if the unstaking process is successful, False otherwise.
      :rtype: bool

      This function supports flexible stake management, allowing neurons to adjust their network participation
      and potential reward accruals.



   .. py:method:: _do_unstake(wallet, hotkey_ss58, amount, wait_for_inclusion = True, wait_for_finalization = False)

      Sends an unstake extrinsic to the chain.

      :param wallet: Wallet object that can sign the extrinsic.
      :type wallet: :func:`bittensor.wallet`
      :param hotkey_ss58: Hotkey ``ss58`` address to unstake from.
      :type hotkey_ss58: str
      :param amount: Amount to unstake.
      :type amount: :func:`Balance`
      :param wait_for_inclusion: If ``true``, waits for inclusion before returning.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: If ``true``, waits for finalization before returning.
      :type wait_for_finalization: bool

      :returns: ``True`` if the extrinsic was successful.
      :rtype: success (bool)

      :raises StakeError: If the extrinsic failed.



   .. py:method:: set_childkey_take(wallet, hotkey, take, netuid, wait_for_inclusion = True, wait_for_finalization = False, prompt = False)

      Sets a childkey take extrinsic on the subnet.

      :param wallet: Wallet object that can sign the extrinsic.
      :type wallet: :func:`bittensor.wallet`
      :param hotkey: (str): Hotkey ``ss58`` address of the child for which take is getting set.
      :param netuid: Unique identifier of for the subnet.
      :type netuid: int
      :param take: Value of childhotkey take on subnet.
      :type take: float
      :param wait_for_inclusion: If ``true``, waits for inclusion before returning.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: If ``true``, waits for finalization before returning.
      :type wait_for_finalization: bool
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional

      :returns: ``True`` if the extrinsic was successful.
      :rtype: success (bool)

      :raises ChildHotkeyError: If the extrinsic failed.



   .. py:method:: _do_set_childkey_take(wallet, hotkey, take, netuid, wait_for_inclusion = True, wait_for_finalization = False)

      Sends a set_children hotkey extrinsic on the chain.

      :param wallet: Wallet object that can sign the extrinsic.
      :type wallet: :func:`bittensor.wallet`
      :param hotkey: (str): Hotkey ``ss58`` address of the wallet for which take is getting set.
      :param take: (int): The take that this ss58 hotkey will have if assigned as a child hotkey as u16 value.
      :param netuid: Unique identifier for the network.
      :type netuid: int
      :param wait_for_inclusion: If ``true``, waits for inclusion before returning.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: If ``true``, waits for finalization before returning.
      :type wait_for_finalization: bool

      :returns: ``True`` if the extrinsic was successful.
      :rtype: success (bool)



   .. py:method:: set_children(wallet, hotkey, children_with_proportions, netuid, wait_for_inclusion = True, wait_for_finalization = False, prompt = False)

      Sets a children hotkeys extrinsic on the subnet.

      :param wallet: Wallet object that can sign the extrinsic.
      :type wallet: :func:`bittensor.wallet`
      :param hotkey: (str): Hotkey ``ss58`` address of the parent.
      :param netuid: Unique identifier of for the subnet.
      :type netuid: int
      :param children_with_proportions: List of (proportion, child_ss58) pairs.
      :type children_with_proportions: List[Tuple[float, str]]
      :param wait_for_inclusion: If ``true``, waits for inclusion before returning.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: If ``true``, waits for finalization before returning.
      :type wait_for_finalization: bool
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional

      :returns: ``True`` if the extrinsic was successful.
      :rtype: success (bool)

      :raises ChildHotkeyError: If the extrinsic failed.



   .. py:method:: _do_set_children(wallet, hotkey, children, netuid, wait_for_inclusion = True, wait_for_finalization = False)

      Sends a set_children hotkey extrinsic on the chain.

      :param wallet: Wallet object that can sign the extrinsic.
      :type wallet: :func:`bittensor.wallet`
      :param hotkey: (str): Hotkey ``ss58`` address of the parent.
      :param children: (List[Tuple[int, str]]): A list of tuples containing the hotkey ``ss58`` addresses of the children and their proportions as u16 MAX standardized values.
      :param netuid: Unique identifier for the network.
      :type netuid: int
      :param wait_for_inclusion: If ``true``, waits for inclusion before returning.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: If ``true``, waits for finalization before returning.
      :type wait_for_finalization: bool

      :returns: ``True`` if the extrinsic was successful.
      :rtype: success (bool)



   .. py:method:: check_in_arbitration(ss58_address)

      Checks storage function to see if the provided coldkey is in arbitration.
      If 0, `swap` has not been called on this key. If 1, swap has been called once, so
      the key is not in arbitration. If >1, `swap` has been called with multiple destinations, and
      the key is thus in arbitration.



   .. py:method:: get_remaining_arbitration_period(coldkey_ss58, block = None)

      Retrieves the remaining arbitration period for a given coldkey.
      :param coldkey_ss58: The SS58 address of the coldkey.
      :type coldkey_ss58: str
      :param block: The block number to query. If None, uses the latest block.
      :type block: Optional[int], optional

      :returns: The remaining arbitration period in blocks, or 0 if not found.
      :rtype: Optional[int]



   .. py:method:: register_senate(wallet, wait_for_inclusion = True, wait_for_finalization = False, prompt = False)

      Removes a specified amount of stake from a single hotkey account. This function is critical for adjusting
      individual neuron stakes within the Bittensor network.

      :param wallet: The wallet associated with the neuron from which the stake is being removed.
      :type wallet: bittensor.wallet
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional

      :returns: ``True`` if the unstaking process is successful, False otherwise.
      :rtype: bool

      This function supports flexible stake management, allowing neurons to adjust their network participation
      and potential reward accruals.



   .. py:method:: leave_senate(wallet, wait_for_inclusion = True, wait_for_finalization = False, prompt = False)

      Removes a specified amount of stake from a single hotkey account. This function is critical for adjusting
      individual neuron stakes within the Bittensor network.

      :param wallet: The wallet associated with the neuron from which the stake is being removed.
      :type wallet: bittensor.wallet
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional

      :returns: ``True`` if the unstaking process is successful, False otherwise.
      :rtype: bool

      This function supports flexible stake management, allowing neurons to adjust their network participation
      and potential reward accruals.



   .. py:method:: vote_senate(wallet, proposal_hash, proposal_idx, vote, wait_for_inclusion = True, wait_for_finalization = False, prompt = False)

      Removes a specified amount of stake from a single hotkey account. This function is critical for adjusting
      individual neuron stakes within the Bittensor network.

      :param wallet: The wallet associated with the neuron from which the stake is being removed.
      :type wallet: bittensor.wallet
      :param proposal_hash: The hash of the proposal being voted on.
      :type proposal_hash: str
      :param proposal_idx: The index of the proposal being voted on.
      :type proposal_idx: int
      :param vote: The vote to be cast (True for yes, False for no).
      :type vote: bool
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional

      :returns: ``True`` if the unstaking process is successful, False otherwise.
      :rtype: bool

      This function supports flexible stake management, allowing neurons to adjust their network participation
      and potential reward accruals.



   .. py:method:: is_senate_member(hotkey_ss58, block = None)

      Checks if a given neuron (identified by its hotkey SS58 address) is a member of the Bittensor senate.
      The senate is a key governance body within the Bittensor network, responsible for overseeing and
      approving various network operations and proposals.

      :param hotkey_ss58: The ``SS58`` address of the neuron's hotkey.
      :type hotkey_ss58: str
      :param block: The blockchain block number at which to check senate membership.
      :type block: Optional[int]

      :returns: ``True`` if the neuron is a senate member at the given block, False otherwise.
      :rtype: bool

      This function is crucial for understanding the governance dynamics of the Bittensor network and for
      identifying the neurons that hold decision-making power within the network.



   .. py:method:: get_vote_data(proposal_hash, block = None)

      Retrieves the voting data for a specific proposal on the Bittensor blockchain. This data includes
      information about how senate members have voted on the proposal.

      :param proposal_hash: The hash of the proposal for which voting data is requested.
      :type proposal_hash: str
      :param block: The blockchain block number to query the voting data.
      :type block: Optional[int]

      :returns: An object containing the proposal's voting data, or ``None`` if not found.
      :rtype: Optional[ProposalVoteData]

      This function is important for tracking and understanding the decision-making processes within
      the Bittensor network, particularly how proposals are received and acted upon by the governing body.



   .. py:attribute:: get_proposal_vote_data


   .. py:method:: get_senate_members(block = None)

      Retrieves the list of current senate members from the Bittensor blockchain. Senate members are
      responsible for governance and decision-making within the network.

      :param block: The blockchain block number at which to retrieve the senate members.
      :type block: Optional[int]

      :returns: A list of ``SS58`` addresses of current senate members, or ``None`` if not available.
      :rtype: Optional[List[str]]

      Understanding the composition of the senate is key to grasping the governance structure and
      decision-making authority within the Bittensor network.



   .. py:method:: get_proposal_call_data(proposal_hash, block = None)

      Retrieves the call data of a specific proposal on the Bittensor blockchain. This data provides
      detailed information about the proposal, including its purpose and specifications.

      :param proposal_hash: The hash of the proposal.
      :type proposal_hash: str
      :param block: The blockchain block number at which to query the proposal call data.
      :type block: Optional[int]

      :returns: An object containing the proposal's call data, or ``None`` if not found.
      :rtype: Optional[GenericCall]

      This function is crucial for analyzing the types of proposals made within the network and the
      specific changes or actions they intend to implement or address.



   .. py:method:: get_proposal_hashes(block = None)

      Retrieves the list of proposal hashes currently present on the Bittensor blockchain. Each hash
      uniquely identifies a proposal made within the network.

      :param block: The blockchain block number to query the proposal hashes.
      :type block: Optional[int]

      :returns: A list of proposal hashes, or ``None`` if not available.
      :rtype: Optional[List[str]]

      This function enables tracking and reviewing the proposals made in the network, offering insights
      into the active governance and decision-making processes.



   .. py:method:: get_proposals(block = None)

      Retrieves all active proposals on the Bittensor blockchain, along with their call and voting data.
      This comprehensive view allows for a thorough understanding of the proposals and their reception
      by the senate.

      :param block: The blockchain block number to query the proposals.
      :type block: Optional[int]

      :returns:

                A dictionary mapping
                    proposal hashes to their corresponding call and vote data, or ``None`` if not available.
      :rtype: Optional[Dict[str, Tuple[bittensor.ProposalCallData, bittensor.ProposalVoteData]]]

      This function is integral for analyzing the governance activity on the Bittensor network,
      providing a holistic view of the proposals and their impact or potential changes within the network.



   .. py:method:: root_register(wallet, wait_for_inclusion = False, wait_for_finalization = True, prompt = False)

      Registers the neuron associated with the wallet on the root network. This process is integral for
      participating in the highest layer of decision-making and governance within the Bittensor network.

      :param wallet: The wallet associated with the neuron to be registered on the root network.
      :type wallet: bittensor.wallet
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional

      :returns: ``True`` if the registration on the root network is successful, False otherwise.
      :rtype: bool

      This function enables neurons to engage in the most critical and influential aspects of the network's
      governance, signifying a high level of commitment and responsibility in the Bittensor ecosystem.



   .. py:method:: _do_root_register(wallet, wait_for_inclusion = False, wait_for_finalization = True)


   .. py:method:: root_set_weights(wallet, netuids, weights, version_key = 0, wait_for_inclusion = False, wait_for_finalization = False, prompt = False)

      Sets the weights for neurons on the root network. This action is crucial for defining the influence
      and interactions of neurons at the root level of the Bittensor network.

      :param wallet: The wallet associated with the neuron setting the weights.
      :type wallet: bittensor.wallet
      :param netuids: The list of neuron UIDs for which weights are
                      being set.
      :type netuids: Union[NDArray[np.int64], torch.LongTensor, list]
      :param weights: The corresponding weights to be set for each
                      UID.
      :type weights: Union[NDArray[np.float32], torch.FloatTensor, list]
      :param version_key: Version key for compatibility with the network.
      :type version_key: int, optional
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional

      :returns: ``True`` if the setting of root-level weights is successful, False otherwise.
      :rtype: bool

      This function plays a pivotal role in shaping the root network's collective intelligence and decision-making
      processes, reflecting the principles of decentralized governance and collaborative learning in Bittensor.



   .. py:method:: _do_set_root_weights(wallet, uids, vals, netuid = 0, version_key = bittensor.__version_as_int__, wait_for_inclusion = False, wait_for_finalization = False)

      Internal method to send a transaction to the Bittensor blockchain, setting weights
      for specified neurons on root. This method constructs and submits the transaction, handling
      retries and blockchain communication.

      :param wallet: The wallet associated with the neuron setting the weights.
      :type wallet: bittensor.wallet
      :param uids: List of neuron UIDs for which weights are being set.
      :type uids: List[int]
      :param vals: List of weight values corresponding to each UID.
      :type vals: List[int]
      :param netuid: Unique identifier for the network.
      :type netuid: int
      :param version_key: Version key for compatibility with the network.
      :type version_key: int, optional
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional

      :returns: A tuple containing a success flag and an optional error message.
      :rtype: Tuple[bool, Optional[str]]

      This method is vital for the dynamic weighting mechanism in Bittensor, where neurons adjust their
      trust in other neurons based on observed performance and contributions on the root network.



   .. py:method:: query_identity(key, block = None)

      Queries the identity of a neuron on the Bittensor blockchain using the given key. This function retrieves
      detailed identity information about a specific neuron, which is a crucial aspect of the network's decentralized
      identity and governance system.

      .. note::

         See the `Bittensor CLI documentation <https://docs.bittensor.com/reference/btcli>`_ for supported identity
         parameters.

      :param key: The key used to query the neuron's identity, typically the neuron's ``SS58`` address.
      :type key: str
      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int]

      :returns: An object containing the identity information of the neuron if found, ``None`` otherwise.
      :rtype: result (dict)

      The identity information can include various attributes such as the neuron's stake, rank, and other
      network-specific details, providing insights into the neuron's role and status within the Bittensor network.



   .. py:method:: update_identity(wallet, identified = None, params = None, wait_for_inclusion = True, wait_for_finalization = False)

      Updates the identity of a neuron on the Bittensor blockchain. This function allows neurons to modify their
      identity attributes, reflecting changes in their roles, stakes, or other network-specific parameters.

      .. note::

         See the `Bittensor CLI documentation <https://docs.bittensor.com/reference/btcli>`_ for supported identity
         parameters.

      :param wallet: The wallet associated with the neuron whose identity is being updated.
      :type wallet: bittensor.wallet
      :param identified: The identified ``SS58`` address of the neuron. Defaults to the wallet's coldkey
                         address.
      :type identified: str, optional
      :param params: A dictionary of parameters to update in the neuron's identity.
      :type params: dict, optional
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional

      :returns: ``True`` if the identity update is successful, False otherwise.
      :rtype: bool

      This function plays a vital role in maintaining the accuracy and currency of neuron identities in the
      Bittensor network, ensuring that the network's governance and consensus mechanisms operate effectively.



   .. py:method:: commit(wallet, netuid, data)

      Commits arbitrary data to the Bittensor network by publishing metadata.

      :param wallet: The wallet associated with the neuron committing the data.
      :type wallet: bittensor.wallet
      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param data: The data to be committed to the network.
      :type data: str



   .. py:method:: get_commitment(netuid, uid, block = None)

      Retrieves the on-chain commitment for a specific neuron in the Bittensor network.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param uid: The unique identifier of the neuron.
      :type uid: int
      :param block: The block number to retrieve the commitment from. If None, the latest block
                    is used. Default is ``None``.
      :type block: Optional[int]

      :returns: The commitment data as a string.
      :rtype: str



   .. py:method:: query_subtensor(name, block = None, params = None)

      Queries named storage from the Subtensor module on the Bittensor blockchain. This function is used to retrieve
      specific data or parameters from the blockchain, such as stake, rank, or other neuron-specific attributes.

      :param name: The name of the storage function to query.
      :type name: str
      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int]
      :param params: A list of parameters to pass to the query function.
      :type params: Optional[List[object]], optional

      :returns: An object containing the requested data.
      :rtype: query_response (ScaleType)

      This query function is essential for accessing detailed information about the network and its neurons,
      providing valuable insights into the state and dynamics of the Bittensor ecosystem.



   .. py:method:: query_map_subtensor(name, block = None, params = None)

      Queries map storage from the Subtensor module on the Bittensor blockchain. This function is designed to
      retrieve a map-like data structure, which can include various neuron-specific details or network-wide
      attributes.

      :param name: The name of the map storage function to query.
      :type name: str
      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int]
      :param params: A list of parameters to pass to the query function.
      :type params: Optional[List[object]], optional

      :returns: An object containing the map-like data structure, or ``None`` if not found.
      :rtype: QueryMapResult

      This function is particularly useful for analyzing and understanding complex network structures and
      relationships within the Bittensor ecosystem, such as inter-neuronal connections and stake distributions.



   .. py:method:: query_constant(module_name, constant_name, block = None)

      Retrieves a constant from the specified module on the Bittensor blockchain. This function is used to
      access fixed parameters or values defined within the blockchain's modules, which are essential for
      understanding the network's configuration and rules.

      :param module_name: The name of the module containing the constant.
      :type module_name: str
      :param constant_name: The name of the constant to retrieve.
      :type constant_name: str
      :param block: The blockchain block number at which to query the constant.
      :type block: Optional[int]

      :returns: The value of the constant if found, ``None`` otherwise.
      :rtype: Optional[ScaleType]

      Constants queried through this function can include critical network parameters such as inflation rates,
      consensus rules, or validation thresholds, providing a deeper understanding of the Bittensor network's
      operational parameters.



   .. py:method:: query_module(module, name, block = None, params = None)

      Queries any module storage on the Bittensor blockchain with the specified parameters and block number.
      This function is a generic query interface that allows for flexible and diverse data retrieval from
      various blockchain modules.

      :param module: The name of the module from which to query data.
      :type module: str
      :param name: The name of the storage function within the module.
      :type name: str
      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int]
      :param params: A list of parameters to pass to the query function.
      :type params: Optional[List[object]], optional

      :returns: An object containing the requested data if found, ``None`` otherwise.
      :rtype: Optional[ScaleType]

      This versatile query function is key to accessing a wide range of data and insights from different
      parts of the Bittensor blockchain, enhancing the understanding and analysis of the network's state and dynamics.



   .. py:method:: query_map(module, name, block = None, params = None)

      Queries map storage from any module on the Bittensor blockchain. This function retrieves data structures
      that represent key-value mappings, essential for accessing complex and structured data within the blockchain
      modules.

      :param module: The name of the module from which to query the map storage.
      :type module: str
      :param name: The specific storage function within the module to query.
      :type name: str
      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int]
      :param params: Parameters to be passed to the query.
      :type params: Optional[List[object]], optional

      :returns: A data structure representing the map storage if found, ``None`` otherwise.
      :rtype: result (QueryMapResult)

      This function is particularly useful for retrieving detailed and structured data from various blockchain
      modules, offering insights into the network's state and the relationships between its different components.



   .. py:method:: state_call(method, data, block = None)

      Makes a state call to the Bittensor blockchain, allowing for direct queries of the blockchain's state.
      This function is typically used for advanced queries that require specific method calls and data inputs.

      :param method: The method name for the state call.
      :type method: str
      :param data: The data to be passed to the method.
      :type data: str
      :param block: The blockchain block number at which to perform the state call.
      :type block: Optional[int]

      :returns: The result of the rpc call.
      :rtype: result (Dict[Any, Any])

      The state call function provides a more direct and flexible way of querying blockchain data,
      useful for specific use cases where standard queries are insufficient.



   .. py:method:: query_runtime_api(runtime_api, method, params, block = None)

      Queries the runtime API of the Bittensor blockchain, providing a way to interact with the underlying
      runtime and retrieve data encoded in Scale Bytes format. This function is essential for advanced users
      who need to interact with specific runtime methods and decode complex data types.

      :param runtime_api: The name of the runtime API to query.
      :type runtime_api: str
      :param method: The specific method within the runtime API to call.
      :type method: str
      :param params: The parameters to pass to the method call.
      :type params: Optional[List[ParamWithTypes]], optional
      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int]

      :returns: The Scale Bytes encoded result from the runtime API call, or ``None`` if the call fails.
      :rtype: Optional[bytes]

      This function enables access to the deeper layers of the Bittensor blockchain, allowing for detailed
      and specific interactions with the network's runtime environment.



   .. py:method:: _encode_params(call_definition, params)

      Returns a hex encoded string of the params using their types.



   .. py:method:: _get_hyperparameter(param_name, netuid, block = None)

      Retrieves a specified hyperparameter for a specific subnet.

      :param param_name: The name of the hyperparameter to retrieve.
      :type param_name: str
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]

      :returns:

                The value of the specified hyperparameter if the subnet exists, ``None``
                    otherwise.
      :rtype: Optional[Union[int, float]]



   .. py:method:: rho(netuid, block = None)

      Retrieves the 'Rho' hyperparameter for a specified subnet within the Bittensor network. 'Rho' represents the
      global inflation rate, which directly influences the network's token emission rate and economic model.

      .. note:: This is currently fixed such that the Bittensor blockchain emmits 7200 Tao per day.

      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number at which to query the parameter.
      :type block: Optional[int]

      :returns: The value of the 'Rho' hyperparameter if the subnet exists, ``None`` otherwise.
      :rtype: Optional[int]

      Mathematical Context:
          Rho (p) is calculated based on the network's target inflation and actual neuron staking.
          It adjusts the emission rate of the TAO token to balance the network's economy and dynamics.
          The formula for Rho is defined as: p = (Staking_Target / Staking_Actual) * Inflation_Target.
          Here, Staking_Target and Staking_Actual represent the desired and actual total stakes in the network,
          while Inflation_Target is the predefined inflation rate goal.

      'Rho' is essential for understanding the network's economic dynamics, affecting the reward distribution
      and incentive structures across the network's neurons.



   .. py:method:: kappa(netuid, block = None)

      Retrieves the 'Kappa' hyperparameter for a specified subnet. 'Kappa' is a critical parameter in
      the Bittensor network that controls the distribution of stake weights among neurons, impacting their
      rankings and incentive allocations.

      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]

      :returns: The value of the 'Kappa' hyperparameter if the subnet exists, None otherwise.
      :rtype: Optional[float]

      Mathematical Context:
          Kappa (κ) is used in the calculation of neuron ranks, which determine their share of network incentives.
          It is derived from the softmax function applied to the inter-neuronal weights set by each neuron.
          The formula for Kappa is: κ_i = exp(w_i) / Σ(exp(w_j)), where w_i represents the weight set by neuron i,
          and the denominator is the sum of exponential weights set by all neurons.
          This mechanism ensures a normalized and probabilistic distribution of ranks based on relative weights.

      Understanding 'Kappa' is crucial for analyzing stake dynamics and the consensus mechanism within the network,
      as it plays a significant role in neuron ranking and incentive allocation processes.



   .. py:method:: difficulty(netuid, block = None)

      Retrieves the 'Difficulty' hyperparameter for a specified subnet in the Bittensor network.
      This parameter is instrumental in determining the computational challenge required for neurons
      to participate in consensus and validation processes.

      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]

      :returns: The value of the 'Difficulty' hyperparameter if the subnet exists, ``None`` otherwise.
      :rtype: Optional[int]

      The 'Difficulty' parameter directly impacts the network's security and integrity by setting the
      computational effort required for validating transactions and participating in the network's consensus
      mechanism.



   .. py:method:: recycle(netuid, block = None)

      Retrieves the 'Burn' hyperparameter for a specified subnet. The 'Burn' parameter represents the
      amount of Tao that is effectively recycled within the Bittensor network.

      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]

      :returns: The value of the 'Burn' hyperparameter if the subnet exists, None otherwise.
      :rtype: Optional[Balance]

      Understanding the 'Burn' rate is essential for analyzing the network registration usage, particularly
      how it is correlated with user activity and the overall cost of participation in a given subnet.



   .. py:method:: immunity_period(netuid, block = None)

      Retrieves the 'ImmunityPeriod' hyperparameter for a specific subnet. This parameter defines the
      duration during which new neurons are protected from certain network penalties or restrictions.

      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]

      :returns: The value of the 'ImmunityPeriod' hyperparameter if the subnet exists, ``None`` otherwise.
      :rtype: Optional[int]

      The 'ImmunityPeriod' is a critical aspect of the network's governance system, ensuring that new
      participants have a grace period to establish themselves and contribute to the network without facing
      immediate punitive actions.



   .. py:method:: validator_batch_size(netuid, block = None)

      Returns network ValidatorBatchSize hyper parameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If None, the latest block
                    is used. Default is ``None``.
      :type block: Optional[int]

      :returns:

                The value of the ValidatorBatchSize hyperparameter, or None if the subnetwork does not exist
                    or the parameter is not found.
      :rtype: Optional[int]



   .. py:method:: validator_prune_len(netuid, block = None)

      Returns network ValidatorPruneLen hyper parameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If None, the latest block
      :type block: Optional[int]
      :param is used. Default is ``None``.:

      :returns: The value of the ValidatorPruneLen hyperparameter, or None if the subnetwork does not exist
                or the parameter is not found.
      :rtype: Optional[int]



   .. py:method:: validator_logits_divergence(netuid, block = None)

      Returns network ValidatorLogitsDivergence hyper parameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If None, the latest block
      :type block: Optional[int]
      :param is used. Default is ``None``.:

      :returns: The value of the ValidatorLogitsDivergence hyperparameter, or None if the subnetwork does
                not exist or the parameter is not found.
      :rtype: Optional[float]



   .. py:method:: validator_sequence_length(netuid, block = None)

      Returns network ValidatorSequenceLength hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                The value of the ValidatorSequenceLength hyperparameter, or ``None`` if the subnetwork does
                    not exist or the parameter is not found.
      :rtype: Optional[int]



   .. py:method:: validator_epochs_per_reset(netuid, block = None)

      Returns network ValidatorEpochsPerReset hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                The value of the ValidatorEpochsPerReset hyperparameter, or ``None`` if the subnetwork does
                    not exist or the parameter is not found.
      :rtype: Optional[int]



   .. py:method:: validator_epoch_length(netuid, block = None)

      Returns network ValidatorEpochLen hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                The value of the ValidatorEpochLen hyperparameter, or ``None`` if the subnetwork does not
                    exist or the parameter is not found.
      :rtype: Optional[int]



   .. py:method:: validator_exclude_quantile(netuid, block = None)

      Returns network ValidatorExcludeQuantile hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If ``None``, the latest block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns: The value of the ValidatorExcludeQuantile hyperparameter, or ``None`` if the subnetwork does not exist or the parameter is not found.
      :rtype: Optional[float]



   .. py:method:: max_allowed_validators(netuid, block = None)

      Returns network ValidatorExcludeQuantile hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                The value of the ValidatorExcludeQuantile hyperparameter, or ``None`` if the subnetwork
                    does not exist or the parameter is not found.
      :rtype: Optional[float]



   .. py:method:: min_allowed_weights(netuid, block = None)

      Returns network MinAllowedWeights hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                The value of the MinAllowedWeights hyperparameter, or ``None`` if the subnetwork does not
                    exist or the parameter is not found.
      :rtype: Optional[int]



   .. py:method:: max_weight_limit(netuid, block = None)

      Returns network MaxWeightsLimit hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                The value of the MaxWeightsLimit hyperparameter, or ``None`` if the subnetwork does not
                    exist or the parameter is not found.
      :rtype: Optional[float]



   .. py:method:: adjustment_alpha(netuid, block = None)

      Returns network AdjustmentAlpha hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                The value of the AdjustmentAlpha hyperparameter, or ``None`` if the subnetwork does not
                    exist or the parameter is not found.
      :rtype: Optional[float]



   .. py:method:: bonds_moving_avg(netuid, block = None)

      Returns network BondsMovingAverage hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                The value of the BondsMovingAverage hyperparameter, or ``None`` if the subnetwork does not
                    exist or the parameter is not found.
      :rtype: Optional[float]



   .. py:method:: scaling_law_power(netuid, block = None)

      Returns network ScalingLawPower hyper parameter



   .. py:method:: synergy_scaling_law_power(netuid, block = None)

      Returns network ScalingLawPower hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                The value of the ScalingLawPower hyperparameter, or ``None`` if the subnetwork does not
                    exist or the parameter is not found.
      :rtype: Optional[float]



   .. py:method:: subnetwork_n(netuid, block = None)

      Returns network SubnetworkN hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                The value of the SubnetworkN hyperparameter, or ``None`` if the subnetwork does not
                    exist or the parameter is not found.
      :rtype: Optional[int]



   .. py:method:: max_n(netuid, block = None)

      Returns network MaxAllowedUids hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                The value of the MaxAllowedUids hyperparameter, or ``None`` if the subnetwork does not
                    exist or the parameter is not found.
      :rtype: Optional[int]



   .. py:method:: blocks_since_epoch(netuid, block = None)

      Returns network BlocksSinceEpoch hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                The value of the BlocksSinceEpoch hyperparameter, or ``None`` if the subnetwork does not
                    exist or the parameter is not found.
      :rtype: Optional[int]



   .. py:method:: blocks_since_last_update(netuid, uid)

      Returns the number of blocks since the last update for a specific UID in the subnetwork.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param uid: The unique identifier of the neuron.
      :type uid: int

      :returns:

                The number of blocks since the last update, or ``None`` if the subnetwork or UID does not
                    exist.
      :rtype: Optional[int]



   .. py:method:: weights_rate_limit(netuid)

      Returns network WeightsSetRateLimit hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int

      :returns:

                The value of the WeightsSetRateLimit hyperparameter, or ``None`` if the subnetwork does not
                    exist or the parameter is not found.
      :rtype: Optional[int]



   .. py:method:: tempo(netuid, block = None)

      Returns network Tempo hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                The value of the Tempo hyperparameter, or ``None`` if the subnetwork does not
                    exist or the parameter is not found.
      :rtype: Optional[int]



   .. py:method:: get_total_stake_for_hotkey(ss58_address, block = None)

      Returns the total stake held on a hotkey including delegative.

      :param ss58_address: The SS58 address of the hotkey.
      :type ss58_address: str
      :param block: The block number to retrieve the stake from. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                The total stake held on the hotkey, or ``None`` if the hotkey does not
                    exist or the stake is not found.
      :rtype: Optional[Balance]



   .. py:method:: get_total_stake_for_coldkey(ss58_address, block = None)

      Returns the total stake held on a coldkey.

      :param ss58_address: The SS58 address of the coldkey.
      :type ss58_address: str
      :param block: The block number to retrieve the stake from. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                The total stake held on the coldkey, or ``None`` if the coldkey does not
                    exist or the stake is not found.
      :rtype: Optional[Balance]



   .. py:method:: get_stake_for_coldkey_and_hotkey(hotkey_ss58, coldkey_ss58, block = None)

      Returns the stake under a coldkey - hotkey pairing.

      :param hotkey_ss58: The SS58 address of the hotkey.
      :type hotkey_ss58: str
      :param coldkey_ss58: The SS58 address of the coldkey.
      :type coldkey_ss58: str
      :param block: The block number to retrieve the stake from. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                The stake under the coldkey - hotkey pairing, or ``None`` if the pairing does not
                    exist or the stake is not found.
      :rtype: Optional[Balance]



   .. py:method:: get_stake(hotkey_ss58, block = None)

      Returns a list of stake tuples (coldkey, balance) for each delegating coldkey including the owner.

      :param hotkey_ss58: The SS58 address of the hotkey.
      :type hotkey_ss58: str
      :param block: The block number to retrieve the stakes from. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                A list of tuples, each containing a coldkey SS58 address and the corresponding
                    balance staked by that coldkey.
      :rtype: List[Tuple[str, Balance]]



   .. py:method:: does_hotkey_exist(hotkey_ss58, block = None)

      Returns true if the hotkey is known by the chain and there are accounts.

      :param hotkey_ss58: The SS58 address of the hotkey.
      :type hotkey_ss58: str
      :param block: The block number to check the hotkey against. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns: ``True`` if the hotkey is known by the chain and there are accounts, ``False`` otherwise.
      :rtype: bool



   .. py:method:: get_hotkey_owner(hotkey_ss58, block = None)

      Returns the coldkey owner of the passed hotkey.

      :param hotkey_ss58: The SS58 address of the hotkey.
      :type hotkey_ss58: str
      :param block: The block number to check the hotkey owner against. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                The SS58 address of the coldkey owner, or ``None`` if the hotkey does not exist or the owner
                    is not found.
      :rtype: Optional[str]



   .. py:method:: get_axon_info(netuid, hotkey_ss58, block = None)

      Returns the axon information for this hotkey account.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param hotkey_ss58: The SS58 address of the hotkey.
      :type hotkey_ss58: str
      :param block: The block number to retrieve the axon information from. If ``None``, the
                    latest block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                An AxonInfo object containing the axon information, or ``None`` if the axon information
                    is not found.
      :rtype: Optional[AxonInfo]



   .. py:method:: get_prometheus_info(netuid, hotkey_ss58, block = None)

      Returns the prometheus information for this hotkey account.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param hotkey_ss58: The SS58 address of the hotkey.
      :type hotkey_ss58: str
      :param block: The block number to retrieve the prometheus information from. If ``None``,
                    the latest block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                A PrometheusInfo object containing the prometheus information, or ``None`` if the
                    prometheus information is not found.
      :rtype: Optional[PrometheusInfo]



   .. py:property:: block
      :type: int

      Returns current chain block.
      :returns:     Current chain block.
      :rtype: block (int)


   .. py:method:: total_issuance(block = None)

      Retrieves the total issuance of the Bittensor network's native token (Tao) as of a specific
      blockchain block. This represents the total amount of currency that has been issued or mined on the network.

      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int], optional

      :returns: The total issuance of TAO, represented as a Balance object.
      :rtype: Balance

      The total issuance is a key economic indicator in the Bittensor network, reflecting the overall supply
      of the currency and providing insights into the network's economic health and inflationary trends.



   .. py:method:: total_stake(block = None)

      Retrieves the total amount of TAO staked on the Bittensor network as of a specific blockchain block.
      This represents the cumulative stake across all neurons in the network, indicating the overall level
      of participation and investment by the network's participants.

      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int], optional

      :returns: The total amount of TAO staked on the network, represented as a Balance object.
      :rtype: Balance

      The total stake is an important metric for understanding the network's security, governance dynamics,
      and the level of commitment by its participants. It is also a critical factor in the network's
      consensus and incentive mechanisms.



   .. py:method:: serving_rate_limit(netuid, block = None)

      Retrieves the serving rate limit for a specific subnet within the Bittensor network.
      This rate limit determines how often you can change your node's IP address on the blockchain. Expressed in
      number of blocks. Applies to both subnet validator and subnet miner nodes. Used when you move your node to a new
      machine.

      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int], optional

      :returns: The serving rate limit of the subnet if it exists, ``None`` otherwise.
      :rtype: Optional[int]

      The serving rate limit is a crucial parameter for maintaining network efficiency and preventing
      overuse of resources by individual neurons. It helps ensure a balanced distribution of service
      requests across the network.



   .. py:method:: tx_rate_limit(block = None)

      Retrieves the transaction rate limit for the Bittensor network as of a specific blockchain block.
      This rate limit sets the maximum number of transactions that can be processed within a given time frame.

      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int], optional

      :returns: The transaction rate limit of the network, None if not available.
      :rtype: Optional[int]

      The transaction rate limit is an essential parameter for ensuring the stability and scalability
      of the Bittensor network. It helps in managing network load and preventing congestion, thereby
      maintaining efficient and timely transaction processing.



   .. py:method:: subnet_exists(netuid, block = None)

      Checks if a subnet with the specified unique identifier (netuid) exists within the Bittensor network.

      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number at which to check the subnet's existence.
      :type block: Optional[int], optional

      :returns: ``True`` if the subnet exists, False otherwise.
      :rtype: bool

      This function is critical for verifying the presence of specific subnets in the network,
      enabling a deeper understanding of the network's structure and composition.



   .. py:method:: get_all_subnet_netuids(block = None)

      Retrieves the list of all subnet unique identifiers (netuids) currently present in the Bittensor network.

      :param block: The blockchain block number at which to retrieve the subnet netuids.
      :type block: Optional[int], optional

      :returns: A list of subnet netuids.
      :rtype: List[int]

      This function provides a comprehensive view of the subnets within the Bittensor network,
      offering insights into its diversity and scale.



   .. py:method:: get_total_subnets(block = None)

      Retrieves the total number of subnets within the Bittensor network as of a specific blockchain block.

      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: The total number of subnets in the network.
      :rtype: int

      Understanding the total number of subnets is essential for assessing the network's growth and
      the extent of its decentralized infrastructure.



   .. py:method:: get_subnet_modality(netuid, block = None)

      Returns the NetworkModality hyperparameter for a specific subnetwork.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If ``None``, the latest block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns: The value of the NetworkModality hyperparameter, or ``None`` if the subnetwork does not exist or the parameter is not found.
      :rtype: Optional[int]



   .. py:method:: get_subnet_connection_requirement(netuid_0, netuid_1, block = None)


   .. py:method:: get_emission_value_by_subnet(netuid, block = None)

      Retrieves the emission value of a specific subnet within the Bittensor network. The emission value
      represents the rate at which the subnet emits or distributes the network's native token (Tao).

      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: The emission value of the subnet, None if not available.
      :rtype: Optional[float]

      The emission value is a critical economic parameter, influencing the incentive distribution and
      reward mechanisms within the subnet.



   .. py:method:: get_subnet_connection_requirements(netuid, block = None)

      Retrieves the connection requirements for a specific subnet within the Bittensor network. This
      function provides details on the criteria that must be met for neurons to connect to the subnet.

      :param netuid: The network UID of the subnet to query.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: A dictionary detailing the connection requirements for the subnet.
      :rtype: Dict[str, int]

      Understanding these requirements is crucial for neurons looking to participate in or interact
      with specific subnets, ensuring compliance with their connection standards.



   .. py:method:: get_subnets(block = None)

      Retrieves a list of all subnets currently active within the Bittensor network. This function
      provides an overview of the various subnets and their identifiers.

      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: A list of network UIDs representing each active subnet.
      :rtype: List[int]

      This function is valuable for understanding the network's structure and the diversity of subnets
      available for neuron participation and collaboration.



   .. py:method:: get_all_subnets_info(block = None)

      Retrieves detailed information about all subnets within the Bittensor network. This function
      provides comprehensive data on each subnet, including its characteristics and operational parameters.

      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: A list of SubnetInfo objects, each containing detailed information about a subnet.
      :rtype: List[SubnetInfo]

      Gaining insights into the subnets' details assists in understanding the network's composition,
      the roles of different subnets, and their unique features.



   .. py:method:: get_subnet_info(netuid, block = None)

      Retrieves detailed information about a specific subnet within the Bittensor network. This function
      provides key data on the subnet, including its operational parameters and network status.

      :param netuid: The network UID of the subnet to query.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: Detailed information about the subnet, or ``None`` if not found.
      :rtype: Optional[SubnetInfo]

      This function is essential for neurons and stakeholders interested in the specifics of a particular
      subnet, including its governance, performance, and role within the broader network.



   .. py:method:: get_subnet_hyperparameters(netuid, block = None)

      Retrieves the hyperparameters for a specific subnet within the Bittensor network. These hyperparameters
      define the operational settings and rules governing the subnet's behavior.

      :param netuid: The network UID of the subnet to query.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: The subnet's hyperparameters, or ``None`` if not available.
      :rtype: Optional[SubnetHyperparameters]

      Understanding the hyperparameters is crucial for comprehending how subnets are configured and
      managed, and how they interact with the network's consensus and incentive mechanisms.



   .. py:method:: get_subnet_owner(netuid, block = None)

      Retrieves the owner's address of a specific subnet within the Bittensor network. The owner is
      typically the entity responsible for the creation and maintenance of the subnet.

      :param netuid: The network UID of the subnet to query.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: The SS58 address of the subnet's owner, or ``None`` if not available.
      :rtype: Optional[str]

      Knowing the subnet owner provides insights into the governance and operational control of the subnet,
      which can be important for decision-making and collaboration within the network.



   .. py:method:: is_hotkey_delegate(hotkey_ss58, block = None)

      Determines whether a given hotkey (public key) is a delegate on the Bittensor network. This function
      checks if the neuron associated with the hotkey is part of the network's delegation system.

      :param hotkey_ss58: The SS58 address of the neuron's hotkey.
      :type hotkey_ss58: str
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: ``True`` if the hotkey is a delegate, ``False`` otherwise.
      :rtype: bool

      Being a delegate is a significant status within the Bittensor network, indicating a neuron's
      involvement in consensus and governance processes.



   .. py:method:: get_delegate_take(hotkey_ss58, block = None)

      Retrieves the delegate 'take' percentage for a neuron identified by its hotkey. The 'take'
      represents the percentage of rewards that the delegate claims from its nominators' stakes.

      :param hotkey_ss58: The ``SS58`` address of the neuron's hotkey.
      :type hotkey_ss58: str
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: The delegate take percentage, None if not available.
      :rtype: Optional[float]

      The delegate take is a critical parameter in the network's incentive structure, influencing
      the distribution of rewards among neurons and their nominators.



   .. py:method:: get_nominators_for_hotkey(hotkey_ss58, block = None)

      Retrieves a list of nominators and their stakes for a neuron identified by its hotkey.
      Nominators are neurons that stake their tokens on a delegate to support its operations.

      :param hotkey_ss58: The ``SS58`` address of the neuron's hotkey.
      :type hotkey_ss58: str
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: A list of tuples containing each nominator's address and staked amount or 0.
      :rtype: Union[List[Tuple[str, Balance]], int]

      This function provides insights into the neuron's support network within the Bittensor ecosystem,
      indicating its trust and collaboration relationships.



   .. py:method:: get_delegate_by_hotkey(hotkey_ss58, block = None)

      Retrieves detailed information about a delegate neuron based on its hotkey. This function provides
      a comprehensive view of the delegate's status, including its stakes, nominators, and reward distribution.

      :param hotkey_ss58: The ``SS58`` address of the delegate's hotkey.
      :type hotkey_ss58: str
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: Detailed information about the delegate neuron, ``None`` if not found.
      :rtype: Optional[DelegateInfo]

      This function is essential for understanding the roles and influence of delegate neurons within
      the Bittensor network's consensus and governance structures.



   .. py:method:: get_delegates_lite(block = None)

      Retrieves a lighter list of all delegate neurons within the Bittensor network. This function provides an
      overview of the neurons that are actively involved in the network's delegation system.

      Analyzing the delegate population offers insights into the network's governance dynamics and the distribution
      of trust and responsibility among participating neurons.

      This is a lighter version of :func:`get_delegates`.

      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: A list of ``DelegateInfoLite`` objects detailing each delegate's characteristics.
      :rtype: List[DelegateInfoLite]



   .. py:method:: get_delegates(block = None)

      Retrieves a list of all delegate neurons within the Bittensor network. This function provides an overview of the
      neurons that are actively involved in the network's delegation system.

      Analyzing the delegate population offers insights into the network's governance dynamics and the distribution of
      trust and responsibility among participating neurons.

      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: A list of DelegateInfo objects detailing each delegate's characteristics.
      :rtype: List[DelegateInfo]



   .. py:method:: get_delegated(coldkey_ss58, block = None)

      Retrieves a list of delegates and their associated stakes for a given coldkey. This function
      identifies the delegates that a specific account has staked tokens on.

      :param coldkey_ss58: The ``SS58`` address of the account's coldkey.
      :type coldkey_ss58: str
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns:

                A list of tuples, each containing a delegate's information and staked
                    amount.
      :rtype: List[Tuple[DelegateInfo, Balance]]

      This function is important for account holders to understand their stake allocations and their
      involvement in the network's delegation and consensus mechanisms.



   .. py:method:: get_childkey_take(hotkey, netuid, block = None)

      Get the childkey take of a hotkey on a specific network.
      Args:
      - hotkey (str): The hotkey to search for.
      - netuid (int): The netuid to search for.
      - block (Optional[int]): Optional parameter specifying the block number. Defaults to None.

      Returns:
      - Optional[int]: The value of the "ChildkeyTake" if found, or None if any error occurs.



   .. py:method:: get_children(hotkey, netuid)

      Get the children of a hotkey on a specific network.
      :param hotkey: The hotkey to query.
      :type hotkey: str
      :param netuid: The network ID.
      :type netuid: int

      :returns: List of (proportion, child_address) tuples, or None if an error occurred.
      :rtype: list or None



   .. py:method:: get_parents(child_hotkey, netuid)

      Get the parents of a child hotkey on a specific network.
      :param child_hotkey: The child hotkey to query.
      :type child_hotkey: str
      :param netuid: The network ID.
      :type netuid: int

      :returns: List of (proportion, parent_address) tuples, or None if an error occurred.
      :rtype: list or None



   .. py:method:: get_stake_info_for_coldkey(coldkey_ss58, block = None)

      Retrieves stake information associated with a specific coldkey. This function provides details
      about the stakes held by an account, including the staked amounts and associated delegates.

      :param coldkey_ss58: The ``SS58`` address of the account's coldkey.
      :type coldkey_ss58: str
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: A list of StakeInfo objects detailing the stake allocations for the account.
      :rtype: List[StakeInfo]

      Stake information is vital for account holders to assess their investment and participation
      in the network's delegation and consensus processes.



   .. py:method:: get_stake_info_for_coldkeys(coldkey_ss58_list, block = None)

      Retrieves stake information for a list of coldkeys. This function aggregates stake data for multiple
      accounts, providing a collective view of their stakes and delegations.

      :param coldkey_ss58_list: A list of ``SS58`` addresses of the accounts' coldkeys.
      :type coldkey_ss58_list: List[str]
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: A dictionary mapping each coldkey to a list of its StakeInfo objects.
      :rtype: Dict[str, List[StakeInfo]]

      This function is useful for analyzing the stake distribution and delegation patterns of multiple
      accounts simultaneously, offering a broader perspective on network participation and investment strategies.



   .. py:method:: get_minimum_required_stake()

      Returns the minimum required stake for nominators in the Subtensor network.

      This method retries the substrate call up to three times with exponential backoff in case of failures.

      :returns: The minimum required stake as a Balance object.
      :rtype: Balance

      :raises Exception: If the substrate call fails after the maximum number of retries.



   .. py:method:: is_hotkey_registered_any(hotkey_ss58, block = None)

      Checks if a neuron's hotkey is registered on any subnet within the Bittensor network.

      :param hotkey_ss58: The ``SS58`` address of the neuron's hotkey.
      :type hotkey_ss58: str
      :param block: The blockchain block number at which to perform the check.
      :type block: Optional[int]

      :returns: ``True`` if the hotkey is registered on any subnet, False otherwise.
      :rtype: bool

      This function is essential for determining the network-wide presence and participation of a neuron.



   .. py:method:: is_hotkey_registered_on_subnet(hotkey_ss58, netuid, block = None)

      Checks if a neuron's hotkey is registered on a specific subnet within the Bittensor network.

      :param hotkey_ss58: The ``SS58`` address of the neuron's hotkey.
      :type hotkey_ss58: str
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number at which to perform the check.
      :type block: Optional[int]

      :returns: ``True`` if the hotkey is registered on the specified subnet, False otherwise.
      :rtype: bool

      This function helps in assessing the participation of a neuron in a particular subnet,
      indicating its specific area of operation or influence within the network.



   .. py:method:: is_hotkey_registered(hotkey_ss58, netuid = None, block = None)

      Determines whether a given hotkey (public key) is registered in the Bittensor network, either
      globally across any subnet or specifically on a specified subnet. This function checks the registration
      status of a neuron identified by its hotkey, which is crucial for validating its participation and
      activities within the network.

      :param hotkey_ss58: The SS58 address of the neuron's hotkey.
      :type hotkey_ss58: str
      :param netuid: The unique identifier of the subnet to check the registration. If ``None``, the
                     registration is checked across all subnets.
      :type netuid: Optional[int]
      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int]

      :returns:

                ``True`` if the hotkey is registered in the specified context (either any subnet or a specific
                    subnet), ``False`` otherwise.
      :rtype: bool

      This function is important for verifying the active status of neurons in the Bittensor network. It aids
      in understanding whether a neuron is eligible to participate in network processes such as consensus,
      validation, and incentive distribution based on its registration status.



   .. py:method:: get_uid_for_hotkey_on_subnet(hotkey_ss58, netuid, block = None)

      Retrieves the unique identifier (UID) for a neuron's hotkey on a specific subnet.

      :param hotkey_ss58: The ``SS58`` address of the neuron's hotkey.
      :type hotkey_ss58: str
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]

      :returns: The UID of the neuron if it is registered on the subnet, ``None`` otherwise.
      :rtype: Optional[int]

      The UID is a critical identifier within the network, linking the neuron's hotkey to its
      operational and governance activities on a particular subnet.



   .. py:method:: get_all_uids_for_hotkey(hotkey_ss58, block = None)

      Retrieves all unique identifiers (UIDs) associated with a given hotkey across different subnets
      within the Bittensor network. This function helps in identifying all the neuron instances that are
      linked to a specific hotkey.

      :param hotkey_ss58: The ``SS58`` address of the neuron's hotkey.
      :type hotkey_ss58: str
      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int]

      :returns: A list of UIDs associated with the given hotkey across various subnets.
      :rtype: List[int]

      This function is important for tracking a neuron's presence and activities across different
      subnets within the Bittensor ecosystem.



   .. py:method:: get_netuids_for_hotkey(hotkey_ss58, block = None)

      Retrieves a list of subnet UIDs (netuids) for which a given hotkey is a member. This function
      identifies the specific subnets within the Bittensor network where the neuron associated with
      the hotkey is active.

      :param hotkey_ss58: The ``SS58`` address of the neuron's hotkey.
      :type hotkey_ss58: str
      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int]

      :returns: A list of netuids where the neuron is a member.
      :rtype: List[int]



   .. py:method:: get_neuron_for_pubkey_and_subnet(hotkey_ss58, netuid, block = None)

      Retrieves information about a neuron based on its public key (hotkey SS58 address) and the specific
      subnet UID (netuid). This function provides detailed neuron information for a particular subnet within
      the Bittensor network.

      :param hotkey_ss58: The ``SS58`` address of the neuron's hotkey.
      :type hotkey_ss58: str
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int]

      :returns: Detailed information about the neuron if found, ``None`` otherwise.
      :rtype: Optional[NeuronInfo]

      This function is crucial for accessing specific neuron data and understanding its status, stake,
      and other attributes within a particular subnet of the Bittensor ecosystem.



   .. py:method:: get_all_neurons_for_pubkey(hotkey_ss58, block = None)

      Retrieves information about all neuron instances associated with a given public key (hotkey ``SS58``
      address) across different subnets of the Bittensor network. This function aggregates neuron data
      from various subnets to provide a comprehensive view of a neuron's presence and status within the network.

      :param hotkey_ss58: The ``SS58`` address of the neuron's hotkey.
      :type hotkey_ss58: str
      :param block: The blockchain block number for the query.
      :type block: Optional[int]

      :returns: A list of NeuronInfo objects detailing the neuron's presence across various subnets.
      :rtype: List[NeuronInfo]

      This function is valuable for analyzing a neuron's overall participation, influence, and
      contributions across the Bittensor network.



   .. py:method:: neuron_has_validator_permit(uid, netuid, block = None)

      Checks if a neuron, identified by its unique identifier (UID), has a validator permit on a specific
      subnet within the Bittensor network. This function determines whether the neuron is authorized to
      participate in validation processes on the subnet.

      :param uid: The unique identifier of the neuron.
      :type uid: int
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]

      :returns: ``True`` if the neuron has a validator permit, False otherwise.
      :rtype: Optional[bool]

      This function is essential for understanding a neuron's role and capabilities within a specific
      subnet, particularly regarding its involvement in network validation and governance.



   .. py:method:: neuron_for_wallet(wallet, netuid, block = None)

      Retrieves information about a neuron associated with a given wallet on a specific subnet.
      This function provides detailed data about the neuron's status, stake, and activities based on
      the wallet's hotkey address.

      :param wallet: The wallet associated with the neuron.
      :type wallet: bittensor.wallet
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int]

      :returns: Detailed information about the neuron if found, ``None`` otherwise.
      :rtype: Optional[NeuronInfo]

      This function is important for wallet owners to understand and manage their neuron's presence
      and activities within a particular subnet of the Bittensor network.



   .. py:method:: neuron_for_uid(uid, netuid, block = None)

      Retrieves detailed information about a specific neuron identified by its unique identifier (UID)
      within a specified subnet (netuid) of the Bittensor network. This function provides a comprehensive
      view of a neuron's attributes, including its stake, rank, and operational status.

      :param uid: The unique identifier of the neuron.
      :type uid: int
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: Detailed information about the neuron if found, ``None`` otherwise.
      :rtype: NeuronInfo

      This function is crucial for analyzing individual neurons' contributions and status within a specific
      subnet, offering insights into their roles in the network's consensus and validation mechanisms.



   .. py:method:: neurons(netuid, block = None)

      Retrieves a list of all neurons within a specified subnet of the Bittensor network. This function
      provides a snapshot of the subnet's neuron population, including each neuron's attributes and network
      interactions.

      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: A list of NeuronInfo objects detailing each neuron's characteristics in the subnet.
      :rtype: List[NeuronInfo]

      Understanding the distribution and status of neurons within a subnet is key to comprehending the
      network's decentralized structure and the dynamics of its consensus and governance processes.



   .. py:method:: neuron_for_uid_lite(uid, netuid, block = None)

      Retrieves a lightweight version of information about a neuron in a specific subnet, identified by
      its UID. The 'lite' version focuses on essential attributes such as stake and network activity.

      :param uid: The unique identifier of the neuron.
      :type uid: int
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: A simplified version of neuron information if found, ``None`` otherwise.
      :rtype: Optional[NeuronInfoLite]

      This function is useful for quick and efficient analyses of neuron status and activities within a
      subnet without the need for comprehensive data retrieval.



   .. py:method:: neurons_lite(netuid, block = None)

      Retrieves a list of neurons in a 'lite' format from a specific subnet of the Bittensor network.
      This function provides a streamlined view of the neurons, focusing on key attributes such as stake
      and network participation.

      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: A list of simplified neuron information for the subnet.
      :rtype: List[NeuronInfoLite]

      This function offers a quick overview of the neuron population within a subnet, facilitating
      efficient analysis of the network's decentralized structure and neuron dynamics.



   .. py:method:: metagraph(netuid, lite = True, block = None)

      Returns a synced metagraph for a specified subnet within the Bittensor network. The metagraph
      represents the network's structure, including neuron connections and interactions.

      :param netuid: The network UID of the subnet to query.
      :type netuid: int
      :param lite: If true, returns a metagraph using a lightweight sync (no weights, no bonds).
      :type lite: bool, default=True
      :param block: Block number for synchronization, or ``None`` for the latest block.
      :type block: Optional[int]

      :returns: The metagraph representing the subnet's structure and neuron relationships.
      :rtype: bittensor.Metagraph

      The metagraph is an essential tool for understanding the topology and dynamics of the Bittensor
      network's decentralized architecture, particularly in relation to neuron interconnectivity and consensus
          processes.



   .. py:method:: incentive(netuid, block = None)

      Retrieves the list of incentives for neurons within a specific subnet of the Bittensor network.
      This function provides insights into the reward distribution mechanisms and the incentives allocated
      to each neuron based on their contributions and activities.

      :param netuid: The network UID of the subnet to query.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]

      :returns: The list of incentives for neurons within the subnet, indexed by UID.
      :rtype: List[int]

      Understanding the incentive structure is crucial for analyzing the network's economic model and
      the motivational drivers for neuron participation and collaboration.



   .. py:method:: weights(netuid, block = None)

      Retrieves the weight distribution set by neurons within a specific subnet of the Bittensor network.
      This function maps each neuron's UID to the weights it assigns to other neurons, reflecting the
      network's trust and value assignment mechanisms.

      :param netuid: The network UID of the subnet to query.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]

      :returns: A list of tuples mapping each neuron's UID to its assigned weights.
      :rtype: List[Tuple[int, List[Tuple[int, int]]]]

      The weight distribution is a key factor in the network's consensus algorithm and the ranking of neurons,
      influencing their influence and reward allocation within the subnet.



   .. py:method:: bonds(netuid, block = None)

      Retrieves the bond distribution set by neurons within a specific subnet of the Bittensor network.
      Bonds represent the investments or commitments made by neurons in one another, indicating a level
      of trust and perceived value. This bonding mechanism is integral to the network's market-based approach
      to measuring and rewarding machine intelligence.

      :param netuid: The network UID of the subnet to query.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]

      :returns:

                A list of tuples mapping each neuron's UID to its bonds with other
                    neurons.
      :rtype: List[Tuple[int, List[Tuple[int, int]]]]

      Understanding bond distributions is crucial for analyzing the trust dynamics and market behavior
      within the subnet. It reflects how neurons recognize and invest in each other's intelligence and
      contributions, supporting diverse and niche systems within the Bittensor ecosystem.



   .. py:method:: get_subnet_burn_cost(block = None)

      Retrieves the burn cost for registering a new subnet within the Bittensor network. This cost
      represents the amount of Tao that needs to be locked or burned to establish a new subnet.

      :param block: The blockchain block number for the query.
      :type block: Optional[int]

      :returns: The burn cost for subnet registration.
      :rtype: int

      The subnet burn cost is an important economic parameter, reflecting the network's mechanisms for
      controlling the proliferation of subnets and ensuring their commitment to the network's long-term viability.



   .. py:method:: _do_delegation(wallet, delegate_ss58, amount, wait_for_inclusion = True, wait_for_finalization = False)

      Delegates a specified amount of stake to a delegate's hotkey.

      This method sends a transaction to add stake to a delegate's hotkey and retries the call up to three times
      with exponential backoff in case of failures.

      :param wallet: The wallet from which the stake will be delegated.
      :type wallet: bittensor.wallet
      :param delegate_ss58: The SS58 address of the delegate's hotkey.
      :type delegate_ss58: str
      :param amount: The amount of stake to be delegated.
      :type amount: Balance
      :param wait_for_inclusion: Whether to wait for the transaction to be included in a block. Default is ``True``.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Whether to wait for the transaction to be finalized. Default is ``False``.
      :type wait_for_finalization: bool, optional

      :returns: ``True`` if the delegation is successful, ``False`` otherwise.
      :rtype: bool



   .. py:method:: _do_undelegation(wallet, delegate_ss58, amount, wait_for_inclusion = True, wait_for_finalization = False)

      Removes a specified amount of stake from a delegate's hotkey.

      This method sends a transaction to remove stake from a delegate's hotkey and retries the call up to three times
      with exponential backoff in case of failures.

      :param wallet: The wallet from which the stake will be removed.
      :type wallet: bittensor.wallet
      :param delegate_ss58: The SS58 address of the delegate's hotkey.
      :type delegate_ss58: str
      :param amount: The amount of stake to be removed.
      :type amount: Balance
      :param wait_for_inclusion: Whether to wait for the transaction to be included in a block. Default is ``True``.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Whether to wait for the transaction to be finalized. Default is ``False``.
      :type wait_for_finalization: bool, optional

      :returns: ``True`` if the undelegation is successful, ``False`` otherwise.
      :rtype: bool



   .. py:method:: _do_nominate(wallet, wait_for_inclusion = True, wait_for_finalization = False)

      Nominates the wallet's hotkey to become a delegate.

      This method sends a transaction to nominate the wallet's hotkey to become a delegate and retries the call up to
      three times with exponential backoff in case of failures.

      :param wallet: The wallet whose hotkey will be nominated.
      :type wallet: bittensor.wallet
      :param wait_for_inclusion: Whether to wait for the transaction to be included in a block. Default is ``True``.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Whether to wait for the transaction to be finalized. Default is ``False``.
      :type wait_for_finalization: bool, optional

      :returns: ``True`` if the nomination is successful, ``False`` otherwise.
      :rtype: bool



   .. py:method:: _do_increase_take(wallet, hotkey_ss58, take, wait_for_inclusion = True, wait_for_finalization = False)

      Increases the take rate for a delegate's hotkey.

      This method sends a transaction to increase the take rate for a delegate's hotkey and retries the call up to
      three times with exponential backoff in case of failures.

      :param wallet: The wallet from which the transaction will be signed.
      :type wallet: bittensor.wallet
      :param hotkey_ss58: The SS58 address of the delegate's hotkey.
      :type hotkey_ss58: str
      :param take: The new take rate to be set.
      :type take: int
      :param wait_for_inclusion: Whether to wait for the transaction to be included in a block. Default is ``True``.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Whether to wait for the transaction to be finalized. Default is ``False``.
      :type wait_for_finalization: bool, optional

      :returns: ``True`` if the take rate increase is successful, ``False`` otherwise.
      :rtype: bool



   .. py:method:: _do_decrease_take(wallet, hotkey_ss58, take, wait_for_inclusion = True, wait_for_finalization = False)

      Decreases the take rate for a delegate's hotkey.

      This method sends a transaction to decrease the take rate for a delegate's hotkey and retries the call up to
      three times with exponential backoff in case of failures.

      :param wallet: The wallet from which the transaction will be signed.
      :type wallet: bittensor.wallet
      :param hotkey_ss58: The SS58 address of the delegate's hotkey.
      :type hotkey_ss58: str
      :param take: The new take rate to be set.
      :type take: int
      :param wait_for_inclusion: Whether to wait for the transaction to be included in a block. Default is ``True``.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Whether to wait for the transaction to be finalized. Default is ``False``.
      :type wait_for_finalization: bool, optional

      :returns: ``True`` if the take rate decrease is successful, ``False`` otherwise.
      :rtype: bool



   .. py:method:: get_balance(address, block = None)

      Retrieves the token balance of a specific address within the Bittensor network. This function queries
      the blockchain to determine the amount of Tao held by a given account.

      :param address: The Substrate address in ``ss58`` format.
      :type address: str
      :param block: The blockchain block number at which to perform the query.
      :type block: int, optional

      :returns: The account balance at the specified block, represented as a Balance object.
      :rtype: Balance

      This function is important for monitoring account holdings and managing financial transactions
      within the Bittensor ecosystem. It helps in assessing the economic status and capacity of network participants.



   .. py:method:: get_current_block()

      Returns the current block number on the Bittensor blockchain. This function provides the latest block
      number, indicating the most recent state of the blockchain.

      :returns: The current chain block number.
      :rtype: int

      Knowing the current block number is essential for querying real-time data and performing time-sensitive
      operations on the blockchain. It serves as a reference point for network activities and data synchronization.



   .. py:method:: get_balances(block = None)

      Retrieves the token balances of all accounts within the Bittensor network as of a specific blockchain block.
      This function provides a comprehensive view of the token distribution among different accounts.

      :param block: The blockchain block number at which to perform the query.
      :type block: int, optional

      :returns: A dictionary mapping each account's ``ss58`` address to its balance.
      :rtype: Dict[str, Balance]

      This function is valuable for analyzing the overall economic landscape of the Bittensor network,
      including the distribution of financial resources and the financial status of network participants.



   .. py:method:: _null_neuron()
      :staticmethod:



   .. py:method:: get_block_hash(block_id)

      Retrieves the hash of a specific block on the Bittensor blockchain. The block hash is a unique
      identifier representing the cryptographic hash of the block's content, ensuring its integrity and
      immutability.

      :param block_id: The block number for which the hash is to be retrieved.
      :type block_id: int

      :returns: The cryptographic hash of the specified block.
      :rtype: str

      The block hash is a fundamental aspect of blockchain technology, providing a secure reference to
      each block's data. It is crucial for verifying transactions, ensuring data consistency, and
      maintaining the trustworthiness of the blockchain.



   .. py:method:: get_error_info_by_index(error_index)

      Returns the error name and description from the Subtensor error list.

      :param error_index: The index of the error to retrieve.
      :type error_index: int

      :returns: A tuple containing the error name and description from substrate metadata. If the error index is not found, returns ("Unknown Error", "") and logs a warning.
      :rtype: Tuple[str, str]



.. py:class:: cli(config = None, args = None)

   Implementation of the Command Line Interface (CLI) class for the Bittensor protocol.
   This class handles operations like key management (hotkey and coldkey) and token transfer.

   Initializes a bittensor.CLI object.

   :param config: The configuration settings for the CLI.
   :type config: bittensor.config, optional
   :param args: List of command line arguments.
   :type args: List[str], optional


   .. py:attribute:: config


   .. py:method:: __create_parser__()
      :staticmethod:


      Creates the argument parser for the Bittensor CLI.

      :returns: An argument parser object for Bittensor CLI.
      :rtype: argparse.ArgumentParser



   .. py:method:: create_config(args)
      :staticmethod:


      From the argument parser, add config to bittensor.executor and local config

      :param args: List of command line arguments.
      :type args: List[str]

      :returns: The configuration object for Bittensor CLI.
      :rtype: bittensor.config



   .. py:method:: check_config(config)
      :staticmethod:


      Checks if the essential configuration exists under different command

      :param config: The configuration settings for the CLI.
      :type config: bittensor.config



   .. py:method:: run()

      Executes the command from the configuration.



.. py:data:: ALL_COMMANDS

.. py:data:: logging

.. py:data:: metagraph

.. py:class:: PriorityThreadPoolExecutor(maxsize=-1, max_workers=None, thread_name_prefix='', initializer=None, initargs=())

   Bases: :py:obj:`concurrent.futures._base.Executor`


   Base threadpool executor with a priority queue

   Initializes a new `ThreadPoolExecutor <https://docs.python.org/3/library/concurrent.futures.html#threadpoolexecutor>`_ instance.

   :param max_workers: The maximum number of threads that can be used to
                       execute the given calls.
   :param thread_name_prefix: An optional name prefix to give our threads.
   :param initializer: An callable used to initialize worker threads.
   :param initargs: A tuple of arguments to pass to the initializer.


   .. py:attribute:: _counter


   .. py:attribute:: _max_workers


   .. py:attribute:: _work_queue


   .. py:attribute:: _idle_semaphore


   .. py:attribute:: _threads


   .. py:attribute:: _broken
      :value: False



   .. py:attribute:: _shutdown
      :value: False



   .. py:attribute:: _shutdown_lock


   .. py:attribute:: _thread_name_prefix


   .. py:attribute:: _initializer


   .. py:attribute:: _initargs


   .. py:method:: add_args(parser, prefix = None)
      :classmethod:


      Accept specific arguments from parser



   .. py:method:: config()
      :classmethod:


      Get config from the argument parser.

      Return: :func:`bittensor.config` object.



   .. py:property:: is_empty


   .. py:method:: submit(fn, *args, **kwargs)

      Submits a callable to be executed with the given arguments.

      Schedules the callable to be executed as fn(*args, **kwargs) and returns
      a Future instance representing the execution of the callable.

      :returns: A Future representing the given call.



   .. py:method:: _adjust_thread_count()


   .. py:method:: _initializer_failed()


   .. py:method:: shutdown(wait=True)

      Clean-up the resources associated with the Executor.

      It is safe to call this method several times. Otherwise, no other
      methods can be called after this one.

      :param wait: If True then shutdown will not return until all running
                   futures have finished executing and the resources used by the
                   executor have been reclaimed.
      :param cancel_futures: If True then shutdown will cancel all pending
                             futures. Futures that are completed or running will not be
                             cancelled.



.. py:class:: TerminalInfo(/, **data)

   Bases: :py:obj:`pydantic.BaseModel`


   TerminalInfo encapsulates detailed information about a network synapse (node) involved in a communication process.

   This class serves as a metadata carrier,
   providing essential details about the state and configuration of a terminal during network interactions. This is a crucial class in the Bittensor framework.

   The TerminalInfo class contains information such as HTTP status codes and messages, processing times,
   IP addresses, ports, Bittensor version numbers, and unique identifiers. These details are vital for
   maintaining network reliability, security, and efficient data flow within the Bittensor network.

   This class includes Pydantic validators and root validators to enforce data integrity and format. It is
   designed to be used natively within Synapses, so that you will not need to call this directly, but rather
   is used as a helper class for Synapses.

   :param status_code: HTTP status code indicating the result of a network request. Essential for identifying the outcome of network interactions.
   :type status_code: int
   :param status_message: Descriptive message associated with the status code, providing additional context about the request's result.
   :type status_message: str
   :param process_time: Time taken by the terminal to process the call, important for performance monitoring and optimization.
   :type process_time: float
   :param ip: IP address of the terminal, crucial for network routing and data transmission.
   :type ip: str
   :param port: Network port used by the terminal, key for establishing network connections.
   :type port: int
   :param version: Bittensor version running on the terminal, ensuring compatibility between different nodes in the network.
   :type version: int
   :param nonce: Unique, monotonically increasing number for each terminal, aiding in identifying and ordering network interactions.
   :type nonce: int
   :param uuid: Unique identifier for the terminal, fundamental for network security and identification.
   :type uuid: str
   :param hotkey: Encoded hotkey string of the terminal wallet, important for transaction and identity verification in the network.
   :type hotkey: str
   :param signature: Digital signature verifying the tuple of nonce, axon_hotkey, dendrite_hotkey, and uuid, critical for ensuring data authenticity and security.
   :type signature: str

   Usage::

       # Creating a TerminalInfo instance
       terminal_info = TerminalInfo(
           status_code=200,
           status_message="Success",
           process_time=0.1,
           ip="198.123.23.1",
           port=9282,
           version=111,
           nonce=111111,
           uuid="5ecbd69c-1cec-11ee-b0dc-e29ce36fec1a",
           hotkey="5EnjDGNqqWnuL2HCAdxeEtN2oqtXZw6BMBe936Kfy2PFz1J1",
           signature="0x0813029319030129u4120u10841824y0182u091u230912u"
       )

       # Accessing TerminalInfo attributes
       ip_address = terminal_info.ip
       processing_duration = terminal_info.process_time

       # TerminalInfo can be used to monitor and verify network interactions, ensuring proper communication and security within the Bittensor network.

   TerminalInfo plays a pivotal role in providing transparency and control over network operations, making it an indispensable tool for developers and users interacting with the Bittensor ecosystem.

   Create a new model by parsing and validating input data from keyword arguments.

   Raises [`ValidationError`][pydantic_core.ValidationError] if the input data cannot be
   validated to form a valid model.

   `self` is explicitly positional-only to allow `self` as a field name.


   .. py:attribute:: model_config

      Configuration for the model, should be a dictionary conforming to [`ConfigDict`][pydantic.config.ConfigDict].


   .. py:attribute:: status_code
      :type:  Optional[int]


   .. py:attribute:: status_message
      :type:  Optional[str]


   .. py:attribute:: process_time
      :type:  Optional[float]


   .. py:attribute:: ip
      :type:  Optional[str]


   .. py:attribute:: port
      :type:  Optional[int]


   .. py:attribute:: version
      :type:  Optional[int]


   .. py:attribute:: nonce
      :type:  Optional[int]


   .. py:attribute:: uuid
      :type:  Optional[str]


   .. py:attribute:: hotkey
      :type:  Optional[str]


   .. py:attribute:: signature
      :type:  Optional[str]


   .. py:attribute:: _extract_process_time


   .. py:attribute:: _extract_port


   .. py:attribute:: _extract_version


   .. py:attribute:: _extract_nonce


   .. py:attribute:: _extract_status_code


.. py:class:: Synapse(/, **data)

   Bases: :py:obj:`pydantic.BaseModel`


   Represents a Synapse in the Bittensor network, serving as a communication schema between neurons (nodes).

   Synapses ensure the format and correctness of transmission tensors according to the Bittensor protocol.
   Each Synapse type is tailored for a specific machine learning (ML) task, following unique compression and
   communication processes. This helps maintain sanitized, correct, and useful information flow across the network.

   The Synapse class encompasses essential network properties such as HTTP route names, timeouts, request sizes, and
   terminal information. It also includes methods for serialization, deserialization, attribute setting, and hash
   computation, ensuring secure and efficient data exchange in the network.

   The class includes Pydantic validators and root validators to enforce data integrity and format. Additionally,
   properties like ``is_success``, ``is_failure``, ``is_timeout``, etc., provide convenient status checks based on
   dendrite responses.

   Think of Bittensor Synapses as glorified pydantic wrappers that have been designed to be used in a distributed
   network. They provide a standardized way to communicate between neurons, and are the primary mechanism for
   communication between neurons in Bittensor.

   Key Features:

   1. HTTP Route Name (``name`` attribute):
       Enables the identification and proper routing of requests within the network. Essential for users
       defining custom routes for specific machine learning tasks.

   2. Query Timeout (``timeout`` attribute):
       Determines the maximum duration allowed for a query, ensuring timely responses and network
       efficiency. Crucial for users to manage network latency and response times, particularly in
       time-sensitive applications.

   3. Request Sizes (``total_size``, ``header_size`` attributes):
       Keeps track of the size of request bodies and headers, ensuring efficient data transmission without
       overloading the network. Important for users to monitor and optimize the data payload, especially
       in bandwidth-constrained environments.

   4. Terminal Information (``dendrite``, ``axon`` attributes):
       Stores information about the dendrite (receiving end) and axon (sending end), facilitating communication
       between nodes. Users can access detailed information about the communication endpoints, aiding in
       debugging and network analysis.

   5. Body Hash Computation (``computed_body_hash``, ``required_hash_fields``):
       Ensures data integrity and security by computing hashes of transmitted data. Provides users with a
       mechanism to verify data integrity and detect any tampering during transmission.
       It is recommended that names of fields in `required_hash_fields` are listed in the order they are
       defined in the class.

   6. Serialization and Deserialization Methods:
       Facilitates the conversion of Synapse objects to and from a format suitable for network transmission.
       Essential for users who need to customize data formats for specific machine learning models or tasks.

   7. Status Check Properties (``is_success``, ``is_failure``, ``is_timeout``, etc.):
       Provides quick and easy methods to check the status of a request, improving error handling and
       response management. Users can efficiently handle different outcomes of network requests, enhancing
       the robustness of their applications.

   Example usage::

       # Creating a Synapse instance with default values
       synapse = Synapse()

       # Setting properties and input
       synapse.timeout = 15.0
       synapse.name = "MySynapse"
       # Not setting fields that are not defined in your synapse class will result in an error, e.g.:
       synapse.dummy_input = 1 # This will raise an error because dummy_input is not defined in the Synapse class

       # Get a dictionary of headers and body from the synapse instance
       synapse_dict = synapse.model_dump_json()

       # Get a dictionary of headers from the synapse instance
       headers = synapse.to_headers()

       # Reconstruct the synapse from headers using the classmethod 'from_headers'
       synapse = Synapse.from_headers(headers)

       # Deserialize synapse after receiving it over the network, controlled by `deserialize` method
       deserialized_synapse = synapse.deserialize()

       # Checking the status of the request
       if synapse.is_success:
           print("Request succeeded")

       # Checking and setting the status of the request
       print(synapse.axon.status_code)
       synapse.axon.status_code = 408 # Timeout

   :param name: HTTP route name, set on :func:`axon.attach`.
   :type name: str
   :param timeout: Total query length, set by the dendrite terminal.
   :type timeout: float
   :param total_size: Total size of request body in bytes.
   :type total_size: int
   :param header_size: Size of request header in bytes.
   :type header_size: int
   :param dendrite: Information about the dendrite terminal.
   :type dendrite: TerminalInfo
   :param axon: Information about the axon terminal.
   :type axon: TerminalInfo
   :param computed_body_hash: Computed hash of the request body.
   :type computed_body_hash: str
   :param required_hash_fields: Fields required to compute the body hash.
   :type required_hash_fields: List[str]

   .. method:: deserialize

      Custom deserialization logic for subclasses.

   .. method:: __setattr__

      Override method to make ``required_hash_fields`` read-only.

   .. method:: get_total_size

      Calculates and returns the total size of the object.

   .. method:: to_headers

      Constructs a dictionary of headers from instance properties.

   .. method:: body_hash

      Computes a SHA3-256 hash of the serialized body.

   .. method:: parse_headers_to_inputs

      Parses headers to construct an inputs dictionary.

   .. method:: from_headers

      Creates an instance from a headers dictionary.
      

   This class is a cornerstone in the Bittensor framework, providing the necessary tools for secure, efficient, and
   standardized communication in a decentralized environment.

   Create a new model by parsing and validating input data from keyword arguments.

   Raises [`ValidationError`][pydantic_core.ValidationError] if the input data cannot be
   validated to form a valid model.

   `self` is explicitly positional-only to allow `self` as a field name.


   .. py:attribute:: model_config

      Configuration for the model, should be a dictionary conforming to [`ConfigDict`][pydantic.config.ConfigDict].


   .. py:attribute:: _model_json_schema
      :type:  ClassVar[Dict[str, Any]]


   .. py:method:: deserialize()

      Deserializes the Synapse object.

      This method is intended to be overridden by subclasses for custom deserialization logic.
      In the context of the Synapse superclass, this method simply returns the instance itself.
      When inheriting from this class, subclasses should provide their own implementation for
      deserialization if specific deserialization behavior is desired.

      By default, if a subclass does not provide its own implementation of this method, the
      Synapse's deserialize method will be used, returning the object instance as-is.

      In its default form, this method simply returns the instance of the Synapse itself without any modifications. Subclasses of Synapse can override this method to add specific deserialization behaviors, such as converting serialized data back into complex object types or performing additional data integrity checks.

      Example::

          class CustomSynapse(Synapse):
              additional_data: str

              def deserialize(self) -> "CustomSynapse":
                  # Custom deserialization logic
                  # For example, decoding a base64 encoded string in 'additional_data'
                  if self.additional_data:
                      self.additional_data = base64.b64decode(self.additional_data).decode('utf-8')
                  return self

          serialized_data = '{"additional_data": "SGVsbG8gV29ybGQ="}'  # Base64 for 'Hello World'
          custom_synapse = CustomSynapse.model_validate_json(serialized_data)
          deserialized_synapse = custom_synapse.deserialize()

          # deserialized_synapse.additional_data would now be 'Hello World'

      :returns: The deserialized Synapse object. In this default implementation, it returns the object itself.
      :rtype: Synapse



   .. py:method:: set_name_type(values)


   .. py:attribute:: name
      :type:  Optional[str]


   .. py:attribute:: timeout
      :type:  Optional[float]


   .. py:attribute:: total_size
      :type:  Optional[int]


   .. py:attribute:: header_size
      :type:  Optional[int]


   .. py:attribute:: dendrite
      :type:  Optional[TerminalInfo]


   .. py:attribute:: axon
      :type:  Optional[TerminalInfo]


   .. py:attribute:: computed_body_hash
      :type:  Optional[str]


   .. py:attribute:: required_hash_fields
      :type:  ClassVar[Tuple[str, Ellipsis]]
      :value: ()



   .. py:attribute:: _extract_total_size


   .. py:attribute:: _extract_header_size


   .. py:attribute:: _extract_timeout


   .. py:method:: __setattr__(name, value)

      Override the :func:`__setattr__` method to make the ``required_hash_fields`` property read-only.

      This is a security mechanism such that the ``required_hash_fields`` property cannot be
      overridden by the user or malicious code.



   .. py:method:: get_total_size()

      Get the total size of the current object.

      This method first calculates the size of the current object, then assigns it
      to the instance variable :func:`self.total_size` and finally returns this value.

      :returns: The total size of the current object.
      :rtype: int



   .. py:property:: is_success
      :type: bool

      Checks if the dendrite's status code indicates success.

      This method returns ``True`` if the status code of the dendrite is ``200``,
      which typically represents a successful HTTP request.

      :returns: ``True`` if dendrite's status code is ``200``, ``False`` otherwise.
      :rtype: bool


   .. py:property:: is_failure
      :type: bool

      Checks if the dendrite's status code indicates failure.

      This method returns ``True`` if the status code of the dendrite is not ``200``,
      which would mean the HTTP request was not successful.

      :returns: ``True`` if dendrite's status code is not ``200``, ``False`` otherwise.
      :rtype: bool


   .. py:property:: is_timeout
      :type: bool

      Checks if the dendrite's status code indicates a timeout.

      This method returns ``True`` if the status code of the dendrite is ``408``,
      which is the HTTP status code for a request timeout.

      :returns: ``True`` if dendrite's status code is ``408``, ``False`` otherwise.
      :rtype: bool


   .. py:property:: is_blacklist
      :type: bool

      Checks if the dendrite's status code indicates a blacklisted request.

      This method returns ``True`` if the status code of the dendrite is ``403``,
      which is the HTTP status code for a forbidden request.

      :returns: ``True`` if dendrite's status code is ``403``, ``False`` otherwise.
      :rtype: bool


   .. py:property:: failed_verification
      :type: bool

      Checks if the dendrite's status code indicates failed verification.

      This method returns ``True`` if the status code of the dendrite is ``401``,
      which is the HTTP status code for unauthorized access.

      :returns: ``True`` if dendrite's status code is ``401``, ``False`` otherwise.
      :rtype: bool


   .. py:method:: _get_cached_model_json_schema()
      :classmethod:


      Returns the JSON schema for the Synapse model.

      This method returns a cached version of the JSON schema for the Synapse model.
      The schema is stored in the class variable ``_model_json_schema`` and is only
      generated once to improve performance.

      :returns: The JSON schema for the Synapse model.
      :rtype: dict



   .. py:method:: get_required_fields()

      Get the required fields from the model's JSON schema.



   .. py:method:: to_headers()

      Converts the state of a Synapse instance into a dictionary of HTTP headers.

      This method is essential for
      packaging Synapse data for network transmission in the Bittensor framework, ensuring that each key aspect of
      the Synapse is represented in a format suitable for HTTP communication.

      Process:

      1. Basic Information: It starts by including the ``name`` and ``timeout`` of the Synapse, which are fundamental for identifying the query and managing its lifespan on the network.
      2. Complex Objects: The method serializes the ``axon`` and ``dendrite`` objects, if present, into strings. This serialization is crucial for preserving the state and structure of these objects over the network.
      3. Encoding: Non-optional complex objects are serialized and encoded in base64, making them safe for HTTP transport.
      4. Size Metrics: The method calculates and adds the size of headers and the total object size, providing valuable information for network bandwidth management.

      Example Usage::

          synapse = Synapse(name="ExampleSynapse", timeout=30)
          headers = synapse.to_headers()
          # headers now contains a dictionary representing the Synapse instance

      :returns: A dictionary containing key-value pairs representing the Synapse's properties, suitable for HTTP communication.
      :rtype: dict



   .. py:property:: body_hash
      :type: str

      Computes a SHA3-256 hash of the serialized body of the Synapse instance.

      This hash is used to
      ensure the data integrity and security of the Synapse instance when it's transmitted across the
      network. It is a crucial feature for verifying that the data received is the same as the data sent.

      Process:

      1. Iterates over each required field as specified in ``required_hash_fields``.
      2. Concatenates the string representation of these fields.
      3. Applies SHA3-256 hashing to the concatenated string to produce a unique fingerprint of the data.

      Example::

          synapse = Synapse(name="ExampleRoute", timeout=10)
          hash_value = synapse.body_hash
          # hash_value is the SHA3-256 hash of the serialized body of the Synapse instance

      :returns: The SHA3-256 hash as a hexadecimal string, providing a fingerprint of the Synapse instance's data for integrity checks.
      :rtype: str


   .. py:method:: parse_headers_to_inputs(headers)
      :classmethod:


      Interprets and transforms a given dictionary of headers into a structured dictionary, facilitating the reconstruction of Synapse objects.

      This method is essential for parsing network-transmitted
      data back into a Synapse instance, ensuring data consistency and integrity.

      Process:

      1. Separates headers into categories based on prefixes (``axon``, ``dendrite``, etc.).
      2. Decodes and deserializes ``input_obj`` headers into their original objects.
      3. Assigns simple fields directly from the headers to the input dictionary.

      Example::

          received_headers = {
              'bt_header_axon_address': '127.0.0.1',
              'bt_header_dendrite_port': '8080',
              # Other headers...
          }
          inputs = Synapse.parse_headers_to_inputs(received_headers)
          # inputs now contains a structured representation of Synapse properties based on the headers

      .. note:: This is handled automatically when calling :func:`Synapse.from_headers(headers)` and does not need to be called directly.

      :param headers: The headers dictionary to parse.
      :type headers: dict

      :returns: A structured dictionary representing the inputs for constructing a Synapse instance.
      :rtype: dict



   .. py:method:: from_headers(headers)
      :classmethod:


      Constructs a new Synapse instance from a given headers dictionary, enabling the re-creation of the Synapse's state as it was prior to network transmission.

      This method is a key part of the
      deserialization process in the Bittensor network, allowing nodes to accurately reconstruct Synapse
      objects from received data.

      Example::

          received_headers = {
              'bt_header_axon_address': '127.0.0.1',
              'bt_header_dendrite_port': '8080',
              # Other headers...
          }
          synapse = Synapse.from_headers(received_headers)
          # synapse is a new Synapse instance reconstructed from the received headers

      :param headers: The dictionary of headers containing serialized Synapse information.
      :type headers: dict

      :returns: A new instance of Synapse, reconstructed from the parsed header information, replicating the original instance's state.
      :rtype: Synapse



.. py:class:: StreamingSynapse(/, **data)

   Bases: :py:obj:`bittensor.Synapse`, :py:obj:`abc.ABC`


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
      :param synapse: The response Synapse to be used to update the response headers etc.
      :param \*\*kwargs: Additional keyword arguments passed to the parent StreamingResponse class.


      .. py:attribute:: token_streamer


      .. py:attribute:: synapse


      .. py:method:: stream_response(send)
         :async:


         Asynchronously streams the response by sending headers and calling the token streamer.

         This method is responsible for initiating the response by sending the appropriate headers, including the
         content type for event-streaming. It then calls the token streamer to generate the content and sends the
         response body to the client.

         :param send: A callable to send the response, provided by the ASGI server.



      .. py:method:: __call__(scope, receive, send)
         :async:


         Asynchronously calls the stream_response method, allowing the BTStreamingResponse object to be used as an ASGI
         application.

         This method is part of the ASGI interface and is called by the ASGI server to handle the request and send the
         response. It delegates to the :func:`stream_response` method to perform the actual streaming process.

         :param scope: The scope of the request, containing information about the client, server, and request itself.
         :param receive: A callable to receive the request, provided by the ASGI server.
         :param send: A callable to send the response, provided by the ASGI server.




   .. py:method:: process_streaming_response(response)
      :abstractmethod:

      :async:


      Abstract method that must be implemented by the subclass.
      This method should provide logic to handle the streaming response, such as parsing and accumulating data.
      It is called as the response is being streamed from the network, and should be implemented to handle the specific
      streaming data format and requirements of the subclass.

      :param response: The response object to be processed, typically containing chunks of data.



   .. py:method:: extract_response_json(response)
      :abstractmethod:


      Abstract method that must be implemented by the subclass.
      This method should provide logic to extract JSON data from the response, including headers and content.
      It is called after the response has been processed and is responsible for retrieving structured data
      that can be used by the application.

      :param response: The response object from which to extract JSON data.



   .. py:method:: create_streaming_response(token_streamer)

      Creates a streaming response using the provided token streamer.
      This method can be used by the subclass to create a response object that can be sent back to the client.
      The token streamer should be implemented to generate the content of the response according to the specific
      requirements of the subclass.

      :param token_streamer: A callable that takes a send function and returns an awaitable. It's responsible for generating the content of the response.

      :returns: The streaming response object, ready to be sent to the client.
      :rtype: BTStreamingResponse



.. py:class:: tensor

.. py:class:: Tensor(/, **data)

   Bases: :py:obj:`pydantic.BaseModel`


   Represents a Tensor object.

   :param buffer: Tensor buffer data.
   :type buffer: Optional[str]
   :param dtype: Tensor data type.
   :type dtype: str
   :param shape: Tensor shape.
   :type shape: List[int]

   Create a new model by parsing and validating input data from keyword arguments.

   Raises [`ValidationError`][pydantic_core.ValidationError] if the input data cannot be
   validated to form a valid model.

   `self` is explicitly positional-only to allow `self` as a field name.


   .. py:attribute:: model_config

      Configuration for the model, should be a dictionary conforming to [`ConfigDict`][pydantic.config.ConfigDict].


   .. py:method:: tensor()


   .. py:method:: tolist()


   .. py:method:: numpy()


   .. py:method:: deserialize()

      Deserializes the Tensor object.

      :returns: The deserialized tensor object.
      :rtype: np.array or torch.Tensor

      :raises Exception: If the deserialization process encounters an error.



   .. py:method:: serialize(tensor_)
      :staticmethod:


      Serializes the given tensor.

      :param tensor_: The tensor to serialize.
      :type tensor_: np.array or torch.Tensor

      :returns: The serialized tensor.
      :rtype: Tensor

      :raises Exception: If the serialization process encounters an error.



   .. py:attribute:: buffer
      :type:  Optional[str]


   .. py:attribute:: dtype
      :type:  str


   .. py:attribute:: shape
      :type:  List[int]


   .. py:attribute:: _extract_shape


   .. py:attribute:: _extract_dtype


.. py:class:: axon(wallet = None, config = None, port = None, ip = None, external_ip = None, external_port = None, max_workers = None)

   The ``axon`` class in Bittensor is a fundamental component that serves as the server-side interface for a neuron within the Bittensor network.

   This class is responsible for managing
   incoming requests from other neurons and implements various mechanisms to ensure efficient
   and secure network interactions.

   An axon relies on a FastAPI router to create endpoints for different message types. These
   endpoints are crucial for handling various request types that a neuron might receive. The
   class is designed to be flexible and customizable, allowing users to specify custom rules
   for forwarding, blacklisting, prioritizing, and verifying incoming requests. The class also
   includes internal mechanisms to manage a thread pool, supporting concurrent handling of
   requests with defined priority levels.

   Methods in this class are equipped to deal with incoming requests from various scenarios in the
   network and serve as the server face for a neuron. It accepts multiple arguments, like wallet,
   configuration parameters, ip address, server binding  port, external ip, external port and max
   workers. Key methods involve managing and operating the FastAPI application router, including
   the attachment and operation of endpoints.

   Key Features:

   - FastAPI router integration for endpoint creation and management.
   - Customizable request handling including forwarding, blacklisting, and prioritization.
   - Verification of incoming requests against custom-defined functions.
   - Thread pool management for concurrent request handling.
   - Command-line argument support for user-friendly program interaction.

   Example Usage::

       import bittensor
       # Define your custom synapse class
       class MySyanpse( bittensor.Synapse ):
           input: int = 1
           output: int = None

       # Define a custom request forwarding function using your synapse class
       def forward( synapse: MySyanpse ) -> MySyanpse:
           # Apply custom logic to synapse and return it
           synapse.output = 2
           return synapse

       # Define a custom request verification function
       def verify_my_synapse( synapse: MySyanpse ):
           # Apply custom verification logic to synapse
           # Optionally raise Exception
           assert synapse.input == 1
           ...

       # Define a custom request blacklist fucntion
       def blacklist_my_synapse( synapse: MySyanpse ) -> bool:
           # Apply custom blacklist
           return False ( if non blacklisted ) or True ( if blacklisted )

       # Define a custom request priority fucntion
       def prioritize_my_synape( synapse: MySyanpse ) -> float:
           # Apply custom priority
           return 1.0

       # Initialize Axon object with a custom configuration
       my_axon = bittensor.axon(
           config=my_config,
           wallet=my_wallet,
           port=9090,
           ip="192.0.2.0",
           external_ip="203.0.113.0",
           external_port=7070
       )

       # Attach the endpoint with the specified verification and forward functions.
       my_axon.attach(
           forward_fn = forward_my_synapse,
           verify_fn = verify_my_synapse,
           blacklist_fn = blacklist_my_synapse,
           priority_fn = prioritize_my_synape
       )

       # Serve and start your axon.
       my_axon.serve(
           netuid = ...
           subtensor = ...
       ).start()

       # If you have multiple forwarding functions, you can chain attach them.
       my_axon.attach(
           forward_fn = forward_my_synapse,
           verify_fn = verify_my_synapse,
           blacklist_fn = blacklist_my_synapse,
           priority_fn = prioritize_my_synape
       ).attach(
           forward_fn = forward_my_synapse_2,
           verify_fn = verify_my_synapse_2,
           blacklist_fn = blacklist_my_synapse_2,
           priority_fn = prioritize_my_synape_2
       ).serve(
           netuid = ...
           subtensor = ...
       ).start()

   :param wallet: Wallet with hotkey and coldkeypub.
   :type wallet: bittensor.wallet, optional
   :param config: Configuration parameters for the axon.
   :type config: bittensor.config, optional
   :param port: Port for server binding.
   :type port: int, optional
   :param ip: Binding IP address.
   :type ip: str, optional
   :param external_ip: External IP address to broadcast.
   :type external_ip: str, optional
   :param external_port: External port to broadcast.
   :type external_port: int, optional
   :param max_workers: Number of active threads for request handling.
   :type max_workers: int, optional

   :returns: An instance of the axon class configured as per the provided arguments.
   :rtype: bittensor.axon

   .. note::

      This class is a core part of Bittensor's decentralized network for machine intelligence,
      allowing neurons to communicate effectively and securely.

   Importance and Functionality
       Endpoint Registration
           This method dynamically registers API endpoints based on the Synapse used, allowing the Axon to respond to specific types of requests and synapses.

       Customization of Request Handling
           By attaching different functions, the Axon can customize how it
           handles, verifies, prioritizes, and potentially blocks incoming requests, making it adaptable to various network scenarios.

       Security and Efficiency
           The method contributes to both the security (via verification and blacklisting) and efficiency (via prioritization) of request handling, which are crucial in a decentralized network environment.

       Flexibility
           The ability to define custom functions for different aspects of request handling provides great flexibility, allowing the Axon to be tailored to specific needs and use cases within the Bittensor network.

       Error Handling and Validation
           The method ensures that the attached functions meet the required
           signatures, providing error handling to prevent runtime issues.


   Creates a new bittensor.Axon object from passed arguments.
   :param config: bittensor.axon.config()
   :type config: :obj:`Optional[bittensor.config]`, `optional`
   :param wallet: bittensor wallet with hotkey and coldkeypub.
   :type wallet: :obj:`Optional[bittensor.wallet]`, `optional`
   :param port: Binding port.
   :type port: :type:`Optional[int]`, `optional`
   :param ip: Binding ip.
   :type ip: :type:`Optional[str]`, `optional`
   :param external_ip: The external ip of the server to broadcast to the network.
   :type external_ip: :type:`Optional[str]`, `optional`
   :param external_port: The external port of the server to broadcast to the network.
   :type external_port: :type:`Optional[int]`, `optional`
   :param max_workers: Used to create the threadpool if not passed, specifies the number of active threads servicing requests.
   :type max_workers: :type:`Optional[int]`, `optional`


   .. py:attribute:: config


   .. py:attribute:: ip


   .. py:attribute:: port


   .. py:attribute:: external_ip


   .. py:attribute:: external_port


   .. py:attribute:: max_workers


   .. py:attribute:: wallet


   .. py:attribute:: uuid


   .. py:attribute:: full_address


   .. py:attribute:: started
      :value: False



   .. py:attribute:: thread_pool


   .. py:attribute:: nonces
      :type:  Dict[str, int]


   .. py:attribute:: forward_class_types
      :type:  Dict[str, List[inspect.Signature]]


   .. py:attribute:: blacklist_fns
      :type:  Dict[str, Optional[Callable]]


   .. py:attribute:: priority_fns
      :type:  Dict[str, Optional[Callable]]


   .. py:attribute:: forward_fns
      :type:  Dict[str, Optional[Callable]]


   .. py:attribute:: verify_fns
      :type:  Dict[str, Optional[Callable]]


   .. py:attribute:: app


   .. py:attribute:: log_level


   .. py:attribute:: fast_config


   .. py:attribute:: fast_server


   .. py:attribute:: router


   .. py:attribute:: middleware_cls


   .. py:method:: info()

      Returns the axon info object associated with this axon.



   .. py:method:: attach(forward_fn, blacklist_fn = None, priority_fn = None, verify_fn = None)

      Attaches custom functions to the Axon server for handling incoming requests. This method enables
      the Axon to define specific behaviors for request forwarding, verification, blacklisting, and
      prioritization, thereby customizing its interaction within the Bittensor network.

      Registers an API endpoint to the FastAPI application router.
      It uses the name of the first argument of the :func:`forward_fn` function as the endpoint name.

      The attach method in the Bittensor framework's axon class is a crucial function for registering
      API endpoints to the Axon's FastAPI application router. This method allows the Axon server to
      define how it handles incoming requests by attaching functions for forwarding, verifying,
      blacklisting, and prioritizing requests. It's a key part of customizing the server's behavior
      and ensuring efficient and secure handling of requests within the Bittensor network.

      :param forward_fn: Function to be called when the API endpoint is accessed. It should have at least one argument.
      :type forward_fn: Callable
      :param blacklist_fn: Function to filter out undesired requests. It should take the same arguments as :func:`forward_fn` and return a boolean value. Defaults to ``None``, meaning no blacklist filter will be used.
      :type blacklist_fn: Callable, optional
      :param priority_fn: Function to rank requests based on their priority. It should take the same arguments as :func:`forward_fn` and return a numerical value representing the request's priority. Defaults to ``None``, meaning no priority sorting will be applied.
      :type priority_fn: Callable, optional
      :param verify_fn: Function to verify requests. It should take the same arguments as :func:`forward_fn` and return a boolean value. If ``None``, :func:`self.default_verify` function will be used.
      :type verify_fn: Callable, optional

      .. note:: The methods :func:`forward_fn`, :func:`blacklist_fn`, :func:`priority_fn`, and :func:`verify_fn` should be designed to receive the same parameters.

      :raises AssertionError: If :func:`forward_fn` does not have the signature: ``forward( synapse: YourSynapse ) -> synapse``.
      :raises AssertionError: If :func:`blacklist_fn` does not have the signature: ``blacklist( synapse: YourSynapse ) -> bool``.
      :raises AssertionError: If :func:`priority_fn` does not have the signature: ``priority( synapse: YourSynapse ) -> float``.
      :raises AssertionError: If :func:`verify_fn` does not have the signature: ``verify( synapse: YourSynapse ) -> None``.

      :returns: Returns the instance of the AxonServer class for potential method chaining.
      :rtype: self

      Example Usage::

          def forward_custom(synapse: MyCustomSynapse) -> MyCustomSynapse:
              # Custom logic for processing the request
              return synapse

          def blacklist_custom(synapse: MyCustomSynapse) -> Tuple[bool, str]:
              return True, "Allowed!"

          def priority_custom(synapse: MyCustomSynapse) -> float:
              return 1.0

          def verify_custom(synapse: MyCustomSynapse):
              # Custom logic for verifying the request
              pass

          my_axon = bittensor.axon(...)
          my_axon.attach(forward_fn=forward_custom, verify_fn=verify_custom)

      .. note::

         The :func:`attach` method is fundamental in setting up the Axon server's request handling capabilities,
         enabling it to participate effectively and securely in the Bittensor network. The flexibility
         offered by this method allows developers to tailor the Axon's behavior to specific requirements and
         use cases.



   .. py:method:: help()
      :classmethod:


      Prints the help text (list of command-line arguments and their descriptions) to stdout.



   .. py:method:: add_args(parser, prefix = None)
      :classmethod:


      Adds AxonServer-specific command-line arguments to the argument parser.

      :param parser: Argument parser to which the arguments will be added.
      :type parser: argparse.ArgumentParser
      :param prefix: Prefix to add to the argument names. Defaults to None.
      :type prefix: str, optional

      .. note:: Environment variables are used to define default values for the arguments.



   .. py:method:: verify_body_integrity(request)
      :async:


      The ``verify_body_integrity`` method in the Bittensor framework is a key security function within the
      Axon server's middleware. It is responsible for ensuring the integrity of the body of incoming HTTP
      requests.

      It asynchronously verifies the integrity of the body of a request by comparing the hash of required fields
      with the corresponding hashes provided in the request headers. This method is critical for ensuring
      that the incoming request payload has not been altered or tampered with during transmission, establishing
      a level of trust and security between the sender and receiver in the network.

      :param request: The incoming FastAPI request object containing both headers and the request body.
      :type request: Request

      :returns:

                Returns the parsed body of the request as a dictionary if all the hash comparisons match,
                    indicating that the body is intact and has not been tampered with.
      :rtype: dict

      :raises JSONResponse: Raises a JSONResponse with a 400 status code if any of the hash comparisons fail,
          indicating a potential integrity issue with the incoming request payload.
          The response includes the detailed error message specifying which field has a hash mismatch.

      This method performs several key functions:

      1. Decoding and loading the request body for inspection.
      2. Gathering required field names for hash comparison from the Axon configuration.
      3. Loading and parsing the request body into a dictionary.
      4. Reconstructing the Synapse object and recomputing the hash for verification and logging.
      5. Comparing the recomputed hash with the hash provided in the request headers for verification.

      .. note::

         The integrity verification is an essential step in ensuring the security of the data exchange
         within the Bittensor network. It helps prevent tampering and manipulation of data during transit,
         thereby maintaining the reliability and trust in the network communication.



   .. py:method:: check_config(config)
      :classmethod:


      This method checks the configuration for the axon's port and wallet.

      :param config: The config object holding axon settings.
      :type config: bittensor.config

      :raises AssertionError: If the axon or external ports are not in range [1024, 65535]



   .. py:method:: to_string()

      Provides a human-readable representation of the AxonInfo for this Axon.



   .. py:method:: __str__()

      Provides a human-readable representation of the Axon instance.



   .. py:method:: __repr__()

      Provides a machine-readable (unambiguous) representation of the Axon instance.
      It is made identical to __str__ in this case.



   .. py:method:: __del__()

      This magic method is called when the Axon object is about to be destroyed.
      It ensures that the Axon server shuts down properly.



   .. py:method:: start()

      Starts the Axon server and its underlying FastAPI server thread, transitioning the state of the
      Axon instance to ``started``. This method initiates the server's ability to accept and process
      incoming network requests, making it an active participant in the Bittensor network.

      The start method triggers the FastAPI server associated with the Axon to begin listening for
      incoming requests. It is a crucial step in making the neuron represented by this Axon operational
      within the Bittensor network.

      :returns: The Axon instance in the 'started' state.
      :rtype: bittensor.axon

      Example::

          my_axon = bittensor.axon(...)
          ... # setup axon, attach functions, etc.
          my_axon.start()  # Starts the axon server

      .. note:: After invoking this method, the Axon is ready to handle requests as per its configured endpoints and custom logic.



   .. py:method:: stop()

      Stops the Axon server and its underlying GRPC server thread, transitioning the state of the Axon
      instance to ``stopped``. This method ceases the server's ability to accept new network requests,
      effectively removing the neuron's server-side presence in the Bittensor network.

      By stopping the FastAPI server, the Axon ceases to listen for incoming requests, and any existing
      connections are gracefully terminated. This function is typically used when the neuron is being
      shut down or needs to temporarily go offline.

      :returns: The Axon instance in the 'stopped' state.
      :rtype: bittensor.axon

      Example::

          my_axon = bittensor.axon(...)
          my_axon.start()
          ...
          my_axon.stop()  # Stops the axon server


      .. note:: It is advisable to ensure that all ongoing processes or requests are completed or properly handled before invoking this method.



   .. py:method:: serve(netuid, subtensor = None)

      Serves the Axon on the specified subtensor connection using the configured wallet. This method
      registers the Axon with a specific subnet within the Bittensor network, identified by the ``netuid``.
      It links the Axon to the broader network, allowing it to participate in the decentralized exchange
      of information.

      :param netuid: The unique identifier of the subnet to register on. This ID is essential for the Axon to correctly position itself within the Bittensor network topology.
      :type netuid: int
      :param subtensor: The subtensor connection to use for serving. If not provided, a new connection is established based on default configurations.
      :type subtensor: bittensor.subtensor, optional

      :returns: The Axon instance that is now actively serving on the specified subtensor.
      :rtype: bittensor.axon

      Example::

          my_axon = bittensor.axon(...)
          subtensor = bt.subtensor(network="local") # Local by default
          my_axon.serve(netuid=1, subtensor=subtensor)  # Serves the axon on subnet with netuid 1

      .. note::

         The ``serve`` method is crucial for integrating the Axon into the Bittensor network, allowing it
         to start receiving and processing requests from other neurons.



   .. py:method:: default_verify(synapse)
      :async:


      This method is used to verify the authenticity of a received message using a digital signature.

      It ensures that the message was not tampered with and was sent by the expected sender.

      The :func:`default_verify` method in the Bittensor framework is a critical security function within the
      Axon server. It is designed to authenticate incoming messages by verifying their digital
      signatures. This verification ensures the integrity of the message and confirms that it was
      indeed sent by the claimed sender. The method plays a pivotal role in maintaining the trustworthiness
      and reliability of the communication within the Bittensor network.

      Key Features
          Security Assurance
              The default_verify method is crucial for ensuring the security of the Bittensor network. By verifying digital signatures, it guards against unauthorized access
              and data manipulation.

          Preventing Replay Attacks
              The method checks for increasing nonce values, which is a vital
              step in preventing replay attacks. A replay attack involves an adversary reusing or
              delaying the transmission of a valid data transmission to deceive the receiver.
              The first time a nonce is seen, it is checked for freshness by ensuring it is
              within an acceptable delta time range.

          Authenticity and Integrity Checks
              By verifying that the message's digital signature matches
              its content, the method ensures the message's authenticity (it comes from the claimed
              sender) and integrity (it hasn't been altered during transmission).

          Trust in Communication
              This method fosters trust in the network communication. Neurons
              (nodes in the Bittensor network) can confidently interact, knowing that the messages they
              receive are genuine and have not been tampered with.

          Cryptographic Techniques
              The method's reliance on asymmetric encryption techniques is a
              cornerstone of modern cryptographic security, ensuring that only entities with the correct
              cryptographic keys can participate in secure communication.

      :param synapse: bittensor.Synapse
                      bittensor request synapse.

      :raises Exception: If the ``receiver_hotkey`` doesn't match with ``self.receiver_hotkey``.
      :raises Exception: If the nonce is not larger than the previous nonce for the same endpoint key.
      :raises Exception: If the signature verification fails.

      After successful verification, the nonce for the given endpoint key is updated.

      .. note::

         The verification process assumes the use of an asymmetric encryption algorithm,
         where the sender signs the message with their private key and the receiver verifies the
         signature using the sender's public key.



.. py:class:: dendrite(wallet = None)

   Bases: :py:obj:`DendriteMixin`, :py:obj:`BaseModel`


   The Dendrite class represents the abstracted implementation of a network client module.

   In the brain analogy, dendrites receive signals
   from other neurons (in this case, network servers or axons), and the Dendrite class here is designed
   to send requests to those endpoint to recieve inputs.

   This class includes a wallet or keypair used for signing messages, and methods for making
   HTTP requests to the network servers. It also provides functionalities such as logging
   network requests and processing server responses.

   :param keypair: The wallet or keypair used for signing messages.
   :param external_ip: The external IP address of the local system.
   :type external_ip: str
   :param synapse_history: A list of Synapse objects representing the historical responses.
   :type synapse_history: list

   .. method:: __str__()

      Returns a string representation of the Dendrite object.

   .. method:: __repr__()

      Returns a string representation of the Dendrite object, acting as a fallback for __str__().

   .. method:: query(self, *args, **kwargs) -> Union[bittensor.Synapse, List[bittensor.Synapse]]

      
      Makes synchronous requests to one or multiple target Axons and returns responses.
      

   .. method:: forward(self, axons, synapse=bittensor.Synapse(), timeout=12, deserialize=True, run_async=True, streaming=False) -> bittensor.Synapse

      
      Asynchronously sends requests to one or multiple Axons and collates their responses.
      

   .. method:: call(self, target_axon, synapse=bittensor.Synapse(), timeout=12.0, deserialize=True) -> bittensor.Synapse

      
      Asynchronously sends a request to a specified Axon and processes the response.
      

   .. method:: call_stream(self, target_axon, synapse=bittensor.Synapse(), timeout=12.0, deserialize=True) -> AsyncGenerator[bittensor.Synapse, None]

      
      Sends a request to a specified Axon and yields an AsyncGenerator that contains streaming response chunks before finally yielding the filled Synapse as the final element.
      

   .. method:: preprocess_synapse_for_request(self, target_axon_info, synapse, timeout=12.0) -> bittensor.Synapse

      
      Preprocesses the synapse for making a request, including building headers and signing.
      

   .. method:: process_server_response(self, server_response, json_response, local_synapse)

      
      Processes the server response, updates the local synapse state, and merges headers.
      

   .. method:: close_session(self)

      
      Synchronously closes the internal aiohttp client session.
      

   .. method:: aclose_session(self)

      
      Asynchronously closes the internal aiohttp client session.
      

   .. note:: When working with async `aiohttp <https://github.com/aio-libs/aiohttp>`_ client sessions, it is recommended to use a context manager.

   Example with a context manager::

       >>> aysnc with dendrite(wallet = bittensor.wallet()) as d:
       >>>     print(d)
       >>>     d( <axon> ) # ping axon
       >>>     d( [<axons>] ) # ping multiple
       >>>     d( bittensor.axon(), bittensor.Synapse )

   However, you are able to safely call :func:`dendrite.query()` without a context manager in a synchronous setting.

   Example without a context manager::

       >>> d = dendrite(wallet = bittensor.wallet() )
       >>> print(d)
       >>> d( <axon> ) # ping axon
       >>> d( [<axons>] ) # ping multiple
       >>> d( bittensor.axon(), bittensor.Synapse )

   Initializes the Dendrite object, setting up essential properties.

   :param wallet: The user's wallet or keypair used for signing messages. Defaults to ``None``, in which case a new :func:`bittensor.wallet().hotkey` is generated and used.
   :type wallet: Optional[Union['bittensor.wallet', 'bittensor.keypair']], optional


.. py:class:: MockKeyfile(path)

   Bases: :py:obj:`bittensor.keyfile`


   Defines an interface to a mocked keyfile object (nothing is created on device) keypair is treated as non encrypted and the data is just the string version.


   .. py:attribute:: _mock_keypair


   .. py:attribute:: _mock_data


   .. py:method:: __str__()


   .. py:method:: __repr__()


   .. py:property:: keypair
      :type: bittensor.Keypair

      Returns the keypair from path, decrypts data if the file is encrypted.

      :returns: The keypair stored under the path.
      :rtype: keypair (bittensor.Keypair)

      :raises KeyFileError: Raised if the file does not exist, is not readable, writable, corrupted, or if the password is incorrect.


   .. py:property:: data
      :type: bytes

      Returns the keyfile data under path.

      :returns: The keyfile data stored under the path.
      :rtype: keyfile_data (bytes)

      :raises KeyFileError: Raised if the file does not exist, is not readable, or writable.


   .. py:property:: keyfile_data
      :type: bytes

      Returns the keyfile data under path.

      :returns: The keyfile data stored under the path.
      :rtype: keyfile_data (bytes)

      :raises KeyFileError: Raised if the file does not exist, is not readable, or writable.


   .. py:method:: set_keypair(keypair, encrypt = True, overwrite = False, password = None)

      Writes the keypair to the file and optionally encrypts data.

      :param keypair: The keypair to store under the path.
      :type keypair: bittensor.Keypair
      :param encrypt: If ``True``, encrypts the file under the path. Default is ``True``.
      :type encrypt: bool, optional
      :param overwrite: If ``True``, forces overwrite of the current file. Default is ``False``.
      :type overwrite: bool, optional
      :param password: The password used to encrypt the file. If ``None``, asks for user input.
      :type password: str, optional

      :raises KeyFileError: Raised if the file does not exist, is not readable, writable, or if the password is incorrect.



   .. py:method:: get_keypair(password = None)

      Returns the keypair from the path, decrypts data if the file is encrypted.

      :param password: The password used to decrypt the file. If ``None``, asks for user input.
      :type password: str, optional

      :returns: The keypair stored under the path.
      :rtype: keypair (bittensor.Keypair)

      :raises KeyFileError: Raised if the file does not exist, is not readable, writable, corrupted, or if the password is incorrect.



   .. py:method:: make_dirs()

      Creates directories for the path if they do not exist.



   .. py:method:: exists_on_device()

      Returns ``True`` if the file exists on the device.

      :returns: ``True`` if the file is on the device.
      :rtype: on_device (bool)



   .. py:method:: is_readable()

      Returns ``True`` if the file under path is readable.

      :returns: ``True`` if the file is readable.
      :rtype: readable (bool)



   .. py:method:: is_writable()

      Returns ``True`` if the file under path is writable.

      :returns: ``True`` if the file is writable.
      :rtype: writable (bool)



   .. py:method:: is_encrypted()

      Returns ``True`` if the file under path is encrypted.

      :returns: ``True`` if the file is encrypted.
      :rtype: encrypted (bool)



   .. py:method:: encrypt(password = None)

      Encrypts the file under the path.

      :param password: The password for encryption. If ``None``, asks for user input.
      :type password: str, optional

      :raises KeyFileError: Raised if the file does not exist, is not readable, or writable.



   .. py:method:: decrypt(password = None)

      Decrypts the file under the path.

      :param password: The password for decryption. If ``None``, asks for user input.
      :type password: str, optional

      :raises KeyFileError: Raised if the file does not exist, is not readable, writable, corrupted, or if the password is incorrect.



.. py:class:: MockSubtensor(*args, **kwargs)

   Bases: :py:obj:`bittensor.subtensor.Subtensor`


   A Mock Subtensor class for running tests.
   This should mock only methods that make queries to the chain.
   e.g. We mock `Subtensor.query_subtensor` instead of all query methods.

   This class will also store a local (mock) state of the chain.

   Initializes a Subtensor interface for interacting with the Bittensor blockchain.

   .. note:: Currently subtensor defaults to the ``finney`` network. This will change in a future release.

   We strongly encourage users to run their own local subtensor node whenever possible. This increases
   decentralization and resilience of the network. In a future release, local subtensor will become the
   default and the fallback to ``finney`` removed. Please plan ahead for this change. We will provide detailed
   instructions on how to run a local subtensor node in the documentation in a subsequent release.

   :param network: The network name to connect to (e.g., ``finney``, ``local``). This can also be the
                   chain endpoint (e.g., ``wss://entrypoint-finney.opentensor.ai:443``) and will be correctly parsed into
                   the network and chain endpoint. If not specified, defaults to the main Bittensor network.
   :type network: str, optional
   :param config: Configuration object for the subtensor. If not provided, a default
                  configuration is used.
   :type config: bittensor.config, optional
   :param _mock: If set to ``True``, uses a mocked connection for testing purposes.
   :type _mock: bool, optional

   This initialization sets up the connection to the specified Bittensor network, allowing for various
   blockchain operations such as neuron registration, stake management, and setting weights.



   .. py:attribute:: chain_state
      :type:  MockChainState


   .. py:attribute:: block_number
      :type:  int


   .. py:method:: reset()
      :classmethod:



   .. py:method:: setup()


   .. py:attribute:: __dict__


   .. py:method:: get_block_hash(block_id)

      Retrieves the hash of a specific block on the Bittensor blockchain. The block hash is a unique
      identifier representing the cryptographic hash of the block's content, ensuring its integrity and
      immutability.

      :param block_id: The block number for which the hash is to be retrieved.
      :type block_id: int

      :returns: The cryptographic hash of the specified block.
      :rtype: str

      The block hash is a fundamental aspect of blockchain technology, providing a secure reference to
      each block's data. It is crucial for verifying transactions, ensuring data consistency, and
      maintaining the trustworthiness of the blockchain.



   .. py:method:: create_subnet(netuid)


   .. py:method:: set_difficulty(netuid, difficulty)


   .. py:method:: _register_neuron(netuid, hotkey, coldkey)


   .. py:method:: _convert_to_balance(balance)
      :staticmethod:



   .. py:method:: force_register_neuron(netuid, hotkey, coldkey, stake = Balance(0), balance = Balance(0))

      Force register a neuron on the mock chain, returning the UID.



   .. py:method:: force_set_balance(ss58_address, balance = Balance(0))

      :returns: (success, err_msg)
      :rtype: Tuple[bool, Optional[str]]



   .. py:attribute:: sudo_force_set_balance


   .. py:method:: do_block_step()


   .. py:method:: _handle_type_default(name, params)


   .. py:method:: commit(wallet, netuid, data)

      Commits arbitrary data to the Bittensor network by publishing metadata.

      :param wallet: The wallet associated with the neuron committing the data.
      :type wallet: bittensor.wallet
      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param data: The data to be committed to the network.
      :type data: str



   .. py:method:: get_commitment(netuid, uid, block = None)

      Retrieves the on-chain commitment for a specific neuron in the Bittensor network.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param uid: The unique identifier of the neuron.
      :type uid: int
      :param block: The block number to retrieve the commitment from. If None, the latest block
                    is used. Default is ``None``.
      :type block: Optional[int]

      :returns: The commitment data as a string.
      :rtype: str



   .. py:method:: query_subtensor(name, block = None, params = [])

      Queries named storage from the Subtensor module on the Bittensor blockchain. This function is used to retrieve
      specific data or parameters from the blockchain, such as stake, rank, or other neuron-specific attributes.

      :param name: The name of the storage function to query.
      :type name: str
      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int]
      :param params: A list of parameters to pass to the query function.
      :type params: Optional[List[object]], optional

      :returns: An object containing the requested data.
      :rtype: query_response (ScaleType)

      This query function is essential for accessing detailed information about the network and its neurons,
      providing valuable insights into the state and dynamics of the Bittensor ecosystem.



   .. py:method:: query_map_subtensor(name, block = None, params = [])

      Note: Double map requires one param



   .. py:method:: query_constant(module_name, constant_name, block = None)

      Retrieves a constant from the specified module on the Bittensor blockchain. This function is used to
      access fixed parameters or values defined within the blockchain's modules, which are essential for
      understanding the network's configuration and rules.

      :param module_name: The name of the module containing the constant.
      :type module_name: str
      :param constant_name: The name of the constant to retrieve.
      :type constant_name: str
      :param block: The blockchain block number at which to query the constant.
      :type block: Optional[int]

      :returns: The value of the constant if found, ``None`` otherwise.
      :rtype: Optional[ScaleType]

      Constants queried through this function can include critical network parameters such as inflation rates,
      consensus rules, or validation thresholds, providing a deeper understanding of the Bittensor network's
      operational parameters.



   .. py:method:: get_current_block()

      Returns the current block number on the Bittensor blockchain. This function provides the latest block
      number, indicating the most recent state of the blockchain.

      :returns: The current chain block number.
      :rtype: int

      Knowing the current block number is essential for querying real-time data and performing time-sensitive
      operations on the blockchain. It serves as a reference point for network activities and data synchronization.



   .. py:method:: get_balance(address, block = None)

      Retrieves the token balance of a specific address within the Bittensor network. This function queries
      the blockchain to determine the amount of Tao held by a given account.

      :param address: The Substrate address in ``ss58`` format.
      :type address: str
      :param block: The blockchain block number at which to perform the query.
      :type block: int, optional

      :returns: The account balance at the specified block, represented as a Balance object.
      :rtype: Balance

      This function is important for monitoring account holdings and managing financial transactions
      within the Bittensor ecosystem. It helps in assessing the economic status and capacity of network participants.



   .. py:method:: get_balances(block = None)

      Retrieves the token balances of all accounts within the Bittensor network as of a specific blockchain block.
      This function provides a comprehensive view of the token distribution among different accounts.

      :param block: The blockchain block number at which to perform the query.
      :type block: int, optional

      :returns: A dictionary mapping each account's ``ss58`` address to its balance.
      :rtype: Dict[str, Balance]

      This function is valuable for analyzing the overall economic landscape of the Bittensor network,
      including the distribution of financial resources and the financial status of network participants.



   .. py:method:: neuron_for_uid(uid, netuid, block = None)

      Retrieves detailed information about a specific neuron identified by its unique identifier (UID)
      within a specified subnet (netuid) of the Bittensor network. This function provides a comprehensive
      view of a neuron's attributes, including its stake, rank, and operational status.

      :param uid: The unique identifier of the neuron.
      :type uid: int
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: Detailed information about the neuron if found, ``None`` otherwise.
      :rtype: NeuronInfo

      This function is crucial for analyzing individual neurons' contributions and status within a specific
      subnet, offering insights into their roles in the network's consensus and validation mechanisms.



   .. py:method:: neurons(netuid, block = None)

      Retrieves a list of all neurons within a specified subnet of the Bittensor network. This function
      provides a snapshot of the subnet's neuron population, including each neuron's attributes and network
      interactions.

      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: A list of NeuronInfo objects detailing each neuron's characteristics in the subnet.
      :rtype: List[NeuronInfo]

      Understanding the distribution and status of neurons within a subnet is key to comprehending the
      network's decentralized structure and the dynamics of its consensus and governance processes.



   .. py:method:: _get_most_recent_storage(storage, block_number = None)
      :staticmethod:



   .. py:method:: _get_axon_info(netuid, hotkey, block = None)


   .. py:method:: _get_prometheus_info(netuid, hotkey, block = None)


   .. py:method:: _neuron_subnet_exists(uid, netuid, block = None)


   .. py:method:: neuron_for_uid_lite(uid, netuid, block = None)

      Retrieves a lightweight version of information about a neuron in a specific subnet, identified by
      its UID. The 'lite' version focuses on essential attributes such as stake and network activity.

      :param uid: The unique identifier of the neuron.
      :type uid: int
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: A simplified version of neuron information if found, ``None`` otherwise.
      :rtype: Optional[NeuronInfoLite]

      This function is useful for quick and efficient analyses of neuron status and activities within a
      subnet without the need for comprehensive data retrieval.



   .. py:method:: neurons_lite(netuid, block = None)

      Retrieves a list of neurons in a 'lite' format from a specific subnet of the Bittensor network.
      This function provides a streamlined view of the neurons, focusing on key attributes such as stake
      and network participation.

      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: A list of simplified neuron information for the subnet.
      :rtype: List[NeuronInfoLite]

      This function offers a quick overview of the neuron population within a subnet, facilitating
      efficient analysis of the network's decentralized structure and neuron dynamics.



   .. py:method:: _do_delegation(wallet, delegate_ss58, amount, wait_for_inclusion = True, wait_for_finalization = False)

      Delegates a specified amount of stake to a delegate's hotkey.

      This method sends a transaction to add stake to a delegate's hotkey and retries the call up to three times
      with exponential backoff in case of failures.

      :param wallet: The wallet from which the stake will be delegated.
      :type wallet: bittensor.wallet
      :param delegate_ss58: The SS58 address of the delegate's hotkey.
      :type delegate_ss58: str
      :param amount: The amount of stake to be delegated.
      :type amount: Balance
      :param wait_for_inclusion: Whether to wait for the transaction to be included in a block. Default is ``True``.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Whether to wait for the transaction to be finalized. Default is ``False``.
      :type wait_for_finalization: bool, optional

      :returns: ``True`` if the delegation is successful, ``False`` otherwise.
      :rtype: bool



   .. py:method:: _do_undelegation(wallet, delegate_ss58, amount, wait_for_inclusion = True, wait_for_finalization = False)

      Removes a specified amount of stake from a delegate's hotkey.

      This method sends a transaction to remove stake from a delegate's hotkey and retries the call up to three times
      with exponential backoff in case of failures.

      :param wallet: The wallet from which the stake will be removed.
      :type wallet: bittensor.wallet
      :param delegate_ss58: The SS58 address of the delegate's hotkey.
      :type delegate_ss58: str
      :param amount: The amount of stake to be removed.
      :type amount: Balance
      :param wait_for_inclusion: Whether to wait for the transaction to be included in a block. Default is ``True``.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Whether to wait for the transaction to be finalized. Default is ``False``.
      :type wait_for_finalization: bool, optional

      :returns: ``True`` if the undelegation is successful, ``False`` otherwise.
      :rtype: bool



   .. py:method:: _do_nominate(wallet, wait_for_inclusion = True, wait_for_finalization = False)

      Nominates the wallet's hotkey to become a delegate.

      This method sends a transaction to nominate the wallet's hotkey to become a delegate and retries the call up to
      three times with exponential backoff in case of failures.

      :param wallet: The wallet whose hotkey will be nominated.
      :type wallet: bittensor.wallet
      :param wait_for_inclusion: Whether to wait for the transaction to be included in a block. Default is ``True``.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Whether to wait for the transaction to be finalized. Default is ``False``.
      :type wait_for_finalization: bool, optional

      :returns: ``True`` if the nomination is successful, ``False`` otherwise.
      :rtype: bool



   .. py:method:: get_transfer_fee(wallet, dest, value)

      Calculates the transaction fee for transferring tokens from a wallet to a specified destination address.
      This function simulates the transfer to estimate the associated cost, taking into account the current
      network conditions and transaction complexity.

      :param wallet: The wallet from which the transfer is initiated.
      :type wallet: bittensor.wallet
      :param dest: The ``SS58`` address of the destination account.
      :type dest: str
      :param value: The amount of tokens to be transferred, specified as a Balance object,
                    or in Tao (float) or Rao (int) units.
      :type value: Union[Balance, float, int]

      :returns: The estimated transaction fee for the transfer, represented as a Balance object.
      :rtype: Balance

      Estimating the transfer fee is essential for planning and executing token transactions, ensuring that the
      wallet has sufficient funds to cover both the transfer amount and the associated costs. This function
      provides a crucial tool for managing financial operations within the Bittensor network.



   .. py:method:: _do_transfer(wallet, dest, transfer_balance, wait_for_inclusion = True, wait_for_finalization = False)

      Sends a transfer extrinsic to the chain.

      :param wallet: Wallet object.
      :type wallet: :func:`bittensor.wallet`
      :param dest: Destination public key address.
      :type dest: str
      :param transfer_balance: Amount to transfer.
      :type transfer_balance: :func:`Balance`
      :param wait_for_inclusion: If ``true``, waits for inclusion.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: If ``true``, waits for finalization.
      :type wait_for_finalization: bool

      :returns: ``True`` if transfer was successful.
                block_hash (str): Block hash of the transfer. On success and if wait_for_ finalization/inclusion is
                    ``True``.
                error (str): Error message if transfer failed.
      :rtype: success (bool)



   .. py:method:: _do_pow_register(netuid, wallet, pow_result, wait_for_inclusion = False, wait_for_finalization = True)

      Sends a (POW) register extrinsic to the chain.

      :param netuid: The subnet to register on.
      :type netuid: int
      :param wallet: The wallet to register.
      :type wallet: bittensor.wallet
      :param pow_result: The PoW result to register.
      :type pow_result: POWSolution
      :param wait_for_inclusion: If ``True``, waits for the extrinsic to be included in a block.
                                 Default to `False`.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: If ``True``, waits for the extrinsic to be finalized. Default to `True`.
      :type wait_for_finalization: bool

      :returns: ``True`` if the extrinsic was included in a block.
                error (Optional[str]): ``None`` on success or not waiting for inclusion/finalization, otherwise the error
                    message.
      :rtype: success (bool)



   .. py:method:: _do_burned_register(netuid, wallet, wait_for_inclusion = False, wait_for_finalization = True)

      Performs a burned register extrinsic call to the Subtensor chain.

      This method sends a registration transaction to the Subtensor blockchain using the burned register mechanism. It
      retries the call up to three times with exponential backoff in case of failures.

      :param netuid: The network unique identifier to register on.
      :type netuid: int
      :param wallet: The wallet to be registered.
      :type wallet: bittensor.wallet
      :param wait_for_inclusion: Whether to wait for the transaction to be included in a block. Default is False.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: Whether to wait for the transaction to be finalized. Default is True.
      :type wait_for_finalization: bool

      :returns: A tuple containing a boolean indicating success or failure, and an optional error message.
      :rtype: Tuple[bool, Optional[str]]



   .. py:method:: _do_stake(wallet, hotkey_ss58, amount, wait_for_inclusion = True, wait_for_finalization = False)

      Sends a stake extrinsic to the chain.

      :param wallet: Wallet object that can sign the extrinsic.
      :type wallet: :func:`bittensor.wallet`
      :param hotkey_ss58: Hotkey ``ss58`` address to stake to.
      :type hotkey_ss58: str
      :param amount: Amount to stake.
      :type amount: :func:`Balance`
      :param wait_for_inclusion: If ``true``, waits for inclusion before returning.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: If ``true``, waits for finalization before returning.
      :type wait_for_finalization: bool

      :returns: ``True`` if the extrinsic was successful.
      :rtype: success (bool)

      :raises StakeError: If the extrinsic failed.



   .. py:method:: _do_unstake(wallet, hotkey_ss58, amount, wait_for_inclusion = True, wait_for_finalization = False)

      Sends an unstake extrinsic to the chain.

      :param wallet: Wallet object that can sign the extrinsic.
      :type wallet: :func:`bittensor.wallet`
      :param hotkey_ss58: Hotkey ``ss58`` address to unstake from.
      :type hotkey_ss58: str
      :param amount: Amount to unstake.
      :type amount: :func:`Balance`
      :param wait_for_inclusion: If ``true``, waits for inclusion before returning.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: If ``true``, waits for finalization before returning.
      :type wait_for_finalization: bool

      :returns: ``True`` if the extrinsic was successful.
      :rtype: success (bool)

      :raises StakeError: If the extrinsic failed.



   .. py:method:: min_required_stake()
      :staticmethod:


      As the minimum required stake may change, this method allows us to dynamically
      update the amount in the mock without updating the tests



   .. py:method:: get_minimum_required_stake()

      Returns the minimum required stake for nominators in the Subtensor network.

      This method retries the substrate call up to three times with exponential backoff in case of failures.

      :returns: The minimum required stake as a Balance object.
      :rtype: Balance

      :raises Exception: If the substrate call fails after the maximum number of retries.



   .. py:method:: get_delegate_by_hotkey(hotkey_ss58, block = None)

      Retrieves detailed information about a delegate neuron based on its hotkey. This function provides
      a comprehensive view of the delegate's status, including its stakes, nominators, and reward distribution.

      :param hotkey_ss58: The ``SS58`` address of the delegate's hotkey.
      :type hotkey_ss58: str
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: Detailed information about the delegate neuron, ``None`` if not found.
      :rtype: Optional[DelegateInfo]

      This function is essential for understanding the roles and influence of delegate neurons within
      the Bittensor network's consensus and governance structures.



   .. py:method:: get_delegates(block = None)

      Retrieves a list of all delegate neurons within the Bittensor network. This function provides an overview of the
      neurons that are actively involved in the network's delegation system.

      Analyzing the delegate population offers insights into the network's governance dynamics and the distribution of
      trust and responsibility among participating neurons.

      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: A list of DelegateInfo objects detailing each delegate's characteristics.
      :rtype: List[DelegateInfo]



   .. py:method:: get_delegated(coldkey_ss58, block = None)

      Returns the list of delegates that a given coldkey is staked to.



   .. py:method:: get_all_subnets_info(block = None)

      Retrieves detailed information about all subnets within the Bittensor network. This function
      provides comprehensive data on each subnet, including its characteristics and operational parameters.

      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: A list of SubnetInfo objects, each containing detailed information about a subnet.
      :rtype: List[SubnetInfo]

      Gaining insights into the subnets' details assists in understanding the network's composition,
      the roles of different subnets, and their unique features.



   .. py:method:: get_subnet_info(netuid, block = None)

      Retrieves detailed information about a specific subnet within the Bittensor network. This function
      provides key data on the subnet, including its operational parameters and network status.

      :param netuid: The network UID of the subnet to query.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: Detailed information about the subnet, or ``None`` if not found.
      :rtype: Optional[SubnetInfo]

      This function is essential for neurons and stakeholders interested in the specifics of a particular
      subnet, including its governance, performance, and role within the broader network.



   .. py:method:: _do_serve_prometheus(wallet, call_params, wait_for_inclusion = False, wait_for_finalization = True)

      Sends a serve prometheus extrinsic to the chain.
      :param wallet: Wallet object.
      :type wallet: :func:`bittensor.wallet`
      :param call_params: Prometheus serve call parameters.
      :type call_params: :func:`PrometheusServeCallParams`
      :param wait_for_inclusion: If ``true``, waits for inclusion.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: If ``true``, waits for finalization.
      :type wait_for_finalization: bool

      :returns: ``True`` if serve prometheus was successful.
                error (:func:`Optional[str]`): Error message if serve prometheus failed, ``None`` otherwise.
      :rtype: success (bool)



   .. py:method:: _do_set_weights(wallet, netuid, uids, vals, version_key, wait_for_inclusion = False, wait_for_finalization = True)

      Internal method to send a transaction to the Bittensor blockchain, setting weights
      for specified neurons. This method constructs and submits the transaction, handling
      retries and blockchain communication.

      :param wallet: The wallet associated with the neuron setting the weights.
      :type wallet: bittensor.wallet
      :param uids: List of neuron UIDs for which weights are being set.
      :type uids: List[int]
      :param vals: List of weight values corresponding to each UID.
      :type vals: List[int]
      :param netuid: Unique identifier for the network.
      :type netuid: int
      :param version_key: Version key for compatibility with the network.
      :type version_key: int, optional
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional

      :returns: A tuple containing a success flag and an optional error message.
      :rtype: Tuple[bool, Optional[str]]

      This method is vital for the dynamic weighting mechanism in Bittensor, where neurons adjust their
      trust in other neurons based on observed performance and contributions.



   .. py:method:: _do_serve_axon(wallet, call_params, wait_for_inclusion = False, wait_for_finalization = True)

      Internal method to submit a serve axon transaction to the Bittensor blockchain. This method
      creates and submits a transaction, enabling a neuron's Axon to serve requests on the network.

      :param wallet: The wallet associated with the neuron.
      :type wallet: bittensor.wallet
      :param call_params: Parameters required for the serve axon call.
      :type call_params: AxonServeCallParams
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional

      :returns: A tuple containing a success flag and an optional error message.
      :rtype: Tuple[bool, Optional[str]]

      This function is crucial for initializing and announcing a neuron's Axon service on the network,
      enhancing the decentralized computation capabilities of Bittensor.



.. py:class:: MockWallet(**kwargs)

   Bases: :py:obj:`bittensor.wallet`


   Mocked Version of the bittensor wallet class, meant to be used for testing

   Init bittensor wallet object containing a hot and coldkey.
   :param _mock: If true creates a mock wallet with random keys.
   :type _mock: required=True, default=False


   .. py:attribute:: _is_mock
      :value: True



   .. py:attribute:: _mocked_coldkey_keyfile
      :value: None



   .. py:attribute:: _mocked_hotkey_keyfile
      :value: None



   .. py:property:: hotkey_file
      :type: bittensor.keyfile

      Property that returns the hotkey file.

      :returns: The hotkey file.
      :rtype: bittensor.keyfile


   .. py:property:: coldkey_file
      :type: bittensor.keyfile

      Property that returns the coldkey file.

      :returns: The coldkey file.
      :rtype: bittensor.keyfile


   .. py:property:: coldkeypub_file
      :type: bittensor.keyfile

      Property that returns the coldkeypub file.

      :returns: The coldkeypub file.
      :rtype: bittensor.keyfile


.. py:class:: SubnetsAPI(wallet)

   Bases: :py:obj:`abc.ABC`


   Helper class that provides a standard way to create an ABC using
   inheritance.


   .. py:attribute:: wallet


   .. py:attribute:: dendrite


   .. py:method:: __call__(*args, **kwargs)
      :async:



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
      :type axons: Union[bt.axon, List[bt.axon]]
      :param deserialize: Whether to deserialize the responses. Defaults to False.
      :type deserialize: bool, optional
      :param timeout: The timeout in seconds for the query. Defaults to 12.
      :type timeout: int, optional
      :param \*\*kwargs: Keyword arguments for the prepare_synapse_fn.

      :returns: The result of the process_responses_fn.
      :rtype: Any



.. py:data:: configs

.. py:data:: defaults

