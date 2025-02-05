tests.unit_tests.utils.test_version
===================================

.. py:module:: tests.unit_tests.utils.test_version


Functions
---------

.. autoapisummary::

   tests.unit_tests.utils.test_version.mock_get_version_from_pypi
   tests.unit_tests.utils.test_version.pypi_version
   tests.unit_tests.utils.test_version.test_check_version_newer_available
   tests.unit_tests.utils.test_version.test_check_version_up_to_date
   tests.unit_tests.utils.test_version.test_get_and_save_latest_version_file_expired_check
   tests.unit_tests.utils.test_version.test_get_and_save_latest_version_file_fresh_check
   tests.unit_tests.utils.test_version.test_get_and_save_latest_version_no_file
   tests.unit_tests.utils.test_version.test_version_checking
   tests.unit_tests.utils.test_version.test_version_checking_exception
   tests.unit_tests.utils.test_version.version_file_path


Module Contents
---------------

.. py:function:: mock_get_version_from_pypi(mocker, pypi_version)

.. py:function:: pypi_version()

.. py:function:: test_check_version_newer_available(mocker, current_version, latest_version, capsys)

.. py:function:: test_check_version_up_to_date(mocker, current_version, latest_version, capsys)

.. py:function:: test_get_and_save_latest_version_file_expired_check(mock_get_version_from_pypi, version_file_path, pypi_version)

.. py:function:: test_get_and_save_latest_version_file_fresh_check(mock_get_version_from_pypi, version_file_path, elapsed)

.. py:function:: test_get_and_save_latest_version_no_file(mock_get_version_from_pypi, version_file_path, pypi_version)

.. py:function:: test_version_checking(mocker)

.. py:function:: test_version_checking_exception(mocker)

.. py:function:: version_file_path(mocker, tmp_path)

