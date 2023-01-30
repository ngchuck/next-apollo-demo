# Build Stage 1
# This build created a staging docker image
#
FROM node:18-alpine AS appbuild
WORKDIR /usr/src/app
COPY package.json ./
COPY package-lock.json ./
COPY tsconfig.json ./
COPY server.ts ./
RUN npm install
COPY ./src ./src
RUN npm run build

# Build Stage 2
# This build takes the production build from staging build
#
FROM node:18-alpine
WORKDIR /usr/src/app
COPY package.json ./
COPY package-lock.json ./
COPY tsconfig.json ./
RUN npm install
COPY --from=appbuild /usr/src/app/build ./build
EXPOSE 4000
CMD npm run start