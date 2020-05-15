import express from 'express';
import React from 'react';
import App from './dist/ssr/app';
import { StaticRouter } from 'react-router/';
import reactDOMServer from 'react-dom/server';

var app = express();

app.get('*', (req, res) => {
  const html = reactDOMServer.renderToString(
    <StaticRouter
      location={req.url}
      context={{
        name:'variables of server to app'
      }}
    >
      <App />
    </StaticRouter>
  );
  res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <div id="home-container">${html}</div>
    </body>
    </html>
  `)
  res.end();
})

app.listen(3000)
console.log('Listen to port: 3000');