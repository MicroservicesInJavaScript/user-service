# Use the latest NodeJS docker image
FROM node:9.1.0-alpine

# Set the working directory
WORKDIR /usr/app

# Bundle app source
COPY . .

# Install the app dependencies
RUN mkdir /logs && \
  yarn

# Expose the correct port
EXPOSE 3000

# Run the app
CMD ["yarn", "run", "dev"]
