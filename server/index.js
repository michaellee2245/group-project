require ('dotenv').config();

const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const massive = require('massive');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(logger('tiny'));

massive (process.env.dataBase)
  .then( db => {
    app.set ('db',db)
    console.log('connected to database')
    require('./configure/session')(app,db)
    app.use('/api' , require('./routes'))
    app.listen(8080, () => console.log('listening on 8080'))
  })
  .catch (error => console.error(error));
