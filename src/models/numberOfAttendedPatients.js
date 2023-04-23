const {Sequelize, Model}= require('sequelize')
const connectSequelize = require('../../src/database');
        connectSequelize.sync({alter:true});
// const sequelize = require('../database');
const Patient = require('./patient_database');
const Doctor = require('./doctor_database');



const TotalOfAttendances = sequelize.define('totalOfAttendances', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    doctorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: Doctor,
          key: 'id'
        }
    },

    patientId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Patient,
            key: 'id'
        }
    },
    date: {
        type: Sequelize.DATEONLY,
        allowNull: false
    }
});

TotalOfAttendances.belongsTo(Patient);
TotalOfAttendances.belongsTo(Doctor);


module.exports = TotalOfAttendances;