const express = require('express'); 
const connectSequelize = require('../../src/database');
        connectSequelize.sync({alter:true});
const Doctor = require('../../src/models/doctor_database');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

async function handleUpdateDoctor(req, res){
    try {
        const DoctorById = await Doctor.findByPk(req.params.id);
        
        if(!DoctorById){
            return res.status(400).json({message: 'Dados inválidos. Verifique o ID do médico e tente novamente.'})
            
        }else if (DoctorById !== null){
           
           if(
               req.body.id === null||
               DoctorById.full_name !== req.body.full_name ||
               DoctorById.gender!== req.body.gender ||
               DoctorById.dateOfBirth!==req.body.dateOfBirth ||
               DoctorById.cpf!== req.body.cpf ||
               DoctorById.phoneNumber!==req.body.phoneNumber ||
               DoctorById.academicInstitution!==req.body.academicInstitution||
               DoctorById.crmuf!== req.body.crmuf ||
               DoctorById.specialization!== req.body.specialization||
               DoctorById.systemStatus!==req.body.systemStatus
           ){
               
                let updatedAttributes = [];
                let updated = false;

                

                if(req.body.full_name && DoctorById.full_name !== req.body.full_name){
                DoctorById.full_name= req.body.full_name;
                await DoctorById.save();
                updatedAttributes.push(`Nome Completo: ${DoctorById.full_name}`);
                updated = true;
                };
                
                if(req.body.gender && DoctorById.gender !== req.body.gender){
                    if(Doctor.rawAttributes.gender.values.includes(req.body.gender)){
                    DoctorById.gender= req.body.gender
                    await DoctorById.save();
                    updatedAttributes.push( `Gênero: ${DoctorById.gender}`);
                    updated = true;
                    }else{
                        res.status(406).json({mensagem:`Favor inserir um status válido: ${Doctor.rawAttributes.gender.values}`})
                    }
                };
                    
                if(req.body.dateOfBirth && DoctorById.dateOfBirth !== req.body.dateOfBirth){
                    DoctorById.dateOfBirth = req.body.dateOfBirth;
                    await DoctorById.save();
                    updatedAttributes.push(`Data de Nascimento: ${DoctorById.dateOfBirth}`);
                    updated = true;
                };

                if(req.body.cpf && DoctorById.cpf!== req.body.cpf){
                    DoctorById.cpf = req.body.cpf;
                    await DoctorById.save();
                    updatedAttributes.push(`CPF: ${DoctorById.cpf}`);
                    updated = true;

                };

                if(req.body.phoneNumber && DoctorById.phoneNumber!==req.body.phoneNumber){
                    DoctorById.phoneNumber = req.body.phoneNumber;
                    await DoctorById.save();
                    updatedAttributes.push(`Telefone: ${DoctorById.phoneNumber}`);
                    updated = true;

                };

                if(req.body.academicInstitution && DoctorById.academicInstitution!==req.body.academicInstitution){
                    DoctorById.academicInstitution = req.body.academicInstitution;
                    await DoctorById.save();
                    updatedAttributes.push(`Instituição de Ensino da Formação: ${DoctorById.academicInstitution}`);
                    updated = true;

                };

                if(req.body.crmuf && DoctorById.crmuf!== req.body.crmuf){
                    DoctorById.crmuf = req.body.crmuf;
                    await DoctorById.save();
                    updatedAttributes.push(`CRM/UF: ${DoctorById.crmuf}`);
                    updated = true;

                };

                if(req.body.specialization && DoctorById.specialization!== req.body.specialization){
                    DoctorById.specialization = req.body.specialization;
                    await DoctorById.save();
                    updatedAttributes.push(`Especialização: ${DoctorById.specialization}`);
                    updated = true;

                };

                    
                if(req.body.systemStatus && DoctorById.systemStatus !== req.body.systemStatus){
                    if(Doctor.rawAttributes.systemStatus.values.includes(req.body.systemStatus)){
                        DoctorById.systemStatus= req.body.systemStatus
                        await DoctorById.save();
                        updatedAttributes.push(`Status no sistema: ${DoctorById.systemStatus}`);
                        updated = true;
                    }else{
                        res.status(406).json({mensagem:`Favor inserir um status válido: ${Doctor.rawAttributes.systemStatus.values}`})
                    }
                    
                };
                    // const separator = ", "
                console.log(updated);
                if(updated){
                    updatedAttributes = updatedAttributes.join( ", ")
                    
                    console.log(updatedAttributes)
                    return res.status(200).json({mensagem: `Os seguintes dados foram atualizados para o médico ${DoctorById.full_name}: ${updatedAttributes}`});
                }
            
            }else if(req.body.id && DoctorById.id!== req.body.id){
                res.status(403).json({mensagem: "Não é permitido mudar o ID no sistema manualmente."})
             
            }else{
                return res.status(406).json({mensagem:`Todos os dados do médico ${DoctorById.full_name} já estão atualizados. Cadastro: `,
                id: DoctorById.id,
                full_name : DoctorById.full_name,
                gender: DoctorById.gender,
                dateOfBirth: DoctorById.dateOfBirth,
                cpf: DoctorById.cpf,
                phoneNumber: DoctorById.phoneNumber,
                academicInstitution: DoctorById.academicInstitution,
                allergyList: DoctorById.crmuf,
                specialization: DoctorById.specialization,
                systemStatus:DoctorById.systemStatus});
            }
        }  
    
        
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Error interno do servidor. Por favor, tente novamente mais tarde'});
    }
}
module.exports = { handleUpdateDoctor };