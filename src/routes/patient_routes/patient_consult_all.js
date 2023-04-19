const express = require('express'); 
const connectSequelize = require('../../database');
        connectSequelize.sync({alter:true});
const Patient = require('../../models/patient_database');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());

async function handlePatientDataAll(req, res){
        try {   
                const status = req.query.status;
                let showPatients;
                //Verificar primeiro se o status está sendo explicitado no req e então filtrar todos que têm esse status
                //Como query é opcional, indicado por ? não é necessário colocar na rota, então posso fazer um if em uma única função
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
                res.status(500).json({message: 'Internal server error. Try again later'});
        }
}


module.exports = {handlePatientDataAll};