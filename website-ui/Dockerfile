# Multi-stage Dockerfile optimized for build speed and caching
FROM node:18-alpine AS dependencies

# Create app directory
WORKDIR /usr/src/app

# Copy dependency files first for better caching
COPY package*.json ./

# Install dependencies with cache optimization
RUN npm ci --silent && npm cache clean --force

# Build stage
FROM dependencies AS builder
WORKDIR /usr/src/app

# Copy source code (dependencies already cached in previous layer)
# The existing .dockerignore will exclude unnecessary files
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy built static files from builder stage
COPY --from=builder /usr/src/app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Health check for better container management
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]