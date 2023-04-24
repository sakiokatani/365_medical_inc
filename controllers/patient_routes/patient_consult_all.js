const express = require('express'); 
const connectSequelize = require('../../src/database');
        connectSequelize.sync({alter:true});
const Patient = require('../../src/models/patient_database');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());

async function handlePatientDataAll(req, res){
        try {   
                const status = req.query.status;
                let showPatients;

                if (status){
                        showPatients = await Patient.findAll(
                                {where:
                                        {
                                        serviceStatus:status
                                        }
                                });
                                return res.status(200).json(showPatients);
                // caso não seja especificado uma query params na rota, mostrar todos os pacientes        
                }else{
                        const patientsInDatabase = await Patient.findAll();
                        return res.status(200).json(patientsInDatabase);
                }
        } catch (error) {
                console.log(error);
                res.status(500).json({message: 'Erro interno do servidor. Verifique a rota e tente novamente'});
        }
}


module.exports = {handlePatientDataAll};