var express = require('express');
var router = express.Router();
const nodemailer = require("nodemailer");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '' });
});

router.get('/wololo', async function(req, res, next) {
  let body = req.body;
    console.log(body);
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(body);

});

module.exports = router;
