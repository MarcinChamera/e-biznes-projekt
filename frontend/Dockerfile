FROM node

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json /app
# COPY package*.json ./

RUN npm install

# COPY . ./
COPY . /app

EXPOSE 3000

CMD ["npm", "start"]
