const express = require('express'); 
const connectSequelize = require('../../src/database');
        connectSequelize.sync({alter:true});
const Nurse = require('../../src/models/nurse_database');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

async function handleUpdateNurse(req, res){

    try {
        let NurseById = await Nurse.findByPk(req.params.id);

        if(!NurseById){
             return res.status(404).json({message: 'Cadastro não encontrado. Verifique o ID do endermeiro e tente novamente.'})
        }else if (NurseById){
            
            if(
                req.body.id === null||
                NurseById.id !== req.body.id ||
                NurseById.full_name !== req.body.full_name ||
                NurseById.gender!== req.body.gender ||
                NurseById.dateOfBirth!==req.body.dateOfBirth ||
                NurseById.cpf!== req.body.cpf ||
                NurseById.phoneNumber!==req.body.phoneNumber ||
                NurseById.academicInstitution !== req.body.academicInstitution,
                NurseById.cofenuf !== req.body.cofenuf
            ){
                
                let updatedAttributes = [];
                let updated = false;
                

                if(req.body.full_name && NurseById.full_name !== req.body.full_name){
                    NurseById.full_name= req.body.full_name;
                    await NurseById.save();
                    updatedAttributes.push(`Nome Completo: ${NurseById.full_name}`);
                    updated = true;
                };
                
                if(req.body.gender && NurseById.gender !== req.body.gender){
                    if(Nurse.rawAttributes.gender.values.includes(req.body.gender)){
                    NurseById.gender= req.body.gender
                    await NurseById.save();
                    updatedAttributes.push( `Gênero: ${NurseById.gender}`);
                    updated = true;
                    }else{
                        res.status(406).json({mensagem:`Favor inserir um status válido: ${Nurse.rawAttributes.gender.values}`})
                    }
                };
                    
                if(req.body.dateOfBirth && NurseById.dateOfBirth !== req.body.dateOfBirth){
                    NurseById.dateOfBirth = req.body.dateOfBirth;
                    await NurseById.save();
                    updatedAttributes.push(`Data de Nascimento: ${NurseById.dateOfBirth}`);
                    updated = true;
                };

                if(req.body.cpf && NurseById.cpf!== req.body.cpf){
                    NurseById.cpf = req.body.cpf;
                    await NurseById.save();
                    updatedAttributes.push(`CPF: ${NurseById.cpf}`);
                    updated = true;

                };

                if(req.body.phoneNumber && NurseById.phoneNumber!==req.body.phoneNumber){
                    NurseById.phoneNumber = req.body.phoneNumber;
                    await NurseById.save();
                    updatedAttributes.push(`Telefone: ${NurseById.phoneNumber}`);
                    updated = true;

                };

                if(req.body.academicInstitution && NurseById.academicInstitution!==req.body.academicInstitution){
                    NurseById.academicInstitution = req.body.academicInstitution;
                    await NurseById.save();
                    updatedAttributes.push(`Instituição de Ensino de Formação: ${NurseById.academicInstitution}`);
                    updated = true;

                };

                if(req.body.cofenuf && NurseById.cofenuf!== req.body.cofenuf){
                    NurseById.cofenuf = req.body.cofenuf;
                    await NurseById.save();
                    updatedAttributes.push(`COFEN/UF ${NurseById.cofenuf}`);
                    updated = true;

                    };
                    // const separator = ", "
                console.log(updated);
                if(updated){
                    updatedAttributes = updatedAttributes.join( ", ")
                    
                    console.log(updatedAttributes)
                    return res.status(200).json({mensagem: `Os seguintes dados foram atualizados: ${updatedAttributes}`});
                }
            }else if(req.body.id && NurseById.id !== req.body.id){
                res.status(403).json({mensagem: "Não é permitido mudar o ID no sistema manualmente."})
            
            }else{
                return res.status(406).json({mensagem:`Todos os dados do enfermeiro ${NurseById.full_name} já estão atualizados. Cadastro: `,
                full_name : NurseById.full_name,
                gender: NurseById.gender,
                dateOfBirth: NurseById.dateOfBirth,
                cpf: NurseById.cpf,
                phoneNumber: NurseById.phoneNumber,
                academicInstitution: req.body.academicInstitution,
                cofenuf : req.body.cofenuf
            });
            }   
            
        }
    }catch(error){
        console.error(error)
        res.status(500).json({mensagem:'Erro interno do servidor. Verifique a rota e tente novamente.'});
    }
}

module.exports = { handleUpdateNurse };