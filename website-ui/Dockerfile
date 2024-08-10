# Use the official Node.js 18 image.
# If you need a different version, specify that instead.
FROM node:18 AS builder

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock) to install dependencies
COPY /package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app's source code from your host to your image filesystem.
COPY / ./

# Build the app  //output is at /usr/src/app/.svelte-kit/output/ (client|server)
RUN npm run build  

# Use a lightweight web server to serve the built website
FROM nginx:alpine

# Copy the built website from the builder stage to the nginx web server
COPY --from=builder /usr/src/app/build /usr/share/nginx/html

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 for the web server
EXPOSE 80

# Start the web server
CMD ["nginx", "-g", "daemon off;"]