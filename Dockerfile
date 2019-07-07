FROM ubuntu:latest
RUN apt-get update
RUN apt-get install -y python3.7
RUN apt-get install -y gcc
RUN apt-get install -y g++
