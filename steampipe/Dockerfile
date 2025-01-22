FROM python:3.12-slim-bookworm
# Install required packages
RUN apt update -y && apt install -y curl wget bash-completion

# Install Steampipe
RUN /bin/sh -c "$(curl -fsSL https://steampipe.io/install/steampipe.sh)"
  
# Create a new user
RUN useradd -ms /bin/bash steampipe

# Set the user
USER steampipe

# Set the working directory
WORKDIR /home/steampipe

# Install the Kubernetes plugin
RUN steampipe plugin install kubernetes

# change Entrypoint
ENTRYPOINT ["/bin/bash"]