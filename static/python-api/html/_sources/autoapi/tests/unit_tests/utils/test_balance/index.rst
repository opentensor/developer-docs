tests.unit_tests.utils.test_balance
===================================

.. py:module:: tests.unit_tests.utils.test_balance

.. autoapi-nested-parse::

   Test the Balance class.



Attributes
----------

.. autoapisummary::

   tests.unit_tests.utils.test_balance.valid_tao_numbers_strategy


Functions
---------

.. autoapisummary::

   tests.unit_tests.utils.test_balance.remove_zero_filter
   tests.unit_tests.utils.test_balance.test_balance_add
   tests.unit_tests.utils.test_balance.test_balance_add_invalid_type
   tests.unit_tests.utils.test_balance.test_balance_add_other_not_balance
   tests.unit_tests.utils.test_balance.test_balance_div_invalid_type
   tests.unit_tests.utils.test_balance.test_balance_eq_invalid_type
   tests.unit_tests.utils.test_balance.test_balance_eq_other_not_balance
   tests.unit_tests.utils.test_balance.test_balance_floordiv
   tests.unit_tests.utils.test_balance.test_balance_floordiv_other_not_balance
   tests.unit_tests.utils.test_balance.test_balance_init
   tests.unit_tests.utils.test_balance.test_balance_init_from_invalid_value
   tests.unit_tests.utils.test_balance.test_balance_mul
   tests.unit_tests.utils.test_balance.test_balance_mul_invalid_type
   tests.unit_tests.utils.test_balance.test_balance_mul_other_not_balance
   tests.unit_tests.utils.test_balance.test_balance_neq_none
   tests.unit_tests.utils.test_balance.test_balance_not_eq_none
   tests.unit_tests.utils.test_balance.test_balance_radd_other_not_balance
   tests.unit_tests.utils.test_balance.test_balance_rfloordiv_other_not_balance
   tests.unit_tests.utils.test_balance.test_balance_rmul_other_not_balance
   tests.unit_tests.utils.test_balance.test_balance_rsub_other_not_balance
   tests.unit_tests.utils.test_balance.test_balance_rtruediv_other_not_balance
   tests.unit_tests.utils.test_balance.test_balance_sub
   tests.unit_tests.utils.test_balance.test_balance_sub_invalid_type
   tests.unit_tests.utils.test_balance.test_balance_sub_other_not_balance
   tests.unit_tests.utils.test_balance.test_balance_truediv
   tests.unit_tests.utils.test_balance.test_balance_truediv_other_not_balance
   tests.unit_tests.utils.test_balance.test_from_float
   tests.unit_tests.utils.test_balance.test_from_rao


Module Contents
---------------

.. py:function:: remove_zero_filter(x)

   Remove zero and rounded to zero from the list of valid numbers


.. py:function:: test_balance_add(balance, balance2)

   Test the addition of two Balance objects.


.. py:function:: test_balance_add_invalid_type(balance)

   Test the addition of a Balance object with an invalid type.


.. py:function:: test_balance_add_other_not_balance(balance, balance2)

   Test the addition of a Balance object and a non-Balance object.


.. py:function:: test_balance_div_invalid_type(balance)

   Test the division of a Balance object with an invalid type.


.. py:function:: test_balance_eq_invalid_type(balance)

   Test the equality of a Balance object with an invalid type.


.. py:function:: test_balance_eq_other_not_balance(balance)

   Test the equality of a Balance object and a non-Balance object.


.. py:function:: test_balance_floordiv(balance, balance2)

   Test the floor division (//) of two Balance objects.


.. py:function:: test_balance_floordiv_other_not_balance(balance, balance2)

   Test the floor division (//) of a Balance object and a non-Balance object.


.. py:function:: test_balance_init(balance)

   Test the initialization of the Balance object.


.. py:function:: test_balance_init_from_invalid_value()

   Test the initialization of a Balance object with an invalid value.


.. py:function:: test_balance_mul(balance, balance2)

   Test the multiplication of two Balance objects.


.. py:function:: test_balance_mul_invalid_type(balance)

   Test the multiplication of a Balance object with an invalid type.


.. py:function:: test_balance_mul_other_not_balance(balance, balance2)

   Test the multiplication of a Balance object and a non-Balance object.


.. py:function:: test_balance_neq_none(balance)

   Test the inequality (!=) of a Balance object and None.


.. py:function:: test_balance_not_eq_none(balance)

   Test the inequality (!=) of a Balance object and None.


.. py:function:: test_balance_radd_other_not_balance(balance, balance2)

   Test the right addition (radd) of a Balance object and a non-Balance object.


.. py:function:: test_balance_rfloordiv_other_not_balance(balance, balance2)

   Test the right floor division (rfloordiv) of a Balance object and a non-Balance object.


.. py:function:: test_balance_rmul_other_not_balance(balance, balance2)

   Test the right multiplication (rmul) of a Balance object and a non-Balance object.


.. py:function:: test_balance_rsub_other_not_balance(balance, balance2)

   Test the right subtraction (rsub) of a Balance object and a non-Balance object.


.. py:function:: test_balance_rtruediv_other_not_balance(balance, balance2)

   Test the right true division (rtruediv) of a Balance object and a non-Balance object.


.. py:function:: test_balance_sub(balance, balance2)

   Test the subtraction of two Balance objects.


.. py:function:: test_balance_sub_invalid_type(balance)

   Test the subtraction of a Balance object with an invalid type.


.. py:function:: test_balance_sub_other_not_balance(balance, balance2)

   Test the subtraction of a Balance object and a non-Balance object.


.. py:function:: test_balance_truediv(balance, balance2)

   Test the true division (/) of two Balance objects.


.. py:function:: test_balance_truediv_other_not_balance(balance, balance2)

   Test the true division (/) of a Balance object and a non-Balance object.


.. py:function:: test_from_float()

   Tests from_float method call.


.. py:function:: test_from_rao()

   Tests from_rao method call.


.. py:data:: valid_tao_numbers_strategy

