FROM node:16.16 as builder

COPY . .
RUN yarn install
RUN yarn run build


FROM jawg/nginx-spa:latest
COPY --from=builder /build/ /usr/share/nginx/html
COPY --from=builder /build/static/Alkim-Kivanc-Civi-CV-EN.pdf /usr/share/nginx/html
COPY --from=builder /build/static/Alkim-Kivanc-Civi-CV-TR.pdf /usr/share/nginx/html
RUN chmod -R 777 /usr/share/nginx/html