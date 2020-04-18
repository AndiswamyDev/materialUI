var express = require('express');
var router = express.Router();
var chalk = require('chalk');
var pug = require('pug');

/* GET User input Form page. */
router.get('/', (req, res) => {
    try {
        res.render('index');        
    } catch (e) {
        res.send(e);
    }
});

module.exports = router;