const express = require('express'); 
const connectSequelize = require('../../database');
        connectSequelize.sync({alter:true});
const Patient = require('../../models/patient_database');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());



async function handleDeletePatient(req, res){
    try{
        const findPatientById = Patient.findByPk(req.params.id);
        if(findPatientById !== null){
        await Patient.destroy(
            {
                where:{
                    id: req.params.id
                }
            }
        )
        res.status(204);
        }else{
            res.status(404).json({mensagem: 'Cadastro não encontrado'})
        }
        
    }catch(error){
        console.error(error);
        res.status(500);
    }
})