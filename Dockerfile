FROM node:alpine

# COPY . .
COPY package.json package-lock.json package*.json LICENSE README.md ./
COPY src ./src/

# RUN is for when the Docker image is being built
RUN npm install


ARG DATABASE_URL=mongodb://localhost:27017/
ENV DATABASE_URL=${DATABASE_URL}

ARG DATABASE_URL=mongodb://localhost:27017
ENV DATABASE_URL=${DATABASE_URL}

ARG PORT=5000
ENV PORT=${PORT}

# CMD is for when the Docker image is running in a container 
CMD ["npm", "run", "start"]

EXPOSE ${PORT}


HEALTHCHECK --interval=10s --retries=5 \ 
    CMD wget http://localhost:${PORT}/health || exit 1

