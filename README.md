# Minimal reproduction of crashing NestJS with Stream

## The error
when trying to serve a large image using a stream and closing the connection very quickly after opening it, the NestJS server crashes.

This can be achieved using Curl because Curl will warn you that you that it suppresses binary output in the terminal. Therefore the connection is closed very rapidly. This crashes the NestJS server.

Curl's output:
```
Warning: Binary output can mess up your terminal. Use "--output -" to tell
Warning: curl to output it to your terminal anyway, or consider "--output
Warning: <FILE>" to save to a file.
```

NestJS output
```
[Nest] 8844  - 08/12/2022, 10:35:26 AM   ERROR [ExpressAdapter] Premature close
Error: Premature close
    at new NodeError (node:internal/errors:372:5)
    at ServerResponse.onclose (node:internal/streams/end-of-stream:142:30)
    at ServerResponse.emit (node:events:539:35)
    at Socket.onServerResponseClose (node:_http_server:236:23)
    at Socket.emit (node:events:539:35)
    at TCP.<anonymous> (node:net:709:12)
Error: Cannot set headers after they are sent to the client
    at new NodeError (node:internal/errors:372:5)
    at ServerResponse.setHeader (node:_http_outgoing:576:11)
    at ServerResponse.header (/Users/danielkappelle/tmp/nest-stream-curl/test-project/node_modules/express/lib/response.js:794:10)
    at ServerResponse.send (/Users/danielkappelle/tmp/nest-stream-curl/test-project/node_modules/express/lib/response.js:174:12)
    at StreamableFile.handleError (/Users/danielkappelle/tmp/nest-stream-curl/test-project/node_modules/@nestjs/common/file-stream/streamable-file.js:14:17)
    at ReadStream.<anonymous> (/Users/danielkappelle/tmp/nest-stream-curl/test-project/node_modules/@nestjs/platform-express/adapters/express-adapter.js:43:22)
    at Object.onceWrapper (node:events:642:26)
    at ReadStream.emit (node:events:539:35)
    at emitErrorNT (node:internal/streams/destroy:157:8)
    at emitErrorCloseNT (node:internal/streams/destroy:122:3)
```


## Steps to reproduce
- Install packaged `$ npm i`
- Start server `$ npm run start:dev`
- Try to download image with curl `$ curl http://localhost:3000`

