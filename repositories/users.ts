var connection = require('../config/config.ts');


const findUserByMail = (email) => {
    
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM Users WHERE email = '${email}'`, function (error, results, fields) {
            if (results) {
                console.log(results);
                resolve(results)
            } else {
                reject(error);
            }
        });
    });
}

exports.findUserByMail = findUserByMail;
