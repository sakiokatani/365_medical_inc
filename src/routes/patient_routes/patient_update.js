const express = require('express'); 
const connectSequelize = require('../../database');
        connectSequelize.sync({alter:true});
const Patient = require('../../models/patient_database');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());


async function handleUpdatePatient(req, res){
    try {
        const patientInDatabase = await Patient.findByPk(req.params.id);
        
        if(!patientInDatabase){
            return res.status(404).json({message: 'Cadastro não encontrado'})
        };
        
            patientInDatabase.name= req.body.name;
            patientInDatabase.gender= req.body.gender;
            patientInDatabase.dateOfBirth= req.body.dateOfBirth;
            patientInDatabase.cpf= req.body.cpf;
            patientInDatabase.phoneNumber= req.body.phoneNumber;
            patientInDatabase.emergencyContact= req.body.emergencyContact;
            patientInDatabase.alllergyList= req.body.alllergyList;
            patientInDatabase.specialCareList= req.body.specialCareList;
            patientInDatabase.healthInsurance= req.body.healthInsurance;
            patientInDatabase.serviceStatus= req.body.serviceStatus;
        
        
        await patientInDatabase.save();
        res.json(patientInDatabase);
        
        }catch(error){
        res.status(404).json({mensagem:'Cadastro não encontrado. Verifique os dados e tente novamente.'});
        }

};

module.exports = {handleUpdatePatient};