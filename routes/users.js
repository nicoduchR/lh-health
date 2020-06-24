var express = require('express');
let bcrypt = require("bcryptjs");
let jwt = require('jsonwebtoken');

const config = require('../config/config.ts');
const PRIVATE_KEY_JWT = process.env.privatekeyjwt || 'default';

var router = express.Router();


connection = require('../config/config.ts');


const ACCESS_LEVEL = require('../repositories/access_level.ts');
const USERS = require('../repositories/users.ts');

//login: retrieve a token to access other routes
router.post('/login', (req, res, next) => {

    var email = req.body.email;
    var password = req.body.password;
    //checking to make sure the user entered the correct username/password combo

    // Retrieve users with specified email
    USERS.findUserByMail(email).then(response => {
        if (response.length > 0) {
            bcrypt.compare(password, response[0].password, async function (err, result) {
                if (result) {
                    var access_level = null;

                    // Get model information if model_id not null
                    if(response[0].access_level != null) {
                        await ACCESS_LEVEL.retrieveAccessLevel(response[0].access_level).then(response => {
                            access_level_object = response[0];
                        });
                    }


                    let userObject = {
                        id: response[0].id,
                        first_name: response[0].first_name,
                        last_name: response[0].last_name,
                        email: response[0].email,
                        description: response[0].description,
                        access_level: access_level_object,
                    };

                    jwt.sign(userObject, PRIVATE_KEY_JWT, (err, token) => {
                        if (err) { console.log(err) }

                        console.log(userObject.access_level.name)
                        res.cookie('jwt', token)
                        if(userObject.access_level.name == "ADMIN" || userObject.access_level.name == "USER"){
                            res.redirect('/certify')
                        }else{
                            res.redirect('/verify')
                        }
                        
                    });
                    

                } else {
                    console.log('ERROR: Could not log in');
                    res.render('index', {
                        title: 'REDLab',
                        notCredentials: true
                   });
                }
            });
        } else {
            res.render('index', {
                 title: 'REDLab',
                 notCredentials: true
            });
        }
    });
})


module.exports = router;
