FROM debian:latest
WORKDIR /app
RUN apt-get update
RUN apt-get install -y nginx
ENTRYPOINT ["echo", "test2"]