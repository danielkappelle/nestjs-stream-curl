# Minimal reproduction of crashing NestJS with Stream

## Steps to reproduce
- Install packaged `$ npm i`
- Start server `$ npm run start:dev`
- Try to download image with curl `$ curl http://localhost:3000`

Curl will warn you that you that it suppresses binary output in the terminal. Therefore the connection is closed very rapidly. This crashes the NestJS server.