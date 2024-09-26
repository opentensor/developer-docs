bittensor.utils.version
=======================

.. py:module:: bittensor.utils.version


Attributes
----------

.. autoapisummary::

   bittensor.utils.version.VERSION_CHECK_THRESHOLD


Exceptions
----------

.. autoapisummary::

   bittensor.utils.version.VersionCheckError


Functions
---------

.. autoapisummary::

   bittensor.utils.version._get_version_file_path
   bittensor.utils.version._get_version_from_file
   bittensor.utils.version._get_version_from_pypi
   bittensor.utils.version.get_and_save_latest_version
   bittensor.utils.version.check_version
   bittensor.utils.version.version_checking


Module Contents
---------------

.. py:data:: VERSION_CHECK_THRESHOLD
   :value: 86400


.. py:exception:: VersionCheckError

   Bases: :py:obj:`Exception`


   Common base class for all non-exit exceptions.

   Initialize self.  See help(type(self)) for accurate signature.


.. py:function:: _get_version_file_path()

.. py:function:: _get_version_from_file(version_file)

.. py:function:: _get_version_from_pypi(timeout = 15)

.. py:function:: get_and_save_latest_version(timeout = 15)

.. py:function:: check_version(timeout = 15)

   Check if the current version of Bittensor is up to date with the latest version on PyPi.
   Raises a VersionCheckError if the version check fails.


.. py:function:: version_checking(timeout = 15)

   Deprecated, kept for backwards compatibility. Use check_version() instead.


