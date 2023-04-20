const express = require('express'); 
const connectSequelize = require('../../database');
        connectSequelize.sync({alter:true});
const Doctor = require('../../models/doctor_database');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());

async function handleDoctorDataById(req, res){
       
        const doctorInDatabase = await Doctor.findByPk(req.params.id);
        try{
                if(doctorInDatabase === null){
               return res.status(404).json({mensagem:"Médico não encontrado. Verifique o ID e tente novamente."})
                
        }else{
               return res.status(200).json(doctorInDatabase)
        }
        } catch (error) {
        console.error(error);
        res.status(500).json({mensagem:'Server error'});
        }
}

module.exports = { handleDoctorDataById };