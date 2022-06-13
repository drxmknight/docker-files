# Dockerfiles for PrismaCloud tools

## Twistcli image build

### 
In the **Dockerfile-twistcli** directory, exec:

```bash
DOCKER_BUILDKIT=1 docker build -f Dockerfile-twistcli --no-cache -t twistcli --secret id=tauth,src=./data/twistcli-auth .
```

