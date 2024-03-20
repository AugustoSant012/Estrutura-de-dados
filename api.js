//importando modulo core HTTP
const http = require('http')

let contador = 0
  //criando um servidor (backend - api) atraves do modulo http
//qualquer requisição que chegue, monta uma resposta e devolve
http.createServer((req, res) =>{
contador ++
console.log("contador de Requisiçoes:" + contador);

res.write(`você é o visitando numeoro: ${contador}`);
res.end()

  //construiondo a logica da api
//startando servidor(backend - api) para escutar comunicações 
//na poera 3000
}).listen(7777)