:py:mod:`bittensor.keyfile`
===========================

.. py:module:: bittensor.keyfile


Module Contents
---------------

Classes
~~~~~~~

.. autoapisummary::

   bittensor.keyfile.Mockkeyfile
   bittensor.keyfile.keyfile



Functions
~~~~~~~~~

.. autoapisummary::

   bittensor.keyfile.ask_password_to_encrypt
   bittensor.keyfile.decrypt_keyfile_data
   bittensor.keyfile.deserialize_keypair_from_keyfile_data
   bittensor.keyfile.encrypt_keyfile_data
   bittensor.keyfile.get_coldkey_password_from_environment
   bittensor.keyfile.keyfile_data_encryption_method
   bittensor.keyfile.keyfile_data_is_encrypted
   bittensor.keyfile.keyfile_data_is_encrypted_ansible
   bittensor.keyfile.keyfile_data_is_encrypted_legacy
   bittensor.keyfile.keyfile_data_is_encrypted_nacl
   bittensor.keyfile.legacy_encrypt_keyfile_data
   bittensor.keyfile.serialized_keypair_to_keyfile_data
   bittensor.keyfile.validate_password



Attributes
~~~~~~~~~~

.. autoapisummary::

   bittensor.keyfile.NACL_SALT


.. py:class:: Mockkeyfile(path: str)


   The Mockkeyfile is a mock object representing a keyfile that does not exist on the device.

   It is designed for use in testing scenarios and simulations where actual filesystem operations are not required.
   The keypair stored in the Mockkeyfile is treated as non-encrypted and the data is stored as a serialized string.

   Initializes a Mockkeyfile object.

   :param path: The path of the mock keyfile.
   :type path: str

   .. py:property:: data

      Returns the serialized keypair data stored in the keyfile.

      :returns: The serialized keypair data.
      :rtype: bytes

   .. py:property:: keypair

      Returns the mock keypair stored in the keyfile.

      :returns: The mock keypair.
      :rtype: bittensor.Keypair

   .. py:method:: __repr__()

      Returns a string representation of the Mockkeyfile, same as :func:`__str__()`.

      :returns: The string representation of the Mockkeyfile.
      :rtype: str


   .. py:method:: __str__()

      Returns a string representation of the Mockkeyfile. The representation will indicate if the keyfile is empty, encrypted, or decrypted.

      :returns: The string representation of the Mockkeyfile.
      :rtype: str


   .. py:method:: check_and_update_encryption(no_prompt=None, print_result=False)


   .. py:method:: decrypt(password=None)

      Returns without doing anything since the mock keyfile is not encrypted.

      :param password: Ignored in this context. Defaults to ``None``.
      :type password: str, optional


   .. py:method:: encrypt(password=None)

      Raises a ValueError since encryption is not supported for the mock keyfile.

      :param password: Ignored in this context. Defaults to ``None``.
      :type password: str, optional

      :raises ValueError: Always raises this exception for Mockkeyfile.


   .. py:method:: exists_on_device()

      Returns ``True`` indicating that the mock keyfile exists on the device (although it is not created on the actual file system).

      :returns: Always returns ``True`` for Mockkeyfile.
      :rtype: bool


   .. py:method:: get_keypair(password=None)

      Returns the mock keypair stored in the keyfile. The ``password`` parameter is ignored.

      :param password: Ignored in this context. Defaults to ``None``.
      :type password: str, optional

      :returns: The mock keypair stored in the keyfile.
      :rtype: bittensor.Keypair


   .. py:method:: is_encrypted()

      Returns ``False`` indicating that the mock keyfile is not encrypted.

      :returns: Always returns ``False`` for Mockkeyfile.
      :rtype: bool


   .. py:method:: is_readable()

      Returns ``True`` indicating that the mock keyfile is readable (although it is not read from the actual file system).

      :returns: Always returns ``True`` for Mockkeyfile.
      :rtype: bool


   .. py:method:: is_writable()

      Returns ``True`` indicating that the mock keyfile is writable (although it is not written to the actual file system).

      :returns: Always returns ``True`` for Mockkeyfile.
      :rtype: bool


   .. py:method:: make_dirs()

      Creates the directories for the mock keyfile. Does nothing in this class, since no actual filesystem operations are needed.


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



.. py:data:: NACL_SALT
   :value: b'\x13q\x83\xdf\xf1Z\t\xbc\x9c\x90\xb5Q\x879\xe9\xb1'

   

.. py:function:: ask_password_to_encrypt() -> str

   Prompts the user to enter a password for key encryption.

   :returns: The valid password entered by the user.
   :rtype: password (str)


.. py:function:: decrypt_keyfile_data(keyfile_data: bytes, password: str = None, coldkey_name: Optional[str] = None) -> bytes

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


.. py:function:: deserialize_keypair_from_keyfile_data(keyfile_data: bytes) -> bittensor.Keypair

   Deserializes Keypair object from passed keyfile data.

   :param keyfile_data: The keyfile data as bytes to be loaded.
   :type keyfile_data: bytes

   :returns: The Keypair loaded from bytes.
   :rtype: keypair (bittensor.Keypair)

   :raises KeyFileError: Raised if the passed bytes cannot construct a keypair object.


.. py:function:: encrypt_keyfile_data(keyfile_data: bytes, password: str = None) -> bytes

   Encrypts the passed keyfile data using ansible vault.

   :param keyfile_data: The bytes to encrypt.
   :type keyfile_data: bytes
   :param password: The password used to encrypt the data. If ``None``, asks for user input.
   :type password: str, optional

   :returns: The encrypted data.
   :rtype: encrypted_data (bytes)


.. py:function:: get_coldkey_password_from_environment(coldkey_name: str) -> Optional[str]

   Retrieves the cold key password from the environment variables.

   :param coldkey_name: The name of the cold key.
   :type coldkey_name: str

   :returns: The password retrieved from the environment variables, or ``None`` if not found.
   :rtype: password (str)


.. py:class:: keyfile(path: str)


   Defines an interface for a substrate interface keypair stored on device.

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

   .. py:property:: keypair
      :type: bittensor.Keypair

      Returns the keypair from path, decrypts data if the file is encrypted.

      :returns: The keypair stored under the path.
      :rtype: keypair (bittensor.Keypair)

      :raises KeyFileError: Raised if the file does not exist, is not readable, writable, corrupted, or if the password is incorrect.

   .. py:method:: __repr__()

      Return repr(self).


   .. py:method:: __str__()

      Return str(self).


   .. py:method:: _may_overwrite() -> bool

      Asks the user if it is okay to overwrite the file.

      :returns: ``True`` if the user allows overwriting the file.
      :rtype: may_overwrite (bool)


   .. py:method:: _read_keyfile_data_from_file() -> bytes

      Reads the keyfile data from the file.

      :returns: The keyfile data stored under the path.
      :rtype: keyfile_data (bytes)

      :raises KeyFileError: Raised if the file does not exist or is not readable.


   .. py:method:: _write_keyfile_data_to_file(keyfile_data: bytes, overwrite: bool = False)

      Writes the keyfile data to the file.

      :param keyfile_data: The byte data to store under the path.
      :type keyfile_data: bytes
      :param overwrite: If ``True``, overwrites the data without asking for permission from the user. Default is ``False``.
      :type overwrite: bool, optional

      :raises KeyFileError: Raised if the file is not writable or the user responds No to the overwrite prompt.


   .. py:method:: check_and_update_encryption(print_result: bool = True, no_prompt: bool = False)

      Check the version of keyfile and update if needed.

      :param print_result: Print the checking result or not.
      :type print_result: bool
      :param no_prompt: Skip if no prompt.
      :type no_prompt: bool

      :raises KeyFileError: Raised if the file does not exists, is not readable, writable.

      :returns:     Return ``True`` if the keyfile is the most updated with nacl, else ``False``.
      :rtype: result (bool)


   .. py:method:: decrypt(password: str = None)

      Decrypts the file under the path.

      :param password: The password for decryption. If ``None``, asks for user input.
      :type password: str, optional

      :raises KeyFileError: Raised if the file does not exist, is not readable, writable, corrupted, or if the password is incorrect.


   .. py:method:: encrypt(password: str = None)

      Encrypts the file under the path.

      :param password: The password for encryption. If ``None``, asks for user input.
      :type password: str, optional

      :raises KeyFileError: Raised if the file does not exist, is not readable, or writable.


   .. py:method:: exists_on_device() -> bool

      Returns ``True`` if the file exists on the device.

      :returns: ``True`` if the file is on the device.
      :rtype: on_device (bool)


   .. py:method:: get_keypair(password: str = None) -> bittensor.Keypair

      Returns the keypair from the path, decrypts data if the file is encrypted.

      :param password: The password used to decrypt the file. If ``None``, asks for user input.
      :type password: str, optional

      :returns: The keypair stored under the path.
      :rtype: keypair (bittensor.Keypair)

      :raises KeyFileError: Raised if the file does not exist, is not readable, writable, corrupted, or if the password is incorrect.


   .. py:method:: is_encrypted() -> bool

      Returns ``True`` if the file under path is encrypted.

      :returns: ``True`` if the file is encrypted.
      :rtype: encrypted (bool)


   .. py:method:: is_readable() -> bool

      Returns ``True`` if the file under path is readable.

      :returns: ``True`` if the file is readable.
      :rtype: readable (bool)


   .. py:method:: is_writable() -> bool

      Returns ``True`` if the file under path is writable.

      :returns: ``True`` if the file is writable.
      :rtype: writable (bool)


   .. py:method:: make_dirs()

      Creates directories for the path if they do not exist.


   .. py:method:: set_keypair(keypair: bittensor.Keypair, encrypt: bool = True, overwrite: bool = False, password: str = None)

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



