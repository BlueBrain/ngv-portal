#!/bin/bash

echo "Please enter NGV Portal HTTP auth credentials"
echo

echo -n "user    : " && read NGV_USER && echo
echo -n "password: " && read -s NGV_PASSWORD && echo
echo

status_code=$(curl -u "$NGV_USER:$NGV_PASSWORD" --write-out %{http_code} --silent --output /dev/null https://bbp.epfl.ch/ngv-portal/)

if [[ "$status_code" -ne 200 ]] ; then
  echo "The Portal returned HTTP status $status_code, please check if supplied credentials are valid"
  exit 1
else
  echo "Supplied credentials seem to be valid"
  echo "Building docker image"
  echo

  docker build \
    --build-arg AUTH_HEADER_ARG="Basic $(echo -n "$NGV_USER:$NGV_PASSWORD" | base64)" \
    -f Dockerfile.static-data-proxy \
    -t ngv-static-data-proxy .

  echo "Done"
  echo
  echo "Now you can start the proxy with 'npm run start-static-data-proxy'"
fi
