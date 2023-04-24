const express = require('express'); 
const connectSequelize = require('../../src/database');
        connectSequelize.sync({alter:true});
const Doctor = require('../../src/models/doctor_database');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());

// No lugar de router.post('/api/pacientes', async (req, res)=>{" posso usar a função pré definida handle para que ele passe para o route a função de encontrar a rota, é como se funão fosse inserida dentro da rota post no route, para lidar com a parte da validação;

async function handleDoctorStatus(req, res) {
    try {
      const doctorInDatabase = await Doctor.findByPk(req.params.id);
  
      if (!doctorInDatabase) {
        res.status(404).json({ mensagem: 'Médico não encontrado. Verifique o ID e tente novamente.' });
        return;
      }
  
      const newSystemStatus = req.body.systemStatus;
      const allowedServiceStatuses = Doctor.rawAttributes.systemStatus.values;
      if (!allowedServiceStatuses.includes(newSystemStatus)) {
        res.status(400).json({
          mensagem: `Favor inserir um status válido para médico: ${allowedServiceStatuses}`
        });
        return;
      }
  
      if (doctorInDatabase.systemStatus === newSystemStatus) {
        res.status(200).json({
            mensagem: `Status de Servço já é ${newSystemStatus} para médico ${doctorInDatabase.full_name}`
        });
        return;
      }
  
      doctorInDatabase.systemStatus = newSystemStatus;
      await doctorInDatabase.save();
      res.status(200).json({mensagem: `Status de Servço atualizado com sucesso para médico ${doctorInDatabase.full_name}`});
    
    } catch (error) {
      console.error(error);
      res.status(500).json({mensagem: 'Houve um erro interno no servidor. Verifique o caminho e tente novamente.'});
    }
  }



module.exports = { handleDoctorStatus };