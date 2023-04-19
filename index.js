// Importando express, sequelize e banco de dados
// Chamando as funções e objetos

const express = require('express');
const application = express();
const connectSequelize = require ('./src/database');
    // connectSequelize.authenticate():
    connectSequelize.sync({alter:true});
const Patient = require('./src/models/patient_database');
const Doctor = require('./src/models/doctor_database');
const patientRouter = require('./src/routes/patient_router');
const doctorRouter = require('./src/routes/doctor_router');
const myMiddleware = require('./controllers/user-controller')


application.use('/api', patientRouter);
application.use('/api', doctorRouter);


application.listen(3333,()=>{
    console.log("Connection to server has been established successfully.")
});