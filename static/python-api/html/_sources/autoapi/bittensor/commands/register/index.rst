:py:mod:`bittensor.commands.register`
=====================================

.. py:module:: bittensor.commands.register


Module Contents
---------------

Classes
~~~~~~~

.. autoapisummary::

   bittensor.commands.register.PowRegisterCommand
   bittensor.commands.register.RegisterCommand
   bittensor.commands.register.RunFaucetCommand
   bittensor.commands.register.SwapHotkeyCommand




Attributes
~~~~~~~~~~

.. autoapisummary::

   bittensor.commands.register.console


.. py:class:: PowRegisterCommand


   Executes the ``pow_register`` command to register a neuron on the Bittensor network using Proof of Work (PoW).

   This method is an alternative registration process that leverages computational work for securing a neuron's place on the network.

   Usage:
       The command starts by verifying the existence of the specified subnet. If the subnet does not exist, it terminates with an error message.
       On successful verification, the PoW registration process is initiated, which requires solving computational puzzles.

   Optional arguments:
       - ``--netuid`` (int): The netuid for the subnet on which to serve the neuron. Mandatory for specifying the target subnet.
       - ``--pow_register.num_processes`` (int): The number of processors to use for PoW registration. Defaults to the system's default setting.
       - ``--pow_register.update_interval`` (int): The number of nonces to process before checking for the next block during registration. Affects the frequency of update checks.
       - ``--pow_register.no_output_in_place`` (bool): When set, disables the output of registration statistics in place. Useful for cleaner logs.
       - ``--pow_register.verbose`` (bool): Enables verbose output of registration statistics for detailed information.
       - ``--pow_register.cuda.use_cuda`` (bool): Enables the use of CUDA for GPU-accelerated PoW calculations. Requires a CUDA-compatible GPU.
       - ``--pow_register.cuda.no_cuda`` (bool): Disables the use of CUDA, defaulting to CPU-based calculations.
       - ``--pow_register.cuda.dev_id`` (int): Specifies the CUDA device ID, useful for systems with multiple CUDA-compatible GPUs.
       - ``--pow_register.cuda.tpb`` (int): Sets the number of Threads Per Block for CUDA operations, affecting the GPU calculation dynamics.

   The command also supports additional wallet and subtensor arguments, enabling further customization of the registration process.

   Example usage::

       btcli pow_register --netuid 1 --pow_register.num_processes 4 --cuda.use_cuda

   .. note::

      This command is suited for users with adequate computational resources to participate in PoW registration. It requires a sound understanding
      of the network's operations and PoW mechanics. Users should ensure their systems meet the necessary hardware and software requirements,
      particularly when opting for CUDA-based GPU acceleration.

   This command may be disabled according on the subnet owner's directive. For example, on netuid 1 this is permanently disabled.

   .. py:method:: _run(cli: bittensor.cli, subtensor: bittensor.subtensor)
      :staticmethod:

      Register neuron.


   .. py:method:: add_args(parser: argparse.ArgumentParser)
      :staticmethod:


   .. py:method:: check_config(config: bittensor.config)
      :staticmethod:


   .. py:method:: run(cli: bittensor.cli)
      :staticmethod:

      Register neuron.



