bittensor.core.settings
=======================

.. py:module:: bittensor.core.settings


Attributes
----------

.. autoapisummary::

   bittensor.core.settings.__version__
   bittensor.core.settings.__console__
   bittensor.core.settings.__use_console__
   bittensor.core.settings.bt_console
   bittensor.core.settings.HOME_DIR
   bittensor.core.settings.USER_BITTENSOR_DIR
   bittensor.core.settings.WALLETS_DIR
   bittensor.core.settings.MINERS_DIR
   bittensor.core.settings.NETWORKS
   bittensor.core.settings.DEFAULT_ENDPOINT
   bittensor.core.settings.DEFAULT_NETWORK
   bittensor.core.settings.FINNEY_ENTRYPOINT
   bittensor.core.settings.FINNEY_TEST_ENTRYPOINT
   bittensor.core.settings.ARCHIVE_ENTRYPOINT
   bittensor.core.settings.LOCAL_ENTRYPOINT
   bittensor.core.settings.TAO_SYMBOL
   bittensor.core.settings.RAO_SYMBOL
   bittensor.core.settings.PIPADDRESS
   bittensor.core.settings.BLOCKTIME
   bittensor.core.settings.SS58_FORMAT
   bittensor.core.settings.SS58_ADDRESS_LENGTH
   bittensor.core.settings.DELEGATES_DETAILS_URL
   bittensor.core.settings.NETWORK_EXPLORER_MAP
   bittensor.core.settings.TYPE_REGISTRY
   bittensor.core.settings._BT_AXON_PORT
   bittensor.core.settings._BT_AXON_MAX_WORKERS
   bittensor.core.settings._BT_PRIORITY_MAX_WORKERS
   bittensor.core.settings._BT_PRIORITY_MAXSIZE
   bittensor.core.settings.DEFAULTS
   bittensor.core.settings.__version__
   bittensor.core.settings.version_split
   bittensor.core.settings._version_info
   bittensor.core.settings._version_int_base
   bittensor.core.settings.version_as_int


Functions
---------

.. autoapisummary::

   bittensor.core.settings.turn_console_off
   bittensor.core.settings.turn_console_on
   bittensor.core.settings.__apply_nest_asyncio


Module Contents
---------------

.. py:data:: __version__
   :value: '8.0.0'


.. py:data:: __console__

.. py:data:: __use_console__
   :value: True


.. py:function:: turn_console_off()

.. py:function:: turn_console_on()

.. py:data:: bt_console

.. py:data:: HOME_DIR

.. py:data:: USER_BITTENSOR_DIR

.. py:data:: WALLETS_DIR

.. py:data:: MINERS_DIR

.. py:data:: NETWORKS
   :value: ['local', 'finney', 'test', 'archive']


.. py:data:: DEFAULT_ENDPOINT
   :value: 'wss://entrypoint-finney.opentensor.ai:443'


.. py:data:: DEFAULT_NETWORK

.. py:data:: FINNEY_ENTRYPOINT
   :value: 'wss://entrypoint-finney.opentensor.ai:443'


.. py:data:: FINNEY_TEST_ENTRYPOINT
   :value: 'wss://test.finney.opentensor.ai:443/'


.. py:data:: ARCHIVE_ENTRYPOINT
   :value: 'wss://archive.chain.opentensor.ai:443/'


.. py:data:: LOCAL_ENTRYPOINT

.. py:data:: TAO_SYMBOL
   :type:  str

.. py:data:: RAO_SYMBOL
   :type:  str

.. py:data:: PIPADDRESS
   :value: 'https://pypi.org/pypi/bittensor/json'


.. py:data:: BLOCKTIME
   :value: 12


.. py:data:: SS58_FORMAT
   :value: 42


.. py:data:: SS58_ADDRESS_LENGTH
   :value: 48


.. py:data:: DELEGATES_DETAILS_URL
   :value: 'https://raw.githubusercontent.com/opentensor/bittensor-delegates/main/public/delegates.json'


.. py:data:: NETWORK_EXPLORER_MAP

.. py:data:: TYPE_REGISTRY
   :type:  dict

.. py:data:: _BT_AXON_PORT

.. py:data:: _BT_AXON_MAX_WORKERS

.. py:data:: _BT_PRIORITY_MAX_WORKERS

.. py:data:: _BT_PRIORITY_MAXSIZE

.. py:data:: DEFAULTS

.. py:data:: __version__

.. py:data:: version_split

.. py:data:: _version_info

.. py:data:: _version_int_base
   :value: 1000


.. py:data:: version_as_int
   :type:  int

.. py:function:: __apply_nest_asyncio()

   Apply nest_asyncio if the environment variable NEST_ASYNCIO is set to "1" or not set.
   If not set, warn the user that the default will change in the future.


