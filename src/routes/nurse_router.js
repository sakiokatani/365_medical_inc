const express = require('express');
const nurseRouter = express.Router();
const bodyParser = require('body-parser');
const { handleCreateNurse } = require('./nurse_routes/nurse_create');
const { handleUpdateNurse } = require('./nurse_routes/nurse_update');
const { handleDeleteNurse } = require('./nurse_routes/nurse_delete' );
// // const myMiddleware = require('../../controllers/user-controller');

// const { handleNurseStatus } = require('./nurse_routes/nurse_statusUpdate');
// const { handleNurseDataAll } = require('./nurse_routes/nurse_consult_all');
// const { handleNurseDataById } = require('./nurse_routes/nurse_consult_id');

nurseRouter.use(bodyParser.json());


// Define HTTP routes
nurseRouter.get('/', (req, res) => {
    res.status(200).json({message: 'connection to root has been established.'});
});

//criar as funções ainda
nurseRouter.post('/enfermeiros', handleCreateNurse);
  
nurseRouter.put('/enfermeiros/:id', handleUpdateNurse)

nurseRouter.delete('/enfermeiros/:id', handleDeleteNurse);

// nurseRouter.put('/medicos/:id/status', handleNurseStatus)

// nurseRouter.get('/medicos', handleNurseDataAll);

// nurseRouter.get('/medicos/:id', handleNurseDataById); 

  // Export router
  module.exports = nurseRouter;