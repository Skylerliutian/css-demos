#!/bin/sh

npm run build
cp start.sh ./build
docker-compose down
docker-compose up -d
# docker build -t css_demo:latest ./

