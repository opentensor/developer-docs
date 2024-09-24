bittensor.core.chain_data.subnet_hyperparameters
================================================

.. py:module:: bittensor.core.chain_data.subnet_hyperparameters


Classes
-------

.. autoapisummary::

   bittensor.core.chain_data.subnet_hyperparameters.SubnetHyperparameters


Module Contents
---------------

.. py:class:: SubnetHyperparameters

   This class represents the hyperparameters for a subnet.

   :ivar rho: The rate of decay of some value.
   :vartype rho: int
   :ivar kappa: A constant multiplier used in calculations.
   :vartype kappa: int
   :ivar immunity_period: The period during which immunity is active.
   :vartype immunity_period: int
   :ivar min_allowed_weights: Minimum allowed weights.
   :vartype min_allowed_weights: int
   :ivar max_weight_limit: Maximum weight limit.
   :vartype max_weight_limit: float
   :ivar tempo: The tempo or rate of operation.
   :vartype tempo: int
   :ivar min_difficulty: Minimum difficulty for some operations.
   :vartype min_difficulty: int
   :ivar max_difficulty: Maximum difficulty for some operations.
   :vartype max_difficulty: int
   :ivar weights_version: The version number of the weights used.
   :vartype weights_version: int
   :ivar weights_rate_limit: Rate limit for processing weights.
   :vartype weights_rate_limit: int
   :ivar adjustment_interval: Interval at which adjustments are made.
   :vartype adjustment_interval: int
   :ivar activity_cutoff: Activity cutoff threshold.
   :vartype activity_cutoff: int
   :ivar registration_allowed: Indicates if registration is allowed.
   :vartype registration_allowed: bool
   :ivar target_regs_per_interval: Target number of registrations per interval.
   :vartype target_regs_per_interval: int
   :ivar min_burn: Minimum burn value.
   :vartype min_burn: int
   :ivar max_burn: Maximum burn value.
   :vartype max_burn: int
   :ivar bonds_moving_avg: Moving average of bonds.
   :vartype bonds_moving_avg: int
   :ivar max_regs_per_block: Maximum number of registrations per block.
   :vartype max_regs_per_block: int
   :ivar serving_rate_limit: Limit on the rate of service.
   :vartype serving_rate_limit: int
   :ivar max_validators: Maximum number of validators.
   :vartype max_validators: int
   :ivar adjustment_alpha: Alpha value for adjustments.
   :vartype adjustment_alpha: int
   :ivar difficulty: Difficulty level.
   :vartype difficulty: int
   :ivar commit_reveal_weights_interval: Interval for commit-reveal weights.
   :vartype commit_reveal_weights_interval: int
   :ivar commit_reveal_weights_enabled: Flag indicating if commit-reveal weights are enabled.
   :vartype commit_reveal_weights_enabled: bool
   :ivar alpha_high: High value of alpha.
   :vartype alpha_high: int
   :ivar alpha_low: Low value of alpha.
   :vartype alpha_low: int
   :ivar liquid_alpha_enabled: Flag indicating if liquid alpha is enabled.

   :vartype liquid_alpha_enabled: bool


   .. py:attribute:: rho
      :type:  int


   .. py:attribute:: kappa
      :type:  int


   .. py:attribute:: immunity_period
      :type:  int


   .. py:attribute:: min_allowed_weights
      :type:  int


   .. py:attribute:: max_weight_limit
      :type:  float


   .. py:attribute:: tempo
      :type:  int


   .. py:attribute:: min_difficulty
      :type:  int


   .. py:attribute:: max_difficulty
      :type:  int


   .. py:attribute:: weights_version
      :type:  int


   .. py:attribute:: weights_rate_limit
      :type:  int


   .. py:attribute:: adjustment_interval
      :type:  int


   .. py:attribute:: activity_cutoff
      :type:  int


   .. py:attribute:: registration_allowed
      :type:  bool


   .. py:attribute:: target_regs_per_interval
      :type:  int


   .. py:attribute:: min_burn
      :type:  int


   .. py:attribute:: max_burn
      :type:  int


   .. py:attribute:: bonds_moving_avg
      :type:  int


   .. py:attribute:: max_regs_per_block
      :type:  int


   .. py:attribute:: serving_rate_limit
      :type:  int


   .. py:attribute:: max_validators
      :type:  int


   .. py:attribute:: adjustment_alpha
      :type:  int


   .. py:attribute:: difficulty
      :type:  int


   .. py:attribute:: commit_reveal_weights_interval
      :type:  int


   .. py:attribute:: commit_reveal_weights_enabled
      :type:  bool


   .. py:attribute:: alpha_high
      :type:  int


   .. py:attribute:: alpha_low
      :type:  int


   .. py:attribute:: liquid_alpha_enabled
      :type:  bool


   .. py:method:: from_vec_u8(vec_u8)
      :classmethod:


      Create a `SubnetHyperparameters` instance from a vector of bytes.

      This method decodes the given vector of bytes using the `bt_decode` module and creates a new instance of `SubnetHyperparameters` with the decoded values.

      :param vec_u8: A vector of bytes to decode into `SubnetHyperparameters`.
      :type vec_u8: bytes

      :returns: An instance of `SubnetHyperparameters` if decoding is successful, None otherwise.
      :rtype: Optional[SubnetHyperparameters]



