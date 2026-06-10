FROM node:20-alpine
WORKDIR /app
COPY . .
WORKDIR /app/front/front-devops
RUN npm install
RUN npm run build
EXPOSE 5173
CMD ["npm", "run", "dev"]