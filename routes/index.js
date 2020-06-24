var express = require('express');
var router = express.Router();
const web3 = require('web3');
const path = require('path');
const fs = require("fs-extra");
const solc = require("solc");
const fetch = require('node-fetch');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '' });
});

module.exports = router;
