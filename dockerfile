FROM  node:16

WORKDIR /meli-app
COPY package.json .
RUN npm install
COPY . .
CMD npm start