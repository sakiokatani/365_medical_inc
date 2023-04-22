const express = require('express'); 
const connectSequelize = require('../../src/database');
        connectSequelize.sync({alter:true});
const Patient = require('../../src/models/patient_database');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());

async function handlePatientDataById(req, res){
       
        const patientInDatabase = await Patient.findByPk(req.params.id);
        try{
                if(patientInDatabase === null){
               return res.status(404).json({mensagem:"paciente não encontrado. Verifique o ID e tente novamente."})
                
        }else{
               return res.status(200).json(patientInDatabase)
        }
        } catch (error) {
        console.error(error);
        res.status(500).json({mensagem:'Server error'});
        }
}

module.exports = {handlePatientDataById};