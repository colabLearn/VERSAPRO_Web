#Specify the base image
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /versapro

# Copy package.json and package-lock.json
COPY package*.json ./

#Install the dependencies
RUN  npm install

# Copy the rest of the application code
COPY . .

#Build the app
RUN npm run build

# Serve the app
CMD ["npm", "start"]