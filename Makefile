SHELL                 = /bin/bash

APP_NAME              = akunify
VERSION               = $(shell git describe --always --tags)
GIT_COMMIT            = $(shell git rev-parse HEAD)
GIT_DIRTY             = $(shell test -n "`git status --porcelain`" && echo "+CHANGES" || true)
BUILD_DATE            = $(shell date '+%Y-%m-%d-%H:%M:%S')

.PHONY: default
default: help

.PHONY: help
help:
	@echo 'Management commands for ${APP_NAME}:'
	@echo
	@echo 'Usage:'
	@echo '    make install                            Install dependencies.'
	@echo '    make config                             Build config for build time.'
	@echo '    make build                              Build application.'
	@echo

.PHONY: install
install:
	@echo "Installing dependencies for ${APP_NAME} ${VERSION}"
	CI=true yarn install --frozen-lockfile

.PHONY: config
config:
	@echo "Generating config for ${APP_NAME} ${VERSION}"
	mc config host add minio ${MINIO_URL} ${MINIO_ACCESS_KEY} ${MINIO_SECRET_KEY} --api S3v4
	mc cp -r minio/params/${APP_NAME}/${MINIO_ENV_PATH}/.env .

.PHONY: build
build:
	@echo "Building ${APP_NAME} ${VERSION}"
ifeq ($(ENV), prod)
	NODE_ENV=production \
	BUILD_ENV=production \
	yarn build
else
	NODE_ENV=production \
	yarn build
endif
