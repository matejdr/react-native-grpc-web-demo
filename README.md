# React Native demo App using 

## Install protoc

* protoc : [link](https://github.com/protocolbuffers/protobuf/releases)

### Install for go

```sh
go get -u google.golang.org/grpc
go get -u github.com/golang/protobuf/proto
go get -u github.com/golang/protobuf/protoc-gen-go
export PATH=$HOME/go/bin:$PATH
``

## Install grpc-web

```sh
GROC_WEB_PLUGIN=protoc-gen-grpc-web-1.0.6-darwin-x86_64
curl -OL https://github.com/grpc/grpc-web/releases/download/1.0.6/$GROC_WEB_PLUGIN
sudo mv $GROC_WEB_PLUGIN /usr/local/bin/protoc-gen-grpc-web
chmod +x /usr/local/bin/protoc-gen-grpc-web
```

```sh
yarn install
npm install ts-protoc-gen
```

## Code Generate

```sh
protoc \
  --proto_path=proto \
  --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
  --js_out=import_style=commonjs:demo-app/src/lib \
  --ts_out=service=grpc-web:demo-app/src/lib \
  echo.proto
protoc \
  --proto_path=proto \
  --go_out=plugins=grpc:echoserver/echo \
  --go_opt=paths=source_relative \
  echo.proto
```

## Run Application

### Node version

```sh
nvm install
```
or
```sh
nvm use
```

### React Native App Client

```sh
cd demo-app
yarn install
cd ios && pod install
cd ../
yarn ios
yarn android
```

### Running a docker Server

There is an envoy proxy in front of go server.

```sh
docker-compose up server envoy
```
