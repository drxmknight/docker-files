FROM oraclelinux:8.6
RUN yum update -y && yum install -y dhcp-server dhcp-client tcpdump
#RUN touch /var/log/dhcp.log
ADD ./dhcp-server.sh /dhcp-server.sh
RUN chmod +x /dhcp-server.sh 
CMD ["/bin/bash", "/dhcp-server.sh"]

