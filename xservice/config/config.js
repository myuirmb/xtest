const config = {
    appid:'63145e45-e9d7-11e9-8da0-000c29e1fb59',
    db: {
        database: 'xtest',
        username: 'root',
        password: 'maria',
        conn: {
            host: 'localhost',
            port: '3306',
            dialect: 'mariadb',
            dialectOptions: {
                connectTimeout: 1000
            }
        }
    }
};
module.exports = config;