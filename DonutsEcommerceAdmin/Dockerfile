# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy only package files first to leverage cache
COPY package.json yarn.lock ./

# Install dependencies with specific flags to reduce size
RUN yarn install --production --frozen-lockfile --network-timeout 600000 --no-strict-ssl \
    && yarn cache clean

# Copy application code
COPY . .

# Production stage
FROM node:18-alpine

WORKDIR /app

# Copy only necessary files from builder
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/yarn.lock ./yarn.lock
COPY --from=builder /app/src ./src

# Set environment to production
ENV NODE_ENV=production

# Expose port
EXPOSE 3000

# Run the application
CMD ["yarn", "dev"]