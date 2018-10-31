FROM node:alpine
WORKDIR /build
EXPOSE 80
COPY . .
RUN npm install
CMD [ "node", "index.js" ]


