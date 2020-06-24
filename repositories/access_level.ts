connection = require('../config/config.ts');


const retrieveAccessLevel = (access_level_id) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM access_level WHERE id=${access_level_id}`, function (error, results, fields) {
            if (results) {
                resolve(results)
            } else {
                reject(error);
            }
        });
    });
}

const listAccessLevel = () => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM access_level`, function (error, results, fields) {
            if (results) {
                resolve(results)
            } else {
                reject(error);
            }
        });
    });
}

exports.retrieveAccessLevel = retrieveAccessLevel;
exports.listAccessLevel = listAccessLevel;