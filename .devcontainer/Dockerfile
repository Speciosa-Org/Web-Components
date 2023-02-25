FROM mcr.microsoft.com/devcontainers/typescript-node:0-18

# Install core deps
RUN apt-get update \
  && apt-get install -y git \
  build-essential \
  procps \
  curl \
  file \
  ca-certificates

# Install Homebrew
RUN /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install tools from brew
RUN brew install actionlint \
  yamllint \
  hadolint \
  shellcheck \
  jq \
  yq \
  gojq

# Install GH CLI
RUN curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg \
  && chmod go+r /usr/share/keyrings/githubcli-archive-keyring.gpg \
  && echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | tee /etc/apt/sources.list.d/github-cli.list > /dev/null \
  && apt-get update \
  && apt-get install gh -y

# Install browser deps and browsers
RUN npx playwright install --with-deps

# Clear out lists to trim down container size
RUN rm -rf /**var**/lib/apt/lists/*
