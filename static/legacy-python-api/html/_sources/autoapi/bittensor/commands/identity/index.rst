bittensor.commands.identity
===========================

.. py:module:: bittensor.commands.identity


Classes
-------

.. autoapisummary::

   bittensor.commands.identity.SetIdentityCommand
   bittensor.commands.identity.GetIdentityCommand


Module Contents
---------------

.. py:class:: SetIdentityCommand

   Executes the :func:`set_identity` command within the Bittensor network, which allows for the creation or update of a delegate's on-chain identity.

   This identity includes various
   attributes such as display name, legal name, web URL, PGP fingerprint, and contact
   information, among others.

   Optional Arguments:
       - ``display``: The display name for the identity.
       - ``legal``: The legal name for the identity.
       - ``web``: The web URL for the identity.
       - ``riot``: The riot handle for the identity.
       - ``email``: The email address for the identity.
       - ``pgp_fingerprint``: The PGP fingerprint for the identity.
       - ``image``: The image URL for the identity.
       - ``info``: The info for the identity.
       - ``twitter``: The X (twitter) URL for the identity.

   The command prompts the user for the different identity attributes and validates the
   input size for each attribute. It provides an option to update an existing validator
   hotkey identity. If the user consents to the transaction cost, the identity is updated
   on the blockchain.

   Each field has a maximum size of 64 bytes. The PGP fingerprint field is an exception
   and has a maximum size of 20 bytes. The user is prompted to enter the PGP fingerprint
   as a hex string, which is then converted to bytes. The user is also prompted to enter
   the coldkey or hotkey ``ss58`` address for the identity to be updated. If the user does
   not have a hotkey, the coldkey address is used by default.

   If setting a validator identity, the hotkey will be used by default. If the user is
   setting an identity for a subnet, the coldkey will be used by default.

   Usage:
       The user should call this command from the command line and follow the interactive
       prompts to enter or update the identity information. The command will display the
       updated identity details in a table format upon successful execution.

   Example usage::

       btcli wallet set_identity

   .. note::

      This command should only be used if the user is willing to incur the 1 TAO transaction
      fee associated with setting an identity on the blockchain. It is a high-level command
      that makes changes to the blockchain state and should not be used programmatically as
      part of other scripts or applications.


   .. py:method:: run()

      Create a new or update existing identity on-chain.



   .. py:method:: _run(subtensor)

      Create a new or update existing identity on-chain.



   .. py:method:: check_config(config)
      :staticmethod:



   .. py:method:: add_args(parser)
      :staticmethod:



.. py:class:: GetIdentityCommand

   Executes the :func:`get_identity` command, which retrieves and displays the identity details of a user's coldkey or hotkey associated with the Bittensor network. This function
   queries the subtensor chain for information such as the stake, rank, and trust associated
   with the provided key.

   Optional Arguments:
       - ``key``: The ``ss58`` address of the coldkey or hotkey to query.

   The command performs the following actions:

   - Connects to the subtensor network and retrieves the identity information.
   - Displays the information in a structured table format.

   The displayed table includes:

   - **Address**: The ``ss58`` address of the queried key.
   - **Item**: Various attributes of the identity such as stake, rank, and trust.
   - **Value**: The corresponding values of the attributes.

   Usage:
       The user must provide an ``ss58`` address as input to the command. If the address is not
       provided in the configuration, the user is prompted to enter one.

   Example usage::

       btcli wallet get_identity --key <s58_address>

   .. note::

      This function is designed for CLI use and should be executed in a terminal. It is
      primarily used for informational purposes and has no side effects on the network state.


   .. py:method:: run()

      Queries the subtensor chain for user identity.



   .. py:method:: _run(subtensor)


   .. py:method:: check_config(config)
      :staticmethod:



   .. py:method:: add_args(parser)
      :staticmethod:



