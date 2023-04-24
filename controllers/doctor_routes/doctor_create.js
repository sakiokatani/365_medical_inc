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

        if(!doctorData.full_name || !doctorData. dateOfBirth|| !doctorData.cpf || !doctorData.academicInstitution|| !doctorData. specialization || !doctorData.crmuf ){
            return res.status(406).json({mensagem: 'Os campos full_name, dateOfBirth, cpf, academicInstitution, specialization e crmuf são obrigatórios para a criação de um cadastro médico.'});
            }else{

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
        
        

        if(filterDoctorByCpf === null && filterDoctorByCrm === null){
            const allowedGender = Doctor.rawAttributes.gender;
            if(req.body.gender && !allowedGender.values.includes(req.body.gender)){
                return res.status(406).json({mensagem:`Entre com um valor válido para gênero: ${allowedGender.values}`})
            }

            if(req.body.systemStatus && ! Doctor.rawAttributes.systemStatus.values.includes(req.body.systemStatus)){
                return res.status(406).json({mensagem:`Entre com um status válido: ${Doctor.rawAttributes.systemStatus.values}`})
            }

            if(req.body.specialization && !Doctor.rawAttributes.specialization.values.includes(req.body.specialization)){
                return res.status(406).json({mensagem:`Entre com ums especialização válida: ${Doctor.rawAttributes.specialization.values}`})
            }


            const newDoctor = await Doctor.create(doctorData);
            return res.status(200).json(newDoctor);

        }else if(filterDoctorByCpf !== null){
            return res.status(409).json({mensagem: `Este CPF já está cadastrado no sistema sob o medico ${filterDoctorByCrm.full_name}`})

        }else if(filterDoctorByCrm !== null){
            return res.status(409).json({mensagem: `Este CRM/UF já está cadastrado no sistema sob o medico ${filterDoctorByCrm.full_name}`})
        }
        
    }
               
    } catch (error) {
        console.error(error);
        res.status(500).json({mensagem: 'Erro interno do servidor. Verifique a rota e tente novamente.'});
    }
}

module.exports = { handleCreateDoctor };
