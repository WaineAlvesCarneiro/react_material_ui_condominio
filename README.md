Condomínio

Bem-vindo ao repositório do projeto react_material_ui_condominio! Este é um sistema para a gestão de condomínios.

Descrição do Projeto

Este projeto tem como objetivo principal fornecer uma plataforma digital para a administração de condomínios, incluindo.

Gerenciamento de Moradores e Unidades: Endpoints para o ciclo de vida completo de moradores e apartamentos.

Ao cadastrar ou editar os dados do morador a API envia um email para o morador.

Validações de campos e ao excluir um imóvel com morador vinculado o sistema exibe uma notificação.

Autenticação e Autorização: Sistema de segurança utilizando JWT para garantir que apenas usuários autorizados possam acessar a aplicação.


Tecnologias Utilizadas

Frontend:

React

JavaScript

CSS

Backend:

Comunica com API disponível no GitHub:

RESTful API em C# - ASP Net Core versão 8 - https://github.com/WaineAlvesCarneiro/AspNetCore_Condominio

ou

RESTful API em Java - JAVA Versão 21 com Spring Boot e utilizando Maven - https://github.com/WaineAlvesCarneiro/java_api_condominio

Banco de Dados:
    
PostgreSQL

Pré-requisitos

Antes de começar, certifique-se de que você tem as seguintes ferramentas instaladas:

Node.js (versão 14 ou superior recomendada)

npm (geralmente incluído com o Node.js)

PostgreSQL instalado juntamente com pgAdmin 4 para criar database e tabelas no banco de dados

Ao instalar o PostgreSQL defina:

username=postgres

password=postgres

Em seguida execute os scripts disponíveis no projeto condomínio de Backend

https://github.com/WaineAlvesCarneiro/PostgreSQL_sql_condominio

Instalação e Execução

Siga os passos abaixo para configurar e executar o projeto localmente:

Clone o repositório:

https://github.com/WaineAlvesCarneiro/react_material_ui_condominio

cd react_material_ui_condominio

Instale as dependências:

npm install react-router-dom axios

npm install @mui/material @emotion/react @emotion/styled @mui/icons-material

npm install react-datepicker

npm install jwt-decode

npm install react-toastify

npm install react-imask

Configure o ambiente:

Execute a aplicação:

npm start

A aplicação estará disponível em http://localhost:4200/.

Para testar use:

Usuário: admin

Senha: 12345

Desenvolvido por Waine Alves Carneiro