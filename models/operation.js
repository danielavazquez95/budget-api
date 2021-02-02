
module.exports = (sequelize, type) => {
    return sequelize.define('operation', {
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        concept: type.STRING,
        price: type.INTEGER,
        date: type.STRING,
        type: type.STRING
    })

};