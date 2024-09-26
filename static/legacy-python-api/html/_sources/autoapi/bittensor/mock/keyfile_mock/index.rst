bittensor.mock.keyfile_mock
===========================

.. py:module:: bittensor.mock.keyfile_mock


Classes
-------

.. autoapisummary::

   bittensor.mock.keyfile_mock.MockKeyfile


Module Contents
---------------

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



