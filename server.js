import express from 'express';
import App from '../dist/ssr/app';
import { StaticRouter } from 'react-router/';

var app = express();

<StaticRouter>
  <App />
</StaticRouter>

app.get('/', (req, res) => {
  console.log(req.url);
  res.write('works')
  res.end();
})

app.listen(3000)
console.log('Listen to port: 3000');