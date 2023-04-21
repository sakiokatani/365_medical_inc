const express = require('express'); 
const connectSequelize = require('../../database');
        connectSequelize.sync({alter:true});
const Nurse = require('../../models/nurse_database');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());



async function handleDeleteNurse(req, res){
    try{
        // console.log("Entrei no try");
        const findNurseById = await Nurse.findByPk(req.params.id) ;
        // console.log(findNurseById);

        if(findNurseById !== null){
            await Nurse.destroy(
                {
                    where:{
                        id: req.params.id
                    }
                }
                )
                return res.status(204).json({message:'Nurse deleted successfully'});

                //PRGUNTA PRA CORREÇÃO: PQ NÃO FUNCIONA SEM O JSON COM RES.STATUS(204) - NÃO RETORNA RESPOSTA,
                // MAS FUNCIONA 204 COM JSON E 2000 COM JSON NORMALMENTE
        } else{
            return res.status(404).json({mensagem: "Cadastro não encontrado"});

        }
        
    }catch(error){
        console.error(error);
        res.status(500);
    }
}

module.exports = {handleDeleteNurse};