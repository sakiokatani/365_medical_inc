const express = require('express'); 
const connectSequelize = require('../../src/database');
        connectSequelize.sync({alter:true});
const Doctor = require('../../src/models/doctor_database');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

async function handleCreateDoctor(req, res){
    try {
        const doctorData = {
            full_name: req.body.full_name,
            gender: req.body.gender,
            dateOfBirth: req.body.dateOfBirth,
            cpf: req.body.cpf,
            phoneNumber: req.body.phoneNumber,
            academicInstitution: req.body.academicInstitution,
            crmuf: req.body.crmuf,
            specialization: req.body.specialization,
            systemStatus: req.body.systemStatus,
            }

        const filterDoctorByCpf = await Doctor.findOne(
            {
                where:
                {
                    cpf: req.body.cpf,
                }
            }
        )
        const filterDoctorByCrm = await Doctor.findOne(
            {
                where:
                {
                    crmuf: req.body.crmuf
                }
            }
        )
        
        if(!doctorData.full_name || !doctorData. dateOfBirth|| !doctorData.cpf || !doctorData. specialization || !doctorData.crmuf ){
            return res.status(406).json({mensagem: 'Preencha todos os campos obrigatórios'});
            }

        if(filterDoctorByCpf === null && filterDoctorByCrm === null){
            const newDoctor = await Doctor.create(doctorData);
            return res.status(200).json(newDoctor);

        }else if(filterDoctorByCpf !== null){
            return res.status(409).json({mensagem: 'Este CPF já está cadastrado no sistema'})

        }else if(filterDoctorByCrm !== null){
            return res.status(409).json({mensagem: 'Este CRM/UF já está cadastrado no sistema'})
        }
        

               
    } catch (error) {
        console.error(error);
        res.status(500).json({mensagem: 'Erro interno do servidor. Tente novamente mais tarde'});
    }
}

module.exports = { handleCreateDoctor };
