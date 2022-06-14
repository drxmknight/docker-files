# dhcpd on docker

## Build
```bash
docker build -t USERNAME/dhcpd:latest .
```

Para construir la imagen:
```bash
docker build -t drxmknight/dhcpd:latest .
```

Para correr la imagen:
```bash
docker run -it --name dhcp --rm drxmknight/dhcpd
```

Levantar containers:
```bash
docker-compose up -d
```

Ejecutar bash en container:
```bash
docker-compose exec dhcp-server bash
docker-compose exec dhcp-client bash
```

En el cliente dhcp, se debe ejecutar el siguiente comando dentro del contenedor:
```bash
dhclient
```

Para renovar la lease:
```bash
dhclient -r && dhclient
```

En el server, se puede ver el trafico dhcp con:
```bash
tcpdump -i eth0 port '(67 or 68)' -v -n
```
