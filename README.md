# 365_medical_inc

<h3><b>O QUE É O 365 MEDICAL INC?</b></h3>
365 Medical Inc é um RestfulAPI construído como projeto avaliativo do Módulo 1 do curso de Full Stack Development do SENAI-SC, em parceria com o projeto Floripa Mais Tec da pregeitura de Florianópolis-SC e a instituição de ensino LaABA365. <br>
A Proposta do projeto avaliativo consiste na construção do API através de Express Node.js e Sequelize com postgreSQL, visando efetuar cadastro, atualização e deleção de pacientes, médicos e enfermeiros, a fim de facilitar o processo de consultas e modificação do banco de dados de uma clínica médica ou hospital.<br>
<br>

<h3>Tecnologias utilizadas</h3>

<ul>Linguagem:
<il>JavaScript</il></ul>

<ul>Frameworks
<il>Express</il>
<il>OMR Sequelize</il>
<il>Node.js</il></ul>>

<h3>Requisitos:</h3>
<ul><li>IDE de desenvolvimento de web/software(VSCode, Atom, etc)</li>
<li>Node.js</li>
<li>SGBD postgre(pgAdmin)</li>
<li>API de manipulação de dados(postman, Insomnia)</li>
</ul>

<h3>INFORMAÇÕES PARA USUÁRIO:</h3>

<h3>Como executar o projeto</h3>
<ul><h4>Instalaçãodas fameworks:</h4>
<li>Inicialize o node com o comando <i>npm init</i></li> 
<li>Instale o Express: <i>npm install express</i></li>
<li>Instale o Sequelize e o postgre: <i>npm install sequelize pg pg-hstore</i></li>
<li>Instale o nodemon: <i>npm install nodemon</i></li></ul>
<li>Inicialize o projeto: <i>npm start</i></li></ul>

<br>
<h3><b>COMO REALIZAR OPERAÇÕES NO BANCO DE DADOS</b></h3>
A modificação do banco de dados deve ser feita através de APIs de requisição e envio de dados como Postman ou Insomnia, com o body sempre em JSON e seguindo as sequintes rotas:
<br>

<ul><h4><b>Para pacientes:</b></h4><br>
<ul><b>Criação de novos cadastros:</b><br>
<li>Tipo de rota: POST<br></li>
<li>Rota: http://localhost:3333/api/pacientes </li></ul><br>
<ul><b>Atualização de castro:</b><br>
<li>Tipo de rota: PUT</li>
<li>Rota: http://localhost:3333/api/pacientes/:id (substitua :id pelo número do ID do paciente)</li></ul><br>
<ul><li><b>Atualização de status:</b><br>
<li>Tipo de rota: PUT<br>
<li>Rota: http://localhost:3333/api/pacientes/:id/status (substitua :id pelo <li>número do ID do paciente)</ul><br>
<ul><li><b>Deleção de cadastro:</b><br>
<li>Tipo de rota: DELETE<br>
<li>Delete: http://localhost:3333/api/pacientes/:id (substitua :id pelo <li>número do ID do paciente)</ul></li><br>
<ul><li><b>Consulta geral:</b><br>
<li>Tipo de rota: GET<br>
<li>Rota: http://localhost:3333/api/pacientes (substitua :id pelo número do ID do paciente)</li> <br>
<li>Rota: http://localhost:3333/api/pacientes?status (substitua <i>:id</i> pelo número do ID do paciente e <i>?status</i> por ?status=<status atual>)</ul></li> <br>
<ul><li><b>Consulta por ID:</b><br>
<li>Tipo de rota: GET<br>
<li>Rota: http://localhost:3333/api/pacientes/:id (substitua :id pelo número do ID do paciente)</ul></li></ul><br>
<br>

<ul><h4><b>Para Médicos:</b></h4><br>
<ul><b>Criação de novos cadastros:</b><br>
<li>Tipo de rota: POST<br></li>
<li>Rota: http://localhost:3333/api/medicos </li></ul><br>
<ul><b>Atualização de castro:</b><br>
<li>Tipo de rota: PUT</li>
<li>Rota: http://localhost:3333/api/medicos/:id (substitua :id pelo número do ID do medico)</li></ul><br>
<ul><li><b>Atualização de status:</b><br>
<li>Tipo de rota: PUT<br>
<li>Rota: http://localhost:3333/api/medicos/:id/status (substitua :id pelo <li>número do ID do medico)</ul><br>
<ul><li><b>Deleção de cadastro:</b><br>
<li>Tipo de rota: DELETE<br>
<li>Delete: http://localhost:3333/api/medicos/:id (substitua :id pelo <li>número do ID do medico)</ul></li><br>
<ul><li><b>Consulta geral:</b><br>
<li>Tipo de rota: GET<br>
<li>Rota: http://localhost:3333/api/medicos (substitua :id pelo número do ID do medico)</li> <br>
<li>Rota: http://localhost:3333/api/medicos?status (substitua <i>:id</i> pelo número do ID do medico e <i>?status</i> por ?status=<status atual>)</li></ul> <br>
<ul><li><b>Consulta por ID:</b><br>
<li>Tipo de rota: GET<br>
<li>Rota: http://localhost:3333/api/medicos/:id (substitua :id pelo número do ID do medico)</li></ul></ul><br>

<br>
<ul><h4><b>Para Enfermeiros:</b></h4><br>
<ul><b>Criação de novos cadastros:</b><br>
<li>Tipo de rota: POST<br></li>
<li>Rota: http://localhost:3333/api/enfermeiros </li></ul><br>
<ul><b>Atualização de castro:</b><br>
<li>Tipo de rota: PUT</li>
<li>Rota: http://localhost:3333/api/enfermeiros/:id (substitua :id pelo número do ID do enfermeiro)</li></ul><br>
<ul><li><b>Atualização de status:</b><br>
<li>Tipo de rota: PUT<br>
<ul><li><b>Deleção de cadastro:</b><br>
<li>Tipo de rota: DELETE<br>
<li>Delete: http://localhost:3333/api/enfermeiros/:id (substitua :id pelo <li>número do ID do enfermeiro)</ul></li><br>
<ul><li><b>Consulta geral:</b><br>
<li>Tipo de rota: GET</li><br>
<li>Rota: http://localhost:3333/api/enfermeiros (substitua :id pelo número do ID do enfermeiro)</li> </ul><br>
<ul><li><b>Consulta por ID:</b><br>
<li>Tipo de rota: GET<br>
<li>Rota: http://localhost:3333/api/enfermeiros/:id (substitua :id pelo número do ID do enfermeiro)</li></ul></ul><br>


<h3>INFORMAÇÕES PARA DESENVOLVEDORES:<h3>

//estruturação em módulos e pastas, seguindo a estrutura:
//o que ainda falta implementar: colocar nome completo na tabela de attendances ao relacionar médico e paciente
//implementação de consulta por nome, não apenas id