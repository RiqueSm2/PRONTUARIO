const express = require ("express")//Importa a biblioteca Express, o require busca dentro do node_modules

const app = express() //Cria o servidor, agora o 'app' é o servidor, tudo que eu quiser que ele faça eu configuro atraves dele

app.get("/", function(req, res){
    res.send("Servidor funcionando!")
}) //Cria uma rota, esta dizendo (Quando alguem fizer um get para /, responde com o texto (servidor funcionando))
 // o req é a requisição, contem tudo que o cliente enviou
 // o res é a resposta, é oque voce devolve para o cliente.


app.listen(3001, function(){
    console.log("Servidor rodando na porta 3001")
})
//Coloca o servidor na porta 3001. A função dentro so executa uma vez - quando o servidor sobe com sucesso.np