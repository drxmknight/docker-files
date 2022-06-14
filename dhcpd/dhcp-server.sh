#!/bin/bash

rsyslogd -n &
dhcpd -d &> /var/log/dhcpd.log
