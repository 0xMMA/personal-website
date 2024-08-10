# Use the official Node.js 18 image.
# If you need a different version, specify that instead.
FROM node:18 as builder

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock) to install dependencies
COPY website-ui/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app's source code from your host to your image filesystem.
COPY website-ui/ ./

# Build the app
RUN npm run build

# Use a lightweight web server to serve the built website
FROM nginx:alpine

# Copy the built website from the builder stage to the nginx web server
COPY --from=builder /usr/src/app/build /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 80

# Start the web server
CMD ["nginx", "-g", "daemon off;"]