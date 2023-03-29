FROM node:lts as builder

COPY . .
RUN yarn install
RUN yarn run build


FROM jawg/nginx-spa:latest
COPY --from=builder /build/ /usr/share/nginx/html
RUN chmod -R 777 /usr/share/nginx/html