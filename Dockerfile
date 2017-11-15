# Use the latest NodeJS docker image
FROM node:9.1.0-alpine

# Set the working directory
WORKDIR /usr/app

# Bundle app source
COPY ./package.json ./yarn.* ./

# Install the app dependencies
RUN apk -U --no-cache add curl \
  && yarn \

  # Minimize size
  && apk del --purge --force linux-headers binutils-gold gnupg zlib-dev libc-utils \
  && rm -rf /var/lib/apt/lists/* \
      /var/cache/apk/* \
      /usr/share/man \
      /tmp/* \
      /usr/lib/node_modules/npm/man \
      /usr/lib/node_modules/npm/doc \
      /usr/lib/node_modules/npm/html \
      /usr/lib/node_modules/npm/scripts \
      $(yarn cache dir) \

  # Copy yarn.lock to a tmp location so we can recover it if/when overwritten
  && cp ./yarn.lock /tmp/yarn.lock

# Add files and other configs
COPY . .

# Expose the correct port
EXPOSE 3000

# Healthcheck command
HEALTHCHECK --interval=5s --retries=10 CMD curl -f -s http://localhost:3000/status || exit 1

# Run the app
CMD ["yarn", "start"]
