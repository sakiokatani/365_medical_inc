const express = require('express'); 
const connectSequelize = require('../../database');
        connectSequelize.sync({alter:true});
const Doctor = require('../../models/doctor_database');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(express.json());

async function handleDoctorDataAll(req, res){
    try {
        const status = req.query.status;
        const allowedStatus = [
            'ATIVO',
            'INATIVO'
        ]

        if(!allowedStatus.includes(status)){
            return res.status(400).json({mensagem: `status permitidos: ${allowedStatus}`})
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
            const listDoctorsByStatus = findDoctorsByStatus.map(({id, name, specialization})=>({
                id,
                name,
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
        res.status(500).json({mensagem: 'Erro interno do servidor. Tente novamente mais tarde'});
    }
}

module.exports = { handleDoctorDataAll };