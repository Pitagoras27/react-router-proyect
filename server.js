import express from 'express';
import React from 'react';
import App from './dist/ssr/app';
import { StaticRouter } from 'react-router/';
import reactDOMServer from 'react-dom/server';

var app = express();

app.use(express.static('dist'));
app.use('/images', express.static('images'));

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
        <link rel="stylesheet" href="/css/app.css">
        <title>Document</title>
    </head>
    <body>
        <div id="home-container">${html}</div>
        <script src="/js/app.js"></script>
    </body>
    </html>
  `)
  res.end();
})

app.listen(3000)
console.log('Listen to port: 3000');