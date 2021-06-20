FROM node:14-alpine AS build

WORKDIR /buildApp

COPY . .
RUN npm i
RUN npm run build

FROM node:14-alpine as final

WORKDIR /app

RUN mkdir build

COPY --from=build ./buildApp/build ./build

RUN npm i -g serve

EXPOSE 5000

CMD ["serve", "-s", "build"]


