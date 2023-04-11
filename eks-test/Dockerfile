# Use Alpine Linux as base image
FROM node:18.15.0-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3000
EXPOSE 8080

# Start the application
CMD ["npm", "start"]
