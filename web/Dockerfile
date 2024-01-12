FROM node:18.18.0-alpine

WORKDIR /

COPY package* ./

RUN npm install

COPY . .

EXPOSE 5173

ENTRYPOINT [ "npm", "run" ]
CMD [ "dev" ]     