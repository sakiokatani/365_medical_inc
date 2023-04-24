# 365_medical_inc

<h3><b>O QUE É O 365 MEDICAL INC?</b></h3>
365 Medical Inc é um RestfulAPI construído como projeto avaliativo do Módulo 1 do curso de Full Stack Development do SENAI-SC, em parceria com o projeto Floripa Mais Tec da pregeitura de Florianópolis-SC e a instituição de ensino LaABA365. <br>
A Proposta do projeto avaliativo consiste na construção do API através de Express Node.js e Sequelize com postgreSQL, visando efetuar cadastro, atualização e deleção de pacientes, médicos e enfermeiros, a fim de facilitar o processo de consultas e modificação do banco de dados de uma clínica médica ou hospital.<br>
<br>

<h3>Tecnologias utilizadas</h3>

<ul>Linguagem:</ul>
<il>JavaScript</il>

<ul>Frameworks</ul>>
<il>Express</il>
<il>OMR Sequelize</il>
<il>Node.js</il>

<h3>Como executar o projeto</h3>
<ul><h4>Instalaçãodas fameworks:</h4></ul>
<li>Inicialize o node com o comando <i>npm init</i></li> 
<li>Instale o Express: <i>npm install express</i></li>
<li>Instale o Sequelize e o postgre: <i>npm install sequelize pg pg-hstore</i></li>
<li>Instale o nodemon: <i>npm install nodemon</i></li>
<br>
<ul><h4>Inicialização:</h4></ul>
<li></li>
<li></li>
<br>
<br>
<h3><b>COMO REALIZAR OPERAÇÕES NO BANCO DE DADOS</b></h3>
A modificação do banco de dados deve ser feita através de IDEs de requisição a APis como Postman ou Insomnia, seguindo as sequintes rotas:
<br>
<ul><h4><b>Para pacientes:</b></h4><br>
<ul><b>Criação de novos cadastros:</b><br>
<li>Tipo de rota: POST<br></li>
<li>Rota: http://localhost:3333/api/pacientes </li></ul><br>
<ul><b>Atualização de castro:</b><br>
<li>Tipo de rota: PUT<br></li>
<li>Rota: http://localhost:3333/api/pacientes/:id (substitua :id pelo número do ID do paciente)</li><ul><br>
<li><b>Atualização de status:</b><br>
<li>Tipo de rota: PUT<br>
<li>Rota: http://localhost:3333/api/pacientes/:id/status (substitua :id pelo <li>número do ID do paciente)<br>
<li><b>Deleção de cadastro:</b><br>
<li>Tipo de rota: DELETE<br>
<li>Delete: http://localhost:3333/api/pacientes/:id (substitua :id pelo <li>número do ID do paciente)
<li><b>Consulta geral:</b><br>
<li>Tipo de rota: GET<br>
<li>Rota: http://localhost:3333/api/pacientes (substitua :id pelo número do ID do paciente)
<li><b>Consulta por ID:</b><br>
<li>Tipo de rota: GET<br>
<li>Rota: http://localhost:3333/api/pacientes/:id (substitua :id pelo número do ID do paciente)<br><ul>
<br>
<h4><b>Para Médicos:</b></h4><br>
<b>Criação de novos cadastros:</b><br>
Tipo de rota: POST<br>
Rota: http://localhost:3333/api/medicos <br>
<b>Atualização de castro:</b><br>
Tipo de rota: PUT<br>
Rota: http://localhost:3333/api/medicos/:id (substitua :id pelo número do ID do paciente)<br>
<b>Atualização de status:</b><br>
Tipo de rota: PUT<br>
Rota: http://localhost:3333/api/medicos/:id/status (substitua :id pelo número do ID do paciente )<br>
<b>Deleção de cadastro:</b><br>
Tipo de rota: DELETE<br>
Rota: http://localhost:3333/api/pacientes/:id (substitua :id pelo número do ID do paciente)<br>
<b>Consulta geral:</b><br>
Tipo de rota: GET<br>
Rota: http://localhost:3333/api/pacientes (substitua :id pelo número do ID do paciente)<br>
Rota: http://localhost:3333/api/pacientes?status (substitua <i>:id</i> pelo número do ID do paciente e <i>status<>/i por status=<statusatual>)<br>
<b>Consulta por ID:</b><br>
Tipo de rota: GET<br>
Delete: http://localhost:3333/api/pacientes/:id (substitua :id pelo número do ID do paciente)<br>
<br>
<h4><b>Para Enfermeiros:</b></h4><br>
<b>Criação de novos cadastros:</b><br>
<b>Atualização de castro:</b><br>
<b>Deleção de cadastro:</b><br>
<b>Consulta geral:</b><br>
<b>Consulta por ID:</b><br>
<br>
<b></b>



