FROM node:alpine
WORKDIR /build
COPY . .
RUN npm install
CMD [ "node", "index.js" ]


