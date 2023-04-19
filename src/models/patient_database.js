const { Sequelize } = require('sequelize');
const connectSequelize = require ('../database');

const Patient = connectSequelize.define('patient',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    gender:{
        type: Sequelize.ENUM(
            'MASCULINO', 'FEMININO', 'NAO_BINARIO', 'OUTROS' 
        ),
        allowNull: false 
    },

    dateOfBirth:{
        type: Sequelize.DATEONLY,
        allowNull: false 
    },

    cpf:{
        type: Sequelize.STRING,
        allowNull: false,
        isUnique: true
    },
    
    phoneNumber:{
        type: Sequelize.STRING,
        allowNull: false 
    },

    emergencyContact:{
        type: Sequelize.STRING,
        allowNull: false 
    },

    alllergyList:{
        type: Sequelize.STRING,
        allowNull: true 
    },

    specialCareList:{
        type: Sequelize.STRING,
        allowNull: true
    },

    healthInsurance:{
        type: Sequelize.STRING,
        allowNull: true
    },
    
    serviceStatus:{
        type: Sequelize.ENUM(
            'AGUARDANDO_ATENDIMENTO', 'EM_ATENDIMENTO', 'ATENDIDO', 'NAO_ATENDIDO'
        ),
        allowNull: false
    },
    
    // classMethod: {
    //     associate: function(models){
    //         Doctor.hasMany(models.Doctor,{
    //             foreignKey: 'location'
    //         })
    //     }
    
    // //Depois verificar como fazer esse autoincrement com o dado de outro banco ou função, ou será que é do numero de atendimentos daquele paciente específico?
    // TotalOfTreatedPatients:{
    //     type: Sequelize.INTEGER,
    //     autoIncrement: true,
    //     allowNull: true
    // },


    
})


module.exports = Patient;
