bittensor.core.metagraph
========================

.. py:module:: bittensor.core.metagraph


Attributes
----------

.. autoapisummary::

   bittensor.core.metagraph.BaseClass
   bittensor.core.metagraph.METAGRAPH_STATE_DICT_NDARRAY_KEYS
   bittensor.core.metagraph.NumpyOrTorch
   bittensor.core.metagraph.Tensor


Classes
-------

.. autoapisummary::

   bittensor.core.metagraph.AsyncMetagraph
   bittensor.core.metagraph.Metagraph
   bittensor.core.metagraph.MetagraphMixin
   bittensor.core.metagraph.NonTorchMetagraph
   bittensor.core.metagraph.TorchMetagraph


Functions
---------

.. autoapisummary::

   bittensor.core.metagraph.async_metagraph
   bittensor.core.metagraph.determine_chain_endpoint_and_network
   bittensor.core.metagraph.get_save_dir
   bittensor.core.metagraph.latest_block_path


Module Contents
---------------

.. py:class:: AsyncMetagraph(netuid, network = settings.DEFAULT_NETWORK, lite = True, sync = True, subtensor = None)

   Bases: :py:obj:`NumpyOrTorch`


   TODO docstring. Advise user to use `async_metagraph` factory fn if they want to sync at init

   Initializes a new instance of the metagraph object, setting up the basic structure and parameters based on the
   provided arguments. This class requires Torch to be installed. This method is the entry point for creating a
   metagraph object, which is a central component in representing the state of the Bittensor network.

   :param netuid: The unique identifier for the network, distinguishing this instance of the metagraph within
                  potentially multiple network configurations.
   :type netuid: int
   :param network: The name of the network, which can indicate specific configurations or versions of the
                   Bittensor network.
   :type network: str
   :param lite: A flag indicating whether to use a lite version of the metagraph. The lite version may contain
                less detailed information but can be quicker to initialize and sync.
   :type lite: bool
   :param sync: A flag indicating whether to synchronize the metagraph with the network upon initialization.
                Synchronization involves updating the metagraph's parameters to reflect the current state of the network.
   :type sync: bool

   .. admonition:: Example

      Initializing a metagraph object for the Bittensor network with a specific network UID::

          from bittensor.core.metagraph import Metagraph

          metagraph = Metagraph(netuid=123, network="finney", lite=True, sync=True)


   .. py:method:: sync(block = None, lite = True, subtensor = None)
      :async:


      Synchronizes the metagraph with the Bittensor network's current state. It updates the metagraph's attributes to
          reflect the latest data from the network, ensuring the metagraph represents the most current state of the
          network.

      :param block: A specific block number to synchronize with. If None, the metagraph syncs with the
                    latest block. This allows for historical analysis or specific state examination of the network.
      :type block: Optional[int]
      :param lite: If True, a lite version of the metagraph is used for quicker synchronization. This is
                   beneficial when full detail is not necessary, allowing for reduced computational and time overhead.
      :type lite: bool
      :param subtensor: An instance of the subtensor class from Bittensor,
                        providing an interface to the underlying blockchain data. If provided, this instance is used for data
                        retrieval during synchronization.
      :type subtensor: Optional[bittensor.core.subtensor.Subtensor]

      .. admonition:: Example

         Sync the metagraph with the latest block from the subtensor, using the lite version for efficiency::
         
             from bittensor.core.subtensor import Subtensor
         
             subtensor = Subtensor()
             metagraph.sync(subtensor=subtensor)
         
         Sync with a specific block number for detailed analysis::
         
             from bittensor.core.subtensor import Subtensor
         
             subtensor = Subtensor()
             metagraph.sync(block=12345, lite=False, subtensor=subtensor)

      .. note::

         If attempting to access data beyond the previous 300 blocks, you **must** use the ``archive`` network for
             subtensor. Light nodes are configured only to store the previous 300 blocks if connecting to finney or
             test networks.
         
         For example::
         
             from bittensor.core.subtensor import Subtensor
         
             subtensor = Subtensor(network='archive')
             current_block = subtensor.get_current_block()
             history_block = current_block - 1200
         
             metagraph.sync(block=history_block, lite=False, subtensor=subtensor)



.. py:data:: BaseClass

