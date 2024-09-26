bittensor.mock.wallet_mock
==========================

.. py:module:: bittensor.mock.wallet_mock


Classes
-------

.. autoapisummary::

   bittensor.mock.wallet_mock.MockWallet


Functions
---------

.. autoapisummary::

   bittensor.mock.wallet_mock.get_mock_wallet
   bittensor.mock.wallet_mock.get_mock_keypair
   bittensor.mock.wallet_mock.get_mock_hotkey
   bittensor.mock.wallet_mock.get_mock_coldkey


Module Contents
---------------

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


.. py:function:: get_mock_wallet(coldkey = None, hotkey = None)

.. py:function:: get_mock_keypair(uid, test_name = None)

   Returns a mock keypair from a uid and optional test_name.
   If test_name is not provided, the uid is the only seed.
   If test_name is provided, the uid is hashed with the test_name to create a unique seed for the test.


.. py:function:: get_mock_hotkey(uid)

.. py:function:: get_mock_coldkey(uid)

