const express = require('express'); 
const connectSequelize = require('../../src/database');
        connectSequelize.sync({alter:true});
const Patient = require('../../src/models/patient_database');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());

// No lugar de router.post('/api/pacientes', async (req, res)=>{" posso usar a função pré definida handle para que ele passe para o route a função de encontrar a rota, é como se funão fosse inserida dentro da rota post no route, para lidar com a parte da validação;

async function handlePatientStatus(req, res) {
    try {
      const patientInDatabase = await Patient.findByPk(req.params.id);
  
      if (!patientInDatabase) {
        return res.status(404).json({ message: 'Paciente não encontrado' });
      }
  
      const newServiceStatus = req.body.serviceStatus;
  
      if (patientInDatabase.serviceStatus !== newServiceStatus && !Patient.rawAttributes.serviceStatus.values.includes(newServiceStatus)) {
        return res.status(400).json({message: `Favor inserir um status válido para paciente: ${Patient.rawAttributes.serviceStatus.values}`});
      
      }else if(patientInDatabase.serviceStatus === newServiceStatus && Patient.rawAttributes.serviceStatus.values.includes(newServiceStatus)){
        return res.status(200).json({message: `Status de Servço já é ${newServiceStatus} para paciente ${patientInDatabase.full_name}`});
      
      }else{
        patientInDatabase.serviceStatus = newServiceStatus;
        await patientInDatabase.save();
        return res.status(200).json({mensagem: `Status de Servço atualizado para ${patientInDatabase.serviceStatus} para paciente ${patientInDatabase.full_name}`});
      }
      
  
      
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message:
          'Houve um erro interno no servidor. Verifique o caminho e tente novamente.'
      });
    }
  }


module.exports = { handlePatientStatus };