# Dockerfile
FROM node:lts AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

# 컨테이너 실행 시 실행할 명령 정의
CMD ["nginx", "-g", "daemon off;"]