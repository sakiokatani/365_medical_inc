const express = require('express');
const nurseRouter = express.Router();
const bodyParser = require('body-parser');
const { handleCreateNurse } = require('../../controllers/nurse_routes/nurse_create');
const { handleUpdateNurse } = require('../../controllers/nurse_routes/nurse_update');
const { handleDeleteNurse } = require('../../controllers/nurse_routes/nurse_delete' );
// // const myMiddleware = require('../../controllers/user-controller');

// const { handleNurseStatus } = require('./nurse_routes/nurse_statusUpdate');
const { handleNurseDataAll } = require('../../controllers/nurse_routes/nurse_consult_all');
const { handleNurseDataById } = require('../../controllers/nurse_routes/nurse_consult_id');

nurseRouter.use(bodyParser.json());


// Define HTTP routes
nurseRouter.get('/', (req, res) => {
    res.status(200).json({message: 'connection to root has been established.'});
});

//criar as funções ainda
nurseRouter.post('/enfermeiros', handleCreateNurse);
  
nurseRouter.put('/enfermeiros/:id', handleUpdateNurse)

nurseRouter.delete('/enfermeiros/:id', handleDeleteNurse);

nurseRouter.get('/enfermeiros', handleNurseDataAll);

nurseRouter.get('/enfermeiros/:id', handleNurseDataById); 

  // Export router
  module.exports = nurseRouter;