FROM node:14

WORKDIR /keystom-build/
COPY . /keystom-build/

RUN yarn install
RUN yarn build:ssr
CMD yarn start