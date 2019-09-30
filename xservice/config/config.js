const config = {
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