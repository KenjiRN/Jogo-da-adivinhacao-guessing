const randomNumber = Math.round(Math.random()*10)
//Atraves desta será definido a aleatoriedade de um número de 1 a 10

let xAttempts = 1
//Indica o número de tentativas




//=============================================================================================================================================

function handleTryClick(event){
    event.preventDefault()
//isso fará com que a tela não reinicie a cada clique, o que normalmente atualizaria a pagina

const inputNumber = document.querySelector("#inputNumber")
//declaracao de variável que vai pesquisar dentro do seletor indicado ao final
//se refere ao INPUT do formulario, ou seja vai PEGAR O NÚMERO DIGITADO

if(Number(inputNumber.value) == randomNumber){
//SE O NÚMERO DIGITADO FOR IGUAL AO NUMERO RANDOMICO FAÇA O SEGUINTE:

    document.querySelector(".screen1").classList.add("hide")
//ou seja se os números forem iguais vai dar HIDE na tela inicial
    document.querySelector(".screen2").classList.remove("hide")
//e em seguida vai desativar o Hide da tela 2

    document.querySelector(".screen2 h2").innerText = `acertou em ${xAttempts}`
//Aqui fará a selecao da tela 2 e do titulo h2 acrescentando a eles a seguinte frase
}
    inputNumber.value = ""
    //a cada tentativa a caixa onde se digita voltara a ficar sem nada

    xAttempts++
    //a cada tentativa(aperto do botao) se somará +1 
}
//função chave que definirá quando cada Layout aparecerá/sumirá








//EVENTOS=======================================================================================================================================
const btnTry = document.querySelector('#btnTry')
//variavel que associa a ID do primeiro botao

const btnReset = document.querySelector('#btnReset')
//variavel que associa a id do segundo botao.  

btnTry.addEventListener('click', handleTryClick)
//pega a variavel e adiciona um evento a ela, toda vez que eu clicar ativará a função


btnReset.addEventListener('click', function(){
    document.querySelector(".screen1").classList.remove("hide")     //OU SEJA SE CLCIAR PARA RESETAR VAI REMOVER O HIDE DA TELA 1 E ATIVAR O HIDE DA TELA 2
    document.querySelector(".screen2").classList.add("hide")
    xAttempts = 1
})