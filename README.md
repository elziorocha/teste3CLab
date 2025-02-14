<h1 align="center"> Teste 3C Lab </h1>

### **Recursos e Tecnoligias utilizadas:**

- 📂**backend**: Contém o código relacionado ao servidor, feito com NodeJS (juntamente com express) e MYSQL para criação do banco de dados.
- 📂**frontend**: Contém o código da interface do usuário, feito utilizando React+Vite, com estilizações em TailwindCSS.

### **Como rodar o projeto:**

- 📂**Banco de Dados**:
    - Será necessário utilizar xampp (ou software similiar) para rodar o banco de dados localmente na porta 3306 (user: root, sem senha).
    - No campo local, será criada o database "teste3c", as tabelas, são criadas automaticamente ao inicializar o projeto no backend.

- 📂**backend**:
    - Utilizar o comando "npm i", ao entrar na pasta backend, e logo após instalar as dependências necessárias, executar o comando "npm run dev", para inicializar o nodemon (http://localhost:3000/).

- 📂**frontend**: 
    - Utilizar o comando "npm i", ao entrar na pasta frontend, e logo após instalar as dependências necessárias, executar o comando "npm run dev", para inicializar o serviço ("http://localhost:5173/").

<hr align="center"/>

### **API RESTful:**
    -   A Api foi desenvolvida em NodeJS, com a estrutura de Rotas, Controllers e Models.
- 📂**database**:
    -   Dentro da pasta "database", na pasta de backend, estão dois arquivos para conexão e criação da modelagem do banco de dados do projeto.
    -   O arquivo "connection.js", serve para estabelecer a conexão com o database (na utilização deste projeto, o local com o xampp).
    -   O arquivo "databaseTables.js", foi de utilização para a criação das tabelas no banco de dados, assim que conectado, contendo parâmetros de criar apenas se o banco ainda não existe localmente.
