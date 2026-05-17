````md
# 🚀 BACKEND NODE.JS + EXPRESS + PRISMA — GUIA COMPLETO

# 📁 Estrutura do Projeto

```txt
BACKEND/
│
├── node_modules/
├── src/
│   ├── middleware/
│   ├── prisma/
│   ├── routes/
│   ├── utils/
│   └── server.js
│
├── .env
├── package.json
├── package-lock.json
```

# 📦 O que é cada pasta/arquivo

| Arquivo/Pasta | Função |
|---|---|
| node_modules | bibliotecas instaladas |
| package.json | configuração do projeto |
| package-lock.json | versões exatas instaladas |
| .env | variáveis sensíveis |
| src | código principal |
| middleware | validações/intermediários |
| routes | rotas da API |
| utils | funções auxiliares |
| prisma | schema e migrations |
| server.js | inicia o servidor |

# 🌐 HTTP — Métodos principais

| Método | Função |
|---|---|
| GET | buscar informação |
| POST | criar/salvar |
| PUT | atualizar |
| DELETE | deletar |

# 🟢 NODE.JS

Node.js permite executar JavaScript fora do navegador.

Com ele é possível:
- criar servidores
- acessar banco de dados
- criar APIs
- trabalhar com arquivos
- desenvolver backend

# 📦 NPM

npm (Node Package Manager) é o gerenciador de pacotes do Node.js.

Ele:
- instala bibliotecas
- atualiza dependências
- executa scripts

# ⚙️ COMANDOS PRINCIPAIS NPM

## Criar projeto Node.js

```bash
npm init -y
```

Cria o projeto e gera o `package.json`.

## Instalar todas as dependências

```bash
npm install
```

## Instalar Express

```bash
npm install express
```

## Rodar projeto

```bash
npm run dev
```

# 📄 package.json

Arquivo de configuração do projeto.

Nele ficam:
- dependências
- scripts
- configurações

# ⚙️ Scripts do package.json

```json
"scripts": {
  "dev": "nodemon src/server.js",
  "start": "node src/server.js"
}
```

| Script | Função |
|---|---|
| npm run dev | usa nodemon |
| npm start | roda normalmente |

# 📦 EXPRESS

```bash
npm install express
```

Express é um framework do Node.js usado para:
- APIs
- servidores
- backend web

# 📦 NODE_MODULES

Após instalar bibliotecas:

```bash
npm install express
```

o npm:
1. baixa bibliotecas
2. cria `node_modules`
3. atualiza `package.json`
4. atualiza `package-lock.json`

# 🔄 NODEMON

```bash
npm install nodemon --save-dev
```

Nodemon reinicia o servidor automaticamente ao salvar alterações.

`--save-dev` significa:
- dependência apenas de desenvolvimento

# 🌐 CORS

```bash
npm install cors
```

O navegador bloqueia comunicação entre portas diferentes.

Exemplo:
- frontend → localhost:5173
- backend → localhost:3001

O CORS libera essa comunicação.

# 🔐 DOTENV

```bash
npm install dotenv
```

O dotenv permite usar variáveis de ambiente.

Exemplo:

```env
PORT=3001
DATABASE_URL="mysql://root:123456@localhost:3306/prontuario_trans"
```

As variáveis ficam disponíveis em:

```js
process.env
```

# 🛠️ PRISMA

## Instalação

```bash
npm install @prisma/client
npm install prisma --save-dev
```

# 🔥 O que é Prisma?

Prisma é um ORM.

ORM é uma ferramenta que conecta:
- Node.js
- banco de dados

O Prisma transforma:
- models → tabelas
- campos → colunas
- relações → foreign keys

# 📁 Pasta Prisma

```txt
src/
 └── prisma/
      └── schema.prisma
```

# ⚙️ Inicializando Prisma

```bash
npx prisma init
```

Isso cria:

```txt
prisma/
 └── schema.prisma
```

# 📄 schema.prisma

Arquivo onde você define:
- tabelas
- campos
- relações
- tipos
- regras

# 🧱 Estrutura básica Prisma

```prisma
nomeCampo Tipo Modificadores
```

Exemplo:

```prisma
email String @unique
```

| Parte | Função |
|---|---|
| email | nome do campo |
| String | tipo |
| @unique | modificador |

# 🔥 MODIFICADORES PRISMA

## @id

Define chave primária.

```prisma
id String @id
```

## @default()

Define valor automático.

```prisma
@default(now())
```

Coloca data atual automaticamente.

```prisma
@default(uuid())
```

Gera UUID automaticamente.

```prisma
@default(autoincrement())
```

Gera IDs incrementais.

```prisma
@default(false)
```

Define false como padrão.

## @unique

Impede valores repetidos.

```prisma
email String @unique
```

## @@unique

Unique composto.

```prisma
@@unique([email, telefone])
```

## @updatedAt

Atualiza automaticamente a data da última edição.

