FROM node:18

WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies using yarn with flags to ignore formatting issues
RUN yarn install --network-timeout 600000 --no-strict-ssl

# Copy the rest of the application code
COPY . .

# Build the application
# RUN yarn build

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application in development mode
CMD ["yarn", "dev"]