FROM nginx

WORKDIR /app

COPY ./build ./build

RUN rm /etc/nginx/conf.d/default.conf

COPY ./nginx.conf /etc/nginx/conf.d

EXPOSE 3001

CMD ["nginx", "-g", "daemon off;"]
