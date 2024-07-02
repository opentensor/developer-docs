:py:mod:`bittensor.tensor`
==========================

.. py:module:: bittensor.tensor


Module Contents
---------------

Classes
~~~~~~~

.. autoapisummary::

   bittensor.tensor.Tensor
   bittensor.tensor.tensor



Functions
~~~~~~~~~

.. autoapisummary::

   bittensor.tensor.cast_dtype
   bittensor.tensor.cast_shape



Attributes
~~~~~~~~~~

.. autoapisummary::

   bittensor.tensor.NUMPY_DTYPES
   bittensor.tensor.TORCH_DTYPES


.. py:data:: NUMPY_DTYPES

   

.. py:data:: TORCH_DTYPES

   

.. py:class:: Tensor(**data: Any)


   Bases: :py:obj:`pydantic.BaseModel`

   Represents a Tensor object.

   :param buffer: Tensor buffer data.
   :type buffer: Optional[str]
   :param dtype: Tensor data type.
   :type dtype: str
   :param shape: Tensor shape.
   :type shape: List[int]

   Create a new model by parsing and validating input data from keyword arguments.

   Raises ValidationError if the input data cannot be parsed to form a valid model.

   .. py:attribute:: _extract_dtype

      

   .. py:attribute:: _extract_shape

      

   .. py:attribute:: buffer
      :type: Optional[str]

      

   .. py:attribute:: dtype
      :type: str

      

   .. py:attribute:: model_config

      

   .. py:attribute:: shape
      :type: List[int]

      

   .. py:method:: deserialize() -> Union[numpy.ndarray, bittensor.utils.registration.torch.Tensor]

      Deserializes the Tensor object.

      :returns: The deserialized tensor object.
      :rtype: np.array or torch.Tensor

      :raises Exception: If the deserialization process encounters an error.


   .. py:method:: numpy() -> numpy.ndarray


   .. py:method:: serialize(tensor: Union[numpy.ndarray, bittensor.utils.registration.torch.Tensor]) -> Tensor
      :staticmethod:

      Serializes the given tensor.

      :param tensor: The tensor to serialize.
      :type tensor: np.array or torch.Tensor

      :returns: The serialized tensor.
      :rtype: Tensor

      :raises Exception: If the serialization process encounters an error.


   .. py:method:: tensor() -> Union[numpy.ndarray, bittensor.utils.registration.torch.Tensor]


   .. py:method:: tolist() -> List[object]



.. py:function:: cast_dtype(raw: Union[None, numpy.dtype, bittensor.utils.registration.torch.dtype, str]) -> str

   Casts the raw value to a string representing the
   `numpy data type <https://numpy.org/doc/stable/user/basics.types.html>`_, or the
   `torch data type <https://pytorch.org/docs/stable/tensor_attributes.html>`_ if using torch.

   :param raw: The raw value to cast.
   :type raw: Union[None, numpy.dtype, torch.dtype, str]

   :returns: The string representing the numpy/torch data type.
   :rtype: str

   :raises Exception: If the raw value is of an invalid type.


.. py:function:: cast_shape(raw: Union[None, List[int], str]) -> str

   Casts the raw value to a string representing the tensor shape.

   :param raw: The raw value to cast.
   :type raw: Union[None, List[int], str]

   :returns: The string representing the tensor shape.
   :rtype: str

   :raises Exception: If the raw value is of an invalid type or if the list elements are not of type int.


.. py:class:: tensor



