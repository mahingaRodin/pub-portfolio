# Use Node.js base image
FROM node:20-alpine

# Set working dir inside container
WORKDIR /app

# Copy all files except those in .dockerignore
COPY . .

# Install dependencies
RUN npm install

# Build your Next.js app
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the app in production mode
CMD ["npm", "start"]
