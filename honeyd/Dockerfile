FROM oraclelinux:7.9
RUN yum-config-manager --add-repo http://yum.oracle.com/repo/OracleLinux/OL7/optional/developer/x86_64 && yum update -y
RUN yum install -y make zlib-devel libevent-devel libpcap-devel libdnet-devel pcre-devel automake libtool libedit-devel zlib-devel
ADD https://github.com/DataSoft/Honeyd/archive/master.tar.gz /
run tar -xvf master.tar.gz
WORKDIR /Honeyd-master
RUN ./autogen.sh
RUN ./configure
RUN make && make install
COPY . /usr/share/honeyd
#CMD honeyd -d -f /usr/share/honeyd/dcpt.conf -l /var/log/dcpt.log -p /usr/share/honeyd/nmap-os-db -a /usr/share/honeyd/nmap.assoc -0 /usr/share/honeyd/pf.os -x /usr/share/honeyd/xprobe2.conf -i ens192 10.57.8.64-10.57.8.66
CMD sleep 9999
