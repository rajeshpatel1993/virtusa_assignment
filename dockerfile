FROM node:12-alpine


WORKDIR /usr/dir/virtusa-assignment/

COPY package*.json ./


COPY . .
#COPY binance-api/ .


EXPOSE 8081
RUN npm install
ENTRYPOINT node index.js	
