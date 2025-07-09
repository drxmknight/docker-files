FROM n8nio/n8n:1.101.1

USER root

# Install Python and build dependencies
RUN apk add --no-cache \
    python3 \
    py3-pip \
    python3-dev \
    gcc \
    musl-dev \
    libffi-dev

# Create venv
RUN python3 -m venv /opt/venv && \
    /opt/venv/bin/pip3 install --upgrade pip
    
# Copy requirements.txt to the container
COPY requirements.txt /tmp/requirements.txt

# Install Python packages
RUN /opt/venv/bin/pip3 install --upgrade pip && \
    /opt/venv/bin/pip3 install --no-cache-dir -r /tmp/requirements.txt

# Clean up
RUN rm /tmp/requirements.txt

# Make venv accessible and switch back to n8n user
ENV PATH="/opt/venv/bin:$PATH"

# Install Javascript packages
RUN npm install -g langfuse-langchain

# Switch back to n8n user
USER node