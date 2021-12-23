FROM node:latest
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
# RUN npm run build
RUN npx prisma generate
# ENV DATABASE_URL postgresql://postgres:smartwillbeanothergreatproject!!@db:5432/S-mart?schema=S-mart-db
EXPOSE 4000
CMD ["npm", "run", "start"]