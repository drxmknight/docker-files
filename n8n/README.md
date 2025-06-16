# n8n

Docker compose file to deploy [n8n](https://github.com/n8n-io/n8n) 

## Pre-requisites

1. Rename the .env.sample file to .env and fill in the required variables:
```bash
cp .env.sample .env
```

# Installation 

1. Start the n8n service using Docker Compose:
```bash
docker compose up -d --build
```