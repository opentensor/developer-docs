bittensor.core.errors
=====================

.. py:module:: bittensor.core.errors


Attributes
----------

.. autoapisummary::

   bittensor.core.errors.BlockNotFound
   bittensor.core.errors.ExtrinsicNotFound
   bittensor.core.errors.StorageFunctionNotFound
   bittensor.core.errors.SubstrateRequestException


Exceptions
----------

.. autoapisummary::

   bittensor.core.errors.BlacklistedException
   bittensor.core.errors.InternalServerError
   bittensor.core.errors.InvalidRequestNameError
   bittensor.core.errors.MaxAttemptsException
   bittensor.core.errors.MaxSuccessException
   bittensor.core.errors.NotVerifiedException
   bittensor.core.errors.PostProcessException
   bittensor.core.errors.PriorityException
   bittensor.core.errors.RunException
   bittensor.core.errors.SynapseDendriteNoneException
   bittensor.core.errors.SynapseException
   bittensor.core.errors.SynapseParsingError
   bittensor.core.errors.UnknownSynapseError


Classes
-------

.. autoapisummary::

   bittensor.core.errors.ChainConnectionError
   bittensor.core.errors.ChainError
   bittensor.core.errors.ChainQueryError
   bittensor.core.errors.ChainTransactionError
   bittensor.core.errors.IdentityError
   bittensor.core.errors.MetadataError
   bittensor.core.errors.NominationError
   bittensor.core.errors.NotDelegateError
   bittensor.core.errors.NotRegisteredError
   bittensor.core.errors.RegistrationError
   bittensor.core.errors.StakeError
   bittensor.core.errors.TakeError
   bittensor.core.errors.TransferError
   bittensor.core.errors.UnstakeError


Module Contents
---------------

.. py:exception:: BlacklistedException(message='Synapse Exception', synapse = None)

   Bases: :py:obj:`SynapseException`


   This exception is raised when the request is blacklisted.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:data:: BlockNotFound

.. py:class:: ChainConnectionError

   Bases: :py:obj:`ChainError`


   Error for any chain connection related errors.


.. py:class:: ChainError

   Bases: :py:obj:`SubstrateRequestException`


   Base error for any chain related errors.


.. py:class:: ChainQueryError

   Bases: :py:obj:`ChainError`


   Error for any chain query related errors.


.. py:class:: ChainTransactionError

   Bases: :py:obj:`ChainError`


   Error for any chain transaction related errors.


.. py:data:: ExtrinsicNotFound

.. py:class:: IdentityError

   Bases: :py:obj:`ChainTransactionError`


   Error raised when an identity transaction fails.


.. py:exception:: InternalServerError(message='Synapse Exception', synapse = None)

   Bases: :py:obj:`SynapseException`


   This exception is raised when the requested function fails on the server. Indicates a server error.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: InvalidRequestNameError

   Bases: :py:obj:`Exception`


   This exception is raised when the request name is invalid. Usually indicates a broken URL.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: MaxAttemptsException

   Bases: :py:obj:`Exception`


   Raised when the POW Solver has reached the max number of attempts.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: MaxSuccessException

   Bases: :py:obj:`Exception`


   Raised when the POW Solver has reached the max number of successful solutions.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:class:: MetadataError

   Bases: :py:obj:`ChainTransactionError`


   Error raised when metadata commitment transaction fails.


.. py:class:: NominationError

   Bases: :py:obj:`ChainTransactionError`


   Error raised when a nomination transaction fails.


.. py:class:: NotDelegateError

   Bases: :py:obj:`StakeError`


   Error raised when a hotkey you are trying to stake to is not a delegate.


.. py:class:: NotRegisteredError

   Bases: :py:obj:`ChainTransactionError`


   Error raised when a neuron is not registered, and the transaction requires it to be.


.. py:exception:: NotVerifiedException(message='Synapse Exception', synapse = None)

   Bases: :py:obj:`SynapseException`


   This exception is raised when the request is not verified.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: PostProcessException(message='Synapse Exception', synapse = None)

   Bases: :py:obj:`SynapseException`


   This exception is raised when the response headers cannot be updated.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: PriorityException(message='Synapse Exception', synapse = None)

   Bases: :py:obj:`SynapseException`


   This exception is raised when the request priority is not met.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:class:: RegistrationError

   Bases: :py:obj:`ChainTransactionError`


   Error raised when a neuron registration transaction fails.


.. py:exception:: RunException(message='Synapse Exception', synapse = None)

   Bases: :py:obj:`SynapseException`


   This exception is raised when the requested function cannot be executed. Indicates a server error.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:class:: StakeError

   Bases: :py:obj:`ChainTransactionError`


   Error raised when a stake transaction fails.


.. py:data:: StorageFunctionNotFound

.. py:data:: SubstrateRequestException

.. py:exception:: SynapseDendriteNoneException(message='Synapse Dendrite is None', synapse = None)

   Bases: :py:obj:`SynapseException`


   Common base class for all non-exit exceptions.

   Initialize self.  See help(type(self)) for accurate signature.


   .. py:attribute:: message
      :value: 'Synapse Dendrite is None'



.. py:exception:: SynapseException(message='Synapse Exception', synapse = None)

   Bases: :py:obj:`Exception`


   Common base class for all non-exit exceptions.

   Initialize self.  See help(type(self)) for accurate signature.


   .. py:attribute:: message
      :value: 'Synapse Exception'



   .. py:attribute:: synapse
      :value: None



.. py:exception:: SynapseParsingError

   Bases: :py:obj:`Exception`


   This exception is raised when the request headers are unable to be parsed into the synapse type.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:class:: TakeError

   Bases: :py:obj:`ChainTransactionError`


   Error raised when an increase / decrease take transaction fails.


.. py:class:: TransferError

   Bases: :py:obj:`ChainTransactionError`


   Error raised when a transfer transaction fails.


.. py:exception:: UnknownSynapseError(message='Synapse Exception', synapse = None)

   Bases: :py:obj:`SynapseException`


   This exception is raised when the request name is not found in the Axon's forward_fns dictionary.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:class:: UnstakeError

   Bases: :py:obj:`ChainTransactionError`


   Error raised when an unstake transaction fails.


