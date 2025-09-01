# Use official Node.js LTS image
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --include=dev
RUN npm install -g nodemon

# Copy the rest of the app
COPY . .

# Expose port
EXPOSE 3000

# Set environment variable (can be overridden by docker-compose)
ENV PORT=3000

# Start the app
CMD ["npm", "run", "dev"]
