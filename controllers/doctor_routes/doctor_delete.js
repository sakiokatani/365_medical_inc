const express = require('express'); 
const connectSequelize = require('../../src/database');
        connectSequelize.sync({alter:true});
const Doctor = require('../../src/models/doctor_database');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

async function handleDeleteDoctor(req, res){
    try {
        const findDoctorById = await Doctor.findByPk(req.params.id);
        console.log(findDoctorById);
        if(findDoctorById === null){
            return res.status(404).json({mensagem: "Não há um médico com este ID"});
        } else{ 

        await Doctor.destroy(
            {
                where:
                {
                    id: req.params.id
                }
            }
        )
        return res.status(204).json({mensagem: "Deletado com sucesso"});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({mensagem: "Error interno do servidor. Por favor, tente novamente mais tarde."})      
    }
};

module.exports = {handleDeleteDoctor};