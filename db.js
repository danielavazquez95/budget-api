const Sequelize = require('sequelize');
const OperationModel = require('./models/operation');

const sequelize = new Sequelize('wwwbVTX3lr', 'wwwbVTX3lr', 'oE3WaRUA89', {
    host: 'remotemysql.com',
    dialect: 'mysql'
} );


const Operation = OperationModel(sequelize, Sequelize);

sequelize.sync({force: false})
    .then(() => {
        console.log('Synchronized tables')
    });

module.exports = {
    Operation
};