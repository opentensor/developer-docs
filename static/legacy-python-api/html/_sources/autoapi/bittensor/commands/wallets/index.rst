bittensor.commands.wallets
==========================

.. py:module:: bittensor.commands.wallets


Attributes
----------

.. autoapisummary::

   bittensor.commands.wallets.API_URL
   bittensor.commands.wallets.MAX_TXN
   bittensor.commands.wallets.GRAPHQL_QUERY


Classes
-------

.. autoapisummary::

   bittensor.commands.wallets.RegenColdkeyCommand
   bittensor.commands.wallets.RegenColdkeypubCommand
   bittensor.commands.wallets.RegenHotkeyCommand
   bittensor.commands.wallets.NewHotkeyCommand
   bittensor.commands.wallets.NewColdkeyCommand
   bittensor.commands.wallets.WalletCreateCommand
   bittensor.commands.wallets.UpdateWalletCommand
   bittensor.commands.wallets.WalletBalanceCommand
   bittensor.commands.wallets.GetWalletHistoryCommand


Functions
---------

.. autoapisummary::

   bittensor.commands.wallets._get_coldkey_wallets_for_path
   bittensor.commands.wallets._get_coldkey_ss58_addresses_for_path
   bittensor.commands.wallets.get_wallet_transfers
   bittensor.commands.wallets.create_transfer_history_table


Module Contents
---------------

.. py:class:: RegenColdkeyCommand

   Executes the ``regen_coldkey`` command to regenerate a coldkey for a wallet on the Bittensor network.

   This command is used to create a new coldkey from an existing mnemonic, seed, or JSON file.

   Usage:
       Users can specify a mnemonic, a seed string, or a JSON file path to regenerate a coldkey.
       The command supports optional password protection for the generated key and can overwrite an existing coldkey.

   Optional arguments:
       - ``--mnemonic`` (str): A mnemonic phrase used to regenerate the key.
       - ``--seed`` (str): A seed hex string used for key regeneration.
       - ``--json`` (str): Path to a JSON file containing an encrypted key backup.
       - ``--json_password`` (str): Password to decrypt the JSON file.
       - ``--use_password`` (bool): Enables password protection for the generated key.
       - ``--overwrite_coldkey`` (bool): Overwrites the existing coldkey with the new one.

   Example usage::

       btcli wallet regen_coldkey --mnemonic "word1 word2 ... word12"

   .. note::

      This command is critical for users who need to regenerate their coldkey, possibly for recovery or security reasons.
      It should be used with caution to avoid overwriting existing keys unintentionally.


   .. py:method:: run()

      Creates a new coldkey under this wallet.



   .. py:method:: check_config(config)
      :staticmethod:



   .. py:method:: add_args(parser)
      :staticmethod:



.. py:class:: RegenColdkeypubCommand

   Executes the ``regen_coldkeypub`` command to regenerate the public part of a coldkey (coldkeypub) for a wallet on the Bittensor network.

   This command is used when a user needs to recreate their coldkeypub from an existing public key or SS58 address.

   Usage:
       The command requires either a public key in hexadecimal format or an ``SS58`` address to regenerate the coldkeypub. It optionally allows overwriting an existing coldkeypub file.

   Optional arguments:
       - ``--public_key_hex`` (str): The public key in hex format.
       - ``--ss58_address`` (str): The SS58 address of the coldkey.
       - ``--overwrite_coldkeypub`` (bool): Overwrites the existing coldkeypub file with the new one.

   Example usage::

       btcli wallet regen_coldkeypub --ss58_address 5DkQ4...

   .. note::

      This command is particularly useful for users who need to regenerate their coldkeypub, perhaps due to file corruption or loss.
      It is a recovery-focused utility that ensures continued access to wallet functionalities.


   .. py:method:: run()

      Creates a new coldkeypub under this wallet.



   .. py:method:: check_config(config)
      :staticmethod:



   .. py:method:: add_args(parser)
      :staticmethod:



