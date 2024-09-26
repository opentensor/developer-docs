bittensor.utils.balance
=======================

.. py:module:: bittensor.utils.balance


Classes
-------

.. autoapisummary::

   bittensor.utils.balance.Balance


Module Contents
---------------

.. py:class:: Balance(balance)

   Represents the bittensor balance of the wallet, stored as rao (int).
   This class provides a way to interact with balances in two different units: rao and tao.
   It provides methods to convert between these units, as well as to perform arithmetic and comparison operations.

   :ivar unit: A string representing the symbol for the tao unit.
   :ivar rao_unit: A string representing the symbol for the rao unit.
   :ivar rao: An integer that stores the balance in rao units.
   :ivar tao: A float property that gives the balance in tao units.


   Initialize a Balance object. If balance is an int, it's assumed to be in rao.
   If balance is a float, it's assumed to be in tao.

   :param balance: The initial balance, in either rao (if an int) or tao (if a float).


   .. py:attribute:: unit
      :type:  str


   .. py:attribute:: rao_unit
      :type:  str


   .. py:attribute:: rao
      :type:  int


   .. py:property:: tao


   .. py:method:: __int__()

      Convert the Balance object to an int. The resulting value is in rao.



   .. py:method:: __float__()

      Convert the Balance object to a float. The resulting value is in tao.



   .. py:method:: __str__()

      Returns the Balance object as a string in the format "symbolvalue", where the value is in tao.



   .. py:method:: __rich__()


   .. py:method:: __str_rao__()


   .. py:method:: __rich_rao__()


   .. py:method:: __repr__()


   .. py:method:: __eq__(other)


   .. py:method:: __ne__(other)


   .. py:method:: __gt__(other)


   .. py:method:: __lt__(other)


   .. py:method:: __le__(other)


   .. py:method:: __ge__(other)


   .. py:method:: __add__(other)


   .. py:method:: __radd__(other)


   .. py:method:: __sub__(other)


   .. py:method:: __rsub__(other)


   .. py:method:: __mul__(other)


   .. py:method:: __rmul__(other)


   .. py:method:: __truediv__(other)


   .. py:method:: __rtruediv__(other)


   .. py:method:: __floordiv__(other)


   .. py:method:: __rfloordiv__(other)


   .. py:method:: __nonzero__()


   .. py:method:: __neg__()


   .. py:method:: __pos__()


   .. py:method:: __abs__()


   .. py:method:: from_float(amount)
      :staticmethod:


      Given tao (float), return Balance object with rao(int) and tao(float), where rao = int(tao*pow(10,9))
      :param amount: The amount in tao.

      :returns: A Balance object representing the given amount.



   .. py:method:: from_tao(amount)
      :staticmethod:


      Given tao (float), return Balance object with rao(int) and tao(float), where rao = int(tao*pow(10,9))

      :param amount: The amount in tao.

      :returns: A Balance object representing the given amount.



   .. py:method:: from_rao(amount)
      :staticmethod:


      Given rao (int), return Balance object with rao(int) and tao(float), where rao = int(tao*pow(10,9))

      :param amount: The amount in rao.

      :returns: A Balance object representing the given amount.



