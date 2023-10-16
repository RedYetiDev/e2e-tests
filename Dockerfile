# Get synpress
# FROM --platform=linux/amd64 synthetixio/docker-e2e:18.16-ubuntu
FROM synthetixio/docker-node:18.16-ubuntu

# Install Playwright and Playwright dependencies
RUN npx playwright install && npx playwright install-deps

# Install xvfb to run tests in HEADED mode with Playwright
RUN apt-get update -y && apt-get -y install xvfb && rm -rf /var/lib/apt/lists/* /var/cache/apt/*

# Sets argument as environmental variable
ENV BASE_URL=https://staging.summer.fi/
ENV WALLET_ADDRESS=0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
ENV TENDERLY_PROJECT=e2e-automation
ENV TENDERLY_USER=oazoapps
ENV TENDERLY_ACCESS_KEY=BsyD7IAqXtdRTt9m22Q-pRFDWhSWvEnT

# Set the work directory for the application
WORKDIR /app

# Copy needed files to install dependencies from current directory to '/app'
COPY package.json /app/
COPY yarn.lock /app/

# Install the dependencies
RUN yarn 

# Copy everything else from current directory to '/app'
COPY . /app