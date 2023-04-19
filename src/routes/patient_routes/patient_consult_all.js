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

                if (status){
                        showPatients = await Patient.findAll(
                                {where:
                                        {
                                        serviceStatus:status
                                        }
                                });
                                return res.status(200).json(showPatients);
                        
                }else{
                        const patientsInDatabase = await Patient.findAll();
                        return res.status(200).json(patientsInDatabase);
                }
        } catch (error) {
                console.log(error);
                res.status(500).json({message: 'Internal server error. Try again later'});
        }

}

// async function handlePatientDataByStatus(req,res){
//         try {
                
//         } catch (error) {
                
//         }
// }

module.exports = {handlePatientDataAll};