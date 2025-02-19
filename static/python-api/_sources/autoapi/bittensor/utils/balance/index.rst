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
   :vartype unit: str
   :ivar rao_unit: A string representing the symbol for the rao unit.
   :vartype rao_unit: str
   :ivar rao: An integer that stores the balance in rao units.
   :vartype rao: int
   :ivar tao: A float property that gives the balance in tao units.

   :vartype tao: float

   Initialize a Balance object. If balance is an int, it's assumed to be in rao.
   If balance is a float, it's assumed to be in tao.

   :param balance: The initial balance, in either rao (if an int) or tao (if a float).


   .. py:method:: from_float(amount)
      :staticmethod:


      Given tao, return :func:`Balance` object with rao(``int``) and tao(``float``), where rao = int(tao*pow(10,9))
      :param amount: The amount in tao.
      :type amount: float

      :returns: A Balance object representing the given amount.



   .. py:method:: from_rao(amount)
      :staticmethod:


      Given rao, return Balance object with rao(``int``) and tao(``float``), where rao = int(tao*pow(10,9))

      :param amount: The amount in rao.
      :type amount: int

      :returns: A Balance object representing the given amount.



   .. py:method:: from_tao(amount)
      :staticmethod:


      Given tao, return Balance object with rao(``int``) and tao(``float``), where rao = int(tao*pow(10,9))

      :param amount: The amount in tao.
      :type amount: float

      :returns: A Balance object representing the given amount.



   .. py:attribute:: rao
      :type:  int


   .. py:attribute:: rao_unit
      :type:  str


   .. py:property:: tao


   .. py:attribute:: unit
      :type:  str


