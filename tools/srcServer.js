import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/marine_biology_t2',function(req,res)
{
  var json = JSON.parse(require('fs').readFileSync('../../data/marine_biology_t2.json.json', 'utf8'));
  res.send(json)
});

app.get('/marine_biology_t1/:value1',function(req,res)
{
  console.log(req.params);
  var value1 = req.params.value1;

  var spawn = require('child_process').spawn(
   'python', ["../../data/marine_biology_t1.py", `${value1}`]
  );

  spawn.stdout.on('data', function (data){
    console.log(`stdout: ${data}`);
    res.send(`${data}`)
  });
});

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
