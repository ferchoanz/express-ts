"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// lib/app.ts
const express = require("express");
// Create a new express application instance
const app = express();
// add extends
let cors = require("cors");
require("reflect-metadata");
let createError = require('http-errors');
const path_1 = __importDefault(require("path"));
const hbs = require('express-handlebars');
// router api's
const api_1 = __importDefault(require("./routes/api"));
// db
const db_1 = __importDefault(require("./db"));
const DB = new db_1.default();
DB.init().then(() => {
    console.log("conexion establecida");
});
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', api_1.default);
app.get('/', function (req, res) {
    res.send('Hello World!');
});
// view engine setup
app.set('views', path_1.default.join(__dirname, 'views'));
app.engine('handlebars', hbs({ defaultLayout: false }));
app.set('view engine', 'handlebars');
// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });
// error handler
app.use((err, req, res, next) => {
    console.log('csdfmseknfsrfs');
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
    //res.json(err);
});
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
module.exports = app;
