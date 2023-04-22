const express = require('express'); 
const connectSequelize = require('../../src/database');
        connectSequelize.sync({alter:true});
const Nurse = require('../../src/models/nurse_database');

const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

async function handleCreateNurse(req, res){
    try {
        console.log("Entrei")
        const nurseData ={
            name: req.body.name,
            gender: req.body.gender,
            dateOfBirth: req.body.dateOfBirth,
            cpf: req.body.cpf,
            phoneNumber: req.body.phoneNumber,
            academicInstitution: req.body.academicInstitution,
            cofenuf: req.body.cofenuf
        }
        console.log(nurseData)
        
        const filterNurseByCpf = await Nurse.findOne(
            {
                where:
                {
                    cpf: req.body.cpf,
                }
            }
        )

        const filterNurseByCofen =  await Nurse.findOne(
        {
        where:{
            cofenuf: req.body.cofenuf
            }
        }
    );
    console.log(filterNurseByCpf);
    console.log(filterNurseByCofen);
    
    if(filterNurseByCpf !== null ){
        return res.status(409).json({mensagem: `Enfermeiro ${filterNurseByCpf.name} com este CPF já está cadastrado no sistema`})
    };
    if(filterNurseByCofen !== null){
        return res.status(409).json({mensagem: `Enfermeiro ${filterNurseByCofen.name} com este COFEN/UF já está cadastrado no sistema`})
    };


    if(filterNurseByCpf === null && filterNurseByCofen === null){
        const allowedGender = Nurse.rawAttributes.gender;

        if(!allowedGender.values.includes(req.body.gender)){
            return res.status(406).json({mensagem:`Entre com um valor válido para gênero: ${allowedGender}`})
        }
        
        const newNurse = await Nurse.create(nurseData);
        return res.status(200).json(newNurse);
    }
        
    

    }catch (error) {
        console.error(error)
        res.status(500).json({mensagem: "Erro interno do servidor. Tente novamente mais tarde"})
    }
}

module.exports = { handleCreateNurse };