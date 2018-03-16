'use strict';

const server = require('./server');
server.start(process.env.PORT, () => console.log(`Listening on ${process.env.PORT}`));