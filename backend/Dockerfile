FROM node:lts

ENV NODE_ENV=production
WORKDIR /service
COPY ./dist /service
RUN npm install yarn --registry https://registry.npm.taobao.org/; \
    yarn --registry https://registry.npm.taobao.org/
EXPOSE 9000
CMD [ "node", "./bundle.js" ]