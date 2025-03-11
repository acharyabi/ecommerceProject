# Build stage
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Install necessary build dependencies
RUN apk add --no-cache python3 make g++

# First copy only package files to leverage Docker cache
COPY package.json yarn.lock ./

# Install dependencies efficiently
RUN yarn install --network-timeout 600000 --no-strict-ssl \
    && yarn cache clean

# Copy application code
COPY . .

# Development stage
FROM node:18-alpine

WORKDIR /app

# Install runtime dependencies
RUN apk add --no-cache python3 make g++

# Copy node_modules and source code from builder
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/yarn.lock ./yarn.lock
COPY . .

# Set development environment
ENV NODE_ENV=development

# Expose development port
EXPOSE 3000

# Start development server
CMD ["yarn", "dev"]