# Build Stage
FROM node:12.18.3-alpine3.12 as build-marker

RUN mkdir -p /opt/app-build

COPY . /opt/app-build/

WORKDIR /opt/app-build

RUN apk add g++ make python3
RUN npm install 

RUN npm run build

# Final Image
FROM node:12.18.3-alpine3.12

RUN mkdir -p /usr/src/server

COPY --from=build-marker /opt/app-build/build/ /usr/src/server/
COPY --from=build-marker /opt/app-build/package*.json /usr/src/server/

WORKDIR /usr/src/server/

RUN apk add g++ make python3
RUN ls -l

RUN npm install --production

EXPOSE 7000
CMD ["node", "server.js"]