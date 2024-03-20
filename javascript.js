/*tipos de dados: 

String  = 'string' "string" `string` ${comando em javascript};
Number = números
Boolean = exemplo: sim ou não || verdadeiro ou falso
Object
{
    "chave": "valor,"
    chave: 1
}

undefined = indefinido
null -> ausênscia de valor
NaN= não é um número 
            TRATAMENTO DE DADOS


//string
let textoCompleto = "Olá, tudo bem?"
console.log(textoCompleto.toUpperCase());               //deixa o texto maiusculo
console.log(textoCompleto.toLowerCase());               //deixa o texto sem ser maiusculo
console.log(textoCompleto.replace("Tudo", "1234"));     //substitui uma string 

let numeroEmString = String(1.65)
console.log(numeroEmString)
console.log(typeof numeroEmString)

//number

let stringEmNumero = Number("1.56478")
console.log(stringEmNumero)
console.log(typeof stringEmNumero);

//number

/*let stringEmNumero = Number;parseFloat("1.15")
console.log(stringEmNumero)
console.log(Number.parseInt(1.15));
let testandoParseFloat = Number.parseFloat(20)
console.log(testandoParseFloat)

//ARRAY
let listaDeCarros = ["Gol", "Uno", "Corola", "Civic"]
console.log(listaDeCarros)

listaDeCarros.push("Lancer")  //adiciona um novo elemento a array
console.log(listaDeCarros)

listaDeCarros.pop()    //remove algum item da array
console.log(listaDeCarros)

//Objetct
let pessoa = {
    nome:"Augusto Santiago",
    idade: 21,
    curso: "ADS",
    matricula: 23114290183,
    instituição: "IESB",
    endereço:{
        cep:72225-556,
        cidade: "CEILONDRES",
        numero: 5
    }
}

console.log(pessoa)  //pega toodos os itens





console.log(pessoa.nome) //pega um atributo especial desejado

console.log(pessoa.endereço)  //pega um atributo especial desejado

//operadores logicos

! negação
&& E
|| Ou

*/
let idade =  23
/*
if(condição){
    ação
}

if (idade >= 18){
    console.log("Maior de idade")
} else{
    console.log("Menor de idade")
}

let curso = "Enfermagem"
idade = 20

if(curso =="ads" && idade >=18){
    console.log("Confirmado!")
} else{
    console.log("Negado!")
}
if(curso != "ads"){
    console.log("o curso não é ads")
}
if (curso == "ads"){
    console.log("curso é ads")

} if (idade>=18){
    console.log("maior de idade")
}else{
    console.log("nenhuma condição atendida")
}
*/

/*Repetição
for (iniciaçizacao; condicao; incremento){
    acao
}

for (let i = 0; i < 10; i++) {
    console.log("Contador:" , i)
    console.log("loop")
}
*
  //FUNÇÃO

  function executa(){
    console.log("Chamando função executa")
  }
  

  function executa(nome = "nome padrão"){
    console.log("Chamando função com parametro")
    console.log(nome)
  }
  executa("Augusto")


  
  //função com retorno
  function soma(numA, NumB){
    return numA + NumB
  }
 let resultado = soma(2,2)
 console.log(resultado)
 
 const multiplicar = function (numA, NumB){
    return numA + NumB
 }
 multiplicar(4,6)
*/
 const teste = () => console.log("teste")
 teste()
 const somaArrow =(numA, NumB) =>numA + NumB
 console.log("chamando somaArrow", somaArrow(2,5))
 