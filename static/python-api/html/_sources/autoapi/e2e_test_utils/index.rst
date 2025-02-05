e2e_test_utils
==============

.. py:module:: e2e_test_utils


Attributes
----------

.. autoapisummary::

   e2e_test_utils.template_path
   e2e_test_utils.templates_repo


Functions
---------

.. autoapisummary::

   e2e_test_utils.clone_or_update_templates
   e2e_test_utils.install_templates
   e2e_test_utils.setup_wallet
   e2e_test_utils.uninstall_templates


Module Contents
---------------

.. py:function:: clone_or_update_templates(specific_commit=None)

   Clones or updates the Bittensor subnet template repository.

   This function clones the Bittensor subnet template repository if it does not
   already exist in the specified installation directory. If the repository already
   exists, it updates it by pulling the latest changes. Optionally, it can check out
   a specific commit if the `specific_commit` variable is set.


.. py:function:: install_templates(install_dir)

.. py:function:: setup_wallet(uri)

   Sets up a wallet using the provided URI.

   This function creates a keypair from the given URI and initializes a wallet
   at a temporary path. It sets the coldkey, coldkeypub, and hotkey for the wallet
   using the generated keypair.

   Side Effects:
       - Creates a wallet in a temporary directory.
       - Sets keys in the wallet without encryption and with overwriting enabled.


.. py:data:: template_path

.. py:data:: templates_repo
   :value: 'templates repository'


.. py:function:: uninstall_templates(install_dir)