.. py:function:: keyfile_data_encryption_method(keyfile_data: bytes) -> bool

   Returns ``true`` if the keyfile data is encrypted.

   :param keyfile_data: Bytes to validate
   :type keyfile_data: bytes, required

   :returns:     ``True`` if data is encrypted.
   :rtype: encryption_method (bool)


.. py:function:: keyfile_data_is_encrypted(keyfile_data: bytes) -> bool

   Returns ``true`` if the keyfile data is encrypted.

   :param keyfile_data: The bytes to validate.
   :type keyfile_data: bytes

   :returns: ``True`` if the data is encrypted.
   :rtype: is_encrypted (bool)


.. py:function:: keyfile_data_is_encrypted_ansible(keyfile_data: bytes) -> bool

   Returns true if the keyfile data is ansible encrypted.

   :param keyfile_data: The bytes to validate.
   :type keyfile_data: bytes

   :returns: True if the data is ansible encrypted.
   :rtype: is_ansible (bool)


.. py:function:: keyfile_data_is_encrypted_legacy(keyfile_data: bytes) -> bool

   Returns true if the keyfile data is legacy encrypted.
   :param keyfile_data: The bytes to validate.
   :type keyfile_data: bytes

   :returns: ``True`` if the data is legacy encrypted.
   :rtype: is_legacy (bool)


.. py:function:: keyfile_data_is_encrypted_nacl(keyfile_data: bytes) -> bool

   Returns true if the keyfile data is NaCl encrypted.

   :param keyfile_data: Bytes to validate.
   :type keyfile_data: bytes, required

   :returns:     ``True`` if data is ansible encrypted.
   :rtype: is_nacl (bool)


.. py:function:: legacy_encrypt_keyfile_data(keyfile_data: bytes, password: str = None) -> bytes


.. py:function:: serialized_keypair_to_keyfile_data(keypair: bittensor.Keypair) -> bytes

   Serializes keypair object into keyfile data.

   :param keypair: The keypair object to be serialized.
   :type keypair: bittensor.Keypair

   :returns: Serialized keypair data.
   :rtype: data (bytes)


.. py:function:: validate_password(password: str) -> bool

   Validates the password against a password policy.

   :param password: The password to verify.
   :type password: str

   :returns: ``True`` if the password meets validity requirements.
   :rtype: valid (bool)


