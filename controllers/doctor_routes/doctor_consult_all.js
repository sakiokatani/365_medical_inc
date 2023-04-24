const express = require('express'); 
const connectSequelize = require('../../src/database');
        connectSequelize.sync({alter:true});
const Doctor = require('../../src/models/doctor_database');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(express.json());

async function handleDoctorDataAll(req, res){
    try {
        const status = req.query.status;
        const allowedStatus = Doctor.rawAttributes.systemStatus;

        if(!allowedStatus.values.includes(status)){
            return res.status(400).json({mensagem: `Insira um status permitido na requisição: ${allowedStatus.values}`})
        }

        if(status){
            const findDoctorsByStatus = await Doctor.findAll(
                {
                where:
                {
                    systemStatus : status
                }
            }
            );
            const listDoctorsByStatus = findDoctorsByStatus.map(({id, full_name, phoneNumber,specialization})=>({
                id,
                full_name,
                phoneNumber,
                specialization
                }
            ));
            console.log(listDoctorsByStatus);
            // return  res.status(200).json({mensagem:`Médicos com status ${status}: ${JSON.stringify(listDoctorsByStatus).replace(/[\[\]"]+/g, '')}`})
            return  res.status(200).json(listDoctorsByStatus)
        }else{
            const listAllDoctors = await Doctor.findAll();
            return res.status(200).json(listAllDoctors);

           
        }
       
    } catch (error) {
        console.error(error);
        res.status(500).json({mensagem: 'Erro interno do servidor. Verifique a rota e tente novamente.'});
    }
}

module.exports = { handleDoctorDataAll };