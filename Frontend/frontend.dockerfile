FROM node:20 as BUILD_IMAGE

WORKDIR /app/vite-app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM node:20 as PRODUCTION_IMAGE

WORKDIR /app/vite-app

COPY --from=BUILD_IMAGE /app/vite-app/dist /app/vite-app/dist

EXPOSE 5173

COPY package.json .

COPY vite.config.js .

RUN npm install vite

CMD ["npm", "run", "preview"]