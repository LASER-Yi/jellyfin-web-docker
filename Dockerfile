FROM p3terx/darkhttpd:latest

COPY ./dist /www

ENTRYPOINT ["/darkhttpd" "/www"]
