FROM python:3.12-slim

# Install system dependencies
RUN apt-get update 

# install docling with pip
RUN pip install --no-cache-dir docling

# Predownload the models
RUN docling-tools models download

# Set the artifacts path env
ENV DOCLING_ARTIFACTS_PATH=/root/.cache/docling/models

WORKDIR /data

ENTRYPOINT ["docling"]

CMD ["--help"]