.. py:class:: RegenHotkeyCommand

   Executes the ``regen_hotkey`` command to regenerate a hotkey for a wallet on the Bittensor network.

   Similar to regenerating a coldkey, this command creates a new hotkey from a mnemonic, seed, or JSON file.

   Usage:
       Users can provide a mnemonic, seed string, or a JSON file to regenerate the hotkey.
       The command supports optional password protection and can overwrite an existing hotkey.

   Optional arguments:
       - ``--mnemonic`` (str): A mnemonic phrase used to regenerate the key.
       - ``--seed`` (str): A seed hex string used for key regeneration.
       - ``--json`` (str): Path to a JSON file containing an encrypted key backup.
       - ``--json_password`` (str): Password to decrypt the JSON file.
       - ``--use_password`` (bool): Enables password protection for the generated key.
       - ``--overwrite_hotkey`` (bool): Overwrites the existing hotkey with the new one.

   Example usage::

       btcli wallet regen_hotkey
       btcli wallet regen_hotkey --seed 0x1234...

   .. note::

      This command is essential for users who need to regenerate their hotkey, possibly for security upgrades or key recovery.
      It should be used cautiously to avoid accidental overwrites of existing keys.


   .. py:method:: run()

      Creates a new coldkey under this wallet.



   .. py:method:: check_config(config)
      :staticmethod:



   .. py:method:: add_args(parser)
      :staticmethod:



.. py:class:: NewHotkeyCommand

   Executes the ``new_hotkey`` command to create a new hotkey under a wallet on the Bittensor network.

   This command is used to generate a new hotkey for managing a neuron or participating in the network.

   Usage:
       The command creates a new hotkey with an optional word count for the mnemonic and supports password protection.
       It also allows overwriting an existing hotkey.

   Optional arguments:
       - ``--n_words`` (int): The number of words in the mnemonic phrase.
       - ``--use_password`` (bool): Enables password protection for the generated key.
       - ``--overwrite_hotkey`` (bool): Overwrites the existing hotkey with the new one.

   Example usage::

       btcli wallet new_hotkey --n_words 24

   .. note::

      This command is useful for users who wish to create additional hotkeys for different purposes,
      such as running multiple miners or separating operational roles within the network.


   .. py:method:: run()

      Creates a new hotke under this wallet.



   .. py:method:: check_config(config)
      :staticmethod:



   .. py:method:: add_args(parser)
      :staticmethod:



.. py:class:: NewColdkeyCommand

   Executes the ``new_coldkey`` command to create a new coldkey under a wallet on the Bittensor network.

   This command generates a coldkey, which is essential for holding balances and performing high-value transactions.

   Usage:
       The command creates a new coldkey with an optional word count for the mnemonic and supports password protection.
       It also allows overwriting an existing coldkey.

   Optional arguments:
       - ``--n_words`` (int): The number of words in the mnemonic phrase.
       - ``--use_password`` (bool): Enables password protection for the generated key.
       - ``--overwrite_coldkey`` (bool): Overwrites the existing coldkey with the new one.

   Example usage::

       btcli wallet new_coldkey --n_words 15

   .. note::

      This command is crucial for users who need to create a new coldkey for enhanced security or as part of setting up a new wallet.
      It's a foundational step in establishing a secure presence on the Bittensor network.


   .. py:method:: run()

      Creates a new coldkey under this wallet.



   .. py:method:: check_config(config)
      :staticmethod:



   .. py:method:: add_args(parser)
      :staticmethod:



.. py:class:: WalletCreateCommand

   Executes the ``create`` command to generate both a new coldkey and hotkey under a specified wallet on the Bittensor network.

   This command is a comprehensive utility for creating a complete wallet setup with both cold and hotkeys.

   Usage:
       The command facilitates the creation of a new coldkey and hotkey with an optional word count for the mnemonics.
       It supports password protection for the coldkey and allows overwriting of existing keys.

   Optional arguments:
       - ``--n_words`` (int): The number of words in the mnemonic phrase for both keys.
       - ``--use_password`` (bool): Enables password protection for the coldkey.
       - ``--overwrite_coldkey`` (bool): Overwrites the existing coldkey with the new one.
       - ``--overwrite_hotkey`` (bool): Overwrites the existing hotkey with the new one.

   Example usage::

       btcli wallet create --n_words 21

   .. note::

      This command is ideal for new users setting up their wallet for the first time or for those who wish to completely renew their wallet keys.
      It ensures a fresh start with new keys for secure and effective participation in the network.


   .. py:method:: run()

      Creates a new coldkey and hotkey under this wallet.



   .. py:method:: check_config(config)
      :staticmethod:



   .. py:method:: add_args(parser)
      :staticmethod:



.. py:function:: _get_coldkey_wallets_for_path(path)

   Get all coldkey wallet names from path.


.. py:class:: UpdateWalletCommand

   Executes the ``update`` command to check and potentially update the security of the wallets in the Bittensor network.

   This command is used to enhance wallet security using modern encryption standards.

   Usage:
       The command checks if any of the wallets need an update in their security protocols.
       It supports updating all legacy wallets or a specific one based on the user's choice.

   Optional arguments:
       - ``--all`` (bool): When set, updates all legacy wallets.

   Example usage::

       btcli wallet update --all

   .. note::

      This command is important for maintaining the highest security standards for users' wallets.
      It is recommended to run this command periodically to ensure wallets are up-to-date with the latest security practices.


   .. py:method:: run(cli)
      :staticmethod:


      Check if any of the wallets needs an update.



   .. py:method:: add_args(parser)
      :staticmethod:



   .. py:method:: check_config(config)
      :staticmethod:



.. py:function:: _get_coldkey_ss58_addresses_for_path(path)

   Get all coldkey ss58 addresses from path.


.. py:class:: WalletBalanceCommand

   Executes the ``balance`` command to check the balance of the wallet on the Bittensor network.

   This command provides a detailed view of the wallet's coldkey balances, including free and staked balances.

   Usage:
       The command lists the balances of all wallets in the user's configuration directory, showing the wallet name, coldkey address, and the respective free and staked balances.

   Optional arguments:
       None. The command uses the wallet and subtensor configurations to fetch balance data.

   Example usages:

       - To display the balance of a single wallet, use the command with the `--wallet.name` argument to specify the wallet name:

       ```
       btcli w balance --wallet.name WALLET
       ```

       - Alternatively, you can invoke the command without specifying a wallet name, which will prompt you to enter the wallets path:

       ```
       btcli w balance
       ```

       - To display the balances of all wallets, use the `--all` argument:

       ```
       btcli w balance --all
       ```

   .. note::

      When using `btcli`, `w` is used interchangeably with `wallet`. You may use either based on your preference for brevity or clarity.
      This command is essential for users to monitor their financial status on the Bittensor network.
      It helps in keeping track of assets and ensuring the wallet's financial health.


   .. py:method:: run(cli)
      :staticmethod:


      Check the balance of the wallet.



   .. py:method:: _run(cli, subtensor)
      :staticmethod:



   .. py:method:: add_args(parser)
      :staticmethod:



   .. py:method:: check_config(config)
      :staticmethod:



.. py:data:: API_URL
   :value: 'https://api.subquery.network/sq/TaoStats/bittensor-indexer'


.. py:data:: MAX_TXN
   :value: 1000


.. py:data:: GRAPHQL_QUERY
   :value: Multiline-String

   .. raw:: html

      <details><summary>Show Value</summary>

   .. code-block:: python

      """
      query ($first: Int!, $after: Cursor, $filter: TransferFilter, $order: [TransfersOrderBy!]!) {
          transfers(first: $first, after: $after, filter: $filter, orderBy: $order) {
              nodes {
                  id
                  from
                  to
                  amount
                  extrinsicId
                  blockNumber
              }
              pageInfo {
                  endCursor
                  hasNextPage
                  hasPreviousPage
              }
              totalCount
          }
      }
      """

   .. raw:: html

      </details>



.. py:class:: GetWalletHistoryCommand

   Executes the ``history`` command to fetch the latest transfers of the provided wallet on the Bittensor network.

   This command provides a detailed view of the transfers carried out on the wallet.

   Usage:
       The command lists the latest transfers of the provided wallet, showing the From, To, Amount, Extrinsic Id and Block Number.

   Optional arguments:
       None. The command uses the wallet and subtensor configurations to fetch latest transfer data associated with a wallet.

   Example usage::

       btcli wallet history

   .. note::

      This command is essential for users to monitor their financial status on the Bittensor network.
      It helps in fetching info on all the transfers so that user can easily tally and cross check the transactions.


   .. py:method:: run(cli)
      :staticmethod:


      Check the transfer history of the provided wallet.



   .. py:method:: add_args(parser)
      :staticmethod:



   .. py:method:: check_config(config)
      :staticmethod:



.. py:function:: get_wallet_transfers(wallet_address)

   Get all transfers associated with the provided wallet address.


.. py:function:: create_transfer_history_table(transfers)

   Get output transfer table


