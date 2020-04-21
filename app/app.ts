// lib/app.ts
import express = require('express');
import {Request,Response,NextFunction} from "express";
// Create a new express application instance
const app: express.Application = express();
// add extends
let  cors = require("cors");
let createError = require('http-errors');
import path from "path";
const hbs = require('express-handlebars');
import * as bodyParser from 'body-parser'
var logger = require('morgan');
// router api's
import router from "./routes/api";
// db
import  db  from "./db";
const DB = new db();
let start = async () => {
  await DB.init().then((connection)=>{
    console.log("conexion establecida");
  }).catch(e =>{
    throw e;
    console.log('error ==>',e);
  })
}

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(cors());
app.use(express.urlencoded({extended: false}));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', hbs({ defaultLayout: false}));
app.set('view engine', 'handlebars');

app.use('/api',router);
app.get('/', function (req, res) {
  res.send('Hello World!');
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use( (err:any, req:Request , res: Response, next: NextFunction) => {
  console.log('csdfmseknfsrfs')
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
  //res.json(err);
});
start();
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

module.exports = app;