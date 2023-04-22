const express = require('express'); 
const connectSequelize = require('../../src/database');
        connectSequelize.sync({alter:true});
const Nurse = require('../../src/models/nurse_database');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

async function handleUpdateNurse(req, res){
    try {
        const NurseById = await Nurse.findByPk(req.params.id);
        if(!NurseById){
            return res.status(400).json({message: 'Dados inválidos. Verifique o Id do médico e tente novamente.'})
            
        }
            NurseById.name= req.body.name,
            NurseById.gender= req.body.gender,
            NurseById.dateOfBirth= req.body.dateOfBirth,
            NurseById.cpf= req.body.cpf,
            NurseById.phoneNumber= req.body.phoneNumber,
            NurseById.academicInstitution= req.body.academicInstitution,
            NurseById.cofenuf= req.body.cofenuf
            
            
            if(Nurse.rawAttributes.gender.values.includes(req.body.gender)){
            NurseById.gender= req.body.gender
            } else{
                res.status(409).json({mensagem:`Favor inserir um status válido: ${Nurse.rawAttributes.gender.values}`})
            }
                    
            await NurseById.save();

            res.status(200).json(NurseById);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Erro interno do servidor. Por favor, tente novamente mais tarde'});
    }
}
module.exports = { handleUpdateNurse };