// // const {Sequelize}= require('sequelize')
// // const connectSequelize = require('../../src/database');
// //         connectSequelize.sync({alter:true})
//         // .then(() => {
//         //     console.log('Foreign key constraint changed successfully!');
//         //   })
//         //   .catch((error) => {
//         //     console.error('Error changing foreign key constraint:', error);
//         //   });
// const Patient = require('./patient_database');
// const Doctor = require('./doctor_database');
// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../database');

// class NumberOfAttendedPatients extends Model {}

// NumberOfAttendedPatients.init({
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   doctorId: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     references: {
//       model: 'doctor_database',
//       key: 'id',
//     },
//   },
//   total: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     defaultValue: 0,
//   },
// }, {
//   sequelize,
//   modelName: 'NumberOfAttendedPatients',
// });

// // Associate the NumberOfAttendedPatients model with the Doctor model
// NumberOfAttendedPatients.belongsTo(Doctor, {
//   foreignKey: 'doctorId',
//   as: 'doctor',
// });

// module.exports = NumberOfAttendedPatients;
