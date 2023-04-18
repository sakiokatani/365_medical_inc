const express = require('express'); 
const connectSequelize = require('../../database');
        connectSequelize.sync({alter:true});
const Patient = require('../../models/patient_database');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());

// No lugar de router.post('/api/pacientes', async (req, res)=>{" posso usar a função pré definida handle para que ele passe para o route a função de encontrar a rota, é como se funão fosse inserida dentro da rota post no route, para lidar com a parte da validação;

async function handlePatientStatus(req, res) {
    try {
      const patientInDatabase = await Patient.findByPk(req.params.id);
  
      if (!patientInDatabase) {
        res.status(404).json({ message: 'Paciente não encontrado' });
        return;
      }
  
      const newServiceStatus = req.body.serviceStatus;
      const allowedServiceStatuses = [
        'AGUARDANDO ATENDIMENTO',
        'EM ATENDIMENTO',
        'ATENDIDO',
        'NAO ATENDIDO'
      ];
  
      if (!allowedServiceStatuses.includes(newServiceStatus)) {
        res.status(400).json({
          message: 'Favor inserir um status válido para paciente'
        });
        return;
      }
  
      if (patientInDatabase.serviceStatus === newServiceStatus) {
        res.status(200).json({
          message: `Status de Servço já é ${newServiceStatus} para paciente ${patientInDatabase.name}`
        });
        return;
      }
  
      patientInDatabase.serviceStatus = newServiceStatus;
      await patientInDatabase.save();
      res
        .status(200)
        .json({
          mensagem: `Status de Servço atualizado com sucesso para paciente ${patientInDatabase.name}`
        });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message:
          'Houve um erro interno no servidor. Verifique o caminho e tente novamente.'
      });
    }
  }






// async function handlePatientStatus(req, res) {

//     try {
//         console.log("entrei no try");
//         const patientInDatabase = await Patient.findByPk(req.params.id);
//         const newServiceStatus = req.body.serviceStatus;
//         const serviceStatusEnum = {
//             AGUARDANDO_ATENDIMENTO: 'AGUARDANDO ATENDIMENTO',
//             EM_ATENDIMENTO: 'EM ATENDIMENTO',
//             ATENDIDO: 'ATENDIDO',
//             NAO_ATENDIDO: 'NAO ATENDIDO'
//           };
//         console.log(patientInDatabase);
//         if(!patientInDatabase){
//             res.status(404).json({message:'Paciente não encontrado'});
//         }else if(patientInDatabase.serviceStatus === newServiceStatus || !Object.values(serviceStatusEnum).includes(newServiceStatus)){
//             res.status(400).json({message:'Favor inserir um status válido para o paciente'});
//         }
        
        
//         patientInDatabase.serviceStatus= req.body.serviceStatus;

//         await patientInDatabase.save();
//         res.status(200).json({mensagem:`Status de Servço atualizado com sucesso para paciente ${patientInDatabase.name}`});

//     } catch (error) {
//         console.error(error);
//         res.status(404).json({message:'Não há nenhum registro com os dados informados. Verifique o caminho e tente novamente'})
//     }
// }


module.exports = { handlePatientStatus };