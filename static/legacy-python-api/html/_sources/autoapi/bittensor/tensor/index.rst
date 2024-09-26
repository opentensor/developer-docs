bittensor.tensor
================

.. py:module:: bittensor.tensor


Attributes
----------

.. autoapisummary::

   bittensor.tensor.dtypes


Classes
-------

.. autoapisummary::

   bittensor.tensor.DTypes
   bittensor.tensor.tensor
   bittensor.tensor.Tensor


Functions
---------

.. autoapisummary::

   bittensor.tensor.cast_dtype
   bittensor.tensor.cast_shape


Module Contents
---------------

.. py:class:: DTypes(*args, **kwargs)

   Bases: :py:obj:`dict`


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


   .. py:attribute:: torch
      :type:  bool
      :value: False



   .. py:method:: __getitem__(key)

      Return self[key].



   .. py:method:: __contains__(key)

      True if the dictionary has the specified key, else False.



   .. py:method:: _add_torch()


.. py:data:: dtypes

.. py:function:: cast_dtype(raw)

   Casts the raw value to a string representing the
   `numpy data type <https://numpy.org/doc/stable/user/basics.types.html>`_, or the
   `torch data type <https://pytorch.org/docs/stable/tensor_attributes.html>`_ if using torch.

   :param raw: The raw value to cast.
   :type raw: Union[None, numpy.dtype, torch.dtype, str]

   :returns: The string representing the numpy/torch data type.
   :rtype: str

   :raises Exception: If the raw value is of an invalid type.


.. py:function:: cast_shape(raw)

   Casts the raw value to a string representing the tensor shape.

   :param raw: The raw value to cast.
   :type raw: Union[None, List[int], str]

   :returns: The string representing the tensor shape.
   :rtype: str

   :raises Exception: If the raw value is of an invalid type or if the list elements are not of type int.


.. py:class:: tensor

.. py:class:: Tensor(/, **data)

   Bases: :py:obj:`pydantic.BaseModel`


   Represents a Tensor object.

   :param buffer: Tensor buffer data.
   :type buffer: Optional[str]
   :param dtype: Tensor data type.
   :type dtype: str
   :param shape: Tensor shape.
   :type shape: List[int]

   Create a new model by parsing and validating input data from keyword arguments.

   Raises [`ValidationError`][pydantic_core.ValidationError] if the input data cannot be
   validated to form a valid model.

   `self` is explicitly positional-only to allow `self` as a field name.


   .. py:attribute:: model_config

      Configuration for the model, should be a dictionary conforming to [`ConfigDict`][pydantic.config.ConfigDict].


   .. py:method:: tensor()


   .. py:method:: tolist()


   .. py:method:: numpy()


   .. py:method:: deserialize()

      Deserializes the Tensor object.

      :returns: The deserialized tensor object.
      :rtype: np.array or torch.Tensor

      :raises Exception: If the deserialization process encounters an error.



   .. py:method:: serialize(tensor_)
      :staticmethod:


      Serializes the given tensor.

      :param tensor_: The tensor to serialize.
      :type tensor_: np.array or torch.Tensor

      :returns: The serialized tensor.
      :rtype: Tensor

      :raises Exception: If the serialization process encounters an error.



   .. py:attribute:: buffer
      :type:  Optional[str]


   .. py:attribute:: dtype
      :type:  str


   .. py:attribute:: shape
      :type:  List[int]


   .. py:attribute:: _extract_shape


   .. py:attribute:: _extract_dtype


