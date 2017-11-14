# Use the latest NodeJS docker image
FROM node:9.1.0-alpine

# Set the working directory
WORKDIR /usr/src/app

# Bundle app source
COPY . .

# Install the app dependencies
RUN npm install

# Expose the correct port
EXPOSE 3000

# Run the app
CMD ["npm", "run", "dev"]
