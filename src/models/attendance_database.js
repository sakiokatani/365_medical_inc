const { Sequelize, Model } = require('sequelize');
const connectSequelize = require('../database')
const Doctor = require('./doctor_database');
const Patient = require('./patient_database');

const Attendance = connectSequelize.define('attendance', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      doctorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      patientId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      total: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
        
      },

    },    
);

Attendance.prototype.incrementTotal = async function () {
  this.total = this.total + 1;
}

Attendance.associate = function(models) {
    Attendance.belongsTo(models.Doctor, { foreignKey: 'doctorId' });
    Attendance.belongsTo(models.Patient, { foreignKey: 'patientId' });
    };

    module.exports = Attendance;