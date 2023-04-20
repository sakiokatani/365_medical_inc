const express = require('express'); 
const connectSequelize = require('../../database');
        connectSequelize.sync({alter:true});
const Doctor = require('../../models/doctor_database');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

async function handleUpdateDoctor(req, res){
    try {
        const DoctorById = await Doctor.findByPk(req.params.id);
        if(!DoctorById){
            return res.status(400).json({message: 'Dados inválidos. Verifique o Id do médico e tente novamente.'})
            
        }
            DoctorById.name= req.body.name,
            DoctorById.gender= req.body.gender,
            DoctorById.dateOfBirth= req.body.dateOfBirth,
            DoctorById.cpf= req.body.cpf,
            DoctorById.phoneNumber= req.body.phoneNumber,
            DoctorById.academicInstitution= req.body.academicInstitution,
            DoctorById.crmuf= req.body.crmuf,
            DoctorById.specialization= req.body.specialization
            
            
            if(Doctor.rawAttributes.systemStatus.values.includes(req.body.systemStatus)){
            DoctorById.systemStatus= req.body.systemStatus
            } else{
                res.status(409).json({mensagem:"Favor inserir um status válido."})
            }
                    
            await DoctorById.save();

            res.status(200).json(DoctorById);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Error interno do servidor. Por favor, tente novamente mais tarde'});
    }
}
module.exports = { handleUpdateDoctor };