FROM node:18-alpine as build

WORKDIR /app/api

ENV PATH /app/api/node_module/.bin:$PATH

COPY package*.json ./

RUN npm install

RUN npx prisma generate

COPY . ./

EXPOSE 3009

ENTRYPOINT [ "npm", "run" ]
CMD [ "dev" ]     