tests.unit_tests.utils.test_networking
======================================

.. py:module:: tests.unit_tests.utils.test_networking


Functions
---------

.. autoapisummary::

   tests.unit_tests.utils.test_networking.test_format
   tests.unit_tests.utils.test_networking.test_get_external_ip
   tests.unit_tests.utils.test_networking.test_get_external_ip_os_broken
   tests.unit_tests.utils.test_networking.test_get_external_ip_os_request_urllib_broken
   tests.unit_tests.utils.test_networking.test_int_to_ip4_max
   tests.unit_tests.utils.test_networking.test_int_to_ip6_max
   tests.unit_tests.utils.test_networking.test_int_to_ip6_overflow
   tests.unit_tests.utils.test_networking.test_int_to_ip6_range
   tests.unit_tests.utils.test_networking.test_int_to_ip6_underflow
   tests.unit_tests.utils.test_networking.test_int_to_ip6_zero
   tests.unit_tests.utils.test_networking.test_int_to_ip_range
   tests.unit_tests.utils.test_networking.test_int_to_ip_zero


Module Contents
---------------

.. py:function:: test_format(url, expected)

   Test formatting WebSocket endpoint URL.


.. py:function:: test_get_external_ip()

   Test getting the external IP address.


.. py:function:: test_get_external_ip_os_broken()

   Test getting the external IP address when os.popen is broken.


.. py:function:: test_get_external_ip_os_request_urllib_broken()

   Test getting the external IP address when os.popen and requests.get/urllib.request are broken.


.. py:function:: test_int_to_ip4_max()

   Test converting integer to maximum IPv4 address.


.. py:function:: test_int_to_ip6_max()

   Test converting integer to maximum IPv6 address.


.. py:function:: test_int_to_ip6_overflow()

   Test handling overflow when converting integer to IPv6 address.


.. py:function:: test_int_to_ip6_range()

   Test converting integer to IPv6 addresses in a range.


.. py:function:: test_int_to_ip6_underflow()

   Test handling underflow when converting integer to IPv6 address.


.. py:function:: test_int_to_ip6_zero()

   Test converting integer to IPv6 address for 0.


.. py:function:: test_int_to_ip_range()

   Test converting integer to IPv4 addresses in a range.


.. py:function:: test_int_to_ip_zero()

   Test converting integer to IPv4 address for 0.


