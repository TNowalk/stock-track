FROM node:boron

WORKDIR /opt/stock-tracker

COPY package.json

RUN npm install

COPY . .

EXPOSE 9000

CMD ["npm", "run", "prod"]
