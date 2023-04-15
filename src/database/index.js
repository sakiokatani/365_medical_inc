const Sequelize = require('sequelize');

const connectSequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'admin',
    port: '5432',
    database: 'labmedicinebd',

    define:{
        timestamp: true,
        underscored: true,
        underscoredAll: true
    },
})

module.exports = connectSequelize;