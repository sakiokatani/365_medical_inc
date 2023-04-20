
const express = require('express'); 
const connectSequelize = require('../../database');
        connectSequelize.sync({alter:true});
const Patient = require('../../models/patient_database');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());

// No lugar de router.post('/api/pacientes', async (req, res)=>{" posso usar a função pré definida handle para que ele passe para o route a função de encontrar a rota, é como se funão fosse inserida dentro da rota post no route, para lidar com a parte da validação;
async function handleCreatePatient(req, res) {

 try {

    const patientData = {
        name: req.body.name,
        gender: req.body.gender,
        dateOfBirth: req.body.dateOfBirth,
        cpf: req.body.cpf,
        phoneNumber: req.body.phoneNumber,
        emergencyContact: req.body.emergencyContact,
        alllergyList: req.body.alllergyList,
        healthInsurance: req.body.healthInsurance,
        serviceStatus: req.body.serviceStatus,
        
    }
    console.log(patientData)

    if(!patientData.name || !patientData.gender || ! patientData.dateOfBirth || !patientData.cpf || !patientData.emergencyContact || !patientData.serviceStatus){
        return res.status(400).json({mensagem:'Dados inválidos ou incompletos. Preencha corretamente os campos indicados como obrigatórios'});
    }

    const filterPatientsByCpf = await Patient.findOne(
        {
            where:
             {
                cpf: patientData.cpf
            }
        }
    )
    
    const allowedServiceStatuses = [
        'AGUARDANDO_ATENDIMENTO',
        'EM_ATENDIMENTO',
        'ATENDIDO',
        'NAO_ATENDIDO'
      ];

      const allowedGender = [
        'FEMININO',
        'MASCULINO',
        'NAO_BINARIO',
        'OUTROS'
      ];



    if(filterPatientsByCpf === null){
        const newServiceStatus = req.body.serviceStatus;
        const newGender = req.body.gender;
        if (!allowedServiceStatuses.includes(newServiceStatus)) {
            return res.status(400).json({
              message: `Favor escolher um status válido: ${allowedServiceStatuses}.`
            });
        }

        if (!allowedGender.includes(newGender)) {
            return res.status(400).json({
              message: `Favor escolher um gênero válido: ${allowedGender}.`
            });
        }
        
        const newPatient = await Patient.create(patientData);
        
      
        console.log(newPatient);
        return res.status(201).json(newPatient);
        
        //atendimentos${}
    }else{
        return res.status(409).json({mensagem:'Conflito na criação de cadastro: CPF já existente no banco de dados.'})
    }
    

 } catch (error) {
    console.error(error);
    res.status(500).json({mensagem:'Patient creation unsuccessful'});
 }
}
// console.log(handleCreatePatient);
// module.exports = router;

module.exports = { handleCreatePatient };
