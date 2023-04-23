const express = require('express'); 
const connectSequelize = require('../../src/database');
        connectSequelize.sync({alter:true});
const Patient = require('../../src/models/patient_database');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());


async function handleUpdatePatient(req, res){
    try {
        let patientInDatabase = await Patient.findByPk(req.params.id);

        if(!patientInDatabase){
             return res.status(400).json({message: 'Dados inválidos. Verifique o Id do paciente e tente novamente.'})
        }else if (patientInDatabase){
            
            if(
                patientInDatabase.full_name !== req.body.full_name ||
                patientInDatabase.gender!== req.body.gender ||
                patientInDatabase.dateOfBirth!==req.body.dateOfBirth ||
                patientInDatabase.cpf!== req.body.cpf ||
                patientInDatabase.phoneNumber!==req.body.phoneNumber ||
                patientInDatabase.emergencyContact!==req.body.emergencyContact||
                patientInDatabase.alllergyList!== req.body.alllergyList ||
                patientInDatabase.specialCareList!== req.body.specialCareList||
                patientInDatabase.healthInsurance!==req.body.healthInsurance ||
                patientInDatabase.serviceStatus!==req.body.serviceStatus
            ){
                
                    let updatedAttributes = [];
                    let updated = false;
                    if(req.body.full_name && patientInDatabase.full_name !== req.body.full_name){
                        patientInDatabase.full_name= req.body.full_name;
                        await patientInDatabase.save();
                        updatedAttributes.push(`Nome Completo: ${patientInDatabase.full_name}`);
                        updated = true;
                    };
                    
                    if(req.body.gender && patientInDatabase.gender !== req.body.gender){
                        if(Patient.rawAttributes.gender.values.includes(req.body.gender)){
                        patientInDatabase.gender= req.body.gender
                        await patientInDatabase.save();
                        updatedAttributes.push( `Gênero: ${patientInDatabase.gender}`);
                        updated = true;
                        }else{
                            res.status(406).json({mensagem:`Favor inserir um status válido: ${Patient.rawAttributes.gender.values}`})
                        }
                    };
                        
                    if(req.body.dateOfBirth && patientInDatabase.dateOfBirth !== req.body.dateOfBirth){
                        patientInDatabase.dateOfBirth = req.body.dateOfBirth;
                        await patientInDatabase.save();
                        updatedAttributes.push(`Data de Nascimento: ${patientInDatabase.dateOfBirth}`);
                        updated = true;
                    };

                    if(req.body.cpf && patientInDatabase.cpf!== req.body.cpf){
                        patientInDatabase.cpf = req.body.cpf;
                        await patientInDatabase.save();
                        updatedAttributes.push(`CPF: ${patientInDatabase.cpf}`);
                        updated = true;

                    };

                    if(req.body.phoneNumber && patientInDatabase.phoneNumber!==req.body.phoneNumber){
                        patientInDatabase.phoneNumber = req.body.phoneNumber;
                        await patientInDatabase.save();
                        updatedAttributes.push(`Telefone: ${patientInDatabase.phoneNumber}`);
                        updated = true;

                    };

                    if(req.body.emergencyContact && patientInDatabase.emergencyContact!==req.body.emergencyContact){
                        patientInDatabase.emergencyContact = req.body.emergencyContact;
                        await patientInDatabase.save();
                        updatedAttributes.push(`Contato de Emergência: ${patientInDatabase.emergencyContact}`);
                        updated = true;

                    };

                    if(req.body.alllergyList && patientInDatabase.alllergyList!== req.body.alllergyList){
                        patientInDatabase.alllergyList = req.body.alllergyList;
                        await patientInDatabase.save();
                        updatedAttributes.push(`Alergias: ${patientInDatabase.alllergyList}`);
                        updated = true;

                     };

                    if(req.body.specialCareList && patientInDatabase.specialCareList!== req.body.specialCareList){
                        patientInDatabase.specialCareList = req.body.specialCareList;
                        await patientInDatabase.save();
                        updatedAttributes.push(`Cuidados Especiais: ${patientInDatabase.specialCareList}`);
                        updated = true;

                    };

                    if(req.body.healthInsurance && patientInDatabase.healthInsurance!==req.body.healthInsurance){
                        patientInDatabase.healthInsurance = req.body.healthInsurance;
                        await patientInDatabase.save();
                        updatedAttributes.push(`Convênio: ${patientInDatabase.healthInsurance}`);
                        updated = true;

                    };

                        
                    if(req.body.serviceStatus && patientInDatabase.serviceStatus !== req.body.serviceStatus){
                        if(Patient.rawAttributes.serviceStatus.values.includes(req.body.serviceStatus)){
                            patientInDatabase.serviceStatus= req.body.serviceStatus
                            await patientInDatabase.save();
                            updatedAttributes.push(`Status do Serviço: ${patientInDatabase.serviceStatus}`);
                            updated = true;
                        }else{
                            res.status(406).json({mensagem:`Favor inserir um status válido: ${Patient.rawAttributes.serviceStatus.values}`})
                        }
                        
                    };
                        // const separator = ", "
                    console.log(updated);
                    if(updated){
                        updatedAttributes = updatedAttributes.join( ", ")
                        
                        console.log(updatedAttributes)
                        return res.status(200).json({mensagem: `Os seguintes dados foram atualizados: ${updatedAttributes}`});
                    }
        }else{
            return res.status(406).json({mensagem:`Todos os dados do paciente ${patientInDatabase.full_name} já estão atualizados. Cadastro: `,
            full_name : patientInDatabase.full_name,
            gender: patientInDatabase.gender,
            dateOfBirth: patientInDatabase.dateOfBirth,
            cpf: patientInDatabase.cpf,
            phoneNumber: patientInDatabase.phoneNumber,
            emergencyContact: patientInDatabase.emergencyContact,
            allergyList: patientInDatabase.alllergyList,
            specialCAreList: patientInDatabase.specialCareList,
            healthInsurance: patientInDatabase.healthInsurance,
            serviceStatus:patientInDatabase.serviceStatus});
        }   
        
        }
    }catch(error){
        console.error(error)
        res.status(404).json({mensagem:'Cadastro não encontrado. Verifique o ID e tente novamente.'});
    }
}

module.exports = {handleUpdatePatient};