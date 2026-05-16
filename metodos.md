# PASTAS CRIADAS
* BACKEND/ 
  - node_modules/ → as bibliotecas de verdade, salvas no seu computador.
  - package-lock.json → registro das versões exatas que foram instaladas.
  - package.json → lista do que o projeto precisa.
   

# HTTP
 GET -> "Me de essa informação"
 POST -> "SALVAR ESSA INFORMAÇÃO"
 PUT -> "ATUALIZAR ESSA INFORMAÇÃO"
 DELETE -> "APAGA ESSA INFORMAÇÃO"

 # NODE JS
Node.js é um programa que instala no seu computador e permite executar JavaScript fora do navegador, tornando possível usar JavaScript para criar servidores, acessar bancos de dados, ler arquivos e construir qualquer tipo de aplicação back-end.

# NPM
npm (Node Package Manager) é o gerenciador de pacotes do Node.js — um programa que instala, atualiza e gerencia as bibliotecas que seu projeto usa.

Quando você cria um sistema, você não escreve tudo do zero. Você usa bibliotecas prontas que outras pessoas fizeram — como o Express para criar servidores, o Prisma para banco de dados, o bcrypt para criptografar senhas.
O npm é quem baixa e organiza essas bibliotecas para você.

__npm init__ Cria um projeto novo — gera o package.json
__npm install__ Baixa todas as bibliotecas listadas no package.json
__npm install express__ Baixa uma biblioteca específica
__npm run dev__ Executa um script que você definiu no package.json

# BACKEND

Iniciando o projeto Node.js

__npm init -y (-y siginifica sim para tudo)__
Apos isso, sera criando um arquivo package.json, que é o arquivo de configuração do projeto, onde ficam listadas as dependências e os scripts.

__npm install express__
__Express__ é um framewor do Node.js, usado para criar servidores, APIs, sites e sistemas web. Ele facilita o desenvolvimento backend.

Cria uma pasta chamada "__packge-lock.json__" que é um arquivo de texto. Pequeno. Você pode abrir no Bloco de Notas e ler. Ele só registra quais versões exatas foram instaladas — como um recibo.
Não tem código, não tem biblioteca. É só informação.


1. Baixa o Express e tudo que ele precisa
2. Cria a pasta "__node_modules__", onde ficam as bibliotecas.
(essa pasta nunca é enviada para outras pessoas, porque ela é muito grande e pode ser baixada de novo usando o package.json, atraves do comando npm install).
3. Atualiza o package.json, adicionando o Express como dependência do projeto.


## PASTA BACKEND/SRC
 src/middleware
 src/routes
 src/utils

 src/server.js
 Aqui estou criando o servidor, usando o Express. Ele é o coração do backend, onde tudo começa.
 Apos criar o server.js, ao fazer o comando:
 __node src/server.js__
 O servidor inicia, e o EXPRESS esta ouvindo na porta especificada (3001),
 Não fechar o terminal, enquanto ele estivar aberto, o backend continua funcionando.
 Teste: 
 http://localhost:3001/