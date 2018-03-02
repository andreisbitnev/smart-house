FROM node:9-alpine

WORKDIR /usr/src/project/
COPY . .
RUN rm Dockerfile \
    && npm install -g @angular/cli --unsafe \
    && npm install
EXPOSE 4200
CMD ["npm", "run", "dev"]