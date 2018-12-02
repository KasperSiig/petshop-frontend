FROM nginx

EXPOSE 80
EXPOSE 443
WORKDIR /usr/share/nginx/html
COPY dist/petshop/ .
