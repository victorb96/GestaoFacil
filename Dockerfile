FROM node:20.18.1-alpine as base
WORKDIR /app
COPY . .
RUN npm install
RUN node node_modules/@angular/cli/bin/ng build --configuration production

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=base app/dist/gestao-facil/browser .

ENV URL_API=${URL_API}

EXPOSE 80

CMD ["/bin/sh", "-c", "envsubst < /usr/share/nginx/html/assets/env.js > /usr/share/nginx/html/assets/env.prod.js && exec nginx -g 'daemon off;'"]