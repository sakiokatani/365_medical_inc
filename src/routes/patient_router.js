const express = require('express');
const patientRouter = express.Router();
const bodyParser = require('body-parser');
const { handleCreatePatient } = require('./patient_routes/patient_create');
const { handleUpdatePatient } = require('./patient_routes/patient_update');
const { handleDeletePatient } = require('./patient_routes/patient_delete' );
// const myMiddleware = require('../../controllers/user-controller');
// const patientCreateRouter = require('./patient_routes/patient_create');
const { handlePatientStatus } = require('./patient_routes/patient_statusUpdate');
const { handlePatientDataAll } = require('./patient_routes/patient_consult_all');
const { handlePatientDataById } = require('./patient_routes/patient_consult_id')

patientRouter.use(bodyParser.json());


// Define HTTP routes
//Não preciso de try catch aqui pois cada função já cuida disso
patientRouter.get('/', (req, res) => {
    res.status(200).json({message: 'connection to root has been established.'});
});


patientRouter.post('/pacientes', handleCreatePatient);
  
patientRouter.put('/pacientes/:id', handleUpdatePatient);

patientRouter.delete('/pacientes/:id', handleDeletePatient);

patientRouter.put('/pacientes/:id/status', handlePatientStatus);

patientRouter.get('/pacientes', handlePatientDataAll);

patientRouter.get('/pacientes/:id', handlePatientDataById);


  // Export router
  module.exports = patientRouter;





