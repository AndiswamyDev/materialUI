var express = require('express');
var chalk = require('chalk');
var path = require('path');

var indexRouter = require('./routes/index');
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

// parse application/json
app.use(bodyParser.json());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/', indexRouter);

let port = '2000';

app.listen(port, () => {
    console.log(chalk.bold(`Am listening on ${port} port!!!`));
})

module.exports = app;
