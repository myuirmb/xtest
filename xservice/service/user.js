const crypto = require('crypto');
const uuidv4 = require('uuid/v4');
const config = require('../config/config');
const usermodel = require('../maria/model/user');

class user {
    constructor() { }

    create(username, password) {
        const hmac = crypto.createHmac('sha512', config.appid);
        hmac.update(password);
        const pwd = hmac.digest('hex');

        return usermodel.create({
            uid: uuidv4(),
            uname: username,
            pwd/* ,
            disflag,
            delflag */
        });
    }

    getall(s){
        return usermodel.findAll(s);
    }
}

module.exports = user;