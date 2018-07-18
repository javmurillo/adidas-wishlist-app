FROM node:8
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app
CMD npm run node
EXPOSE 3002