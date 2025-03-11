# Use a more lightweight base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install necessary build dependencies
RUN apk add --no-cache python3 make g++

# Copy package files
COPY package.json yarn.lock ./

# Install dependencies and clean up in the same layer
RUN yarn install --network-timeout 600000 --no-strict-ssl \
    && yarn cache clean \
    && rm -rf /root/.npm /root/.node-gyp

# Copy application code
COPY . .

# Expose port
EXPOSE 3000

# Command to run the application in development mode
CMD ["yarn", "dev"]