bittensor.subtensor
===================

.. py:module:: bittensor.subtensor

.. autoapi-nested-parse::

   The ``bittensor.subtensor`` module in Bittensor serves as a crucial interface for interacting with the Bittensor
   blockchain, facilitating a range of operations essential for the decentralized machine learning network.



Attributes
----------

.. autoapisummary::

   bittensor.subtensor.KEY_NONCE
   bittensor.subtensor.subtensor


Classes
-------

.. autoapisummary::

   bittensor.subtensor.ParamWithTypes
   bittensor.subtensor.Subtensor


Module Contents
---------------

.. py:data:: KEY_NONCE
   :type:  Dict[str, int]

.. py:class:: ParamWithTypes

   Bases: :py:obj:`TypedDict`


   dict() -> new empty dictionary
   dict(mapping) -> new dictionary initialized from a mapping object's
       (key, value) pairs
   dict(iterable) -> new dictionary initialized as if via:
       d = {}
       for k, v in iterable:
           d[k] = v
   dict(**kwargs) -> new dictionary initialized with the name=value pairs
       in the keyword argument list.  For example:  dict(one=1, two=2)

   Initialize self.  See help(type(self)) for accurate signature.


   .. py:attribute:: name
      :type:  str


   .. py:attribute:: type
      :type:  str


