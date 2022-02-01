FROM minio/mc as params
ARG MINIO_URL
ARG MINIO_ACCESS_KEY
ARG MINIO_SECRET_KEY
ARG MINIO_ENV_PATH
WORKDIR /params
RUN mc config host add minio $MINIO_URL $MINIO_ACCESS_KEY $MINIO_SECRET_KEY --api S3v4 && \
    mc cp -r minio/params/akunify/$MINIO_ENV_PATH/.env .

FROM node:14-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install
COPY . .
COPY --from=params . .
RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]
