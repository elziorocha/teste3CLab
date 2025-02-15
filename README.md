<h1 align="center"> Teste 3C Lab </h1>

### **Recursos e Tecnoligias utilizadas:**

- 📂**backend**: Contém o código relacionado ao servidor, feito com NodeJS (juntamente com express) e MYSQL para criação do banco de dados.
- 📂**frontend**: Contém o código da interface do usuário, feito utilizando React+Vite, com estilizações em TailwindCSS.

### **Como rodar o projeto:**

- 📂**Banco de Dados**:

  - Será necessário utilizar xampp (ou software similiar) para rodar o banco de dados localmente na porta 3306, inicalizando o APACHE e o MySQL
    (user: root, sem senha).
  - No campo local, será criada o database "teste3c", as tabelas, são criadas automaticamente ao inicializar o projeto no backend.

- 📂**backend**:

  - Utilizar o comando "npm i", ao entrar na pasta backend, e logo após instalar as dependências necessárias, executar o comando "npm run dev", para inicializar o nodemon (http://localhost:3000/).

- 📂**frontend**:
  - Utilizar o comando "npm i", ao entrar na pasta frontend, e logo após instalar as dependências necessárias, executar o comando "npm run dev", para inicializar o serviço ("http://localhost:5173/").

<hr align="center"/>

### **API RESTful/Backend:**

    -   A Api foi desenvolvida em NodeJS, com a estrutura de Rotas, Controllers e Models.

- 📂**database**:

  - Dentro da pasta "database", na pasta de backend, estão dois arquivos para conexão e criação da modelagem do banco de dados do projeto.

  - O arquivo "connection.js", serve para estabelecer a conexão com o database (na utilização deste projeto, o local com o xampp).

  - O arquivo "databaseTables.js", foi de utilização para a criação das tabelas no banco de dados, assim que conectado, contendo parâmetros de criar apenas se o banco ainda não existe localmente.

- 📂**models**:

  - As models, divididas em arquivos na pasta models (devModel.js/nivelModel.js), possuem o mecanismo de consulta ao banco de dados, executando os comandos necessários para a execução de tarefas requeridas;

- 📂**controllers**:

  - Divididos na pasta controllers (devController.js/nivelController.js), obtém a função de executar as requisições e parâmetros de busca por id no banco de dados, para executar as ações desejadas(get, post, put e delete);

- 📂**routers**:
  - As rotas do projeto, encontradas na pasta routers (devRoute.js/nivelRoute.js), tem a funcionalidade de oferecer o caminho necessário para a execução das funcionalidades do controller;

### **As rotas são resumidas em:**

    -  - Dev -
    - "http://localhost:3000/api/dev" para get e post
    - "http://localhost:3000/api/dev/:id" para put e delete

    -  - Nível -
    - "http://localhost:3000/api/nivel" para get e post
    - "http://localhost:3000/api/nivel/:id" para put e delete

- **testes**:
  - Para executar testes das chamadas da API, foi utilizado a extensão do ThunderClient (extensão disponibilzada no VSCode), onde foi criado uma pasta para o projeto, e subdividido em pastas de get, post, put e delete para dev e nível;

### **Frontend**

    -   O frontend foi realizado utilizando React como framework com Vite para melhor versionamento;
    -   Como padrão de estilização, foi utilizado o tailwindCSS, para remoção de arquivos CSS e melhor organização de arquivos em pastas no projeto;
    (Se a estilização não estiver em total funcionamento, o tailwind pode não ter carregado localmente, onde é necessário reiniciar a página (apenas localmente))

- 📂**componentização**:

  - A pasta principal, dentro de frontend, é a pasta "src", onde estão os arquivos que inicializam o frontend.
  - A separação em pastas, foi feita com base nas necessidades de monitorar os elementos de "Dev" e "Nível", utilizando paginação diferente para melhor estruturação do frontend.

- 📂**CRUD**:

  - O CRUD, foi dividido em duas partes: adição e visualização.

    - Adição: encontrado nos arquivos "DevForm.jsx" e "NivelForm.jsx", são as páginas de adição de dados, onde são efetuadas as chamadas da api de POST;

    - Visualização: encontrado nos arquivos de "DevList.jsx" e "NivelList.jsx", são as páginas de visualização dos dados da api GET, juntamente com o PUT e DELETE, para alteração e remoção dos dados, respectivamente;

  - Foi utilizado a dependência "axios", para a chamada da rota de API fornecida pelo backend, utilizando hooks do react para versionamento das funcionalidades.

  - A utilização de confirmação de uso, foi idealizado o uso de Toasts do "react-toastify", onde há confirmação de entrada de dados (payloads), ao inserir as informações nos forms.
