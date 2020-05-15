import express from 'express';
import React from 'react';
import App from './dist/ssr/app';
import { StaticRouter } from 'react-router/';
import reactDOMServer from 'react-dom/server';

var app = express();
const html = reactDOMServer.renderToString(
  <StaticRouter>
    <App />
  </StaticRouter>
);

app.get('/', (req, res) => {
  console.log(req.url);
  res.write('works')
  res.end();
})

app.listen(3000)
console.log('Listen to port: 3000');