```prisma
updatedAt DateTime @updatedAt
```

## @relation

Cria relacionamento entre tabelas.

```prisma
pacienteId String

paciente Paciente @relation(fields: [pacienteId], references: [id])
```

### Explicação

```prisma
fields: [pacienteId]
```

Usa o campo `pacienteId` desta tabela.

```prisma
references: [id]
```

Conecta com o `id` da tabela `Paciente`.

Isso faz o Prisma entender:
```txt
qual paciente pertence à consulta
```

## @db.Text

Transforma String em TEXT no banco.

Ideal para:
- observações
- prontuários
- textos grandes

```prisma
descricao String @db.Text
```

## @@index

Cria índices para melhorar buscas.

```prisma
@@index([nome])
```

## @@id

Cria chave primária composta.

```prisma
@@id([usuarioId, perfilId])
```

## @map

Muda o nome da coluna no banco.

```prisma
nomeSocial String @map("nome_social")
```

## @@map

Muda o nome da tabela no banco.

```prisma
@@map("pacientes")
```

## @ignore

Prisma ignora um campo.

## @@ignore

Prisma ignora o model inteiro.

## ?

Campo opcional.

```prisma
nome String?
```

## []

Representa lista/array.

```prisma
consultas Consulta[]
```

Isso significa:
```txt
um paciente pode ter várias consultas
```

# 🗄️ CONFIGURANDO MYSQL

## DATABASE_URL

Adicionar no `.env`:

```env
DATABASE_URL="mysql://root:123456@localhost:3306/prontuario_trans"
```

| Parte | Função |
|---|---|
| mysql:// | tipo do banco |
| root | usuário |
| 123456 | senha |
| localhost | servidor |
| 3306 | porta |
| prontuario_trans | banco |

# ⚙️ MIGRATIONS PRISMA

## Rodar migration

```bash
npx prisma migrate dev --name init
```

O Prisma:
1. lê o `schema.prisma`
2. gera SQL
3. cria tabelas
4. cria relações
5. cria foreign keys
6. gera Prisma Client

# 📁 Pasta migrations

Após rodar migration:

```txt
prisma/
 └── migrations/
```

Cada migration guarda alterações feitas no banco.

# 🗄️ MYSQL + PRISMA

O Prisma gera SQL automaticamente.

Exemplo Prisma:

```prisma
model Paciente {
  id String @id @default(uuid())
}
```

vira SQL:

```sql
CREATE TABLE paciente (
  id VARCHAR(191) PRIMARY KEY
)
```

# 🔥 PRISMA CLIENT

Após gerar:

```bash
npx prisma migrate dev --name init
```

o Prisma cria:

```txt
node_modules/@prisma/client
```

Agora é possível usar:

```js
const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()
```

# 🔍 CONSULTAS PRISMA

## Buscar dados

```js
await prisma.paciente.findMany()
```

Prisma gera:

```sql
SELECT * FROM paciente
```

## Criar dados

```js
await prisma.paciente.create({
  data: {
    nomeSocial: "Henrique"
  }
})
```

Prisma gera:

```sql
INSERT INTO paciente
```

## Atualizar dados

```js
await prisma.paciente.update()
```

Prisma gera:

```sql
UPDATE paciente
```

## Deletar dados

```js
await prisma.paciente.delete()
```

Prisma gera:

```sql
DELETE FROM paciente
```

# 🗄️ COMANDOS MYSQL

## Mostrar tabelas

```sql
SHOW TABLES;
```

## Ver estrutura da tabela

```sql
DESCRIBE consulta;
```

ou:

```sql
DESC consulta;
```

## Ver SQL completo da tabela

```sql
SHOW CREATE TABLE consulta;
```

# 🟢 SERVER.JS

Arquivo principal do backend.

Exemplo:

```js
require("dotenv").config()

const cors = require("cors")
const express = require("express")

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", function(req, res){
    res.send("Servidor funcionando")
})

const PORT = process.env.PORT || 3001

app.listen(PORT, function(){
    console.log("Servidor rodando na porta " + PORT)
})
```

# 🔥 Explicação server.js

## dotenv

```js
require("dotenv").config()
```

Carrega variáveis do `.env`.

## cors

```js
app.use(cors())
```

Libera comunicação entre frontend e backend.

## express.json

```js
app.use(express.json())
```

Transforma JSON recebido em objeto JavaScript.

## rota GET

```js
app.get("/", function(req, res){
```

Cria rota GET.

## req

```js
req
```

Contém dados enviados pelo cliente.

## res

```js
res
```

Resposta enviada ao cliente.

## app.listen

```js
app.listen(PORT)
```

Inicia servidor.

# 🚀 TESTAR BACKEND

Rodar:

```bash
npm run dev
```

ou:

```bash
node src/server.js
```

Abrir:

```txt
http://localhost:3001
```

Se aparecer a mensagem:
```txt
Servidor funcionando
```

o backend está funcionando corretamente.
````