.. py:data:: METAGRAPH_STATE_DICT_NDARRAY_KEYS
   :value: ['version', 'n', 'block', 'stake', 'total_stake', 'ranks', 'trust', 'consensus',...


   List of keys for the metagraph state dictionary used in NDArray serialization.

   This list defines the set of keys expected in the metagraph's state dictionary when serializing and deserializing NumPy
   ndarray objects. Each key corresponds to a specific attribute or metric associated with the nodes in the metagraph.

   - **version** (`str`): The version identifier of the metagraph state.
   - **n** (`int`): The total number of nodes in the metagraph.
   - **block** (`int`): The current block number in the blockchain or ledger.
   - **stake** (`ndarray`): An array representing the stake of each node.
   - **total_stake** (`float`): The sum of all individual stakes in the metagraph.
   - **ranks** (`ndarray`): An array of rank scores assigned to each node.
   - **trust** (`ndarray`): An array of trust scores for the nodes.
   - **consensus** (`ndarray`): An array indicating consensus levels among nodes.
   - **validator_trust** (`ndarray`): Trust scores specific to validator nodes.
   - **incentive** (`ndarray`): Incentive values allocated to nodes.
   - **emission** (`float`): The rate of emission for new tokens or units.
   - **dividends** (`ndarray`): Dividend amounts distributed to nodes.
   - **active** (`ndarray`): Boolean array indicating active (`True`) or inactive (`False`) nodes.
   - **last_update** (`int`): Timestamp of the last state update.
   - **validator_permit** (`ndarray`): Boolean array indicating nodes permitted to validate.
   - **uids** (`ndarray`): Unique identifiers for each node in the metagraph.

.. py:class:: Metagraph(netuid, network = settings.DEFAULT_NETWORK, lite = True, sync = True, subtensor = None)

   Bases: :py:obj:`NumpyOrTorch`


   The metagraph class is a core component of the Bittensor network, representing the neural graph that forms the
   backbone of the decentralized machine learning system.

   The metagraph is a dynamic representation of the network's state, capturing the interconnectedness and attributes of
       neurons (participants) in the Bittensor ecosystem. This class is not just a static structure but a live
       reflection of the network, constantly updated and synchronized with the state of the blockchain.

   In Bittensor, neurons are akin to nodes in a distributed system, each contributing computational resources and
       participating in the network's collective intelligence. The metagraph tracks various attributes of these
       neurons, such as stake, trust, and consensus, which are crucial for the network's incentive mechanisms and the
       Yuma Consensus algorithm as outlined in the `NeurIPS paper
       <https://bittensor.com/pdfs/academia/NeurIPS_DAO_Workshop_2022_3_3.pdf>`_. These attributes govern how neurons
       interact, how they are incentivized, and their roles within the network's decision-making processes.

   :param netuid: A unique identifier that distinguishes between different instances or versions of the Bittensor network.
   :type netuid: int
   :param network: The name of the network, signifying specific configurations or iterations within the Bittensor ecosystem.
   :type network: str

   :ivar version: The version number of the network, integral for tracking network updates.
   :vartype version: NDArray
   :ivar n: The total number of neurons in the network, reflecting its size and complexity.
   :vartype n: NDArray
   :ivar block: The current block number in the blockchain, crucial for synchronizing with the network's latest state.
   :vartype block: NDArray
   :ivar stake: Represents the cryptocurrency staked by neurons, impacting their influence and earnings within the network.
   :ivar total_stake: The cumulative stake across all neurons.
   :ivar ranks: Neuron rankings as per the Yuma Consensus algorithm, influencing their incentive distribution and network authority.
   :ivar trust: Scores indicating the reliability of neurons, mainly miners, within the network's operational context.
   :ivar consensus: Scores reflecting each neuron's alignment with the network's collective decisions.
   :ivar validator_trust: Trust scores for validator neurons, crucial for network security and validation.
   :ivar incentive: Rewards allocated to neurons, particularly miners, for their network contributions.
   :ivar emission: The rate at which rewards are distributed to neurons.
   :ivar dividends: Rewards received primarily by validators as part of the incentive mechanism.
   :ivar active: Status indicating whether a neuron is actively participating in the network.
   :ivar last_update: Timestamp of the latest update to a neuron's data.
   :ivar validator_permit: Indicates if a neuron is authorized to act as a validator.
   :ivar weights: Inter-neuronal weights set by each neuron, influencing network dynamics.
   :ivar bonds: Represents speculative investments by neurons in others, part of the reward mechanism.
   :ivar uids: Unique identifiers for each neuron, essential for network operations.
   :ivar axons: Details about each neuron's axon, critical for facilitating network communication.

   :vartype axons: List

   The metagraph plays a pivotal role in Bittensor's decentralized AI operations, influencing everything from data
       propagation to reward distribution. It embodies the principles of decentralized governance and collaborative
       intelligence, ensuring that the network remains adaptive, secure, and efficient.

   .. admonition:: Example

      Initializing the metagraph to represent the current state of the Bittensor network::
      
          from bittensor.core.metagraph import Metagraph
          metagraph = Metagraph(netuid=config.netuid, network=subtensor.network, sync=False)
      
      Synchronizing the metagraph with the network to reflect the latest state and neuron data::
      
          metagraph.sync(subtensor=subtensor)
      
      Accessing metagraph properties to inform network interactions and decisions::
      
          total_stake = metagraph.S
          neuron_ranks = metagraph.R
          neuron_incentives = metagraph.I
          axons = metagraph.axons
          neurons = metagraph.neurons
      
      Maintaining a local copy of hotkeys for querying and interacting with network entities::
      
          hotkeys = deepcopy(metagraph.hotkeys)

   Initializes a new instance of the metagraph object, setting up the basic structure and parameters based on the
   provided arguments. This class requires Torch to be installed. This method is the entry point for creating a
   metagraph object, which is a central component in representing the state of the Bittensor network.

   :param netuid: The unique identifier for the network, distinguishing this instance of the metagraph within
                  potentially multiple network configurations.
   :type netuid: int
   :param network: The name of the network, which can indicate specific configurations or versions of the
                   Bittensor network.
   :type network: str
   :param lite: A flag indicating whether to use a lite version of the metagraph. The lite version may contain
                less detailed information but can be quicker to initialize and sync.
   :type lite: bool
   :param sync: A flag indicating whether to synchronize the metagraph with the network upon initialization.
                Synchronization involves updating the metagraph's parameters to reflect the current state of the network.
   :type sync: bool

   .. admonition:: Example

      Initializing a metagraph object for the Bittensor network with a specific network UID::

          from bittensor.core.metagraph import Metagraph

          metagraph = Metagraph(netuid=123, network="finney", lite=True, sync=True)


   .. py:method:: sync(block = None, lite = True, subtensor = None)

      Synchronizes the metagraph with the Bittensor network's current state. It updates the metagraph's attributes to
          reflect the latest data from the network, ensuring the metagraph represents the most current state of the
          network.

      :param block: A specific block number to synchronize with. If None, the metagraph syncs with the
                    latest block. This allows for historical analysis or specific state examination of the network.
      :type block: Optional[int]
      :param lite: If True, a lite version of the metagraph is used for quicker synchronization. This is
                   beneficial when full detail is not necessary, allowing for reduced computational and time overhead.
      :type lite: bool
      :param subtensor: An instance of the subtensor class from Bittensor,
                        providing an interface to the underlying blockchain data. If provided, this instance is used for data
                        retrieval during synchronization.
      :type subtensor: Optional[bittensor.core.subtensor.Subtensor]

      .. admonition:: Example

         Sync the metagraph with the latest block from the subtensor, using the lite version for efficiency::
         
             from bittensor.core.subtensor import Subtensor
         
             subtensor = Subtensor()
             metagraph.sync(subtensor=subtensor)
         
         Sync with a specific block number for detailed analysis::
         
             from bittensor.core.subtensor import Subtensor
         
             subtensor = Subtensor()
             metagraph.sync(block=12345, lite=False, subtensor=subtensor)

      .. note::

         If attempting to access data beyond the previous 300 blocks, you **must** use the ``archive`` network for
             subtensor. Light nodes are configured only to store the previous 300 blocks if connecting to finney or
             test networks.
         
         For example::
         
             from bittensor.core.subtensor import Subtensor
         
             subtensor = Subtensor(network='archive')
             current_block = subtensor.get_current_block()
             history_block = current_block - 1200
         
             metagraph.sync(block=history_block, lite=False, subtensor=subtensor)



.. py:class:: MetagraphMixin(netuid, network = settings.DEFAULT_NETWORK, lite = True, sync = True, subtensor = None)

   Bases: :py:obj:`abc.ABC`


   The metagraph class is a core component of the Bittensor network, representing the neural graph that forms the
   backbone of the decentralized machine learning system.

   The metagraph is a dynamic representation of the network's state, capturing the interconnectedness and attributes of
       neurons (participants) in the Bittensor ecosystem. This class is not just a static structure but a live
       reflection of the network, constantly updated and synchronized with the state of the blockchain.

   In Bittensor, neurons are akin to nodes in a distributed system, each contributing computational resources and
       participating in the network's collective intelligence. The metagraph tracks various attributes of these
       neurons, such as stake, trust, and consensus, which are crucial for the network's incentive mechanisms and the
       Yuma Consensus algorithm as outlined in the `NeurIPS paper
       <https://bittensor.com/pdfs/academia/NeurIPS_DAO_Workshop_2022_3_3.pdf>`_. These attributes govern how neurons
       interact, how they are incentivized, and their roles within the network's decision-making processes.

   :param netuid: A unique identifier that distinguishes between different instances or versions of the Bittensor network.
   :type netuid: int
   :param network: The name of the network, signifying specific configurations or iterations within the Bittensor ecosystem.
   :type network: str

   :ivar version: The version number of the network, integral for tracking network updates.
   :vartype version: NDArray
   :ivar n: The total number of neurons in the network, reflecting its size and complexity.
   :vartype n: NDArray
   :ivar block: The current block number in the blockchain, crucial for synchronizing with the network's latest state.
   :vartype block: NDArray
   :ivar stake: Represents the cryptocurrency staked by neurons, impacting their influence and earnings within the network.
   :ivar total_stake: The cumulative stake across all neurons.
   :ivar ranks: Neuron rankings as per the Yuma Consensus algorithm, influencing their incentive distribution and network authority.
   :ivar trust: Scores indicating the reliability of neurons, mainly miners, within the network's operational context.
   :ivar consensus: Scores reflecting each neuron's alignment with the network's collective decisions.
   :ivar validator_trust: Trust scores for validator neurons, crucial for network security and validation.
   :ivar incentive: Rewards allocated to neurons, particularly miners, for their network contributions.
   :ivar emission: The rate at which rewards are distributed to neurons.
   :ivar dividends: Rewards received primarily by validators as part of the incentive mechanism.
   :ivar active: Status indicating whether a neuron is actively participating in the network.
   :ivar last_update: Timestamp of the latest update to a neuron's data.
   :ivar validator_permit: Indicates if a neuron is authorized to act as a validator.
   :ivar weights: Inter-neuronal weights set by each neuron, influencing network dynamics.
   :ivar bonds: Represents speculative investments by neurons in others, part of the reward mechanism.
   :ivar uids: Unique identifiers for each neuron, essential for network operations.
   :ivar axons: Details about each neuron's axon, critical for facilitating network communication.

   :vartype axons: List

   The metagraph plays a pivotal role in Bittensor's decentralized AI operations, influencing everything from data
       propagation to reward distribution. It embodies the principles of decentralized governance and collaborative
       intelligence, ensuring that the network remains adaptive, secure, and efficient.

   .. admonition:: Example

      Initializing the metagraph to represent the current state of the Bittensor network::
      
          from bittensor.core.metagraph import Metagraph
          metagraph = Metagraph(netuid=config.netuid, network=subtensor.network, sync=False)
      
      Synchronizing the metagraph with the network to reflect the latest state and neuron data::
      
          metagraph.sync(subtensor=subtensor)
      
      Accessing metagraph properties to inform network interactions and decisions::
      
          total_stake = metagraph.S
          neuron_ranks = metagraph.R
          neuron_incentives = metagraph.I
          axons = metagraph.axons
          neurons = metagraph.neurons
      
      Maintaining a local copy of hotkeys for querying and interacting with network entities::
      
          hotkeys = deepcopy(metagraph.hotkeys)

   Initializes a new instance of the metagraph object, setting up the basic structure and parameters based on the
   provided arguments. This method is the entry point for creating a metagraph object, which is a central component
   in representing the state of the Bittensor network.

   :param netuid: The unique identifier for the network, distinguishing this instance of the metagraph within
                  potentially multiple network configurations.
   :type netuid: int
   :param network: The name of the network, which can indicate specific configurations or versions of the
                   Bittensor network.
   :type network: str
   :param lite: A flag indicating whether to use a lite version of the metagraph. The lite version may contain
                less detailed information but can be quicker to initialize and sync.
   :type lite: bool
   :param sync: A flag indicating whether to synchronize the metagraph with the network upon initialization.
                Synchronization involves updating the metagraph's parameters to reflect the current state of the network.
   :type sync: bool

   .. admonition:: Example

      Initializing a metagraph object for the Bittensor network with a specific network UID::

          metagraph = Metagraph(netuid=123, network="finney", lite=True, sync=True)


   .. py:property:: B
      :type: Union[numpy.typing.NDArray, bittensor.utils.registration.torch.nn.Parameter]


      Bonds in the Bittensor network represent a speculative reward mechanism where neurons can accumulate
      bonds in other neurons. Bonds are akin to investments or stakes in other neurons, reflecting a belief in
      their future value or performance. This mechanism encourages correct weighting and collaboration
      among neurons while providing an additional layer of incentive.

      :returns:

                A tensor representing the bonds held by each neuron, where each value signifies the proportion of
                    bonds owned by one neuron in another.
      :rtype: NDArray


   .. py:property:: C
      :type: Union[numpy.typing.NDArray, bittensor.utils.registration.torch.nn.Parameter]


      Represents the consensus values of neurons in the Bittensor network. Consensus is a measure of how
      much a neuron's contributions are trusted and agreed upon by the majority of the network. It is
      calculated based on a staked weighted trust system, where the network leverages the collective
      judgment of all participating peers. Higher consensus values indicate that a neuron's contributions
      are more widely trusted and valued across the network.

      :returns:

                A tensor of consensus values, where each element reflects the level of trust and agreement a neuron
                    has achieved within the network.
      :rtype: NDArray


   .. py:property:: D
      :type: Union[numpy.typing.NDArray, bittensor.utils.registration.torch.nn.Parameter]


      Represents the dividends received by neurons in the Bittensor network. Dividends are a form of reward or
      distribution, typically given to neurons based on their stake, performance, and contribution to the network.
      They are an integral part of the network's incentive structure, encouraging active and beneficial participation.

      :returns:

                A tensor of dividend values, where each element indicates the dividends received by a neuron,
                    reflecting their share of network rewards.
      :rtype: NDArray


   .. py:property:: E
      :type: Union[numpy.typing.NDArray, bittensor.utils.registration.torch.nn.Parameter]


      Denotes the emission values of neurons in the Bittensor network. Emissions refer to the distribution or
      release of rewards (often in the form of cryptocurrency) to neurons, typically based on their stake and
      performance. This mechanism is central to the network's incentive model, ensuring that active and
      contributing neurons are appropriately rewarded.

      :returns:

                A tensor where each element represents the emission value for a neuron, indicating the amount of
                    reward distributed to that neuron.
      :rtype: NDArray


   .. py:property:: I
      :type: Union[numpy.typing.NDArray, bittensor.utils.registration.torch.nn.Parameter]


      Incentive values of neurons represent the rewards they receive for their contributions to the network.
      The Bittensor network employs an incentive mechanism that rewards neurons based on their
      informational value, stake, and consensus with other peers. This ensures that the most valuable and
      trusted contributions are incentivized.

      :returns:

                A tensor of incentive values, indicating the rewards or benefits accrued by each neuron based on
                    their contributions and network consensus.
      :rtype: NDArray


   .. py:property:: R
      :type: Union[numpy.typing.NDArray, bittensor.utils.registration.torch.nn.Parameter]


      Contains the ranks of neurons in the Bittensor network. Ranks are determined by the network based
      on each neuron's performance and contributions. Higher ranks typically indicate a greater level of
      contribution or performance by a neuron. These ranks are crucial in determining the distribution of
      incentives within the network, with higher-ranked neurons receiving more incentive.

      :returns:

                A tensor where each element represents the rank of a neuron. Higher values indicate higher ranks
                    within the network.
      :rtype: NDArray


   .. py:property:: S
      :type: Union[numpy.typing.NDArray, bittensor.utils.registration.torch.nn.Parameter]


      Represents the stake of each neuron in the Bittensor network. Stake is an important concept in the
      Bittensor ecosystem, signifying the amount of network weight (or “stake”) each neuron holds,
      represented on a digital ledger. The stake influences a neuron's ability to contribute to and benefit
      from the network, playing a crucial role in the distribution of incentives and decision-making processes.

      :returns:

                A tensor representing the stake of each neuron in the network. Higher values signify a greater
                    stake held by the respective neuron.
      :rtype: NDArray


   .. py:property:: T
      :type: Union[numpy.typing.NDArray, bittensor.utils.registration.torch.nn.Parameter]


      Represents the trust values assigned to each neuron in the Bittensor network. Trust is a key metric that
      reflects the reliability and reputation of a neuron based on its past behavior and contributions. It is
      an essential aspect of the network's functioning, influencing decision-making processes and interactions
      between neurons.

      The trust matrix is inferred from the network's inter-peer weights, indicating the level of trust each neuron
      has in others. A higher value in the trust matrix suggests a stronger trust relationship between neurons.

      :returns:

                A tensor of trust values, where each element represents the trust level of a neuron. Higher values
                    denote a higher level of trust within the network.
      :rtype: NDArray


   .. py:property:: Tv
      :type: Union[numpy.typing.NDArray, bittensor.utils.registration.torch.nn.Parameter]


      Contains the validator trust values of neurons in the Bittensor network. Validator trust is specifically
      associated with neurons that act as validators within the network. This specialized form of trust reflects
      the validators' reliability and integrity in their role, which is crucial for maintaining the network's
      stability and security.

      Validator trust values are particularly important for the network's consensus and validation processes,
      determining the validators' influence and responsibilities in these critical functions.

      :returns:

                A tensor of validator trust values, specifically applicable to neurons serving as validators, where
                    higher values denote greater trustworthiness in their validation roles.
      :rtype: NDArray


   .. py:property:: W
      :type: Union[numpy.typing.NDArray, bittensor.utils.registration.torch.nn.Parameter]


      Represents the weights assigned to each neuron in the Bittensor network. In the context of Bittensor,
      weights are crucial for determining the influence and interaction between neurons. Each neuron is responsible
      for setting its weights, which are then recorded on a digital ledger. These weights are reflective of the
      neuron's assessment or judgment of other neurons in the network.

      The weight matrix :math:`W = [w_{ij}]` is a key component of the network's architecture, where the :math:
      `i^{th}` row is set by neuron :math:`i` and represents its weights towards other neurons. These weights
      influence the ranking and incentive mechanisms within the network. Higher weights from a neuron towards another
      can imply greater trust or value placed on that neuron's contributions.

      :returns:

                A tensor of inter-peer weights, where each element :math:`w_{ij}` represents the weight assigned by
                    neuron :math:`i` to neuron :math:`j`. This matrix is fundamental to the network's functioning,
                    influencing the distribution of incentives and the inter-neuronal dynamics.
      :rtype: NDArray


   .. py:attribute:: active
      :type:  Tensor


   .. py:property:: addresses
      :type: list[str]


      Provides a list of IP addresses for each neuron in the Bittensor network. These addresses are used for
      network communication, allowing neurons to connect, interact, and exchange information with each other.
      IP addresses are fundamental for the network's peer-to-peer communication infrastructure.

      :returns:

                A list of IP addresses, with each string representing the address of a neuron. These addresses
                    enable the decentralized, distributed nature of the network, facilitating direct communication and data
                    exchange among neurons.
      :rtype: List[str]

      .. note::

         While IP addresses are a basic aspect of network communication, specific details about their use in
         the Bittensor network may not be covered in the `NeurIPS paper
         <https://bittensor.com/pdfs/academia/NeurIPS_DAO_Workshop_2022_3_3.pdf>`_. They are, however, integral to
         the functioning of any distributed network.


   .. py:attribute:: axons
      :type:  list[bittensor.core.chain_data.AxonInfo]


   .. py:attribute:: block
      :type:  Tensor


   .. py:attribute:: bonds
      :type:  Tensor


   .. py:attribute:: chain_endpoint
      :type:  Optional[str]


   .. py:property:: coldkeys
      :type: list[str]


      Contains a list of ``coldkeys`` for each neuron in the Bittensor network.

      Coldkeys are similar to hotkeys but are typically used for more secure, offline activities such as storing
      assets or offline signing of transactions. They are an important aspect of a neuron's security, providing an
      additional layer of protection for sensitive operations and assets.

      :returns:

                A list of coldkeys, each string representing the coldkey of a neuron. These keys play a vital
                    role in the secure management of assets and sensitive operations within the network.
      :rtype: List[str]

      .. note::

         The concept of coldkeys, while not explicitly covered in the NeurIPS paper, is a standard practice in
             blockchain and decentralized networks for enhanced security and asset protection.


   .. py:attribute:: consensus
      :type:  Tensor


   .. py:attribute:: dividends
      :type:  Tensor


   .. py:attribute:: emission
      :type:  Tensor


   .. py:property:: hotkeys
      :type: list[str]


      Represents a list of ``hotkeys`` for each neuron in the Bittensor network.

      Hotkeys are unique identifiers used by neurons for active participation in the network, such as sending and
      receiving information or transactions. They are akin to public keys in cryptographic systems and are essential
      for identifying and authenticating neurons within the network's operations.

      :returns: A list of hotkeys, with each string representing the hotkey of a corresponding neuron.

                These keys are crucial for the network's security and integrity, ensuring proper identification and
                    authorization of network participants.
      :rtype: List[str]

      .. note::

         While the `NeurIPS paper <https://bittensor.com/pdfs/academia/NeurIPS_DAO_Workshop_2022_3_3.pdf>`_ may not
             explicitly detail the concept of hotkeys, they are a fundamental  of decentralized networks for secure
             and authenticated interactions.


   .. py:attribute:: incentive
      :type:  Tensor


   .. py:attribute:: last_update
      :type:  Tensor


   .. py:method:: load(root_dir = None)

      Loads the state of the metagraph from the default save directory. This method is instrumental for restoring the
      metagraph to its last saved state. It automatically identifies the save directory based on the ``network`` and
      ``netuid`` properties of the metagraph, locates the latest block file in that directory, and loads all metagraph
      parameters from it.

      This functionality is particularly beneficial when continuity in the state of the metagraph is necessary
      across different runtime sessions, or after a restart of the system. It ensures that the metagraph reflects
      the exact state it was in at the last save point, maintaining consistency in the network's representation.

      The method delegates to ``load_from_path``, supplying it with the directory path constructed from the
      metagraph's current ``network`` and ``netuid`` properties. This abstraction simplifies the process of loading
      the metagraph's state for the user, requiring no direct path specifications.

      :param root_dir: list to the file path for the root directory of your metagraph saves
                       (i.e. ['/', 'tmp', 'metagraphs'], defaults to ["~", ".bittensor", "metagraphs"]

      :returns:

                The metagraph instance after loading its state from the
                    default directory.
      :rtype: metagraph (bittensor.core.metagraph.Metagraph)

      .. admonition:: Example

         Load the metagraph state from the last saved snapshot in the default directory::
         
             metagraph.load()
         
         After this operation, the metagraph's parameters and neuron data are restored to their state at the time of
         the last save in the default directory.

      .. note::

         The default save directory is determined based on the metagraph's ``network`` and ``netuid`` attributes. It
         is important to ensure that these attributes are set correctly and that the default save directory contains
         the appropriate state files for the metagraph.



   .. py:method:: load_from_path(dir_path)
      :abstractmethod:


      Loads the state of the metagraph from a specified directory path. This method is crucial for restoring the
      metagraph to a specific state based on saved data. It locates the latest block file in the given directory and
      loads all metagraph parameters from it. This is particularly useful for analyses that require historical states
      of the network or for restoring previous states of the metagraph in different execution environments.

      The method first identifies the latest block file in the specified directory, then loads the metagraph state
      including neuron attributes and parameters from this file. This ensures that the metagraph is accurately
      reconstituted to reflect the network state at the time of the saved block.

      :param dir_path: The directory path where the metagraph's state files are stored. This path should contain
                       one or more saved state files, typically named in a format that includes the block number.
      :type dir_path: str

      :returns:

                The metagraph instance after loading its state from the
                    specified directory path.
      :rtype: metagraph (bittensor.core.metagraph.AsyncMetagraph)

      .. admonition:: Example

         Load the metagraph state from a specific directory::
         
             dir_path = "/path/to/saved/metagraph/states"
             metagraph.load_from_path(dir_path)
         
         The metagraph is now restored to the state it was in at the time of the latest saved block in the specified
         directory.

      .. note::

         This method assumes that the state files in the specified directory are correctly formatted and
         contain valid data for the metagraph. It is essential to ensure that the directory path and the
         state files within it are accurate and consistent with the expected metagraph structure.



   .. py:method:: metadata()

      Retrieves the metadata of the metagraph, providing key information about the current state of the Bittensor
      network. This metadata includes details such as the network's unique identifier (``netuid``), the total number
      of neurons (``n``), the current block number, the network's name, and the version of the Bittensor network.

      :returns: A dictionary containing essential metadata about the metagraph, including:

                - ``netuid``: The unique identifier for the network.
                - ``n``: The total number of neurons in the network.
                - ``block``: The current block number in the network's blockchain.
                - ``network``: The name of the Bittensor network.
                - ``version``: The version number of the Bittensor software.
      :rtype: dict

      .. note::

         This metadata is crucial for understanding the current state and configuration of the network, as well as
             for tracking its evolution over time.



   .. py:attribute:: n
      :type:  Tensor


   .. py:attribute:: netuid
      :type:  int


   .. py:attribute:: network
      :type:  str


   .. py:attribute:: neurons
      :type:  list[Union[bittensor.core.chain_data.NeuronInfo, bittensor.core.chain_data.NeuronInfoLite]]


   .. py:attribute:: ranks
      :type:  Tensor


   .. py:method:: save(root_dir = None)

      Saves the current state of the metagraph to a file on disk. This function is crucial for persisting the current
          state of the network's metagraph, which can later be reloaded or analyzed. The save operation includes all
          neuron attributes and parameters, ensuring a complete snapshot of the metagraph's state.

      :param root_dir: list to the file path for the root directory of your metagraph saves
                       (i.e. ['/', 'tmp', 'metagraphs'], defaults to ["~", ".bittensor", "metagraphs"]

      :returns: The metagraph instance after saving its state.
      :rtype: metagraph (bittensor.core.metagraph.Metagraph)

      .. admonition:: Example

         Save the current state of the metagraph to the default directory::
         
             metagraph.save()
         
         The saved state can later be loaded to restore or analyze the metagraph's state at this point.
         
         If using the default save path::
         
             metagraph.load()
         
         If using a custom save path::
         
             metagraph.load_from_path(dir_path)



   .. py:attribute:: stake
      :type:  Tensor


   .. py:method:: state_dict()


   .. py:attribute:: subtensor
      :type:  Optional[bittensor.core.async_subtensor.AsyncSubtensor]


   .. py:attribute:: total_stake
      :type:  Tensor


   .. py:attribute:: trust
      :type:  Tensor


   .. py:attribute:: uids
      :type:  Tensor


   .. py:attribute:: validator_permit
      :type:  Tensor


   .. py:attribute:: validator_trust
      :type:  Tensor


   .. py:attribute:: version
      :type:  Union[bittensor.utils.registration.torch.nn.Parameter, tuple[numpy.typing.NDArray]]


   .. py:attribute:: weights
      :type:  Tensor


.. py:class:: NonTorchMetagraph(netuid, network = settings.DEFAULT_NETWORK, lite = True, sync = True, subtensor = None)

   Bases: :py:obj:`MetagraphMixin`


   The metagraph class is a core component of the Bittensor network, representing the neural graph that forms the
   backbone of the decentralized machine learning system.

   The metagraph is a dynamic representation of the network's state, capturing the interconnectedness and attributes of
       neurons (participants) in the Bittensor ecosystem. This class is not just a static structure but a live
       reflection of the network, constantly updated and synchronized with the state of the blockchain.

   In Bittensor, neurons are akin to nodes in a distributed system, each contributing computational resources and
       participating in the network's collective intelligence. The metagraph tracks various attributes of these
       neurons, such as stake, trust, and consensus, which are crucial for the network's incentive mechanisms and the
       Yuma Consensus algorithm as outlined in the `NeurIPS paper
       <https://bittensor.com/pdfs/academia/NeurIPS_DAO_Workshop_2022_3_3.pdf>`_. These attributes govern how neurons
       interact, how they are incentivized, and their roles within the network's decision-making processes.

   :param netuid: A unique identifier that distinguishes between different instances or versions of the Bittensor network.
   :type netuid: int
   :param network: The name of the network, signifying specific configurations or iterations within the Bittensor ecosystem.
   :type network: str

   :ivar version: The version number of the network, integral for tracking network updates.
   :vartype version: NDArray
   :ivar n: The total number of neurons in the network, reflecting its size and complexity.
   :vartype n: NDArray
   :ivar block: The current block number in the blockchain, crucial for synchronizing with the network's latest state.
   :vartype block: NDArray
   :ivar stake: Represents the cryptocurrency staked by neurons, impacting their influence and earnings within the network.
   :ivar total_stake: The cumulative stake across all neurons.
   :ivar ranks: Neuron rankings as per the Yuma Consensus algorithm, influencing their incentive distribution and network authority.
   :ivar trust: Scores indicating the reliability of neurons, mainly miners, within the network's operational context.
   :ivar consensus: Scores reflecting each neuron's alignment with the network's collective decisions.
   :ivar validator_trust: Trust scores for validator neurons, crucial for network security and validation.
   :ivar incentive: Rewards allocated to neurons, particularly miners, for their network contributions.
   :ivar emission: The rate at which rewards are distributed to neurons.
   :ivar dividends: Rewards received primarily by validators as part of the incentive mechanism.
   :ivar active: Status indicating whether a neuron is actively participating in the network.
   :ivar last_update: Timestamp of the latest update to a neuron's data.
   :ivar validator_permit: Indicates if a neuron is authorized to act as a validator.
   :ivar weights: Inter-neuronal weights set by each neuron, influencing network dynamics.
   :ivar bonds: Represents speculative investments by neurons in others, part of the reward mechanism.
   :ivar uids: Unique identifiers for each neuron, essential for network operations.
   :ivar axons: Details about each neuron's axon, critical for facilitating network communication.

   :vartype axons: List

   The metagraph plays a pivotal role in Bittensor's decentralized AI operations, influencing everything from data
       propagation to reward distribution. It embodies the principles of decentralized governance and collaborative
       intelligence, ensuring that the network remains adaptive, secure, and efficient.

   .. admonition:: Example

      Initializing the metagraph to represent the current state of the Bittensor network::
      
          from bittensor.core.metagraph import Metagraph
          metagraph = Metagraph(netuid=config.netuid, network=subtensor.network, sync=False)
      
      Synchronizing the metagraph with the network to reflect the latest state and neuron data::
      
          metagraph.sync(subtensor=subtensor)
      
      Accessing metagraph properties to inform network interactions and decisions::
      
          total_stake = metagraph.S
          neuron_ranks = metagraph.R
          neuron_incentives = metagraph.I
          axons = metagraph.axons
          neurons = metagraph.neurons
      
      Maintaining a local copy of hotkeys for querying and interacting with network entities::
      
          hotkeys = deepcopy(metagraph.hotkeys)

   Initializes a new instance of the metagraph object, setting up the basic structure and parameters based on the
   provided arguments. This class doesn't require installed Torch. This method is the entry point for creating a
   metagraph object, which is a central component in representing the state of the Bittensor network.

   :param netuid: The unique identifier for the network, distinguishing this instance of the metagraph within
                  potentially multiple network configurations.
   :type netuid: int
   :param network: The name of the network, which can indicate specific configurations or versions of the
                   Bittensor network.
   :type network: str
   :param lite: A flag indicating whether to use a lite version of the metagraph. The lite version may contain
                less detailed information but can be quicker to initialize and sync.
   :type lite: bool
   :param sync: A flag indicating whether to synchronize the metagraph with the network upon initialization.
                Synchronization involves updating the metagraph's parameters to reflect the current state of the network.
   :type sync: bool

   .. admonition:: Example

      Initializing a metagraph object for the Bittensor network with a specific network UID::

          from bittensor.core.metagraph import Metagraph

          metagraph = Metagraph(netuid=123, network="finney", lite=True, sync=True)


   .. py:attribute:: active


   .. py:attribute:: axons
      :type:  list[bittensor.core.chain_data.AxonInfo]
      :value: []



   .. py:attribute:: block


   .. py:attribute:: bonds


   .. py:attribute:: consensus


   .. py:attribute:: dividends


   .. py:attribute:: emission


   .. py:attribute:: incentive


   .. py:attribute:: last_update


   .. py:method:: load_from_path(dir_path)

      Loads the state of the Metagraph from a specified directory path.

      :param dir_path: The directory path where the metagraph's state file is located.
      :type dir_path: str

      :returns:

                An instance of the Metagraph with the state
                    loaded from the file.
      :rtype: metagraph (:func:`bittensor.core.metagraph.AsyncMetagraph`)

      :raises pickle.UnpicklingError: If there is an error unpickling the state file.
      :raises RuntimeError: If there is an error loading the state file using PyTorch.
      :raises ImportError: If there is an error importing PyTorch.



   .. py:attribute:: n


   .. py:attribute:: netuid


   .. py:attribute:: neurons
      :value: []



   .. py:attribute:: ranks


   .. py:attribute:: should_sync
      :value: True



   .. py:attribute:: stake


   .. py:attribute:: subtensor
      :value: None



   .. py:attribute:: total_stake


   .. py:attribute:: trust


   .. py:attribute:: uids


   .. py:attribute:: validator_permit


   .. py:attribute:: validator_trust


   .. py:attribute:: version


   .. py:attribute:: weights


.. py:data:: NumpyOrTorch

.. py:data:: Tensor

.. py:class:: TorchMetagraph(netuid, network = settings.DEFAULT_NETWORK, lite = True, sync = True, subtensor = None)

   Bases: :py:obj:`MetagraphMixin`, :py:obj:`BaseClass`


   The metagraph class is a core component of the Bittensor network, representing the neural graph that forms the
   backbone of the decentralized machine learning system.

   The metagraph is a dynamic representation of the network's state, capturing the interconnectedness and attributes of
       neurons (participants) in the Bittensor ecosystem. This class is not just a static structure but a live
       reflection of the network, constantly updated and synchronized with the state of the blockchain.

   In Bittensor, neurons are akin to nodes in a distributed system, each contributing computational resources and
       participating in the network's collective intelligence. The metagraph tracks various attributes of these
       neurons, such as stake, trust, and consensus, which are crucial for the network's incentive mechanisms and the
       Yuma Consensus algorithm as outlined in the `NeurIPS paper
       <https://bittensor.com/pdfs/academia/NeurIPS_DAO_Workshop_2022_3_3.pdf>`_. These attributes govern how neurons
       interact, how they are incentivized, and their roles within the network's decision-making processes.

   :param netuid: A unique identifier that distinguishes between different instances or versions of the Bittensor network.
   :type netuid: int
   :param network: The name of the network, signifying specific configurations or iterations within the Bittensor ecosystem.
   :type network: str

   :ivar version: The version number of the network, integral for tracking network updates.
   :vartype version: NDArray
   :ivar n: The total number of neurons in the network, reflecting its size and complexity.
   :vartype n: NDArray
   :ivar block: The current block number in the blockchain, crucial for synchronizing with the network's latest state.
   :vartype block: NDArray
   :ivar stake: Represents the cryptocurrency staked by neurons, impacting their influence and earnings within the network.
   :ivar total_stake: The cumulative stake across all neurons.
   :ivar ranks: Neuron rankings as per the Yuma Consensus algorithm, influencing their incentive distribution and network authority.
   :ivar trust: Scores indicating the reliability of neurons, mainly miners, within the network's operational context.
   :ivar consensus: Scores reflecting each neuron's alignment with the network's collective decisions.
   :ivar validator_trust: Trust scores for validator neurons, crucial for network security and validation.
   :ivar incentive: Rewards allocated to neurons, particularly miners, for their network contributions.
   :ivar emission: The rate at which rewards are distributed to neurons.
   :ivar dividends: Rewards received primarily by validators as part of the incentive mechanism.
   :ivar active: Status indicating whether a neuron is actively participating in the network.
   :ivar last_update: Timestamp of the latest update to a neuron's data.
   :ivar validator_permit: Indicates if a neuron is authorized to act as a validator.
   :ivar weights: Inter-neuronal weights set by each neuron, influencing network dynamics.
   :ivar bonds: Represents speculative investments by neurons in others, part of the reward mechanism.
   :ivar uids: Unique identifiers for each neuron, essential for network operations.
   :ivar axons: Details about each neuron's axon, critical for facilitating network communication.

   :vartype axons: List

   The metagraph plays a pivotal role in Bittensor's decentralized AI operations, influencing everything from data
       propagation to reward distribution. It embodies the principles of decentralized governance and collaborative
       intelligence, ensuring that the network remains adaptive, secure, and efficient.

   .. admonition:: Example

      Initializing the metagraph to represent the current state of the Bittensor network::
      
          from bittensor.core.metagraph import Metagraph
          metagraph = Metagraph(netuid=config.netuid, network=subtensor.network, sync=False)
      
      Synchronizing the metagraph with the network to reflect the latest state and neuron data::
      
          metagraph.sync(subtensor=subtensor)
      
      Accessing metagraph properties to inform network interactions and decisions::
      
          total_stake = metagraph.S
          neuron_ranks = metagraph.R
          neuron_incentives = metagraph.I
          axons = metagraph.axons
          neurons = metagraph.neurons
      
      Maintaining a local copy of hotkeys for querying and interacting with network entities::
      
          hotkeys = deepcopy(metagraph.hotkeys)

   Initializes a new instance of the metagraph object, setting up the basic structure and parameters based on the
   provided arguments. This class requires Torch to be installed. This method is the entry point for creating a
   metagraph object, which is a central component in representing the state of the Bittensor network.

   :param netuid: The unique identifier for the network, distinguishing this instance of the metagraph within
                  potentially multiple network configurations.
   :type netuid: int
   :param network: The name of the network, which can indicate specific configurations or versions of the
                   Bittensor network.
   :type network: str
   :param lite: A flag indicating whether to use a lite version of the metagraph. The lite version may contain
                less detailed information but can be quicker to initialize and sync.
   :type lite: bool
   :param sync: A flag indicating whether to synchronize the metagraph with the network upon initialization.
                Synchronization involves updating the metagraph's parameters to reflect the current state of the network.
   :type sync: bool

   .. admonition:: Example

      Initializing a metagraph object for the Bittensor network with a specific network UID::

          from bittensor.core.metagraph import Metagraph

          metagraph = Metagraph(netuid=123, network="finney", lite=True, sync=True)


   .. py:attribute:: active


   .. py:attribute:: axons
      :type:  list[bittensor.core.chain_data.AxonInfo]
      :value: []



   .. py:attribute:: block
      :type:  bittensor.utils.registration.torch.nn.Parameter


   .. py:attribute:: bonds
      :type:  bittensor.utils.registration.torch.nn.Parameter


   .. py:attribute:: consensus
      :type:  bittensor.utils.registration.torch.nn.Parameter


   .. py:attribute:: dividends
      :type:  bittensor.utils.registration.torch.nn.Parameter


   .. py:attribute:: emission
      :type:  bittensor.utils.registration.torch.nn.Parameter


   .. py:attribute:: incentive
      :type:  bittensor.utils.registration.torch.nn.Parameter


   .. py:attribute:: last_update


   .. py:method:: load_from_path(dir_path)

      Loads the metagraph state from a specified directory path.

      :param dir_path: The directory path where the state file is located.
      :type dir_path: str

      :returns: The current metagraph instance with the loaded state.
      :rtype: metagraph (bittensor.core.metagraph.AsyncMetagraph)

      Example::

          from bittensor.core.metagraph import Metagraph

          netuid = 1
          metagraph = Metagraph(netuid=netuid)

          metagraph.load_from_path("/path/to/dir")




   .. py:attribute:: n
      :type:  bittensor.utils.registration.torch.nn.Parameter


   .. py:attribute:: netuid


   .. py:attribute:: neurons
      :value: []



   .. py:attribute:: ranks
      :type:  bittensor.utils.registration.torch.nn.Parameter


   .. py:attribute:: should_sync
      :value: True



   .. py:attribute:: stake


   .. py:attribute:: subtensor
      :value: None



   .. py:attribute:: total_stake
      :type:  bittensor.utils.registration.torch.nn.Parameter


   .. py:attribute:: trust
      :type:  bittensor.utils.registration.torch.nn.Parameter


   .. py:attribute:: uids


   .. py:attribute:: validator_permit


   .. py:attribute:: validator_trust
      :type:  bittensor.utils.registration.torch.nn.Parameter


   .. py:attribute:: version


   .. py:attribute:: weights
      :type:  bittensor.utils.registration.torch.nn.Parameter


.. py:function:: async_metagraph(netuid, network = settings.DEFAULT_NETWORK, lite = True, sync = True, subtensor = None)
   :async:


   Factory function to create an instantiated AsyncMetagraph, mainly for the ability to use sync at instantiation.


.. py:function:: determine_chain_endpoint_and_network(network)

   Determine the chain endpoint and network name from the passed arg

   :param network: The network name (e.g. 'finney', 'test') or
                   chain endpoint (e.g. wss://entrypoint-finney.opentensor.ai:443)

   :returns: (network name, chain endpoint)


.. py:function:: get_save_dir(network, netuid, root_dir = None)

   Returns a directory path given ``network`` and ``netuid`` inputs.

   :param network: Network name.
   :type network: str
   :param netuid: Network UID.
   :type netuid: int
   :param root_dir: list to the file path for the root directory of your metagraph saves (i.e. ['/', 'tmp', 'metagraphs'],
                    defaults to ["~", ".bittensor", "metagraphs"]

   :returns: Directory path.
   :rtype: str


.. py:function:: latest_block_path(dir_path)

   Get the latest block path from the provided directory path.

   :param dir_path: Directory path.
   :type dir_path: str

   :returns: Latest block path.
   :rtype: str


