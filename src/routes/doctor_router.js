const express = require('express');
const doctorRouter = express.Router();
const bodyParser = require('body-parser');
const { handleCreateDoctor } = require('./doctor_routes/doctor_create');
const { handleUpdateDoctor } = require('./doctor_routes/doctor_update');
const { handleDeleteDoctor } = require('./doctor_routes/doctor_delete' );
// const myMiddleware = require('../../controllers/user-controller');

const { handleDoctorStatus } = require('./doctor_routes/doctor_statusUpdate');
const { handleDoctorDataAll } = require('./doctor_routes/doctor_consult_all');
const { handleDoctorDataById } = require('./doctor_routes/doctor_consult_id');

doctorRouter.use(bodyParser.json());


// Define HTTP routes
doctorRouter.get('/', (req, res) => {
    res.status(200).json({message: 'connection to root has been established.'});
});

//criar as funções ainda
doctorRouter.post('/medicos', handleCreateDoctor);
  
doctorRouter.put('/medicos/:id', handleUpdateDoctor)

doctorRouter.delete('/medicos/:id', handleDeleteDoctor);

doctorRouter.put('/medicos/:id/status', handleDoctorStatus)

doctorRouter.get('/medicos', handleDoctorDataAll);

doctorRouter.get('/medicos/:id', handleDoctorDataById); 

  // Export router
  module.exports = doctorRouter;