FROM node:9-alpine

WORKDIR /usr/src/project/
COPY . .
RUN rm Dockerfile
RUN npm install -g nodemon \
    && npm install
EXPOSE 9229
CMD ["npm", "run", "dev"]