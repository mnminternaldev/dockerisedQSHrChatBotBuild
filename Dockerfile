FROM node:alpine

WORKDIR '/app'
COPY ./3_Server/package.json .
RUN npm install
COPY ./3_Server .
CMD ["npm","run","start"]