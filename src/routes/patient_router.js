const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const { handleCreatePatient } = require('./patient_routes/patient_create');
const { handleUpdatePatient } = require('./patient_routes/patient_update');
const { handleDeletePatient } = require('./patient_routes/patient_delete' );
// const myMiddleware = require('../../controllers/user-controller');
const patientCreateRouter = require('./patient_routes/patient_create');
const { handlePatientStatus } = require('./patient_routes/patient_statusUpdate');
const { handlePatientDataAll } = require('./patient_routes/patient_consult_all');

router.use(bodyParser.json());


// Define HTTP routes
router.get('/', (req, res) => {
    res.status(200).json({message: 'connection to root has been established.'});
});


router.post('/pacientes', handleCreatePatient);
  
router.put('/pacientes/:id', handleUpdatePatient)

router.delete('/pacientes/:id', handleDeletePatient)

router.put('/pacientes/:id/status', handlePatientStatus)

router.get('/pacientes', handlePatientDataAll) 

  // Export router
  module.exports = router;





