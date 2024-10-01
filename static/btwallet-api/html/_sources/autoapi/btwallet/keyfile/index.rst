btwallet.keyfile
================

.. py:module:: btwallet.keyfile


Attributes
----------

.. autoapisummary::

   btwallet.keyfile.NACL_SALT
   btwallet.keyfile.console


Classes
-------

.. autoapisummary::

   btwallet.keyfile.Keyfile


Functions
---------

.. autoapisummary::

   btwallet.keyfile.serialized_keypair_to_keyfile_data
   btwallet.keyfile.deserialize_keypair_from_keyfile_data
   btwallet.keyfile.validate_password
   btwallet.keyfile.ask_password_to_encrypt
   btwallet.keyfile.keyfile_data_is_encrypted_nacl
   btwallet.keyfile.keyfile_data_is_encrypted_ansible
   btwallet.keyfile.keyfile_data_is_encrypted_legacy
   btwallet.keyfile.keyfile_data_is_encrypted
   btwallet.keyfile.keyfile_data_encryption_method
   btwallet.keyfile.legacy_encrypt_keyfile_data
   btwallet.keyfile.encrypt_keyfile_data
   btwallet.keyfile.get_coldkey_password_from_environment
   btwallet.keyfile.decrypt_keyfile_data


Module Contents
---------------

.. py:data:: NACL_SALT
   :value: b'\x13q\x83\xdf\xf1Z\t\xbc\x9c\x90\xb5Q\x879\xe9\xb1'


.. py:data:: console

.. py:function:: serialized_keypair_to_keyfile_data(keypair)

   Serializes keypair object into keyfile data.

   :param keypair: The keypair object to be serialized.
   :type keypair: Keypair

   :returns: Serialized keypair data.
   :rtype: data (bytes)


.. py:function:: deserialize_keypair_from_keyfile_data(keyfile_data)

   Deserializes Keypair object from passed keyfile data.

   :param keyfile_data: The keyfile data as bytes to be loaded.
   :type keyfile_data: bytes

   :returns: The Keypair loaded from bytes.
   :rtype: keypair (Keypair)

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

   Returns type of encryption method as a string.

   :param keyfile_data: Bytes to validate
   :type keyfile_data: bytes, required

   :returns: returns the name of encryption method.
   :rtype: encryption_method (str)


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


.. py:class:: Keyfile(path, name)

   Defines an interface for a substrate interface keypair stored on device.


   .. py:attribute:: path


   .. py:attribute:: name


   .. py:attribute:: _name


   .. py:method:: __str__()


   .. py:method:: __repr__()


   .. py:property:: keypair
      :type: substrateinterface.Keypair

      Returns the keypair from path, decrypts data if the file is encrypted.

      :returns: The keypair stored under the path.
      :rtype: keypair (Keypair)

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
      :type keypair: Keypair
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
      :rtype: keypair (Keypair)

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

      :raises KeyFileError: Raised if the file does not exist, is not readable, writable.

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