.. py:class:: RegisterCommand


   Executes the ``register`` command to register a neuron on the Bittensor network by recycling some TAO (the network's native token).

   This command is used to add a new neuron to a specified subnet within the network, contributing to the decentralization and robustness of Bittensor.

   Usage:
       Before registering, the command checks if the specified subnet exists and whether the user's balance is sufficient to cover the registration cost.

       The registration cost is determined by the current recycle amount for the specified subnet. If the balance is insufficient or the subnet does not exist, the command will exit with an appropriate error message.

       If the preconditions are met, and the user confirms the transaction (if ``no_prompt`` is not set), the command proceeds to register the neuron by recycling the required amount of TAO.

   The command structure includes:

   - Verification of subnet existence.
   - Checking the user's balance against the current recycle amount for the subnet.
   - User confirmation prompt for proceeding with registration.
   - Execution of the registration process.

   Columns Displayed in the confirmation prompt:

   - Balance: The current balance of the user's wallet in TAO.
   - Cost to Register: The required amount of TAO needed to register on the specified subnet.

   Example usage::

       btcli subnets register --netuid 1

   .. note:: This command is critical for users who wish to contribute a new neuron to the network. It requires careful consideration of the subnet selection and an understanding of the registration costs. Users should ensure their wallet is sufficiently funded before attempting to register a neuron.

   .. py:method:: _run(cli: bittensor.cli, subtensor: bittensor.subtensor)
      :staticmethod:

      Register neuron by recycling some TAO.


   .. py:method:: add_args(parser: argparse.ArgumentParser)
      :staticmethod:


   .. py:method:: check_config(config: bittensor.config)
      :staticmethod:


   .. py:method:: run(cli: bittensor.cli)
      :staticmethod:

      Register neuron by recycling some TAO.



.. py:class:: RunFaucetCommand


   Executes the ``faucet`` command to obtain test TAO tokens by performing Proof of Work (PoW).

   .. important:: **THIS COMMAND IS CURRENTLY DISABLED.**

   This command is particularly useful for users who need test tokens for operations on the Bittensor testnet.

   Usage:
       The command uses the PoW mechanism to validate the user's effort and rewards them with test TAO tokens. It is typically used in testnet environments where real value transactions are not necessary.

   Optional arguments:
       - ``--faucet.num_processes`` (int): Specifies the number of processors to use for the PoW operation. A higher number of processors may increase the chances of successful computation.
       - ``--faucet.update_interval`` (int): Sets the frequency of nonce processing before checking for the next block, which impacts the PoW operation's responsiveness.
       - ``--faucet.no_output_in_place`` (bool): When set, it disables in-place output of registration statistics for cleaner log visibility.
       - ``--faucet.verbose`` (bool): Enables verbose output for detailed statistical information during the PoW process.
       - ``--faucet.cuda.use_cuda`` (bool): Activates the use of CUDA for GPU acceleration in the PoW process, suitable for CUDA-compatible GPUs.
       - ``--faucet.cuda.no_cuda`` (bool): Disables the use of CUDA, opting for CPU-based calculations.
       - ``--faucet.cuda.dev_id`` (int[]): Allows selection of specific CUDA device IDs for the operation, useful in multi-GPU setups.
       - ``--faucet.cuda.tpb`` (int): Determines the number of Threads Per Block for CUDA operations, affecting GPU calculation efficiency.

   These options provide flexibility in configuring the PoW process according to the user's hardware capabilities and preferences.

   Example usage::

       btcli wallet faucet --faucet.num_processes 4 --faucet.cuda.use_cuda

   .. note::

      This command is meant for use in testnet environments where users can experiment with the network without using real TAO tokens.
      It's important for users to have the necessary hardware setup, especially when opting for CUDA-based GPU calculations.

   **THIS COMMAND IS CURRENTLY DISABLED.**

   .. py:method:: _run(cli: bittensor.cli, subtensor: bittensor.subtensor)
      :staticmethod:

      Register neuron.


   .. py:method:: add_args(parser: argparse.ArgumentParser)
      :staticmethod:


   .. py:method:: check_config(config: bittensor.config)
      :staticmethod:


   .. py:method:: run(cli: bittensor.cli)
      :staticmethod:

      Register neuron.



.. py:class:: SwapHotkeyCommand


   .. py:method:: _run(cli: bittensor.cli, subtensor: bittensor.subtensor)
      :staticmethod:

      Swap your hotkey for all registered axons on the network.


   .. py:method:: add_args(parser: argparse.ArgumentParser)
      :staticmethod:


   .. py:method:: check_config(config: bittensor.config)
      :staticmethod:


   .. py:method:: run(cli: bittensor.cli)
      :staticmethod:

      Swap your hotkey for all registered axons on the network.



.. py:data:: console

   

