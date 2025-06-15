FROM docker.n8n.io/n8nio/n8n:1.98.1
# Change the user to root to allow installing packages
USER root
# Install the required packages
RUN npm i -g langfuse-langchain
# Switch back to the n8n user
USER node