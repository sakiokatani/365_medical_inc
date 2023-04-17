const express = require('express'); 
const connectSequelize = require('../../database');
        connectSequelize.sync({alter:true});
const Patient = require('../../models/patient_database');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());



async function handleDeletePatient(req, res){
    try{
        console.log("Entrei no try");
        const findPatientById = await Patient.findByPk(req.params.id) ;
        // console.log(findPatientById);

        if(findPatientById !== null){
            await Patient.destroy(
                {
                    where:{
                        id: req.params.id
                    }
                }
                )
                res.status(204).json({message:'Patient deleted successfully'});

                //PRGUNTA PRA CORREÇÃO: PQ NÃO FUNCIONA SEM O JSON COM RES.STATUS(204) - NÃO RETORNA RESPOSTA,
                // MAS FUNCIONA 204 COM JSON E 2000 COM JSON NORMALMENTE
        } else{
            console.log("trouxa tem esse cadastro não");
            res.status(404).json({mensagem: "Cadastro não encontrado"});

        }
        
    }catch(error){
        console.error(error);
        res.status(500);
    }
}

module.exports = {handleDeletePatient};