.. py:class:: Subtensor(network = None, config = None, _mock = False, log_verbose = True, connection_timeout = 600)

   The Subtensor class in Bittensor serves as a crucial interface for interacting with the Bittensor blockchain,
   facilitating a range of operations essential for the decentralized machine learning network.

   This class enables neurons (network participants) to engage in activities such as registering on the network,
   managing staked weights, setting inter-neuronal weights, and participating in consensus mechanisms.

   The Bittensor network operates on a digital ledger where each neuron holds stakes (S) and learns a set
   of inter-peer weights (W). These weights, set by the neurons themselves, play a critical role in determining
   the ranking and incentive mechanisms within the network. Higher-ranked neurons, as determined by their
   contributions and trust within the network, receive more incentives.

   The Subtensor class connects to various Bittensor networks like the main ``finney`` network or local test
   networks, providing a gateway to the blockchain layer of Bittensor. It leverages a staked weighted trust
   system and consensus to ensure fair and distributed incentive mechanisms, where incentives (I) are
   primarily allocated to neurons that are trusted by the majority of the network.

   Additionally, Bittensor introduces a speculation-based reward mechanism in the form of bonds (B), allowing
   neurons to accumulate bonds in other neurons, speculating on their future value. This mechanism aligns
   with market-based speculation, incentivizing neurons to make judicious decisions in their inter-neuronal
   investments.

   Example Usage::

       # Connect to the main Bittensor network (Finney).
       finney_subtensor = subtensor(network='finney')

       # Close websocket connection with the Bittensor network.
       finney_subtensor.close()

       # (Re)creates the websocket connection with the Bittensor network.
       finney_subtensor.connect_websocket()

       # Register a new neuron on the network.
       wallet = bittensor.wallet(...)  # Assuming a wallet instance is created.
       success = finney_subtensor.register(wallet=wallet, netuid=netuid)

       # Set inter-neuronal weights for collaborative learning.
       success = finney_subtensor.set_weights(wallet=wallet, netuid=netuid, uids=[...], weights=[...])

       # Speculate by accumulating bonds in other promising neurons.
       success = finney_subtensor.delegate(wallet=wallet, delegate_ss58=other_neuron_ss58, amount=bond_amount)

       # Get the metagraph for a specific subnet using given subtensor connection
       metagraph = subtensor.metagraph(netuid=netuid)

   By facilitating these operations, the Subtensor class is instrumental in maintaining the decentralized
   intelligence and dynamic learning environment of the Bittensor network, as envisioned in its foundational
   principles and mechanisms described in the `NeurIPS paper
   <https://bittensor.com/pdfs/academia/NeurIPS_DAO_Workshop_2022_3_3.pdf>`_. paper.

   Initializes a Subtensor interface for interacting with the Bittensor blockchain.

   .. note:: Currently subtensor defaults to the ``finney`` network. This will change in a future release.

   We strongly encourage users to run their own local subtensor node whenever possible. This increases
   decentralization and resilience of the network. In a future release, local subtensor will become the
   default and the fallback to ``finney`` removed. Please plan ahead for this change. We will provide detailed
   instructions on how to run a local subtensor node in the documentation in a subsequent release.

   :param network: The network name to connect to (e.g., ``finney``, ``local``). This can also be the
                   chain endpoint (e.g., ``wss://entrypoint-finney.opentensor.ai:443``) and will be correctly parsed into
                   the network and chain endpoint. If not specified, defaults to the main Bittensor network.
   :type network: str, optional
   :param config: Configuration object for the subtensor. If not provided, a default
                  configuration is used.
   :type config: bittensor.config, optional
   :param _mock: If set to ``True``, uses a mocked connection for testing purposes.
   :type _mock: bool, optional

   This initialization sets up the connection to the specified Bittensor network, allowing for various
   blockchain operations such as neuron registration, stake management, and setting weights.



   .. py:attribute:: config


   .. py:attribute:: log_verbose


   .. py:attribute:: _connection_timeout


   .. py:attribute:: _subtensor_errors
      :type:  Dict[str, Dict[str, str]]


   .. py:method:: __str__()


   .. py:method:: __repr__()


   .. py:method:: _get_substrate()

      Establishes a connection to the Substrate node using configured parameters.



   .. py:method:: help()
      :classmethod:


      Print help to stdout.



   .. py:method:: add_args(parser, prefix = None)
      :classmethod:


      Adds command-line arguments to the provided ArgumentParser for configuring the Subtensor settings.

      :param parser: The ArgumentParser object to which the Subtensor arguments will be added.
      :type parser: argparse.ArgumentParser
      :param prefix: An optional prefix for the argument names. If provided, the prefix is prepended to
                     each argument name.
      :type prefix: Optional[str]

      Arguments added:
          --subtensor.network: The Subtensor network flag. Possible values are 'finney', 'test', 'archive', and
              'local'. Overrides the chain endpoint if set.
          --subtensor.chain_endpoint: The Subtensor chain endpoint flag. If set, it overrides the network flag.
          --subtensor._mock: If true, uses a mocked connection to the chain.

      .. admonition:: Example

         parser = argparse.ArgumentParser()
         Subtensor.add_args(parser)



   .. py:method:: determine_chain_endpoint_and_network(network)
      :staticmethod:


      Determines the chain endpoint and network from the passed network or chain_endpoint.

      :param network: The network flag. The choices are: ``-- finney`` (main network), ``-- archive``
                      (archive network +300 blocks), ``-- local`` (local running network), ``-- test`` (test network).
      :type network: str

      :returns: The network flag.
                chain_endpoint (str): The chain endpoint flag. If set, overrides the ``network`` argument.
      :rtype: network (str)



   .. py:method:: setup_config(network, config)
      :staticmethod:


      Sets up and returns the configuration for the Subtensor network and endpoint.

      This method determines the appropriate network and chain endpoint based on the provided network string or
      configuration object. It evaluates the network and endpoint in the following order of precedence:
      1. Provided network string.
      2. Configured chain endpoint in the `config` object.
      3. Configured network in the `config` object.
      4. Default chain endpoint.
      5. Default network.

      :param network: The name of the Subtensor network. If None, the network and endpoint will be determined from
                      the `config` object.
      :type network: str
      :param config: The configuration object containing the network and chain endpoint settings.
      :type config: bittensor.config

      :returns: A tuple containing the formatted WebSocket endpoint URL and the evaluated network name.
      :rtype: tuple



   .. py:method:: close()

      Cleans up resources for this subtensor instance like active websocket connection and active extensions.



   .. py:method:: nominate(wallet, wait_for_finalization = False, wait_for_inclusion = True)

      Becomes a delegate for the hotkey associated with the given wallet. This method is used to nominate
      a neuron (identified by the hotkey in the wallet) as a delegate on the Bittensor network, allowing it
      to participate in consensus and validation processes.

      :param wallet: The wallet containing the hotkey to be nominated.
      :type wallet: bittensor.wallet
      :param wait_for_finalization: If ``True``, waits until the transaction is finalized on the
                                    blockchain.
      :type wait_for_finalization: bool, optional
      :param wait_for_inclusion: If ``True``, waits until the transaction is included in a block.
      :type wait_for_inclusion: bool, optional

      :returns: ``True`` if the nomination process is successful, ``False`` otherwise.
      :rtype: bool

      This function is a key part of the decentralized governance mechanism of Bittensor, allowing for the
      dynamic selection and participation of validators in the network's consensus process.



   .. py:method:: delegate(wallet, delegate_ss58 = None, amount = None, wait_for_inclusion = True, wait_for_finalization = False, prompt = False)

      Becomes a delegate for the hotkey associated with the given wallet. This method is used to nominate
      a neuron (identified by the hotkey in the wallet) as a delegate on the Bittensor network, allowing it
      to participate in consensus and validation processes.

      :param wallet: The wallet containing the hotkey to be nominated.
      :type wallet: bittensor.wallet
      :param delegate_ss58: The ``SS58`` address of the delegate neuron.
      :type delegate_ss58: Optional[str]
      :param amount: The amount of TAO to undelegate.
      :type amount: Union[Balance, float]
      :param wait_for_finalization: If ``True``, waits until the transaction is finalized on the
                                    blockchain.
      :type wait_for_finalization: bool, optional
      :param wait_for_inclusion: If ``True``, waits until the transaction is included in a block.
      :type wait_for_inclusion: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional

      :returns: ``True`` if the nomination process is successful, False otherwise.
      :rtype: bool

      This function is a key part of the decentralized governance mechanism of Bittensor, allowing for the
      dynamic selection and participation of validators in the network's consensus process.



   .. py:method:: undelegate(wallet, delegate_ss58 = None, amount = None, wait_for_inclusion = True, wait_for_finalization = False, prompt = False)

      Removes a specified amount of stake from a delegate neuron using the provided wallet. This action
      reduces the staked amount on another neuron, effectively withdrawing support or speculation.

      :param wallet: The wallet used for the undelegation process.
      :type wallet: bittensor.wallet
      :param delegate_ss58: The ``SS58`` address of the delegate neuron.
      :type delegate_ss58: Optional[str]
      :param amount: The amount of TAO to undelegate.
      :type amount: Union[Balance, float]
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional

      :returns: ``True`` if the undelegation is successful, False otherwise.
      :rtype: bool

      This function reflects the dynamic and speculative nature of the Bittensor network, allowing neurons
      to adjust their stakes and investments based on changing perceptions and performances within the network.



   .. py:method:: set_take(wallet, delegate_ss58 = None, take = 0.0, wait_for_inclusion = True, wait_for_finalization = False)

      Set delegate hotkey take
      :param wallet: The wallet containing the hotkey to be nominated.
      :type wallet: bittensor.wallet
      :param delegate_ss58: Hotkey
      :type delegate_ss58: str, optional
      :param take: Delegate take on subnet ID
      :type take: float
      :param wait_for_finalization: If ``True``, waits until the transaction is finalized on the
                                    blockchain.
      :type wait_for_finalization: bool, optional
      :param wait_for_inclusion: If ``True``, waits until the transaction is included in a block.
      :type wait_for_inclusion: bool, optional

      :returns: ``True`` if the process is successful, False otherwise.
      :rtype: bool

      This function is a key part of the decentralized governance mechanism of Bittensor, allowing for the
      dynamic selection and participation of validators in the network's consensus process.



   .. py:method:: send_extrinsic(wallet, module, function, params, period = 5, wait_for_inclusion = False, wait_for_finalization = False, max_retries = 3, wait_time = 3, max_wait = 20)

      Sends an extrinsic to the Bittensor blockchain using the provided wallet and parameters. This method
      constructs and submits the extrinsic, handling retries and blockchain communication.

      :param wallet: The wallet associated with the extrinsic.
      :type wallet: bittensor.wallet
      :param module: The module name for the extrinsic.
      :type module: str
      :param function: The function name for the extrinsic.
      :type function: str
      :param params: The parameters for the extrinsic.
      :type params: dict
      :param period: The number of blocks for the extrinsic to live in the mempool. Defaults to 5.
      :type period: int, optional
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional
      :param max_retries: The maximum number of retries for the extrinsic. Defaults to 3.
      :type max_retries: int, optional
      :param wait_time: The wait time between retries. Defaults to 3.
      :type wait_time: int, optional
      :param max_wait: The maximum wait time for the extrinsic. Defaults to 20.
      :type max_wait: int, optional

      :returns: The receipt of the extrinsic if successful, None otherwise.
      :rtype: Optional[ExtrinsicReceipt]



   .. py:method:: set_weights(wallet, netuid, uids, weights, version_key = bittensor.__version_as_int__, wait_for_inclusion = False, wait_for_finalization = False, prompt = False, max_retries = 5)

      Sets the inter-neuronal weights for the specified neuron. This process involves specifying the
      influence or trust a neuron places on other neurons in the network, which is a fundamental aspect
      of Bittensor's decentralized learning architecture.

      :param wallet: The wallet associated with the neuron setting the weights.
      :type wallet: bittensor.wallet
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param uids: The list of neuron UIDs that the weights are being
                   set for.
      :type uids: Union[NDArray[np.int64], torch.LongTensor, list]
      :param weights: The corresponding weights to be set for each
                      UID.
      :type weights: Union[NDArray[np.float32], torch.FloatTensor, list]
      :param version_key: Version key for compatibility with the network.
      :type version_key: int, optional
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional
      :param max_retries: The number of maximum attempts to set weights. (Default: 5)
      :type max_retries: int, optional

      :returns: ``True`` if the setting of weights is successful, False otherwise. And `msg`, a string
                value describing the success or potential error.
      :rtype: Tuple[bool, str]

      This function is crucial in shaping the network's collective intelligence, where each neuron's
      learning and contribution are influenced by the weights it sets towards others【81†source】.



   .. py:method:: _do_set_weights(wallet, uids, vals, netuid, version_key = bittensor.__version_as_int__, wait_for_inclusion = False, wait_for_finalization = False)

      Internal method to send a transaction to the Bittensor blockchain, setting weights
      for specified neurons. This method constructs and submits the transaction, handling
      retries and blockchain communication.

      :param wallet: The wallet associated with the neuron setting the weights.
      :type wallet: bittensor.wallet
      :param uids: List of neuron UIDs for which weights are being set.
      :type uids: List[int]
      :param vals: List of weight values corresponding to each UID.
      :type vals: List[int]
      :param netuid: Unique identifier for the network.
      :type netuid: int
      :param version_key: Version key for compatibility with the network.
      :type version_key: int, optional
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional

      :returns: A tuple containing a success flag and an optional error message.
      :rtype: Tuple[bool, Optional[str]]

      This method is vital for the dynamic weighting mechanism in Bittensor, where neurons adjust their
      trust in other neurons based on observed performance and contributions.



   .. py:method:: commit_weights(wallet, netuid, salt, uids, weights, version_key = bittensor.__version_as_int__, wait_for_inclusion = False, wait_for_finalization = False, prompt = False, max_retries = 5)

      Commits a hash of the neuron's weights to the Bittensor blockchain using the provided wallet.
      This action serves as a commitment or snapshot of the neuron's current weight distribution.

      :param wallet: The wallet associated with the neuron committing the weights.
      :type wallet: bittensor.wallet
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param salt: list of randomly generated integers as salt to generated weighted hash.
      :type salt: List[int]
      :param uids: NumPy array of neuron UIDs for which weights are being committed.
      :type uids: np.ndarray
      :param weights: NumPy array of weight values corresponding to each UID.
      :type weights: np.ndarray
      :param version_key: Version key for compatibility with the network.
      :type version_key: int, optional
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional
      :param max_retries: The number of maximum attempts to commit weights. (Default: 5)
      :type max_retries: int, optional

      :returns: ``True`` if the weight commitment is successful, False otherwise. And `msg`, a string
                value describing the success or potential error.
      :rtype: Tuple[bool, str]

      This function allows neurons to create a tamper-proof record of their weight distribution at a specific point in time,
      enhancing transparency and accountability within the Bittensor network.



   .. py:method:: _do_commit_weights(wallet, netuid, commit_hash, wait_for_inclusion = False, wait_for_finalization = False)

      Internal method to send a transaction to the Bittensor blockchain, committing the hash of a neuron's weights.
      This method constructs and submits the transaction, handling retries and blockchain communication.

      :param wallet: The wallet associated with the neuron committing the weights.
      :type wallet: bittensor.wallet
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param commit_hash: The hash of the neuron's weights to be committed.
      :type commit_hash: str
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional

      :returns: A tuple containing a success flag and an optional error message.
      :rtype: Tuple[bool, Optional[str]]

      This method ensures that the weight commitment is securely recorded on the Bittensor blockchain, providing a
      verifiable record of the neuron's weight distribution at a specific point in time.



   .. py:method:: reveal_weights(wallet, netuid, uids, weights, salt, version_key = bittensor.__version_as_int__, wait_for_inclusion = False, wait_for_finalization = False, prompt = False, max_retries = 5)

      Reveals the weights for a specific subnet on the Bittensor blockchain using the provided wallet.
      This action serves as a revelation of the neuron's previously committed weight distribution.

      :param wallet: The wallet associated with the neuron revealing the weights.
      :type wallet: bittensor.wallet
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param uids: NumPy array of neuron UIDs for which weights are being revealed.
      :type uids: np.ndarray
      :param weights: NumPy array of weight values corresponding to each UID.
      :type weights: np.ndarray
      :param salt: NumPy array of salt values corresponding to the hash function.
      :type salt: np.ndarray
      :param version_key: Version key for compatibility with the network.
      :type version_key: int, optional
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional
      :param max_retries: The number of maximum attempts to reveal weights. (Default: 5)
      :type max_retries: int, optional

      :returns: ``True`` if the weight revelation is successful, False otherwise. And `msg`, a string
                value describing the success or potential error.
      :rtype: Tuple[bool, str]

      This function allows neurons to reveal their previously committed weight distribution, ensuring transparency
      and accountability within the Bittensor network.



   .. py:method:: _do_reveal_weights(wallet, netuid, uids, values, salt, version_key, wait_for_inclusion = False, wait_for_finalization = False)

      Internal method to send a transaction to the Bittensor blockchain, revealing the weights for a specific subnet.
      This method constructs and submits the transaction, handling retries and blockchain communication.

      :param wallet: The wallet associated with the neuron revealing the weights.
      :type wallet: bittensor.wallet
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param uids: List of neuron UIDs for which weights are being revealed.
      :type uids: List[int]
      :param values: List of weight values corresponding to each UID.
      :type values: List[int]
      :param salt: List of salt values corresponding to the hash function.
      :type salt: List[int]
      :param version_key: Version key for compatibility with the network.
      :type version_key: int
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional

      :returns: A tuple containing a success flag and an optional error message.
      :rtype: Tuple[bool, Optional[str]]

      This method ensures that the weight revelation is securely recorded on the Bittensor blockchain, providing transparency
      and accountability for the neuron's weight distribution.



   .. py:method:: register(wallet, netuid, wait_for_inclusion = False, wait_for_finalization = True, prompt = False, max_allowed_attempts = 3, output_in_place = True, cuda = False, dev_id = 0, tpb = 256, num_processes = None, update_interval = None, log_verbose = False)

      Registers a neuron on the Bittensor network using the provided wallet. Registration
      is a critical step for a neuron to become an active participant in the network, enabling
      it to stake, set weights, and receive incentives.

      :param wallet: The wallet associated with the neuron to be registered.
      :type wallet: bittensor.wallet
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
                                 Defaults to `False`.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
                                    Defaults to `True`.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional
      :param max_allowed_attempts: Maximum number of attempts to register the wallet.
      :type max_allowed_attempts: int
      :param output_in_place: If true, prints the progress of the proof of work to the console in-place. Meaning
                              the progress is printed on the same lines. Defaults to `True`.
      :type output_in_place: bool
      :param cuda: If ``true``, the wallet should be registered using CUDA device(s). Defaults to `False`.
      :type cuda: bool
      :param dev_id: The CUDA device id to use, or a list of device ids. Defaults to `0` (zero).
      :type dev_id: Union[List[int], int]
      :param tpb: The number of threads per block (CUDA). Default to `256`.
      :type tpb: int
      :param num_processes: The number of processes to use to register. Default to `None`.
      :type num_processes: Optional[int]
      :param update_interval: The number of nonces to solve between updates.  Default to `None`.
      :type update_interval: Optional[int]
      :param log_verbose: If ``true``, the registration process will log more information.  Default to `False`.
      :type log_verbose: bool

      :returns: ``True`` if the registration is successful, False otherwise.
      :rtype: bool

      This function facilitates the entry of new neurons into the network, supporting the decentralized
      growth and scalability of the Bittensor ecosystem.



   .. py:method:: swap_hotkey(wallet, new_wallet, wait_for_inclusion = False, wait_for_finalization = True, prompt = False)

      Swaps an old hotkey with a new hotkey for the specified wallet.

      This method initiates an extrinsic to change the hotkey associated with a wallet to a new hotkey. It provides
      options to wait for inclusion and finalization of the transaction, and to prompt the user for confirmation.

      :param wallet: The wallet whose hotkey is to be swapped.
      :type wallet: bittensor.wallet
      :param new_wallet: The new wallet with the hotkey to be set.
      :type new_wallet: bittensor.wallet
      :param wait_for_inclusion: Whether to wait for the transaction to be included in a block.
                                 Default is `False`.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: Whether to wait for the transaction to be finalized. Default is `True`.
      :type wait_for_finalization: bool
      :param prompt: Whether to prompt the user for confirmation before proceeding. Default is `False`.
      :type prompt: bool

      :returns: True if the hotkey swap was successful, False otherwise.
      :rtype: bool



   .. py:method:: run_faucet(wallet, wait_for_inclusion = False, wait_for_finalization = True, prompt = False, max_allowed_attempts = 3, output_in_place = True, cuda = False, dev_id = 0, tpb = 256, num_processes = None, update_interval = None, log_verbose = False)

      Facilitates a faucet transaction, allowing new neurons to receive an initial amount of TAO
      for participating in the network. This function is particularly useful for newcomers to the
      Bittensor network, enabling them to start with a small stake on testnet only.

      :param wallet: The wallet for which the faucet transaction is to be run.
      :type wallet: bittensor.wallet
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
                                 Defaults to `False`.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
                                    Defaults to `True`.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional
      :param max_allowed_attempts: Maximum number of attempts to register the wallet.
      :type max_allowed_attempts: int
      :param output_in_place: If true, prints the progress of the proof of work to the console in-place. Meaning
                              the progress is printed on the same lines. Defaults to `True`.
      :type output_in_place: bool
      :param cuda: If ``true``, the wallet should be registered using CUDA device(s). Defaults to `False`.
      :type cuda: bool
      :param dev_id: The CUDA device id to use, or a list of device ids. Defaults to `0` (zero).
      :type dev_id: Union[List[int], int]
      :param tpb: The number of threads per block (CUDA). Default to `256`.
      :type tpb: int
      :param num_processes: The number of processes to use to register. Default to `None`.
      :type num_processes: Optional[int]
      :param update_interval: The number of nonces to solve between updates.  Default to `None`.
      :type update_interval: Optional[int]
      :param log_verbose: If ``true``, the registration process will log more information.  Default to `False`.
      :type log_verbose: bool

      :returns: ``True`` if the faucet transaction is successful, False otherwise.
      :rtype: bool

      This function is part of Bittensor's onboarding process, ensuring that new neurons have
      the necessary resources to begin their journey in the decentralized AI network.

      .. note::

         This is for testnet ONLY and is disabled currently. You must build your own staging subtensor chain with the
         ``--features pow-faucet`` argument to enable this.



   .. py:method:: burned_register(wallet, netuid, wait_for_inclusion = False, wait_for_finalization = True, prompt = False)

      Registers a neuron on the Bittensor network by recycling TAO. This method of registration
      involves recycling TAO tokens, allowing them to be re-mined by performing work on the network.

      :param wallet: The wallet associated with the neuron to be registered.
      :type wallet: bittensor.wallet
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
                                 Defaults to `False`.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
                                    Defaults to `True`.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding. Defaults to `False`.
      :type prompt: bool, optional

      :returns: ``True`` if the registration is successful, False otherwise.
      :rtype: bool



   .. py:method:: _do_pow_register(netuid, wallet, pow_result, wait_for_inclusion = False, wait_for_finalization = True)

      Sends a (POW) register extrinsic to the chain.

      :param netuid: The subnet to register on.
      :type netuid: int
      :param wallet: The wallet to register.
      :type wallet: bittensor.wallet
      :param pow_result: The PoW result to register.
      :type pow_result: POWSolution
      :param wait_for_inclusion: If ``True``, waits for the extrinsic to be included in a block.
                                 Default to `False`.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: If ``True``, waits for the extrinsic to be finalized. Default to `True`.
      :type wait_for_finalization: bool

      :returns: ``True`` if the extrinsic was included in a block.
                error (Optional[str]): ``None`` on success or not waiting for inclusion/finalization, otherwise the error
                    message.
      :rtype: success (bool)



   .. py:method:: _do_burned_register(netuid, wallet, wait_for_inclusion = False, wait_for_finalization = True)

      Performs a burned register extrinsic call to the Subtensor chain.

      This method sends a registration transaction to the Subtensor blockchain using the burned register mechanism. It
      retries the call up to three times with exponential backoff in case of failures.

      :param netuid: The network unique identifier to register on.
      :type netuid: int
      :param wallet: The wallet to be registered.
      :type wallet: bittensor.wallet
      :param wait_for_inclusion: Whether to wait for the transaction to be included in a block. Default is False.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: Whether to wait for the transaction to be finalized. Default is True.
      :type wait_for_finalization: bool

      :returns: A tuple containing a boolean indicating success or failure, and an optional error message.
      :rtype: Tuple[bool, Optional[str]]



   .. py:method:: _do_swap_hotkey(wallet, new_wallet, wait_for_inclusion = False, wait_for_finalization = True)

      Performs a hotkey swap extrinsic call to the Subtensor chain.

      :param wallet: The wallet whose hotkey is to be swapped.
      :type wallet: bittensor.wallet
      :param new_wallet: The wallet with the new hotkey to be set.
      :type new_wallet: bittensor.wallet
      :param wait_for_inclusion: Whether to wait for the transaction to be included in a block. Default is
      :type wait_for_inclusion: bool
      :param `False`.:
      :param wait_for_finalization: Whether to wait for the transaction to be finalized. Default is `True`.
      :type wait_for_finalization: bool

      :returns:

                A tuple containing a boolean indicating success or failure, and an optional
                    error message.
      :rtype: Tuple[bool, Optional[str]]



   .. py:method:: transfer(wallet, dest, amount, wait_for_inclusion = True, wait_for_finalization = False, prompt = False)

      Executes a transfer of funds from the provided wallet to the specified destination address.
      This function is used to move TAO tokens within the Bittensor network, facilitating transactions
      between neurons.

      :param wallet: The wallet from which funds are being transferred.
      :type wallet: bittensor.wallet
      :param dest: The destination public key address.
      :type dest: str
      :param amount: The amount of TAO to be transferred.
      :type amount: Union[Balance, float]
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional

      :returns: ``True`` if the transfer is successful, False otherwise.
      :rtype: transfer_extrinsic (bool)

      This function is essential for the fluid movement of tokens in the network, supporting
      various economic activities such as staking, delegation, and reward distribution.



   .. py:method:: get_transfer_fee(wallet, dest, value)

      Calculates the transaction fee for transferring tokens from a wallet to a specified destination address.
      This function simulates the transfer to estimate the associated cost, taking into account the current
      network conditions and transaction complexity.

      :param wallet: The wallet from which the transfer is initiated.
      :type wallet: bittensor.wallet
      :param dest: The ``SS58`` address of the destination account.
      :type dest: str
      :param value: The amount of tokens to be transferred, specified as a Balance object,
                    or in Tao (float) or Rao (int) units.
      :type value: Union[Balance, float, int]

      :returns: The estimated transaction fee for the transfer, represented as a Balance object.
      :rtype: Balance

      Estimating the transfer fee is essential for planning and executing token transactions, ensuring that the
      wallet has sufficient funds to cover both the transfer amount and the associated costs. This function
      provides a crucial tool for managing financial operations within the Bittensor network.



   .. py:method:: _do_transfer(wallet, dest, transfer_balance, wait_for_inclusion = True, wait_for_finalization = False)

      Sends a transfer extrinsic to the chain.

      :param wallet: Wallet object.
      :type wallet: :func:`bittensor.wallet`
      :param dest: Destination public key address.
      :type dest: str
      :param transfer_balance: Amount to transfer.
      :type transfer_balance: :func:`Balance`
      :param wait_for_inclusion: If ``true``, waits for inclusion.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: If ``true``, waits for finalization.
      :type wait_for_finalization: bool

      :returns: ``True`` if transfer was successful.
                block_hash (str): Block hash of the transfer. On success and if wait_for_ finalization/inclusion is
                    ``True``.
                error (str): Error message if transfer failed.
      :rtype: success (bool)



   .. py:method:: get_existential_deposit(block = None)

      Retrieves the existential deposit amount for the Bittensor blockchain. The existential deposit
      is the minimum amount of TAO required for an account to exist on the blockchain. Accounts with
      balances below this threshold can be reaped to conserve network resources.

      :param block: Block number at which to query the deposit amount. If ``None``, the current block is
                    used.
      :type block: Optional[int]

      :returns: The existential deposit amount, or ``None`` if the query fails.
      :rtype: Optional[Balance]

      The existential deposit is a fundamental economic parameter in the Bittensor network, ensuring
      efficient use of storage and preventing the proliferation of dust accounts.



   .. py:method:: register_subnetwork(wallet, wait_for_inclusion = False, wait_for_finalization=True, prompt = False)

      Registers a new subnetwork on the Bittensor network using the provided wallet. This function
      is used for the creation and registration of subnetworks, which are specialized segments of the
      overall Bittensor network.

      :param wallet: The wallet to be used for registration.
      :type wallet: bittensor.wallet
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional

      :returns: ``True`` if the subnetwork registration is successful, False otherwise.
      :rtype: bool

      This function allows for the expansion and diversification of the Bittensor network, supporting
      its decentralized and adaptable architecture.



   .. py:method:: set_hyperparameter(wallet, netuid, parameter, value, wait_for_inclusion = False, wait_for_finalization=True, prompt = False)

      Sets a specific hyperparameter for a given subnetwork on the Bittensor blockchain. This action
      involves adjusting network-level parameters, influencing the behavior and characteristics of the
      subnetwork.

      :param wallet: The wallet used for setting the hyperparameter.
      :type wallet: bittensor.wallet
      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param parameter: The name of the hyperparameter to be set.
      :type parameter: str
      :param value: The new value for the hyperparameter.
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional

      :returns: ``True`` if the hyperparameter setting is successful, False otherwise.
      :rtype: bool

      This function plays a critical role in the dynamic governance and adaptability of the Bittensor
      network, allowing for fine-tuning of network operations and characteristics.



   .. py:method:: serve(wallet, ip, port, protocol, netuid, placeholder1 = 0, placeholder2 = 0, wait_for_inclusion = False, wait_for_finalization=True)

      Registers a neuron's serving endpoint on the Bittensor network. This function announces the
      IP address and port where the neuron is available to serve requests, facilitating peer-to-peer
      communication within the network.

      :param wallet: The wallet associated with the neuron being served.
      :type wallet: bittensor.wallet
      :param ip: The IP address of the serving neuron.
      :type ip: str
      :param port: The port number on which the neuron is serving.
      :type port: int
      :param protocol: The protocol type used by the neuron (e.g., GRPC, HTTP).
      :type protocol: int
      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param placeholder1: Placeholder parameter for future extensions. Default is ``0``.
      :type placeholder1: int, optional
      :param placeholder2: Placeholder parameter for future extensions. Default is ``0``.
      :type placeholder2: int, optional
      :param wait_for_inclusion: Waits for the transaction to be included in a block. Default is
                                 ``False``.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain. Default
                                    is ``True``.
      :type wait_for_finalization: bool, optional

      :returns: ``True`` if the serve registration is successful, False otherwise.
      :rtype: bool

      This function is essential for establishing the neuron's presence in the network, enabling
      it to participate in the decentralized machine learning processes of Bittensor.



   .. py:method:: serve_axon(netuid, axon, wait_for_inclusion = False, wait_for_finalization = True)

      Registers an Axon serving endpoint on the Bittensor network for a specific neuron. This function
      is used to set up the Axon, a key component of a neuron that handles incoming queries and data
      processing tasks.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param axon: The Axon instance to be registered for serving.
      :type axon: bittensor.Axon
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional

      :returns: ``True`` if the Axon serve registration is successful, False otherwise.
      :rtype: bool

      By registering an Axon, the neuron becomes an active part of the network's distributed
      computing infrastructure, contributing to the collective intelligence of Bittensor.



   .. py:method:: _do_serve_axon(wallet, call_params, wait_for_inclusion = False, wait_for_finalization = True)

      Internal method to submit a serve axon transaction to the Bittensor blockchain. This method
      creates and submits a transaction, enabling a neuron's Axon to serve requests on the network.

      :param wallet: The wallet associated with the neuron.
      :type wallet: bittensor.wallet
      :param call_params: Parameters required for the serve axon call.
      :type call_params: AxonServeCallParams
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional

      :returns: A tuple containing a success flag and an optional error message.
      :rtype: Tuple[bool, Optional[str]]

      This function is crucial for initializing and announcing a neuron's Axon service on the network,
      enhancing the decentralized computation capabilities of Bittensor.



   .. py:method:: serve_prometheus(wallet, port, netuid, wait_for_inclusion = False, wait_for_finalization = True)


   .. py:method:: _do_serve_prometheus(wallet, call_params, wait_for_inclusion = False, wait_for_finalization = True)

      Sends a serve prometheus extrinsic to the chain.
      :param wallet: Wallet object.
      :type wallet: :func:`bittensor.wallet`
      :param call_params: Prometheus serve call parameters.
      :type call_params: :func:`PrometheusServeCallParams`
      :param wait_for_inclusion: If ``true``, waits for inclusion.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: If ``true``, waits for finalization.
      :type wait_for_finalization: bool

      :returns: ``True`` if serve prometheus was successful.
                error (:func:`Optional[str]`): Error message if serve prometheus failed, ``None`` otherwise.
      :rtype: success (bool)



   .. py:method:: _do_associate_ips(wallet, ip_info_list, netuid, wait_for_inclusion = False, wait_for_finalization = True)

      Sends an associate IPs extrinsic to the chain.

      :param wallet: Wallet object.
      :type wallet: :func:`bittensor.wallet`
      :param ip_info_list: List of IPInfo objects.
      :type ip_info_list: :func:`List[IPInfo]`
      :param netuid: Netuid to associate IPs to.
      :type netuid: int
      :param wait_for_inclusion: If ``true``, waits for inclusion.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: If ``true``, waits for finalization.
      :type wait_for_finalization: bool

      :returns: ``True`` if associate IPs was successful.
                error (:func:`Optional[str]`): Error message if associate IPs failed, None otherwise.
      :rtype: success (bool)



   .. py:method:: add_stake(wallet, hotkey_ss58 = None, amount = None, wait_for_inclusion = True, wait_for_finalization = False, prompt = False)

      Adds the specified amount of stake to a neuron identified by the hotkey ``SS58`` address. Staking
      is a fundamental process in the Bittensor network that enables neurons to participate actively
      and earn incentives.

      :param wallet: The wallet to be used for staking.
      :type wallet: bittensor.wallet
      :param hotkey_ss58: The ``SS58`` address of the hotkey associated with the neuron.
      :type hotkey_ss58: Optional[str]
      :param amount: The amount of TAO to stake.
      :type amount: Union[Balance, float]
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional

      :returns: ``True`` if the staking is successful, False otherwise.
      :rtype: bool

      This function enables neurons to increase their stake in the network, enhancing their influence
      and potential rewards in line with Bittensor's consensus and reward mechanisms.



   .. py:method:: add_stake_multiple(wallet, hotkey_ss58s, amounts = None, wait_for_inclusion = True, wait_for_finalization = False, prompt = False)

      Adds stakes to multiple neurons identified by their hotkey SS58 addresses. This bulk operation
      allows for efficient staking across different neurons from a single wallet.

      :param wallet: The wallet used for staking.
      :type wallet: bittensor.wallet
      :param hotkey_ss58s: List of ``SS58`` addresses of hotkeys to stake to.
      :type hotkey_ss58s: List[str]
      :param amounts: Corresponding amounts of TAO to stake for each hotkey.
      :type amounts: List[Union[Balance, float]], optional
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional

      :returns: ``True`` if the staking is successful for all specified neurons, False otherwise.
      :rtype: bool

      This function is essential for managing stakes across multiple neurons, reflecting the dynamic
      and collaborative nature of the Bittensor network.



   .. py:method:: _do_stake(wallet, hotkey_ss58, amount, wait_for_inclusion = True, wait_for_finalization = False)

      Sends a stake extrinsic to the chain.

      :param wallet: Wallet object that can sign the extrinsic.
      :type wallet: :func:`bittensor.wallet`
      :param hotkey_ss58: Hotkey ``ss58`` address to stake to.
      :type hotkey_ss58: str
      :param amount: Amount to stake.
      :type amount: :func:`Balance`
      :param wait_for_inclusion: If ``true``, waits for inclusion before returning.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: If ``true``, waits for finalization before returning.
      :type wait_for_finalization: bool

      :returns: ``True`` if the extrinsic was successful.
      :rtype: success (bool)

      :raises StakeError: If the extrinsic failed.



   .. py:method:: unstake_multiple(wallet, hotkey_ss58s, amounts = None, wait_for_inclusion = True, wait_for_finalization = False, prompt = False)

      Performs batch unstaking from multiple hotkey accounts, allowing a neuron to reduce its staked amounts
      efficiently. This function is useful for managing the distribution of stakes across multiple neurons.

      :param wallet: The wallet linked to the coldkey from which the stakes are being withdrawn.
      :type wallet: bittensor.wallet
      :param hotkey_ss58s: A list of hotkey ``SS58`` addresses to unstake from.
      :type hotkey_ss58s: List[str]
      :param amounts: The amounts of TAO to unstake from each hotkey. If not
                      provided, unstakes all available stakes.
      :type amounts: List[Union[Balance, float]], optional
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional

      :returns: ``True`` if the batch unstaking is successful, False otherwise.
      :rtype: bool

      This function allows for strategic reallocation or withdrawal of stakes, aligning with the dynamic
      stake management aspect of the Bittensor network.



   .. py:method:: unstake(wallet, hotkey_ss58 = None, amount = None, wait_for_inclusion = True, wait_for_finalization = False, prompt = False)

      Removes a specified amount of stake from a single hotkey account. This function is critical for adjusting
      individual neuron stakes within the Bittensor network.

      :param wallet: The wallet associated with the neuron from which the stake is being removed.
      :type wallet: bittensor.wallet
      :param hotkey_ss58: The ``SS58`` address of the hotkey account to unstake from.
      :type hotkey_ss58: Optional[str]
      :param amount: The amount of TAO to unstake. If not specified, unstakes all.
      :type amount: Union[Balance, float], optional
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional

      :returns: ``True`` if the unstaking process is successful, False otherwise.
      :rtype: bool

      This function supports flexible stake management, allowing neurons to adjust their network participation
      and potential reward accruals.



   .. py:method:: _do_unstake(wallet, hotkey_ss58, amount, wait_for_inclusion = True, wait_for_finalization = False)

      Sends an unstake extrinsic to the chain.

      :param wallet: Wallet object that can sign the extrinsic.
      :type wallet: :func:`bittensor.wallet`
      :param hotkey_ss58: Hotkey ``ss58`` address to unstake from.
      :type hotkey_ss58: str
      :param amount: Amount to unstake.
      :type amount: :func:`Balance`
      :param wait_for_inclusion: If ``true``, waits for inclusion before returning.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: If ``true``, waits for finalization before returning.
      :type wait_for_finalization: bool

      :returns: ``True`` if the extrinsic was successful.
      :rtype: success (bool)

      :raises StakeError: If the extrinsic failed.



   .. py:method:: set_childkey_take(wallet, hotkey, take, netuid, wait_for_inclusion = True, wait_for_finalization = False, prompt = False)

      Sets a childkey take extrinsic on the subnet.

      :param wallet: Wallet object that can sign the extrinsic.
      :type wallet: :func:`bittensor.wallet`
      :param hotkey: (str): Hotkey ``ss58`` address of the child for which take is getting set.
      :param netuid: Unique identifier of for the subnet.
      :type netuid: int
      :param take: Value of childhotkey take on subnet.
      :type take: float
      :param wait_for_inclusion: If ``true``, waits for inclusion before returning.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: If ``true``, waits for finalization before returning.
      :type wait_for_finalization: bool
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional

      :returns: ``True`` if the extrinsic was successful.
      :rtype: success (bool)

      :raises ChildHotkeyError: If the extrinsic failed.



   .. py:method:: _do_set_childkey_take(wallet, hotkey, take, netuid, wait_for_inclusion = True, wait_for_finalization = False)

      Sends a set_children hotkey extrinsic on the chain.

      :param wallet: Wallet object that can sign the extrinsic.
      :type wallet: :func:`bittensor.wallet`
      :param hotkey: (str): Hotkey ``ss58`` address of the wallet for which take is getting set.
      :param take: (int): The take that this ss58 hotkey will have if assigned as a child hotkey as u16 value.
      :param netuid: Unique identifier for the network.
      :type netuid: int
      :param wait_for_inclusion: If ``true``, waits for inclusion before returning.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: If ``true``, waits for finalization before returning.
      :type wait_for_finalization: bool

      :returns: ``True`` if the extrinsic was successful.
      :rtype: success (bool)



   .. py:method:: set_children(wallet, hotkey, children_with_proportions, netuid, wait_for_inclusion = True, wait_for_finalization = False, prompt = False)

      Sets a children hotkeys extrinsic on the subnet.

      :param wallet: Wallet object that can sign the extrinsic.
      :type wallet: :func:`bittensor.wallet`
      :param hotkey: (str): Hotkey ``ss58`` address of the parent.
      :param netuid: Unique identifier of for the subnet.
      :type netuid: int
      :param children_with_proportions: List of (proportion, child_ss58) pairs.
      :type children_with_proportions: List[Tuple[float, str]]
      :param wait_for_inclusion: If ``true``, waits for inclusion before returning.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: If ``true``, waits for finalization before returning.
      :type wait_for_finalization: bool
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional

      :returns: ``True`` if the extrinsic was successful.
      :rtype: success (bool)

      :raises ChildHotkeyError: If the extrinsic failed.



   .. py:method:: _do_set_children(wallet, hotkey, children, netuid, wait_for_inclusion = True, wait_for_finalization = False)

      Sends a set_children hotkey extrinsic on the chain.

      :param wallet: Wallet object that can sign the extrinsic.
      :type wallet: :func:`bittensor.wallet`
      :param hotkey: (str): Hotkey ``ss58`` address of the parent.
      :param children: (List[Tuple[int, str]]): A list of tuples containing the hotkey ``ss58`` addresses of the children and their proportions as u16 MAX standardized values.
      :param netuid: Unique identifier for the network.
      :type netuid: int
      :param wait_for_inclusion: If ``true``, waits for inclusion before returning.
      :type wait_for_inclusion: bool
      :param wait_for_finalization: If ``true``, waits for finalization before returning.
      :type wait_for_finalization: bool

      :returns: ``True`` if the extrinsic was successful.
      :rtype: success (bool)



   .. py:method:: check_in_arbitration(ss58_address)

      Checks storage function to see if the provided coldkey is in arbitration.
      If 0, `swap` has not been called on this key. If 1, swap has been called once, so
      the key is not in arbitration. If >1, `swap` has been called with multiple destinations, and
      the key is thus in arbitration.



   .. py:method:: get_remaining_arbitration_period(coldkey_ss58, block = None)

      Retrieves the remaining arbitration period for a given coldkey.
      :param coldkey_ss58: The SS58 address of the coldkey.
      :type coldkey_ss58: str
      :param block: The block number to query. If None, uses the latest block.
      :type block: Optional[int], optional

      :returns: The remaining arbitration period in blocks, or 0 if not found.
      :rtype: Optional[int]



   .. py:method:: register_senate(wallet, wait_for_inclusion = True, wait_for_finalization = False, prompt = False)

      Removes a specified amount of stake from a single hotkey account. This function is critical for adjusting
      individual neuron stakes within the Bittensor network.

      :param wallet: The wallet associated with the neuron from which the stake is being removed.
      :type wallet: bittensor.wallet
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional

      :returns: ``True`` if the unstaking process is successful, False otherwise.
      :rtype: bool

      This function supports flexible stake management, allowing neurons to adjust their network participation
      and potential reward accruals.



   .. py:method:: leave_senate(wallet, wait_for_inclusion = True, wait_for_finalization = False, prompt = False)

      Removes a specified amount of stake from a single hotkey account. This function is critical for adjusting
      individual neuron stakes within the Bittensor network.

      :param wallet: The wallet associated with the neuron from which the stake is being removed.
      :type wallet: bittensor.wallet
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional

      :returns: ``True`` if the unstaking process is successful, False otherwise.
      :rtype: bool

      This function supports flexible stake management, allowing neurons to adjust their network participation
      and potential reward accruals.



   .. py:method:: vote_senate(wallet, proposal_hash, proposal_idx, vote, wait_for_inclusion = True, wait_for_finalization = False, prompt = False)

      Removes a specified amount of stake from a single hotkey account. This function is critical for adjusting
      individual neuron stakes within the Bittensor network.

      :param wallet: The wallet associated with the neuron from which the stake is being removed.
      :type wallet: bittensor.wallet
      :param proposal_hash: The hash of the proposal being voted on.
      :type proposal_hash: str
      :param proposal_idx: The index of the proposal being voted on.
      :type proposal_idx: int
      :param vote: The vote to be cast (True for yes, False for no).
      :type vote: bool
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional

      :returns: ``True`` if the unstaking process is successful, False otherwise.
      :rtype: bool

      This function supports flexible stake management, allowing neurons to adjust their network participation
      and potential reward accruals.



   .. py:method:: is_senate_member(hotkey_ss58, block = None)

      Checks if a given neuron (identified by its hotkey SS58 address) is a member of the Bittensor senate.
      The senate is a key governance body within the Bittensor network, responsible for overseeing and
      approving various network operations and proposals.

      :param hotkey_ss58: The ``SS58`` address of the neuron's hotkey.
      :type hotkey_ss58: str
      :param block: The blockchain block number at which to check senate membership.
      :type block: Optional[int]

      :returns: ``True`` if the neuron is a senate member at the given block, False otherwise.
      :rtype: bool

      This function is crucial for understanding the governance dynamics of the Bittensor network and for
      identifying the neurons that hold decision-making power within the network.



   .. py:method:: get_vote_data(proposal_hash, block = None)

      Retrieves the voting data for a specific proposal on the Bittensor blockchain. This data includes
      information about how senate members have voted on the proposal.

      :param proposal_hash: The hash of the proposal for which voting data is requested.
      :type proposal_hash: str
      :param block: The blockchain block number to query the voting data.
      :type block: Optional[int]

      :returns: An object containing the proposal's voting data, or ``None`` if not found.
      :rtype: Optional[ProposalVoteData]

      This function is important for tracking and understanding the decision-making processes within
      the Bittensor network, particularly how proposals are received and acted upon by the governing body.



   .. py:attribute:: get_proposal_vote_data


   .. py:method:: get_senate_members(block = None)

      Retrieves the list of current senate members from the Bittensor blockchain. Senate members are
      responsible for governance and decision-making within the network.

      :param block: The blockchain block number at which to retrieve the senate members.
      :type block: Optional[int]

      :returns: A list of ``SS58`` addresses of current senate members, or ``None`` if not available.
      :rtype: Optional[List[str]]

      Understanding the composition of the senate is key to grasping the governance structure and
      decision-making authority within the Bittensor network.



   .. py:method:: get_proposal_call_data(proposal_hash, block = None)

      Retrieves the call data of a specific proposal on the Bittensor blockchain. This data provides
      detailed information about the proposal, including its purpose and specifications.

      :param proposal_hash: The hash of the proposal.
      :type proposal_hash: str
      :param block: The blockchain block number at which to query the proposal call data.
      :type block: Optional[int]

      :returns: An object containing the proposal's call data, or ``None`` if not found.
      :rtype: Optional[GenericCall]

      This function is crucial for analyzing the types of proposals made within the network and the
      specific changes or actions they intend to implement or address.



   .. py:method:: get_proposal_hashes(block = None)

      Retrieves the list of proposal hashes currently present on the Bittensor blockchain. Each hash
      uniquely identifies a proposal made within the network.

      :param block: The blockchain block number to query the proposal hashes.
      :type block: Optional[int]

      :returns: A list of proposal hashes, or ``None`` if not available.
      :rtype: Optional[List[str]]

      This function enables tracking and reviewing the proposals made in the network, offering insights
      into the active governance and decision-making processes.



   .. py:method:: get_proposals(block = None)

      Retrieves all active proposals on the Bittensor blockchain, along with their call and voting data.
      This comprehensive view allows for a thorough understanding of the proposals and their reception
      by the senate.

      :param block: The blockchain block number to query the proposals.
      :type block: Optional[int]

      :returns:

                A dictionary mapping
                    proposal hashes to their corresponding call and vote data, or ``None`` if not available.
      :rtype: Optional[Dict[str, Tuple[bittensor.ProposalCallData, bittensor.ProposalVoteData]]]

      This function is integral for analyzing the governance activity on the Bittensor network,
      providing a holistic view of the proposals and their impact or potential changes within the network.



   .. py:method:: root_register(wallet, wait_for_inclusion = False, wait_for_finalization = True, prompt = False)

      Registers the neuron associated with the wallet on the root network. This process is integral for
      participating in the highest layer of decision-making and governance within the Bittensor network.

      :param wallet: The wallet associated with the neuron to be registered on the root network.
      :type wallet: bittensor.wallet
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional

      :returns: ``True`` if the registration on the root network is successful, False otherwise.
      :rtype: bool

      This function enables neurons to engage in the most critical and influential aspects of the network's
      governance, signifying a high level of commitment and responsibility in the Bittensor ecosystem.



   .. py:method:: _do_root_register(wallet, wait_for_inclusion = False, wait_for_finalization = True)


   .. py:method:: root_set_weights(wallet, netuids, weights, version_key = 0, wait_for_inclusion = False, wait_for_finalization = False, prompt = False)

      Sets the weights for neurons on the root network. This action is crucial for defining the influence
      and interactions of neurons at the root level of the Bittensor network.

      :param wallet: The wallet associated with the neuron setting the weights.
      :type wallet: bittensor.wallet
      :param netuids: The list of neuron UIDs for which weights are
                      being set.
      :type netuids: Union[NDArray[np.int64], torch.LongTensor, list]
      :param weights: The corresponding weights to be set for each
                      UID.
      :type weights: Union[NDArray[np.float32], torch.FloatTensor, list]
      :param version_key: Version key for compatibility with the network.
      :type version_key: int, optional
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional
      :param prompt: If ``True``, prompts for user confirmation before proceeding.
      :type prompt: bool, optional

      :returns: ``True`` if the setting of root-level weights is successful, False otherwise.
      :rtype: bool

      This function plays a pivotal role in shaping the root network's collective intelligence and decision-making
      processes, reflecting the principles of decentralized governance and collaborative learning in Bittensor.



   .. py:method:: _do_set_root_weights(wallet, uids, vals, netuid = 0, version_key = bittensor.__version_as_int__, wait_for_inclusion = False, wait_for_finalization = False)

      Internal method to send a transaction to the Bittensor blockchain, setting weights
      for specified neurons on root. This method constructs and submits the transaction, handling
      retries and blockchain communication.

      :param wallet: The wallet associated with the neuron setting the weights.
      :type wallet: bittensor.wallet
      :param uids: List of neuron UIDs for which weights are being set.
      :type uids: List[int]
      :param vals: List of weight values corresponding to each UID.
      :type vals: List[int]
      :param netuid: Unique identifier for the network.
      :type netuid: int
      :param version_key: Version key for compatibility with the network.
      :type version_key: int, optional
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional

      :returns: A tuple containing a success flag and an optional error message.
      :rtype: Tuple[bool, Optional[str]]

      This method is vital for the dynamic weighting mechanism in Bittensor, where neurons adjust their
      trust in other neurons based on observed performance and contributions on the root network.



   .. py:method:: query_identity(key, block = None)

      Queries the identity of a neuron on the Bittensor blockchain using the given key. This function retrieves
      detailed identity information about a specific neuron, which is a crucial aspect of the network's decentralized
      identity and governance system.

      .. note::

         See the `Bittensor CLI documentation <https://docs.bittensor.com/reference/btcli>`_ for supported identity
         parameters.

      :param key: The key used to query the neuron's identity, typically the neuron's ``SS58`` address.
      :type key: str
      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int]

      :returns: An object containing the identity information of the neuron if found, ``None`` otherwise.
      :rtype: result (dict)

      The identity information can include various attributes such as the neuron's stake, rank, and other
      network-specific details, providing insights into the neuron's role and status within the Bittensor network.



   .. py:method:: update_identity(wallet, identified = None, params = None, wait_for_inclusion = True, wait_for_finalization = False)

      Updates the identity of a neuron on the Bittensor blockchain. This function allows neurons to modify their
      identity attributes, reflecting changes in their roles, stakes, or other network-specific parameters.

      .. note::

         See the `Bittensor CLI documentation <https://docs.bittensor.com/reference/btcli>`_ for supported identity
         parameters.

      :param wallet: The wallet associated with the neuron whose identity is being updated.
      :type wallet: bittensor.wallet
      :param identified: The identified ``SS58`` address of the neuron. Defaults to the wallet's coldkey
                         address.
      :type identified: str, optional
      :param params: A dictionary of parameters to update in the neuron's identity.
      :type params: dict, optional
      :param wait_for_inclusion: Waits for the transaction to be included in a block.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Waits for the transaction to be finalized on the blockchain.
      :type wait_for_finalization: bool, optional

      :returns: ``True`` if the identity update is successful, False otherwise.
      :rtype: bool

      This function plays a vital role in maintaining the accuracy and currency of neuron identities in the
      Bittensor network, ensuring that the network's governance and consensus mechanisms operate effectively.



   .. py:method:: commit(wallet, netuid, data)

      Commits arbitrary data to the Bittensor network by publishing metadata.

      :param wallet: The wallet associated with the neuron committing the data.
      :type wallet: bittensor.wallet
      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param data: The data to be committed to the network.
      :type data: str



   .. py:method:: get_commitment(netuid, uid, block = None)

      Retrieves the on-chain commitment for a specific neuron in the Bittensor network.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param uid: The unique identifier of the neuron.
      :type uid: int
      :param block: The block number to retrieve the commitment from. If None, the latest block
                    is used. Default is ``None``.
      :type block: Optional[int]

      :returns: The commitment data as a string.
      :rtype: str



   .. py:method:: query_subtensor(name, block = None, params = None)

      Queries named storage from the Subtensor module on the Bittensor blockchain. This function is used to retrieve
      specific data or parameters from the blockchain, such as stake, rank, or other neuron-specific attributes.

      :param name: The name of the storage function to query.
      :type name: str
      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int]
      :param params: A list of parameters to pass to the query function.
      :type params: Optional[List[object]], optional

      :returns: An object containing the requested data.
      :rtype: query_response (ScaleType)

      This query function is essential for accessing detailed information about the network and its neurons,
      providing valuable insights into the state and dynamics of the Bittensor ecosystem.



   .. py:method:: query_map_subtensor(name, block = None, params = None)

      Queries map storage from the Subtensor module on the Bittensor blockchain. This function is designed to
      retrieve a map-like data structure, which can include various neuron-specific details or network-wide
      attributes.

      :param name: The name of the map storage function to query.
      :type name: str
      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int]
      :param params: A list of parameters to pass to the query function.
      :type params: Optional[List[object]], optional

      :returns: An object containing the map-like data structure, or ``None`` if not found.
      :rtype: QueryMapResult

      This function is particularly useful for analyzing and understanding complex network structures and
      relationships within the Bittensor ecosystem, such as inter-neuronal connections and stake distributions.



   .. py:method:: query_constant(module_name, constant_name, block = None)

      Retrieves a constant from the specified module on the Bittensor blockchain. This function is used to
      access fixed parameters or values defined within the blockchain's modules, which are essential for
      understanding the network's configuration and rules.

      :param module_name: The name of the module containing the constant.
      :type module_name: str
      :param constant_name: The name of the constant to retrieve.
      :type constant_name: str
      :param block: The blockchain block number at which to query the constant.
      :type block: Optional[int]

      :returns: The value of the constant if found, ``None`` otherwise.
      :rtype: Optional[ScaleType]

      Constants queried through this function can include critical network parameters such as inflation rates,
      consensus rules, or validation thresholds, providing a deeper understanding of the Bittensor network's
      operational parameters.



   .. py:method:: query_module(module, name, block = None, params = None)

      Queries any module storage on the Bittensor blockchain with the specified parameters and block number.
      This function is a generic query interface that allows for flexible and diverse data retrieval from
      various blockchain modules.

      :param module: The name of the module from which to query data.
      :type module: str
      :param name: The name of the storage function within the module.
      :type name: str
      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int]
      :param params: A list of parameters to pass to the query function.
      :type params: Optional[List[object]], optional

      :returns: An object containing the requested data if found, ``None`` otherwise.
      :rtype: Optional[ScaleType]

      This versatile query function is key to accessing a wide range of data and insights from different
      parts of the Bittensor blockchain, enhancing the understanding and analysis of the network's state and dynamics.



   .. py:method:: query_map(module, name, block = None, params = None)

      Queries map storage from any module on the Bittensor blockchain. This function retrieves data structures
      that represent key-value mappings, essential for accessing complex and structured data within the blockchain
      modules.

      :param module: The name of the module from which to query the map storage.
      :type module: str
      :param name: The specific storage function within the module to query.
      :type name: str
      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int]
      :param params: Parameters to be passed to the query.
      :type params: Optional[List[object]], optional

      :returns: A data structure representing the map storage if found, ``None`` otherwise.
      :rtype: result (QueryMapResult)

      This function is particularly useful for retrieving detailed and structured data from various blockchain
      modules, offering insights into the network's state and the relationships between its different components.



   .. py:method:: state_call(method, data, block = None)

      Makes a state call to the Bittensor blockchain, allowing for direct queries of the blockchain's state.
      This function is typically used for advanced queries that require specific method calls and data inputs.

      :param method: The method name for the state call.
      :type method: str
      :param data: The data to be passed to the method.
      :type data: str
      :param block: The blockchain block number at which to perform the state call.
      :type block: Optional[int]

      :returns: The result of the rpc call.
      :rtype: result (Dict[Any, Any])

      The state call function provides a more direct and flexible way of querying blockchain data,
      useful for specific use cases where standard queries are insufficient.



   .. py:method:: query_runtime_api(runtime_api, method, params, block = None)

      Queries the runtime API of the Bittensor blockchain, providing a way to interact with the underlying
      runtime and retrieve data encoded in Scale Bytes format. This function is essential for advanced users
      who need to interact with specific runtime methods and decode complex data types.

      :param runtime_api: The name of the runtime API to query.
      :type runtime_api: str
      :param method: The specific method within the runtime API to call.
      :type method: str
      :param params: The parameters to pass to the method call.
      :type params: Optional[List[ParamWithTypes]], optional
      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int]

      :returns: The Scale Bytes encoded result from the runtime API call, or ``None`` if the call fails.
      :rtype: Optional[bytes]

      This function enables access to the deeper layers of the Bittensor blockchain, allowing for detailed
      and specific interactions with the network's runtime environment.



   .. py:method:: _encode_params(call_definition, params)

      Returns a hex encoded string of the params using their types.



   .. py:method:: _get_hyperparameter(param_name, netuid, block = None)

      Retrieves a specified hyperparameter for a specific subnet.

      :param param_name: The name of the hyperparameter to retrieve.
      :type param_name: str
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]

      :returns:

                The value of the specified hyperparameter if the subnet exists, ``None``
                    otherwise.
      :rtype: Optional[Union[int, float]]



   .. py:method:: rho(netuid, block = None)

      Retrieves the 'Rho' hyperparameter for a specified subnet within the Bittensor network. 'Rho' represents the
      global inflation rate, which directly influences the network's token emission rate and economic model.

      .. note:: This is currently fixed such that the Bittensor blockchain emmits 7200 Tao per day.

      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number at which to query the parameter.
      :type block: Optional[int]

      :returns: The value of the 'Rho' hyperparameter if the subnet exists, ``None`` otherwise.
      :rtype: Optional[int]

      Mathematical Context:
          Rho (p) is calculated based on the network's target inflation and actual neuron staking.
          It adjusts the emission rate of the TAO token to balance the network's economy and dynamics.
          The formula for Rho is defined as: p = (Staking_Target / Staking_Actual) * Inflation_Target.
          Here, Staking_Target and Staking_Actual represent the desired and actual total stakes in the network,
          while Inflation_Target is the predefined inflation rate goal.

      'Rho' is essential for understanding the network's economic dynamics, affecting the reward distribution
      and incentive structures across the network's neurons.



   .. py:method:: kappa(netuid, block = None)

      Retrieves the 'Kappa' hyperparameter for a specified subnet. 'Kappa' is a critical parameter in
      the Bittensor network that controls the distribution of stake weights among neurons, impacting their
      rankings and incentive allocations.

      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]

      :returns: The value of the 'Kappa' hyperparameter if the subnet exists, None otherwise.
      :rtype: Optional[float]

      Mathematical Context:
          Kappa (κ) is used in the calculation of neuron ranks, which determine their share of network incentives.
          It is derived from the softmax function applied to the inter-neuronal weights set by each neuron.
          The formula for Kappa is: κ_i = exp(w_i) / Σ(exp(w_j)), where w_i represents the weight set by neuron i,
          and the denominator is the sum of exponential weights set by all neurons.
          This mechanism ensures a normalized and probabilistic distribution of ranks based on relative weights.

      Understanding 'Kappa' is crucial for analyzing stake dynamics and the consensus mechanism within the network,
      as it plays a significant role in neuron ranking and incentive allocation processes.



   .. py:method:: difficulty(netuid, block = None)

      Retrieves the 'Difficulty' hyperparameter for a specified subnet in the Bittensor network.
      This parameter is instrumental in determining the computational challenge required for neurons
      to participate in consensus and validation processes.

      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]

      :returns: The value of the 'Difficulty' hyperparameter if the subnet exists, ``None`` otherwise.
      :rtype: Optional[int]

      The 'Difficulty' parameter directly impacts the network's security and integrity by setting the
      computational effort required for validating transactions and participating in the network's consensus
      mechanism.



   .. py:method:: recycle(netuid, block = None)

      Retrieves the 'Burn' hyperparameter for a specified subnet. The 'Burn' parameter represents the
      amount of Tao that is effectively recycled within the Bittensor network.

      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]

      :returns: The value of the 'Burn' hyperparameter if the subnet exists, None otherwise.
      :rtype: Optional[Balance]

      Understanding the 'Burn' rate is essential for analyzing the network registration usage, particularly
      how it is correlated with user activity and the overall cost of participation in a given subnet.



   .. py:method:: immunity_period(netuid, block = None)

      Retrieves the 'ImmunityPeriod' hyperparameter for a specific subnet. This parameter defines the
      duration during which new neurons are protected from certain network penalties or restrictions.

      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]

      :returns: The value of the 'ImmunityPeriod' hyperparameter if the subnet exists, ``None`` otherwise.
      :rtype: Optional[int]

      The 'ImmunityPeriod' is a critical aspect of the network's governance system, ensuring that new
      participants have a grace period to establish themselves and contribute to the network without facing
      immediate punitive actions.



   .. py:method:: validator_batch_size(netuid, block = None)

      Returns network ValidatorBatchSize hyper parameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If None, the latest block
                    is used. Default is ``None``.
      :type block: Optional[int]

      :returns:

                The value of the ValidatorBatchSize hyperparameter, or None if the subnetwork does not exist
                    or the parameter is not found.
      :rtype: Optional[int]



   .. py:method:: validator_prune_len(netuid, block = None)

      Returns network ValidatorPruneLen hyper parameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If None, the latest block
      :type block: Optional[int]
      :param is used. Default is ``None``.:

      :returns: The value of the ValidatorPruneLen hyperparameter, or None if the subnetwork does not exist
                or the parameter is not found.
      :rtype: Optional[int]



   .. py:method:: validator_logits_divergence(netuid, block = None)

      Returns network ValidatorLogitsDivergence hyper parameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If None, the latest block
      :type block: Optional[int]
      :param is used. Default is ``None``.:

      :returns: The value of the ValidatorLogitsDivergence hyperparameter, or None if the subnetwork does
                not exist or the parameter is not found.
      :rtype: Optional[float]



   .. py:method:: validator_sequence_length(netuid, block = None)

      Returns network ValidatorSequenceLength hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                The value of the ValidatorSequenceLength hyperparameter, or ``None`` if the subnetwork does
                    not exist or the parameter is not found.
      :rtype: Optional[int]



   .. py:method:: validator_epochs_per_reset(netuid, block = None)

      Returns network ValidatorEpochsPerReset hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                The value of the ValidatorEpochsPerReset hyperparameter, or ``None`` if the subnetwork does
                    not exist or the parameter is not found.
      :rtype: Optional[int]



   .. py:method:: validator_epoch_length(netuid, block = None)

      Returns network ValidatorEpochLen hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                The value of the ValidatorEpochLen hyperparameter, or ``None`` if the subnetwork does not
                    exist or the parameter is not found.
      :rtype: Optional[int]



   .. py:method:: validator_exclude_quantile(netuid, block = None)

      Returns network ValidatorExcludeQuantile hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If ``None``, the latest block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns: The value of the ValidatorExcludeQuantile hyperparameter, or ``None`` if the subnetwork does not exist or the parameter is not found.
      :rtype: Optional[float]



   .. py:method:: max_allowed_validators(netuid, block = None)

      Returns network ValidatorExcludeQuantile hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                The value of the ValidatorExcludeQuantile hyperparameter, or ``None`` if the subnetwork
                    does not exist or the parameter is not found.
      :rtype: Optional[float]



   .. py:method:: min_allowed_weights(netuid, block = None)

      Returns network MinAllowedWeights hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                The value of the MinAllowedWeights hyperparameter, or ``None`` if the subnetwork does not
                    exist or the parameter is not found.
      :rtype: Optional[int]



   .. py:method:: max_weight_limit(netuid, block = None)

      Returns network MaxWeightsLimit hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                The value of the MaxWeightsLimit hyperparameter, or ``None`` if the subnetwork does not
                    exist or the parameter is not found.
      :rtype: Optional[float]



   .. py:method:: adjustment_alpha(netuid, block = None)

      Returns network AdjustmentAlpha hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                The value of the AdjustmentAlpha hyperparameter, or ``None`` if the subnetwork does not
                    exist or the parameter is not found.
      :rtype: Optional[float]



   .. py:method:: bonds_moving_avg(netuid, block = None)

      Returns network BondsMovingAverage hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                The value of the BondsMovingAverage hyperparameter, or ``None`` if the subnetwork does not
                    exist or the parameter is not found.
      :rtype: Optional[float]



   .. py:method:: scaling_law_power(netuid, block = None)

      Returns network ScalingLawPower hyper parameter



   .. py:method:: synergy_scaling_law_power(netuid, block = None)

      Returns network ScalingLawPower hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                The value of the ScalingLawPower hyperparameter, or ``None`` if the subnetwork does not
                    exist or the parameter is not found.
      :rtype: Optional[float]



   .. py:method:: subnetwork_n(netuid, block = None)

      Returns network SubnetworkN hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                The value of the SubnetworkN hyperparameter, or ``None`` if the subnetwork does not
                    exist or the parameter is not found.
      :rtype: Optional[int]



   .. py:method:: max_n(netuid, block = None)

      Returns network MaxAllowedUids hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                The value of the MaxAllowedUids hyperparameter, or ``None`` if the subnetwork does not
                    exist or the parameter is not found.
      :rtype: Optional[int]



   .. py:method:: blocks_since_epoch(netuid, block = None)

      Returns network BlocksSinceEpoch hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                The value of the BlocksSinceEpoch hyperparameter, or ``None`` if the subnetwork does not
                    exist or the parameter is not found.
      :rtype: Optional[int]



   .. py:method:: blocks_since_last_update(netuid, uid)

      Returns the number of blocks since the last update for a specific UID in the subnetwork.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param uid: The unique identifier of the neuron.
      :type uid: int

      :returns:

                The number of blocks since the last update, or ``None`` if the subnetwork or UID does not
                    exist.
      :rtype: Optional[int]



   .. py:method:: weights_rate_limit(netuid)

      Returns network WeightsSetRateLimit hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int

      :returns:

                The value of the WeightsSetRateLimit hyperparameter, or ``None`` if the subnetwork does not
                    exist or the parameter is not found.
      :rtype: Optional[int]



   .. py:method:: tempo(netuid, block = None)

      Returns network Tempo hyperparameter.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                The value of the Tempo hyperparameter, or ``None`` if the subnetwork does not
                    exist or the parameter is not found.
      :rtype: Optional[int]



   .. py:method:: get_total_stake_for_hotkey(ss58_address, block = None)

      Returns the total stake held on a hotkey including delegative.

      :param ss58_address: The SS58 address of the hotkey.
      :type ss58_address: str
      :param block: The block number to retrieve the stake from. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                The total stake held on the hotkey, or ``None`` if the hotkey does not
                    exist or the stake is not found.
      :rtype: Optional[Balance]



   .. py:method:: get_total_stake_for_coldkey(ss58_address, block = None)

      Returns the total stake held on a coldkey.

      :param ss58_address: The SS58 address of the coldkey.
      :type ss58_address: str
      :param block: The block number to retrieve the stake from. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                The total stake held on the coldkey, or ``None`` if the coldkey does not
                    exist or the stake is not found.
      :rtype: Optional[Balance]



   .. py:method:: get_stake_for_coldkey_and_hotkey(hotkey_ss58, coldkey_ss58, block = None)

      Returns the stake under a coldkey - hotkey pairing.

      :param hotkey_ss58: The SS58 address of the hotkey.
      :type hotkey_ss58: str
      :param coldkey_ss58: The SS58 address of the coldkey.
      :type coldkey_ss58: str
      :param block: The block number to retrieve the stake from. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                The stake under the coldkey - hotkey pairing, or ``None`` if the pairing does not
                    exist or the stake is not found.
      :rtype: Optional[Balance]



   .. py:method:: get_stake(hotkey_ss58, block = None)

      Returns a list of stake tuples (coldkey, balance) for each delegating coldkey including the owner.

      :param hotkey_ss58: The SS58 address of the hotkey.
      :type hotkey_ss58: str
      :param block: The block number to retrieve the stakes from. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                A list of tuples, each containing a coldkey SS58 address and the corresponding
                    balance staked by that coldkey.
      :rtype: List[Tuple[str, Balance]]



   .. py:method:: does_hotkey_exist(hotkey_ss58, block = None)

      Returns true if the hotkey is known by the chain and there are accounts.

      :param hotkey_ss58: The SS58 address of the hotkey.
      :type hotkey_ss58: str
      :param block: The block number to check the hotkey against. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns: ``True`` if the hotkey is known by the chain and there are accounts, ``False`` otherwise.
      :rtype: bool



   .. py:method:: get_hotkey_owner(hotkey_ss58, block = None)

      Returns the coldkey owner of the passed hotkey.

      :param hotkey_ss58: The SS58 address of the hotkey.
      :type hotkey_ss58: str
      :param block: The block number to check the hotkey owner against. If ``None``, the latest
                    block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                The SS58 address of the coldkey owner, or ``None`` if the hotkey does not exist or the owner
                    is not found.
      :rtype: Optional[str]



   .. py:method:: get_axon_info(netuid, hotkey_ss58, block = None)

      Returns the axon information for this hotkey account.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param hotkey_ss58: The SS58 address of the hotkey.
      :type hotkey_ss58: str
      :param block: The block number to retrieve the axon information from. If ``None``, the
                    latest block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                An AxonInfo object containing the axon information, or ``None`` if the axon information
                    is not found.
      :rtype: Optional[AxonInfo]



   .. py:method:: get_prometheus_info(netuid, hotkey_ss58, block = None)

      Returns the prometheus information for this hotkey account.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param hotkey_ss58: The SS58 address of the hotkey.
      :type hotkey_ss58: str
      :param block: The block number to retrieve the prometheus information from. If ``None``,
                    the latest block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns:

                A PrometheusInfo object containing the prometheus information, or ``None`` if the
                    prometheus information is not found.
      :rtype: Optional[PrometheusInfo]



   .. py:property:: block
      :type: int

      Returns current chain block.
      :returns:     Current chain block.
      :rtype: block (int)


   .. py:method:: total_issuance(block = None)

      Retrieves the total issuance of the Bittensor network's native token (Tao) as of a specific
      blockchain block. This represents the total amount of currency that has been issued or mined on the network.

      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int], optional

      :returns: The total issuance of TAO, represented as a Balance object.
      :rtype: Balance

      The total issuance is a key economic indicator in the Bittensor network, reflecting the overall supply
      of the currency and providing insights into the network's economic health and inflationary trends.



   .. py:method:: total_stake(block = None)

      Retrieves the total amount of TAO staked on the Bittensor network as of a specific blockchain block.
      This represents the cumulative stake across all neurons in the network, indicating the overall level
      of participation and investment by the network's participants.

      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int], optional

      :returns: The total amount of TAO staked on the network, represented as a Balance object.
      :rtype: Balance

      The total stake is an important metric for understanding the network's security, governance dynamics,
      and the level of commitment by its participants. It is also a critical factor in the network's
      consensus and incentive mechanisms.



   .. py:method:: serving_rate_limit(netuid, block = None)

      Retrieves the serving rate limit for a specific subnet within the Bittensor network.
      This rate limit determines how often you can change your node's IP address on the blockchain. Expressed in
      number of blocks. Applies to both subnet validator and subnet miner nodes. Used when you move your node to a new
      machine.

      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int], optional

      :returns: The serving rate limit of the subnet if it exists, ``None`` otherwise.
      :rtype: Optional[int]

      The serving rate limit is a crucial parameter for maintaining network efficiency and preventing
      overuse of resources by individual neurons. It helps ensure a balanced distribution of service
      requests across the network.



   .. py:method:: tx_rate_limit(block = None)

      Retrieves the transaction rate limit for the Bittensor network as of a specific blockchain block.
      This rate limit sets the maximum number of transactions that can be processed within a given time frame.

      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int], optional

      :returns: The transaction rate limit of the network, None if not available.
      :rtype: Optional[int]

      The transaction rate limit is an essential parameter for ensuring the stability and scalability
      of the Bittensor network. It helps in managing network load and preventing congestion, thereby
      maintaining efficient and timely transaction processing.



   .. py:method:: subnet_exists(netuid, block = None)

      Checks if a subnet with the specified unique identifier (netuid) exists within the Bittensor network.

      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number at which to check the subnet's existence.
      :type block: Optional[int], optional

      :returns: ``True`` if the subnet exists, False otherwise.
      :rtype: bool

      This function is critical for verifying the presence of specific subnets in the network,
      enabling a deeper understanding of the network's structure and composition.



   .. py:method:: get_all_subnet_netuids(block = None)

      Retrieves the list of all subnet unique identifiers (netuids) currently present in the Bittensor network.

      :param block: The blockchain block number at which to retrieve the subnet netuids.
      :type block: Optional[int], optional

      :returns: A list of subnet netuids.
      :rtype: List[int]

      This function provides a comprehensive view of the subnets within the Bittensor network,
      offering insights into its diversity and scale.



   .. py:method:: get_total_subnets(block = None)

      Retrieves the total number of subnets within the Bittensor network as of a specific blockchain block.

      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: The total number of subnets in the network.
      :rtype: int

      Understanding the total number of subnets is essential for assessing the network's growth and
      the extent of its decentralized infrastructure.



   .. py:method:: get_subnet_modality(netuid, block = None)

      Returns the NetworkModality hyperparameter for a specific subnetwork.

      :param netuid: The unique identifier of the subnetwork.
      :type netuid: int
      :param block: The block number to retrieve the parameter from. If ``None``, the latest block is used. Default is ``None``.
      :type block: Optional[int], optional

      :returns: The value of the NetworkModality hyperparameter, or ``None`` if the subnetwork does not exist or the parameter is not found.
      :rtype: Optional[int]



   .. py:method:: get_subnet_connection_requirement(netuid_0, netuid_1, block = None)


   .. py:method:: get_emission_value_by_subnet(netuid, block = None)

      Retrieves the emission value of a specific subnet within the Bittensor network. The emission value
      represents the rate at which the subnet emits or distributes the network's native token (Tao).

      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: The emission value of the subnet, None if not available.
      :rtype: Optional[float]

      The emission value is a critical economic parameter, influencing the incentive distribution and
      reward mechanisms within the subnet.



   .. py:method:: get_subnet_connection_requirements(netuid, block = None)

      Retrieves the connection requirements for a specific subnet within the Bittensor network. This
      function provides details on the criteria that must be met for neurons to connect to the subnet.

      :param netuid: The network UID of the subnet to query.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: A dictionary detailing the connection requirements for the subnet.
      :rtype: Dict[str, int]

      Understanding these requirements is crucial for neurons looking to participate in or interact
      with specific subnets, ensuring compliance with their connection standards.



   .. py:method:: get_subnets(block = None)

      Retrieves a list of all subnets currently active within the Bittensor network. This function
      provides an overview of the various subnets and their identifiers.

      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: A list of network UIDs representing each active subnet.
      :rtype: List[int]

      This function is valuable for understanding the network's structure and the diversity of subnets
      available for neuron participation and collaboration.



   .. py:method:: get_all_subnets_info(block = None)

      Retrieves detailed information about all subnets within the Bittensor network. This function
      provides comprehensive data on each subnet, including its characteristics and operational parameters.

      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: A list of SubnetInfo objects, each containing detailed information about a subnet.
      :rtype: List[SubnetInfo]

      Gaining insights into the subnets' details assists in understanding the network's composition,
      the roles of different subnets, and their unique features.



   .. py:method:: get_subnet_info(netuid, block = None)

      Retrieves detailed information about a specific subnet within the Bittensor network. This function
      provides key data on the subnet, including its operational parameters and network status.

      :param netuid: The network UID of the subnet to query.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: Detailed information about the subnet, or ``None`` if not found.
      :rtype: Optional[SubnetInfo]

      This function is essential for neurons and stakeholders interested in the specifics of a particular
      subnet, including its governance, performance, and role within the broader network.



   .. py:method:: get_subnet_hyperparameters(netuid, block = None)

      Retrieves the hyperparameters for a specific subnet within the Bittensor network. These hyperparameters
      define the operational settings and rules governing the subnet's behavior.

      :param netuid: The network UID of the subnet to query.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: The subnet's hyperparameters, or ``None`` if not available.
      :rtype: Optional[SubnetHyperparameters]

      Understanding the hyperparameters is crucial for comprehending how subnets are configured and
      managed, and how they interact with the network's consensus and incentive mechanisms.



   .. py:method:: get_subnet_owner(netuid, block = None)

      Retrieves the owner's address of a specific subnet within the Bittensor network. The owner is
      typically the entity responsible for the creation and maintenance of the subnet.

      :param netuid: The network UID of the subnet to query.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: The SS58 address of the subnet's owner, or ``None`` if not available.
      :rtype: Optional[str]

      Knowing the subnet owner provides insights into the governance and operational control of the subnet,
      which can be important for decision-making and collaboration within the network.



   .. py:method:: is_hotkey_delegate(hotkey_ss58, block = None)

      Determines whether a given hotkey (public key) is a delegate on the Bittensor network. This function
      checks if the neuron associated with the hotkey is part of the network's delegation system.

      :param hotkey_ss58: The SS58 address of the neuron's hotkey.
      :type hotkey_ss58: str
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: ``True`` if the hotkey is a delegate, ``False`` otherwise.
      :rtype: bool

      Being a delegate is a significant status within the Bittensor network, indicating a neuron's
      involvement in consensus and governance processes.



   .. py:method:: get_delegate_take(hotkey_ss58, block = None)

      Retrieves the delegate 'take' percentage for a neuron identified by its hotkey. The 'take'
      represents the percentage of rewards that the delegate claims from its nominators' stakes.

      :param hotkey_ss58: The ``SS58`` address of the neuron's hotkey.
      :type hotkey_ss58: str
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: The delegate take percentage, None if not available.
      :rtype: Optional[float]

      The delegate take is a critical parameter in the network's incentive structure, influencing
      the distribution of rewards among neurons and their nominators.



   .. py:method:: get_nominators_for_hotkey(hotkey_ss58, block = None)

      Retrieves a list of nominators and their stakes for a neuron identified by its hotkey.
      Nominators are neurons that stake their tokens on a delegate to support its operations.

      :param hotkey_ss58: The ``SS58`` address of the neuron's hotkey.
      :type hotkey_ss58: str
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: A list of tuples containing each nominator's address and staked amount or 0.
      :rtype: Union[List[Tuple[str, Balance]], int]

      This function provides insights into the neuron's support network within the Bittensor ecosystem,
      indicating its trust and collaboration relationships.



   .. py:method:: get_delegate_by_hotkey(hotkey_ss58, block = None)

      Retrieves detailed information about a delegate neuron based on its hotkey. This function provides
      a comprehensive view of the delegate's status, including its stakes, nominators, and reward distribution.

      :param hotkey_ss58: The ``SS58`` address of the delegate's hotkey.
      :type hotkey_ss58: str
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: Detailed information about the delegate neuron, ``None`` if not found.
      :rtype: Optional[DelegateInfo]

      This function is essential for understanding the roles and influence of delegate neurons within
      the Bittensor network's consensus and governance structures.



   .. py:method:: get_delegates_lite(block = None)

      Retrieves a lighter list of all delegate neurons within the Bittensor network. This function provides an
      overview of the neurons that are actively involved in the network's delegation system.

      Analyzing the delegate population offers insights into the network's governance dynamics and the distribution
      of trust and responsibility among participating neurons.

      This is a lighter version of :func:`get_delegates`.

      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: A list of ``DelegateInfoLite`` objects detailing each delegate's characteristics.
      :rtype: List[DelegateInfoLite]



   .. py:method:: get_delegates(block = None)

      Retrieves a list of all delegate neurons within the Bittensor network. This function provides an overview of the
      neurons that are actively involved in the network's delegation system.

      Analyzing the delegate population offers insights into the network's governance dynamics and the distribution of
      trust and responsibility among participating neurons.

      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: A list of DelegateInfo objects detailing each delegate's characteristics.
      :rtype: List[DelegateInfo]



   .. py:method:: get_delegated(coldkey_ss58, block = None)

      Retrieves a list of delegates and their associated stakes for a given coldkey. This function
      identifies the delegates that a specific account has staked tokens on.

      :param coldkey_ss58: The ``SS58`` address of the account's coldkey.
      :type coldkey_ss58: str
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns:

                A list of tuples, each containing a delegate's information and staked
                    amount.
      :rtype: List[Tuple[DelegateInfo, Balance]]

      This function is important for account holders to understand their stake allocations and their
      involvement in the network's delegation and consensus mechanisms.



   .. py:method:: get_childkey_take(hotkey, netuid, block = None)

      Get the childkey take of a hotkey on a specific network.
      Args:
      - hotkey (str): The hotkey to search for.
      - netuid (int): The netuid to search for.
      - block (Optional[int]): Optional parameter specifying the block number. Defaults to None.

      Returns:
      - Optional[int]: The value of the "ChildkeyTake" if found, or None if any error occurs.



   .. py:method:: get_children(hotkey, netuid)

      Get the children of a hotkey on a specific network.
      :param hotkey: The hotkey to query.
      :type hotkey: str
      :param netuid: The network ID.
      :type netuid: int

      :returns: List of (proportion, child_address) tuples, or None if an error occurred.
      :rtype: list or None



   .. py:method:: get_parents(child_hotkey, netuid)

      Get the parents of a child hotkey on a specific network.
      :param child_hotkey: The child hotkey to query.
      :type child_hotkey: str
      :param netuid: The network ID.
      :type netuid: int

      :returns: List of (proportion, parent_address) tuples, or None if an error occurred.
      :rtype: list or None



   .. py:method:: get_stake_info_for_coldkey(coldkey_ss58, block = None)

      Retrieves stake information associated with a specific coldkey. This function provides details
      about the stakes held by an account, including the staked amounts and associated delegates.

      :param coldkey_ss58: The ``SS58`` address of the account's coldkey.
      :type coldkey_ss58: str
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: A list of StakeInfo objects detailing the stake allocations for the account.
      :rtype: List[StakeInfo]

      Stake information is vital for account holders to assess their investment and participation
      in the network's delegation and consensus processes.



   .. py:method:: get_stake_info_for_coldkeys(coldkey_ss58_list, block = None)

      Retrieves stake information for a list of coldkeys. This function aggregates stake data for multiple
      accounts, providing a collective view of their stakes and delegations.

      :param coldkey_ss58_list: A list of ``SS58`` addresses of the accounts' coldkeys.
      :type coldkey_ss58_list: List[str]
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: A dictionary mapping each coldkey to a list of its StakeInfo objects.
      :rtype: Dict[str, List[StakeInfo]]

      This function is useful for analyzing the stake distribution and delegation patterns of multiple
      accounts simultaneously, offering a broader perspective on network participation and investment strategies.



   .. py:method:: get_minimum_required_stake()

      Returns the minimum required stake for nominators in the Subtensor network.

      This method retries the substrate call up to three times with exponential backoff in case of failures.

      :returns: The minimum required stake as a Balance object.
      :rtype: Balance

      :raises Exception: If the substrate call fails after the maximum number of retries.



   .. py:method:: is_hotkey_registered_any(hotkey_ss58, block = None)

      Checks if a neuron's hotkey is registered on any subnet within the Bittensor network.

      :param hotkey_ss58: The ``SS58`` address of the neuron's hotkey.
      :type hotkey_ss58: str
      :param block: The blockchain block number at which to perform the check.
      :type block: Optional[int]

      :returns: ``True`` if the hotkey is registered on any subnet, False otherwise.
      :rtype: bool

      This function is essential for determining the network-wide presence and participation of a neuron.



   .. py:method:: is_hotkey_registered_on_subnet(hotkey_ss58, netuid, block = None)

      Checks if a neuron's hotkey is registered on a specific subnet within the Bittensor network.

      :param hotkey_ss58: The ``SS58`` address of the neuron's hotkey.
      :type hotkey_ss58: str
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number at which to perform the check.
      :type block: Optional[int]

      :returns: ``True`` if the hotkey is registered on the specified subnet, False otherwise.
      :rtype: bool

      This function helps in assessing the participation of a neuron in a particular subnet,
      indicating its specific area of operation or influence within the network.



   .. py:method:: is_hotkey_registered(hotkey_ss58, netuid = None, block = None)

      Determines whether a given hotkey (public key) is registered in the Bittensor network, either
      globally across any subnet or specifically on a specified subnet. This function checks the registration
      status of a neuron identified by its hotkey, which is crucial for validating its participation and
      activities within the network.

      :param hotkey_ss58: The SS58 address of the neuron's hotkey.
      :type hotkey_ss58: str
      :param netuid: The unique identifier of the subnet to check the registration. If ``None``, the
                     registration is checked across all subnets.
      :type netuid: Optional[int]
      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int]

      :returns:

                ``True`` if the hotkey is registered in the specified context (either any subnet or a specific
                    subnet), ``False`` otherwise.
      :rtype: bool

      This function is important for verifying the active status of neurons in the Bittensor network. It aids
      in understanding whether a neuron is eligible to participate in network processes such as consensus,
      validation, and incentive distribution based on its registration status.



   .. py:method:: get_uid_for_hotkey_on_subnet(hotkey_ss58, netuid, block = None)

      Retrieves the unique identifier (UID) for a neuron's hotkey on a specific subnet.

      :param hotkey_ss58: The ``SS58`` address of the neuron's hotkey.
      :type hotkey_ss58: str
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]

      :returns: The UID of the neuron if it is registered on the subnet, ``None`` otherwise.
      :rtype: Optional[int]

      The UID is a critical identifier within the network, linking the neuron's hotkey to its
      operational and governance activities on a particular subnet.



   .. py:method:: get_all_uids_for_hotkey(hotkey_ss58, block = None)

      Retrieves all unique identifiers (UIDs) associated with a given hotkey across different subnets
      within the Bittensor network. This function helps in identifying all the neuron instances that are
      linked to a specific hotkey.

      :param hotkey_ss58: The ``SS58`` address of the neuron's hotkey.
      :type hotkey_ss58: str
      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int]

      :returns: A list of UIDs associated with the given hotkey across various subnets.
      :rtype: List[int]

      This function is important for tracking a neuron's presence and activities across different
      subnets within the Bittensor ecosystem.



   .. py:method:: get_netuids_for_hotkey(hotkey_ss58, block = None)

      Retrieves a list of subnet UIDs (netuids) for which a given hotkey is a member. This function
      identifies the specific subnets within the Bittensor network where the neuron associated with
      the hotkey is active.

      :param hotkey_ss58: The ``SS58`` address of the neuron's hotkey.
      :type hotkey_ss58: str
      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int]

      :returns: A list of netuids where the neuron is a member.
      :rtype: List[int]



   .. py:method:: get_neuron_for_pubkey_and_subnet(hotkey_ss58, netuid, block = None)

      Retrieves information about a neuron based on its public key (hotkey SS58 address) and the specific
      subnet UID (netuid). This function provides detailed neuron information for a particular subnet within
      the Bittensor network.

      :param hotkey_ss58: The ``SS58`` address of the neuron's hotkey.
      :type hotkey_ss58: str
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int]

      :returns: Detailed information about the neuron if found, ``None`` otherwise.
      :rtype: Optional[NeuronInfo]

      This function is crucial for accessing specific neuron data and understanding its status, stake,
      and other attributes within a particular subnet of the Bittensor ecosystem.



   .. py:method:: get_all_neurons_for_pubkey(hotkey_ss58, block = None)

      Retrieves information about all neuron instances associated with a given public key (hotkey ``SS58``
      address) across different subnets of the Bittensor network. This function aggregates neuron data
      from various subnets to provide a comprehensive view of a neuron's presence and status within the network.

      :param hotkey_ss58: The ``SS58`` address of the neuron's hotkey.
      :type hotkey_ss58: str
      :param block: The blockchain block number for the query.
      :type block: Optional[int]

      :returns: A list of NeuronInfo objects detailing the neuron's presence across various subnets.
      :rtype: List[NeuronInfo]

      This function is valuable for analyzing a neuron's overall participation, influence, and
      contributions across the Bittensor network.



   .. py:method:: neuron_has_validator_permit(uid, netuid, block = None)

      Checks if a neuron, identified by its unique identifier (UID), has a validator permit on a specific
      subnet within the Bittensor network. This function determines whether the neuron is authorized to
      participate in validation processes on the subnet.

      :param uid: The unique identifier of the neuron.
      :type uid: int
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]

      :returns: ``True`` if the neuron has a validator permit, False otherwise.
      :rtype: Optional[bool]

      This function is essential for understanding a neuron's role and capabilities within a specific
      subnet, particularly regarding its involvement in network validation and governance.



   .. py:method:: neuron_for_wallet(wallet, netuid, block = None)

      Retrieves information about a neuron associated with a given wallet on a specific subnet.
      This function provides detailed data about the neuron's status, stake, and activities based on
      the wallet's hotkey address.

      :param wallet: The wallet associated with the neuron.
      :type wallet: bittensor.wallet
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number at which to perform the query.
      :type block: Optional[int]

      :returns: Detailed information about the neuron if found, ``None`` otherwise.
      :rtype: Optional[NeuronInfo]

      This function is important for wallet owners to understand and manage their neuron's presence
      and activities within a particular subnet of the Bittensor network.



   .. py:method:: neuron_for_uid(uid, netuid, block = None)

      Retrieves detailed information about a specific neuron identified by its unique identifier (UID)
      within a specified subnet (netuid) of the Bittensor network. This function provides a comprehensive
      view of a neuron's attributes, including its stake, rank, and operational status.

      :param uid: The unique identifier of the neuron.
      :type uid: int
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: Detailed information about the neuron if found, ``None`` otherwise.
      :rtype: NeuronInfo

      This function is crucial for analyzing individual neurons' contributions and status within a specific
      subnet, offering insights into their roles in the network's consensus and validation mechanisms.



   .. py:method:: neurons(netuid, block = None)

      Retrieves a list of all neurons within a specified subnet of the Bittensor network. This function
      provides a snapshot of the subnet's neuron population, including each neuron's attributes and network
      interactions.

      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: A list of NeuronInfo objects detailing each neuron's characteristics in the subnet.
      :rtype: List[NeuronInfo]

      Understanding the distribution and status of neurons within a subnet is key to comprehending the
      network's decentralized structure and the dynamics of its consensus and governance processes.



   .. py:method:: neuron_for_uid_lite(uid, netuid, block = None)

      Retrieves a lightweight version of information about a neuron in a specific subnet, identified by
      its UID. The 'lite' version focuses on essential attributes such as stake and network activity.

      :param uid: The unique identifier of the neuron.
      :type uid: int
      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: A simplified version of neuron information if found, ``None`` otherwise.
      :rtype: Optional[NeuronInfoLite]

      This function is useful for quick and efficient analyses of neuron status and activities within a
      subnet without the need for comprehensive data retrieval.



   .. py:method:: neurons_lite(netuid, block = None)

      Retrieves a list of neurons in a 'lite' format from a specific subnet of the Bittensor network.
      This function provides a streamlined view of the neurons, focusing on key attributes such as stake
      and network participation.

      :param netuid: The unique identifier of the subnet.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int], optional

      :returns: A list of simplified neuron information for the subnet.
      :rtype: List[NeuronInfoLite]

      This function offers a quick overview of the neuron population within a subnet, facilitating
      efficient analysis of the network's decentralized structure and neuron dynamics.



   .. py:method:: metagraph(netuid, lite = True, block = None)

      Returns a synced metagraph for a specified subnet within the Bittensor network. The metagraph
      represents the network's structure, including neuron connections and interactions.

      :param netuid: The network UID of the subnet to query.
      :type netuid: int
      :param lite: If true, returns a metagraph using a lightweight sync (no weights, no bonds).
      :type lite: bool, default=True
      :param block: Block number for synchronization, or ``None`` for the latest block.
      :type block: Optional[int]

      :returns: The metagraph representing the subnet's structure and neuron relationships.
      :rtype: bittensor.Metagraph

      The metagraph is an essential tool for understanding the topology and dynamics of the Bittensor
      network's decentralized architecture, particularly in relation to neuron interconnectivity and consensus
          processes.



   .. py:method:: incentive(netuid, block = None)

      Retrieves the list of incentives for neurons within a specific subnet of the Bittensor network.
      This function provides insights into the reward distribution mechanisms and the incentives allocated
      to each neuron based on their contributions and activities.

      :param netuid: The network UID of the subnet to query.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]

      :returns: The list of incentives for neurons within the subnet, indexed by UID.
      :rtype: List[int]

      Understanding the incentive structure is crucial for analyzing the network's economic model and
      the motivational drivers for neuron participation and collaboration.



   .. py:method:: weights(netuid, block = None)

      Retrieves the weight distribution set by neurons within a specific subnet of the Bittensor network.
      This function maps each neuron's UID to the weights it assigns to other neurons, reflecting the
      network's trust and value assignment mechanisms.

      :param netuid: The network UID of the subnet to query.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]

      :returns: A list of tuples mapping each neuron's UID to its assigned weights.
      :rtype: List[Tuple[int, List[Tuple[int, int]]]]

      The weight distribution is a key factor in the network's consensus algorithm and the ranking of neurons,
      influencing their influence and reward allocation within the subnet.



   .. py:method:: bonds(netuid, block = None)

      Retrieves the bond distribution set by neurons within a specific subnet of the Bittensor network.
      Bonds represent the investments or commitments made by neurons in one another, indicating a level
      of trust and perceived value. This bonding mechanism is integral to the network's market-based approach
      to measuring and rewarding machine intelligence.

      :param netuid: The network UID of the subnet to query.
      :type netuid: int
      :param block: The blockchain block number for the query.
      :type block: Optional[int]

      :returns:

                A list of tuples mapping each neuron's UID to its bonds with other
                    neurons.
      :rtype: List[Tuple[int, List[Tuple[int, int]]]]

      Understanding bond distributions is crucial for analyzing the trust dynamics and market behavior
      within the subnet. It reflects how neurons recognize and invest in each other's intelligence and
      contributions, supporting diverse and niche systems within the Bittensor ecosystem.



   .. py:method:: get_subnet_burn_cost(block = None)

      Retrieves the burn cost for registering a new subnet within the Bittensor network. This cost
      represents the amount of Tao that needs to be locked or burned to establish a new subnet.

      :param block: The blockchain block number for the query.
      :type block: Optional[int]

      :returns: The burn cost for subnet registration.
      :rtype: int

      The subnet burn cost is an important economic parameter, reflecting the network's mechanisms for
      controlling the proliferation of subnets and ensuring their commitment to the network's long-term viability.



   .. py:method:: _do_delegation(wallet, delegate_ss58, amount, wait_for_inclusion = True, wait_for_finalization = False)

      Delegates a specified amount of stake to a delegate's hotkey.

      This method sends a transaction to add stake to a delegate's hotkey and retries the call up to three times
      with exponential backoff in case of failures.

      :param wallet: The wallet from which the stake will be delegated.
      :type wallet: bittensor.wallet
      :param delegate_ss58: The SS58 address of the delegate's hotkey.
      :type delegate_ss58: str
      :param amount: The amount of stake to be delegated.
      :type amount: Balance
      :param wait_for_inclusion: Whether to wait for the transaction to be included in a block. Default is ``True``.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Whether to wait for the transaction to be finalized. Default is ``False``.
      :type wait_for_finalization: bool, optional

      :returns: ``True`` if the delegation is successful, ``False`` otherwise.
      :rtype: bool



   .. py:method:: _do_undelegation(wallet, delegate_ss58, amount, wait_for_inclusion = True, wait_for_finalization = False)

      Removes a specified amount of stake from a delegate's hotkey.

      This method sends a transaction to remove stake from a delegate's hotkey and retries the call up to three times
      with exponential backoff in case of failures.

      :param wallet: The wallet from which the stake will be removed.
      :type wallet: bittensor.wallet
      :param delegate_ss58: The SS58 address of the delegate's hotkey.
      :type delegate_ss58: str
      :param amount: The amount of stake to be removed.
      :type amount: Balance
      :param wait_for_inclusion: Whether to wait for the transaction to be included in a block. Default is ``True``.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Whether to wait for the transaction to be finalized. Default is ``False``.
      :type wait_for_finalization: bool, optional

      :returns: ``True`` if the undelegation is successful, ``False`` otherwise.
      :rtype: bool



   .. py:method:: _do_nominate(wallet, wait_for_inclusion = True, wait_for_finalization = False)

      Nominates the wallet's hotkey to become a delegate.

      This method sends a transaction to nominate the wallet's hotkey to become a delegate and retries the call up to
      three times with exponential backoff in case of failures.

      :param wallet: The wallet whose hotkey will be nominated.
      :type wallet: bittensor.wallet
      :param wait_for_inclusion: Whether to wait for the transaction to be included in a block. Default is ``True``.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Whether to wait for the transaction to be finalized. Default is ``False``.
      :type wait_for_finalization: bool, optional

      :returns: ``True`` if the nomination is successful, ``False`` otherwise.
      :rtype: bool



   .. py:method:: _do_increase_take(wallet, hotkey_ss58, take, wait_for_inclusion = True, wait_for_finalization = False)

      Increases the take rate for a delegate's hotkey.

      This method sends a transaction to increase the take rate for a delegate's hotkey and retries the call up to
      three times with exponential backoff in case of failures.

      :param wallet: The wallet from which the transaction will be signed.
      :type wallet: bittensor.wallet
      :param hotkey_ss58: The SS58 address of the delegate's hotkey.
      :type hotkey_ss58: str
      :param take: The new take rate to be set.
      :type take: int
      :param wait_for_inclusion: Whether to wait for the transaction to be included in a block. Default is ``True``.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Whether to wait for the transaction to be finalized. Default is ``False``.
      :type wait_for_finalization: bool, optional

      :returns: ``True`` if the take rate increase is successful, ``False`` otherwise.
      :rtype: bool



   .. py:method:: _do_decrease_take(wallet, hotkey_ss58, take, wait_for_inclusion = True, wait_for_finalization = False)

      Decreases the take rate for a delegate's hotkey.

      This method sends a transaction to decrease the take rate for a delegate's hotkey and retries the call up to
      three times with exponential backoff in case of failures.

      :param wallet: The wallet from which the transaction will be signed.
      :type wallet: bittensor.wallet
      :param hotkey_ss58: The SS58 address of the delegate's hotkey.
      :type hotkey_ss58: str
      :param take: The new take rate to be set.
      :type take: int
      :param wait_for_inclusion: Whether to wait for the transaction to be included in a block. Default is ``True``.
      :type wait_for_inclusion: bool, optional
      :param wait_for_finalization: Whether to wait for the transaction to be finalized. Default is ``False``.
      :type wait_for_finalization: bool, optional

      :returns: ``True`` if the take rate decrease is successful, ``False`` otherwise.
      :rtype: bool



   .. py:method:: get_balance(address, block = None)

      Retrieves the token balance of a specific address within the Bittensor network. This function queries
      the blockchain to determine the amount of Tao held by a given account.

      :param address: The Substrate address in ``ss58`` format.
      :type address: str
      :param block: The blockchain block number at which to perform the query.
      :type block: int, optional

      :returns: The account balance at the specified block, represented as a Balance object.
      :rtype: Balance

      This function is important for monitoring account holdings and managing financial transactions
      within the Bittensor ecosystem. It helps in assessing the economic status and capacity of network participants.



   .. py:method:: get_current_block()

      Returns the current block number on the Bittensor blockchain. This function provides the latest block
      number, indicating the most recent state of the blockchain.

      :returns: The current chain block number.
      :rtype: int

      Knowing the current block number is essential for querying real-time data and performing time-sensitive
      operations on the blockchain. It serves as a reference point for network activities and data synchronization.



   .. py:method:: get_balances(block = None)

      Retrieves the token balances of all accounts within the Bittensor network as of a specific blockchain block.
      This function provides a comprehensive view of the token distribution among different accounts.

      :param block: The blockchain block number at which to perform the query.
      :type block: int, optional

      :returns: A dictionary mapping each account's ``ss58`` address to its balance.
      :rtype: Dict[str, Balance]

      This function is valuable for analyzing the overall economic landscape of the Bittensor network,
      including the distribution of financial resources and the financial status of network participants.



   .. py:method:: _null_neuron()
      :staticmethod:



   .. py:method:: get_block_hash(block_id)

      Retrieves the hash of a specific block on the Bittensor blockchain. The block hash is a unique
      identifier representing the cryptographic hash of the block's content, ensuring its integrity and
      immutability.

      :param block_id: The block number for which the hash is to be retrieved.
      :type block_id: int

      :returns: The cryptographic hash of the specified block.
      :rtype: str

      The block hash is a fundamental aspect of blockchain technology, providing a secure reference to
      each block's data. It is crucial for verifying transactions, ensuring data consistency, and
      maintaining the trustworthiness of the blockchain.



   .. py:method:: get_error_info_by_index(error_index)

      Returns the error name and description from the Subtensor error list.

      :param error_index: The index of the error to retrieve.
      :type error_index: int

      :returns: A tuple containing the error name and description from substrate metadata. If the error index is not found, returns ("Unknown Error", "") and logs a warning.
      :rtype: Tuple[str, str]



.. py:data:: subtensor

