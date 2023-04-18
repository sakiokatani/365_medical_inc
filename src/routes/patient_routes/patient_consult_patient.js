const express = require('express'); 
const connectSequelize = require('../../database');
        connectSequelize.sync({alter:true});
const Patient = require('../../models/patient_database');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());

async function handlePatientDataById(req, res){
       
        const patientInDatabase = await Patient.findByPk(req.params.id);
        console.log(patientInDatabase);
        try{
        if(!patientInDatabase){
                res.status(404).jason({mensagem:"paciente não encontrado. Verifique o ID e tente novamente."})
                
        }else{
                console.log(patientInDatabase.status);
                res.status(200).json(patientInDatabase)
        }
        } catch (error) {
        console.error(error);
        res.status(500).json({mensagem:'Server error'});
        }
}

module.exports = {handlePatientDataById};