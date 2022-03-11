#!/bin/bash
From --platform=linux/amd64 node:16.4.0 as builder

WORKDIR  /app

COPY package.json .

RUN npm install

COPY . . 
RUN npm run build

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html
WORKDIR /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]