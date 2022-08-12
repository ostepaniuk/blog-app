FROM node:17

WORKDIR /usr/src/app
COPY . .
RUN npm install && npm run build
EXPOSE 3005

CMD [ "npm", "run", "start" ]