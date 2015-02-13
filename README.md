# Dinosaurs as a Service

## THE HIGHLY ANTICIPATED DINOSAUR REST API

Based on the fantastic [jden/dinosaurs](https://github.com/jden/dinosaurs).

## Usage

```
$ node index.js

dinosaurs listening at http://:::8000
```

```
$ curl -i localhost:8000/dinosaurs
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 4532
Date: Fri, 13 Feb 2015 09:59:38 GMT
Connection: keep-alive

["acanthopholis","acrocanthosaurus","adasaurus",..."zizhongosaurus"]%
```

```
$ curl -i localhost:8000/dinosaurs/6
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 13
Date: Fri, 13 Feb 2015 10:00:04 GMT
Connection: keep-alive

"agilisaurus"%
```
