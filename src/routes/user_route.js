const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const { handleCreatePatient } = require('./patient_routes/patient_create');
const { handleUpdatePatient } = require('./patient_routes/patient_update');
const { handleDeletePatient } = require('./patient_routes/patient_delete' );
// const myMiddleware = require('../../controllers/user-controller');
const patientCreateRouter = require('./patient_routes/patient_create');
const { handlePatientStatus } = require('./patient_routes/patient_statusUpdate');
const { handlePatientDataById } = require('./patient_routes/patient_list');

router.use(bodyParser.json());


// Define HTTP routes
router.get('/', (req, res) => {
    res.status(200).json({message: 'connection to root has been established.'});
});


router.post('/pacientes', async (req, res) => {
    try {
      const createPatient = await handleCreatePatient(req, res);
    //   return res.status(200).json(result); // se colocar res aqui não passa a response da função
    } catch (error) {
      console.error(error);
    //   return res.status(500).json({ error: error.message });
    }
  });
  
router.put('/pacientes/:id', async (req, res)=>{
    try {
        const updatePatient = await handleUpdatePatient(req, res);
    } catch (error) {
        console.error(error);
    }
})

router.delete('/pacientes/:id', async(req, res)=>{
    try {
        const deletePatient = await handleDeletePatient(req,res);
        console.log(deletePatient);
    } catch (error) {
        console.error(error);
    }
})

router.put('/pacientes/:id/status', async(req, res)=>{
    try {
        const updatePatientServiceStatus = await handlePatientStatus(req, res);
        console.log(updatePatientServiceStatus);
    } catch (error) {
        console.error(error);
    }
});

router.get('/pacientes/:id', async(req,res) => {
    try {
        const getPatientDataById = await handlePatientDataById(req, res);
        
    } catch (error) {
        console.error(error);
    }
  })
  // Export router
  module.exports = router;





