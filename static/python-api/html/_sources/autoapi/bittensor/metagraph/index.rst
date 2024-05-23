:py:mod:`bittensor.metagraph`
=============================

.. py:module:: bittensor.metagraph


Module Contents
---------------

Classes
~~~~~~~

.. autoapisummary::

   bittensor.metagraph.MetagraphMixin
   bittensor.metagraph.NonTorchMetagraph
   bittensor.metagraph.TorchMetaGraph



Functions
~~~~~~~~~

.. autoapisummary::

   bittensor.metagraph.get_save_dir
   bittensor.metagraph.latest_block_path



Attributes
~~~~~~~~~~

.. autoapisummary::

   bittensor.metagraph.BaseClass
   bittensor.metagraph.METAGRAPH_STATE_DICT_NDARRAY_KEYS
   bittensor.metagraph.metagraph


.. py:data:: BaseClass
   :type: Union[bittensor.utils.registration.torch.nn.Module, object]

   

.. py:data:: METAGRAPH_STATE_DICT_NDARRAY_KEYS
   :value: ['version', 'n', 'block', 'stake', 'total_stake', 'ranks', 'trust', 'consensus',...

   

.. py:class:: MetagraphMixin(netuid: int, network: str = 'finney', lite: bool = True, sync: bool = True)


   Bases: :py:obj:`abc.ABC`

   The metagraph class is a core component of the Bittensor network, representing the neural graph that forms the backbone of the decentralized machine learning system.

   The metagraph is a dynamic representation of the network's state, capturing the interconnectedness and attributes of neurons (participants) in the Bittensor ecosystem. This class is not just a static structure but a live reflection of the network, constantly updated and synchronized with the state of the blockchain.

   In Bittensor, neurons are akin to nodes in a distributed system, each contributing computational resources and participating in the network's collective intelligence. The metagraph tracks various attributes of these neurons, such as stake, trust, and consensus, which are crucial for the network's incentive mechanisms and the Yuma Consensus algorithm as outlined in the `NeurIPS paper <https://bittensor.com/pdfs/academia/NeurIPS_DAO_Workshop_2022_3_3.pdf>`_. These attributes
   govern how neurons interact, how they are incentivized, and their roles within the network's
   decision-making processes.

   :param netuid: A unique identifier that distinguishes between different instances or versions of the Bittensor network.
   :type netuid: int
   :param network: The name of the network, signifying specific configurations or iterations within the Bittensor ecosystem.
   :type network: str
   :param version: The version number of the network, integral for tracking network updates.
   :type version: NDArray
   :param n: The total number of neurons in the network, reflecting its size and complexity.
   :type n: NDArray
   :param block: The current block number in the blockchain, crucial for synchronizing with the network's latest state.
   :type block: NDArray
   :param stake: Represents the cryptocurrency staked by neurons, impacting their influence and earnings within the network.
   :param total_stake: The cumulative stake across all neurons.
   :param ranks: Neuron rankings as per the Yuma Consensus algorithm, influencing their incentive distribution and network authority.
   :param trust: Scores indicating the reliability of neurons, mainly miners, within the network's operational context.
   :param consensus: Scores reflecting each neuron's alignment with the network's collective decisions.
   :param validator_trust: Trust scores for validator neurons, crucial for network security and validation.
   :param incentive: Rewards allocated to neurons, particularly miners, for their network contributions.
   :param emission: The rate at which rewards are distributed to neurons.
   :param dividends: Rewards received primarily by validators as part of the incentive mechanism.
   :param active: Status indicating whether a neuron is actively participating in the network.
   :param last_update: Timestamp of the latest update to a neuron's data.
   :param validator_permit: Indicates if a neuron is authorized to act as a validator.
   :param weights: Inter-neuronal weights set by each neuron, influencing network dynamics.
   :param bonds: Represents speculative investments by neurons in others, part of the reward mechanism.
   :param uids: Unique identifiers for each neuron, essential for network operations.
   :param axons: Details about each neuron's axon, critical for facilitating network communication.
   :type axons: List

   The metagraph plays a pivotal role in Bittensor's decentralized AI operations, influencing everything from data propagation to reward distribution. It embodies the principles of decentralized governance
   and collaborative intelligence, ensuring that the network remains adaptive, secure, and efficient.

   Example Usage:
       Initializing the metagraph to represent the current state of the Bittensor network::

           metagraph = bt.metagraph(netuid=config.netuid, network=subtensor.network, sync=False)

       Synchronizing the metagraph with the network to reflect the latest state and neuron data::

           metagraph.sync(subtensor=subtensor)

       Accessing metagraph properties to inform network interactions and decisions::

           total_stake = metagraph.S
           neuron_ranks = metagraph.R
           neuron_incentives = metagraph.I
           ...

       Maintaining a local copy of hotkeys for querying and interacting with network entities::

           hotkeys = deepcopy(metagraph.hotkeys)

   Initializes a new instance of the metagraph object, setting up the basic structure and parameters based on the provided arguments.
   This method is the entry point for creating a metagraph object,
   which is a central component in representing the state of the Bittensor network.
   :param netuid: The unique identifier for the network, distinguishing this instance of the metagraph within potentially multiple network configurations.
   :type netuid: int
   :param network: The name of the network, which can indicate specific configurations or versions of the Bittensor network.
   :type network: str
   :param lite: A flag indicating whether to use a lite version of the metagraph. The lite version may contain less detailed information but can be quicker to initialize and sync.
   :type lite: bool
   :param sync: A flag indicating whether to synchronize the metagraph with the network upon initialization. Synchronization involves updating the metagraph's parameters to reflect the current state of the network.
   :type sync: bool

   .. rubric:: Example

   Initializing a metagraph object for the Bittensor network with a specific network UID::
       metagraph = metagraph(netuid=123, network="finney", lite=True, sync=True)

   .. py:property:: B
      :type: Union[numpy.typing.NDArray, bittensor.utils.registration.torch.nn.Parameter]

      Bonds in the Bittensor network represent a speculative reward mechanism where neurons can accumulate
      bonds in other neurons. Bonds are akin to investments or stakes in other neurons, reflecting a belief in
      their future value or performance. This mechanism encourages correct weighting and collaboration
      among neurons while providing an additional layer of incentive.

      :returns: A tensor representing the bonds held by each neuron, where each value signifies the proportion of bonds owned by one neuron in another.
      :rtype: NDArray

   .. py:property:: C
      :type: Union[numpy.typing.NDArray, bittensor.utils.registration.torch.nn.Parameter]

      Represents the consensus values of neurons in the Bittensor network. Consensus is a measure of how
      much a neuron's contributions are trusted and agreed upon by the majority of the network. It is
      calculated based on a staked weighted trust system, where the network leverages the collective
      judgment of all participating peers. Higher consensus values indicate that a neuron's contributions
      are more widely trusted and valued across the network.

      :returns: A tensor of consensus values, where each element reflects the level of trust and agreement a neuron has achieved within the network.
      :rtype: NDArray

   .. py:property:: D
      :type: Union[numpy.typing.NDArray, bittensor.utils.registration.torch.nn.Parameter]

      Represents the dividends received by neurons in the Bittensor network. Dividends are a form of reward or
      distribution, typically given to neurons based on their stake, performance, and contribution to the network.
      They are an integral part of the network's incentive structure, encouraging active and beneficial participation.

      :returns: A tensor of dividend values, where each element indicates the dividends received by a neuron, reflecting their share of network rewards.
      :rtype: NDArray

   .. py:property:: E
      :type: Union[numpy.typing.NDArray, bittensor.utils.registration.torch.nn.Parameter]

      Denotes the emission values of neurons in the Bittensor network. Emissions refer to the distribution or
      release of rewards (often in the form of cryptocurrency) to neurons, typically based on their stake and
      performance. This mechanism is central to the network's incentive model, ensuring that active and
      contributing neurons are appropriately rewarded.

      :returns: A tensor where each element represents the emission value for a neuron, indicating the amount of reward distributed to that neuron.
      :rtype: NDArray

   .. py:property:: I
      :type: Union[numpy.typing.NDArray, bittensor.utils.registration.torch.nn.Parameter]

      Incentive values of neurons represent the rewards they receive for their contributions to the network.
      The Bittensor network employs an incentive mechanism that rewards neurons based on their
      informational value, stake, and consensus with other peers. This ensures that the most valuable and
      trusted contributions are incentivized.

      :returns: A tensor of incentive values, indicating the rewards or benefits accrued by each neuron based on their contributions and network consensus.
      :rtype: NDArray

   .. py:property:: R
      :type: Union[numpy.typing.NDArray, bittensor.utils.registration.torch.nn.Parameter]

      Contains the ranks of neurons in the Bittensor network. Ranks are determined by the network based
      on each neuron's performance and contributions. Higher ranks typically indicate a greater level of
      contribution or performance by a neuron. These ranks are crucial in determining the distribution of
      incentives within the network, with higher-ranked neurons receiving more incentive.

      :returns: A tensor where each element represents the rank of a neuron. Higher values indicate higher ranks within the network.
      :rtype: NDArray

   .. py:property:: S
      :type: Union[numpy.typing.NDArray, bittensor.utils.registration.torch.nn.Parameter]

      Represents the stake of each neuron in the Bittensor network. Stake is an important concept in the
      Bittensor ecosystem, signifying the amount of network weight (or “stake”) each neuron holds,
      represented on a digital ledger. The stake influences a neuron's ability to contribute to and benefit
      from the network, playing a crucial role in the distribution of incentives and decision-making processes.

      :returns: A tensor representing the stake of each neuron in the network. Higher values signify a greater stake held by the respective neuron.
      :rtype: NDArray

   .. py:property:: T
      :type: Union[numpy.typing.NDArray, bittensor.utils.registration.torch.nn.Parameter]

      Represents the trust values assigned to each neuron in the Bittensor network. Trust is a key metric that
      reflects the reliability and reputation of a neuron based on its past behavior and contributions. It is
      an essential aspect of the network's functioning, influencing decision-making processes and interactions
      between neurons.

      The trust matrix is inferred from the network's inter-peer weights, indicating the level of trust each neuron
      has in others. A higher value in the trust matrix suggests a stronger trust relationship between neurons.

      :returns: A tensor of trust values, where each element represents the trust level of a neuron. Higher values denote a higher level of trust within the network.
      :rtype: NDArray

   .. py:property:: Tv
      :type: Union[numpy.typing.NDArray, bittensor.utils.registration.torch.nn.Parameter]

      Contains the validator trust values of neurons in the Bittensor network. Validator trust is specifically
      associated with neurons that act as validators within the network. This specialized form of trust reflects
      the validators' reliability and integrity in their role, which is crucial for maintaining the network's
      stability and security.

      Validator trust values are particularly important for the network's consensus and validation processes,
      determining the validators' influence and responsibilities in these critical functions.

      :returns: A tensor of validator trust values, specifically applicable to neurons serving as validators, where higher values denote greater trustworthiness in their validation roles.
      :rtype: NDArray

   .. py:property:: W
      :type: Union[numpy.typing.NDArray, bittensor.utils.registration.torch.nn.Parameter]

      Represents the weights assigned to each neuron in the Bittensor network. In the context of Bittensor,
      weights are crucial for determining the influence and interaction between neurons. Each neuron is responsible
      for setting its weights, which are then recorded on a digital ledger. These weights are reflective of the
      neuron's assessment or judgment of other neurons in the network.

      The weight matrix :math:`W = [w_{ij}]` is a key component of the network's architecture, where the :math:`i^{th}` row is set by
      neuron :math:`i` and represents its weights towards other neurons. These weights influence the ranking and incentive
      mechanisms within the network. Higher weights from a neuron towards another can imply greater trust or value
      placed on that neuron's contributions.

      :returns: A tensor of inter-peer weights, where each element :math:`w_{ij}` represents the weight assigned by neuron :math:`i` to neuron :math:`j`. This matrix is fundamental to the network's functioning, influencing the distribution of incentives and the inter-neuronal dynamics.
      :rtype: NDArray

   .. py:property:: addresses
      :type: List[str]

      Provides a list of IP addresses for each neuron in the Bittensor network. These addresses are used for
      network communication, allowing neurons to connect, interact, and exchange information with each other.
      IP addresses are fundamental for the network's peer-to-peer communication infrastructure.

      :returns: A list of IP addresses, with each string representing the address of a neuron. These addresses enable the decentralized, distributed nature of the network, facilitating direct communication and data exchange among neurons.
      :rtype: List[str]

      .. note::

         While IP addresses are a basic aspect of network communication, specific details about their use in
         the Bittensor network may not be covered in the `NeurIPS paper <https://bittensor.com/pdfs/academia/NeurIPS_DAO_Workshop_2022_3_3.pdf>`_. They are, however, integral to the
         functioning of any distributed network.

   .. py:property:: coldkeys
      :type: List[str]

      Contains a list of ``coldkeys`` for each neuron in the Bittensor network.

      Coldkeys are similar to hotkeys but are typically used for more secure, offline activities such as storing assets or offline signing of transactions. They are an important aspect of a neuron's security, providing an additional layer of protection for sensitive operations and assets.

      :returns: A list of coldkeys, each string representing the coldkey of a neuron. These keys play a vital role in the secure management of assets and sensitive operations within the network.
      :rtype: List[str]

      .. note::

         The concept of coldkeys, while not explicitly covered in the NeurIPS paper, is a standard practice in
         blockchain and decentralized networks for enhanced security and asset protection.

   .. py:property:: hotkeys
      :type: List[str]

      Represents a list of ``hotkeys`` for each neuron in the Bittensor network.

      Hotkeys are unique identifiers used by neurons for active participation in the network, such as sending and receiving information or
      transactions. They are akin to public keys in cryptographic systems and are essential for identifying and authenticating neurons within the network's operations.

      :returns: A list of hotkeys, with each string representing the hotkey of a corresponding neuron.

                These keys are crucial for the network's security and integrity, ensuring proper identification and authorization of network participants.
      :rtype: List[str]

      .. note:: While the `NeurIPS paper <https://bittensor.com/pdfs/academia/NeurIPS_DAO_Workshop_2022_3_3.pdf>`_ may not explicitly detail the concept of hotkeys, they are a fundamental  of decentralized networks for secure and authenticated interactions.

   .. py:attribute:: active
      :type: Union[bittensor.utils.registration.torch.nn.Parameter, numpy.typing.NDArray]

      

   .. py:attribute:: axons
      :type: List[bittensor.chain_data.AxonInfo]

      

   .. py:attribute:: block
      :type: Union[bittensor.utils.registration.torch.nn.Parameter, numpy.typing.NDArray]

      

   .. py:attribute:: bonds
      :type: Union[bittensor.utils.registration.torch.nn.Parameter, numpy.typing.NDArray]

      

   .. py:attribute:: consensus
      :type: Union[bittensor.utils.registration.torch.nn.Parameter, numpy.typing.NDArray]

      

   .. py:attribute:: dividends
      :type: Union[bittensor.utils.registration.torch.nn.Parameter, numpy.typing.NDArray]

      

   .. py:attribute:: emission
      :type: Union[bittensor.utils.registration.torch.nn.Parameter, numpy.typing.NDArray]

      

   .. py:attribute:: incentive
      :type: Union[bittensor.utils.registration.torch.nn.Parameter, numpy.typing.NDArray]

      

   .. py:attribute:: last_update
      :type: Union[bittensor.utils.registration.torch.nn.Parameter, numpy.typing.NDArray]

      

   .. py:attribute:: n
      :type: Union[bittensor.utils.registration.torch.nn.Parameter, numpy.typing.NDArray]

      

   .. py:attribute:: netuid
      :type: int

      

   .. py:attribute:: network
      :type: str

      

   .. py:attribute:: ranks
      :type: Union[bittensor.utils.registration.torch.nn.Parameter, numpy.typing.NDArray]

      

   .. py:attribute:: stake
      :type: Union[bittensor.utils.registration.torch.nn.Parameter, numpy.typing.NDArray]

      

   .. py:attribute:: total_stake
      :type: Union[bittensor.utils.registration.torch.nn.Parameter, numpy.typing.NDArray]

      

   .. py:attribute:: trust
      :type: Union[bittensor.utils.registration.torch.nn.Parameter, numpy.typing.NDArray]

      

   .. py:attribute:: uids
      :type: Union[bittensor.utils.registration.torch.nn.Parameter, numpy.typing.NDArray]

      

   .. py:attribute:: validator_permit
      :type: Union[bittensor.utils.registration.torch.nn.Parameter, numpy.typing.NDArray]

      

   .. py:attribute:: validator_trust
      :type: Union[bittensor.utils.registration.torch.nn.Parameter, numpy.typing.NDArray]

      

   .. py:attribute:: version
      :type: Union[bittensor.utils.registration.torch.nn.Parameter, Tuple[numpy.typing.NDArray]]

      

   .. py:attribute:: weights
      :type: Union[bittensor.utils.registration.torch.nn.Parameter, numpy.typing.NDArray]

      

   .. py:method:: __repr__() -> str

      Provides a detailed string representation of the metagraph object, intended for unambiguous understanding and debugging purposes. This method simply calls the :func:`__str__` method, ensuring
      consistency between the informal and formal string representations of the metagraph.

      :returns: The same string representation as provided by the :func:`__str__` method, detailing the metagraph's key attributes including network UID, number of neurons, block number, and network name.
      :rtype: str

      .. rubric:: Example

      The :func:`__repr__` output can be used in debugging to get a clear and concise description of the metagraph::

          metagraph_repr = repr(metagraph)
          print(metagraph_repr)  # Output mirrors that of __str__


   .. py:method:: __str__() -> str

      Provides a human-readable string representation of the metagraph object. This representation includes key identifiers and attributes of the metagraph, making it easier to quickly understand
      the state and configuration of the metagraph in a simple format.

      :returns: A string that succinctly represents the metagraph, including its network UID, the total number of neurons (n), the current block number, and the network's name. This format is particularly useful for logging, debugging, and displaying the metagraph in a concise manner.
      :rtype: str

      .. rubric:: Example

      When printing the metagraph object or using it in a string context, this method is automatically invoked::

          print(metagraph)  # Output: "metagraph(netuid:1, n:100, block:500, network:finney)"


   .. py:method:: _assign_neurons(block, lite, subtensor)

      Assigns neurons to the metagraph based on the provided block number and the lite flag.

      This method is responsible for fetching and setting the neuron data in the metagraph, which includes neuron attributes like UID, stake, trust, and other relevant information.

      :param block: The block number for which the neuron data needs to be fetched. If ``None``, the latest block data is used.
      :param lite: A boolean flag indicating whether to use a lite version of the neuron data. The lite version typically includes essential information and is quicker to fetch and process.
      :param subtensor: The subtensor instance used for fetching neuron data from the network.

      Internal Usage:
          Used internally during the sync process to fetch and set neuron data::

              self._assign_neurons(block, lite, subtensor)


   .. py:method:: _create_tensor(data, dtype) -> Union[numpy.typing.NDArray, bittensor.utils.registration.torch.nn.Parameter]
      :staticmethod:

      Creates a numpy array with the given data and data type. This method is a utility function used internally to encapsulate data into a np.array, making it compatible with the metagraph's numpy model structure.

      :param data: The data to be included in the tensor. This could be any numeric data, like stakes, ranks, etc.
      :param dtype: The data type for the tensor, typically a numpy data type like ``np.float32`` or ``np.int64``.

      :returns: A tensor parameter encapsulating the provided data.

      Internal Usage:
          Used internally to create tensor parameters for various metagraph attributes::

              self.stake = self._create_tensor(neuron_stakes, dtype=np.float32)


   .. py:method:: _initialize_subtensor(subtensor)

      Initializes the subtensor to be used for syncing the metagraph.

      This method ensures that a subtensor instance is available and properly set up for data retrieval during the synchronization process.

      If no subtensor is provided, this method is responsible for creating a new instance of the subtensor, configured according to the current network settings.

      :param subtensor: The subtensor instance provided for initialization. If ``None``, a new subtensor instance is created using the current network configuration.

      :returns: The initialized subtensor instance, ready to be used for syncing the metagraph.
      :rtype: subtensor

      Internal Usage:
          Used internally during the sync process to ensure a valid subtensor instance is available::

              subtensor = self._initialize_subtensor(subtensor)


   .. py:method:: _process_root_weights(data, attribute: str, subtensor: bittensor.subtensor) -> Union[numpy.typing.NDArray, bittensor.utils.registration.torch.nn.Parameter]

      Specifically processes the root weights data for the metagraph. This method is similar to :func:`_process_weights_or_bonds` but is tailored for processing root weights, which have a different structure and significance in the network.

      :param data: The raw root weights data to be processed.
      :param attribute: A string indicating the attribute type, here it's typically ``weights``.
      :param subtensor: The subtensor instance used for additional data and context needed in processing.

      :returns: A tensor parameter encapsulating the processed root weights data.

      Internal Usage:
          Used internally to process and set root weights for the metagraph::

              self.root_weights = self._process_root_weights(
                  raw_root_weights_data, "weights", subtensor
                  )



   .. py:method:: _process_weights_or_bonds(data, attribute: str) -> Union[numpy.typing.NDArray, bittensor.utils.registration.torch.nn.Parameter]

      Processes the raw weights or bonds data and converts it into a structured tensor format. This method handles the transformation of neuron connection data (``weights`` or ``bonds``) from a list or other unstructured format into a tensor that can be utilized within the metagraph model.

      :param data: The raw weights or bonds data to be processed. This data typically comes from the subtensor.
      :param attribute: A string indicating whether the data is ``weights`` or ``bonds``, which determines the specific processing steps to be applied.

      :returns: A tensor parameter encapsulating the processed weights or bonds data.

      Internal Usage:
          Used internally to process and set weights or bonds for the neurons::

              self.weights = self._process_weights_or_bonds(raw_weights_data, "weights")


   .. py:method:: _set_metagraph_attributes(block, subtensor)
      :abstractmethod:


   .. py:method:: _set_weights_and_bonds(subtensor: Optional[bittensor.subtensor] = None)

      Computes and sets the weights and bonds for each neuron in the metagraph. This method is responsible for processing the raw weight and bond data obtained from the network and converting it into a structured format suitable for the metagraph model.

      :param subtensor: The subtensor instance used for fetching weights and bonds data. If ``None``, the weights and bonds are not updated.

      Internal Usage:
          Used internally during the sync process to update the weights and bonds of the neurons::

              self._set_weights_and_bonds(subtensor=subtensor)


   .. py:method:: load()

      Loads the state of the metagraph from the default save directory. This method is instrumental for restoring the metagraph to its last saved state. It automatically identifies the save directory based on the ``network`` and ``netuid`` properties of the metagraph, locates the latest block file in that directory, and loads all metagraph parameters from it.

      This functionality is particularly beneficial when continuity in the state of the metagraph is necessary
      across different runtime sessions, or after a restart of the system. It ensures that the metagraph reflects
      the exact state it was in at the last save point, maintaining consistency in the network's representation.

      The method delegates to ``load_from_path``, supplying it with the directory path constructed from the metagraph's current ``network`` and ``netuid`` properties. This abstraction simplifies the process of loading the metagraph's state for the user, requiring no direct path specifications.

      :returns: The metagraph instance after loading its state from the default directory.
      :rtype: metagraph

      .. rubric:: Example

      Load the metagraph state from the last saved snapshot in the default directory::

          metagraph.load()

      After this operation, the metagraph's parameters and neuron data are restored to their state at the time of the last save in the default directory.

      .. note:: The default save directory is determined based on the metagraph's ``network`` and ``netuid`` attributes. It is important to ensure that these attributes are set correctly and that the default save directory contains the appropriate state files for the metagraph.


   .. py:method:: load_from_path(dir_path: str) -> metagraph
      :abstractmethod:

      Loads the state of the metagraph from a specified directory path. This method is crucial for restoring the metagraph to a specific state based on saved data. It locates the latest block file in the given
      directory and loads all metagraph parameters from it. This is particularly useful for analyses that require historical states of the network or for restoring previous states of the metagraph in different
      execution environments.

      The method first identifies the latest block file in the specified directory, then loads the metagraph state including neuron attributes and parameters from this file. This ensures that the metagraph is accurately reconstituted to reflect the network state at the time of the saved block.

      :param dir_path: The directory path where the metagraph's state files are stored. This path should contain one or more saved state files, typically named in a format that includes the block number.
      :type dir_path: str

      :returns: The metagraph instance after loading its state from the specified directory path.
      :rtype: metagraph

      .. rubric:: Example

      Load the metagraph state from a specific directory::

          dir_path = "/path/to/saved/metagraph/states"
          metagraph.load_from_path(dir_path)

      The metagraph is now restored to the state it was in at the time of the latest saved block in the specified directory.

      .. note::

         This method assumes that the state files in the specified directory are correctly formatted and
         contain valid data for the metagraph. It is essential to ensure that the directory path and the
         state files within it are accurate and consistent with the expected metagraph structure.


   .. py:method:: metadata() -> dict

      Retrieves the metadata of the metagraph, providing key information about the current state of the
      Bittensor network. This metadata includes details such as the network's unique identifier (``netuid``),
      the total number of neurons (``n``), the current block number, the network's name, and the version of
      the Bittensor network.

      :returns: A dictionary containing essential metadata about the metagraph, including:

                - ``netuid``: The unique identifier for the network.
                - ``n``: The total number of neurons in the network.
                - ``block``: The current block number in the network's blockchain.
                - ``network``: The name of the Bittensor network.
                - ``version``: The version number of the Bittensor software.
      :rtype: dict

      .. note:: This metadata is crucial for understanding the current state and configuration of the network, as well as for tracking its evolution over time.


   .. py:method:: save() -> metagraph

      Saves the current state of the metagraph to a file on disk. This function is crucial for persisting the current state of the network's metagraph, which can later be reloaded or analyzed. The save operation includes all neuron attributes and parameters, ensuring a complete snapshot of the metagraph's state.

      :returns: The metagraph instance after saving its state.
      :rtype: metagraph

      .. rubric:: Example

      Save the current state of the metagraph to the default directory::

          metagraph.save()

      The saved state can later be loaded to restore or analyze the metagraph's state at this point.

      If using the default save path::

          metagraph.load()

      If using a custom save path::

          metagraph.load_from_path(dir_path)


   .. py:method:: state_dict()


   .. py:method:: sync(block: Optional[int] = None, lite: bool = True, subtensor: Optional[bittensor.subtensor] = None)

      Synchronizes the metagraph with the Bittensor network's current state. It updates the metagraph's attributes
      to reflect the latest data from the network, ensuring the metagraph represents the most current state of the network.

      :param block: A specific block number to synchronize with. If None, the metagraph syncs with the latest block.
                    This allows for historical analysis or specific state examination of the network.
      :type block: Optional[int]
      :param lite: If True, a lite version of the metagraph is used for quicker synchronization. This is beneficial
                   when full detail is not necessary, allowing for reduced computational and time overhead.
      :type lite: bool
      :param subtensor: An instance of the subtensor class from Bittensor, providing an
                        interface to the underlying blockchain data. If provided, this
                        instance is used for data retrieval during synchronization.
      :type subtensor: Optional[bittensor.subtensor]

      :returns: The metagraph instance, updated to the state of the specified block or the latest network state.
      :rtype: metagraph

      .. rubric:: Example

      Sync the metagraph with the latest block from the subtensor, using the lite version for efficiency::

          metagraph.sync(subtensor=subtensor)

      Sync with a specific block number for detailed analysis::

          metagraph.sync(block=12345, lite=False, subtensor=subtensor)

      .. note::

         If attempting to access data beyond the previous 300 blocks, you **must** use the ``archive`` network for subtensor.
         Light nodes are configured only to store the previous 300 blocks if connecting to finney or test networks.
         
         For example::
         
             subtensor = bittensor.subtensor(network='archive')



.. py:class:: NonTorchMetagraph(netuid: int, network: str = 'finney', lite: bool = True, sync: bool = True)


   Bases: :py:obj:`MetagraphMixin`

   The metagraph class is a core component of the Bittensor network, representing the neural graph that forms the backbone of the decentralized machine learning system.

   The metagraph is a dynamic representation of the network's state, capturing the interconnectedness and attributes of neurons (participants) in the Bittensor ecosystem. This class is not just a static structure but a live reflection of the network, constantly updated and synchronized with the state of the blockchain.

   In Bittensor, neurons are akin to nodes in a distributed system, each contributing computational resources and participating in the network's collective intelligence. The metagraph tracks various attributes of these neurons, such as stake, trust, and consensus, which are crucial for the network's incentive mechanisms and the Yuma Consensus algorithm as outlined in the `NeurIPS paper <https://bittensor.com/pdfs/academia/NeurIPS_DAO_Workshop_2022_3_3.pdf>`_. These attributes
   govern how neurons interact, how they are incentivized, and their roles within the network's
   decision-making processes.

   :param netuid: A unique identifier that distinguishes between different instances or versions of the Bittensor network.
   :type netuid: int
   :param network: The name of the network, signifying specific configurations or iterations within the Bittensor ecosystem.
   :type network: str
   :param version: The version number of the network, integral for tracking network updates.
   :type version: NDArray
   :param n: The total number of neurons in the network, reflecting its size and complexity.
   :type n: NDArray
   :param block: The current block number in the blockchain, crucial for synchronizing with the network's latest state.
   :type block: NDArray
   :param stake: Represents the cryptocurrency staked by neurons, impacting their influence and earnings within the network.
   :param total_stake: The cumulative stake across all neurons.
   :param ranks: Neuron rankings as per the Yuma Consensus algorithm, influencing their incentive distribution and network authority.
   :param trust: Scores indicating the reliability of neurons, mainly miners, within the network's operational context.
   :param consensus: Scores reflecting each neuron's alignment with the network's collective decisions.
   :param validator_trust: Trust scores for validator neurons, crucial for network security and validation.
   :param incentive: Rewards allocated to neurons, particularly miners, for their network contributions.
   :param emission: The rate at which rewards are distributed to neurons.
   :param dividends: Rewards received primarily by validators as part of the incentive mechanism.
   :param active: Status indicating whether a neuron is actively participating in the network.
   :param last_update: Timestamp of the latest update to a neuron's data.
   :param validator_permit: Indicates if a neuron is authorized to act as a validator.
   :param weights: Inter-neuronal weights set by each neuron, influencing network dynamics.
   :param bonds: Represents speculative investments by neurons in others, part of the reward mechanism.
   :param uids: Unique identifiers for each neuron, essential for network operations.
   :param axons: Details about each neuron's axon, critical for facilitating network communication.
   :type axons: List

   The metagraph plays a pivotal role in Bittensor's decentralized AI operations, influencing everything from data propagation to reward distribution. It embodies the principles of decentralized governance
   and collaborative intelligence, ensuring that the network remains adaptive, secure, and efficient.

   Example Usage:
       Initializing the metagraph to represent the current state of the Bittensor network::

           metagraph = bt.metagraph(netuid=config.netuid, network=subtensor.network, sync=False)

       Synchronizing the metagraph with the network to reflect the latest state and neuron data::

           metagraph.sync(subtensor=subtensor)

       Accessing metagraph properties to inform network interactions and decisions::

           total_stake = metagraph.S
           neuron_ranks = metagraph.R
           neuron_incentives = metagraph.I
           ...

       Maintaining a local copy of hotkeys for querying and interacting with network entities::

           hotkeys = deepcopy(metagraph.hotkeys)

   Initializes a new instance of the metagraph object, setting up the basic structure and parameters based on the provided arguments.
   This method is the entry point for creating a metagraph object,
   which is a central component in representing the state of the Bittensor network.
   :param netuid: The unique identifier for the network, distinguishing this instance of the metagraph within potentially multiple network configurations.
   :type netuid: int
   :param network: The name of the network, which can indicate specific configurations or versions of the Bittensor network.
   :type network: str
   :param lite: A flag indicating whether to use a lite version of the metagraph. The lite version may contain less detailed information but can be quicker to initialize and sync.
   :type lite: bool
   :param sync: A flag indicating whether to synchronize the metagraph with the network upon initialization. Synchronization involves updating the metagraph's parameters to reflect the current state of the network.
   :type sync: bool

   .. rubric:: Example

   Initializing a metagraph object for the Bittensor network with a specific network UID::
       metagraph = metagraph(netuid=123, network="finney", lite=True, sync=True)

   .. py:method:: _set_metagraph_attributes(block, subtensor)

      Sets various attributes of the metagraph based on the latest network data fetched from the subtensor.

      This method updates parameters like the number of neurons, block number, stakes, trusts, ranks, and other neuron-specific information.

      :param block: The block number for which the metagraph attributes need to be set. If ``None``, the latest block data is used.
      :param subtensor: The subtensor instance used for fetching the latest network data.

      Internal Usage:
          Used internally during the sync process to update the metagraph's attributes::

              self._set_metagraph_attributes(block, subtensor)


   .. py:method:: load_from_path(dir_path: str) -> metagraph

      Loads the state of the metagraph from a specified directory path. This method is crucial for restoring the metagraph to a specific state based on saved data. It locates the latest block file in the given
      directory and loads all metagraph parameters from it. This is particularly useful for analyses that require historical states of the network or for restoring previous states of the metagraph in different
      execution environments.

      The method first identifies the latest block file in the specified directory, then loads the metagraph state including neuron attributes and parameters from this file. This ensures that the metagraph is accurately reconstituted to reflect the network state at the time of the saved block.

      :param dir_path: The directory path where the metagraph's state files are stored. This path should contain one or more saved state files, typically named in a format that includes the block number.
      :type dir_path: str

      :returns: The metagraph instance after loading its state from the specified directory path.
      :rtype: metagraph

      .. rubric:: Example

      Load the metagraph state from a specific directory::

          dir_path = "/path/to/saved/metagraph/states"
          metagraph.load_from_path(dir_path)

      The metagraph is now restored to the state it was in at the time of the latest saved block in the specified directory.

      .. note::

         This method assumes that the state files in the specified directory are correctly formatted and
         contain valid data for the metagraph. It is essential to ensure that the directory path and the
         state files within it are accurate and consistent with the expected metagraph structure.



.. py:class:: TorchMetaGraph(netuid: int, network: str = 'finney', lite: bool = True, sync: bool = True)


   Bases: :py:obj:`MetagraphMixin`, :py:obj:`BaseClass`

   The metagraph class is a core component of the Bittensor network, representing the neural graph that forms the backbone of the decentralized machine learning system.

   The metagraph is a dynamic representation of the network's state, capturing the interconnectedness and attributes of neurons (participants) in the Bittensor ecosystem. This class is not just a static structure but a live reflection of the network, constantly updated and synchronized with the state of the blockchain.

   In Bittensor, neurons are akin to nodes in a distributed system, each contributing computational resources and participating in the network's collective intelligence. The metagraph tracks various attributes of these neurons, such as stake, trust, and consensus, which are crucial for the network's incentive mechanisms and the Yuma Consensus algorithm as outlined in the `NeurIPS paper <https://bittensor.com/pdfs/academia/NeurIPS_DAO_Workshop_2022_3_3.pdf>`_. These attributes
   govern how neurons interact, how they are incentivized, and their roles within the network's
   decision-making processes.

   :param netuid: A unique identifier that distinguishes between different instances or versions of the Bittensor network.
   :type netuid: int
   :param network: The name of the network, signifying specific configurations or iterations within the Bittensor ecosystem.
   :type network: str
   :param version: The version number of the network, integral for tracking network updates.
   :type version: NDArray
   :param n: The total number of neurons in the network, reflecting its size and complexity.
   :type n: NDArray
   :param block: The current block number in the blockchain, crucial for synchronizing with the network's latest state.
   :type block: NDArray
   :param stake: Represents the cryptocurrency staked by neurons, impacting their influence and earnings within the network.
   :param total_stake: The cumulative stake across all neurons.
   :param ranks: Neuron rankings as per the Yuma Consensus algorithm, influencing their incentive distribution and network authority.
   :param trust: Scores indicating the reliability of neurons, mainly miners, within the network's operational context.
   :param consensus: Scores reflecting each neuron's alignment with the network's collective decisions.
   :param validator_trust: Trust scores for validator neurons, crucial for network security and validation.
   :param incentive: Rewards allocated to neurons, particularly miners, for their network contributions.
   :param emission: The rate at which rewards are distributed to neurons.
   :param dividends: Rewards received primarily by validators as part of the incentive mechanism.
   :param active: Status indicating whether a neuron is actively participating in the network.
   :param last_update: Timestamp of the latest update to a neuron's data.
   :param validator_permit: Indicates if a neuron is authorized to act as a validator.
   :param weights: Inter-neuronal weights set by each neuron, influencing network dynamics.
   :param bonds: Represents speculative investments by neurons in others, part of the reward mechanism.
   :param uids: Unique identifiers for each neuron, essential for network operations.
   :param axons: Details about each neuron's axon, critical for facilitating network communication.
   :type axons: List

   The metagraph plays a pivotal role in Bittensor's decentralized AI operations, influencing everything from data propagation to reward distribution. It embodies the principles of decentralized governance
   and collaborative intelligence, ensuring that the network remains adaptive, secure, and efficient.

   Example Usage:
       Initializing the metagraph to represent the current state of the Bittensor network::

           metagraph = bt.metagraph(netuid=config.netuid, network=subtensor.network, sync=False)

       Synchronizing the metagraph with the network to reflect the latest state and neuron data::

           metagraph.sync(subtensor=subtensor)

       Accessing metagraph properties to inform network interactions and decisions::

           total_stake = metagraph.S
           neuron_ranks = metagraph.R
           neuron_incentives = metagraph.I
           ...

       Maintaining a local copy of hotkeys for querying and interacting with network entities::

           hotkeys = deepcopy(metagraph.hotkeys)

   Initializes a new instance of the metagraph object, setting up the basic structure and parameters based on the provided arguments.
   This method is the entry point for creating a metagraph object,
   which is a central component in representing the state of the Bittensor network.
   :param netuid: The unique identifier for the network, distinguishing this instance of the metagraph within potentially multiple network configurations.
   :type netuid: int
   :param network: The name of the network, which can indicate specific configurations or versions of the Bittensor network.
   :type network: str
   :param lite: A flag indicating whether to use a lite version of the metagraph. The lite version may contain less detailed information but can be quicker to initialize and sync.
   :type lite: bool
   :param sync: A flag indicating whether to synchronize the metagraph with the network upon initialization. Synchronization involves updating the metagraph's parameters to reflect the current state of the network.
   :type sync: bool

   .. rubric:: Example

   Initializing a metagraph object for the Bittensor network with a specific network UID::
       metagraph = metagraph(netuid=123, network="finney", lite=True, sync=True)

   .. py:method:: _set_metagraph_attributes(block, subtensor)

      Sets various attributes of the metagraph based on the latest network data fetched from the subtensor.

      This method updates parameters like the number of neurons, block number, stakes, trusts, ranks, and other neuron-specific information.

      :param block: The block number for which the metagraph attributes need to be set. If ``None``, the latest block data is used.
      :param subtensor: The subtensor instance used for fetching the latest network data.

      Internal Usage:
          Used internally during the sync process to update the metagraph's attributes::

              self._set_metagraph_attributes(block, subtensor)


   .. py:method:: load_from_path(dir_path: str) -> metagraph

      Loads the state of the metagraph from a specified directory path. This method is crucial for restoring the metagraph to a specific state based on saved data. It locates the latest block file in the given
      directory and loads all metagraph parameters from it. This is particularly useful for analyses that require historical states of the network or for restoring previous states of the metagraph in different
      execution environments.

      The method first identifies the latest block file in the specified directory, then loads the metagraph state including neuron attributes and parameters from this file. This ensures that the metagraph is accurately reconstituted to reflect the network state at the time of the saved block.

      :param dir_path: The directory path where the metagraph's state files are stored. This path should contain one or more saved state files, typically named in a format that includes the block number.
      :type dir_path: str

      :returns: The metagraph instance after loading its state from the specified directory path.
      :rtype: metagraph

      .. rubric:: Example

      Load the metagraph state from a specific directory::

          dir_path = "/path/to/saved/metagraph/states"
          metagraph.load_from_path(dir_path)

      The metagraph is now restored to the state it was in at the time of the latest saved block in the specified directory.

      .. note::

         This method assumes that the state files in the specified directory are correctly formatted and
         contain valid data for the metagraph. It is essential to ensure that the directory path and the
         state files within it are accurate and consistent with the expected metagraph structure.



.. py:function:: get_save_dir(network: str, netuid: int) -> str

   Return directory path from ``network`` and ``netuid``.

   :param network: Network name.
   :type network: str
   :param netuid: Network UID.
   :type netuid: int

   :returns: Directory path.
   :rtype: str


.. py:function:: latest_block_path(dir_path: str) -> str

   Get the latest block path from the directory.

   :param dir_path: Directory path.
   :type dir_path: str

   :returns: Latest block path.
   :rtype: str


.. py:data:: metagraph

   

