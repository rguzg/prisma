FROM node:14-alpine

USER node

RUN mkdir -p /home/node

WORKDIR /home/node

COPY --chown=node package.json ${WORKDIR}

RUN yarn install

COPY --chown=node . ${WORKDIR}

EXPOSE 4000

CMD ["yarn", "start"]