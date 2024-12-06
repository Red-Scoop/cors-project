FROM node:22.4.1-bookworm as build
ARG UID=1000
ARG GID=1000
RUN userdel node
RUN groupadd --gid $GID user && \
    useradd --uid $UID --gid user --shell /bin/bash --create-home user
WORKDIR /app
RUN chown -R user:user /app
USER user

COPY --chown=user:user ./package.json ./package.json
COPY --chown=user:user ./package-lock.json ./package-lock.json
RUN npm install

COPY --chown=user:user . .
RUN npm run build
CMD npm run start

