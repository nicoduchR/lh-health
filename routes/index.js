var express = require('express');
var router = express.Router();
const nodemailer = require("nodemailer");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '' });
});

router.get('/wololo', async function(req, res, next) {
  let body = req.body;
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.office365.com', // Office 365 server
    port: 587,     // secure SMTP
    secure: false, // false for TLS - as a boolean not string - but the default is false so just remove this completely
    auth: {
        user: 'nicolas.duchemann@redlab.io',
        pass: "#Canoute1"
    },
    tls: {
        ciphers: 'SSLv3'
    }
  });

  
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"LH-Health" <nicolas.duchemann@redlab.io>', // sender address
    to: "nicolas.duchemann@redlab.io", // list of receivers
    subject: "Test", // Subject line
    text: "", // plain text body
    html: `

    'Message reçu !! Je continue ça demain mdr'
    
    ` // html body
    });

    res.setHeader('Content-Type', 'application/json');
    res.status(200).send('OK');

});

module.exports = router;
