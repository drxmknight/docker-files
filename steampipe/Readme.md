# Steampipe kubernetes

- [Steampipe](https://steampipe.io/)

## Run

1. Build the docker image:
```bash
docker build -t steampipe .
```

2. Run the docker image:
```bash
docker run -it --name steampipe -v ./kubeconfig:/home/steampipe/.kube/config -v ./kubernetes.spc:/home/steampipe/.steampipe/config/kubernetes.spc steampipe
```

## Kubernetes Query

1. To view plugin tables, run:
```bash
steampipe query
.tables
```

Example queries:
```sql
steampipe query "select name from kubernetes_namespace order by name;"
steampipe query "select name from kubernetes_pods where namespace='test' order by name;"
```