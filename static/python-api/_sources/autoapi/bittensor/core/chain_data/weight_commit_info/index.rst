bittensor.core.chain_data.weight_commit_info
============================================

.. py:module:: bittensor.core.chain_data.weight_commit_info


Classes
-------

.. autoapisummary::

   bittensor.core.chain_data.weight_commit_info.WeightCommitInfo


Module Contents
---------------

.. py:class:: WeightCommitInfo

   Data class representing weight commit information.

   :ivar ss58: The SS58 address of the committer
   :vartype ss58: str
   :ivar commit_hex: The serialized weight commit data as hex string
   :vartype commit_hex: str
   :ivar reveal_round: The round number for reveal

   :vartype reveal_round: int


   .. py:attribute:: commit_hex
      :type:  str


   .. py:method:: from_vec_u8(data)
      :classmethod:


      Creates a WeightCommitInfo instance

      :param data: Tuple containing ((AccountId,), (commit_data,), round_number)
      :type data: tuple

      :returns: A new instance with the decoded data
      :rtype: WeightCommitInfo



   .. py:attribute:: reveal_round
      :type:  int


   .. py:attribute:: ss58
      :type:  str


