bittensor.core.errors
=====================

.. py:module:: bittensor.core.errors


Exceptions
----------

.. autoapisummary::

   bittensor.core.errors.ChainError
   bittensor.core.errors.ChainConnectionError
   bittensor.core.errors.ChainTransactionError
   bittensor.core.errors.ChainQueryError
   bittensor.core.errors.StakeError
   bittensor.core.errors.UnstakeError
   bittensor.core.errors.IdentityError
   bittensor.core.errors.NominationError
   bittensor.core.errors.TakeError
   bittensor.core.errors.TransferError
   bittensor.core.errors.RegistrationError
   bittensor.core.errors.NotRegisteredError
   bittensor.core.errors.NotDelegateError
   bittensor.core.errors.MetadataError
   bittensor.core.errors.InvalidRequestNameError
   bittensor.core.errors.SynapseException
   bittensor.core.errors.UnknownSynapseError
   bittensor.core.errors.SynapseParsingError
   bittensor.core.errors.NotVerifiedException
   bittensor.core.errors.BlacklistedException
   bittensor.core.errors.PriorityException
   bittensor.core.errors.PostProcessException
   bittensor.core.errors.RunException
   bittensor.core.errors.InternalServerError
   bittensor.core.errors.SynapseDendriteNoneException


Module Contents
---------------

.. py:exception:: ChainError

   Bases: :py:obj:`BaseException`


   Base error for any chain related errors.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: ChainConnectionError

   Bases: :py:obj:`ChainError`


   Error for any chain connection related errors.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: ChainTransactionError

   Bases: :py:obj:`ChainError`


   Error for any chain transaction related errors.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: ChainQueryError

   Bases: :py:obj:`ChainError`


   Error for any chain query related errors.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: StakeError

   Bases: :py:obj:`ChainTransactionError`


   Error raised when a stake transaction fails.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: UnstakeError

   Bases: :py:obj:`ChainTransactionError`


   Error raised when an unstake transaction fails.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: IdentityError

   Bases: :py:obj:`ChainTransactionError`


   Error raised when an identity transaction fails.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: NominationError

   Bases: :py:obj:`ChainTransactionError`


   Error raised when a nomination transaction fails.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: TakeError

   Bases: :py:obj:`ChainTransactionError`


   Error raised when an increase / decrease take transaction fails.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: TransferError

   Bases: :py:obj:`ChainTransactionError`


   Error raised when a transfer transaction fails.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: RegistrationError

   Bases: :py:obj:`ChainTransactionError`


   Error raised when a neuron registration transaction fails.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: NotRegisteredError

   Bases: :py:obj:`ChainTransactionError`


   Error raised when a neuron is not registered, and the transaction requires it to be.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: NotDelegateError

   Bases: :py:obj:`StakeError`


   Error raised when a hotkey you are trying to stake to is not a delegate.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: MetadataError

   Bases: :py:obj:`ChainTransactionError`


   Error raised when metadata commitment transaction fails.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: InvalidRequestNameError

   Bases: :py:obj:`Exception`


   This exception is raised when the request name is invalid. Usually indicates a broken URL.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: SynapseException(message='Synapse Exception', synapse = None)

   Bases: :py:obj:`Exception`


   Common base class for all non-exit exceptions.

   Initialize self.  See help(type(self)) for accurate signature.


   .. py:attribute:: message


   .. py:attribute:: synapse


.. py:exception:: UnknownSynapseError(message='Synapse Exception', synapse = None)

   Bases: :py:obj:`SynapseException`


   This exception is raised when the request name is not found in the Axon's forward_fns dictionary.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: SynapseParsingError

   Bases: :py:obj:`Exception`


   This exception is raised when the request headers are unable to be parsed into the synapse type.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: NotVerifiedException(message='Synapse Exception', synapse = None)

   Bases: :py:obj:`SynapseException`


   This exception is raised when the request is not verified.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: BlacklistedException(message='Synapse Exception', synapse = None)

   Bases: :py:obj:`SynapseException`


   This exception is raised when the request is blacklisted.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: PriorityException(message='Synapse Exception', synapse = None)

   Bases: :py:obj:`SynapseException`


   This exception is raised when the request priority is not met.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: PostProcessException(message='Synapse Exception', synapse = None)

   Bases: :py:obj:`SynapseException`


   This exception is raised when the response headers cannot be updated.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: RunException(message='Synapse Exception', synapse = None)

   Bases: :py:obj:`SynapseException`


   This exception is raised when the requested function cannot be executed. Indicates a server error.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: InternalServerError(message='Synapse Exception', synapse = None)

   Bases: :py:obj:`SynapseException`


   This exception is raised when the requested function fails on the server. Indicates a server error.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:exception:: SynapseDendriteNoneException(message='Synapse Dendrite is None', synapse = None)

   Bases: :py:obj:`SynapseException`


   Common base class for all non-exit exceptions.

   Initialize self.  See help(type(self)) for accurate signature.


   .. py:attribute:: message


