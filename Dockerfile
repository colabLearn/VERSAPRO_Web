#Specify the base image
FROM node:alpine

#Set the working directory
WORKDIR /versaproweb

#Copy the package.json and package-lock.json files
COPY package*.json ./

#Install the dependencies
RUN  npm install

#Copy the app files
COPY . .

#Build the app
RUN npm run build

#Expose the port
EXPOSE 3000

# Serve the app
CMD ["npm", "start"]