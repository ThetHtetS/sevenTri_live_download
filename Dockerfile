# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Build the app
RUN npm run build

# Install serve globally (for Vite apps)
RUN npm install -g serve

# Expose the correct port
EXPOSE 3000

# Start the server
CMD ["serve", "-s", "dist", "-l", "8080"]
