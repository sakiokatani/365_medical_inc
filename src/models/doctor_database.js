

const { Sequelize } = require('sequelize');
const connectSequelize = require ('../database');

const Doctor = connectSequelize.define('doctor',{
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
            'MASCULINO', 'FEMININO', 'NÃO-BINÁRIO', 'OUTROS' 
        ),
        allowNull: false 
    },

    dateOfBirth:{
        type: Sequelize.DATEONLY,
        allowNull: false 
    },

    cpf:{
        type: Sequelize.STRING,
        allowNull: false 
    },
    
    phoneNumber:{
        type: Sequelize.STRING,
        allowNull: false 
    },

    academicInstitution:{
        type: Sequelize.STRING,
        allowNull: false 
    },

    CRM/UF:{
        type: Sequelize.STRING,
        allowNull: true,
        isUnique: true
    },

    specialization:{
        type: Sequelize.ENUM(
            'CLINICO_GERAL', 
            'ANESTESISTA', 
            'DERMATOLOGIA',
            'GINECOLOGIA', 
            'NEUROLOGIA', 
            'PEDIATRIA', 
            'PSIQUIATRIA', 
            'ORTOPEDIA'
        ),
        allowNull: false
    },

    sistemStatus:{
        type: Sequelize.ENUM(
            'ATIVO',
            'INATIVO'
        ),
        allowNull: true
    },
    
    // //Depois verificar como fazer esse autoincrement com o dado de outro banco ou função, ou será que é do numero de atendimentos daquele paciente específico?
    // TotalOfTreatedPatients:{
    //     type: Sequelize.INTEGER,
    // for (let counter =0; atendimento === true; counter ++){
    // 
    // }
    //  
    // },
    //método: perguntar qual médico e qual paciente foir feito o atendimento, ter identificador do paciente
    


    
})


module.exports = Doctor;

