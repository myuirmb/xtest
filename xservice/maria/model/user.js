const seq = require('sequelize');
// const uuidv4 = require('uuid/v4');
const conn = require('../conn');

class user extends seq.Model { };
user.init({
    uid: {
        type: seq.UUID,
        primaryKey: true,
        allowNull: false/* ,
        defaultValue: uuidv4() */
    },
    uname: {
        type: seq.STRING(64),
        allowNull: false
    },
    pwd: {
        type: seq.STRING(512),
        allowNull: false
    },
    nname: seq.STRING(256),
    remark: seq.STRING(512),
    createdAt: {
        type: seq.BIGINT,
        defaultValue: Date.now(),
        field: 'ctime'
    },
    updatedAt: {
        type: seq.BIGINT,
        field: 'utime'
    }
}, {
    sequelize: conn,
    timestamps: false,
    tableName: 'sys_user'
});

// const user=conn.define('user',
//     {
//         uid: {
//             type: seq.UUID,
//             primaryKey: true,
//             allowNull: false/* ,
//             defaultValue: uuidv4() */
//         },
//         uname: {
//             type: seq.STRING(64),
//             allowNull: false
//         },
//         pwd: {
//             type: seq.STRING(512),
//             allowNull: false
//         },
//         nname: seq.STRING(256),
//         remark: seq.STRING(512),
//         createdAt: {
//             type: seq.BIGINT,
//             defaultValue: Date.now(),
//             field: 'ctime'
//         },
//         updatedAt: {
//             type: seq.BIGINT,
//             field: 'utime'
//         }
//     },
//     {
//         timestamps: false,
//         tableName: 'sys_user'
//     }
// );

module.exports = user;