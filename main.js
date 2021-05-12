/*

//Criando variáveis
var nome = "Anne Karoline";
var idade = 28;
var frase = "Japão é o melhor time do mundo.";
var lista = ["maça", "pera", "laranja"]; 
var maioridade=18;
//var fruta = {nome="maça", cor: "vermelha"}

//Criando um pop-up
alert("Meu primeiro JS. Bem vindo " + nome);

//Mensagem exibida no console
console.log(nome);
console.log(idade);

//Trocando palavras de uma frase
console.log(frase.replace("Japão", "Brasil"));
alert(frase.replace("Japão", "Brasil"));

//Transformando minusculas em maiusculas
console.log("Frase Maiuscula: " + frase.toUpperCase());
alert("Frase Maiuscula: " + frase.toUpperCase());

//Transformando maisculas em minusculas
console.log("Frase Minuscula: " + frase.toLowerCase());
alert("Frase Minuscula: " + frase.toUpperCase())

//Exibindo um Array
console.log(lista);

//Adicionando item
lista.push("uva"); 
console.log(lista);

//Removendo item
lista.pop("uva"); 
console.log(lista);

//Exibir tamanho de um Array
console.log(lista.length);

//Mostrando de traz para frente
console.log(lista.reverse);

//Transformar Array em String
console.log(lista.toString());

//Retirar a virgula e colocar outro caractere
console.log(lista.join(" - "));
console.log(lista.join(" | "));

//exibindo um dicionario
//console.log(fruta);

//CONDICIONAIS
if(maioridade >= 18){
    alert("A idade do usuário é " + maioridade +". Maior de idade")
} else{
    alert("A idade do usuário é " + maioridade +". Menor de idade")
}

//Pedindo dado de entrada do usuário
var idadeUsuário=prompt("Qual sua idade: ");
if(idadeUsuário >= 18){
    alert("A idade do usuário é " + idadeUsuário +". Maior de idade")
} else{
    alert("A idade do usuário é " + idadeUsuário +". Menor de idade")
}

//LAÇO DE REPETIÇÃO
var count = 0;
while(count<5){
    console.log(count);
    count=count+1;
}


var count2;
for(count2=0; count<=5; count++){
    alert(count);
}

//datas
var d = new Date();
alert(d);
alert(d.getMonth());
alert(d.getDate());
alert(d.getHour());
alert(d.getMinutes());

//funções
function soma(n1, n2){
    return n1+n2;
}

//chamando uma função
alert(soma(5,10));

//alterando frase com funções
function setReplace(frase, nome, novo_nome){
    frase.setReplace(nome, novo_nome);
}
alert("Vai Japão", "Japão", "Brasil");

function validaIdade(idade){
    var validar;
    if (idade>=18){
        validar=true;
    }else{
        validar=false;
    }
    return validar;
}

var idade=prompt("Qual a sua idade: ");
console.log(validaridade(idade));
*/
function clicou(){
    //alert("Obrigada por clicar");
    document.getElementById("agradecimento").innerHTML="<b>Obrigada por clicar</b>";
    console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    window.open("https://www.google.com.br/");
    //ou
    window.location.href="https://www.google.com.br/";
}

function trocar(){
    document.getElementById("mousemove").innerHTML="Obrigado por passar o mouse";
    //alert("trocar texto");
}

function load(){
    alert("Página Carregada");
}