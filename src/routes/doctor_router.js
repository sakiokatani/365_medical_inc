const express = require('express');
const DoctorRouter = express.Router();
const bodyParser = require('body-parser');
const { handleCreateDoctor } = require('./doctor_routes/doctor_create');
const { handleUpdateDoctor } = require('./doctor_routes/doctor_update');
const { handleDeleteDoctor } = require('./doctor_routes/pdoctor_delete' );
// const myMiddleware = require('../../controllers/user-controller');
// const DoctorCreateRouter = require('./patient_routes/patient_create');
const { handleDoctorStatus } = require('./doctor_routes/doctor_statusUpdate');
const { handleDoctorDataAll } = require('./doctor_routes/doctor_consult_all');

DoctorRouter.use(bodyParser.json());


// Define HTTP routes
DoctorRouter.get('/', (req, res) => {
    res.status(200).json({message: 'connection to root has been established.'});
});

//criar as funções ainda
DoctorRouter.post('/medicos', handleCreateDoctor);
  
DoctorRouter.put('/medicos/:id', handleUpdateDoctor)

DoctorRouter.delete('/medicos/:id', handleDeleteDoctor)

DoctorRouter.put('/medicos/:id/status', handleDoctorStatus)

DoctorRouter.get('/medicos', handleDoctorDataAll) 

  // Export router
  module.exports = DoctorRouter;