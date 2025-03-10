# Ever Donuts E-commerce Platform

This repository contains three main components:

- **DonutsEcommerceapi**: Backend API built with NestJS
- **DonutsEcommerceAdmin**: Admin panel built with Next.js
- **DonutsEcommerceWebui**: Customer-facing website built with Next.js

## Prerequisites

- Docker and Docker Compose (recommended)(Use chatgpt for it or watch video per your Operating system)
- Alternatively for local development: Node.js (v18 or later), Yarn, and PostgreSQL

## Installation and Setup

### Recommended: Running with Docker Compose

The easiest way to get started with Ever Donuts is using Docker Compose, which sets up all components automatically.


#### 1. Configure environment variables (optional)

The application uses default values, but you can customize by creating a `.env` file in the root directory:

```
DB_USERNAME=postgres
DB_PASSWORD=your_secure_password
DB_DATABASE=everdonuts
JWT_SECRET=your_secure_jwt_secret
```

#### 2. Build and start the containers

Make sure that docker is up and running also 
```bash
# Build and start all services in detached mode
docker-compose up -d --build

```

This will start all services:
- PostgreSQL database at port 5432
- Backend API at http://localhost:3001
- Admin Panel at http://localhost:3002
    - You can logout and signup using your credientials
    - Items added from admin panel will be visible in webui
- Web UI at http://localhost:3000

 
#### 3. Useful Docker commands

```bash
# Stop all services
docker-compose down

# Rebuild and restart services after code changes
docker-compose up -d --build

# View logs for a specific service
docker-compose logs -f api|admin|webui|postgres

# Access container shell
docker exec -it everdonuts-api|everdonuts-admin|everdonuts-webui bash
```

### Option 2: Running Locally

#### 1. Backend API (DonutsEcommerceapi)

```bash
# Navigate to the API directory
cd DonutsEcommerceapi

# Install dependencies
yarn install

# Run in development mode
yarn server
```

#### 2. Admin Panel (DonutsEcommerceAdmin)

```bash
# Navigate to the Admin directory
cd DonutsEcommerceAdmin

# Install dependencies
yarn install

# Run in development mode
yarn dev
```

#### 3. Web UI (DonutsEcommerceWebui)

```bash
# Navigate to the Web UI directory
cd DonutsEcommerceWebui

# Install dependencies
yarn install

# Run in development mode
yarn dev
```

## Environment Variables

### Backend API (.env)

```
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=password
DB_NAME=everdonuts
JWT_SECRET=your_jwt_secret
```

### Admin Panel and Web UI (.env)

```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## Accessing the Applications

- **Backend API**: http://localhost:3001
- **Admin Panel**: http://localhost:3002 (when running with Docker Compose)
- **Web UI**: http://localhost:3000

