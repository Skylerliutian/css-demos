FROM nginx

RUN echo "                           \n\
server {                                \n\
    listen 80;                          \n\
    location ^~ / {                     \n\
        root /dist;                     \n\
        index index.html index.htm;     \n\
    }                                   \n\
}" > /etc/nginx/conf.d/default.conf

VOLUME [ "/dist" ]
# RUN mkdir /dist
# COPY build /dist
# COPY start.sh /dist
WORKDIR /etc/nginx
RUN nginx -t

ENTRYPOINT ["/dist/start.sh"]

EXPOSE 80

