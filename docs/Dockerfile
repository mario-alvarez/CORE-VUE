FROM node:lts-alpine

WORKDIR /usr/src/app/vuepress

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8082

CMD ["npm", "run", "serve"]