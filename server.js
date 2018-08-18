const express = require('express');
const logger = require('morgan');

const app = express();
app.use(logger('dev'));

app.get('/', (req, res) => {
  res.send('hi');
});

app.listen(3001, () => console.log('servering :3001'))
