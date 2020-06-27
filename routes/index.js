var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '' });
});



const bluetooth = require('node-bluetooth');
 
// create bluetooth device instance
const device = new bluetooth.DeviceINQ();



device
.on('finished',  console.log.bind(console, 'finished'))
.on('found', function found(address, name){
  console.log('Found: ' + address + ' with name ' + name);
}).scan();


module.exports = router;
