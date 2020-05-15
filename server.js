const express = require('express');
const App = require('../dist/ssr/app');
const ReactRouter = require('react-router');

var app = express();

<ReactRouter.StaticRouter>
  <App />
</ReactRouter.StaticRouter>

app.get('/', (req, res) => {
  console.log(req.url);
  res.write('works')
  res.end();
})

app.listen(3000)
console.log('Listen to port: 3000');