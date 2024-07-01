:py:mod:`bittensor.wallet`
==========================

.. py:module:: bittensor.wallet

.. autoapi-nested-parse::

   Implementation of the wallet class, which manages balances with staking and transfer. Also manages hotkey and coldkey.



Module Contents
---------------

Classes
~~~~~~~

.. autoapisummary::

   bittensor.wallet.wallet



Functions
~~~~~~~~~

.. autoapisummary::

   bittensor.wallet.display_mnemonic_msg



.. py:function:: display_mnemonic_msg(keypair: substrateinterface.Keypair, key_type: str)

   Display the mnemonic and a warning message to keep the mnemonic safe.

   :param keypair: Keypair object.
   :type keypair: Keypair
   :param key_type: Type of the key (coldkey or hotkey).
   :type key_type: str


.. py:class:: wallet(name: str = None, hotkey: str = None, path: str = None, config: bittensor.config = None)


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

   .. py:property:: coldkey
      :type: bittensor.Keypair

      Loads the hotkey from wallet.path/wallet.name/coldkey or raises an error.

      :returns: coldkey loaded from config arguments.
      :rtype: coldkey (Keypair)

      :raises KeyFileError: Raised if the file is corrupt of non-existent.
      :raises CryptoKeyError: Raised if the user enters an incorrec password for an encrypted keyfile.

   .. py:property:: coldkey_file
      :type: bittensor.keyfile

      Property that returns the coldkey file.

      :returns: The coldkey file.
      :rtype: bittensor.keyfile

   .. py:property:: coldkeypub
      :type: bittensor.Keypair

      Loads the coldkeypub from wallet.path/wallet.name/coldkeypub.txt or raises an error.

      :returns: coldkeypub loaded from config arguments.
      :rtype: coldkeypub (Keypair)

      :raises KeyFileError: Raised if the file is corrupt of non-existent.
      :raises CryptoKeyError: Raised if the user enters an incorrect password for an encrypted keyfile.

   .. py:property:: coldkeypub_file
      :type: bittensor.keyfile

      Property that returns the coldkeypub file.

      :returns: The coldkeypub file.
      :rtype: bittensor.keyfile

   .. py:property:: hotkey
      :type: bittensor.Keypair

      Loads the hotkey from wallet.path/wallet.name/hotkeys/wallet.hotkey or raises an error.

      :returns:     hotkey loaded from config arguments.
      :rtype: hotkey (Keypair)

      :raises KeyFileError: Raised if the file is corrupt of non-existent.
      :raises CryptoKeyError: Raised if the user enters an incorrec password for an encrypted keyfile.

   .. py:property:: hotkey_file
      :type: bittensor.keyfile

      Property that returns the hotkey file.

      :returns: The hotkey file.
      :rtype: bittensor.keyfile

   .. py:attribute:: regen_coldkey

      

   .. py:attribute:: regen_coldkeypub

      

   .. py:attribute:: regen_hotkey

      

   .. py:method:: __repr__()

      Returns the string representation of the wallet object.

      :returns: The string representation.
      :rtype: str


   .. py:method:: __str__()

      Returns the string representation of the Wallet object.

      :returns: The string representation.
      :rtype: str


   .. py:method:: add_args(parser: argparse.ArgumentParser, prefix: str = None)
      :classmethod:

      Accept specific arguments from parser.

      :param parser: Argument parser object.
      :type parser: argparse.ArgumentParser
      :param prefix: Argument prefix.
      :type prefix: str


   .. py:method:: config() -> bittensor.config
      :classmethod:

      Get config from the argument parser.

      :returns: Config object.
      :rtype: bittensor.config


   .. py:method:: create(coldkey_use_password: bool = True, hotkey_use_password: bool = False) -> wallet

      Checks for existing coldkeypub and hotkeys, and creates them if non-existent.

      :param coldkey_use_password: Whether to use a password for coldkey. Defaults to ``True``.
      :type coldkey_use_password: bool, optional
      :param hotkey_use_password: Whether to use a password for hotkey. Defaults to ``False``.
      :type hotkey_use_password: bool, optional

      :returns: The wallet object.
      :rtype: wallet


   .. py:method:: create_coldkey_from_uri(uri: str, use_password: bool = True, overwrite: bool = False, suppress: bool = False) -> wallet

      Creates coldkey from suri string, optionally encrypts it with the user-provided password.

      :param uri: (str, required):
                  URI string to use i.e., ``/Alice`` or ``/Bob``.
      :param use_password: Is the created key password protected.
      :type use_password: bool, optional
      :param overwrite: Determines if this operation overwrites the coldkey under the same path ``<wallet path>/<wallet name>/coldkey``.
      :type overwrite: bool, optional

      :returns:     This object with newly created coldkey.
      :rtype: wallet (bittensor.wallet)


   .. py:method:: create_hotkey_from_uri(uri: str, use_password: bool = False, overwrite: bool = False, suppress: bool = False) -> wallet

      Creates hotkey from suri string, optionally encrypts it with the user-provided password.

      :param uri: (str, required):
                  URI string to use i.e., ``/Alice`` or ``/Bob``
      :param use_password: Is the created key password protected.
      :type use_password: bool, optional
      :param overwrite: Determines if this operation overwrites the hotkey under the same path ``<wallet path>/<wallet name>/hotkeys/<hotkey>``.
      :type overwrite: bool, optional

      :returns:     This object with newly created hotkey.
      :rtype: wallet (bittensor.wallet)


   .. py:method:: create_if_non_existent(coldkey_use_password: bool = True, hotkey_use_password: bool = False) -> wallet

      Checks for existing coldkeypub and hotkeys, and creates them if non-existent.

      :param coldkey_use_password: Whether to use a password for coldkey. Defaults to ``True``.
      :type coldkey_use_password: bool, optional
      :param hotkey_use_password: Whether to use a password for hotkey. Defaults to ``False``.
      :type hotkey_use_password: bool, optional

      :returns: The wallet object.
      :rtype: wallet


   .. py:method:: create_new_coldkey(n_words: int = 12, use_password: bool = True, overwrite: bool = False, suppress: bool = False) -> wallet

      Creates a new coldkey, optionally encrypts it with the user-provided password and saves to disk.

      :param n_words: (int, optional):
                      Number of mnemonic words to use.
      :param use_password: Is the created key password protected.
      :type use_password: bool, optional
      :param overwrite: Determines if this operation overwrites the coldkey under the same path ``<wallet path>/<wallet name>/coldkey``.
      :type overwrite: bool, optional

      :returns:     This object with newly created coldkey.
      :rtype: wallet (bittensor.wallet)


   .. py:method:: create_new_hotkey(n_words: int = 12, use_password: bool = False, overwrite: bool = False, suppress: bool = False) -> wallet

      Creates a new hotkey, optionally encrypts it with the user-provided password and saves to disk.

      :param n_words: (int, optional):
                      Number of mnemonic words to use.
      :param use_password: Is the created key password protected.
      :type use_password: bool, optional
      :param overwrite: Will this operation overwrite the hotkey under the same path <wallet path>/<wallet name>/hotkeys/<hotkey>
      :type overwrite: bool, optional

      :returns:     This object with newly created hotkey.
      :rtype: wallet (bittensor.wallet)


   .. py:method:: get_coldkey(password: str = None) -> bittensor.Keypair

      Gets the coldkey from the wallet.

      :param password: The password to decrypt the coldkey. Defaults to ``None``.
      :type password: str, optional

      :returns: The coldkey keypair.
      :rtype: bittensor.Keypair


   .. py:method:: get_coldkeypub(password: str = None) -> bittensor.Keypair

      Gets the coldkeypub from the wallet.

      :param password: The password to decrypt the coldkeypub. Defaults to ``None``.
      :type password: str, optional

      :returns: The coldkeypub keypair.
      :rtype: bittensor.Keypair


   .. py:method:: get_hotkey(password: str = None) -> bittensor.Keypair

      Gets the hotkey from the wallet.

      :param password: The password to decrypt the hotkey. Defaults to ``None``.
      :type password: str, optional

      :returns: The hotkey keypair.
      :rtype: bittensor.Keypair


   .. py:method:: help()
      :classmethod:

      Print help to stdout.


   .. py:method:: new_coldkey(n_words: int = 12, use_password: bool = True, overwrite: bool = False, suppress: bool = False) -> wallet

      Creates a new coldkey, optionally encrypts it with the user-provided password and saves to disk.

      :param n_words: (int, optional):
                      Number of mnemonic words to use.
      :param use_password: Is the created key password protected.
      :type use_password: bool, optional
      :param overwrite: Determines if this operation overwrites the coldkey under the same path ``<wallet path>/<wallet name>/coldkey``.
      :type overwrite: bool, optional

      :returns:     This object with newly created coldkey.
      :rtype: wallet (bittensor.wallet)


   .. py:method:: new_hotkey(n_words: int = 12, use_password: bool = False, overwrite: bool = False, suppress: bool = False) -> wallet

      Creates a new hotkey, optionally encrypts it with the user-provided password and saves to disk.

      :param n_words: (int, optional):
                      Number of mnemonic words to use.
      :param use_password: Is the created key password protected.
      :type use_password: bool, optional
      :param overwrite: Determines if this operation overwrites the hotkey under the same path ``<wallet path>/<wallet name>/hotkeys/<hotkey>``.
      :type overwrite: bool, optional

      :returns:     This object with newly created hotkey.
      :rtype: wallet (bittensor.wallet)


   .. py:method:: recreate(coldkey_use_password: bool = True, hotkey_use_password: bool = False) -> wallet

      Checks for existing coldkeypub and hotkeys and creates them if non-existent.

      :param coldkey_use_password: Whether to use a password for coldkey. Defaults to ``True``.
      :type coldkey_use_password: bool, optional
      :param hotkey_use_password: Whether to use a password for hotkey. Defaults to ``False``.
      :type hotkey_use_password: bool, optional

      :returns: The wallet object.
      :rtype: wallet


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


   .. py:method:: regenerate_coldkeypub(ss58_address: Optional[str] = None, public_key: Optional[Union[str, bytes]] = None, overwrite: bool = False, suppress: bool = False) -> wallet

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


   .. py:method:: set_coldkey(keypair: bittensor.Keypair, encrypt: bool = True, overwrite: bool = False) -> bittensor.keyfile

      Sets the coldkey for the wallet.

      :param keypair: The coldkey keypair.
      :type keypair: bittensor.Keypair
      :param encrypt: Whether to encrypt the coldkey. Defaults to ``True``.
      :type encrypt: bool, optional
      :param overwrite: Whether to overwrite an existing coldkey. Defaults to ``False``.
      :type overwrite: bool, optional

      :returns: The coldkey file.
      :rtype: bittensor.keyfile


   .. py:method:: set_coldkeypub(keypair: bittensor.Keypair, encrypt: bool = False, overwrite: bool = False) -> bittensor.keyfile

      Sets the coldkeypub for the wallet.

      :param keypair: The coldkeypub keypair.
      :type keypair: bittensor.Keypair
      :param encrypt: Whether to encrypt the coldkeypub. Defaults to ``False``.
      :type encrypt: bool, optional
      :param overwrite: Whether to overwrite an existing coldkeypub. Defaults to ``False``.
      :type overwrite: bool, optional

      :returns: The coldkeypub file.
      :rtype: bittensor.keyfile


   .. py:method:: set_hotkey(keypair: bittensor.Keypair, encrypt: bool = False, overwrite: bool = False) -> bittensor.keyfile

      Sets the hotkey for the wallet.

      :param keypair: The hotkey keypair.
      :type keypair: bittensor.Keypair
      :param encrypt: Whether to encrypt the hotkey. Defaults to ``False``.
      :type encrypt: bool, optional
      :param overwrite: Whether to overwrite an existing hotkey. Defaults to ``False``.
      :type overwrite: bool, optional

      :returns: The hotkey file.
      :rtype: bittensor.keyfile



