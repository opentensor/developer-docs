bittensor.core.chain_data.proposal_vote_data
============================================

.. py:module:: bittensor.core.chain_data.proposal_vote_data


Classes
-------

.. autoapisummary::

   bittensor.core.chain_data.proposal_vote_data.ProposalVoteData


Module Contents
---------------

.. py:class:: ProposalVoteData

   Bases: :py:obj:`TypedDict`


   This TypedDict represents the data structure for a proposal vote in the Senate.

   :ivar index: The index of the proposal.
   :vartype index: int
   :ivar threshold: The threshold required for the proposal to pass.
   :vartype threshold: int
   :ivar ayes: List of senators who voted 'aye'.
   :vartype ayes: List[str]
   :ivar nays: List of senators who voted 'nay'.
   :vartype nays: List[str]
   :ivar end: The ending timestamp of the voting period.

   :vartype end: int

   Initialize self.  See help(type(self)) for accurate signature.


   .. py:attribute:: index
      :type:  int


   .. py:attribute:: threshold
      :type:  int


   .. py:attribute:: ayes
      :type:  list[str]


   .. py:attribute:: nays
      :type:  list[str]


   .. py:attribute:: end
      :type:  int


