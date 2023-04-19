const express = require('express');
const PatientRouter = express.Router();
const bodyParser = require('body-parser');
const { handleCreatePatient } = require('./patient_routes/patient_create');
const { handleUpdatePatient } = require('./patient_routes/patient_update');
const { handleDeletePatient } = require('./patient_routes/patient_delete' );
// const myMiddleware = require('../../controllers/user-controller');
const patientCreateRouter = require('./patient_routes/patient_create');
const { handlePatientStatus } = require('./patient_routes/patient_statusUpdate');
const { handlePatientDataAll } = require('./patient_routes/patient_consult_all');

PatientRouter.use(bodyParser.json());


// Define HTTP routes
PatientRouter.get('/', (req, res) => {
    res.status(200).json({message: 'connection to root has been established.'});
});


PatientRouter.post('/pacientes', handleCreatePatient);
  
PatientRouter.put('/pacientes/:id', handleUpdatePatient)

PatientRouter.delete('/pacientes/:id', handleDeletePatient)

PatientRouter.put('/pacientes/:id/status', handlePatientStatus)

PatientRouter.get('/pacientes', handlePatientDataAll) 

  // Export router
  module.exports = PatientRouter;





