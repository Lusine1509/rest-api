  
FROM node:14

WORKDIR /home/node/rest-api

COPY package*.json ./


RUN npm install -D nodemon

RUN npm install

COPY . .



COPY .env /home/node/rest-api

CMD [ "npm", "run", "dev" ]