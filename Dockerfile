FROM node:lts-slim

ENV NODE_ENV=production

WORKDIR /opt/akunify

COPY ./.next/standalone /opt/akunify/

RUN chmod -R 755 /opt/akunify/.next

# Create appuser
RUN adduser --disabled-password --gecos '' akunify

USER akunify

CMD ["node", "server.js"]
