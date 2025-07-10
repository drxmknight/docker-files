# Docling Docker Image

This repository contains a Dockerfile for building and running [Docling](https://github.com/docling/docling), a tool document parsing.

# Prerequisites

- Docker installed on your system
- Docker Compose (optional)

# Building the Docker Image

To build the Docker image, run the following command from this directory:

```bash
docker build -t docling .
```

# Running the Docker Container

## Basic Usage

To get help information about Docling:

```bash
docker run --rm docling
```

## Running Specific Commands

To run specific Docling commands, add them after the docker run command:

```bash
docker run --rm -v $(pwd)/data:/data docling [COMMAND] [OPTIONS]
```

## Examples

### Parse a Document

Convert a sample document:
```bash
docker run --rm https://arxiv.org/pdf/2206.01062


# Using Docker Compose

This repository includes a `docker-compose.yml` file for easier management of the Docling container.


1. To spin up the Docling service using Docker Compose, run the following command:
```bash
docker-compose up --build
```

2. Attach to the running container:
```bash
docker-compose exec -it docling bash
```

3. Inside the container, you can run Docling commands as needed:
```bash
docling [COMMAND] [OPTIONS]
``` 