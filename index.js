// Importando express, sequelize e banco de dados
// Chamando as funções e objetos

const express = require('express');
const application = express();
const connectSequelize = require ('./src/database');
    // connectSequelize.authenticate():
    connectSequelize.sync({alter:true});
const Patient = require('./src/models/patient_database');
const Doctor = require('./src/models/doctor_database');
const Nurse = require('./src/models/nurse_database');
const patientRouter = require('./src/routes/patient_router');
const doctorRouter = require('./src/routes/doctor_router');
const nurseRouter = require('./src/routes/nurse_router');
// const attendanceRouter = require('./src/routes/attendance_router')


application.use('/api', patientRouter);
application.use('/api', doctorRouter);
application.use('/api', nurseRouter);
// application.use('/api', attendanceRouter);


application.listen(3333,()=>{
    console.log("Connection to server has been established successfully.")
});