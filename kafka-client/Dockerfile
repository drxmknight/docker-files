FROM node:18-alpine
WORKDIR /app
RUN npm install kafka-node
COPY . /app
CMD ["node", "app.js"]
