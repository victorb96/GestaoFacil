FROM node:20.18.1-alpine as base
WORKDIR /app
COPY . .
RUN npm install -f
RUN npm run build --prod

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /var/www/gestaofacil
COPY --from=base app/dist/gestao-facil/browser .

EXPOSE 80